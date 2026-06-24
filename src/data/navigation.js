export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    {
      label: 'Company',
      href: '/about',
      children: [
        { label: 'Company Overview', href: '/about' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Company History', href: '/about/history' },
        { label: 'Why SM Associates', href: '/about/why-sm-associates' },
        { label: 'Compliance & Ethics', href: '/about/compliance' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      isMegaMenu: true,
      columns: [
        {
          title: 'Verification Services',
          items: [
            { label: 'CPV Services', href: '/services/verification/cpv-services' },
            { label: 'Residence Verification', href: '/services/verification/residence-verification' },
            { label: 'Office Verification', href: '/services/verification/office-verification' },
            { label: 'Business Verification', href: '/services/verification/business-verification' },
            { label: 'Document Verification', href: '/services/verification/document-verification' },
          ]
        },
        {
          title: 'Collections & Recovery',
          items: [
            { label: 'Early Stage Collections', href: '/services/collections/early-stage' },
            { label: 'Soft Collections', href: '/services/collections/soft-collections' },
            { label: 'Hard Collections', href: '/services/collections/hard-collections' },
            { label: 'Field Collections', href: '/services/collections/field-collections' },
            { label: 'Debt Recovery', href: '/services/collections/debt-recovery' },
          ]
        },
        {
          title: 'Legal Recovery',
          items: [
            { label: 'SARFAESI Support', href: '/services/legal-recovery/sarfaesi-support' },
            { label: 'Possession Support', href: '/services/legal-recovery/possession-support' },
            { label: 'Legal Coordination', href: '/services/legal-recovery/legal-coordination' },
            { label: 'Litigation Support', href: '/services/legal-recovery/litigation-support' },
          ]
        },
        {
          title: 'Asset Recovery',
          items: [
            { label: 'Vehicle Repossession', href: '/services/asset-recovery/vehicle-repossession' },
            { label: 'Asset Tracing', href: '/services/asset-recovery/asset-tracing' },
            { label: 'Asset Recovery', href: '/services/asset-recovery/asset-recovery' },
            { label: 'Auction Coordination', href: '/services/asset-recovery/auction-coordination' },
          ]
        },
        {
          title: 'Investigation Services',
          items: [
            { label: 'Skip Tracing', href: '/services/investigation/skip-tracing' },
            { label: 'Address Tracing', href: '/services/investigation/address-tracing' },
            { label: 'Contact Verification', href: '/services/investigation/contact-verification' },
            { label: 'Fraud Investigation', href: '/services/investigation/fraud-investigation' },
          ]
        },
        {
          title: 'Operational & Specialized',
          items: [
            { label: 'Call Centre Operations', href: '/services/operational/call-centre' },
            { label: 'Manpower Sourcing', href: '/services/operational/manpower' },
            { label: 'Facility Management', href: '/services/operational/facility-management' },
            { label: 'Liaising Services', href: '/services/operational/liaising' },
            { label: 'Portfolio Management', href: '/services/specialized/portfolio-management' },
            { label: 'NPA Recovery', href: '/services/specialized/npa-recovery' },
            { label: 'Recovery Analytics', href: '/services/specialized/recovery-analytics' },
            { label: 'Recovery Consulting', href: '/services/specialized/recovery-consulting' },
          ]
        }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      isMegaMenu: true,
      columns: [
        {
          title: 'Financial Institutions',
          items: [
            { label: 'Banking', href: '/industries/banking' },
            { label: 'NBFC', href: '/industries/nbfc' },
            { label: 'Housing Finance', href: '/industries/housing-finance' },
            { label: 'Microfinance', href: '/industries/microfinance' },
          ]
        },
        {
          title: 'Specialized Lending',
          items: [
            { label: 'Fintech', href: '/industries/fintech' },
            { label: 'Asset Reconstruction Companies', href: '/industries/arc' },
            { label: 'Commercial Lending', href: '/industries/commercial-lending' },
          ]
        },
        {
          title: 'Asset-Based Lending',
          items: [
            { label: 'Insurance', href: '/industries/insurance' },
            { label: 'Vehicle Finance', href: '/industries/vehicle-finance' },
            { label: 'Gold Loan Institutions', href: '/industries/gold-loan' },
          ]
        },
        {
          title: 'Loan Products',
          items: [
            { label: 'Retail & Personal Loans', href: '/industries/products/retail' },
            { label: 'Auto & Vehicle Loans', href: '/industries/products/auto' },
            { label: 'SME & Business Loans', href: '/industries/products/sme' },
            { label: 'Agricultural & Rural', href: '/industries/products/agri' },
            { label: 'Jewel & Gold Loans', href: '/industries/products/jewel' },
            { label: 'Educational Loans', href: '/industries/products/education' },
          ]
        }
      ]
    },
    {
      label: 'Platform',
      href: '/recovery-operations',
      children: [
        { label: 'Recovery Operating System', href: '/recovery-operations/recovery-os' },
        { label: 'Workflow Automation', href: '/recovery-operations/workflow-automation' },
        { label: 'Field Operations Network', href: '/recovery-operations/field-operations' },
        { label: 'Compliance Monitoring', href: '/recovery-operations/compliance-monitoring' },
        { label: 'Recovery Analytics', href: '/recovery-operations/recovery-analytics' },
        { label: 'AI Recovery Platform', href: '/recovery-operations/ai-recovery', isFuture: true },
      ]
    },
    { label: 'Clients', href: '/clients' },
    { label: 'Case Studies', href: '/insights/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  ctas: [
    { label: 'Request Consultation', href: '/contact', type: 'primary' }
  ]
};
