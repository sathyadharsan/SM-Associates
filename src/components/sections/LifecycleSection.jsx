import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.processFlow: {title, desc, steps: [{step, title, desc, outcome}]}`.
// Generic operating-model stepper — works for a service lifecycle, an
// industry resolution workflow, or a solution delivery model.
export default function LifecycleSection({ content }) {
  const flow = content.processFlow;
  if (!flow || !Array.isArray(flow.steps) || flow.steps.length === 0) return null;
  const defaults = SECTION_DEFAULTS.processFlow;

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{flow.title}</h2>
          {flow.desc && <p className="text-slate-600 mt-4">{flow.desc}</p>}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {flow.steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              transition={{ delay: i * 0.06 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
            >
              <span className="h-8 w-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mb-3">{i + 1}</span>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{s.desc}</p>
              {s.outcome && <p className="text-xs font-semibold text-emerald-600 border-t border-slate-200 pt-3">{s.outcome}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
