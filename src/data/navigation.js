export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Collections & Recovery', href: '/services/collections/early-stage' },
        { label: 'Legal Recovery', href: '/services/legal-recovery/sarfaesi-support' },
        { label: 'Verification Services', href: '/services/verification/cpv-services' },
        { label: 'Asset Recovery', href: '/services/asset-recovery/asset-recovery' },
        { label: 'Investigation Services', href: '/services/investigation/skip-tracing' },
        { label: 'Operational Excellence', href: '/services/operational/call-centre' },
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
