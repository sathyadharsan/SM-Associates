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
      return {
        text: top.doc.summary,
        cards: [{ title: top.doc.title, summary: '', href: top.doc.href, type: top.doc.type, cta: 'Read more' }],
        suggestions: top.alternatives.slice(0, 2).map((a) => ({ label: a.doc.title })),
      };
    }
    const results = searchContent(text, { limit: 4, dedupe: true });
    if (!results.length) return NO_RESULT();
    return {
      text: 'Here is what I found on our site — pick the closest match:',
      cards: toCards(results),
      suggestions: [{ label: 'Contact the team', intent: 'contact' }],
    };
  },
};

export const serviceDiscoveryAgent = {
  id: 'service',
  handle(text) {
    const results = searchContent(text, { types: ['service', 'capability'], limit: 4, dedupe: true });
    if (!results.length) {
      return {
        text: 'We operate six business divisions — Verification, Collections, Recovery Operations, SARFAESI Support, Asset Recovery and Investigation.',
        cards: [{ title: 'All Services', summary: 'Explore every service line in detail.', href: '/services', cta: 'Explore services' }],
        suggestions: [{ label: 'SARFAESI support', intent: 'service' }, { label: 'Field collections', intent: 'service' }, { label: 'Verification services', intent: 'service' }],
      };
    }
    const [top, ...rest] = results;
    return {
      text: top.doc.summary,
      cards: toCards([top, ...rest.slice(0, 2)], 'View service'),
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
    const results = searchContent(text, { types: ['industry'], limit: 3, dedupe: true });
    if (!results.length) {
      return {
        text: 'We serve regulated lenders across Banking, NBFC, Housing Finance, Microfinance, Fintech, ARCs, Insurance and Commercial Lending.',
        cards: [{ title: 'Industries We Serve', summary: 'Sector-specific recovery capabilities.', href: '/industries', cta: 'Explore industries' }],
        suggestions: [{ label: 'Banking', intent: 'industry' }, { label: 'NBFC', intent: 'industry' }, { label: 'Fintech', intent: 'industry' }],
      };
    }
    return {
      text: results[0].doc.summary,
      cards: toCards(results, 'View industry page'),
      suggestions: [
        { label: 'Relevant case studies', intent: 'case-study' },
        { label: 'Request a proposal', intent: 'lead' },
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
      cards: [aboutCard, ...toCards(results.slice(1, 2))],
      suggestions: [
        { label: 'Explore services', intent: 'service' },
        { label: 'Contact the team', intent: 'contact' },
      ],
    };
  },
};
