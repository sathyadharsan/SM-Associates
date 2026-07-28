export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Recovery Operations', href: '/services/collections' },
        { label: 'Legal Recovery & Enforcement', href: '/services/legal-recovery' },
        { label: 'Verification & Due Diligence', href: '/services/verification' },
        { label: 'Asset Recovery & Realisation', href: '/services/asset-recovery' },
        { label: 'Investigation & Fraud Control', href: '/services/investigation' },
        { label: 'Operational Excellence & Analytics', href: '/services/operational' },
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
