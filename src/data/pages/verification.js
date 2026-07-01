export const verificationContent = {
  'cpv-services': {
    eyebrow: 'Pre-Disbursal Risk Intelligence',
    title: 'Customer Personal Verification (CPV)',
    subtitle: 'Independent On-Ground KYC & Underwriting-Grade Profile Authentication',
    description: 'Implementing rigorous field-level controls and Customer Due Diligence (CDD) under RBI Master Directions on KYC to validate credit applicant profiles before risk exposure.',
    primaryCtaText: 'Request a CPV Process Walkthrough',
    secondaryCtaText: 'Download CPV Documentation Standards',

    problemStatement: [
      { icon: 'fingerprint', title: 'Identity Fraud', desc: 'Applicants present identity documents that do not correspond to a real, verifiable individual.' },
      { icon: 'briefcase', title: 'Fake Employment', desc: 'Declared employer or designation is fabricated, or the workplace is a shell entity.' },
      { icon: 'mapPin', title: 'Address Mismatch', desc: 'The declared residential address is inaccurate, vacant, or non-existent.' },
      { icon: 'fileWarning', title: 'Documentation Fraud', desc: 'Submitted documents are altered, forged, or do not match the physical originals.' },
      { icon: 'trendingDown', title: 'Loan Default Risk', desc: 'Unverified applicant data flows directly into credit scoring without ground confirmation.' },
      { icon: 'shieldAlert', title: 'Portfolio Quality Risk', desc: 'Verification conducted without structured protocols can itself create regulatory exposure.' }
    ],

    overview: {
      heading: 'The Importance of Ground-Truth Verification in Lending Governance',
      subheading: 'Mitigating Conduct Risk and Loan Defaults at the Onboarding Stage',
      summary: 'Under the RBI Master Direction on Know Your Customer (KYC) and AML frameworks, Customer Due Diligence (CDD) requires regulated entities to perform robust, independent verification of customer credentials. Customer Personal Verification (CPV) serves as the primary on-ground operational control to authenticate self-declared applicant profiles. SM Associates deploys trained, DRA-certified field coordinators to physically verify residential addresses, confirm active corporate employment, and check original KYC documents. This ground-truth audit serves as a critical pre-disbursal gate, filtering out synthetic identities, fictitious employers, and fraudulent paperwork to secure the portfolio from day one.',
      outcomes: [
        { title: 'Independent Confirmation', desc: 'Replaces reliance on applicant-declared data with on-ground evidence.' },
        { title: 'Structured Reporting', desc: 'Findings delivered in a consistent format the credit team can act on directly.' },
        { title: 'Early Risk Detection', desc: 'Catches synthetic identities and fabricated employment before disbursement, not after.' }
      ],
      useCases: [
        { title: 'Retail Credit Operations', desc: 'Verifying retail personal loan and credit card applicant profiles.' },
        { title: 'Housing Loan Underwriting', desc: 'Ground validation of mortgage applicant residence and documents.' },
        { title: 'SME Loan Onboarding', desc: 'Verifying small business trade registry and operational status on-site.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Identity Authentication', desc: 'Confirming the applicant is who the application says they are.', bullets: ['Cross-check of government-issued ID against applicant’s physical presence', 'Photographic and signature comparison against submitted KYC documents', 'Detection of document tampering or inconsistent biographical details'], businessOutcome: 'Confidence that the credit profile is attached to a real, identifiable individual.' },
      { title: 'Residential Validation', desc: 'Confirming the applicant actually resides at the declared address.', bullets: ['On-site visit to the declared residential address', 'Neighbor or local corroboration of applicant’s residence', 'Identification of vacant, non-existent, or mismatched addresses'], businessOutcome: 'Reduces the risk of an applicant becoming unreachable after disbursement.' },
      { title: 'Employment Intelligence', desc: 'Confirming the applicant’s stated employer and role are real.', bullets: ['On-site visit to the declared workplace', 'Confirmation of designation, tenure, and active employment status', 'Identification of shell offices or fictitious employer listings'], businessOutcome: 'Validates the repayment capacity assumption the credit decision is built on.' },
      { title: 'Reference Intelligence', desc: 'Independently corroborating applicant-provided references.', bullets: ['Direct contact with applicant-listed personal and professional references', 'Cross-validation of reference responses against application data', 'Flagging of references who cannot confirm the applicant’s claims'], businessOutcome: 'Adds a second, independent layer of identity and intent corroboration.' },
      { title: 'Risk Intelligence Assessment', desc: 'Translating field findings into an underwriting-ready risk view.', bullets: ['Consolidation of identity, residence, and employment findings into a single risk read', 'Flagging of discrepancies between declared and verified information', 'Structured risk commentary for the credit decisioning team'], businessOutcome: 'Gives underwriters a field-grounded view, not just a desk review.' },
      { title: 'Document Authentication', desc: 'Checking the paperwork itself, not just the claims it supports.', bullets: ['Physical inspection of original documents presented on-site', 'Checks for inconsistent formatting, altered fields, or mismatched issuing details', 'Confirmation that submitted copies match originals viewed in the field'], businessOutcome: 'Closes the gap between a document being submitted and a document being genuine.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'identity', label: 'Identity Intelligence', heading: 'Establishing Who the Applicant Actually Is', overview: 'The starting point of verification — confirming the applicant’s identity matches both their documents and their physical presence.', activities: ['In-person ID confirmation', 'Photo and signature match', 'Biometric-document cross-check where applicable'], documents: ['Government-issued photo ID', 'PAN', 'Aadhaar (or equivalent)', 'Passport-size photograph on file'], risks: ['Synthetic identity fraud', 'Identity theft', 'Document forgery'], deliverable: 'Identity verification confirmation with supporting photographic evidence.', benefit: 'Confidence that the credit profile is attached to a real, identifiable individual.' },
      { id: 'residential', label: 'Residential Intelligence', heading: 'Confirming the Applicant Lives Where They Say', overview: 'Physical confirmation of the declared residential address.', activities: ['Site visit', 'Neighbor corroboration', 'Ownership or tenancy status check'], documents: ['Utility bills', 'Rental agreement or property documents', 'Address proof on file'], risks: ['Address fraud', 'Future skip-tracing risk', 'Post-disbursal untraceability'], deliverable: 'Residence verification report with site visit confirmation.', benefit: 'Reduces the risk of an applicant becoming unreachable after disbursement.' },
      { id: 'employment', label: 'Employment Intelligence', heading: 'Confirming the Applicant’s Income Source Is Real', overview: 'On-site confirmation that the declared employer and role exist and are active.', activities: ['Workplace visit', 'HR or supervisor confirmation', 'Designation and tenure check'], documents: ['Salary slips', 'Offer or appointment letter', 'Employer ID card'], risks: ['Fabricated employment', 'Shell-company salary structures', 'Repayment-capacity misrepresentation'], deliverable: 'Employment verification report confirming employer legitimacy and applicant status.', benefit: 'Validates the repayment capacity assumption the credit decision is built on.' },
      { id: 'financial', label: 'Financial Risk Assessment', heading: 'Reading the Verification Findings Against Credit Risk', overview: 'Consolidating identity, residence, and employment findings into a risk-relevant view for the credit team.', activities: ['Cross-referencing field findings against declared income and obligations'], documents: ['Bank statements or income proof where provided', 'Declared liabilities'], risks: ['Overstated repayment capacity', 'Undisclosed financial stress'], deliverable: 'Consolidated risk commentary alongside verification findings.', benefit: 'Gives underwriters a field-grounded view, not just a desk review of paper income.' },
      { id: 'documentation', label: 'Document Authentication', heading: 'Checking the Paper Trail Itself', overview: 'Physical inspection of original documents to catch tampering or inconsistency that copies can hide.', activities: ['Original-vs-copy comparison', 'Format and issuing-authority consistency checks'], documents: ['All KYC and supporting documents submitted with the application'], risks: ['Forged or altered documentation'], deliverable: 'Documentation validation note flagging any inconsistency found.', benefit: 'Closes the gap between a document being submitted and a document being genuine.' },
      { id: 'decision', label: 'Decision Intelligence Report', heading: 'One Consolidated Report, Ready for Underwriting', overview: 'All findings compiled into a single structured report for the credit decision file.', activities: ['Report compilation', 'Internal quality check before delivery'], documents: [], risks: ['Inconsistent or fragmented verification records across an applicant’s file'], deliverable: 'Final CPV report, structured for direct use in the credit decisioning workflow.', benefit: 'Removes the need for the underwriting team to interpret raw field notes.' }
    ],

    challengesHeading: 'Enterprise Verification Risks',
    challenges: [
      { title: 'Identity Fraud', desc: 'Applicants present identity documents that don’t correspond to a real, verifiable individual.', warningBadge: 'Identity Risk', impact: 'Loans extended against identities that cannot be traced or held accountable post-disbursement.' },
      { title: 'Fake Documentation', desc: 'Submitted documents are altered, forged, or do not match the physical originals.', warningBadge: 'Document Risk', impact: 'Underwriting decisions are made on falsified evidence, undermining the credit file’s integrity.' },
      { title: 'Incorrect Address', desc: 'The declared residential address is inaccurate, vacant, or non-existent.', warningBadge: 'Traceability Risk', impact: 'Post-disbursement collections and recovery become significantly harder once an applicant cannot be located.' },
      { title: 'Employment Misrepresentation', desc: 'Declared employer or designation is fabricated, or the workplace is a shell entity.', warningBadge: 'Repayment Risk', impact: 'The repayment-capacity assumption underlying the credit decision is invalid from the outset.' },
      { title: 'Credit Risk', desc: 'Unverified applicant data flows directly into credit scoring without ground confirmation.', warningBadge: 'Scoring Risk', impact: 'Risk models are only as robust as their verified inputs — unverified inputs degrade portfolio quality over time.' },
      { title: 'Compliance Issues', desc: 'Verification conducted without structured protocols can itself create regulatory exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational and regulatory risk from how verification was performed.' }
    ],

    processFlow: {
      title: 'Enterprise Verification Lifecycle',
      desc: 'A structured operating model that moves an applicant case from intake to a decision-ready report.',
      steps: [
        { step: '01', title: 'Case Assignment', desc: 'Applicant case is received and assigned to a field officer based on the address or workplace location.', outcome: 'Verification request enters a tracked pipeline with a defined owner.' },
        { step: '02', title: 'Document Verification', desc: 'Submitted KYC and supporting documents are reviewed for completeness before field dispatch.', outcome: 'Confirmed document set ready for on-ground cross-checking.' },
        { step: '03', title: 'Field Investigation', desc: 'Field officer conducts on-site identity, residence, and employment verification visits.', outcome: 'First-hand findings recorded against the structured verification checklist.' },
        { step: '04', title: 'Validation & Compliance Review', desc: 'Field findings are cross-checked against submitted documents and reviewed for completeness and consistency.', outcome: 'Any discrepancy between declared and verified information is identified and flagged.' },
        { step: '05', title: 'Final Verification Report', desc: 'Consolidated findings are compiled into the standardized CPV report and delivered to the client.', outcome: 'A decision-ready verification record placed in the applicant’s credit file.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Lending Risk', desc: 'Ground-verified applicant data closes the gap between what was declared and what is real.', value: 'Fewer credit decisions made on unverified or false information.' },
      { title: 'Improved Portfolio Quality', desc: 'Filtering out misrepresented applications before disbursement keeps the originated portfolio cleaner.', value: 'Less downstream cleanup from accounts that should never have been approved.' },
      { title: 'Regulatory Compliance', desc: 'Structured, documented verification practices align with RBI Fair Practices Code expectations.', value: 'Reduces institutional exposure during regulatory review of underwriting practices.' },
      { title: 'Better Customer Validation', desc: 'Independent confirmation replaces reliance on self-declared applicant information.', value: 'Underwriting decisions rest on verified fact, not applicant assertion.' },
      { title: 'Faster Loan Processing', desc: 'A managed, SLA-tracked verification step keeps the credit pipeline moving predictably.', value: 'Verification becomes a scheduled stage in the process, not an open-ended delay.' },
      { title: 'Higher Decision Confidence', desc: 'Credit teams act on a structured, consistent verification report rather than interpreting raw field notes.', value: 'Faster, more defensible credit decisions across the underwriting team.' }
    ],

    faqs: [
      { q: 'What is the typical turnaround time for a CPV check?', a: 'Turnaround is tracked against an SLA agreed with each client and varies by region — specific timelines are confirmed during empanelment.' },
      { q: 'How do you ensure data confidentiality?', a: 'Applicant data collected during verification is handled under structured data-custody protocols aligned with RBI Fair Practices Code expectations.' }
    ],

    cta: {
      heading: 'Strengthen Your Credit Risk Underwriting Today',
      subheading: 'Enforce pre-disbursal validations and optimize portfolio quality with a compliant corporate partner.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'residence-verification': {
    eyebrow: 'On-Ground Address Verification',
    title: 'Residence Verification',
    subtitle: 'Physical Address Authentication & Occupancy Governance',
    description: 'Executing documented doorstep audits to confirm occupancy, residential stability, and contactability, reducing downstream collection risk and regulatory exposure.',
    primaryCtaText: 'Request a Residence Verification Walkthrough',
    secondaryCtaText: 'Download Residence Verification Standards',

    problemStatement: [
      { icon: 'mapPin', title: 'Address Mismatch', desc: 'The declared residential address is inaccurate, vacant, or does not match the applicant.' },
      { icon: 'fileWarning', title: 'Fabricated Utility Proofs', desc: 'Forged electricity bills or rent agreements submitted to pass basic document checks.' },
      { icon: 'shieldAlert', title: 'Transient Tenancy', desc: 'Temporary or shared rentals presented as stable, long-term residences.' },
      { icon: 'trendingDown', title: 'Post-Disbursal Untraceability', desc: 'An unverified address becomes a dead end the moment collections or recovery is needed.' }
    ],

    overview: {
      heading: 'Doorstep Address Auditing: Securing Last-Mile Contactability',
      subheading: 'Mitigating Post-Disbursal Traceability Gaps Under RBI Fair Practice Codes',
      summary: 'While utility bills and tenancy agreements establish a paper trail, they do not guarantee physical residence or borrower stability. Residence Verification serves as an essential credit risk control. SM Associates conducts structured on-site visits to confirm occupancy, independently verify tenure with neighbors, check municipal boundaries, and collect geo-tagged telemetry. This disciplined fieldwork complies with the RBI Fair Practices Code, ensuring the lender has a verified, legally valid physical coordinate for collections or legal notice serving throughout the lending lifecycle.',
      outcomes: [
        { title: 'Independent Confirmation', desc: 'Replaces a self-declared address with on-ground evidence of actual occupancy.' },
        { title: 'Structured Reporting', desc: 'Findings delivered in a consistent format the credit team can act on directly.' },
        { title: 'Early Risk Detection', desc: 'Catches vacant, fictitious, or mismatched addresses before disbursement, not after.' }
      ],
      useCases: [
        { title: 'Personal Loan Applicants', desc: 'Confirming residential stability before approving unsecured personal loans.' },
        { title: 'Auto Finance Portfolios', desc: 'Doorstep validation of vehicle loan applicants to secure future contactability.' },
        { title: 'Housing Loan Underwriting', desc: 'Ground confirmation of current residence ahead of long-tenure mortgage decisions.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Doorstep Occupancy Confirmation', desc: 'Face-to-face confirmation that the applicant actually resides at the declared address.', bullets: ['On-site visit to the declared residential address', 'Confirmation of household composition and stay duration', 'Identification of vacant, non-existent, or mismatched addresses'], businessOutcome: 'Confirms resident stability and reduces the risk of an unreachable applicant post-disbursement.' },
      { title: 'Neighbor & Local Corroboration', desc: 'Independent confirmation of the applicant’s residence from people who would know.', bullets: ['Discreet inquiries with neighbors or the building manager', 'Cross-validation of stay-duration claims', 'Flagging of residences no local contact can corroborate'], businessOutcome: 'Adds a second, independent layer of address confirmation beyond the visit itself.' },
      { title: 'Ownership & Tenancy Validation', desc: 'Confirming whether the applicant owns or rents, and verifying the underlying status.', bullets: ['Checking property ownership registry or rental agreement', 'Confirming applicant name matches occupancy records', 'Identifying informal or undocumented occupancy arrangements'], businessOutcome: 'Clarifies the applicant’s actual residential standing rather than relying on self-declaration.' },
      { title: 'Address-Proof Document Check', desc: 'Checking the supporting paperwork against what’s observed on-site.', bullets: ['Physical inspection of utility bills, rent agreements, or property documents', 'Checks for inconsistent formatting or altered details', 'Confirmation that submitted copies match what exists on the ground'], businessOutcome: 'Closes the gap between a document being submitted and an address being real.' },
      { title: 'Geotagged Visit Evidence', desc: 'Recording the visit itself as part of the verifiable record.', bullets: ['Timestamped photography of the residence exterior and entrance', 'Visit logged against the declared address coordinates', 'Evidence retained as part of the verification report'], businessOutcome: 'Gives underwriting teams a verifiable record of the visit, not just a written conclusion.' },
      { title: 'Address Risk Flagging', desc: 'Translating field findings into an underwriting-ready risk read.', bullets: ['Consolidation of occupancy, ownership, and document findings', 'Flagging of discrepancies between declared and verified address details', 'Structured risk commentary for the credit decisioning team'], businessOutcome: 'Gives underwriters a field-grounded view of address risk, not just a desk review.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'site-visit', label: 'Site Visit', heading: 'Confirming the Address Physically Exists', overview: 'The starting point — confirming the declared address corresponds to a real, locatable residence.', activities: ['Address geocoding and route dispatch', 'On-site visit to the declared address'], documents: ['Address proof on file'], risks: ['Vacant or non-existent address', 'Address-locating failure'], deliverable: 'Site visit confirmation log.', benefit: 'Establishes whether the declared address is even real before deeper checks proceed.' },
      { id: 'occupancy', label: 'Occupancy Confirmation', heading: 'Confirming the Applicant Actually Lives There', overview: 'Direct confirmation that the applicant resides at the address, not just that the address exists.', activities: ['Face-to-face confirmation with applicant or household', 'Household composition and stay-duration check'], documents: ['Utility bills', 'Rental agreement or property documents'], risks: ['Transient tenancy presented as stable residence', 'Applicant not known at the address'], deliverable: 'Occupancy confirmation report.', benefit: 'Confirms the applicant’s actual residential stability, not just an address match.' },
      { id: 'neighbor', label: 'Neighbor Corroboration', heading: 'Independently Verifying the Occupancy Claim', overview: 'Cross-checking the applicant’s residency claim with people other than the applicant.', activities: ['Discreet neighbor or building-manager inquiries', 'Cross-validation of stay-duration claims'], documents: [], risks: ['Residences no local contact can corroborate'], deliverable: 'Neighbor corroboration note.', benefit: 'Adds an independent check that doesn’t rely solely on the applicant’s own claims.' },
      { id: 'ownership', label: 'Ownership & Tenancy Check', heading: 'Confirming the Applicant’s Residential Standing', overview: 'Establishing whether the applicant owns or rents, and verifying that status.', activities: ['Property ownership registry or rent agreement check', 'Confirmation of name match on occupancy records'], documents: ['Property title documents', 'Rental agreement'], risks: ['Informal or undocumented occupancy arrangements'], deliverable: 'Ownership/tenancy validation note.', benefit: 'Clarifies the applicant’s actual residential status for the credit file.' },
      { id: 'documentation', label: 'Document Cross-Check', heading: 'Checking the Paper Trail Against the Ground Reality', overview: 'Physical inspection of address-proof documents to catch inconsistency copies can hide.', activities: ['Original-vs-copy comparison of address proofs', 'Format and issuing-authority consistency checks'], documents: ['All address-proof documents submitted with the application'], risks: ['Forged or altered utility bills and rent agreements'], deliverable: 'Documentation validation note.', benefit: 'Closes the gap between a document being submitted and an address being genuine.' },
      { id: 'report', label: 'Final Residence Report', heading: 'One Consolidated Report, Ready for Underwriting', overview: 'All findings compiled into a single structured report for the credit decision file.', activities: ['Report compilation', 'Internal quality check before delivery'], documents: [], risks: ['Inconsistent or fragmented verification records across an applicant’s file'], deliverable: 'Final residence verification report.', benefit: 'Removes the need for the underwriting team to interpret raw field notes.' }
    ],

    challengesHeading: 'Enterprise Address Verification Risks',
    challenges: [
      { title: 'Transient Tenancy', desc: 'Applicants present temporary or shared rentals as stable, long-term residences.', warningBadge: 'Tenancy Risk', impact: 'Inflated stability assumptions feed into a credit decision that doesn’t reflect real residential risk.' },
      { title: 'Fabricated Utility Proofs', desc: 'Forged electricity bills or rent receipts submitted to pass basic document checks.', warningBadge: 'Document Risk', impact: 'Underwriting decisions rest on falsified address evidence.' },
      { title: 'Vacant or Non-Existent Address', desc: 'The declared address turns out to be vacant, demolished, or simply doesn’t exist.', warningBadge: 'Traceability Risk', impact: 'Post-disbursement contact and recovery become significantly harder once the address is invalid.' },
      { title: 'Shared or Sublet Occupancy', desc: 'Multiple unrelated applicants share an address, making individual residency claims hard to corroborate.', warningBadge: 'Verification Risk', impact: 'Standard checks can’t isolate one applicant’s genuine residency from a shared address pattern.' },
      { title: 'Post-Disbursal Untraceability', desc: 'An unverified address becomes a dead end the moment collections or recovery action is needed.', warningBadge: 'Recovery Risk', impact: 'Collections and recovery teams inherit the cost of an address that was never actually confirmed.' },
      { title: 'Compliance Issues in Doorstep Conduct', desc: 'Field visits conducted without structured protocols can create regulatory exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational and regulatory risk from how doorstep verification was performed.' }
    ],

    processFlow: {
      title: 'Enterprise Residence Verification Lifecycle',
      desc: 'A structured operating model that moves an applicant case from intake to a decision-ready report.',
      steps: [
        { step: '01', title: 'Case Assignment', desc: 'Applicant case is received and assigned to a field officer based on the address location.', outcome: 'Verification request enters a tracked pipeline with a defined owner.' },
        { step: '02', title: 'Address Geocoding & Dispatch', desc: 'The declared address is geocoded and routed to the nearest available field officer.', outcome: 'Confirmed dispatch route ready for on-site visit.' },
        { step: '03', title: 'Site Visit & Neighbor Corroboration', desc: 'Field officer conducts the on-site occupancy check and neighbor corroboration.', outcome: 'First-hand findings recorded against the structured verification checklist.' },
        { step: '04', title: 'Validation & Compliance Review', desc: 'Field findings are cross-checked against submitted address-proof documents.', outcome: 'Any discrepancy between declared and verified address details is identified and flagged.' },
        { step: '05', title: 'Final Residence Report', desc: 'Consolidated findings are compiled into the standardized report and delivered to the client.', outcome: 'A decision-ready verification record placed in the applicant’s credit file.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Address Fraud', desc: 'Ground-verified address data closes the gap between what was declared and what is real.', value: 'Fewer credit decisions made on unverified or false residence claims.' },
      { title: 'Lower Post-Disbursal Untraceability', desc: 'Confirming a real, occupied address reduces the chance of an unreachable borrower later.', value: 'Fewer accounts lost to contact-tracing failures during collections.' },
      { title: 'Improved Portfolio Quality', desc: 'Filtering out vacant or fictitious addresses before disbursement keeps the originated portfolio cleaner.', value: 'Less downstream cleanup from accounts that should never have been approved.' },
      { title: 'Regulatory Compliance', desc: 'Structured, documented doorstep practices align with RBI Fair Practices Code expectations.', value: 'Reduces institutional exposure during regulatory review of field-verification conduct.' },
      { title: 'Faster Loan Processing', desc: 'A managed, SLA-tracked verification step keeps the credit pipeline moving predictably.', value: 'Verification becomes a scheduled stage in the process, not an open-ended delay.' },
      { title: 'Higher Decision Confidence', desc: 'Credit teams act on a structured, consistent verification report rather than interpreting raw field notes.', value: 'Faster, more defensible credit decisions across the underwriting team.' }
    ],

    faqs: [
      { q: 'How do you verify if the applicant is a tenant or owner?', a: 'Field officers check the property ownership registry or rental agreement and confirm occupancy status with neighbors or the building manager.' },
      { q: 'What happens if the declared address can’t be located?', a: 'The case is flagged and routed for further address-tracing follow-up rather than being closed as verified.' }
    ],

    cta: {
      heading: 'Protect Your Loan Book from Address Fraud',
      subheading: 'Request a residence verification walkthrough for your retail portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'office-verification': {
    eyebrow: 'Employment & Workplace Verification',
    title: 'Office Verification',
    subtitle: 'Employment Credentialing & Employer Legitimacy Audits',
    description: 'On-site workplace checks, HR payroll verifications, and corporate registry audits to confirm genuine employment, tenure, and repayment capacity.',
    primaryCtaText: 'Request an Office Verification Walkthrough',
    secondaryCtaText: 'Download Office Verification Standards',

    problemStatement: [
      { icon: 'briefcase', title: 'Fictitious Employer', desc: 'The declared employer turns out to be a shell office or does not exist at the stated address.' },
      { icon: 'fileWarning', title: 'Salary Slip Tampering', desc: 'Applicants submit altered or forged salary slips to overstate declared income.' },
      { icon: 'trendingDown', title: 'Inflated Designation', desc: 'Job title and tenure are exaggerated to strengthen the credit profile.' },
      { icon: 'shieldAlert', title: 'Post-Disbursal Job Loss', desc: 'An unverified employment claim leaves no real trail once repayment capacity is actually tested.' }
    ],

    overview: {
      heading: 'Corporate Workplace Auditing: Protecting Lending Capital from Profile Fraud',
      subheading: 'Verifying Income Sources and Employment Stability',
      summary: 'Borrower repayment capacity is the core underwriting anchor, yet salary slips and employer contact numbers can be easily manipulated. Office Verification establishes employer legitimacy through physical inspections. Our field officers conduct on-site workplace visits, verify tenure and designation with HR managers, and cross-reference business names against MCA and GST registries. This process isolates shell companies and fabricated salary structures, ensuring credit decisions are grounded in real, stable cash flows rather than unverified credit claims.',
      outcomes: [
        { title: 'Independent Confirmation', desc: 'Replaces a self-declared employer with on-ground evidence of an active workplace.' },
        { title: 'Structured Reporting', desc: 'Findings delivered in a consistent format the credit team can act on directly.' },
        { title: 'Early Risk Detection', desc: 'Catches shell offices and fabricated employment before disbursement, not after.' }
      ],
      useCases: [
        { title: 'Unsecured Personal Loans', desc: 'Confirming employer and salary credentials for personal credit applicants.' },
        { title: 'Premium Credit Cards', desc: 'Validating corporate address and workplace presence for higher-limit approvals.' },
        { title: 'Salaried Home Loan Underwriting', desc: 'Confirming stable employment behind a long-tenure mortgage decision.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Workplace Visit Confirmation', desc: 'Physically confirming the declared employer operates at the stated address.', bullets: ['On-site visit to the declared workplace', 'Confirmation the office is active and operational', 'Identification of shell offices or non-existent addresses'], businessOutcome: 'Confirms the employer is real before income is treated as fact.' },
      { title: 'HR or Supervisor Verification', desc: 'Direct confirmation of employment status from someone other than the applicant.', bullets: ['Discreet confirmation with HR or the reporting supervisor', 'Cross-check of designation and active employment status', 'Flagging of employers who cannot confirm the applicant'], businessOutcome: 'Adds an independent check beyond the applicant’s own paperwork.' },
      { title: 'Designation & Tenure Check', desc: 'Confirming the role and length of service actually match what was declared.', bullets: ['Verification of job title and department', 'Confirmation of joining date and tenure', 'Identification of inflated designations'], businessOutcome: 'Prevents credit decisions built on an exaggerated job profile.' },
      { title: 'Salary Documentation Review', desc: 'Checking the income paperwork itself, not just the number on it.', bullets: ['Physical inspection of salary slips presented on-site', 'Checks for inconsistent formatting or altered figures', 'Confirmation against payroll records where accessible'], businessOutcome: 'Closes the gap between a salary slip being submitted and income being real.' },
      { title: 'Corporate Registry Cross-Check', desc: 'Confirming the employer is a real, registered business.', bullets: ['Cross-check of company name against standard registries', 'Identification of shell or recently-incorporated entities', 'Flagging of employers with no verifiable business footprint'], businessOutcome: 'Reduces exposure to coordinated fictitious-employer schemes.' },
      { title: 'Employment Risk Flagging', desc: 'Translating field findings into an underwriting-ready risk read.', bullets: ['Consolidation of workplace, HR, and documentation findings', 'Flagging of discrepancies between declared and verified employment', 'Structured risk commentary for the credit decisioning team'], businessOutcome: 'Gives underwriters a field-grounded view of repayment-capacity risk.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'workplace-visit', label: 'Workplace Visit', heading: 'Confirming the Employer Actually Exists', overview: 'The starting point — confirming the declared workplace is a real, operating office.', activities: ['Site visit to the declared workplace address', 'Confirmation the office is active and operational'], documents: ['Offer or appointment letter'], risks: ['Shell or non-existent office', 'Address mismatch'], deliverable: 'Workplace visit confirmation log.', benefit: 'Establishes the employer is real before deeper checks proceed.' },
      { id: 'hr-confirmation', label: 'HR Confirmation', heading: 'Confirming Employment Status Independently', overview: 'Direct confirmation with HR or a supervisor, not relying on the applicant alone.', activities: ['Discreet HR or supervisor confirmation', 'Cross-check of active employment status'], documents: ['Employer ID card'], risks: ['Employers who cannot confirm the applicant'], deliverable: 'HR confirmation note.', benefit: 'Adds an independent layer beyond applicant-provided paperwork.' },
      { id: 'designation', label: 'Designation & Tenure', heading: 'Confirming the Role and Length of Service', overview: 'Verifying the declared job title and tenure match reality.', activities: ['Designation confirmation', 'Joining-date and tenure check'], documents: ['Appointment letter'], risks: ['Inflated designation or tenure'], deliverable: 'Designation and tenure verification note.', benefit: 'Prevents an exaggerated job profile from shaping the credit decision.' },
      { id: 'salary-docs', label: 'Salary Documentation', heading: 'Checking the Income Paperwork Itself', overview: 'Physical inspection of salary slips to catch inconsistency or alteration.', activities: ['Original-vs-copy comparison of salary slips', 'Format consistency checks'], documents: ['Salary slips', 'Bank statements where provided'], risks: ['Forged or altered salary slips'], deliverable: 'Salary documentation validation note.', benefit: 'Closes the gap between a payslip being submitted and income being real.' },
      { id: 'registry-check', label: 'Corporate Registry Check', heading: 'Confirming the Employer Is a Real Business', overview: 'Cross-checking the employer against standard business registries.', activities: ['Company name cross-check', 'Business footprint review'], documents: [], risks: ['Shell or recently-incorporated employer entities'], deliverable: 'Corporate registry cross-check note.', benefit: 'Reduces exposure to coordinated fictitious-employer schemes.' },
      { id: 'report', label: 'Final Report', heading: 'One Consolidated Report, Ready for Underwriting', overview: 'All findings compiled into a single structured report for the credit decision file.', activities: ['Report compilation', 'Internal quality check before delivery'], documents: [], risks: ['Inconsistent or fragmented verification records'], deliverable: 'Final office verification report.', benefit: 'Removes the need for underwriting to interpret raw field notes.' }
    ],

    challengesHeading: 'Enterprise Employment Verification Risks',
    challenges: [
      { title: 'Fictitious Employer Listings', desc: 'Coordinated setups using fake office desks or phone extensions to support non-existent salaried profiles.', warningBadge: 'Employer Risk', impact: 'Loans approved against employment that doesn’t exist.' },
      { title: 'Salary Slip Tampering', desc: 'Forged or altered salary slips submitted to overstate income.', warningBadge: 'Document Risk', impact: 'Repayment-capacity assumptions are built on falsified figures.' },
      { title: 'Inflated Designation', desc: 'Job title and tenure exaggerated to strengthen the credit profile.', warningBadge: 'Profile Risk', impact: 'Credit decisions overestimate the applicant’s actual standing.' },
      { title: 'Shell Office Setup', desc: 'A registered-looking office address that has no genuine business operations behind it.', warningBadge: 'Verification Risk', impact: 'Standard address checks alone can miss a coordinated shell setup.' },
      { title: 'Post-Disbursal Job Loss Untraceability', desc: 'An unverified employer leaves no real trail once repayment is actually tested.', warningBadge: 'Recovery Risk', impact: 'Collections inherit the cost of employment that was never confirmed.' },
      { title: 'Compliance Issues in Workplace Visits', desc: 'Field visits conducted without structured protocols can create regulatory exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational risk from how workplace verification was performed.' }
    ],

    processFlow: {
      title: 'Enterprise Office Verification Lifecycle',
      desc: 'A structured operating model that moves an applicant case from intake to a decision-ready report.',
      steps: [
        { step: '01', title: 'Case Assignment', desc: 'Applicant case is received and assigned to a field officer based on the workplace location.', outcome: 'Verification request enters a tracked pipeline with a defined owner.' },
        { step: '02', title: 'Workplace Dispatch', desc: 'The declared workplace address is routed to the nearest available field officer.', outcome: 'Confirmed dispatch route ready for on-site visit.' },
        { step: '03', title: 'Workplace Visit & HR Confirmation', desc: 'Field officer conducts the on-site workplace check and HR or supervisor confirmation.', outcome: 'First-hand findings recorded against the structured verification checklist.' },
        { step: '04', title: 'Validation & Compliance Review', desc: 'Field findings are cross-checked against submitted salary and employment documents.', outcome: 'Any discrepancy between declared and verified employment is identified and flagged.' },
        { step: '05', title: 'Final Office Verification Report', desc: 'Consolidated findings are compiled into the standardized report and delivered to the client.', outcome: 'A decision-ready verification record placed in the applicant’s credit file.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Employment Fraud', desc: 'Ground-verified employer data closes the gap between what was declared and what is real.', value: 'Fewer credit decisions made on unverified or false employment claims.' },
      { title: 'Validated Repayment Capacity', desc: 'Confirming real, active employment grounds the credit decision in actual income evidence.', value: 'Underwriting decisions rest on verified employment, not applicant assertion.' },
      { title: 'Improved Portfolio Quality', desc: 'Filtering out fictitious-employer applications before disbursement keeps the originated portfolio cleaner.', value: 'Less downstream cleanup from accounts that should never have been approved.' },
      { title: 'Regulatory Compliance', desc: 'Structured, documented workplace-visit practices align with RBI Fair Practices Code expectations.', value: 'Reduces institutional exposure during regulatory review of underwriting practices.' },
      { title: 'Faster Loan Processing', desc: 'A managed, SLA-tracked verification step keeps the credit pipeline moving predictably.', value: 'Verification becomes a scheduled stage in the process, not an open-ended delay.' },
      { title: 'Higher Decision Confidence', desc: 'Credit teams act on a structured, consistent verification report rather than interpreting raw field notes.', value: 'Faster, more defensible credit decisions across the underwriting team.' }
    ],

    faqs: [
      { q: 'Do you visit the HR department directly?', a: 'Yes. Field officers visit the company and seek confirmation from HR or the applicant’s supervisor as part of the standard verification protocol.' },
      { q: 'What happens if the employer cannot be located?', a: 'The case is flagged and routed for further follow-up rather than closed as verified.' }
    ],

    cta: {
      heading: 'Protect Your Personal Loan Book from Employment Fraud',
      subheading: 'Request an office verification walkthrough for your retail credit portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'business-verification': {
    eyebrow: 'SME & Commercial Establishment Verification',
    title: 'Business Verification',
    subtitle: 'Commercial Establishment & SME Operational Audits',
    description: 'Physical verification of operating business premises, stock valuation, GSTIN conformity, and trade references for commercial and SME credit underwriting.',
    primaryCtaText: 'Request a Business Verification Walkthrough',
    secondaryCtaText: 'Download Business Verification Standards',
    problemStatement: [
      { icon: 'briefcase', title: 'Non-Operational Shell Firms', desc: 'A registered business address with no genuine commercial activity behind it.' },
      { icon: 'fileWarning', title: 'Inflated Inventory Records', desc: 'Stock counts and business size overstated to secure higher working capital limits.' },
      { icon: 'trendingDown', title: 'Fictitious Trade Registration', desc: 'GST or trade-license details that don’t correspond to a real, active business.' },
      { icon: 'shieldAlert', title: 'Post-Disbursal Business Closure', desc: 'An unverified business can quietly shut down once funds are disbursed.' }
    ],

    overview: {
      heading: 'Commercial Site Audits: Confirming SME Operational Footprints',
      subheading: 'Validating Working Capital Scale and Business Legitimacy',
      summary: 'SME lending requires underwriting against real business operations, inventory, and cash flow. Business Verification provides a comprehensive on-site operational assessment. SM Associates conducts physical factory or retail site visits, performs physical stock and inventory audits, checks trade references, and cross-checks GSTIN, MSME, and trade licenses against regulatory databases. This ground-level diligence ensures that credit limits and working capital lines are calibrated against genuine business scale, preventing exposure to non-operational shell firms.',
      outcomes: [
        { title: 'Independent Confirmation', desc: 'Replaces self-reported business details with on-ground evidence of active operations.' },
        { title: 'Structured Reporting', desc: 'Findings delivered in a consistent format the credit team can act on directly.' },
        { title: 'Early Risk Detection', desc: 'Catches shell businesses and inflated inventory before disbursement, not after.' }
      ],
      useCases: [
        { title: 'SME Working Capital Loans', desc: 'Confirming business premises and inventory levels before approving working capital limits.' },
        { title: 'Industrial Machinery Funding', desc: 'Checking active plant capacity and machinery presence on-site.' },
        { title: 'Self-Employed Borrower Profiles', desc: 'Verifying business activity behind a self-employed applicant’s declared income.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Premises Operation Confirmation', desc: 'Physically confirming the business operates at the declared premises.', bullets: ['On-site visit to the declared business address', 'Confirmation of active commercial or factory operations', 'Identification of vacant or non-operational sites'], businessOutcome: 'Confirms the business is real before its scale is treated as fact.' },
      { title: 'Inventory & Asset Review', desc: 'Checking what’s actually on the premises, not just what was declared.', bullets: ['On-site review of stock and inventory levels', 'Confirmation of active machinery where applicable', 'Identification of inflated stock or asset claims'], businessOutcome: 'Prevents credit limits set against falsified business scale.' },
      { title: 'Trade Registry Cross-Check', desc: 'Confirming the business’s registered status matches reality.', bullets: ['Cross-check of GSTIN and trade license details', 'Confirmation of business name and registration consistency', 'Flagging of mismatched or lapsed registrations'], businessOutcome: 'Confirms the business conforms to applicable regulatory codes.' },
      { title: 'Employee Headcount Verification', desc: 'Confirming the business has the active workforce it claims.', bullets: ['On-site headcount observation', 'Cross-check against declared staffing levels', 'Identification of inconsistent or inflated headcount claims'], businessOutcome: 'Grounds operational-scale assumptions in observed reality.' },
      { title: 'Tax & License Validation', desc: 'Checking the supporting paperwork against what’s observed on-site.', bullets: ['Physical inspection of trade license and tax documents', 'Checks for inconsistent formatting or altered details', 'Confirmation against standard registries where accessible'], businessOutcome: 'Closes the gap between paperwork being submitted and a business being genuine.' },
      { title: 'Business Risk Flagging', desc: 'Translating field findings into an underwriting-ready risk read.', bullets: ['Consolidation of premises, inventory, and registry findings', 'Flagging of discrepancies between declared and verified business status', 'Structured risk commentary for the credit decisioning team'], businessOutcome: 'Gives underwriters a field-grounded view of business risk.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'premises-visit', label: 'Premises Visit', heading: 'Confirming the Business Actually Operates', overview: 'The starting point — confirming the declared business premises is real and active.', activities: ['Site visit to the declared business address', 'Confirmation of active commercial operations'], documents: ['Trade license'], risks: ['Vacant or non-operational premises'], deliverable: 'Premises visit confirmation log.', benefit: 'Establishes the business is real before deeper checks proceed.' },
      { id: 'inventory-review', label: 'Inventory Review', heading: 'Checking What’s Actually on the Premises', overview: 'On-site review of stock and assets to confirm declared business scale.', activities: ['Stock and inventory level review', 'Machinery presence check where applicable'], documents: [], risks: ['Inflated stock or asset claims'], deliverable: 'Inventory review note.', benefit: 'Prevents credit limits set against falsified business scale.' },
      { id: 'registry-check', label: 'Registry Cross-Check', heading: 'Confirming Registered Status Matches Reality', overview: 'Cross-checking GSTIN and trade license details against the business observed on-site.', activities: ['GSTIN and trade license cross-check', 'Business name consistency check'], documents: ['GST registration', 'Trade license'], risks: ['Mismatched or lapsed registrations'], deliverable: 'Registry cross-check note.', benefit: 'Confirms regulatory conformity of the business.' },
      { id: 'headcount', label: 'Headcount Verification', heading: 'Confirming the Active Workforce', overview: 'Observing actual staffing levels against what was declared.', activities: ['On-site headcount observation'], documents: [], risks: ['Inconsistent or inflated headcount claims'], deliverable: 'Headcount verification note.', benefit: 'Grounds operational-scale assumptions in observed reality.' },
      { id: 'documentation', label: 'Documentation Review', heading: 'Checking the Paperwork Against the Ground Reality', overview: 'Physical inspection of tax and licensing documents to catch inconsistency.', activities: ['Original-vs-copy comparison', 'Format and issuing-authority consistency checks'], documents: ['Tax filings', 'Trade license'], risks: ['Altered or inconsistent business documents'], deliverable: 'Documentation validation note.', benefit: 'Closes the gap between paperwork being submitted and a business being genuine.' },
      { id: 'report', label: 'Final Report', heading: 'One Consolidated Report, Ready for Underwriting', overview: 'All findings compiled into a single structured report for the credit decision file.', activities: ['Report compilation', 'Internal quality check before delivery'], documents: [], risks: ['Inconsistent or fragmented verification records'], deliverable: 'Final business verification report.', benefit: 'Removes the need for underwriting to interpret raw field notes.' }
    ],

    challengesHeading: 'Enterprise Business Verification Risks',
    challenges: [
      { title: 'Non-Operational Shell Firms', desc: 'Applicants listing non-operating warehouse spaces or shell entities to secure SME funding.', warningBadge: 'Shell Company Risk', impact: 'Loans approved against a business that doesn’t genuinely operate.' },
      { title: 'Inflated Inventory Records', desc: 'Stock counts and business size overstated to secure higher working capital limits.', warningBadge: 'Inventory Risk', impact: 'Funding levels set against a business scale that isn’t real.' },
      { title: 'Fictitious Trade Registration', desc: 'GST or trade-license details that don’t correspond to a real, active business.', warningBadge: 'Registry Risk', impact: 'The underlying credit decision rests on an unverifiable business identity.' },
      { title: 'Address Mismatch', desc: 'The registered business address doesn’t match where operations actually occur.', warningBadge: 'Verification Risk', impact: 'Standard registry checks alone can miss a genuine address discrepancy.' },
      { title: 'Post-Disbursal Untraceability', desc: 'An unverified business becomes a dead end once collections or recovery is needed.', warningBadge: 'Recovery Risk', impact: 'Collections inherit the cost of a business that was never confirmed.' },
      { title: 'Compliance Issues in Premises Visits', desc: 'Field visits conducted without structured protocols can create regulatory exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational risk from how business verification was performed.' }
    ],

    processFlow: {
      title: 'Enterprise Business Verification Lifecycle',
      desc: 'A structured operating model that moves an applicant case from intake to a decision-ready report.',
      steps: [
        { step: '01', title: 'Case Assignment', desc: 'Applicant case is received and assigned to a field officer based on the business location.', outcome: 'Verification request enters a tracked pipeline with a defined owner.' },
        { step: '02', title: 'Premises Dispatch', desc: 'The declared business address is routed to the nearest available field officer.', outcome: 'Confirmed dispatch route ready for on-site visit.' },
        { step: '03', title: 'Premises Visit & Inventory Review', desc: 'Field officer conducts the on-site operations check and inventory review.', outcome: 'First-hand findings recorded against the structured verification checklist.' },
        { step: '04', title: 'Validation & Compliance Review', desc: 'Field findings are cross-checked against submitted registration and tax documents.', outcome: 'Any discrepancy between declared and verified business status is identified and flagged.' },
        { step: '05', title: 'Final Business Verification Report', desc: 'Consolidated findings are compiled into the standardized report and delivered to the client.', outcome: 'A decision-ready verification record placed in the applicant’s credit file.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Shell-Business Risk', desc: 'Ground-verified business data closes the gap between what was declared and what is real.', value: 'Fewer credit decisions made on unverified or false business claims.' },
      { title: 'Valid Working Capital Limits', desc: 'Physical inventory and premises checks ensure funding levels match actual business scale.', value: 'Funding decisions grounded in observed operating capacity.' },
      { title: 'Improved Portfolio Quality', desc: 'Filtering out non-operational applicants before disbursement keeps the originated portfolio cleaner.', value: 'Less downstream cleanup from accounts that should never have been approved.' },
      { title: 'Regulatory Compliance', desc: 'Structured, documented premises-visit practices align with RBI Fair Practices Code expectations.', value: 'Reduces institutional exposure during regulatory review of underwriting practices.' },
      { title: 'Faster Loan Processing', desc: 'A managed, SLA-tracked verification step keeps the credit pipeline moving predictably.', value: 'Verification becomes a scheduled stage in the process, not an open-ended delay.' },
      { title: 'Higher Decision Confidence', desc: 'Credit teams act on a structured, consistent verification report rather than interpreting raw field notes.', value: 'Faster, more defensible credit decisions across the underwriting team.' }
    ],

    faqs: [
      { q: 'How do you verify if the business owns or leases the premises?', a: 'Field officers inspect the registered land deeds or tenancy agreement and verify lease details on-site.' },
      { q: 'Do you check the business’s financial ledgers?', a: 'A basic validation check on invoices, supplier records, and GST filings is performed during the on-site inspection.' }
    ],

    cta: {
      heading: 'Verify SME Borrowers Before Disbursal',
      subheading: 'Request a business verification walkthrough for your commercial lending desk.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'document-verification': {
    eyebrow: 'KYC & Collateral Document Authentication',
    title: 'Document Verification',
    subtitle: 'KYC Registry Auditing & Collateral Title Verification',
    description: 'Deep cross-checking of KYC, income, and property documents against government databases and physical originals to prevent synthetic document fraud.',
    primaryCtaText: 'Request a Document Verification Walkthrough',
    secondaryCtaText: 'Download Document Verification Standards',

    problemStatement: [
      { icon: 'fileWarning', title: 'Forged Identity Documents', desc: 'Identity proofs that are altered or do not correspond to a real, verifiable individual.' },
      { icon: 'briefcase', title: 'Altered Property Title Deeds', desc: 'Forged parent deeds or encumbrance certificates submitted as loan collateral.' },
      { icon: 'trendingDown', title: 'Manipulated Income Records', desc: 'Altered bank statements or tax filings submitted to inflate declared income.' },
      { icon: 'shieldAlert', title: 'Undetected Fraud at Disbursement', desc: 'A desk review alone can miss alteration that only an original-document inspection would catch.' }
    ],

    overview: {
      heading: 'Document Integrity & Fraud Mitigation in Loan Origination',
      subheading: 'Advanced Registry Checks and Physical Original Comparison',
      summary: 'Digital copy submissions are highly vulnerable to digital alteration and image manipulation. Document Verification establishes a robust authenticity chain. SM Associates cross-checks KYC records directly against Central Identity registries, verifies property title deeds and encumbrances at local sub-registrar offices, and performs physical original-document inspections. This dual-layer review provides the credit risk team with a verified, legally sound dossier, securing the lender’s collateral position before capital disbursement.',
      outcomes: [
        { title: 'Independent Confirmation', desc: 'Replaces a desk review of copies with registry cross-checks and original-document inspection.' },
        { title: 'Structured Reporting', desc: 'Findings delivered in a consistent format the credit team can act on directly.' },
        { title: 'Early Risk Detection', desc: 'Catches forged or altered documents before disbursement, not after.' }
      ],
      useCases: [
        { title: 'Mortgage Loan Underwriting', desc: 'Verifying property title deeds before loan sanctioning.' },
        { title: 'High-Value Business Loans', desc: 'Authenticating tax returns, bank statements, and collateral proofs.' },
        { title: 'Identity-Sensitive Onboarding', desc: 'Confirming KYC documents are genuine before account or loan approval.' }
      ]
    },

    kpiCards: [
      { icon: 'building', title: 'Regional Office Network', value: '19 Offices' },
      { icon: 'users', title: 'Trained Professionals', value: '1,500+' },
      { icon: 'shield', title: 'SLA & Audit Compliance', value: 'RBI Aligned' },
      { icon: 'trendingUp', title: 'Resolved Default Capital', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Identity Document Authentication', desc: 'Confirming identity proofs are genuine, not just present.', bullets: ['Cross-check of identity documents against standard registries', 'Checks for inconsistent formatting or altered biographical details', 'Detection of tampering not visible in a digital copy'], businessOutcome: 'Confirms the identity behind the credit file is genuine.' },
      { title: 'Property Title Verification', desc: 'Confirming collateral title deeds are valid and free of dispute.', bullets: ['Cross-check of title flow and encumbrances', 'Verification against local property registries', 'Identification of forged or altered title documents'], businessOutcome: 'Ensures the lender’s collateral security is genuine.' },
      { title: 'Income Document Cross-Check', desc: 'Confirming income paperwork hasn’t been altered.', bullets: ['Physical inspection of bank statements and salary slips', 'Checks for inconsistent formatting or altered figures', 'Cross-reference against tax filings where available'], businessOutcome: 'Closes the gap between income documents being submitted and income being real.' },
      { title: 'Registry Database Validation', desc: 'Cross-checking identity and property details against official records.', bullets: ['Identity cross-check against standard government databases', 'Property cross-check against registry records', 'Flagging of records that don’t match official sources'], businessOutcome: 'Adds an independent layer of confirmation beyond the document itself.' },
      { title: 'Original-vs-Copy Inspection', desc: 'Physically comparing submitted copies against original documents.', bullets: ['Side-by-side comparison of originals and submitted copies', 'Format and issuing-authority consistency checks', 'Confirmation that copies accurately represent the originals'], businessOutcome: 'Catches alteration a digital-copy-only review would miss.' },
      { title: 'Document Risk Flagging', desc: 'Translating authentication findings into an underwriting-ready risk read.', bullets: ['Consolidation of identity, property, and income findings', 'Flagging of discrepancies between submitted and verified documents', 'Structured risk commentary for the credit decisioning team'], businessOutcome: 'Gives underwriters a verification-grounded view of document risk.' }
    ],

    tabs: [
      { id: 'evidence-audit-trail', label: 'Evidence & Audit Trail', heading: 'Structured Evidence Collection & Audit-Ready Governance', overview: 'Demonstrating a structured and defensible verification process aligned with institutional documentation standards.', activities: ['Capture GPS-enabled field verification metrics and location coordinates', 'Log time-stamped visit records and photographic verification evidence', 'Maintain digital verification checklists and audit-ready operational records'], documents: ['Digital verification checklists and field inspection dossiers', 'Time-stamped GPS visit logs and structured evidence files'], risks: ['Unverified field documentation exceptions', 'Audit trail compliance gaps'], deliverable: 'Audit-ready operational documentation dossier.', benefit: 'Provides institutional clients with transparent, defensible verification records.' },
      { id: 'identity-docs', label: 'Identity Documents', heading: 'Confirming Identity Proofs Are Genuine', overview: 'Cross-checking identity documents against standard registries and originals.', activities: ['Identity document cross-check', 'Original-vs-copy comparison'], documents: ['Government-issued photo ID', 'PAN', 'Aadhaar (or equivalent)'], risks: ['Forged or altered identity documents'], deliverable: 'Identity document authentication note.', benefit: 'Confirms the identity behind the credit file is genuine.' },
      { id: 'property-docs', label: 'Property Documents', heading: 'Confirming Collateral Title Is Valid', overview: 'Cross-checking property title deeds against registry records.', activities: ['Title flow and encumbrance check', 'Registry cross-check'], documents: ['Property title deeds', 'Encumbrance certificate'], risks: ['Forged or disputed title deeds'], deliverable: 'Property title verification note.', benefit: 'Ensures the lender’s collateral security is genuine.' },
      { id: 'income-docs', label: 'Income Documents', heading: 'Confirming Income Paperwork Hasn’t Been Altered', overview: 'Physical inspection of income documents to catch tampering.', activities: ['Original-vs-copy comparison of income documents', 'Cross-reference against tax filings where available'], documents: ['Bank statements', 'Salary slips', 'Tax filings'], risks: ['Altered bank statements or salary slips'], deliverable: 'Income document validation note.', benefit: 'Closes the gap between income documents being submitted and income being real.' },
      { id: 'registry-validation', label: 'Registry Cross-Check', heading: 'Cross-Checking Against Official Records', overview: 'Validating identity and property details against official government and registry databases.', activities: ['Identity database cross-check', 'Property registry cross-check'], documents: [], risks: ['Records that don’t match official sources'], deliverable: 'Registry validation note.', benefit: 'Adds an independent confirmation layer beyond the document itself.' },
      { id: 'original-inspection', label: 'Original Inspection', heading: 'Comparing Originals Against Submitted Copies', overview: 'Physical, side-by-side inspection of original documents.', activities: ['Side-by-side original-vs-copy comparison', 'Format and issuing-authority consistency checks'], documents: ['All original documents submitted with the application'], risks: ['Alteration not visible in a digital copy'], deliverable: 'Original inspection note.', benefit: 'Catches tampering a desk review alone would miss.' },
      { id: 'report', label: 'Final Report', heading: 'One Consolidated Report, Ready for Underwriting', overview: 'All findings compiled into a single structured report for the credit decision file.', activities: ['Report compilation', 'Internal quality check before delivery'], documents: [], risks: ['Inconsistent or fragmented verification records'], deliverable: 'Final document verification report.', benefit: 'Removes the need for underwriting to interpret raw findings.' }
    ],

    challengesHeading: 'Enterprise Document Verification Risks',
    challenges: [
      { title: 'Forged Property Title Deeds', desc: 'Applicants submitting forged parent deeds, fake patta copies, or encumbrance certificates.', warningBadge: 'Property Risk', impact: 'Collateral security backing the loan may not actually be valid.' },
      { title: 'Income Log Manipulation', desc: 'Altered bank statements or tax filings submitted to overstate income.', warningBadge: 'Income Risk', impact: 'Repayment-capacity assumptions are built on falsified figures.' },
      { title: 'Identity Document Forgery', desc: 'Identity proofs altered or fabricated to support a credit application.', warningBadge: 'Identity Risk', impact: 'The credit file may be attached to an identity that isn’t genuine.' },
      { title: 'Registry Mismatch', desc: 'Submitted documents that don’t match what official registries show.', warningBadge: 'Verification Risk', impact: 'A desk review alone can miss a registry-level discrepancy.' },
      { title: 'Undetected Copy Alteration', desc: 'Digital copies can hide tampering that only an original-document inspection would catch.', warningBadge: 'Document Risk', impact: 'Forged documents pass through a copy-only review undetected.' },
      { title: 'Compliance Issues in Document Handling', desc: 'Handling sensitive KYC and collateral documents without structured custody protocols creates exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational and regulatory risk from document-handling practices.' }
    ],

    processFlow: {
      title: 'Enterprise Document Verification Lifecycle',
      desc: 'A structured operating model that moves a case from document intake to a decision-ready authenticity finding.',
      steps: [
        { step: '01', title: 'Document Intake', desc: 'Submitted identity, property, and income documents are received and logged.', outcome: 'A confirmed document set ready for verification.' },
        { step: '02', title: 'Registry Cross-Check', desc: 'Identity and property details are cross-checked against official registries.', outcome: 'Discrepancies between submitted and registry data are identified.' },
        { step: '03', title: 'Original Document Inspection', desc: 'Original documents are physically inspected against the copies submitted.', outcome: 'First-hand findings recorded against the structured authentication checklist.' },
        { step: '04', title: 'Validation & Compliance Review', desc: 'All findings are cross-checked for completeness and consistency.', outcome: 'Any discrepancy between submitted and verified documents is identified and flagged.' },
        { step: '05', title: 'Final Document Verification Report', desc: 'Consolidated findings are compiled into the standardized report and delivered to the client.', outcome: 'A decision-ready authenticity record placed in the applicant’s credit file.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Document Fraud', desc: 'Registry cross-checks and original inspection close the gap a copy-only review leaves open.', value: 'Fewer credit decisions made on forged or altered documents.' },
      { title: 'Valid Collateral Security', desc: 'Confirming title deeds are genuine protects the lender’s actual security position.', value: 'Reduced risk of collateral disputes after disbursement.' },
      { title: 'Improved Portfolio Quality', desc: 'Filtering out forged-document applications before disbursement keeps the originated portfolio cleaner.', value: 'Less downstream cleanup from accounts that should never have been approved.' },
      { title: 'Regulatory Compliance', desc: 'Structured, documented authentication practices align with RBI KYC expectations.', value: 'Reduces institutional exposure during regulatory review of underwriting practices.' },
      { title: 'Faster Loan Processing', desc: 'A managed, SLA-tracked verification step keeps the credit pipeline moving predictably.', value: 'Verification becomes a scheduled stage in the process, not an open-ended delay.' },
      { title: 'Higher Decision Confidence', desc: 'Credit teams act on a structured, consistent authentication report rather than a copy-only review.', value: 'Faster, more defensible credit decisions across the underwriting team.' }
    ],

    faqs: [
      { q: 'Do you physically cross-check property registers?', a: 'Yes. Property title verification includes a cross-check against the relevant local property registry, not just a review of submitted copies.' },
      { q: 'How do you handle the originals during inspection?', a: 'Original documents are inspected under a documented chain-of-custody protocol and returned to the applicant or client as agreed.' }
    ],

    cta: {
      heading: 'Ensure Document Integrity Before You Disburse',
      subheading: 'Request a document verification walkthrough for your underwriting team.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  }
};
