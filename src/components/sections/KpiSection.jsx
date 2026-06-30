import React from 'react';
import { motion } from 'framer-motion';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.kpiCards: [{icon, title, value}]`.
// Premium glassmorphic KPI cards with blue-glow stats and detailed icon accents.
export default function KpiSection({ content }) {
  const items = content.kpiCards;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.kpi;

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/15 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{content.kpiEyebrow || defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{content.kpiHeading || defaults.heading}</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">{content.kpiSubheading || defaults.subheading}</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((k, i) => {
            const Icon = resolveIcon(k.icon);
            return (
              <motion.div
                key={k.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-blue-500/30 rounded-2xl p-7 text-center shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_24px_50px_-8px_rgba(37,99,235,0.08)] transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-[#C8A45D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="h-12 w-12 rounded-xl bg-blue-50/50 text-blue-600 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-blue-100/50">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                {k.value && (
                  k.value.includes('[DRAFT]') ? (
                    <div className="mb-2">
                      <span className="text-2xl font-extrabold text-amber-500">{k.value}</span>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1.5 inline-block">Pending approval</p>
                    </div>
                  ) : (
                    <span className="block text-3xl font-extrabold text-slate-900 tracking-tight mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{k.value}</span>
                  )
                )}
                <h3 className="text-sm font-bold text-slate-800 mb-1">{k.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-500 transition-colors duration-300">Enterprise capability</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
