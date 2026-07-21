// ─── QA Regression Suite ───────────────────────────────────────────────────
// Golden-question assertions covering every bug from the QA report.
// The system is deterministic — same input, same route, zero flakiness.
// This suite is also the future AI-fallback evaluation baseline.

import { describe, it, expect } from 'vitest';
import { normalizeForIntent, normalizeForSearch, singularize } from '../normalize';
import { detectIntent } from '../intents';
import { searchContent, bestMatch } from '../search';
import { processMessage } from '../orchestrator';
import { LEAD_FLOW } from '../agents/conversionAgents';

const intentOf = (text) => detectIntent(text).intent;

describe('BUG-01 · normalization: plurals / case / punctuation', () => {
  it('singularizes domain vocabulary', () => {
    expect(singularize('services')).toBe('service');
    expect(singularize('industries')).toBe('industry');
    expect(singularize('branches')).toBe('branch');
    expect(singularize('offices')).toBe('office');
    expect(singularize('recoveries')).toBe('recovery');
    expect(singularize('banks')).toBe('bank');
    expect(singularize('nbfcs')).toBe('nbfc');
    expect(singularize('clients')).toBe('client');
    expect(singularize('loans')).toBe('loan');
    expect(singularize('sarfaesi')).toBe('sarfaesi'); // exception guard
    expect(singularize('address')).toBe('address');   // never touch ss/exceptions
  });

  it('plural queries reach the same intent as singular', () => {
    expect(intentOf('What is service')).toBe('service');
    expect(intentOf('What is services')).toBe('service');   // the reported bug
    expect(intentOf('What are services?')).toBe('service');
    expect(intentOf('services')).toBe('service');
    expect(intentOf('SERVICES')).toBe('service');
    expect(intentOf('services...')).toBe('service');
    expect(intentOf('what services do you provide')).toBe('service');
    expect(intentOf('what industries do you serve')).toBe('industry');
    expect(intentOf('NBFCs')).toBe('industry');
    expect(intentOf('case studies')).toBe('case-study');
  });

  it('strips stopword noise for search', () => {
    expect(normalizeForSearch('what is services')).toBe('service');
    expect(normalizeForSearch('tell me about your services')).toBe('service');
  });
});

describe('BUG-09 · synonyms', () => {
  it('maps HQ / headquarters / reach / mail / mobile', () => {
    expect(normalizeForIntent('HQ')).toContain('office');
    expect(normalizeForIntent('headquarters address')).toContain('office');
    expect(intentOf('how do I reach you')).toBe('contact');
    expect(intentOf('mail id')).toBe('contact');
    expect(intentOf('mobile number')).toBe('contact');
    expect(intentOf('head office')).toBe('contact');
  });
});

describe('BUG-typos · common misspellings resolve', () => {
  it.each([
    ['servce', 'service'],
    ['cntact', 'contact'],
    ['reocvery', 'service'],
    ['bankng', 'industry'],
    ['sarfeasi', 'service'],
    ['nbcf', 'industry'],
  ])('%s → %s intent', (input, expected) => {
    expect(intentOf(input)).toBe(expected);
  });
});

describe('BUG-02 · navigation: home never fuzzy-drifts', () => {
  it.each(['home', 'go home', 'take me home', 'go to homepage', 'open home page', 'main page'])(
    '"%s" navigates to /',
    (input) => {
      const res = processMessage(input, 'navigate');
      expect(res.action).toEqual({ type: 'navigate', href: '/' });
    }
  );

  it('typed "take me home" classifies as navigate and goes to /', () => {
    expect(intentOf('take me home')).toBe('navigate');
    const res = processMessage('take me home');
    expect(res.action?.href).toBe('/');
  });

  it('other alias destinations resolve correctly', () => {
    expect(processMessage('open contact', 'navigate').action.href).toBe('/contact');
    expect(processMessage('go to services', 'navigate').action.href).toBe('/services');
    expect(processMessage('open case studies', 'navigate').action.href).toBe('/insights/case-studies');
    expect(processMessage('go careers', 'navigate').action.href).toBe('/careers');
  });
});

describe('BUG-06 · intent ordering: city office queries reach coverage', () => {
  it('"offices in chennai" → coverage, not generic contact', () => {
    expect(intentOf('offices in chennai')).toBe('coverage');
    expect(intentOf('kerala branch')).toBe('coverage');
  });
  it('plain contact requests still reach contact', () => {
    expect(intentOf('contact')).toBe('contact');
    expect(intentOf('phone number')).toBe('contact');
    expect(intentOf('email')).toBe('contact');
  });
});

describe('BUG-13 · clients intent exists', () => {
  it('"which banks do you work with" → clients answer, not industry pitch', () => {
    expect(intentOf('which banks do you work with')).toBe('clients');
    const res = processMessage('which banks do you work with');
    expect(res.cards?.[0]?.href).toBe('/clients');
  });
});

describe('BUG-04 · chip labels the bot emits route correctly', () => {
  it('"Leave my details" starts the lead flow', () => {
    const res = processMessage('Leave my details');
    expect(res.flow?.id).toBe('lead');
  });
  it('welcome chips carry explicit intents', () => {
    const w = processMessage('', 'welcome');
    const chips = w.suggestions.map((s) => s.intent);
    expect(chips).toContain('service');
    expect(chips).toContain('lead');
  });
});

describe('BUG-08 · lead validation', () => {
  const phoneStep = LEAD_FLOW.steps.find((s) => s.key === 'phone');
  const emailStep = LEAD_FLOW.steps.find((s) => s.key === 'email');
  const companyStep = LEAD_FLOW.steps.find((s) => s.key === 'company');

  it('rejects garbage phone values', () => {
    expect(phoneStep.validate('+((((((((')).not.toBe(true);
    expect(phoneStep.validate('12345')).not.toBe(true);
    expect(phoneStep.validate('+- - - - -')).not.toBe(true);
  });
  it('accepts real phone formats', () => {
    expect(phoneStep.validate('+91 91769 54383')).toBe(true);
    expect(phoneStep.validate('044-4306 0206')).toBe(true);
  });
  it('validates email and company', () => {
    expect(emailStep.validate('x@y.in')).toBe(true);
    expect(emailStep.validate('not-an-email')).not.toBe(true);
    expect(companyStep.validate('12')).not.toBe(true);
    expect(companyStep.validate('HDFC Bank')).toBe(true);
  });
});

describe('Search quality: ranking, dedupe, no-result', () => {
  it('"services" ranks a service-tier doc first', () => {
    const top = searchContent('services', { limit: 1 })[0];
    expect(['service', 'faq']).toContain(top.doc.type);
  });
  it('"sarfaesi" ranks the service above the case study', () => {
    const results = searchContent('sarfaesi', { limit: 5 });
    const svcIdx = results.findIndex((r) => r.doc.type === 'service');
    const csIdx = results.findIndex((r) => r.doc.type === 'case-study');
    expect(svcIdx).toBeGreaterThanOrEqual(0);
    if (csIdx >= 0) expect(svcIdx).toBeLessThan(csIdx);
  });
  it('dedupe removes same-href duplicates', () => {
    const results = searchContent('sarfaesi enforcement', { limit: 6, dedupe: true });
    const hrefs = results.map((r) => r.doc.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
  it('gibberish yields the no-result protocol, never an invented answer', () => {
    const res = processMessage('xqzt blorp wibble');
    expect(res.cards ?? []).toHaveLength(0);
    expect(res.text.toLowerCase()).toContain("couldn't find");
  });
  it('FAQ verbatim question is a confident best match', () => {
    const top = bestMatch('How quickly can you onboard a new portfolio?');
    expect(top.doc.type).toBe('faq');
  });
});

describe('Edge cases', () => {
  it('emoji / numbers / symbols fall through safely', () => {
    // Emoji-only input normalizes to empty → welcome (menu re-shown) —
    // deliberately friendlier than a search miss.
    expect(intentOf('👍👍')).toBe('welcome');
    expect(intentOf('12345')).toBe('search');
    const res = processMessage('!!!???');
    expect(res.text).toBeTruthy();
  });
  it('empty input → welcome', () => {
    expect(intentOf('')).toBe('welcome');
    expect(intentOf('   ')).toBe('welcome');
  });
  it('very long input does not throw', () => {
    const long = 'services '.repeat(80);
    expect(() => processMessage(long)).not.toThrow();
  });
});
