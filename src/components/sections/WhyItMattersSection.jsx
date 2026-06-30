import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.problemStatement: [{icon, title, desc}]`.
// Premium cards explaining why this matters with icon micro-animations and border glows.
export default function WhyItMattersSection({ content }) {
  const items = content.problemStatement;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.problemStatement;

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-50 px-3 py-1.5 rounded-full">{content.problemStatementEyebrow || defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{content.problemStatementHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ delay: i * 0.05 }}
                className="relative overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-white border border-slate-200/80 hover:border-red-500/20 rounded-2xl p-7 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_24px_50px_-8px_rgba(239,68,68,0.06)] transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 text-red-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base tracking-tight mb-3">{item.title}</h3>
                <ul className="space-y-2 mt-3">
                  {item.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-none" />
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
