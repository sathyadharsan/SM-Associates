export const investigationContent = {
  'due-diligence': {
    eyebrow: 'Pre-Transaction Risk Investigation',
    title: 'Due Diligence',
    subtitle: 'Independent Investigation Before a Lending or Recovery Decision Is Made',
    description: 'Conducting independent borrower, business, and asset investigation ahead of lending or recovery decisions.',
    primaryCtaText: 'Request a Due Diligence Walkthrough',
    secondaryCtaText: 'Download Due Diligence Standards',

    problemStatement: [
      { icon: 'briefcase', title: 'Unverified Borrower Background', desc: 'Lending or empanelment decisions made without independent background checks carry hidden risk.' },
      { icon: 'fileWarning', title: 'Undisclosed Liabilities', desc: 'Existing debts or legal disputes not disclosed by the borrower can surface only after the decision is made.' },
      { icon: 'trendingDown', title: 'Asset Misrepresentation', desc: 'Declared assets or business standing may not match ground reality.' },
      { icon: 'shieldAlert', title: 'Reputational Exposure', desc: 'Proceeding without due diligence on a counterparty creates reputational risk if issues surface later.' }
    ],

    overview: {
      heading: 'Why Independent Investigation Comes Before the Decision, Not After',
      subheading: 'A Declared Profile Is Not a Verified One',
      summary: 'Major lending, recovery, or empanelment decisions are often made on the strength of self-declared information about a borrower, business, or counterparty. Due Diligence closes that gap with independent investigation — cross-checking registries, verifying business and asset claims, and surfacing undisclosed liabilities or disputes before the decision is finalized. SM Associates delivers this as a per-engagement investigation service for Banks, NBFCs, and ARCs who need a verified picture, not a declared one.',
      outcomes: [
        { title: 'Independent Verification', desc: 'Findings are based on direct investigation, not self-declared information.' },
        { title: 'Undisclosed Risk Surfaced', desc: 'Liabilities, disputes, or misrepresentations are identified before the decision is made.' },
        { title: 'Decision-Ready Reporting', desc: 'Findings are delivered in a structured report the client can act on directly.' }
      ],
      useCases: [
        { title: 'Pre-Lending Investigation', desc: 'Investigating a borrower or business before a major credit decision.' },
        { title: 'Pre-Empanelment Checks', desc: 'Verifying a counterparty or vendor before formal empanelment.' },
        { title: 'Pre-Acquisition Asset Review', desc: 'Investigating assets or portfolios before an ARC acquisition decision.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: 'Multi-Stage' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: 'Technology-Enabled' },
      { icon: 'timer', title: 'Turnaround Discipline', value: 'Compliance-Driven' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: 'Enterprise-Grade' }
    ],

    capabilities: [
      { title: 'Borrower Background Investigation', desc: 'Independently verifying a borrower’s declared background.', bullets: ['Identity and background cross-check', 'Credit history and dispute record review', 'Reputation and conduct check where relevant'], businessOutcome: 'Confirms the borrower profile is genuine before the decision proceeds.' },
      { title: 'Business Standing Verification', desc: 'Confirming a business’s operational and registered status.', bullets: ['On-site business operation confirmation', 'Registry and license cross-check', 'Financial standing review where accessible'], businessOutcome: 'Confirms the business is what it claims to be before proceeding.' },
      { title: 'Asset & Liability Investigation', desc: 'Verifying declared assets and surfacing undisclosed liabilities.', bullets: ['Property and asset registry cross-checks', 'Undisclosed liability and dispute search', 'Encumbrance and litigation history check'], businessOutcome: 'Surfaces risk that wouldn’t appear in self-declared information.' },
      { title: 'Counterparty Investigation', desc: 'Investigating vendors, partners, or empanelment candidates.', bullets: ['Counterparty background verification', 'Reference and track-record checks', 'Conflict-of-interest screening'], businessOutcome: 'Reduces risk before formal empanelment or partnership.' },
      { title: 'Portfolio-Level Due Diligence', desc: 'Investigating acquired or stressed asset portfolios.', bullets: ['Batch investigation across portfolio accounts', 'Consistent methodology across the portfolio', 'Consolidated findings for ARC decision-making'], businessOutcome: 'Gives ARCs a verified basis for portfolio acquisition decisions.' },
      { title: 'Due Diligence Risk Flagging', desc: 'Translating investigation findings into a structured risk read.', bullets: ['Consolidation of background, asset, and liability findings', 'Risk-level classification of findings', 'Structured reporting for the client’s decision-making team'], businessOutcome: 'Gives the client a clear, prioritized view of what was found.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'background-check', label: 'Background Check', heading: 'Verifying the Declared Profile', overview: 'The borrower or counterparty’s declared background is independently verified.', activities: ['Identity and background cross-check', 'Credit and dispute history review'], documents: [], risks: ['Proceeding on an unverified declared profile'], deliverable: 'Background investigation report.', benefit: 'Confirms the profile is genuine before the decision proceeds.' },
      { id: 'business-verification', label: 'Business Verification', heading: 'Confirming the Business Actually Operates', overview: 'On-site and registry checks confirm the business’s standing.', activities: ['On-site operation confirmation', 'Registry and license cross-check'], documents: [], risks: ['Business standing not matching its declared profile'], deliverable: 'Business standing report.', benefit: 'Confirms the business is what it claims to be.' },
      { id: 'asset-investigation', label: 'Asset Investigation', heading: 'Verifying Declared Assets', overview: 'Declared assets are cross-checked against registry records.', activities: ['Property and asset registry cross-check', 'Encumbrance verification'], documents: [], risks: ['Declared assets not matching registry records'], deliverable: 'Asset verification note.', benefit: 'Confirms declared assets are real and unencumbered as claimed.' },
      { id: 'liability-search', label: 'Liability Search', heading: 'Surfacing What Wasn’t Disclosed', overview: 'A search for undisclosed liabilities, disputes, or litigation history.', activities: ['Undisclosed liability search', 'Litigation and dispute history check'], documents: [], risks: ['Undisclosed liabilities surfacing only after the decision is made'], deliverable: 'Liability search report.', benefit: 'Surfaces risk before it becomes a post-decision surprise.' },
      { id: 'risk-consolidation', label: 'Risk Consolidation', heading: 'Bringing Findings Together', overview: 'All findings are consolidated into a risk-prioritized view.', activities: ['Findings consolidation', 'Risk-level classification'], documents: [], risks: ['Fragmented findings obscuring the overall risk picture'], deliverable: 'Consolidated risk note.', benefit: 'Gives the client one clear view of what was found and how serious it is.' },
      { id: 'report', label: 'Final Report', heading: 'One Decision-Ready Due Diligence Report', overview: 'All findings compiled into a single structured report for the client.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Fragmented documentation across the investigation'], deliverable: 'Final due diligence report.', benefit: 'Gives the client a decision-ready report, not raw field notes.' }
    ],

    challengesHeading: 'Enterprise Due Diligence Risks',
    challenges: [
      { title: 'Unverified Borrower Background', desc: 'Decisions made without independent background checks carry hidden risk.', warningBadge: 'Background Risk', impact: 'Decisions proceed on unverified information that may not hold up.' },
      { title: 'Undisclosed Liabilities', desc: 'Existing debts or legal disputes not disclosed by the counterparty.', warningBadge: 'Liability Risk', impact: 'Undisclosed obligations surface only after the decision is finalized.' },
      { title: 'Asset Misrepresentation', desc: 'Declared assets or business standing not matching ground reality.', warningBadge: 'Misrepresentation Risk', impact: 'Decisions based on overstated or misrepresented assets.' },
      { title: 'Reputational Exposure', desc: 'Proceeding without due diligence on a counterparty creates reputational risk.', warningBadge: 'Reputational Risk', impact: 'Issues surfacing later can damage the institution’s standing.' },
      { title: 'Incomplete Portfolio Investigation', desc: 'Acquiring a portfolio without account-level due diligence hides risk concentration.', warningBadge: 'Portfolio Risk', impact: 'Acquired portfolios may carry more risk than initially understood.' },
      { title: 'Delayed Findings', desc: 'Slow due diligence delivery can hold up time-sensitive decisions.', warningBadge: 'Timeline Risk', impact: 'Decision timelines are delayed waiting on investigation findings.' }
    ],

    processFlow: {
      title: 'Enterprise Due Diligence Lifecycle',
      desc: 'A structured operating model that moves an engagement from intake to a decision-ready report.',
      steps: [
        { step: '01', title: 'Engagement Scoping', desc: 'The investigation scope is defined based on the decision being made.', outcome: 'A clear scope covering what needs to be verified.' },
        { step: '02', title: 'Background & Business Checks', desc: 'Borrower background and business standing are independently verified.', outcome: 'A confirmed or challenged declared profile.' },
        { step: '03', title: 'Asset & Liability Investigation', desc: 'Declared assets are verified and undisclosed liabilities searched.', outcome: 'A fuller picture of the counterparty’s actual position.' },
        { step: '04', title: 'Risk Consolidation', desc: 'All findings are consolidated into a risk-prioritized view.', outcome: 'A clear, prioritized summary of what was found.' },
        { step: '05', title: 'Final Reporting', desc: 'Findings are compiled into a decision-ready report.', outcome: 'A report the client can act on directly.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Verified Decision Basis', desc: 'Decisions rest on independently verified information, not self-declared claims.', value: 'Reduced risk of decisions based on inaccurate information.' },
      { title: 'Surfaced Hidden Risk', desc: 'Undisclosed liabilities and misrepresentations are caught before the decision.', value: 'Fewer post-decision surprises from undisclosed issues.' },
      { title: 'Reduced Reputational Exposure', desc: 'Independent investigation reduces the risk of reputational fallout from a bad counterparty.', value: 'Lower institutional risk tied to counterparty selection.' },
      { title: 'Better Portfolio Acquisition Decisions', desc: 'Account-level due diligence gives ARCs a clearer risk picture before acquisition.', value: 'More informed pricing and risk assessment on acquired portfolios.' },
      { title: 'Faster, Decision-Ready Findings', desc: 'Structured reporting gets findings into the client’s hands in a usable format.', value: 'Less time spent interpreting raw investigation notes.' },
      { title: 'Defensible Due Diligence Record', desc: 'A documented investigation process supports the institution’s own governance standards.', value: 'Stronger internal audit trail for major decisions.' }
    ],

    faqs: [
      { q: 'What kind of decisions is due diligence typically used for?', a: 'Pre-lending credit decisions, vendor or partner empanelment, and pre-acquisition review of portfolios or assets are the most common use cases.' },
      { q: 'Can due diligence be conducted at the portfolio level for an ARC acquisition?', a: 'Yes — batch investigation across portfolio accounts is available, with consistent methodology and consolidated findings for the acquisition decision.' }
    ],

    cta: {
      heading: 'Verify Before You Decide',
      subheading: 'Request a due diligence walkthrough for your next lending, empanelment, or acquisition decision.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'skip-tracing': {
    eyebrow: 'Borrower Location Intelligence',
    title: 'Skip Tracing',
    subtitle: 'Re-Establishing Contact With Absconding and Hard-to-Reach Borrowers',
    description: 'Re-establishing contact with absconding borrowers through structured digital and ground search.',
    primaryCtaText: 'Request a Skip Tracing Walkthrough',
    secondaryCtaText: 'Download Investigation Standards',

    problemStatement: [
      { icon: 'mapPin', title: 'Borrower Relocation', desc: 'Borrowers shifting states or shutting down registered offices to avoid enforcement.' },
      { icon: 'fileWarning', title: 'Stale Contact Records', desc: 'Outdated phone numbers and addresses leave accounts with no working contact path.' },
      { icon: 'shieldAlert', title: 'Stalled Legal Process', desc: 'Notices can’t be served and recovery can’t proceed without a current, valid address.' },
      { icon: 'trendingDown', title: 'Aging Write-Off Risk', desc: 'The longer a borrower stays untraced, the colder and harder to recover the account becomes.' }
    ],

    overview: {
      heading: 'Why Untraced Doesn’t Mean Unrecoverable',
      subheading: 'A Cold Account Just Needs the Right Search Method',
      summary: 'When a borrower stops responding and their last known address turns out to be invalid, many recovery processes simply stall. Skip Tracing treats this as a structured investigative problem rather than a dead end — cross-checking digital and registry databases, then verifying the most promising leads on the ground. SM Associates structures this around a documented search protocol and a standardized update format, so located borrowers translate into restarted recovery action, not just a found phone number.',
      outcomes: [
        { title: 'Structured Search Method', desc: 'A defined sequence of database and ground checks, not ad-hoc guesswork.' },
        { title: 'Verified Leads', desc: 'Located contacts are ground-verified before being reported as confirmed.' },
        { title: 'Actionable Updates', desc: 'Confirmed details are delivered in a format that plugs directly into recovery or legal action.' }
      ],
      useCases: [
        { title: 'Write-Off Portfolio Reactivation', desc: 'Locating legacy defaults to reopen stalled recovery pipelines.' },
        { title: 'Legal Notice Delivery Support', desc: 'Updating borrower locations to enable valid notice service.' },
        { title: 'Pre-Litigation Address Confirmation', desc: 'Confirming current address details before filing court action.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: 'Compliance-Driven' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: 'Multi-Stage' },
      { icon: 'timer', title: 'Turnaround Discipline', value: 'Multi-Stage' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: 'Multi-Stage' }
    ],

    capabilities: [
      { title: 'Digital Database Sourcing', desc: 'Cross-checking carrier and public registries for active contact leads.', bullets: ['Carrier database cross-checks for active numbers', 'Public registry searches for alternative contacts', 'Identification of the most promising leads for ground follow-up'], businessOutcome: 'Generates verifiable leads before any field resources are deployed.' },
      { title: 'Registry Cross-Referencing', desc: 'Checking corporate and property registries for alternate contact points.', bullets: ['MCA and GST registry cross-checks', 'Property registry searches for alternate addresses', 'Identification of associated business or property records'], businessOutcome: 'Surfaces leads a basic contact-list search would miss.' },
      { title: 'Ground Verification', desc: 'Confirming leads through on-site, discreet checks.', bullets: ['On-site verification of leading address candidates', 'Neighbor or local-contact discreet inquiries', 'Geotagged confirmation of verified locations'], businessOutcome: 'Turns a database lead into a confirmed, actionable location.' },
      { title: 'Local Informant Coordination', desc: 'Drawing on branch-level local knowledge for hard-to-trace cases.', bullets: ['Coordination with branch-level local contacts', 'Discreet community-level inquiries', 'Cross-validation against digital lead sources'], businessOutcome: 'Adds a local-knowledge layer that pure database search lacks.' },
      { title: 'Contact Record Updates', desc: 'Delivering confirmed details in a usable, structured format.', bullets: ['Structured update of contact and address records', 'Delivery in the format the client’s system requires', 'Clear confidence flagging on each located lead'], businessOutcome: 'Lets recovery or legal teams act immediately on the update.' },
      { title: 'Trace Risk Flagging', desc: 'Translating search outcomes into a structured risk read.', bullets: ['Consolidation of search outcomes across the case', 'Flagging of cases requiring extended search effort', 'Structured reporting for the client’s recovery desk'], businessOutcome: 'Gives lenders visibility into which cases are progressing and which need escalation.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'case-intake', label: 'Case Intake', heading: 'Starting the Search With What’s Known', overview: 'Case files are ingested and an initial database query is launched.', activities: ['Case file ingestion', 'Initial database query'], documents: [], risks: ['Starting from outdated or incomplete case data'], deliverable: 'Active case file.', benefit: 'Establishes the starting point for a structured search.' },
      { id: 'database-scan', label: 'Database Scan', heading: 'Searching Digital and Registry Sources', overview: 'Corporate and carrier registries are queried for alternative contacts.', activities: ['Carrier database query', 'Corporate registry cross-check'], documents: [], risks: ['Stale registry data producing dead-end leads'], deliverable: 'Alternative contact leads log.', benefit: 'Generates candidate leads before field resources are committed.' },
      { id: 'ground-dispatch', label: 'Ground Dispatch', heading: 'Verifying the Most Promising Leads On-Site', overview: 'Field investigators verify leading address candidates in person.', activities: ['On-site verification visit', 'Neighbor or local-contact inquiry'], documents: [], risks: ['Unverified leads reported as confirmed'], deliverable: 'Located address record.', benefit: 'Converts a digital lead into a ground-confirmed location.' },
      { id: 'informant-check', label: 'Local Informant Check', heading: 'Drawing on Local Knowledge for Hard Cases', overview: 'Branch-level local contacts are engaged for cases that resist standard search.', activities: ['Local informant coordination', 'Community-level discreet inquiry'], documents: [], risks: ['Cases remaining untraced without a local-knowledge layer'], deliverable: 'Local verification note.', benefit: 'Adds a search layer database checks alone can’t provide.' },
      { id: 'record-update', label: 'Record Update', heading: 'Delivering a Usable, Confirmed Update', overview: 'Confirmed details are structured and delivered to the client’s system.', activities: ['Structured record compilation', 'Delivery in client-required format'], documents: [], risks: ['Updates delivered in a format recovery teams can’t act on'], deliverable: 'Updated account record.', benefit: 'Lets the recovery or legal team act immediately.' },
      { id: 'report', label: 'Case Status Report', heading: 'Showing Progress Across the Search', overview: 'Consolidated status reporting across all active trace cases.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across active cases'], deliverable: 'Trace status report.', benefit: 'Gives the client visibility into search progress without chasing updates.' }
    ],

    challengesHeading: 'Enterprise Skip Tracing Risks',
    challenges: [
      { title: 'Borrower Relocation', desc: 'Borrowers shifting states or shutting registered offices to avoid enforcement.', warningBadge: 'Relocation Risk', impact: 'Recovery stalls without a current address to act on.' },
      { title: 'Fictitious Application Details', desc: 'Applicants using fake co-signers or ghost company profiles to secure loans.', warningBadge: 'Application Risk', impact: 'Standard contact details lead nowhere from the outset.' },
      { title: 'Stale Database Records', desc: 'Outdated registry or carrier data produces dead-end leads.', warningBadge: 'Data Risk', impact: 'Search effort is wasted chasing information that’s no longer current.' },
      { title: 'Unverified Lead Reporting', desc: 'A located address that isn’t ground-verified can send recovery action to the wrong place.', warningBadge: 'Verification Risk', impact: 'Acting on an unverified lead wastes recovery resources.' },
      { title: 'Cross-State Search Gaps', desc: 'Borrowers relocating across state lines can fall outside a narrow search network.', warningBadge: 'Coverage Risk', impact: 'Limited search reach lets relocated borrowers stay untraced.' },
      { title: 'Compliance in Information Sourcing', desc: 'Tracing methods must stay within data privacy and banking conduct rules.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit regulatory risk from non-compliant sourcing methods.' }
    ],

    processFlow: {
      title: 'Enterprise Skip Tracing Lifecycle',
      desc: 'A structured operating model that moves a cold case from intake to a verified, actionable update.',
      steps: [
        { step: '01', title: 'Case Intake', desc: 'The case file is received and an initial database query launched.', outcome: 'A confirmed starting point for the search.' },
        { step: '02', title: 'Database Scan', desc: 'Carrier and registry databases are queried for alternative contacts.', outcome: 'A set of candidate leads ready for verification.' },
        { step: '03', title: 'Ground Verification', desc: 'The most promising leads are verified on-site.', outcome: 'A confirmed, ground-verified location.' },
        { step: '04', title: 'Local Informant Check', desc: 'Hard-to-trace cases draw on local-level knowledge.', outcome: 'An additional search layer for cases that resist standard methods.' },
        { step: '05', title: 'Record Update', desc: 'Confirmed details are delivered in a structured, actionable format.', outcome: 'A usable update ready to drive recovery or legal action.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reactivated Recovery Pipelines', desc: 'Locating missing borrowers allows lenders to resume stalled recovery action.', value: 'Cold accounts converted back into active recovery cases.' },
      { title: 'Enabled Legal Notice Delivery', desc: 'Confirmed addresses allow legal notices to be served validly.', value: 'Fewer cases stalled by undeliverable notices.' },
      { title: 'Reduced Write-Off Aging', desc: 'Earlier re-contact slows the aging of accounts toward full write-off.', value: 'Lower share of the portfolio reaching unrecoverable status.' },
      { title: 'Verified, Actionable Leads', desc: 'Ground-verified updates mean recovery teams act on confirmed information.', value: 'Recovery effort isn’t wasted on unverified leads.' },
      { title: 'Cross-Regional Search Reach', desc: 'A regional branch network extends search beyond a single district.', value: 'Better coverage for borrowers who relocate across state lines.' },
      { title: 'Compliant Search Conduct', desc: 'Structured, documented sourcing methods stay within data privacy expectations.', value: 'Reduced regulatory exposure tied to information-sourcing conduct.' }
    ],

    faqs: [
      { q: 'Do you locate alternative properties owned by the borrower?', a: 'Property and corporate registries are cross-checked to identify other assets associated with the borrower, where relevant to the case.' },
      { q: 'What happens if a borrower still can’t be located after the standard search?', a: 'The case is flagged with its search status and findings to date, so the client can decide on further escalation or closure.' }
    ],

    cta: {
      heading: 'Locate Your Missing Borrowers',
      subheading: 'Request a skip tracing walkthrough for your legacy write-off portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'address-tracing': {
    eyebrow: 'Location Confirmations',
    title: 'Confirm Active Residential & Business Addresses',
    description: 'Locate current physical addresses of non-responsive borrowers to ensure successful legal notice delivery and ground visits.',
    primaryCtaText: 'Request Address Tracing',
    secondaryCtaText: 'Review Address Checklist',
    trustStatement: 'Confirming notice delivery success across 180+ districts with an 88% address find rate.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates locates current physical addresses for legal notices. We cross-reference local post office registers, sub-registrar files, and municipal records to resolve ghost addresses and notice returns.',
      outcomes: [
        { title: 'Address Find Rate', desc: '88% success rate locating active borrower residences.' },
        { title: 'Coverage Scope', desc: 'Deep ground reach covering over 180 districts in South India.' },
        { title: 'Notice Servicing', desc: 'Enabling successful legal notice deliveries with zero return rates.' }
      ],
      useCases: [
        { title: 'Returned Notice Resolution', desc: 'Locating active addresses after notices are returned undelivered.' },
        { title: 'Pre-Litigation Address Checks', desc: 'Confirming residential details before filing court cases.' }
      ]
    },
    stats: [
      { value: '88%', label: 'Address Find Rate' },
      { value: '180+', label: 'Districts Covered' },
      { value: '3 business days', label: 'Average Locate TAT' }
    ],
    challenges: [
      { title: 'Notice Return Gaps', desc: 'Legal notices returned due to wrong address details, delaying court hearings.', warningBadge: 'Delivery Defect', impactFormula: 'Court TAT + 90 Days' },
      { title: 'Tenant Address Changes', desc: 'Borrowers vacating rental homes without updating address records.', warningBadge: 'Tenant Skip', impactFormula: 'NPA Provisioning + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Address Check Sourcing',
        traditional: 'Accepting paper post office returns as final, stalling court filings.',
        sm: 'Ground checks verifying directories, neighbor inputs, and municipal utility files.'
      },
      {
        dimension: 'Photo Telemetry',
        traditional: 'No verification of visit checks, leading to unreliable updates.',
        sm: 'GPS-geotagged check-ins and photo logs verifying located premises.'
      }
    ],
    framework: {
      title: 'Address Sourcing Model',
      desc: 'Centralized registry audits and ground checks to locate active addresses.',
      solutions: [
        { title: 'Registry Checks', desc: 'Cross-checking property land registers and tax files.' },
        { title: 'doorstep verifications', desc: 'Dispatching coordinators to inspect target addresses on-site.' }
      ]
    },
    capabilities: [
      { title: 'Sub-Registrar Checks', desc: 'Verifying property land transfer files at registry offices.', businessOutcome: 'Identifies active ownership records and addresses.' },
      { title: 'Panchayat Checks', desc: 'Liaising with local village offices in rural districts.', businessOutcome: 'Confirms address details in remote agricultural zones.' }
    ],
    workflow: [
      { step: '01', title: 'Notice Ingestion', objective: 'Verify default details', action: 'Ingest returned notice files and check application address details.', deliverable: 'Ingested notice log.' },
      { step: '02', title: 'Registry Map', objective: 'Verify public records', action: 'Cross-reference tax and municipal databases for address updates.', deliverable: 'Active utility coordinates.' },
      { step: '03', title: 'Field Deployment', objective: 'Verify on-site location', action: 'Dispatch ground coordinators to verify coordinates and capture photos.', deliverable: 'On-site coordinates photo.' },
      { step: '04', title: 'Confirmed Location', objective: 'Update address records', action: 'Upload verified coordinates and delivery records to client console.', deliverable: 'Verified address report.' }
    ],
    techEnablement: {
      title: 'Geofenced Sourcing',
      desc: 'Enforcing verification validity with real-time coordinate logging.',
      modules: [
        { title: 'Live Coordinates Log', desc: 'Investigators upload coordinates and photos matching located addresses.' }
      ]
    },
    geoScope: {
      title: 'Regional Operations Range',
      desc: 'Active branch networks covering Southern India.',
      stats: [
        { label: 'Active States', value: 'TN, KA, KL, TS, AP, PY' },
        { label: 'Liaison offices', value: '35 Regional Branches' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned doorstep visits',
      'Confidential handling of candidate records',
      'Legal Chain of Custody for delivery reports'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Pre-litigation address checks.', framework: 'Sub-registrar title audits' },
      { name: 'Housing Finance Companies', scenario: 'Returned Section 13 notice resolution.', framework: 'Panchayat registry checks' }
    ],
    operationalMetrics: [
      { value: '88%', label: 'Address Find Rate' },
      { value: '180+', label: 'Districts Covered' },
      { value: '3 Days', label: 'Average Locate TAT' }
    ],
    businessOutcomes: [
      { title: 'Successful Notice Delivery', desc: 'Physical visits ensure the validity of address records before court filing.' },
      { title: 'Fewer Court stayed orders', desc: 'Valid address records prevent court objections from non-received notices.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Locating an Out-of-State Defaulter',
      challenge: 'A lender had a default check bounce case stalled as the borrower vacated their Chennai home, with court summons returned.',
      approach: 'SM Associates initiated municipal registry checks, tracking the borrower\'s business filings.',
      execution: 'Located active coordinates in Bangalore, dispatched ground representatives to verify, and obtained photo evidence.',
      outcome: 'Provided active address details within 5 days, enabling successful summons delivery.'
    },
    faqs: [
      { q: 'Do you provide physical photos of the newly located property?', a: 'Yes. Every verified address report includes geocoded photos of the building exterior and entrance.' }
    ],
    cta: {
      heading: 'Ensure Notice Delivery Success Today',
      subheading: 'Request a proposal to empanel SM Associates for your address tracing needs.',
      buttonText: 'Request Address Tracing',
      href: '/contact'
    }
  },

  'contact-verification': {
    eyebrow: 'Data Validation Layers',
    title: 'Ensure Contact Authenticity Before Loan Approval',
    description: 'Confirm applicant phone numbers, alternative contacts, and email addresses through database lookups and validation calls.',
    primaryCtaText: 'Initiate Contact Check',
    secondaryCtaText: 'View Call Center Capabilities',
    trustStatement: 'Ensuring credit book integrity, checking over 120,000+ numbers with instant database match rates.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates verifies applicant contact details. We cross-reference phone numbers against carrier databases, check active email delivery paths, and run direct validation calls to isolate fake contact profiles.',
      outcomes: [
        { title: 'Numbers Verified', desc: 'Over 120,000+ applicant numbers checked.' },
        { title: 'Validation Speed', desc: 'Instant database matching checks for carrier records.' },
        { title: 'Call Compliance', desc: '100% of validation calls recorded and auditable.' }
      ],
      useCases: [
        { title: 'Credit Card Onboarding', desc: 'Verifying applicant numbers and extensions before dispatch.' },
        { title: 'Fintech Micro-Loans', desc: 'API-based contact registry checks during application.' }
      ]
    },
    stats: [
      { value: '120K+', label: 'Numbers Checked' },
      { value: 'Instant', label: 'Database Match TAT' },
      { value: '100%', label: 'Call Log Compliance' }
    ],
    challenges: [
      { title: 'Prepaid SIM card fraud', desc: 'Applicants providing temporary SIM numbers or fake reference contacts to bypass credit checks.', warningBadge: 'Identity Fraud', impactFormula: 'Default Write-off + 30%' },
      { title: 'Non-Responsive Co-signers', desc: 'Fictitious co-signer numbers listed to pass underwriting checks.', warningBadge: 'Co-signer Risk', impactFormula: 'NPA Exposure + 15%' }
    ],
    failCompare: [
      {
        dimension: 'Carrier Matching',
        traditional: 'Accepting applicant numbers without verifying carrier registration details.',
        sm: 'Carrier database match checks verifying caller ID details against applicant records.'
      },
      {
        dimension: 'Call Quality Control',
        traditional: 'Unrecorded validation calls with no audit logs, violating codes.',
        sm: '100% voice recorded caller paths, archived for 180 days on secure consoles.'
      }
    ],
    framework: {
      title: 'Contact Verification Model',
      desc: 'Automated database matches and voice audits validating contact records.',
      solutions: [
        { title: 'Carrier database Checks', desc: 'Validating active subscriber details against official telecom databases.' },
        { title: 'Reference Checks', desc: 'Outbound tele-calling to confirm co-signers and reference validity.' }
      ]
    },
    capabilities: [
      { title: 'Carrier Registry Audits', desc: 'Verifying SIM registration details and active coordinates.', businessOutcome: 'Exposes fake subscriber records and synthetic profiles.' },
      { title: 'Reference Verification', desc: 'Outbound validation calls to verify applicant references.', businessOutcome: 'Prevents co-signer fraud and verifies contact lists.' }
    ],
    workflow: [
      { step: '01', title: 'Contact Ingestion', objective: 'Verify applicant details', action: 'Ingest candidate phone list from client system.', deliverable: 'Ingested contact log.' },
      { step: '02', title: 'Registry Match Query', objective: 'Verify carrier logs', action: 'Query carrier databases for active subscriber details.', deliverable: 'Carrier match logs.' },
      { step: '03', title: 'Confirmation Dialing', objective: 'Mediate reference check', action: 'Launch voice check calls to confirm reference details.', deliverable: 'Recorded call log.' },
      { step: '04', title: 'Accuracy Status Log', objective: 'Upload verified results', action: 'Upload final verified contacts list to client console.', deliverable: 'Verified contact report.' }
    ],
    techEnablement: {
      title: 'Calling Analytics Platform',
      desc: 'Encrypted calling systems and voice logger archives.',
      modules: [
        { title: 'Compliance Logs', desc: 'Outbound voice logs are stored securely, auditable on the console.' }
      ]
    },
    geoScope: {
      title: 'Call Center Infrastructure',
      desc: 'Bilingual calling facilities covering South Indian regions.',
      stats: [
        { label: 'Calling Capacity', value: '250+ Active Seats' },
        { label: 'Calling Languages', value: 'Tamil, Kannada, Telugu, Malayalam, English' }
      ]
    },
    complianceDetails: [
      'RBI Data Conduct Directives Aligned Outbound Calls',
      'All Verification Calls Recorded and Archived',
      'Compliance with telecom caller ID regulations'
    ],
    industriesServed: [
      { name: 'Fintech Platforms', scenario: 'API-based contact validations checks.', framework: 'API-triggered database checks' },
      { name: 'Private Commercial Banks', scenario: 'High-ticket personal loan reference checks.', framework: 'Outbound call center audits' }
    ],
    operationalMetrics: [
      { value: '120K+', label: 'Numbers Checked' },
      { value: 'Instant', label: 'Database Match TAT' },
      { value: '180 Days', label: 'Secure Voice Archive' }
    ],
    businessOutcomes: [
      { title: 'Higher Collection Contact', desc: 'Valid contact details ensure high contact rates during recovery campaigns.' },
      { title: 'Zero Ghost Profiles', desc: ' doorstep checks and calling audits prevent fake profile onboarding.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Detecting Call-Reference fraud',
      challenge: 'A fintech lender faced defaults on micro-loans, discovering that co-signer numbers were prepaid SIM cards owned by the same applicant.',
      approach: 'SM Associates integrated carrier registry checks and reference calling audits.',
      execution: 'Cross-checked SIM registrations and performed validation calls for all incoming applications.',
      outcome: 'Exposed 8% fake reference records, saving the platform over ₹1.1 Crore in potential bad debts.'
    },
    faqs: [
      { q: 'Do you record and archive verification calls?', a: 'Yes. All verification calls are voice-recorded and stored securely for 180 days on our client console.' }
    ],
    cta: {
      heading: 'Onboard Only Real Borrowers today',
      subheading: 'Request an integration guide to link your underwriting console with our database APIs.',
      buttonText: 'Consult with Our Risk Team',
      href: '/contact'
    }
  },

  'fraud-investigation': {
    eyebrow: 'Forensic Fraud Risk Audits',
    title: 'Fraud Investigation',
    subtitle: 'Exposing Document Tampering, Shell Networks, and Collusive Lending Schemes',
    description: 'Exposing document tampering, shell networks, and collusive lending through forensic audit.',
    primaryCtaText: 'Request a Fraud Investigation Walkthrough',
    secondaryCtaText: 'Download Fraud Prevention Framework',

    problemStatement: [
      { icon: 'briefcase', title: 'Shell Firm Networks', desc: 'Coordinated fake company offices and trade registers set up to secure commercial loans.' },
      { icon: 'fileWarning', title: 'Multiple-Mortgage Fraud', desc: 'The same property pledged to multiple lenders using fabricated title records.' },
      { icon: 'shieldAlert', title: 'Document Tampering', desc: 'Forged registries, stamp papers, or bank statements that pass a surface-level review.' },
      { icon: 'trendingDown', title: 'Undetected Until Write-Off', desc: 'Fraud that isn’t caught at underwriting often isn’t discovered until the account has already defaulted.' }
    ],

    overview: {
      heading: 'Why Forensic Review Catches What a Standard Check Misses',
      subheading: 'Lending Fraud Is a Pattern, Not a Single Red Flag',
      summary: 'Individual elements of a fraudulent application can each look clean on their own — a registered company name, a property deed, a bank statement. Fraud Investigation looks at the pattern across all of them: cross-checking property registries for duplicate mortgages, physically inspecting business sites for genuine operations, and forensically reviewing documents for tampering. SM Associates structures this as a coordinated forensic audit, so fraud rings and schemes are surfaced as a connected pattern, not missed as isolated, individually-plausible details.',
      outcomes: [
        { title: 'Cross-Registry Detection', desc: 'Property and corporate registries are cross-checked to surface duplicate or fraudulent claims.' },
        { title: 'Physical Verification', desc: 'Site visits confirm whether a business genuinely operates, not just whether it’s registered.' },
        { title: 'Forensic Document Review', desc: 'Documents are examined for tampering a surface-level review would miss.' }
      ],
      useCases: [
        { title: 'Shell Company Investigations', desc: 'Auditing factory or office sites to expose non-operational listings.' },
        { title: 'Multiple Mortgage Fraud', desc: 'Checking property registries to identify double-funding schemes.' },
        { title: 'Collusive Lending Ring Detection', desc: 'Investigating coordinated patterns across multiple applications.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: 'Enterprise-Grade' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: 'Compliance-Driven' },
      { icon: 'timer', title: 'Turnaround Discipline', value: 'Compliance-Driven' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: 'Compliance-Driven' }
    ],

    capabilities: [
      { title: 'Multiple-Funding Cross-Check', desc: 'Checking whether the same asset has been pledged elsewhere.', bullets: ['Property registry cross-checks across lenders where accessible', 'Title deed consistency verification', 'Flagging of duplicate or conflicting mortgage claims'], businessOutcome: 'Exposes duplicate mortgages before they become a shared loss.' },
      { title: 'Physical Site Verification', desc: 'Confirming a business genuinely operates, not just exists on paper.', bullets: ['On-site inspection of factory or office premises', 'Confirmation of active business operations', 'Identification of shell or non-operational sites'], businessOutcome: 'Prevents funding to businesses that exist only as paperwork.' },
      { title: 'Forensic Document Review', desc: 'Examining documents for tampering or fabrication.', bullets: ['Stamp paper and registry code verification', 'Cross-check against original registry records', 'Identification of altered or fabricated documents'], businessOutcome: 'Catches forgery that a standard document check would miss.' },
      { title: 'Network Pattern Analysis', desc: 'Looking for coordinated patterns across related applications.', bullets: ['Cross-application pattern review', 'Identification of shared addresses, contacts, or registrations', 'Flagging of coordinated fraud ring indicators'], businessOutcome: 'Surfaces organized fraud schemes, not just isolated incidents.' },
      { title: 'Evidentiary Dossier Compilation', desc: 'Assembling findings into a usable record for the client’s legal desk.', bullets: ['Structured compilation of investigation findings', 'Witness statement collection where applicable', 'Coordination support for law enforcement referral'], businessOutcome: 'Gives the client’s legal team a usable basis for further action.' },
      { title: 'Fraud Risk Flagging', desc: 'Translating investigation findings into a structured risk read.', bullets: ['Consolidation of registry, site, and document findings', 'Risk-level classification of investigated cases', 'Structured reporting for the client’s risk desk'], businessOutcome: 'Gives lenders a clear, prioritized view of fraud exposure.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'case-profiling', label: 'Case Profiling', heading: 'Establishing What’s Being Investigated', overview: 'Company registration and GST details are ingested to scope the investigation.', activities: ['Company and registration data ingestion', 'Investigation scope definition'], documents: [], risks: ['Incomplete scoping missing related entities'], deliverable: 'Fraud case assignment.', benefit: 'Ensures the investigation covers the full scope of the suspected scheme.' },
      { id: 'field-operations', label: 'Field Operations', heading: 'Checking Whether the Business Actually Operates', overview: 'A field investigator visits the site to verify genuine business activity.', activities: ['On-site visit', 'Operational status confirmation'], documents: [], risks: ['Shell sites mistaken for genuine operations without a visit'], deliverable: 'Geotagged site check.', benefit: 'Confirms or exposes the physical reality behind the paperwork.' },
      { id: 'evidentiary-review', label: 'Evidentiary Review', heading: 'Examining the Documents Themselves', overview: 'Registries, trade logs, and financial documents are forensically reviewed.', activities: ['Registry cross-check', 'Document authenticity review'], documents: [], risks: ['Tampered documents passing a surface-level check'], deliverable: 'Forensic audit report.', benefit: 'Catches document fraud a standard review would miss.' },
      { id: 'pattern-analysis', label: 'Pattern Analysis', heading: 'Looking for Coordination Across Cases', overview: 'Related applications are reviewed for shared fraud-ring indicators.', activities: ['Cross-application comparison', 'Shared-indicator identification'], documents: [], risks: ['Organized schemes missed when cases are reviewed in isolation'], deliverable: 'Pattern analysis note.', benefit: 'Surfaces coordinated fraud rings, not just single bad applications.' },
      { id: 'action-plan', label: 'Action Plan', heading: 'Deciding What Happens Next', overview: 'Findings are compiled and coordinated with the client’s legal desk.', activities: ['Findings compilation', 'Legal desk coordination'], documents: [], risks: ['Findings not translated into a clear next step'], deliverable: 'Final fraud investigation dossier.', benefit: 'Gives the client a clear basis for legal or recovery action.' },
      { id: 'report', label: 'Final Report', heading: 'One Consolidated Investigation Record', overview: 'All findings compiled into a single structured report.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Fragmented findings across the investigation'], deliverable: 'Final investigation report.', benefit: 'Gives the client a complete, defensible investigation record.' }
    ],

    challengesHeading: 'Enterprise Fraud Investigation Risks',
    challenges: [
      { title: 'Shell Firm Networks', desc: 'Coordinated fake company offices and trade registers used to secure commercial loans.', warningBadge: 'Shell Company Risk', impact: 'Funding extended to businesses that don’t genuinely operate.' },
      { title: 'Multiple-Mortgage Fraud', desc: 'The same property pledged to multiple lenders using fabricated title records.', warningBadge: 'Mortgage Risk', impact: 'Collateral security turns out to be shared or invalid across lenders.' },
      { title: 'Document Tampering', desc: 'Forged registries, stamp papers, or bank statements that pass a surface review.', warningBadge: 'Document Risk', impact: 'Underwriting decisions rest on fabricated evidence.' },
      { title: 'Undetected Fraud Rings', desc: 'Coordinated schemes across multiple applications can go unnoticed if reviewed in isolation.', warningBadge: 'Network Risk', impact: 'Organized fraud schemes continue undetected across a portfolio.' },
      { title: 'Late Detection', desc: 'Fraud not caught at underwriting is often only discovered after default.', warningBadge: 'Timing Risk', impact: 'Losses are far harder to recover once disbursement has already occurred.' },
      { title: 'Evidentiary Gaps', desc: 'Investigation findings that aren’t properly documented are hard to act on legally.', warningBadge: 'Compliance Risk', impact: 'Weak documentation undermines the institution’s ability to pursue legal action.' }
    ],

    processFlow: {
      title: 'Enterprise Fraud Investigation Lifecycle',
      desc: 'A structured operating model that moves a suspected case from profiling to a documented, actionable finding.',
      steps: [
        { step: '01', title: 'Case Profiling', desc: 'Company and registration details are ingested to scope the investigation.', outcome: 'A defined investigation scope covering the suspected scheme.' },
        { step: '02', title: 'Field Operations', desc: 'A field investigator visits the site to verify genuine business activity.', outcome: 'A confirmed or exposed operational reality on the ground.' },
        { step: '03', title: 'Evidentiary Review', desc: 'Registries and documents are forensically examined for authenticity.', outcome: 'Tampering or fabrication identified where it exists.' },
        { step: '04', title: 'Pattern Analysis', desc: 'Related applications are reviewed for coordinated fraud indicators.', outcome: 'Organized schemes surfaced, not just isolated incidents.' },
        { step: '05', title: 'Action Plan & Reporting', desc: 'Findings are compiled and coordinated with the client’s legal desk.', outcome: 'A clear, documented basis for the client’s next step.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Prevented Portfolio Losses', desc: 'Exposing fraud before disbursement protects the lender’s reserves.', value: 'Fewer fraudulent disbursements reaching the books in the first place.' },
      { title: 'Exposed Fraud Networks', desc: 'Pattern analysis surfaces coordinated schemes, not just single bad applications.', value: 'Broader fraud exposure addressed in one investigation, not piecemeal.' },
      { title: 'Validated Collateral Security', desc: 'Multiple-funding checks confirm collateral isn’t shared across lenders.', value: 'Reduced risk of shared or invalid mortgage security.' },
      { title: 'Defensible Investigation Records', desc: 'Forensic documentation gives the institution a usable legal basis.', value: 'Stronger position for any subsequent legal or recovery action.' },
      { title: 'Earlier Fraud Detection', desc: 'Pre-disbursement investigation catches fraud before it becomes a write-off.', value: 'Losses prevented rather than chased after default.' },
      { title: 'Protected Institutional Reputation', desc: 'Proactive fraud investigation reduces public complaints and regulatory findings.', value: 'Lower reputational exposure tied to fraud incidents.' }
    ],

    faqs: [
      { q: 'Do you coordinate filings with local law enforcement?', a: 'Forensic audit dossiers and witness statements are compiled to give the client’s legal team a usable basis for filing with local authorities.' },
      { q: 'Can you investigate patterns across multiple related applications?', a: 'Yes — pattern analysis reviews related applications for shared indicators that point to a coordinated fraud scheme rather than an isolated case.' }
    ],

    cta: {
      heading: 'Protect Your Loan Book From Systematic Fraud',
      subheading: 'Request a fraud investigation walkthrough for your underwriting and recovery teams.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  }
};
