import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { serifHeading } from './shared/typography';

export default function HeroSection({ content }) {
  const eyebrow = content.eyebrow || 'ENTERPRISE CREDIT RISK & RECOVERY OS';
  const title = content.title || 'Calibrated Recovery Operations';
  const subtitle = content.subtitle || '';
  const description = content.description || '';

  return (
    <section className="relative pt-32 pb-20 sm:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/90 overflow-hidden font-inter text-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div initial="hidden" animate="show" variants={fUp} className="space-y-6">
          
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0072bc] shadow-xs mx-auto">
              <Sparkles className="h-3.5 w-3.5 text-[#0072bc]" />
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 style={serifHeading} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 max-w-4xl mx-auto">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl font-extrabold text-[#0072bc] leading-snug max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              {description}
            </p>
          )}

          {/* CTAs */}
          {(content.primaryCtaText || content.secondaryCtaText) && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {content.primaryCtaText && (
                <a 
                  href={content.primaryCtaHref || '#contact'} 
                  className="inline-flex items-center gap-2 rounded-full bg-[#0072bc] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 hover:bg-[#005a96] hover:scale-[1.02] transition-all duration-200"
                >
                  <span>{content.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {content.secondaryCtaText && (
                <a 
                  href={content.secondaryCtaHref || '#capabilities'} 
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/90 px-8 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <span>{content.secondaryCtaText}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
              )}
            </div>
          )}

          {/* Trust Pills */}
          {Array.isArray(content.kpiCards) && content.kpiCards.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-200/80 max-w-3xl mx-auto">
              {content.kpiCards.map((k) => {
                return (
                  <span 
                    key={k.title} 
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0072bc] stroke-[2.5]" />
                    <span>{k.title}</span>
                  </span>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
