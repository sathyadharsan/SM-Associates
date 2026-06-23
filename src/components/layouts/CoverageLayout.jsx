import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Activity, 
  Shield, 
  Phone,
  Building2,
  CheckCircle2,
  Map,
  Compass,
  FileCheck
} from 'lucide-react';
import { locations } from '../../data/LocationData';

const fUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

export function CoverageLayout({ content }) {
  const [selectedState, setSelectedState] = useState('Tamil Nadu');

  const states = [
    { name: 'Tamil Nadu', branches: ['chennai', 'coimbatore', 'madurai', 'trichy', 'salem', 'tirunelveli'] },
    { name: 'Karnataka', branches: ['bengaluru'] },
    { name: 'Kerala', branches: ['kochi'] },
    { name: 'Telangana', branches: ['hyderabad'] },
    { name: 'Other Regions', branches: ['pune', 'ahmedabad', 'jaipur', 'lucknow'] }
  ];

  const activeStateObj = states.find(s => s.name === selectedState);
  const filteredBranches = locations.filter(loc => activeStateObj?.branches.includes(loc.id));

  return (
    <div className="relative min-h-screen bg-white text-[#0a1128] overflow-hidden font-inter">
      {/* Background radial coordinates grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35 pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-center overflow-hidden">
        {/* Dynamic neon grid nodes */}
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
            <Compass className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
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

      {/* SECTION 2: STATE OVERVIEW */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Regional Coordinates</span>
          <h3 className="text-2xl font-bold font-sora text-[#0a1128]">Decentralized Regional Hubs Presence</h3>
          <p className="text-slate-600 text-xs leading-relaxed max-w-3xl font-inter">
            We manage credit defaults outreach, pre-disbursal checks, and symbolic foreclosure notices directly out of physically staffed branches. This minimizes geofenced travel delays and matches local police procedures.
          </p>
        </div>
      </section>

      {/* SECTION 3: REGIONAL CAPACITY GRID */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <div className="text-blue-600"><Users className="h-5 w-5" /></div>
              <h4 className="font-bold text-xs font-sora text-[#0a1128]">Local Staff Capacity</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">Each region maintains active call desks and local ground field investigators.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <div className="text-blue-600"><Building2 className="h-5 w-5" /></div>
              <h4 className="font-bold text-xs font-sora text-[#0a1128]">Secure Yards Nodes</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">Equipped with 24/7 security watch logs and inventory checklists for vehicle assets.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <div className="text-blue-600"><Compass className="h-5 w-5" /></div>
              <h4 className="font-bold text-xs font-sora text-[#0a1128]">Geofenced Routes</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">Visit check-in coordinates are verified and synchronized back to core banking systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCAL MARKET DYNAMICS */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Operational Focus</span>
          <h3 className="text-2xl font-bold font-sora">Delinquency Mitigation Loops</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl font-inter">
            Lenders coordinate local collections and foreclosure filings. Branch managers monitor local court calendars (e.g. local District Magistrates approval timelines) to expedite secured asset evictions.
          </p>
        </div>
      </section>

      {/* SECTION 5: PHYSICAL OFFICES NETWORK (Interactive Tab Selector) */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Branch Networks Selector</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Active Geographic Hubs</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
            {states.map((st) => (
              <button
                key={st.name}
                onClick={() => setSelectedState(st.name)}
                className={`px-6 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedState === st.name 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                }`}
              >
                {st.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredBranches.map((loc) => (
                <motion.div
                  key={loc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-slate-250 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase bg-slate-100 px-2.5 py-1 rounded-full text-slate-700">{loc.region}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-base font-sora text-[#0a1128]">{loc.name} Branch</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{loc.coverage}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-500 font-mono">
                      <div className="flex justify-between"><span>Sourcing Team</span><span>{loc.team} Staff</span></div>
                      <div className="flex justify-between"><span>Active Ledgers</span><span>{loc.casesManaged}</span></div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-blue-600">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {loc.coverageRadius} Radius</span>
                    <span className="text-slate-400 font-normal">Active Hub</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 6: BRANCH MANAGER TELEMETRY CARDS */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A021] font-mono">Regional Managers Desk</span>
          <h3 className="text-2xl font-bold font-sora">Executive Branch Coordinators</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl font-inter">
            All regional branches operate under direct managing directors oversight. Dialing schedules and ground evictions notices audits are checked weekly by corporate compliance heads.
          </p>
        </div>
      </section>

      {/* SECTION 7: COMPLIANCE LOOPS VETTING */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-amber-400" /> Regulatory Code of Conduct Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">RBI Fair Practices Compliant</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">DRA certified calling representatives</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: GROUND SLA TRACK */}
      <section className="py-20 bg-white text-left border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Ground Precision</span>
          <h3 className="text-2xl font-bold font-sora">SLA Timelines and Travel Geotags</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl">
            Pre-disbursal candidate profile verification checks are completed within average 48 Hours. On-ground collections pickup coordinates are geofenced to block audit errors.
          </p>
        </div>
      </section>

      {/* SECTION 9: OPERATIONS DASHBOARD CONNECTION DETAILS */}
      <section className="py-20 bg-slate-50 text-left border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Database Integration</span>
              <h3 className="text-2xl font-bold font-sora">Core Banking SFTP Transaction Syncs</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Lenders upload defaulted lists via secure SSH FTP folders daily. Ground dispatch logs sync back to bank risk panels automatically.
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs space-y-2">
              <div className="flex gap-2 items-center"><FileCheck className="h-4 w-4 text-emerald-400" /> Secure SSL Connection Sync</div>
              <div className="flex gap-2 items-center"><FileCheck className="h-4 w-4 text-emerald-400" /> Daily transaction log export</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CASE OUTCOMES */}
      <section className="py-20 bg-white text-left">
        <div className="mx-auto max-w-5xl px-4 bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Resolution Sourcing</span>
          <h3 className="text-2xl font-bold font-sora text-[#0a1128]">[CLIENT COUNT]+ Lenders Empanelled</h3>
          <p className="text-slate-500 text-xs leading-relaxed font-inter">
            Over the past decades, we have resolved high-delinquency portfolios and vehicle repossession cases across South India.
          </p>
        </div>
      </section>

      {/* SECTION 11: CLIENT TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150 text-left">
        <div className="mx-auto max-w-4xl px-4 bg-white border border-slate-200 rounded-[32px] p-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">Partners Feedback</span>
          <p className="italic text-slate-600 text-xs leading-relaxed">
            "SM Associates branch network coverage in remote districts helped us accelerate agricultural tractor repossession timeline SLA loops."
          </p>
          <div className="text-[10px] font-bold text-[#0a1128] font-mono">— NBFC Chief Risk Officer</div>
        </div>
      </section>

      {/* SECTION 12: REGIONAL PROPOSAL CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center bg-slate-900 border border-slate-800 rounded-[32px] p-12 text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold font-sora">Empanel Our Regional Operations Desk</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Connect with a local branch coordinator or schedule an onboarding meeting today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-all hover:scale-[1.02]">
            Connect with Branch Head <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
