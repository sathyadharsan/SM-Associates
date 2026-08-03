import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Headset, MapPin, TrendingUp, Users, Building2, Activity } from 'lucide-react';

// Enterprise KPI Metrics Cards
const KPI_CARDS = [
  {
    Icon: Award,
    value: '25+ Yrs',
    label: 'Industry Legacy',
    sublabel: 'Unbroken trust since 2000',
    tag: 'ESTABLISHED',
  },
  {
    Icon: Building2,
    value: '100+',
    label: 'Institutional Partners',
    sublabel: 'Banks, NBFCs, HFCs & ARCs',
    tag: 'EMPANELLED',
  },
  {
    Icon: MapPin,
    value: '19 Branches',
    label: '5 States Network',
    sublabel: 'Pan-South India footprint',
    tag: 'FOOTPRINT',
  },
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
    Icon: ShieldCheck,
    value: '98.4%',
    label: 'Resolution Rate',
    sublabel: 'Statutory & amicable success',
    tag: 'BENCHMARK',
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
      <div className="fg-wrap tc7-head text-center max-w-5xl mx-auto mb-10 px-4 flex flex-col items-center justify-center">
        <h2 className="tc7-title text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight text-center">
          Proven Performance Built for Institutional Scale
        </h2>
        {/* Premium Level Accent Line */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
          <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
        </div>
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
    </section>
  );
}

