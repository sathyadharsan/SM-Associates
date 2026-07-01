// Refined content data for all Industries and Products pages
// Conforms to the 12-section dynamic layout scheme

export const industriesContent = {
  'banking': {
    eyebrow: 'Banking Sector',
    title: 'Schedule Commercial Bank Debt Recovery & NPA Resolution',
    subtitle: 'Mitigating Gross NPA transition and provisioning drag for Scheduled Commercial Banks (SCBs) through RBI-compliant operations.',
    description: 'Deploying IIBF DRA-certified field coordinators, automated voice logger networks, and legal panels to accelerate SCB recoveries under strict DOR.ORG.REC.65/21.04.158/2022-23 rules.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',
    
    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'Secured Asset Foreclosures', desc: 'Commercial banks face systemic bottlenecks when enforcing security interests on defaulted real estate collateral.', bullets: ['Filing Section 14 petitions with Chief Judicial Magistrates', 'Coordinating locksmiths, security forces, and police assistance', 'Executing legal symbolic and physical possession affixture'], businessOutcome: 'Accelerates collateral foreclosure and frees up provisioning reserves.' },
      { title: 'Pre-Disbursal Risk Auditing', desc: 'Preventing underwriting exposure to synthetic identity and documentation fraud on retail and commercial books.', bullets: ['Doorstep customer profile verification (CPV) visits', 'Sub-Registrar encumbrance certificate search check', 'Employer payroll HR details verifications on site'], businessOutcome: 'Ensures data validity before capital disbursement.' },
      { title: 'Retail Book Collections', desc: 'High-volume early-stage collections campaigns matching regulatory calling constraints.', bullets: ['Outbound VoIP reminder calling during approved hours', 'IIBF DRA-certified coordinators physical visits', 'Negotiating OTS settlements within bank parameters'], businessOutcome: 'Improves roll-back rates on credit card and personal defaults.' },
      { title: 'Agriculture Portfolio Recovery', desc: 'Agricultural lending requires crop-cycle aligned physical outreach and local branch networks.', bullets: ['Scheduling collections during local crop harvest cycles', 'Tractor tracing and coordinate checks', 'Mediation with local Panchayat coordinates'], businessOutcome: 'Reduces farm defaults while maintaining community goodwill.' },
      { title: 'Asset Preservation & Yard Custody', desc: 'Protecting the resale value of repossessed commercial vehicles and machinery.', bullets: ['Storing assets in fenced, CCTV-monitored yards', 'Digital check-in inventory checks and status logs', 'Facilitating public viewing ahead of auctions'], businessOutcome: 'Prevents asset damage or parts theft during holding.' },
      { title: 'DRT & Litigation Coordination', desc: 'Expediting legal recovery actions before Debt Recovery Tribunals.', bullets: ['Liaising with district legal panel advocates', 'Assembling necessary loan deed registries and proofs', 'Filing recovery certificates and claims checks'], businessOutcome: 'Reduces legal timelines for high-value defaults.' }
    ],

    tabs: [
      { id: 'landscape', label: 'Industry Landscape', heading: 'The Commercial Banking Environment', overview: 'Banks operate under strict RBI supervision and capital adequacy rules, requiring highly structured NPA resolution systems.', activities: ['Evaluate Gross NPA percentages across bank loan books', 'Review RBI DOR fair practices guidelines', 'Assess risk parameters for secured mortgage portfolios'], documents: ['RBI DOR regulations and guidelines documents', 'Bank empanelment criteria checklists'], risks: ['Gross NPA expansion on balance sheets', 'Empanelment policy changes'], deliverable: 'Commercial banking risk framework assessment.', benefit: 'Aligns recovery operations with institutional banking standards.' },
      { id: 'portfolios', label: 'Portfolio Types', heading: 'Tailored Asset Class Resolution', overview: 'Specialized workflows designed for secured housing mortgages, commercial lines, and high-volume retail books.', activities: ['Run soft collections tele-campaigns for credit cards', 'Coordinate Section 13 notice serving for home loans', 'Deploy crop-cycle outreach for agricultural ATL portfolios'], documents: ['Bank loan account statements', 'Property deed registries and files check'], risks: ['Asset value depreciation on defaults', 'Borrower location changes post-default'], deliverable: 'Secured/Unsecured portfolio action matrices.', benefit: 'Maximizes resolution speed based on specific loan parameters.' },
      { id: 'challenges', label: 'Operational Challenges', heading: 'Magistrate Orders and Document Forensics Gaps', overview: 'Overcoming magistrate filing backlogs and verifying applicant profiles to prevent fraud.', activities: ['Draft CJM Section 14 petitions to secure warrants', 'Conduct Sub-Registrar encumbrance certificate title searches check', 'Verify workplace HR salary details on site check'], documents: ['Encumbrance Certificates (EC)', 'Magistrate petition files checks'], risks: ['Extended Section 14 magistrate orders delays', 'Synthetic identity and documentation fraud'], deliverable: 'Warrants petition filing status log.', benefit: 'Expedites physical possessions and prevents disbursal fraud.' },
      { id: 'services', label: 'Recommended Service Portfolio', heading: 'Secured Foreclosures and Soft Collections', overview: 'Deploying legal coordinate desks and certified tele-calling to resolve Stage-3 assets.', activities: ['Draft and serve legally compliant Section 13(2) notices', 'Deploy IIBF DRA-certified coordinators for doorstep collections', 'Coordinate public e-auctions to monetize properties'], documents: ['Served Section 13 demand notice proofs check', 'E-Auction public notices clippings'], risks: ['DRT court challenge delays', 'Low bidder turnout at public auctions'], deliverable: 'Served legal notices proofs and auction sales deeds.', benefit: 'Frees up bank reserves locked in provisioning buckets.' },
      { id: 'compliance', label: 'Compliance & Regulatory Framework', heading: 'Insulating Lenders from Conduct Risk', overview: 'Operations designed to align with applicable regulatory requirements and client governance frameworks.', activities: ['Restrict outbound dialing queues to approved call hours check', 'Audit voice logger call recordings for compliance checks', 'Verify coordinator IIBF DRA active certifications check'], documents: ['Active DRA registration databases check', 'Speech and script audit check logs'], risks: ['Borrower calling schedule violations', 'Regulatory penalty exposure'], deliverable: 'Audited compliance certification reports.', benefit: 'Protects the bank\'s brand reputation and panels empanelments.' },
      { id: 'governance', label: 'Business Governance', heading: 'Auditable Reporting and Data SFTP Security', overview: 'Providing daily CSV updates and deposit reconciliations via secure SFTP paths.', activities: ['Deposit collected payment check funds within 24 hours checks', 'Transmit status check CSV files via encrypted SFTP link', 'Reconcile ledgers checks on bank recovery dashboard'], documents: ['Daily reconciliation ledgers', 'Secure SFTP data logs check'], risks: ['Report upload latency', 'Data transmission sync errors'], deliverable: 'Audited performance reports dossier.', benefit: 'Provides bank auditors with clean, transparent document trails.' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Macro Pressures and Regulatory Expectations in Commercial Banking',
    problemStatement: [
      { icon: 'trendingDown', title: 'Systemic NPA Pressure', desc: 'Rising Stage-3 asset provisioning mandates lock up bank reserves and dilute Return on Assets (ROA). Lenders require proactive collections rollback to protect equity margins.' },
      { icon: 'shieldAlert', title: 'Conduct Risk Liabilities', desc: 'RBI Fair Practices directives hold banking boards directly responsible for vendor actions. Uncertified agents or call timeline violations trigger severe audit suspensions.' },
      { icon: 'timer', title: 'Eviction Warrants Backlog', desc: 'Magistrate order delays drag out symbolic and physical property possessions. Lenders require localized legal coordinate desks to expedite CJM filings.' }
    ],

    overview: {
      heading: 'SCB Recovery Management: Securing Capital Adequacy Ratios',
      subheading: 'Mitigating Asset Downgrade Velocity and Optimizing Recoveries',
      summary: 'Scheduled Commercial Banks operate under tight capital adequacy metrics and strict regulatory reviews. SM Associates shields lenders from conduct risk by deploying IIBF DRA-certified coordinators and locking dialer hours strictly between 08:00 AM and 07:00 PM in line with RBI Outsource Directives. Our legal teams specialize in Section 14 CMM/CJM coordination, accelerating possession execution to unlock stressed assets and reduce Gross NPA ratios.',
      outcomes: [
        { title: 'Absolute Regulatory Isolation', desc: 'VoIP calling lockout prevents calling outside statutory times.', value: 'Conduct Shield' },
        { title: 'Geotagged Visit Evidences', desc: 'Every doorstep visit is logged with timestamped GPS coordinates and photos.', value: 'Auditable Visits' },
        { title: 'Clean Collateral Transfer', desc: 'Milestone-based legal support coordinates notice serving and auctions.', value: 'Clean Title Sales' }
      ],
      useCases: [
        { title: 'Secured Housing Mortgages', desc: 'Managing Section 13 notice servings and physical possessions.' },
        { title: 'Retail Credit Cards', desc: 'Soft collection campaigns and settlement negotiation.' },
        { title: 'Agriculture Term Loans (ATL)', desc: 'Crop-cycle aligned outreach and tractor collections.' }
      ]
    },

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 14 magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Our structured onboarding and operational pipelines designed for banking committee reviews.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing default portfolio allocations and mapping coordinates.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'Facilitating OTS settlements and uploading reconciled deposit receipts.', outcome: 'NPA recovery closed and funds transferred.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustriesHeading: 'Industry Ecosystem',
    targetIndustries: [
      { name: 'Public Sector Banks', desc: 'Focuses on high-volume retail NPA mortgage default resolution. Coordinates milestone notices campaign.' },
      { name: 'Private Commercial Banks', desc: 'Manages high-value commercial and industrial property possessions. Implements DM Liaison coordination.' },
      { name: 'Small Finance Banks (SFBs)', desc: 'Handles soft call reminders and localized micro-business collections. Operates bilingual tele-outreach.' },
      { name: 'Cooperative Banks', desc: 'Executes localized agricultural term loan recoveries and land verifications. Deploys Panchayat liaison support.' }
    ],

    faqs: [
      { q: 'How does SM Associates align with specific bank SOPs?', a: 'During the onboarding phase, we calibrate our calling lockouts, script limits, and escalation stages to match the lender’s specific internal policy.' },
      { q: 'Do all your field agents hold IIBF certification?', a: 'Yes. 100% of our active collections representatives and field coordinators hold the mandatory IIBF DRA certification.' },
      { q: 'How do you coordinate magistrate evictions under Section 14?', a: 'Our legal desk handles filings at district CJM/CMM courts, arranges locksmiths, and coordinates with local police to execute physical possession.' }
    ],

    cta: {
      heading: 'Schedule an Industry Consultation',
      subheading: 'Connect with our bank empanelment officer to review our credentials and audit records.',
      buttonText: 'Request Empanelment Pack',
      href: '/contact'
    }
  },

  'fintech': {
    eyebrow: 'FinTech Sector',
    title: 'FinTech Digital Lending Compliance & Tele-Calling',
    subtitle: 'Enforcing pre-disbursal KYC validations and early collections under RBI Digital Lending Guidelines.',
    description: 'API-integrated address verifications, recorded collections tele-calling, and geotagged doorstep checks to secure digital lending books.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'API-Integrated CPV Verification', desc: 'Automated ingestion of verification requests and dispatch of geolocated check reports.', bullets: ['Syncing with client collection CRMs via API', 'Same-day check reports with photo proof', 'Direct data uploads to underwriting queues'], businessOutcome: 'Reduces underwriting loan turnaround times and prevents fraud.' },
      { title: 'Corporate HR Verifications', desc: 'On-site visits to check applicant payroll details and active corporate employment status.', bullets: ['In-person visits to HR offices', 'Trade reference checks', 'Flagging shell company listings'], businessOutcome: 'Validates income details and prevents underwriting errors.' },
      { title: 'Geotagged Residence Checks', desc: 'Field officers conducting physical visits to verify applicant residence address.', bullets: ['Visit coordinates matching address data', 'Timestamped photo logs of the property', 'Discreet inquiries with neighbors'], businessOutcome: 'Confirms resident stability before disbursal.' },
      { title: 'Digital Outreach Integration', desc: 'Outbound tele-calling queues integrated with client collections CRMs.', bullets: ['Syncing dispositions in real-time', 'Voice logger files archived securely', 'Outbound dialing compliance locks'], businessOutcome: 'Improves collections recovery rates while maintaining regulatory safety.' },
      { title: 'GST Registry Validations', desc: 'Verifying trade tax registration documents against Sub-Registrar records.', bullets: ['GST verification check on-site', 'Matching trade licenses with municipal records', 'Trade registry records checking'], businessOutcome: 'Ensures business legitimacy before commercial credit lines.' },
      { title: 'Skip-Tracing & Tracing Services', desc: 'Locating absconded digital borrowers through coordinate database matching.', bullets: ['Cross-checking utility registries', 'Neighbor inquiries and coordinate checks', 'Employer verification updates'], businessOutcome: 'Restores contact with missing borrowers.' }
    ],

    tabs: [
      { id: 'api-ingest', label: 'API Ingestion', heading: 'Real-Time API / SFTP Ingestions', overview: 'Automating database transfers through secure JSON APIs or SFTP paths.', activities: ['Verify API integration endpoints checks', 'Decouple raw coordinate structures maps', 'Trigger instant compliance checklist generation'], documents: ['JSON API integration schemas', 'PGP encryption keys check'], risks: ['Data mapping failure exceptions', 'API latency timeouts checks'], deliverable: 'Configured real-time case ingestion pipeline.', benefit: 'Syncs borrower profiles instantly, avoiding manual files handling.' },
      { id: 'branch-dispatch', label: 'Same-Day Dispatch', heading: 'Dynamic Branch Agent Routing', overview: 'Routing coordinates checks instantly to local branch representatives.', activities: ['Convert address texts into geographic coordinates', 'Assign files to nearest regional branch representative', 'Confirm field officer DRA compliance certifications'], documents: ['Field mobile app routing logs', 'Active regional branch rosters check'], risks: ['Incorrect geolocation conversions', 'Branch agent resource constraints'], deliverable: 'Dispatched field check status logs.', benefit: 'Guarantees same-day address checks visits.' },
      { id: 'ground-audit', label: 'On-Site Audit', heading: 'Doorstep Check & Verification Forensics', overview: 'On-ground verification checks of residence and workplace.', activities: ['Execute physical visits to borrower addresses', 'Collect geotagged site photo logs and signatures', 'Verify trade registry license and GST tax records check'], documents: ['Geotagged site check photos', 'Neighbor corroboration checklists'], risks: ['Fictitious company listings exceptions', 'Tenant occupancy discrepancies'], deliverable: 'Geotagged site audit check dossier.', benefit: 'Flags synthetic identities and fake payrolls on site.' },
      { id: 'ready-report', label: 'Compliance & Regulatory Framework', heading: 'Delivery of Underwriting-Ready Files', overview: 'Operations designed to align with applicable regulatory requirements and client governance frameworks.', activities: ['Review files consistency metrics checks', 'Generate risk ratings and analyst commentary files', 'Upload final PDF report to underwriting queue'], documents: ['Compiled verification report check', 'Evidence files collection check'], risks: ['Data sync exceptions', 'Report upload latency'], deliverable: 'Decision-ready verification report dossier.', benefit: 'Allows underwriters to process instant approvals.' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Operational Delays and Underwriting Gaps in Fintech Credit',
    problemStatement: [
      { icon: 'trendingDown', title: 'Slow Verification Turnaround', desc: 'Manual document verification takes days, stalling instant loan disbursements and increasing customer drop-off rates on lending apps.' },
      { icon: 'shieldAlert', title: 'Digital KYC Tampering', desc: 'Fraud rings presenting altered digital PDFs (bank statements, utility bills) that pass online checks but do not match the ground reality.' },
      { icon: 'timer', title: 'Early Delinquency Rollover', desc: 'Delinquent accounts accumulate default write-offs within 90 days. Unsecured digital loans require rapid physical collections dispatch.' }
    ],

    overview: {
      heading: 'Digital Lending Verification: Real-Time Fraud Mitigation',
      subheading: 'API-Driven Verification Loops and Compliant Tele-Calling',
      summary: 'FinTech lending demands real-time verification and compliance checks to prevent synthetic identity theft. SM Associates provides API-integrated CPV verifications and recorded collections dispatch under the 2025 Digital Lending guidelines. We ingest cases via SFTP/API, allocate to local officers with real-time GPS telemetry, and deliver geo-tagged reports within 24 hours, securing the digital origination loop.',
      outcomes: [
        { title: 'Encrypted Data Transfers', desc: 'Daily CSV account files transferred securely with PGP keys.', value: 'PGP Encrypted' },
        { title: 'Same-Day Field Sourcing', desc: 'Automated routing assigns address checks to field officers instantly.', value: 'Same-Day TAT' },
        { title: 'Digital Evidentiary Logs', desc: 'Site photos and neighbor corroboration notes uploaded directly to dashboard.', value: 'Geotagged Logs' }
      ],
      useCases: [
        { title: 'Buy Now Pay Later (BNPL)', desc: 'Rapid residence checks for credit line extensions.' },
        { title: 'Salaried Instant Personal Loans', desc: 'HR payroll and corporate workplace verifications on-site.' },
        { title: 'Merchant Working Capital Loans', desc: 'Verification of business operations and local stock levels.' }
      ]
    },

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Digital KYC Tampering', desc: 'Sophisticated alterations of digital PDFs (bank statements, utility bills) that pass algorithmic checks but fail when cross-checked on site.', warningBadge: 'FINTECH CREDIT', impact: 'SM Associates Operational Approach: On-site physical verifications and direct registry checks.' },
      { title: 'High Early-Stage Defaults', desc: 'Delinquent accounts accumulated quickly on micro-loan portfolios. Fast, compliant tele-calling is required before accounts roll into write-offs.', warningBadge: 'MICRO-LOANS', impact: 'SM Associates Operational Approach: Compliant outbound tele-outreach queues within statutory calling windows.' },
      { title: 'Borrower Anonymity', desc: 'Borrowers providing transient co-working addresses or shared PG rooms as residence proofs, complicating recovery efforts.', warningBadge: 'UNSECURED CREDIT', impact: 'SM Associates Operational Approach: Field skip-tracing and localized community reference checks.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'SLA-tracked milestones for digital lending checks.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing default portfolio allocations and mapping coordinates.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustriesHeading: 'Industry Ecosystem',
    targetIndustries: [
      { name: 'Buy Now Pay Later (BNPL)', desc: 'Focuses on high-volume early-stage collections campaigns. Implements soft tele-reminders.' },
      { name: 'Salaried Instant Personal Loans', desc: 'Manages on-site workplace verifications. Coordinates CPV profile verification.' },
      { name: 'Merchant Working Capital Loans', desc: 'Coordinates on-site business operations verifications and collections. Implements GST registry validation.' }
    ],

    faqs: [
      { q: 'Do you support direct SFTP database ingestions?', a: 'Yes. We support daily database file uploads via secure SFTP using PGP key encryption, alongside API integrations.' },
      { q: 'How do you handle address mismatches during checks?', a: 'The case is flagged, residential coordinates are logged, and a discrepancy note is routed directly to the underwriter.' },
      { q: 'What is the typical TAT for verification checks?', a: 'We deliver geotagged check reports within 24 hours of assignment.' }
    ],

    cta: {
      heading: 'Request an Industry Assessment',
      subheading: 'Request an integration demo with our tech team to evaluate our verification TAT.',
      buttonText: 'Book Tech Demo',
      href: '/contact'
    }
  },

  // ================= 1. INDUSTRIES INDEX =================
  'industries': {
    eyebrow: 'Lending Verticals',
    title: 'Calibrated Recovery for Diverse Portfolios',
    subtitle: 'Managing risk, collections, and regulatory compliance across the credit lifecycle.',
    description: 'We structure specialized field operations, recorded tele-calling campaigns, and legal foreclosure panels calibrated to the specific regulatory guidelines of each lending vertical.',
    primaryCtaText: 'Schedule a Consultation',
    secondaryCtaText: 'Explore Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',
    
    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Industry Risks',
    problemStatementHeading: 'The Pitfalls of Generic Collections',
    problemStatement: [
      { icon: 'fileWarning', title: 'Regulatory Divergence', desc: 'Each lending segment operates under distinct statutory guidelines, such as banking fair practices, JLG codes of conduct, or digital lending directions. A generic approach risks immediate regulatory exposure.' },
      { icon: 'users', title: 'Lending Demographics Shift', desc: 'Retail personal borrowers require soft tele-collections, whereas rural agricultural borrowers require crop-cycle aligned physical outreach. Standard methods yield poor collection efficiency.' },
      { icon: 'trendingDown', title: 'Asset Eviction Gaps', desc: 'Secured loans require complex foreclosure logistics, yards custody, and public auctions, while unsecured loans require skip tracing and reference verification. Fragmented workflows cause delays.' }
    ],

    overview: {
      heading: 'Calibrated Operations Desk',
      subheading: 'Operational Calibration Tailored to Your Portfolio Parameters',
      summary: 'Lending has evolved into highly specialized niches. A recovery partner must match this diversity on the ground. SM Associates deploys dedicated operational desks for each lending vertical, ensuring that tele-agents use appropriate scripts, field officers hold required certifications (like IIBF DRA), and legal managers possess deep local knowledge of SARFAESI and DRT. Our unified console coordinates these actions under strict client SLA frameworks.',
      outcomes: [
        { title: 'Regulatory Safety', desc: 'Every campaign strictly follows the specific regulatory code of the target lending vertical.' },
        { title: 'Field Mobilization', desc: 'Immediate dispatch of certified field representatives to address verifications and collections.' },
        { title: 'Centralized Control', desc: 'All local branches, repositories, and legal agents synced under a single monitoring layer.' }
      ],
      useCases: [
        { title: 'Commercial Banking', desc: 'Coordinating high-value physical enforcements and auctions.' },
        { title: 'NBFC Retail Books', desc: 'Executing high-volume doorstep collections and vehicle repossession.' },
        { title: 'Fintech Digital Loans', desc: 'API-driven verifications and compliance outbound campaigns.' }
      ]
    },

    tabs: [
      {
        id: 'landscape',
        label: 'Industry Landscape',
        heading: 'The Evolving Lending Ecosystem',
        overview: 'Lenders face rising regulatory pressures and credit risks across diverse lending classes.',
        activities: [
          'Monitor macro-level credit delinquency indices',
          'Evaluate structural trends in NPA assets provisioning',
          'Review regulatory updates across commercial and retail books'
        ],
        documents: [
          'Macro economic credit trend reports',
          'Sector-specific RBI guidelines files'
        ],
        risks: [
          'Credit underwriting defaults expansion',
          'Regulatory policy changes'
        ],
        deliverable: 'Sector-specific risk assessment overview.',
        benefit: 'Provides risk managers with macro portfolio insights.'
      },
      {
        id: 'portfolios',
        label: 'Portfolio Types',
        heading: 'Diverse Loan Book Segments',
        overview: 'Custom operations designed for secured housing mortgages, commercial lines, and high-volume retail books.',
        activities: [
          'Segment portfolios by bucket and risk profile',
          'Set script guidelines and calling limits by asset class',
          'Map geographical address densities of debtor groups'
        ],
        documents: [
          'Lender portfolio registers and records',
          'Asset class boundary guidelines'
        ],
        risks: [
          'Deterioration of Stage-2 accounts',
          'Lost contact details of debtors'
        ],
        deliverable: 'Customized portfolio resolution plan.',
        benefit: 'Optimizes resource allocation based on delinquency risk.'
      },
      {
        id: 'challenges',
        label: 'Operational Challenges',
        heading: 'Ground Eviction and Absconding Gaps',
        overview: 'Overcoming borrower resistance, complex legal filing backlogs, and locate absconding debtors.',
        activities: [
          'Perform registry coordinate checks to trace absconders',
          'Liaise with court advocates to track Section 14 order status',
          'Coordinate locksmiths and transport for physical possession'
        ],
        documents: [
          'Sub-Registrar encumbrance registries',
          'Court magistrate petition records'
        ],
        risks: [
          'Extended legal enforcement timelines',
          'Fictitious lease agreements presented by defaults'
        ],
        deliverable: 'Possession execution and tracing reports.',
        benefit: 'Frees up locked capital through legal possessions.'
      },
      {
        id: 'services',
        label: 'Recommended Service Portfolio',
        heading: 'Empathetic and Compliant Collections',
        overview: 'Soft outbound reminders and doorstep collections executed by certified officers.',
        activities: [
          'Run bilingual tele-calling campaigns within statutory hours',
          'Deploy IIBF DRA-certified coordinators for doorstep visits',
          'Facilitate bank-approved OTS settlement negotiations'
        ],
        documents: [
          'VoIP voice logs check recordings',
          'PTP / OTS agreement draft sheets'
        ],
        risks: [
          'Borrower grievance exceptions',
          'OTS parameter alignment gaps'
        ],
        deliverable: 'Compliant payment collections or settlement agreements.',
        benefit: 'Protects lender brand goodwill while recovering capital.'
      },
      {
        id: 'compliance',
        label: 'Compliance & Regulatory Framework',
        heading: 'Strict Regulatory Safeguards',
        overview: 'Insulating lenders from conduct risks through audited controls and call locking systems.',
        activities: [
          'Lock outbound dialer queues to approved calling hours',
          'Conduct daily call log audits for compliance checks',
          'Verify field agent IIBF DRA registrations check status'
        ],
        documents: [
          'Agent certification databases',
          'Voice logs compliance audit logs'
        ],
        risks: [
          'Non-certified agent placements',
          'Regulatory penalty exposure'
        ],
        deliverable: 'Audited compliance certification record.',
        benefit: 'Protects bank from reputation damage and audit fines.'
      },
      {
        id: 'governance',
        label: 'Business Governance',
        heading: 'Transparent Dashboard Reconciliations',
        overview: 'Reconciling daily payments and transmitting performance records via secure SFTP.',
        activities: [
          'Verify collected payment deposit slips details',
          'Update ledgers and status on client consoles in real-time',
          'Transmit daily status check CSV files'
        ],
        documents: [
          'Daily reconciliation reports check',
          'SFTP data transmission protocols'
        ],
        risks: [
          'Report upload latency',
          'Data sync errors check'
        ],
        deliverable: 'Daily verified performance dashboard record.',
        benefit: 'Provides bank auditors with transparent, auditable records.'
      }
    ],

    challengesHeading: 'Critical Market Delinquencies',
    challenges: [
      { title: 'One-Size-Fits-All Operations Fail', desc: 'Generic collections agencies apply uniform scripts, calling windows, and escalation paths across all lending verticals. This approach violates vertical-specific RBI guidelines and delivers poor resolution rates.', warningBadge: 'OPERATIONAL RISK', impact: 'SM Associates Operational Approach: Dedicated operational desks calibrated per lending vertical with vertical-specific scripts, SLA frameworks, and compliance controls.' },
      { title: 'Regulatory Divergence Across Verticals', desc: 'Banks operate under DOR Fair Practices, MFIs under MFIN Code of Conduct, ARCs under Securitisation Directions, and insurers under IRDAI SIU guidelines. A partner serving multiple verticals must maintain separate compliance postures.', warningBadge: 'COMPLIANCE RISK', impact: 'SM Associates Operational Approach: Vertical-specific compliance frameworks managed by dedicated relationship managers with deep sectoral expertise.' },
      { title: 'Geographic Borrower Distribution Gaps', desc: 'Lenders with portfolios spanning urban, semi-urban, and rural geographies face difficulty finding partners with the local presence to reach all borrower segments within SLA timelines.', warningBadge: 'COVERAGE GAPS', impact: 'SM Associates Operational Approach: 19-branch network across South India ensures same-day doorstep dispatch for all geographic segments within coverage zones.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'SARFAESI Legal Coordination', desc: 'End-to-end support for SARFAESI Act enforcement across secured loan portfolios — from notice serving to physical possession and public auction.', bullets: ['Section 13(2) demand notice drafting and service', 'CJM/CMM petition filing and magistrate warrant coordination', 'Public e-auction organization and bidder mobilization'], businessOutcome: 'Accelerates secured asset resolution and releases provisioning capital.' },
      { title: 'High-Volume Collections Operations', desc: 'Decentralized doorstep collections campaigns staffed by IIBF DRA-certified agents operating within statutory calling and visit guidelines.', bullets: ['Bilingual outbound tele-calling within approved hours', 'Certified field officer doorstep visit deployment', 'OTS negotiation and settlement facilitation'], businessOutcome: 'Improves roll-back rates across early and late-stage delinquency buckets.' },
      { title: 'Pre-Disbursal Verification', desc: 'On-ground CPV checks validating applicant identity, residence, employment, and business operations before loan disbursement.', bullets: ['Geotagged residence and workplace visit reports', 'Employer payroll and HR corroboration on-site', 'Sub-Registrar encumbrance certificate searches'], businessOutcome: 'Prevents underwriting exposure to synthetic identity and documentation fraud.' },
      { title: 'Vehicle Repossession & Custody', desc: 'Authorized repossession of delinquent vehicle collateral with secure yard storage and valuation ahead of public auctions.', bullets: ['RTO registry cross-checks and police liaison', 'Authorized towing and secure yard custody', 'Government-approved panel valuations for e-auction pricing'], businessOutcome: 'Protects collateral value and enables fast asset monetization.' },
      { title: 'Claims & Fraud Investigation', desc: 'SIU field audits for insurance companies to verify motor, health, and life claim authenticity through on-site investigations.', bullets: ['Accident site visits and police FIR cross-checks', 'Hospital admission register and billing forensics', 'Municipal death registry and identity verification'], businessOutcome: 'Reduces fraudulent claims payouts and protects insurer loss ratios.' },
      { title: 'Skip Tracing & Address Intelligence', desc: 'Locating absconded borrowers, guarantors, and claimants through multi-source address intelligence and community cross-checks.', bullets: ['Municipal utility and registry database searches', 'Neighbor and reference corroboration visits', 'Alternate contact and co-borrower verification'], businessOutcome: 'Restores borrower contact to prevent permanent write-offs.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Our structured onboarding and operational pipelines designed for banking committee reviews.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio allocations and mapping coordinates.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'Facilitating OTS settlements and uploading reconciled deposit receipts.', outcome: 'NPA recovery closed and funds transferred.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' },
      { title: 'Improved Collections', desc: 'High-density branch routing maximizes doorstep collections and payments pickup.', value: 'Higher Realization' },
      { title: 'Faster Recovery', desc: 'Dedicated legal coordinate desks expedite magistrate possessions and sales.', value: 'Expedited Warrants' },
      { title: 'Stronger Governance', desc: 'Reconciled dashboard reporting and secure SFTP uploads provide clean audit logs.', value: 'Auditable Trails' }
    ],

    targetIndustries: [
      { name: 'Public Sector Banks', desc: 'Focuses on high-volume retail NPA mortgage default resolution. Coordinates milestone notices campaign.' },
      { name: 'Private Commercial Banks', desc: 'Manages high-value commercial and industrial property possessions. Implements DM Liaison coordination.' },
      { name: 'Small Finance Banks (SFBs)', desc: 'Handles soft call reminders and localized micro-business collections. Operates bilingual tele-outreach.' },
      { name: 'Cooperative Banks', desc: 'Executes localized agricultural term loan recoveries and land verifications. Deploys Panchayat liaison support.' }
    ],

    faqs: [
      { q: 'How does SM Associates align with specific bank SOPs?', a: 'During the onboarding phase, we calibrate our calling lockouts, script limits, and escalation stages to match the lender’s specific internal policy.' },
      { q: 'Do all your field agents hold IIBF certification?', a: 'Yes. 100% of our active collections representatives and field coordinators hold the mandatory IIBF DRA certification.' },
      { q: 'How do you coordinate magistrate evictions under Section 14?', a: 'Our legal desk handles filings at district CJM/CMM courts, arranges locksmiths, and coordinates with local police to execute physical possession.' }
    ],

    cta: {
      heading: 'Schedule an Industry Consultation',
      subheading: 'Connect with our bank empanelment officer to review our credentials and audit records.',
      buttonText: 'Request Empanelment Pack',
      href: '/contact'
    }
  },

  // ================= 3. NBFC =================
  'nbfc': {
    eyebrow: 'NBFC Sector',
    title: 'NBFC Retail Credit Operations & Scale-Based Resolution',
    subtitle: 'Optimizing collection rollback velocity and vehicle repossessions under the RBI Scale-Based Regulation (SBR) framework.',
    description: 'Deploying decentralized field networks to execute doorstep collections, vehicle pickups, and pre-disbursal verifications for leading NBFC books.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Macro Pressures and Sourcing Challenges in NBFC Retail Books',
    problemStatement: [
      { icon: 'trendingDown', title: 'High Ticket-to-Staff Cost Ratios', desc: 'Low-ticket retail portfolios are expensive to recover using traditional manual field networks. High travel costs dilute collections margins.' },
      { icon: 'shieldAlert', title: 'Conduct Violations Risk', desc: 'Outsourced representatives using non-compliant scripts or calling hours expose NBFCs to regulatory audits and loss of brand goodwill.' },
      { icon: 'timer', title: 'Rapid Provisioning Write-offs', desc: 'NBFC asset quality rules require rapid provisioning write-offs for unsecured defaults. Delayed doorstep contact accelerates portfolio write-downs.' }
    ],

    overview: {
      heading: 'NBFC Recovery Operations: Navigating Scale-Based Regulations',
      subheading: 'Optimizing Doorstep Contact Velocity under Pecuniary SARFAESI Thresholds',
      summary: 'NBFC retail portfolios require highly decentralized, compliant doorstep outreach. Operating 19 branches, SM Associates deploys local representatives to verify addresses and collect dues, ensuring same-day contact. We manage the entire recovery cycle under SBR parameters, implementing the statutory ₹20 lakh SARFAESI pecuniary threshold for eligible NBFCs while maintaining complete audit trails.',
      outcomes: [
        { title: 'Same-Day Field Action', desc: 'Decentralized branches ensure immediate dispatch to rural addresses.' },
        { title: 'GPS Route Optimizations', desc: 'Field routes are dynamically mapped to maximize daily visits per agent.' },
        { title: 'Structured Cash Management', desc: 'Daily cash reconciliation and secure bank uploads protect collection funds.' }
      ],
      useCases: [
        { title: 'Two-Wheeler & Auto Loans', desc: 'Doorstep collections and repossession of delinquent vehicles.' },
        { title: 'Consumer Durable Finance', desc: 'High-volume early-stage collections campaigns.' },
        { title: 'MSME Business Loans', desc: 'On-site verification of business capacity and monthly collections.' }
      ]
    },

    tabs: [
      {
        id: 'landscape',
        label: 'Industry Landscape',
        heading: 'The Retail Lending Environment',
        overview: 'NBFCs manage diverse, high-volume retail books requiring rapid on-ground verification and collection systems.',
        activities: [
          'Analyze Gross NPA trends on retail asset classes',
          'Evaluate regional payment collection behaviors check',
          'Monitor compliance directives for retail NBFC collections'
        ],
        documents: [
          'NBFC regulatory guidelines documents',
          'SLA parameters templates check'
        ],
        risks: [
          'Spikes in retail credit delinquencies',
          'Local trade recession exceptions'
        ],
        deliverable: 'NBFC retail portfolio risk assessment.',
        benefit: 'Aligns collections density with NBFC geographic networks.'
      },
      {
        id: 'portfolios',
        label: 'Portfolio Types',
        heading: 'Managing Diverse Loan books',
        overview: 'Tailored workflows for vehicle finance, consumer lending, MSME finance, and gold loans.',
        activities: [
          'Coordinate vehicle repossession logistics checks',
          'Run high-volume tele-outreach for consumer loans',
          'Deploy on-site verifications for MSME business loans'
        ],
        documents: [
          'Borrower account statements check',
          'Repossession authorization deeds'
        ],
        risks: [
          'Vehicle collateral depreciation',
          'MSME factory closures exceptions'
        ],
        deliverable: 'Asset-specific collection action logs.',
        benefit: 'Maximizes rollback rates using customized collection workflows.'
      },
      {
        id: 'challenges',
        label: 'Operational Challenges',
        heading: 'Geographic Density and Absconding Debts',
        overview: 'Overcoming travel cost inflation and tracing absconding debtors in remote zones.',
        activities: [
          'Run registry coordinate checks to locate skip debtors',
          'Optimize field agent routes based on address densities check',
          'Conduct doorstep visits to verify resident stability'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Local utility database check maps'
        ],
        risks: [
          'Unreachable rural addresses check',
          'Incorrect address registers exceptions'
        ],
        deliverable: 'Skip trace and coordinates check reports.',
        benefit: 'Restores contact with missing debtors to prevent write-offs.'
      },
      {
        id: 'services',
        label: 'Recommended Service Portfolio',
        heading: 'Doorstep Collections and Repossession',
        overview: 'Deploying DRA-certified field agents and towing networks to secure assets.',
        activities: [
          'Execute physical payment pickups at borrower doors',
          'Coordinate vehicle seizure notifications with police check',
          'Transport seized assets to secure custody yards'
        ],
        documents: [
          'Collected payment receipts check',
          'Yard inflow status checklist check'
        ],
        risks: [
          'Asset transport damage exceptions',
          'Borrower disputes during seizure check'
        ],
        deliverable: 'Completed payments check or yard custody receipt.',
        benefit: 'Secures collections and repossesses vehicle collateral.'
      },
      {
        id: 'compliance',
        label: 'Compliance & Regulatory Framework',
        heading: 'Enforcing Ethical Field Conduct',
        overview: 'Insulating NBFCs from reputational risks through caller audits.',
        activities: [
          'Lock dialing queues within statuary calling hours checks',
          'Verify agent IIBF DRA active certifications check',
          'Audit field interaction logs for compliance checks'
        ],
        documents: [
          'Agent DRA registration check files',
          'Call quality audit check logs'
        ],
        risks: [
          'Caller hours violations exceptions',
          'Borrower compliance complaints'
        ],
        deliverable: 'Weekly audited compliance reports.',
        benefit: 'Protects lender panels empanelment and brand value.'
      },
      {
        id: 'governance',
        label: 'Business Governance',
        heading: 'Reconciled Cash Management & Dashboard',
        overview: 'Providing daily deposits uploads and real-time dashboard ledger updates.',
        activities: [
          'Reconcile daily payments and deposit nodal bank cash checks',
          'Update account statuses on client console dashboard',
          'Transmit status check CSV files via secure SFTP paths'
        ],
        documents: [
          'Bank cash deposit receipts check',
          'Encrypted SFTP CSV file logs'
        ],
        risks: [
          'Report upload latency exceptions',
          'Data sync errors check'
        ],
        deliverable: 'Daily verified performance records.',
        benefit: 'Provides NBFC finance teams with transparent, auditable logs.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'High-Volume Field Economics', desc: 'Low-ticket NBFC retail accounts are expensive to service via traditional field networks. Travel costs dilute collection margins, making geographic density and route optimization critical.', warningBadge: 'NBFC OPERATIONS', impact: 'SM Associates Operational Approach: GPS-optimized branch routing maximizes visits per agent and lowers per-account recovery cost.' },
      { title: 'Vehicle Collateral Mobility', desc: 'Two-wheeler and auto loan collateral moves freely across district boundaries after default. Tracing and legally repossessing vehicles requires both RTO registry access and police coordination.', warningBadge: 'VEHICLE FINANCE', impact: 'SM Associates Operational Approach: RTO liaison network and authorized towing coordination across 19 branch districts.' },
      { title: 'Rapid SBR Write-off Escalation', desc: 'RBI Scale-Based Regulations mandate tight provisioning timelines. Unsecured NBFC retail accounts that miss early contact windows accelerate directly into write-off buckets.', warningBadge: 'PROVISIONING RISK', impact: 'SM Associates Operational Approach: Same-day doorstep dispatch from decentralized branches prevents early-bucket rollover.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'High-Volume Collections Density', desc: 'NBFC retail books require geolocated doorstep collections to minimize travel expenses and maximize resolution rates.', bullets: ['Mapping travel paths based on address coordinates check', 'Deploying localized branches matching debtor zones', 'Reconciling daily payment collections slips check'], businessOutcome: 'Lower roll-back rates and improved collection margins.' },
      { title: 'Secured Vehicle Repossessions', desc: 'Lawful vehicle tracking, transport, and secure custody storage coordination for delinquent auto loans.', bullets: ['Liaising with district RTO registries', 'Serving police repossession notices checks', 'Transporting seized vehicles to secure CCTV yards'], businessOutcome: 'Protects vehicle collateral value ahead of e-auctions.' },
      { title: 'SME Pre-Disbursal Auditing', desc: 'Confirming applicant operational capacity before capital disbursement to prevent commercial defaults.', bullets: ['Verifying trade license and GST registration records', 'On-site employee headcount check audits', 'Inspecting factory machinery operational status check'], businessOutcome: 'Prevents underwriting credit exposure to shell companies.' },
      { title: 'Soft Call Campaigns', desc: 'Dedicated early-stage dialer queues staffed by bilingual, certified tele-agents.', bullets: ['Voice logger recorded VoIP lines', 'Dialing locked within statutory calling hours check', 'Auditing agent tone and compliance check logs'], businessOutcome: 'Improves early bucket roll-back rates.' },
      { title: 'Skip Tracing & Localizations', desc: 'Locating absconded retail borrowers through localized address checks and community inquiries.', bullets: ['Cross-checking municipal utility registries checks', 'Neighbor corroboration check visits on site', 'Alternative reference validations check'], businessOutcome: 'Restores contact with missing debtors, preventing write-offs.' },
      { title: 'Secure Yard Custody', desc: 'Fenced, CCTV-monitored storage facilities protecting seized assets.', bullets: ['24/7 security watch shifts check', 'Detailed condition check status logs on inflow', 'Weekly inventory reconciliations'], businessOutcome: 'Safeguards collateral resale value.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'How we onboard, calibrate, and execute campaigns across NBFC lending verticals.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Evaluating the retail default database and mapping address geolocations.', outcome: 'Portfolio segmented by risk bucket and district coordinates.' },
        { step: '02', title: 'Planning', desc: 'Setting calling script boundaries, calling locks, and deployment timelines.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinates coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Initiating 100% voice logs monitoring and geotagged visit audits.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'Updating OTS templates and uploading reconciled payment deposit receipts.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' },
      { title: 'Improved Collections', desc: 'High-density branch routing maximizes doorstep collections and payments pickup.', value: 'Higher Realization' },
      { title: 'Faster Recovery', desc: 'Dedicated legal coordinate desks expedite magistrate possessions and sales.', value: 'Expedited Warrants' },
      { title: 'Stronger Governance', desc: 'Reconciled dashboard reporting and secure SFTP uploads provide clean audit logs.', value: 'Auditable Trails' }
    ],

    targetIndustries: [
      { name: 'Consumer Lending', desc: 'Focuses on high-volume early-stage collections campaigns. Installs compliant soft tele-reminders.' },
      { name: 'Vehicle Finance', desc: 'Executes authorized vehicle repossession and secure yard custody. Coordinates RTO police liaison.' },
      { name: 'MSME Lending', desc: 'Manages on-site business operations verifications and collections. Implements GST registry validation.' },
      { name: 'Gold Loans', desc: 'Coordinates soft call reminders and localized address verification checks. Establishes empathetic outreach.' }
    ],

    faqs: [
      { q: 'How do you coordinate cash collections and transfers?', a: 'Our field officers issue digital or physical receipts immediately on collection. Funds are deposited in the client’s nodal account within 24 hours, with deposit slips uploaded to the MIS daily.' },
      { q: 'Do all your field representatives hold DRA certification?', a: 'Yes. 100% of our active collections representatives and field coordinators hold the mandatory IIBF DRA certification.' },
      { q: 'Do you manage repossession under magistrate orders?', a: 'Yes. We coordinate with local municipal and police authorities, serving all required notices before executing repossession.' }
    ],

    cta: {
      heading: 'Discuss Your Portfolio Challenges',
      subheading: 'Connect with our NBFC collections manager to review our branch coverage and audit records.',
      buttonText: 'Request Case Benchmarks',
      href: '/contact'
    }
  },

  // ================= 4. HOUSING FINANCE =================
  'housing-finance': {
    eyebrow: 'Housing Finance Sector',
    title: 'Housing Finance Mortgage Foreclosure & SARFAESI Execution',
    subtitle: 'Accelerating symbolic and physical possessions under the NHB Act and Section 13(4)/14 of the SARFAESI Act.',
    description: 'Drafting statutory demand notices, securing physical repossession orders from CJM/CMM courts, and coordinating e-auctions for HFC portfolios.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Lending Obstacles and Foreclosure Delays in Housing Finance Mortgages',
    problemStatement: [
      { icon: 'trendingDown', title: 'Magistrate Warrants Delays', desc: 'Inefficient filing of Section 14 petitions CJM courts stalls possessions. Delinquent properties remain occupied, extending foreclosure cycles.' },
      { icon: 'shieldAlert', title: 'Collateral Vandalism Risks', desc: 'Repossessed properties targeted by trespassers or damaged due to poor security deployments. Direct loss in realizable auction pricing.' },
      { icon: 'timer', title: 'Title Deed Registry Gaps', desc: 'Missing registry encumbrance details or duplicate title deeds complicate foreclosure files, resulting in failed public auctions.' }
    ],

    overview: {
      heading: 'Mortgage Asset Foreclosure: Securing Eviction Orders',
      subheading: 'Executing Possession Orders Under Supreme Court Section 13(8) Precedents',
      summary: 'Secured mortgage recoveries depend on tight adherence to statutory timelines to prevent borrower challenges. SM Associates operates a dedicated foreclosure desk that coordinates Section 13 notice serving, Section 14 magistrate orders, physical possession eviction, and e-auctions. Our legal coordinators manage the entire SARFAESI enforcement cycle — from composite demand notice serving through Sub-Registrar encumbrance clearance to final auction sale deed registration.',
      outcomes: [
        { title: 'Magistrate Orders Speed', desc: 'Legal coordinators file CJM petitions within 14 days of default.' },
        { title: 'Video-Logged Seizures', desc: 'All physical possessions are video-recorded to verify inventory.' },
        { title: 'Panel Valuation Accuracy', desc: 'Government-approved valuers verify property conditions to set reserve prices.' }
      ],
      useCases: [
        { title: 'Affordable Housing Loans', desc: 'Notice serving and soft resolution facilitation.' },
        { title: 'High-Value Property Possessions', desc: 'Magistrate warrant executions and police coordination.' },
        { title: 'Public Auction Publicity', desc: 'Newspaper notifications and buyer mobilization.' }
      ]
    },

    tabs: [
      {
        id: 'landscape',
        label: 'Industry Landscape',
        heading: 'The Mortgage Foreclosure Environment',
        overview: 'Housing Finance Companies (HFCs) require legal precision to resolve delinquent mortgage books under SARFAESI guidelines.',
        activities: [
          'Monitor CJM/CMM legal coordinate updates',
          'Assess statutory timelines compliance parameters check',
          'Evaluate real estate valuation trends in default areas check'
        ],
        documents: [
          'SARFAESI Act statutory reference files',
          'Sub-Registrar deed registry formats'
        ],
        risks: [
          'Extended legal pendency timelines',
          'Duplicate title registration exceptions check'
        ],
        deliverable: 'HFC mortgage foreclosure risk assessment.',
        benefit: 'Aligns legal filings with local court advocate panels.'
      },
      {
        id: 'portfolios',
        label: 'Portfolio Types',
        heading: 'Managing Mortgage Delinquencies',
        overview: 'Specialized resolution workflows for Home Loans, Affordable Housing, LAP, and Builder Finance.',
        activities: [
          'Coordinate demand notices serving for home loans',
          'Track developer project completions check on builder finance',
          'Deploy local address verifications check for LAP applicants'
        ],
        documents: [
          'Mortgage deed registration certificates check',
          'Affidavit certification formats check'
        ],
        risks: [
          'Illegal tenant occupations',
          'Builder default CIRP exceptions check'
        ],
        deliverable: 'Asset class foreclosure action logs.',
        benefit: 'Ensures correct legal notices formats matching loan type.'
      },
      {
        id: 'challenges',
        label: 'Operational Challenges',
        heading: 'Warrants Delay and Collateral Safety Gaps',
        overview: 'Overcoming magistrate delays and securing repossessed sites.',
        activities: [
          'Liaise with court advocates to track Section 14 orders check',
          'Deploy security guards to protect repossessed factories checks',
          'Conduct Sub-Registrar encumbrance certificate registries checks'
        ],
        documents: [
          'Magistrate order petition certificates check',
          'Security guard status log files'
        ],
        risks: [
          'Magistrate warrant delays exceptions check',
          'Asset damage and trespass attempts exceptions'
        ],
        deliverable: 'Evictions and security status check reports.',
        benefit: 'Obtains possessions warrants and protects asset value.'
      },
      {
        id: 'services',
        label: 'Recommended Service Portfolio',
        heading: 'SARFAESI notices & Public Auctions',
        overview: 'Serving Section 13 notices and executing public e-auctions.',
        activities: [
          'Draft and serve Section 13(2) demand notices check',
          'Publish symbolic possession notifications in regional papers',
          'Setup online e-auction bidder registrations check'
        ],
        documents: [
          'Served notice proof certificates check',
          'E-Auction public publication clippings check'
        ],
        risks: [
          'DRT court challenge delays check',
          'Failed auctions due to reserve pricing disputes'
        ],
        deliverable: 'Legally served notice proofs and auction deeds.',
        benefit: 'Resolves Stage-3 default books, releasing capital reserves.'
      },
      {
        id: 'compliance',
        label: 'Compliance & Regulatory Framework',
        heading: 'Strict Notice serving Audits',
        overview: 'Enforcing double audit checks on notice texts and delivery proofs.',
        activities: [
          'Verify notice text formatting checks for compliance',
          'Document notice servings check with geolocated photos',
          'Review newspaper publication clippings matching bank lists'
        ],
        documents: [
          'Notice delivery proof registers check',
          'Audited publication check logs'
        ],
        risks: [
          'Notice serving formatting error exceptions',
          'Borrower dispute challenges check'
        ],
        deliverable: 'Audited legal notice serving reports.',
        benefit: 'Insulates foreclosures from borrower legal challenges in DRTs.'
      },
      {
        id: 'governance',
        label: 'Business Governance',
        heading: 'Transparent Case dashboard updates',
        overview: 'Providing real-time updates and reconciled reports via secure SFTP.',
        activities: [
          'Update foreclosure milestones on client dashboard in real-time',
          'Transmit completed property valuation check logs via SFTP',
          'Reconcile public auction deposits in bank nodal account'
        ],
        documents: [
          'Secure SFTP CSV file logs check',
          'Reconciled auction deposit ledgers check'
        ],
        risks: [
          'Data sync exceptions checks',
          'Report upload latency exceptions'
        ],
        deliverable: 'Weekly verified performance records.',
        benefit: 'Provides HFC finance teams with transparent, auditable logs.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Section 14 Magistrate Warrant Delays', desc: 'CJM court backlogs extend the time between physical possession applications and actual warrant execution. HFC mortgage assets remain occupied by defaulters, incurring holding and security costs.', warningBadge: 'MORTGAGE ENFORCEMENT', impact: 'SM Associates Operational Approach: Dedicated legal desk with local CJM/CMM advocate empanelment for faster petition turnaround.' },
      { title: 'Undisclosed Tenancy Disputes', desc: 'Third-party tenants presenting informal lease agreements after mortgage default, creating legal challenges to physical possession and blocking auction timelines.', warningBadge: 'PROPERTY DISPUTES', impact: 'SM Associates Operational Approach: Pre-possession site verification and coordinate checks to document occupancy status before filing.' },
      { title: 'Title Deed Registry Gaps', desc: 'Missing encumbrance certificates or duplicate title registrations discovered during auction due diligence, causing failed bidding rounds and re-listing delays.', warningBadge: 'TITLE INTEGRITY', impact: 'SM Associates Operational Approach: Sub-Registrar encumbrance searches and cross-matching of property ownership records before reserve pricing.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'SARFAESI Notices Serving', desc: 'HFC mortgage defaults require legally valid and certified notices delivery to initiate foreclosures.', bullets: ['In-hand delivery with signature proof', 'Registered post tracking with acknowledgment cards', 'Affixation check with geotagged photo logs if absent'], businessOutcome: 'Starts the statutory timeline for default resolution.' },
      { title: 'Magistrate warrant executions', desc: 'Filing petitions under Section 14 to secure possession warrants from magistrates.', bullets: ['Liaising with district legal panel advocates check', 'Preparing CMM/CJM court petition dossiers check', 'Coordinating police presence and logistics on-site'], businessOutcome: 'Legally authorizes physical eviction of defaulters.' },
      { title: 'Physical Possessions Logistics', desc: 'Ground coordination of lockouts and inventory verifications.', bullets: ['Coordinating locksmiths, security forces, and police assistance', 'Taking physical possession and securing the site', 'Detailed inventory checks of repossessed items'], businessOutcome: 'Secures physical asset with zero operational disputes.' },
      { title: 'Secure Yard Custody', desc: 'Storing repossessed property contents in fenced, CCTV-monitored facilities pending auction.', bullets: ['24/7 security guard shifts and CCTV monitoring', 'Detailed inventory status log on property inflow', 'Weekly condition reconciliation reports for HFC records'], businessOutcome: 'Protects the value of repossessed mortgage collateral.' },
      { title: 'Affordable Housing Soft Collections', desc: 'Empathetic early-stage outreach for affordable housing loan borrowers before default escalates to legal enforcement.', bullets: ['Bilingual outbound calling within statutory hours', 'DRA-certified field officer doorstep payment facilitation', 'OTS eligibility assessment and settlement facilitation'], businessOutcome: 'Reduces early-stage delinquency and preserves customer relationships on affordable housing portfolios.' },
      { title: 'Asset Valuation Panel Support', desc: 'Property valuations by government-approved panel engineers to set accurate e-auction reserve prices.', bullets: ['Structural assessment by empanelled engineers', 'Municipal price index cross-validation', 'Formal valuation reports in HFC-compliant formats'], businessOutcome: 'Ensures defensible reserve pricing to prevent failed auctions.' }
    ],

    processFlow: {
      title: 'Mortgage Foreclosure Engagement Journey',
      desc: 'Five-stage SARFAESI enforcement pipeline from delinquent mortgage intake to auction sale deed.',
      steps: [
        { step: '01', title: 'Mortgage Portfolio Review', desc: 'Importing delinquent mortgage accounts, verifying title deeds via Sub-Registrar encumbrance search, and categorizing by legal stage.', outcome: 'Clean asset register with documented title status and litigation risk flags.' },
        { step: '02', title: 'Demand Notice Service', desc: 'Drafting Section 13(2) demand notices, executing in-hand/registered post delivery, and filing affixation logs with geotagged photos.', outcome: 'Legally served demand notices with delivery proof triggering statutory 60-day timeline.' },
        { step: '03', title: 'Possession Execution', desc: 'Filing Section 14 CJM petition, coordinating magistrate warrant, and executing physical possession with police presence and locksmith support.', outcome: 'Physical possession taken and secured with video inventory documentation.' },
        { step: '04', title: 'Site Security & Valuation', desc: 'Deploying security guards immediately on possession, followed by government-approved panel engineer valuation for reserve price setting.', outcome: 'Secured site with formal valuation report submitted to HFC committee.' },
        { step: '05', title: 'Public E-Auction', desc: 'Publishing auction notices in regional newspapers, listing on online portals, mobilizing buyer networks, and managing bid-day operations.', outcome: 'Auction sale deed registered and proceeds deposited to HFC nodal account.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Faster Possession Timelines', desc: 'Empanelled CJM advocates and legal coordinators compress magistrate petition processing from months to weeks.', value: 'Expedited Warrants' },
      { title: 'Clean Collateral Transfers', desc: 'Sub-Registrar encumbrance searches and title validation ensure auction sale deeds are free from litigation risk.', value: 'Clean Title Sales' },
      { title: 'Defensible Auction Prices', desc: 'Government-approved panel valuations with municipal index cross-checks prevent reserve pricing disputes and failed bids.', value: 'Optimal Recovery Yields' },
      { title: 'Zero Conduct Exposure', desc: 'All notice servings are documented with delivery proofs, geotagged photos, and registered acknowledgments.', value: 'Audit Safe' },
      { title: 'Reduced Provisioning Drag', desc: 'Stage-3 mortgage assets resolved through legal execution reduce HFC capital provisioning requirements.', value: 'Capital Released' },
      { title: 'Transparent Governance', desc: 'Milestone updates on client dashboard with secure SFTP uploads give HFC compliance teams complete audit trails.', value: 'Auditable Trails' }
    ],

    targetIndustries: [
      { name: 'Home Loans', desc: 'Handles high-volume retail mortgage default notice campaigns. Executes milestone notice serving.' },
      { name: 'Affordable Housing', desc: 'Manages notice serving and soft resolution facilitation. Implements standardized TAT notices.' },
      { name: 'LAP', desc: 'Coordinates on-site address checks and verification diagnostics. Delivers CPV profile verification.' },
      { name: 'Builder Finance', desc: 'Conducts developer project completion checks and inventories. Implements GST registry validation.' }
    ],

    faqs: [
      { q: 'How do you coordinate magistrate evictions under Section 14?', a: 'Our legal desk handles filings at district CJM/CMM courts, arranges locksmiths, and coordinates with local police to execute physical possession.' },
      { q: 'Do all your field representatives hold DRA certification?', a: 'Yes. 100% of our active collections representatives and field coordinators hold the mandatory IIBF DRA certification.' },
      { q: 'Do you manage property security and custody yards?', a: 'Yes. We deploy ex-defence security guards for physical premises and operate secure, fenced custody yards for machinery and vehicles.' }
    ],

    cta: {
      heading: 'Request an Industry Assessment',
      subheading: 'Connect with our mortgage foreclosure desk to review our CJM advocate panels and audit records.',
      buttonText: 'Request HFC Strategy Meeting',
      href: '/contact'
    }
  },

  // ================= 5. MICROFINANCE =================
  'microfinance': {
    eyebrow: 'Microfinance Sector',
    title: 'Microfinance Portfolio Compliance & Ethical Outreach',
    subtitle: 'Managing joint-liability group (JLG) collections and rural address validations under strict RBI credit conduct directives.',
    description: 'Outbound calling and doorstep coordination designed specifically for SFBs and NBFC-MFIs under Customer Dignity Mandates.',
    primaryCtaText: 'Request MFI Team Meeting',
    secondaryCtaText: 'View Fair Practices Code Guidelines',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'MFI Compliance Pain',
    problemStatementHeading: 'The Compliance Vulnerabilities in Microfinance Recoveries',
    problemStatement: [
      { icon: 'shield', title: 'High Client Attrition Risk', desc: 'Aggressive field tactics by uncertified agents trigger client attrition and local disputes, damaging the institution\'s brand.' },
      { icon: 'timer', title: 'Strict Calling Hours Adherence', desc: 'Outbound calls made before 08:00 AM or after 07:00 PM violate regulatory codes, exposing lenders to licensing audits.' },
      { icon: 'users', title: 'Loss of Client Touchpoints', desc: 'Joint Liability Group (JLG) members relocating without notice disrupt collections cycles. Tracking requires localized regional presence.' }
    ],

    overview: {
      heading: 'MFI Field Coordination: Maintaining Asset Quality Respectfully',
      subheading: 'Managing Joint Liability Group collections under RBI Customer Protection Rules',
      summary: 'Microfinance collections require strict adherence to customer protection guidelines to manage regional delinquency trends. SM Associates structures JLG collections around background-verified, bilingual representatives. We enforce strict caller logs and doorstep visit guidelines, resolving defaults respectfully to protect customer relationships while reducing portfolio stress.',
      outcomes: [
        { title: 'Bilingual Call Center Support', desc: 'Outbound collections queues staffed by local language representatives.' },
        { title: 'VoIP Call Log Locks', desc: 'System restricts outbound calls strictly within approved hours.' },
        { title: 'Grievance Resolution', desc: 'Compliance managers resolve customer disputes within 24 hours.' }
      ],
      useCases: [
        { title: 'JLG Default Resolutions', desc: 'Discreet doorstep coordination with group coordinators.' },
        { title: 'Early-Stage Call Reminders', desc: 'Automated VoIP reminders ahead of monthly cycle dates.' },
        { title: 'Address & Profile Updates', desc: 'Locating relocated group members through community networks.' }
      ]
    },

    tabs: [
      {
        id: 'softcall',
        label: 'Call Reminders',
        heading: 'Compliant Soft Calling Campaigns',
        overview: 'Outbound telephone reminders using soft bilingual scripts.',
        activities: [
          'Monitor caller script guidelines alignment audits',
          'Enforce strict calling hours queue locking checks',
          'Archive voice logger recordings for audit trails'
        ],
        documents: [
          'VoIP dialer logs check files',
          'Approved bilingual call scripts'
        ],
        risks: [
          'Borrower grievances exceptions',
          'Outreach hour violations'
        ],
        deliverable: 'Compliant payment commitment logs.',
        benefit: 'Reduces early-stage delinquency rollovers safely.'
      },
      {
        id: 'mfi-visits',
        label: 'doorstep Visits',
        heading: 'Group Coordinator doorstep Outreach',
        overview: 'Field visits by certified representatives to coordinate group defaults.',
        activities: [
          'Conduct discreet doorstep checks visits to JLG leaders',
          'Log geotagged GPS timestamps coordinate check on site',
          'Cross-match borrower profile data registers check'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Panchayat status checklists'
        ],
        risks: [
          'Group coordination failures',
          'Borrower relocation exceptions'
        ],
        deliverable: 'door verification status check reports.',
        benefit: 'Restores default accounts to active collections.'
      },
      {
        id: 'skip-trace',
        label: 'Reference Checks',
        heading: 'Co-borrower and Reference Tracing',
        overview: 'Skip tracing absconded group members through local networks.',
        activities: [
          'Cross-check community address registries and files',
          'Corroborate borrower details with neighbors',
          'Verify alternate references coordinates checks'
        ],
        documents: [
          'Reference validation check files',
          'Local utility database check maps'
        ],
        risks: [
          'Absconding borrower untraceability',
          'Missing database coordinates check'
        ],
        deliverable: 'Verified address and contact coordinate reports.',
        benefit: 'Restores contact lines with missing debtors.'
      },
      {
        id: 'ots-facilitation',
        label: 'Settlement OTS',
        heading: 'Mediating OTS & Settlements',
        overview: 'Facilitating out-of-court settlements and OTS agreements.',
        activities: [
          'Verify borrower eligibility metrics checks',
          'Draft OTS agreement documentation files check',
          'Reconcile daily cash and nodal bank slips details'
        ],
        documents: [
          'Approved OTS certificate files',
          'Bank deposits confirmations'
        ],
        risks: [
          'OTS processing delays',
          'Deposit reconciliation exceptions'
        ],
        deliverable: 'OTS transaction deed and closed account file.',
        benefit: 'Resolves outstanding NPAs while protecting goodwill.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'JLG Member Seasonal Migration', desc: 'Rural and semi-urban Joint Liability Group members relocate during harvest seasons, disrupting monthly collection cycles and breaking group accountability structures.', warningBadge: 'JLG COLLECTIONS', impact: 'SM Associates Operational Approach: Localized rural branch presence enables doorstep tracing and community reference checks to restore contact.' },
      { title: 'Community Reputation Exposure', desc: 'Aggressive or non-compliant field tactics in close-knit rural communities trigger severe brand damage. MFI client attrition and local opposition movements can emerge from a single conduct violation.', warningBadge: 'CONDUCT RISK', impact: 'SM Associates Operational Approach: Background-verified bilingual agents operate under strict RBI Customer Dignity Mandate guidelines with 100% voice-logged interactions.' },
      { title: 'Cash Collection Reconciliation Gaps', desc: 'High-volume daily cash collections across dispersed rural zones create reconciliation lags. Missing deposit slips or unverified cash flows create compliance exposure for NBFC-MFIs.', warningBadge: 'CASH MANAGEMENT', impact: 'SM Associates Operational Approach: Daily nodal bank deposits with digital receipt upload and real-time MIS dashboard reconciliation.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'JLG Group Collection Coordination', desc: 'Structured doorstep outreach to Joint Liability Group leaders to facilitate monthly installment collections.', bullets: ['Coordinating with JLG center leaders for group meetings', 'Discreet individual follow-up for missing members', 'Facilitating group-level default mediation'], businessOutcome: 'Sustains group accountability and reduces collective default rates.' },
      { title: 'Bilingual Outbound Calling', desc: 'Soft tele-reminders delivered in local regional languages within strict RBI calling hour windows.', bullets: ['Tamil, Telugu, Kannada, and Malayalam-speaking agents', 'VoIP dialer locked to 08:00 AM – 07:00 PM call windows', 'Voice-logged call archives for compliance audits'], businessOutcome: 'Reduces early delinquency while preserving borrower dignity.' },
      { title: 'Rural Doorstep Outreach', desc: 'Certified field representatives conducting in-person visits to rural and semi-urban borrower homes.', bullets: ['Geotagged GPS-timestamped visit logs', 'Community Panchayat liaison for group support', 'Empathetic collections aligned with harvest income cycles'], businessOutcome: 'Restores payment discipline without community friction.' },
      { title: 'JLG Member Skip Tracing', desc: 'Locating relocated group members through community networks and local reference cross-checks.', bullets: ['Community inquiry with neighbors and co-members', 'Cross-referencing Aadhaar-linked address updates', 'Coordinating with local BCs for alternate contact leads'], businessOutcome: 'Prevents permanent write-offs from seasonal borrower migration.' },
      { title: 'OTS & Group Settlement Facilitation', desc: 'Mediating out-of-court settlements for delinquent JLG accounts within MFI-approved parameters.', bullets: ['Verifying borrower eligibility for OTS schemes', 'Drafting settlement documentation compliant with NBFC-MFI guidelines', 'Reconciling OTS receipts and uploading to lender MIS'], businessOutcome: 'Resolves stressed accounts while preserving client relationships.' },
      { title: 'Grievance Management Desk', desc: 'Dedicated escalation desk handling borrower complaints and regulatory grievance filings within mandated resolution windows.', bullets: ['24-hour grievance acknowledgment turnaround', 'Bilingual complaint documentation and tracking', 'Regulatory reporting to NBFC-MFI compliance officers'], businessOutcome: 'Protects the institution from RBI conduct audit findings.' }
    ],

    processFlow: {
      title: 'MFI Collections Engagement Journey',
      desc: 'Five-stage workflow for JLG portfolio stabilization from onboarding to settlement.',
      steps: [
        { step: '01', title: 'JLG Portfolio Mapping', desc: 'Importing the MFI delinquent JLG portfolio, mapping group members to local branch zones, and tagging seasonal migration risks.', outcome: 'Group-level risk profile with branch-to-JLG assignment ready for dispatch.' },
        { step: '02', title: 'Bilingual Campaign Setup', desc: 'Configuring calling scripts in regional languages, locking VoIP dialer hours to 08:00 AM – 07:00 PM, and calibrating escalation paths per MFI code of conduct.', outcome: 'Compliance-validated calling campaign live within 48 hours of onboarding.' },
        { step: '03', title: 'Calling & Doorstep Outreach', desc: 'Running soft tele-reminders followed by field officer doorstep visits for non-responding group members.', outcome: 'Geotagged doorstep visit logs and voice-recorded call archives for compliance.' },
        { step: '04', title: 'Reference & Skip Tracing', desc: 'Locating relocated JLG members through community networks, Panchayat contacts, and alternate reference validation.', outcome: 'Restored contact details confirmed and updated in lender MIS.' },
        { step: '05', title: 'OTS & Group Settlement', desc: 'Facilitating out-of-court group settlements for stressed JLG accounts within MFI-approved OTS parameters.', outcome: 'OTS agreement executed and reconciled deposit uploaded to lender dashboard.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'JLG Portfolio Stabilization', desc: 'Group-level outreach and mediation reduces collective default spread across Joint Liability Groups.', value: 'Group Cohesion Restored' },
      { title: 'Zero Conduct Violations', desc: '100% voice-logged calling within statutory hours and background-verified field agents eliminate regulatory exposure.', value: 'Conduct Safe' },
      { title: 'Rural Last-Mile Coverage', desc: 'Localized 19-branch network reaches semi-urban and rural JLG borrowers that centralized operations cannot access.', value: 'Last-Mile Reach' }
    ],

    targetIndustries: [
      { name: 'NBFC-MFIs', desc: 'Manages JLG group collections, compliance-aligned calling campaigns, and cash reconciliation for NBFC-registered microfinance institutions.' },
      { name: 'Small Finance Banks', desc: 'Supports SFB micro-borrower portfolios with bilingual outreach, doorstep visits, and OTS facilitation under SFB regulatory guidelines.' },
      { name: 'Business Correspondent Networks', desc: 'Provides last-mile field outreach support for BC-linked borrower pools in semi-urban and rural geographies.' }
    ],

    faqs: [
      { q: 'How do you handle JLG group defaults?', a: 'Our field officers coordinate with JLG center leaders, facilitate group meetings, and mediate individual defaults discreetly while preserving group cohesion.' },
      { q: 'Do your agents speak local languages?', a: 'Yes. Our tele-calling teams include Tamil, Telugu, Kannada, and Malayalam-speaking agents trained on soft-collections scripts aligned with RBI Customer Dignity Mandates.' },
      { q: 'How do you handle borrower grievances?', a: 'Our grievance desk acknowledges all complaints within 24 hours and tracks resolution through to closure, with reports available to the MFI compliance officer.' }
    ],

    cta: {
      heading: 'Meet Our MFI Team',
      subheading: 'Connect with our microfinance collections desk to review our rural branch coverage and compliance framework.',
      buttonText: 'Meet Our MFI Team',
      href: '/contact'
    }
  },

  // ================= 7. ARC =================
  'arc': {
    eyebrow: 'ARC Sector',
    title: 'Asset Reconstruction Company NPA Portfolio Liquidation',
    subtitle: 'Expediting stressed asset takeovers, property valuations, and public e-auctions to release locked provisioning capital.',
    description: 'Executing physical takeovers, Government-approved reserve valuations, secure custody yard storage, and public auctions for ARC portfolios.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Valuation Depreciation and Legal Obstacles in Purchased Banking Books',
    problemStatement: [
      { icon: 'trendingDown', title: 'Physical Possessions Delays', desc: 'Extended Section 14 magistrate warrant backlogs delay symbolic to physical possession transfers, causing holding expenses inflation.' },
      { icon: 'shieldAlert', title: 'Asset Depreciation & Vandalism', desc: 'Unsecured commercial factories or equipment fleets targeted by trespassers or damaged, reducing the realisable auction yields.' },
      { icon: 'timer', title: 'Failed E-Auctions', desc: 'Missing registry document histories or inaccurate property reserve pricing lead to failed public auctions, locking up resolution capital.' }
    ],

    overview: {
      heading: 'Stressed Asset Monetization: Securing and Liquidating NPA Portfolios',
      subheading: 'Managing Foreclosure Auctions under the 2025 Securitisation and Stressed Assets Directions',
      summary: 'ARCs need an operational partner to manage the legal and security logistics of acquired stressed assets. Under the 2025 Securitisation of Stressed Assets Directions, SM Associates provides single-window support: executing physical possessions, deploying security guards, coordinating valuations with panel surveyors, and managing e-auctions to maximize recovery yields.',
      outcomes: [
        { title: 'Industrial Site Security', desc: 'Ex-military guards deployed to protect closed manufacturing facilities.' },
        { title: 'Deed Registration Forensics', desc: 'Title validation searches at registrar offices to ensure clean sales.' },
        { title: 'E-Auction Bidder Outreach', desc: 'Direct marketing of auction assets to institutional and private buyers.' }
      ],
      useCases: [
        { title: 'Industrial Factory Foreclosures', desc: 'Securing factory premises and coordinating inventory valuations.' },
        { title: 'Commercial Real Estate Auctions', desc: 'Obtaining Sec 1magistrate orders and managing public bidding.' },
        { title: 'Acquired Retail NPA Books', desc: 'High-volume doorstep collections and skip-tracing campaigns.' }
      ]
    },

    tabs: [
      {
        id: 'scoring',
        label: 'Scoring Check',
        heading: 'NPA Portfolio Grading & Risk Assessment',
        overview: 'Importing acquired NPA files and evaluating resolution parameters.',
        activities: [
          'Verify registry title documentation paths check',
          'Grade collateral values using municipal indices',
          'Generate custom resolution roadmap dossiers check'
        ],
        documents: [
          'Acquired NPA case lists check',
          'Lender asset deed registers'
        ],
        risks: [
          'Missing title deed registers check',
          'Incomplete documentation audits'
        ],
        deliverable: 'Audited portfolio resolution roadmap.',
        benefit: 'Sets correct reserve pricing templates.'
      },
      {
        id: 'noticing',
        label: 'Notice Affixation',
        heading: 'SARFAESI notices & publications',
        overview: 'Serving Section 13 demand notices to all default parties.',
        activities: [
          'Draft legally compliant demand notices checks',
          'Execute notice affixations with photo check logs',
          'Liaise with advocate panels for publications'
        ],
        documents: [
          'Section 13(2)/13(4) notices files',
          'Affixation photograph registries'
        ],
        risks: [
          'Borrower avoidance exceptions',
          'Publication delay exceptions'
        ],
        deliverable: 'Notice served with valid legal proof.',
        benefit: 'Establishes valid foreclosure path for auctions.'
      },
      {
        id: 'security-deploy',
        label: 'Site Security',
        heading: 'Factory & Commercial Site Guards',
        overview: 'Deploying ex-defence security guards to secure premises.',
        activities: [
          'Deploy 24/7 security watch shifts check',
          'Conduct weekly property condition log audits',
          'Coordinate perimeter security installations check'
        ],
        documents: [
          'Security shifts rosters check',
          'Property status photo logs'
        ],
        risks: [
          'Trespassing attempts exceptions',
          'Asset damage exceptions'
        ],
        deliverable: 'Audited facility security report.',
        benefit: 'Prevents collateral damage or illegal occupancy.'
      },
      {
        id: 'public-auctions',
        label: 'Collateral Auction',
        heading: 'E-Auctions & Bidder Mobilization',
        overview: 'Publicizing auctions and managing e-bids to realize capital.',
        activities: [
          'Configure property data logs on online consoles',
          'Marketing property auctions via broker networks',
          'Document bids logs trails for compliance audits'
        ],
        documents: [
          'Auction publications files',
          'Reconciliation ledger checks'
        ],
        risks: [
          'Low bidder turnout exceptions',
          'Reconciliation errors check'
        ],
        deliverable: 'Auction transaction deed and title certificate.',
        benefit: 'Maximizes resolution recovery yields on NPA books.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Asset Deterioration During Holding', desc: 'Foreclosed industrial sites, commercial properties, and machinery fleets deteriorate rapidly without active security. Vandalism and unauthorized occupancy reduce realizable auction prices significantly.', warningBadge: 'ASSET PRESERVATION', impact: 'SM Associates Operational Approach: Ex-defence security guards deployed immediately on physical possession with weekly photographic condition logs.' },
      { title: 'Title Encumbrance Disputes', desc: 'Purchased NPA portfolios often carry concealed prior mortgages, duplicate registrations, or boundary encroachments that surface during auction due diligence, causing failed bids.', warningBadge: 'TITLE INTEGRITY', impact: 'SM Associates Operational Approach: Sub-Registrar encumbrance searches and cross-boundary verification before reserve pricing to ensure clean title sales.' },
      { title: 'Reserve Pricing and Auction Failures', desc: 'Inaccurate reserve prices relative to current market realities result in failed first auctions. Re-listing cycles inflate holding expenses and reduce ARC recovery yields.', warningBadge: 'AUCTION EFFICIENCY', impact: 'SM Associates Operational Approach: Government-approved panel valuers set market-calibrated reserve prices with municipal index cross-checks.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'Sec 14 evictions Coordination', desc: 'Obtaining magistrate orders and coordinating with local authorities to execute evictions.', bullets: ['Preparing affidavits and petition files', 'Arranging police presence and logistics', 'Taking physical possession and securing the site'], businessOutcome: 'Secures complete physical custody of commercial and retail assets.' },
      { title: 'Industrial Facility Security', desc: 'Deploying ex-defence security personnel to protect foreclosed factories.', bullets: ['24/7 guard presence and shift logs', 'Weekly status reports with photos', 'Perimeter checks to prevent encroachment'], businessOutcome: 'Prevents vandalism and maintains asset condition.' },
      { title: 'Forensic Property Title Checking', desc: 'Verifying registry records at Sub-Registrar offices to confirm clean title deeds.', bullets: ['Encumbrance search and certificate validation', 'Cross-matching boundaries on site', 'Confirming title ownership records'], businessOutcome: 'Ensures clean asset sale certificates, avoiding litigation.' },
      { title: 'Government-Approved Valuations', desc: 'Setting accurate reserve prices through physical asset valuations.', bullets: ['Valuations by panel engineers and surveyors', 'Detailed reports matching bank formats', 'Validating asset market index pricing'], businessOutcome: 'Ensures correct reserve pricing compliant with guidelines.' },
      { title: 'E-Auction Coordination & Marketing', desc: 'Publicizing auctions and managing e-bids to maximize realization yields.', bullets: ['Notice publications in regional newspapers', 'Online portal listings and auction setup', 'Direct outreach to potential buyers'], businessOutcome: 'Enables public sale of foreclosed assets at optimal value.' },
      { title: 'NPA Portfolio Skip-Tracing', desc: 'Locating absconded co-borrowers and guarantors of acquired books.', bullets: ['Cross-checking municipal registries', 'Community inquiries on site', 'Utility records validation'], businessOutcome: 'Restores contact to negotiate out-of-court settlements.' }
    ],

    processFlow: {
      title: 'ARC Portfolio Resolution Journey',
      desc: 'Five-stage workflow from acquired NPA portfolio intake to final auction sale deed.',
      steps: [
        { step: '01', title: 'Portfolio Due Diligence', desc: 'Importing acquired NPA case files, verifying title deeds, and grading assets by resolution complexity.', outcome: 'Asset-by-asset resolution roadmap with documented encumbrance status.' },
        { step: '02', title: 'Notice Service Campaign', desc: 'Drafting and serving Section 13(2)/13(4) demand notices with affixation logs and registered post tracking.', outcome: 'Legally served notices with geotagged photo proof and acknowledgment records.' },
        { step: '03', title: 'Security Deployment', desc: 'Placing ex-defence security guards on physical possession day to protect the site from unauthorized entry.', outcome: '24/7 guarded facility with weekly condition status photo logs.' },
        { step: '04', title: 'Valuation & Reserve Pricing', desc: 'Coordinating government-approved panel valuers for structural assessment and market-calibrated reserve price setting.', outcome: 'Formal valuation report accepted by ARC compliance team.' },
        { step: '05', title: 'E-Auction Execution', desc: 'Publishing auction notices, mobilizing bidder networks, and managing online bidding to realize maximum recovery yields.', outcome: 'Auction sale deed registered and proceeds transferred to ARC account.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Faster Asset Monetization', desc: 'Dedicated legal and security coordination compresses time from possession to auction sale deed.', value: 'Accelerated Recovery' },
      { title: 'Defensible Title Transfers', desc: 'Sub-Registrar encumbrance searches and clean title documentation prevent post-auction litigation.', value: 'Clean Sale Deeds' },
      { title: 'Preserved Collateral Value', desc: 'Immediate site security deployment prevents asset deterioration between possession and auction.', value: 'Maximum Yield' }
    ],

    targetIndustries: [
      { name: 'Foreclosed Real Estate', desc: 'Coordinates physical possessions and auctions. Implements SARFAESI Act notices.' },
      { name: 'Industrial Factory Assets', desc: 'Manages factory perimeter security and valuation. Deploys security guard list.' }
    ],

    faqs: [
      { q: 'Do you manage property security and custody yards?', a: 'Yes. We deploy ex-defence security guards for physical premises and operate secure, fenced custody yards for machinery and vehicles.' },
      { q: 'How do you setting reserve prices for e-auctions?', a: 'We coordinate with government-approved panel engineers to assess structural value and cross-check municipal price records.' }
    ],

    cta: {
      heading: 'Schedule an Industry Consultation',
      subheading: 'Partner with SM Associates to accelerate your stressed asset resolution timeline.',
      buttonText: 'Consult with ARC Team',
      href: '/contact'
    }
  },

  // ================= 8. COMMERCIAL LENDING =================
  'commercial-lending': {
    eyebrow: 'Commercial Lending',
    title: 'SME & Corporate Commercial Credit Recovery',
    subtitle: 'Conducting on-site inventory audits, corporate promoter checks, and coordinating DRT litigation support.',
    description: 'Executing pre-disbursal commercial site checks, trade registry validation (GSTIN/MSME), promoter due diligence, and DRT legal support.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Lending Hurdles and Foreclosure Obstacles in Corporate defaults',
    problemStatement: [
      { icon: 'trendingDown', title: 'Director Asset Diversion', desc: 'Defaulting directors shifting capital or titles to corporate shell entities to avoid bank foreclosure actions.' },
      { icon: 'shieldAlert', title: 'Non-active SME Factories', desc: 'Borrowers presenting closed or non-operational facilities as active business premises to pass basic desk checks.' },
      { icon: 'timer', title: 'IBC litigation Moratoriums', desc: 'Defaults delayed by corporate insolvency filings (CIRP), freezing standard SARFAESI foreclosure workflows.' }
    ],

    overview: {
      heading: 'Commercial Debt Recovery: Resolving SME Defaults',
      subheading: 'Accelerating DRT Applications and Title Investigations under the IBC Framework',
      summary: 'High-value commercial defaults require thorough investigations and coordinated legal pressure. SM Associates supports corporate lenders by tracing alternative assets of defaulting promoters, conducting on-site inventory audits, and preparing court-admissible dossiers. We coordinate panels to file recovery certificates and applications before Debt Recovery Tribunals, speeding up asset monetization.',
      outcomes: [
        { title: 'Director Connection Mapping', desc: 'Tracing directorship histories and un-mortgaged director assets.' },
        { title: 'On-Site Business Auditing', desc: 'Verifying GST filings, machinery status, and active operations.' },
        { title: 'Milestone Legal Tracking', desc: 'Coordinating legal notice filings and DRT certification processes.' }
      ],
      useCases: [
        { title: 'SME Business Defaults', desc: 'On-site business inspections and recovery negotiations.' },
        { title: 'Corporate Director Asset Tracing', desc: 'Investigating director directorships and un-mortgaged land plots.' },
        { title: 'DRT Recovery Execution', desc: 'Filing certificates and coordinating asset seizures.' }
      ]
    },

    tabs: [
      {
        id: 'director-trace',
        label: 'Director Registry Check',
        heading: 'DIN registries checks and Alternate Sourcing',
        overview: 'Investigating directorship networks and un-mortgaged properties.',
        activities: [
          'Cross-check DIN registries checks and shell links',
          'Verify alternate address details registers checks',
          'Document director property ownership files check'
        ],
        documents: [
          'Corporate registry details files check',
          'Director asset coordinate maps'
        ],
        risks: [
          'Missing database coordinates check',
          'Shell company directorship exceptions'
        ],
        deliverable: 'Alternate director asset profile reports.',
        benefit: 'Provides critical leverage for OTS negotiations.'
      },
      {
        id: 'sme-audit',
        label: 'Site Capacity Audit',
        heading: 'Physical Premises & Operations checks',
        overview: 'On-site inspections of SME factory and shop operations.',
        activities: [
          'Verify machine active operations logs on site',
          'Conduct on-site employee headcount check audits',
          'Verify trade license and tax registrations check'
        ],
        documents: [
          'On-site inspection photo logs check',
          'Active payroll registers'
        ],
        risks: [
          'Non-operational factory exceptions',
          'Inventory inflation exceptions'
        ],
        deliverable: 'Audited facility check report.',
        benefit: 'Prevents bank credit exposure to non-active shell offices.'
      },
      {
        id: 'corporate-notice',
        label: 'Legal Notice Serving',
        heading: 'Serving Demand Notices & DRT applications',
        overview: 'Serving legally valid default notices to corporate offices.',
        activities: [
          'In-hand notices delivery to corporate HQs checks',
          'Serve notices to director addresses with photo checks',
          'Prepare DRT recovery certificate filings'
        ],
        documents: [
          'Default demand notices files',
          'Notice delivery proof registers'
        ],
        risks: [
          'Corporate headquarter lockouts',
          'Director absconding exceptions'
        ],
        deliverable: 'Notice served with legally clean proof.',
        benefit: 'Establishes valid path for judicial recovery certificates.'
      },
      {
        id: 'drt-cert',
        label: 'DRT Recovery',
        heading: 'DRT Court Certificate Executions',
        overview: 'Assisting banking legal panel in executing DRT warrants.',
        activities: [
          'Liaise with advocate panel coordinators check',
          'Execute asset seizure warrants under DRT certificates',
          'Transfer seized assets to secure yard locations check'
        ],
        documents: [
          'DRT recovery certificates check',
          'Security yard custody logs'
        ],
        risks: [
          'Litigation drag exceptions',
          'Asset repossession delays'
        ],
        deliverable: 'Completed asset recovery check files.',
        benefit: 'Speeds up commercial accounts closure.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Director Asset Diversion', desc: 'Defaulting corporate promoters transfer fixed assets, land titles, or capital equipment into related shell entities before bank enforcement actions, frustrating standard SARFAESI foreclosure workflows.', warningBadge: 'CORPORATE FRAUD', impact: 'SM Associates Operational Approach: MCA DIN registry cross-checks and municipal land records tracing to identify alternative director-held properties.' },
      { title: 'IBC Moratorium Freezes', desc: 'Corporate borrowers filing CIRP petitions under the Insolvency and Bankruptcy Code trigger automatic moratoriums, freezing SARFAESI enforcement and extending recovery timelines significantly.', warningBadge: 'IBC LITIGATION', impact: 'SM Associates Operational Approach: Proactive DRT coordination and parallel asset investigation to maintain pressure through litigation moratoriums.' },
      { title: 'Non-Operational Facility Misrepresentation', desc: 'SME borrowers presenting closed or minimally-staffed factories as active businesses during credit monitoring visits, masking deteriorating repayment capacity until default.', warningBadge: 'UNDERWRITING FRAUD', impact: 'SM Associates Operational Approach: On-site physical audits with machinery status logs, employee headcount checks, and GST filing cross-verification.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'Director Registry Checks', desc: 'MCA director DIN checks and linked shell companies tracing to trace assets.', bullets: ['Cross-checking director identification numbers (DIN)', 'Tracing linked corporate shell entities', 'Identifying un-mortgaged director properties'], businessOutcome: 'Provides recovery teams with leverage for out-of-court settlements.' },
      { title: 'Industrial Facility Inspections', desc: 'On-site verification of manufacturing and warehousing operations.', bullets: ['Verifying operating machinery status on site', 'Auditing inventory log books and headcount', 'Confirming trade license and GST registry validity'], businessOutcome: 'Prevents underwriting credit exposure to shell companies.' },
      { title: 'Corporate Notice Serving', desc: 'Drafting and serving legally compliant default notices to corporate entities and guarantors.', bullets: ['In-person notices delivery to corporate HQs', 'Personal service to directors with photographic proof', 'Serving notices through registry check publications'], businessOutcome: 'Establishes clean documentation trails for litigation.' },
      { title: 'DRT Court Coordination', desc: 'Assisting banking advocates in preparing filings for Debt Recovery Tribunals.', bullets: ['Filing of recovery certificates', 'Tracking tribunal hearings and court dates', 'Facilitating out-of-court settlements and OTS agreements'], businessOutcome: 'Speeds up legal resolution of high-value default cases.' },
      { title: 'GST & Invoice Forensics', desc: 'Verifying applicant trade invoices and GST filings to confirm revenue.', bullets: ['GST verification against public tax databases', 'Cross-matching supplier invoice records', 'Flagging duplicate or circular invoice trails'], businessOutcome: 'Validates actual borrower revenue trends during credit checks.' },
      { title: 'Commercial Asset Repossessions', desc: 'Physical enforcement of magistrate repossession warrants at business sites.', bullets: ['Coordinating local authority and police presence', 'Taking physical possession and securing facilities', 'Detailed inventory checks of repossessed items'], businessOutcome: 'Secures physical custody of commercial assets safely.' }
    ],

    processFlow: {
      title: 'Commercial Credit Recovery Journey',
      desc: 'Five-stage investigation and legal coordination pipeline for corporate and SME defaults.',
      steps: [
        { step: '01', title: 'Director & Asset Investigation', desc: 'Cross-checking MCA DIN registries, municipal land records, and corporate filing histories to map director-held assets.', outcome: 'Director asset profile with un-mortgaged property leads documented for recovery team.' },
        { step: '02', title: 'On-Site Business Audit', desc: 'Physical visits to SME factories and offices to verify operational status, machinery condition, employee headcount, and GST registration.', outcome: 'On-site inspection report with operational status and inventory assessment filed.' },
        { step: '03', title: 'Legal Notice Service', desc: 'Drafting and serving legally compliant demand notices to corporate headquarters and to directors at personal addresses.', outcome: 'Served notices with in-hand delivery photos and registered post acknowledgments.' },
        { step: '04', title: 'DRT Coordination', desc: 'Liaising with the bank\'s advocate panel to file DRT recovery certificate applications, track hearing dates, and prepare court dossiers.', outcome: 'DRT application filed with clean documentation trail ready for tribunal.' },
        { step: '05', title: 'Asset Seizure & Settlement', desc: 'Coordinating police-assisted asset seizure under DRT warrant, securing assets to custody yard, and facilitating OTS negotiations.', outcome: 'Asset secured or OTS settlement executed with ledger reconciliation complete.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Director Asset Leverage', desc: 'MCA registry investigations uncover un-mortgaged director assets that create effective OTS negotiation pressure.', value: 'Stronger Settlement Hand' },
      { title: 'Fraud-Proof Underwriting', desc: 'On-site SME facility audits prevent credit exposure to non-operational or shell business borrowers.', value: 'Underwriting Protected' },
      { title: 'DRT-Ready Documentation', desc: 'Court-admissible dossiers with clean notice proofs and inspection reports prepared for tribunal submissions.', value: 'Litigation Ready' }
    ],

    targetIndustries: [
      { name: 'SME Business Loans', desc: 'Coordinates physical inspections and collections. Implements GST registry validation.' },
      { name: 'Corporate Credit Lines', desc: 'Traces director assets and DRT coordination. Operates DIN registry searches.' }
    ],

    faqs: [
      { q: 'How do you coordinate with corporate legal departments?', a: 'Our legal desk coordinates with the bank’s corporate legal team, providing daily status updates and auditable documentation for DRT filings.' },
      { q: 'Do you manage director asset investigations in other states?', a: 'Yes. We operate across 5 South Indian states with local representatives tracking municipal land registries.' }
    ],

    cta: {
      heading: 'Schedule an Industry Consultation',
      subheading: 'Connect with our commercial desk to review our business verification and legal coordination framework.',
      buttonText: 'Contact Commercial Desk',
      href: '/contact'
    }
  },

  // ================= 9. INSURANCE =================
  'insurance': {
    eyebrow: 'Insurance Sector',
    title: 'Insurance Special Investigation Unit (SIU) Audits',
    subtitle: 'Investigating motor, medical, and life claims through independent field verifications and registry checks.',
    description: 'Executing on-site accident checks, medical records audits, and death certificate registry checks to mitigate claims fraud.',
    primaryCtaText: 'Submit Claims Investigation Request',
    secondaryCtaText: 'Review Claims Audit Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'Claims Audit Compliance', value: 'IRDAI Aligned' },
      { icon: 'trendingUp', title: 'Fraudulent Claims Flagged', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Insurance Risk Landscape',
    problemStatementHeading: 'The Vulnerability of Fictitious Insurance Claims',
    problemStatement: [
      { icon: 'fileWarning', title: 'Staged Motor Accidents', desc: 'Fraud rings simulating vehicle damage or staging accidents to claim high payouts, requiring on-site accident verifications.' },
      { icon: 'trendingDown', title: 'Manipulated Medical Bills', desc: 'Claimants presenting fabricated medical bills or shell hospital records to secure health insurance reimbursements.' },
      { icon: 'fingerprint', title: 'Identity Forgery on Life Policies', desc: 'Falsified death certificates or synthetic identity profiles used to file life insurance claims, bypassing basic desk reviews.' }
    ],

    overview: {
      heading: 'Insurance Claims Verification: On-Ground SIU Audits',
      subheading: 'Mitigating Claims Fraud and Exposing Fictitious Beneficiaries',
      summary: 'Claims fraud directly impacts insurance premium margins. SM Associates supports insurers with Special Investigation Unit (SIU) field audits. Our investigators conduct accident checks, verify medical records at hospitals, crosscheck death certificates at municipal registries, and gather witness statements to provide clear, court-admissible evidence files.',
      outcomes: [
        { title: 'On-Site Accident Auditing', desc: 'Verifying vehicle damage coordinates and local police reports.' },
        { title: 'Hospital Registry checks', desc: 'Confirming admission logs, treatments, and bills on site.' },
        { title: 'Local Witness Corroboration', desc: 'Gathering witness logs to cross-check claimant statements.' }
      ],
      useCases: [
        { title: 'Motor Claim Investigations', desc: 'Site visits to check accident coordinates and vehicle damage.' },
        { title: 'Health Reimbursement Audits', desc: 'On-site checks of hospital bills and treatments.' },
        { title: 'Life Claims Verifications', desc: 'Confirming death certificates and family coordinates.' }
      ]
    },

    tabs: [
      {
        id: 'claim-profiling',
        label: 'Claims Ingestion',
        heading: 'Suspect Claims Profiling',
        overview: 'Importing suspect claims details and identifying fraud indicators.',
        activities: [
          'Verify layout formatting of claim files check',
          'Run check flags for suspicious profiles',
          'Create case profile dossiers check for SIU dispatch'
        ],
        documents: [
          'Client claim reports check files',
          'KYC database registration files'
        ],
        risks: [
          'Data mapping failure exceptions',
          'Incomplete details check'
        ],
        deliverable: 'Claims profile dossier mapped in system.',
        benefit: 'Ensures fast, prioritised dispatch loops.'
      },
      {
        id: 'siu-dispatch',
        label: 'SIU Dispatch',
        heading: 'SIU Field Investigator Dispatch',
        overview: 'Assigning files to nearest certified ground investigator.',
        activities: [
          'Convert accident address coordinates check on site',
          'Dispatch field coordinates routes to investigator',
          'Verify investigator registration check records'
        ],
        documents: [
          'Mobile routing registers check',
          'Investigator credentials check logs'
        ],
        risks: [
          'Extended coordinate transit delays',
          'Remote locator failures check'
        ],
        deliverable: 'Dispatched SIU status log.',
        benefit: 'Guarantees same-day on-site investigations start.'
      },
      {
        id: 'hosp-check',
        label: 'Hospital & Record Check',
        heading: 'On-Site Hospital & Registry Forensics',
        overview: 'Verifying treatment and billing records at hospital sites.',
        activities: [
          'Inspect patient admission registers on site check',
          'Verify treating doctor registration checks',
          'Cross-match bills details with pharmacy registers check'
        ],
        documents: [
          'Hospital record checklists check',
          'GST invoice validations'
        ],
        risks: [
          'Refusal of records access exceptions',
          'Synthetic hospital entity exceptions'
        ],
        deliverable: 'Hospital registry check verification reports.',
        benefit: 'Flags billing inflation and fake admissions.'
      },
      {
        id: 'siu-report',
        label: 'SIU Audit Report',
        heading: 'Delivering Compiled Evidentiary Dossiers',
        overview: 'Compiling all findings into a structured report for claims adjusters.',
        activities: [
          'Verify findings consistency check parameters',
          'Assemble geolocated photo logs and witness statements check',
          'Upload final PDF report to client claims panel'
        ],
        documents: [
          'Compiled SIU report check dossier',
          'Signed witness check statements'
        ],
        risks: [
          'Data sync exceptions',
          'Report upload latency'
        ],
        deliverable: 'Decision-ready claims audit report dossier.',
        benefit: 'Allows adjusters to process approvals or rejections confidently.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Organised Motor Claim Fraud Rings', desc: 'Coordinated groups staging road accidents, fabricating police FIRs, and presenting pre-damaged vehicles to claim high motor payouts. Standard desk reviews cannot detect physical coordination fraud.', warningBadge: 'MOTOR FRAUD', impact: 'SM Associates Operational Approach: Field investigators visit accident sites, cross-reference local police station FIR logs, and document vehicle condition on-ground.' },
      { title: 'Shell Hospital Billing Networks', desc: 'Fraudulent health claims routed through unregistered or minimally operational clinics presenting inflated bills. Medical council registration checks and physical hospital visits expose billing inflation.', warningBadge: 'HEALTH FRAUD', impact: 'SM Associates Operational Approach: On-site hospital visits, pharmacy register audits, and doctor registration verification with local medical council records.' },
      { title: 'Synthetic Identity on Life Policies', desc: 'Fraudulent life insurance claims filed using forged death certificates or impersonation of deceased policyholders. Municipal registry cross-checks are essential to detect and reject these.', warningBadge: 'LIFE POLICY FRAUD', impact: 'SM Associates Operational Approach: Municipal birth and death registry cross-checks, neighbor corroboration, and hospital admission log verification.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'Motor Claims Forensics', desc: 'Field investigations to verify accident coordinates and vehicle damage.', bullets: ['In-person visits to accident locations', 'Cross-checking with local towing and police stations', 'Documenting road coordinates and site photos'], businessOutcome: 'Flags staged accidents and prevents motor claim fraud.' },
      { title: 'Hospital Billing Audits', desc: 'On-site audits of hospital admission registers, pharmacy logs, and bills.', bullets: ['Physical inspection of admission records', 'Verifying active doctor registrations', 'Identifying shell hospital structures'], businessOutcome: 'Prevents health claim inflation and fake medical claims.' },
      { title: 'KYC & Identity Forensics', desc: 'Verifying claimant and nominee identities against registry records.', bullets: ['Government ID cross-checking on site', 'Neighbor corroboration of family details', 'Registry database cross-checks'], businessOutcome: 'Prevents life insurance claims on synthetic identities.' },
      { title: 'Death Certificate verifications', desc: 'Verifying death records at local municipal and registrar offices.', bullets: ['Physical cross-checks with birth and death registries', 'Liaising with local municipal offices', 'Verifying hospital death logs'], businessOutcome: 'Closes the gap between document submission and genuine death.' },
      { title: 'Witness statements checks', desc: 'Gathering independent witness statements near the claim event location.', bullets: ['Discreet community inquiries', 'Recording witness statements and details', 'Cross-checking witness data against claim logs'], businessOutcome: 'Provides legally valid evidence files to settle or reject claims.' },
      { title: 'SIU Report Compilations', desc: 'Compiling all findings into a structured report for claims adjusters.', bullets: ['Consolidating document audits, visits, and statements', 'Including geolocated photos and documents', 'Clear fraud flag summary and commentary'], businessOutcome: 'Gives claims managers clear, auditable evidence to decide claims.' }
    ],

    processFlow: {
      title: 'SIU Claims Investigation Journey',
      desc: 'Five-stage investigation pipeline from suspect claim intake to final audit report delivery.',
      steps: [
        { step: '01', title: 'Claim File Profiling', desc: 'Importing suspect claim files, cross-checking KYC data, and generating a risk-flagged investigation brief.', outcome: 'Prioritized SIU dispatch list with fraud risk indicators documented.' },
        { step: '02', title: 'SIU Field Dispatch', desc: 'Routing cases to the nearest certified field investigator with address coordinates and investigation checklist.', outcome: 'Investigator dispatched with same-day on-site investigation start confirmation.' },
        { step: '03', title: 'On-Site Verification', desc: 'Conducting accident site visits, hospital admission checks, death registry verifications, and witness interviews.', outcome: 'Geotagged site photos, witness statements, and registry confirmation collected.' },
        { step: '04', title: 'Evidence Compilation', desc: 'Consolidating all field findings — photos, documents, statements — into a structured evidence dossier.', outcome: 'Complete evidence bundle with fraud flags and discrepancy notes assembled.' },
        { step: '05', title: 'SIU Report Delivery', desc: 'Delivering a decision-ready claims audit report to the insurer\'s claims adjuster with clear approval or rejection recommendation.', outcome: 'Structured SIU report accepted by claims panel for final decision.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Fraudulent Claims Identified', desc: 'On-site investigations expose staged accidents, shell hospitals, and synthetic life claims before payout.', value: 'Claims Leakage Stopped' },
      { title: 'Claims Leakage Controlled', desc: 'SIU audit reports give claims adjusters verifiable grounds to reject or reduce fraudulent claim amounts.', value: 'Loss Ratio Improved' },
      { title: 'IRDAI-Ready Documentation', desc: 'Structured SIU reports with geotagged evidence meet IRDAI audit and compliance documentation standards.', value: 'Regulator Ready' }
    ],

    targetIndustries: [
      { name: 'Motor Insurance', desc: 'Coordinates accident site coordinates and vehicle damage checks. Delivers on-site forensics.' },
      { name: 'Health Insurance', desc: 'Handles hospital records and billing verifications. Operates SIU audits.' },
      { name: 'Life Insurance', desc: 'Executes death registry search checks. coordinates registrar verifications.' }
    ],

    faqs: [
      { q: 'Do you handle claims investigations in rural regions?', a: 'Yes. We operate across 5 South Indian states with local representatives covering rural agricultural and municipal zones.' },
      { q: 'How do you verify the legitimacy of hospitals?', a: 'Our investigators physically visit the site, check medical council registrations, and audit patient admission registers.' }
    ],

    cta: {
      heading: 'Connect with Our Industry Specialists',
      subheading: 'Connect with our SIU desk to review our claims verification and audit framework.',
      buttonText: 'Connect with SIU Desk',
      href: '/contact'
    }
  },

  // ================= 10. VEHICLE FINANCE =================
  'vehicle-finance': {
    eyebrow: 'Auto Loan Repossession',
    title: 'Vehicle Finance Recovery & Fenced Yard Custody',
    subtitle: 'Executing compliant vehicle repossession and yard storage under strict RBI Fair Practice Codes.',
    description: 'Deploying DRA-certified agents to locate and repossess delinquent vehicle assets, coordinating yard storage and RTO notifications.',
    primaryCtaText: 'Request Seizure Pilot',
    secondaryCtaText: 'View Repossession Guidelines',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Vehicle Foreclosure Pain',
    problemStatementHeading: 'The Compliance Vulnerabilities in Seizure Operations',
    problemStatement: [
      { icon: 'fileWarning', title: 'Non-Compliant Ground Actions', desc: 'Seizing vehicle assets without required RTO and police notifications exposes lenders to direct liabilities and borrower disputes.' },
      { icon: 'trendingDown', title: 'Asset Damage During Transport', desc: 'Delinquent auto assets damaged or stripped during towing or yard storage, eroding final auction recovery values.' },
      { icon: 'users', title: 'Improper RTO Notifications', desc: 'Repossessions executed without proper document registration check loops, stalling the final vehicle sale process.' }
    ],

    overview: {
      heading: 'Vehicle Asset Repossession: Managing Seizure Logistics',
      subheading: 'Coordinating Police Notifications and Fenced Storage Security',
      summary: 'Vehicle collections require coordinated logistics and regulatory compliance. SM Associates manages the entire repossession process: deploying DRA-certified field coordinators, filing RTO/police notifications, executing peaceful repossessions, and storing assets in our fenced yards to protect resale value before auction.',
      outcomes: [
        { title: 'RTO & Police Coordination', desc: 'Direct liaising to serve pre-seizure notifications.' },
        { title: 'Encrypted Yard Telemetry', desc: 'Secure yards with 24/7 CCTV and check-in inventory audits.' },
        { title: 'Auction Valuation Panel', desc: 'Panel valuations to ensure optimal reserve pricing.' }
      ],
      useCases: [
        { title: 'Commercial Trucks Repossessions', desc: 'Seizing HCV fleets and coordinating yard custody.' },
        { title: 'Agricultural Tractor Recoveries', desc: 'Rural equipment tracing and farm doorstep visits.' },
        { title: 'Retail Cars Collections', desc: 'doorstep pickups and settlement negotiations.' }
      ]
    },

    tabs: [
      {
        id: 'auth-check',
        label: 'Authorization Check',
        heading: 'Repossession Authorization audits',
        overview: 'Verifying default declarations and repossession letters.',
        activities: [
          'Verify layout schemas parameters of repossessions check',
          'Audit pre-seizure RTO registry notification drafts check',
          'Approve file dossiers for local ground dispatch'
        ],
        documents: [
          'Lender authorization certificates check',
          'Notice logs registry check files'
        ],
        risks: [
          'Repossession letters errors exceptions',
          'Notice layout gaps check'
        ],
        deliverable: 'Authorized case profile logged in system.',
        benefit: 'Ensures complete compliance before ground enforcement.'
      },
      {
        id: 'vehicle-trace',
        label: 'Vehicle Tracing',
        heading: 'Ground Location & Tracing Sourcing',
        overview: 'Tracking vehicle location through coordinates checks.',
        activities: [
          'Locate vehicle coordinates checks on site',
          'Coordinate regional branches database tracing check',
          'Verify agent DRA compliance certifications'
        ],
        documents: [
          'Mobile coordinate routing logs',
          'Branch rosters check registers'
        ],
        risks: [
          'Vehicle coordinate relocations',
          'Tracer delay exceptions'
        ],
        deliverable: 'Geotagged vehicle coordinates verify.',
        benefit: 'Dispatches ground taskforce to precise site coordinates.'
      },
      {
        id: 'seizure-exec',
        label: 'Seizure Execution',
        heading: 'Physical Repossession & Logistics',
        overview: 'Executing authorized repossession with police notifications.',
        activities: [
          'Serve pre-seizure notices to local police stations check',
          'Conduct physical repossessions with locksmiths on site',
          'Verify RTO notice logs registries'
        ],
        documents: [
          'Seizure execution templates check',
          'Police notification logs check files'
        ],
        risks: [
          'Borrower resistance events check',
          'Towing damage exceptions'
        ],
        deliverable: 'Repossessed vehicle inventory check list.',
        benefit: 'Secures physical asset with zero operational disputes.'
      },
      {
        id: 'yard-storage',
        label: 'Yard Storage',
        heading: 'Fenced CCTV Yard Custody',
        overview: 'Transporting vehicles to secure yards and logging status.',
        activities: [
          'Conduct status inventory check audits on yard inflow',
          'Deploy 24/7 security watch shifts check',
          'Periodically verify machine condition records check'
        ],
        documents: [
          'Yard ingestion check documents',
          'CCTV security logs check'
        ],
        risks: [
          'Yard trespassing attempts check',
          'Asset value depreciation exceptions'
        ],
        deliverable: 'Yard storage check-in receipt document.',
        benefit: 'Protects the resale value of seized assets.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Borrower Tracking Failures', desc: 'Delinquent commercial or tractor assets moving across districts, making tracking impossible without active regional office networks.', warningBadge: 'Traceability Gap', impact: 'Extended default cycles and asset depreciation.' },
      { title: 'Yard Security Violations', desc: 'Seized vehicle assets damaged or stripped of parts in unsecured third-party yards, causing auction value losses.', warningBadge: 'Yard Asset Risk', impact: 'Reduction in final realization value.' },
      { title: 'Borrower Harassment Grievances', desc: 'Outsourced repossession agents violating borrower communication codes, triggering direct compliance audits.', warningBadge: 'Compliance Risk', impact: 'Fines and potential panel suspension.' }
    ],

    capabilitiesHeading: 'Repossession Operations Modules',
    capabilities: [
      { title: 'Surrender Mediation', desc: 'Negotiating voluntary vehicle surrenders with delinquent borrowers.', bullets: ['Empathetic, non-coercive script compliance', 'Documenting surrender forms on site', 'Coordinating vehicle collection logistics'], businessOutcome: 'Secures collateral with zero operational friction.' },
      { title: 'Ground Tracing & Seizure', desc: 'Locating and repossessing delinquent vehicle assets.', bullets: ['RTO registry cross-checking', 'Liaising with local police and RTO offices', 'Safe towing and transport coordination'], businessOutcome: 'Restores asset custody to the lender.' },
      { title: 'RTO Notice Processing', desc: 'Managing required documentation and notices for regional transport offices.', bullets: ['Filing pre-seizure declarations', 'Serving repossession notices to borrowers', 'Documenting registry handovers'], businessOutcome: 'Closes the legal loop for vehicle resale.' },
      { title: 'Secure Yard Custody', desc: 'Storing repossessed vehicles in fenced, CCTV-monitored facilities.', bullets: ['24/7 guard shifts and CCTV monitoring', 'Detailed vehicle status checks on inflow', 'Weekly inventory reconciliations'], businessOutcome: 'Protects the value of repossessed collateral.' },
      { title: 'Tractor Location Tracking', desc: 'Tracing agricultural tractors across farming districts.', bullets: ['Cross-checking municipal registries', 'Community inquiries on site', 'Alternative coordinate verifications'], businessOutcome: 'Restores contact with agricultural defaults.' },
      { title: 'Asset Valuation Panel Support', desc: 'Physical vehicle status checks to set e-auction reserve prices.', bullets: ['Assessing vehicle running condition', 'Validating pricing index registries', 'Government-approved panel valuations'], businessOutcome: 'Ensures correct reserve pricing compliant with guidelines.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking vehicle foreclosure from ingestion to yard.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Vehicle Finance', desc: 'Manages commercial vehicle and fleet repossessions. Coordinates RTO police liaison.' }
    ],

    faqs: [
      { q: 'How do you handle police and RTO notifications?', a: 'Our coordinators serve pre-seizure notifications to local police and regional transport offices, ensuring all legal compliance requirements are met before repossession.' },
      { q: 'Do you manage collections for tractor loan defaults?', a: 'Yes. Our branch network covers semi-urban and rural centers, with field teams tracking local agricultural crop cycles.' }
    ],

    cta: {
      heading: 'Request an Industry Assessment',
      subheading: 'Partner with Our Operations Team to experience our compliance-first operational velocity.',
      buttonText: 'Partner with Our Operations Team',
      href: '/contact'
    }
  },

  // ================= 11. GOLD LOAN =================
  'gold-loan': {
    eyebrow: 'Gold Loan Sector',
    title: 'Gold Loan Portfolio Validation & Soft Collections',
    subtitle: 'Rapid soft collections and compliance-aligned outreach to prevent gold auction defaults under RBI Fair Practices Code.',
    description: 'Bilingual reminder campaigns, pre-auction borrower contact restoration, and compliant doorstep outreach for gold loan portfolios.',
    primaryCtaText: 'Request Gold Loan Pilot',
    secondaryCtaText: 'View Gold Loan Verification Criteria',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Gold Loan Risks',
    problemStatementHeading: 'Short Timelines and Contact Loss in Gold Loan Portfolios',
    problemStatement: [
      { icon: 'timer', title: 'Compressed Redemption Timelines', desc: 'Gold loan tenure is short (3–12 months). Defaulting borrowers have very narrow redemption windows before the lender\'s right to auction pledged gold is triggered, requiring rapid early contact.' },
      { icon: 'shieldAlert', title: 'Strict Calling Compliance Exposure', desc: 'Gold loan lenders face high complaint volumes from non-compliant collection agents. IIBF non-certified callers or off-hours contact triggers RBI conduct audit risk and potential empanelment suspension.' },
      { icon: 'users', title: 'Borrower Contact Loss Before Auction', desc: 'Borrowers who miss renewal payments often become unreachable before the statutory auction notice period. Missing the contact window forfeits the goodwill of a loyal repeat borrower.' }
    ],

    overview: {
      heading: 'Gold Loan Risk Management: Validating Customer Profiles',
      subheading: 'Managing Local Verifications and Dialer calling under RBI Conduct Mandates',
      summary: 'Gold loan portfolios depend on accurate customer verification and compliant reminders. SM Associates structures operations around bilingual calls and rapid address validations. We run pre-disbursal customer checks within local districts and manage soft collection campaigns strictly during regulatory hours, preserving borrower relationships.',
      outcomes: [
        { title: 'Bilingual Call Center Support', desc: 'Outbound collections queues staffed by local language representatives.' },
        { title: 'VoIP Call Log Locks', desc: 'System restricts outbound calls strictly within approved hours.' },
        { title: 'Grievance Resolution', desc: 'Compliance managers resolve customer disputes within 24 hours.' }
      ],
      useCases: [
        { title: 'Retail Gold Loans', desc: 'Soft collections and early-stage payment reminders.' },
        { title: 'Agriculture Gold Loans', desc: 'Outreach campaigns aligned with local crop cycles.' },
        { title: 'Business Gold Loans', desc: 'On-site address checks and verification diagnostics.' }
      ]
    },

    tabs: [
      {
        id: 'gold-kyc',
        label: 'KYC Validation',
        heading: 'Gold Loan Applicant Address checks',
        overview: 'Verifying applicant profile details before asset disbursal.',
        activities: [
          'Verify identity registration records checks',
          'Conduct residential address verification visits check',
          'Document neighbor corroboration details files check'
        ],
        documents: [
          'KYC application forms check',
          'Verification reports registers'
        ],
        risks: [
          'Fictitious address exceptions',
          'Synthetic profile exceptions'
        ],
        deliverable: 'Compiled CPV profile report check.',
        benefit: 'Reduces early-stage credit default exposure.'
      },
      {
        id: 'gold-calling',
        label: 'Calling Queue Sync',
        heading: 'RBI Compliant Tele-calling queues',
        overview: 'Outbound collections calling using recorded VoIP lines.',
        activities: [
          'Enforce strict calling hours queue locking checks',
          'Record and audit 100% of outreach calls',
          'Process promise-to-pay (PTP) agreements checks'
        ],
        documents: [
          'Outbound caller log files',
          'Voice logs audio archives'
        ],
        risks: [
          'Script compliance violations check',
          'Statutory hours exceptions check'
        ],
        deliverable: 'Audited caller logs data files check.',
        benefit: 'Ensures absolute adherence to fair practices code.'
      },
      {
        id: 'gold-doorstep',
        label: 'doorstep Checks',
        heading: 'Field representative doorstep visits',
        overview: 'Certified representatives conducting physical visits.',
        activities: [
          'Conduct doorstep collection check visits',
          'Verify coordinate logs check on mobile app',
          'Process payment collections slips details check'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Nodal bank deposit slips check'
        ],
        risks: [
          'Borrower contact failure exceptions',
          'Field coordination delays check'
        ],
        deliverable: 'Verified payment confirmation check.',
        benefit: 'Restores default accounts to active collections.'
      },
      {
        id: 'gold-ots',
        label: 'Settlement OTS',
        heading: 'Mediating OTS & Cash uploads',
        overview: 'Facilitating OTS agreements and deposits uploads.',
        activities: [
          'Verify borrower eligibility parameters check',
          'Draft OTS agreement documentation files check',
          'Reconcile ledger checks on client console'
        ],
        documents: [
          'Approved OTS certificate files',
          'Nodal bank slips registries'
        ],
        risks: [
          'OTS processing delays',
          'Deposit reconciliation exceptions'
        ],
        deliverable: 'OTS transaction deed and closed account file.',
        benefit: 'Resolves outstanding NPAs while protecting goodwill.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Pre-Auction Redemption Delays', desc: 'Gold loan borrowers who intend to redeem their pledged gold often delay payment until the final days before auction. Late contact means the lender misses the voluntary redemption window.', warningBadge: 'REDEMPTION RISK', impact: 'SM Associates Operational Approach: Early-stage proactive soft calling and doorstep visit campaigns timed ahead of the statutory auction notice period.' },
      { title: 'Contact Loss Before Auction Notices', desc: 'Borrowers in semi-urban and rural areas frequently change mobile numbers or relocate between loan disbursal and renewal date, making statutory auction notice service difficult.', warningBadge: 'CONTACT TRACING', impact: 'SM Associates Operational Approach: Community reference checks and localized branch outreach restore contact before auction notice deadlines.' },
      { title: 'Short-Tenure Default Velocity', desc: 'Gold loan NPA formation is faster than other retail products due to short tenures. Accounts slip from overdue to auction-ready status within weeks, requiring faster first-contact response than typical collections models.', warningBadge: 'NPA VELOCITY', impact: 'SM Associates Operational Approach: Same-day doorstep dispatch from 19 local branches ensures first contact within 24 to 48 hours of overdue trigger.' }
    ],

    capabilitiesHeading: 'Gold Loan Specialized Solutions',
    capabilities: [
      { title: 'Soft Call Collections', desc: 'Compliant telephone reminders using bilingual scripts and trained agents.', bullets: ['Empathetic, non-coercive script compliance', 'Call recording and archive logs', 'RBI code compliant calling hours lockouts'], businessOutcome: 'Reduces early-stage defaults and secures payment commitments.' },
      { title: 'doorstep address Checks', desc: 'Certified local field coordinators conducting address verification visits.', bullets: ['In-person visits to declared residences', 'Geotagged visit check-ins', 'Daily status logs updated to the console'], businessOutcome: 'Confirms resident stability and maintains contact.' },
      { title: 'Alternative Reference Checking', desc: 'Verifying borrower reference contact details to restore communication.', bullets: ['Cross-checking public registries', 'Discreet community inquiries', 'Reference validations on site'], businessOutcome: 'Restores contact with missing or unreachable borrowers.' },
      { title: 'Grievance Management Desk', desc: 'Dedicated compliance desk resolving borrower disputes and feedback.', bullets: ['24-hour grievance registration and review', 'SLA tracked resolution workflow', 'Detailed reports shared with client banks'], businessOutcome: 'Protects lender brand value and resolves disputes.' },
      { title: 'Compliance Script Audits', desc: 'Weekly quality review of outbound call recordings and field logs.', bullets: ['Auditing 100% of recorded calls using analytics', 'Monitoring agent tone and script compliance', 'Immediate suspension of non-compliant representatives'], businessOutcome: 'Ensures absolute adherence to fair practices code.' },
      { title: 'District Ground Mapping', desc: 'District mapping of Southern India branches network coordinates.', bullets: ['Branch presence in local trade centers', 'Local representative residence matching', 'District-wise collections reports'], businessOutcome: 'Provides last-mile coverage for remote borrowers.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking gold loan default campaigns.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Gold Loans', desc: 'Coordinates applicant verifications and soft collections. Operates compliance-backed dialers.' }
    ],

    faqs: [
      { q: 'How do you ensure callers do not violate calling hours rules?', a: 'Our outbound VoIP dialer automatically locks calling queues between 07:00 PM and 08:00 AM, preventing any agent calls outside approved times.' },
      { q: 'Do you manage collections for agriculture gold loans?', a: 'Yes. Our branch network covers semi-urban and rural centers, with field teams tracking local crop harvesting cycles.' }
    ],

    cta: {
      heading: 'Schedule an Industry Consultation',
      subheading: 'Request an operational audit of our DRA-certified tele-agents and field compliance logs.',
      buttonText: 'Request Compliance Audit Details',
      href: '/contact'
    }
  },

  // ================= 12. RETAIL & PERSONAL PRODUCTS =================
  'retail-products': {
    eyebrow: 'Retail Lending Products',
    title: 'Retail Loan Portfolio CPV & Collections',
    subtitle: 'Bilingual Collections and Local Address Validations',
    description: 'Verify retail loan applicant profiles and manage collections campaigns with strict compliance and trained ground representatives.',
    primaryCtaText: 'Request Retail Loan Pilot',
    secondaryCtaText: 'Download Compliance Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Retail Portfolio Pain',
    problemStatementHeading: 'The Compliance Vulnerabilities in Retail Loan Recoveries',
    problemStatement: [
      { icon: 'shield', title: 'High Client Attrition Risk', desc: 'Aggressive collection practices by uncertified agents cause client attrition and local disputes, damaging the lender\'s reputation.' },
      { icon: 'timer', title: 'Strict Calling Hours Adherence', desc: 'Outbound calls made before 08:00 AM or after 07:00 PM violate regulatory guidelines, exposing lenders to licensing audits.' },
      { icon: 'users', title: 'Loss of Client Touchpoints', desc: 'Retail loan borrowers relocating without updating contact details, causing recovery delays.' }
    ],

    overview: {
      heading: 'Managed Outreach Solutions',
      subheading: 'Empathetic and Compliant Outreach for Retail Books',
      summary: 'Retail loan recovery requires balancing resolution rates with compliance. SM Associates structures retail loan collections around certified agents, bilingual scripts, and strict calling logs. Our branch networks cover local districts, enabling doorstep address verifications that maintain lender goodwill.',
      outcomes: [
        { title: 'Bilingual Call Center Support', desc: 'Outbound collections queues staffed by local language representatives.' },
        { title: 'VoIP Call Log Locks', desc: 'System restricts outbound calls strictly within approved hours.' },
        { title: 'Grievance Resolution', desc: 'Compliance managers resolve customer disputes within 24 hours.' }
      ],
      useCases: [
        { title: 'Personal Loans', desc: 'Soft collections and early-stage payment reminders.' },
        { title: 'Consumer Durable Loans', desc: 'Outreach campaigns aligned with local consumer trends.' },
        { title: 'Credit Card Receivables', desc: 'On-site address checks and verification diagnostics.' }
      ]
    },

    tabs: [
      {
        id: 'retail-cpv',
        label: 'CPV Verification',
        heading: 'Pre-Disbursal Retail checks',
        overview: 'Confirming applicant details before loan approvals.',
        activities: [
          'Verify candidate profile registry check data',
          'Conduct doorstep checks to declared address coordinates',
          'Confirm employer HR and payroll status checks on site'
        ],
        documents: [
          'KYC application forms check',
          'Verification reports registers'
        ],
        risks: [
          'Fictitious employer exceptions',
          'Synthetic identity exceptions'
        ],
        deliverable: 'Compiled CPV profile report check.',
        benefit: 'Filters out misrepresented profiles before disbursals.'
      },
      {
        id: 'retail-queue',
        label: 'Call Queue Setup',
        heading: 'Early-stage Outbound reminders',
        overview: 'Outbound campaigns using bilingual caller queues.',
        activities: [
          'Lock queue dialing times to statutory hours check',
          'Log voice files with geotagged timestamps check',
          'Process promise-to-pay (PTP) agreements checks'
        ],
        documents: [
          'VoIP dialer logs check files',
          'Bilingual calling scripts check'
        ],
        risks: [
          'Non-contact situations check',
          'Calling limits exceptions check'
        ],
        deliverable: 'Audited caller logs check reports.',
        benefit: 'Maintains high contact rates with delinquent accounts.'
      },
      {
        id: 'retail-ground',
        label: 'Ground Visits',
        heading: 'doorstep Field collections & visits',
        overview: 'DRA-certified coordinators conducting doorstep visits.',
        activities: [
          'Conduct doorstep check visits to borrower address',
          'Collect outstanding payments and OTS forms checks',
          'Log geotagged GPS timestamps coordinate check'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Nodal bank deposit slips check'
        ],
        risks: [
          'Borrower contact failure exceptions',
          'Field delays check exceptions'
        ],
        deliverable: 'Verified payment confirmation check.',
        benefit: 'Improves roll-back rates on Stage-1/Stage-2 defaults.'
      },
      {
        id: 'retail-settlement',
        label: 'Settlement Negotiation',
        heading: 'Facilitating OTS Settlements',
        overview: 'Negotiating OTS agreements to resolve accounts.',
        activities: [
          'Verify borrower payment eligibility check',
          'Draft OTS agreement documentation files check',
          'Reconcile ledgers on client console check'
        ],
        documents: [
          'Approved OTS certificate files',
          'Deposit reconciliation reports'
        ],
        risks: [
          'OTS processing delays exceptions',
          'Deposit reconciliation errors check'
        ],
        deliverable: 'OTS transaction deed and closed account file.',
        benefit: 'Releases default provisioning accounts cleanly.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Borrower Contact Loss', desc: 'Borrowers in remote locations changing contact details, making communication impossible.', warningBadge: 'Traceability Gap', impact: 'Extended default cycles and collection delays.' },
      { title: 'Borrower Grievance Audits', desc: 'Threat tactics or unauthorized borrower contacts by agents lead to direct complaints, triggering audits by regulatory bodies.', warningBadge: 'Regulatory Risk', impact: 'Fines and potential panel empanelment suspensions.' },
      { title: 'unsecured default exposure', desc: 'A sudden default in retail loan books requires fast doorstep contact before the asset is written off.', warningBadge: 'Portfolio Risk', impact: 'Spikes in Gross NPA across branch areas.' }
    ],

    capabilitiesHeading: 'Retail Loan Specialized Solutions',
    capabilities: [
      { title: 'Soft Call Collections', desc: 'Compliant telephone reminders using bilingual scripts and trained agents.', bullets: ['Empathetic, non-coercive script compliance', 'Call recording and archive logs', 'RBI code compliant calling hours lockouts'], businessOutcome: 'Reduces early-stage defaults and secures payment commitments.' },
      { title: 'doorstep address Checks', desc: 'Certified local field coordinators conducting address verification visits.', bullets: ['In-person visits to declared residences', 'Geotagged visit check-ins', 'Daily status logs updated to the console'], businessOutcome: 'Confirms resident stability and maintains contact.' },
      { title: 'Alternative Reference Checking', desc: 'Verifying borrower reference contact details to restore communication.', bullets: ['Cross-checking public registries', 'Discreet community inquiries', 'Reference validations on site'], businessOutcome: 'Restores contact with missing or unreachable borrowers.' },
      { title: 'Grievance Management Desk', desc: 'Dedicated compliance desk resolving borrower disputes and feedback.', bullets: ['24-hour grievance registration and review', 'SLA tracked resolution workflow', 'Detailed reports shared with client banks'], businessOutcome: 'Protects lender brand value and resolves disputes.' },
      { title: 'Compliance Script Audits', desc: 'Weekly quality review of outbound call recordings and field logs.', bullets: ['Auditing 100% of recorded calls using analytics', 'Monitoring agent tone and script compliance', 'Immediate suspension of non-compliant representatives'], businessOutcome: 'Ensures absolute adherence to fair practices code.' },
      { title: 'District Ground Mapping', desc: 'Direct mapping of districts and hubs for logistical dispatch.', bullets: ['Branch presence in local trade centers', 'Local representative residence matching', 'District-wise collections reports'], businessOutcome: 'Provides last-mile coverage for remote borrowers.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking retail loan default campaigns.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Personal Loans', desc: 'Focuses on soft collections and early-stage payment reminders. Installs compliance-backed dialers.' }
    ],

    faqs: [
      { q: 'How do you ensure callers do not violate calling hours rules?', a: 'Our outbound VoIP dialer automatically locks calling queues between 07:00 PM and 08:00 AM, preventing any agent calls outside approved times.' },
      { q: 'Do you manage collections for retail personal loans?', a: 'Yes. Our branch network covers semi-urban and rural centers, with field teams tracking local consumer trends.' }
    ],

    cta: {
      heading: 'Secure Your Retail Loan Portfolio',
      subheading: 'Request an operational audit of our DRA-certified tele-agents and field compliance logs.',
      buttonText: 'Request Compliance Audit Details',
      href: '/contact'
    }
  },

  // ================= 13. AUTO & VEHICLE PRODUCTS =================
  'auto-products': {
    eyebrow: 'Auto Loan Repossession',
    title: 'Vehicle Collections, Repossession & Yard Custody Operations',
    subtitle: 'Securing Delinquent Auto and Commercial Fleet Assets',
    description: 'Seize, transport, and secure delinquent auto, commercial, and tractor assets with strict compliance and trained repossession agents.',
    primaryCtaText: 'Request Seizure Pilot',
    secondaryCtaText: 'View Repossession Guidelines',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Vehicle Foreclosure Pain',
    problemStatementHeading: 'The Compliance Vulnerabilities in Seizure Operations',
    problemStatement: [
      { icon: 'fileWarning', title: 'Non-Compliant Ground Actions', desc: 'Seizing vehicle assets without required RTO and police notifications exposes lenders to direct liabilities and borrower disputes.' },
      { icon: 'trendingDown', title: 'Asset Damage During Transport', desc: 'Delinquent auto assets damaged or stripped during towing or yard storage, eroding final auction recovery values.' },
      { icon: 'users', title: 'Improper RTO Notifications', desc: 'Repossessions executed without proper document registration check loops, stalling the final vehicle sale process.' }
    ],

    overview: {
      heading: 'Structured Seizure Logistics',
      subheading: 'Ethical and Compliant Vehicle Repossession Operations',
      summary: 'Vehicle finance defaults require secure logistics and compliance tracking. SM Associates coordinates the complete vehicle foreclosure lifecycle: tracing vehicles, executing repossession, transporting to our secure fenced yards, and handling RTO and auction compliance.',
      outcomes: [
        { title: 'RTO & Police Coordination', desc: 'Direct liaising to serve pre-seizure notifications.' },
        { title: 'Encrypted Yard Telemetry', desc: 'Secure yards with 24/7 CCTV and check-in inventory audits.' },
        { title: 'Auction Valuation Panel', desc: 'Panel valuations to ensure optimal reserve pricing.' }
      ],
      useCases: [
        { title: 'Commercial Trucks Repossessions', desc: 'Seizing HCV fleets and coordinating yard custody.' },
        { title: 'Agricultural Tractor Recoveries', desc: 'Rural equipment tracing and farm doorstep visits.' },
        { title: 'Retail Cars Collections', desc: 'doorstep pickups and settlement negotiations.' }
      ]
    },

    tabs: [
      {
        id: 'auto-trace',
        label: 'Location Tracing',
        heading: 'Ground Location & Sourcing',
        overview: 'Tracking delinquent auto assets locations.',
        activities: [
          'Locate vehicle coordinates check parameters',
          'Deploy local informant networks checks on site',
          'Verify vehicle registry files checks RTO databases'
        ],
        documents: [
          'Mobile geolocation check logs',
          'RTO registry files search check'
        ],
        risks: [
          'Vehicle hiding exceptions',
          'Tracer coordinates gaps check'
        ],
        deliverable: 'Geotagged vehicle coordinates verify.',
        benefit: 'Dispatches ground taskforce to precise site coordinates.'
      },
      {
        id: 'auto-notice',
        label: 'RTO & Police Notice',
        heading: 'Pre-seizure notifications serving',
        overview: 'Managing regulatory filings before seizure actions.',
        activities: [
          'Serve pre-seizure notices to local police stations check',
          'Verify registry tax status check parameters',
          'Liaise with RTO officers for seizure certificates check'
        ],
        documents: [
          'Police notification logs check files',
          'Pre-seizure notice receipts check'
        ],
        risks: [
          'RTO filing delay exceptions',
          'Notice delivery exceptions'
        ],
        deliverable: 'Approved pre-seizure notifications file check.',
        benefit: 'Insulates lender from conduct liabilities.'
      },
      {
        id: 'auto-seize',
        label: 'Repossession Execution',
        heading: 'Physical vehicle seizure logistics',
        overview: 'Executing authorized repossessions with towing logistics.',
        activities: [
          'Conduct physical repossessions with locksmiths on site check',
          'Verify vehicle condition registries check',
          'Verify alternate address check options'
        ],
        documents: [
          'Seizure execution checklists check',
          'Police presence confirmations check'
        ],
        risks: [
          'Borrower resistance events check',
          'Towing damage exceptions'
        ],
        deliverable: 'Repossessed vehicle inventory check list.',
        benefit: 'Secures physical asset with zero operational disputes.'
      },
      {
        id: 'auto-custody',
        label: 'Yard Custody',
        heading: 'Fenced CCTV Custody Yards',
        overview: 'Storing vehicles in fenced, audited custody facilities.',
        activities: [
          'Conduct status inventory check audits on yard inflow',
          'Deploy 24/7 security watch shifts check',
          'Periodically verify machine condition records check'
        ],
        documents: [
          'Yard ingestion check documents',
          'CCTV security logs check'
        ],
        risks: [
          'Yard trespassing attempts check',
          'Asset value depreciation exceptions'
        ],
        deliverable: 'Yard storage check-in receipt document.',
        benefit: 'Protects the resale value of seized assets.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Borrower Tracking Failures', desc: 'Delinquent commercial or tractor assets moving across districts, making tracking impossible without active regional office networks.', warningBadge: 'Traceability Gap', impact: 'Extended default cycles and asset depreciation.' },
      { title: 'Yard Security Violations', desc: 'Seized vehicle assets damaged or stripped of parts in unsecured third-party yards, causing auction value losses.', warningBadge: 'Yard Asset Risk', impact: 'Reduction in final realization value.' },
      { title: 'Borrower Harassment Grievances', desc: 'Outsourced repossession agents violating borrower communication codes, triggering direct compliance audits.', warningBadge: 'Compliance Risk', impact: 'Fines and potential panel suspension.' }
    ],

    capabilitiesHeading: 'Repossession Operations Modules',
    capabilities: [
      { title: 'Surrender Mediation', desc: 'Negotiating voluntary vehicle surrenders with delinquent borrowers.', bullets: ['Empathetic, non-coercive script compliance', 'Documenting surrender forms on site', 'Coordinating vehicle collection logistics'], businessOutcome: 'Secures collateral with zero operational friction.' },
      { title: 'Ground Tracing & Seizure', desc: 'Locating and repossessing delinquent vehicle assets.', bullets: ['RTO registry cross-checking', 'Liaising with local police and RTO offices', 'Safe towing and transport coordination'], businessOutcome: 'Restores asset custody to the lender.' },
      { title: 'RTO Notice Processing', desc: 'Managing required documentation and notices for regional transport offices.', bullets: ['Filing pre-seizure declarations', 'Serving repossession notices to borrowers', 'Documenting registry handovers'], businessOutcome: 'Closes the legal loop for vehicle resale.' },
      { title: 'Secure Yard Custody', desc: 'Storing repossessed vehicles in fenced, CCTV-monitored facilities.', bullets: ['24/7 guard shifts and CCTV monitoring', 'Detailed vehicle status checks on inflow', 'Weekly inventory reconciliations'], businessOutcome: 'Protects the value of repossessed collateral.' },
      { title: 'Tractor Location Tracking', desc: 'Tracing agricultural tractors across farming districts.', bullets: ['Cross-checking municipal registries', 'Community inquiries on site', 'Alternative coordinate verifications'], businessOutcome: 'Restores contact with agricultural defaults.' },
      { title: 'Asset Valuation Panel Support', desc: 'Physical vehicle status checks to set e-auction reserve prices.', bullets: ['Assessing vehicle running condition', 'Validating pricing index registries', 'Government-approved panel valuations'], businessOutcome: 'Ensures correct reserve pricing compliant with guidelines.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking vehicle foreclosure from ingestion to yard.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Auto Loans', desc: 'Executes authorized vehicle repossession and secure yard custody. Coordinates RTO police liaison.' }
    ],

    faqs: [
      { q: 'How do you handle police and RTO notifications?', a: 'Our coordinators serve pre-seizure notifications to local police and regional transport offices, ensuring all legal compliance requirements are met before repossession.' },
      { q: 'Do you manage collections for tractor loan defaults?', a: 'Yes. Our branch network covers semi-urban and rural centers, with field teams tracking local agricultural crop cycles.' }
    ],

    cta: {
      heading: 'Secure Your Vehicle Assets Safely',
      subheading: 'Partner with Our Operations Team to experience our compliance-first operational velocity.',
      buttonText: 'Partner with Our Operations Team',
      href: '/contact'
    }
  },

  // ================= 14. SME & BUSINESS PRODUCTS =================
  'sme-products': {
    eyebrow: 'Commercial Credit Checks',
    title: 'SME Commercial Establishment & Business Verification',
    subtitle: 'Ensuring Applicant Operating Validity and Commercial Capacity',
    description: 'Ensure the physical existence, operational capacity, and regulatory standing of business loan applicants.',
    primaryCtaText: 'Request Business Audit Pilot',
    secondaryCtaText: 'Download Report Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'SME Portfolio Pain',
    problemStatementHeading: 'The SME Credit Blindspot',
    problemStatement: [
      { icon: 'fileWarning', title: 'Paper-only Entities', desc: 'Applicants presenting forged trade licenses or fictitious shell companies that pass online registry checks but do not exist on the ground.' },
      { icon: 'trendingDown', title: 'Inflated Operations', desc: 'Applicants inflating business capacity, employee counts, or equipment levels to secure higher commercial loan exposures.' },
      { icon: 'shield', title: 'Diversion of Disbursed Capital', desc: 'Borrowers diverting business funds into personal assets instead of project execution, increasing default roll-over rates.' }
    ],

    overview: {
      heading: 'Ground-Level Commercial Verification',
      subheading: 'Verifying Stated Capacity with Physical Auditing',
      summary: 'SME credit underwriting requires verification of actual business operations. SM Associates conducts physical on-site business audits. We verify trade tax registration records (GST), inspect physical premises and machinery, corroborate staffing details with HR, and compile comprehensive, underwriter-ready reports.',
      outcomes: [
        { title: 'Premises Verification', desc: 'Physical site visits to confirm operating address and legitimacy.' },
        { title: 'Operational Capacity Audits', desc: 'Inspecting operating machinery and physical stock levels on site.' },
        { title: 'Registry Cross-Checking', desc: 'Cross-matching trade licenses against municipal registries.' }
      ],
      useCases: [
        { title: 'Working Capital Finance', desc: 'Auditing inventory levels and active sales operations.' },
        { title: 'Equipment Leases', desc: 'Verifying machinery installation and operating capacity.' },
        { title: 'Micro-Enterprise Loans', desc: 'Local address and profile verifications.' }
      ]
    },

    tabs: [
      {
        id: 'sme-ec',
        label: 'Registry EC Check',
        heading: 'Commercial registry verification search check',
        overview: 'Verifying trade license and GST tax registration records.',
        activities: [
          'Verify corporate GST tax registration records check',
          'Cross-match corporate details with registry directories',
          'Liaise with Sub-Registrar offices files searches check'
        ],
        documents: [
          'GST registration certificates check',
          'Trade license registries files check'
        ],
        risks: [
          'Fictitious license exceptions check',
          'Registry data mismatch exceptions'
        ],
        deliverable: 'Compiled registry check report.',
        benefit: 'Ensures business legitimacy before underwriting.'
      },
      {
        id: 'sme-visit',
        label: 'On-Site Audit',
        heading: 'Physical premises operations inspections',
        overview: 'On-site inspections of SME factory and shop operations.',
        activities: [
          'Conduct physical visits to declared address coordinates checks',
          'Verify employee active headcount check audits on site',
          'Upload geotagged site photo logs check'
        ],
        documents: [
          'On-site check photograph registries',
          'Neighbor corroboration checklists'
        ],
        risks: [
          'Non-operational factory exceptions',
          'Address locator exceptions check'
        ],
        deliverable: 'Geotagged site check status reports.',
        benefit: 'Confirms physical existence and operations scale.'
      },
      {
        id: 'sme-license',
        label: 'License Verification',
        heading: 'Asset & Inventory capacity verification checks',
        overview: 'Inspecting operating machinery and warehouse stock levels.',
        activities: [
          'Inspect machinery serial numbers check records',
          'Verify stock registries checks on site',
          'Match invoice registries check details'
        ],
        documents: [
          'Asset invoice checklist files',
          'Inventory capacity check registers'
        ],
        risks: [
          'Asset value inflation exceptions',
          'Missing inventory logs exceptions'
        ],
        deliverable: 'Audited assets inventory check list.',
        benefit: 'Confirms actual value of secured collaterals.'
      },
      {
        id: 'sme-ready',
        label: 'Underwriting Report',
        heading: 'Delivering compiled risk dossiers checks',
        overview: 'Compiling all findings into a structured report.',
        activities: [
          'Review file consistency check parameters',
          'Assemble risk ratings and analyst commentary dossiers check',
          'Upload final PDF report to underwriting queue'
        ],
        documents: [
          'Compiled verification report dossier check',
          'Evidence files collection check'
        ],
        risks: [
          'Data sync exceptions',
          'Report upload latency'
        ],
        deliverable: 'Decision-ready verification report dossier.',
        benefit: 'Allows credit risk managers to process approvals safely.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'GST invoice Manipulation', desc: 'Applicants presenting fabricated GST invoices to overstate monthly revenues, which cannot be detected without on-site supplier checks.', warningBadge: 'Billing Fraud', impact: 'Lending to over-leveraged borrowers.' },
      { title: 'Closed Business Locations', desc: 'SME entities shutting down local facilities without updating bank files, making default recovery extremely difficult.', warningBadge: 'Traceability Gap', impact: 'Spikes in Gross NPA on commercial books.' },
      { title: 'Registry Fraud Infiltration', desc: 'Falsified trade tax registration certificates registered at local municipal offices, requiring physical registrar office checking.', warningBadge: 'KYC Fraud', impact: 'Credit lines extended to shell companies.' }
    ],

    capabilitiesHeading: 'SME Inspection Markers',
    capabilities: [
      { title: 'Premises Occupancy Verification', desc: 'Physical on-site visits to check applicant business operations.', bullets: ['In-person visits to declared facilities', 'Neighbor and adjacent business inquiries', 'Photographic logs of site exterior and interior'], businessOutcome: 'Confirms actual physical presence of the business.' },
      { title: 'Machinery & Equipment Audits', desc: 'Inspecting operating machinery to verify value.', bullets: ['Physical checking of machine serial numbers', 'Verifying active operation and capacity', 'Matching machinery logs with loan invoices'], businessOutcome: 'Ensures the collateral exists and is operational.' },
      { title: 'Trade License Validations', desc: 'Checking trade licenses and GST registrations against Sub-Registrar files.', bullets: ['Liaising with local municipal offices', 'Cross-checking GST registries on site', 'Flagging duplicate or expired licenses'], businessOutcome: 'Validates borrower regulatory compliance status.' },
      { title: 'Employee Headcount Auditing', desc: 'Verifying active staffing details and HR registers on site.', bullets: ['Cross-checking employee log files', 'HR manager interviews on site', 'Flagging discrepancies in reported staffing'], businessOutcome: 'Confirms declared scale of operations.' },
      { title: 'Inventory & Stock Inspections', desc: 'Physical checks of raw materials and finished goods in warehouses.', bullets: ['Inspecting warehouse storage logs', 'Cross-matching stock levels with tax filings', 'Flagging slow-moving or obsolete stocks'], businessOutcome: 'Ensures the accuracy of inventory valuation documents.' },
      { title: 'Report Compilation & Risk Grading', desc: 'Compiling all findings into a structured report for credit underwriters.', bullets: ['Consolidation of site, asset, and document checks', 'Structured risk grading and analyst commentary', 'Retaining geolocated photos in files'], businessOutcome: 'Provides underwriters with clear field-grounded data.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking SME checks from ingestion to report.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'SME Business Loans', desc: 'Handles on-site business operations verifications and collections. Implements GST registry validation.' }
    ],

    faqs: [
      { q: 'How do you verify if the business owns or leases the premises?', a: 'Our field officers physically check the registered lease deed or property ownership records and confirm details with the building manager.' },
      { q: 'Do you manage business verifications in industrial zones?', a: 'Yes. We cover major industrial areas in South India, with dedicated regional branches.' }
    ],

    cta: {
      heading: 'Verify SME Borrowers before Disbursal',
      subheading: 'Request an on-site business audit to verify applicant operational capacity.',
      buttonText: 'Request SME Audit Pilot',
      href: '/contact'
    }
  },

  // ================= 15. AGRICULTURAL & RURAL PRODUCTS =================
  'agri-products': {
    eyebrow: 'Agricultural Lending Credit',
    title: 'Agricultural & Tractor Loan Recoveries',
    subtitle: 'Crop-Cycle Aligned collections and Physical Equipment Tracing',
    description: 'Scale crop-cycle collections and secure tractor repossession with local field teams operating across agricultural hubs.',
    primaryCtaText: 'Request Rural Team Call',
    secondaryCtaText: 'View Tractor Seizure Protocols',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Rural Portfolio Risks',
    problemStatementHeading: 'The Logistical Risk of Agricultural Lending Books',
    problemStatement: [
      { icon: 'fileWarning', title: 'Highly Seasonal Cash Flow Loops', desc: 'Borrowers dependent on harvest cycles. Standard monthly collection campaigns fail, requiring crop-aligned scheduling.' },
      { icon: 'trendingDown', title: 'Untraceable Farming Equipment', desc: 'Agricultural tractors and heavy machinery moved across remote districts, making tracking impossible without local network hubs.' },
      { icon: 'shield', title: 'Frictional Ground Seizure Risks', desc: 'Seizing farming assets in rural villages without community consensus triggers local disputes and liabilities.' }
    ],

    overview: {
      heading: 'Crop-Aligned Collection Programs',
      subheading: 'Mitigating Default Risks in Agricultural Books',
      summary: 'Rural portfolios demand highly localized operations. SM Associates operates 8 dedicated rural branch hubs in agricultural centers. We align doorstep visits with harvest cycles, track tractor locations through local informant networks, and manage vehicle repossession and yard storage with compliance.',
      outcomes: [
        { title: 'Harvest-Cycle Alignment', desc: 'Outreach schedules mapped to local agricultural yields.' },
        { title: 'Tractor Tracing Panels', desc: 'Liaising with RTO registries and local operators.' },
        { title: 'Panchayat Liaison Coordination', desc: 'Building community consensus ahead of doorstep actions.' }
      ],
      useCases: [
        { title: 'Tractor Loan Defaults', desc: 'Ground tracing, vehicle seizure, and yard custody.' },
        { title: 'Agri-Gold Loans', desc: 'doorstep address verifications and call reminders.' },
        { title: 'Farm Equipment Leases', desc: 'Verifying machinery installations on site.' }
      ]
    },

    tabs: [
      {
        id: 'agri-farm',
        label: 'Farm Visit',
        heading: 'On-ground agricultural status checks',
        overview: 'Verifying crop cultivation conditions and acreage registers.',
        activities: [
          'Verify land acreage registers checks on site',
          'Audit crop health status and cultivation logs checks',
          'Document trade references with regional mandis check'
        ],
        documents: [
          'Land registry certificate check files',
          'Mandi sales records check'
        ],
        risks: [
          'Crop failure exceptions check',
          'Acreage registry discrepancy check'
        ],
        deliverable: 'Audited agricultural profile report.',
        benefit: 'Ensures agricultural credit file accuracy before defaults.'
      },
      {
        id: 'agri-tractor',
        label: 'Tractor Tracking',
        heading: 'Agricultural machinery ground tracing',
        overview: 'Tracking agricultural tractor location coordinates.',
        activities: [
          'Trace tractor coordinates check parameters',
          'Deploy local village informant networks check on site',
          'Liaise with local municipal transport transport check'
        ],
        documents: [
          'Tractor registration registers check',
          'Village layout coordinates maps check'
        ],
        risks: [
          'Concealed equipment exceptions',
          'Inter-district transit exceptions check'
        ],
        deliverable: 'Geotagged tractor location coordinates check log.',
        benefit: 'Locates missing agricultural collateral assets.'
      },
      {
        id: 'agri-panchayat',
        label: 'Panchayat Liaison',
        heading: 'Rural community consensus mediation',
        overview: 'Liaising with Panchayat coordinators to resolve borrower disputes.',
        activities: [
          'Liaise with Panchayat officers check on site',
          'Conduct discreet mediation meetings check with co-borrowers',
          'Agree crop-aligned repayment milestones check'
        ],
        documents: [
          'Community mediation templates check',
          'Panchayat verification certificate check files'
        ],
        risks: [
          'Community resistance exceptions',
          'Mediation failure exceptions'
        ],
        deliverable: 'Panchayat status check verification records check.',
        benefit: 'Ensures incident-free ground resolution actions.'
      },
      {
        id: 'agri-harvest',
        label: 'Harvest Collection',
        heading: 'Crop-cycle collections & resolution',
        overview: 'Executing physical doorstep collections during harvests.',
        activities: [
          'Conduct physical doorstep visits during harvest sales check',
          'Reconcile collections checks and deposit slips parameters',
          'Process OTS files for resolved accounts check'
        ],
        documents: [
          'Mandi sales invoices check',
          'Nodal bank slips registers check'
        ],
        risks: [
          'Delayed monsoons yield exceptions',
          'OTS processing delays exceptions'
        ],
        deliverable: 'daily collections check status reports.',
        benefit: 'Maximizes resolution collections rates during farmer liquidity windows.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Highly Seasonal Cash Flow Loops', desc: 'Borrowers dependent on harvest cycles. Standard monthly collection campaigns fail, requiring crop-aligned scheduling.', warningBadge: 'Capital Risk', impact: 'Rising credit default volumes during dry crop periods.' },
      { title: 'Untraceable Farming Equipment', desc: 'Agricultural tractors and heavy machinery moved across remote districts, making tracking impossible without local network hubs.', warningBadge: 'Traceability Gap', impact: 'Extended default cycles and collateral value depreciation.' },
      { title: 'Frictional Ground Seizure Risks', desc: 'Seizing farming assets in rural villages without community consensus triggers local disputes and liabilities.', warningBadge: 'Operational Friction', impact: 'Physical safety risks and repossession failures.' }
    ],

    capabilitiesHeading: 'Agricultural Sourcing Toolkits',
    capabilities: [
      { title: 'Tractor Location Tracking', desc: 'Tracing delinquent agricultural tractors across rural districts.', bullets: ['Liaising with district RTO registries', 'Deploying local informant networks on site', 'Cross-matching tractor coordinates'], businessOutcome: 'Restores asset visibility for recovery actions.' },
      { title: 'Harvest-Cycle Collections', desc: 'doorstep visits scheduled during local harvest and sale cycles.', bullets: ['Aligning calling script timings with harvest', 'doorstep visits by certified local agents', 'Flexible settlement terms coordination'], businessOutcome: 'Maximizes collection rates during cash inflow windows.' },
      { title: 'Tractor Repossessions', desc: 'Lawful agricultural vehicle seizure, transport, and storage coordination.', bullets: ['Pre-seizure local police notifications', 'Inventory check logs of tractor implements', 'Safe towing and transport coordination'], businessOutcome: 'Secures agricultural collateral safely for resale.' },
      { title: 'Local Panchayat Liaison', desc: 'Liaising with community heads to resolve borrower disputes.', bullets: ['Coordination with Panchayat officers on site', 'Discreet mediation to settle outstanding dues', 'Respectful borrower communication guidelines'], businessOutcome: 'Minimizes community friction during ground actions.' },
      { title: 'Farm Site inspections', desc: 'On-site verification of agricultural land holdings and crops.', bullets: ['Confirming acreage registry records check', 'Assessing crop conditions on site', 'Trade reference checks with local mandis'], businessOutcome: 'Ensures agricultural credit file accuracy.' },
      { title: 'Rural Yard Custody', desc: 'Storing seized tractors in secure, fenced custody yards.', bullets: ['Fenced yards in key agricultural districts', '24/7 security watch and CCTV monitoring', 'Condition checks on vehicle inflow and outflow'], businessOutcome: 'Safeguards tractor resale value ahead of auction.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking rural collections from placement to resolution.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Agricultural Term Loans', desc: 'Coordinates harvest-cycle collections. Coordinates crop cycle alignment.' },
      { name: 'Tractor Loans', desc: 'Manages machinery repossessions. Coordinates secure yard custody storage.' }
    ],

    faqs: [
      { q: 'Do you secure tractors in local village yards?', a: 'Yes. We operate secure, fenced custody yards in key agricultural trade centers, reducing transport costs and risks.' },
      { q: 'How do you handle crop failure defaults?', a: 'We compile crop audit reports and recommend customized settlement cycles to client banks based on agricultural trends.' }
    ],

    cta: {
      heading: 'Protect Your Agricultural Lending Books',
      subheading: 'Speak with our rural operations manager to align collections with harvest cycles.',
      buttonText: 'Speak to Rural Operations Manager',
      href: '/contact'
    }
  },

  // ================= 16. JEWEL & GOLD PRODUCTS =================
  'jewel-products': {
    eyebrow: 'Gold Loan Risk Management',
    title: 'Verification & Collections for Gold Loan Portfolios',
    subtitle: 'Bilingual Collections and Local Address Validations',
    description: 'Verify gold loan applicant profiles and manage collections campaigns with strict compliance and trained ground representatives.',
    primaryCtaText: 'Request Gold Loan Pilot',
    secondaryCtaText: 'View Gold Loan Verification Criteria',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'Gold Loan Risks',
    problemStatementHeading: 'The Compliance Vulnerabilities in Gold Loan Recoveries',
    problemStatement: [
      { icon: 'shield', title: 'High Client Attrition Risk', desc: 'Aggressive collection practices by uncertified agents cause client attrition and local disputes, damaging the lender\'s reputation.' },
      { icon: 'timer', title: 'Strict Calling Hours Adherence', desc: 'Outbound calls made before 08:00 AM or after 07:00 PM violate regulatory guidelines, exposing lenders to licensing audits.' },
      { icon: 'users', title: 'Loss of Client Touchpoints', desc: 'Gold loan borrowers relocating without updating contact details, causing recovery delays.' }
    ],

    overview: {
      heading: 'Managed Outreach Solutions',
      subheading: 'Empathetic and Compliant Outreach for Gold Loan Books',
      summary: 'Gold loan recovery requires balancing resolution rates with compliance. SM Associates structures gold loan collections around certified agents, bilingual scripts, and strict calling logs. Our branch networks cover local districts, enabling doorstep address verifications that maintain lender goodwill.',
      outcomes: [
        { title: 'Bilingual Call Center Support', desc: 'Outbound collections queues staffed by local language representatives.' },
        { title: 'VoIP Call Log Locks', desc: 'System restricts outbound calls strictly within approved hours.' },
        { title: 'Grievance Resolution', desc: 'Compliance managers resolve customer disputes within 24 hours.' }
      ],
      useCases: [
        { title: 'Retail Gold Loans', desc: 'Soft collections and early-stage payment reminders.' },
        { title: 'Agriculture Gold Loans', desc: 'Outreach campaigns aligned with local crop cycles.' },
        { title: 'Business Gold Loans', desc: 'On-site address checks and verification diagnostics.' }
      ]
    },

    tabs: [
      {
        id: 'jewel-address',
        label: 'Address Check',
        heading: 'Gold loan applicant profile validations',
        overview: 'Verifying applicant profile details before asset disbursal.',
        activities: [
          'Verify identity registration records checks',
          'Conduct residential address verification visits check',
          'Document neighbor corroboration details files check'
        ],
        documents: [
          'KYC application forms check',
          'Verification reports registers'
        ],
        risks: [
          'Fictitious address exceptions',
          'Synthetic profile exceptions'
        ],
        deliverable: 'Compiled CPV profile report check.',
        benefit: 'Reduces early-stage credit default exposure.'
      },
      {
        id: 'jewel-call',
        label: 'Soft Calling',
        heading: 'RBI compliant tele-reminders calling',
        overview: 'Outbound collections calling using recorded VoIP lines.',
        activities: [
          'Enforce strict calling hours queue locking checks',
          'Record and audit 100% of outreach calls',
          'Process promise-to-pay (PTP) agreements checks'
        ],
        documents: [
          'Outbound caller log files',
          'Voice logs audio archives'
        ],
        risks: [
          'Script compliance violations check',
          'Statutory hours exceptions check'
        ],
        deliverable: 'Audited caller logs data files check.',
        benefit: 'Ensures absolute adherence to fair practices code.'
      },
      {
        id: 'jewel-visit',
        label: 'doorstep Visits',
        heading: 'Field representative doorstep visits',
        overview: 'Certified representatives conducting physical visits.',
        activities: [
          'Conduct doorstep collection check visits',
          'Verify coordinate logs check on mobile app',
          'Process payment collections slips details check'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Nodal bank deposit slips check'
        ],
        risks: [
          'Borrower contact failure exceptions',
          'Field coordination delays check'
        ],
        deliverable: 'Verified payment confirmation check.',
        benefit: 'Restores default accounts to active collections.'
      },
      {
        id: 'jewel-recon',
        label: 'Ledger Reconciliation',
        heading: 'Daily deposits sync and reconciliation',
        overview: 'Reconciling collections checks and deposit slips.',
        activities: [
          'Verify collections slips values check',
          'Reconcile ledgers checks on client dashboard console',
          'Transmit status uploads via SFTP paths check'
        ],
        documents: [
          'daily reconciliation checks reports',
          'nodal bank slips registries check'
        ],
        risks: [
          'Data sync exceptions check',
          'Deposit reconciliation errors check'
        ],
        deliverable: 'Daily audited collections report.',
        benefit: 'Provides transparent cash flows validation.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Borrower Contact Loss', desc: 'Borrowers in remote locations changing contact details, making communication impossible.', warningBadge: 'Traceability Gap', impact: 'Extended default cycles and collection delays.' },
      { title: 'Borrower Grievance Audits', desc: 'Threat tactics or unauthorized borrower contacts by agents lead to direct complaints, triggering audits by regulatory bodies.', warningBadge: 'Regulatory Risk', impact: 'Fines and potential panel empanelment suspensions.' },
      { title: 'unsecured default exposure', desc: 'A sudden default in gold loan books requires fast doorstep contact before the asset is auctioned.', warningBadge: 'Portfolio Risk', impact: 'Spikes in Gross NPA across branch areas.' }
    ],

    capabilitiesHeading: 'Gold Loan Specialized Solutions',
    capabilities: [
      { title: 'Soft Call Collections', desc: 'Compliant telephone reminders using bilingual scripts and trained agents.', bullets: ['Empathetic, non-coercive script compliance', 'Call recording and archive logs', 'RBI code compliant calling hours lockouts'], businessOutcome: 'Reduces early-stage defaults and secures payment commitments.' },
      { title: 'doorstep address Checks', desc: 'Certified local field coordinators conducting address verification visits.', bullets: ['In-person visits to declared residences', 'Geotagged visit check-ins', 'Daily status logs updated to the console'], businessOutcome: 'Confirms resident stability and maintains contact.' },
      { title: 'Alternative Reference Checking', desc: 'Verifying borrower reference contact details to restore communication.', bullets: ['Cross-checking public registries', 'Discreet community inquiries', 'Reference validations on site'], businessOutcome: 'Restores contact with missing or unreachable borrowers.' },
      { title: 'Grievance Management Desk', desc: 'Dedicated compliance desk resolving borrower disputes and feedback.', bullets: ['24-hour grievance registration and review', 'SLA tracked resolution workflow', 'Detailed reports shared with client banks'], businessOutcome: 'Protects lender brand value and resolves disputes.' },
      { title: 'Compliance Script Audits', desc: 'Weekly quality review of outbound call recordings and field logs.', bullets: ['Auditing 100% of recorded calls using analytics', 'Monitoring agent tone and script compliance', 'Immediate suspension of non-compliant representatives'], businessOutcome: 'Ensures absolute adherence to fair practices code.' },
      { title: 'District Ground Mapping', desc: 'District mapping of Southern India branches network coordinates.', bullets: ['Branch presence in local trade centers', 'Local representative residence matching', 'District-wise collections reports'], businessOutcome: 'Provides last-mile coverage for remote borrowers.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking gold loan default campaigns.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
        { step: '02', title: 'Planning', desc: 'Formulating calling script parameters, calling locks, and escalation stages.', outcome: 'SLA boundaries and scripts locked into the dialer system.' },
        { step: '03', title: 'Deployment', desc: 'Allocating case files to local branches and certified coordinators.', outcome: 'Immediate ground mobilization within target districts.' },
        { step: '04', title: 'Monitoring', desc: 'Enforcing VoIP voice logs audits and geolocated visit checks.', outcome: 'Complete auditable record of all borrower touchpoints.' },
        { step: '05', title: 'Continuous Improvement', desc: 'OTS settlement facilitation and cash ledger updates.', outcome: 'Reconciled collections data ready for review.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Gold Loans', desc: 'Coordinates applicant verifications and soft collections. Operates compliance-backed dialers.' }
    ],

    faqs: [
      { q: 'How do you ensure callers do not violate calling hours rules?', a: 'Our outbound VoIP dialer automatically locks calling queues between 07:00 PM and 08:00 AM, preventing any agent calls outside approved times.' },
      { q: 'Do you manage collections for agriculture gold loans?', a: 'Yes. Our branch network covers semi-urban and rural centers, with field teams tracking local crop harvesting cycles.' }
    ],

    cta: {
      heading: 'Secure Your Gold Loan Portfolio',
      subheading: 'Request an operational audit of our DRA-certified tele-agents and field compliance logs.',
      buttonText: 'Request Compliance Audit Details',
      href: '/contact'
    }
  },

  // ================= 17. EDUCATIONAL PRODUCTS =================
  'education-products': {
    eyebrow: 'Education Loan Collections',
    title: 'Education Loan Portfolio Collections & Tracing',
    subtitle: 'Structured co-borrower tracing and empathetic outreach',
    description: 'Trace graduated students, coordinate outreach with co-borrower families, and recover ETL books using soft collections.',
    primaryCtaText: 'Request ETL Pilot',
    secondaryCtaText: 'Download Co-borrower Trace Rules',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    problemStatementEyebrow: 'ETL Sourcing Pain',
    problemStatementHeading: 'The Relocation Challenge in Education Lending',
    problemStatement: [
      { icon: 'users', title: 'Graduated Students Relocating Cities', desc: 'Students relocating to IT hubs or moving overseas after graduation, leaving default accounts unreachable.' },
      { icon: 'fileWarning', title: 'Non-responsive Parent Co-signers', desc: 'Parent co-borrowers in rural areas unaware of default or unable to contact students, stalling collections.' },
      { icon: 'trendingDown', title: 'Lack of Salary/Employment Records', desc: 'Missing active employment records of graduated students, preventing automated salary attachments.' }
    ],

    overview: {
      heading: 'Co-borrower Escalation Networks',
      subheading: 'Ethical and Compliant Education Loan Recovery (ETL)',
      summary: 'Education loan collections require empathy and trace logistics. SM Associates structures ETL recovery around certified agents, parent communications, and student employment checks. We cover major municipal IT hubs, ensuring fast, compliance-aligned recoveries.',
      outcomes: [
        { title: 'Co-borrower Family Outreach', desc: 'doorstep visits to parent residences to establish contact.' },
        { title: 'Student Address Tracing', desc: 'registry searches in major employment hubs (Chennai, Bangalore).' },
        { title: 'Bilingual Call Center Support', desc: 'Empathetic tele-calling queues staffing trained agents.' }
      ],
      useCases: [
        { title: 'Domestic Studies Loans', desc: 'Outreach and soft collections campaigns.' },
        { title: 'International Student Credits', desc: 'Co-borrower family trace and settlement facilitation.' },
        { title: 'Unresolved ETL Books', desc: 'Dedicated address tracing and skip-tracing campaigns.' }
      ]
    },

    tabs: [
      {
        id: 'etl-student',
        label: 'Student Tracing',
        heading: 'Graduate relocation skip tracing',
        overview: 'Locating graduated students through corporate registries and utilities.',
        activities: [
          'Cross-check DIN and employer tax registries checks',
          'Verify alternate address details check registers',
          'Cross-match contact coordinate databases checks'
        ],
        documents: [
          'Employer database check logs',
          'Utility registry search check files'
        ],
        risks: [
          'Student overseas migration exceptions',
          'Missing employer telemetry exceptions check'
        ],
        deliverable: 'Alternate student contact coordinate reports.',
        benefit: 'Restores contact lines with graduates who shifted locations.'
      },
      {
        id: 'etl-cosigner',
        label: 'Co-signer Visit',
        heading: 'Co-borrower family doorstep visits',
        overview: 'Field coordinator visits to parent residences to discuss defaults.',
        activities: [
          'Conduct doorstep check visits to co-borrower parents check',
          'Log geotagged GPS timestamps coordinate check on site',
          'Liaise with community coordinators check'
        ],
        documents: [
          'Geotagged mobile visit check logs',
          'Parent family communication checklists'
        ],
        risks: [
          'Parent non-responsive exceptions',
          'Village locator exceptions check'
        ],
        deliverable: 'doorstep check verification reports check.',
        benefit: 'Coordinates default resolution with student parents.'
      },
      {
        id: 'etl-employer',
        label: 'Employer Check',
        heading: 'Graduates active employment checks',
        overview: 'On-site visits to check graduate active salary status.',
        activities: [
          'Conduct physical visits to declared corporate offices check',
          'Verify graduate active employment and role check on site',
          'Verify corporate GST tax registration records check'
        ],
        documents: [
          'Corporate check photograph registries',
          'Employer HR verifications check'
        ],
        risks: [
          'Informal sector employment exceptions',
          'Corporate office lockouts exceptions'
        ],
        deliverable: 'Audited graduate employment check reports.',
        benefit: 'Validates borrower actual repayment capacity.'
      },
      {
        id: 'etl-ots',
        label: 'OTS Negotiation',
        heading: 'Mediating OTS & resolutions',
        overview: 'Negotiating one-time settlement (OTS) options.',
        activities: [
          'Verify graduate payment eligibility checks',
          'Draft OTS agreement documentation files check',
          'Reconcile collections ledgers checks on client console'
        ],
        documents: [
          'Approved OTS certificate files check',
          'Nodal bank deposit slips check'
        ],
        risks: [
          'OTS processing delays check',
          'Deposit reconciliation errors check'
        ],
        deliverable: 'OTS transaction deed and closed account file.',
        benefit: 'Resolves outstanding ETL defaults cleanly.'
      }
    ],

    challengesHeading: 'Business Challenges',
    challenges: [
      { title: 'Student Overseas Migration', desc: 'Graduated students relocating overseas without updating bank details, leaving only parent co-borrowers responsible.', warningBadge: 'Traceability Gap', impact: 'Protracted default cycles and recovery delays.' },
      { title: 'Parent Family Grievances', desc: 'Non-compliant outreach to parent co-signers in rural centers, triggering compliance complaints.', warningBadge: 'Compliance Risk', impact: 'Fines and potential panel suspensions.' },
      { title: 'Missing Employment Telemetry', desc: 'Graduates working in informal sectors or shell companies, making salary verification impossible.', warningBadge: 'Verification Gap', impact: 'Lack of payment capabilities evidence.' }
    ],

    capabilitiesHeading: 'ETL Sourcing Toolkits',
    capabilities: [
      { title: 'Professional Address Tracing', desc: 'Locating graduated students through corporate registries and utilities.', bullets: ['Cross-checking public utility registries', 'Employer verification checks', 'Identifying current address coordinates check'], businessOutcome: 'Restores contact coordinates with missing borrowers.' },
      { title: 'Co-signer Ground Verification', desc: 'Field coordinators conducting doorstep verification visits to co-borrower families.', bullets: ['In-person visits to parent residences', ' mediation to resolve outstanding dues', 'Respectful borrower communication guidelines'], businessOutcome: 'Validates co-borrower status and coordinates repayment.' },
      { title: 'Empathetic Tele-Collections', desc: 'Dedicated collections queues handling ETL campaigns with soft scripts.', bullets: ['Bilingual soft script compliance', 'Call recording and voice archives', 'Outbound call schedule limits locks'], businessOutcome: 'Negotiates promise-to-pay (PTP) agreements.' },
      { title: 'Employer Verification check', desc: 'Verifying student employment details on-site.', bullets: ['In-person visits to declared workplaces', 'HR and salary status checks', 'GST registry validations'], businessOutcome: 'Confirms repayment capacity details.' },
      { title: 'Document Audits Forensics', desc: 'Physical inspection of submitted certificates and deed records.', bullets: ['Deed verification against Sub-Registrar files', 'Cross-matching certificates details', 'Flagging duplicate or altered files'], businessOutcome: 'Ensures loan document accuracy.' },
      { title: 'OTS facilitation support', desc: 'Mediating one-time settlement (OTS) options for long-standing defaults.', bullets: ['Facilitating bank-approved settlement terms', 'Preparing legal OTS agreement files', 'Logging payment deposits slips daily'], businessOutcome: 'Closes legacy default cases cleanly.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking ETL recovery from placement to settlement.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Receiving default files and co-borrower documents.', outcome: 'Registry checking initiated.' },
        { step: '02', title: 'Planning', desc: 'Field coordinators visit parent addresses to check details.', outcome: 'Parent contact and status verified.' },
        { step: '03', title: 'Deployment', desc: 'Tracing active coordinates in corporate hubs.', outcome: 'Graduated student contact details updated.' },
        { step: '04', title: 'Monitoring', desc: 'Collecting payment slips and closing NPA status.', outcome: 'ETL accounts resolved and closed.' }
      ]
    },

    outcomesHeading: 'Strategic Business Outcomes',
    outcomes: [
      { title: 'Better Portfolio Quality', desc: 'Proactive Collections rollback reduces early delinquency rollovers, keeping books clean.', value: 'Reduced Rollovers' },
      { title: 'Reduced Operational Risk', desc: '100% DRA-certified agent placements protect the lender from conduct audits.', value: 'Conduct Vetted' },
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' }
    ],

    targetIndustries: [
      { name: 'Education Loans', desc: 'Focuses on student tracing and co-borrower collections. Coordinates OTS negotiations.' }
    ],

    faqs: [
      { q: 'Do you contact parent co-borrowers in rural areas?', a: 'Yes. Our physical offices network covers major agricultural and rural hubs, enabling doorstep visits.' },
      { q: 'What happens if the student has relocated overseas?', a: 'We verify overseas coordinates through linked references and coordinate settlement terms with local parent co-borrowers.' }
    ],

    cta: {
      heading: 'Contact Our ETL Coordinator',
      subheading: 'Request a customized skip-tracing pilot for your delinquent ETL portfolios.',
      buttonText: 'Contact Our ETL Coordinator',
      href: '/contact'
    }
  }
};
