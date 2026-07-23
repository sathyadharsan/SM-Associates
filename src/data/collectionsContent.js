// Real, page-specific content for the 6 Collections & Recovery pages,
// transcribed from the approved IA & Capability-Content Blueprint. Replaces
// the generic fallback template (pagesContent.js -> getPageContent) these
// pages previously rendered. Shape consumed by CapabilityServiceTemplate.

const COLLECTIONS_DIFFERENTIATOR = {
  category: 'Collections & Recovery',
  traditional: 'Collection is verbal and cash-first: a call or a doorstep visit, payment handed over, a hand-written or no receipt. What happened is whatever the agent reports at month-end reconciliation.',
  sm: 'Every contact attempt and every payment — UPI, PhonePe, QR, POS, or cash — is logged the moment it happens: recorded call, digital receipt, GPS-stamped visit, live dashboard entry.',
  impact: 'The lender sees collection status the same day, not at month-end — and every rupee collected is digitally reconciled, removing the cash-handling dispute risk that comes with paper receipts.',
};

const baseCta = (heading, subheading) => ({
  heading, subheading, buttonText: 'Request Empanelment Proposal', href: '/contact',
});

export const collectionsContent = {
  'early-stage': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'Early Stage Collections',
    subtitle: 'Stop 1–30 DPD accounts from rolling — without losing the customer relationship.',
    description: 'Digital-first, AI-assisted outreach across every channel your borrowers already use, with promise-to-pay tracked automatically from first contact.',
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Phone calling only'],
      capabilities: ['AI Assisted Calling', 'Human Telecalling', 'WhatsApp Campaigns', 'SMS Reminder Journeys', 'Email Notifications', 'UPI Payment Links', 'PhonePe Collections', 'QR Payments', 'Digital Settlement Links', 'Auto Reminder Scheduling', 'Promise-to-Pay Tracking'],
    },
    workflow: ['Due-Date Reminder', 'Digital Nudge', 'Promise Captured', 'Payment Link Sent', 'Ledger Reconciled'],
    capabilityInAction: {
      title: 'Promise-to-Pay Tracking',
      steps: [
        'Auto-cadence outreach across call/WhatsApp/SMS',
        'Promise captured at point of contact, cadence adjusted automatically',
        'Timestamped promise record, call recording',
        'Promise-to-pay status feed',
        'Self-curing accounts identified before they roll to the next bucket',
      ],
    },
    techHighlight: 'Intelligence',
    cta: baseCta('Ready to Stop Roll-Rate Before It Starts?', 'Talk to our team about bringing early-stage collections onto one accountable operating model.'),
  },

  'field-collections': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'Field Collections',
    subtitle: 'Doorstep cash and digital collection, GPS-verified from dispatch to receipt.',
    description: "When digital and tele contact isn't enough, a GPS-routed officer collects on the spot — cash, UPI, PhonePe, QR or POS — with a digital receipt and live dashboard update the same day.",
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Phone calling only'],
      capabilities: ['Doorstep Cash Collection', 'UPI Collection', 'PhonePe Collection', 'Google Pay Collection', 'QR Code Payments', 'POS Machine Collection', 'Digital Receipt Generation', 'GPS Visit Verification', 'Live Field Tracking', 'Promise-to-Pay Capture', 'Customer Visit Evidence', 'Escalation Workflow', 'Geo-tagged Visit Records', 'Same-day Status Updates'],
    },
    workflow: ['Lead Assigned', 'GPS Route', 'Officer Dispatch', 'Doorstep Visit', 'Digital Receipt', 'Instant Payment', 'Live Dashboard'],
    capabilityInAction: {
      title: 'Doorstep Collection',
      steps: [
        'Doorstep cash / UPI / PhonePe / QR / POS collection',
        'GPS-routed officer visits, collects on the spot',
        'GPS-stamped visit log, visit photo',
        'Digital receipt, geo-tagged evidence, live dashboard entry',
        'Same-day collection proof with zero cash-handling ambiguity',
      ],
    },
    techHighlight: 'Execution',
    cta: baseCta('Need Boots on the Ground?', "See how our GPS-verified field network collects where digital and tele contact can't."),
  },

  'soft-collections': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'Soft Collections',
    subtitle: 'Recover 30–90 DPD accounts without burning the customer relationship.',
    description: 'Structured telecalling and settlement negotiation within an authorised matrix — the pre-legal stage where most accounts still self-resolve.',
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Ad hoc reminder calls'],
      capabilities: ['Multilingual Telecalling Desk', 'Structured Settlement Negotiation', 'Promise-to-Pay Renegotiation', 'WhatsApp & SMS Follow-up', 'Digital Settlement Links', 'Broken-Promise Escalation Trigger', 'Grievance Logging'],
    },
    workflow: ['Bucket Assignment', 'Call Attempt', 'Promise Captured', 'Follow-up Cadence', 'Payment Confirmed'],
    capabilityInAction: {
      title: 'Settlement Negotiation',
      steps: [
        'Structured settlement negotiation',
        'Telecaller negotiates within an authorised settlement matrix',
        'Recorded call, settlement-offer log',
        'Settlement-offer report',
        'Resolution reached pre-legal, avoiding escalation time and cost',
      ],
    },
    techHighlight: 'Intelligence',
    cta: baseCta('Resolve Before It Escalates', 'Structured negotiation, tracked promise-to-pay, and a documented trail at every step.'),
  },

  'hard-collections': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'Hard Collections',
    subtitle: 'What happens when soft contact fails at 90+ DPD.',
    description: 'Escalated-tone outreach, pre-legal warning notices, and field-visit triggers — with a documented escalation trail before any legal cost is incurred.',
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Repeated calling with no clear escalation point'],
      capabilities: ['Escalated-Tone Call Scripting', 'Pre-Legal Warning-Letter Issuance', 'Field-Visit Trigger Authorisation', 'Settlement Authorisation Matrix', 'Doorstep Negotiation', 'Legal-Referral Recommendation'],
    },
    workflow: ['Escalation Trigger', 'Warning Notice', 'Field Visit Order', 'Negotiate / Settle', 'Legal Referral'],
    capabilityInAction: {
      title: 'Pre-Legal Escalation',
      steps: [
        'Escalation-trigger & warning-letter issuance',
        'Warning notice issued, field visit triggered on threshold breach',
        'Notice-dispatch proof, field-visit report',
        'Settlement / legal-referral recommendation',
        'Documented escalation trail exists before any legal cost is incurred',
      ],
    },
    techHighlight: 'Execution',
    cta: baseCta('Escalate With a Documented Trail', 'Move from soft contact to a defensible escalation record, before legal costs start.'),
  },

  'pdc-collections': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'PDC Collections',
    subtitle: 'Post-dated cheque presentment, bounce detection, and re-presentment — managed end to end.',
    description: 'Cheque presentment scheduling, Section 138 bounce detection, and NACH/ECS mandate handling, reconciled against the bank the same cycle.',
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Manual cheque tracking in a register'],
      capabilities: ['Cheque Presentment Scheduling', 'Bounce (Dishonour) Detection', 'Re-Presentment Cycle Management', 'NACH / ECS Mandate Handling', 'Bank Reconciliation', 'Section 138 Handoff'],
    },
    workflow: ['Cheque Due Date', 'Presentment', 'Bounce Detected', 'S.138 Notice', 'Re-Presentment / Settlement', 'Bank Reconciliation'],
    capabilityInAction: {
      title: 'Bounce Detection & Re-Presentment',
      steps: [
        'Cheque bounce (dishonour) detection',
        'Cheque presented, bounce detected, re-presentment or legal handoff triggered',
        'Bank reconciliation record, bounce memo',
        'Presentment/bounce status report',
        'No bounced cheque goes unmanaged past the statutory window',
      ],
    },
    techHighlight: 'Data & Intake',
    cta: baseCta('Never Miss a Bounce Window', 'Presentment, detection and re-presentment tracked to the day, reconciled against the bank.'),
  },

  'debt-recovery': {
    eyebrow: 'COLLECTIONS & RECOVERY',
    title: 'Debt Recovery',
    subtitle: 'One accountable owner for the whole book, across every channel and bucket.',
    description: 'Cross-bucket case routing assigns every account to the right channel — digital, tele, field, or legal — by propensity and bucket, with portfolio-level visibility throughout.',
    primaryCtaText: 'Request Empanelment Proposal', primaryCtaHref: '/contact',
    secondaryCtaText: 'See Core Capabilities', secondaryCtaHref: '#capabilities',
    differentiator: COLLECTIONS_DIFFERENTIATOR,
    checklist: {
      traditional: ['Separate vendor per channel or bucket'],
      capabilities: ['Cross-Bucket Case Routing', 'Channel-Assignment Logic', 'Settlement Structuring', 'Write-Off Recommendation Workflow', 'Portfolio-Level Reporting'],
    },
    workflow: ['Portfolio Intake', 'Bucket Classification', 'Channel Assignment', 'Recovery Execution', 'Settlement / Write-Off', 'Reporting'],
    capabilityInAction: {
      title: 'Cross-Channel Case Routing',
      steps: [
        'Cross-bucket case routing',
        'Case assigned to the right channel by bucket and propensity score',
        'Routing-decision log',
        'Portfolio-level recovery MIS',
        'The whole book is actively worked, not sitting idle in a queue',
      ],
    },
    techHighlight: 'Intelligence',
    cta: baseCta('One Owner for the Whole Book', 'Stop coordinating five vendors across buckets — see the whole portfolio, managed under one accountable model.'),
  },
};

export const getCollectionsContent = (slug) => collectionsContent[slug] || null;
