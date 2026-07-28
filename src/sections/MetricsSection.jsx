import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { History, MapPin, Users, Globe2, Database, Handshake } from 'lucide-react';
import { metrics } from '../data/flagshipHomeData';

const ICONS = { '01': History, '02': MapPin, '03': Users, '04': Globe2, '05': Database, '06': Handshake };

function MetricCard({ m, index }) {
  const [ref, display] = useCounter({ to: m.value });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#0072bc]">
            {React.createElement(ICONS[m.idx] || History, { size: 24, strokeWidth: 2 })}
          </span>
          <span className="font-mono text-xs font-semibold text-slate-300 tracking-wider">{m.idx}</span>
        </div>

        <div className="flex items-baseline gap-1 my-3">
          <span ref={ref} className="text-4xl sm:text-[44px] font-extrabold text-[#0072bc] tracking-tight leading-none">{display}</span>
          <span className="text-lg sm:text-xl font-black text-[#0072bc]">{m.suffix}</span>
        </div>

        <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900 tracking-tight">{m.label}</h3>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed font-normal">{m.desc}</p>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#f0f7ff] border-t border-b border-blue-100/60 relative overflow-hidden" id="metrics">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">INFRASTRUCTURE AT SCALE</span>
          <h2 className="fg-section-title">Operational Depth, Measured in the Field</h2>
          <p className="fg-section-subtitle">Quantifiable institutional standing built over 25+ years of continuous banking recovery and legal enforcement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
