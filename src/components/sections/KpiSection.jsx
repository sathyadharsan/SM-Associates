import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.kpiCards: [{icon, title, value}]`.
// `value` is optional. Real, approved figures render as a plain number.
// Unapproved figures must be written as a literal `[DRAFT]` string — never
// invent a number; render those distinctly with a pending-approval tag so
// nothing unverified is presented as fact.
// Lean icon + number + title card, matching the approved visual reference —
// this section intentionally carries no desc/businessValue copy.
export default function KpiSection({ content }) {
  const items = content.kpiCards;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.kpi;

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{content.kpiEyebrow || defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.kpiHeading || defaults.heading}</h2>
          <p className="text-slate-600 mt-4">{content.kpiSubheading || defaults.subheading}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((k, i) => {
            const Icon = resolveIcon(k.icon);
            return (
              <motion.div
                key={k.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
              >
                <div className="h-11 w-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                {k.value && (
                  k.value.includes('[DRAFT]') ? (
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-amber-500">{k.value}</span>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mt-1">Pending client approval</p>
                    </div>
                  ) : (
                    <span className="block text-2xl font-bold text-slate-900 mb-1">{k.value}</span>
                  )
                )}
                <h3 className="text-sm font-bold text-slate-900 mb-1">{k.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Enterprise capability</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
