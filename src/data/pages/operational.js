export const operationalContent = {
  'call-centre': {
    eyebrow: 'Outbound Calling Desk',
    title: 'Compliant Outbound Call Center Built for Debt Collections',
    description: 'Scale collections dialer campaigns, dispute resolution calls, and customer check-ins with trained operators and complete compliance checks.',
    primaryCtaText: 'Request Call Center Pilot',
    secondaryCtaText: 'View Compliance Standards',
    trustStatement: 'Operating 250+ active agent stations under strict RBI calling times and voice logger compliance.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates operates a high-capacity collections call center. We route outbound dialers, log PTP commitments, and manage dispute queues under recorded caller lines and strict QA auditing.',
      outcomes: [
        { title: 'Calling Capacity', desc: '250+ active agent seats managing 75,000+ dials daily.' },
        { title: 'Bilingual Support', desc: 'Fluent outreach in Tamil, Kannada, Telugu, Malayalam, and English.' },
        { title: 'Compliance Safety', desc: '100% voice logs archived for 180 days on secure consoles.' }
      ],
      useCases: [
        { title: 'Early Delinquency Outreach', desc: 'Payment reminders for retail credit card and personal loan portfolios.' },
        { title: 'Settlement Mediation', desc: 'Outbound campaigns presenting bank-approved payment structures.' }
      ]
    },
    stats: [
      { value: '250+', label: 'Active Agent Seats' },
      { value: '75,000+', label: 'Daily Call Capacity' },
      { value: '180 Days', label: 'Audio Archive Logs' }
    ],
    challenges: [
      { title: 'Outbound Compliance Risks', desc: 'Collections callers calling outside approved hours or using non-compliant scripts, causing audit penalties.', warningBadge: 'Regulatory Risk', impactFormula: 'License Audit + 25%' },
      { title: 'High Staff Attrition', desc: 'Recruiting and training collections callers causing operational delays and cost overheads.', warningBadge: 'Attrition Risk', impactFormula: 'Recruitment Cost + 40%' }
    ],
    failCompare: [
      {
        dimension: 'Calling Hours Control',
        traditional: 'Outbound agents calling borrowers at unregulated hours, violating rules.',
        sm: 'Server-side VoIP locks that prevent dialing outside RBI calling hours (08:00 AM - 07:00 PM).'
      },
      {
        dimension: 'QA Call Auditing',
        traditional: 'Random check-ins or unrecorded lines, violating compliance codes.',
        sm: '100% of calls recorded with weekly random audits checking 20% of case audio.'
      }
    ],
    framework: {
      title: 'Calling Operations Framework',
      desc: 'Centralized call center workflows ensuring compliance and recovery velocity.',
      solutions: [
        { title: 'Compliance Script Filters', desc: 'Caller scripts locked to bank-approved templates, preventing harassment.' },
        { title: 'Real-time QA Auditing', desc: 'Voice logger QA dashboards tracking caller tone and language compliance.' }
      ]
    },
    capabilities: [
      { title: 'Bilingual Tele-calling', desc: 'Outbound dialing in all regional languages.', businessOutcome: 'Ensures clear, customer-friendly communication with debtors.' },
      { title: 'Promise-to-Pay Logging', desc: 'Digital recording of debtor commitments with automated reminders.', businessOutcome: 'Accelerates repayment conversions.' }
    ],
    workflow: [
      { step: '01', title: 'Portfolio Ingestion', objective: 'Import default files', action: 'Ingest portfolio files and segment accounts by default risk.', deliverable: 'Active collections log file.' },
      { step: '02', title: 'Script Customization', objective: 'Verify calling scripts', action: 'Load records into dialer and allocate scripts to agent seats.', deliverable: 'Active campaign mapping.' },
      { step: '03', title: 'Dialer Outreach', objective: 'Perform call campaigns', action: 'Outbound call center dialers contact debtors within approved hours.', deliverable: 'Outbound call logs.' },
      { step: '04', title: 'Status Feed Sync', objective: 'Update client system', action: 'Sync settlement details and commitment logs with client console.', deliverable: 'Updated client dashboard.' }
    ],
    techEnablement: {
      title: 'Outbound Dialing Systems',
      desc: 'Bilingual call centers featuring automatic compliance time-locks.',
      modules: [
        { title: 'VoIP Server Lockouts', desc: 'Outbound dialing is blocked before 08:00 AM and after 07:00 PM automatically.' }
      ]
    },
    geoScope: {
      title: 'Call Center Infrastructure',
      desc: 'Pan-regional call center operations covering Southern India.',
      stats: [
        { label: 'Agent Station Capacity', value: '250+ Active Seats' },
        { label: 'Languages Supported', value: 'Tamil, Kannada, Telugu, Malayalam, English' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Outbound Dials',
      '100% Call Voice Recordings Stored for 180 Days',
      'Outbound calling hours locked between 08:00 AM and 07:00 PM'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Outsource early-stage collections calling campaigns.', framework: 'Bilingual script matrix' },
      { name: 'Fintech Lenders', scenario: 'Micro-loan payment reminder calling.', framework: 'API-based call logs updates' }
    ],
    operationalMetrics: [
      { value: '250+', label: 'Active Agent Seats' },
      { value: '75,000+', label: 'Daily Call Dials' },
      { value: '180 Days', label: 'Audio Log Storage' }
    ],
    businessOutcomes: [
      { title: 'Reduced Operating Overhead', desc: 'Outsourcing calling campaigns removes recruitment and infrastructure costs.' },
      { title: 'Complete Compliance Protection', desc: 'Recorded lines and time-locks prevent regulatory violations.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Outsourcing a Bank\'s Early-Stage Queue',
      challenge: 'A national lender experienced high costs and call timing complaints from their in-house collections department.',
      approach: 'SM Associates took over call center operations, routing all accounts to our recorded lines.',
      execution: 'Managed outbound campaigns, automated PTP reminders, and integrated VoIP server time-locks.',
      outcome: 'Improved settlement conversions by 28% while reducing operational billing overheads.'
    },
    faqs: [
      { q: 'How do you handle caller quality checks?', a: 'QA teams perform weekly audits of 20% of all call recordings, evaluating agent language, tone, and script compliance.' }
    ],
    cta: {
      heading: 'Scale Your Outbound Collections Capacity',
      subheading: 'Request a proposal to empanel SM Associates for your call center needs.',
      buttonText: 'Request Call Centre Proposals',
      href: '/contact'
    }
  },

  'manpower': {
    eyebrow: 'Outsourced Staffing Solutions',
    title: 'Trained, Compliant Manpower for Collections & Verification',
    description: 'Outsource background-verified, DRA-certified, and field-ready collections executives and verification officers.',
    primaryCtaText: 'Request Staffing Proposal',
    secondaryCtaText: 'View Training Curriculum',
    trustStatement: 'Deploying over 450+ active verification and collections field officers with complete background checks.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates provides outsourced staffing solutions. We recruit, background-verify, and DRA-train collections and verification executives, deploying field-ready staff to client offices.',
      outcomes: [
        { title: 'Trained Placements', desc: '450+ active field executives deployed across banking operations.' },
        { title: 'DRA Certified', desc: '100% of outsourced staff complete mandatory IIBF DRA certifications.' },
        { title: 'Screening Compliance', desc: 'Zero background check deficiencies across placements.' }
      ],
      useCases: [
        { title: 'Field Collections Outsourcing', desc: 'Deploying doorstep collections executives to retail banking offices.' },
        { title: 'Verification Staffing', desc: 'Outsourcing customer profile checking staff to credit risk panels.' }
      ]
    },
    stats: [
      { value: '450+', label: 'Trained Deployed Staff' },
      { value: '100%', label: 'DRA Certified Placements' },
      { value: '100-Hr', label: 'Mandatory Training' }
    ],
    challenges: [
      { title: 'Recruitment Delays', desc: 'Struggling to find trained field staff with IIBF DRA certifications, causing operational vacancies.', warningBadge: 'Staff Shortage', impactFormula: 'Recruitment TAT + 45 Days' },
      { title: 'Background Risks', desc: 'Unmonitored or unverified field agents causing legal and compliance risks for banks.', warningBadge: 'Vetting Failure', impactFormula: 'Audit Violation + 35%' }
    ],
    failCompare: [
      {
        dimension: 'Agent Vetting',
        traditional: 'Recruiting agents without verification checks or police record checks.',
        sm: 'Complete screening checks, address verification, and police checks for all staff.'
      },
      {
        dimension: 'Compliance Training',
        traditional: 'Agents start field visits without DRA training, violating RBI rules.',
        sm: 'Mandatory 100-hour IIBF DRA curriculum and on-site compliance training before deployment.'
      }
    ],
    framework: {
      title: 'Trained Staffing Model',
      desc: 'Providing background-verified and DRA-certified collections talent.',
      solutions: [
        { title: 'Staff Screening Protocols', desc: 'Checking references, addresses, and police records for all candidates.' },
        { title: 'Compliance Curriculums', desc: 'Rigorous IIBF DRA course training and compliance checking.' }
      ]
    },
    capabilities: [
      { title: 'Field Executive Staffing', desc: 'Deploying doorstep collections officers to local bank hubs.', businessOutcome: 'Resolves staff vacancy issues and increases collection coverage.' },
      { title: 'Verification Staffing', desc: 'Outsourcing profile checking officers to risk departments.', businessOutcome: 'Ensures reliable, geolocated doorstep checks.' }
    ],
    workflow: [
      { step: '01', title: 'Sourcing & Screening', objective: 'Verify applicant details', action: 'Source candidates, check references, and verify details.', deliverable: 'Screened candidate list.' },
      { step: '02', title: 'Background Auditing', objective: 'Expose background issues', action: 'Perform police record checks and address validations checks.', deliverable: 'Background verification report.' },
      { step: '03', title: 'Compliance Training', objective: 'Complete DRA training', action: 'Train staff on IIBF DRA curriculum and compliance script templates.', deliverable: 'DRA certification copy.' },
      { step: '04', title: 'Deployment', objective: 'Deploy active staff', action: 'Deploy trained staff to local branch offices and sync payroll details.', deliverable: 'Deployed executive record.' }
    ],
    techEnablement: {
      title: 'Staff Telemetry systems',
      desc: 'GPS visit trackers and coordinates check-ins logged on mobile.',
      modules: [
        { title: 'Compliance Portals', desc: 'Outsourced staff check in and log visits geolocated on mobile.' }
      ]
    },
    geoScope: {
      title: 'Staffing Reach Network',
      desc: 'Recruitment and training hubs active across South India.',
      stats: [
        { label: 'Training Facilities', value: 'Chennai, Bengaluru, Hyderabad, Cochin' },
        { label: 'Deployed Staff Count', value: '450+ Active Placements' }
      ]
    },
    complianceDetails: [
      '100% Placements IIBF DRA Certified',
      'Mandatory Police Background Checks Completed',
      'Strict Compliance with RBI Fair Practice Codes'
    ],
    industriesServed: [
      { name: 'Nationalized Banks', scenario: 'Deploying doorstep collections teams.', framework: 'DRA certified payroll support' },
      { name: 'Retail NBFCs', scenario: 'Outsourcing field verification officers.', framework: 'Regional recruitment hubs' }
    ],
    operationalMetrics: [
      { value: '450+', label: 'Active Placements' },
      { value: '100%', label: 'DRA Certified Staff' },
      { value: '3 business days', label: 'Average Staffing TAT' }
    ],
    businessOutcomes: [
      { title: 'Sustained Collections Capacity', desc: 'Immediate vacancy coverage prevents portfolio delinquency.' },
      { title: 'Zero Vetting Gaps', desc: 'Rigorous background check reports protect bank reputation.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Rapid Field Officer Mobilization',
      challenge: 'A regional cooperative bank needed to scale doorstep collections for agricultural loans, but faced a shortage of DRA-certified staff.',
      approach: 'SM Associates mobilized candidates from our training hubs in Tamil Nadu and Karnataka.',
      execution: 'Completed background audits, completed DRA training, and deployed staff to bank hubs.',
      outcome: 'Deployed 50 trained collections executives across three districts within 14 days, improving recovery.'
    },
    faqs: [
      { q: 'Are all outsourced executives background checked?', a: 'Yes. Every executive passes physical address verifications, professional reference audits, and police record checks before deployment.' }
    ],
    cta: {
      heading: 'Deploy Trained Collections Talent Today',
      subheading: 'Request a copy of our training curriculum, placement logs, and staffing fees.',
      buttonText: 'Request Staffing Proposal',
      href: '/contact'
    }
  },

  'facility-management': {
    eyebrow: 'Secure Yard Custody',
    title: 'Secure Custody & Yard Facilities for Seized Assets',
    description: 'Warehousing commercial, agricultural, and retail vehicles in 24/7-monitored, insured, and audited storage yards.',
    primaryCtaText: 'Request Yard Audit',
    secondaryCtaText: 'View Yard Locations Map',
    trustStatement: 'Protecting collateral values across Southern India with 25 secure yards and 450,000+ square feet capacity.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates operates secure custody yards for seized assets. We manage 25 secure yards across South India, offering fenced perimeters, 24/7 guard watch logs, CCTV monitoring, and full theft/fire insurance.',
      outcomes: [
        { title: 'Secure Storage yards', desc: '25 audited yards active across key transport hubs.' },
        { title: 'Storage Capacity', desc: '450,000+ square feet secure warehousing space.' },
        { title: 'Asset Protection', desc: 'Zero asset depreciation or parts theft logs.' }
      ],
      useCases: [
        { title: 'Commercial Truck Storage', desc: 'Securing heavy commercial vehicles post-repossession.' },
        { title: 'Industrial Machinery Custody', desc: 'Securing factory machinery throughout the foreclosure window.' }
      ]
    },
    stats: [
      { value: '25', label: 'Secure Storage Yards' },
      { value: '450K+ SqFt', label: 'Secure Storage Space' },
      { value: '24/7', label: 'CCTV & Guard Audits' }
    ],
    challenges: [
      { title: 'Collateral Depreciation', desc: 'Repossessed vehicles damaged or losing parts in unsecured yard facilities, reducing resale value.', warningBadge: 'Depreciation Risk', impactFormula: 'Asset Value - 30%' },
      { title: 'Improper Inventory Records', desc: 'Failing to inventory items inside repossessed vehicles, leading to borrower disputes.', warningBadge: 'Inventory Dispute', impactFormula: 'Litigation Cost + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Yard Security Systems',
        traditional: 'Unfenced spaces, manual gate registers, no CCTV cameras, high theft risk.',
        sm: 'Fenced secure yards with 24/7 guard watch logs, active CCTV logs, and coordinate checks.'
      },
      {
        dimension: 'Inflow Inventories',
        traditional: 'Asset entry details unrecorded, causing property disputes.',
        sm: 'Detailed check-in logs with photography and signature verifications.'
      }
    ],
    framework: {
      title: 'Secure Yard Custody Model',
      desc: 'Insured, monitored custody operations protecting repossessed assets.',
      solutions: [
        { title: 'Fenced Security Yards', desc: 'All yards feature double-fenced borders, gates, and 24/7 security watch logs.' },
        { title: 'Digital Inflow Logs', desc: 'Recording coordinates, photos, and stock lists on mobile consoles upon entry.' }
      ]
    },
    capabilities: [
      { title: 'CCTV Auditing', desc: 'Continuous CCTV camera logs with 90-day archives.', businessOutcome: 'Prevents asset damage and provides video evidence.' },
      { title: 'Inventory Auditing', desc: 'Cataloging all raw materials and vehicle parts upon arrival.', businessOutcome: 'Prevents property disputes during final asset auctions.' }
    ],
    workflow: [
      { step: '01', title: 'Asset Arrival Check', objective: 'Verify repossession order', action: 'Verify repossession order and inspect vehicle condition.', deliverable: 'Yard check-in log.' },
      { step: '02', title: 'Part Inventory Audit', objective: 'Catalog stock items', action: 'Document all parts, tools, and inventory inside vehicle.', deliverable: 'Completed inventory checklist.' },
      { step: '03', title: 'Photo Documentation', objective: 'Record condition logs', action: 'Capture geolocated photos of vehicle exterior and interior.', deliverable: 'Geotagged condition photos.' },
      { step: '04', title: 'Slot Allocation', objective: 'Secure slot assignment', action: 'Assign vehicle to slot, lock gates, and update yard index.', deliverable: 'Active yard slot allocation.' }
    ],
    techEnablement: {
      title: 'Custody Telemetry Console',
      desc: 'Lenders track their stored assets via secure dashboards.',
      modules: [
        { title: 'Live Yard Feed', desc: 'Lenders check active vehicle counts and CCTV feeds on the console.' }
      ]
    },
    geoScope: {
      title: 'Yard Hub Network',
      desc: 'Secure yards active across Southern transport hubs.',
      stats: [
        { label: 'Storage Space', value: '450,000+ square feet' },
        { label: 'Yard Network', value: '25 Secure Yards' }
      ]
    },
    complianceDetails: [
      'Comprehensive Yard Fire and Theft Insurance',
      'All Gate Activity Logged and Audited',
      'CCTV records stored with 90-day archive logs'
    ],
    industriesServed: [
      { name: 'Vehicle Finance Institutions', scenario: 'Tractor and auto repossession storage.', framework: 'Yard inventory audits' },
      { name: 'Asset Reconstruction Companies', scenario: 'Seized industrial machinery custody.', framework: 'Fenced secure yards management' }
    ],
    operationalMetrics: [
      { value: '25', label: 'Secure Storage Yards' },
      { value: '450K+ SqFt', label: 'Yard Storage Space' },
      { value: '90 Days', label: 'CCTV Video Archives' }
    ],
    businessOutcomes: [
      { title: 'Protected Asset Value', desc: 'Double fenced borders, CCTV logs, and guards prevent collateral damage.' },
      { title: 'Dispute-Free Handovers', desc: 'Detailed condition photos and inventory logs prevent handback disputes.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Securing a Commercial Seizure Fleet',
      challenge: 'An auto lender repossessed a fleet of 20 commercial trucks, but lacked yard space, risking theft in open public lots.',
      approach: 'SM Associates routed the fleet to our secure yard hubs in Bangalore and Chennai.',
      execution: 'Completed inventory checks, checked condition records, and deployed 24/7 security guards.',
      outcome: 'Secured all vehicles for 60 days through E-auction completion, with zero asset depreciation.'
    },
    faqs: [
      { q: 'Are all yard assets covered by fire and theft insurance?', a: 'Yes. All active custody yards feature comprehensive commercial insurance covering stored vehicles and machinery.' }
    ],
    cta: {
      heading: 'Secure Your Seized Assets Responsibly',
      subheading: 'Request a yard audit or view our active storage locations.',
      buttonText: 'Book Yard Audit',
      href: '/contact'
    }
  },

  'liaising': {
    eyebrow: 'Authority Liaison Desk',
    title: 'On-Ground Liaising with Local Authorities & Agencies',
    description: 'Coordinate eviction enforcements, police assistance requests, and property registrations with direct ground liaison panels.',
    primaryCtaText: 'Request Liaison Consultation',
    secondaryCtaText: 'View Regional Operations Map',
    trustStatement: 'Executing 4,500+ successful authority enforcements with direct branch networks across 5 states.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates provides authority liaising services. We coordinate police protection requests, manage sub-registrar filings, and handle local municipality permissions to execute foreclosure evictions.',
      outcomes: [
        { title: 'Liaison Cases', desc: 'Over 4,500+ cases coordinated with local police and DMs.' },
        { title: 'Regional Coverage', desc: 'Active liaison networks across 5 Southern states.' },
        { title: 'Warrant Execution', desc: '100% success rate executing court possession orders.' }
      ],
      useCases: [
        { title: 'Police Protection Coordination', desc: 'Liaising with police departments to secure evictions.' },
        { title: 'Sub-Registrar filings', desc: 'Coordinating property sale certificate registrations.' }
      ]
    },
    stats: [
      { value: '4,500+', label: 'Liaison Cases Coordinated' },
      { value: '5 States', label: 'Regional Liaison Reach' },
      { value: '35', label: 'Branch Coordinators' }
    ],
    challenges: [
      { title: 'Delayed Police Protection', desc: 'Possession enforcements stalled due to delayed police approvals or coordination gaps, extending defaults.', warningBadge: 'Liaison Delay', impactFormula: 'Possession TAT + 45 Days' },
      { title: 'Filing Objections', desc: 'Sub-registrar offices rejecting property sale certificates due to document errors.', warningBadge: 'Registry Defect', impactFormula: 'Transfer Delay + 30 Days' }
    ],
    failCompare: [
      {
        dimension: 'Liaison Sourcing',
        traditional: 'Lenders coordinate with local police independently, causing delays.',
        sm: 'Dedicated liaison desk coordinating directly with District Magistrates and local police circles.'
      },
      {
        dimension: 'Document Submission',
        traditional: 'Filing papers without checking local rules, causing registration delays.',
        sm: 'Pre-screened document dossiers prepared by our internal legal desk.'
      }
    ],
    framework: {
      title: 'Liaison Operations Model',
      desc: 'Centralized coordination with local authorities to execute foreclosure enforcements.',
      solutions: [
        { title: 'Municipal Liaison Desks', desc: 'Branch managers coordinating directly with regional police circles and government offices.' },
        { title: 'Pre-Screening Dossiers', desc: 'Auditing property documents and warrants before local registry submissions.' }
      ]
    },
    capabilities: [
      { title: 'Police Coordination', desc: 'Filing requests and arranging police presence for evictions.', businessOutcome: 'Secures ground safety during physical property repossessions.' },
      { title: 'Sub-Registrar Checks', desc: 'Cross-checking registries and registering sale deeds.', businessOutcome: 'Allows clean asset title transfers to auction buyers.' }
    ],
    workflow: [
      { step: '01', title: 'Instruction Ingestion', objective: 'Verify default file', action: 'Ingest court warrants and verify details with bank legal desk.', deliverable: 'Liaison case file.' },
      { step: '02', title: 'File Packaging', objective: 'Verify document files', action: 'Assemble property deeds, warrants, and police request forms.', deliverable: 'Pre-screened dossier.' },
      { step: '03', title: 'Authority Submission', objective: 'Secure police presence', action: 'Submit request to local police and coordinate eviction date.', deliverable: 'Police approval record.' },
      { step: '04', title: 'Warrant Execution', objective: 'Evict and seal', action: 'Visit site with authorities, execute possession, and inventory assets.', deliverable: 'Possession report.' }
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
      { value: '4,500+', label: 'Liaison Cases Coordinated' },
      { value: '5 States', label: 'Regional Liaison Reach' },
      { value: '15 Days', label: 'Average Execution TAT' }
    ],
    businessOutcomes: [
      { title: 'Faster Enforcements', desc: 'Centralized coordination helps secure police protection and execute warrants.' },
      { title: 'Clean Asset Transfers', desc: 'Pre-screened sub-registrar filings prevent deed registration delays.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Securing Police Protection for Evictions',
      challenge: 'A mortgage lender experienced delays executing a DM warrant for a property in suburban Cochin due to local resistance.',
      approach: 'SM Associates liaison desk coordinated with the Cochin police department, arranging logistics.',
      execution: 'Visited the site with police presence, executed eviction, and inventory-audited the property.',
      outcome: 'Secured property possession with zero compliance issues, allowing the bank to proceed with E-auction.'
    },
    faqs: [
      { q: 'Do you coordinate filing in rural sub-districts?', a: 'Yes. Our network of 35 regional branches allows us to liaise with local authorities and sub-registrar offices across South India.' }
    ],
    cta: {
      heading: 'Accelerate Your Foreclosure Operations Today',
      subheading: 'Request a consultation call to review our liaison capabilities and branch locations.',
      buttonText: 'Consult with Our Liaison Experts',
      href: '/contact'
    }
  }
};
