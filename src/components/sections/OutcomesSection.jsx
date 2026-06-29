import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.outcomesHeading`, `content.outcomes: [{title, desc, value}]`.
// Centered icon-circle card layout, matching the approved visual reference.
export default function OutcomesSection({ content }) {
  const items = content.outcomes;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.outcomes;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.outcomesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((o, i) => (
            <motion.div
              key={o.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
            >
              <div className="h-11 w-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{o.title}</h3>
              <ul className="space-y-1.5 mb-3">
                {o.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 flex-none" />
                    <span>{s.trim()}.</span>
                  </li>
                ))}
              </ul>
              {o.value && <p className="text-xs font-semibold text-blue-600 border-t border-slate-100 pt-3">{o.value}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
