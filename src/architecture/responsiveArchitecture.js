export const responsiveArchitecture = {
  mobile: {
    breakpoint: '0px–639px',
    header: 'compact sticky header with hamburger menu and accordion navigation',
    hero: 'single-column layout with oversized headline, simplified dashboard and stacked trust badges',
    kpis: 'two-column KPI grid with reduced typography',
    services: 'single-column bento cards with always-visible CTA text',
    industries: 'horizontal snap carousel',
    tabs: 'accordion or horizontal scroll tabs',
    process: 'vertical timeline with blue connector line',
    products: 'two-column product grid',
    testimonials: 'single testimonial card with dot navigation',
    cta: 'single-column glass panel with full-width buttons',
    footer: 'single-column footer with stacked contact details'
  },
  tablet: {
    breakpoint: '640px–1023px',
    header: 'sticky header with compact navigation and consultation CTA',
    hero: 'single-column or soft two-column layout depending on viewport',
    kpis: 'three-column grid',
    services: 'two-column bento grid',
    industries: 'two-card horizontal scroll carousel',
    tabs: 'horizontal tab rail with glass panel',
    process: 'two-column timeline or vertical timeline',
    products: 'two-column product grid',
    testimonials: 'two-column proof and testimonial layout',
    cta: 'two-column CTA panel'
  },
  desktop: {
    breakpoint: '1024px+',
    header: 'transparent sticky header with mega menus and right-side consultation CTA',
    hero: 'split canvas with large headline and fintech dashboard illustration',
    kpis: 'five-card horizontal grid',
    services: 'asymmetric 12-column bento grid',
    industries: 'horizontal enterprise card carousel',
    tabs: 'vertical tab rail with large content panel',
    process: 'six-step horizontal timeline',
    products: 'four-column product grid',
    testimonials: 'two-column executive testimonial layout',
    cta: 'two-column glass CTA panel with supporting cards'
  }
};

export const responsiveRules = [
  'Use Tailwind mobile-first classes',
  'Keep section spacing large on desktop and controlled on mobile',
  'Convert horizontal flows into vertical or snap-scroll layouts on small screens',
  'Keep CTAs full-width on mobile',
  'Preserve white-first canvas across all breakpoints',
  'Avoid dark page backgrounds except footer',
  'Use glass cards consistently for KPI, CTA and tab panels',
  'Reduce visual complexity before reducing whitespace'
];
