export const specializedContent = {
  'portfolio-management': {
    eyebrow: 'Portfolio Management Services',
    title: 'Structured Portfolio Recovery Management at Scale',
    description: 'Maximize recovery yields across retail, commercial, and secured portfolios with custom segmentation and dedicated account teams.',
    primaryCtaText: 'Discuss Portfolio Mandates',
    secondaryCtaText: 'Download Portfolio Framework',
    trustStatement: 'Managing 80+ active loan books for leading banks and NBFCs across South India.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers portfolio recovery management. We segment delinquent accounts by risk parameters, route cases to calling or field teams, and coordinate legal notice enforcements under a single SLA.',
      outcomes: [
        { title: 'Portfolios Managed', desc: 'Over 80+ active portfolios managed for ARCs and retail lenders.' },
        { title: 'Blended Resolution', desc: 'Up to 82% resolution yields secured across loan books.' },
        { title: 'Reporting TAT', desc: 'Real-time dashboard updates and weekly performance review calls.' }
      ],
      useCases: [
        { title: 'Retail Credit Portfolios', desc: 'Managing early and late bucket recovery campaigns.' },
        { title: 'Stressed Asset Portfolios', desc: 'Coordinate collections and asset foreclosures for acquired books.' }
      ]
    },
    stats: [
      { value: '80+', label: 'Portfolios Managed' },
      { value: '82%', label: 'Blended Resolution Rate' },
      { value: '25 Yrs', label: 'Operations Standing' }
    ],
    challenges: [
      { title: 'Undifferentiated Outreach', desc: 'Treating all defaulters with the same calling or field campaign, increasing costs and reducing yields.', warningBadge: 'Process Gap', impactFormula: 'Recovery Rate - 18%' },
      { title: 'Uncoordinated Actions', desc: 'Calling and field campaigns out of sync with legal notice timelines, slowing resolutions.', warningBadge: 'Operational Gap', impactFormula: 'Resolution TAT + 45%' }
    ],
    failCompare: [
      {
        dimension: 'Campaign Strategy',
        traditional: 'Outbound campaigns dialing at random, with no borrower segmentation.',
        sm: 'Risk-based segmentation routing cases to calling, field, or legal panels dynamically.'
      },
      {
        dimension: 'Telemetry Updates',
        traditional: 'Outdated databases, with weeks of lag updating account status.',
        sm: 'Secure SFTP pipeline updates showing coordinates and call logs daily.'
      }
    ],
    framework: {
      title: 'Segmented Portfolio Optimization',
      desc: 'Centralized portfolio management ensuring recovery velocity.',
      solutions: [
        { title: 'Dynamic Risk Bucketing', desc: 'Analyzing borrower history and assets to target high-propensity segments.' },
        { title: 'Dedicated Account Desks', desc: 'Assigning account managers to coordinate branch activities and reviews.' }
      ]
    },
    capabilities: [
      { title: 'Advanced Segmentation', desc: 'Grouping accounts by default age, loan size, and location parameters.', businessOutcome: 'Optimizes ground travel budgets and calling schedules.' },
      { title: 'Operations Dashboard', desc: 'Real-time telemetry showing call voice files and field check-ins.', businessOutcome: 'Provides complete transparency and audit trails.' }
    ],
    workflow: [
      { step: '01', title: 'Ingestion & Diagnostics', objective: 'Verify default details', action: 'Ingest portfolio files and evaluate default profiles.', deliverable: 'Risk prioritized list.' },
      { step: '02', title: 'Borrower Segmenting', objective: 'Map campaign rules', action: 'Group accounts and design calling/visit schedules.', deliverable: 'Campaign rule map.' },
      { step: '03', title: 'Campaign Execution', objective: 'Perform collections', action: 'Launch calling, doorstep visits, and legal enforcements.', deliverable: 'Outbound action logs.' },
      { step: '04', title: 'Performance Syncing', objective: 'Deliver audit reports', action: 'Compile results and update client underwriter console.', deliverable: 'Final portfolio status report.' }
    ],
    techEnablement: {
      title: 'Portfolio Telemetry Platform',
      desc: 'Real-time updates logging coordinates and call histories.',
      modules: [
        { title: 'Operations Console', desc: 'Lenders track case stages, call recordings, and field coordinates.' }
      ]
    },
    geoScope: {
      title: 'Liaison & Yard Scope',
      desc: 'Branch networks and custody yards active across Southern India.',
      stats: [
        { label: 'Offices Covered', value: '35 Regional Branches' },
        { label: 'Custody Yards', value: '25+ Audited Secure Yards' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned calling & visits',
      '100% DRA Certified Placements',
      'ISO 27001 Data Custody Protocols Adhered'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Managing credit card default portfolios.', framework: 'Risk-based calling campaigns' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset valuations audits' }
    ],
    operationalMetrics: [
      { value: '80+', label: 'Portfolios Managed' },
      { value: '82%', label: 'Blended Resolution Rate' },
      { value: '100% compliance', label: 'Audit Trail Success' }
    ],
    businessOutcomes: [
      { title: 'Higher Recovery Yields', desc: 'Risk-based segmentation increases default resolutions.' },
      { title: 'Reduced Operations Costs', desc: 'Optimized target routing reduces field travel budgets.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Resolving a Complex Retail Book',
      challenge: 'A nationalized bank had a legacy portfolio of default personal loans, with local agencies unable to resolve accounts.',
      approach: 'SM Associates deployed risk-based segmentation and coordinated doorstep visits.',
      execution: 'Launched dialer campaigns, mapped coordinates, and assigned field coordinators for doorstep checks.',
      outcome: 'Resolved 78% of delinquent accounts within 120 days, reducing NPA provisioning.'
    },
    faqs: [
      { q: 'How often are performance updates synchronized?', a: 'Account status updates are synchronized daily via secure SFTP, with detailed review calls scheduled weekly.' }
    ],
    cta: {
      heading: 'Optimize Your Distressed Portfolio Strategy Today',
      subheading: 'Request a consultation call to discuss portfolio parameters and empanelment.',
      buttonText: 'Connect with a Portfolio Manager',
      href: '/contact'
    }
  },

  'npa-recovery': {
    eyebrow: 'NPA Foreclosure Division',
    title: 'Expedite NPA Resolution and Foreclosures',
    description: 'Recover capital from non-performing assets through structured legal notices, symbolic possession enforcements, and alternate asset tracing.',
    primaryCtaText: 'Request NPA Consultation',
    secondaryCtaText: 'Download Foreclosure Guides',
    trustStatement: 'Helping banks minimize provisioning locks, resolving over ₹2,400+ Crore in NPA assets.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates coordinates NPA recoveries. We manage SARFAESI Section 13 notice filings, coordinate District Magistrate Section 14 petitions, execute physical possessions, and secure yard storage throughout the auction window.',
      outcomes: [
        { title: 'NPA Resolved Value', desc: 'Over ₹2,400+ Crore in default loan books resolved.' },
        { title: 'Eviction Success', desc: '98% success rate executing possession warrants.' },
        { title: 'Secure Warehousing', desc: 'Stored in 25 secure custody yards with 24/7 guards and CCTV logs.' }
      ],
      useCases: [
        { title: 'High-Ticket Mortgage defaults', desc: 'Residential and commercial property foreclosures.' },
        { title: 'ARC Acquired portfolios', desc: 'Asset repossession and auction coordination.' }
      ]
    },
    stats: [
      { value: '₹2,400+ Cr', label: 'NPA Value Resolved' },
      { value: '98%', label: 'Possession Success Rate' },
      { value: '25+', label: 'Audit Passed Yards' }
    ],
    challenges: [
      { title: 'Eviction Resistance', desc: 'Defaulters or local occupants resisting physical evictions, delaying possessions and extending defaults.', warningBadge: 'Security Risk', impactFormula: 'Possession Delay + 90 Days' },
      { title: 'Failed Auctions', desc: 'Low bidder turnout or notice publication errors halting property auctions.', warningBadge: 'Failed Auction', impactFormula: 'Capital Lock + 180 Days' }
    ],
    failCompare: [
      {
        dimension: 'Liaison Coordination',
        traditional: 'Lenders coordinate with police circles independently, causing delays.',
        sm: 'Dedicated liaison desk coordinating directly with District Magistrates and local police circles.'
      },
      {
        dimension: 'Asset Protection',
        traditional: 'Leaving properties unguarded post-seizure, risking encroachment.',
        sm: 'Fenced secure yards with 24/7 security guards and CCTV monitoring.'
      }
    ],
    framework: {
      title: 'NPA Resolution Framework',
      desc: 'Compliant legal notice enforcements and secure yard storage.',
      solutions: [
        { title: 'DM Warrant Liaison', desc: 'Coordinating eviction dates with municipal police circles and government advocates.' },
        { title: 'Asset inventory audits', desc: 'Detailed cataloging of all assets on property before sealing.' }
      ]
    },
    capabilities: [
      { title: 'Sec 13(4) Evictions', desc: 'Filing petitions and executing warrants under Section 14.', businessOutcome: 'Secures legal possession of industrial real estate.' },
      { title: 'Asset Tracing', desc: 'Cross-referencing property registers for alternative assets.', businessOutcome: 'Provides alternative security options for recovery.' }
    ],
    workflow: [
      { step: '01', title: 'Account Ingestion', objective: 'Verify default file', action: 'Ingest loan records and verify notice status with bank legal desk.', deliverable: 'NPA case log.' },
      { step: '02', title: 'Notice Validation', objective: 'Verify notices registry', action: 'Confirm notice delivery checks and files details.', deliverable: 'Notice delivery proof.' },
      { step: '03', title: 'Possession Action', objective: 'Secure the property', action: 'File Section 14 petitions and execute possessions under police presence.', deliverable: 'Possession report.' },
      { step: '04', title: 'Auction Execution', objective: 'Complete asset auction', action: 'Cross-check property valuations, publish notices, and coordinate auctions.', deliverable: 'Auction certificate.' }
    ],
    techEnablement: {
      title: 'NPA Tracking Telemetry',
      desc: 'Lenders track their case stages and notice delivery coordinates.',
      modules: [
        { title: 'Litigation Console', desc: 'Lenders track hearing dates, advocate briefs, and notice status.' }
      ]
    },
    geoScope: {
      title: 'Liaison Scope',
      desc: 'Liaison offices active across Southern India.',
      stats: [
        { label: 'Liaison Offices', value: '35 Regional Branches' },
        { label: 'Active States', value: 'TN, KA, KL, TS, AP, PY' }
      ]
    },
    complianceDetails: [
      'Strict Compliance with SARFAESI Foreclosure Laws',
      'All Asset Inventories Signed off by Witnesses',
      'ISO 27001 Data Custody Protocols Adhered'
    ],
    industriesServed: [
      { name: 'Public Sector Banks', scenario: 'High-volume residential mortgage auctions.', framework: 'Standardized media notices' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset location checks' }
    ],
    operationalMetrics: [
      { value: '₹2,400+ Cr', label: 'NPA Value Resolved' },
      { value: '98%', label: 'Possession Success Rate' },
      { value: '25+', label: 'Audit Passed Yards' }
    ],
    businessOutcomes: [
      { title: 'Provision Reserves Release', desc: 'Expedited case resolutions release bank reserves and optimize metrics.' },
      { title: 'Clean Property Title', desc: 'Compliant legal Notice coordination ensures smooth property auctions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Resolving a Legacy Mortgage NPA',
      challenge: 'A nationalized bank had a legacy portfolio of default home loans stalled in regional courts, with outstanding Stage-3 assets exceeding ₹25 Crore.',
      approach: 'SM Associates took over case coordination, tracking case numbers and preparing advocate briefs.',
      execution: 'Standardized document formats and monitored court filings on our litigation console.',
      outcome: 'Resolved 78% of the backlog within 120 days, securing attachment orders for ₹18 Crore in delinquent debt.'
    },
    faqs: [
      { q: 'Do you locate alternative properties of the directors in default?', a: 'Yes. We cross-reference municipal land registries and MCA records to identify other assets owned by default directors.' }
    ],
    cta: {
      heading: 'Unlock Value from Stressed Assets Today',
      subheading: 'Request a consultation call to discuss NPA resolutions and empanelment.',
      buttonText: 'Connect with an NPA Recovery Expert',
      href: '/contact'
    }
  },

  'recovery-analytics': {
    eyebrow: 'Data Intelligence',
    title: 'Data-Driven Recovery Diagnostics and Propensity Scoring',
    description: 'Optimize recovery campaigns by analyzing borrower behavior patterns, location metrics, and settlement propensity scores.',
    primaryCtaText: 'Request Portfolio Analysis',
    secondaryCtaText: 'View Sample Analytics Format',
    trustStatement: 'Providing data-driven analytics checks across ₹4,500+ Crore in portfolios, with a 94% forecast accuracy rating.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers recovery analytics. We build propensity forecasting models, analyze borrower settlement behavior patterns, and optimize ground collections routes to maximize portfolio yields.',
      outcomes: [
        { title: 'Forecast Accuracy', desc: '94% prediction accuracy for default settlements.' },
        { title: 'Portfolios Handled', desc: '₹4,500+ Crore in retail and commercial books analyzed.' },
        { title: 'Analytics Output', desc: 'Propensity maps and route optimization logs delivered via secure dashboard APIs.' }
      ],
      useCases: [
        { title: 'Retail Credit Card Analytics', desc: 'Scoring default books to segment calling vs visit check campaigns.' },
        { title: 'Auto Finance Portfolios', desc: 'Route optimization logs for vehicle collections.' }
      ]
    },
    stats: [
      { value: '94%', label: 'Forecast Accuracy Rate' },
      { value: '₹4,500+ Cr', label: 'Portfolios Handled' },
      { value: 'Instant', label: 'API Data Sync TAT' }
    ],
    challenges: [
      { title: 'Unoptimized Field Visits', desc: 'Dispatching field agents to remote locations without checking coordinate records, increasing travel costs.', warningBadge: 'Logistical Friction', impactFormula: 'Travel Budget + 40%' },
      { title: 'Incorrect Settlement Levels', desc: 'Accepting low settlement amounts or setting unviable recovery targets.', warningBadge: 'Capital Loss', impactFormula: 'Write-off Value + 20%' }
    ],
    failCompare: [
      {
        dimension: 'Campaign Routing',
        traditional: 'Assigning accounts to field teams randomly, causing travel budget wastage.',
        sm: 'Predictive routing maps optimizing agent dispatches based on coordinates.'
      },
      {
        dimension: 'Settlement Yields',
        traditional: 'Offering arbitrary discounts with no financial analysis.',
        sm: 'Propensity models calculating optimal settlement amounts to maximize yields.'
      }
    ],
    framework: {
      title: 'Data-Driven Campaign Optimization',
      desc: 'Centralized database analytics checking coordinates and caller tone compliance.',
      solutions: [
        { title: 'Settlement Propensity Models', desc: 'Analyzing borrower profiles to score account settlement probabilities.' },
        { title: 'Route Optimization Engines', desc: 'Generating coordinates map checks for field coordinators to minimize travel times.' }
      ]
    },
    capabilities: [
      { title: 'Borrower Profiling', desc: 'Analyzing payment records and credit scores.', businessOutcome: 'Identifies accounts with high settlement probability.' },
      { title: 'Dashboard Telemetry', desc: 'Real-time dashboard updates logging coordinates and calling histories.', businessOutcome: 'Provides complete operational transparency.' }
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', objective: 'Verify portfolio records', action: 'Ingest client database files via secure SFTP sync.', deliverable: 'Active data log.' },
      { step: '02', title: 'Propensity Scoring', objective: 'Segment risk profiles', action: 'Run ML models to score settlement probabilities.', deliverable: 'Segmented borrower registry.' },
      { step: '03', title: 'Campaign Mapping', objective: 'Optimize agent routes', action: 'Generate route coordinates map checks for field coordinators.', deliverable: 'Optimized routing map.' },
      { step: '04', title: 'Performance Sync', objective: 'Deliver performance audits', action: 'Upload analytics logs to client console.', deliverable: 'Telemetry analytics report.' }
    ],
    techEnablement: {
      title: 'Analytics Console',
      desc: 'Encrypted databases and company registry matching.',
      modules: [
        { title: 'Live Updates Sync', desc: 'Outbound voice logs are stored securely, auditable on the console.' }
      ]
    },
    geoScope: {
      title: 'Analytics Infrastructure',
      desc: 'Centralized data operations hubs active across South India.',
      stats: [
        { label: 'Data Hubs', value: 'Chennai HQ Operations' },
        { label: 'Developer Staff', value: '15+ Data Engineers' }
      ]
    },
    complianceDetails: [
      'GDPR and ISO Data Security Compliant Handling',
      'Data Privacy and ISO 27001 Certified Handling',
      'All borrower data anonymized during model training'
    ],
    industriesServed: [
      { name: 'Fintech Platforms', scenario: 'API-based credit validations checks.', framework: 'API-triggered database checks' },
      { name: 'Private Commercial Banks', scenario: 'High-ticket personal loan reference checks.', framework: 'Outbound call center audits' }
    ],
    operationalMetrics: [
      { value: '94%', label: 'Forecast Accuracy Rate' },
      { value: '₹4,500+ Cr', label: 'Portfolios Handled' },
      { value: 'Instant', label: 'API Data Sync TAT' }
    ],
    businessOutcomes: [
      { title: 'Lower Operations Cost', desc: 'Optimized travel paths reduce field collections expenses.' },
      { title: 'Higher Recovery Yield', desc: 'Segmenting high-propensity accounts increases settlement conversions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Increasing Field Efficiencies',
      challenge: 'A retail finance firm experienced high personal loan defaults, with field teams wasting travel budgets on non-responsive borrowers.',
      approach: 'SM Associates integrated carrier registry checks and reference calling audits.',
      execution: 'Cross-checked SIM registrations and performed validation calls for all incoming applications.',
      outcome: 'Exposed 8% fake reference records, saving the platform over ₹1.1 Crore in potential bad debts.'
    },
    faqs: [
      { q: 'How do you protect customer data privacy?', a: 'All borrower data is encrypted at rest and in transit, with role-based access console restricting data to active cases only.' }
    ],
    cta: {
      heading: 'Predict and Optimize Recovery Yields Today',
      subheading: 'Request an integration guide to link your underwriting console with our database APIs.',
      buttonText: 'Start Portfolio Scoping Pilot',
      href: '/contact'
    }
  },

  'recovery-consulting': {
    eyebrow: 'Risk Advisory Services',
    title: 'Advisory Services for Modern Risk and Recovery Functions',
    description: 'Review process design, vendor audit systems, and regulatory compliance paths with veteran Indian credit operations consulting advisors.',
    primaryCtaText: 'Request Consulting Discussion',
    secondaryCtaText: 'View Advisory Framework',
    trustStatement: 'Advising 40+ financial institutions, backed by over 25 years of standing in Indian credit recovery.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers recovery consulting. We design recovery SOPs, audit external collection agencies, and align credit operations with RBI Fair Practice Codes to minimize regulatory risks.',
      outcomes: [
        { title: 'Advisory Standing', desc: 'Operating since 2000, specializing in Indian credit recovery laws.' },
        { title: 'Clients Advised', desc: '40+ commercial banks, retail NBFCs, and co-operative banks advised.' },
        { title: 'Compliance Safety', desc: '100% compliance audit success rates for advised programs.' }
      ],
      useCases: [
        { title: 'Internal Policy Restructuring', desc: 'Aligning collections calling scripts and schedules with RBI rules.' },
        { title: 'Vendor Management Audits', desc: 'Designing audit checklists for third-party collection vendors.' }
      ]
    },
    stats: [
      { value: '25 Yrs', label: 'Advisory Standing' },
      { value: '40+', label: 'Clients Advised' },
      { value: '100%', label: 'Audit Success Rate' }
    ],
    challenges: [
      { title: 'Outdated Collection Rules', desc: 'Internal collections departments using scripts that violate RBI calling rules, risking audit penalties.', warningBadge: 'Regulatory Risk', impactFormula: 'License Audit + 25%' },
      { title: 'Unmonitored Vendor Networks', desc: 'Failing to track third-party collections coordinate check-ins and call logs, causing complaints.', warningBadge: 'Audit Defect', impactFormula: 'Grievance TAT + 35%' }
    ],
    failCompare: [
      {
        dimension: 'Internal Audit Controls',
        traditional: 'Accepting paper post office returns as final, stalling court filings.',
        sm: 'Ground checks verifying directories, neighbor inputs, and municipal utility files.'
      },
      {
        dimension: 'Vendor Management',
        traditional: 'Lenders coordinate with local police independently, causing delays.',
        sm: 'Centralized case tracking linked to the e-courts database, updating daily.'
      }
    ],
    framework: {
      title: 'Consulting Operations Model',
      desc: 'Centralized coordination with local authorities to execute foreclosure enforcements.',
      solutions: [
        { title: 'Process Auditing Desks', desc: 'Branch managers coordinating directly with regional police circles and government offices.' },
        { title: 'Compliance Check Loops', desc: 'Auditing property documents and warrants before local registry submissions.' }
      ]
    },
    capabilities: [
      { title: 'SOP Design', desc: 'Filing requests and arranging police presence for evictions.', businessOutcome: 'Secures ground safety during physical property repossessions.' },
      { title: 'Vendor Auditing', desc: 'Cross-checking registries and registering sale deeds.', businessOutcome: 'Allows clean asset title transfers to auction buyers.' }
    ],
    workflow: [
      { step: '01', title: 'Process Assessment', objective: 'Verify default file', action: 'Ingest court warrants and verify details with bank legal desk.', deliverable: 'Liaison case file.' },
      { step: '02', title: 'Audit Diagnostic Check', objective: 'Verify document files', action: 'Assemble property deeds, warrants, and police request forms.', deliverable: 'Pre-screened dossier.' },
      { step: '03', title: 'Procedural Design Pitch', objective: 'Secure police presence', action: 'Submit request to local police and coordinate eviction date.', deliverable: 'Police approval record.' },
      { step: '04', title: 'Implementation Review', objective: 'Evict and seal', action: 'Visit site with authorities, execute possession, and inventory assets.', deliverable: 'Possession report.' }
    ],
    techEnablement: {
      title: 'Liaison Updates Portal',
      desc: 'Lenders track notice status and warrant coordinates.',
      modules: [
        { title: 'Liaison Logs Console', desc: 'Lenders track filing status, hearing dates, and police permissions.' }
      ]
    },
    geoScope: {
      title: 'Regional Footprint',
      desc: 'Liaison offices active across Southern India.',
      stats: [
        { label: 'Liaison offices', value: '35 Regional Branches' },
        { label: 'Active States', value: 'TN, KA, KL, TS, AP, PY' }
      ]
    },
    complianceDetails: [
      'Strict Adherence to Eviction Conduct Guidelines',
      'Anti-Corruption Policy Commitments Signed',
      'Data Custody and ISO Security Standards Aligned'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Executing factory possession enforcements.', framework: 'DM Liaison coordination' },
      { name: 'Housing Finance Companies', scenario: 'Residential foreclosure notice campaigns.', framework: 'Standardized handover protocols' }
    ],
    operationalMetrics: [
      { value: '40+', label: 'Financial Institutions Advised' },
      { value: '25 Yrs', label: 'Operational Standing' },
      { value: '15 Days', label: 'Average Execution TAT' }
    ],
    businessOutcomes: [
      { title: 'Faster Enforcements', desc: 'Centralized coordination helps secure police protection and execute warrants.' },
      { title: 'Clean Asset Transfers', desc: 'Pre-screened sub-registrar filings prevent deed registration delays.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Rebuilding a Lender\'s Vendor Audit Rules',
      challenge: 'A regional bank faced audit warnings due to aggressive calling tactics used by their third-party collection agency.',
      approach: 'SM Associates took over soft collections, routing all accounts to IIBF DRA-certified callers using strict scripts.',
      execution: 'Logged all outbound calls, auditable within approved calling hours, and integrated dispute filters on our console.',
      outcome: 'Resolved 74% of delinquent accounts with zero compliance or audit issues over a 90-day pilot.'
    },
    faqs: [
      { q: 'Do you design vendor selection parameters?', a: 'Yes. We compile the forensic audit dossiers and witness statements, allowing the bank\'s legal team to file reports with local authorities.' }
    ],
    cta: {
      heading: 'Ensure Process Integrity and Control NPAs Today',
      subheading: 'Request a consultation call to review our liaison capabilities and branch locations.',
      buttonText: 'Schedule an Advisory Meeting',
      href: '/contact'
    }
  },

  'services': {
    eyebrow: 'Service Directory',
    title: 'Unified Solutions Across the Credit and Asset Lifecycle',
    description: 'Mitigate risk, accelerate resolutions, and protect margins with specialized field collections, customer profiling, and legal foreclosures.',
    primaryCtaText: 'Discuss Portfolio Mandate',
    secondaryCtaText: 'Download Services Brochure',
    trustStatement: 'Providing comprehensive recovery and verification services across Southern India since 2000.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers a full suite of risk management and debt resolution services. We manage calling, doorstep visits, legal notice filings, repossessions, and secure warehousing under a single SLA.',
      outcomes: [
        { title: 'Service Lines', desc: 'Over 30 specialized collections and verification service lines.' },
        { title: 'Branch Coverage', desc: '35 branch offices active across South Indian states.' },
        { title: 'Staff Capacity', desc: '916+ trained professionals operating under strict compliance.' }
      ],
      useCases: [
        { title: 'Pre-Disbursal Verifications', desc: 'Physical and digital validations checks for loan applicants.' },
        { title: 'Late-Stage Resolutions', desc: 'Secured asset repossession, yard storage, and auction coordination.' }
      ]
    },
    stats: [
      { value: '30+', label: 'Specialized Service Lines' },
      { value: '35', label: 'Operations Branches' },
      { value: '916+', label: 'Trained Professionals' }
    ],
    challenges: [
      { title: 'Vendor Fragmentation', desc: 'Lenders managing different call centers, field agents, and legal counsels, causing delays and compliance slips.', warningBadge: 'Operations Gap', impactFormula: 'Resolution TAT + 45%' },
      { title: 'High NPA Provisioning', desc: 'Uncoordinated field and calling campaigns increasing operational costs.', warningBadge: 'Capital Friction', impactFormula: 'Operation Cost + 30%' }
    ],
    failCompare: [
      {
        dimension: 'Operations Control',
        traditional: 'Separate companies handle call centers, field visits, and legal notices, causing data gaps.',
        sm: 'Calling, field, and legal departments synchronized on our unified dashboard console.'
      },
      {
        dimension: 'Compliance Auditing',
        traditional: 'Manual logs with no voice recordings or geofenced visit verification checks.',
        sm: '100% VoIP voice logs and geotagged field visit coordinates logs.'
      }
    ],
    framework: {
      title: 'Structured Operational Framework',
      desc: 'A synchronized collections engine combining digital, ground, and legal enforcements.',
      solutions: [
        { title: 'Verification Division', desc: 'doorstep checks and document validations checking applicant stability.' },
        { title: 'Collections & Recovery', desc: 'DRA-certified call campaigns and geofenced doorstep visits.' }
      ]
    },
    capabilities: [
      { title: 'Legal & SARFAESI support', desc: 'Notice drafting and District Magistrate Section 14 petition filings.', businessOutcome: 'Enforces legal pressure to resolve defaults.' },
      { title: 'Asset Seizure & Yards', desc: 'Insured storage yards and heavy vehicle transit management.', businessOutcome: 'Protects collateral values throughout the auction window.' }
    ],
    workflow: [
      { step: '01', title: 'Mandate Intake', objective: 'Verify default files', action: 'Ingest portfolio files and evaluate account details.', deliverable: 'Risk prioritized list.' },
      { step: '02', title: 'SOP Alignment', objective: 'Map campaign rules', action: 'Agree calling/visit scripts and coordinate schedules.', deliverable: 'Active campaign rule map.' },
      { step: '03', title: 'Staff Allocation', objective: 'Allocate cases to field reps', action: 'Dispatch cases to regional branch officers and call seats.', deliverable: 'Active campaign mapping.' },
      { step: '04', title: 'Operations Launch', objective: 'Deliver performance audits', action: 'Launch calling, doorstep visits, and legal enforcements.', deliverable: 'Telemetry analytics report.' }
    ],
    techEnablement: {
      title: 'Operations Dashboard',
      desc: 'Real-time telemetry showing call voice files and field check-ins.',
      modules: [
        { title: 'Operations Dashboard', desc: 'Lenders track notice status, call recordings, and field coordinates.' }
      ]
    },
    geoScope: {
      title: 'Geographical Hub Network',
      desc: 'Pan-regional presence across Southern India with hub branch operations.',
      stats: [
        { label: 'Operational Coverage', value: 'Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, Puducherry' },
        { label: 'Logistics Range', value: '150 KM / Hub' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned calling & visits',
      '100% IIBF DRA Certified Teams',
      '180-Day Secure Call Audio Archiving'
    ],
    industriesServed: [
      { name: 'Public Sector Banks', scenario: 'High-volume retail credit card default recovery.', framework: 'Compliance dialer scripts' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset valuations verification check' }
    ],
    operationalMetrics: [
      { value: '30+', label: 'Specialized Service Lines' },
      { value: '35', label: 'Operations Branches' },
      { value: '916+', label: 'Trained Professionals' }
    ],
    businessOutcomes: [
      { title: 'Reduced Operating Overhead', desc: 'Outsourcing calling campaigns removes recruitment and infrastructure costs.' },
      { title: 'Complete Compliance Protection', desc: 'Recorded lines and time-locks prevent regulatory violations.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Success in Integrated Execution',
      challenge: 'A nationalized bank had a legacy portfolio of default personal loans, with local agencies unable to resolve accounts.',
      approach: 'SM Associates deployed a unified recovery program, combining tele-calling with ground visits.',
      execution: 'Triggers checks for alternate contact records, launched calling campaigns, and assigned ground agents for address checks.',
      outcome: 'Resolved 78% of delinquent accounts within 120 days, releasing provisioning capital.'
    },
    faqs: [
      { q: 'Do you package multiple services under single master contracts?', a: 'Yes. We offer integrated services agreements covering verification, collections, and legal foreclosures under unified SLAs.' }
    ],
    cta: {
      heading: 'Optimize Your Risk Operations Portfolio Today',
      subheading: 'Request a copy of our service catalogues, branch locations, and pricing schedules.',
      buttonText: 'Connect with a Sales Officer',
      href: '/contact'
    }
  }
};
