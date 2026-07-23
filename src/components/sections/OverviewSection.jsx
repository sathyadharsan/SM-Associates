import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Open Editorial Dual-Column Layout — Zero Enclosed Cards, Pure Whitespace & High Typography Contrast
export default function OverviewSection({ content }) {
  const overview = content?.overview;
  if (!overview) return null;
  const defaults = SECTION_DEFAULTS.overview;

  return (
    <section className="py-20 lg:py-28 bg-white font-inter relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Column (5 Cols) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp} className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                {defaults.eyebrow}
              </span>
              <h2 style={serifHeading} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {overview.heading}
              </h2>
              {overview.subheading && (
                <p className="text-[#0072bc] font-bold text-sm mt-3 tracking-wide uppercase">
                  {overview.subheading}
                </p>
              )}
            </div>

            <div className="pl-4 border-l-2 border-[#0072bc]">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                {overview.summary}
              </p>
            </div>
          </motion.div>

          {/* Right Open Column (7 Cols) - Border Left Indicators (No Box Containers) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp} className="lg:col-span-7 space-y-8">
            
            {/* Measured Outcomes */}
            {(overview.outcomes || []).length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Target Deliverables & Operational Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {overview.outcomes.map((o) => (
                    <div key={o.title} className="pl-4 border-l-2 border-slate-200 hover:border-[#0072bc] transition-colors space-y-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072bc] flex-none" />
                        <h5 className="font-extrabold text-sm text-slate-900 tracking-tight">{o.title}</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {o.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applicable Use Cases */}
            {(overview.useCases || []).length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Primary Institutional Deployments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {overview.useCases.map((u) => (
                    <div key={u.title} className="pl-4 border-l-2 border-slate-200 hover:border-teal-500 transition-colors space-y-1.5">
                      <h5 className="font-extrabold text-sm text-slate-900 tracking-tight">{u.title}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {u.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
