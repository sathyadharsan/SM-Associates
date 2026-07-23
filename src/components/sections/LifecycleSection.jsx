import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { serifHeading } from './shared/typography';
import RichIcon from './shared/RichIcon';

// Single-accent brand rule: every stage uses brand blue — stages are
// distinguished by icon + label, not by a per-stage hue.
const STAGE_THEMES = [
  {
    color: '#0072BC',
    lightBg: 'bg-blue-50/90',
    text: 'text-[#0072BC]',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100/80',
    iconType: 'bank'
  },
  {
    color: '#0072BC',
    lightBg: 'bg-blue-50/90',
    text: 'text-[#0072BC]',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100/80',
    iconType: 'agent'
  },
  {
    color: '#0072BC',
    lightBg: 'bg-blue-50/90',
    text: 'text-[#0072BC]',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100/80',
    iconType: 'app'
  },
  {
    color: '#0072BC',
    lightBg: 'bg-blue-50/90',
    text: 'text-[#0072BC]',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100/80',
    iconType: 'analytics'
  },
  {
    color: '#0072BC',
    lightBg: 'bg-blue-50/90',
    text: 'text-[#0072BC]',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100/80',
    iconType: 'legal'
  }
];

export default function LifecycleSection({ content }) {
  const flow = content?.processFlow;
  if (!flow || !Array.isArray(flow.steps) || flow.steps.length === 0) return null;

  const totalSteps = flow.steps.length;

  return (
    <section id="lifecycle" className="relative overflow-hidden bg-slate-50/60 py-20 lg:py-28 border-y border-slate-200/80 font-inter">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Process Lifecycle & Workflow</span>
          </div>

          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {flow.title || 'Verification Stages & Workflow'}
          </h2>

          {flow.desc && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {flow.desc}
            </p>
          )}
        </motion.div>

        {/* ── 5 Stage Pipeline Infographic Cards with Rich Vector Icons ── */}
        <div className="relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[58px] left-[5%] right-[5%] h-1 bg-slate-200 z-0 rounded-full border-t border-b border-slate-300/50" />

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(totalSteps, 5)} gap-6 relative z-10 items-stretch`}>
            {flow.steps.map((s, i) => {
              const theme = STAGE_THEMES[i % STAGE_THEMES.length];
              const stepNum = s.step || `0${i + 1}`;
              const isLast = i === totalSteps - 1;

              return (
                <motion.div
                  key={s.step || s.title + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-3xl bg-white border-2 ${theme.border} p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 overflow-hidden`}
                >
                  {/* Top Color Accent Line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: theme.color }}
                  />

                  {/* Desktop Step Arrow Indicator */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-4 top-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-400 z-20">
                      <ArrowRight className="h-4 w-4" style={{ color: theme.color }} />
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Top Row: Rich Multi-Color Vector Icon + Stage Badge */}
                    <div className="flex items-center justify-between">
                      <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                        <RichIcon type={theme.iconType || s.title} size={48} />
                      </div>

                      <span className={`text-[10px] font-black uppercase tracking-widest ${theme.text} ${theme.badgeBg} px-3 py-1 rounded-full border border-slate-200/50`}>
                        STAGE {stepNum}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h3 className="font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Deliverable / Outcome Badge */}
                  {s.outcome && (
                    <div className="pt-3 border-t border-slate-100">
                      <div className={`text-xs font-bold ${theme.text} ${theme.lightBg} p-3 rounded-xl flex items-start gap-2 border border-slate-200/60`}>
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                        <span className="leading-snug">{s.outcome}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
