export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Recovery Operations', href: '/services/collections/early-stage' },
        { label: 'Legal Recovery & Enforcement', href: '/services/legal-recovery/sarfaesi-support' },
        { label: 'Verification & Due Diligence', href: '/services/verification/cpv-services' },
        { label: 'Asset Recovery & Realisation', href: '/services/asset-recovery/asset-recovery' },
        { label: 'Investigation & Fraud Control', href: '/services/investigation/skip-tracing' },
        { label: 'Operational Excellence & Analytics', href: '/services/operational/call-centre' },
      ]
    },
    { label: 'Clients', href: '/clients' },
    {
      label: 'Resources',
      href: '/insights',
      children: [
        { label: 'Case Studies', href: '/insights/case-studies' },
        { label: 'Insights', href: '/insights' },
        { label: 'Blog', href: '/insights/blog' },
        { label: 'Careers', href: '/careers' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ],
  ctas: [
    { label: 'Request Audit', href: '/contact', type: 'primary' }
  ]
};
