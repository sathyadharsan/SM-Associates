// Content for the Services landing page (/services).
//
// CONTENT-INTEGRITY RULES APPLIED HERE:
// • No figure is estimated. Scale metrics (years, branches, field workforce,
//   institutional partners) deliberately live only on the homepage Metrics
//   section — this page must not repeat the home page, so it argues capability
//   and execution instead of restating counts.
// • The accountable-lifecycle sequence (discovery through executive reporting)
//   is likewise homepage-only — see OperatingModelSection — so this page does
//   not carry its own step-by-step execution list.
// • `futureCapabilities` is a ROADMAP. Those items are under development and
//   are labelled as such at three levels in the UI — they must never read as
//   already deployed.
// • `complianceAssurance` describes operating PRACTICE, not certification
//   badges — the ISO 27001 / RBI Compliant / SARFAESI Authorized / IIBF
//   badges themselves already live on the homepage AwardsCertificationsSection
//   and are only referenced here in passing, never re-rendered as a badge grid.

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

export const complianceAssurance = [
  {
    icon: 'Lock',
    title: 'Data Handling & Confidentiality',
    points: [
      'Borrower data accessed on a need-to-know basis, scoped to the assigned case',
      'Mandate-specific NDAs executed before any portfolio is onboarded',
      'No data leaves the case management system without written authorization',
    ],
  },
  {
    icon: 'ClipboardCheck',
    title: 'Audit-Trail Discipline',
    points: [
      'Every contact, visit, notice and payment logged against the case file',
      'Field engagements verified by GPS and timestamp, not self-reported',
      'A complete, exportable record available for internal or regulatory review',
    ],
  },
  {
    icon: 'Scale',
    title: 'Regulatory Alignment',
    points: [
      'Operations conducted within the RBI Fair Practices Code and SARFAESI framework',
      'Field workforce trained and IIBF certified as Direct Recovery Agents',
      'Conduct monitored continuously across every recorded interaction',
    ],
  },
  {
    icon: 'UserCheck',
    title: 'Engagement & Reporting Structure',
    points: [
      'Escalation path agreed with the institution before a mandate begins',
      'Reporting cadence aligned to the institution\'s own review calendar',
      'A single accountable point of contact for the full engagement',
    ],
  },
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
