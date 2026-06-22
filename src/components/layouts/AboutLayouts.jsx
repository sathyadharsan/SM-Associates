import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  Shield, 
  Users, 
  Clock, 
  Building2, 
  MapPin,
  TrendingUp,
  FileText,
  Activity,
  Database,
  Briefcase,
  Sparkles,
  Info,
  Heart,
  ChevronDown
} from 'lucide-react';

// Fade-in animation properties
const fUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// ----------------------------------------------------
// ABOUT LAYOUT ENGINE (12 Content Sections)
// ----------------------------------------------------
export function CompanyOverviewLayout({ content }) {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const mockCompare = [
    { metric: "RBI Directive Audits", sm: "100% Checked daily", traditional: "Ad-hoc compliance check" },
    { metric: "Field Officers DRA Rates", sm: "100% certified calling", traditional: "Partially certified teams" },
    { metric: "Voice Logging Storage", sm: "180 Days secure log", traditional: "No structured logger" },
    { metric: "Geotagged Visit Data", sm: "Geofenced check-in log", traditional: "Manual visit logs" }
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] overflow-hidden font-inter">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[10%] h-[700px] w-[700px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-5%] h-[800px] w-[800px] rounded-full bg-amber-500/[0.02] blur-[150px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-36 pb-20 border-b border-slate-100 bg-[#fafbfc]">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#C5A021] font-mono bg-amber-50 border border-amber-100/60 px-4 py-1.5 rounded-full"
          >
            {content.eyebrow}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-[#0a1128] sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: CLIENT TRUST BAR */}
      <section className="py-10 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Trusted by Nationalized Panels</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-bold text-xs tracking-widest text-[#0a1128] font-mono border border-slate-200 px-4 py-2 rounded-xl">SBI CARDS</span>
            <span className="font-bold text-xs tracking-widest text-[#0a1128] font-mono border border-slate-200 px-4 py-2 rounded-xl">BAJAJ FINANCE</span>
            <span className="font-bold text-xs tracking-widest text-[#0a1128] font-mono border border-slate-200 px-4 py-2 rounded-xl">SHRIRAM FINANCE</span>
            <span className="font-bold text-xs tracking-widest text-[#0a1128] font-mono border border-slate-200 px-4 py-2 rounded-xl">HDB FINANCIAL</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Corporate Legacy</span>
              <h2 className="text-3xl font-extrabold tracking-tight font-sora text-[#0a1128]">Decades of Standing Since Y2K</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                SM Associates was established with a focus on resolving retail defaults and applicant identity checks for institutional bank partners. Over the course of [YEARS OF EXPERIENCE]+ years, we have scaled our regional footprint to cover South India, ensuring strict compliance loops and high recovery rates. We operate with high corporate integrity and rigorous risk enforcements.
              </p>
              <div className="border-l-4 border-[#C5A021] pl-6 py-2 bg-slate-50 rounded-r-xl">
                <p className="italic text-slate-700 text-xs">
                  "Our goal since Y2K is to deliver consistent value through innovation and commitment. We are empaneled with nationalized banks and NBFCs across India."
                </p>
                <p className="mt-3 text-xs font-bold text-slate-800">— Shri. M. Jebaraj, Managing Director</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6 text-left"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Operations Stats</h4>
              <div className="space-y-4">
                {content.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-slate-500 font-mono">{stat.label}</span>
                    <span className="text-lg font-black text-[#0a1128] font-sora">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MISSION & VISION */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-250 p-8 rounded-3xl space-y-4 shadow-sm"
            >
              <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-[#C5A021]"><Shield className="h-5 w-5" /></div>
              <h4 className="font-bold text-lg font-sora text-[#0a1128]">Empanelled Mission</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                To isolate lenders from portfolio write-off risks and regulatory penalties by maintaining 100% DRA certified ground operations and automated caller logging loops.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-250 p-8 rounded-3xl space-y-4 shadow-sm"
            >
              <div className="h-10 w-10 bg-blue-55 rounded-xl flex items-center justify-center text-blue-600"><Activity className="h-5 w-5" /></div>
              <h4 className="font-bold text-lg font-sora text-[#0a1128]">Operational Vision</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                To build South India's premier B2B risk operations and secured SARFAESI foreclosure coordination network, providing real-time data syncs and transparent SLA metrics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP TEAM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021]">Executive Oversight</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Board of Directors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {content.capabilities.slice(0, 2).map((leader, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-md text-left flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 w-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold font-sora text-[#0a1128]">{leader.title}</h3>
                  <p className="text-xs font-bold uppercase text-[#C5A021] font-mono mt-1">Managing Board</p>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">{leader.desc}</p>
                </div>
                <button 
                  onClick={() => setSelectedLeader(leader)}
                  className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                >
                  Read Bio <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TIMELINE JOURNEY */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Our Timeline</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Growth Milestones</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-3 gap-3 relative z-10">
              {content.workflow.slice(0, 3).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    activeMilestone === idx 
                      ? 'bg-amber-500 text-white shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-bold font-mono">Milestone</span>
                  <div className="text-xs font-black font-sora mt-1">{item.title}</div>
                </button>
              ))}
            </div>
            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
              <h4 className="text-sm font-bold font-sora text-[#0a1128]">{content.workflow[activeMilestone]?.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-2">{content.workflow[activeMilestone]?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021]">Our Pillars</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Core Corporate Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200/80 rounded-2xl text-left space-y-3">
              <span className="text-xs font-bold text-[#C5A021] font-mono">Pillar 01</span>
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">Strict Fair Practices Compliance</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Mandatory caller audits and visit geotag verification shield lender licensing.</p>
            </div>
            <div className="p-6 border border-slate-200/80 rounded-2xl text-left space-y-3">
              <span className="text-xs font-bold text-blue-600 font-mono">Pillar 02</span>
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">Decentralized Field Operations</h4>
              <p className="text-slate-500 text-xs leading-relaxed">[BRANCH COUNT] regional branches ensure immediate ground outreach dispatch.</p>
            </div>
            <div className="p-6 border border-slate-200/80 rounded-2xl text-left space-y-3">
              <span className="text-xs font-bold text-[#C5A021] font-mono">Pillar 03</span>
              <h4 className="font-bold text-sm font-sora text-[#0a1128]">Timeline Precision</h4>
              <p className="text-slate-500 text-xs leading-relaxed">SLA-driven notice serving and possession executions minimize legal lag times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INFRASTRUCTURE */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Our Infrastructure</span>
              <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Corporate Operations & Sourcing Desk</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We operate secure call center dialing systems, localized investigator dispatch tables, and physical secure asset parking yards. Lenders check metrics dynamically through daily secure FTP updates.
              </p>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-xs text-slate-500"><Database className="h-4 w-4 text-[#C5A021]" /> Secure FTP Logs</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500"><Activity className="h-4 w-4 text-[#C5A021]" /> Geotagged Visit Data</span>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 text-left space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">Active Console Telemetry</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Database Uptime</span><span>99.98%</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Caller Line Channels</span><span>120 Lines</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Secure Yards</span><span>4 Locations</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: COVERAGE NETWORK */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Geographic Scope</span>
            <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Multi-State South India Presence</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We deploy field teams directly out of regional branches covering Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, and Puducherry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE & ETHICS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h3 className="text-xl font-bold font-sora text-amber-400">Compliance Auditing and Fair Calling Standards</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {content.compliance.map((c, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: WHY SM ASSOCIATES (Comparison Framework) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 text-left">
          <h3 className="text-xl font-bold font-sora text-center mb-8">SM Associates vs. Traditional Sourcing</h3>
          <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-mono text-slate-500">
                  <th className="p-4">OPERATIONS METRIC</th>
                  <th className="p-4 text-blue-600">SM ASSOCIATES</th>
                  <th className="p-4">AVERAGE AGENCY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {mockCompare.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-700">{item.metric}</td>
                    <td className="p-4 font-bold text-blue-600">{item.sm}</td>
                    <td className="p-4 text-slate-500">{item.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 12: CTA & FAQ LIST */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center mb-8">FAQ</h3>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
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

      {/* Leader Bio Drawer modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-4 relative text-left"
            >
              <h3 className="text-lg font-bold font-sora text-[#0a1128]">{selectedLeader.title}</h3>
              <p className="text-xs font-bold uppercase text-blue-600 font-mono">Credentials</p>
              <p className="text-slate-600 text-xs leading-relaxed">{selectedLeader.desc}</p>
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button onClick={() => setSelectedLeader(null)} className="rounded-xl bg-slate-100 hover:bg-slate-200 px-6 py-2 text-xs font-bold">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6">
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

export function LeadershipLayout({ content }) {
  return <CompanyOverviewLayout content={content} />;
}

export function HistoryLayout({ content }) {
  return <CompanyOverviewLayout content={content} />;
}

export function WhySMAssociatesLayout({ content }) {
  return <CompanyOverviewLayout content={content} />;
}

export function ClienteleLayout({ content }) {
  return <CompanyOverviewLayout content={content} />;
}

export function ComplianceLayout({ content }) {
  return <CompanyOverviewLayout content={content} />;
}
