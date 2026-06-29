export const specializedContent = {
  'resolution-strategy': {
    eyebrow: 'Account-Level Resolution Strategy',
    title: 'Resolution Strategy',
    subtitle: 'A Tailored Resolution Path for Each Account, Not a One-Size-Fits-All Process',
    description: 'Designing a dedicated, account-level resolution path combining negotiated settlement and parallel legal action.',
    primaryCtaText: 'Request a Resolution Strategy Walkthrough',
    secondaryCtaText: 'Download Resolution Approach Overview',

    problemStatement: [
      { icon: 'briefcase', title: 'One-Size-Fits-All Recovery', desc: 'Applying the same recovery approach to every account misses faster, lower-cost resolution paths.' },
      { icon: 'fileWarning', title: 'Missed Settlement Windows', desc: 'Without a dedicated strategy, viable settlement opportunities go unexplored.' },
      { icon: 'trendingDown', title: 'Slow Escalation Decisions', desc: 'Accounts drift without a clear decision on when to escalate to SARFAESI or legal action.' },
      { icon: 'shieldAlert', title: 'Undervalued Asset Investigation', desc: 'Borrower and guarantor asset checks are often skipped, leaving recovery options on the table.' }
    ],

    overview: {
      heading: 'Why a Dedicated Account Strategy Outperforms a Standard Process',
      subheading: 'Some Accounts Settle. Some Need Escalation. Few Need Both at Once.',
      summary: 'Not every delinquent account follows the same path to resolution — some respond to a negotiated settlement, others need SARFAESI pressure running in parallel to bring the borrower to the table. Resolution Strategy assigns a dedicated account-level team that investigates borrower and guarantor assets, negotiates settlements, and runs SARFAESI escalation in parallel when needed, rather than waiting for one approach to fail before trying another. SM Associates structures this as a tailored, escalation-ready engagement for accounts where a standard process isn’t converting.',
      outcomes: [
        { title: 'Dedicated Account Ownership', desc: 'One team owns the account’s resolution path end to end.' },
        { title: 'Parallel-Track Execution', desc: 'Settlement negotiation and legal escalation run together, not sequentially.' },
        { title: 'Asset-Informed Strategy', desc: 'Borrower and guarantor asset investigation grounds the strategy in real recovery potential.' }
      ],
      useCases: [
        { title: 'High-Value Stalled Accounts', desc: 'Accounts where a standard recovery process has stalled.' },
        { title: 'Settlement-Ready Borrowers', desc: 'Borrowers showing willingness to settle but needing a structured offer.' },
        { title: 'Guarantor Asset Cases', desc: 'Accounts where guarantor assets may expand recovery options.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Dedicated Account Team', desc: 'Assigning a dedicated team to own the account’s resolution.', bullets: ['Single team ownership per account', 'Continuous account-level engagement', 'Direct escalation pathway to the client'], businessOutcome: 'Gives complex accounts the focused attention a standard process can’t.' },
      { title: 'Borrower & Guarantor Asset Investigation', desc: 'Identifying recovery options beyond the primary collateral.', bullets: ['Borrower asset investigation', 'Guarantor asset identification', 'Registry cross-checks for alternate assets'], businessOutcome: 'Expands recovery options when the primary asset alone is insufficient.' },
      { title: 'Negotiated Settlement Structuring', desc: 'Designing settlement offers that work for both sides.', bullets: ['Settlement proposal structuring', 'One-time settlement (OTS) negotiation', 'Documentation of settlement terms'], businessOutcome: 'Converts willing borrowers into closed, documented settlements.' },
      { title: 'Parallel SARFAESI Escalation', desc: 'Running legal pressure alongside settlement negotiation.', bullets: ['Parallel SARFAESI notice initiation where warranted', 'Coordinated timing between settlement talks and legal steps', 'Escalation triggers if settlement stalls'], businessOutcome: 'Keeps legal pressure available without abandoning settlement talks.' },
      { title: 'Escalation Decision Framework', desc: 'Deciding when to move from negotiation to enforcement.', bullets: ['Defined escalation triggers', 'Account-level escalation review', 'Documented rationale for each decision'], businessOutcome: 'Ensures escalation happens at the right moment, not too early or too late.' },
      { title: 'Resolution Risk Flagging', desc: 'Translating account progress into a structured risk read.', bullets: ['Consolidation of negotiation and escalation status', 'Flagging of accounts needing client decision', 'Structured reporting for the client’s recovery desk'], businessOutcome: 'Gives the client visibility into which accounts need their input.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'account-assignment', label: 'Account Assignment', heading: 'Assigning a Dedicated Resolution Team', overview: 'A stalled or complex account is assigned to a dedicated team.', activities: ['Account review and assignment', 'Initial strategy scoping'], documents: [], risks: ['Complex accounts left in a standard, undifferentiated process'], deliverable: 'Account assignment record.', benefit: 'Gives the account focused attention a standard process can’t provide.' },
      { id: 'asset-investigation', label: 'Asset Investigation', heading: 'Identifying Recovery Options Beyond the Primary Asset', overview: 'Borrower and guarantor assets are investigated for additional recovery routes.', activities: ['Borrower asset investigation', 'Guarantor asset identification'], documents: [], risks: ['Recovery options left unexplored beyond the primary collateral'], deliverable: 'Asset investigation report.', benefit: 'Expands the strategy’s recovery options where the primary asset falls short.' },
      { id: 'settlement-negotiation', label: 'Settlement Negotiation', heading: 'Structuring a Workable Settlement Offer', overview: 'A settlement proposal is structured and negotiated with the borrower.', activities: ['Settlement proposal structuring', 'OTS negotiation'], documents: [], risks: ['Settlement opportunities lost without structured negotiation'], deliverable: 'Settlement proposal record.', benefit: 'Converts willing borrowers into a closed resolution.' },
      { id: 'parallel-escalation', label: 'Parallel Escalation', heading: 'Keeping Legal Pressure Available', overview: 'SARFAESI or legal escalation runs in parallel where warranted.', activities: ['Parallel notice initiation', 'Coordinated timing with settlement talks'], documents: [], risks: ['Settlement talks stalling without legal pressure available'], deliverable: 'Escalation coordination record.', benefit: 'Keeps the borrower’s incentive to settle active throughout.' },
      { id: 'decision-review', label: 'Decision Review', heading: 'Deciding the Next Step', overview: 'Account progress is reviewed against defined escalation triggers.', activities: ['Escalation trigger review', 'Documented decision rationale'], documents: [], risks: ['Escalation decisions made too early or too late'], deliverable: 'Decision review record.', benefit: 'Keeps escalation timing deliberate, not reactive.' },
      { id: 'report', label: 'Resolution Outcome Report', heading: 'Documenting How the Account Resolved', overview: 'Final account outcome is compiled into a structured record.', activities: ['Outcome documentation', 'Internal quality check'], documents: [], risks: ['Inconsistent outcome reporting across accounts'], deliverable: 'Resolution outcome report.', benefit: 'Gives the client a clear record of how the account was resolved.' }
    ],

    challengesHeading: 'Enterprise Resolution Strategy Risks',
    challenges: [
      { title: 'One-Size-Fits-All Recovery', desc: 'Applying the same approach to every account misses faster resolution paths.', warningBadge: 'Process Risk', impact: 'Accounts that could settle quickly instead follow a slower standard process.' },
      { title: 'Missed Settlement Windows', desc: 'Without a dedicated strategy, viable settlement opportunities go unexplored.', warningBadge: 'Settlement Risk', impact: 'Lower-cost resolution paths are missed in favor of slower enforcement.' },
      { title: 'Slow Escalation Decisions', desc: 'Accounts drift without a clear decision on when to escalate.', warningBadge: 'Timeline Risk', impact: 'Resolution stalls while a clear escalation decision is pending.' },
      { title: 'Undervalued Asset Investigation', desc: 'Borrower and guarantor asset checks are often skipped.', warningBadge: 'Recovery Risk', impact: 'Recovery options are left on the table when assets aren’t investigated.' },
      { title: 'Disconnected Negotiation and Escalation', desc: 'Settlement talks and legal escalation running independently undercut each other.', warningBadge: 'Coordination Risk', impact: 'Borrowers lose urgency to settle if legal pressure isn’t visibly coordinated.' },
      { title: 'Undocumented Settlement Terms', desc: 'Settlements reached without proper documentation create later disputes.', warningBadge: 'Documentation Risk', impact: 'Poorly documented settlements can be challenged or reopened.' }
    ],

    processFlow: {
      title: 'Enterprise Resolution Strategy Lifecycle',
      desc: 'A structured operating model that moves a complex account from assignment to a documented resolution.',
      steps: [
        { step: '01', title: 'Account Assignment', desc: 'A stalled or complex account is assigned to a dedicated team.', outcome: 'Focused ownership of the account’s resolution path.' },
        { step: '02', title: 'Asset Investigation', desc: 'Borrower and guarantor assets are investigated.', outcome: 'A fuller picture of available recovery options.' },
        { step: '03', title: 'Settlement Negotiation', desc: 'A settlement proposal is structured and negotiated.', outcome: 'A path toward a closed, negotiated resolution.' },
        { step: '04', title: 'Parallel Escalation', desc: 'Legal escalation proceeds alongside negotiation where warranted.', outcome: 'Sustained pressure without abandoning settlement talks.' },
        { step: '05', title: 'Resolution & Reporting', desc: 'The account resolves and the outcome is documented.', outcome: 'A clear, documented record of how the account was closed.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Faster Account Resolution', desc: 'Dedicated, tailored strategy resolves complex accounts faster than a standard process.', value: 'Reduced time-to-resolution on stalled accounts.' },
      { title: 'More Settlements Captured', desc: 'Structured negotiation converts more willing borrowers into closed settlements.', value: 'Higher settlement conversion on targeted accounts.' },
      { title: 'Expanded Recovery Options', desc: 'Asset investigation surfaces recovery routes beyond the primary collateral.', value: 'More accounts resolved despite primary-asset shortfalls.' },
      { title: 'Sustained Negotiation Leverage', desc: 'Parallel escalation keeps settlement incentive active throughout.', value: 'Fewer settlement talks stalling without legal pressure.' },
      { title: 'Deliberate Escalation Timing', desc: 'Defined triggers keep escalation decisions timely and considered.', value: 'Escalation happens at the right moment, not by default delay.' },
      { title: 'Defensible Settlement Records', desc: 'Documented settlement terms reduce the risk of later disputes.', value: 'Fewer settlements reopened or challenged after closure.' }
    ],

    faqs: [
      { q: 'How is Resolution Strategy different from NPA Management?', a: 'NPA Management bundles services across the full NPA lifecycle under one mandate; Resolution Strategy is a focused, account-level engagement for specific stalled or complex accounts needing tailored settlement and escalation handling.' },
      { q: 'Do you pursue SARFAESI action while settlement talks are ongoing?', a: 'Yes, where warranted — parallel escalation is coordinated alongside settlement negotiation to keep pressure active without abandoning the settlement path.' }
    ],

    cta: {
      heading: 'Get a Tailored Strategy for Your Stalled Accounts',
      subheading: 'Request a resolution strategy walkthrough for your complex or high-value accounts.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'npa-management': {
    eyebrow: 'Single-Window NPA Resolution',
    title: 'NPA Management',
    subtitle: 'One Accountable Partner Across the Entire NPA Lifecycle',
    description: 'Bundling legal, recovery, valuation, security, and resolution under one accountable mandate.',
    primaryCtaText: 'Request an NPA Management Walkthrough',
    secondaryCtaText: 'Download One-Window Service Overview',

    problemStatement: [
      { icon: 'briefcase', title: 'Fragmented Multi-Vendor Recovery', desc: 'Separate vendors for legal, recovery, valuation, and security create coordination gaps.' },
      { icon: 'fileWarning', title: 'No Single Accountable Partner', desc: 'When something goes wrong, no one vendor owns the outcome across the full NPA lifecycle.' },
      { icon: 'trendingDown', title: 'Slow, Disconnected Resolution', desc: 'Disconnected vendors mean slower handoffs and longer resolution cycles.' },
      { icon: 'shieldAlert', title: 'Inconsistent Reporting', desc: 'Different vendors reporting separately makes portfolio-level NPA visibility difficult.' }
    ],

    overview: {
      heading: 'Why a Single-Window Mandate Outperforms a Fragmented One',
      subheading: 'One Accountable Partner Across Legal, Recovery, Valuation, and Security',
      summary: 'Resolving a non-performing asset typically touches legal assistance, debt recovery, SARFAESI enforcement, valuation, security, investigation, sale, and settlement facilitation — each often handled by a different vendor. NPA Management bundles all of this under one accountable mandate, so the lender has a single point of contact for the entire NPA lifecycle rather than coordinating five or six separate relationships. SM Associates structures this as an integrated resolution plan with unified execution, drawing on the same capabilities already proven across our individual service lines.',
      outcomes: [
        { title: 'Single Accountable Partner', desc: 'One mandate, one point of contact, across the entire NPA lifecycle.' },
        { title: 'Integrated Resolution Planning', desc: 'Legal, recovery, valuation, and security move under one coordinated plan.' },
        { title: 'Consolidated Reporting', desc: 'Portfolio-level visibility instead of reconciling multiple vendor reports.' }
      ],
      useCases: [
        { title: 'Large Stressed Portfolios', desc: 'Resolving complex NPA books needing coordinated multi-service action.' },
        { title: 'ARC-Acquired Books', desc: 'End-to-end resolution for portfolios acquired through asset reconstruction.' },
        { title: 'Multi-Year NPA Mandates', desc: 'Standing mandates covering ongoing NPA resolution across a lender’s book.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Integrated Resolution Planning', desc: 'Designing one coordinated plan across legal, recovery, and asset action.', bullets: ['Cross-service resolution strategy design', 'Sequencing of legal, recovery, and valuation steps', 'Single plan covering the full NPA lifecycle'], businessOutcome: 'Replaces fragmented vendor coordination with one accountable plan.' },
      { title: 'Legal & SARFAESI Coordination', desc: 'Coordinating statutory enforcement within the one-window mandate.', bullets: ['SARFAESI notice and possession coordination', 'DRT and litigation coordination where needed', 'Legal status visibility within the unified plan'], businessOutcome: 'Keeps legal action aligned with the broader resolution strategy.' },
      { title: 'Valuation & Security Integration', desc: 'Bringing valuation and custodian services into the same mandate.', bullets: ['Valuation coordination at the right resolution stage', 'Security and custodian deployment post-possession', 'Consistent standards across both services'], businessOutcome: 'Removes the handoff gaps between separately contracted vendors.' },
      { title: 'Recovery & Settlement Facilitation', desc: 'Pursuing recovery and negotiated settlement within the same plan.', bullets: ['Recovery strategy execution', 'One-time settlement (OTS) facilitation', 'Settlement documentation and closure'], businessOutcome: 'Keeps settlement options live alongside enforcement action.' },
      { title: 'Consolidated Portfolio Reporting', desc: 'Giving the lender one reporting view across the entire mandate.', bullets: ['Single dashboard across all service lines', 'Portfolio-level resolution tracking', 'Regular consolidated status reviews'], businessOutcome: 'Removes the need to reconcile reports from multiple vendors.' },
      { title: 'NPA Risk Flagging', desc: 'Translating cross-service progress into a structured risk read.', bullets: ['Consolidation of legal, recovery, and asset status', 'Flagging of accounts requiring escalation', 'Structured reporting for the lender’s NPA desk'], businessOutcome: 'Gives lenders one clear view of resolution progress across the mandate.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'mandate-intake', label: 'Mandate Intake', heading: 'Bringing the Portfolio Under One Mandate', overview: 'The NPA portfolio is reviewed and brought under the single-window mandate.', activities: ['Portfolio intake and review', 'Mandate scoping'], documents: [], risks: ['Incomplete scoping leaving gaps in coverage'], deliverable: 'Mandate scoping record.', benefit: 'Establishes the full scope of the one-window engagement upfront.' },
      { id: 'resolution-planning', label: 'Resolution Planning', heading: 'Designing the Integrated Resolution Plan', overview: 'A coordinated plan is designed across legal, recovery, and asset action.', activities: ['Cross-service strategy design', 'Sequencing of resolution steps'], documents: [], risks: ['Disconnected planning across service lines'], deliverable: 'Integrated resolution plan.', benefit: 'Gives the lender one coherent plan instead of fragmented vendor strategies.' },
      { id: 'execution', label: 'Coordinated Execution', heading: 'Executing Legal, Recovery, and Asset Action Together', overview: 'Legal, recovery, valuation, and security actions proceed under the unified plan.', activities: ['Legal and SARFAESI execution', 'Recovery and asset action coordination'], documents: [], risks: ['Execution gaps between service lines'], deliverable: 'Execution status log.', benefit: 'Keeps every workstream moving in a coordinated way.' },
      { id: 'settlement-review', label: 'Settlement Review', heading: 'Keeping Settlement Options Open Alongside Enforcement', overview: 'Settlement and OTS options are reviewed alongside enforcement progress.', activities: ['OTS facilitation', 'Settlement negotiation support'], documents: [], risks: ['Settlement opportunities missed during enforcement'], deliverable: 'Settlement review note.', benefit: 'Keeps faster resolution paths available throughout the mandate.' },
      { id: 'consolidated-reporting', label: 'Consolidated Reporting', heading: 'Giving the Lender One View of Progress', overview: 'Portfolio-level status is consolidated into a single reporting view.', activities: ['Cross-service status consolidation', 'Reporting delivery'], documents: [], risks: ['Fragmented reporting undermining portfolio visibility'], deliverable: 'Consolidated status report.', benefit: 'Removes the need to reconcile separate vendor reports.' },
      { id: 'report', label: 'Mandate Outcome Report', heading: 'Documenting How the Mandate Resolved', overview: 'Final outcomes across the mandate are compiled into a structured record.', activities: ['Outcome documentation', 'Internal quality check'], documents: [], risks: ['Inconsistent outcome reporting across the mandate'], deliverable: 'Mandate outcome report.', benefit: 'Gives the lender a clear record of how the one-window mandate resolved.' }
    ],

    challengesHeading: 'Enterprise NPA Management Risks',
    challenges: [
      { title: 'Fragmented Multi-Vendor Recovery', desc: 'Separate vendors for legal, recovery, valuation, and security create coordination gaps.', warningBadge: 'Coordination Risk', impact: 'Resolution slows down at the handoffs between separately contracted vendors.' },
      { title: 'No Single Accountable Partner', desc: 'No one vendor owns the outcome across the full NPA lifecycle.', warningBadge: 'Accountability Risk', impact: 'Issues fall through the gaps between vendor responsibilities.' },
      { title: 'Slow, Disconnected Resolution', desc: 'Disconnected vendors mean slower handoffs and longer resolution cycles.', warningBadge: 'Timeline Risk', impact: 'Provisioning capital stays locked up longer than a coordinated process would require.' },
      { title: 'Inconsistent Reporting', desc: 'Different vendors reporting separately makes portfolio-level visibility difficult.', warningBadge: 'Visibility Risk', impact: 'Lenders lack a single, reliable view of NPA resolution progress.' },
      { title: 'Missed Settlement Windows', desc: 'Without coordinated oversight, settlement opportunities can be missed during enforcement.', warningBadge: 'Settlement Risk', impact: 'Faster, lower-cost resolution paths go unexplored.' },
      { title: 'Vendor Management Overhead', desc: 'Managing multiple vendors directly increases the lender’s own operational burden.', warningBadge: 'Operational Risk', impact: 'Internal teams spend time coordinating vendors instead of managing strategy.' }
    ],

    processFlow: {
      title: 'Enterprise NPA Management Lifecycle',
      desc: 'A structured operating model that moves a portfolio from mandate intake to a documented, resolved outcome.',
      steps: [
        { step: '01', title: 'Mandate Intake', desc: 'The NPA portfolio is reviewed and scoped under the single-window mandate.', outcome: 'A clearly scoped engagement covering the full portfolio.' },
        { step: '02', title: 'Resolution Planning', desc: 'An integrated plan is designed across legal, recovery, and asset action.', outcome: 'One coherent resolution plan instead of fragmented strategies.' },
        { step: '03', title: 'Coordinated Execution', desc: 'Legal, recovery, valuation, and security actions proceed together.', outcome: 'Every workstream moving in a coordinated way.' },
        { step: '04', title: 'Settlement Review', desc: 'Settlement and OTS options are reviewed alongside enforcement.', outcome: 'Faster resolution paths kept open throughout.' },
        { step: '05', title: 'Consolidated Reporting', desc: 'Portfolio-level status is reported in one consolidated view.', outcome: 'A single, reliable picture of resolution progress.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Single Point of Accountability', desc: 'One mandate replaces the need to coordinate multiple separate vendors.', value: 'Reduced vendor-management burden on the lender’s internal team.' },
      { title: 'Faster Coordinated Resolution', desc: 'Integrated planning removes the delays of fragmented vendor handoffs.', value: 'Shorter overall resolution timelines across the portfolio.' },
      { title: 'Unified Portfolio Visibility', desc: 'Consolidated reporting replaces fragmented vendor reports.', value: 'A single, reliable view of NPA resolution progress.' },
      { title: 'More Settlement Opportunities Captured', desc: 'Coordinated oversight keeps settlement options visible alongside enforcement.', value: 'More accounts resolved through faster, lower-cost settlement paths.' },
      { title: 'Faster Provisioning Release', desc: 'Coordinated resolution frees capital from provisioning sooner.', value: 'Improved capital efficiency across the managed NPA book.' },
      { title: 'Lower Internal Overhead', desc: 'A single mandate reduces the lender’s own vendor-coordination workload.', value: 'Internal teams freed up to focus on strategy rather than vendor management.' }
    ],

    faqs: [
      { q: 'Does NPA Management replace your individual service lines like SARFAESI Enforcement or Asset Recovery?', a: 'No — NPA Management bundles these existing capabilities under one coordinated mandate rather than replacing them, giving the lender a single point of contact across the full lifecycle.' },
      { q: 'Can NPA Management cover a portfolio acquired by an ARC?', a: 'Yes — this is structured to support end-to-end resolution of portfolios acquired through asset reconstruction, alongside standard bank and NBFC NPA books.' }
    ],

    cta: {
      heading: 'Resolve Your NPA Portfolio Under One Accountable Mandate',
      subheading: 'Request an NPA management walkthrough for your stressed asset book.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'portfolio-management': {
    eyebrow: 'Segmented Portfolio Recovery',
    title: 'Portfolio Management',
    subtitle: 'Routing Every Account to the Right Recovery Channel, Not the Same One',
    description: 'Segmenting and routing delinquent accounts to the recovery channel that fits.',
    primaryCtaText: 'Request a Portfolio Management Walkthrough',
    secondaryCtaText: 'Download Portfolio Framework',

    problemStatement: [
      { icon: 'briefcase', title: 'Undifferentiated Outreach', desc: 'Treating all defaulters with the same campaign increases cost and reduces overall yield.' },
      { icon: 'fileWarning', title: 'Uncoordinated Recovery Stages', desc: 'Calling, field, and legal actions running out of sync slow down resolution.' },
      { icon: 'trendingDown', title: 'Stale Account Visibility', desc: 'Outdated status data leaves the lender unable to see what’s actually happening on the portfolio.' },
      { icon: 'shieldAlert', title: 'Inconsistent SLA Performance', desc: 'Without portfolio-level oversight, performance varies unpredictably across the book.' }
    ],

    overview: {
      heading: 'Why Portfolio-Level Coordination Outperforms Account-by-Account Effort',
      subheading: 'Not Every Delinquent Account Needs the Same Treatment',
      summary: 'A portfolio of delinquent accounts isn’t uniform — some respond to a phone call, some need a field visit, and some are already past the point where legal action is the only path forward. Portfolio Management segments the book by risk and behavior signals, then routes each account to the channel most likely to resolve it, all under one coordinated operational SLA. SM Associates structures this with dedicated account oversight and regular performance reporting, so lenders see portfolio-level results, not just isolated case updates.',
      outcomes: [
        { title: 'Risk-Based Segmentation', desc: 'Accounts are grouped by default age, size, and behavior, not treated uniformly.' },
        { title: 'Coordinated Channel Routing', desc: 'Each account is routed to calling, field, or legal action based on what fits.' },
        { title: 'Portfolio-Level Visibility', desc: 'Reporting reflects the whole book’s performance, not isolated case status.' }
      ],
      useCases: [
        { title: 'Retail Credit Portfolios', desc: 'Managing early and late-stage recovery campaigns across a varied book.' },
        { title: 'Stressed Asset Portfolios', desc: 'Coordinating collections and asset foreclosure across acquired portfolios.' },
        { title: 'Multi-Product Loan Books', desc: 'Managing recovery across mixed retail, vehicle, and business loan accounts.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Risk-Based Segmentation', desc: 'Grouping accounts by default age, loan size, and behavior signals.', bullets: ['Segmentation by delinquency age and risk profile', 'Behavior-based propensity grouping', 'Dynamic re-segmentation as account status changes'], businessOutcome: 'Directs recovery effort to where it’s most likely to succeed.' },
      { title: 'Channel Routing', desc: 'Assigning each account to calling, field, or legal action.', bullets: ['Defined routing rules by segment', 'Coordinated handoff between channels', 'Escalation triggers for channel transitions'], businessOutcome: 'Matches the recovery approach to what each account actually needs.' },
      { title: 'Dedicated Account Oversight', desc: 'Assigning account management attention to the portfolio.', bullets: ['Dedicated account manager coordination', 'Regular portfolio performance reviews', 'Direct escalation pathway for the lender'], businessOutcome: 'Gives the lender a single point of accountability for the portfolio.' },
      { title: 'Cross-Channel Telemetry', desc: 'Tracking account status across every recovery channel.', bullets: ['Consolidated dashboard across calling, field, and legal status', 'Daily status synchronization', 'Single source of truth for account history'], businessOutcome: 'Removes the need to reconcile updates from separate channels.' },
      { title: 'Performance Reporting', desc: 'Delivering portfolio-level results, not just case-by-case updates.', bullets: ['Scheduled portfolio performance reviews', 'Yield and resolution-rate reporting', 'Trend visibility across the managed book'], businessOutcome: 'Gives the lender a clear view of how the whole portfolio is performing.' },
      { title: 'Portfolio Risk Flagging', desc: 'Translating segment-level outcomes into a structured risk read.', bullets: ['Consolidation of outcomes across segments', 'Flagging of underperforming segments', 'Structured reporting for the lender’s risk desk'], businessOutcome: 'Gives lenders visibility into which parts of the portfolio need attention.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'ingestion', label: 'Ingestion & Diagnostics', heading: 'Understanding What’s in the Portfolio', overview: 'Portfolio files are ingested and default profiles evaluated.', activities: ['Portfolio file ingestion', 'Default profile evaluation'], documents: [], risks: ['Starting segmentation on incomplete portfolio data'], deliverable: 'Risk-prioritized list.', benefit: 'Establishes an accurate starting picture of the portfolio.' },
      { id: 'segmentation', label: 'Borrower Segmentation', heading: 'Grouping Accounts by Risk and Behavior', overview: 'Accounts are grouped and campaign rules designed per segment.', activities: ['Risk-based account grouping', 'Channel routing rule design'], documents: [], risks: ['Uniform treatment masking segment-specific needs'], deliverable: 'Campaign rule map.', benefit: 'Ensures each segment gets the approach suited to it.' },
      { id: 'execution', label: 'Campaign Execution', heading: 'Running Calling, Field, and Legal Action', overview: 'Recovery actions are launched per the segment-specific plan.', activities: ['Calling campaign launch', 'Field and legal action coordination'], documents: [], risks: ['Uncoordinated execution across channels'], deliverable: 'Outbound action logs.', benefit: 'Keeps every channel moving in a coordinated way.' },
      { id: 'telemetry', label: 'Cross-Channel Telemetry', heading: 'Tracking Status Across Every Channel', overview: 'Account status is consolidated across calling, field, and legal stages.', activities: ['Status consolidation', 'Dashboard sync'], documents: [], risks: ['Fragmented visibility across separate channels'], deliverable: 'Unified account status record.', benefit: 'Gives the lender one place to see the full picture.' },
      { id: 'performance-review', label: 'Performance Review', heading: 'Assessing How the Portfolio Is Performing', overview: 'Scheduled reviews assess yield and resolution rates.', activities: ['Performance review scheduling', 'Yield and resolution analysis'], documents: [], risks: ['Underperforming segments going unnoticed'], deliverable: 'Performance review report.', benefit: 'Surfaces underperformance early enough to act on it.' },
      { id: 'report', label: 'Status Reporting', heading: 'Delivering Portfolio-Level Visibility', overview: 'Consolidated reporting on the full portfolio is delivered to the client.', activities: ['Report compilation', 'Client delivery'], documents: [], risks: ['Reporting that doesn’t reflect true portfolio status'], deliverable: 'Final portfolio status report.', benefit: 'Gives the lender clear, reliable portfolio-level insight.' }
    ],

    challengesHeading: 'Enterprise Portfolio Management Risks',
    challenges: [
      { title: 'Undifferentiated Outreach', desc: 'Treating all defaulters with the same campaign increases cost and reduces yield.', warningBadge: 'Process Risk', impact: 'Recovery effort is spent inefficiently across the portfolio.' },
      { title: 'Uncoordinated Actions', desc: 'Calling and field campaigns out of sync with legal notice timelines slow resolutions.', warningBadge: 'Coordination Risk', impact: 'Recovery stages work against each other instead of together.' },
      { title: 'Stale Portfolio Visibility', desc: 'Outdated status data leaves the lender unable to see real portfolio performance.', warningBadge: 'Visibility Risk', impact: 'Decisions are made on data that doesn’t reflect current reality.' },
      { title: 'Inconsistent Segment Performance', desc: 'Without active oversight, some segments underperform without anyone noticing.', warningBadge: 'Performance Risk', impact: 'Underperforming segments continue without correction.' },
      { title: 'Channel Handoff Gaps', desc: 'Accounts moving between calling, field, and legal stages can lose context.', warningBadge: 'Process Risk', impact: 'Later-stage channels act without the benefit of earlier history.' },
      { title: 'Compliance Drift Across Channels', desc: 'Different channels can drift from consistent compliance standards without oversight.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit risk from inconsistent conduct across recovery channels.' }
    ],

    processFlow: {
      title: 'Enterprise Portfolio Management Lifecycle',
      desc: 'A structured operating model that moves a portfolio from intake to ongoing, coordinated management.',
      steps: [
        { step: '01', title: 'Ingestion & Diagnostics', desc: 'Portfolio files are ingested and default profiles evaluated.', outcome: 'An accurate starting picture of the portfolio.' },
        { step: '02', title: 'Borrower Segmentation', desc: 'Accounts are grouped and routing rules designed.', outcome: 'A segment-specific plan for each part of the portfolio.' },
        { step: '03', title: 'Campaign Execution', desc: 'Calling, field, and legal actions are launched per the plan.', outcome: 'Coordinated recovery action across every channel.' },
        { step: '04', title: 'Cross-Channel Telemetry', desc: 'Account status is tracked across every recovery stage.', outcome: 'A single, unified view of portfolio status.' },
        { step: '05', title: 'Performance Reporting', desc: 'Portfolio-level results are reviewed and reported.', outcome: 'Clear visibility into what’s working and what needs attention.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Higher Recovery Yields', desc: 'Risk-based segmentation directs effort to where it’s most likely to succeed.', value: 'Improved resolution rates across the managed portfolio.' },
      { title: 'Reduced Operational Cost', desc: 'Coordinated routing avoids wasted effort on the wrong recovery channel.', value: 'Lower cost per resolved account.' },
      { title: 'Real-Time Portfolio Visibility', desc: 'Cross-channel telemetry gives the lender a current, accurate view.', value: 'Decisions made on current data, not stale reports.' },
      { title: 'Faster Issue Detection', desc: 'Regular performance review surfaces underperforming segments early.', value: 'Problems addressed before they affect the whole portfolio.' },
      { title: 'Preserved Account Context', desc: 'Coordinated handoffs keep case history intact across channels.', value: 'Later-stage channels act on complete history, not a blank slate.' },
      { title: 'Consistent Compliance', desc: 'Portfolio-level oversight maintains consistent conduct standards across channels.', value: 'Reduced regulatory exposure tied to inconsistent channel conduct.' }
    ],

    faqs: [
      { q: 'How often are performance updates synchronized?', a: 'Account status is synchronized daily, with detailed portfolio performance reviews scheduled on a regular cadence agreed with the client.' },
      { q: 'How do you decide which channel an account is routed to?', a: 'Routing follows defined rules based on delinquency age, risk profile, and behavior signals, with re-routing as account status changes.' }
    ],

    cta: {
      heading: 'Optimize Your Distressed Portfolio Strategy',
      subheading: 'Request a portfolio management walkthrough to discuss your loan book.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'npa-recovery': {
    eyebrow: 'Non-Performing Asset Resolution',
    title: 'NPA Recovery',
    subtitle: 'Resolving Non-Performing Assets Through Coordinated Legal and Asset Action',
    description: 'Resolving non-performing assets through coordinated legal notice and possession action.',
    primaryCtaText: 'Request an NPA Recovery Walkthrough',
    secondaryCtaText: 'Download Foreclosure Guides',

    problemStatement: [
      { icon: 'shieldAlert', title: 'Eviction Resistance', desc: 'Occupants resisting physical possession delay resolution and extend default cycles.' },
      { icon: 'trendingDown', title: 'Failed Auctions', desc: 'Low bidder turnout or notice errors can halt property liquidation entirely.' },
      { icon: 'briefcase', title: 'Asset Location Gaps', desc: 'Without alternate asset tracing, recovery options narrow when the primary collateral underperforms.' },
      { icon: 'fileWarning', title: 'Provisioning Lock-Up', desc: 'Slow NPA resolution keeps capital tied up in provisioning longer than necessary.' }
    ],

    overview: {
      heading: 'Why NPA Resolution Needs a Coordinated, Sequenced Process',
      subheading: 'Notice, Possession, and Auction Are Connected Steps, Not Separate Projects',
      summary: 'Resolving a non-performing asset moves through statutory notice, possession, and liquidation — and a delay or gap at any one stage stalls the rest. NPA Recovery coordinates this full sequence: legal notice enforcement, District Magistrate petition coordination, physical possession execution, secure custody, and auction support. SM Associates structures this around documented, tracked execution at each stage, so provisioning capital gets released as quickly as the statutory process allows.',
      outcomes: [
        { title: 'Sequenced Resolution', desc: 'Notice, possession, and auction stages move in coordinated order.' },
        { title: 'Documented Execution', desc: 'Every stage produces a record that supports the next one.' },
        { title: 'Protected Asset Value', desc: 'Secure custody protects collateral value through to liquidation.' }
      ],
      useCases: [
        { title: 'High-Ticket Mortgage Defaults', desc: 'Resolving residential and commercial property foreclosures.' },
        { title: 'ARC-Acquired Portfolios', desc: 'Coordinating asset repossession and auction on acquired stressed books.' },
        { title: 'Commercial Asset NPAs', desc: 'Resolving non-performing secured commercial loan accounts.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Notice Status Validation', desc: 'Confirming legal notice status before proceeding to possession.', bullets: ['Notice delivery proof verification', 'Statutory timeline compliance check', 'Documentation gap identification before escalation'], businessOutcome: 'Ensures the legal foundation is solid before possession proceeds.' },
      { title: 'DM Petition Coordination', desc: 'Filing and tracking District Magistrate petitions for possession authority.', bullets: ['Section 14 petition preparation', 'DM office coordination', 'Petition status tracking'], businessOutcome: 'Obtains the authority needed for physical possession.' },
      { title: 'Possession Execution', desc: 'Conducting physical possession under proper authority coordination.', bullets: ['Police liaison coordination', 'Geotagged possession documentation', 'Inventory logging on possession'], businessOutcome: 'Secures the asset through a defensible, documented process.' },
      { title: 'Alternate Asset Tracing', desc: 'Identifying other assets when the primary collateral underperforms.', bullets: ['Property and corporate registry cross-checks', 'Alternate asset identification', 'Recovery option expansion where applicable'], businessOutcome: 'Provides additional recovery paths beyond the primary collateral.' },
      { title: 'Secure Custody Management', desc: 'Protecting possessed assets pending liquidation.', bullets: ['Fenced, monitored custody storage', 'Ongoing condition tracking', 'Inventory management through the custody period'], businessOutcome: 'Protects asset value through to the auction stage.' },
      { title: 'NPA Risk Flagging', desc: 'Translating resolution progress into a structured risk read.', bullets: ['Consolidation of notice, possession, and custody status', 'Flagging of stalled or at-risk cases', 'Structured reporting for the lender’s recovery desk'], businessOutcome: 'Gives lenders visibility into which NPA cases need attention.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'account-ingestion', label: 'Account Ingestion', heading: 'Bringing the NPA Case Into the Process', overview: 'Loan records are ingested and notice status verified with the legal desk.', activities: ['Loan record ingestion', 'Notice status verification'], documents: [], risks: ['Starting resolution on an incomplete case file'], deliverable: 'NPA case log.', benefit: 'Establishes an accurate starting point for resolution.' },
      { id: 'notice-validation', label: 'Notice Validation', heading: 'Confirming the Legal Foundation Is Solid', overview: 'Notice delivery and statutory timeline compliance are confirmed.', activities: ['Notice delivery proof check', 'Statutory timeline review'], documents: [], risks: ['Proceeding to possession on a weak notice foundation'], deliverable: 'Notice delivery proof.', benefit: 'Ensures possession proceeds on solid legal ground.' },
      { id: 'possession-action', label: 'Possession Action', heading: 'Securing the Asset Physically', overview: 'Possession is executed under coordinated authority support.', activities: ['DM petition filing', 'Possession execution with police presence'], documents: [], risks: ['Possession resistance without proper coordination'], deliverable: 'Possession report.', benefit: 'Secures the asset through a defensible, documented process.' },
      { id: 'asset-tracing', label: 'Alternate Asset Tracing', heading: 'Expanding Recovery Options Where Needed', overview: 'Additional assets are identified when the primary collateral underperforms.', activities: ['Registry cross-checks', 'Alternate asset identification'], documents: [], risks: ['Recovery limited to an underperforming primary asset'], deliverable: 'Alternate asset trace record.', benefit: 'Provides additional recovery paths beyond the original collateral.' },
      { id: 'custody', label: 'Secure Custody', heading: 'Protecting the Asset Pending Liquidation', overview: 'Possessed assets are stored securely and monitored.', activities: ['Yard intake and inventory logging', 'Ongoing condition monitoring'], documents: [], risks: ['Asset value erosion in unsecured custody'], deliverable: 'Yard inventory receipt.', benefit: 'Protects asset value through to the liquidation stage.' },
      { id: 'auction-coordination', label: 'Auction Coordination', heading: 'Completing the Resolution Cycle', overview: 'Valuation and auction processes are coordinated to completion.', activities: ['Valuation coordination', 'Auction process support'], documents: [], risks: ['Liquidation delays from uncoordinated handoff'], deliverable: 'Auction certificate.', benefit: 'Converts secured assets into realized recovered capital.' }
    ],

    challengesHeading: 'Enterprise NPA Recovery Risks',
    challenges: [
      { title: 'Eviction Resistance', desc: 'Occupants resisting physical possession, delaying resolution and extending defaults.', warningBadge: 'Security Risk', impact: 'Possession delays extend the time capital stays locked in provisioning.' },
      { title: 'Failed Auctions', desc: 'Low bidder turnout or notice publication errors halting property auctions.', warningBadge: 'Liquidation Risk', impact: 'A failed auction means another cycle before capital is recovered.' },
      { title: 'Asset Location Gaps', desc: 'Without alternate asset tracing, recovery options narrow when primary collateral underperforms.', warningBadge: 'Recovery Risk', impact: 'Limited recovery options when the original collateral falls short.' },
      { title: 'Provisioning Lock-Up', desc: 'Slow resolution keeps capital tied up in provisioning longer than necessary.', warningBadge: 'Capital Risk', impact: 'Delayed resolution directly affects balance sheet efficiency.' },
      { title: 'Documentation Gaps', desc: 'Missing records at any stage can undermine the entire resolution chain.', warningBadge: 'Compliance Risk', impact: 'A documentation gap at one step can be challenged later in the process.' },
      { title: 'Custody Value Erosion', desc: 'Possessed assets stored without proper security lose value before liquidation.', warningBadge: 'Asset Risk', impact: 'Reduced realizable value at the eventual auction.' }
    ],

    processFlow: {
      title: 'Enterprise NPA Recovery Lifecycle',
      desc: 'A structured operating model that moves an NPA case from notice validation to a completed resolution.',
      steps: [
        { step: '01', title: 'Account Ingestion', desc: 'The NPA case is received and notice status verified.', outcome: 'A confirmed starting point for resolution.' },
        { step: '02', title: 'Notice Validation', desc: 'Notice delivery and statutory compliance are confirmed.', outcome: 'A solid legal foundation for possession.' },
        { step: '03', title: 'Possession Action', desc: 'The asset is physically secured under coordinated authority support.', outcome: 'The asset secured through a defensible process.' },
        { step: '04', title: 'Secure Custody', desc: 'The possessed asset is stored securely pending liquidation.', outcome: 'Asset value protected through to the auction stage.' },
        { step: '05', title: 'Auction Resolution', desc: 'Valuation and auction processes are completed.', outcome: 'Recovered capital and resolved NPA status.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Faster Provisioning Release', desc: 'Coordinated, sequenced resolution moves NPAs through to closure faster.', value: 'Capital released from provisioning sooner.' },
      { title: 'Protected Asset Value', desc: 'Secure custody and documented possession protect collateral through liquidation.', value: 'Higher realizable value at the eventual auction.' },
      { title: 'Expanded Recovery Options', desc: 'Alternate asset tracing provides additional paths when primary collateral underperforms.', value: 'More cases resolved even when the original asset falls short.' },
      { title: 'Defensible Resolution Records', desc: 'Documentation at every stage strengthens the institution’s position if challenged.', value: 'Stronger legal footing throughout the resolution process.' },
      { title: 'Reduced Possession Delays', desc: 'Coordinated authority liaison reduces resistance-driven delays.', value: 'Fewer possession attempts that stall or require rescheduling.' },
      { title: 'Improved Balance Sheet Metrics', desc: 'Faster, cleaner NPA resolution improves provisioning and asset-quality metrics.', value: 'Better-positioned balance sheet ratios on resolved accounts.' }
    ],

    faqs: [
      { q: 'Do you locate alternative properties of directors in default?', a: 'Property and corporate registries are cross-checked to identify other assets associated with defaulting directors, where relevant to the case.' },
      { q: 'How are NPA cases prioritized within a portfolio?', a: 'Cases are prioritized by default age, collateral value, and statutory timeline status to focus effort where it’s most time-sensitive.' }
    ],

    cta: {
      heading: 'Unlock Value from Stressed Assets',
      subheading: 'Request an NPA recovery walkthrough for your stressed asset portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'recovery-analytics': {
    eyebrow: 'Recovery Data Intelligence',
    title: 'Recovery Analytics',
    subtitle: 'Directing Recovery Effort Using Behavior Data, Not Guesswork',
    description: 'Directing recovery effort using borrower behavior data instead of guesswork.',
    primaryCtaText: 'Request a Recovery Analytics Walkthrough',
    secondaryCtaText: 'View Sample Analytics Format',

    problemStatement: [
      { icon: 'mapPin', title: 'Unoptimized Field Visits', desc: 'Dispatching field agents without route or propensity data drives up travel cost without improving recovery.' },
      { icon: 'trendingDown', title: 'Misjudged Settlement Levels', desc: 'Settlement offers set without data analysis risk leaving value on the table or chasing unviable targets.' },
      { icon: 'fileWarning', title: 'Undifferentiated Campaigns', desc: 'Treating all accounts the same wastes effort on low-propensity cases.' },
      { icon: 'shieldAlert', title: 'Delayed Visibility', desc: 'Without real-time data sync, campaign managers act on outdated information.' }
    ],

    overview: {
      heading: 'Why Behavior Data Changes How Recovery Campaigns Perform',
      subheading: 'Not Every Account Is Worth the Same Recovery Effort',
      summary: 'Recovery campaigns improve when effort is directed by data, not spread evenly across every account. Recovery Analytics builds settlement-propensity models from borrower behavior signals, optimizes field-visit routing to reduce wasted travel, and delivers results through a synced operational dashboard. SM Associates structures this as a data layer that plugs into existing collections and field operations, sharpening where effort goes rather than replacing the operations themselves.',
      outcomes: [
        { title: 'Propensity-Driven Targeting', desc: 'Settlement likelihood scoring directs effort toward accounts most likely to convert.' },
        { title: 'Optimized Field Routing', desc: 'Route planning reduces wasted travel on low-yield visits.' },
        { title: 'Synced Reporting', desc: 'Campaign data updates regularly, not on a stale weekly cycle.' }
      ],
      useCases: [
        { title: 'Retail Credit Card Analytics', desc: 'Scoring default books to decide between calling and field-visit campaigns.' },
        { title: 'Auto Finance Route Optimization', desc: 'Reducing travel cost across vehicle collections field visits.' },
        { title: 'Settlement Strategy Support', desc: 'Informing settlement offer levels with behavior-based analysis.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Borrower Behavior Profiling', desc: 'Analyzing payment history and account signals to understand settlement likelihood.', bullets: ['Payment history pattern analysis', 'Account signal review', 'Settlement-propensity scoring'], businessOutcome: 'Identifies which accounts are most likely to respond to outreach.' },
      { title: 'Field Route Optimization', desc: 'Planning field visits to reduce wasted travel.', bullets: ['Route planning based on case location density', 'Visit sequencing to minimize travel time', 'Dynamic re-routing as case status changes'], businessOutcome: 'Reduces field travel cost without sacrificing coverage.' },
      { title: 'Settlement Strategy Support', desc: 'Informing settlement offer levels with behavior-based analysis.', bullets: ['Behavior-informed settlement range guidance', 'Comparison against account-specific signals', 'Support for setting viable recovery targets'], businessOutcome: 'Helps avoid both undervalued settlements and unviable targets.' },
      { title: 'Campaign Performance Dashboards', desc: 'Giving campaign managers a synced, current view of progress.', bullets: ['Regular data synchronization', 'Campaign-level performance views', 'Drill-down to account-level status'], businessOutcome: 'Lets campaign managers act on current data, not stale reports.' },
      { title: 'Channel Mix Guidance', desc: 'Informing the calling-versus-field decision with data.', bullets: ['Channel-suitability scoring per account', 'Data-informed channel recommendation', 'Feedback loop as outcomes are observed'], businessOutcome: 'Improves the odds that each account gets the right initial approach.' },
      { title: 'Analytics Risk Flagging', desc: 'Translating data patterns into a structured risk read.', bullets: ['Consolidation of behavior and outcome data', 'Flagging of segments showing risk-pattern shifts', 'Structured reporting for the client’s recovery desk'], businessOutcome: 'Gives lenders early visibility into emerging portfolio patterns.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'data-ingestion', label: 'Data Ingestion', heading: 'Bringing Portfolio Data Into the Analysis', overview: 'Client portfolio data is ingested securely for analysis.', activities: ['Secure data ingestion', 'Data quality validation'], documents: [], risks: ['Analysis built on incomplete or inconsistent data'], deliverable: 'Active data log.', benefit: 'Establishes a reliable data foundation for analysis.' },
      { id: 'behavior-scoring', label: 'Behavior Scoring', heading: 'Understanding Settlement Likelihood', overview: 'Borrower behavior signals are analyzed to score settlement propensity.', activities: ['Payment history analysis', 'Propensity scoring'], documents: [], risks: ['Effort spread evenly without propensity insight'], deliverable: 'Segmented borrower registry.', benefit: 'Directs outreach effort toward the accounts most likely to convert.' },
      { id: 'route-optimization', label: 'Route Optimization', heading: 'Reducing Wasted Field Travel', overview: 'Field visit routes are planned to minimize unnecessary travel.', activities: ['Route planning', 'Visit sequencing'], documents: [], risks: ['Field budget wasted on inefficient routing'], deliverable: 'Optimized routing map.', benefit: 'Cuts travel cost without sacrificing coverage.' },
      { id: 'settlement-guidance', label: 'Settlement Guidance', heading: 'Informing Offer Levels With Data', overview: 'Behavior-based analysis supports settlement strategy decisions.', activities: ['Settlement range analysis', 'Strategy support delivery'], documents: [], risks: ['Settlement offers set without data grounding'], deliverable: 'Settlement strategy note.', benefit: 'Helps avoid undervalued or unviable settlement decisions.' },
      { id: 'dashboard-sync', label: 'Dashboard Sync', heading: 'Keeping Campaign Data Current', overview: 'Analytics outputs are synced to the client’s operational dashboard.', activities: ['Regular data synchronization', 'Dashboard update delivery'], documents: [], risks: ['Campaign managers acting on stale data'], deliverable: 'Synced analytics dashboard.', benefit: 'Lets campaign managers act on current, not outdated, information.' },
      { id: 'report', label: 'Performance Reporting', heading: 'Showing What the Data Is Revealing', overview: 'Consolidated reporting on analytics outcomes and campaign performance.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Insights not translated into actionable reporting'], deliverable: 'Telemetry analytics report.', benefit: 'Gives the client a clear, actionable view of campaign performance.' }
    ],

    challengesHeading: 'Enterprise Recovery Analytics Risks',
    challenges: [
      { title: 'Unoptimized Field Visits', desc: 'Dispatching field agents without route data increases travel costs.', warningBadge: 'Logistical Risk', impact: 'Field budgets are spent inefficiently relative to recovery outcomes.' },
      { title: 'Misjudged Settlement Levels', desc: 'Settlement offers set without data analysis can undervalue or overreach.', warningBadge: 'Strategy Risk', impact: 'Recovery value is lost to poorly calibrated settlement decisions.' },
      { title: 'Undifferentiated Campaigns', desc: 'Treating all accounts the same wastes effort on low-propensity cases.', warningBadge: 'Process Risk', impact: 'Recovery effort isn’t matched to where it’s most likely to succeed.' },
      { title: 'Delayed Visibility', desc: 'Without synced data, campaign managers act on outdated information.', warningBadge: 'Visibility Risk', impact: 'Decisions lag behind actual campaign performance.' },
      { title: 'Data Privacy Exposure', desc: 'Borrower behavior data must be handled under strict privacy and security controls.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit risk from inadequate data handling practices.' },
      { title: 'Channel Mismatch', desc: 'Accounts assigned to the wrong recovery channel waste both time and effort.', warningBadge: 'Allocation Risk', impact: 'Lower conversion when the initial channel choice doesn’t fit the account.' }
    ],

    processFlow: {
      title: 'Enterprise Recovery Analytics Lifecycle',
      desc: 'A structured operating model that moves portfolio data from ingestion to actionable campaign guidance.',
      steps: [
        { step: '01', title: 'Data Ingestion', desc: 'Portfolio data is ingested securely for analysis.', outcome: 'A reliable data foundation ready for scoring.' },
        { step: '02', title: 'Behavior Scoring', desc: 'Settlement propensity is scored from borrower behavior signals.', outcome: 'A segmented view of where outreach effort should focus.' },
        { step: '03', title: 'Route & Channel Optimization', desc: 'Field routes and channel mix are optimized using the scoring output.', outcome: 'Reduced wasted effort across calling and field channels.' },
        { step: '04', title: 'Dashboard Sync', desc: 'Analytics outputs are synced to the operational dashboard.', outcome: 'Campaign managers acting on current, not stale, data.' },
        { step: '05', title: 'Performance Reporting', desc: 'Outcomes are compiled and reported to the client.', outcome: 'A clear, actionable view of what the data revealed.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Lower Operational Cost', desc: 'Optimized routing reduces field collections travel expense.', value: 'Reduced cost per field visit across the campaign.' },
      { title: 'Higher Recovery Yield', desc: 'Propensity-based targeting directs effort toward higher-conversion accounts.', value: 'Improved settlement conversion rates.' },
      { title: 'Better Settlement Decisions', desc: 'Data-informed guidance helps avoid undervalued or unviable settlement targets.', value: 'More value captured per resolved account.' },
      { title: 'Current Campaign Visibility', desc: 'Synced dashboards give managers up-to-date performance data.', value: 'Decisions made on current information, not stale reports.' },
      { title: 'Smarter Channel Allocation', desc: 'Data-informed channel guidance improves the calling-versus-field decision.', value: 'Higher conversion from better-matched initial outreach.' },
      { title: 'Compliant Data Handling', desc: 'Structured privacy controls protect borrower data throughout analysis.', value: 'Reduced regulatory exposure tied to data handling practices.' }
    ],

    faqs: [
      { q: 'How do you protect borrower data privacy during analysis?', a: 'Borrower data is handled under structured access controls, with usage restricted to active case analysis and aligned with applicable data privacy expectations.' },
      { q: 'Does this replace our existing calling or field operations?', a: 'No — Recovery Analytics is a data layer that directs and sharpens existing calling and field operations rather than replacing them.' }
    ],

    cta: {
      heading: 'Direct Recovery Effort With Data, Not Guesswork',
      subheading: 'Request a recovery analytics walkthrough for your collections campaigns.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'recovery-consulting': {
    eyebrow: 'Risk & Recovery Advisory',
    title: 'Recovery Strategy Consulting',
    subtitle: 'Designing the Process Before Outsourcing the Execution',
    description: 'Reviewing and redesigning recovery processes before execution is scaled or outsourced.',
    primaryCtaText: 'Request a Recovery Strategy Consulting Discussion',
    secondaryCtaText: 'View Advisory Framework',

    problemStatement: [
      { icon: 'fileWarning', title: 'Outdated Collection Rules', desc: 'Internal scripts and processes that no longer align with current RBI calling rules.' },
      { icon: 'briefcase', title: 'Unmonitored Vendor Networks', desc: 'Third-party collection vendors operating without consistent audit oversight.' },
      { icon: 'shieldAlert', title: 'Process Design Gaps', desc: 'Recovery SOPs that were never formally designed, just accumulated over time.' },
      { icon: 'trendingDown', title: 'Inconsistent Compliance Posture', desc: 'Compliance practices that vary across teams without a unified standard.' }
    ],

    overview: {
      heading: 'Why Process Design Comes Before Scaling Recovery Operations',
      subheading: 'Outsourcing Execution Doesn’t Fix a Broken Process — It Scales It',
      summary: 'Lenders often look to outsource calling or field operations before addressing whether the underlying process — scripts, vendor oversight, compliance alignment — is actually sound. Recovery Strategy Consulting reviews recovery SOPs, audits vendor management practices, and aligns operations with RBI Fair Practices Code expectations before execution scales. SM Associates brings this perspective from decades of operating recovery functions directly, so the advice reflects what actually works on the ground, not just policy theory.',
      outcomes: [
        { title: 'Process-First Review', desc: 'SOPs and scripts are reviewed for soundness before scaling execution.' },
        { title: 'Vendor Oversight Design', desc: 'Audit frameworks bring consistency to third-party vendor management.' },
        { title: 'Ground-Informed Advice', desc: 'Recommendations come from operating experience, not theoretical frameworks.' }
      ],
      useCases: [
        { title: 'Internal Policy Restructuring', desc: 'Aligning collections calling scripts and schedules with RBI rules.' },
        { title: 'Vendor Management Audits', desc: 'Designing audit checklists for third-party collection vendors.' },
        { title: 'Pre-Scaling Process Review', desc: 'Assessing process readiness before scaling recovery operations.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'DRA Certified Field Force', value: '916+ Officers' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: '100% Compliant' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '₹4,800 Cr+' }
    ],

    capabilities: [
      { title: 'Recovery SOP Design', desc: 'Reviewing and redesigning standard operating procedures for recovery functions.', bullets: ['Current-state SOP review', 'Gap identification against best practice', 'Redesigned, documented procedures'], businessOutcome: 'Gives the recovery function a sound, documented process foundation.' },
      { title: 'Vendor Audit Framework Design', desc: 'Building consistent oversight standards for third-party vendors.', bullets: ['Vendor audit checklist design', 'Performance review framework', 'Escalation criteria for vendor issues'], businessOutcome: 'Brings consistency to how third-party vendors are managed.' },
      { title: 'Compliance Alignment Review', desc: 'Checking calling scripts and field conduct against current RBI expectations.', bullets: ['Script and process compliance review', 'RBI Fair Practices Code alignment check', 'Remediation recommendations for identified gaps'], businessOutcome: 'Reduces regulatory exposure tied to outdated practices.' },
      { title: 'Pre-Scaling Readiness Assessment', desc: 'Evaluating whether a process is ready to scale before outsourcing execution.', bullets: ['Process maturity assessment', 'Readiness gap identification', 'Scaling recommendation report'], businessOutcome: 'Prevents scaling a flawed process into a bigger problem.' },
      { title: 'Internal Policy Restructuring Support', desc: 'Helping internal teams redesign their own operating policies.', bullets: ['Policy review workshops', 'Restructuring recommendations', 'Implementation support guidance'], businessOutcome: 'Strengthens internal capability, not just outsourced execution.' },
      { title: 'Advisory Risk Flagging', desc: 'Translating process review findings into a structured risk read.', bullets: ['Consolidation of process and vendor findings', 'Risk-prioritized recommendation list', 'Structured reporting for leadership review'], businessOutcome: 'Gives leadership a clear, prioritized view of what to fix first.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'process-assessment', label: 'Process Assessment', heading: 'Reviewing the Current Recovery Process', overview: 'Existing SOPs and scripts are reviewed for soundness and compliance.', activities: ['Current-state SOP review', 'Script and process audit'], documents: [], risks: ['Scaling a process before its soundness is confirmed'], deliverable: 'Process assessment report.', benefit: 'Establishes whether the foundation is solid before scaling.' },
      { id: 'audit-diagnostic', label: 'Audit Diagnostic', heading: 'Identifying Specific Process Gaps', overview: 'Documents and processes are assembled and cross-checked against best practice.', activities: ['Document and process compilation', 'Gap identification against standards'], documents: [], risks: ['Gaps going unidentified without a structured diagnostic'], deliverable: 'Gap diagnostic report.', benefit: 'Surfaces specific, actionable issues rather than vague concerns.' },
      { id: 'redesign-proposal', label: 'Redesign Proposal', heading: 'Proposing the Improved Process', overview: 'A redesigned SOP and vendor oversight framework is proposed.', activities: ['SOP redesign drafting', 'Vendor audit framework design'], documents: [], risks: ['Recommendations disconnected from ground operating reality'], deliverable: 'Redesign proposal document.', benefit: 'Provides a concrete, implementable improvement plan.' },
      { id: 'compliance-review', label: 'Compliance Review', heading: 'Checking Alignment With Current Regulatory Expectations', overview: 'Scripts and conduct standards are reviewed against RBI Fair Practices expectations.', activities: ['RBI alignment check', 'Remediation recommendation'], documents: [], risks: ['Outdated practices continuing without a compliance check'], deliverable: 'Compliance alignment note.', benefit: 'Reduces regulatory exposure tied to outdated practices.' },
      { id: 'implementation-support', label: 'Implementation Support', heading: 'Helping the Redesign Actually Take Hold', overview: 'Guidance is provided as the client implements the redesigned process.', activities: ['Implementation guidance', 'Progress check-ins'], documents: [], risks: ['A good redesign failing at the implementation stage'], deliverable: 'Implementation support log.', benefit: 'Improves the odds that the redesign actually takes effect.' },
      { id: 'report', label: 'Advisory Report', heading: 'One Consolidated Set of Recommendations', overview: 'All findings and recommendations compiled into a structured report.', activities: ['Report compilation', 'Leadership presentation'], documents: [], risks: ['Recommendations not reaching the right decision-makers'], deliverable: 'Final advisory report.', benefit: 'Gives leadership a clear, prioritized basis for action.' }
    ],

    challengesHeading: 'Enterprise Recovery Strategy Risks',
    challenges: [
      { title: 'Outdated Collection Rules', desc: 'Internal scripts that no longer align with current RBI calling rules.', warningBadge: 'Regulatory Risk', impact: 'Outdated practices risk audit penalties and licensing scrutiny.' },
      { title: 'Unmonitored Vendor Networks', desc: 'Third-party vendors operating without consistent audit oversight.', warningBadge: 'Vendor Risk', impact: 'Inconsistent vendor conduct creates compliance and reputational exposure.' },
      { title: 'Undocumented Process Design', desc: 'Recovery SOPs that accumulated informally rather than being deliberately designed.', warningBadge: 'Process Risk', impact: 'Undocumented processes are hard to scale or audit reliably.' },
      { title: 'Inconsistent Compliance Posture', desc: 'Compliance practices that vary across teams without a unified standard.', warningBadge: 'Compliance Risk', impact: 'Uneven compliance creates unpredictable regulatory exposure.' },
      { title: 'Premature Scaling', desc: 'Outsourcing execution before confirming the underlying process is sound.', warningBadge: 'Scaling Risk', impact: 'A flawed process gets scaled into a bigger, costlier problem.' },
      { title: 'Implementation Drift', desc: 'A good process redesign that isn’t properly implemented loses its value.', warningBadge: 'Execution Risk', impact: 'Recommendations that don’t translate into actual practice change.' }
    ],

    processFlow: {
      title: 'Enterprise Recovery Strategy Engagement Model',
      desc: 'A structured advisory model that moves from process assessment to implemented improvement.',
      steps: [
        { step: '01', title: 'Process Assessment', desc: 'Existing SOPs and scripts are reviewed for soundness and compliance.', outcome: 'A clear picture of the current process state.' },
        { step: '02', title: 'Audit Diagnostic', desc: 'Specific gaps are identified against best practice and regulatory expectations.', outcome: 'A concrete list of issues to address.' },
        { step: '03', title: 'Redesign Proposal', desc: 'An improved SOP and vendor oversight framework is proposed.', outcome: 'A practical, implementable improvement plan.' },
        { step: '04', title: 'Compliance Review', desc: 'The redesign is checked against current RBI expectations.', outcome: 'Confidence that the new process is regulation-aligned.' },
        { step: '05', title: 'Implementation Support', desc: 'Guidance is provided as the client implements the changes.', outcome: 'A redesign that actually takes hold operationally.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Stronger Process Foundation', desc: 'A reviewed, redesigned SOP gives the recovery function a sound base to scale from.', value: 'Reduced risk of scaling a flawed process.' },
      { title: 'Consistent Vendor Oversight', desc: 'A structured audit framework brings consistency to vendor management.', value: 'Fewer compliance surprises from third-party vendor conduct.' },
      { title: 'Reduced Regulatory Exposure', desc: 'Compliance alignment review catches outdated practices before they become audit findings.', value: 'Lower risk of regulatory penalties tied to outdated processes.' },
      { title: 'Better Scaling Decisions', desc: 'Readiness assessment confirms a process is sound before execution is outsourced.', value: 'Fewer costly corrections after scaling has already begun.' },
      { title: 'Strengthened Internal Capability', desc: 'Policy restructuring support builds internal process design capability.', value: 'Less dependence on external advisory for future process changes.' },
      { title: 'Actionable Leadership Reporting', desc: 'Consolidated, prioritized findings give leadership a clear basis for decisions.', value: 'Faster, better-informed leadership decision-making.' }
    ],

    faqs: [
      { q: 'Do you design vendor selection parameters?', a: 'Vendor audit frameworks include criteria that can inform selection decisions, alongside ongoing performance oversight standards.' },
      { q: 'Is this advisory work, or do you also help implement the changes?', a: 'Both — the engagement includes implementation support guidance, not just a written recommendation report.' }
    ],

    cta: {
      heading: 'Strengthen Your Recovery Process Before You Scale',
      subheading: 'Request a recovery strategy consulting discussion to review your current process design.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'services': {
    eyebrow: 'Service Directory',
    title: 'Unified Solutions Across the Credit and Asset Lifecycle',
    description: 'Mitigate risk, accelerate resolutions, and protect margins with specialized field collections, customer profiling, and legal foreclosures.',
    primaryCtaText: 'Discuss Portfolio Mandate',
    secondaryCtaText: 'Download Services Brochure',
    trustStatement: 'Providing comprehensive recovery and verification services across Southern India since 2000.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates offers a full suite of risk management and debt resolution services. We manage calling, doorstep visits, legal notice filings, repossessions, and secure warehousing under a single SLA.',
      outcomes: [
        { title: 'Service Lines', desc: 'Over 30 specialized collections and verification service lines.' },
        { title: 'Branch Coverage', desc: '35 branch offices active across South Indian states.' },
        { title: 'Staff Capacity', desc: '916+ trained professionals operating under strict compliance.' }
      ],
      useCases: [
        { title: 'Pre-Disbursal Verifications', desc: 'Physical and digital validations checks for loan applicants.' },
        { title: 'Late-Stage Resolutions', desc: 'Secured asset repossession, yard storage, and auction coordination.' }
      ]
    },
    stats: [
      { value: '30+', label: 'Specialized Service Lines' },
      { value: '35', label: 'Operations Branches' },
      { value: '916+', label: 'Trained Professionals' }
    ],
    challenges: [
      { title: 'Vendor Fragmentation', desc: 'Lenders managing different call centers, field agents, and legal counsels, causing delays and compliance slips.', warningBadge: 'Operations Gap', impactFormula: 'Resolution TAT + 45%' },
      { title: 'High NPA Provisioning', desc: 'Uncoordinated field and calling campaigns increasing operational costs.', warningBadge: 'Capital Friction', impactFormula: 'Operation Cost + 30%' }
    ],
    failCompare: [
      {
        dimension: 'Operations Control',
        traditional: 'Separate companies handle call centers, field visits, and legal notices, causing data gaps.',
        sm: 'Calling, field, and legal departments synchronized on our unified dashboard console.'
      },
      {
        dimension: 'Compliance Auditing',
        traditional: 'Manual logs with no voice recordings or geofenced visit verification checks.',
        sm: '100% VoIP voice logs and geotagged field visit coordinates logs.'
      }
    ],
    framework: {
      title: 'Structured Operational Framework',
      desc: 'A synchronized collections engine combining digital, ground, and legal enforcements.',
      solutions: [
        { title: 'Verification Division', desc: 'doorstep checks and document validations checking applicant stability.' },
        { title: 'Collections & Recovery', desc: 'DRA-certified call campaigns and geofenced doorstep visits.' }
      ]
    },
    capabilities: [
      { title: 'Legal & SARFAESI support', desc: 'Notice drafting and District Magistrate Section 14 petition filings.', businessOutcome: 'Enforces legal pressure to resolve defaults.' },
      { title: 'Asset Seizure & Yards', desc: 'Insured storage yards and heavy vehicle transit management.', businessOutcome: 'Protects collateral values throughout the auction window.' }
    ],
    workflow: [
      { step: '01', title: 'Mandate Intake', objective: 'Verify default files', action: 'Ingest portfolio files and evaluate account details.', deliverable: 'Risk prioritized list.' },
      { step: '02', title: 'SOP Alignment', objective: 'Map campaign rules', action: 'Agree calling/visit scripts and coordinate schedules.', deliverable: 'Active campaign rule map.' },
      { step: '03', title: 'Staff Allocation', objective: 'Allocate cases to field reps', action: 'Dispatch cases to regional branch officers and call seats.', deliverable: 'Active campaign mapping.' },
      { step: '04', title: 'Operations Launch', objective: 'Deliver performance audits', action: 'Launch calling, doorstep visits, and legal enforcements.', deliverable: 'Telemetry analytics report.' }
    ],
    techEnablement: {
      title: 'Operations Dashboard',
      desc: 'Real-time telemetry showing call voice files and field check-ins.',
      modules: [
        { title: 'Operations Dashboard', desc: 'Lenders track notice status, call recordings, and field coordinates.' }
      ]
    },
    geoScope: {
      title: 'Geographical Hub Network',
      desc: 'Pan-regional presence across Southern India with hub branch operations.',
      stats: [
        { label: 'Operational Coverage', value: 'Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, Puducherry' },
        { label: 'Logistics Range', value: '150 KM / Hub' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned calling & visits',
      '100% IIBF DRA Certified Teams',
      '180-Day Secure Call Audio Archiving'
    ],
    industriesServed: [
      { name: 'Public Sector Banks', scenario: 'High-volume retail credit card default recovery.', framework: 'Compliance dialer scripts' },
      { name: 'Asset Reconstruction Companies', scenario: 'NPA collections and coordinate settlements.', framework: 'Asset valuations verification check' }
    ],
    operationalMetrics: [
      { value: '30+', label: 'Specialized Service Lines' },
      { value: '35', label: 'Operations Branches' },
      { value: '916+', label: 'Trained Professionals' }
    ],
    businessOutcomes: [
      { title: 'Reduced Operating Overhead', desc: 'Outsourcing calling campaigns removes recruitment and infrastructure costs.' },
      { title: 'Complete Compliance Protection', desc: 'Recorded lines and time-locks prevent regulatory violations.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Success in Integrated Execution',
      challenge: 'A nationalized bank had a legacy portfolio of default personal loans, with local agencies unable to resolve accounts.',
      approach: 'SM Associates deployed a unified recovery program, combining tele-calling with ground visits.',
      execution: 'Triggers checks for alternate contact records, launched calling campaigns, and assigned ground agents for address checks.',
      outcome: 'Resolved 78% of delinquent accounts within 120 days, releasing provisioning capital.'
    },
    faqs: [
      { q: 'Do you package multiple services under single master contracts?', a: 'Yes. We offer integrated services agreements covering verification, collections, and legal foreclosures under unified SLAs.' }
    ],
    cta: {
      heading: 'Optimize Your Risk Operations Portfolio Today',
      subheading: 'Request a copy of our service catalogues, branch locations, and pricing schedules.',
      buttonText: 'Connect with a Sales Officer',
      href: '/contact'
    }
  }
};
