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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-slate-200/90 bg-white/70 backdrop-blur-xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0072bc]/30 transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc]">
          {React.createElement(ICONS[m.idx] || History, { size: 20, strokeWidth: 2.2 })}
        </span>
        <span className="font-mono text-[10px] font-bold text-slate-300 tracking-widest">{m.idx}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span ref={ref} className="text-4xl sm:text-[42px] font-black text-[#0072bc] tracking-tight leading-none">{display}</span>
        <span className="text-lg sm:text-xl font-black text-[#0072bc]">{m.suffix}</span>
      </div>
      <h3 className="mt-3 text-sm font-extrabold text-slate-900 tracking-tight">{m.label}</h3>
      <p className="mt-1 text-[12.5px] text-slate-500 leading-snug">{m.desc}</p>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-b border-slate-200/90 relative overflow-hidden" id="metrics">
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
