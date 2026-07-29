// ─── Website Content Index ──────────────────────────────────────────────────
// THE single source of truth for every chatbot answer.
//
// Nothing here is authored content. This module imports the SAME data
// modules the website pages render from and flattens them into one
// in-memory searchable index at first use. Edit a service description,
// a case study, an office address or a FAQ anywhere on the site and the
// chatbot's answers update automatically — there is no second copy to
// maintain, ever.
//
// Document shape:
// {
//   id:        stable unique id
//   type:      'page' | 'service' | 'industry' | 'faq' | 'case-study' |
//              'capability' | 'coverage' | 'office' | 'contact' | 'metric'
//   title:     display title
//   summary:   1-2 sentence business summary (from site content)
//   body:      extra searchable text (never displayed raw)
//   href:      site route for "Read more"
//   keywords:  extra match terms
// }

import { seoMeta } from '../data/seoMeta';
import {
  flagshipFaqs,
  servicesOverview,
  industriesOverview,
  capabilityNodes,
  metrics,
  operatingModelStages,
} from '../data/flagshipHomeData';
import { caseStudies } from '../data/caseStudies';
import { COMPANY, PRIMARY_CONTACT, officeGroups } from '../data/contactOfficesData';
import { pagesContent } from '../data/pagesContent';

let cachedIndex = null;

function pageDocs() {
  // Every public route's SEO title + description doubles as its search
  // summary — the same strings Google sees, so answers match the site voice.
  // The homepage gets an explicit doc with navigation-alias keywords so
  // "home"/"homepage" can NEVER fuzzy-drift to e.g. Housing Finance (QA BUG-02).
  const home = {
    id: 'page:/',
    type: 'page',
    title: 'Home',
    summary: seoMeta['/'].description,
    body: '',
    href: '/',
    keywords: 'home homepage main page landing page start',
  };
  return [home, ...Object.entries(seoMeta)
    .filter(([path, meta]) => !meta.noindex && path !== '/')
    .map(([path, meta]) => ({
      id: `page:${path}`,
      type: path.startsWith('/services/') ? 'service'
        : path.startsWith('/industries/') ? 'industry'
        : path.startsWith('/insights') ? 'resource'
        : 'page',
      title: meta.title.split('|')[0].trim(),
      summary: meta.description,
      body: '',
      href: path,
      keywords: path.split('/').filter(Boolean).join(' ').replace(/-/g, ' '),
    }))];
}

function faqDocs() {
  return flagshipFaqs.map((f, i) => ({
    id: `faq:${i}`,
    type: 'faq',
    title: f.q,
    summary: f.a,
    body: '',
    href: '/#faq',
    keywords: 'faq question answer',
  }));
}

function serviceOverviewDocs() {
  return servicesOverview.map((s) => ({
    id: `svc:${s.name}`,
    type: 'service',
    title: s.name,
    summary: s.desc,
    body: '',
    href: s.href,
    keywords: 'service division offering',
  }));
}

function industryDocs() {
  return industriesOverview.map((ind) => ({
    id: `ind:${ind.name}`,
    type: 'industry',
    title: ind.name,
    summary: `Recovery, verification and collections capabilities purpose-built for ${ind.name} institutions.`,
    body: '',
    href: ind.href,
    keywords: 'industry sector lender institution',
  }));
}

function capabilityDocs() {
  return capabilityNodes.map((c) => ({
    id: `cap:${c.title}`,
    type: 'capability',
    title: c.title,
    summary: c.desc,
    body: [...(c.list || []), ...(c.stats || []).map((s) => `${s.v} ${s.k}`)].join('. '),
    href: '/services',
    keywords: `capability ${c.tag?.toLowerCase() || ''}`,
  }));
}

function operatingModelDocs() {
  return operatingModelStages.map((st) => ({
    id: `model:${st.no}`,
    type: 'capability',
    title: `Operating Model · ${st.title}`,
    summary: st.desc,
    body: (st.tags || []).join(' '),
    href: '/#model',
    keywords: 'process operating model how it works workflow',
  }));
}

function caseStudyDocs() {
  return caseStudies.map((cs) => ({
    id: cs.id,
    type: 'case-study',
    title: cs.title,
    summary: cs.challenge,
    body: [cs.subtitle, ...(cs.approach || []), cs.portfolioType, cs.geographyCovered].join('. '),
    href: '/insights/case-studies',
    keywords: `case study proof outcome ${cs.serviceLabel} ${cs.industry}`,
  }));
}

function coverageDocs() {
  // officeGroups shape: [{ state, cities: [{ city, offices: [{code,name,address,landmark?}] }] }]
  const stateDocs = officeGroups.map((group) => {
    const cityNames = group.cities.map((c) => c.city).join(', ');
    return {
      id: `coverage:${group.state}`,
      type: 'coverage',
      title: `Coverage — ${group.state}`,
      summary: `SM Associates operates in ${group.state} through offices in ${cityNames}, part of a ${COMPANY.branchCount}-branch network across ${COMPANY.statesCovered.join(', ')}.`,
      body: cityNames,
      href: '/contact',
      keywords: `coverage presence location state ${group.state.toLowerCase()} ${cityNames.toLowerCase()}`,
    };
  });

  const officeDocs = officeGroups.flatMap((group) =>
    group.cities.flatMap((cityEntry) =>
      (cityEntry.offices || []).map((office) => ({
        id: `office:${office.code}`,
        type: 'office',
        title: `${office.name} (${office.code})`,
        summary: office.address,
        body: office.landmark || '',
        href: '/contact',
        keywords: `office branch address ${cityEntry.city} ${group.state}`.toLowerCase(),
      }))
    )
  );

  return [...stateDocs, ...officeDocs];
}

function contactDocs() {
  return [
    {
      id: 'contact:primary',
      type: 'contact',
      title: 'Contact SM Associates',
      summary: `Corporate landline ${PRIMARY_CONTACT.landline} · HR desk ${PRIMARY_CONTACT.hrHelpdesk} · Email ${PRIMARY_CONTACT.corporateEmail}. Business hours: Mon–Sat, 9:30 AM – 6:30 PM IST.`,
      body: `${PRIMARY_CONTACT.headOfficeEmail} phone email call reach`,
      href: '/contact',
      keywords: 'contact phone email call reach address working hours timings',
    },
  ];
}

function metricDocs() {
  return metrics.map((m) => ({
    id: `metric:${m.idx}`,
    type: 'metric',
    title: m.label,
    summary: `${m.prefix || ''}${m.value}${m.suffix || ''} — ${m.desc}`,
    body: '',
    href: '/#metrics',
    keywords: 'scale numbers metric how many years branches staff states',
  }));
}

function pagesContentDocs() {
  const docs = [];
  if (!pagesContent) return docs;

  Object.entries(pagesContent).forEach(([slug, content]) => {
    if (!content) return;
    const title = content.title || slug.replace(/-/g, ' ').toUpperCase();
    const overviewText = content.overview?.summary || content.description || content.subtitle || content.eyebrow || '';

    let capabilitiesText = '';
    if (Array.isArray(content.capabilities) && content.capabilities.length > 0) {
      const caps = content.capabilities
        .slice(0, 4)
        .map((c) => (typeof c === 'string' ? `• ${c}` : `• ${c.title}${c.desc ? `: ${c.desc}` : ''}`))
        .join('\n');
      capabilitiesText = `\n\n⚡ How SM Associates Executes This Service:\n${caps}`;
    }

    const richSummary = `${title}\n\n📌 What it is:\n${overviewText}${capabilitiesText}`;

    const bodyParts = [title, overviewText];

    if (Array.isArray(content.capabilities)) {
      content.capabilities.forEach((cap) => {
        if (cap.title) bodyParts.push(`${cap.title}: ${cap.desc || ''}`);
        if (Array.isArray(cap.bullets)) bodyParts.push(cap.bullets.join('. '));
      });
    }

    if (content.overview?.useCases && Array.isArray(content.overview.useCases)) {
      content.overview.useCases.forEach((uc) => {
        if (uc.title) bodyParts.push(`${uc.title}: ${uc.desc || ''}`);
      });
    }

    docs.push({
      id: `pages-svc:${slug}`,
      type: 'service',
      title,
      summary: richSummary,
      body: bodyParts.join('. '),
      href: '/services',
      keywords: `service ${slug.replace(/-/g, ' ')} ${content.eyebrow || ''} ${content.subtitle || ''} recovery legal enforcement verification asset repo skip tracing sarfaesi`,
    });
  });

  return docs;
}

function pagesContentFaqDocs() {
  const faqDocsList = [];
  if (!pagesContent) return faqDocsList;

  Object.entries(pagesContent).forEach(([slug, content]) => {
    if (content && Array.isArray(content.faqs)) {
      content.faqs.forEach((f, idx) => {
        if (f.q && f.a) {
          faqDocsList.push({
            id: `pages-faq:${slug}:${idx}`,
            type: 'faq',
            title: f.q,
            summary: f.a,
            body: content.title || '',
            href: '/services',
            keywords: `faq ${slug.replace(/-/g, ' ')} question answer`,
          });
        }
      });
    }
  });

  return faqDocsList;
}

/** Build (once) and return the full in-memory content index. */
export function getContentIndex() {
  if (cachedIndex) return cachedIndex;
  cachedIndex = [
    ...pageDocs(),
    ...faqDocs(),
    ...pagesContentFaqDocs(),
    ...pagesContentDocs(),
    ...serviceOverviewDocs(),
    ...industryDocs(),
    ...capabilityDocs(),
    ...operatingModelDocs(),
    ...caseStudyDocs(),
    ...coverageDocs(),
    ...contactDocs(),
    ...metricDocs(),
  ];
  return cachedIndex;
}

export const COMPANY_FACTS = { COMPANY, PRIMARY_CONTACT };
