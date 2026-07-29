// Central per-route SEO metadata — single source of truth for <title>,
// meta description and canonical URL. Consumed by SEOManager.jsx, which
// looks up the current route's entry by pathname and writes it into
// document.head on every navigation. Add a new entry here whenever a new
// route is added to src/routes/index.jsx — otherwise it silently falls
// back to DEFAULT_META (see SEOManager.jsx).

export const SITE_URL = 'https://www.smassociate.in';
export const SITE_NAME = 'SM Associates Risk Management Pvt. Ltd.';

export const DEFAULT_META = {
  title: 'SM Associates Risk Management Pvt. Ltd. | Debt Recovery, Verification & Legal Recovery Partner',
  description: 'SM Associates helps banks, NBFCs and lenders recover debt through structured collections, verification, SARFAESI enforcement and asset recovery across South India.',
};

export const seoMeta = {
  '/': {
    title: 'SM Associates | Recovery & SARFAESI Partner for Banks & NBFCs',
    description: 'Enterprise recovery partner for banks and NBFCs — field collections, verification, SARFAESI enforcement and asset recovery across South India since 2000.',
  },

  // About
  '/about': {
    title: 'About SM Associates | 25+ Years in Debt Recovery',
    description: 'SM Associates Risk Management Pvt. Ltd. — established 2000, 916+ staff, 19 branches across South India. Learn our history, leadership and operating philosophy.',
  },

  // Services — index
  '/services': {
    title: 'Enterprise Recovery Operations & Services | SM Associates',
    description: 'End-to-end enterprise recovery operations across South India — financial, secured, movable and business asset recovery, legal enforcement and technology-driven field operations for banks, NBFCs, HFCs and ARCs.',
  },
  // Verification
  '/services/verification/cpv-services': {
    title: 'CPV Services — Contact Point Verification | SM Associates',
    description: 'Contact Point Verification (CPV) and address audit services for pre- and post-disbursal risk validation, executed across our South India branch network.',
  },
  '/services/verification/residence-verification': {
    title: 'Residence Verification Services | SM Associates',
    description: 'Physical residence verification and borrower profile audit services for banks, NBFCs and lenders across South India.',
  },
  '/services/verification/office-verification': {
    title: 'Office Verification Services | SM Associates',
    description: 'Commercial and workplace verification with employee and business-existence checks, supporting loan underwriting and risk assessment.',
  },
  '/services/verification/business-verification': {
    title: 'Business Verification Services | SM Associates',
    description: 'Merchant and business site audits verifying business existence, ownership and operational authenticity for lending risk checks.',
  },
  '/services/verification/document-verification': {
    title: 'Document Verification Services | SM Associates',
    description: 'KYC document and credential verification services supporting compliant, fraud-resistant loan onboarding.',
  },
  // Collections
  '/services/collections/pdc-collections': {
    title: 'PDC Collections Services | SM Associates',
    description: 'Post-dated cheque (PDC) collection and presentation management for structured loan repayment recovery.',
  },
  '/services/collections/early-stage': {
    title: 'Early Stage Collections | SM Associates',
    description: 'Pre-delinquency digital and call-based recovery campaigns designed to prevent accounts from rolling into NPA.',
  },
  '/services/collections/soft-collections': {
    title: 'Soft Collections Services | SM Associates',
    description: 'Tele-calling, payment reminders and structured follow-up for early-bucket delinquent accounts.',
  },
  '/services/collections/hard-collections': {
    title: 'Hard Collections Services | SM Associates',
    description: 'Legal demand letter delivery and structured recovery visits for accounts requiring escalated collection action.',
  },
  '/services/collections/field-collections': {
    title: 'Field Collections Services | SM Associates',
    description: 'In-person doorstep collection visits and field recovery coordination across our South India branch network.',
  },
  '/services/collections/debt-recovery': {
    title: 'Debt Recovery Services | SM Associates',
    description: 'NPA recovery and structured resolution of write-off and stressed loan portfolios for banks and NBFCs.',
  },
  // Legal Recovery
  '/services/legal-recovery/cheque-bounce-notices': {
    title: 'Cheque Bounce Notice Services (Section 138) | SM Associates',
    description: 'Section 138 cheque-bounce legal notice drafting and delivery services supporting structured legal recovery.',
  },
  '/services/legal-recovery/sarfaesi-support': {
    title: 'SARFAESI Enforcement Support | SM Associates',
    description: 'End-to-end SARFAESI Act enforcement support — 13(2) notice service, possession coordination, valuation and auction management.',
  },
  '/services/legal-recovery/possession-support': {
    title: 'Possession Support Services | SM Associates',
    description: 'Secured asset inventory and physical possession assistance for lenders enforcing recovery under SARFAESI.',
  },
  '/services/legal-recovery/legal-coordination': {
    title: 'Legal Coordination Services | SM Associates',
    description: 'Advocate tracking and legal document processing coordination supporting bank and NBFC recovery litigation.',
  },
  '/services/legal-recovery/litigation-support': {
    title: 'Litigation Support Services | SM Associates',
    description: 'Civil suit, arbitration and legal recovery tracking support for institutional lenders.',
  },
  // Asset Recovery
  '/services/asset-recovery/vehicle-repossession': {
    title: 'Vehicle Repossession Services | SM Associates',
    description: 'Automobile tracing, yard check-in and lawful repossession services for auto and commercial vehicle loans.',
  },
  '/services/asset-recovery/asset-tracing': {
    title: 'Asset Tracing Services | SM Associates',
    description: 'Skip tracing, real-estate and asset identification services supporting secured loan recovery.',
  },
  '/services/asset-recovery/asset-recovery': {
    title: 'Asset Recovery Services | SM Associates',
    description: 'Physical asset recovery and secure yard custody tracking for repossessed vehicles, equipment and property.',
  },
  '/services/asset-recovery/auction-coordination': {
    title: 'Auction Coordination Services | SM Associates',
    description: 'Asset valuation and e-auction process support for repossessed and SARFAESI-enforced secured assets.',
  },
  '/services/asset-recovery/valuation-services': {
    title: 'Asset Valuation Services | SM Associates',
    description: 'Government-approved chartered valuer coordination for secured asset and property valuation.',
  },
  '/services/asset-recovery/custodian-services': {
    title: 'Security & Custodian Services | SM Associates',
    description: 'Ex-defence personnel deployed for secure custody of repossessed vehicles, equipment and property from possession to auction.',
  },
  // Investigation
  '/services/investigation/due-diligence': {
    title: 'Due Diligence Investigation Services | SM Associates',
    description: 'Pre-disbursal and corporate due diligence investigation services for lending risk mitigation.',
  },
  '/services/investigation/skip-tracing': {
    title: 'Skip Tracing Services | SM Associates',
    description: 'Locating untraceable debtors through field investigation and contact-information tracing.',
  },
  '/services/investigation/address-tracing': {
    title: 'Address Tracing Services | SM Associates',
    description: 'Audit-trail analysis and field verification for borrower location identification.',
  },
  '/services/investigation/contact-verification': {
    title: 'Contact Verification Services | SM Associates',
    description: 'Phone number and digital trace verification services supporting borrower contactability checks.',
  },
  '/services/investigation/fraud-investigation': {
    title: 'Fraud Investigation Services | SM Associates',
    description: 'Forensic field investigation identifying fraudulent loan applications and misrepresented borrower information.',
  },
  // Specialized
  '/services/specialized/portfolio-management': {
    title: 'Loan Portfolio Management Services | SM Associates',
    description: 'End-to-end debt portfolio performance auditing and management for banks and NBFCs.',
  },
  '/services/specialized/npa-management': {
    title: 'NPA Management — One Window Recovery | SM Associates',
    description: 'Full-portfolio NPA resolution coordinating legal, valuation, security and sale under a single accountable partner.',
  },
  '/services/specialized/resolution-strategy': {
    title: 'NPA Resolution Strategy Consulting | SM Associates',
    description: 'Workflow optimization and resolution strategy consulting for stressed loan portfolios.',
  },
  '/services/specialized/npa-recovery': {
    title: 'NPA Recovery Services | SM Associates',
    description: 'Specialized stressed-asset recovery operations for non-performing loan portfolios.',
  },
  '/services/specialized/recovery-analytics': {
    title: 'Recovery Analytics Services | SM Associates',
    description: 'Delinquency prediction and portfolio routing scorecards supporting data-driven recovery operations.',
  },
  '/services/specialized/recovery-consulting': {
    title: 'Recovery Consulting Services | SM Associates',
    description: 'Recovery workflow optimization and risk policy consulting for institutional lenders.',
  },
  // Operational
  '/services/operational/call-centre': {
    title: 'Call Centre Operations | SM Associates',
    description: 'DRA-compliant predictive-dialer outbound call centre operations for structured collections communication.',
  },
  '/services/operational/manpower': {
    title: 'Manpower Sourcing Services | SM Associates',
    description: 'Sourcing of skilled verification and collections staff for banks, NBFCs and financial institutions.',
  },
  '/services/operational/facility-management': {
    title: 'Facility Management Services | SM Associates',
    description: 'Secure records storage and administrative support facility management for lending institutions.',
  },
  '/services/operational/liaising': {
    title: 'Liaising Services | SM Associates',
    description: 'Regulatory, legal and bank liaison operations supporting institutional recovery workflows.',
  },

  // Industries
  '/industries': {
    title: 'Industries We Serve | SM Associates',
    description: 'Recovery and verification solutions tailored for banking, NBFC, housing finance, microfinance, fintech and ARC clients.',
  },
  '/industries/banking': {
    title: 'Recovery Services for Banks | SM Associates',
    description: 'Public and private sector banking recovery workflows — SARFAESI enforcement, field collections and NPA management.',
  },
  '/industries/nbfc': {
    title: 'Recovery Services for NBFCs | SM Associates',
    description: 'Non-banking finance company credit recovery models covering field collections, verification and asset recovery.',
  },
  '/industries/housing-finance': {
    title: 'Recovery Services for Housing Finance Companies | SM Associates',
    description: 'Home loan verification, SARFAESI enforcement and collections services for housing finance companies.',
  },
  '/industries/microfinance': {
    title: 'Recovery Services for Microfinance Institutions | SM Associates',
    description: 'Rural credit and self-help group (SHG) doorstep collection and recovery operations for microfinance lenders.',
  },
  '/industries/fintech': {
    title: 'Recovery Services for Fintech & Digital Lenders | SM Associates',
    description: 'Field collections, tele-calling and recovery operations for digital loan and fintech lending portfolios.',
  },
  '/industries/arc': {
    title: 'Recovery Services for ARCs | SM Associates',
    description: 'Stressed corporate asset resolution and NPA recovery services for Asset Reconstruction Companies (ARCs).',
  },
  '/industries/commercial-lending': {
    title: 'Recovery Services for Commercial Lending | SM Associates',
    description: 'Corporate debt collections and collateral recovery services for commercial lending institutions.',
  },
  '/industries/insurance': {
    title: 'Verification Services for Insurance | SM Associates',
    description: 'Premium renewal and claims verification audit services for insurance companies.',
  },
  '/industries/vehicle-finance': {
    title: 'Recovery Services for Vehicle Finance | SM Associates',
    description: 'Auto loan repossession, field collections and auction management for vehicle finance lenders.',
  },
  '/industries/gold-loan': {
    title: 'Recovery Services for Gold Loan Institutions | SM Associates',
    description: 'Gold loan validation, storage and recovery audit services for gold loan NBFCs and banks.',
  },
  '/industries/products/retail': {
    title: 'Retail & Personal Loan Recovery | SM Associates',
    description: 'Credit card and unsecured personal loan collections services for retail lending portfolios.',
  },
  '/industries/products/auto': {
    title: 'Auto & Vehicle Loan Recovery | SM Associates',
    description: 'Vehicle repossession and recovery operations for auto loan and commercial vehicle portfolios.',
  },
  '/industries/products/sme': {
    title: 'SME & Business Loan Recovery | SM Associates',
    description: 'Working capital and business collateral recovery services for SME loan portfolios.',
  },
  '/industries/products/agri': {
    title: 'Agricultural & Rural Loan Recovery | SM Associates',
    description: 'KCC and rural micro-credit recovery actions for agricultural lending portfolios.',
  },
  '/industries/products/jewel': {
    title: 'Jewel & Gold Loan Recovery | SM Associates',
    description: 'Jewel appraisal verification and auction action services for gold-backed loan portfolios.',
  },
  '/industries/products/education': {
    title: 'Educational Loan Recovery | SM Associates',
    description: 'Student tracing and education loan collection services for education finance lenders.',
  },

  // Platform
  '/platform': {
    title: 'Recovery Operating Platform | SM Associates',
    description: 'Our governed recovery operations platform — centralized case registry, escalation governance and compliance monitoring.',
  },
  '/platform/recovery-os': {
    title: 'Recovery Operating System | SM Associates',
    description: 'Centralized case registry and governance framework powering structured, auditable recovery operations.',
  },
  '/platform/workflow-automation': {
    title: 'Recovery Workflow Automation | SM Associates',
    description: 'Rules-based escalation framework automating the path from calling to field to legal recovery.',
  },
  '/platform/field-operations': {
    title: 'Field Operations Network | SM Associates',
    description: 'GPS-enabled field staff dispatch and verification network across our South India branch footprint.',
  },
  '/platform/compliance-monitoring': {
    title: 'Compliance Monitoring | SM Associates',
    description: 'Daily voice-recording audits and DRA-compliant legal standards monitoring across all recovery operations.',
  },
  '/platform/recovery-analytics': {
    title: 'Recovery Intelligence & Analytics | SM Associates',
    description: 'Propensity scoring and portfolio diagnostics powering data-driven recovery decision-making.',
  },
  '/platform/ai-recovery': {
    title: 'AI Recovery Roadmap | SM Associates',
    description: 'Governed AI pilot programs under human oversight, shaping the future of recovery operations.',
  },

  // Insights
  '/insights': {
    title: 'Enterprise Recovery Insights | SM Associates',
    description: 'Expert perspectives, industry reports, practical guides and case studies on enterprise recovery operations, analytics and compliance.',
  },
  '/insights/case-studies': {
    title: 'Case Studies — Client Recovery Outcomes | SM Associates',
    description: 'Real engagement case studies covering SARFAESI enforcement, field collections, NPA management and fraud control for banks and NBFCs.',
  },
  '/insights/blog': {
    title: 'Blog | SM Associates',
    description: 'Articles on risk assessment, recovery operations and regulatory updates from SM Associates.',
  },
  '/insights/news': {
    title: 'News & Updates | SM Associates',
    description: 'Latest company news, press releases and operational updates from SM Associates.',
  },

  // Utility — noindex: internal portal login, complete metadata kept for
  // architecture consistency but excluded from sitemap and search indexing.
  '/login': {
    title: 'Client Login | SM Associates',
    description: 'Secure login portal for SM Associates clients and partners to access recovery operations reporting.',
    noindex: true,
  },

  // Others
  '/clients': {
    title: 'Our Clients — Banks, NBFCs & Fintechs | SM Associates',
    description: '47+ banking, NBFC and fintech institutions trust SM Associates for recovery, verification and collections operations across South India.',
  },
  '/careers': {
    title: 'Careers at SM Associates | Join Our Team',
    description: 'Explore career opportunities at SM Associates — a 916+ member team across 19 branches in South India.',
  },
  '/contact': {
    title: 'Contact SM Associates | Head Office & Branch Network',
    description: 'Reach SM Associates at our Chennai head office or any of our 19 branch offices across South India, Karnataka, Telangana, Andhra Pradesh and Puducherry.',
  },
};
