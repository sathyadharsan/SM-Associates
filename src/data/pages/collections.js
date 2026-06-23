export const collectionsContent = {
  'early-stage-collections': {
    eyebrow: 'Early-Stage Operations',
    title: 'Keep Delinquency Low with Rigorous Early-Stage Collections',
    description: 'Scale compliant tele-calling and outreach strategies to resolve early-stage default before accounts migrate to higher risk buckets.',
    primaryCtaText: 'Request Collections Pilot',
    secondaryCtaText: 'Download Script Protocols',
    trustStatement: 'Operating under strict compliance guidelines to maintain high contact rates and resolve delinquencies early.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates coordinates early-stage debt outreach (0-60 DPD) using advanced dialing systems and compliance locking modules. We balance rapid contact loops with ethical borrower communication, helping lenders reduce transition rates to higher buckets.',
      outcomes: [
        { title: 'Early Resolution', desc: 'Up to 82% of delinquent accounts resolved within 30 days of case assignment.' },
        { title: 'Calling Capacity', desc: 'Over 75,000+ outreach attempts managed daily across automated dialing systems.' },
        { title: 'SLA Performance', desc: 'Under 24 hours system update latency for all borrower touchpoints.' }
      ],
      useCases: [
        { title: 'Retail Credit Cards', desc: 'Reaching out to cardholders immediately after missing payments.' },
        { title: 'Microfinance Portfolios', desc: 'Sending out reminder calls and coordinate message alerts.' }
      ]
    },
    stats: [
      { value: '82%', label: 'Early resolution rate' },
      { value: '75,000+', label: 'Daily Outreach Attempts' },
      { value: '24 Hrs', label: 'Telemetry Update TAT' }
    ],
    challenges: [
      { title: 'Rapid Delinquency Migration', desc: 'Accounts migrating quickly to higher DPD buckets without immediate outreach, locking bank capital in provisioning.', warningBadge: 'Bucket Risk', impactFormula: 'NPA Transition + 24%' },
      { title: 'Unreachable Defaulters', desc: 'Defaulters changing contact details or turning off phones to avoid reminders.', warningBadge: 'Contact Loss', impactFormula: 'Collection Cost + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Calling Schedule Control',
        traditional: 'Outbound callers dialing at random hours, violating RBI calling rules.',
        sm: 'Server-side VoIP locks that completely disable dialing outside RBI hours (08:00 AM - 07:00 PM).'
      },
      {
        dimension: 'Outreach Telemetry',
        traditional: 'Manual spreadsheets that update collections status weekly, causing lag.',
        sm: 'Automated SFTP pipeline imports that update account parameters daily.'
      }
    ],
    framework: {
      title: 'Structured Early Outreach Framework',
      desc: 'Compliant, systematic calling campaigns resolving delinquency before escalation.',
      solutions: [
        { title: 'Multi-Channel Contact Matrix', desc: 'Combining automated dialing systems, SMS alerts, and letters before ground dispatch.' },
        { title: 'Segmented Dialer Scoring', desc: 'Routing accounts dynamically based on default history and stay parameters.' }
      ]
    },
    capabilities: [
      { title: 'Auto-Dialer Campaigns', desc: 'Running high-capacity compliant call reminder loops.', businessOutcome: 'Ensures immediate outreach to missed payments.' },
      { title: 'Promise-to-Pay Logging', desc: 'Systematic tracking of borrower payment commitments with automated reminders.', businessOutcome: 'Improves repayment conversion rates.' }
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', objective: 'Import default accounts', action: 'Ingest client portfolio databases via secure SFTP.', deliverable: 'Active collections log file.' },
      { step: '02', title: 'Dialer Allocation', objective: 'Launch call campaign', action: 'Load records into dialer and allocate to trained calling agents.', deliverable: 'Outbound campaign mapping.' },
      { step: '03', title: 'Payment Check', objective: 'Secure payment commit', action: 'Reach out to borrower, agree payment terms, and log commitments.', deliverable: 'Promise-to-pay receipt.' },
      { step: '04', title: 'Account Sync', objective: 'Sync final status', action: 'Push settlement details and update accounts in lender system.', deliverable: 'Reconciliation log.' }
    ],
    techEnablement: {
      title: 'Calling Analytics & Compliance Platform',
      desc: 'Real-time call center controls and recorded caller lines.',
      modules: [
        { title: 'Time-Lock Dialing', desc: 'Automatic block on outbound calls before 08:00 AM and after 07:00 PM.' }
      ]
    },
    geoScope: {
      title: 'Call Center & Support Network',
      desc: 'Multi-lingual collections support covering all South Indian states.',
      stats: [
        { label: 'Outreach Capacity', value: '75,000 calls / day' },
        { label: 'Dialer Infrastructure', value: '250+ Active calling seats' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Outbound Dials',
      '100% Caller Voice Recordings Saved for 180 Days',
      'Calling locked strictly between 08:00 AM and 07:00 PM'
    ],
    industriesServed: [
      { name: 'Nationalized Banks', scenario: 'High-volume early delinquency retail loan calling campaigns.', framework: 'Bilingual script matrix' },
      { name: 'Housing Finance Companies', scenario: 'Early bucket mortgage payment reminders.', framework: 'SLA reminder notice pipelines' }
    ],
    operationalMetrics: [
      { value: '82%', label: 'Early Resolution Rate' },
      { value: '75K+', label: 'Daily Call Attempts' },
      { value: '180 Days', label: 'Voice Recording Archives' }
    ],
    businessOutcomes: [
      { title: 'Minimized NPA Provisions', desc: 'Resolving accounts early releases capital locked in provisioning buckets.' },
      { title: 'Maintained Customer Goodwill', desc: 'Polite, compliant reminders protect the bank\'s brand.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Halting NBFC Portfolio Migration',
      challenge: 'A retail finance firm experienced high personal loan defaults, with accounts migrating to Stage-2 due to slow collections outreach.',
      approach: 'SM Associates deployed a structured early dialer campaign with automated callback loops.',
      execution: 'Loaded delinquent portfolios daily, setting automated rules to call non-responsive numbers at varied hours.',
      outcome: 'Improved early-stage resolution rate from 65% to 82% in 60 days, reducing bucket migration.'
    },
    faqs: [
      { q: 'What dialing technology do you use?', a: 'We use high-capacity digital VoIP dialer consoles featuring predictive routing and automated drop checking.' },
      { q: 'Do you visit borrowers at this stage?', a: 'Early-stage collections are handled via calling and messages. Unresponsive cases are escalated to field teams at 60 DPD.' }
    ],
    cta: {
      heading: 'Optimize Your Early-Stage Loan Performance Today',
      subheading: 'Request a demo to review our dialing platforms and compliant collections scripts.',
      buttonText: 'Request Collections Pilot',
      href: '/contact'
    }
  },

  'soft-collections': {
    eyebrow: 'Empathy-First Recovery',
    title: 'Compliant and Professional Soft Collections Operations',
    description: 'Protect customer goodwill and resolve overdue accounts through DRA-certified tele-calling, empathy, and structured settlement offers.',
    primaryCtaText: 'Request Soft Collections Mandate',
    secondaryCtaText: 'View Training Curriculum',
    trustStatement: 'Delivering compliant, customer-friendly collections with a 98% client retention score.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates manages professional soft collections campaigns. We employ 100% DRA-certified calling representatives who focus on non-coercive mediation and structured settlement solutions to resolve overdue credit cards and personal loans.',
      outcomes: [
        { title: 'DRA Certified', desc: '100% of collections staff are fully certified by IIBF DRA academy.' },
        { title: 'Client Retention', desc: '98% average relationship tenure with major financial institutions.' },
        { title: 'Compliance Audits', desc: 'Zero audit objections across 250+ quarterly banking reviews.' }
      ],
      useCases: [
        { title: 'Credit Card Collections', desc: 'Professional tele-calling campaigns to resolve card defaults.' },
        { title: 'Fintech Personal Loans', scenario: 'Soft reminders and coordinate settlement options for consumer loans.' }
      ]
    },
    stats: [
      { value: '100%', label: 'DRA Staff Certified' },
      { value: '98%', label: 'Client Retention Rate' },
      { value: '250+', label: 'SLA Audits Passed' }
    ],
    challenges: [
      { title: 'Reputational Liability', desc: 'Non-compliant collections methods from third-party agencies causing legal and brand damage to lenders.', warningBadge: 'Regulatory Risk', impactFormula: 'Audit Penalty + 15%' },
      { title: 'Friction with Borrowers', desc: 'Aggressive calling methods causing borrowers to withdraw or refuse communication.', warningBadge: 'Borrower Conflict', impactFormula: 'Recovery Rate - 12%' }
    ],
    failCompare: [
      {
        dimension: 'Agent Quality Control',
        traditional: 'Untrained third-party collectors using informal, high-pressure communication.',
        sm: '100% IIBF DRA-certified calling agents passing weekly compliance check sessions.'
      },
      {
        dimension: 'Dispute Handling',
        traditional: 'Oral disputes ignored or unlogged, leading to customer complaints.',
        sm: 'CRM-integrated dispute logs that freeze collection activities and route cases to the bank within 24 hours.'
      }
    ],
    framework: {
      title: 'Empathy-Led Debt Resolution',
      desc: 'Ethical communication models designed to resolve overdue balances.',
      solutions: [
        { title: 'DRA Training Standards', desc: 'Mandatory IIBF DRA training before assigning cases to calling representatives.' },
        { title: 'Structured Settlement Models', desc: 'Offering bank-approved payment structures to assist borrowers in default.' }
      ]
    },
    capabilities: [
      { title: 'Bilingual Call Campaigns', desc: 'Tele-calling in all South Indian languages and English.', businessOutcome: 'Ensures clear, customer-friendly communication with borrowers.' },
      { title: 'Grievance Resolution', desc: 'Tracking and closing borrower disputes with clear audit trails.', businessOutcome: 'Protects lenders from compliance and reputational issues.' }
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', objective: 'Securely import case files', action: 'Ingest portfolio files and set agent allocations.', deliverable: 'Ingested data log.' },
      { step: '02', title: 'Applicant Check', objective: 'Verify contact details', action: 'Verify identity parameters and check contact records.', deliverable: 'Verified borrower profile.' },
      { step: '03', title: 'Professional Call', objective: 'Mediate settlement options', action: 'Reach out to borrower, explain outstanding debt, and present settlement options.', deliverable: 'Settlement agreement log.' },
      { step: '04', title: 'Payment Processing', objective: 'Process collections', action: 'Process payments and sync details with the client dashboard.', deliverable: 'Cleared transaction ledger.' }
    ],
    techEnablement: {
      title: 'Outbound Calling Telemetry',
      desc: 'Recorded calling lines and quality monitoring loops.',
      modules: [
        { title: 'Quality Audits', desc: 'Weekly QA checks of randomly selected call recordings (20% of cases).' }
      ]
    },
    geoScope: {
      title: 'Regional Support Network',
      desc: 'Call center and client liaison hubs active across Southern India.',
      stats: [
        { label: 'Calling Languages', value: 'Tamil, Kannada, Telugu, Malayalam, English' },
        { label: 'Operational Hubs', value: 'Chennai, Bengaluru, Cochin, Hyderabad' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Scripts',
      '100% DRA-Certified Calling Professionals',
      '180-Day Secure Call Audio Archiving'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Soft collections outreach for retail personal credit lines.', framework: 'DRA compliant calling codes' },
      { name: 'Fintech Platforms', scenario: 'Micro-loan recovery and coordinate settlements.', framework: 'API-based call logs updates' }
    ],
    operationalMetrics: [
      { value: '100%', label: 'DRA Certified Callers' },
      { value: '98%', label: 'Client Retention' },
      { value: '180 Days', label: 'Secure Voice Archive' }
    ],
    businessOutcomes: [
      { title: 'Zero Compliance Breaches', desc: '100% DRA certification and call recording prevent regulatory violations.' },
      { title: 'Stable Portfolio Recoveries', desc: 'Relationship-first mediation increases default resolutions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'High Compliance, Higher Recovery',
      challenge: 'A fintech lender faced audit warnings due to aggressive calling tactics used by their third-party collection agency.',
      approach: 'SM Associates took over soft collections, routing all accounts to IIBF DRA-certified callers using strict scripts.',
      execution: 'Logged all outbound calls, auditable within approved calling hours, and integrated dispute filters on our console.',
      outcome: 'Resolved 74% of delinquent accounts with zero compliance or audit issues over a 90-day pilot.'
    },
    faqs: [
      { q: 'How do you handle borrower disputes?', a: 'Outbound agents log disputes immediately in the CRM. The account is suspended from collections, and details are sent to the bank within 24 hours.' }
    ],
    cta: {
      heading: 'Empanel a Compliance-First Recovery Partner',
      subheading: 'Request a copy of our training curriculum, internal codes of conduct, and call logs protocols.',
      buttonText: 'Consult with Our Team',
      href: '/contact'
    }
  },

  'hard-collections': {
    eyebrow: 'Stressed Asset Recovery',
    title: 'Resolute Action for High-Delinquency and Write-Off Portfolios',
    description: 'Recover value from legacy write-off books and NPA accounts with disciplined field action and legal escalation.',
    primaryCtaText: 'Request NPA Consultation',
    secondaryCtaText: 'Explore Legal Action Links',
    trustStatement: 'Maximizing capital recovery from legacy defaults, recovering over ₹8,000+ Crore for empanelled partners.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates specializes in recovering value from hard collections buckets and written-off loan portfolios. We combine field investigations, skip-tracing systems, and legal notice enforcements (Section 138 / SARFAESI) to secure debt resolutions.',
      outcomes: [
        { title: 'NPA Capital Recovered', desc: 'Over ₹8,000+ Crore recovered across retail and commercial NPA portfolios.' },
        { title: 'Active NPA Mandates', desc: '80+ active loan books managed for ARCs and commercial banks.' },
        { title: 'Skip-Tracing Success', desc: '74% locator success rate for hard-to-reach or absconding borrowers.' }
      ],
      useCases: [
        { title: 'ARC Acquired Books', desc: 'Accelerating resolution parameters for acquired stressed portfolios.' },
        { title: 'Written-Off Commercial Loans', desc: 'Tracing hidden corporate assets to recover legacy outstanding debt.' }
      ]
    },
    stats: [
      { value: '₹8,000+ Cr', label: 'NPA Value Recovered' },
      { value: '80+', label: 'Active NPA Books' },
      { value: '74%', label: 'Skip-Tracing Locate Rate' }
    ],
    challenges: [
      { title: 'Absconding Defaulters', desc: 'Borrowers changing states, closing registered offices, and turning off contact numbers to avoid repayment.', warningBadge: 'Skip Risk', impactFormula: 'Default Age + 180 Days' },
      { title: 'Collateral Depreciation', desc: 'Unsecured properties or heavy machinery losing value due to delayed repossession enforcements.', warningBadge: 'Asset Write-down', impactFormula: 'Liquidation Yield - 35%' }
    ],
    failCompare: [
      {
        dimension: 'Asset Location Sourcing',
        traditional: 'Accepting applications addresses as final, closing cases if borrowers are not found.',
        sm: 'Multi-layer tracking combining local informant networks, registrar checks, and utility bill audits.'
      },
      {
        dimension: 'Legal Notice Delivery',
        traditional: 'Sending notices via standard post, with no delivery verification.',
        sm: 'Evidentiary notice serving with geotagged check-ins and court-admissible delivery proofs.'
      }
    ],
    framework: {
      title: 'NPA Resolution Framework',
      desc: 'Combining ground investigation and legal escalations to resolve stressed debt.',
      solutions: [
        { title: 'Skip-Tracing Integration', desc: 'Locating missing debtors using digital footprints, MCA registrations, and ground investigations.' },
        { title: 'Legal Notice Escalation', desc: 'Coordinating Section 138 check bounce filings and symbolic possession enforcements.' }
      ]
    },
    capabilities: [
      { title: 'Asset Location Sourcing', desc: 'Locating alternative assets and properties owned by borrowers in default.', businessOutcome: 'Increases the likelihood of recovery via court attachments.' },
      { title: 'SARFAESI Enforcements', desc: 'Coordinating legal filings under the SARFAESI Act to seize secured properties.', businessOutcome: 'Allows banks to liquidate assets and recover outstanding capital.' }
    ],
    workflow: [
      { step: '01', title: 'Portfolio Scoring', objective: 'Evaluate default cases', action: 'Analyze portfolio default age, collateral values, and borrower data.', deliverable: 'Risk priority log.' },
      { step: '02', title: 'Skip-Tracing Launch', objective: 'Locate missing debtors', action: 'Trigger skip-tracing databases check and ground investigator dispatch.', deliverable: 'Located address records.' },
      { step: '03', title: 'Ground Confrontation', objective: 'Mediate debt settlement', action: 'Visit located borrower addresses and present settlement options.', deliverable: 'Settlement commit log.' },
      { step: '04', title: 'Legal Notice Delivery', objective: 'Enforce legal actions', action: 'File Section 138 or SARFAESI notices via advocate panels.', deliverable: 'Court filing record.' }
    ],
    techEnablement: {
      title: 'NPA Tracking & Telemetry',
      desc: 'Real-time monitoring of legal Notice status and ground visit locations.',
      modules: [
        { title: 'Litigation Console', desc: 'Lenders track hearing dates, advocate briefs, and notice delivery status.' }
      ]
    },
    geoScope: {
      title: 'Enforcement Footprint',
      desc: 'Local authority and branch networks active across Southern India.',
      stats: [
        { label: 'Custody Yards', value: '25+ Audited Secure Yards' },
        { label: 'Field Capacity', value: '916+ Active professionals' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Doorstep Visits',
      'All Field Actions Recorded on Geotagged Video Logs',
      'Court-admissible witness documentation protocols'
    ],
    industriesServed: [
      { name: 'Asset Reconstruction Companies', scenario: 'Resolving legacy retail NPA books.', framework: 'SARFAESI foreclosure notice campaigns' },
      { name: 'Nationalized Banks', scenario: 'Written-off commercial loan recovery.', framework: 'Asset tracing and legal action' }
    ],
    operationalMetrics: [
      { value: '₹8,000+ Cr', label: 'NPA Value Recovered' },
      { value: '80+', label: 'Active NPA Mandates' },
      { value: '74%', label: 'Skip Trace Success Rate' }
    ],
    businessOutcomes: [
      { title: 'Write-Off Capital Recovery', desc: 'Recovering outstanding balances directly improves the bank\'s bottom line.' },
      { title: 'Clear Collateral Title', desc: 'Compliant legal Notice coordination ensures smooth property auctions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Resolving a 360 DPD Commercial Book',
      challenge: 'A private sector bank had a write-off book of corporate machinery loans, with borrowers unreachable and assets hidden.',
      approach: 'SM Associates deployed skip-tracing and asset tracking. We searched MCA records and located hidden alternative assets.',
      execution: 'Coordinated with legal counsels to file property attachment notices, leading to settlement talks.',
      outcome: 'Recovered ₹12.4 Crore from 18 default accounts within 120 days, resolving 72% of target cases.'
    },
    faqs: [
      { q: 'What legal actions do you coordinate when borrowers are unreachable?', a: 'We coordinate with advocate panels to file Section 138 check bounce cases and Section 13(2) notices under the SARFAESI Act.' }
    ],
    cta: {
      heading: 'Unlock Capital from Your NPA books today',
      subheading: 'Request a pilot program to recover outstanding balances from legacy write-off books.',
      buttonText: 'Empanel Our Experts',
      href: '/contact'
    }
  },

  'field-collections': {
    eyebrow: 'On-Ground Collections',
    title: 'Disciplined Field Collections Across South India',
    description: 'Scale physical outreach and payment pickups with a professional network of collections officers operating under strict compliance guidelines.',
    primaryCtaText: 'Empanel Field Network',
    secondaryCtaText: 'Explore Regional Coverage Map',
    trustStatement: 'Deploying India\'s largest DRA-certified field collection force since 2000.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates operates a dense, branch-managed field collections network. We deploy 916+ trained collections officers to perform doorstep visits, secure cash/check pickups, and coordinate settlement actions under strict RBI guidelines.',
      outcomes: [
        { title: 'Ground Capacity', desc: '916+ fully certified field collections professionals active.' },
        { title: 'Regional Footprint', desc: '35 branch offices across 5 South Indian states for quick ground dispatch.' },
        { title: 'Daily Visits', desc: 'Average of 6,500+ geotagged borrower visits completed daily.' }
      ],
      useCases: [
        { title: 'Tractor & Vehicle Finance', desc: 'Physical doorstep collection of monthly EMI payments.' },
        { title: 'Microfinance Doorstep Collections', desc: 'Coordinating group collections and cash settlements.' }
      ]
    },
    stats: [
      { value: '916+', label: 'Field Professionals' },
      { value: '35', label: 'Operational Branches' },
      { value: '6,500+', label: 'Daily Field Visits' }
    ],
    challenges: [
      { title: 'Logistical Delays', desc: 'Uncoordinated field agent visits in rural districts leading to high travel costs and low recovery.', warningBadge: 'Logistical Friction', impactFormula: 'Travel Budget + 40%' },
      { title: 'Lack of Agent Verification', desc: 'Unmonitored field agents using informal payment collections methods.', warningBadge: 'Compliance Risk', impactFormula: 'Grievance TAT + 35%' }
    ],
    failCompare: [
      {
        dimension: 'Field Representative Control',
        traditional: 'Paper visit sheets with no check-in logging, causing reporting delays.',
        sm: 'Mobile app checks matching coordinates and timestamp checks on every visit.'
      },
      {
        dimension: 'Payment Security',
        traditional: 'Accepting cash with manual paper receipts, causing reconciliation delays.',
        sm: 'Instant digital check/cash receipt updates linked to the client bank dashboard.'
      }
    ],
    framework: {
      title: 'Structured Field Operations',
      desc: 'Branch-managed, compliant ground collections covering all districts of South India.',
      solutions: [
        { title: 'Decentralized Branch Setup', desc: '35 offices coordinate ground field dispatches locally, ensuring immediate action.' },
        { title: 'Certified Representative Code', desc: 'Mandatory background screening and IIBF training for all collections representatives.' }
      ]
    },
    capabilities: [
      { title: 'doorstep Collections', desc: 'Physical visits to secure payments and collect cheques.', businessOutcome: 'Reduces delinquency buckets and secures cash inflow.' },
      { title: 'Visit Logging Telemetry', desc: 'Recording coordinates, photos, and signatures on mobile consoles.', businessOutcome: 'Provides clear audit trails for lender compliance committees.' }
    ],
    workflow: [
      { step: '01', title: 'File Assignment', objective: 'Ingest portfolio files', action: 'Ingest retail files and set agent allocations.', deliverable: 'Ingested data log.' },
      { step: '02', title: 'Field Visit', objective: 'Verify applicant details', action: 'Geotagged ground officer address visit.', deliverable: 'Geotagged visit check photo.' },
      { step: '03', title: 'Payment Capture', objective: 'Process collections', action: 'Securing check payments or settlement updates.', deliverable: 'Cleared transaction ledger.' }
    ],
    techEnablement: {
      title: 'Geofenced Field Tracking',
      desc: 'GPS-geotagged visits with photo evidence matching applicant coordinates.',
      modules: [
        { title: 'Mobile Target Routing', desc: 'Direct route optimization for ground representatives, minimizing travel times.' }
      ]
    },
    geoScope: {
      title: 'Regional Operations Reach',
      desc: 'Pan-regional branch operations covering Southern India.',
      stats: [
        { label: 'Operational Coverage', value: 'Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, Puducherry' },
        { label: 'Logistics Range', value: '150 KM / Hub' }
      ]
    },
    complianceDetails: [
      'RBI Fair Conduct Guidelines Aligned doorstep Visits',
      '100% of Ground Staff DRA-Certified',
      'All Visit Details Logged with GPS Evidence'
    ],
    industriesServed: [
      { name: 'Vehicle Finance Institutions', scenario: 'Rural tractor and vehicle finance collection campaigns.', framework: 'Geotagged coordinates checks' },
      { name: 'Retail NBFCs', scenario: 'Personal loan doorstep check campaigns.', framework: 'Liaison office verification check' }
    ],
    operationalMetrics: [
      { value: '916+', label: 'Active Field Officers' },
      { value: '35', label: 'Operational Branches' },
      { value: '6,500+', label: 'Daily Field Visits' }
    ],
    businessOutcomes: [
      { title: 'Higher Cash Inflow', desc: ' doorstep touchpoints accelerate settlement conversions.' },
      { title: 'Complete Compliance Protection', desc: 'Strict compliance controls protect the bank\'s reputation.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Managing High-Volume Vehicle Collections',
      challenge: 'A commercial vehicle lender experienced a default default spike across rural Karnataka and Tamil Nadu, with local agents failing to secure payment.',
      approach: 'SM Associates deployed regional field teams using route-optimized target routing.',
      execution: 'Coordinated doorstep visits, logging geofenced check-ins and updating collection status in real-time.',
      outcome: 'Secured EMI payments and settlements for 880+ delinquent accounts within 90 days, reducing NPA provisioning.'
    },
    faqs: [
      { q: 'How do you handle collections in remote rural districts?', a: 'Our network of 35 regional branches allows us to coordinate doorstep visits to any village across South India.' }
    ],
    cta: {
      heading: 'Deploy India\'s Most Professional Field Team',
      subheading: 'Request a consultation call to empanel SM Associates for your field collections.',
      buttonText: 'Consult with Our Operations Team',
      href: '/contact'
    }
  },

  'debt-recovery': {
    eyebrow: 'Unified Recovery Model',
    title: 'Structured Debt Recovery Managed Under One Roof',
    description: 'Maximize asset resolution across the lifecycle using synchronized call center campaigns, field outreach, and legal actions.',
    primaryCtaText: 'Request Recovery Proposal',
    secondaryCtaText: 'Download Service Overview',
    trustStatement: 'Operating since 2000, empanelled with over 100+ public and private banking institutions.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates provides end-to-end debt recovery solutions. We coordinate tele-calling call center campaigns, ground field deployments, and legal notice enforcements under a single operational SLA, accelerating provisions releases.',
      outcomes: [
        { title: 'Recovered Capital', desc: 'Over ₹8,000+ Crore recovered for empanelled partners.' },
        { title: 'Lender Partners', desc: '100+ active banks, NBFCs, and retail lending institutions.' },
        { title: 'Compliance Safety', desc: '100% DRA certification, GPS visit logs, and voice recorded calling lines.' }
      ],
      useCases: [
        { title: 'Nationalized Banking Portfolios', desc: 'High-volume retail NPA mortgage default resolution campaigns.' },
        { title: 'Fintech Credit Books', desc: 'Real-time database updates and geolocated collection visits.' }
      ]
    },
    stats: [
      { value: '₹8,000+ Cr', label: 'Capital Recovered' },
      { value: '100+', label: 'Empanelled Partners' },
      { value: '25 Yrs', label: 'Operations Standing' }
    ],
    challenges: [
      { title: 'Vendor Fragmentation', desc: 'Lenders managing different call centers, field agents, and legal counsels, causing delays and compliance slips.', warningBadge: 'Operations Gap', impactFormula: 'Resolution TAT + 45%' },
      { title: 'Escalating Collection Costs', desc: 'Uncoordinated field and calling campaigns increasing operational costs.', warningBadge: 'Capital Friction', impactFormula: 'Operation Cost + 30%' }
    ],
    failCompare: [
      {
        dimension: 'Vendor Integration',
        traditional: 'Separate companies handle call centers, field visits, and legal notices, causing data gaps.',
        sm: 'Calling, field, and legal departments synchronized on our unified dashboard console.'
      },
      {
        dimension: 'Compliance & Safety',
        traditional: 'Manual logs with no voice recordings or geofenced visit verification checks.',
        sm: '100% VoIP voice logs and geotagged field visit coordinates logs.'
      }
    ],
    framework: {
      title: 'Integrated Recovery Pipeline',
      desc: 'A synchronized collections engine combining digital, ground, and legal enforcements.',
      solutions: [
        { title: 'Calling Campaigns', desc: 'Bilingual calling agents handle early bucket reminders and settlement talks.' },
        { title: 'Ground Deployments', desc: 'DRA-certified field collections officers perform geofenced address visits.' }
      ]
    },
    capabilities: [
      { title: 'Profile Validation Checks', desc: 'Physical address checks and neighbor reference checks before legal handoffs.', businessOutcome: 'Reduces notice returns and coordinates legal notices.' },
      { title: 'Legal Notice filings', desc: 'Coordinating legal notice drafting (Section 138 / Section 13) via advocate panels.', businessOutcome: 'Enforces legal pressure to resolve defaults.' }
    ],
    workflow: [
      { step: '01', title: 'Portfolio Analysis', objective: 'Evaluate account details', action: 'Ingest portfolio files and segment accounts by default risk.', deliverable: 'Risk prioritized list.' },
      { step: '02', title: 'Campaign Outreach', objective: 'Initiate call campaign', action: 'Outbound call center dialers and messaging platforms contact debtors.', deliverable: 'Outbound campaign logs.' },
      { step: '03', title: 'Ground Outreach', objective: 'Perform doorstep visit', action: 'Assign unresponsive cases to local field collections agents for doorstep visits.', deliverable: 'Geotagged visit check report.' },
      { step: '04', title: 'Payment Inflow', objective: 'Close settlement action', action: 'Process collected payments and sync details with the client dashboard.', deliverable: 'Cleared transaction ledger.' }
    ],
    techEnablement: {
      title: 'Institutional Collections Platform',
      desc: 'Real-time telemetry through secure dashboard consoles.',
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
      'RBI Fair Practices Code Aligned calling & field enforcements',
      '100% IIBF DRA Certified Teams',
      '180-Day Secure Call Audio Archiving'
    ],
    industriesServed: [
      { name: 'Public Sector Banks', scenario: 'High-volume retail credit card default recovery.', framework: 'Compliance dialer scripts' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset valuations verification check' }
    ],
    operationalMetrics: [
      { value: '₹8,000+ Cr', label: 'Capital Recovered' },
      { value: '100+', label: 'Empanelled Partners' },
      { value: '25 Yrs', label: 'Operational Standing' }
    ],
    businessOutcomes: [
      { title: 'Lower NPA Ratios', desc: 'Expedited case resolutions release bank reserves and optimize metrics.' },
      { title: 'Reputational Repositioning', desc: 'Compliant calling and geofenced visit verification checks prevent complaints.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Strategic NPA Resolution Campaign',
      challenge: 'A nationalized bank had a legacy portfolio of personal loans defaulting over 18 months, with local agencies unable to resolve accounts.',
      approach: 'SM Associates deployed a unified recovery program, combining tele-calling with ground visits.',
      execution: 'Triggers checks for alternate contact records, launched calling campaigns, and assigned ground agents for address checks.',
      outcome: 'Resolved 78% of delinquent accounts within 120 days, releasing provisioning capital.'
    },
    faqs: [
      { q: 'How are commissions structured for debt recovery portfolios?', a: 'Commission structures are volume-based and vary by delinquency buckets. Contact our empanelment desk for details.' }
    ],
    cta: {
      heading: 'Recover Capital. Minimize Risks.',
      subheading: 'Request a pilot program to experience SM Associates\' recovery velocity.',
      buttonText: 'Partner with Us',
      href: '/contact'
    }
  }
};
