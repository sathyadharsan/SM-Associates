import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, TrendingUp, Users, Building2, Database, Map } from 'lucide-react';

// Enterprise KPI Metrics Cards (2 Rows x 4 Cards)
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
    label: '6 States Network',
    sublabel: 'Pan-South India footprint',
    tag: 'FOOTPRINT',
  },
  {
    Icon: TrendingUp,
    value: '₹10,000 Cr+',
    label: 'Portfolio Managed',
    sublabel: 'Active NPA & recovery book',
    tag: 'PORTFOLIO',
  },
  {
    Icon: Database,
    value: '1M+',
    label: 'Records Managed',
    sublabel: 'Active accounts & portfolio history',
    tag: 'DATA SCALE',
  },
  {
    Icon: Users,
    value: '1,500+',
    label: 'Field Officers & Local Team',
    sublabel: 'Local field officers across all South India districts',
    tag: 'DRA CERTIFIED',
  },
  {
    Icon: Map,
    value: 'All Districts',
    label: 'Pan-South India Coverage',
    sublabel: 'Local operational presence in every district',
    tag: 'LOCAL FOOTPRINT',
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
  { Icon: MapPin, v: 'GPS-Enabled', k: 'Ground Operations' },
];

export default function TrustedCertifiedSection() {
  const [activeCard, setActiveCard] = React.useState(null);

  return (
    <section className="tc7 bg-white py-12 sm:py-16 relative overflow-hidden" id="trust">
      {/* Header */}
      <div className="fg-wrap tc7-head text-center max-w-5xl mx-auto mb-10 px-4 flex flex-col items-center justify-center">
        <h2 className="tc7-title text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight text-center">
          Proven Performance Built for Institutional Scale
        </h2>
      </div>

      {/* KPI Cards Grid (2 Rows x 4 Cards Layout with Dark Mode Toggle on Click & Hover) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {KPI_CARDS.map(({ Icon, value, label, sublabel, tag }, index) => {
            const isActive = activeCard === index;
            return (
              <motion.div
                key={label}
                onClick={() => setActiveCard(isActive ? null : index)}
                initial={{ opacity: 0, y: 44, scale: 0.94, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex flex-col justify-between rounded-2xl p-4 sm:p-5 border transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'bg-gradient-to-br from-[#005291] via-[#0072bc] to-[#021a38] border-[#0072bc] shadow-2xl shadow-[#0072bc]/35 text-white scale-[1.02] ring-2 ring-[#0072bc]/60'
                    : 'bg-white border-transparent shadow-md shadow-slate-200/60 text-slate-900 hover:bg-gradient-to-br hover:from-[#005291] hover:via-[#0072bc] hover:to-[#021a38] hover:border-[#0072bc] hover:shadow-2xl hover:shadow-[#0072bc]/35 hover:text-white'
                }`}
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-[#0072bc] shadow-md scale-105'
                          : 'bg-blue-50 text-[#0072bc] group-hover:bg-white group-hover:text-[#0072bc] group-hover:shadow-md group-hover:scale-110'
                      }`}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Metric Value */}
                  <div
                    className={`text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight leading-none transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-slate-900 group-hover:text-white'
                    }`}
                  >
                    {value}
                  </div>
                </div>

                {/* Label & Sublabel */}
                <div className="mt-3">
                  <span
                    className={`block text-xs font-bold leading-tight transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-slate-800 group-hover:text-white'
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`block text-[10.5px] font-medium mt-0.5 leading-snug transition-colors duration-200 ${
                      isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {sublabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

