export const collectionsContent = {
  'pdc-collections': {
    eyebrow: 'Post-Dated Cheque Collections',
    title: 'PDC Collections',
    subtitle: 'Managing Post-Dated Cheque Presentation and Bounce Follow-Up at Scale',
    description: 'Tracking, presenting, and following up on post-dated cheques across a lender’s active portfolio.',
    primaryCtaText: 'Request a PDC Collections Walkthrough',
    secondaryCtaText: 'Download PDC Tracking Standards',

    problemStatement: [
      { icon: 'fileWarning', title: 'Missed Presentation Dates', desc: 'Untracked PDC due dates lead to missed bank presentation windows.' },
      { icon: 'trendingDown', title: 'Delayed Bounce Follow-Up', desc: 'A bounced cheque without immediate follow-up loses recovery momentum.' },
      { icon: 'briefcase', title: 'Manual Tracking at Volume', desc: 'Spreadsheet-based PDC tracking breaks down at portfolio scale.' },
      { icon: 'shieldAlert', title: 'Weak Escalation Path', desc: 'Without a structured handoff, bounced cheques don’t reliably escalate to legal action.' }
    ],

    overview: {
      heading: 'Why Structured PDC Tracking Protects Collection Timing',
      subheading: 'A Post-Dated Cheque Is Only Useful If It’s Tracked and Acted On',
      summary: 'Post-dated cheques are a common repayment instrument across retail and SME lending, but they only work as a collection tool if presentation dates are tracked precisely and bounces are followed up immediately. PDC Collections manages this end-to-end — tracking due dates across the portfolio, coordinating timely bank presentation, and triggering immediate follow-up the moment a cheque bounces. SM Associates structures this around a defined presentation-and-escalation cadence, so cheque-based repayment performs as reliably as any other collection channel.',
      outcomes: [
        { title: 'Tracked Presentation Dates', desc: 'Every PDC due date is tracked and presented on schedule.' },
        { title: 'Immediate Bounce Follow-Up', desc: 'A bounced cheque triggers immediate borrower contact, not a delayed batch process.' },
        { title: 'Structured Escalation', desc: 'Repeated bounces escalate into the appropriate legal process without delay.' }
      ],
      useCases: [
        { title: 'Retail Loan PDC Tracking', desc: 'Managing post-dated cheque schedules across a retail loan book.' },
        { title: 'SME Working Capital Cheques', desc: 'Tracking PDC instruments tied to business working capital facilities.' },
        { title: 'Bounce-to-Escalation Handoff', desc: 'Coordinating the handoff from bounced cheque to Section 138 action.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: '[DRAFT]' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: '[DRAFT]' },
      { icon: 'timer', title: 'Turnaround Discipline', value: '[DRAFT]' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'PDC Schedule Tracking', desc: 'Maintaining an accurate presentation calendar across the portfolio.', bullets: ['Centralized due-date tracking', 'Automated presentation scheduling', 'Portfolio-wide visibility into upcoming presentations'], businessOutcome: 'Prevents missed presentation windows at any portfolio scale.' },
      { title: 'Bank Presentation Coordination', desc: 'Coordinating timely presentation of cheques for clearing.', bullets: ['Presentation batch coordination', 'Clearing status tracking', 'Reconciliation against expected collections'], businessOutcome: 'Keeps cheque-based collections on schedule and reconciled.' },
      { title: 'Immediate Bounce Response', desc: 'Triggering borrower contact the moment a cheque bounces.', bullets: ['Real-time bounce notification handling', 'Immediate outbound contact attempt', 'Bounce reason logging'], businessOutcome: 'Preserves recovery momentum instead of losing it to delay.' },
      { title: 'ECS-Return Intimation Handling', desc: 'Managing electronic clearing returns alongside cheque bounces.', bullets: ['ECS return tracking', 'Borrower intimation on return', 'Consolidated bounce-and-return reporting'], businessOutcome: 'Covers both cheque and electronic instrument failures under one process.' },
      { title: 'Escalation Handoff', desc: 'Moving repeated bounces into the appropriate legal process.', bullets: ['Defined escalation triggers for repeat bounces', 'Structured handoff to Section 138 process', 'Case history transfer to legal stage'], businessOutcome: 'Ensures bounced cheques don’t stall without a clear next step.' },
      { title: 'PDC Risk Flagging', desc: 'Translating bounce patterns into a structured risk read.', bullets: ['Consolidation of bounce rates and patterns', 'Flagging of accounts with repeated bounces', 'Structured reporting for the client’s collections desk'], businessOutcome: 'Gives lenders early visibility into accounts trending toward default.' }
    ],

    tabs: [
      { id: 'schedule-tracking', label: 'Schedule Tracking', heading: 'Maintaining the Presentation Calendar', overview: 'PDC due dates are tracked centrally across the portfolio.', activities: ['Due-date tracking', 'Presentation scheduling'], documents: [], risks: ['Missed presentation windows from untracked due dates'], deliverable: 'PDC schedule log.', benefit: 'Prevents missed presentation windows at scale.' },
      { id: 'presentation', label: 'Bank Presentation', heading: 'Presenting Cheques for Clearing', overview: 'Cheques are presented to the bank on schedule.', activities: ['Presentation batch coordination', 'Clearing status tracking'], documents: [], risks: ['Delayed or missed presentation'], deliverable: 'Presentation confirmation record.', benefit: 'Keeps collections on the expected timeline.' },
      { id: 'bounce-response', label: 'Bounce Response', heading: 'Acting the Moment a Cheque Bounces', overview: 'Immediate borrower contact follows any bounce notification.', activities: ['Bounce notification handling', 'Immediate borrower contact'], documents: [], risks: ['Lost recovery momentum from delayed response'], deliverable: 'Bounce response log.', benefit: 'Preserves the best chance of quick resolution after a bounce.' },
      { id: 'ecs-handling', label: 'ECS Handling', heading: 'Managing Electronic Clearing Returns', overview: 'ECS returns are tracked and intimated alongside cheque bounces.', activities: ['ECS return tracking', 'Borrower intimation'], documents: [], risks: ['Electronic return failures handled inconsistently with cheque bounces'], deliverable: 'ECS return log.', benefit: 'Brings electronic instrument failures into the same structured process.' },
      { id: 'escalation', label: 'Escalation Handoff', heading: 'Moving to the Next Step When Needed', overview: 'Repeated bounces are handed off to the appropriate legal process.', activities: ['Escalation trigger review', 'Legal stage handoff'], documents: [], risks: ['Bounced cheques stalling without a clear next step'], deliverable: 'Escalation handoff record.', benefit: 'Ensures repeated bounces move forward, not stall.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Lender a Clear View of PDC Performance', overview: 'Consolidated reporting on presentation, bounce, and escalation outcomes.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across the PDC portfolio'], deliverable: 'PDC status report.', benefit: 'Removes the need for the lender to track PDC status manually.' }
    ],

    challengesHeading: 'Enterprise PDC Collections Risks',
    challenges: [
      { title: 'Missed Presentation Dates', desc: 'Untracked due dates lead to missed bank presentation windows.', warningBadge: 'Tracking Risk', impact: 'Collections are delayed or missed entirely when presentation is missed.' },
      { title: 'Delayed Bounce Follow-Up', desc: 'A bounced cheque without immediate follow-up loses recovery momentum.', warningBadge: 'Response Risk', impact: 'The best window for quick resolution closes without prompt action.' },
      { title: 'Manual Tracking at Volume', desc: 'Spreadsheet-based tracking breaks down at portfolio scale.', warningBadge: 'Scale Risk', impact: 'Tracking errors increase as portfolio volume grows.' },
      { title: 'Weak Escalation Path', desc: 'Without structured handoff, bounced cheques don’t reliably escalate.', warningBadge: 'Escalation Risk', impact: 'Repeat bounces stall instead of moving to legal action.' },
      { title: 'Inconsistent ECS Handling', desc: 'Electronic clearing returns handled inconsistently with cheque bounces.', warningBadge: 'Process Risk', impact: 'Gaps in coverage between cheque and electronic instrument failures.' },
      { title: 'Reconciliation Gaps', desc: 'Without clearing-status tracking, collected amounts are hard to reconcile.', warningBadge: 'Reconciliation Risk', impact: 'Lenders lack a clear, current view of actual PDC collection performance.' }
    ],

    processFlow: {
      title: 'Enterprise PDC Collections Lifecycle',
      desc: 'A structured operating model that moves a post-dated cheque from tracking to a resolved outcome.',
      steps: [
        { step: '01', title: 'Schedule Intake', desc: 'PDC due dates are ingested and tracked centrally.', outcome: 'A complete, tracked presentation calendar.' },
        { step: '02', title: 'Bank Presentation', desc: 'Cheques are presented for clearing on schedule.', outcome: 'Timely presentation aligned with the expected collection date.' },
        { step: '03', title: 'Bounce or Clearance Check', desc: 'Clearing status is confirmed for every presented instrument.', outcome: 'Immediate visibility into successful or bounced instruments.' },
        { step: '04', title: 'Bounce Response', desc: 'Bounced cheques trigger immediate borrower contact.', outcome: 'Fast follow-up while recovery momentum is highest.' },
        { step: '05', title: 'Escalation or Resolution', desc: 'The case resolves through payment or escalates to legal action.', outcome: 'A documented, resolved outcome for every PDC case.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Fewer Missed Presentations', desc: 'Centralized tracking prevents presentation windows from being missed.', value: 'More cheques presented on schedule across the portfolio.' },
      { title: 'Faster Bounce Resolution', desc: 'Immediate follow-up captures the best window for quick resolution.', value: 'Higher resolution rate on bounced instruments.' },
      { title: 'Scalable PDC Management', desc: 'Structured tracking holds up at portfolio scale where spreadsheets fail.', value: 'Consistent performance regardless of portfolio volume.' },
      { title: 'Reliable Escalation', desc: 'Structured handoff ensures repeated bounces move to legal action.', value: 'Fewer bounced cheques stalling without further action.' },
      { title: 'Unified Instrument Coverage', desc: 'Cheque and ECS failures are handled under one consistent process.', value: 'Consistent borrower follow-up regardless of payment instrument.' },
      { title: 'Clear Collection Visibility', desc: 'Consolidated reporting gives the lender a current view of PDC performance.', value: 'Less manual reconciliation work for the lender’s collections team.' }
    ],

    faqs: [
      { q: 'Do you handle both post-dated cheques and ECS mandates?', a: 'Yes — PDC Collections covers both cheque presentation and ECS-return tracking and intimation under one consolidated process.' },
      { q: 'What happens after a cheque bounces?', a: 'Immediate borrower contact is attempted, and repeated bounces are escalated to the appropriate legal process, including Section 138 action where warranted.' }
    ],

    cta: {
      heading: 'Keep Your PDC Collections On Schedule',
      subheading: 'Request a PDC collections walkthrough for your active loan portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'early-stage-collections': {
    eyebrow: 'Early-Stage Recovery Operations',
    title: 'Early Stage Collections',
    subtitle: 'Resolving Delinquency Before It Becomes a Recovery Problem',
    description: 'Resolving delinquency early through structured, compliant tele-calling before accounts escalate.',
    primaryCtaText: 'Request an Early Stage Collections Walkthrough',
    secondaryCtaText: 'Download Collections Compliance Standards',

    problemStatement: [
      { icon: 'trendingDown', title: 'Delinquency Migration', desc: 'Accounts move quickly into higher-risk buckets without immediate, structured outreach.' },
      { icon: 'mapPin', title: 'Unreachable Borrowers', desc: 'Defaulters changing contact details or going silent at the first sign of payment trouble.' },
      { icon: 'shieldAlert', title: 'Non-Compliant Calling', desc: 'Outbound calling outside permitted hours or without proper records creates regulatory exposure.' },
      { icon: 'fileWarning', title: 'Untracked Commitments', desc: 'Promise-to-pay commitments that aren’t logged or followed up on get lost between calls.' }
    ],

    overview: {
      heading: 'Why Early, Structured Contact Changes the Resolution Curve',
      subheading: 'The First 30 Days Determine Whether an Account Recovers or Escalates',
      summary: 'Once an account crosses into delinquency, every day without contact makes resolution harder and more expensive. Early Stage Collections is built around immediate, compliant outreach — calling within permitted hours, logging every promise-to-pay commitment, and escalating unresponsive cases to field teams before they age further. SM Associates structures this as a tracked operational pipeline, not ad-hoc calling, so lenders see consistent contact rates from day one of delinquency.',
      outcomes: [
        { title: 'Immediate Outreach', desc: 'Structured contact begins as soon as an account enters the delinquency pipeline.' },
        { title: 'Compliant by Design', desc: 'Calling windows and recording practices are built into the operating model, not left to individual agents.' },
        { title: 'Tracked Commitments', desc: 'Every promise-to-pay is logged and followed up against, not left to memory.' }
      ],
      useCases: [
        { title: 'Retail Credit Cards', desc: 'Reaching cardholders immediately after a missed payment.' },
        { title: 'Microfinance Portfolios', desc: 'Reminder calls and structured follow-up for group-lending accounts.' },
        { title: 'Personal Loan Books', desc: 'First-contact outreach before accounts age into harder recovery stages.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: '[DRAFT]' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: '[DRAFT]' },
      { icon: 'timer', title: 'Turnaround Discipline', value: '[DRAFT]' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Compliant Outbound Calling', desc: 'Structured tele-calling within RBI-permitted calling hours.', bullets: ['Calling restricted to approved hours', 'Recorded caller lines for every outbound attempt', 'Scripted, non-coercive borrower communication'], businessOutcome: 'Keeps early-stage outreach compliant by design, not by individual discretion.' },
      { title: 'Promise-to-Pay Tracking', desc: 'Logging and following up on every borrower commitment.', bullets: ['Structured logging of payment commitments', 'Automated follow-up scheduling', 'Escalation when commitments are missed'], businessOutcome: 'Converts more verbal commitments into actual payments.' },
      { title: 'Multi-Channel Outreach', desc: 'Combining calls, SMS, and digital reminders for better contact rates.', bullets: ['Coordinated calling and messaging cadence', 'Channel-appropriate borrower communication', 'Consistent messaging across touchpoints'], businessOutcome: 'Improves the odds of reaching a borrower who doesn’t answer calls.' },
      { title: 'Segmented Account Prioritization', desc: 'Routing accounts based on delinquency age and risk profile.', bullets: ['Accounts segmented by days-past-due and risk', 'Higher-risk accounts prioritized for faster contact', 'Dynamic re-routing as account status changes'], businessOutcome: 'Focuses effort where early intervention matters most.' },
      { title: 'Field Escalation Pathway', desc: 'Moving unresponsive accounts to field teams before they age further.', bullets: ['Defined escalation triggers for non-response', 'Structured handoff to field collections', 'No account left in calling-only limbo indefinitely'], businessOutcome: 'Prevents accounts from drifting unmanaged into harder recovery stages.' },
      { title: 'Collections Risk Flagging', desc: 'Translating outreach outcomes into a structured risk read.', bullets: ['Consolidation of contact attempts and outcomes', 'Flagging of high-risk non-responsive accounts', 'Structured reporting for the lender’s collections desk'], businessOutcome: 'Gives lenders a clear view of which accounts need escalation.' }
    ],

    tabs: [
      { id: 'intake', label: 'Account Intake', heading: 'Bringing a Delinquent Account Into the Pipeline', overview: 'The starting point — an account entering structured early-stage outreach.', activities: ['Secure ingestion of delinquent account data', 'Segmentation by delinquency age and risk'], documents: [], risks: ['Delayed intake extending the contact gap'], deliverable: 'Active collections case log.', benefit: 'Ensures no delinquent account sits untouched before outreach begins.' },
      { id: 'outreach', label: 'Compliant Outreach', heading: 'Making First Contact Within Permitted Hours', overview: 'Structured calling and messaging within RBI-compliant calling windows.', activities: ['Outbound calling within approved hours', 'SMS and digital reminder dispatch'], documents: [], risks: ['Non-compliant calling hours or methods'], deliverable: 'Outreach attempt log.', benefit: 'Keeps every borrower touchpoint compliant by design.' },
      { id: 'commitment', label: 'Commitment Tracking', heading: 'Logging and Following Up on Promises to Pay', overview: 'Every borrower commitment is logged and tracked, not left to memory.', activities: ['Promise-to-pay logging', 'Automated follow-up scheduling'], documents: [], risks: ['Untracked or missed commitments'], deliverable: 'Promise-to-pay register.', benefit: 'Converts more verbal commitments into completed payments.' },
      { id: 'escalation', label: 'Escalation Decision', heading: 'Deciding When an Account Needs Field Action', overview: 'Defined triggers for moving an unresponsive account beyond calling.', activities: ['Non-response trend review', 'Escalation trigger evaluation'], documents: [], risks: ['Accounts left in calling-only limbo too long'], deliverable: 'Escalation decision note.', benefit: 'Prevents unresponsive accounts from aging further unmanaged.' },
      { id: 'handoff', label: 'Field Handoff', heading: 'Transferring an Account to Field Collections', overview: 'A structured handoff so escalated accounts don’t lose context.', activities: ['Case history transfer to field team', 'Field dispatch coordination'], documents: [], risks: ['Lost context during handoff'], deliverable: 'Field handoff case file.', benefit: 'Keeps escalated accounts moving without losing prior outreach history.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Lender a Clear View of Progress', overview: 'Consolidated reporting on outreach outcomes and account status.', activities: ['Report compilation', 'Status sync with client dashboard'], documents: [], risks: ['Inconsistent or delayed status reporting'], deliverable: 'Collections status report.', benefit: 'Removes the need for the lender to chase status updates manually.' }
    ],

    challengesHeading: 'Enterprise Early-Stage Collections Risks',
    challenges: [
      { title: 'Delinquency Migration', desc: 'Accounts moving into higher-risk buckets without immediate, structured outreach.', warningBadge: 'Bucket Risk', impact: 'Provisioning requirements increase as accounts age further.' },
      { title: 'Unreachable Borrowers', desc: 'Defaulters changing contact details or going silent at the first sign of trouble.', warningBadge: 'Contact Risk', impact: 'Outreach effort is wasted on stale contact information.' },
      { title: 'Non-Compliant Calling', desc: 'Outbound calling outside permitted hours or without proper recording creates exposure.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational and regulatory risk from calling conduct.' },
      { title: 'Untracked Commitments', desc: 'Promise-to-pay commitments that aren’t logged or followed up on get lost.', warningBadge: 'Process Risk', impact: 'Verbal commitments don’t convert into actual recovered payments.' },
      { title: 'Delayed Escalation', desc: 'Unresponsive accounts staying in calling-only mode too long.', warningBadge: 'Escalation Risk', impact: 'Accounts age past the point where early intervention is effective.' },
      { title: 'Borrower Friction', desc: 'Poorly handled outreach can damage the lender’s relationship with a recoverable customer.', warningBadge: 'Reputational Risk', impact: 'Aggressive or inconsistent contact can reduce future recovery cooperation.' }
    ],

    processFlow: {
      title: 'Enterprise Early-Stage Collections Lifecycle',
      desc: 'A structured operating model that moves a delinquent account from intake to resolution or escalation.',
      steps: [
        { step: '01', title: 'Account Intake', desc: 'Delinquent account data is ingested and segmented by risk and delinquency age.', outcome: 'Account enters a tracked outreach pipeline.' },
        { step: '02', title: 'Compliant Outreach', desc: 'Structured calling and messaging begins within permitted hours.', outcome: 'First contact attempt logged against the account.' },
        { step: '03', title: 'Commitment Tracking', desc: 'Any promise-to-pay is logged and scheduled for follow-up.', outcome: 'A trackable commitment record, not a verbal-only promise.' },
        { step: '04', title: 'Escalation Review', desc: 'Non-responsive accounts are reviewed against defined escalation triggers.', outcome: 'A clear decision on whether the account needs field action.' },
        { step: '05', title: 'Resolution or Handoff', desc: 'The account is either resolved through payment or handed off to field collections.', outcome: 'A documented outcome placed in the lender’s collections record.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Reduced Bucket Migration', desc: 'Early, structured contact resolves more accounts before they age into higher-risk buckets.', value: 'Fewer accounts requiring costlier downstream recovery action.' },
      { title: 'Compliant Outreach by Design', desc: 'Calling windows and recording practices are built into the operating model.', value: 'Reduced regulatory exposure tied to collections conduct.' },
      { title: 'Higher Commitment Conversion', desc: 'Tracked promise-to-pay follow-up converts more commitments into actual payments.', value: 'Improved early-stage recovery rates.' },
      { title: 'Faster Escalation Decisions', desc: 'Defined triggers move unresponsive accounts to field teams without delay.', value: 'Less time lost on accounts that needed escalation sooner.' },
      { title: 'Clear Lender Visibility', desc: 'Consolidated reporting gives lenders a real-time view of outreach progress.', value: 'Less manual status-chasing for the lender’s collections desk.' },
      { title: 'Protected Borrower Relationship', desc: 'Compliant, professional outreach preserves the lender’s relationship with recoverable customers.', value: 'Better long-term recovery cooperation from resolved accounts.' }
    ],

    faqs: [
      { q: 'What calling hours do you operate within?', a: 'Outbound calling is restricted to RBI-permitted hours, with all calls recorded for compliance review.' },
      { q: 'What happens if a borrower doesn’t respond to calls or messages?', a: 'The account is reviewed against defined escalation triggers and, where appropriate, handed off to field collections.' }
    ],

    cta: {
      heading: 'Resolve Delinquency Before It Escalates',
      subheading: 'Request an early-stage collections walkthrough for your delinquent portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'soft-collections': {
    eyebrow: 'Empathy-First Recovery',
    title: 'Compliant and Professional Soft Collections Operations',
    description: 'Protect customer goodwill and resolve overdue accounts through DRA-certified tele-calling, empathy, and structured settlement offers.',
    primaryCtaText: 'Request Soft Collections Mandate',
    secondaryCtaText: 'View Training Curriculum',
    trustStatement: 'Delivering compliant, customer-friendly collections with a 98% client retention score.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates manages professional soft collections campaigns. We employ 100% DRA-certified calling representatives who focus on non-coercive mediation and structured settlement solutions to resolve overdue credit cards and personal loans.',
      outcomes: [
        { title: 'DRA Certified', desc: '100% of collections staff are fully certified by IIBF DRA academy.' },
        { title: 'Client Retention', desc: '98% average relationship tenure with major financial institutions.' },
        { title: 'Compliance Audits', desc: 'Zero audit objections across 250+ quarterly banking reviews.' }
      ],
      useCases: [
        { title: 'Credit Card Collections', desc: 'Professional tele-calling campaigns to resolve card defaults.' },
        { title: 'Fintech Personal Loans', scenario: 'Soft reminders and coordinate settlement options for consumer loans.' }
      ]
    },
    stats: [
      { value: '100%', label: 'DRA Staff Certified' },
      { value: '98%', label: 'Client Retention Rate' },
      { value: '250+', label: 'SLA Audits Passed' }
    ],
    challenges: [
      { title: 'Reputational Liability', desc: 'Non-compliant collections methods from third-party agencies causing legal and brand damage to lenders.', warningBadge: 'Regulatory Risk', impactFormula: 'Audit Penalty + 15%' },
      { title: 'Friction with Borrowers', desc: 'Aggressive calling methods causing borrowers to withdraw or refuse communication.', warningBadge: 'Borrower Conflict', impactFormula: 'Recovery Rate - 12%' }
    ],
    failCompare: [
      {
        dimension: 'Agent Quality Control',
        traditional: 'Untrained third-party collectors using informal, high-pressure communication.',
        sm: '100% IIBF DRA-certified calling agents passing weekly compliance check sessions.'
      },
      {
        dimension: 'Dispute Handling',
        traditional: 'Oral disputes ignored or unlogged, leading to customer complaints.',
        sm: 'CRM-integrated dispute logs that freeze collection activities and route cases to the bank within 24 hours.'
      }
    ],
    framework: {
      title: 'Empathy-Led Debt Resolution',
      desc: 'Ethical communication models designed to resolve overdue balances.',
      solutions: [
        { title: 'DRA Training Standards', desc: 'Mandatory IIBF DRA training before assigning cases to calling representatives.' },
        { title: 'Structured Settlement Models', desc: 'Offering bank-approved payment structures to assist borrowers in default.' }
      ]
    },
    capabilities: [
      { title: 'Bilingual Call Campaigns', desc: 'Tele-calling in all South Indian languages and English.', businessOutcome: 'Ensures clear, customer-friendly communication with borrowers.' },
      { title: 'Grievance Resolution', desc: 'Tracking and closing borrower disputes with clear audit trails.', businessOutcome: 'Protects lenders from compliance and reputational issues.' }
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', objective: 'Securely import case files', action: 'Ingest portfolio files and set agent allocations.', deliverable: 'Ingested data log.' },
      { step: '02', title: 'Applicant Check', objective: 'Verify contact details', action: 'Verify identity parameters and check contact records.', deliverable: 'Verified borrower profile.' },
      { step: '03', title: 'Professional Call', objective: 'Mediate settlement options', action: 'Reach out to borrower, explain outstanding debt, and present settlement options.', deliverable: 'Settlement agreement log.' },
      { step: '04', title: 'Payment Processing', objective: 'Process collections', action: 'Process payments and sync details with the client dashboard.', deliverable: 'Cleared transaction ledger.' }
    ],
    techEnablement: {
      title: 'Outbound Calling Telemetry',
      desc: 'Recorded calling lines and quality monitoring loops.',
      modules: [
        { title: 'Quality Audits', desc: 'Weekly QA checks of randomly selected call recordings (20% of cases).' }
      ]
    },
    geoScope: {
      title: 'Regional Support Network',
      desc: 'Call center and client liaison hubs active across Southern India.',
      stats: [
        { label: 'Calling Languages', value: 'Tamil, Kannada, Telugu, Malayalam, English' },
        { label: 'Operational Hubs', value: 'Chennai, Bengaluru, Cochin, Hyderabad' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Scripts',
      '100% DRA-Certified Calling Professionals',
      '180-Day Secure Call Audio Archiving'
    ],
    industriesServed: [
      { name: 'Commercial Banks', scenario: 'Soft collections outreach for retail personal credit lines.', framework: 'DRA compliant calling codes' },
      { name: 'Fintech Platforms', scenario: 'Micro-loan recovery and coordinate settlements.', framework: 'API-based call logs updates' }
    ],
    operationalMetrics: [
      { value: '100%', label: 'DRA Certified Callers' },
      { value: '98%', label: 'Client Retention' },
      { value: '180 Days', label: 'Secure Voice Archive' }
    ],
    businessOutcomes: [
      { title: 'Zero Compliance Breaches', desc: '100% DRA certification and call recording prevent regulatory violations.' },
      { title: 'Stable Portfolio Recoveries', desc: 'Relationship-first mediation increases default resolutions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'High Compliance, Higher Recovery',
      challenge: 'A fintech lender faced audit warnings due to aggressive calling tactics used by their third-party collection agency.',
      approach: 'SM Associates took over soft collections, routing all accounts to IIBF DRA-certified callers using strict scripts.',
      execution: 'Logged all outbound calls, auditable within approved calling hours, and integrated dispute filters on our console.',
      outcome: 'Resolved 74% of delinquent accounts with zero compliance or audit issues over a 90-day pilot.'
    },
    faqs: [
      { q: 'How do you handle borrower disputes?', a: 'Outbound agents log disputes immediately in the CRM. The account is suspended from collections, and details are sent to the bank within 24 hours.' }
    ],
    cta: {
      heading: 'Empanel a Compliance-First Recovery Partner',
      subheading: 'Request a copy of our training curriculum, internal codes of conduct, and call logs protocols.',
      buttonText: 'Consult with Our Team',
      href: '/contact'
    }
  },

  'hard-collections': {
    eyebrow: 'Stressed Asset Recovery',
    title: 'Resolute Action for High-Delinquency and Write-Off Portfolios',
    description: 'Recover value from legacy write-off books and NPA accounts with disciplined field action and legal escalation.',
    primaryCtaText: 'Request NPA Consultation',
    secondaryCtaText: 'Explore Legal Action Links',
    trustStatement: 'Maximizing capital recovery from legacy defaults, recovering over ₹8,000+ Crore for empanelled partners.',
    trustBar: {
      statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
      logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
    },
    snapshot: {
      summary: 'SM Associates specializes in recovering value from hard collections buckets and written-off loan portfolios. We combine field investigations, skip-tracing systems, and legal notice enforcements (Section 138 / SARFAESI) to secure debt resolutions.',
      outcomes: [
        { title: 'NPA Capital Recovered', desc: 'Over ₹8,000+ Crore recovered across retail and commercial NPA portfolios.' },
        { title: 'Active NPA Mandates', desc: '80+ active loan books managed for ARCs and commercial banks.' },
        { title: 'Skip-Tracing Success', desc: '74% locator success rate for hard-to-reach or absconding borrowers.' }
      ],
      useCases: [
        { title: 'ARC Acquired Books', desc: 'Accelerating resolution parameters for acquired stressed portfolios.' },
        { title: 'Written-Off Commercial Loans', desc: 'Tracing hidden corporate assets to recover legacy outstanding debt.' }
      ]
    },
    stats: [
      { value: '₹8,000+ Cr', label: 'NPA Value Recovered' },
      { value: '80+', label: 'Active NPA Books' },
      { value: '74%', label: 'Skip-Tracing Locate Rate' }
    ],
    challenges: [
      { title: 'Absconding Defaulters', desc: 'Borrowers changing states, closing registered offices, and turning off contact numbers to avoid repayment.', warningBadge: 'Skip Risk', impactFormula: 'Default Age + 180 Days' },
      { title: 'Collateral Depreciation', desc: 'Unsecured properties or heavy machinery losing value due to delayed repossession enforcements.', warningBadge: 'Asset Write-down', impactFormula: 'Liquidation Yield - 35%' }
    ],
    failCompare: [
      {
        dimension: 'Asset Location Sourcing',
        traditional: 'Accepting applications addresses as final, closing cases if borrowers are not found.',
        sm: 'Multi-layer tracking combining local informant networks, registrar checks, and utility bill audits.'
      },
      {
        dimension: 'Legal Notice Delivery',
        traditional: 'Sending notices via standard post, with no delivery verification.',
        sm: 'Evidentiary notice serving with geotagged check-ins and court-admissible delivery proofs.'
      }
    ],
    framework: {
      title: 'NPA Resolution Framework',
      desc: 'Combining ground investigation and legal escalations to resolve stressed debt.',
      solutions: [
        { title: 'Skip-Tracing Integration', desc: 'Locating missing debtors using digital footprints, MCA registrations, and ground investigations.' },
        { title: 'Legal Notice Escalation', desc: 'Coordinating Section 138 check bounce filings and symbolic possession enforcements.' }
      ]
    },
    capabilities: [
      { title: 'Asset Location Sourcing', desc: 'Locating alternative assets and properties owned by borrowers in default.', businessOutcome: 'Increases the likelihood of recovery via court attachments.' },
      { title: 'SARFAESI Enforcements', desc: 'Coordinating legal filings under the SARFAESI Act to seize secured properties.', businessOutcome: 'Allows banks to liquidate assets and recover outstanding capital.' }
    ],
    workflow: [
      { step: '01', title: 'Portfolio Scoring', objective: 'Evaluate default cases', action: 'Analyze portfolio default age, collateral values, and borrower data.', deliverable: 'Risk priority log.' },
      { step: '02', title: 'Skip-Tracing Launch', objective: 'Locate missing debtors', action: 'Trigger skip-tracing databases check and ground investigator dispatch.', deliverable: 'Located address records.' },
      { step: '03', title: 'Ground Confrontation', objective: 'Mediate debt settlement', action: 'Visit located borrower addresses and present settlement options.', deliverable: 'Settlement commit log.' },
      { step: '04', title: 'Legal Notice Delivery', objective: 'Enforce legal actions', action: 'File Section 138 or SARFAESI notices via advocate panels.', deliverable: 'Court filing record.' }
    ],
    techEnablement: {
      title: 'NPA Tracking & Telemetry',
      desc: 'Real-time monitoring of legal Notice status and ground visit locations.',
      modules: [
        { title: 'Litigation Console', desc: 'Lenders track hearing dates, advocate briefs, and notice delivery status.' }
      ]
    },
    geoScope: {
      title: 'Enforcement Footprint',
      desc: 'Local authority and branch networks active across Southern India.',
      stats: [
        { label: 'Custody Yards', value: '25+ Audited Secure Yards' },
        { label: 'Field Capacity', value: '916+ Active professionals' }
      ]
    },
    complianceDetails: [
      'RBI Fair Practices Code Aligned Doorstep Visits',
      'All Field Actions Recorded on Geotagged Video Logs',
      'Court-admissible witness documentation protocols'
    ],
    industriesServed: [
      { name: 'Asset Reconstruction Companies', scenario: 'Resolving legacy retail NPA books.', framework: 'SARFAESI foreclosure notice campaigns' },
      { name: 'Nationalized Banks', scenario: 'Written-off commercial loan recovery.', framework: 'Asset tracing and legal action' }
    ],
    operationalMetrics: [
      { value: '₹8,000+ Cr', label: 'NPA Value Recovered' },
      { value: '80+', label: 'Active NPA Mandates' },
      { value: '74%', label: 'Skip Trace Success Rate' }
    ],
    businessOutcomes: [
      { title: 'Write-Off Capital Recovery', desc: 'Recovering outstanding balances directly improves the bank\'s bottom line.' },
      { title: 'Clear Collateral Title', desc: 'Compliant legal Notice coordination ensures smooth property auctions.' }
    ],
    caseStudy: {
      headingStatus: 'VERIFIED CASE STUDY',
      title: 'Resolving a 360 DPD Commercial Book',
      challenge: 'A private sector bank had a write-off book of corporate machinery loans, with borrowers unreachable and assets hidden.',
      approach: 'SM Associates deployed skip-tracing and asset tracking. We searched MCA records and located hidden alternative assets.',
      execution: 'Coordinated with legal counsels to file property attachment notices, leading to settlement talks.',
      outcome: 'Recovered ₹12.4 Crore from 18 default accounts within 120 days, resolving 72% of target cases.'
    },
    faqs: [
      { q: 'What legal actions do you coordinate when borrowers are unreachable?', a: 'We coordinate with advocate panels to file Section 138 check bounce cases and Section 13(2) notices under the SARFAESI Act.' }
    ],
    cta: {
      heading: 'Unlock Capital from Your NPA books today',
      subheading: 'Request a pilot program to recover outstanding balances from legacy write-off books.',
      buttonText: 'Empanel Our Experts',
      href: '/contact'
    }
  },

  'field-collections': {
    eyebrow: 'On-Ground Collections Operations',
    title: 'Field Collections',
    subtitle: 'Physical Outreach for Accounts That Calling Alone Can’t Resolve',
    description: 'Deploying trained field officers for physical outreach when calling alone isn’t enough.',
    primaryCtaText: 'Request a Field Collections Walkthrough',
    secondaryCtaText: 'Download Field Operations Standards',

    problemStatement: [
      { icon: 'mapPin', title: 'Unresponsive to Calling', desc: 'Borrowers who don’t answer calls or messages still need a structured recovery path.' },
      { icon: 'shieldAlert', title: 'Unverified Field Agents', desc: 'Informal field collection methods create compliance and reputational exposure.' },
      { icon: 'fileWarning', title: 'Payment Reconciliation Delays', desc: 'Cash or cheque collections without digital logging cause downstream reconciliation gaps.' },
      { icon: 'trendingDown', title: 'Logistical Inefficiency', desc: 'Uncoordinated field visits in scattered locations drive up cost without improving recovery.' }
    ],

    overview: {
      heading: 'Why Physical Outreach Matters Once Calling Has Been Exhausted',
      subheading: 'A Doorstep Visit Reaches Borrowers a Phone Call Cannot',
      summary: 'Calling-stage outreach resolves a meaningful share of delinquent accounts, but some borrowers simply won’t answer a phone. Field Collections picks up where calling leaves off — a trained field officer visits the borrower directly, discusses the outstanding balance, and secures payment or a documented commitment on the spot. SM Associates structures this around geofenced visit logging and digital payment capture, so every visit is verifiable and every payment is reconciled without delay.',
      outcomes: [
        { title: 'Direct Borrower Contact', desc: 'Reaches borrowers who are unresponsive to calling-stage outreach.' },
        { title: 'Verifiable Visits', desc: 'Geotagged check-ins confirm a visit actually happened at the right location.' },
        { title: 'Immediate Reconciliation', desc: 'Digital payment capture removes the lag of manual paper receipts.' }
      ],
      useCases: [
        { title: 'Vehicle Finance Collections', desc: 'Physical doorstep collection of EMI payments on auto and tractor loans.' },
        { title: 'Microfinance Group Collections', desc: 'Coordinating group repayment visits and cash settlements.' },
        { title: 'Escalated Personal Loan Accounts', desc: 'Field follow-up on accounts that didn’t respond to calling-stage outreach.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: '[DRAFT]' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: '[DRAFT]' },
      { icon: 'timer', title: 'Turnaround Discipline', value: '[DRAFT]' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Doorstep Borrower Visits', desc: 'Direct, in-person contact with borrowers unresponsive to calling.', bullets: ['Geotagged visit to the borrower’s address', 'Direct discussion of the outstanding balance', 'Documented outcome for every visit'], businessOutcome: 'Reaches borrowers a phone call alone cannot.' },
      { title: 'Digital Payment Capture', desc: 'Securing and recording payments without paper-based delay.', bullets: ['On-the-spot digital payment or cheque capture', 'Immediate sync with the client’s collections dashboard', 'Elimination of manual reconciliation lag'], businessOutcome: 'Removes the reconciliation gap that paper receipts create.' },
      { title: 'Geofenced Visit Verification', desc: 'Confirming field visits actually happened at the right place.', bullets: ['GPS-logged check-in at the borrower’s address', 'Timestamped visit records', 'Verifiable audit trail for every field attempt'], businessOutcome: 'Gives lenders confidence that reported visits genuinely occurred.' },
      { title: 'Certified Field Officer Deployment', desc: 'Trained, background-screened officers conducting every visit.', bullets: ['DRA-certified field officers only', 'Background screening before deployment', 'Adherence to RBI fair-conduct guidelines'], businessOutcome: 'Protects the lender’s reputation in every borrower interaction.' },
      { title: 'Route-Optimized Dispatch', desc: 'Coordinating field visits efficiently across a region.', bullets: ['Route planning based on case location density', 'Branch-level dispatch coordination', 'Reduced travel cost per completed visit'], businessOutcome: 'Improves recovery economics without sacrificing coverage.' },
      { title: 'Field Risk Flagging', desc: 'Translating visit outcomes into a structured risk read.', bullets: ['Consolidation of visit outcomes and borrower responses', 'Flagging of accounts needing further escalation', 'Structured reporting for the lender’s collections desk'], businessOutcome: 'Gives lenders a clear view of which accounts need next steps.' }
    ],

    tabs: [
      { id: 'case-receipt', label: 'Case Receipt', heading: 'Receiving Escalated Accounts for Field Action', overview: 'Accounts unresponsive to calling-stage outreach enter the field pipeline.', activities: ['Case file receipt and review', 'Address geocoding'], documents: [], risks: ['Stale or incorrect address data'], deliverable: 'Field case assignment log.', benefit: 'Ensures field officers start with the most current case information.' },
      { id: 'dispatch', label: 'Field Dispatch', heading: 'Routing the Case to the Right Officer', overview: 'Route-optimized assignment to the nearest available field officer.', activities: ['Route planning', 'Officer assignment'], documents: [], risks: ['Inefficient routing increasing cost per visit'], deliverable: 'Dispatch route mapping.', benefit: 'Keeps field operations cost-efficient without sacrificing coverage.' },
      { id: 'visit', label: 'Borrower Visit', heading: 'Making Direct Contact at the Borrower’s Address', overview: 'A geotagged, in-person visit to discuss the outstanding balance.', activities: ['Geotagged check-in', 'Direct borrower discussion'], documents: [], risks: ['Visits that cannot be independently verified'], deliverable: 'Visit confirmation log.', benefit: 'Reaches borrowers calling-stage outreach could not.' },
      { id: 'payment', label: 'Payment Capture', heading: 'Securing and Recording Payment on the Spot', overview: 'Digital capture of payment or a documented settlement commitment.', activities: ['Digital payment or cheque capture', 'Settlement commitment logging'], documents: [], risks: ['Manual reconciliation delays without digital capture'], deliverable: 'Payment capture receipt.', benefit: 'Removes the lag between collection and reconciliation.' },
      { id: 'sync', label: 'Account Sync', heading: 'Updating the Lender’s System in Real Time', overview: 'Visit and payment outcomes are synced to the client dashboard.', activities: ['Dashboard status sync', 'Reconciliation ledger update'], documents: [], risks: ['Delayed visibility into field outcomes'], deliverable: 'Reconciliation log entry.', benefit: 'Gives the lender real-time visibility into field collection results.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Lender a Clear View of Field Outcomes', overview: 'Consolidated reporting on visit and payment outcomes.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across field officers'], deliverable: 'Field collections status report.', benefit: 'Removes the need for the lender to chase field updates manually.' }
    ],

    challengesHeading: 'Enterprise Field Collections Risks',
    challenges: [
      { title: 'Unresponsive Borrowers', desc: 'Borrowers who don’t answer calls or messages still need a structured recovery path.', warningBadge: 'Contact Risk', impact: 'Accounts stay unresolved without a physical-outreach option.' },
      { title: 'Unverified Field Conduct', desc: 'Informal or unmonitored field agents create compliance exposure.', warningBadge: 'Compliance Risk', impact: 'Institutions inherit reputational risk from how field visits are conducted.' },
      { title: 'Payment Reconciliation Delays', desc: 'Cash or cheque collections without digital logging cause downstream gaps.', warningBadge: 'Process Risk', impact: 'Collected payments don’t reflect in the lender’s system promptly.' },
      { title: 'Logistical Inefficiency', desc: 'Uncoordinated field visits in scattered locations drive up cost without improving recovery.', warningBadge: 'Operational Risk', impact: 'Field operations become expensive relative to amounts recovered.' },
      { title: 'Unverifiable Visit Claims', desc: 'Without geotagging, there’s no independent confirmation a visit occurred.', warningBadge: 'Audit Risk', impact: 'Lenders can’t independently confirm reported field activity.' },
      { title: 'Borrower Friction', desc: 'Poorly conducted field visits can damage the lender’s relationship with a recoverable customer.', warningBadge: 'Reputational Risk', impact: 'Aggressive or inconsistent field conduct can reduce future cooperation.' }
    ],

    processFlow: {
      title: 'Enterprise Field Collections Lifecycle',
      desc: 'A structured operating model that moves an escalated account from dispatch to a documented outcome.',
      steps: [
        { step: '01', title: 'Case Receipt', desc: 'Escalated accounts are received and reviewed for field assignment.', outcome: 'A case ready for route-optimized dispatch.' },
        { step: '02', title: 'Field Dispatch', desc: 'The case is routed to the nearest available field officer.', outcome: 'Confirmed dispatch ready for an on-site visit.' },
        { step: '03', title: 'Borrower Visit', desc: 'A geotagged, in-person visit is conducted at the borrower’s address.', outcome: 'Direct contact established and outcome recorded.' },
        { step: '04', title: 'Payment or Commitment Capture', desc: 'Payment is digitally captured, or a settlement commitment is logged.', outcome: 'A trackable outcome, not a verbal-only result.' },
        { step: '05', title: 'Account Sync & Reporting', desc: 'Outcomes are synced to the client dashboard and reported.', outcome: 'Real-time visibility into the account’s updated status.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Higher Resolution on Escalated Accounts', desc: 'Physical outreach resolves accounts that calling-stage contact could not.', value: 'Fewer accounts left unresolved after calling-stage outreach.' },
      { title: 'Faster Payment Reconciliation', desc: 'Digital capture removes the lag of manual paper-based collection.', value: 'Collected payments reflect in the lender’s system without delay.' },
      { title: 'Verifiable Field Activity', desc: 'Geotagged visits give lenders independent confirmation of field outcomes.', value: 'Confidence that reported field activity genuinely occurred.' },
      { title: 'Regulatory Compliance', desc: 'Certified field officers and structured conduct align with RBI fair-practice expectations.', value: 'Reduced institutional exposure tied to field-collection conduct.' },
      { title: 'Efficient Field Economics', desc: 'Route-optimized dispatch keeps cost per visit proportionate to recovery value.', value: 'Field operations remain cost-efficient at scale.' },
      { title: 'Protected Borrower Relationship', desc: 'Professional, compliant field conduct preserves the lender’s relationship with the customer.', value: 'Better long-term recovery cooperation from resolved accounts.' }
    ],

    faqs: [
      { q: 'How do you verify a field visit actually happened?', a: 'Every field visit is geotagged and timestamped at the point of check-in, giving an independently verifiable record.' },
      { q: 'What happens if a borrower refuses to engage during a field visit?', a: 'The outcome is logged and the case is reviewed for further escalation, including potential legal action where applicable.' }
    ],

    cta: {
      heading: 'Deploy a Compliant, Professional Field Team',
      subheading: 'Request a field collections walkthrough for your delinquent portfolio.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  },

  'debt-recovery': {
    eyebrow: 'Unified Recovery Operations',
    title: 'Debt Recovery',
    subtitle: 'Coordinating Calling, Field, and Legal Action Under One Operational SLA',
    description: 'Coordinating calling, field, and legal action under one operational recovery SLA.',
    primaryCtaText: 'Request a Debt Recovery Walkthrough',
    secondaryCtaText: 'Download Recovery Operations Standards',

    problemStatement: [
      { icon: 'briefcase', title: 'Vendor Fragmentation', desc: 'Separate vendors handling calling, field visits, and legal notices create data gaps and delays.' },
      { icon: 'trendingDown', title: 'Lost Context Between Stages', desc: 'An account escalating from calling to field to legal action can lose its history at each handoff.' },
      { icon: 'shieldAlert', title: 'Inconsistent Compliance', desc: 'Different vendors at each stage make consistent compliance harder to enforce.' },
      { icon: 'fileWarning', title: 'Delayed Provisioning Release', desc: 'Slow, uncoordinated resolution keeps capital locked in provisioning longer than necessary.' }
    ],

    overview: {
      heading: 'Why a Coordinated Recovery Model Outperforms a Fragmented One',
      subheading: 'One Operational SLA Across Calling, Field, and Legal Action',
      summary: 'Recovery typically involves multiple distinct activities — calling outreach, field visits, and legal escalation — and lenders often manage each through a different vendor. Debt Recovery coordinates all three under one operational SLA, so an account’s history travels with it from calling to field to legal action instead of resetting at every handoff. SM Associates structures this as a single accountable pipeline, giving lenders one point of contact across the full recovery lifecycle rather than three.',
      outcomes: [
        { title: 'Continuous Case History', desc: 'An account’s outreach history travels with it through every recovery stage.' },
        { title: 'Single Point of Accountability', desc: 'One operational SLA instead of coordinating three separate vendors.' },
        { title: 'Consistent Compliance', desc: 'The same compliance standard applies across calling, field, and legal stages.' }
      ],
      useCases: [
        { title: 'Nationalized Banking Portfolios', desc: 'Coordinated recovery across retail default portfolios.' },
        { title: 'NBFC Default Books', desc: 'Unified calling, field, and legal escalation for consumer lending defaults.' },
        { title: 'ARC-Acquired Portfolios', desc: 'End-to-end recovery operations on acquired stressed accounts.' }
      ]
    },

    kpiCards: [
      { icon: 'mapPinned', title: 'Field Coverage', value: '[DRAFT]' },
      { icon: 'clipboardCheck', title: 'Documentation Accuracy', value: '[DRAFT]' },
      { icon: 'timer', title: 'Turnaround Discipline', value: '[DRAFT]' },
      { icon: 'shieldCheck', title: 'Compliance Alignment', value: '[DRAFT]' }
    ],

    capabilities: [
      { title: 'Coordinated Calling Campaigns', desc: 'Structured tele-calling as the first stage of the recovery pipeline.', bullets: ['Compliant outbound calling within permitted hours', 'Promise-to-pay tracking and follow-up', 'Defined escalation triggers to field stage'], businessOutcome: 'Resolves accounts early without losing context if escalation is needed.' },
      { title: 'Integrated Field Deployment', desc: 'Field visits that pick up exactly where calling left off.', bullets: ['Full case history available to field officers', 'Geotagged visit verification', 'Digital payment capture and reconciliation'], businessOutcome: 'Field officers act on complete account history, not a blank slate.' },
      { title: 'Legal Escalation Coordination', desc: 'Structured handoff to legal notice action when warranted.', bullets: ['Coordination with advocate panels for notice drafting', 'Section 138 and SARFAESI process initiation where applicable', 'Legal status visibility alongside calling and field history'], businessOutcome: 'Keeps legal escalation informed by the account’s full recovery history.' },
      { title: 'Unified Account Telemetry', desc: 'One operational view across every recovery stage.', bullets: ['Consolidated dashboard across calling, field, and legal status', 'Single source of truth for account history', 'Real-time status visibility for the lender'], businessOutcome: 'Removes the need for the lender to reconcile updates from multiple vendors.' },
      { title: 'Cross-Stage Compliance Enforcement', desc: 'The same compliance standard applied at every stage.', bullets: ['Consistent calling-hour and conduct rules across stages', 'DRA-certified personnel at calling and field stages', 'Documented compliance trail across the full lifecycle'], businessOutcome: 'Reduces regulatory exposure that fragmented vendors can introduce.' },
      { title: 'Recovery Risk Flagging', desc: 'Translating cross-stage outcomes into a structured risk read.', bullets: ['Consolidation of calling, field, and legal outcomes', 'Flagging of accounts requiring further escalation', 'Structured reporting for the lender’s recovery desk'], businessOutcome: 'Gives lenders one clear view of recovery progress across the portfolio.' }
    ],

    tabs: [
      { id: 'portfolio-analysis', label: 'Portfolio Analysis', heading: 'Segmenting Accounts by Risk and Recovery Path', overview: 'Portfolio data is ingested and segmented to determine the right starting stage.', activities: ['Portfolio data ingestion', 'Risk-based segmentation'], documents: [], risks: ['Misclassified accounts starting at the wrong stage'], deliverable: 'Risk-prioritized account list.', benefit: 'Ensures each account starts its recovery path at the right stage.' },
      { id: 'calling-stage', label: 'Calling Stage', heading: 'Structured Outreach as the First Recovery Stage', overview: 'Compliant calling campaigns begin outreach on segmented accounts.', activities: ['Outbound calling within permitted hours', 'Promise-to-pay tracking'], documents: [], risks: ['Non-compliant calling conduct'], deliverable: 'Calling stage outcome log.', benefit: 'Resolves a share of accounts early, before further escalation is needed.' },
      { id: 'field-stage', label: 'Field Stage', heading: 'Field Visits With Full Case Context', overview: 'Unresolved accounts move to field officers who have the complete calling history.', activities: ['Geotagged borrower visit', 'Digital payment capture'], documents: [], risks: ['Lost context if field stage starts without calling history'], deliverable: 'Field stage outcome log.', benefit: 'Field officers act on complete history rather than starting blind.' },
      { id: 'legal-stage', label: 'Legal Escalation', heading: 'Coordinated Legal Notice Action', overview: 'Accounts warranting legal escalation are handed to advocate panels with full history.', activities: ['Legal notice drafting coordination', 'Advocate panel liaison'], documents: [], risks: ['Legal action initiated without full account context'], deliverable: 'Legal escalation case file.', benefit: 'Keeps legal action informed by the account’s complete recovery history.' },
      { id: 'telemetry', label: 'Unified Telemetry', heading: 'One View Across Every Stage', overview: 'A consolidated dashboard tracks the account across calling, field, and legal status.', activities: ['Cross-stage status consolidation', 'Dashboard sync'], documents: [], risks: ['Fragmented visibility across separate vendor systems'], deliverable: 'Unified account status record.', benefit: 'Gives the lender one place to see the full recovery picture.' },
      { id: 'report', label: 'Status Reporting', heading: 'Giving the Lender a Clear View of Recovery Progress', overview: 'Consolidated reporting on outcomes across all three recovery stages.', activities: ['Report compilation', 'Internal quality check'], documents: [], risks: ['Inconsistent reporting across recovery stages'], deliverable: 'Debt recovery status report.', benefit: 'Removes the need for the lender to chase updates from multiple vendors.' }
    ],

    challengesHeading: 'Enterprise Debt Recovery Risks',
    challenges: [
      { title: 'Vendor Fragmentation', desc: 'Separate vendors managing calling, field, and legal notices, causing delays and compliance slips.', warningBadge: 'Operations Risk', impact: 'Resolution timelines extend due to coordination gaps between vendors.' },
      { title: 'Lost Context Between Stages', desc: 'An account’s history can reset at each handoff between calling, field, and legal action.', warningBadge: 'Process Risk', impact: 'Later-stage teams act without the benefit of earlier outreach history.' },
      { title: 'Inconsistent Compliance', desc: 'Different vendors at each stage make a uniform compliance standard harder to enforce.', warningBadge: 'Regulatory Risk', impact: 'Institutions inherit reputational risk from inconsistent vendor conduct.' },
      { title: 'Delayed Provisioning Release', desc: 'Slow, uncoordinated resolution keeps capital locked in provisioning longer than necessary.', warningBadge: 'Capital Risk', impact: 'Provisioning capital remains tied up longer than a coordinated process would require.' },
      { title: 'Escalating Coordination Cost', desc: 'Managing multiple vendors directly increases the lender’s own operational overhead.', warningBadge: 'Operational Risk', impact: 'Internal teams spend time reconciling updates instead of managing strategy.' },
      { title: 'Fragmented Reporting', desc: 'Each vendor reporting separately makes portfolio-level visibility harder to assemble.', warningBadge: 'Visibility Risk', impact: 'Lenders lack a single, reliable view of recovery progress.' }
    ],

    processFlow: {
      title: 'Enterprise Debt Recovery Lifecycle',
      desc: 'A structured operating model that moves an account through calling, field, and legal stages without losing context.',
      steps: [
        { step: '01', title: 'Portfolio Analysis', desc: 'Accounts are ingested and segmented by default risk to determine the right starting stage.', outcome: 'A risk-prioritized account list ready for outreach.' },
        { step: '02', title: 'Calling Stage Outreach', desc: 'Compliant calling campaigns begin structured contact.', outcome: 'A share of accounts resolved before further escalation.' },
        { step: '03', title: 'Field Stage Escalation', desc: 'Unresolved accounts move to field officers carrying full calling history.', outcome: 'Direct contact established with continuity from the calling stage.' },
        { step: '04', title: 'Legal Escalation', desc: 'Accounts warranting legal action are handed to advocate panels with complete history.', outcome: 'Legal action initiated on a fully-informed case file.' },
        { step: '05', title: 'Unified Reporting', desc: 'Outcomes across all stages are consolidated and reported to the client.', outcome: 'A single, reliable view of recovery progress.' }
      ]
    },

    outcomesHeading: 'Enterprise Business Outcomes',
    outcomes: [
      { title: 'Faster Coordinated Resolution', desc: 'One operational pipeline removes the delays fragmented vendors introduce.', value: 'Reduced resolution timelines across the recovery lifecycle.' },
      { title: 'Preserved Account Context', desc: 'Case history travels with the account through every stage.', value: 'Later-stage teams act on complete history, not a fresh start.' },
      { title: 'Consistent Compliance', desc: 'The same compliance standard applies across calling, field, and legal stages.', value: 'Reduced regulatory exposure tied to inconsistent vendor conduct.' },
      { title: 'Faster Provisioning Release', desc: 'Coordinated resolution frees capital from provisioning sooner.', value: 'Improved capital efficiency on managed portfolios.' },
      { title: 'Lower Coordination Overhead', desc: 'A single point of accountability reduces the lender’s internal vendor-management burden.', value: 'Internal teams spend less time reconciling updates from multiple vendors.' },
      { title: 'Unified Portfolio Visibility', desc: 'One consolidated reporting view replaces fragmented vendor reports.', value: 'A single, reliable picture of recovery progress for the lender.' }
    ],

    faqs: [
      { q: 'Do you handle the entire recovery lifecycle, or just one stage?', a: 'Debt Recovery coordinates calling, field, and legal escalation under one operational SLA, with case history carried across every stage.' },
      { q: 'How are commission structures determined for debt recovery mandates?', a: 'Commission structures are agreed during empanelment and vary by portfolio type and delinquency profile — contact our empanelment desk for specifics.' }
    ],

    cta: {
      heading: 'Recover Capital With a Coordinated Recovery Model',
      subheading: 'Request a debt recovery walkthrough to see how calling, field, and legal stages connect under one SLA.',
      buttonText: 'Request Empanelment Proposal',
      href: '/contact'
    }
  }
};
