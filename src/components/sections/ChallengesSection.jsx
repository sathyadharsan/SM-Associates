import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

export default function ChallengesSection({ content }) {
  const items = content?.challenges;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.challenges;

  // Single-accent brand rule: every badge uses brand blue, regardless of category.
  const getBadgeStyle = () => 'bg-[#0072bc]/10 text-[#0072bc] border-[#0072bc]/20';

  return (
    <section className="py-20 lg:py-24 bg-[#fafbfc] border-y border-slate-200/80 relative overflow-hidden font-inter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Crisp Minimal Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.15 }} 
          variants={fUp} 
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3.5 py-1.5 rounded-full inline-block">
            {defaults.eyebrow}
          </span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-4">
            {content.challengesHeading || defaults.heading}
          </h2>
        </motion.div>

        {/* Crisp Stripe-Style 2-Column Risk & Mitigation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((c, i) => {
            const badgeClass = getBadgeStyle(c.warningBadge);

            return (
              <motion.div
                key={c.title}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.2 }} 
                variants={fUp}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Header Badges */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">
                        <AlertCircle size={15} />
                      </span>
                      {c.warningBadge && (
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded border ${badgeClass}`}>
                          {c.warningBadge}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      CHALLENGE 0{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    {c.title}
                  </h3>

                  {/* Description Bullets */}
                  <ul className="space-y-2">
                    {c.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 flex-none" />
                        <span>{s.trim()}{s.trim().endsWith('.') ? '' : '.'}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Callout */}
                  {c.impact && (
                    <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2 font-medium">
                      <span className="font-bold text-[#0072bc] uppercase text-[10px] tracking-wider mt-0.5 flex-none">Impact:</span>
                      <span>{c.impact}</span>
                    </div>
                  )}
                </div>

                {/* SM Associates Mitigated Standard Box */}
                <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80 space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-[#0072bc] text-[11px] font-extrabold uppercase tracking-wider">
                    <ShieldCheck size={16} /> SM ASSOCIATES MITIGATED STANDARD
                  </div>
                  <div className="space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#0072bc] mt-0.5 flex-shrink-0" />
                      <span>Audited operational workflow with complete regulatory oversight</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#0072bc] mt-0.5 flex-shrink-0" />
                      <span>Continuous SLA tracking and automated audit logging</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
