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

// Suggestions carry an explicit intent wherever the label alone might not
// re-classify correctly — a chip the bot offered must always route to the
// agent the bot intended (QA BUG-04).
export const welcomeAgent = {
  id: 'welcome',
  handle() {
    return {
      text: `Welcome to SM Associates — enterprise recovery and risk management partner to banks, NBFCs and lenders since ${COMPANY.since}. How can I help you today?`,
      suggestions: [
        { label: 'Explore services', intent: 'service' },
        { label: 'Industries you serve', intent: 'industry' },
        { label: 'Where do you operate?', intent: 'coverage' },
        { label: 'Case studies', intent: 'case-study' },
        { label: 'Request a proposal', intent: 'lead' },
        { label: 'Contact the team', intent: 'contact' },
      ],
    };
  },
};

// Deterministic alias table FIRST — common destinations must never depend
// on fuzzy matching ("home" once fuzzy-drifted to Housing Finance, QA
// BUG-02). Only unrecognized destinations fall through to index search.
const NAV_ALIASES = [
  [/\b(home ?page|home|main page|landing page|start)\b/, '/', 'Home'],
  [/\babout\b/, '/about', 'About Us'],
  [/\bservice\b/, '/services', 'Services'],
  [/\b(industry|industrie|sector)\b/, '/industries', 'Industries'],
  [/\bclient\b/, '/clients', 'Clients'],
  [/\bcase (study|studie)\b/, '/insights/case-studies', 'Case Studies'],
  [/\b(capabilitie|capability|platform|workflow|recovery os)\b/, '/platform', 'Platform'],
  [/\b(resource|insight|blog)\b/, '/insights', 'Insights'],
  [/\b(coverage|office|branch)\b/, '/contact', 'Contact & Offices'],
  [/\bcontact\b/, '/contact', 'Contact'],
  [/\bcareer\b/, '/careers', 'Careers'],
];

export const navigationAgent = {
  id: 'navigate',
  handle(text, normalized) {
    const norm = normalized || text.toLowerCase();
    for (const [pattern, href, label] of NAV_ALIASES) {
      if (pattern.test(norm)) {
        return {
          text: `Taking you to ${label}.`,
          action: { type: 'navigate', href },
          suggestions: [{ label: 'Ask a question' }, { label: 'Contact the team', intent: 'contact' }],
        };
      }
    }
    const cleaned = text.replace(/\b(go to|go|take me( to)?|open|navigate( to)?|visit|back)\b/gi, '').trim();
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
      suggestions: [
        { label: 'Request a proposal', intent: 'lead' },
        { label: 'Book a consultation', intent: 'booking' },
        { label: 'Branch addresses', intent: 'coverage' },
      ],
    };
  },
};
