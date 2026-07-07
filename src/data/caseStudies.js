// AI-generated case study images — content-matched, no stock photo downloads
import cs001Img from '../assets/case-studies/cs-001-sarfaesi.png';
import cs002Img from '../assets/case-studies/cs-002-security.png';
import cs003Img from '../assets/case-studies/cs-003-npa.png';
import cs004Img from '../assets/case-studies/cs-004-field.png';
import cs005Img from '../assets/case-studies/cs-005-fraud.png';
import cs006Img from '../assets/case-studies/cs-006-credit.png';

// Case study content — the ONLY place this page's copy lives. To publish
// real results later, update metrics[].value / quote / quoteAuthor /
// engagementPeriod here — no component changes needed.
//
// "CLIENT TO PROVIDE" is a literal sentinel value. While a field holds it,
// CaseStudyCard/CaseStudyModal display the matching `example` /
// `engagementPeriodExample` value instead, tagged "Sample data" so visitors
// never mistake it for a real, verified number. quoteIsExample does the same
// for the testimonial block.
//
// TO PUBLISH REAL DATA: replace the sentinel field's value directly (e.g.
// metrics[].value, engagementPeriod, quote/quoteAuthor) and delete the
// matching example/exampleEngagementPeriod/quoteIsExample field — the
// "Sample data" tag disappears automatically once the sentinel is gone.

export const serviceFilters = [
  { id: 'all', label: 'All' },
  { id: 'sarfaesi', label: 'SARFAESI' },
  { id: 'field-collections', label: 'Field Collections' },
  { id: 'security-custodian', label: 'Security & Custodian' },
  { id: 'npa-management', label: 'NPA Management' },
  { id: 'fraud-control', label: 'Fraud Control' },
];

export const caseStudies = [
  {
    id: 'cs-001',
    serviceId: 'sarfaesi',
    serviceLabel: 'SARFAESI Enforcement',
    industry: 'Banking',
    title: 'End-to-End SARFAESI Enforcement Across a Secured Mortgage Portfolio',
    subtitle: 'Section 13(2) Notice to Final Auction — Zero Procedural Challenges',
    challenge: 'A South India-based bank faced a growing pool of secured NPA accounts requiring full statutory enforcement. Their previous vendor had faced procedural objections in multiple accounts, causing costly delays.',
    approach: [
      'Full 13(2) notice service with documented proof of delivery',
      'Physical and symbolic possession coordinated with licensed security personnel',
      'Valuation by empanelled government-approved chartered valuers',
      'Statutory auction with multi-channel advertising for maximum bidder turnout',
      'Complete audit-ready enforcement file for every resolved account',
    ],
    metrics: [
      { label: 'Accounts Resolved', value: 'CLIENT TO PROVIDE', example: '42 accounts' },
      { label: 'Amount Recovered', value: 'CLIENT TO PROVIDE', example: '₹18.6 Cr' },
      { label: 'Avg. Notice to Auction', value: 'CLIENT TO PROVIDE', example: '7.5 months' },
    ],
    quote: 'SM Associates brought discipline and speed to our SARFAESI enforcement pipeline — zero procedural setbacks across the portfolio.',
    quoteAuthor: 'Regional Recovery Head, Partner Bank',
    quoteIsExample: true,
    geographyCovered: 'Tamil Nadu',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Jan 2023 – Dec 2024',
    portfolioType: 'Secured Home Loan / LAP NPAs',
    tag: 'Flagship Service',
    image: cs001Img,
    featured: true,
  },
  {
    id: 'cs-002',
    serviceId: 'security-custodian',
    serviceLabel: 'Security & Custodian Services',
    industry: 'Banking / NBFC',
    title: 'Asset Protection from Possession to Auction — A Capability No Competitor Offers',
    subtitle: 'Ex-Defence Personnel Deployed for Custody of High-Value Repossessed Assets',
    challenge: 'After repossessing secured assets, the client faced deterioration in asset value due to unmanaged custody. A previous engagement had resulted in damage to repossessed vehicles, reducing auction realisation significantly.',
    approach: [
      'Ex-Defence and Paramilitary personnel deployed — briefed on lawful scope before every assignment',
      'Photographic intake condition log for every asset on arrival at the yard',
      'Security-manned yard facilities across SM Associates’ Tamil Nadu network',
      'Periodic written inspection reports submitted to the client',
      'Insurance arrangements coordinated for high-value assets',
      'Unscheduled surprise audits to verify custody protocol compliance',
    ],
    metrics: [
      { label: 'Assets in Custody', value: 'CLIENT TO PROVIDE', example: '310 assets' },
      { label: 'Total Value Protected', value: 'CLIENT TO PROVIDE', example: '₹22 Cr' },
      { label: 'Damage / Theft Incidents', value: 'Zero' },
    ],
    quote: "Since SM Associates took over custody operations, we haven't recorded a single damage or theft claim.",
    quoteAuthor: 'Operations Head, Partner NBFC',
    quoteIsExample: true,
    geographyCovered: 'Tamil Nadu',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Apr 2022 – Present',
    portfolioType: 'Commercial Vehicles / Equipment / Residential Property',
    tag: 'Unique Capability',
    image: cs002Img,
    featured: true,
  },
  {
    id: 'cs-003',
    serviceId: 'npa-management',
    serviceLabel: 'NPA Management — One Window',
    industry: 'Banking / NBFC',
    title: 'From Five Vendors to One — Full-Portfolio NPA Resolution Under a Single Partner',
    subtitle: 'Legal + Valuation + Security + Sale Coordinated from One Desk',
    challenge: 'The client was managing NPA resolution through 5 separate vendors — a legal firm, a valuation company, a repossession agency, a custody provider, and an auctioneer. Coordination delays between vendors were adding months to each resolution timeline.',
    approach: [
      'One dedicated account file owner across all sub-services',
      'Parallel OTS negotiation and SARFAESI enforcement tracks running simultaneously',
      'Legal: 13(2) notices, DRT follow-up, Section 138 warrants',
      'Valuation: government-approved valuers within the statutory timeline',
      'Security: trained personnel for possession and ongoing custody',
      'Sale: full auction management including statutory publication',
      'Single weekly consolidated status report across all tracks',
    ],
    metrics: [
      { label: 'Accounts Resolved', value: 'CLIENT TO PROVIDE', example: '96 accounts' },
      { label: 'Total Recovered', value: 'CLIENT TO PROVIDE', example: '₹31 Cr' },
      { label: 'Vendors Replaced', value: '5 → 1' },
    ],
    quote: 'Consolidating five vendors into one gave us visibility we never had before.',
    quoteAuthor: 'Chief Risk Officer, Partner Bank',
    quoteIsExample: true,
    geographyCovered: 'Tamil Nadu + Karnataka',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Jun 2022 – Ongoing',
    portfolioType: 'Mixed secured portfolio (Home Loan, Business Loan, CV)',
    tag: 'Strategic Engagement',
    image: cs003Img,
    featured: false,
  },
  {
    id: 'cs-004',
    serviceId: 'field-collections',
    serviceLabel: 'Field Collections',
    industry: 'NBFC / Fintech',
    title: 'Multi-Bucket Field Recovery at Scale — Physical Reach for a High-Volume NBFC Book',
    subtitle: 'SMA-1 to NPA Prevention Across 5 Tamil Nadu Cities',
    challenge: 'A high-volume NBFC’s digital outreach (SMS + IVR) was achieving below 40% contact rate on SMA-2 accounts. Accounts were rolling into NPA without resolution because field intervention capacity was insufficient.',
    approach: [
      'Account allocation by bucket and geography — field executives assigned by density and travel efficiency',
      'Daily field visits with same-day disposition logging',
      'Skip tracing activated for untraceable borrowers',
      'Combined tele-calling + field visit approach for SMA-1 accounts',
      'Payment tracking updated into client system daily',
      'Weekly priority-reallocation calls with the client’s Collections Manager',
    ],
    metrics: [
      { label: 'Accounts Worked', value: 'CLIENT TO PROVIDE', example: '3,400 accounts' },
      { label: 'Resolution Rate', value: 'CLIENT TO PROVIDE', example: '68% within 90 days' },
      { label: 'Cities Covered', value: '5 (Tamil Nadu)' },
    ],
    quote: 'Field presence across five cities changed our SMA-2 recovery curve within one quarter.',
    quoteAuthor: 'Collections Head, Partner NBFC',
    quoteIsExample: true,
    geographyCovered: 'Chennai, Coimbatore, Madurai, Salem, Trichy',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Jan 2024 – Dec 2024',
    portfolioType: 'Business Loans + Personal Loans (SMA-1 / SMA-2 buckets)',
    tag: 'High Volume',
    image: cs004Img,
    featured: false,
  },
  {
    id: 'cs-005',
    serviceId: 'fraud-control',
    serviceLabel: 'Fraud Control',
    industry: 'Banking / NBFC',
    title: 'Identifying Fraudulent Loan Applications Before They Become NPAs',
    subtitle: 'Field Investigation Catches What Credit Bureau Checks Miss',
    challenge: 'The client had experienced losses from loan accounts where stated income, property ownership, or business existence had been misrepresented at disbursal. Standard checks had not caught the inconsistencies.',
    approach: [
      'Contact Point Verification (CPV) at borrower address, business address, and references',
      'Income document cross-verification at source — with employer, CA, or income-tax office',
      'Property title and survey number verification at the Register Office for LAP accounts',
      'Liaison with government departments for official record checks',
      'Formal investigation report per account — with evidence and clear verdict',
    ],
    metrics: [
      { label: 'Accounts Investigated', value: 'CLIENT TO PROVIDE', example: '540 accounts' },
      { label: 'Fraud Confirmed', value: 'CLIENT TO PROVIDE', example: '38 accounts (7%)' },
      { label: 'Report Turnaround', value: 'CLIENT TO PROVIDE', example: '5 working days' },
    ],
    quote: 'Their field investigations caught misrepresentations our bureau checks missed entirely.',
    quoteAuthor: 'Credit Risk Manager, Partner Bank',
    quoteIsExample: true,
    geographyCovered: 'Tamil Nadu + Andhra Pradesh',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Mar 2023 – Ongoing',
    portfolioType: 'Business Loans + LAP (Loan Against Property)',
    tag: 'Risk Prevention',
    image: cs005Img,
    featured: false,
  },
  {
    id: 'cs-006',
    serviceId: 'field-collections',
    serviceLabel: 'Credit Card Collections',
    industry: 'Banking / Credit Cards',
    title: 'High-Volume Credit Card Collections Across Multi-Bucket Delinquency Portfolios',
    subtitle: 'Structured Early Delinquency Management Through Tele-Collections, Field Recovery and Portfolio Governance',
    challenge: 'A leading private sector bank experienced increasing delinquency across multiple credit card portfolios. Digital-only outreach was not achieving sufficient customer contact, and accounts continued rolling into higher delinquency buckets. The internal collections team needed additional field capacity, structured follow-up discipline, and stronger operational governance across the 30+, 60+ and 90+ DPD buckets.',
    approach: [
      'Bucket-wise portfolio allocation across 30+, 60+ and 90+ DPD segments, with risk-based prioritization of high-value accounts',
      'Coordinated tele-calling for early-bucket customer contact, escalating to scheduled field visits where digital and voice contact failed',
      'Skip tracing activated for unreachable customers',
      'Payment commitment tracking through to full resolution',
      'Daily disposition reporting per account, with regular client MIS updates across all active buckets',
      'Escalation management for high-risk and disputed accounts',
      'Governance-oriented collection workflow with documented conduct at every touchpoint',
    ],
    metrics: [
      { label: 'Accounts Worked', value: 'CLIENT TO PROVIDE', example: '9,200 accounts' },
      { label: 'Recovery Amount', value: 'CLIENT TO PROVIDE', example: '₹14.3 Cr' },
      { label: 'Resolution Rate', value: 'CLIENT TO PROVIDE', example: '61%' },
      { label: 'Avg. Collection TAT', value: 'CLIENT TO PROVIDE', example: '18 days' },
    ],
    quote: 'Structured bucket-wise governance gave our card portfolio the discipline it needed.',
    quoteAuthor: 'VP Collections, Partner Bank',
    quoteIsExample: true,
    geographyCovered: 'South India',
    engagementPeriod: 'CLIENT TO PROVIDE',
    engagementPeriodExample: 'Jul 2024 – Ongoing',
    portfolioType: 'Credit Card Portfolio (30+ / 60+ / 90+ DPD buckets)',
    tag: 'Multi-Bucket Recovery',
    image: cs006Img,
    featured: false,
  },
];

export const isPlaceholder = (value) => value === 'CLIENT TO PROVIDE';
