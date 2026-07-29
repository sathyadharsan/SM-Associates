// Content for the Services landing page (/services).
//
// CONTENT-INTEGRITY RULES APPLIED HERE:
// • No figure is estimated. Scale metrics (years, branches, field workforce,
//   institutional partners) deliberately live only on the homepage Metrics
//   section — this page must not repeat the home page, so it argues capability
//   and execution instead of restating counts.
// • `futureCapabilities` is a ROADMAP. Those items are under development and
//   are labelled as such at three levels in the UI — they must never read as
//   already deployed.

export const capabilityGroups = [
  {
    id: 'financial',
    icon: 'Landmark',
    title: 'Financial Recovery',
    summary: 'Recovery across the full delinquency curve, from first missed instalment to written-off book.',
    items: ['Loan Recovery', 'EMI Recovery', 'NPA Portfolios', 'Delinquent Accounts'],
  },
  {
    id: 'secured',
    icon: 'Building2',
    title: 'Secured Asset Recovery',
    summary: 'Statutory enforcement against secured collateral, executed inside the SARFAESI timeline.',
    items: ['Residential Properties', 'Commercial Properties', 'Mortgaged Assets', 'SARFAESI Assets'],
  },
  {
    id: 'movable',
    icon: 'Truck',
    title: 'Movable Asset Recovery',
    summary: 'Repossession, custody and realisation for vehicles and heavy equipment.',
    items: ['Vehicles', 'Commercial Vehicles', 'Agricultural Equipment', 'Construction Equipment'],
  },
  {
    id: 'business',
    icon: 'Router',
    title: 'Business Asset Recovery',
    summary: 'Deployed business hardware recovered from merchant and enterprise locations.',
    items: ['POS Machines', 'Routers', 'Network Devices', 'Business Equipment'],
  },
  {
    id: 'portfolio',
    icon: 'Layers',
    title: 'Enterprise Portfolio Recovery',
    summary: 'Whole-book mandates for regulated lenders, run under one accountable operating model.',
    items: ['Banking', 'NBFC', 'Housing Finance', 'Fintech', 'ARC Portfolios'],
  },
];

export const technologyCapabilities = [
  { icon: 'Workflow', title: 'Digital Recovery Workflows', desc: 'Every account moves through a defined, logged sequence — no untracked handoffs between stages.' },
  { icon: 'PieChart', title: 'Portfolio Segmentation', desc: 'Books scored and split by risk, bucket, geography and recovery propensity before allocation.' },
  { icon: 'BarChart3', title: 'Recovery Analytics', desc: 'Resolution and recovery measured at account, bucket and portfolio level.' },
  { icon: 'LayoutDashboard', title: 'Performance Dashboards', desc: 'Live operational view of allocation, field activity and resolution.' },
  { icon: 'MapPin', title: 'GPS-Enabled Field Operations', desc: 'Doorstep visits geo-tagged and time-stamped — verified, not self-reported.' },
  { icon: 'FileText', title: 'Centralised Reporting', desc: 'Scheduled MIS packs aligned to your own review cadence.' },
  { icon: 'Search', title: 'Case Tracking', desc: 'Per-account history of every contact, notice, visit and payment.' },
  { icon: 'ShieldCheck', title: 'Compliance Monitoring', desc: 'Conduct, recording and statutory adherence checked continuously, not sampled.' },
];

// ── ROADMAP ONLY — not deployed. Rendered under an explicit
//    "in development" banner so it can never be read as a live capability.
export const futureCapabilities = [
  { title: 'AI Assisted Portfolio Prioritisation', desc: 'Rank accounts by predicted recoverability before effort is spent.' },
  { title: 'AI Agent Based Customer Conversations', desc: 'Conversational agents handling routine borrower contact at scale.' },
  { title: 'Intelligent Auto Dialing', desc: 'Contact attempts timed to when a borrower is most likely to answer.' },
  { title: 'AI-Powered Follow-Up Scheduling', desc: 'Next-contact timing set by outcome patterns rather than fixed intervals.' },
  { title: 'Smart Recovery Recommendations', desc: 'Next-best-action guidance surfaced to officers on each case.' },
  { title: 'Predictive Recovery Analytics', desc: 'Forward-looking roll-rate and resolution forecasting per portfolio.' },
  { title: 'Intelligent Case Assignment', desc: 'Accounts routed to the officer and channel with the strongest fit.' },
  { title: 'Automated Compliance Monitoring', desc: 'Conduct exceptions flagged automatically across every recorded interaction.' },
  { title: 'Executive Recovery Dashboards', desc: 'Board-level portfolio health, presented for review rather than operations.' },
];

export const executionSteps = [
  { no: '01', title: 'Discovery', desc: 'Portfolio profile, objectives, constraints and reporting expectations established with your team.' },
  { no: '02', title: 'Portfolio Analysis', desc: 'Book ingested securely, validated, de-duplicated and profiled by risk and geography.' },
  { no: '03', title: 'Recovery Strategy', desc: 'Channel mix, escalation thresholds and legal triggers agreed before any contact is made.' },
  { no: '04', title: 'Digital Engagement', desc: 'Voice, WhatsApp, SMS and payment links open contact at scale — every touch logged.' },
  { no: '05', title: 'Field Operations', desc: 'GPS-verified doorstep recovery where digital and tele contact has not converted.' },
  { no: '06', title: 'Legal Recovery', desc: 'Statutory escalation — notices, Section 138, SARFAESI enforcement — inside the timeline.' },
  { no: '07', title: 'Asset Resolution', desc: 'Repossession, secure custody, valuation and auction coordination through to realisation.' },
  { no: '08', title: 'Executive Reporting', desc: 'Reconciliation, closure and a complete, audit-ready record returned to the institution.' },
];
