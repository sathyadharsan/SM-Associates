// Centralized careers dataset for SM Associates Recovery Operations
// Clean single-card roles per client directive: Auditors, Telecaller, Field Officers, Assistant Manager, Data Analyst, IT Assistant, HR.

export const careerDepartments = [
  { id: 'all', label: 'All Roles' },
  { id: 'telecalling', label: 'Telecaller' },
  { id: 'field', label: 'Field Officers' },
  { id: 'audit', label: 'Auditors' },
  { id: 'management', label: 'Assistant Manager' },
  { id: 'data-it', label: 'Data & IT' },
  { id: 'hr', label: 'HR' }
];

export const careerPositionsData = [
  // 1. TELECALLER
  {
    id: 'job-telecaller',
    title: 'Telecaller',
    department: 'telecalling',
    departmentLabel: 'Telecalling',
    location: 'Chennai HQ',
    type: 'Full-time',
    positionsCount: 15,
    experience: '0 - 2 Years',
    postedDate: '05 Aug 2026',
    shortDesc: 'Conduct structured outbound tele-outreach for early & overdue loan buckets, maintaining strict RBI Fair Practices Code compliance.',
    aboutRole: 'As a Telecaller at SM Associates, you will interact with borrowers across banking portfolios to facilitate payment resolution schedules. You will operate within our automated dialer center with full compliance tracking.',
    responsibilities: [
      'Manage outbound and inbound portfolio calling loops for overdue accounts.',
      'Communicate clearly with borrowers to explain payment schedules and resolution options.',
      'Record accurate conversation logs, promises to pay (PTP), and payment receipts in the system.',
      'Adhere 100% to RBI Fair Practices calling hours (08:00 AM to 07:00 PM) and code of conduct.',
      'Escalate non-responsive accounts to field operations and supervisor teams.'
    ],
    requirements: [
      'Higher Secondary (10+2) or Any Graduate / Diploma.',
      'Fluency in Tamil and basic English; knowledge of Telugu, Kannada, or Hindi is a plus.',
      'Strong communication, active listening, and negotiation skills.',
      'Prior experience in call centers or customer support preferred (Freshers welcome).',
      'Willingness to complete IIBF DRA (Debt Recovery Agent) certification sponsored by SM Associates.'
    ],
    whyJoinUs: [
      'Competitive fixed salary + attractive monthly recovery performance incentives.',
      'Full company sponsorship for IIBF DRA Certification.',
      'Direct career progression path to Team Lead and Operations Supervisor.'
    ]
  },

  // 2. FIELD OFFICERS
  {
    id: 'job-field-officer',
    title: 'Field Officer',
    department: 'field',
    departmentLabel: 'Field Operations',
    location: 'Pan Tamil Nadu & Regional Hubs',
    type: 'Full-time',
    positionsCount: 25,
    experience: '0 - 3 Years',
    postedDate: '05 Aug 2026',
    shortDesc: 'Execute geotagged field visits, borrower tracing, address verification, and resolution discussions across assigned districts.',
    aboutRole: 'Field Officers represent SM Associates on the ground across Tamil Nadu and South India. You will conduct professional in-person visits to borrower locations to facilitate direct payment resolutions for partner banks.',
    responsibilities: [
      'Conduct scheduled geotagged field visits to assigned overdue account locations.',
      'Present formal bank authorization and maintain professional decorum during visits.',
      'Validate borrower residence, business status, and contact details.',
      'Facilitate direct bank payment link generation or cheque collection as per bank norms.',
      'Submit daily geotagged visit reports with photographic evidence through our field app.'
    ],
    requirements: [
      '10+2, Higher Secondary, or Any Degree.',
      'Must possess a valid Two-Wheeler Driving License and personal vehicle.',
      'Mandatory IIBF DRA Certification (or willingness to obtain certification upon joining).',
      'Local geographic knowledge of assigned district/branch region.',
      'High integrity, field discipline, and strong interpersonal skills.'
    ],
    whyJoinUs: [
      'Travel & fuel allowances + high recovery commission structure.',
      'Geotagged mobile app tools to streamline field route planning.'
    ]
  },

  // 3. AUDITORS
  {
    id: 'job-auditor',
    title: 'Auditor',
    department: 'audit',
    departmentLabel: 'Audit & Compliance',
    location: 'Chennai HQ & Regional Branches',
    type: 'Full-time',
    positionsCount: 5,
    experience: '2 - 5 Years',
    postedDate: '04 Aug 2026',
    shortDesc: 'Conduct internal quality audits, RBI compliance checks, receipt book verification, and operational risk audits.',
    aboutRole: 'Auditors maintain regulatory and operational excellence across our 19 regional branches. You will audit field visit logs, dialer voice recordings, receipt reconciliations, and compliance adherence for partner bank audits.',
    responsibilities: [
      'Audit field officer visit reports, geotags, and payment receipt book registers.',
      'Conduct sample call quality listening to enforce RBI Fair Practices calling hours and tone.',
      'Perform surprise branch audits across regional offices for cash & document safety.',
      'Verify IIBF DRA certificate validity for all field and telecalling staff.',
      'Prepare audit findings reports for executive management and bank auditors.'
    ],
    requirements: [
      'B.Com, M.Com, CA Inter, MBA Finance, or equivalent degree.',
      '2+ years experience in internal audit, compliance testing, or banking operations audit.',
      'Keen eye for detail, risk detection, and audit report preparation skills.'
    ],
    whyJoinUs: [
      'Critical governance role safeguarding corporate integrity.',
      'Direct reporting to executive leadership and senior bank auditors.'
    ]
  },

  // 4. ASSISTANT MANAGER
  {
    id: 'job-assistant-manager',
    title: 'Assistant Manager',
    department: 'management',
    departmentLabel: 'Assistant Manager',
    location: 'Chennai HQ & Regional Offices',
    type: 'Full-time',
    positionsCount: 4,
    experience: '3 - 6 Years',
    postedDate: '03 Aug 2026',
    shortDesc: 'Assist operational leadership, supervise daily field-telecom execution, monitor team KPIs, and drive client SLA delivery.',
    aboutRole: 'The Assistant Manager supports operations management across banking portfolios. You will oversee daily target allocations, field officer dispatch, dialer productivity, and client bank SLA compliance.',
    responsibilities: [
      'Supervise daily team allocations, attendance, and field-telecom execution workflows.',
      'Monitor daily resolution rates, promise-to-pay (PTP) conversions, and bucket movements.',
      'Liaise between branch teams, central management, and bank recovery officers.',
      'Review escalation cases and provide operational guidance for difficult accounts.',
      'Assist in preparing weekly client review reports and performance presentations.'
    ],
    requirements: [
      'Graduate or Post Graduate in Any Discipline (MBA / BBA preferred).',
      '3+ years experience in team handling, operations supervision, or recovery management.',
      'Strong leadership, problem-solving, and MS Excel reporting skills.'
    ],
    whyJoinUs: [
      'Core management role driving key banking partner relationships.',
      'Fast-track promotion path to Branch Operations Manager.'
    ]
  },

  // 5. DATA ANALYST
  {
    id: 'job-data-analyst',
    title: 'Data Analyst',
    department: 'data-it',
    departmentLabel: 'Data & IT',
    location: 'Chennai HQ',
    type: 'Full-time',
    positionsCount: 3,
    experience: '1 - 4 Years',
    postedDate: '02 Aug 2026',
    shortDesc: 'Analyze recovery portfolio trends, bucket movement curves, dialer performance metrics, and predictive recovery reports.',
    aboutRole: 'Data Analysts turn portfolio data into actionable recovery intelligence. You will analyze large banking datasets, build recovery forecasting models, track roll rates, and optimize portfolio allocation strategies.',
    responsibilities: [
      'Process and ingest client banking portfolio data files across product categories.',
      'Build Excel dashboards, SQL queries, and BI reports tracking recovery yields and DPD bucket movements.',
      'Analyze dialer call connectivity, field visit conversion rates, and agent productivity.',
      'Identify high-probability recovery accounts using historical performance patterns.',
      'Generate weekly/monthly MIS reports for bank client presentations.'
    ],
    requirements: [
      'Degree in Computer Science, Statistics, Mathematics, Economics, or Business Analytics.',
      'Proficiency in Advanced MS Excel (VLOOKUP, Pivot Tables, Macros), SQL, and Power BI / Tableau.',
      'Strong analytical mindset, data accuracy, and quantitative problem-solving ability.'
    ],
    whyJoinUs: [
      'High-impact analytics role directly influencing portfolio strategy.',
      'Exposure to multi-crore banking datasets and modern analytics tools.'
    ]
  },

  // 6. IT ASSISTANT
  {
    id: 'job-it-assistant',
    title: 'IT Assistant',
    department: 'data-it',
    departmentLabel: 'Data & IT',
    location: 'Chennai HQ',
    type: 'Full-time',
    positionsCount: 2,
    experience: '1 - 3 Years',
    postedDate: '01 Aug 2026',
    shortDesc: 'Manage branch IT infrastructure, dialer systems, SFTP data feeds, hardware maintenance, and tech support.',
    aboutRole: 'The IT Assistant ensures seamless technological uptime across our central dialer center and 19 regional branch offices. You will manage hardware, local networks, user credentials, and data security protocols.',
    responsibilities: [
      'Maintain office computers, VoIP call center headsets, printers, and network routers.',
      'Manage user credentials, dialer agent logins, and email accounts.',
      'Assist in secure SFTP client data file transfers adhering to ISO 27001 data security norms.',
      'Troubleshoot hardware, software, and LAN/WAN connectivity issues for staff.',
      'Maintain inventory logs of IT hardware, software licenses, and CCTV systems.'
    ],
    requirements: [
      'Diploma or B.Sc / BCA in Information Technology, Hardware & Networking, or Computer Applications.',
      '1+ years experience in desktop support, IT troubleshooting, or network administration.',
      'Basic knowledge of Windows Server, VoIP/SIP dialers, and network security.'
    ],
    whyJoinUs: [
      'Stable IT support role within a tech-enabled enterprise.',
      'Hands-on experience with enterprise dialers and data security systems.'
    ]
  },

  // 7. HR
  {
    id: 'job-hr',
    title: 'HR (Human Resources)',
    department: 'hr',
    departmentLabel: 'HR',
    location: 'Chennai HQ',
    type: 'Full-time',
    positionsCount: 4,
    experience: '1 - 4 Years',
    postedDate: '01 Aug 2026',
    shortDesc: 'Handle end-to-end recruitment, background verification, onboarding, attendance, and DRA training enrollment.',
    aboutRole: 'As an HR Officer at SM Associates, you will drive recruitment, candidate screening, background verification, employee onboarding, and statutory attendance tracking across our regional branch network.',
    responsibilities: [
      'Source candidate profiles for Telecaller, Field Officer, and administrative positions.',
      'Conduct initial HR screening interviews and coordinate branch manager interviews.',
      'Manage background verification (BGV) checks including address, document, and police checks.',
      'Coordinate enrollment of new joiners into the IIBF DRA Training Academy.',
      'Maintain employee onboarding databases, attendance records, and leave management.'
    ],
    requirements: [
      'MBA in HR, MSW, or Any Graduate with HR operational experience.',
      '1+ years in recruitment, volume hiring, or HR administrative operations.',
      'Good communication skills in Tamil and English; strong organizational ability.'
    ],
    whyJoinUs: [
      'Core HR role supporting a 1,500+ strong workforce across South India.',
      'Hiring incentives based on recruitment and retention milestones.'
    ]
  }
];

export const careerCultureHighlights = [
  {
    icon: 'ShieldCheck',
    title: '100% RBI Regulatory Conduct',
    description: 'We strictly enforce calling hour boundaries, fair practices conduct, and zero-harassment policies across all operations.'
  },
  {
    icon: 'Award',
    title: 'DRA Training Academy',
    description: 'Every field and tele-recovery officer undergoes structured IIBF Debt Recovery Agent certification training before client dispatch.'
  },
  {
    icon: 'TrendingUp',
    title: 'Unmatched Career Mobility',
    description: 'Performers advance from field/telecom executives to Assistant Managers, Branch Managers, and Operations Leads.'
  },
  {
    icon: 'Users',
    title: '1,500+ Professional Network',
    description: 'Work alongside experienced CAs, Advocates, Ex-Bankers, Auditors, Analysts, and risk experts across 19 regional offices.'
  }
];
