import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from '../sections/shared/motion';
import { serifHeading } from '../sections/shared/typography';

// "Why This Capability Matters" — one per category (approved IA blueprint,
// section 3 of the evolution). Factual Traditional-vs-SM structural
// difference plus its business impact — never comparative marketing copy,
// so no adjectives like "best" or "leading" belong in this content.
export default function CapabilityDifferentiator({ category, traditional, sm, impact }) {
  if (!traditional || !sm || !impact) return null;

  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
      className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
    >
      <div className="px-6 sm:px-8 pt-6 pb-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-slate-400">Why This Capability Matters</span>
        <h3 style={serifHeading} className="mt-1 text-xl font-bold text-slate-900">{category}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 sm:p-8 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
          <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Traditional Agency Approach</h5>
          <p className="text-[13.5px] text-slate-600 leading-relaxed">{traditional}</p>
        </div>
        <div className="p-6 sm:p-8">
          <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0072bc] mb-2.5">SM Associates Approach</h5>
          <p className="text-[13.5px] text-slate-600 leading-relaxed">{sm}</p>
        </div>
      </div>
      <div className="flex items-start gap-3 px-6 sm:px-8 py-5 bg-[#0072bc]/5 border-t border-[#0072bc]/20">
        <span className="shrink-0 mt-0.5 font-mono text-[9.5px] font-bold uppercase tracking-widest text-[#0072bc] bg-white border border-[#0072bc]/30 px-2.5 py-1 rounded-full">Impact</span>
        <p className="text-[13.5px] font-semibold text-slate-900 leading-relaxed">{impact}</p>
      </div>
    </motion.div>
  );
}
