import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.processFlow: {title, desc, steps: [{step, title, desc, outcome}]}`.
// Premium operating-model stepper with active line connectors and spring transitions.
export default function LifecycleSection({ content }) {
  const flow = content.processFlow;
  if (!flow || !Array.isArray(flow.steps) || flow.steps.length === 0) return null;
  const defaults = SECTION_DEFAULTS.processFlow;

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{flow.title}</h2>
          {flow.desc && <p className="text-slate-600 mt-4 leading-relaxed">{flow.desc}</p>}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {flow.steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 hover:border-blue-500/30 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.02)] hover:shadow-[0_24px_50px_-8px_rgba(37,99,235,0.06)] transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-center justify-between mb-4">
                <span className="h-9 w-9 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-none shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:scale-110 transition-transform duration-300">{i + 1}</span>
                <span className="text-[10px] font-bold text-slate-350 tracking-widest uppercase">Step 0{i + 1}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-2.5">{s.title}</h3>
              <p className="text-[12px] leading-relaxed text-slate-655 mb-4">{s.desc}</p>
              {s.outcome && (
                <div className="border-t border-slate-200/60 pt-3.5 mt-auto">
                  <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {s.outcome}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
