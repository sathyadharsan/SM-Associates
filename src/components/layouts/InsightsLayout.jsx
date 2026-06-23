import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  FileText, 
  ShieldCheck, 
  BookOpen, 
  Video, 
  TrendingUp, 
  Mail, 
  UserCheck, 
  ChevronRight 
} from 'lucide-react';

const fUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export function InsightsLayout({ content }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [subbed, setSubbed] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const categories = ['All', 'Case Studies', 'Legal Recovery', 'Compliance', 'Market Audits'];

  const reports = [
    { type: 'Case Studies', title: 'Retail Mortgage Delinquency Recovery Yield Report', desc: 'Detailed analysis of Section 14 magistrate petition executions across South India regional hubs, releasing ₹[DRAFT] in locked provisioning.', tag: 'PDF BRIEF', size: '2.4 MB' },
    { type: 'Legal Recovery', title: 'SARFAESI Act Stage-3 Notice Servicing Benchmark', desc: 'Timeline compliance analysis of Section 13(2) and 13(4) serving. Statutory notice servings average timelines audits.', tag: 'LEGAL GUIDE', size: '1.8 MB' },
    { type: 'Compliance', title: 'RBI Fair Practices Code Caller Compliance Audit', desc: 'Outbound predictive dialer settings limits, calling hours restriction log locks, and caller quality voice recordings auditing.', tag: 'COMPLIANCE SLA', size: '3.1 MB' }
  ];

  const briefings = [
    { title: 'District Magistrate Warrant Possession Execution Procedures', date: 'June 2026', source: 'Corporate Legal Desk', excerpt: 'Calibrating branch coordination desks with local police authorities and advocate panels to accelerate symbolic possession sealing.' },
    { title: 'Debt Recovery Agent Academy Training Certifications Matrix', date: 'May 2026', source: 'DRA Training Desk', excerpt: 'Mandatory DRA training syllabus highlights including fair communication, caller ethics guidelines, and data confidentiality certifications.' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubbed(true);
    setTimeout(() => setSubbed(false), 3000);
  };

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => setInquirySubmitted(false), 3000);
  };

  const filteredReports = activeCategory === 'All' 
    ? reports.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : reports.filter(r => r.type === activeCategory && r.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-inter">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] h-[700px] w-[700px] bg-violet-600/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* SECTION 1: INSIGHTS HERO */}
      <section className="relative pt-48 pb-24 border-b border-slate-900 text-left overflow-hidden bg-[#030712]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            Thought Leadership
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight max-w-4xl">
            Insights & Stressed Assets Briefings
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-inter">
            Institutional research analysis, statutory legal procedures updates, and compliance governance briefs compiled by SM Associates advisory panel.
          </p>
          
          {/* Search and Filters */}
          <div className="pt-4 flex flex-col md:flex-row gap-4 items-stretch max-w-3xl">
            <div className="relative grow">
              <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search briefings, case studies, updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-12 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap ${
                    activeCategory === cat ? 'bg-blue-600 border-blue-500 text-white shadow-md' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED CASE STUDY SPOTLIGHT */}
      <section className="py-24 bg-slate-950 border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Featured Case Spotlight
          </span>
          <div className="mt-8 bg-slate-900/40 border border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">RECOVERY YIELD STAGE-3</span>
              <h3 className="text-2xl font-bold font-sora text-white">Residential Mortgage Portfolio Foreclosure Case Study</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                Analysis of a comprehensive secured recovery campaign covering multiple Southern states. Detailed report on filing Section 14 petitions, managing physical possession logistics, and storage in fenced CCTV yards, resulting in a release of ₹[DRAFT] in provision values.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 font-mono text-[10px] text-slate-500">
                <div>VALUATION: <span className="text-white font-bold">₹[DRAFT] Crore</span></div>
                <div>TIMELINE: <span className="text-white font-bold">[DRAFT] Days</span></div>
                <div>YIELD RATE: <span className="text-emerald-400 font-bold">[DRAFT]%</span></div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-[1.02]">
                Read Audit Log <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RECOVERY PERFORMANCE REPORTS */}
      <section className="py-24 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Performance Audits</span>
            <h2 className="text-3xl font-bold font-sora text-white">Active Recovery Briefs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredReports.map((rep, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={fUp}
                  className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-800 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-bold bg-slate-950 text-slate-500 border border-slate-900 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {rep.tag}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{rep.size}</span>
                    </div>
                    <h4 className="font-bold text-base font-sora text-white leading-tight">{rep.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{rep.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">{rep.type}</span>
                    <button className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1">
                      Download Brief <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 4: LATEST LEGAL BRIEFINGS */}
      <section className="py-24 bg-slate-950 border-b border-slate-900 text-left">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Statutory Updates</span>
            <h2 className="text-3xl font-bold font-sora text-white">Recent Legal Briefings</h2>
          </div>
          <div className="space-y-6">
            {briefings.map((brief, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>DATE: {brief.date}</span>
                  <span>SOURCE: {brief.source}</span>
                </div>
                <h4 className="font-bold text-base font-sora text-white">{brief.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{brief.excerpt}</p>
                <div className="pt-2 border-t border-slate-850">
                  <a href="#inquiry" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    Request Full Legal Analysis <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DRA ACADEMY KNOWLEDGE HUB */}
      <section className="py-24 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Professional Training</span>
              <h3 className="text-3xl font-bold font-sora text-white">DRA Academy & Compliance Hub</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                All collections callers undergo Debt Recovery Agent (DRA) training under direct corporate supervisor oversight. Field officers are certified in fair mediation practices, local district protocols, and borrower verification audits procedures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="flex gap-2 items-center text-slate-350">
                  <UserCheck className="h-4.5 w-4.5 text-blue-500" />
                  100% DRA-Certified Calling Staff
                </div>
                <div className="flex gap-2 items-center text-slate-350">
                  <ShieldCheck className="h-4.5 w-4.5 text-blue-500" />
                  RBI Ethics Code Certified
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl font-mono text-xs text-left">
              <h5 className="text-slate-400 font-bold mb-4 uppercase tracking-wider text-[10px]">Active Academy Training Syllabus</h5>
              <ul className="space-y-3 text-slate-350">
                <li className="flex justify-between border-b border-slate-850 pb-2"><span>Module 1: Fair Practice calling Hours Limits</span><span className="text-emerald-400">Lock config</span></li>
                <li className="flex justify-between border-b border-slate-850 pb-2"><span>Module 2: Customer Dispute Routing Desks</span><span className="text-emerald-400">Escalation SLA</span></li>
                <li className="flex justify-between border-b border-slate-850 pb-2"><span>Module 3: Address Absconders Forensics checks</span><span className="text-emerald-400">Compliance Limit</span></li>
                <li className="flex justify-between"><span>Module 4: Geotagged Site Check Verification</span><span className="text-emerald-400">GPS Validation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: REGULATORY COMPLIANCE UPDATES */}
      <section className="py-20 bg-slate-950 border-b border-slate-900 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-500 flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5 text-amber-500" /> Regulatory Code updates & Compliance Logs
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300">RBI Fair Practices Guidelines: Active</span>
            <span className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300">ISO 27001 Data Isolation Audit: Passed</span>
            <span className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300">Calling Hour Boundaries System Audit: Certified</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: BANK RISK MANAGEMENT WEBINARS */}
      <section className="py-24 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Recorded briefings</span>
            <h2 className="text-3xl font-bold font-sora text-white">Bank Risk Advisory Webinars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex gap-4 items-start hover:border-slate-800 transition-all">
              <div className="h-10 w-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                <Video className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase">WEBINAR ARCHIVE</span>
                <h4 className="font-bold text-sm text-white font-sora">Secured Asset Evictions & Police Liaisons Protocols</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Discussion on coordinating physical possessions with local authorities under Section 14 magistrate orders.</p>
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex gap-4 items-start hover:border-slate-800 transition-all">
              <div className="h-10 w-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                <Video className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase">WEBINAR ARCHIVE</span>
                <h4 className="font-bold text-sm text-white font-sora">Pre-Disbursal Verification Forensics & Identity Fraud</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Analyzing synthetic identity trends and geolocated site checking best practices for credit boards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: QUARTERLY DELINQUENCY AUDITS */}
      <section className="py-24 bg-slate-950 border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Market Stats</span>
              <h3 className="text-3xl font-bold font-sora text-white">Market Delinquency Audits</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Review historical default indexes across retail mortgages, agricultural tractor finance, and fintech books.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl">
                <div className="text-2xl font-bold font-sora text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  +18.4%
                </div>
                <div className="text-[9px] font-bold text-slate-500 uppercase mt-2 font-mono tracking-wider">Retail default indices shift</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl">
                <div className="text-2xl font-bold font-sora text-blue-400 flex items-center gap-1">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  -24.8%
                </div>
                <div className="text-[9px] font-bold text-slate-500 uppercase mt-2 font-mono tracking-wider">SLA Timeline reduction results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: INSIGHTS SUBSCRIPTION CTA */}
      <section className="py-24 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-4xl px-4 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Stay Informed</span>
              <h3 className="text-2xl font-bold font-sora text-white">Subscribe to Risk Alerts</h3>
              <p className="text-slate-450 text-xs leading-relaxed">Get monthly legal recovery briefings and RBI caller compliance checklist templates directly.</p>
            </div>
            {subbed ? (
              <div className="text-center py-6 space-y-2">
                <span className="text-xs font-bold text-emerald-400 font-mono">Subscription Confirmed</span>
                <p className="text-[10px] text-slate-500 font-mono">Thank you for subscribing to our briefings list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-500" />
                  <input 
                    required 
                    type="email" 
                    placeholder="Enter corporate email address..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-12 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all shadow-md">
                  Join Briefings list
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10: EXPERT INQUIRY FORM */}
      <section className="py-24 bg-slate-950 text-left" id="inquiry">
        <div className="mx-auto max-w-4xl px-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Advisory Panel</span>
              <h3 className="text-2xl font-bold font-sora text-white">Consult our Legal & Compliance Officers</h3>
              <p className="text-slate-450 text-xs leading-relaxed">
                Connect with our empanelled foreclosure advocates and DRA compliance trainers to address specific portfolio audit queries.
              </p>
            </div>
            {inquirySubmitted ? (
              <div className="text-center py-12 space-y-2">
                <span className="text-xs font-bold text-emerald-400 font-mono">Inquiry Logged</span>
                <p className="text-[10px] text-slate-500 font-mono">Our legal coordinator will email you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-3">
                <input required type="text" placeholder="Institution Name..." className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" />
                <input required type="email" placeholder="Corporate Email..." className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" />
                <textarea required placeholder="Outline specific portfolio queries (TAT, security logs, yard coordinates)..." className="w-full h-24 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"></textarea>
                <button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all shadow-md">
                  Submit Advisor Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
