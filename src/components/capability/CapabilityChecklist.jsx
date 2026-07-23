import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fUp } from '../sections/shared/motion';

// Component A from the approved IA blueprint — replaces a "What we offer"
// paragraph with a Traditional-Agency-vs-SM checklist. `traditional` is a
// short list of what a conventional agency does (often just one line);
// `capabilities` is SM's full, specific list for this exact service.
export default function CapabilityChecklist({ traditional = [], capabilities = [] }) {
  if (!capabilities.length) return null;

  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
      className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden bg-white"
    >
      <div className="bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-6 sm:p-8">
        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-slate-400">Traditional Agency</span>
        <ul className="mt-4 space-y-2.5">
          {traditional.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 sm:p-8">
        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0072bc]">SM Associates</span>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
          {capabilities.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-semibold text-slate-800">
              <Check className="mt-0.5 h-4 w-4 text-[#0072bc] shrink-0 stroke-[3]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
