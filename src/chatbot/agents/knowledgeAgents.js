// ─── Knowledge Agents: Search · Service · Industry · Coverage · CaseStudy ──
// Every answer here is assembled from the live content index — never from
// strings authored in this file. If nothing matches confidently, the agent
// says so and offers the human path. It never invents an answer.

import { searchContent, bestMatch } from '../search';

const NO_RESULT = {
  text: "I couldn't find that in our website content — and I'd rather connect you to the team than guess.",
  suggestions: ['Contact the team', 'Request a proposal', 'Ask a different question'],
};

function toCards(results, cta = 'Read more') {
  return results.map((r) => ({
    title: r.doc.title,
    summary: r.doc.summary,
    href: r.doc.href,
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
        cards: [{ title: top.doc.title, summary: '', href: top.doc.href, cta: 'Read more' }],
        suggestions: top.alternatives.slice(0, 2).map((a) => a.doc.title),
      };
    }
    const results = searchContent(text, { limit: 4 });
    if (!results.length) return { ...NO_RESULT };
    return {
      text: 'Here is what I found on our site — pick the closest match:',
      cards: toCards(results),
      suggestions: ['Contact the team'],
    };
  },
};

export const serviceDiscoveryAgent = {
  id: 'service',
  handle(text) {
    const results = searchContent(text, { types: ['service', 'capability'], limit: 4 });
    if (!results.length) {
      return {
        text: 'We operate six business divisions — Verification, Collections, Recovery Operations, SARFAESI Support, Asset Recovery and Investigation.',
        cards: [{ title: 'All Services', summary: 'Explore every service line in detail.', href: '/services', cta: 'Explore services' }],
        suggestions: ['SARFAESI support', 'Field collections', 'Verification services'],
      };
    }
    const [top, ...rest] = results;
    return {
      text: top.doc.summary,
      cards: toCards([top, ...rest.slice(0, 2)], 'View service'),
      suggestions: ['Request a proposal', 'Case studies', 'Which industries do you serve?'],
    };
  },
};

export const industryAgent = {
  id: 'industry',
  handle(text) {
    const results = searchContent(text, { types: ['industry'], limit: 3 });
    if (!results.length) {
      return {
        text: 'We serve regulated lenders across Banking, NBFC, Housing Finance, Microfinance, Fintech, ARCs, Insurance and Commercial Lending.',
        cards: [{ title: 'Industries We Serve', summary: 'Sector-specific recovery capabilities.', href: '/industries', cta: 'Explore industries' }],
        suggestions: ['Banking', 'NBFC', 'Fintech'],
      };
    }
    return {
      text: results[0].doc.summary,
      cards: toCards(results, 'View industry page'),
      suggestions: ['Relevant case studies', 'Request a proposal'],
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
        suggestions: ['Chennai offices', 'Contact the team'],
      };
    }
    return {
      text: results[0].doc.summary,
      cards: toCards(results.slice(1, 3), 'Details'),
      suggestions: ['Office directory', 'Request a proposal'],
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
        suggestions: ['SARFAESI case study', 'Collections case study'],
      };
    }
    return {
      text: `Relevant engagement: ${results[0].doc.summary}`,
      cards: toCards(results, 'Read case study'),
      suggestions: ['Request a proposal', 'Book a consultation'],
    };
  },
};

export const aboutAgent = {
  id: 'about',
  handle(text) {
    const results = searchContent(text, { limit: 3 });
    const aboutCard = { title: 'About SM Associates', summary: '25+ years, 19 branches, leadership and governance.', href: '/about', cta: 'About us' };
    if (!results.length) {
      return {
        text: 'SM Associates Risk Management Pvt. Ltd. — established 2000, headquartered in Chennai, serving banks, NBFCs and lenders across South India.',
        cards: [aboutCard],
        suggestions: ['Leadership', 'Where do you operate?'],
      };
    }
    return {
      text: results[0].doc.summary,
      cards: [aboutCard, ...toCards(results.slice(1, 2))],
      suggestions: ['Explore services', 'Contact the team'],
    };
  },
};
