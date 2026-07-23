// The four capability-profile dimensions that are genuinely company-wide,
// not page-specific (see the approved IA blueprint, "Site-Wide Constant
// Layer"). Sourced from flagshipHomeData.js so this never drifts from the
// figures already approved for the homepage. Every capability service page
// renders these once via <ConstantsStrip />, rather than repeating them.

export const deliveryModels = [
  { title: 'Managed Service', desc: 'Dedicated account ownership per lender relationship.' },
  { title: 'Dedicated Field Team', desc: 'Branch-assigned officers per portfolio.' },
  { title: 'Regional Operations', desc: '19 branches across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh and Telangana, plus additional offices in Pune, Ahmedabad, Jaipur and Lucknow.' },
  { title: 'Portfolio-Based Engagement', desc: 'Full book handed over and managed end to end.' },
  { title: 'Project-Based Engagement', desc: 'Defined-scope assignments — a single skip-trace batch, one auction.' },
];

export const technologyLayers = [
  {
    layer: 'Data & Intake',
    items: ['Portfolio ingestion (any format, any lender)', 'GPS-tagged field telemetry', 'Bureau & skip-trace data enrichment'],
  },
  {
    layer: 'Intelligence',
    items: ['Propensity scoring', 'Recovery forecasting', 'Risk & conduct flagging'],
  },
  {
    layer: 'Execution',
    items: ['Officer mobile app (guided workflows)', 'Live lender dashboard', 'Immutable audit & compliance trail'],
  },
];

export const complianceControls = [
  'RBI Fair Practices Code adherence on every borrower interaction',
  'IIBF DRA-certified, background-verified field officers',
  '100% call recording with QA script-compliance audit',
  'Immutable, time-stamped, geo-tagged audit trail on every action',
  'ISO/IEC 27001 certified information-security practices',
  "Defined grievance & escalation channel, lender-visible resolution tracking",
];

export const reportingCapabilities = [
  'Daily status reporting — allocation, field activity, resolution, recovery, down to account level',
  "Scheduled MIS packs aligned to the lender's own review cadence",
  'Live dashboard — real-time portfolio visibility',
];
