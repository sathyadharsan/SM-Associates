// Content for the v6 flagship homepage sections (src/sections/*Flagship*, MetricsSection,
// OperatingModelSection, CapabilitiesRadialSection, RecoveryOsArchitectureSection,
// OutcomesSection, ComplianceScanSection, FaqSection). Icon fields are lucide-react
// component names, resolved via an iconMap in the consuming component.

export const heroServiceCards = [
  { icon: 'TrendingUp', name: 'Collections', name2: 'Management', style: { right: 0, top: '5%' }, float: 'f1', dur: 4.4, depth: 1.4 },
  { icon: 'Search', name: 'CPV & Field', name2: 'Verifications', style: { left: 0, top: '22%' }, float: 'f2', dur: 5.1, depth: 2 },
  { icon: 'UserSearch', name: 'Skip Tracing &', name2: 'Investigations', style: { left: '1%', bottom: '20%' }, float: 'f3', dur: 4.7, depth: 1.7 },
  { icon: 'Shield', name: 'Legal &', name2: 'SARFAESI', style: { right: 0, top: '38%' }, float: 'f4', dur: 4.9, depth: 1.5 },
  { icon: 'Warehouse', name: 'Asset Recovery &', name2: 'Auction Services', style: { right: '1%', bottom: '16%' }, float: 'f5', dur: 4.3, depth: 1.3 },
];

export const metrics = [
  { idx: '01', value: 22, suffix: 'YRS', label: 'Continuous Operations', desc: 'Since 2003 — through every credit cycle.' },
  { idx: '02', value: 38, suffix: '', label: 'Branch Operations', desc: 'Under direct management across India.' },
  { idx: '03', value: 1200, suffix: '+', label: 'Field Officers', desc: 'Trained, certified & continuously audited.' },
  { idx: '04', value: 4800, suffix: ' Cr+', prefix: '₹', label: 'Cumulative Recovery', desc: 'Value delivered to lending partners.' },
  { idx: '05', value: 73, suffix: '%', label: 'Resolution Rate', desc: 'Average across active portfolio books.' },
  { idx: '06', value: 200, suffix: '+', label: 'Institutional Partners', desc: 'Banks, NBFCs, ARCs & HFCs.' },
];

export const operatingModelStages = [
  { no: '01', title: 'Portfolio Allocation', desc: 'Books ingested, segmented by risk and geography, routed to the right branch and officer.', tags: ['Risk segmentation', 'Geo-routing', 'SLA mapping'], visual: 'alloc', tag: 'ROUTING' },
  { no: '02', title: 'Field Verification', desc: 'On-ground officers establish ground truth — address, asset condition, borrower status.', tags: ['Address check', 'Asset condition', 'Skip tracing'], visual: 'verify', tag: 'GROUND TRUTH' },
  { no: '03', title: 'Borrower Engagement', desc: 'Code-of-conduct-compliant outreach — every contact logged, time-stamped and auditable.', tags: ['Compliant outreach', 'Settlement', 'Logged contact'], visual: 'engage', tag: 'CONTACT' },
  { no: '04', title: 'Legal & SARFAESI', desc: "Where resolution stalls — notices, possession and SARFAESI execution, managed end to end.", tags: ['Sec.13(2)/13(4)', 'Possession', 'Auction support'], visual: 'legal', tag: 'ENFORCEMENT' },
  { no: '05', title: 'Resolution & Recovery', desc: 'Payments, settlements and asset realisation processed, reconciled and credited back.', tags: ['Reconciliation', 'Settlement', 'Realisation'], visual: 'resolve', tag: 'REALISED' },
  { no: '06', title: 'Reporting & Audit', desc: 'Real-time dashboards and immutable audit trails give the institution full regulatory visibility.', tags: ['Live dashboards', 'Audit trail', 'Compliance pack'], visual: 'report', tag: 'VISIBILITY' },
];

export const capabilityNodes = [
  {
    icon: 'Users', tag: 'FIELD OPS', title: 'Field Recovery Force',
    desc: 'A managed, trained and continuously audited field network — 1,200+ officers, 8,640 visits per day.',
    stats: [{ v: '1,200+', k: 'OFFICERS' }, { v: '8,640', k: 'VISITS/DAY' }],
    list: ['Background-verified, DRA-certified officers', 'Live geo-tagged field activity', 'Branch-level supervision & QA'],
  },
  {
    icon: 'Landmark', tag: 'ENFORCEMENT', title: 'Legal Enforcement',
    desc: 'End-to-end litigation, notices and recovery suits managed by an in-house legal operations team.',
    stats: [{ v: '62K+', k: 'ACTIONS' }, { v: '9', k: 'STATES' }],
    list: ['Recovery suits & demand notices', 'Empanelled advocate coordination', 'Case status tracking for lenders'],
  },
  {
    icon: 'Gavel', tag: 'ENFORCEMENT', title: 'SARFAESI Execution',
    desc: 'Sec 13(2)/13(4) notices, possession and auction support within statutory timelines.',
    stats: [{ v: '41%', k: 'FASTER' }, { v: '100%', k: 'STATUTORY' }],
    list: ['Demand & possession notices', 'Physical & symbolic possession', 'Auction & sale support'],
  },
  {
    icon: 'Search', tag: 'INTELLIGENCE', title: 'Verification & Skip-tracing',
    desc: 'Address, asset and identity verification with advanced skip-tracing to re-establish contact.',
    stats: [{ v: '94%', k: 'TRACE SUCCESS' }, { v: '48h', k: 'TURNAROUND' }],
    list: ['Field & digital address verification', 'Asset condition reporting', 'Multi-source skip-trace'],
  },
  {
    icon: 'LineChart', tag: 'INTELLIGENCE', title: 'Portfolio Analytics',
    desc: "Segmentation, propensity scoring and recovery forecasting tuned to each lender's book.",
    stats: [{ v: '73%', k: 'RESOLUTION' }, { v: 'Real-time', k: 'FORECASTING' }],
    list: ['Risk & propensity segmentation', 'Book-level recovery forecasts', 'Effort prioritisation models'],
  },
  {
    icon: 'ShieldCheck', tag: 'GOVERNANCE', title: 'Compliance & Audit',
    desc: 'RBI code-of-conduct adherence with complete, defensible audit trails on every action.',
    stats: [{ v: '99.2%', k: 'AUDIT CLEAN' }, { v: '100%', k: 'LOGGED' }],
    list: ['RBI Fair Practices alignment', 'Immutable, time-stamped trails', 'Grievance & escalation framework'],
  },
];

export const recoveryOsLayers = [
  {
    no: 'LAYER 01', title: 'Data & Intake', desc: 'Every book, contact and field action, unified.',
    modules: [
      { icon: 'List', name: 'Portfolio Ingestion', sub: 'Any format, any lender' },
      { icon: 'Radar', name: 'Field Telemetry', sub: 'Geo-tagged actions' },
      { icon: 'Database', name: 'Bureau & Skip Data', sub: 'Enriched profiles' },
    ],
  },
  {
    no: 'LAYER 02', title: 'Intelligence', desc: 'Models that prioritise effort where it pays.',
    modules: [
      { icon: 'Lightbulb', name: 'Propensity Scoring', sub: 'Who pays, and when' },
      { icon: 'LineChart', name: 'Recovery Forecasting', sub: 'Book-level outlook' },
      { icon: 'Shield', name: 'Risk & Conduct Flags', sub: 'Real-time guardrails' },
    ],
  },
  {
    no: 'LAYER 03', title: 'Execution', desc: 'Action in the field, accountability at HQ.',
    modules: [
      { icon: 'Smartphone', name: 'Officer App', sub: 'Guided workflows' },
      { icon: 'LayoutDashboard', name: 'Lender Dashboard', sub: 'Live portfolio view' },
      { icon: 'ShieldCheck', name: 'Audit & Compliance', sub: 'Immutable trail' },
    ],
  },
];

export const outcomes = [
  {
    tag: 'Mid-size NBFC · Unsecured', head: 'A stalled book, reworked',
    title: 'Mid-size NBFC · Unsecured lending',
    headline: "A stalled book turned into the quarter's biggest recovery.",
    big: { n: 68, suffix: '%' },
    desc: 'Resolution rate on a stressed unsecured book within two recovery cycles.',
    barValue: 68,
    sub: [{ v: '₹612 Cr', k: 'BOOK SIZE' }, { v: '2 cycles', k: 'TIMEFRAME' }],
    quote: "They didn't just chase accounts — they restructured how the entire book was worked.",
    who: '— Head of Collections, leading NBFC',
  },
  {
    tag: 'Housing Finance · Secured', head: 'SARFAESI at scale',
    title: 'Housing Finance Company · Secured',
    headline: 'Enforcement executed inside statutory timelines, at scale.',
    big: { n: 41, suffix: '%' },
    desc: "Faster SARFAESI possession vs. the lender's prior panel agencies.",
    barValue: 41,
    sub: [{ v: '2,400+', k: 'ACCOUNTS' }, { v: '9 states', k: 'EXECUTION' }],
    quote: 'SARFAESI became our most predictable lever — coordinated possession across nine states without a compliance slip.',
    who: '— Recovery Head, housing finance lender',
  },
  {
    tag: 'Private Bank · Retail', head: '12 vendors → 1 partner',
    title: 'Private Sector Bank · Retail',
    headline: 'One panel partner replacing twelve fragmented vendors.',
    big: { n: 940, suffix: ' Cr', prefix: '₹' },
    desc: 'Recovered across a multi-state retail portfolio in 18 months.',
    barValue: 86,
    sub: [{ v: '11 states', k: 'FOOTPRINT' }, { v: '99.2%', k: 'AUDIT CLEAN' }],
    quote: 'The recovery lift was real — the governance was the bigger win.',
    who: '— Chief Risk Officer, private sector bank',
  },
];

export const complianceRows = [
  { title: 'RBI Fair Practices adherence', desc: 'Every borrower interaction follows mandated conduct, timing and disclosure rules.', reg: 'RBI/FPC' },
  { title: 'Trained & certified field officers', desc: 'Background-verified, DRA-certified officers under continuous supervision.', reg: 'DRA CERT.' },
  { title: 'Immutable audit trails', desc: 'Time-stamped, geo-tagged record of every contact, notice and action taken.', reg: 'AUDIT' },
  { title: 'Data security & confidentiality', desc: 'Controlled access, encryption and strict borrower-data handling protocols.', reg: 'INFOSEC' },
  { title: 'SARFAESI statutory compliance', desc: "Enforcement executed strictly within the Act's procedural framework.", reg: 'SARFAESI' },
  { title: 'Grievance & escalation framework', desc: 'Defined borrower grievance channels with lender-visible resolution tracking.', reg: 'GRIEVANCE' },
];

export const flagshipFaqs = [
  { q: 'How quickly can you onboard a new portfolio?', a: 'Most portfolios are live in the field within 7–10 working days, depending on data readiness and geography. Pilot books can move faster.' },
  { q: 'How do you ensure regulatory and conduct compliance?', a: 'Every officer is background-verified and conduct-trained, every interaction is logged with time and location, and all activity follows RBI Fair Practices — producing a complete, regulator-ready audit trail.' },
  { q: 'What visibility do we get into ongoing recovery?', a: 'Live dashboards covering allocation status, field activity, resolution and recovery — down to the account — plus scheduled reporting packs aligned to your review cadence.' },
  { q: 'Do you handle both secured and unsecured portfolios?', a: 'Yes. Unsecured retail collections through to secured enforcement and SARFAESI execution, across the full delinquency curve, under one accountable operating model.' },
  { q: 'What is Recovery OS and when is it available?', a: 'Recovery OS is the intelligence layer built on our field operations — propensity scoring, forecasting and live dashboards. Core visibility tooling is in active rollout; advanced AI modules are near-term.' },
];
