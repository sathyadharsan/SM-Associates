// Default eyebrow/heading copy per section, used when a content object
// doesn't override it. Mirrors the `challengesHeading` / `outcomesHeading`
// override convention so every section is consistent: pass an override field
// in content, or fall back to these.
export const SECTION_DEFAULTS = {
  problemStatement: { eyebrow: 'Why It Matters', heading: 'Why This Service Matters' },
  overview: { eyebrow: 'Service Overview' },
  kpi: { eyebrow: 'Enterprise Overview', heading: 'Enterprise KPI Cards', subheading: 'Enterprise-grade capabilities designed for this service.' },
  capabilities: { eyebrow: 'Core Capabilities', heading: 'Core Capabilities' },
  tabs: { eyebrow: 'Verification Stages', heading: 'Inside Each Stage' },
  challenges: { eyebrow: 'Risk Landscape', heading: 'Business Challenges' },
  processFlow: { eyebrow: 'Operating Model' },
  outcomes: { eyebrow: 'Measurable Value', heading: 'Business Outcomes' },
  targetIndustries: { eyebrow: 'Who We Serve', heading: 'Industries We Serve' },
  faq: { eyebrow: 'FAQ', heading: 'Frequently Asked Questions' }
};

// Default CTA shape if a content object omits `cta` entirely.
export const DEFAULT_CTA = {
  heading: 'Speak to Our Team',
  subheading: 'Tell us about your portfolio and we will get back to you with next steps.',
  buttonText: 'Request Empanelment Proposal',
  href: '/contact'
};
