export const investigationContent = {
  'skip-tracing': {
    eyebrow: 'Investigative Sourcing',
    title: 'Re-Establish Contact with Absconding and Hard-to-Reach Borrowers',
    description: 'Locate missing account holders, update contact records, and restart recovery enforcements with professional skip-tracing teams.',
    primaryCtaText: 'Request Skip Tracing Pilot',
    secondaryCtaText: 'View Investigation Standards',
    trustStatement: 'Operating corporate investigation services since 2000 with a 74% trace success rate.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers professional skip-tracing services. We deploy digital databases checks, local informant networks, and physical ground checks to locate and re-engage hard-to-reach borrowers, updating contact records.',
      outcomes: [
        { title: 'Trace Success Rate', desc: '74% success rate locating absconding borrowers.' },
        { title: 'Average Locate TAT', desc: 'Sourcing active contact details within 5 to 7 business days.' },
        { title: 'Data Compliance', desc: '100% compliant with privacy laws and banking codes.' }
      ],
      useCases: [
        { title: 'Write-off Collections Teams', desc: 'Locating legacy defaults to reactivate recovery pipelines.' },
        { title: 'Legal Notice delivery', desc: 'Updating borrower locations to ensure valid notice service.' }
      ]
    },
    stats: [
      { value: '74%', label: 'Trace Success Rate' },
      { value: '5-7 Days', label: 'Average Locate TAT' },
      { value: '25 Yrs', label: 'Investigation Standing' }
    ],
    challenges: [
      { title: 'Borrower Relocation', desc: 'Borrowers shifting states, changing contact details, or shutting down registered offices to avoid enforcements.', warningBadge: 'Skip Risk', impactFormula: 'Default Age + 180 Days' },
      { title: 'Fictitious Applications', desc: 'Applicants using fake co-signers or ghost company profiles to secure loans.', warningBadge: 'Application Fraud', impactFormula: 'NPA Exposure + 25%' }
    ],
    failCompare: [
      {
        dimension: 'Location Search',
        traditional: 'Accepting applications details as final, closing cases if borrowers are not found.',
        sm: 'Multi-layer tracking combining local informant networks, registrar checks, and database audits.'
      },
      {
        dimension: 'Compliance Conduct',
        traditional: 'Unregulated tracing methods violating privacy guidelines.',
        sm: 'Strict compliance with banking codes and customer data privacy standards.'
      }
    ],
    framework: {
      title: 'Investigative Tracing Framework',
      desc: 'Centralized investigation panels locating missing borrowers.',
      solutions: [
        { title: 'Digital Sourcing', desc: 'Cross-checking carrier databases and public registers for active numbers.' },
        { title: 'On-Ground Checking', desc: 'Field investigators checking neighbors and local circles.' }
      ]
    },
    capabilities: [
      { title: 'Telecom Sourcing', desc: 'Checking carrier registries for active phone numbers.', businessOutcome: 'Restores Outbound calling lines to absconding debtors.' },
      { title: 'Utility Audits', desc: 'Verifying active electricity or registry coordinates.', businessOutcome: 'Confirms the borrower\'s active residential address.' }
    ],
    workflow: [
      { step: '01', title: 'Intake Search', objective: 'Verify default file', action: 'Ingest case files and start database query.', deliverable: 'Active case file.' },
      { step: '02', title: 'Database Scans', objective: 'Verify registers', action: 'Query corporate tax (GSTIN) and MCA registers for alternative contacts.', deliverable: 'Alternative numbers log.' },
      { step: '03', title: 'Ground Dispatch', objective: 'Perform doorstep checks', action: 'Assign ground agents to verify located coordinates on-site.', deliverable: 'Located address record.' },
      { step: '04', title: 'Record Update', objective: 'Update client system', action: 'Update contact details and coordinates on the client dashboard.', deliverable: 'Updated account record.' }
    ],
    techEnablement: {
      title: 'Tracing Telemetry',
      desc: 'Real-time updates logging coordinates and search parameters.',
      modules: [
        { title: 'Coordinates Dashboard', desc: 'Lenders track check-ins and search progress on the console.' }
      ]
    },
    geoScope: {
      title: 'Search Network',
      desc: 'Operational coverage across Southern India.',
      stats: [
        { label: 'Search Coverage', value: 'Tamil Nadu, Karnataka, Kerala, Telangana, Andhra' },
        { label: 'Field Staff', value: '80+ Specialized Investigators' }
      ]
    },
    complianceDetails: [
      'Strict Adherence to Data Privacy Guidelines',
      'Non-coercive Information Sourcing Methods',
      'ISO 27001 Data Custody Standards Aligned'
    ],
    industriesServed: [
      { name: 'Nationalized Banks', scenario: 'Locating legacy retail credit card defaults.', framework: 'Carrier database match' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset location checks' }
    ],
    operationalMetrics: [
      { value: '74%', label: 'Trace Success Rate' },
      { value: '5-7 Days', label: 'Average Locate TAT' },
      { value: '25 Yrs', label: 'Operational Standing' }
    ],
    businessOutcomes: [
      { title: 'Reactivated Collections', desc: 'Finding missing debtors allows lenders to resume recovery enforcements.' },
      { title: 'Lower NPA Ratios', desc: 'Reopening collections channels helps clear written-off portfolios.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Locating an Absconding Mortgagor',
      challenge: 'A mortgage lender was unable to serve Section 13 notices as the borrower had vacated their home, with no active phone records.',
      approach: 'SM Associates deployed a skip-tracing task force, checking municipal registers and local informant networks.',
      execution: 'Tracked alternative coordinate details, confirming the debtor relocated to a different city and started a new business.',
      outcome: 'Updated active coordinates within 7 days, allowing successful notice service and foreclosure action.'
    },
    faqs: [
      { q: 'Do you locate alternative properties owned by the borrower?', a: 'Yes. We cross-reference municipal land registries and MCA records to identify other assets owned by default directors.' }
    ],
    cta: {
      heading: 'Locate Your Missing Borrowers',
      subheading: 'Request a pilot program to trace default accounts in your legacy write-off books.',
      buttonText: 'Submit Tracing Case',
      href: '/contact'
    }
  },

  'address-tracing': {
    eyebrow: 'Location Confirmations',
    title: 'Confirm Active Residential & Business Addresses',
    description: 'Locate current physical addresses of non-responsive borrowers to ensure successful legal notice delivery and ground visits.',
    primaryCtaText: 'Request Address Tracing',
    secondaryCtaText: 'Review Address Checklist',
    trustStatement: 'Confirming notice delivery success across 180+ districts with an 88% address find rate.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates locates current physical addresses for legal notices. We cross-reference local post office registers, sub-registrar files, and municipal records to resolve ghost addresses and notice returns.',
      outcomes: [
        { title: 'Address Find Rate', desc: '88% success rate locating active borrower residences.' },
        { title: 'Coverage Scope', desc: 'Deep ground reach covering over 180 districts in South India.' },
        { title: 'Notice Servicing', desc: 'Enabling successful legal notice deliveries with zero return rates.' }
      ],
      useCases: [
        { title: 'Returned Notice Resolution', desc: 'Locating active addresses after notices are returned undelivered.' },
        { title: 'Pre-Litigation Address Checks', desc: 'Confirming residential details before filing court cases.' }
      ]
    },
    stats: [
      { value: '88%', label: 'Address Find Rate' },
      { value: '180+', label: 'Districts Covered' },
      { value: '3 business days', label: 'Average Locate TAT' }
    ],
    challenges: [
      { title: 'Notice Return Gaps', desc: 'Legal notices returned due to wrong address details, delaying court hearings.', warningBadge: 'Delivery Defect', impactFormula: 'Court TAT + 90 Days' },
      { title: 'Tenant Address Changes', desc: 'Borrowers vacating rental homes without updating address records.', warningBadge: 'Tenant Skip', impactFormula: 'NPA Provisioning + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Address Check Sourcing',
        traditional: 'Accepting paper post office returns as final, stalling court filings.',
        sm: 'Ground checks verifying directories, neighbor inputs, and municipal utility files.'
      },
      {
        dimension: 'Photo Telemetry',
        traditional: 'No verification of visit checks, leading to unreliable updates.',
        sm: 'GPS-geotagged check-ins and photo logs verifying located premises.'
      }
    ],
    framework: {
      title: 'Address Sourcing Model',
      desc: 'Centralized registry audits and ground checks to locate active addresses.',
      solutions: [
        { title: 'Registry Checks', desc: 'Cross-checking property land registers and tax files.' },
        { title: 'doorstep verifications', desc: 'Dispatching coordinators to inspect target addresses on-site.' }
      ]
    },
    capabilities: [
      { title: 'Sub-Registrar Checks', desc: 'Verifying property land transfer files at registry offices.', businessOutcome: 'Identifies active ownership records and addresses.' },
      { title: 'Panchayat Checks', desc: 'Liaising with local village offices in rural districts.', businessOutcome: 'Confirms address details in remote agricultural zones.' }
    ],
    workflow: [
      { step: '01', title: 'Notice Ingestion', objective: 'Verify default details', action: 'Ingest returned notice files and check application address details.', deliverable: 'Ingested notice log.' },
      { step: '02', title: 'Registry Map', objective: 'Verify public records', action: 'Cross-reference tax and municipal databases for address updates.', deliverable: 'Active utility coordinates.' },
      { step: '03', title: 'Field Deployment', objective: 'Verify on-site location', action: 'Dispatch ground coordinators to verify coordinates and capture photos.', deliverable: 'On-site coordinates photo.' },
      { step: '04', title: 'Confirmed Location', objective: 'Update address records', action: 'Upload verified coordinates and delivery records to client console.', deliverable: 'Verified address report.' }
    ],
    techEnablement: {
      title: 'Geofenced Sourcing',
      desc: 'Enforcing verification validity with real-time coordinate logging.',
      modules: [
        { title: 'Live Coordinates Log', desc: 'Investigators upload coordinates and photos matching located addresses.' }
      ]
    },
    geoScope: {
      title: 'Regional Operations Range',
      desc: 'Active branch networks covering Southern India.',
      stats: [
        { label: 'Active States', value: 'TN, KA, KL, TS, AP, PY' },
        { label: 'Liaison offices', value: '35 Regional Branches' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned doorstep visits',
      'Confidential handling of candidate records',
      'Legal Chain of Custody for delivery reports'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Pre-litigation address checks.', framework: 'Sub-registrar title audits' },
      { name: 'Housing Finance Companies', scenario: 'Returned Section 13 notice resolution.', framework: 'Panchayat registry checks' }
    ],
    operationalMetrics: [
      { value: '88%', label: 'Address Find Rate' },
      { value: '180+', label: 'Districts Covered' },
      { value: '3 Days', label: 'Average Locate TAT' }
    ],
    businessOutcomes: [
      { title: 'Successful Notice Delivery', desc: 'Physical visits ensure the validity of address records before court filing.' },
      { title: 'Fewer Court stayed orders', desc: 'Valid address records prevent court objections from non-received notices.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Locating an Out-of-State Defaulter',
      challenge: 'A lender had a default check bounce case stalled as the borrower vacated their Chennai home, with court summons returned.',
      approach: 'SM Associates initiated municipal registry checks, tracking the borrower\'s business filings.',
      execution: 'Located active coordinates in Bangalore, dispatched ground representatives to verify, and obtained photo evidence.',
      outcome: 'Provided active address details within 5 days, enabling successful summons delivery.'
    },
    faqs: [
      { q: 'Do you provide physical photos of the newly located property?', a: 'Yes. Every verified address report includes geocoded photos of the building exterior and entrance.' }
    ],
    cta: {
      heading: 'Ensure Notice Delivery Success Today',
      subheading: 'Request a proposal to empanel SM Associates for your address tracing needs.',
      buttonText: 'Request Address Tracing',
      href: '/contact'
    }
  },

  'contact-verification': {
    eyebrow: 'Data Validation Layers',
    title: 'Ensure Contact Authenticity Before Loan Approval',
    description: 'Confirm applicant phone numbers, alternative contacts, and email addresses through database lookups and validation calls.',
    primaryCtaText: 'Initiate Contact Check',
    secondaryCtaText: 'View Call Center Capabilities',
    trustStatement: 'Ensuring credit book integrity, checking over 120,000+ numbers with instant database match rates.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates verifies applicant contact details. We cross-reference phone numbers against carrier databases, check active email delivery paths, and run direct validation calls to isolate fake contact profiles.',
      outcomes: [
        { title: 'Numbers Verified', desc: 'Over 120,000+ applicant numbers checked.' },
        { title: 'Validation Speed', desc: 'Instant database matching checks for carrier records.' },
        { title: 'Call Compliance', desc: '100% of validation calls recorded and auditable.' }
      ],
      useCases: [
        { title: 'Credit Card Onboarding', desc: 'Verifying applicant numbers and extensions before dispatch.' },
        { title: 'Fintech Micro-Loans', desc: 'API-based contact registry checks during application.' }
      ]
    },
    stats: [
      { value: '120K+', label: 'Numbers Checked' },
      { value: 'Instant', label: 'Database Match TAT' },
      { value: '100%', label: 'Call Log Compliance' }
    ],
    challenges: [
      { title: 'Prepaid SIM card fraud', desc: 'Applicants providing temporary SIM numbers or fake reference contacts to bypass credit checks.', warningBadge: 'Identity Fraud', impactFormula: 'Default Write-off + 30%' },
      { title: 'Non-Responsive Co-signers', desc: 'Fictitious co-signer numbers listed to pass underwriting checks.', warningBadge: 'Co-signer Risk', impactFormula: 'NPA Exposure + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Carrier Matching',
        traditional: 'Accepting applicant numbers without verifying carrier registration details.',
        sm: 'Carrier database match checks verifying caller ID details against applicant records.'
      },
      {
        dimension: 'Call Quality Control',
        traditional: 'Unrecorded validation calls with no audit logs, violating codes.',
        sm: '100% voice recorded caller paths, archived for 180 days on secure consoles.'
      }
    ],
    framework: {
      title: 'Contact Verification Model',
      desc: 'Automated database matches and voice audits validating contact records.',
      solutions: [
        { title: 'Carrier database Checks', desc: 'Validating active subscriber details against official telecom databases.' },
        { title: 'Reference Checks', desc: 'Outbound tele-calling to confirm co-signers and reference validity.' }
      ]
    },
    capabilities: [
      { title: 'Carrier Registry Audits', desc: 'Verifying SIM registration details and active coordinates.', businessOutcome: 'Exposes fake subscriber records and synthetic profiles.' },
      { title: 'Reference Verification', desc: 'Outbound validation calls to verify applicant references.', businessOutcome: 'Prevents co-signer fraud and verifies contact lists.' }
    ],
    workflow: [
      { step: '01', title: 'Contact Ingestion', objective: 'Verify applicant details', action: 'Ingest candidate phone list from client system.', deliverable: 'Ingested contact log.' },
      { step: '02', title: 'Registry Match Query', objective: 'Verify carrier logs', action: 'Query carrier databases for active subscriber details.', deliverable: 'Carrier match logs.' },
      { step: '03', title: 'Confirmation Dialing', objective: 'Mediate reference check', action: 'Launch voice check calls to confirm reference details.', deliverable: 'Recorded call log.' },
      { step: '04', title: 'Accuracy Status Log', objective: 'Upload verified results', action: 'Upload final verified contacts list to client console.', deliverable: 'Verified contact report.' }
    ],
    techEnablement: {
      title: 'Calling Analytics Platform',
      desc: 'Encrypted calling systems and voice logger archives.',
      modules: [
        { title: 'Compliance Logs', desc: 'Outbound voice logs are stored securely, auditable on the console.' }
      ]
    },
    geoScope: {
      title: 'Call Center Infrastructure',
      desc: 'Bilingual calling facilities covering South Indian regions.',
      stats: [
        { label: 'Calling Capacity', value: '250+ Active Seats' },
        { label: 'Calling Languages', value: 'Tamil, Kannada, Telugu, Malayalam, English' }
      ]
    },
    complianceDetails: [
      'RBI Data Conduct Directives Aligned Outbound Calls',
      'All Verification Calls Recorded and Archived',
      'Compliance with telecom caller ID regulations'
    ],
    industriesServed: [
      { name: 'Fintech Platforms', scenario: 'API-based contact validations checks.', framework: 'API-triggered database checks' },
      { name: 'Private Commercial Banks', scenario: 'High-ticket personal loan reference checks.', framework: 'Outbound call center audits' }
    ],
    operationalMetrics: [
      { value: '120K+', label: 'Numbers Checked' },
      { value: 'Instant', label: 'Database Match TAT' },
      { value: '180 Days', label: 'Secure Voice Archive' }
    ],
    businessOutcomes: [
      { title: 'Higher Collection Contact', desc: 'Valid contact details ensure high contact rates during recovery campaigns.' },
      { title: 'Zero Ghost Profiles', desc: ' doorstep checks and calling audits prevent fake profile onboarding.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Detecting Call-Reference fraud',
      challenge: 'A fintech lender faced defaults on micro-loans, discovering that co-signer numbers were prepaid SIM cards owned by the same applicant.',
      approach: 'SM Associates integrated carrier registry checks and reference calling audits.',
      execution: 'Cross-checked SIM registrations and performed validation calls for all incoming applications.',
      outcome: 'Exposed 8% fake reference records, saving the platform over ₹1.1 Crore in potential bad debts.'
    },
    faqs: [
      { q: 'Do you record and archive verification calls?', a: 'Yes. All verification calls are voice-recorded and stored securely for 180 days on our client console.' }
    ],
    cta: {
      heading: 'Onboard Only Real Borrowers today',
      subheading: 'Request an integration guide to link your underwriting console with our database APIs.',
      buttonText: 'Consult with Our Risk Team',
      href: '/contact'
    }
  },

  'fraud-investigation': {
    eyebrow: 'Forensic Risk Audits',
    title: 'Expose Lending Fraud Rings and Secure Assets',
    description: 'Investigate document tampering, phantom employers, and collusive lending circles with corporate fraud investigation experts.',
    primaryCtaText: 'Request Fraud Investigation',
    secondaryCtaText: 'Download Fraud Prevention Framework',
    trustStatement: 'Protecting bank credit books, auditing 1,800+ fraud cases and saving over ₹650+ Crore.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates provides forensic fraud investigations. We investigate document tampering, shell company networks, multiple mortgages on one asset, and employee collusion to secure lender books.',
      outcomes: [
        { title: 'Audits Executed', desc: 'Over 1,800+ suspected fraud cases audited.' },
        { title: 'Mitigated Exposure', desc: 'Over ₹650+ Crore saved from fraudulent disbursements.' },
        { title: 'Forensic Appraisers', desc: 'Empanelled legal registrars and company audit coordinators.' }
      ],
      useCases: [
        { title: 'Shell Company Investigations', desc: 'Auditing factory sites to expose non-operational listings.' },
        { title: 'Multiple Mortgage Fraud', desc: 'Checking sub-registrar records to identify double-funding cases.' }
      ]
    },
    stats: [
      { value: '1,800+', label: 'Investigations Handled' },
      { value: '₹650+ Cr', label: 'Mitigated Exposure Value' },
      { value: '99.8%', label: 'Forensic Accuracy Rate' }
    ],
    challenges: [
      { title: 'Shell Firm Networks', desc: 'Fraud rings setting up fake company offices, trade registers, and bank logs to secure commercial loans.', warningBadge: 'Shell Company Risk', impactFormula: 'Default Exposure + 100%' },
      { title: 'Double Funding Mortgages', desc: 'Borrowers pledging the same property deed to multiple banks using fake patta records.', warningBadge: 'Mortgage Fraud', impactFormula: 'NPA Provisioning + 45%' }
    ],
    failCompare: [
      {
        dimension: 'Fraud Ring Detection',
        traditional: 'Accepting photocopy files, checking basic company registers online.',
        sm: 'On-site physical employer checks combined with cross-border coordinate checks.'
      },
      {
        dimension: 'Document Auditing',
        traditional: 'Accepting digital statements without checking transaction records.',
        sm: 'Forensic audits checking stamp paper codes, tax registry matches, and original registries.'
      }
    ],
    framework: {
      title: 'Anti-Fraud Model',
      desc: 'Centralized forensic audits and field inspections to isolate fraud rings.',
      solutions: [
        { title: 'Factory Site Inspections', desc: 'Field coordinators visit target warehouses to confirm active business status.' },
        { title: 'Registry Checks', desc: 'Cross-checking registry entries and original deeds at local registries.' }
      ]
    },
    capabilities: [
      { title: 'Multiple Funding checks', desc: 'Cross-checking property registries across banks.', businessOutcome: 'Exposes duplicate mortgages and fake title deeds.' },
      { title: 'Physical Site verification', desc: 'Inspecting factory facilities and stock lists on site.', businessOutcome: 'Prevents funding to non-operational shell companies.' }
    ],
    workflow: [
      { step: '01', title: 'Case Profiling', objective: 'Verify target company', action: 'Ingest company registration and GST details from client.', deliverable: 'Fraud case assignment.' },
      { step: '02', title: 'Field Operations', objective: 'Audit active site', action: 'Field investigator visits the office or factory site to check operations.', deliverable: 'Geotagged site check.' },
      { step: '03', title: 'Evidentiary Review', objective: 'Audit tax returns', action: 'Check company registries, trade logs, and bank statement files.', deliverable: 'Forensic audit report.' },
      { step: '04', title: 'Action Plan', objective: 'Deliver final audit report', action: 'Deliver report and coordinate with bank legal desks.', deliverable: 'Final fraud investigation dossier.' }
    ],
    techEnablement: {
      title: 'Anti-Fraud Console',
      desc: 'Encrypted databases and company registry matching.',
      modules: [
        { title: 'GSTIN Registry Sync', desc: 'GST validation checks are executed automatically via portal APIs.' }
      ]
    },
    geoScope: {
      title: 'Audit Network Reach',
      desc: 'Forensic coordination networks active across South India.',
      stats: [
        { label: 'Audit Hubs', value: '35 Regional Branches' },
        { label: 'Legal Coordinators', value: '80+ Empanelled Copes' }
      ]
    },
    complianceDetails: [
      'Strict Adherence to Criminal Evidence Codes',
      'Nondisclosure Agreements (NDA) Signed for All Cases',
      'ISO 27001 Data Custody Standards Aligned'
    ],
    industriesServed: [
      { name: 'Commercial Lending Panels', scenario: 'Exposing shell company loan applications.', framework: 'Factory inventory audits' },
      { name: 'Housing Finance Companies', scenario: 'Double-funding mortgage fraud checks.', framework: 'Sub-registrar title verifications' }
    ],
    operationalMetrics: [
      { value: '1,800+', label: 'Investigations Handled' },
      { value: '₹650+ Cr', label: 'Mitigated Exposure Value' },
      { value: '100% compliance', label: 'Audit Trail Success' }
    ],
    businessOutcomes: [
      { title: 'Prevented Portfolio Losses', desc: 'Exposing fraud rings before disbursement protects bank reserves.' },
      { title: 'Protected Reputation', desc: 'Centralized audits prevent public complaints and audit warnings.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Exposing a Shell Factory Ring',
      challenge: 'An NBFC received multiple working capital loan requests from retail businesses listed in an outer Chennai suburb.',
      approach: 'SM Associates initiated a forensic site audit, checking registry details and coordinates.',
      execution: 'Dispatched field investigators to the registered addresses, finding empty warehouses with fake name boards.',
      outcome: 'Exposed a fraud ring coordinating 18 fake businesses, saving the bank over ₹5.6 Crore in potential write-offs.'
    },
    faqs: [
      { q: 'Do you coordinate filings with local law enforcement?', a: 'We compile the forensic audit dossiers and witness statements, allowing the bank\'s legal team to file reports with local authorities.' }
    ],
    cta: {
      heading: 'Protect Your Loan Books from Systematic Fraud today',
      subheading: 'Request a copy of our fraud prevention matrix and corporate audit cases.',
      buttonText: 'Connect with Forensic Desk',
      href: '/contact'
    }
  }
};
