import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoMeta, DEFAULT_META, SITE_URL, SITE_NAME } from '../data/seoMeta';
import { flagshipFaqs } from '../data/flagshipHomeData';
import { COMPANY, PRIMARY_CONTACT } from '../data/contactOfficesData';

// Mounted once in SiteLayout — runs on every route change (client-side nav
// doesn't reload index.html, so all head tags must be updated in JS).
//
// Manages per-route: <title>, meta description, robots, canonical,
// Open Graph, Twitter Card, and route-specific JSON-LD (BreadcrumbList on
// every page; Service on service leaf pages; FAQPage on the homepage;
// ContactPage + LocalBusiness on /contact). Site-wide Organization/WebSite
// JSON-LD stays static in index.html.

const OG_IMAGE = `${SITE_URL}/sm-logo.png`;

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

// One managed <script> tag per navigation, replaced wholesale — avoids
// stale schema from the previous route leaking into the current one.
function setRouteJsonLd(schemas) {
  const ID = 'seo-route-jsonld';
  document.getElementById(ID)?.remove();
  if (!schemas.length) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = ID;
  script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
  document.head.appendChild(script);
}

// Breadcrumbs only include ancestors that are real routes (present in
// seoMeta) — intermediate URL segments like /services/verification are not
// pages and must not appear as linked crumbs.
function buildBreadcrumb(path, currentTitle) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }];
  if (path === '/') return null; // no breadcrumb on the homepage itself

  const segments = path.split('/').filter(Boolean);
  let acc = '';
  for (let i = 0; i < segments.length - 1; i++) {
    acc += `/${segments[i]}`;
    if (seoMeta[acc]) {
      const ancestorTitle = seoMeta[acc].title.split('|')[0].trim();
      items.push({ '@type': 'ListItem', position: items.length + 1, name: ancestorTitle, item: `${SITE_URL}${acc}` });
    }
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name: currentTitle });

  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

function buildRouteSchemas(path, title, description) {
  const schemas = [];
  const pageName = title.split('|')[0].trim();

  const breadcrumb = buildBreadcrumb(path, pageName);
  if (breadcrumb) schemas.push(breadcrumb);

  // Service schema — leaf service pages only (/services/<category>/<service>)
  if (/^\/services\/[^/]+\/[^/]+$/.test(path)) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageName,
      description,
      url: `${SITE_URL}${path}`,
      provider: { '@type': 'Organization', name: COMPANY.legalName, url: SITE_URL },
      areaServed: COMPANY.statesCovered.map((s) => ({ '@type': 'State', name: s })),
    });
  }

  // FAQPage — homepage carries the FAQ section (FaqSection.jsx / flagshipFaqs)
  if (path === '/') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: flagshipFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  // ContactPage + LocalBusiness — facts sourced from contactOfficesData.js
  // (transcribed from the official Corporate Profile PDF). HQ address only;
  // branch offices render as page content, not schema, until each has
  // verified per-branch phone/hours data.
  if (path === '/contact') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: pageName,
      url: `${SITE_URL}/contact`,
      description,
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY.legalName,
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: PRIMARY_CONTACT.landline,
      email: PRIMARY_CONTACT.corporateEmail,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 10/17, East Ellaiamman Koil Street, Kotturpuram',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600085',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:30',
      },
    });
  }

  return schemas;
}

export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const meta = seoMeta[path];

    if (!meta && import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[SEOManager] No seoMeta entry for "${path}" — using DEFAULT_META. Add one in src/data/seoMeta.js.`);
    }

    const { title, description, noindex } = meta || DEFAULT_META;
    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = title;
    setMetaByName('description', description);
    setMetaByName('robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(canonicalUrl);

    // Open Graph
    setMetaByProperty('og:site_name', SITE_NAME);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', OG_IMAGE);
    setMetaByProperty('og:locale', 'en_IN');

    // Twitter Card
    setMetaByName('twitter:card', 'summary');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', OG_IMAGE);

    // Route-specific structured data
    setRouteJsonLd(buildRouteSchemas(path, title, description));
  }, [location.pathname]);

  return null;
}
