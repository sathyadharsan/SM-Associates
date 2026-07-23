import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { ShieldCheck, Award, MapPin, Building2, Users } from 'lucide-react';

const STATS = [
  {
    value: 25,
    prefix: '',
    suffix: '+',
    label: 'Years Operational',
    sublabel: 'Established Y2K (2000)',
    icon: Award
  },
  {
    value: 19,
    prefix: '',
    suffix: '',
    label: 'Regional Branches',
    sublabel: '5 South Indian States',
    icon: MapPin
  },
  {
    value: 50,
    prefix: '',
    suffix: '+',
    label: 'Bank & NBFC Partners',
    sublabel: 'Tier-1 Regulated Lenders',
    icon: Building2
  },
  {
    value: 250,
    prefix: '',
    suffix: '+',
    label: 'DRA Field Officers',
    sublabel: 'IIBF Certified Staff',
    icon: Users
  },
  {
    value: 1500,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'Stressed Assets Managed',
    sublabel: 'Verified Audit Trail',
    icon: ShieldCheck
  }
];

function StatItem({ stat, index }) {
  const [ref, display] = useCounter({ to: stat.value });
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col items-center text-center px-4 sm:px-6 py-4 lg:border-r border-slate-200/80 last:border-none group"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc] mb-3 group-hover:scale-110 transition-transform duration-200">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>

      <div className="flex items-baseline justify-center gap-0.5">
        {stat.prefix && <span className="text-2xl sm:text-3xl font-black text-[#0072bc]">{stat.prefix}</span>}
        <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0072bc] tracking-tight leading-none">
          <span ref={ref}>{display}</span>
        </span>
        {stat.suffix && <span className="text-xl sm:text-2xl font-black text-[#0072bc]">{stat.suffix}</span>}
      </div>

      <h3 className="mt-2.5 text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
        {stat.label}
      </h3>
      <p className="mt-1 text-xs font-mono font-medium text-slate-500">
        {stat.sublabel}
      </p>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-b border-slate-200/90 relative overflow-hidden font-inter" id="metrics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 divide-y lg:divide-y-0 divide-slate-100">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
