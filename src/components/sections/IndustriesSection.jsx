import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fUp } from './shared/motion';
import { ICON_ROTATION } from './shared/icons';
import { DEFAULT_TARGET_INDUSTRIES } from './shared/targetIndustries';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';
import { resolveIndustryHref } from './shared/crossLinks';

// Reads `content.targetIndustries: [{name, desc}]`, falling back to the
// shared default segment list. Gold accent lines and rotating icons on hover.
// Cards whose name matches a known industry page auto-link to it
// (self-links on the current page are suppressed).
export default function IndustriesSection({ content }) {
  const { pathname } = useLocation();
  const items = content.targetIndustries || DEFAULT_TARGET_INDUSTRIES;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.targetIndustries;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-50/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A45D] bg-amber-50 px-3 py-1.5 rounded-full">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">{content.targetIndustriesHeading || defaults.heading}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-5">
          {items.map((ind, i) => {
            const IndIcon = ICON_ROTATION[i % ICON_ROTATION.length];
            const href = resolveIndustryHref(ind.name);
            const linked = href && href !== pathname;
            return (
              <motion.div
                key={ind.name}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
                whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] max-w-sm bg-white border border-slate-200/80 hover:border-[#C8A45D]/30 rounded-2xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_24px_50px_-8px_rgba(200,164,93,0.07)] transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C8A45D] to-[#E6C87A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="h-12 w-12 rounded-xl bg-amber-50/50 text-[#C8A45D] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-amber-100/50">
                  <IndIcon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-3">{ind.name}</h3>
                <ul className="space-y-2 mt-3">
                  {ind.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed text-slate-600 justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D] mt-2 flex-none" />
                      <span>{s.trim()}{s.trim().endsWith('.') ? '' : '.'}</span>
                    </li>
                  ))}
                </ul>
                {linked && (
                  <Link
                    to={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#C8A45D] opacity-0 group-hover:opacity-100 hover:text-amber-700 transition-all duration-300"
                  >
                    Explore industry <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
