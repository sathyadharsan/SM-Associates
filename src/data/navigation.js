export const navigationData = {
  mainNav: [
    { label: 'Home', href: '/' },
    {
      label: 'Company',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
      isMegaMenu: true,
      columns: [
        // 1. Collections & Recovery — highest volume, core revenue engine (escalation order)
        {
          title: 'Collections & Recovery',
          items: [
            { label: 'Early Stage Collections', href: '/services/collections/early-stage' },
            { label: 'Soft Collections', href: '/services/collections/soft-collections' },
            { label: 'Hard Collections', href: '/services/collections/hard-collections' },
            { label: 'Field Collections', href: '/services/collections/field-collections' },
            { label: 'PDC Collections', href: '/services/collections/pdc-collections' },
            { label: 'Debt Recovery', href: '/services/collections/debt-recovery' },
          ]
        },
        // 2. Legal Recovery — SARFAESI is SM's highest-value service line
        {
          title: 'Legal Recovery',
          items: [
            { label: 'SARFAESI Enforcement', href: '/services/legal-recovery/sarfaesi-support' },
            { label: 'Possession Support', href: '/services/legal-recovery/possession-support' },
            { label: 'Cheque-Bounce Notice Services', href: '/services/legal-recovery/cheque-bounce-notices' },
            { label: 'Legal Coordination', href: '/services/legal-recovery/legal-coordination' },
            { label: 'Litigation Support', href: '/services/legal-recovery/litigation-support' },
          ]
        },
        // 3. Verification Services — original service, high daily volume
        {
          title: 'Verification Services',
          items: [
            { label: 'Pre-Disbursal Verification (CPV)', href: '/services/verification/cpv-services' },
            { label: 'Residence Verification', href: '/services/verification/residence-verification' },
            { label: 'Office Verification', href: '/services/verification/office-verification' },
            { label: 'Business Verification', href: '/services/verification/business-verification' },
            { label: 'Document Verification', href: '/services/verification/document-verification' },
          ]
        },
        // 4. Asset Recovery — lifecycle order: repossess → custody → value → auction
        {
          title: 'Asset Recovery',
          items: [
            { label: 'Vehicle Repossession', href: '/services/asset-recovery/vehicle-repossession' },
            { label: 'Asset Recovery', href: '/services/asset-recovery/asset-recovery' },
            { label: 'Security & Custodian Services', href: '/services/asset-recovery/custodian-services' },
            { label: 'Valuation Services', href: '/services/asset-recovery/valuation-services' },
            { label: 'Auction Coordination', href: '/services/asset-recovery/auction-coordination' },
          ]
        },
        // 5. Investigation Services — tracing first (highest volume), then DD, then fraud
        {
          title: 'Investigation Services',
          items: [
            { label: 'Skip Tracing', href: '/services/investigation/skip-tracing' },
            { label: 'Address Tracing', href: '/services/investigation/address-tracing' },
            { label: 'Contact Verification', href: '/services/investigation/contact-verification' },
            { label: 'Due Diligence', href: '/services/investigation/due-diligence' },
            { label: 'Fraud Investigation', href: '/services/investigation/fraud-investigation' },
          ]
        },
        // 6. Operational Excellence — ops first, then strategy/analytics
        {
          title: 'Operational Excellence',
          items: [
            { label: 'Call Centre Operations', href: '/services/operational/call-centre' },
            { label: 'Field Workforce Deployment', href: '/services/operational/manpower' },
            { label: 'Facility Management', href: '/services/operational/facility-management' },
            { label: 'Liaising Services', href: '/services/operational/liaising' },
            { label: 'NPA Management', href: '/services/specialized/npa-management' },
            { label: 'Resolution Strategy', href: '/services/specialized/resolution-strategy' },
            { label: 'NPA Recovery', href: '/services/specialized/npa-recovery' },
            { label: 'Portfolio Management', href: '/services/specialized/portfolio-management' },
            { label: 'Recovery Analytics', href: '/services/specialized/recovery-analytics' },
            { label: 'Recovery Strategy Consulting', href: '/services/specialized/recovery-consulting' },
          ]
        }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      isMegaMenu: true,
      columns: [
        // 1. Banks & Regulated Lenders — RBI-supervised deposit/lending institutions
        {
          title: 'Banks & Regulated Lenders',
          items: [
            { label: 'Banking', href: '/industries/banking' },
            { label: 'NBFC', href: '/industries/nbfc' },
            { label: 'Housing Finance', href: '/industries/housing-finance' },
            { label: 'Microfinance', href: '/industries/microfinance' },
          ]
        },
        // 2. Alternative Lenders — non-bank lenders, asset-backed and digital
        {
          title: 'Alternative Lenders',
          items: [
            { label: 'Fintech Lenders', href: '/industries/fintech' },
            { label: 'Commercial Lending', href: '/industries/commercial-lending' },
            { label: 'Vehicle Finance', href: '/industries/vehicle-finance' },
            { label: 'Gold Loan Institutions', href: '/industries/gold-loan' },
          ]
        },
        // 3. Recovery & Investigation — post-default and fraud investigation clients
        {
          title: 'Recovery & Investigation',
          items: [
            { label: 'Asset Reconstruction Companies', href: '/industries/arc' },
            { label: 'Insurance', href: '/industries/insurance' },
          ]
        },
        // 4. Loan Products — ordered by SM's client volume/prominence
        {
          title: 'Loan Products',
          items: [
            { label: 'Retail & Personal Loans', href: '/industries/products/retail' },
            { label: 'Auto & Vehicle Loans', href: '/industries/products/auto' },
            { label: 'SME & Business Loans', href: '/industries/products/sme' },
            { label: 'Educational Loans', href: '/industries/products/education' },
            { label: 'Agricultural & Rural', href: '/industries/products/agri' },
            { label: 'Jewel & Gold Loans', href: '/industries/products/jewel' },
          ]
        }
      ]
    },
    {
      label: 'Platform',
      href: '/platform',
      children: [
        { label: 'Recovery Operating System', href: '/platform/recovery-os' },
        { label: 'Escalation Governance Framework', href: '/platform/workflow-automation' },
        { label: 'Field Operations Network', href: '/platform/field-operations' },
        { label: 'Compliance Monitoring', href: '/platform/compliance-monitoring' },
        { label: 'Recovery Intelligence Framework', href: '/platform/recovery-analytics' },
        { label: 'AI Recovery Roadmap', href: '/platform/ai-recovery', isFuture: true },
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
