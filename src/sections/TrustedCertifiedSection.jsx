import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Headset, MapPin, TrendingUp, Users, Building2, Activity } from 'lucide-react';

// Enterprise KPI Metrics Cards
const KPI_CARDS = [
  {
    Icon: TrendingUp,
    value: '₹485 Cr+',
    label: 'Portfolio Managed',
    sublabel: 'Active NPA & recovery book',
    tag: 'PORTFOLIO',
  },
  {
    Icon: Users,
    value: '1,500+',
    label: 'Field Workforce',
    sublabel: 'IIBF DRA certified agents',
    tag: 'DRA CERTIFIED',
  },
  {
    Icon: Building2,
    value: '100+',
    label: 'Institutional Partners',
    sublabel: 'Banks, NBFCs, HFCs & ARCs',
    tag: 'EMPANELLED',
  },
  {
    Icon: ShieldCheck,
    value: '98.4%',
    label: 'Resolution Rate',
    sublabel: 'Statutory & amicable success',
    tag: 'BENCHMARK',
  },
  {
    Icon: Award,
    value: '25+ Yrs',
    label: 'Industry Legacy',
    sublabel: 'Unbroken trust since 2000',
    tag: 'ESTABLISHED',
  },
  {
    Icon: Activity,
    value: '100%',
    label: 'GPS & Telemetry',
    sublabel: 'Live voice & field audit trail',
    tag: 'AUDIT-READY',
  },
];

// Confirmed, management-approved trust facts with clean premium vector icons
const FACTS = [
  { Icon: ShieldCheck, v: 'ISO/IEC 27001', k: 'Certified Information Security' },
  { Icon: Award, v: 'IIBF DRA', k: 'Certified Field Recovery Teams' },
  { Icon: Headset, v: '100%', k: 'Call Recording & Audit Trail' },
  { Icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function TrustedCertifiedSection() {
  return (
    <section className="tc7 bg-white py-12 sm:py-16 relative overflow-hidden" id="trust">
      {/* Header */}
      <div className="fg-wrap tc7-head text-center max-w-5xl mx-auto mb-10 px-4">
        <h2 className="tc7-title text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Proven Performance Built for Institutional Scale
        </h2>
      </div>

      {/* KPI Cards Grid (Apple-Style 3D Cascade Assembly) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {KPI_CARDS.map(({ Icon, value, label, sublabel, tag }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 44, scale: 0.94, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-[#0072bc]/40 hover:shadow-xl hover:shadow-[#0072bc]/10 transition-shadow duration-300 cursor-pointer select-none"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0072bc] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[9.5px] font-bold tracking-wider text-[#0072bc] group-hover:bg-[#0072bc]/10">
                    {tag}
                  </span>
                </div>

                {/* Metric Value */}
                <div className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-none group-hover:text-[#0072bc] transition-colors duration-200">
                  {value}
                </div>
              </div>

              {/* Label & Sublabel */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <span className="block text-xs font-bold text-slate-800 leading-tight">
                  {label}
                </span>
                <span className="block text-[10.5px] font-medium text-slate-500 mt-0.5 leading-snug">
                  {sublabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust & Compliance Facts */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FACTS.map(({ Icon, v, k }, index) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 36, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: '-30px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.02 }}
              className="tc7-fact flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0072bc] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug truncate">{v}</span>
                <span className="block text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight truncate">{k}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

