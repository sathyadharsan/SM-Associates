export const legalContent = {
  'cheque-bounce-notices': {
    eyebrow: 'Section 138 Legal Notice Services',
    title: 'Cheque-Bounce Notice Services',
    subtitle: 'Statutory Notices Under Section 138 of the NI Act',
    description: 'Drafting and serving legal notices under Section 138 of the Negotiable Instruments Act within strict statutory limits.',
    primaryCtaText: 'Request a Cheque-Bounce Notice Walkthrough',
    secondaryCtaText: 'Download Section 138 Process Overview',

    problemStatement: [
      { icon: 'fileWarning', title: 'Missed Notice Timelines', desc: 'Section 138 has strict statutory timelines — a missed window can forfeit the legal remedy.' },
      { icon: 'briefcase', title: 'Inconsistent Notice Drafting', desc: 'Improperly drafted notices invite procedural objections in court.' },
      { icon: 'trendingDown', title: 'Untracked Filing Status', desc: 'Without active tracking, cheque-bounce cases lose momentum after the notice stage.' },
      { icon: 'shieldAlert', title: 'Weak Settlement Pressure', desc: 'A notice with no visible follow-through doesn’t create real pressure to settle.' }
    ],

    overview: {
      heading: 'Criminal Liability Notices: Establishing the Legal Foundation',
      subheading: 'Activating Section 138 Criminal Posturing Within Statutory Windows',
      summary: 'A bounced cheque or ECS return is only a recovery tool if the lender establishes criminal liability under Section 138 of the Negotiable Instruments (NI) Act. This process operates under strict statutory timelines: the demand notice must be served within 30 days of the bounce memo, and court complaints must follow within 30 days of notice expiry. Cheque-Bounce Notice Services automates notice drafting, manages advocate serving panels, and compiles proof-of-delivery dossiers. This operational discipline ensures the lender\'s legal foundation is unassailable before complaints are filed in magistrate courts.',
      outcomes: [
        { title: 'Timely Notice Service', desc: 'Statutory notices are drafted and served within the required timeline.' },
        { title: 'Documented Delivery', desc: 'Proof of service is captured for every notice issued.' },
        { title: 'Tracked Filing Process', desc: 'Cases move from notice to magistrate court filing without losing momentum.' }
      ],
      useCases: [
        { title: 'Retail Loan Cheque Bounces', desc: 'Pursuing Section 138 action on bounced EMI cheques.' },
        { title: 'SME Working Capital Defaults', desc: 'Notice and filing coordination for bounced business cheques.' },
        { title: 'PDC-to-Legal Escalation', desc: 'Handling cases escalated from PDC Collections after repeated bounces.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Section 138 Notice Drafting', desc: 'Drafting the statutory demand notice within the required timeline.', bullets: ['Notice drafted against cheque and bounce details', 'Compliance check against statutory format requirements', 'Notice issued within the limitation period'], businessOutcome: 'Preserves the legal remedy by meeting the statutory timeline.' },
      { title: 'Notice Service & Delivery Proof', desc: 'Serving the notice and capturing proof of delivery.', bullets: ['Notice service to the registered address', 'Delivery proof collection', 'Address-tracing follow-up if initial service fails'], businessOutcome: 'Creates the documented record the legal process depends on.' },
      { title: 'Payment Window Tracking', desc: 'Tracking the statutory payment window after notice service.', bullets: ['Payment window monitoring', 'Borrower payment status tracking', 'Case status update on payment or default'], businessOutcome: 'Keeps the case moving to the right next step without delay.' },
      { title: 'Magistrate Court Filing Coordination', desc: 'Filing the complaint if payment isn’t made within the window.', bullets: ['Complaint drafting coordination', 'Magistrate court filing', 'Case number registration and tracking'], businessOutcome: 'Converts an unresolved notice into an active legal case.' },
      { title: 'Hearing & Status Tracking', desc: 'Tracking the case through the court process.', bullets: ['Hearing date tracking', 'Status updates to the client', 'Coordination with empanelled advocates'], businessOutcome: 'Keeps the case visible and moving rather than stalled in the court system.' },
      { title: 'Cheque-Bounce Risk Flagging', desc: 'Translating case status into a structured risk read.', bullets: ['Consolidation of notice and filing status across cases', 'Flagging of cases at risk of missed timelines', 'Structured reporting for the client’s legal desk'], businessOutcome: 'Gives lenders visibility into which cases need attention.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'notice-drafting', label: 'Notice Drafting', heading: 'Drafting the Statutory Notice', overview: 'The Section 138 demand notice is drafted against the cheque and bounce details.', activities: ['Notice drafting', 'Statutory format compliance check'], documents: ['Bounced cheque', 'Bank return memo'], risks: ['Improperly drafted notice inviting procedural objection'], deliverable: 'Drafted notice copy.', benefit: 'Establishes a legally sound starting point for the case.' },
      { id: 'notice-service', label: 'Notice Service', heading: 'Serving the Notice and Capturing Proof', overview: 'The notice is served and delivery proof collected.', activities: ['Notice service', 'Delivery proof collection'], documents: [], risks: ['Failed service without a documented follow-up path'], deliverable: 'Notice delivery proof.', benefit: 'Creates the documented record the case depends on.' },
      { id: 'payment-window', label: 'Payment Window', heading: 'Tracking the Statutory Response Period', overview: 'The statutory payment window is actively monitored.', activities: ['Payment window monitoring', 'Borrower status tracking'], documents: [], risks: ['Missed visibility into whether payment was made'], deliverable: 'Payment window status log.', benefit: 'Keeps the case moving to the right next step on schedule.' },
      { id: 'court-filing', label: 'Court Filing', heading: 'Filing the Complaint if Payment Isn’t Made', overview: 'A complaint is filed with the magistrate court if the window lapses unpaid.', activities: ['Complaint drafting coordination', 'Magistrate court filing'], documents: [], risks: ['Filing delays losing case momentum'], deliverable: 'Registered court case number.', benefit: 'Converts an unresolved notice into an active legal case.' },
      { id: 'hearing-tracking', label: 'Hearing Tracking', heading: 'Keeping the Case Moving Through Court', overview: 'Hearing dates and case status are tracked through to resolution.', activities: ['Hearing date tracking', 'Advocate coordination'], documents: [], risks: ['Cases stalling without active hearing tracking'], deliverable: 'Case status log.', benefit: 'Keeps the case visible and moving rather than stalled.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Lender a Clear View of Case Progress', overview: 'Consolidated reporting on notice, filing, and hearing status.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across cheque-bounce cases'], deliverable: 'Cheque-bounce case status report.', benefit: 'Removes the need for the lender to chase status updates manually.' }
    ],

    challengesHeading: 'Enterprise Cheque-Bounce Notice Risks',
    challenges: [
      { title: 'Missed Notice Timelines', desc: 'Section 138 has strict statutory timelines that can forfeit the remedy if missed.', warningBadge: 'Timeline Risk', impact: 'A missed notice window can permanently close off the legal remedy.' },
      { title: 'Inconsistent Notice Drafting', desc: 'Improperly drafted notices invite procedural objections in court.', warningBadge: 'Drafting Risk', impact: 'Cases face avoidable objections from drafting defects.' },
      { title: 'Untracked Filing Status', desc: 'Without active tracking, cases lose momentum after the notice stage.', warningBadge: 'Tracking Risk', impact: 'Cases stall between notice service and court filing.' },
      { title: 'Weak Settlement Pressure', desc: 'A notice with no visible follow-through doesn’t create real settlement pressure.', warningBadge: 'Leverage Risk', impact: 'Borrowers don’t feel urgency to pay without visible follow-through.' },
      { title: 'Failed Service Without Follow-Up', desc: 'A notice that fails to deliver needs an address-tracing follow-up, not a dead end.', warningBadge: 'Service Risk', impact: 'Cases stall if failed service isn’t followed up with tracing.' },
      { title: 'Court Backlog Delays', desc: 'Magistrate court pendency can extend case timelines beyond the lender’s expectations.', warningBadge: 'Court Risk', impact: 'Resolution timelines depend partly on factors outside direct control.' }
    ],

    processFlow: {
      title: 'Enterprise Cheque-Bounce Notice Lifecycle',
      desc: 'A structured operating model that moves a bounced cheque from notice to a tracked legal outcome.',
      steps: [
        { step: '01', title: 'Notice Drafting', desc: 'The Section 138 notice is drafted against the bounce details.', outcome: 'A legally sound notice ready for service.' },
        { step: '02', title: 'Notice Service', desc: 'The notice is served and delivery proof captured.', outcome: 'A documented service record for the case file.' },
        { step: '03', title: 'Payment Window Tracking', desc: 'The statutory response window is monitored.', outcome: 'Clear visibility into whether payment was made.' },
        { step: '04', title: 'Court Filing', desc: 'A complaint is filed if the window lapses unpaid.', outcome: 'An active legal case in the magistrate court system.' },
        { step: '05', title: 'Hearing Tracking & Resolution', desc: 'The case is tracked through hearings to resolution.', outcome: 'A documented, resolved legal outcome.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Preserved Legal Remedy', desc: 'Timely notice service ensures the Section 138 remedy isn’t lost to a missed deadline.', value: 'No cases losing legal recourse due to limitation lapses.' },
      { title: 'Stronger Settlement Pressure', desc: 'Visible, active follow-through creates real urgency for the borrower to pay.', value: 'Higher pre-filing settlement rate from active notice follow-up.' },
      { title: 'Fewer Procedural Objections', desc: 'Properly drafted notices reduce the risk of court-stage challenges.', value: 'Cleaner case progression through the court process.' },
      { title: 'Continuous Case Momentum', desc: 'Active tracking keeps cases moving from notice to filing to hearing.', value: 'Fewer cases stalling at any single stage.' },
      { title: 'Documented Case Trail', desc: 'Every stage is documented, supporting the case if challenged.', value: 'A stronger evidentiary position throughout the legal process.' },
      { title: 'Clear Lender Visibility', desc: 'Consolidated reporting gives lenders a current view of case status.', value: 'Less manual follow-up needed to track case progress.' }
    ],

    faqs: [
      { q: 'What is the statutory timeline for a Section 138 notice?', a: 'The demand notice must be issued within 30 days of the cheque being returned unpaid, and the borrower has 15 days to make payment before a complaint can be filed.' },
      { q: 'What happens if the notice can’t be delivered?', a: 'Failed service is followed up with address-tracing support to re-attempt delivery, rather than treating it as a dead end.' }
    ],

    cta: {
      heading: 'Turn a Bounced Cheque Into a Tracked Legal Process',
      subheading: 'Request a cheque-bounce notice walkthrough for your active default accounts.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'sarfaesi-support': {
    eyebrow: 'NPA Resolution & Secured Asset Recovery',
    title: 'SARFAESI Enforcement Services',
    subtitle: 'End-to-End Collateral Foreclosure and Recovery Management',
    description: 'Comprehensive and legally compliant enforcement operations from demand notice to possession, valuation, secure custody, and public auction.',
    primaryCtaText: 'Request a SARFAESI Enforcement Walkthrough',
    secondaryCtaText: 'Download NPA Resolution Overview',

    problemStatement: [
      { icon: 'fileWarning', title: 'Process Timeline Delays', desc: 'Procedural delays in drafting and serving notices extend default timelines and postpone asset liquidation.' },
      { icon: 'shieldAlert', title: 'Ground Execution Resistance', desc: 'Physical takeovers often face intense borrower resistance, requiring police liaison and professional security deployment.' },
      { icon: 'trendingDown', title: 'Asset Value Erosion', desc: 'Poor inventory tracking, lack of proper custody yards, and unsecured assets result in damage or loss prior to sale.' },
      { icon: 'briefcase', title: 'Legal Documentation Gaps', desc: 'Procedural errors in Section 13/14 actions risk litigation, court-ordered stays, or audit failure.' }
    ],

    overview: {
      heading: 'Coordinated SARFAESI Enforcement Lifecycle',
      subheading: 'Unlocking Capital from Non-Performing Assets (NPAs) with Absolute Integrity and Precision',
      summary: 'Enforcing security interest under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) requires a flawless combination of legal precision and ground-level execution capability. A single procedural error—whether in notice serving, publication, valuation, or inventory documentation—can invite court-ordered stays and stall recovery for months. M/s. S M Associates Risk Management Pvt. Ltd. (SMARMPL) delivers a comprehensive, legally compliant, "one-window" solution. We manage the entire lifecycle: Section 13(2) demand notices (with active skip-tracing), Section 13(4) possession notices, CMM/CJM petitions under Section 14, intensive pre-takeover inspections, inventory audits, secure custody, and sale coordination through public auction or private treaty. Every action is backed by digital trail auditability, DRA-certified professionals, and strict compliance with legal frameworks.',
      outcomes: [
        { title: 'Legally Defensible Process', desc: 'Panchnama documentation, photographic evidence, and certified locksmith operations ensure bulletproof court records.' },
        { title: 'Minimized Recovery Delays', desc: 'Active coordination with CMM/CJM offices and local police prevents execution bottlenecks.' },
        { title: 'Collateral Value Preservation', desc: 'Monitored yards, monthly inspection reports, and insurance facilitation safeguard your assets.' }
      ],
      useCases: [
        { title: 'Commercial Asset Possession', desc: 'Executing District Magistrate/CJM orders for large-scale industrial and retail properties.' },
        { title: 'Housing Finance Defaults', desc: 'Resolving long-standing retail residential mortgage non-performing loans.' },
        { title: 'ARC Stressed Portfolios', desc: 'Coordinating fast, multi-state enforcement campaigns for Asset Reconstruction Companies.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Section 13(2) Demand Notices', desc: 'Drafting and serving the statutory demand notices that initiate the enforcement process.', bullets: ['Notice drafted against security interest records', 'Personal delivery with written acknowledgement and field tracking for skipped borrowers', 'Property affixation with Panchnama, photographic proof, and double newspaper publication'], businessOutcome: 'Establishes a legally valid statutory path from the first step.' },
      { title: 'Intensive Pre-Takeover Ground Inspection', desc: 'Conducting detailed pre-takeover inspections to assess ground realities and identify challenges.', bullets: ['Pre-takeover inspections to assess layouts, barriers, and safety hazards', 'Detailed reports to assist the Authorized Officer in execution planning', 'Coordination of locksmiths and site security ahead of possession'], businessOutcome: 'Equips the Authorized Officer with ground intelligence to prevent delays.' },
      { title: 'CMM / CJM Section 14 Coordination', desc: 'Drafting, filing, and tracking Section 14 petitions to secure physical eviction and repossession authority.', bullets: ['Petition preparation and filing with the Chief Metropolitan Magistrate or Chief Judicial Magistrate', 'Continuous tracking of petition status to order issuance', 'Liaison with local police authorities for necessary protection and support during possession'], businessOutcome: 'Obtains the magistrate order required for physical eviction and repossession.' },
      { title: 'Section 13(4) Possession Execution', desc: 'Coordinating symbolic and physical possession notice publication and execution.', bullets: ['Possession notice drafting, serving, and publication in two leading newspapers', 'Deployment of trained security supervisors and personnel', 'Coordination of police escorts and licensed armed guards where necessary'], businessOutcome: 'Secures physical and symbolic custody of the asset legally.' },
      { title: 'Professional Inventory Management', desc: 'Preparing item-by-item inventories of movable and immovable assets.', bullets: ['Itemized inventory logging of goods, machinery, stock, and materials', 'Photographic and video documentation of all assets on the premises', 'Coordination with bank-approved and government-approved valuers'], businessOutcome: 'Protects the lender against borrower claims of missing items.' },
      { title: 'Preservation & Secure Yard Custody', desc: 'Maintaining the physical condition and security of possessed assets.', bullets: ['Designated secure warehouses for movable assets', '24/7 guard monitoring for immovable properties', 'Monthly inspection reports and insurance coverage support for residential flats/offices'], businessOutcome: 'Prevents collateral value erosion before the liquidation stage.' },
      { title: 'Sale & E-Auction Coordination', desc: 'Supporting the liquidation process through public auctions or private treaty sales.', bullets: ['Drafting and publishing auction advertisements to maximize participation', 'Marketing distressed assets to prospective buyers', 'Transaction support, documentation handoff, and private treaty facilitation'], businessOutcome: 'Supports maximum yield and faster disposal of secured assets.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Bulletproof Evidence Trail for Compliance and Court Defensibility', overview: 'Every step of the enforcement action is documented with photographic, GPS, and written evidence to withstand borrower disputes in DRT or courts.', activities: ['Capture GPS-logged coordinates for demand notice affixation', 'Draft and execute Panchnamas witnessed by independent parties', 'Maintain comprehensive logs of communications and site visits'], documents: ['Signed Panchnamas and witness testimonies', 'GPS-tagged photographic and video archives'], risks: ['Borrower claims of non-service or improper possession', 'Compliance audit exceptions'], deliverable: 'Audit-ready legal dossier', benefit: 'Guarantees that the enforcement action is legally defensible in court.' },
      { id: 'demand-notice', label: 'Demand Notice', heading: 'Statutory Section 13(2) Notice Drafting and Multi-Channel Service', overview: 'Timely drafting and delivery of demand notices, ensuring legal tracking from day one. If the borrower is untraceable, our investigation team executes field verification to trace and serve.', activities: ['Draft notices in strict alignment with security interest records', 'Execute personal service with written acknowledgement', 'Conduct field tracking and verify updated addresses for skipped borrowers', 'Publish in two leading newspapers and document affixation on the property'], documents: ['Section 13(2) notice draft', 'Signed delivery acknowledgement', 'Newspaper publication clipping log'], risks: ['Borrower evasion stalling the statutory enforcement clock', 'Procedural drafting errors'], deliverable: 'Notice service docket', benefit: 'Validates the commencement of the statutory resolution period.' },
      { id: 'pre-takeover', label: 'Pre-Takeover Inspection', heading: 'Intensive Pre-Takeover Ground Inspection and Risk Analysis', overview: 'Before physical intervention, we conduct on-the-ground inspections to identify potential operational hurdles and local challenges.', activities: ['Conduct site inspections to assess property layout and occupant status', 'Identify logistical constraints (e.g., access, locks, safety hazards)', 'Compile a comprehensive report for the Authorized Officer (AO)'], documents: ['Detailed Pre-Takeover Inspection Report', 'Site layout photographs'], risks: ['Encountering unforeseen resistance or layout issues during possession'], deliverable: 'Operational risk analysis report', benefit: 'Equips the Authorized Officer with full ground-level intelligence for smooth execution.' },
      { id: 'dm-petition', label: 'DM Petition', heading: 'Obtaining CJM / CMM Section 14 Repossession Orders', overview: 'Liaising with court offices and administrative channels to secure warrants of possession and police protection.', activities: ['Prepare and file petition documents under Section 14 of the SARFAESI Act', 'Monitor petition status and court hearings', 'Coordinate with local police and administration for execution support'], documents: ['Section 14 petition filing copy', 'CMM/CJM warrant order'], risks: ['Procedural defects in petition leading to court delays'], deliverable: 'Magistrate possession warrant', benefit: 'Provides the legal mandate required for physical eviction and repossession.' },
      { id: 'physical-possession', label: 'Physical Possession', heading: 'Executing Physical and Symbolic Possession Safely', overview: 'Taking control of collateral with professional security deployment, locksmith services, and local authority support.', activities: ['Liaise with local police station to arrange field protection', 'Deploy trained security personnel and supervisors to the site', 'Coordinate locksmiths to gain entry and change locks', 'Capture video record of the entire possession action'], documents: ['Possession notice copy', 'Video recording of the execution', 'Panchnama of possession'], risks: ['Physical confrontation or security incidents on-site'], deliverable: 'Geotagged execution video log', benefit: 'Ensures safe and successful acquisition of physical custody.' },
      { id: 'inventory-valuation', label: 'Inventory & Valuation', heading: 'Rigorous Inventory Management and Collateral Valuation', overview: 'Cataloging every asset inside the premises and coordinating with certified valuers to assess value.', activities: ['Prepare exhaustive itemized inventories of all movable and immovable goods', 'Coordinate site visits with bank-approved or government-approved valuers', 'Conduct asset appraisals, project valuations, and APF assessments'], documents: ['Itemized inventory register', 'Approved Valuer estimation report'], risks: ['Claims of stolen or missing inventory from borrowers', 'Incorrect valuation leading to auction failure'], deliverable: 'Inventory register & Valuer report', benefit: 'Protects against liability claims and establishes a realistic reserve price.' },
      { id: 'preservation-custody', label: 'Preservation & Custody', heading: 'Secured Asset Preservation and Yard Custody', overview: 'Maintaining the physical condition and security of the seized asset during the pre-sale period.', activities: ['Deploy trained guards (ex-Defence/Paramilitary) for round-the-clock site protection', 'Store movable assets in designated secure warehouses', 'Conduct monthly inspection reports for unoccupied flats and offices', 'Coordinate insurance coverage facilitation for seized property'], documents: ['Security guard deployment rosters', 'Monthly inspection and status reports'], risks: ['Vandalism, theft, or deterioration of collateral value'], deliverable: 'Asset preservation dossier', benefit: 'Maintains collateral quality to ensure optimum realization during liquidation.' },
      { id: 'auction-sale', label: 'E-Auction & Sale', heading: 'Public Auction Coordination and Distressed Asset Marketing', overview: 'Running public auctions and private treaty processes to sell secured assets quickly at maximum value.', activities: ['Draft and publish auction advertisements in newspapers within statutory timelines', 'Conduct marketing campaigns to find prospective buyers', 'Facilitate site visits for buyers and coordinate transaction documentation'], documents: ['Auction notices and clippings', 'Sale certificate draft'], risks: ['No bids received due to poor publicity or high reserve prices'], deliverable: 'Auction bid summary file', benefit: 'Unlocks the maximum value from the asset to settle outstanding dues.' }
    ],

    challengesHeading: 'Enterprise SARFAESI Enforcement Risks',
    challenges: [
      { title: 'Notice & Liaison Bottlenecks', desc: 'Inefficient notice routing, untraceable borrowers, or slow coordination with CMM/CJM offices extends NPA cycles.', warningBadge: 'Operational Risk', impact: 'Delayed recovery timelines and extended capital provisioning requirements.' },
      { title: 'Ground Execution Resistance', desc: 'Hostile ground resistance during physical takeover without police liaison or security training.', warningBadge: 'Security Risk', impact: 'Execution failures, safety incidents, and negative local publicity.' },
      { title: 'Procedural Litigation', desc: 'Incomplete inventories, missing Panchnamas, or undocumented notice service lead to stays in DRT/courts.', warningBadge: 'Litigation Exposure', impact: 'Court-ordered stays that reverse possession and restart the legal clock.' },
      { title: 'Collateral Deterioration', desc: 'Vandalism, theft, or environmental degradation of possessed assets due to poor post-takeover security.', warningBadge: 'Asset Erosion', impact: 'Realized auction price drops significantly below the estimated value.' },
      { title: 'Regulatory Non-Compliance', desc: 'Undocumented borrower contact, non-compliant notice timelines, or lack of DRA-certified field coordinators.', warningBadge: 'Compliance Risk', impact: 'Regulatory penalties and loss of credibility with institutional auditors.' },
      { title: 'Low Liquidation Yield', desc: 'Insufficient public exposure for auction notices or unrealistic valuation models leading to repeated auction failures.', warningBadge: 'Market Risk', impact: 'Unsold assets sitting on the balance sheet, consuming holding costs.' }
    ],

    processFlow: {
      title: 'Enterprise SARFAESI Enforcement Lifecycle',
      desc: 'A structured operating model that moves a case from notice to secure custody, statutory step by statutory step.',
      steps: [
        { step: '01', title: 'Ingestion & Investigation', desc: 'Validate security interest files, track untraceable skipped borrowers, and draft the Section 13(2) notice.', outcome: 'Filing-ready case record and verified address profile.' },
        { step: '02', title: 'Notice Service & Inspection', desc: 'Serve the demand notice via personal service/affixation, run a pre-takeover inspection to map ground risks, and start Section 14 filing.', outcome: 'Statutory timeline started and execution plan completed.' },
        { step: '03', title: 'Warrant Acquisition', desc: 'Pursue Section 14 petitions through local CMM/CJM desks to secure possession warrants and police support.', outcome: 'Legally binding eviction and possession orders.' },
        { step: '04', title: 'Physical Possession & Audit', desc: 'Secure the property with police presence, inventory all contents, prepare Panchnamas, and take photo/video evidence.', outcome: 'Collateral physically secured under a bulletproof record.' },
        { step: '05', title: 'Preservation & Auction', desc: 'Deploy security guards, perform inspections, run valuations, publish auction ads, and execute the sale.', outcome: 'NPA settled and capital unlocked.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Accelerated NPA Resolution', desc: 'Structured, milestone-driven execution cuts down the time elapsed between notice and possession.', value: 'Reduced Days-in-Default across the portfolio.' },
      { title: 'Zero Compliance Stays', desc: 'Rigorous legal adherence and documentation ensure that possessions are rarely stayed by DRTs or courts.', value: 'Higher rate of successful, permanent repossessions.' },
      { title: 'Maximized Realization Value', desc: 'Proactive asset preservation, accurate valuations, and active marketing maximize auction bidding.', value: 'Optimal recovery yields on stressed collateral.' },
      { title: 'Complete Audit Defensibility', desc: 'Every notice, photograph, and Panchnama is archived digitally for internal and external auditors.', value: '100% compliance with RBI guidelines.' },
      { title: 'Integrated Custody Security', desc: 'Eliminates vendor fragmentation by handling custody, security, and maintenance under a single provider.', value: 'Lower asset holding costs and zero security incidents.' },
      { title: 'Streamlined Institutional Liaison', desc: 'Provides risk managers with a clear operating console and structured weekly reports on all cases.', value: 'Reduced internal administrative overhead.' }
    ],

    faqs: [
      { q: 'How does SM Associates handle untraceable or skipping borrowers for Section 13(2) notices?', a: 'Our dedicated investigation team conducts field verification and skip tracing. If they are still untraceable, we execute legal affixation of the notice on the property (complete with Panchnama and photo evidence) and publish in two leading newspapers as permitted under the Act.' },
      { q: 'What security qualifications do your custody and possession personnel have?', a: 'We deploy trained security supervisors and personnel drawn from Ex-Defence Forces, Paramilitary Services, Home Guards, and NCC. All operations are run by IIBF DRA-certified coordinators strictly within legal frameworks.' },
      { q: 'Can you handle the entire sale and auction process under SARFAESI?', a: 'Yes. We provide end-to-end auction services, including coordinating with bank-approved valuers, drafting and publishing statutory auction ads in newspapers, identifying prospective buyers, and helping with transaction documentation.' },
      { q: 'How do you safeguard residential flats or offices where permanent guarding isn’t cost-effective?', a: 'We provide scheduled periodic site inspections by our field officers who submit monthly status reports to the bank. If any unauthorized activity or attempt at trespass occurs, it is flagged immediately. We also coordinate insurance coverage.' }
    ],

    cta: {
      heading: 'Unlock Value from Stressed Assets and NPAs',
      subheading: 'Transition your secured portfolio from default to successful liquidation with India’s leading recovery specialists.',
      buttonText: 'Request SARFAESI Empanelment Proposal',
      href: '/contact'
    }
  },

  'possession-support': {
    eyebrow: 'Physical & Symbolic Possession Coordination',
    title: 'Possession Support',
    subtitle: 'Physical Enforcement Under Sections 13(4) and 14 of the SARFAESI Act',
    description: 'Assisting lenders in executing symbolic and physical possessions of secured assets under local authority and judicial order coordination.',
    primaryCtaText: 'Request a Possession Support Walkthrough',
    secondaryCtaText: 'Download Possession Protocols',

    problemStatement: [
      { icon: 'shieldAlert', title: 'Hostile Ground Resistance', desc: 'Occupants resisting physical possession can delay execution and create safety risk.' },
      { icon: 'fileWarning', title: 'Improper Inventory Logging', desc: 'Unlogged items inside a seized property can become grounds for later borrower litigation.' },
      { icon: 'briefcase', title: 'Authority Coordination Delays', desc: 'Without a dedicated liaison, securing police presence for possession can stall for weeks.' },
      { icon: 'trendingDown', title: 'Property Value at Risk', desc: 'A possession executed without proper security and documentation puts the asset’s value at risk afterward.' }
    ],

    overview: {
      heading: 'Physical Asset Enforcement: Lawful Securing of Secured Collateral',
      subheading: 'Executing Magistrate Orders Under Section 14 of the SARFAESI Act',
      summary: 'Taking physical control of defaulted collateral is the most critical step in foreclosure. Possession Support assists lenders in executing symbolic and physical possessions under Sections 13(4) and 14 of the SARFAESI Act. SM Associates coordinates with local police, arranges locksmiths and ex-Defence security guards, prepares the mandatory Panchnama and detailed inventory documents, and records the entire operation on video. By acting as the operational link between court orders and ground enforcement, we secure assets cleanly, protecting lenders from procedural liabilities.',
      outcomes: [
        { title: 'Authority-Coordinated Execution', desc: 'Police and local authority presence is arranged before the possession action, not improvised on-site.' },
        { title: 'Documented Inventory', desc: 'Every item inside the property is logged before sealing.' },
        { title: 'Defensible Record', desc: 'Video and photo documentation create a record that holds up if the action is later disputed.' }
      ],
      useCases: [
        { title: 'Disputed Commercial Premises', desc: 'Securing industrial or retail properties under District Magistrate warrants.' },
        { title: 'Residential Foreclosures', desc: 'Executing possession for residential mortgage defaults.' },
        { title: 'ARC Acquired Asset Possession', desc: 'Possession execution on assets acquired as part of a stressed portfolio.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Warrant Verification', desc: 'Confirming the possession order is valid and complete before execution begins.', bullets: ['Cross-check of warrant details against the case file', 'Coordination with the bank’s legal desk', 'Confirmation of execution authority'], businessOutcome: 'Ensures the possession action proceeds on a verified legal basis.' },
      { title: 'Police & Authority Liaison', desc: 'Arranging police presence and local authority coordination ahead of the action.', bullets: ['Liaison with local police for possession-day presence', 'Coordination of the possession date and timing', 'Pre-action briefing with all parties'], businessOutcome: 'Reduces the risk and delay of uncoordinated possession attempts.' },
      { title: 'On-Site Possession Execution', desc: 'Conducting the possession action itself, safely and documented.', bullets: ['Certified locksmith deployment where needed', 'Video documentation of the entire action', 'Real-time coordination with police presence'], businessOutcome: 'Secures the property through a safe, properly documented process.' },
      { title: 'Asset Inventory Documentation', desc: 'Cataloging everything inside the property before sealing.', bullets: ['Item-by-item inventory logging', 'Photographic documentation of contents', 'Signed inventory record where applicable'], businessOutcome: 'Protects against later litigation over property contents.' },
      { title: 'Post-Possession Security', desc: 'Securing the property after the possession action.', bullets: ['Property sealing and lock replacement', 'Security guard deployment where warranted', 'Ongoing security status monitoring'], businessOutcome: 'Protects asset value between possession and liquidation.' },
      { title: 'Possession Risk Flagging', desc: 'Translating execution findings into a structured risk read.', bullets: ['Consolidation of execution and inventory findings', 'Flagging of any disputes or irregularities encountered', 'Structured reporting for the client’s legal desk'], businessOutcome: 'Gives the client visibility into how cleanly each possession was executed.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'warrant-check', label: 'Warrant Verification', heading: 'Confirming the Order Before Acting', overview: 'Verifying the possession order is valid and complete before execution.', activities: ['Warrant cross-check against case file', 'Legal desk coordination'], documents: ['District Magistrate warrant'], risks: ['Acting on an incomplete or invalid order'], deliverable: 'Verified case file.', benefit: 'Ensures the action proceeds on a confirmed legal basis.' },
      { id: 'authority-liaison', label: 'Authority Liaison', heading: 'Coordinating Police Presence in Advance', overview: 'Arranging local authority support before the possession date.', activities: ['Police liaison and coordination', 'Possession date scheduling'], documents: [], risks: ['Possession attempted without authority coordination'], deliverable: 'Liaison coordination file.', benefit: 'Reduces resistance and delay during the actual possession action.' },
      { id: 'execution', label: 'Possession Execution', heading: 'Conducting the Action Safely and on Record', overview: 'The on-site possession action, documented from start to finish.', activities: ['Certified locksmith deployment', 'Full video documentation of the action'], documents: [], risks: ['Hostile resistance during execution'], deliverable: 'Geotagged video log.', benefit: 'Secures the property through a safe, defensible process.' },
      { id: 'inventory', label: 'Inventory Documentation', heading: 'Cataloging Everything Before Sealing', overview: 'A complete record of property contents before the property is sealed.', activities: ['Item-by-item inventory logging', 'Photographic content documentation'], documents: [], risks: ['Unlogged items becoming a litigation point later'], deliverable: 'Inventory check record.', benefit: 'Protects against borrower disputes over property contents.' },
      { id: 'security', label: 'Post-Possession Security', heading: 'Protecting the Asset After Possession', overview: 'Securing the property between possession and the next stage of resolution.', activities: ['Property sealing', 'Security guard deployment where warranted'], documents: [], risks: ['Asset value erosion from inadequate post-possession security'], deliverable: 'Security deployment record.', benefit: 'Protects asset value through to liquidation.' },
      { id: 'report', label: 'Final Report', heading: 'One Consolidated Record of the Possession', overview: 'All documentation compiled into a single structured record for the client.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Fragmented documentation across the possession process'], deliverable: 'Final possession report.', benefit: 'Gives the client a single, defensible record of the entire action.' }
    ],

    challengesHeading: 'Enterprise Possession Execution Risks',
    challenges: [
      { title: 'Hostile Ground Resistance', desc: 'Occupants resisting physical possession, delaying execution and creating safety risk.', warningBadge: 'Security Risk', impact: 'Possession delays and potential safety incidents without proper coordination.' },
      { title: 'Improper Inventory Logging', desc: 'Failing to log items inside a seized property can lead to borrower litigation.', warningBadge: 'Legal Risk', impact: 'Disputes over property contents that a documented inventory would have prevented.' },
      { title: 'Authority Coordination Delays', desc: 'Possession attempted without arranged police presence stalls or fails on-site.', warningBadge: 'Coordination Risk', impact: 'Wasted possession attempts that need to be rescheduled.' },
      { title: 'Inadequate Post-Possession Security', desc: 'A property left unsecured after possession is vulnerable to value loss.', warningBadge: 'Asset Risk', impact: 'Collateral value erodes between possession and liquidation.' },
      { title: 'Undocumented Execution', desc: 'A possession action without video or photo documentation is hard to defend if disputed.', warningBadge: 'Evidentiary Risk', impact: 'Disputed possessions lack the record needed to defend the action.' },
      { title: 'Warrant Defects', desc: 'Acting on an incomplete or improperly issued warrant undermines the entire action.', warningBadge: 'Compliance Risk', impact: 'A flawed warrant can invalidate an otherwise correctly executed possession.' }
    ],

    processFlow: {
      title: 'Enterprise Possession Support Lifecycle',
      desc: 'A structured operating model that moves a possession order from verification to a secured, documented outcome.',
      steps: [
        { step: '01', title: 'Warrant Verification', desc: 'The possession order is verified for validity and completeness.', outcome: 'A confirmed legal basis for proceeding.' },
        { step: '02', title: 'Authority Liaison', desc: 'Police and local authority presence is arranged ahead of the possession date.', outcome: 'A coordinated possession date with authority support confirmed.' },
        { step: '03', title: 'Possession Execution', desc: 'The possession action is conducted on-site, fully documented.', outcome: 'The property is secured through a safe, defensible process.' },
        { step: '04', title: 'Inventory & Sealing', desc: 'Property contents are cataloged and the property is sealed.', outcome: 'A documented record protecting against later disputes.' },
        { step: '05', title: 'Final Reporting', desc: 'All documentation is compiled into a single report for the client.', outcome: 'A complete, defensible record of the entire possession.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Secured Asset Control', desc: 'A properly executed possession allows the lender to proceed toward liquidation.', value: 'A clean transition from possession order to asset control.' },
      { title: 'Mitigated Legal Risk', desc: 'Documented inventory and video records reduce exposure to borrower litigation.', value: 'Fewer disputes over how the possession was conducted.' },
      { title: 'Safer Execution', desc: 'Authority coordination reduces the risk of confrontation during possession.', value: 'Fewer possession attempts that stall or escalate on-site.' },
      { title: 'Protected Asset Value', desc: 'Post-possession security protects the asset between possession and liquidation.', value: 'Less value erosion in the period before auction.' },
      { title: 'Defensible Records', desc: 'Comprehensive documentation gives the client evidence to rely on if challenged.', value: 'Stronger legal position if the possession is later disputed.' },
      { title: 'Predictable Execution Timelines', desc: 'Coordinated scheduling reduces wasted attempts and rescheduling delays.', value: 'More possessions completed on the first scheduled attempt.' }
    ],

    faqs: [
      { q: 'How do you handle lockouts and inventories?', a: 'Certified locksmiths are deployed to open property locks, and all items are cataloged and photographed before the property is sealed.' },
      { q: 'Is police presence mandatory for every possession?', a: 'Police liaison is arranged in advance for every possession action to support a safe, compliant execution.' }
    ],

    cta: {
      heading: 'Execute Possession Orders Safely and Compliantly',
      subheading: 'Request a possession support walkthrough for your enforcement portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'legal-coordination': {
    eyebrow: 'Court & Advocate Liaison Desk',
    title: 'Legal Coordination',
    subtitle: 'Advocate Panel Liaison & Court Case Milestone Tracking',
    description: 'Tracking litigation stages (DRT, Section 138, Arbitration) and coordinating advocate panels under unified operational SLA benchmarks.',
    primaryCtaText: 'Request a Legal Coordination Walkthrough',
    secondaryCtaText: 'Download Coordination Flowcharts',

    problemStatement: [
      { icon: 'fileWarning', title: 'Court Delay Gaps', desc: 'Cases lag in courts due to delayed filing submissions or advocate communication gaps.' },
      { icon: 'shieldAlert', title: 'Missed Hearings', desc: 'Untracked hearing dates can lead to case dismissals or unnecessary delays.' },
      { icon: 'briefcase', title: 'Inconsistent Advocate Briefings', desc: 'Varying documentation formats across advocates slow down filings.' },
      { icon: 'trendingDown', title: 'Lost Case Visibility', desc: 'Lenders relying solely on advocate updates often lack a real-time view of litigation status.' }
    ],

    overview: {
      heading: 'Litigation Operations Management: Accelerating Legal Milestones',
      subheading: 'Replacing Fragmented Legal Tracking with Documented Operational Control',
      summary: 'Lenders often suffer from delayed recoveries because litigation stages (complaints, summons, warrants, hearings) are tracked manually across multiple panel advocates. Legal Coordination acts as an operational desk that tracks every court case against milestone benchmarks. We coordinate with advocates, ensure timely filings, and manage hearing calendars across DRTs, NCLTs, and civil courts. This operational discipline provides risk managers with a consolidated, auditable view of litigation progress, cutting cycle times and releasing provisioned capital.',
      outcomes: [
        { title: 'Centralized Case Registry', desc: 'Every active court case is tracked in one place, not scattered across advocate files.' },
        { title: 'Standardized Advocate Briefings', desc: 'Consistent documentation reduces filing delays caused by format mismatches.' },
        { title: 'Active Hearing Tracking', desc: 'Hearing dates are tracked proactively, not discovered after they’ve passed.' }
      ],
      useCases: [
        { title: 'DRT Action Recovery', desc: 'Coordinating advocate filings to secure recovery orders at Debt Recovery Tribunals.' },
        { title: 'Check Bounce Campaigns', desc: 'Tracking Section 138 notice filings at magistrate courts.' },
        { title: 'Multi-Jurisdiction Litigation', desc: 'Coordinating cases spread across several regional courts.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Case Registration & Tracking', desc: 'Bringing every active case into one centralized registry.', bullets: ['Case intake and registration', 'Assignment to the appropriate advocate', 'Ongoing status tracking against milestones'], businessOutcome: 'Gives lenders one place to see every active case, not several.' },
      { title: 'Advocate Briefing Standardization', desc: 'Preparing consistent, complete briefing dossiers for advocate panels.', bullets: ['Standardized documentation format across advocates', 'Pre-filing document completeness checks', 'Reduced back-and-forth before filing'], businessOutcome: 'Reduces filing delays caused by inconsistent documentation.' },
      { title: 'DRT Application Coordination', desc: 'Managing Debt Recovery Tribunal filings and tracking.', bullets: ['Application preparation coordination', 'Attachment order tracking', 'Status updates against tribunal timelines'], businessOutcome: 'Accelerates legal enforcement against defaulting borrowers.' },
      { title: 'Section 138 Filing Coordination', desc: 'Managing check-bounce litigation filings and tracking.', bullets: ['Notice and filing coordination', 'Delivery proof collection', 'Magistrate court hearing tracking'], businessOutcome: 'Maintains pressure toward settlement through coordinated criminal filings.' },
      { title: 'Hearing Date Monitoring', desc: 'Proactively tracking hearing schedules across every active case.', bullets: ['Hearing date tracking against court records', 'Advance alerts ahead of scheduled hearings', 'Escalation when hearings are at risk of being missed'], businessOutcome: 'Reduces dismissals and delays caused by missed hearings.' },
      { title: 'Litigation Risk Flagging', desc: 'Translating case status into a structured risk read.', bullets: ['Consolidation of case status across the portfolio', 'Flagging of cases at risk of delay or dismissal', 'Structured reporting for the lender’s legal desk'], businessOutcome: 'Gives lenders visibility into which cases need attention.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'registration', label: 'Case Registration', heading: 'Bringing a Case Into the Tracking System', overview: 'Loan records are ingested and the case is assigned to an empanelled advocate.', activities: ['Case intake', 'Advocate assignment'], documents: ['Loan records'], risks: ['Cases tracked inconsistently outside a central registry'], deliverable: 'Litigation file log.', benefit: 'Ensures every case is visible from the moment it’s registered.' },
      { id: 'briefing', label: 'Advocate Briefing', heading: 'Preparing the Advocate for Filing', overview: 'Standardized briefing dossiers are prepared and petitions drafted.', activities: ['Advocate briefing coordination', 'Petition or notice drafting'], documents: [], risks: ['Inconsistent documentation delaying filing'], deliverable: 'Drafted petition copy.', benefit: 'Reduces back-and-forth that slows down filing.' },
      { id: 'filing', label: 'Filing & Documentation', heading: 'Getting the Case Before the Court', overview: 'The petition is filed and a case number obtained.', activities: ['Court filing', 'Case number registration'], documents: [], risks: ['Filing delays without active coordination'], deliverable: 'Registered court case number.', benefit: 'Moves the case from preparation into the formal court process.' },
      { id: 'hearing-tracking', label: 'Hearing Tracking', heading: 'Staying Ahead of Every Hearing Date', overview: 'Hearing dates are tracked and the client is updated continuously.', activities: ['Hearing date tracking', 'Status update delivery'], documents: [], risks: ['Missed hearings without active monitoring'], deliverable: 'Active case status log.', benefit: 'Prevents dismissals or delays caused by missed hearings.' },
      { id: 'status-sync', label: 'Status Sync', heading: 'Giving the Lender a Live View of Progress', overview: 'Case status is synced to the client’s tracking console.', activities: ['Dashboard status sync', 'Periodic status reporting'], documents: [], risks: ['Lenders left waiting on advocate updates'], deliverable: 'Status sync record.', benefit: 'Removes dependence on waiting for advocate-initiated updates.' },
      { id: 'report', label: 'Outcome Reporting', heading: 'Documenting How Each Case Resolved', overview: 'Final case outcomes are compiled into a structured record.', activities: ['Outcome documentation', 'Internal quality check'], documents: [], risks: ['Inconsistent outcome reporting across cases'], deliverable: 'Litigation outcome report.', benefit: 'Gives the lender a clear record of how each case concluded.' }
    ],

    challengesHeading: 'Enterprise Legal Coordination Risks',
    challenges: [
      { title: 'Court Delay Gaps', desc: 'Cases lagging in courts due to delayed filing submissions or advocate communication gaps.', warningBadge: 'Litigation Risk', impact: 'Extended resolution timelines beyond what the court process itself requires.' },
      { title: 'Missed Hearings', desc: 'Untracked hearing updates leading to case dismissals or delayed judgments.', warningBadge: 'Tracking Risk', impact: 'Cases lost or delayed for reasons unrelated to their underlying merit.' },
      { title: 'Inconsistent Advocate Briefings', desc: 'Varying documentation formats across advocates slow down filings.', warningBadge: 'Process Risk', impact: 'Avoidable delays before a case even reaches court.' },
      { title: 'Fragmented Case Visibility', desc: 'Lenders relying solely on advocate updates lack a real-time view of status.', warningBadge: 'Visibility Risk', impact: 'Portfolio-level litigation risk is hard to assess without centralized tracking.' },
      { title: 'Advocate Performance Variance', desc: 'Filing speed and hearing outcomes can vary widely across an advocate panel.', warningBadge: 'Performance Risk', impact: 'Inconsistent advocate performance affects overall portfolio resolution rates.' },
      { title: 'Compliance Documentation Gaps', desc: 'Inconsistent record-keeping across cases can create audit exposure.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit risk from incomplete litigation documentation.' }
    ],

    processFlow: {
      title: 'Enterprise Legal Coordination Lifecycle',
      desc: 'A structured operating model that moves a case from registration to a tracked, documented outcome.',
      steps: [
        { step: '01', title: 'Case Registration', desc: 'Loan records are ingested and the case is assigned to an empanelled advocate.', outcome: 'A registered case ready for advocate briefing.' },
        { step: '02', title: 'Advocate Briefing', desc: 'A standardized briefing dossier is prepared for the assigned advocate.', outcome: 'A complete, filing-ready case package.' },
        { step: '03', title: 'Filing & Documentation', desc: 'The petition is filed and a court case number obtained.', outcome: 'The case formally enters the court process.' },
        { step: '04', title: 'Hearing Tracking', desc: 'Hearing dates are tracked and monitored continuously.', outcome: 'No hearing is missed due to a tracking gap.' },
        { step: '05', title: 'Status Reporting', desc: 'Case status and outcomes are reported to the client.', outcome: 'A documented, current view of litigation progress.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Court Delays', desc: 'Centralized coordination helps advocates file within tighter timelines.', value: 'Faster movement from case registration to filing.' },
      { title: 'Fewer Case Dismissals', desc: 'Active hearing tracking ensures dates are attended and documents submitted on time.', value: 'Fewer cases lost to procedural gaps rather than merit.' },
      { title: 'Improved Portfolio Visibility', desc: 'A centralized registry gives lenders a real-time view of litigation status.', value: 'Less reliance on waiting for advocate-initiated updates.' },
      { title: 'Consistent Advocate Performance', desc: 'Standardized briefings reduce variance in how advocates prepare and file.', value: 'More predictable filing timelines across the advocate panel.' },
      { title: 'Stronger Compliance Position', desc: 'Consistent documentation across cases reduces audit exposure.', value: 'Reduced institutional risk during regulatory or internal review.' },
      { title: 'Better Resource Allocation', desc: 'Clear visibility into case status helps the lender prioritize attention where it’s needed.', value: 'More efficient use of the lender’s own legal oversight time.' }
    ],

    faqs: [
      { q: 'Do you handle advocate fee structures directly?', a: 'Advocate engagements follow the lender’s approved fee structure, with billing coordinated and reviewed by our legal coordination desk.' },
      { q: 'How do you track hearing dates across multiple courts?', a: 'Hearing dates are monitored against each case’s court record, with proactive alerts ahead of scheduled hearings.' }
    ],

    cta: {
      heading: 'Take Control of Your Litigation Recovery Pipeline',
      subheading: 'Request a legal coordination walkthrough to review your active court cases.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'litigation-support': {
    eyebrow: 'Evidentiary File Operations',
    title: 'Litigation Support',
    subtitle: 'Pre-Filing Document Auditing & Evidentiary Dossier Assembly',
    description: 'Auditing case files for evidentiary gaps (original deeds, notice proofs, registries) before formal court filings to prevent hearings delays.',
    primaryCtaText: 'Request a Litigation Support Walkthrough',
    secondaryCtaText: 'Download Litigation Readiness Checklist',

    problemStatement: [
      { icon: 'fileWarning', title: 'Evidentiary Deficiencies', desc: 'Missing original deeds, incorrect details, or unverified signatures can get a case dismissed or delayed.' },
      { icon: 'shieldAlert', title: 'Incomplete Audit Trails', desc: 'Without proof of notice delivery, foreclosure enforcement can stall at the hearing stage.' },
      { icon: 'briefcase', title: 'Document Custody Risk', desc: 'Original files stored without strict custody protocols risk damage or loss.' },
      { icon: 'trendingDown', title: 'Costly Court Objections', desc: 'A filing rejected for evidentiary gaps costs far more time than catching the gap before filing.' }
    ],

    overview: {
      heading: 'Evidentiary Pre-Filing Auditing: Eliminating Court-Stage Objections',
      subheading: 'Ensuring Filing-Ready Dossiers Under Strict Legal Guidelines',
      summary: 'Court complaints and SARFAESI actions are frequently delayed or dismissed due to easily preventable document gaps: missing original deeds, unverified signatures, or absent proof of notice delivery. Litigation Support audits the entire case file before it ever reaches court. Our team cross-checks documents against statutory court requirements, verifies titles at registry offices, and compiles a complete, court-admissible dossier. This pre-filing discipline ensures that advocates file with confidence, preventing avoidable court objections and speeding up case progression.',
      outcomes: [
        { title: 'Pre-Filing Gap Detection', desc: 'Evidentiary gaps are caught and resolved before the case ever reaches court.' },
        { title: 'Court-Admissible Dossiers', desc: 'Files are assembled to the standard the court will actually require.' },
        { title: 'Secure Document Custody', desc: 'Original documents are handled under a strict chain-of-custody protocol throughout.' }
      ],
      useCases: [
        { title: 'Pre-Filing Document Audits', desc: 'Checking original loan files and notice delivery proofs before filing.' },
        { title: 'Witness Coordination', desc: 'Obtaining witness signatures and affidavits ahead of court hearings.' },
        { title: 'Multi-State Mortgage Litigation', desc: 'Assembling records spread across multiple regional registries.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Document Ingestion Audit', desc: 'Reviewing the full case file against what the court will require.', bullets: ['Cross-check of original deeds and contract papers', 'Notice delivery record verification', 'Identification of missing or incomplete items'], businessOutcome: 'Surfaces evidentiary gaps before they become court objections.' },
      { title: 'Property Title Verification', desc: 'Confirming property title flow and encumbrances at the relevant registry.', bullets: ['Title flow cross-check at local registries', 'Encumbrance certificate verification', 'Identification of disputed or unclear title history'], businessOutcome: 'Ensures the lender’s mortgage security is valid before litigation proceeds.' },
      { title: 'Notice Delivery Proof Sourcing', desc: 'Collecting verifiable proof that legal notices were actually delivered.', bullets: ['Geolocated delivery receipt collection', 'Delivery timeline reconstruction', 'Court-admissible proof compilation'], businessOutcome: 'Removes the gap that stalls foreclosure enforcement at hearings.' },
      { title: 'Witness & Affidavit Coordination', desc: 'Securing the witness signatures a case actually needs.', bullets: ['Witness identification and outreach', 'Affidavit collection and verification', 'Coordination of witness availability for hearings'], businessOutcome: 'Ensures witness evidence is ready when the court calls for it.' },
      { title: 'Evidentiary Dossier Assembly', desc: 'Compiling everything into one court-ready file.', bullets: ['Structured dossier compilation', 'Final completeness check against court requirements', 'Handoff package prepared for the advocate'], businessOutcome: 'Gives advocates a filing-ready dossier, not a pile of loose documents.' },
      { title: 'Secure Document Custody', desc: 'Protecting original documents throughout the audit process.', bullets: ['Chain-of-custody protocol for all original files', 'Digital archival of all reviewed documents', 'Controlled return process post-filing'], businessOutcome: 'Protects irreplaceable original documents from loss or damage.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'file-intake', label: 'File Intake', heading: 'Receiving the Case for Evidentiary Review', overview: 'Loan documents and notice delivery records are ingested for audit.', activities: ['Document intake', 'Initial completeness scan'], documents: ['Loan documents', 'Notice delivery records'], risks: ['Incomplete intake delaying the audit'], deliverable: 'Ingested file log.', benefit: 'Establishes the starting point for a thorough pre-filing audit.' },
      { id: 'gap-analysis', label: 'Gap Analysis', heading: 'Finding What’s Missing Before the Court Does', overview: 'Documents are cross-checked against court filing requirements.', activities: ['Cross-check against court requirements', 'Missing-item identification'], documents: [], risks: ['Undetected gaps surfacing later as court objections'], deliverable: 'Gap audit report.', benefit: 'Catches evidentiary deficiencies while there’s still time to fix them.' },
      { id: 'title-check', label: 'Title Verification', heading: 'Confirming the Property Title Is Sound', overview: 'Property title flow and encumbrances are verified at the registry.', activities: ['Registry cross-check', 'Encumbrance verification'], documents: ['Property title deeds'], risks: ['Disputed or unclear title history'], deliverable: 'Title verification note.', benefit: 'Confirms the mortgage security is valid before litigation proceeds.' },
      { id: 'evidence-assembly', label: 'Evidence Assembly', heading: 'Compiling the Court-Ready Dossier', overview: 'Missing items and witness signatures are collected and assembled.', activities: ['Missing item collection', 'Witness and affidavit coordination'], documents: [], risks: ['Incomplete dossier reaching the advocate'], deliverable: 'Evidentiary dossier.', benefit: 'Hands the advocate a complete, filing-ready package.' },
      { id: 'custody', label: 'Document Custody', heading: 'Protecting Original Documents Throughout', overview: 'Original files are handled under a strict chain-of-custody protocol.', activities: ['Custody logging', 'Digital archival'], documents: [], risks: ['Loss or damage to irreplaceable originals'], deliverable: 'Custody and archival log.', benefit: 'Protects original documents while the audit is under way.' },
      { id: 'handoff', label: 'Filing Handoff', heading: 'Delivering the Dossier to the Advocate', overview: 'The completed, audited dossier is handed over for filing.', activities: ['Dossier handoff', 'Filing acknowledgement'], documents: [], risks: ['Handoff gaps losing dossier completeness'], deliverable: 'Filing acknowledgement record.', benefit: 'Ensures the advocate files with a complete, audited case file.' }
    ],

    challengesHeading: 'Enterprise Litigation Support Risks',
    challenges: [
      { title: 'Evidentiary Deficiencies', desc: 'Cases dismissed or delayed due to missing original deeds or unverified signatures.', warningBadge: 'Filing Risk', impact: 'Court objections that a pre-filing audit would have caught.' },
      { title: 'Incomplete Audit Trails', desc: 'Inability to prove notice delivery during hearings stalls foreclosure enforcement.', warningBadge: 'Audit Risk', impact: 'Enforcement stalls at the hearing stage for a preventable reason.' },
      { title: 'Document Custody Risk', desc: 'Original deeds and files stored without strict protocols risk damage or loss.', warningBadge: 'Custody Risk', impact: 'Irreplaceable case evidence is put at unnecessary risk.' },
      { title: 'Title Disputes', desc: 'Unclear or disputed property title history undermines the litigation’s foundation.', warningBadge: 'Title Risk', impact: 'A weak title position can undermine an otherwise strong case.' },
      { title: 'Witness Unavailability', desc: 'Uncoordinated witness management can leave a case without testimony when needed.', warningBadge: 'Evidentiary Risk', impact: 'Cases lose evidentiary strength without coordinated witness availability.' },
      { title: 'Compliance Documentation Gaps', desc: 'Inconsistent custody and audit records create exposure during regulatory review.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit risk from incomplete documentation practices.' }
    ],

    processFlow: {
      title: 'Enterprise Litigation Support Lifecycle',
      desc: 'A structured operating model that moves a case file from intake to a court-ready dossier.',
      steps: [
        { step: '01', title: 'File Intake', desc: 'Loan documents and notice delivery records are ingested for review.', outcome: 'A confirmed starting file ready for audit.' },
        { step: '02', title: 'Gap Analysis', desc: 'Documents are cross-checked against court filing requirements.', outcome: 'A clear list of missing or incomplete items.' },
        { step: '03', title: 'Evidence Assembly', desc: 'Missing items, title verification, and witness signatures are collected.', outcome: 'A complete evidentiary record ready for compilation.' },
        { step: '04', title: 'Dossier Compilation', desc: 'All evidence is compiled into a structured, court-admissible dossier.', outcome: 'A filing-ready package, not loose documents.' },
        { step: '05', title: 'Filing Handoff', desc: 'The dossier is handed to the empanelled advocate for filing.', outcome: 'A case filed with a complete evidentiary foundation.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Fewer Court Objections', desc: 'Pre-filing audits catch evidentiary gaps before they become court-stage objections.', value: 'Cleaner filings that proceed without avoidable delays.' },
      { title: 'Faster Case Progression', desc: 'Complete dossiers reduce the back-and-forth that incomplete filings cause.', value: 'Cases move through the court process more predictably.' },
      { title: 'Protected Original Documents', desc: 'Chain-of-custody protocols protect irreplaceable case evidence.', value: 'Reduced risk of losing or damaging critical original documents.' },
      { title: 'Stronger Title Position', desc: 'Verified property titles give litigation a sound evidentiary foundation.', value: 'Fewer cases undermined by unresolved title disputes.' },
      { title: 'Coordinated Witness Availability', desc: 'Systematic witness management ensures testimony is available when needed.', value: 'Cases retain evidentiary strength through the hearing process.' },
      { title: 'Stronger Compliance Position', desc: 'Consistent custody and audit documentation reduces regulatory exposure.', value: 'Reduced institutional risk during compliance review.' }
    ],

    faqs: [
      { q: 'Do you archive original paper documents?', a: 'Original files are maintained under a strict chain-of-custody protocol and returned to the client after filing, per agreed handling procedures.' },
      { q: 'What happens if a document is found to be missing during the audit?', a: 'The gap is flagged immediately and a sourcing plan is coordinated with the client before the case proceeds to filing.' }
    ],

    cta: {
      heading: 'Ensure Evidentiary Readiness Before You File',
      subheading: 'Request a litigation support walkthrough to review your case file readiness.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  }
};
