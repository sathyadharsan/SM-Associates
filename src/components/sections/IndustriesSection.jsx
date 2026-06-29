import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { ICON_ROTATION } from './shared/icons';
import { DEFAULT_TARGET_INDUSTRIES } from './shared/targetIndustries';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.targetIndustries: [{name, desc}]`, falling back to the
// shared default segment list so individual pages don't need to repeat the
// same 5 industries in every content file.
export default function IndustriesSection({ content }) {
  const items = content.targetIndustries || DEFAULT_TARGET_INDUSTRIES;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.targetIndustries;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.targetIndustriesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((ind, i) => {
            const IndIcon = ICON_ROTATION[i % ICON_ROTATION.length];
            return (
              <motion.div
                key={ind.name}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 text-center"
              >
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <IndIcon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-2">{ind.name}</h3>
                <ul className="space-y-1.5 mt-2">
                  {ind.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-none" />
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
