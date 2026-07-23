import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { serifHeading } from './shared/typography';
import HeroCustomArtwork from './shared/HeroCustomArtwork';

export default function HeroSection({ content }) {
  const eyebrow = content.eyebrow || 'ENTERPRISE CREDIT RISK & RECOVERY OS';
  const title = content.title || 'Calibrated Recovery Operations';
  const subtitle = content.subtitle || '';
  const description = content.description || '';

  // Ultra-Precise Category Discriminator for 100% Unique Page Artworks
  const detectCategory = () => {
    const path = (typeof window !== 'undefined' ? window.location.pathname : '').toLowerCase();
    const id = (content.id || '').toLowerCase();
    const t = title.toLowerCase();
    const e = eyebrow.toLowerCase();

    // 1. Vehicle & Asset Repossession
    if (path.includes('vehicle') || path.includes('asset') || id.includes('vehicle') || id.includes('repossession') || t.includes('repossession') || t.includes('vehicle') || t.includes('yard')) {
      return 'asset';
    }
    // 2. Legal Notices / Section 138 / SARFAESI / DRT
    if (path.includes('legal') || path.includes('notice') || id.includes('notice') || t.includes('notice') || t.includes('138') || t.includes('cheque') || t.includes('sarfaesi') || t.includes('litigation') || t.includes('court')) {
      return 'legal';
    }
    // 3. Skip Tracing & Risk Investigation
    if (path.includes('trace') || path.includes('skip') || id.includes('trace') || t.includes('skip') || t.includes('investig') || t.includes('diligence')) {
      return 'tracing';
    }
    // 4. Compliance / Governance / RBI / CPV
    if (path.includes('compliance') || path.includes('governance') || t.includes('compliance') || t.includes('rbi') || t.includes('cpv') || t.includes('audit')) {
      return 'compliance';
    }
    // 5. Industries / Banking / Portfolios
    if (path.includes('industr') || path.includes('bank') || t.includes('diverse') || t.includes('lending') || t.includes('verticals') || t.includes('portfolio') || t.includes('banking')) {
      return 'banking';
    }
    // 6. Digital Collections & Telecalling Dialer
    if (path.includes('digital') || path.includes('tele') || t.includes('digital') || t.includes('dialer') || t.includes('voice') || t.includes('call')) {
      return 'digital';
    }
    // 7. Field Collections & Ground Dispatch
    if (path.includes('field') || t.includes('field') || t.includes('doorstep') || t.includes('dra')) {
      return 'field';
    }
    // 8. Pre-Legal ODR & Arbitration
    if (path.includes('arbitration') || t.includes('arbitration') || t.includes('lok adalat') || t.includes('odr')) {
      return 'odr';
    }
    // 9. Technology / Platform / AI Brain
    if (path.includes('platform') || path.includes('technol') || t.includes('platform') || t.includes('ai') || t.includes('brain') || t.includes('os')) {
      return 'technology';
    }
    // 10. Company / Heritage / About
    if (path.includes('company') || path.includes('about') || t.includes('company') || t.includes('heritage')) {
      return 'company';
    }
    // 11. Main Services Page
    return 'services';
  };

  const category = detectCategory();

  return (
    <section className="relative pt-32 pb-20 sm:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/90 overflow-hidden font-inter text-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (6 Cols) */}
          <motion.div initial="hidden" animate="show" variants={fUp} className="lg:col-span-6 space-y-6">
            
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0072bc] shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#0072bc]" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 style={serifHeading} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl font-extrabold text-[#0072bc] leading-snug">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {description}
              </p>
            )}

            {/* CTAs */}
            {(content.primaryCtaText || content.secondaryCtaText) && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
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
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/80">
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

          {/* Right Column: Unique Page-Specific Product Artwork (6 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <HeroCustomArtwork category={category} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
