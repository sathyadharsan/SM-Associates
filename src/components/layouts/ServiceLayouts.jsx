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
// BASE SERVICE LAYOUT (15 Content Sections Engine)
// ----------------------------------------------------
function BaseServiceLayout({ content, category, interactiveWidget }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => setInquirySubmitted(false), 3000);
  };

  const failCompare = [
    { point: "Regulatory Auditing", traditional: "Manual checklists, no voice recordings or logs.", sm: "100% voice recorded caller paths with 180 Days logs." },
    { point: "Ground Verification", traditional: "Paper-based forms, high delay times.", sm: "100% geotagged site verification checks with photo coordinates." },
    { point: "Timeline SLA Control", traditional: "Notice servers delay DM filings.", sm: "Milestone-driven legal desk tracking notices daily." }
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] overflow-hidden font-inter">
      {/* Background neon elements */}
      <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] h-[700px] w-[700px] bg-amber-500/[0.015] rounded-full blur-[150px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                {content.eyebrow}
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0a1128] sm:text-5xl lg:text-6xl font-sora leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                {content.description}
              </p>
              <div className="pt-2 flex gap-4">
                <a href="#consult" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-[1.02]">
                  Request Proposal <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-lg"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0a1128] font-mono mb-4">Operations Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                {content.stats.map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-150 shadow-sm text-left">
                    <div className="text-2xl font-black text-[#0a1128] font-sora">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENT TRUST BAR */}
      <section className="py-10 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Empanelled Banking Networks</p>
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-60 grayscale">
            <span className="font-bold text-xs tracking-widest font-mono border border-slate-200 px-4 py-2 rounded-xl">SBI CARDS</span>
            <span className="font-bold text-xs tracking-widest font-mono border border-slate-200 px-4 py-2 rounded-xl">BAJAJ FINANCE</span>
            <span className="font-bold text-xs tracking-widest font-mono border border-slate-200 px-4 py-2 rounded-xl">SHRIRAM FINANCE</span>
            <span className="font-bold text-xs tracking-widest font-mono border border-slate-200 px-4 py-2 rounded-xl">IOB BANK</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY CHALLENGES */}
      <section className="py-20 bg-slate-900 text-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 font-mono">Risk Landscape</span>
            <h2 className="text-3xl font-bold font-sora">Severe Industry Portfolio Risks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.challenges.map((c, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
              >
                <div className="h-10 w-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-base font-sora text-white">{c.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL METHODS FAIL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-left">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">System Flaws</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Why Average Agency Models Fail</h2>
          </div>
          <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-mono text-slate-500">
                  <th className="p-4">CRITICAL PILLAR</th>
                  <th className="p-4">TRADITIONAL VENDOR</th>
                  <th className="p-4 text-blue-600">SM ASSOCIATES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {failCompare.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-700">{item.point}</td>
                    <td className="p-4 text-slate-500">{item.traditional}</td>
                    <td className="p-4 font-bold text-blue-600">{item.sm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: SM ASSOCIATES SOLUTION FRAMEWORK */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Our Solution Loop</span>
              <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Fully Integrated Operations and Compliance</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We combine outbound calling desks, certified field officer dispatch directories, secure yards coordinate points, and legal notice enforcements advocates panels. Lenders free up capital locked in provisioning buckets with structured SLA reporting loops.
              </p>
              <div className="space-y-2">
                {content.solutions.map((sol, i) => (
                  <div key={i} className="flex gap-2 items-center text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> {sol.title}: {sol.desc}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 text-left shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono mb-4">Operations Ingests</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our network provides daily SFTP transaction log updates and coordinates direct cash check reconciliations weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE CAPABILITIES GRID */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Core Services</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Operational Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {content.capabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="font-bold text-sm font-sora text-[#0a1128]">{cap.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono mt-4">Active SLA</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OPERATIONAL WORKFLOW TIMELINE */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold font-sora text-center mb-12">Operational Pipeline Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.workflow.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-250 p-6 rounded-2xl shadow-sm relative">
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-blue-400">Step {item.step}</span>
                <h4 className="font-bold text-sm font-sora text-[#0a1128] mt-4">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: COVERAGE & REACH */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Geographic Reach</span>
              <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Multi-State Sourcing Coordinates</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We operate direct field officers and branch setups across Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, and Puducherry.
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 text-xs font-mono space-y-3">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Branches Count</span><span>[BRANCH COUNT] Offices</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Field Staff Count</span><span>[FIELD OFFICER COUNT]+ Officers</span></div>
              <div className="flex justify-between"><span>Coverage Radius</span><span>150 KM / Hub</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TECHNOLOGY & REPORTING LAYER (Embedded Widget) */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Reporting Dashboard</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Interactive Operations Simulator</h2>
          </div>
          {interactiveWidget}
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE & GOVERNANCE */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-amber-400" /> Regulatory Code of Conduct Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {content.compliance.map((c, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: INDUSTRIES SERVED */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Applications</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Lending Sectors Covered</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {content.industries.map((ind, i) => (
              <span key={i} className="bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-full text-xs font-bold text-slate-700">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: SUCCESS STORIES / CASE STUDIES */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="mx-auto max-w-5xl px-4 bg-white border border-slate-250 rounded-[32px] p-8 md:p-12 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Case Audit Log</span>
          <h3 className="text-2xl font-bold font-sora text-[#0a1128]">[CLIENT COUNT]+ Lenders Empanelled</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Over the past decades, we have resolved high-delinquency retail defaulted books and agricultural loan repossession cases under strict SLAs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 font-mono">
            <div>Blended Portfolio Resolved: <span className="text-[#0a1128] font-bold">[RECOVERY VALUE]+</span></div>
            <div>Timeline Adherence Rate: <span className="text-emerald-600 font-bold">[RESOLUTION RATE]%</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center mb-8">FAQ</h3>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between text-xs font-bold text-[#0a1128] font-sora text-left">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                {activeFaq === i && <p className="mt-3 text-xs text-slate-500 border-t pt-3 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: CONSULTATION CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-left" id="consult">
        <div className="mx-auto max-w-4xl px-4 bg-white border border-slate-200 rounded-[32px] p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Empanelment Setup</span>
              <h3 className="text-2xl font-bold font-sora text-[#0a1128]">{content.cta.heading}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{content.cta.subheading}</p>
            </div>
            {inquirySubmitted ? (
              <div className="text-center py-12 space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                <p className="font-bold text-xs">Proposal Logged Successfully</p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-3">
                <input required type="text" placeholder="Institution Name..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-[#0a1128]" />
                <input required type="email" placeholder="Corporate Email..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-[#0a1128]" />
                <button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all shadow-md">
                  Submit Proposal Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 15: RELATED SERVICES */}
      <section className="py-20 bg-white border-t border-slate-100 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono mb-6">Related Verticals</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/services/collections/field-collections" className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all flex justify-between items-center">
              <div>
                <h5 className="font-bold text-xs font-sora text-[#0a1128]">Ground Field Collections & Recovery</h5>
                <p className="text-[10px] text-slate-400 mt-1">DRA-certified field mediators coverage.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </Link>
            <Link to="/services/legal-recovery/sarfaesi-support" className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all flex justify-between items-center">
              <div>
                <h5 className="font-bold text-xs font-sora text-[#0a1128]">SARFAESI Act Foreclosure Coordination</h5>
                <p className="text-[10px] text-slate-400 mt-1">Statutory notices and physical evictions.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// EXPORTING SPECIFIC WRAPPERS WITH THE 15-SECTION LAYOUT
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <h4 className="font-bold text-lg text-[#0a1128] font-sora">Verification Check Ledger</h4>
            <div className="flex flex-col gap-3">
              {Object.keys(checkData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCheck(key)}
                  className={`p-4 rounded-xl border text-xs text-left font-bold transition-all ${
                    activeCheck === key ? 'bg-blue-50 border-blue-500' : 'bg-white border-slate-200'
                  }`}
                >
                  {checkData[key].title}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 text-left font-mono text-xs">
            <h5 className="text-blue-400 font-bold mb-2">Terminal Out</h5>
            <p className="text-slate-300">{checkData[activeCheck].desc}</p>
            <div className="mt-4 border-t border-white/5 pt-2 text-[10px] text-slate-500">100% Geotagged site check coordinates</div>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-bold text-lg font-sora">Dialer Outcome Routing</h4>
            <div className="flex gap-3">
              {['answered', 'busy', 'absconding'].map((o) => (
                <button
                  key={o}
                  onClick={() => setOutcome(o)}
                  className={`px-6 py-2.5 rounded-xl border text-xs font-bold uppercase transition-all ${
                    outcome === o ? 'bg-blue-600 text-white' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2 mb-2"><span className="text-slate-400">Next Step Action</span><span className="text-emerald-400 font-bold">Auto Assign Queue</span></div>
            <p className="text-slate-400">Outbound dialer scheduler automatically schedules follow-up within compliant caller hour bounds.</p>
          </div>
        </div>
      }
    />
  );
}

export function LegalRecoveryLayout({ content }) {
  const [stage, setStage] = useState(0);
  return (
    <BaseServiceLayout 
      content={content} 
      category="legal" 
      interactiveWidget={
        <div className="space-y-6 text-left">
          <div className="flex flex-wrap gap-3">
            {["Sec 13(2) notice", "Sec 13(4) notice", "Sec 14 filing"].map((s, idx) => (
              <button
                key={idx}
                onClick={() => setStage(idx)}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  stage === idx ? 'bg-slate-900 text-white' : 'bg-slate-50 border-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-xs text-slate-600 leading-relaxed">
            Advocate coordination check is logged. Statutory notice serving conforms to timeline guidelines.
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
            <h4 className="font-bold text-sm text-[#0a1128] font-sora">Asset Value Calculator</h4>
            <input type="range" min="50000" max="500000" step="10000" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            <div className="text-xs text-slate-500 font-mono">VALUATION TARGET: ₹{val.toLocaleString()}</div>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs">
            <div className="flex justify-between"><span>Recovery Yield (85%)</span><span className="text-emerald-400 font-bold">₹{Math.floor(val * 0.85).toLocaleString()}</span></div>
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
        <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs text-left space-y-2">
          <p className="text-blue-400">&gt; Query absconding accounts registries...</p>
          <p className="text-slate-400">&gt; Localizing coordinates via telecom utility checking...</p>
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
        <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs text-left space-y-2">
          <p className="text-blue-400">&gt; Provisioning releases calculated: Verified</p>
          <p className="text-slate-400">&gt; NPA Capital freed for empanelled banks</p>
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
        <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs text-left space-y-2">
          <p className="text-blue-400">&gt; Shifts capacity scheduling: Active</p>
          <p className="text-slate-400">&gt; SLA transaction logs sync completed</p>
        </div>
      }
    />
  );
}
