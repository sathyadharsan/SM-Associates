import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.challengesHeading`, `content.challenges: [{title, desc, warningBadge, impact}]`.
// Circular red icon badge per card, matching the approved visual reference.
export default function ChallengesSection({ content }) {
  const items = content.challenges;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.challenges;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.challengesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              transition={{ delay: i * 0.05 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-white border border-slate-200 rounded-2xl p-6"
            >
              <div className="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              {c.warningBadge && (
                <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-2">{c.warningBadge}</p>
              )}
              <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
              <ul className="space-y-1.5 mb-3">
                {c.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 flex-none" />
                    <span>{s.trim()}.</span>
                  </li>
                ))}
              </ul>
              {c.impact && <p className="text-xs text-slate-500 border-t border-slate-100 pt-3">{c.impact}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
