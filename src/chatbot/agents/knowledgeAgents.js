// ─── Knowledge Agents: Search · Service · Industry · Coverage · CaseStudy ──
// Every answer here is assembled from the live content index — never from
// strings authored in this file. If nothing matches confidently, the agent
// says so and offers the human path. It never invents an answer.
//
// Suggestions carry explicit intents so a chip the bot offers always routes
// to the agent the bot intended (QA BUG-04).

import { searchContent, bestMatch } from '../search';

const NO_RESULT = () => ({
  text: "I couldn't find that in our website content — and I'd rather connect you to the team than guess.",
  suggestions: [
    { label: 'Contact the team', intent: 'contact' },
    { label: 'Request a proposal', intent: 'lead' },
    { label: 'Show me what you can answer', intent: 'welcome' },
  ],
});

function toCards(results, cta = 'Read more') {
  return results.map((r) => ({
    title: r.doc.title,
    summary: r.doc.summary,
    href: r.doc.href,
    type: r.doc.type,
    cta,
  }));
}

// General website search — also serves as the FAQ agent (FAQ entries live in
// the same index) and the fallback for anything unclassified.
export const searchAgent = {
  id: 'search',
  handle(text) {
    const top = bestMatch(text);
    if (top?.confident) {
      // For service/capability items, return pure text answer without individual sub-service cards
      const isServiceItem = top.doc.type === 'service' || top.doc.type === 'capability';
      return {
        text: top.doc.summary,
        cards: isServiceItem ? [] : [{ title: top.doc.title, summary: '', href: top.doc.href, type: top.doc.type, cta: 'Read more' }],
        suggestions: top.alternatives.slice(0, 2).map((a) => ({ label: a.doc.title })),
      };
    }
    const results = searchContent(text, { limit: 4, dedupe: true });
    if (!results.length) return NO_RESULT();

    // Filter out sub-service cards
    const nonServiceResults = results.filter((r) => r.doc.type !== 'service' && r.doc.type !== 'capability');

    return {
      text: results[0]?.doc?.summary || 'Here is what I found in our knowledge base:',
      cards: toCards(nonServiceResults),
      suggestions: [{ label: 'Contact the team', intent: 'contact' }],
    };
  },
};

export const serviceDiscoveryAgent = {
  id: 'service',
  handle(text) {
    const results = searchContent(text, { types: ['service', 'capability'], limit: 4, dedupe: true });
    if (!results.length || text.toLowerCase().includes('show me your services') || text.toLowerCase().includes('all services') || text.toLowerCase().includes('service')) {
      return {
        text: 'SM Associates delivers end-to-end recovery operations across six core business divisions:\n\n• Verification & Due Diligence (CPV, Residence, Business, Merchant & Document audits)\n• Collections & Recovery (Pre-delinquency, Soft, Hard & Field Collections)\n• Legal Recovery & Enforcement (SARFAESI Sec 13/14 support, 138 notices, Litigation)\n• Asset Recovery & Realisation (Vehicle Repossession, Asset Tracing & E-Auctions)\n• Investigation & Fraud Control (Skip Tracing, Address Mapping & Audits)\n• Operational Excellence & Analytics (Call Center dialers, Manpower & Scoring)',
        suggestions: [{ label: 'SARFAESI support', intent: 'service' }, { label: 'Field collections', intent: 'service' }, { label: 'Verification services', intent: 'service' }],
      };
    }
    const [top] = results;
    return {
      text: top.doc.summary,
      suggestions: [
        { label: 'Request a proposal', intent: 'lead' },
        { label: 'Case studies', intent: 'case-study' },
        { label: 'Industries you serve', intent: 'industry' },
      ],
    };
  },
};

export const industryAgent = {
  id: 'industry',
  handle(text) {
    const lower = (text || '').toLowerCase();
    const isGeneralQuery = lower.includes('work with') || lower.includes('what') || lower.includes('which') || lower.includes('all') || lower.includes('list');
    const results = searchContent(text, { types: ['industry'], limit: 3, dedupe: true });

    if (!results.length || isGeneralQuery) {
      return {
        text: 'Industries We Serve\n\nSM Associates delivers specialized recovery, verification, and risk management operations tailored to 8 key financial sectors:\n\n• Commercial Banking (Public & Private Sector Banks)\n• Non-Banking Financial Companies (NBFCs)\n• Housing Finance Companies (HFCs & SARFAESI enforcement)\n• Microfinance Institutions (MFI & Rural Credit)\n• FinTech Lenders (Digital loans & instant verifications)\n• Asset Reconstruction Companies (ARCs & Stressed Corporate Assets)\n• Commercial & Corporate Lending\n• Vehicle & Gold Loan Finance',
        suggestions: [{ label: 'Banking', intent: 'industry' }, { label: 'NBFC', intent: 'industry' }, { label: 'Fintech', intent: 'industry' }],
      };
    }

    const [top] = results;
    return {
      text: top.doc.summary,
      suggestions: [
        { label: 'Request a proposal', intent: 'lead' },
        { label: 'Case studies', intent: 'case-study' },
      ],
    };
  },
};

export const coverageAgent = {
  id: 'coverage',
  handle(text) {
    const results = searchContent(text, { types: ['coverage', 'office', 'metric'], limit: 4 });
    if (!results.length) {
      return {
        text: 'We operate a 19-branch network across Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh and Puducherry, headquartered in Chennai.',
        cards: [{ title: 'Office Directory', summary: 'Every branch with full addresses and maps.', href: '/contact', cta: 'View offices' }],
        suggestions: [{ label: 'Chennai offices', intent: 'coverage' }, { label: 'Contact the team', intent: 'contact' }],
      };
    }
    return {
      text: results[0].doc.summary,
      cards: toCards(results.slice(1, 3), 'Details'),
      suggestions: [
        { label: 'Office directory', intent: 'contact' },
        { label: 'Request a proposal', intent: 'lead' },
      ],
    };
  },
};

export const caseStudyAgent = {
  id: 'case-study',
  handle(text) {
    const results = searchContent(text, { types: ['case-study'], limit: 3 });
    if (!results.length) {
      return {
        text: 'Our case studies cover SARFAESI enforcement, custody operations, NPA management, field collections, fraud control and credit card collections.',
        cards: [{ title: 'Case Studies', summary: 'Real engagements, documented outcomes.', href: '/insights/case-studies', cta: 'Browse case studies' }],
        suggestions: [{ label: 'SARFAESI case study', intent: 'case-study' }, { label: 'Collections case study', intent: 'case-study' }],
      };
    }
    return {
      text: `Relevant engagement: ${results[0].doc.summary}`,
      cards: toCards(results, 'Read case study'),
      suggestions: [
        { label: 'Request a proposal', intent: 'lead' },
        { label: 'Book a consultation', intent: 'booking' },
      ],
    };
  },
};

// Client roster questions ("which banks do you work with") — previously
// mis-routed to the Banking industry pitch (QA BUG-13).
export const clientsAgent = {
  id: 'clients',
  handle() {
    return {
      text: 'We work with 45+ banking, NBFC, housing finance and fintech institutions — including leading private and public sector banks. The full permission-cleared roster is on our Clients page.',
      cards: [{ title: 'Our Clients', summary: 'Banks, NBFCs and fintechs that trust our execution.', href: '/clients', cta: 'View clients' }],
      suggestions: [
        { label: 'Case studies', intent: 'case-study' },
        { label: 'Request a proposal', intent: 'lead' },
      ],
    };
  },
};

export const aboutAgent = {
  id: 'about',
  handle(text) {
    const results = searchContent(text, { limit: 3, dedupe: true });
    const aboutCard = { title: 'About SM Associates', summary: '25+ years, 19 branches, leadership and governance.', href: '/about', cta: 'About us' };
    if (!results.length) {
      return {
        text: 'SM Associates Risk Management Pvt. Ltd. — established 2000, headquartered in Chennai, serving banks, NBFCs and lenders across South India.',
        cards: [aboutCard],
        suggestions: [{ label: 'Leadership', intent: 'about' }, { label: 'Where do you operate?', intent: 'coverage' }],
      };
    }
    return {
      text: results[0].doc.summary,
      suggestions: [
        { label: 'Explore services', intent: 'service' },
        { label: 'Contact the team', intent: 'contact' },
      ],
    };
  },
};

export const capabilityAgent = {
  id: 'capability',
  handle() {
    return {
      text: 'SM Associates Operational Capabilities\n\nWe provide end-to-end recovery operations across South India with six core operational pillars:\n\n• Pre-Disbursal Verification & Due Diligence (CPV checks, residence & business site audits, document verification)\n• Ground Collections & Field Operations (Geotagged field outreach across Early, Soft, Hard & NPA buckets)\n• Legal Enforcement & SARFAESI Support (Section 13(2) notices, Section 14 magistrate filing & possession assist)\n• Asset Recovery & Repossession (Automobile tracing, secured asset custody, yard management & e-auctions)\n• Skip Tracing & Fraud Control (Debtor location mapping, address audits & forensic investigation)\n• Operational Analytics & Portfolio Management (Delinquency scoring, dialer call centers & NPA resolution)',
      suggestions: [
        { label: 'SARFAESI support', intent: 'service' },
        { label: 'Field collections', intent: 'service' },
        { label: 'Request a proposal', intent: 'lead' },
      ],
    };
  },
};
