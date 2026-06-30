import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.challengesHeading`, `content.challenges: [{title, desc, warningBadge, impact}]`.
// Premium styled warning cards with left risk accent bars and active scale/rotate alerts.
export default function ChallengesSection({ content }) {
  const items = content.challenges;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.challenges;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-50/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1.5 rounded-full">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{content.challengesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-white border border-slate-200/80 hover:border-red-500/20 rounded-2xl p-7 pl-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_24px_50px_-8px_rgba(239,68,68,0.07)] transition-all duration-300 group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-red-500 to-amber-500 transform origin-bottom scale-y-75 group-hover:scale-y-100 transition-transform duration-500" />
              <div className="h-11 w-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <AlertTriangle className="h-5.5 w-5.5" />
              </div>
              {c.warningBadge && (
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded mb-3">{c.warningBadge}</span>
              )}
              <h3 className="font-bold text-slate-900 text-base tracking-tight mb-3">{c.title}</h3>
              <ul className="space-y-2 mb-4">
                {c.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-none" />
                    <span>{s.trim()}.</span>
                  </li>
                ))}
              </ul>
              {c.impact && (
                <div className="text-[12px] text-slate-500 border-t border-slate-100 pt-4 mt-auto flex items-start gap-1.5">
                  <span className="font-bold text-red-600 uppercase text-[10px] tracking-wider mt-0.5">Impact:</span>
                  <span>{c.impact}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
