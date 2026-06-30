import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.capabilities: [{title, desc, bullets[], businessOutcome}]`.
// Premium styled cards with dynamic gradient top-bar and glow shadow on hover.
export default function CapabilitiesSection({ content }) {
  const items = content.capabilities;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.capabilities;

  return (
    <section id="capabilities" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{content.capabilitiesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
              whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-white/95 backdrop-blur-sm border border-slate-200/80 hover:border-blue-500/30 rounded-2xl p-7 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_50px_-8px_rgba(37,99,235,0.08)] transition-colors duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-center gap-3.5 mb-4">
                <span className="h-8 w-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-none shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:scale-110 transition-transform duration-300">{i + 1}</span>
                <h3 className="font-bold text-slate-900 text-base tracking-tight">{c.title}</h3>
              </div>
              <ul className="space-y-2 mb-5">
                {c.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80 mt-2 flex-none" />
                    <span>{s.trim()}.</span>
                  </li>
                ))}
              </ul>
              {Array.isArray(c.bullets) && c.bullets.length > 0 && (
                <ul className="space-y-2.5 mb-5 border-t border-slate-100 pt-4">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                      <div className="h-4.5 w-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center p-0.5 mt-0.5 flex-none">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {c.businessOutcome && (
                <p className="text-[13px] font-semibold text-blue-600 border-t border-slate-150 pt-4 mt-auto flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-blue-600" />
                  {c.businessOutcome}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
