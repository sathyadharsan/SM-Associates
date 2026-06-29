import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.problemStatement: [{icon, title, desc}]`. Business-agnostic
// — works for a service's risk list, an industry's pain points, or a
// solution's challenges, since it's just "cards explaining why this matters."
export default function WhyItMattersSection({ content }) {
  const items = content.problemStatement;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.problemStatement;

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{content.problemStatementEyebrow || defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.problemStatementHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                transition={{ delay: i * 0.05 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="h-10 w-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <ul className="space-y-1.5 mt-2">
                  {item.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 flex-none" />
                      <span>{s.trim()}.</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
