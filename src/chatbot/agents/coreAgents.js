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
const NAV_TEXT_RESPONSES = [
  [/\bcase (study|studie)\b/, 'Case Studies Overview\n\nSM Associates has executed 1,000+ enterprise recovery engagements across South India. Key documented outcomes include:\n\n• Accelerated SARFAESI Section 13(2) & Section 14 enforcement for nationalized banks\n• High-yield NPA portfolio resolution and debt recovery for leading NBFCs\n• Secured asset tracing & vehicle repossession with yard custody tracking\n• Fraud control, address mapping, and borrower tracing for credit card and fintech lenders'],
  [/\b(home ?page|home|main page|landing page|start)\b/, 'SM Associates — Enterprise Recovery Operations partner to top banks, NBFCs and financial institutions across South India since 2000.'],
  [/\babout\b/, 'About SM Associates\n\nEstablished in Y2K, SM Associates Risk Management Pvt. Ltd. operates 19 regional branch offices with 1,500+ trained professionals serving public sector banks, private banks, NBFCs, and ARCs across Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh, and Puducherry.'],
  [/\bservice\b/, 'SM Associates Service Divisions\n\n• Verification & Due Diligence (CPV, Residence, Business, Merchant & Document checks)\n• Collections & Recovery (Early Stage, Soft, Hard & Field Collections)\n• Legal Enforcement & SARFAESI Support (Sec 13/14 assistance & litigation tracking)\n• Asset Recovery & Repossession (Automobile tracing, yard custody & e-auctions)\n• Borrower Tracing & Fraud Control (Debtor tracing & forensic audits)\n• Operational Analytics & Portfolio Management (Recovery scoring & dialer call centers)'],
  [/\b(industry|industrie|sector)\b/, 'Industries We Serve\n\nWe provide specialized recovery operations for Commercial Banks, NBFCs, Housing Finance Companies, Microfinance Institutions, FinTech Lenders, ARCs, and Corporate Lenders.'],
  [/\bclient\b/, 'Client Empanelment\n\nSM Associates is empanelled with over 45 leading financial institutions including top nationalized banks, private banks, NBFCs, and fintech lenders across South India.'],
  [/\b(capabilitie|capability|platform|workflow|recovery os)\b/, 'Operational Capabilities & Technology Platform\n\nOur operations run on a central technology platform providing geotagged field tracking, automated escalation workflows, daily audio recording audits, and real-time portfolio dashboards.'],
  [/\b(coverage|office|branch)\b/, 'Regional Branch Network\n\nWe operate 19 regional branch offices covering Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh, and Puducherry, with head office in Kotturpuram, Chennai.'],
  [/\bcontact\b/, 'Contact Information\n\n• Corporate Helpline: 044-24350020\n• HR Desk: +91 98408 22234\n• Email: info@smassociates.in\n• Address: Kotturpuram, Chennai (Mon-Sat, 9:30 AM - 6:30 PM IST)'],
  [/\bcareer\b/, 'Careers at SM Associates\n\nWe regularly recruit DRA-certified field officers, verification executives, tele-calling specialists, and regional operations managers across South India.'],
];

export const navigationAgent = {
  id: 'navigate',
  handle(text, normalized) {
    const norm = normalized || text.toLowerCase();
    for (const [pattern, textReply] of NAV_TEXT_RESPONSES) {
      if (pattern.test(norm)) {
        return {
          text: textReply,
          suggestions: [{ label: 'Explore services', intent: 'service' }, { label: 'Contact the team', intent: 'contact' }],
        };
      }
    }
    const cleaned = text.replace(/\b(go to|go|take me( to)?|open|navigate( to)?|visit|back)\b/gi, '').trim();
    const match = bestMatch(cleaned || text);
    if (match?.doc?.summary) {
      return {
        text: match.doc.summary,
        suggestions: [{ label: 'Explore services', intent: 'service' }, { label: 'Contact the team', intent: 'contact' }],
      };
    }
    return {
      text: "SM Associates provides end-to-end enterprise recovery, verification, legal enforcement and asset recovery operations. What specific information can I answer for you?",
      suggestions: [{ label: 'Explore services', intent: 'service' }, { label: 'Case studies', intent: 'case-study' }, { label: 'Contact the team', intent: 'contact' }],
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
