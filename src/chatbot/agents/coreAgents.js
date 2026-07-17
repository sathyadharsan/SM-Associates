// ─── Core Agents: Welcome · Navigation · Contact ───────────────────────────
// Response contract every agent returns:
// {
//   text:        main reply (plain text, may contain \n)
//   cards?:      [{ title, summary, href, cta? }]  — rendered as tappable cards
//   suggestions?:[string]                          — next-question chips
//   action?:     { type: 'navigate', href }        — router side-effect
//   flow?:       { id: 'lead' | 'feedback' }       — starts a guided flow
// }

import { searchContent, bestMatch } from '../search';
import { COMPANY_FACTS } from '../contentIndex';

const { COMPANY, PRIMARY_CONTACT } = COMPANY_FACTS;

export const welcomeAgent = {
  id: 'welcome',
  handle() {
    return {
      text: `Welcome to SM Associates — enterprise recovery and risk management partner to banks, NBFCs and lenders since ${COMPANY.since}. How can I help you today?`,
      suggestions: [
        'Explore services',
        'Industries you serve',
        'Where do you operate?',
        'Case studies',
        'Request a proposal',
        'Contact the team',
      ],
    };
  },
};

// Maps spoken destinations to routes via the content index (page docs carry
// their own routes) — falls back to fuzzy search so "take me to sarfaesi"
// resolves to the SARFAESI service page without a hardcoded route table.
export const navigationAgent = {
  id: 'navigate',
  handle(text) {
    const cleaned = text.replace(/\b(go to|take me( to)?|open|show me( the)?|navigate( to)?|visit)\b/gi, '').trim();
    const match = bestMatch(cleaned || text, { types: ['page', 'service', 'industry', 'resource'] });
    if (match) {
      return {
        text: `Taking you to ${match.doc.title}.`,
        action: { type: 'navigate', href: match.doc.href },
        suggestions: ['Ask a question', 'Contact the team'],
      };
    }
    const results = searchContent(text, { limit: 3 });
    if (results.length) {
      return {
        text: 'I found a few likely destinations — pick one:',
        cards: results.map((r) => ({ title: r.doc.title, summary: r.doc.summary, href: r.doc.href, cta: 'Open page' })),
      };
    }
    return {
      text: "I couldn't find that page. You can explore Services, Industries, Case Studies or Contact — or ask me a question in your own words.",
      suggestions: ['Explore services', 'Case studies', 'Contact the team'],
    };
  },
};

export const contactAgent = {
  id: 'contact',
  handle() {
    return {
      text:
        `Here's how to reach us:\n` +
        `• Corporate landline: ${PRIMARY_CONTACT.landline}\n` +
        `• HR & careers desk: ${PRIMARY_CONTACT.hrHelpdesk}\n` +
        `• Email: ${PRIMARY_CONTACT.corporateEmail}\n` +
        `• Business hours: Mon–Sat, 9:30 AM – 6:30 PM IST\n` +
        `Head office: Kotturpuram, Chennai — with ${COMPANY.branchCount} branches across ${COMPANY.statesCovered.join(', ')}.`,
      cards: [{ title: 'Contact & Office Directory', summary: 'All offices, maps and the enquiry form.', href: '/contact', cta: 'Open contact page' }],
      suggestions: ['Request a proposal', 'Book a consultation', 'Branch addresses'],
    };
  },
};
