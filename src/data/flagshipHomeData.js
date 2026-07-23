// Content for the v6 flagship homepage sections (src/sections/*Flagship*, MetricsSection,
// OperatingModelSection, CapabilitiesRadialSection, RecoveryOsArchitectureSection,
// OutcomesSection, ComplianceScanSection, FaqSection). Icon fields are lucide-react
// component names, resolved via an iconMap in the consuming component.

export const heroServiceCards = [
  // Top-right — Collections Management
  { icon: 'TrendingUp', name: 'Collections', name2: 'Management', style: { right: '4%', top: '4%' }, float: 'f1', dur: 4.4, depth: 1.4 },
  // Left — CPV & Field Verifications
  { icon: 'Search', name: 'CPV & Field', name2: 'Verifications', style: { left: '4%', top: '20%' }, float: 'f2', dur: 5.1, depth: 2 },
  // Bottom-left — Skip Tracing
  { icon: 'UserSearch', name: 'Skip Tracing &', name2: 'Investigations', style: { left: '4%', bottom: '18%' }, float: 'f3', dur: 4.7, depth: 1.7 },
  // Right-center — Legal & SARFAESI
  { icon: 'Shield', name: 'Legal &', name2: 'SARFAESI', style: { right: '8%', top: '36%' }, float: 'f4', dur: 4.9, depth: 1.5 },
  // Bottom-right — Asset Recovery
  { icon: 'Warehouse', name: 'Asset Recovery &', name2: 'Auction Services', style: { right: '8%', bottom: '14%' }, float: 'f5', dur: 4.3, depth: 1.3 },
];

export const metrics = [
  { idx: '01', value: 25, suffix: '+ YRS', label: 'Continuous Operations', desc: 'Since 2000 — through every credit cycle.' },
  { idx: '02', value: 19, suffix: '', label: 'Branch Network', desc: 'Under direct management across South India.' },
  { idx: '03', value: 1500, suffix: '+', label: 'Field Workforce', desc: 'IIBF DRA-certified & continuously audited.' },
  { idx: '04', value: 5, suffix: '', label: 'States Covered', desc: 'Tamil Nadu, Karnataka, Kerala, AP & Telangana.' },
  { idx: '05', value: 1, suffix: 'M+', label: 'Accounts Managed', desc: 'Resolved and managed across retail loan classes.' },
  { idx: '06', value: 100, suffix: '+', label: 'Institutional Partners', desc: 'Banks, NBFCs, ARCs & HFCs.' },
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
    desc: 'A managed, trained and continuously audited field network — GPS-tracked doorstep operations across 19 branches.',
    stats: [{ v: '1,500+', k: 'PERSONNEL' }, { v: 'GPS', k: 'TRACKED VISITS' }],
    list: ['Background-verified, IIBF DRA-certified officers', 'Live geo-tagged field activity', 'Branch-level supervision & QA'],
  },
  {
    icon: 'Landmark', tag: 'ENFORCEMENT', title: 'Legal Enforcement',
    desc: 'End-to-end litigation, notices and recovery suits managed by a dedicated legal coordination desk.',
    stats: [{ v: '5', k: 'STATES' }, { v: 'Panel', k: 'ADVOCATE NETWORK' }],
    list: ['Recovery suits & demand notices', 'Empanelled advocate coordination', 'Case status tracking for lenders'],
  },
  {
    icon: 'Gavel', tag: 'ENFORCEMENT', title: 'SARFAESI Execution',
    desc: 'Sec 13(2)/13(4) notices, possession and auction support within statutory timelines.',
    stats: [{ v: '100%', k: 'STATUTORY' }, { v: 'Sec 13/14', k: 'END TO END' }],
    list: ['Demand & possession notices', 'Physical & symbolic possession', 'Auction & sale support'],
  },
  {
    icon: 'Search', tag: 'INTELLIGENCE', title: 'Verification & Skip-tracing',
    desc: 'Address, asset and identity verification with multi-source skip-tracing to re-establish contact.',
    stats: [{ v: 'Pre & Post', k: 'DISBURSAL' }, { v: 'Multi-source', k: 'SKIP TRACE' }],
    list: ['Field & digital address verification', 'Asset condition reporting', 'Multi-source skip-trace'],
  },
  {
    icon: 'LineChart', tag: 'INTELLIGENCE', title: 'Portfolio Analytics',
    desc: "Segmentation, propensity scoring and recovery forecasting tuned to each lender's book.",
    stats: [{ v: 'Propensity', k: 'SCORING' }, { v: 'Book-level', k: 'FORECASTS' }],
    list: ['Risk & propensity segmentation', 'Book-level recovery forecasts', 'Effort prioritisation models'],
  },
  {
    icon: 'ShieldCheck', tag: 'GOVERNANCE', title: 'Compliance & Audit',
    desc: 'RBI code-of-conduct adherence with complete, defensible audit trails on every action.',
    stats: [{ v: '100%', k: 'CALL RECORDING' }, { v: 'ISO 27001', k: 'CERTIFIED' }],
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

// Anonymized, qualitative engagement snapshots. Deliberately number-free:
// no verified outcome KPIs exist in the approved knowledge base yet.
// When management supplies real, verified figures (case-studies data
// collection in progress), upgrade these in place.
export const outcomes = [
  {
    tag: 'Banking · Portfolio Recovery', head: 'A stalled book, restructured',
    title: 'Banking · Portfolio Recovery Program',
    headline: 'A large overdue portfolio brought under one accountable operating model.',
    challenge: 'A large overdue portfolio required structured recovery coordination across field teams, legal partners and borrower communication channels.',
    approach: 'Deployed a recovery operating model with verification checks, collection sequencing, escalation control and documentation discipline.',
    result: 'Improved recovery visibility, faster escalation and stronger coordination between field operations and legal stakeholders.',
  },
  {
    tag: 'SARFAESI · Enforcement', head: 'Enforcement, coordinated',
    title: 'SARFAESI · Enforcement Coordination',
    headline: 'Secured-asset enforcement executed inside the statutory framework.',
    challenge: 'Secured asset recovery required careful coordination between possession support, documentation, legal teams and institutional stakeholders.',
    approach: 'Created a controlled workflow for asset readiness, legal alignment, stakeholder updates and recovery follow-through.',
    result: 'Structured enforcement support with improved documentation control and operational transparency.',
  },
  {
    tag: 'Verification · Fraud Control', head: 'Leakage, controlled',
    title: 'Verification · Fraud Control Program',
    headline: 'Stronger validation to cut misrepresentation and portfolio leakage.',
    challenge: 'A lender needed stronger pre-disbursal and post-disbursal validation to reduce misrepresentation and portfolio leakage.',
    approach: 'Supported field verification, document validation, address checks, business authenticity checks and risk signal reporting.',
    result: 'Better lending decision support and stronger visibility into borrower and asset-level risk.',
  },
];

export const complianceRows = [
  { title: 'RBI Fair Practices adherence', desc: 'Every borrower interaction follows mandated conduct, timing and disclosure rules.', reg: 'RBI/FPC' },
  { title: 'Trained & certified field officers', desc: 'Background-verified, IIBF DRA-certified officers under continuous supervision.', reg: 'DRA CERT.' },
  { title: '100% call recording & QA audit', desc: 'Every outbound collections call recorded, with transcripts audited for script compliance.', reg: 'CALL QA' },
  { title: 'Immutable audit trails', desc: 'Time-stamped, geo-tagged record of every contact, notice and action taken.', reg: 'AUDIT' },
  { title: 'ISO/IEC 27001 certified information security', desc: 'Certified practices governing borrower-data custody, encryption and access control.', reg: 'ISO 27001' },
  { title: 'SARFAESI statutory compliance', desc: "Enforcement executed strictly within the Act's procedural framework.", reg: 'SARFAESI' },
  { title: 'Grievance & escalation framework', desc: 'Defined borrower grievance channels with lender-visible resolution tracking.', reg: 'GRIEVANCE' },
];

export const flagshipFaqs = [
  { q: 'How quickly can you onboard a new portfolio?', a: 'Onboarding timelines depend on data readiness and geography — portfolios move from handover to live field activity quickly, and pilot books move fastest. Our regional branch grid means field teams are already positioned near your borrowers.' },
  { q: 'How do you ensure regulatory and conduct compliance?', a: 'Every officer is background-verified and IIBF DRA-certified, 100% of collections calls are recorded and QA-audited, every field interaction is logged with time and GPS location, and all activity follows RBI Fair Practices — producing a complete, regulator-ready audit trail.' },
  { q: 'What visibility do we get into ongoing recovery?', a: 'Daily status reporting covering allocation, field activity, resolution and recovery — down to the account — plus scheduled MIS packs aligned to your review cadence.' },
  { q: 'Do you handle both secured and unsecured portfolios?', a: 'Yes. Unsecured retail collections through to secured enforcement and SARFAESI execution, across the full delinquency curve, under one accountable operating model.' },
  { q: 'What is your commercial and pricing model?', a: 'We operate on structured success-fee percentages tailored to portfolio age, security type, bucket status, and geographic density. For legal support and SARFAESI mandates, we work on standardized milestones/flat fee-per-stage agreements.' },
  { q: 'How do you guarantee customer data protection and information security?', a: 'We adhere strictly to ISO/IEC 27001 standard practices. All customer data resides on secured servers with role-based access controls, encrypted at rest and in transit, with full audit trail logging and active firewalls/malware monitoring.' },
];

// ─── Home Page Architecture Refinement (production pass) ──────────────────
// Card-based Services Overview — one representative, real route per
// business division (matches src/data/navigation.js mega-menu categories).
export const servicesOverview = [
  { icon: 'Search', name: 'Verification', desc: 'Pre-disbursal CPV, residence, office and document verification.', href: '/services/verification/cpv-services', color: '#0072bc' },
  { icon: 'PhoneCall', name: 'Collections', desc: 'Early-stage through hard and field collections, across every bucket.', href: '/services/collections/field-collections', color: '#0072bc' },
  { icon: 'RefreshCw', name: 'Recovery Operations', desc: 'NPA recovery and portfolio-level resolution strategy.', href: '/services/specialized/npa-recovery', color: '#0072bc' },
  { icon: 'Gavel', name: 'SARFAESI Support', desc: 'End-to-end statutory enforcement, from notice to auction.', href: '/services/legal-recovery/sarfaesi-support', color: '#0072bc' },
  { icon: 'Warehouse', name: 'Asset Recovery', desc: 'Repossession, custody, valuation and auction coordination.', href: '/services/asset-recovery/asset-recovery', color: '#0072bc' },
  { icon: 'FileSearch', name: 'Investigation', desc: 'Skip tracing, due diligence and fraud investigation.', href: '/services/investigation/due-diligence', color: '#0072bc' },
];

// Card-based Industries We Serve — mirrors the top-level entries under the
// "Industries" mega-menu so Home stays in sync with real destination pages.
export const industriesOverview = [
  { icon: 'Landmark', name: 'Banking', desc: 'Retail, SME & secured NPA recovery for nationalised and private banks.', href: '/industries/banking', color: '#0072bc' },
  { icon: 'Building2', name: 'NBFC', desc: 'High-volume collections and portfolio NPA resolution for NBFCs.', href: '/industries/nbfc', color: '#0072bc' },
  { icon: 'Home', name: 'Housing Finance', desc: 'SARFAESI enforcement and mortgage recovery for HFCs.', href: '/industries/housing-finance', color: '#0072bc' },
  { icon: 'Users', name: 'Microfinance', desc: 'Field collections and early-bucket resolution for MFI portfolios.', href: '/industries/microfinance', color: '#0072bc' },
  { icon: 'Smartphone', name: 'Fintech', desc: 'Tele and field recovery for digital lending books.', href: '/industries/fintech', color: '#0072bc' },
  { icon: 'Layers', name: 'Asset Reconstruction', desc: 'Distressed asset resolution and enforcement support for ARCs.', href: '/industries/arc', color: '#0072bc' },
  { icon: 'ShieldCheck', name: 'Insurance', desc: 'Premium recovery and fraudulent claim investigation support.', href: '/industries/insurance', color: '#0072bc' },
  { icon: 'Briefcase', name: 'Commercial Lending', desc: 'Business loan recovery, legal support and skip-tracing services.', href: '/industries/commercial-lending', color: '#0072bc' },
];

// "Why SM Associates" — qualitative differentiation only; the numbers
// behind these points already live in the Metrics section above, so this
// section argues the *case*, not the count.
// Three cards only, deliberately: "Operational Scale" is already proven by
// the Coverage map + Metrics sections, and "Structured Recovery Operations"
// is the entire Operating Model section — repeating them here diluted the
// section. The full five-point version lives on the About page.
export const whyUsPoints = [
  { icon: 'History', title: 'Enterprise Experience', desc: 'Two and a half decades operating through multiple credit cycles — not a vendor new to the discipline of recovery.', color: '#0072bc' },
  { icon: 'ShieldCheck', title: 'Governance-Driven Delivery', desc: 'Every engagement runs on documented conduct, recorded calls and an audit trail built for regulator scrutiny.', color: '#0072bc' },
  { icon: 'Landmark', title: 'Banking Domain Expertise', desc: 'Built specifically around how banks, NBFCs and HFCs actually manage stressed portfolios.', color: '#0072bc' },
];
