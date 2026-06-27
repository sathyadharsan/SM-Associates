import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { fUp } from './shared/motion';
import { resolveIcon } from './shared/icons';
import { serifHeading } from './shared/typography';

// Business-agnostic hero. Works for any page type (service, industry,
// solution) — it only renders what content gives it. `kpiCards` is read
// optionally just to build the compact trust-badge row; pages without KPI
// cards simply won't show that row.
export default function HeroSection({ content }) {
  return (
    <section className="relative pt-36 pb-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[8%] top-[8%] h-[480px] w-[480px] rounded-full bg-blue-50/70 blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div initial="hidden" animate="show" variants={fUp}>
          {content.eyebrow && (
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-7">
              {content.eyebrow}
            </div>
          )}
          <h1 style={serifHeading} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.01em] leading-[1.1] mb-5 text-slate-900">
            {content.title}
          </h1>
          {content.subtitle && (
            <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6">{content.subtitle}</p>
          )}
          {content.description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-9">
              {content.description}
            </p>
          )}
          {(content.primaryCtaText || content.secondaryCtaText) && (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {content.primaryCtaText && (
                <a href={content.primaryCtaHref || '#enquiry'} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200">
                  {content.primaryCtaText} <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {content.secondaryCtaText && (
                <a href={content.secondaryCtaHref || '#capabilities'} className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all duration-200">
                  {content.secondaryCtaText} <ChevronRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </motion.div>

        {Array.isArray(content.kpiCards) && content.kpiCards.length > 0 && (
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {content.kpiCards.map((k) => {
              const Icon = resolveIcon(k.icon);
              return (
                <span key={k.title} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600">
                  <Icon className="h-3.5 w-3.5 text-blue-600" />
                  {k.title}
                </span>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
