import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  AlertTriangle,
  TrendingUp,
  Activity,
  Layers,
  ChevronRight,
  Database,
  Building2,
  Users
} from 'lucide-react';

const fUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

export function IndustryLayout({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  const riskCategories = [
    { title: "Portfolio NPA Delinquency", rate: "NPA Stage Sec 13/14", desc: "Accounts exceeding 90 days defaults requiring immediate statutory Notice filing." },
    { title: "Address Absconders Sourcing", rate: "Skip Trace Localizing", desc: "Borrowers shifting locations, shutting down offices, needing forensic utility tracking." },
    { title: "Verification Identity Fraud", rate: "Synthetic Profiles Audit", desc: "Synthetic payrolls, forged title deeds requiring physical site inspections." }
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] overflow-hidden font-inter">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[5%] h-[600px] w-[600px] bg-blue-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-left overflow-hidden">
        {/* Dynamic neon grids */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute right-[5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                {content.eyebrow}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="pt-2 flex gap-4">
                <a href="#threats" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-[1.02]">
                  Analyze Risk Delinquencies <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right side interactive risk visual map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-5 bg-slate-900/60 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Risk Delinquency Heatmap</span>
                </div>
                <div className="rounded bg-red-500/10 border border-red-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-400 font-mono">
                  High Risk Stage
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center text-[10px] font-mono text-slate-400">
                <div className="bg-red-950/40 border border-red-500/30 p-3 rounded-xl">
                  <div className="text-red-400 font-bold">STAGE 1</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">SMA 0-30 Days</div>
                </div>
                <div className="bg-red-900/40 border border-red-500/40 p-3 rounded-xl animate-pulse">
                  <div className="text-red-350 font-bold">STAGE 2</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">SMA 31-90 Days</div>
                </div>
                <div className="bg-red-900 border border-red-500 p-3 rounded-xl">
                  <div className="text-white font-bold">NPA STAGE</div>
                  <div className="text-[9px] text-red-200 mt-0.5">90+ Days</div>
                </div>
              </div>

              {/* Status and telemetry list */}
              <div className="space-y-2 text-[10px] font-mono text-left text-slate-400">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Risk Delinquency Audit</span><span className="text-red-400">Active</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Sec 13 Notification Warrants</span><span className="text-emerald-400">Compliant</span></div>
                <div className="flex justify-between"><span>SLA Adherence Rate</span><span className="text-white">[RESOLUTION RATE]%</span></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRY OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Sector Ingestion Overview</span>
          <h3 className="text-2xl font-bold font-sora">Institutional Credit Risk Lifecycle</h3>
          <p className="text-slate-600 text-xs leading-relaxed max-w-3xl">
            Managing public/private banking credit books requires highly specialized compliance audits and ground logistics enforcements. Our dedicated branch networks ensure immediate verification updates and collections pickup.
          </p>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY RISK LANDSCAPE */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Risk Telemetry</span>
              <h3 className="text-2xl font-bold font-sora">Sector Delinquency Categories</h3>
              <div className="flex flex-col gap-3 pt-4">
                {riskCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      activeTab === idx 
                        ? 'bg-blue-50 border-blue-500 text-[#0a1128]' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                    }`}
                  >
                    <div className="font-bold text-xs font-sora">{cat.title}</div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">{cat.rate}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 space-y-4 text-left shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Operations Details</span>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="text-sm font-bold font-sora text-white">{riskCategories[activeTab].title}</div>
                <p className="text-slate-400 leading-relaxed">{riskCategories[activeTab].desc}</p>
                <div className="border-t border-white/5 pt-3 space-y-2">
                  <div className="flex justify-between"><span>Audit Check SLA</span><span>100% Valid</span></div>
                  <div className="flex justify-between"><span>Statutory Time Limit</span><span>14 Days TAT</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CURRENT MARKET CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-mono">Market Constraints</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Critical Market Delinquencies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-slate-250 rounded-2xl space-y-3">
              <div className="text-red-500"><AlertTriangle className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Rising NPA Write-offs</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Macro default rates locked bank liquidity capital provisioning pools.</p>
            </div>
            <div className="p-6 border border-slate-250 rounded-2xl space-y-3">
              <div className="text-red-500"><AlertTriangle className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Coercive Agency Reputations</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Generic vendors lack DRA caller ethics codes causing licensing audits defaults.</p>
            </div>
            <div className="p-6 border border-slate-250 rounded-2xl space-y-3">
              <div className="text-red-500"><AlertTriangle className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Absconders Contact Loss</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Borrowers shifting locations require structured skip traces database search.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RECOVERY & VERIFICATION CHALLENGES */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Sourcing Hurdles</span>
          <h3 className="text-2xl font-bold font-sora">Verification Forensics Challenges</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Synthetic candidate documents checks require physical workplace visits and registry coordinates verification. SM Associates deploys certified branch officers directly to gather witness log files coordinates.
          </p>
        </div>
      </section>

      {/* SECTION 6: SM ASSOCIATES INDUSTRY FRAMEWORK */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Unified Sourcing Framework</span>
              <h3 className="text-2xl font-bold font-sora">End-to-End Resolution Pipeline</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our operations platform connects collections callers queue files, local branch officers geolocated visits, secure repossession yards, and court enforcements advocates panels under a single SLA console.
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 text-xs font-mono space-y-2">
              <div className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% DRA Caller Audio Logs</div>
              <div className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Geotagged Site Verification Checks</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: RELEVANT SERVICES */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Applicable Services</span>
          <h3 className="text-2xl font-bold font-sora mt-2 mb-8">Integrated Operational Units</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">CPV Profile Verification</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Pre-disbursal applicant residence and HR payroll verification audits.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">DRA Field Collections</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Compliant ground outreach visits and payment check pickup coordination.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">Secured SARFAESI Foreclosure</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Sec 13 demand notices serving, symbolic possession publication, DM warrants evictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WORKFLOW MODEL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-left">
          <h3 className="text-2xl font-bold font-sora text-center mb-12">Ground Execution Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.workflow.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative shadow-sm">
                <span className="absolute top-4 left-4 text-xs font-mono font-bold text-blue-600">0{idx+1}</span>
                <h4 className="font-bold text-sm font-sora text-[#0a1128] mt-6">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: COVERAGE NETWORK */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Geographic Reach</span>
              <h3 className="text-2xl font-bold font-sora text-[#0a1128]">South India Sourcing Matrix</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our physical offices network covers Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, and Puducherry branches.
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Branches Network</span><span>[BRANCH COUNT] Offices</span></div>
              <div className="flex justify-between"><span>Field Officers</span><span>[FIELD OFFICER COUNT]+ Officers</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE STANDARDS */}
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

      {/* SECTION 11: CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12 text-left space-y-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono font-semibold">Empanelment Sourcing Logs</span>
          <h3 className="text-2xl font-bold font-sora text-[#0a1128]">[CLIENT COUNT]+ Banks Empanelled</h3>
          <p className="text-slate-500 text-xs leading-relaxed font-inter">
            Over the past decades, we have successfully optimized retail defaulted portfolios and Agriloan repossession cycles under strict timelines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 font-mono">
            <div>Blended Resolved Portfolio: <span className="text-[#0a1128] font-bold">[RECOVERY VALUE]+</span></div>
            <div>SLA Timeline Compliance: <span className="text-emerald-600 font-bold">[RESOLUTION RATE]%</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 12: CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 text-center bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold font-sora">{content.cta.heading}</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">{content.cta.subheading}</p>
          <Link to={content.cta.href} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-all hover:scale-[1.02]">
            {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
