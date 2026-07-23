import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lightbulb, Cpu } from 'lucide-react';
import { fUp } from '../sections/shared/motion';

const LAYER_ICON = { 'Data & Intake': Database, Intelligence: Lightbulb, Execution: Cpu };

// Component C from the approved IA blueprint — three named systems max,
// each tied to one RecoveryOS layer, so "Technology Used" never becomes a
// generic "we use modern tech" line. `highlight` names the one layer this
// specific page's flagship capability draws from most (visually emphasised);
// pass the full technologyLayers array from siteWideCapabilities.js.
export default function TechnologyStrip({ layers = [], highlight }) {
  if (!layers.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {layers.map((l, i) => {
        const Icon = LAYER_ICON[l.layer] || Cpu;
        const isHighlight = l.layer === highlight;
        return (
          <motion.div
            key={l.layer}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fUp}
            transition={{ delay: i * 0.06 }}
            className={
              isHighlight
                ? 'rounded-2xl border border-[#0072bc]/30 bg-[#0072bc]/5 p-5'
                : 'rounded-2xl border border-slate-200 bg-white p-5'
            }
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0072bc]/10 text-[#0072bc] mb-3">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <h4 className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-slate-400 mb-2">{l.layer}</h4>
            <ul className="space-y-1">
              {l.items.map((item) => (
                <li key={item} className="text-[13px] text-slate-700 leading-snug">{item}</li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
