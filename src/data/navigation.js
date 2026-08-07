export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Future', href: '/future' },
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
