import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch, ArrowRight, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';

const iconMap = { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch };

const DIVISION_CAPABILITIES = {
  'Verification Services': [
    'Contact Point Verification (CPV) for pre-disbursal',
    'Residence & Commercial Premises Audit',
    'Document Authenticity & KYC Validation',
    'Merchant Site Visit & Business Verification'
  ],
  'Collections & Recovery': [
    'Early-Stage Automated Tele-Calling Campaigns',
    'Soft & Hard Delinquency Collections',
    'PDC Collections & Payment Follow-ups',
    'Doorstep Field Recovery & Direct Settlement'
  ],
  'Legal Recovery': [
    'SARFAESI Act Sec 13(2) & 13(4) Enforcement',
    'Cheque Bounce (Sec 138) Legal Notice Issuance',
    'Physical Possession & Custodian Management',
    'Court Litigation Tracking & Advocate Coordination'
  ],
  'Asset Recovery': [
    'Vehicle & Asset Skip Tracing & Tracing',
    'Automobile Repossession & Yard Custody',
    'Property Valuation & Technical Inspection',
    'Public E-Auction Coordination & Bid Management'
  ],
  'Investigation Services': [
    'Skip Tracing for Untraceable Borrowers',
    'Address & Contact Audit Trail Analysis',
    'Corporate & Individual Fraud Investigation',
    'Due Diligence & Asset Ownership Discovery'
  ],
  'Operational & Specialized': [
    'DRA-Compliant Outbound Call Centre Operations',
    'Field Workforce & Officer Deployment',
    'Stressed Asset Portfolio Resolution Consulting',
    'Specialized NPA Management & Recovery Analytics'
  ]
};

export default function ServicesOverviewSection() {
  const [activeDiv, setActiveDiv] = useState(0);
  const activeService = servicesOverview[activeDiv] || servicesOverview[0];
  const Icon = iconMap[activeService.icon] || Search;
  const capabilities = DIVISION_CAPABILITIES[activeService.name] || [
    'Bank Audit Compliant Operations',
    'Dedicated Regional Execution Staff',
    'Real-time MIS & Escalation Matrix',
    'RBI Fair Practices Code Compliant'
  ];

  return (
    <section className="svc6 bg-[#fafbfc] py-24 lg:py-32 border-t border-b border-slate-200/90 relative overflow-hidden" id="services">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">
            BUSINESS DIVISIONS
          </span>
          <h2 className="fg-section-title">
            Six Specialized Business Divisions
          </h2>
          <p className="fg-section-subtitle">
            Integrated verification, field collection, and statutory legal enforcement.
          </p>
        </div>

        {/* ═══ UNIQUE SPLIT INTERACTIVE INSPECTOR LAYOUT (Collekt.ai Style) ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Division Navigation Rail (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-3 sm:p-4 rounded-[32px] border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 px-3 py-2">
              Select Operational Division ({servicesOverview.length})
            </div>

            {servicesOverview.map((s, i) => {
              const DivIcon = iconMap[s.icon] || Search;
              const isActive = activeDiv === i;
              const divNum = String(i + 1).padStart(2, '0');

              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setActiveDiv(i)}
                  onMouseEnter={() => setActiveDiv(i)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0072bc] text-white shadow-lg shadow-[#0072bc]/25 border border-[#0072bc]'
                      : 'bg-slate-50/70 text-slate-800 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#0072bc]/10 text-[#0072bc]'
                    }`}>
                      <DivIcon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0">
                      <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                        DIV-{divNum}
                      </div>
                      <div className="text-sm font-extrabold truncate tracking-tight">
                        {s.name}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Division Showcase Stage (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] border border-slate-200/90 p-8 sm:p-10 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0072bc]/10 text-[#0072bc] shadow-xs">
                        <Icon className="h-7 w-7" strokeWidth={2.2} />
                      </span>
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20">
                          DIVISION {String(activeDiv + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                          {activeService.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
                    {activeService.desc}
                  </p>

                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#0072bc]" />
                      CORE DIVISION CAPABILITIES
                    </div>
                    {capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                        <CheckCircle2 className="h-5 w-5 text-[#0072bc] shrink-0" strokeWidth={2.25} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={activeService.href}
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-[#0072bc] hover:bg-blue-700 text-white font-bold text-sm py-4 px-6 rounded-2xl transition-all duration-200 shadow-md font-mono"
                  >
                    <span>Explore {activeService.name} Capabilities</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
