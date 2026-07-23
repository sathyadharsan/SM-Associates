import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Landmark, 
  Building2, 
  Coins, 
  Users, 
  ShieldAlert, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2,
  Sparkles,
  Layers,
  Building
} from 'lucide-react';
import { serifHeading } from './shared/typography';
import { resolveIndustryHref } from './shared/crossLinks';

const BANKING_SECTORS = [
  {
    id: 'psu-banks',
    name: 'PSU & Nationalized Banks',
    shortName: 'PSU Banks',
    tag: 'Public Sector Banking',
    icon: Landmark,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-[#0072BC]',
    desc: 'Empaneled recovery partner for nationalized banks across South India, managing complex retail and commercial NPA portfolios.',
    assetClasses: ['Home Loans & Mortgages', 'Agricultural Loans', 'SME Working Capital', 'Commercial Real Estate'],
    protocols: ['SARFAESI Sec 13(2) & 13(4) Execution', 'Symbolic & Physical Possession', 'Magistrate Assistance (Sec 14)', 'DRT Litigation Support'],
    metrics: [
      { k: 'Regional Hubs', v: '19 Offices' },
      { k: 'Standing', v: '25+ Years' },
      { k: 'RBI Audit', v: '100% Compliant' }
    ]
  },
  {
    id: 'private-banks',
    name: 'Private Commercial Banks',
    shortName: 'Private Banks',
    tag: 'Retail & Corporate Credit',
    icon: Building2,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-blue-600',
    desc: 'High-velocity field collections and skip tracing for leading private lenders, ensuring rapid TAT and strict SLA adherence.',
    assetClasses: ['LAP (Loan Against Property)', 'Auto & Vehicle Credit', 'Personal Loans', 'Credit Card Write-offs'],
    protocols: ['Skip Tracing & Field Intelligence', 'DRA-Certified Field Collections', 'Early Bucket Tele-calling', 'Legal Notice Serving'],
    metrics: [
      { k: 'Field Dispatch', v: '15-Min SLA' },
      { k: 'SLA Compliance', v: '99.4%' },
      { k: 'Audit Trail', v: 'GPS Tagged' }
    ]
  },
  {
    id: 'nbfc-hfc',
    name: 'NBFCs & Housing Finance',
    shortName: 'NBFCs & HFCs',
    tag: 'Specialized Asset Lending',
    icon: Coins,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-blue-600',
    desc: 'End-to-end asset repossession, yard management, and auction coordination for non-banking financial companies.',
    assetClasses: ['Affordable Housing Credit', 'Commercial Vehicle Loans', 'Gold & Used Car Loans', 'Equipment Finance'],
    protocols: ['Compliant Vehicle Repossession', 'Audited Yard Custody Transfer', 'Pre-Seizure RTO Intimations', 'Public Auction Management'],
    metrics: [
      { k: 'Turnaround', v: '42% Faster' },
      { k: 'Yard Security', v: '24/7 Audited' },
      { k: 'Recovery Yield', v: '3.4x Higher' }
    ]
  },
  {
    id: 'mfi',
    name: 'Microfinance & Rural Lenders',
    shortName: 'Microfinance (MFI)',
    tag: 'Financial Inclusion',
    icon: Users,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-blue-600',
    desc: 'Respectful, community-focused field outreach for microfinance institutions operating across semi-urban and rural districts.',
    assetClasses: ['Joint Liability Groups (JLG)', 'Micro-enterprise Loans', 'Rural Agriculture Credit', 'Individual Micro-credit'],
    protocols: ['Soft Behavioral Outreach', 'Community Center Mediation', 'Multilingual Field Representatives', 'Fair Practice Isolation'],
    metrics: [
      { k: 'Field Agents', v: '100% Local' },
      { k: 'Language Support', v: '5 Languages' },
      { k: 'Compliance', v: 'RBI Vetted' }
    ]
  },
  {
    id: 'arc',
    name: 'Asset Reconstruction Companies',
    shortName: 'ARCs & Distressed',
    tag: 'Distressed Debt Resolution',
    icon: ShieldAlert,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-blue-600',
    desc: 'Specialized enforcement and physical recovery support for acquired NPA portfolios and distressed corporate assets.',
    assetClasses: ['Acquired Corporate NPA Books', 'Sticky Mortgages', 'Large Commercial Debt', 'Stressed Industrial Units'],
    protocols: ['Physical Asset Realization', 'Enforcement Officer Assistance', 'Title & Asset Forensic Audit', 'Court Receiver Coordination'],
    metrics: [
      { k: 'Realization Rate', v: 'High Yield' },
      { k: 'Legal Panel', v: 'Empaneled' },
      { k: 'Asset Defense', v: '100% Defensible' }
    ]
  },
  {
    id: 'fintech',
    name: 'Fintech & Digital Lenders',
    shortName: 'Fintech Credit',
    tag: 'Digital Credit Platforms',
    icon: BrainCircuit,
    color: '#0072BC',
    gradient: 'from-[#0072BC] to-[#0072BC]',
    lightBg: 'bg-blue-50/80',
    border: 'border-blue-200',
    text: 'text-blue-600',
    desc: 'API-integrated field collections and automated notice dispatch for modern digital lending apps and BNPL providers.',
    assetClasses: ['Instant Digital Personal Credit', 'Buy-Now-Pay-Later (BNPL)', 'Merchant Cash Advances', 'Payroll Micro-loans'],
    protocols: ['API-Driven Case Allocation', 'Automated Digital Notices', 'Geofenced Field Contact', 'Instant Payment Link Trigger'],
    metrics: [
      { k: 'API Sync', v: 'Real-time' },
      { k: 'Escalation', v: 'Automated' },
      { k: 'Resolution TAT', v: '24-48 Hours' }
    ]
  }
];

export default function IndustriesSection({ content }) {
  const { pathname } = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);

  const activeSector = BANKING_SECTORS[activeIdx];
  const activeHref = resolveIndustryHref(activeSector.name);
  const activeLinked = activeHref && activeHref !== pathname;
  const ActiveIcon = activeSector.icon;

  return (
    <section id="target-industries" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 lg:py-28 border-y border-slate-200/80">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Institutional Banking Sectors</span>
          </div>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {content?.targetIndustriesHeading || 'Tailored Recovery Frameworks Across Banking Sectors'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Deploying specialized recovery protocols, certified field teams, and legal enforcement customized for every financial institution category.
          </p>
        </div>

        {/* ═══ 1. TOP SECTOR MATRIX NAVIGATION GRID (6 CARDS) ═══ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {BANKING_SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            const isActive = activeIdx === i;

            return (
              <motion.button
                key={sector.id}
                type="button"
                onClick={() => setActiveIdx(i)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex flex-col items-center justify-between p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? `bg-white border-2 shadow-xl ring-4 ring-slate-100 scale-102`
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
                style={{
                  borderColor: isActive ? sector.color : undefined
                }}
              >
                {/* Active Indicator Top Pill */}
                {isActive && (
                  <span 
                    className="absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase text-white shadow-sm"
                    style={{ backgroundColor: sector.color }}
                  >
                    Active
                  </span>
                )}

                <div 
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors mb-2 ${
                    isActive ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600'
                  }`}
                  style={{
                    backgroundColor: isActive ? sector.color : undefined
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs font-extrabold text-slate-900 leading-tight">
                    {sector.shortName}
                  </span>
                  <span className="block text-[10px] font-medium text-slate-400 mt-0.5">
                    {sector.tag}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ═══ 2. ACTIVE SECTOR COMMAND CARD SHOWCASE STAGE ═══ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border-2 ${activeSector.border} bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden`}
          >
            {/* Sector Decorative Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeSector.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (5 Cols): Overview & Asset Classes */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md"
                      style={{ backgroundColor: activeSector.color }}
                    >
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${activeSector.text}`}>
                        SECTOR 0{activeIdx + 1} • {activeSector.tag}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {activeSector.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {activeSector.desc}
                  </p>
                </div>

                {/* Covered Asset Classes Tag Cloud */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-slate-400" />
                    <span>Primary Asset Classes Managed</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSector.assetClasses.map((item) => (
                      <span 
                        key={item}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column (4 Cols): Specialized Recovery Protocols */}
              <div className="lg:col-span-4 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 pb-2 border-b border-slate-200">
                    Specialized Execution Protocols
                  </h4>
                  <ul className="space-y-3">
                    {activeSector.protocols.map((proto) => (
                      <li key={proto} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${activeSector.text}`} />
                        <span>{proto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                  <span>RBI Fair Practice Protocols</span>
                  <span className="font-bold text-slate-900">100% Vetted</span>
                </div>
              </div>

              {/* Right Column (3 Cols): SLA Performance Badges & CTA */}
              <div className="lg:col-span-3 bg-gradient-to-br from-slate-950 to-blue-950 text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-4">
                    <ShieldCheck className="h-4 w-4 text-blue-400" />
                    <span>Institutional SLA</span>
                  </div>

                  <div className="space-y-4">
                    {activeSector.metrics.map((m) => (
                      <div key={m.k} className="border-b border-white/10 pb-2">
                        <span className="block text-[11px] font-medium text-slate-400">
                          {m.k}
                        </span>
                        <span className="block text-lg font-black text-white">
                          {m.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
