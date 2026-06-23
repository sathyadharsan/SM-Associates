import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Shield, 
  Activity, 
  AlertTriangle, 
  PhoneCall, 
  MapPin, 
  Layers, 
  FileText,
  Gavel,
  DollarSign,
  Search,
  CheckSquare,
  Users,
  Database,
  Building2,
  ChevronDown
} from 'lucide-react';

const fUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

// ----------------------------------------------------
// BASE SERVICE LAYOUT (21 Content Sections Engine)
// ----------------------------------------------------
function BaseServiceLayout({ content, category, interactiveWidget }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    institutionName: '',
    segment: 'Commercial Bank',
    hqLocation: '',
    delinquentVolume: '₹10Cr - ₹50Cr',
    assetClass: 'Retail Mortgage',
    targetStates: 'Tamil Nadu',
    managerName: '',
    corporateEmail: '',
    phoneNumber: '',
    empanelling: 'Yes',
    estimatedVolume: '10-50 cases/month'
  });
  const [activeGeoState, setActiveGeoState] = useState('TN');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      setInquirySubmitted(true);
      setTimeout(() => {
        setInquirySubmitted(false);
        setFormStep(1);
        setFormData({
          institutionName: '',
          segment: 'Commercial Bank',
          hqLocation: '',
          delinquentVolume: '₹10Cr - ₹50Cr',
          assetClass: 'Retail Mortgage',
          targetStates: 'Tamil Nadu',
          managerName: '',
          corporateEmail: '',
          phoneNumber: '',
          empanelling: 'Yes',
          estimatedVolume: '10-50 cases/month'
        });
      }, 3500);
    }
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Safe Fallback Data Initializations
  const primaryCta = content.primaryCtaText || 'Request Empanelment Proposal';
  const secondaryCta = content.secondaryCtaText || 'Launch Interactive Simulator';
  const trustStatementText = content.trustStatement || 'Serving empanelled public and private sector banks with a compliance rate of 100%.';
  const trustBarData = content.trustBar || {
    statement: 'Empanelled and trusted by India\'s leading nationalized banks, housing finance panels, and ARCs.',
    logos: ['STATE BANK OF INDIA', 'HDFC BANK', 'AXIS BANK', 'CANARA BANK', 'HDB FINANCIAL', 'ASSET RECONSTRUCTION CORP']
  };
  const snapshotData = content.snapshot || {
    summary: 'SM Associates coordinates legal notices drafting, advocate panel liaising, DM court filing, physical possession execution, secure custody yard storage, and e-auction preparation under a unified operational SLA.',
    outcomes: [
      { title: 'SLA Adherence', desc: '100% statutory timeline compliance on Section 13(2) and 13(4) serving.' },
      { title: 'Security Integrity', desc: 'Zero audit objections across secure asset yards.' },
      { title: 'Capital Efficiency', desc: 'Average NPA provisioning release loop of [DRAFT] days.' }
    ],
    useCases: [
      { title: 'Housing Finance Delinquencies', desc: 'Resolving retail residential mortgage defaults.' },
      { title: 'Commercial Asset Possession', desc: 'Executing DM orders for secured commercial premises.' },
      { title: 'ARC Stressed Portfolios', desc: 'Accelerating resolution parameters for acquired portfolios.' }
    ]
  };
  const portfolioChallenges = content.challenges || [
    { title: 'Operational Risks', desc: 'Inefficient notices routing, delay in local authority coordination, and tracking errors resulting in prolonged legal battles.', warningBadge: 'Logistical Gap', impactFormula: 'Resolution TAT + 25%' },
    { title: 'Regulatory Risks', desc: 'Violation of RBI guidelines, borrower harassment, and lack of voice/activity logs, resulting in bank licensing audits defaults.', warningBadge: 'Audit Danger', impactFormula: 'Provisioning Lock + 10%' }
  ];
  const failTable = content.failCompare || [
    { dimension: 'Compliance & Auditing', traditional: 'Manual logs, no recorded voice paths, high risk of regulatory violation.', sm: '100% voice recorded caller paths, geotagged site visits with GPS coordinates, and zero audit exceptions.' },
    { dimension: 'Legal Timeline SLA', traditional: 'Notice servers operate on flexible timelines, delaying District Magistrate filings by months.', sm: 'Milestone-driven legal desk tracking notices daily with guaranteed TAT benchmarks.' },
    { dimension: 'Asset Security', traditional: 'Unfenced yards, manual gate logs, no CCTV monitoring, high risk of asset damage.', sm: 'Fenced secure yards with 24/7 CCTV logs, digital yard coordinate tracking, and check-in inventory audits.' }
  ];
  const frameworkData = content.framework || {
    title: 'Structured Foreclosure & Possession Framework',
    desc: 'Our compliance-first, document-backed statutory processing ensures resolution velocity and complete regulatory isolation.',
    solutions: [
      { title: 'Methodology', desc: 'Compliance-first, document-backed statutory processing.' },
      { title: 'Governance Model', desc: 'Dual audit checks on notice routing, ensuring all Section 13 drafts conform to RBI DRA codes of conduct.' }
    ]
  };
  const capabilitiesGrid = content.capabilities || [];
  const stepperTimeline = content.workflow || [];
  const techEnablement = content.techEnablement || {
    title: 'Institutional Foreclosure Tech & Tracking',
    desc: 'Real-time transparency through advanced geolocations, daily CSV updates, and recorded communication channels.',
    modules: [
      { title: 'Tracking', desc: 'Geolocated site coordinate logs, photo coordinates timestamp checks, and route history logs.' },
      { title: 'Reporting', desc: 'Automated email delivery schedules and daily SFTP CSV uploads.' }
    ]
  };
  const geoScopeData = content.geoScope || {
    title: 'Geographic Reach & Hub Network',
    desc: 'Pan-regional presence across Southern India with hub-and-spoke branch operations.',
    stats: [
      { label: 'Operational Coverage', value: 'TN, KA, KL, TS, AP, PY' },
      { label: 'Field Capacity', value: '[DRAFT] Certified Field Coordinators' }
    ]
  };
  const complianceRules = content.complianceDetails || [
    'RBI Fair Practices Code Aligned',
    '100% DRA-Certified Field Officers',
    'ISO 27001 Data Custody Protocols'
  ];
  const industriesGrid = content.industriesServed || [
    { name: 'Public Sector Banks', scenario: 'High-volume retail NPA mortgage default resolution.', framework: 'Milestone notices campaign' },
    { name: 'Private Commercial Banks', scenario: 'High-value commercial and industrial property possessions.', framework: 'DM Liaison coordination' }
  ];
  const statsMetrics = content.operationalMetrics || [
    { value: '100%', label: 'Statutory SLA Adherence' },
    { value: '[DRAFT - RECOVERY VALUE]+', label: 'Asset Valuations Managed' }
  ];
  const businessOutcomes = content.businessOutcomes || [
    { title: 'Reduced Risk', desc: 'Geotagged site logs and audio call backups prevent regulatory and ground compliance risks.' },
    { title: 'Faster Resolution', desc: 'Milestone tracking reduces default cycles.' }
  ];
  const caseStudyData = content.caseStudy || {
    headingStatus: '[DRAFT – CLIENT APPROVAL REQUIRED]',
    title: 'Mortgage NPA Resolution Case Study',
    challenge: 'Empanelled private lender faced a high default volume across a retail mortgage book, with outstanding Stage-3 assets exceeding ₹[DRAFT] and a resolution delay of [DRAFT] months.',
    approach: 'Deployed SM Associates\' unified recovery framework, automating notices serving and coordinating District Magistrate filings directly.',
    execution: 'Filed Section 14 petitions across regional branches, executing symbolic and physical possessions under strict local authority coordination.',
    outcome: 'Resolved [DRAFT - RESOLUTION RATE]% of delinquent accounts within [DRAFT] days, releasing ₹[DRAFT - RECOVERY VALUE]+ in provisioning capital.'
  };
  const trustCredibility = content.credibility || [
    { title: 'Philosophy', desc: 'Compliance-first recovery approach built around bank reputation protection.' },
    { title: 'Maturity', desc: 'Over two decades of standing coordinating legal foreclosure and on-ground resolutions.' },
    { title: 'Governance', desc: 'Strict DRA caller audits, voice recorded archives, and GPS field verification logs.' },
    { title: 'Experience', desc: 'Empanelled with India\'s flagship public banks, NBFC boards, and specialized ARCs.' }
  ];

  const stateHubs = {
    TN: { name: 'Tamil Nadu', hubs: 'Chennai (HQ), Coimbatore, Madurai, Trichy, Salem', yards: '[DRAFT] Secure Yards', agents: '[DRAFT] active DRA officers' },
    KA: { name: 'Karnataka', hubs: 'Bengaluru, Mysore, Mangalore, Hubli', yards: '[DRAFT] Secure Yards', agents: '[DRAFT] active DRA officers' },
    KL: { name: 'Kerala', hubs: 'Cochin, Trivandrum, Kozhikode', yards: '[DRAFT] Secure Yards', agents: '[DRAFT] active DRA officers' },
    TS: { name: 'Telangana', hubs: 'Hyderabad, Warangal', yards: '[DRAFT] Secure Yards', agents: '[DRAFT] active DRA officers' },
    AP: { name: 'Andhra Pradesh', hubs: 'Vijayawada, Visakhapatnam, Tirupati', yards: '[DRAFT] Secure Yards', agents: '[DRAFT] active DRA officers' }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-inter">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-36 pb-24 text-left overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[100px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                {content.eyebrow}
              </div>
              <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#0F172A] sm:text-5xl lg:text-6xl font-sora leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-655 leading-relaxed max-w-2xl font-inter">
                {content.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all hover:scale-[1.02] duration-200">
                  {primaryCta} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#simulator" className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all duration-200">
                  {secondaryCta} <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="pt-4 text-xs text-slate-500 font-mono">
                {trustStatementText}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-5 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">Operations Console Telemetry</span>
                </div>
                <div className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
                  SLA Active
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {(content.stats || [{value: '100%', label: 'Timeline Adherence'}]).map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-200/80 p-4 rounded-2xl text-left shadow-sm">
                    <div className="text-2xl font-black text-slate-900 font-sora tracking-tight">{stat.value}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase mt-1 leading-tight tracking-wider font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 font-mono text-[10px] text-left text-slate-600 max-h-[145px] overflow-hidden">
                <div className="flex gap-2">
                  <span className="text-blue-600">[00:34:15]</span>
                  <span className="text-slate-600">Case Ingestion: SFTP transfer complete.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600">[00:34:20]</span>
                  <span className="text-slate-600">Notice Despatched: Sec 13(2) statutory notice.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-emerald-600">[SYSTEM]</span>
                  <span className="text-slate-600">DRA compliant boundaries confirmed.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TRANSITION CUE: Hero -> Trust */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-blue-600 transition-colors z-10">
          <span className="text-[9px] font-mono uppercase tracking-widest font-bold">Trusted Operations</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-4 w-4">
            <ArrowRight className="rotate-90 h-3.5 w-3.5 text-blue-600" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-12 border-b border-slate-100 bg-slate-50 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 font-mono">
            {trustBarData.statement}
          </p>
          <div className="relative w-full flex overflow-x-hidden">
            <div className="animate-marquee flex gap-12 whitespace-nowrap py-2 text-xs font-mono font-bold tracking-widest text-slate-500">
              {trustBarData.logos.map((logo, idx) => (
                <span key={idx} className="border border-slate-200 bg-white px-6 py-3.5 rounded-2xl text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-default shadow-sm">
                  {logo}
                </span>
              ))}
              {/* Duplicate for infinite effect */}
              {trustBarData.logos.map((logo, idx) => (
                <span key={`dup-${idx}`} className="border border-slate-200 bg-white px-6 py-3.5 rounded-2xl text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-default shadow-sm">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TRANSITION CUE: Trust -> Snapshot */}
        <div className="w-full h-[1px] mt-6 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </section>

      {/* SECTION 3: SERVICE SNAPSHOT */}
      <section className="py-24 bg-white text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Division Summary
              </span>
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">
                Service Snapshot
              </h2>
              <p className="text-slate-655 text-sm leading-relaxed">
                {snapshotData.summary}
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold font-mono uppercase text-slate-400 tracking-wider">Operational Yield Targets</h3>
                {snapshotData.outcomes.map((out, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-bold text-sm text-slate-900 font-sora flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {out.title}
                    </h4>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{out.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold font-mono uppercase text-slate-400 tracking-wider">Immediate Use Cases</h3>
                {snapshotData.useCases.map((uc, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-bold text-sm text-slate-900 font-sora flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      {uc.title}
                    </h4>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* TRANSITION CUE: Snapshot -> Challenges */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
          <svg viewBox="0 0 1440 40" fill="none" className="relative block w-full h-[40px]">
            <path d="M0,0 C480,30 960,-10 1440,20 L1440,40 L0,40 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* SECTION 4: PORTFOLIO CHALLENGES */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-mono">Risk Landscape</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Severe Portfolio Delinquency Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioChallenges.map((c, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-red-400 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-9 w-9 bg-red-50 text-red-500 rounded-xl flex items-center justify-center border border-red-100">
                      <AlertTriangle className="h-4.5 w-4.5" />
                    </div>
                    {c.warningBadge && (
                      <span className="text-[9px] font-mono font-bold bg-red-50 text-red-650 border border-red-200 px-2.5 py-0.5 rounded-md">
                        {c.warningBadge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm font-sora text-slate-900">{c.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
                {c.impactFormula && (
                  <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-red-600 font-bold">
                    Impact Metric: {c.impactFormula}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRANSITION CUE: Challenges -> Framework */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex justify-center z-15">
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="overflow-visible">
            <path d="M20 0 V80" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            <motion.circle 
              cx="20" 
              cy="0" 
              r="4" 
              fill="#2563EB"
              animate={{ cy: [0, 80] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />
          </svg>
        </div>
      </section>

      {/* SECTION 5: WHY TRADITIONAL METHODS FAIL */}
      <section className="py-28 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fUp}
          className="mx-auto max-w-5xl px-4 mt-8"
        >
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">System Flaws</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Why Average Agency Setups Fail</h2>
          </div>
          <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-mono text-slate-550">
                  <th className="p-5 font-bold uppercase tracking-wider">CRITICAL PILLAR</th>
                  <th className="p-5 font-bold uppercase tracking-wider">TRADITIONAL VENDOR</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-blue-600">SM ASSOCIATES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {failTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-bold text-slate-900">{item.dimension}</td>
                    <td className="p-5 text-slate-550 leading-relaxed">{item.traditional}</td>
                    <td className="p-5 font-bold text-blue-600 leading-relaxed bg-blue-50/10">{item.sm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: SM ASSOCIATES FRAMEWORK */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Our Operational Loop</span>
              <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">{frameworkData.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {frameworkData.desc}
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {frameworkData.solutions.map((sol, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 items-start hover:border-blue-400 hover:shadow-sm transition-all duration-200">
                  <div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 font-sora">{sol.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TRANSITION CUE: Framework -> Capabilities */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-15">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="overflow-visible">
            <path d="M50 0 V30 M50 30 L20 50 M50 30 L80 50" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="50" cy="5" r="4" fill="#2563EB" />
            <circle cx="50" cy="30" r="4" fill="#4F46E5" />
            <circle cx="20" cy="50" r="4" fill="#3B82F6" />
            <circle cx="80" cy="50" r="4" fill="#3B82F6" />
          </svg>
        </div>
      </section>

      {/* SECTION 7: CORE CAPABILITIES GRID */}
      <section className="py-28 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4"
        >
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Operational Core</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Full-Spectrum Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilitiesGrid.map((cap, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-blue-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  <h4 className="font-bold text-base font-sora text-slate-900">{cap.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{cap.desc}</p>
                </div>
                {cap.businessOutcome && (
                  <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-emerald-600 font-bold">
                    SLA Outcome: {cap.businessOutcome}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRANSITION CUE: Capabilities -> Timeline */}
        <div className="flex justify-center pt-16">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="overflow-visible">
            <path d="M20 0 V60" stroke="#2563EB" strokeWidth="2" />
            <motion.circle 
              cx="20" 
              cy="0" 
              r="5" 
              fill="#FFFFFF"
              stroke="#2563EB"
              strokeWidth="3"
              animate={{ cy: [0, 60] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </section>

      {/* SECTION 8: SLA TIMELINE STEPPER */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fUp}
          className="mx-auto max-w-5xl px-4"
        >
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Execution Stepper</span>
            <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Operational SLA Milestones</h3>
          </div>
          <div className="space-y-6">
            {stepperTimeline.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-sm transition-all duration-200 flex flex-col md:flex-row gap-6 relative">
                <span className="text-2xl font-black font-mono text-blue-500/20 shrink-0 md:w-16">
                  {item.step}
                </span>
                <div className="space-y-1 grow">
                  <h4 className="font-bold text-base font-sora text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.action}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100 font-mono text-[9px] text-slate-500">
                    <div>OBJECTIVE: <span className="text-slate-700 font-medium">{item.objective}</span></div>
                    <div>DELIVERABLE: <span className="text-emerald-600 font-bold">{item.deliverable}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRANSITION CUE: Timeline -> Technology */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-15">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="overflow-visible">
            <path d="M10 30 H110" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
            <motion.circle 
              cx="10" 
              cy="30" 
              r="5" 
              fill="#2563EB"
              animate={{ cx: [10, 110] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />
            <circle cx="10" cy="30" r="3" fill="#64748B" />
            <circle cx="110" cy="30" r="3" fill="#64748B" />
          </svg>
        </div>
      </section>

      {/* SECTION 9: TECHNOLOGY ENABLEMENT */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Digital Telemetry</span>
              <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">{techEnablement.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{techEnablement.desc}</p>
              
              <div className="space-y-4 pt-2">
                {techEnablement.modules.map((mod, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-55 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs font-sora text-slate-900">{mod.title}</h5>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm font-mono text-xs text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4 text-slate-500">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-emerald-600 text-[10px] font-bold">● Active sync</span>
              </div>
              <div className="space-y-2.5 text-slate-600 pr-2 font-mono text-[11px]">
                <p className="text-slate-400">&gt; sftp -i keys/id_rsa bank_node@sm-associates.in</p>
                <p>&gt; Initializing SFTP secure channel... OK</p>
                <p className="text-emerald-600">&gt; Ingestion receiver listener active</p>
                <p>&gt; Syncing delinquency indices (SMA-2, NPA)</p>
                <p className="text-blue-600">&gt; Geolocated Field Visit Dispatch: Route coordinates verified</p>
                <p className="text-slate-400">&gt; Voice path compliance recording: Checked</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TRANSITION CUE: Technology -> Compliance */}
        <div className="flex justify-center pt-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-10 w-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm"
          >
            <Shield className="h-5 w-5" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: GEOGRAPHIC SCOPE */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Coverage Network</span>
              <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">{geoScopeData.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{geoScopeData.desc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {geoScopeData.stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                    <div className="text-xs font-bold text-slate-500 font-mono uppercase tracking-wider">{stat.label}</div>
                    <div className="text-sm font-bold text-slate-900 font-sora mt-1.5">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left">
              <h4 className="text-xs font-bold font-mono uppercase text-slate-550 mb-4 tracking-wider">South India Branch Directory</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(stateHubs).map((s) => (
                  <button 
                    key={s} 
                    onClick={() => setActiveGeoState(s)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      activeGeoState === s ? 'bg-blue-600 border-blue-500 text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {stateHubs[s].name}
                  </button>
                ))}
              </div>
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3 text-xs leading-relaxed font-mono">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-550">Regional Hubs</span>
                  <span className="text-slate-900 font-bold text-right">{stateHubs[activeGeoState].hubs}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-550">Secure Yards Capacity</span>
                  <span className="text-emerald-700 font-bold">{stateHubs[activeGeoState].yards}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-550">Empanelled Personnel</span>
                  <span className="text-slate-800">{stateHubs[activeGeoState].agents}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 11: INTERACTIVE OPERATIONS SIMULATOR */}
      <section className="py-24 bg-white border-b border-slate-100" id="simulator">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Telemetry Control</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900 mt-2">Interactive Operations Simulator</h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm max-w-4xl mx-auto">
            {interactiveWidget}
          </div>
        </motion.div>
      </section>

      {/* SECTION 12: COMPLIANCE FRAMEWORK */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <h3 className="text-lg font-bold font-sora text-blue-600 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" /> Regulatory Code of Conduct Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {complianceRules.map((c, i) => (
              <span key={i} className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-700 shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* TRANSITION CUE: Compliance -> Industries */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-15">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="overflow-visible">
            <circle cx="40" cy="30" r="10" stroke="#2563EB" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: 'center' }} />
            <circle cx="40" cy="30" r="4" fill="#2563EB" />
            <line x1="40" y1="30" x2="15" y2="15" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="40" y1="30" x2="65" y2="15" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="40" y1="30" x2="15" y2="45" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="40" y1="30" x2="65" y2="45" stroke="#CBD5E1" strokeWidth="1.5" />
          </svg>
        </div>
      </section>

      {/* SECTION 13: INDUSTRIES SERVED */}
      <section className="py-28 bg-white border-b border-slate-100 text-left relative">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4"
        >
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Client Verticals</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Lending Sectors Served</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesGrid.map((ind, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-sm transition-all duration-200 space-y-3">
                <h4 className="font-bold text-sm text-slate-900 font-sora">{ind.name}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{ind.scenario}</p>
                {ind.framework && (
                  <div className="text-[10px] font-mono text-blue-600 pt-2 border-t border-slate-200 mt-2 font-bold">
                    Method: {ind.framework}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRANSITION CUE: Industries -> Case Study */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-15">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="overflow-visible">
            <path d="M20 0 V60" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M12 48 L20 60 L28 48" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <motion.circle cx="20" cy="0" r="4" fill="#2563EB" animate={{ cy: [0, 60] }} transition={{ repeat: Infinity, duration: 2 }} />
          </svg>
        </div>
      </section>

      {/* SECTION 14: OPERATIONAL METRICS */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsMetrics.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="text-3xl lg:text-4xl font-extrabold text-blue-600 font-sora tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-2 font-mono tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 15: BUSINESS OUTCOMES */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Value Creation</span>
              <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Strategic B2B Outcomes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                By aligning ground operations with institutional legal panels, we directly resolve default buckets while insulating your corporate panel.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessOutcomes.map((out, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:border-blue-400 hover:shadow-sm transition-all duration-200 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 font-sora flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-emerald-600" />
                    {out.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{out.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 16: CASE STUDY */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-4xl px-4"
        >
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-slate-200 pb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">
                  {caseStudyData.headingStatus}
                </span>
                <h3 className="text-xl font-bold font-sora text-slate-900">{caseStudyData.title}</h3>
              </div>
              <span className="text-[9px] font-mono font-bold bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                Resolution Yield Audit
              </span>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-slate-655">
              <p><strong className="text-slate-900">Challenge:</strong> {caseStudyData.challenge}</p>
              <p><strong className="text-slate-900">Approach:</strong> {caseStudyData.approach}</p>
              <p><strong className="text-slate-900">Execution:</strong> {caseStudyData.execution}</p>
              <p><strong className="text-emerald-700 font-bold">Outcome:</strong> {caseStudyData.outcome}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 17: FAQ (Scroll Fade Transition wrapper) */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-3xl px-4"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">FAQ</span>
            <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900 mt-2">Empanelment Queries Answered</h3>
          </div>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center text-xs font-bold text-slate-900 font-sora text-left py-1"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-slate-500 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs text-slate-600 border-t border-slate-200 pt-3 leading-relaxed font-inter">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 18: RELATED SERVICES */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono mb-6 block">Related Operations</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/services/collections/field-collections" className="border border-slate-200 rounded-2xl p-6 bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-200 flex justify-between items-center group">
              <div>
                <h5 className="font-bold text-xs font-sora text-slate-900 group-hover:text-blue-600 transition-colors">Ground Field Collections & Recovery</h5>
                <p className="text-[10px] text-slate-500 mt-1.5 font-mono">DRA-certified field mediators coverage.</p>
              </div>
              <ArrowRight className="h-4.5 w-4.5 text-blue-600 shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services/legal-recovery/sarfaesi-support" className="border border-slate-200 rounded-2xl p-6 bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-200 flex justify-between items-center group">
              <div>
                <h5 className="font-bold text-xs font-sora text-slate-900 group-hover:text-blue-600 transition-colors">SARFAESI Act Foreclosure Coordination</h5>
                <p className="text-[10px] text-slate-500 mt-1.5 font-mono">Statutory notices and physical evictions.</p>
              </div>
              <ArrowRight className="h-4.5 w-4.5 text-blue-600 shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 19: TRUST & CREDIBILITY LAYER */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Vetted Integrity</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900">Trust Credentials Layer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCredibility.map((card, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-sm transition-all duration-200 space-y-3">
                <h4 className="font-bold text-sm text-slate-900 font-sora flex items-center gap-2">
                  <CheckSquare className="h-4.5 w-4.5 text-blue-600" />
                  {card.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed font-inter">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 20: SERVICE INTAKE FORM (Conversion Reveal Animation) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left" id="intake">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="mx-auto max-w-3xl px-4"
        >
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative">
            <div className="absolute top-4 right-8 text-xs font-mono font-bold text-blue-650">
              Stage {formStep} of 3
            </div>
            
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Secure Intake</span>
              <h3 className="text-2xl font-bold font-sora text-slate-900">Institutional Empanelment Request</h3>
              <p className="text-slate-600 text-xs font-medium">Verify credentials and trigger a pilot portfolio review.</p>
            </div>

            {inquirySubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 space-y-4"
              >
                <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-150 shadow-sm">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-base font-sora text-slate-900">Intake Submission Confirmed</h4>
                <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                  Your details have been securely logged in our SFTP directory. Our Secured Asset division head will email you within [VERIFICATION TAT] business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {formStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wide">Step 1: Institution Credentials</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Institution Legal Name *</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="e.g. State Bank of India"
                          value={formData.institutionName} 
                          onChange={(e) => updateField('institutionName', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Segment Category</label>
                        <select 
                          value={formData.segment} 
                          onChange={(e) => updateField('segment', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option>Commercial Bank</option>
                          <option>NBFC</option>
                          <option>Housing Finance Company (HFC)</option>
                          <option>ARC / Investment Committee</option>
                          <option>Fintech Platform</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Headquarters / Regional Office Location *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Chennai HQ, South Zone Office"
                        value={formData.hqLocation} 
                        onChange={(e) => updateField('hqLocation', e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wide">Step 2: Portfolio Scope Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Stressed Assets Book Valuation</label>
                        <select 
                          value={formData.delinquentVolume} 
                          onChange={(e) => updateField('delinquentVolume', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option>Under ₹10 Crore</option>
                          <option>₹10Cr - ₹50 Cr</option>
                          <option>₹50Cr - ₹100 Cr</option>
                          <option>₹100Cr - ₹500 Cr</option>
                          <option>Over ₹500 Crore</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Primary Default Stage</label>
                        <select 
                          value={formData.assetClass} 
                          onChange={(e) => updateField('assetClass', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option>Retail Mortgage Defaults</option>
                          <option>Commercial Secured eviction</option>
                          <option>ARC NPA Portfolios</option>
                          <option>Unsecured Retail skipbooks</option>
                          <option>Vehicle Repossessions</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Target Operations Coverage States *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Tamil Nadu, Karnataka, Kerala"
                        value={formData.targetStates} 
                        onChange={(e) => updateField('targetStates', e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wide">Step 3: Authorized Representative</h4>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Authorized Manager Name *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Rajesh Kumar (CRO)"
                        value={formData.managerName} 
                        onChange={(e) => updateField('managerName', e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Corporate Email Address *</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="e.g. rajesh@bankdomain.in"
                          value={formData.corporateEmail} 
                          onChange={(e) => updateField('corporateEmail', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Direct Mobile Line *</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phoneNumber} 
                          onChange={(e) => updateField('phoneNumber', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Active empanelment audit window?</label>
                        <select 
                          value={formData.empanelling} 
                          onChange={(e) => updateField('empanelling', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Estimated monthly caseload</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="e.g. 50 cases/month"
                          value={formData.estimatedVolume} 
                          onChange={(e) => updateField('estimatedVolume', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="pt-4 flex gap-4">
                  {formStep > 1 && (
                    <button 
                      type="button" 
                      onClick={() => setFormStep(formStep - 1)}
                      className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                    >
                      Back Stage
                    </button>
                  )}
                  <button 
                    type="submit" 
                    className="grow rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all shadow-sm shadow-blue-500/10"
                  >
                    {formStep < 3 ? 'Proceed Stage' : 'Submit Empanelment File'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* SECTION 21: FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/20 border-t border-slate-200 text-center relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fUp}
          className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 space-y-6"
        >
          <h3 className="text-3xl font-extrabold tracking-[-0.04em] font-sora text-slate-900 sm:text-4xl">
            {content.cta.heading}
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-inter">
            {content.cta.subheading}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#intake" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all hover:scale-[1.02]">
              {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              Download Service Brief PDF
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// EXPORTING SPECIFIC WRAPPERS WITH THE 21-SECTION LAYOUT
// ----------------------------------------------------
export function VerificationServicesLayout({ content }) {
  const [activeCheck, setActiveCheck] = useState('address');
  const checkData = {
    address: { title: "Residence Verification Check", desc: "Geotagged site visit to borrower residence, validation with local neighbors, and photo checks.", status: "Verified" },
    office: { title: "Office & HR Verification Check", desc: "Verifying active employment details, verifying payroll/ID documents, and checking HR registry logs.", status: "Verified" }
  };
  return (
    <BaseServiceLayout 
      content={content} 
      category="verification" 
      interactiveWidget={
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <h4 className="font-bold text-lg text-slate-900 font-sora tracking-tight">Verification Check Ledger</h4>
            <div className="flex flex-col gap-3">
              {Object.keys(checkData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCheck(key)}
                  className={`p-4 rounded-xl border text-xs text-left font-bold transition-all ${
                    activeCheck === key ? 'bg-blue-50 border-blue-500 text-blue-750' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {checkData[key].title}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left font-mono text-xs">
            <h5 className="text-blue-600 font-bold mb-2">Terminal Out</h5>
            <p className="text-slate-700 leading-relaxed">{checkData[activeCheck].desc}</p>
            <div className="mt-4 border-t border-slate-200 pt-2 text-[10px] text-slate-400">100% Geotagged site check coordinates</div>
          </div>
        </div>
      }
    />
  );
}

export function CollectionsServicesLayout({ content }) {
  const [outcome, setOutcome] = useState('answered');
  return (
    <BaseServiceLayout 
      content={content} 
      category="collections" 
      interactiveWidget={
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-bold text-lg font-sora tracking-tight text-slate-900">Dialer Outcome Routing</h4>
            <div className="flex gap-3">
              {['answered', 'busy', 'absconding'].map((o) => (
                <button
                  key={o}
                  onClick={() => setOutcome(o)}
                  className={`px-6 py-2.5 rounded-xl border text-xs font-bold uppercase transition-all ${
                    outcome === o ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-200 pb-2 mb-2"><span className="text-slate-550">Next Step Action</span><span className="text-emerald-700 font-bold uppercase">Auto Assign Queue</span></div>
            <p className="text-slate-600 leading-relaxed">Outbound dialer scheduler automatically schedules follow-up within compliant caller hour bounds.</p>
          </div>
        </div>
      }
    />
  );
}

export function LegalRecoveryLayout({ content }) {
  const [portfolioVal, setPortfolioVal] = useState(15); // in Crores
  const [defaultStage, setDefaultStage] = useState('NPA');
  const [targetState, setTargetState] = useState('TN');

  // Calculates estimated metrics based on inputs
  const getSlaDays = () => {
    let baseDays = 140;
    if (targetState === 'TN') baseDays = 130;
    if (targetState === 'KA') baseDays = 150;
    if (targetState === 'KL') baseDays = 165;
    if (targetState === 'TS') baseDays = 135;
    if (targetState === 'AP') baseDays = 145;

    if (defaultStage === 'SMA-2') baseDays += 45;
    if (defaultStage === 'NPA') baseDays += 15;
    if (defaultStage === 'Sec-13') baseDays -= 25;

    return baseDays;
  };

  const getRecoveryYield = () => {
    let rate = 0.72;
    if (defaultStage === 'SMA-2') rate = 0.82;
    if (defaultStage === 'NPA') rate = 0.74;
    if (defaultStage === 'Sec-13') rate = 0.68;

    if (targetState === 'TN' || targetState === 'TS') rate += 0.03;
    return portfolioVal * rate;
  };

  const getReleasedProvision = () => {
    let rate = 0.15;
    if (defaultStage === 'SMA-2') rate = 0.10;
    if (defaultStage === 'NPA') rate = 0.15;
    if (defaultStage === 'Sec-13') rate = 0.25;
    return portfolioVal * rate;
  };

  return (
    <BaseServiceLayout 
      content={content} 
      category="legal" 
      interactiveWidget={
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left text-slate-800">
          {/* Inputs Panel */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="font-bold text-base text-slate-900 font-sora tracking-tight">
              Foreclosure Portfolio Optimization Parameters
            </h4>
            
            {/* Input 1: Portfolio Valuation Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>Delinquent Portfolio Valuation</span>
                <span className="text-blue-600 font-bold">₹{portfolioVal} Crore</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="100" 
                step="1"
                value={portfolioVal} 
                onChange={(e) => setPortfolioVal(Number(e.target.value))} 
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>₹1 Cr</span>
                <span>₹50 Cr</span>
                <span>₹100 Cr</span>
              </div>
            </div>

            {/* Input 2 & 3: Dropdowns / Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Current Defaults Stage</label>
                <select 
                  value={defaultStage}
                  onChange={(e) => setDefaultStage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="SMA-2">SMA-2 (60-90 Days Overdue)</option>
                  <option value="NPA">NPA Stage-1 (Sub-Standard Asset)</option>
                  <option value="Sec-13">Section 13(2) notice Served</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Target Operations Region</label>
                <select 
                  value={targetState}
                  onChange={(e) => setTargetState(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="TN">Tamil Nadu (HQ & Core Network)</option>
                  <option value="KA">Karnataka Regional Hub</option>
                  <option value="KL">Kerala Ground Coverage</option>
                  <option value="TS">Telangana Operations Desk</option>
                  <option value="AP">Andhra Pradesh Branch Panel</option>
                </select>
              </div>
            </div>
          </div>

          {/* Outputs Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between self-stretch">
            <h5 className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-6 pb-2 border-b border-slate-100">
              Estimated Resolution Projections
            </h5>
            
            <div className="space-y-5 grow flex flex-col justify-center">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">SLA Resolution Timeframe</span>
                <div className="text-2xl font-bold font-sora text-slate-900 mt-0.5">
                  ~{getSlaDays()} Days <span className="text-xs font-mono font-medium text-slate-400">(estimate)</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Estimated Recovery Yield</span>
                <div className="text-2xl font-bold font-sora text-emerald-600 mt-0.5">
                  ₹{getRecoveryYield().toFixed(2)} Crore
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Released Provision Value</span>
                <div className="text-2xl font-bold font-sora text-blue-600 mt-0.5">
                  ₹{getReleasedProvision().toFixed(2)} Crore
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-3 border-t border-slate-100 text-[9px] font-mono text-slate-400 leading-normal">
              Calculations based on Southern India branch indices. [DRAFT - CLIENT TO CONFIRM] prior to empanelment.
            </div>
          </div>
        </div>
      }
    />
  );
}

export function AssetRecoveryLayout({ content }) {
  const [val, setVal] = useState(150000);
  return (
    <BaseServiceLayout 
      content={content} 
      category="asset" 
      interactiveWidget={
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 font-sora tracking-tight">Asset Value Calculator</h4>
            <input type="range" min="50000" max="500000" step="10000" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            <div className="text-xs text-slate-500 font-mono">VALUATION TARGET: ₹{val.toLocaleString()}</div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs text-slate-800">
            <div className="flex justify-between"><span>Recovery Yield (85%)</span><span className="text-emerald-600 font-bold">₹{Math.floor(val * 0.85).toLocaleString()}</span></div>
          </div>
        </div>
      }
    />
  );
}

export function InvestigationServicesLayout({ content }) {
  return (
    <BaseServiceLayout 
      content={content} 
      category="investigation" 
      interactiveWidget={
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs text-left space-y-2 text-slate-700">
          <p className="text-blue-600">&gt; Query absconding accounts registries...</p>
          <p className="text-slate-500">&gt; Localizing coordinates via telecom utility checking...</p>
        </div>
      }
    />
  );
}

export function SpecializedServicesLayout({ content }) {
  return (
    <BaseServiceLayout 
      content={content} 
      category="specialized" 
      interactiveWidget={
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs text-left space-y-2 text-slate-700">
          <p className="text-blue-600">&gt; Provisioning releases calculated: Verified</p>
          <p className="text-slate-500">&gt; NPA Capital freed for empanelled banks</p>
        </div>
      }
    />
  );
}

export function OperationalServicesLayout({ content }) {
  return (
    <BaseServiceLayout 
      content={content} 
      category="operational" 
      interactiveWidget={
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-xs text-left space-y-2 text-slate-700">
          <p className="text-blue-600">&gt; Shifts capacity scheduling: Active</p>
          <p className="text-slate-500">&gt; SLA transaction logs sync completed</p>
        </div>
      }
    />
  );
}
