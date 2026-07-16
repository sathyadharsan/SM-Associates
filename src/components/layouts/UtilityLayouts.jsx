import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Phone, 
  Mail, 
  Lock, 
  ShieldAlert,
  Users,
  Shield,
  Activity,
  FileCheck,
  ChevronDown,
  Compass
} from 'lucide-react';

const fUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

// ----------------------------------------------------
// 1. CAREERS LAYOUT (12 Content Sections)
// ----------------------------------------------------
export function CareersLayout({ content }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const mockJobs = [
    { title: "Ground CPV Representative", type: "On-Field / Full-Time", location: "Coimbatore & Madurai Branches", desc: "Execute pre-disbursal residence, office and business verifications. Gather geotagged photos, confirm neighbor validation files, and submit logs." },
    { title: "Outbound Dialer caller", type: "Call Center / Shift Base", location: "Chennai HQ", desc: "Conduct outbound retail collections calling. Follow RBI fair practices guidelines, update dialer entries, and record promises to pay." },
    { title: "Legal Recovery Liaison", type: "Legal Support / Full-Time", location: "Bengaluru & Kochi Offices", desc: "Liaise with panels of advocates, draft Sec 13(2)/13(4) statutory notices, file Sec 14 petitions with District Magistrates, and coordinate symbolic possessions." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-[#0a1128] font-inter overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 font-mono"
          >
            <Briefcase className="h-3.5 w-3.5" />
            {content.eyebrow}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: COMPANY MISSION */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Corporate Mission</span>
          <h3 className="text-2xl font-bold font-sora">DRA Certified Ground Mediation Sourcing</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            We are dedicated to building India's most compliant B2B credit recovery operations and CPV verification network. We hire and train representatives to adhere to RBI fair practices.
          </p>
        </div>
      </section>

      {/* SECTION 3: WORK CULTURE */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <h4 className="font-bold text-xs font-sora">Strict compliance</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">We enforce fair practices calling hour limits and check visit geotags.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <h4 className="font-bold text-xs font-sora">Continuous training</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">All call center and field representatives undergo RBI DRA certifications check loops.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <h4 className="font-bold text-xs font-sora">Competitive growth</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">Performance-driven commissions and direct branch manager promotion paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OPEN ROLES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Open Opportunities</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Active Positions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockJobs.map((job, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Briefcase className="h-5 w-5" /></div>
                    <span className="text-[10px] font-bold uppercase bg-slate-200 px-2.5 py-0.5 rounded text-slate-700">{job.type}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-sora text-[#0a1128]">{job.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{job.desc}</p>
                </div>
                <button onClick={() => setSelectedJob(job)} className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all">
                  Apply For Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS / PERKS CARDS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Employee Support</span>
          <h3 className="text-2xl font-bold font-sora">Corporate Welfare Perks</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            We provide structured employee health programs, monthly performance payouts, and travel allowances for all ground verification check officers.
          </p>
        </div>
      </section>

      {/* SECTION 6: EMPLOYEE TESTIMONIALS */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-4xl px-4 bg-slate-50 border border-slate-250 rounded-[32px] p-8 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Staff Feedback</span>
          <p className="italic text-slate-600 text-xs leading-relaxed font-inter">
            "The training program at the DRA Academy helped me verify credit delinquency cases with high confidence while adhering to RBI guidelines."
          </p>
          <div className="text-[10px] font-bold text-[#0a1128] font-mono">— Ground CPV Officer</div>
        </div>
      </section>

      {/* SECTION 7: DRA TRAINING ACADEMY DETAILS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">DRA Academy</span>
          <h3 className="text-2xl font-bold font-sora">RBI DRA Vetting School</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl font-inter">
            Before physical client dispatch, all call center and ground outreach staff are audited for calling etiquette standards and pass RBI DRA certification testing.
          </p>
        </div>
      </section>

      {/* SECTION 8: BRANCH NETWORK */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Geographic Footprint</span>
          <h3 className="text-2xl font-bold font-sora">Operational Branch Locations</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Our teams operate directly out of Chennai HQ and [BRANCH COUNT] branches across Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh, and Puducherry.
          </p>
        </div>
      </section>

      {/* SECTION 9: APPLICATION INGESTION WORKFLOW */}
      <section className="py-20 bg-slate-50 text-left border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Ingestion Pipeline</span>
          <h3 className="text-2xl font-bold font-sora">Candidate Onboarding Stages</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            1. Resume screening checks &gt; 2. Local office interviews &gt; 3. DRA compliance training &gt; 4. Branch dispatch validation.
          </p>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE CODES */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400">Zero Tolerance Regulatory Conduct</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">RBI Call boundaries 08:00 AM - 07:00 PM</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">No third-party disclosures check logs</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center mb-8">FAQ</h3>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <button onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} className="w-full flex justify-between text-xs font-bold text-[#0a1128] font-sora text-left">
                <span>Do I need a DRA certificate to apply?</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              {activeFaq === 0 && <p className="mt-3 text-xs text-slate-500 border-t pt-3 leading-relaxed">We sponsor candidate training and RBI DRA certification loops for all empaneled employees.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: APPLICATION CTA FORM */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6 shadow-xl">
          <h2 className="text-2xl font-bold font-sora">Begin Your Application</h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs leading-relaxed">
            Select one of the open roles above to submit your resume coordinates and compliance details directly to our HR dispatch desk.
          </p>
        </div>
      </section>

      {/* Modal Apply drawer */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-left">
              <h3 className="text-lg font-bold font-sora text-[#0a1128]">Apply: {selectedJob.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input required type="text" placeholder="Name..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-[#0a1128]" />
                <input required type="email" placeholder="Email..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-[#0a1128]" />
                <button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 text-center transition-all">Submit application</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ----------------------------------------------------
// 2. CONTACT LAYOUT (12 Content Sections)
// ----------------------------------------------------
export function ContactLayout({ content }) {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleProposal = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] font-inter overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 font-mono"
          >
            <Compass className="h-3.5 w-3.5 animate-pulse" />
            {content.eyebrow}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: BOARD DIRECTORY */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Direct Escalations</span>
          <h3 className="text-2xl font-bold font-sora">Executive Coordination Desk</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Lenders escalate empanelment proposals directly to board directors. MD Shri. M. Jebaraj supervises all SARFAESI notice enforcements.
          </p>
        </div>
      </section>

      {/* SECTION 3: REGISTERED ADDRESS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <span className="text-xs font-bold text-[#C5A021] font-mono">Address Coordinates</span>
              <h4 className="font-bold text-sm font-sora">Chennai Headquarters</h4>
              <p className="text-slate-500 text-xs leading-relaxed">No.8, Ground Floor, Gandhi Nagar Second Street, Kodambakkam, Chennai - 600024.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <span className="text-xs font-bold text-blue-600 font-mono">Telephone Desk</span>
              <h4 className="font-bold text-sm font-sora">Outreach channels</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Landline: 044-48600024 / 48600042</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TELEPHONE LOGS */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Branch Lines</span>
          <h3 className="text-2xl font-bold font-sora">Fax & Dial Log Directory</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Branch phone networks are monitored by corporate auditors. Outbound call lines strictly log client IDs to block compliance check errors.
          </p>
        </div>
      </section>

      {/* SECTION 5: SECURE FTP DETAILS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Ingestion portal</span>
          <h3 className="text-2xl font-bold font-sora">Secure SSL FTP parameters</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Banks transmit defaulted client lists through SSH encrypted port logs daily. Reconciled payment logs are exported weekly.
          </p>
        </div>
      </section>

      {/* SECTION 6: INGESTION PROPOSAL FORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 bg-slate-50 border border-slate-200 rounded-[32px] p-8 text-left shadow-lg">
          <h3 className="text-2xl font-bold font-sora text-[#0a1128] mb-6">Submit Empanelment Proposal</h3>
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
              <p className="font-bold text-xs">Proposal Request Logged Successfully</p>
            </div>
          ) : (
            <form onSubmit={handleProposal} className="space-y-4">
              <input required type="text" placeholder="Banking Institution Name..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs" />
              <input required type="email" placeholder="Corporate Contact Email..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs" />
              <textarea required rows="4" placeholder="Detail empanelment coordinates or ground verification checking needed..." className="w-full rounded-xl border border-slate-250 bg-white px-4 py-3 text-xs"></textarea>
              <button type="submit" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 text-center transition-all shadow-md">
                Submit Proposal Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 7: STATE TAB SELECTOR */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Branch Networks</span>
          <h3 className="text-2xl font-bold font-sora">Decentralized Regional Offices</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            We cover South India branches network out of physical branch offices. Select coverage tabs on Coverage page to verify managers coordinates.
          </p>
        </div>
      </section>

      {/* SECTION 8: SLA COMMITMENTS */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Precision SLA</span>
          <h3 className="text-2xl font-bold font-sora">Timeline TAT Targets</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            CPV candidate document checks are completed within average 48 Hours. SEC 13 demand notices are served within 3 Days from file assignment log.
          </p>
        </div>
      </section>

      {/* SECTION 9: CONDUCT STANDARDS */}
      <section className="py-20 bg-slate-50 text-left border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Outreach Ethics</span>
          <h3 className="text-2xl font-bold font-sora">Mandatory RBI caller audit protocols</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            Outbound dialing hours bounds are strictly locked. Caller recordings are audited daily to block fair practices violation logs.
          </p>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE AUDITING */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400">Zero Tolerance Regulatory Conduct</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">100% DRA Certified Staff</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">ISO Data Security check loops</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center mb-8">FAQ</h3>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <button onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} className="w-full flex justify-between text-xs font-bold text-[#0a1128] font-sora text-left">
                <span>What is the TAT for proposal review?</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              {activeFaq === 0 && <p className="mt-3 text-xs text-slate-500 border-t pt-3 leading-relaxed">Managing directors review empanelment proposal coordinates and submit pricing quotes within 48 Hours.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: PROPOSAL CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="mx-auto max-w-4xl px-4 bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold font-sora">Empanel SM Associates today</h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs leading-relaxed">
            Partner with South India's premier B2B credit risk and legal foreclosure coordinator.
          </p>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 3. LOGIN LAYOUT (12 Content Sections)
// ----------------------------------------------------
export function LoginLayout({ content }) {
  const [success, setSuccess] = useState(false);
  const [mfaChecked, setMfaChecked] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden font-inter text-left">
      {/* Background radial overlays */}
      <div className="absolute top-[-20%] left-[-20%] h-[600px] w-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-blue-400 uppercase font-mono"
          >
            <Lock className="h-3.5 w-3.5" /> Secure Client Console
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight"
          >
            Lender Portal Sign-In
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Verify credentials and Multi-Factor Auth to access recovery data.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: CORPORATE LOGIN TERMINAL */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-4">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md space-y-6">
            {success ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-sm">Authentication Validated</h4>
                <p className="text-slate-400 text-xs">Accessing dashboard ledger...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase font-mono">Corporate User ID</label>
                  <input required type="text" placeholder="e.g. bank_axis_user01" className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase font-mono">Terminal Password</label>
                  <input required type="password" placeholder="••••••••••••" className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="mfa" checked={mfaChecked} onChange={() => setMfaChecked(!mfaChecked)} className="rounded bg-white/5 border-white/10 text-blue-600 focus:ring-0 cursor-pointer" />
                  <label htmlFor="mfa" className="text-[10px] font-bold text-slate-400 uppercase cursor-pointer select-none">Verify OTP / Mobile MFA Check</label>
                </div>
                <button type="submit" disabled={!mfaChecked} className={`w-full rounded-xl text-xs font-bold py-3.5 text-center shadow-lg transition-all ${mfaChecked ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'}`}>
                  Sign In to Vault
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: 256-BIT ENCRYPTION DETAILS */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Data Protection</span>
          <h3 className="text-2xl font-bold font-sora">Bank-Grade Database Security</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            All transaction files and geolocated visit logs are encrypted at rest using AES-256 coordinates loops. Database nodes access requires pre-vetted banking IP ranges.
          </p>
        </div>
      </section>

      {/* SECTION 4: ISO SECURITY LOGS */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">System Auditing</span>
          <h3 className="text-2xl font-bold font-sora">ISO 27001 Data Custody Protocols</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            We are audited annually by third-party bank cybersecurity auditors. Connection logs sync parameters are validated monthly to prevent synthetic data leaks.
          </p>
        </div>
      </section>

      {/* SECTION 5: USER SECURITY GUIDELINES */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">User Codes</span>
          <h3 className="text-2xl font-bold font-sora">Corporate credentials safety directives</h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
            Users must update passcodes every 90 Days. Login session tokens expire within 15 Minutes of terminal inactivity.
          </p>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE CODE GUIDELINES */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Regulatory loop</span>
          <h3 className="text-2xl font-bold font-sora">Outbound Caller boundaries</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Portals disable manual phone number exports to comply with data privacy policies and RBI Fair Practices codes.
          </p>
        </div>
      </section>

      {/* SECTION 7: BRANCH NETWORK SECURITY */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Office Vetting</span>
          <h3 className="text-2xl font-bold font-sora">Local physical data safety</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            All regional branches operate CCTV watch logs and restrict physical paper files storage to block borrower data exposures.
          </p>
        </div>
      </section>

      {/* SECTION 8: INGESTION FTP PARAMETERS */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Ingestion ports</span>
          <h3 className="text-2xl font-bold font-sora">SFTP SSH coordinates</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Case directories sync parameters require authorized private keys files coordinates to establish upload handshakes.
          </p>
        </div>
      </section>

      {/* SECTION 9: AUDITABLE VOICE LOG DETAILS */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Outbound Auditing</span>
          <h3 className="text-2xl font-bold font-sora">Call logger archives</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Outbound dialer calling logs are archived automatically and forwarded to client banking audit panels monthly.
          </p>
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE STATUS */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400">Security Certifications Vetting</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">ISO 27001 Certified Custody</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">RBI Fair Practices Compliant System</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-xl font-bold font-sora text-center text-white mb-8 font-semibold">Security FAQ</h3>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-xl p-4 bg-[#0b0f19]">
              <h5 className="text-xs font-bold font-sora text-white">How is MFA configured?</h5>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">Users must bind corporate mobile phone numbers to receive OTP coordinates codes during sign-in verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: SYSTEM STATUS CTA */}
      <section className="py-20 bg-[#050914] text-center">
        <div className="mx-auto max-w-4xl px-4 bg-blue-600 rounded-[32px] p-12 text-white space-y-6 shadow-2xl">
          <h2 className="text-3xl font-extrabold font-sora">Security System Status: Online</h2>
          <p className="text-blue-100 max-w-md mx-auto text-xs leading-relaxed">
            All SSH FTP servers, outbound dialers logging pipelines, and geofencing systems are fully functional.
          </p>
        </div>
      </section>
    </div>
  );
}
