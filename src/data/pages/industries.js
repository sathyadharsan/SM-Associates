// Refined content data for all Industries and Products pages
// Conforms to the 12-section dynamic layout scheme

export const industriesContent = {
  // ================= 1. INDUSTRIES INDEX =================
  'industries': {
    eyebrow: 'Lending Verticals',
    title: 'Diverse Portfolios Require Calibrated Recovery Operations',
    subtitle: 'Managing Risk and Regulatory Alignment Across the Credit Lifecycle',
    description: 'SM Associates Risk Management Pvt. Ltd. structures specialized field operations, recorded outbound calling campaigns, and legal foreclosure panels calibrated to the specific regulatory code of each lending segment.',
    primaryCtaText: 'Schedule a Consultation',
    secondaryCtaText: 'Explore Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',
    
    kpiCards: [
      { icon: 'shield', title: 'Operational Standard', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Resolution Systems', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Portfolio Management', value: 'Multi-Stage' }
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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
    title: 'Diverse Retail Books Demand High Sourcing Density',
    subtitle: 'We optimize retail loan collections and vehicle repossessions through decentralized ground networks.',
    description: 'SM Associates Risk Management Pvt. Ltd. structures high-volume collections, doorstep payment pickups, and geolocated verifications calibrated to the operational needs of leading NBFC networks.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Macro Pressures and Sourcing Challenges in NBFC Retail Books',
    problemStatement: [
      { icon: 'trendingDown', title: 'High Ticket-to-Staff Cost Ratios', desc: 'Low-ticket retail portfolios are expensive to recover using traditional manual field networks. High travel costs dilute collections margins.' },
      { icon: 'shieldAlert', title: 'Conduct Violations Risk', desc: 'Outsourced representatives using non-compliant scripts or calling hours expose NBFCs to regulatory audits and loss of brand goodwill.' },
      { icon: 'timer', title: 'Rapid Provisioning Write-offs', desc: 'NBFC asset quality rules require rapid provisioning write-offs for unsecured defaults. Delayed doorstep contact accelerates portfolio write-downs.' }
    ],

    overview: {
      heading: 'Decentralized NBFC Operations Loop',
      subheading: 'Maximizing Field Contact Density through Branch Networks',
      summary: 'NBFC retail portfolios demand rapid, cost-efficient doorstep coordination. SM Associates operates 19 branches across 5 states, allowing us to allocate cases to local representatives residing within the same districts. This minimizes travel costs and enables same-day customer contact. We handle the complete lifecycle, from pre-disbursal verifications to physical vehicle repossession, all tracked on our central console.',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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
    title: 'Secured Mortgages Demand Legal Possessions Velocity',
    subtitle: 'We expedite SARFAESI foreclosures and property possessions through dedicated legal coordinate desks.',
    description: 'SM Associates Risk Management Pvt. Ltd. coordinates Section 13 notice servings, Chief Metropolitan Magistrate Section 14 filings, symbolic/physical possessions, and public e-auctions to release banking capital.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Lending Obstacles and Foreclosure Delays in Housing Finance Mortgages',
    problemStatement: [
      { icon: 'trendingDown', title: 'Magistrate Warrants Delays', desc: 'Inefficient filing of Section 14 petitions CJM courts stalls possessions. Delinquent properties remain occupied, extending foreclosure cycles.' },
      { icon: 'shieldAlert', title: 'Collateral Vandalism Risks', desc: 'Repossessed properties targeted by trespassers or damaged due to poor security deployments. Direct loss in realizable auction pricing.' },
      { icon: 'timer', title: 'Title Deed Registry Gaps', desc: 'Missing registry encumbrance details or duplicate title deeds complicate foreclosure files, resulting in failed public auctions.' }
    ],

    overview: {
      heading: 'Foreclosure Operations Desk',
      subheading: 'Enforcing Foreclosures with Speed and Legal Precision',
      summary: 'Secured mortgages require specialized legal and field coordination. SM Associates operates a dedicated foreclosure desk that drafts and serves Section 13 notices, coordinates petitions before Chief Metropolitan Magistrates (CMM), takes symbolic/physical possession, and manages public auctions. All activities are fully documented with photos and video logs to pre-empt court challenges.',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
    ],

    capabilitiesHeading: 'Industry Focus Areas',
    capabilities: [
      { title: 'SARFAESI Notices Serving', desc: 'HFC mortgage defaults require legally valid and certified notices delivery to initiate foreclosures.', bullets: ['In-hand delivery with signature proof', 'Registered post tracking with acknowledgment cards', 'Affixation check with geotagged photo logs if absent'], businessOutcome: 'Starts the statutory timeline for default resolution.' },
      { title: 'Magistrate warrant executions', desc: 'Filing petitions under Section 14 to secure possession warrants from magistrates.', bullets: ['Liaising with district legal panel advocates check', 'Preparing CMM/CJM court petition dossiers check', 'Coordinating police presence and logistics on-site'], businessOutcome: 'Legally authorizes physical eviction of defaulters.' },
      { title: 'Physical Possessions Logistics', desc: 'Ground coordination of lockouts and inventory verifications.', bullets: ['Coordinating locksmiths, security forces, and police assistance', 'Taking physical possession and securing the site', 'Detailed inventory checks of repossessed items'], businessOutcome: 'Secures physical asset with zero operational disputes.' },
      { title: 'Secure Yard Custody', desc: 'Storing repossessed vehicles in fenced, CCTV-monitored facilities.', bullets: ['24/7 guard shifts and CCTV monitoring', 'Detailed vehicle status checks on inflow', 'Weekly inventory reconciliations'], businessOutcome: 'Protects the value of repossessed collateral.' },
      { title: 'Tractor Location Tracking', desc: 'Tracing agricultural tractors across farming districts.', bullets: ['Cross-checking municipal registries', 'Community inquiries on site', 'Alternative coordinate verifications'], businessOutcome: 'Restores contact with agricultural defaults.' },
      { title: 'Asset Valuation Panel Support', desc: 'Physical vehicle status checks to set e-auction reserve prices.', bullets: ['Assessing vehicle running condition', 'Validating pricing index registries', 'Government-approved panel valuations'], businessOutcome: 'Ensures correct reserve pricing compliant with guidelines.' }
    ],

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'How we onboard, calibrate, and execute campaigns across HFC lending verticals.',
      steps: [
        { step: '01', title: 'Assessment', desc: 'Reviewing the mortgage default portfolio and checking parameters.', outcome: 'Case legal dossiers compiled and verified.' },
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
      { title: 'Regulatory Readiness', desc: 'Geotagged check files and VoIP call recording archives protect bank panels.', value: 'RBI Code Compliant' },
      { title: 'Improved Collections', desc: 'High-density branch routing maximizes doorstep collections and payments pickup.', value: 'Higher Realization' },
      { title: 'Faster Recovery', desc: 'Dedicated legal coordinate desks expedite magistrate possessions and sales.', value: 'Expedited Warrants' },
      { title: 'Stronger Governance', desc: 'Reconciled dashboard reporting and secure SFTP uploads provide clean audit logs.', value: 'Auditable Trails' }
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
    title: 'Compliant and Respectful Collections for Microfinance Portfolios',
    subtitle: 'Ethical Outreach and Code-of-Conduct Enforcement on the Ground',
    description: 'Scale soft outbound dialing campaigns and regional field collections designed specifically for microfinance borrowers.',
    primaryCtaText: 'Request MFI Team Meeting',
    secondaryCtaText: 'View Fair Practices Code Guidelines',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'MFI Compliance Pain',
    problemStatementHeading: 'The Compliance Vulnerabilities in Microfinance Recoveries',
    problemStatement: [
      { icon: 'shield', title: 'High Client Attrition Risk', desc: 'Aggressive field tactics by uncertified agents trigger client attrition and local disputes, damaging the institution\'s brand.' },
      { icon: 'timer', title: 'Strict Calling Hours Adherence', desc: 'Outbound calls made before 08:00 AM or after 07:00 PM violate regulatory codes, exposing lenders to licensing audits.' },
      { icon: 'users', title: 'Loss of Client Touchpoints', desc: 'Joint Liability Group (JLG) members relocating without notice disrupt collections cycles. Tracking requires localized regional presence.' }
    ],

    overview: {
      heading: 'Managed Outreach Solutions',
      subheading: 'Empathetic and Compliant Outreach for JLG Portfolios',
      summary: 'Microfinance recovery requires balancing resolution rates with strict compliance rules. SM Associates structures JLG collections around certified agents, bilingual scripts, and strict caller logging. Our branch networks cover local districts, enabling discreet and respectful doorstep verifications that maintain lender goodwill.',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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

    processFlow: {
      title: 'Industry Engagement Journey',
      desc: 'SLA-tracked milestones for digital lending checks.',
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

  // ================= 7. ARC =================
  'arc': {
    eyebrow: 'ARC Sector',
    title: 'Acquired Banking Books Require Forensic Foreclosure enforcements',
    subtitle: 'We accelerate stressed asset resolution and public auctions through legal panels and site security.',
    description: 'SM Associates Risk Management Pvt. Ltd. structures physical possessions execution, Government-approved valuations, factory site security guard deployments, and e-auction bidder mobilizations to maximize recovery yields.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Valuation Depreciation and Legal Obstacles in Purchased Banking Books',
    problemStatement: [
      { icon: 'trendingDown', title: 'Physical Possessions Delays', desc: 'Extended Section 1magistrate warrant backlogs delay symbolic to physical possession transfers, causing holding expenses inflation.' },
      { icon: 'shieldAlert', title: 'Asset Depreciation & Vandalism', desc: 'Unsecured commercial factories or equipment fleets targeted by trespassers or damaged, reducing the realisable auction yields.' },
      { icon: 'timer', title: 'Failed E-Auctions', desc: 'Missing registry document histories or inaccurate property reserve pricing lead to failed public auctions, locking up resolution capital.' }
    ],

    overview: {
      heading: 'Asset Valuation Security Loops',
      subheading: 'Securing Value Throughout the NPA Resolution Cycle',
      summary: 'Asset Reconstruction Companies require a recovery partner capable of handling legal, logistics, and security. SM Associates provides end-to-end support for ARC portfolios: taking symbolic possession, deploying ex-defence security guards, conducting panel valuations, and publicizing e-auctions to maximize realization yields.',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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
      title: 'Industry Engagement Journey',
      desc: 'Milestone tracking for ARC resolved portfolios.',
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
    title: 'SME Default Portfolios Require Operations Precision',
    subtitle: 'We verify applicant capacity and coordinate commercial legal notice serving.',
    description: 'SM Associates Risk Management Pvt. Ltd. structures pre-disbursal trade checks, Director DIN registry searches, on-site inventory audits, and DRT coordinate legal notice serving to secure commercial asset quality.',
    primaryCtaText: 'Request Industry Consultation',
    secondaryCtaText: 'Explore Strategic Focus Areas',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'Industry Risk Landscape',
    problemStatementHeading: 'Lending Hurdles and Foreclosure Obstacles in Corporate defaults',
    problemStatement: [
      { icon: 'trendingDown', title: 'Director Asset Diversion', desc: 'Defaulting directors shifting capital or titles to corporate shell entities to avoid bank foreclosure actions.' },
      { icon: 'shieldAlert', title: 'Non-active SME Factories', desc: 'Borrowers presenting closed or non-operational facilities as active business premises to pass basic desk checks.' },
      { icon: 'timer', title: 'IBC litigation Moratoriums', desc: 'Defaults delayed by corporate insolvency filings (CIRP), freezing standard SARFAESI foreclosure workflows.' }
    ],

    overview: {
      heading: 'Specialized Corporate Recovery Panels',
      subheading: 'Resolving Commercial Defaults with Legal Rigor and Sourcing',
      summary: 'High-value commercial loans require structured investigations and legal coordination. SM Associates supports corporate lenders by tracing alternative assets of defaulting directors, auditing operating capacity of SME borrowers, and assisting legal teams in filing applications and recovery certificates before Debt Recovery Tribunals (DRT).',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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
      title: 'Industry Engagement Journey',
      desc: 'Milestone tracking for commercial and corporate defaults.',
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
    title: 'Claims Fraud Investigation and Verification Support for Insurers',
    subtitle: 'On-Ground SIU Audits and Forensic Documentation Checks',
    description: 'Investigate suspicious motor, life, and medical insurance claims with certified on-ground investigators and forensic record checkers.',
    primaryCtaText: 'Submit Claims Investigation Request',
    secondaryCtaText: 'Review Claims Audit Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
    ],

    problemStatementEyebrow: 'Insurance Risk Landscape',
    problemStatementHeading: 'The Vulnerability of Fictitious Insurance Claims',
    problemStatement: [
      { icon: 'fileWarning', title: 'Staged Motor Accidents', desc: 'Fraud rings simulating vehicle damage or staging accidents to claim high payouts, requiring on-site accident verifications.' },
      { icon: 'trendingDown', title: 'Manipulated Medical Bills', desc: 'Claimants presenting fabricated medical bills or shell hospital records to secure health insurance reimbursements.' },
      { icon: 'fingerprint', title: 'Identity Forgery on Life Policies', desc: 'Falsified death certificates or synthetic identity profiles used to file life insurance claims, bypassing basic desk reviews.' }
    ],

    overview: {
      heading: 'Forensic Ground Claims Audits',
      subheading: 'Verifying the Truth Behind Suspicious Claims',
      summary: 'Insurance fraud directly impacts premium margins. SM Associates supports insurers by providing dedicated Special Investigation Unit (SIU) field audits. We conduct on-site accident verifications, check hospital medical records, verify death certificates, and gather local witness statements to provide clear evidentiary files.',
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
      { title: 'Eviction Warrants Backlog', desc: 'Inefficient legal filing coordinate structures stall Section 1magistrate warrants. Properties remain occupied by defaulting borrowers.', warningBadge: 'COMMERCIAL BANKING', impact: 'SM Associates Operational Approach: Legal coordination desk liaising with district courts and authorities.' },
      { title: 'Synthetic Identity Infiltration', desc: 'Fictitious or shell companies presented as stable employers to pass basic desk checks during underwriting. Inability to verify details leads to early default risks.', warningBadge: 'RETAIL CREDIT', impact: 'SM Associates Operational Approach: On-ground workplace CPV visits and employer HR verification.' },
      { title: 'Data Security Auditing exceptions', desc: 'Vendor file transmission loops failing to comply with ISO 27001 parameters, exposing borrower PII data registries.', warningBadge: 'OPERATIONAL GOVERNANCE', impact: 'SM Associates Operational Approach: Encrypted SFTP data pipelines and audit-ready documentation custody.' }
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
      title: 'Industry Engagement Journey',
      desc: 'Milestones tracking claims verification from intake to report.',
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
    title: 'Vehicle Collections, Repossession & Yard Custody Operations',
    subtitle: 'Securing Delinquent Auto and Commercial Fleet Assets',
    description: 'Seize, transport, and secure delinquent auto, commercial, and tractor assets with strict compliance and trained repossession agents.',
    primaryCtaText: 'Request Seizure Pilot',
    secondaryCtaText: 'View Repossession Guidelines',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
    title: 'Applicant Verifications and soft collections for Gold Loan Portfolios',
    subtitle: 'Bilingual Collections and Local Address Validations',
    description: 'Verify gold loan applicant profiles and manage collections campaigns with strict compliance and trained ground representatives.',
    primaryCtaText: 'Request Gold Loan Pilot',
    secondaryCtaText: 'View Gold Loan Verification Criteria',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
      heading: 'Schedule an Industry Consultation',
      subheading: 'Request an operational audit of our DRA-certified tele-agents and field compliance logs.',
      buttonText: 'Request Compliance Audit Details',
      href: '/contact'
    }
  },

  // ================= 12. RETAIL & PERSONAL PRODUCTS =================
  'retail-products': {
    eyebrow: 'Retail Lending Products',
    title: 'Verification & Collections for Retail & Personal Loans',
    subtitle: 'Bilingual Collections and Local Address Validations',
    description: 'Verify retail loan applicant profiles and manage collections campaigns with strict compliance and trained ground representatives.',
    primaryCtaText: 'Request Retail Loan Pilot',
    secondaryCtaText: 'Download Compliance Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
    title: 'On-Site Business and Commercial Establishment Verification',
    subtitle: 'Ensuring Applicant Operating Validity and Commercial Capacity',
    description: 'Ensure the physical existence, operational capacity, and regulatory standing of business loan applicants.',
    primaryCtaText: 'Request Business Audit Pilot',
    secondaryCtaText: 'Download Report Framework',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
    title: 'Compliant and Localized Agricultural & Tractor Loan Recoveries',
    subtitle: 'Crop-Cycle Aligned collections and Physical Equipment Tracing',
    description: 'Scale crop-cycle collections and secure tractor repossession with local field teams operating across agricultural hubs.',
    primaryCtaText: 'Request Rural Team Call',
    secondaryCtaText: 'View Tractor Seizure Protocols',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
    title: 'Professional and Compliant Education Loan Collections',
    subtitle: 'Structured co-borrower tracing and empathetic outreach',
    description: 'Trace graduated students, coordinate outreach with co-borrower families, and recover ETL books using soft collections.',
    primaryCtaText: 'Request ETL Pilot',
    secondaryCtaText: 'Download Co-borrower Trace Rules',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '#capabilities',

    kpiCards: [
      { icon: 'shield', title: 'Operational Strategy', value: 'Compliance-Driven' },
      { icon: 'database', title: 'Recovery Infrastructure', value: 'Technology-Enabled' },
      { icon: 'users', title: 'Reporting & Governance', value: 'Enterprise-Grade' }
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
