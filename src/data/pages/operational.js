export const operationalContent = {
  'call-centre': {
    eyebrow: 'Compliant Outbound Calling Operations',
    title: 'Call Centre Operations',
    subtitle: 'Scaling Outbound Collections Calling Without Scaling Compliance Risk',
    description: 'Scaling compliant outbound collections calling without scaling regulatory risk.',
    primaryCtaText: 'Request a Call Centre Operations Walkthrough',
    secondaryCtaText: 'Download Compliance Standards',

    problemStatement: [
      { icon: 'shieldAlert', title: 'Outbound Compliance Risk', desc: 'Calling outside approved hours or using non-compliant scripts invites audit penalties.' },
      { icon: 'briefcase', title: 'High Staff Attrition', desc: 'Recruiting and training in-house collections callers creates ongoing operational overhead.' },
      { icon: 'fileWarning', title: 'Inconsistent Call Quality', desc: 'Without structured QA, caller tone and compliance vary widely across agents.' },
      { icon: 'trendingDown', title: 'Untracked Commitments', desc: 'Promise-to-pay commitments that aren’t logged consistently get lost between calls.' }
    ],

    overview: {
      heading: 'Why Outsourced Calling Operations Reduce Risk, Not Just Cost',
      subheading: 'A Managed Calling Desk Bakes Compliance Into the Operating Model',
      summary: 'In-house collections calling means the lender owns every compliance risk directly — calling-hour violations, inconsistent scripts, unrecorded conversations. Call Centre Operations structures outbound calling around recorded lines, calling-hour lockouts, and structured QA review, so compliance is enforced by the system, not by individual agent discipline. SM Associates delivers this as bilingual, scalable calling capacity that plugs directly into the lender’s collections workflow.',
      outcomes: [
        { title: 'Compliance by Design', desc: 'Calling-hour and recording rules are enforced at the system level, not left to discretion.' },
        { title: 'Bilingual Reach', desc: 'Outreach conducted in the borrower’s preferred regional language.' },
        { title: 'Structured QA', desc: 'Regular call audits maintain consistent tone and compliance across all agents.' }
      ],
      useCases: [
        { title: 'Early Delinquency Outreach', desc: 'Payment reminders for retail credit card and personal loan portfolios.' },
        { title: 'Settlement Mediation', desc: 'Outbound campaigns presenting lender-approved payment structures.' },
        { title: 'Customer Check-In Campaigns', desc: 'Routine outbound contact for account status and dispute resolution.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Bilingual Outbound Calling', desc: 'Outreach conducted in the language the borrower is most comfortable with.', bullets: ['Multi-language calling capability', 'Scripted, non-coercive borrower communication', 'Consistent tone across regional languages'], businessOutcome: 'Improves contact quality and borrower receptiveness.' },
      { title: 'Calling-Hour Compliance Lockout', desc: 'System-enforced restriction on when outbound calls can be made.', bullets: ['Automatic dialing restriction outside permitted hours', 'No reliance on individual agent discretion', 'Built-in enforcement, not a policy on paper'], businessOutcome: 'Removes a major source of regulatory exposure from the calling process.' },
      { title: 'Recorded Line Infrastructure', desc: 'Every outbound call recorded for compliance and quality review.', bullets: ['100% call recording', 'Secure archival of call recordings', 'Recordings available for compliance review'], businessOutcome: 'Gives the lender a verifiable record of every borrower interaction.' },
      { title: 'Promise-to-Pay Tracking', desc: 'Structured logging of borrower commitments made during calls.', bullets: ['Standardized commitment logging', 'Automated follow-up scheduling', 'Status sync with the client’s collections system'], businessOutcome: 'Converts more verbal commitments into tracked, followed-up payments.' },
      { title: 'Structured QA Review', desc: 'Regular auditing of call quality and compliance.', bullets: ['Scheduled review of recorded calls', 'Tone and script-adherence evaluation', 'Corrective feedback loop for agents'], businessOutcome: 'Maintains consistent quality and compliance across the calling team.' },
      { title: 'Calling Risk Flagging', desc: 'Translating call outcomes into a structured risk read.', bullets: ['Consolidation of call outcomes and borrower responses', 'Flagging of accounts needing escalation', 'Structured reporting for the lender’s collections desk'], businessOutcome: 'Gives lenders visibility into which accounts need further action.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'portfolio-ingestion', label: 'Portfolio Ingestion', heading: 'Bringing Accounts Into the Calling Pipeline', overview: 'Portfolio files are ingested and segmented by default risk.', activities: ['Portfolio file ingestion', 'Risk-based segmentation'], documents: [], risks: ['Misclassified accounts entering the wrong calling track'], deliverable: 'Active collections log file.', benefit: 'Ensures accounts are routed to the right calling approach from the start.' },
      { id: 'script-setup', label: 'Script Setup', heading: 'Preparing Compliant Calling Scripts', overview: 'Scripts are loaded and allocated to agent seats for the campaign.', activities: ['Script customization', 'Agent seat allocation'], documents: [], risks: ['Non-compliant or inconsistent scripts in use'], deliverable: 'Active campaign mapping.', benefit: 'Keeps every call grounded in an approved, compliant script.' },
      { id: 'outbound-calling', label: 'Outbound Calling', heading: 'Making Contact Within Compliant Hours', overview: 'Calls are placed within system-enforced permitted hours.', activities: ['Outbound dialing within approved hours', 'Call recording'], documents: [], risks: ['Calling outside permitted hours'], deliverable: 'Outbound call logs.', benefit: 'Removes calling-hour violations as a source of risk.' },
      { id: 'commitment-tracking', label: 'Commitment Tracking', heading: 'Logging What Borrowers Agree To', overview: 'Promise-to-pay commitments are logged and scheduled for follow-up.', activities: ['Commitment logging', 'Follow-up scheduling'], documents: [], risks: ['Untracked commitments going unfollowed'], deliverable: 'Promise-to-pay register.', benefit: 'Converts verbal commitments into tracked, actionable follow-ups.' },
      { id: 'qa-review', label: 'QA Review', heading: 'Auditing Call Quality and Compliance', overview: 'Recorded calls are reviewed for tone and script adherence.', activities: ['Scheduled call audits', 'Agent feedback delivery'], documents: [], risks: ['Inconsistent quality without active review'], deliverable: 'QA audit log.', benefit: 'Maintains consistent compliance across the calling team.' },
      { id: 'status-sync', label: 'Status Sync', heading: 'Updating the Lender’s System', overview: 'Call outcomes and commitments are synced to the client dashboard.', activities: ['Dashboard status sync', 'Reporting delivery'], documents: [], risks: ['Delayed visibility into calling outcomes'], deliverable: 'Updated client dashboard.', benefit: 'Gives the lender real-time visibility into calling progress.' }
    ],

    challengesHeading: 'Enterprise Call Centre Operations Risks',
    challenges: [
      { title: 'Outbound Compliance Risk', desc: 'Calling outside approved hours or using non-compliant scripts causing audit penalties.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit regulatory exposure from non-compliant calling conduct.' },
      { title: 'High Staff Attrition', desc: 'Recruiting and training in-house collections callers creates ongoing operational delays.', warningBadge: 'Operational Risk', impact: 'Calling capacity is disrupted by recruitment and training cycles.' },
      { title: 'Inconsistent Call Quality', desc: 'Without structured QA, caller tone and compliance vary widely.', warningBadge: 'Quality Risk', impact: 'Inconsistent borrower experience and uneven compliance across agents.' },
      { title: 'Untracked Commitments', desc: 'Promise-to-pay commitments that aren’t logged get lost between calls.', warningBadge: 'Process Risk', impact: 'Verbal commitments don’t convert into recovered payments.' },
      { title: 'Unrecorded Calls', desc: 'Calling without recorded lines leaves no record if a dispute arises.', warningBadge: 'Evidentiary Risk', impact: 'Disputed borrower interactions lack a verifiable record.' },
      { title: 'Scaling Limitations', desc: 'In-house calling capacity is hard to scale up or down with portfolio volume.', warningBadge: 'Capacity Risk', impact: 'Calling capacity doesn’t flex with changing portfolio needs.' }
    ],

    processFlow: {
      title: 'Enterprise Call Centre Operations Lifecycle',
      desc: 'A structured operating model that moves a portfolio from ingestion to tracked calling outcomes.',
      steps: [
        { step: '01', title: 'Portfolio Ingestion', desc: 'Accounts are ingested and segmented by default risk.', outcome: 'Accounts routed into the right calling track.' },
        { step: '02', title: 'Script Setup', desc: 'Compliant scripts are loaded and allocated to agents.', outcome: 'Every call grounded in an approved script.' },
        { step: '03', title: 'Outbound Calling', desc: 'Calls are placed within system-enforced compliant hours.', outcome: 'Contact made without calling-hour violations.' },
        { step: '04', title: 'Commitment Tracking', desc: 'Promise-to-pay commitments are logged and followed up.', outcome: 'Verbal commitments converted into tracked actions.' },
        { step: '05', title: 'QA Review & Reporting', desc: 'Call quality is audited and outcomes reported to the client.', outcome: 'Consistent quality and full visibility for the lender.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Compliance Risk', desc: 'System-enforced calling-hour and recording rules reduce regulatory exposure.', value: 'Fewer compliance findings tied to outbound calling conduct.' },
      { title: 'Lower Operating Overhead', desc: 'Outsourced calling removes recruitment and infrastructure costs from the lender.', value: 'Reduced internal cost of maintaining in-house calling capacity.' },
      { title: 'Consistent Call Quality', desc: 'Structured QA maintains tone and compliance across the entire calling team.', value: 'A consistent borrower experience regardless of which agent calls.' },
      { title: 'Higher Commitment Conversion', desc: 'Tracked promise-to-pay follow-up converts more commitments into payments.', value: 'Improved early-stage recovery performance.' },
      { title: 'Scalable Calling Capacity', desc: 'Calling capacity can flex with portfolio volume without internal hiring cycles.', value: 'Capacity that matches portfolio need, not fixed headcount.' },
      { title: 'Verifiable Call Records', desc: 'Recorded lines give the lender a record for any disputed interaction.', value: 'Stronger position if a borrower interaction is disputed.' }
    ],

    faqs: [
      { q: 'How do you handle caller quality checks?', a: 'Recorded calls are audited on a scheduled basis, evaluating agent language, tone, and script compliance, with feedback delivered to agents.' },
      { q: 'Can calling capacity scale up or down with our portfolio?', a: 'Yes — calling capacity is structured to flex with portfolio volume rather than being fixed to a static headcount.' }
    ],

    cta: {
      heading: 'Scale Your Outbound Collections Capacity',
      subheading: 'Request a call centre operations walkthrough for your collections desk.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'manpower': {
    eyebrow: 'Field Workforce Deployment',
    title: 'Field Workforce Deployment',
    subtitle: 'Trained, Background-Verified Field Staff for Collections and Verification',
    description: 'Supplying background-verified, DRA-certified field staff ready for immediate deployment.',
    primaryCtaText: 'Request a Field Workforce Deployment Walkthrough',
    secondaryCtaText: 'Download Training Curriculum',

    problemStatement: [
      { icon: 'briefcase', title: 'Recruitment Delays', desc: 'Finding trained, DRA-certified field staff causes operational vacancies that delay execution.' },
      { icon: 'shieldAlert', title: 'Background Check Risk', desc: 'Unverified field agents create legal and compliance exposure for the lender.' },
      { icon: 'fileWarning', title: 'Inconsistent Training', desc: 'Without standardized training, field conduct quality varies widely across staff.' },
      { icon: 'trendingDown', title: 'Coverage Gaps', desc: 'Staff vacancies leave field collections or verification capacity short exactly when volume is highest.' }
    ],

    overview: {
      heading: 'Why Pre-Vetted, Pre-Trained Field Staff Changes the Deployment Timeline',
      subheading: 'Recruiting and Training Field Staff Takes Time You May Not Have',
      summary: 'Standing up field collections or verification capacity in-house means recruiting candidates, running background checks, and completing DRA certification training before deployment — a process that can take weeks. Field Workforce Deployment supplies staff who have already cleared this pipeline: background-verified, DRA-certified, and field-ready. SM Associates structures this around documented screening and standardized training, so deployment timelines compress from weeks to days.',
      outcomes: [
        { title: 'Pre-Vetted Staff', desc: 'Background checks are completed before deployment, not during it.' },
        { title: 'DRA-Certified by Default', desc: 'Every deployed staff member has completed mandatory compliance training.' },
        { title: 'Faster Deployment', desc: 'Field-ready staff compress deployment timelines significantly.' }
      ],
      useCases: [
        { title: 'Field Collections Outsourcing', desc: 'Deploying doorstep collections executives to retail banking operations.' },
        { title: 'Verification Staffing', desc: 'Outsourcing customer profile-checking staff to credit risk panels.' },
        { title: 'Seasonal Capacity Surges', desc: 'Scaling field capacity temporarily for portfolio-specific campaigns.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Candidate Sourcing & Screening', desc: 'Recruiting and pre-screening candidates before deployment consideration.', bullets: ['Structured candidate sourcing', 'Reference and background pre-screening', 'Initial suitability assessment'], businessOutcome: 'Builds a qualified candidate pipeline before client need arises.' },
      { title: 'Background Verification', desc: 'Completing police and address verification checks on every candidate.', bullets: ['Police record verification', 'Address and identity verification', 'Documented verification trail for every placement'], businessOutcome: 'Protects the client from the legal risk of unverified field staff.' },
      { title: 'DRA Compliance Training', desc: 'Mandatory certification training before any field deployment.', bullets: ['Structured DRA certification curriculum', 'Compliance and conduct training', 'Certification completion before deployment'], businessOutcome: 'Ensures every deployed staff member meets regulatory training requirements.' },
      { title: 'Field-Ready Deployment', desc: 'Placing trained, verified staff directly into client operations.', bullets: ['Deployment coordination with client branches', 'Role-specific orientation before start', 'Payroll and administrative coordination'], businessOutcome: 'Closes staffing gaps faster than an in-house recruitment cycle.' },
      { title: 'Ongoing Field Monitoring', desc: 'Tracking deployed staff conduct and performance.', bullets: ['Geolocated visit check-ins', 'Performance monitoring against deployment expectations', 'Escalation pathway for conduct concerns'], businessOutcome: 'Maintains accountability for staff after deployment, not just before it.' },
      { title: 'Deployment Risk Flagging', desc: 'Translating staffing and field outcomes into a structured risk read.', bullets: ['Consolidation of screening and performance data', 'Flagging of any conduct or compliance concerns', 'Structured reporting for the client’s HR or operations desk'], businessOutcome: 'Gives clients visibility into deployed workforce quality and conduct.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'sourcing', label: 'Sourcing & Screening', heading: 'Building a Qualified Candidate Pipeline', overview: 'Candidates are sourced and pre-screened before formal background checks.', activities: ['Candidate sourcing', 'Reference pre-screening'], documents: [], risks: ['Unqualified candidates entering the pipeline'], deliverable: 'Screened candidate list.', benefit: 'Establishes a qualified base before deeper vetting begins.' },
      { id: 'background-check', label: 'Background Verification', heading: 'Confirming Every Candidate Is Clean', overview: 'Police and address verification checks are completed for every candidate.', activities: ['Police record check', 'Address verification'], documents: [], risks: ['Unverified candidates reaching deployment'], deliverable: 'Background verification report.', benefit: 'Protects the client from unvetted field staff exposure.' },
      { id: 'dra-training', label: 'DRA Training', heading: 'Completing Mandatory Compliance Certification', overview: 'Candidates complete the required DRA training curriculum.', activities: ['DRA curriculum training', 'Compliance and conduct training'], documents: [], risks: ['Field deployment without completed certification'], deliverable: 'DRA certification record.', benefit: 'Ensures regulatory training requirements are met before deployment.' },
      { id: 'deployment', label: 'Deployment', heading: 'Placing Staff Into Client Operations', overview: 'Trained, verified staff are deployed to client branch operations.', activities: ['Deployment coordination', 'Role-specific orientation'], documents: [], risks: ['Deployment without proper orientation'], deliverable: 'Deployed executive record.', benefit: 'Gets qualified staff into operation faster than an in-house hire.' },
      { id: 'monitoring', label: 'Field Monitoring', heading: 'Tracking Conduct After Deployment', overview: 'Deployed staff performance and conduct are monitored ongoing.', activities: ['Geolocated check-in monitoring', 'Performance tracking'], documents: [], risks: ['Unmonitored staff conduct post-deployment'], deliverable: 'Field monitoring log.', benefit: 'Maintains accountability throughout the deployment period.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Client Workforce Visibility', overview: 'Consolidated reporting on staffing and field performance.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across deployed staff'], deliverable: 'Workforce status report.', benefit: 'Gives the client a clear view of deployed workforce quality.' }
    ],

    challengesHeading: 'Enterprise Field Workforce Risks',
    challenges: [
      { title: 'Recruitment Delays', desc: 'Finding trained, DRA-certified field staff causes operational vacancies.', warningBadge: 'Staffing Risk', impact: 'Field capacity gaps delay collections or verification execution.' },
      { title: 'Background Check Gaps', desc: 'Unmonitored or unverified field agents create legal exposure.', warningBadge: 'Vetting Risk', impact: 'Institutions inherit legal risk from inadequately screened staff.' },
      { title: 'Inconsistent Training', desc: 'Without standardized DRA training, field conduct quality varies.', warningBadge: 'Compliance Risk', impact: 'Inconsistent field conduct creates uneven regulatory exposure.' },
      { title: 'Coverage Gaps', desc: 'Staff vacancies leave capacity short exactly when volume is highest.', warningBadge: 'Capacity Risk', impact: 'Recovery or verification volume isn’t matched by available staff.' },
      { title: 'Unmonitored Field Conduct', desc: 'Deployed staff without ongoing monitoring can drift from expected conduct standards.', warningBadge: 'Oversight Risk', impact: 'Conduct issues go undetected without active monitoring.' },
      { title: 'Deployment Mismatch', desc: 'Staff deployed without role-specific orientation may not meet the client’s operational expectations.', warningBadge: 'Fit Risk', impact: 'Deployment doesn’t translate into the expected operational improvement.' }
    ],

    processFlow: {
      title: 'Enterprise Field Workforce Deployment Lifecycle',
      desc: 'A structured operating model that moves a candidate from sourcing to monitored field deployment.',
      steps: [
        { step: '01', title: 'Sourcing & Screening', desc: 'Candidates are sourced and pre-screened.', outcome: 'A qualified candidate pipeline ready for deeper vetting.' },
        { step: '02', title: 'Background Verification', desc: 'Police and address checks are completed for every candidate.', outcome: 'A verified, low-risk candidate pool.' },
        { step: '03', title: 'DRA Training', desc: 'Candidates complete mandatory compliance certification.', outcome: 'A field-ready, certified workforce.' },
        { step: '04', title: 'Deployment', desc: 'Staff are placed into client branch operations.', outcome: 'Closed staffing gaps without an in-house recruitment cycle.' },
        { step: '05', title: 'Field Monitoring', desc: 'Deployed staff conduct and performance are tracked ongoing.', outcome: 'Sustained accountability throughout the deployment.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Faster Staffing Turnaround', desc: 'Pre-vetted, pre-trained staff compress deployment timelines significantly.', value: 'Staffing gaps closed in days rather than weeks.' },
      { title: 'Reduced Legal Exposure', desc: 'Documented background verification protects the client from unvetted staff risk.', value: 'Lower legal and reputational risk tied to field personnel.' },
      { title: 'Consistent Compliance Training', desc: 'Standardized DRA certification ensures every deployed staff member meets requirements.', value: 'Uniform compliance standards across the deployed workforce.' },
      { title: 'Sustained Field Capacity', desc: 'A ready talent pipeline reduces the impact of vacancies on operational coverage.', value: 'Less disruption to collections or verification volume from staffing gaps.' },
      { title: 'Ongoing Accountability', desc: 'Field monitoring maintains conduct standards after deployment, not just before.', value: 'Conduct issues caught and addressed during deployment, not after the fact.' },
      { title: 'Clear Workforce Visibility', desc: 'Structured reporting gives the client a real-time view of deployed staff quality.', value: 'Less manual follow-up to assess workforce performance.' }
    ],

    faqs: [
      { q: 'Are all deployed staff background checked?', a: 'Every staff member completes address verification, reference checks, and police record verification before deployment.' },
      { q: 'How quickly can staff be deployed once a request comes in?', a: 'Because candidates are pre-screened and DRA-certified ahead of demand, deployment timelines are significantly shorter than an in-house recruitment cycle — specific timelines are confirmed based on the role and location.' }
    ],

    cta: {
      heading: 'Deploy Trained Field Talent Faster',
      subheading: 'Request a field workforce deployment walkthrough for your collections or verification operations.',
      buttonText: 'Request Empanelment Proposal',
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
