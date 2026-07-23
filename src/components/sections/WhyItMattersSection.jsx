import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';
import RichIcon from './shared/RichIcon';

export default function WhyItMattersSection({ content }) {
  const items = content?.problemStatement;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.problemStatement;

  const eyebrow = content.problemStatementEyebrow || defaults.eyebrow;
  const heading = content.problemStatementHeading || defaults.heading;

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/90 relative overflow-hidden font-inter" id="why-it-matters">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-4">
            <Layers className="w-3.5 h-3.5" />
            {eyebrow}
          </span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {heading}
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Eliminating critical operational bottlenecks, compliance exposures, and SLA delays through structured institutional governance.
          </p>
        </motion.div>

        {/* ── PREMIUM RISK GAP TO RESOLUTION PILLAR DIAGRAM CANVAS ── */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Card Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold border border-amber-500/20">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Risk Gaps & Strategic Solution Pillars
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Institutional Risk Elimination & Governed Operational Flow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% RBI & SLA Compliant</span>
            </div>
          </div>

          {/* 4-Pillar Visual Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
            {items.map((item, i) => {
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fUp}
                  className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:border-[#0072bc]/40 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-[#0072bc]"
                >
                  <div className="space-y-4">
                    {/* Top Row: Multi-Color Rich Icon & Pillar Badge */}
                    <div className="flex items-center justify-between">
                      <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <RichIcon type={item.icon || item.title} size={44} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-200/60 px-2.5 py-1 rounded-full">
                        PILLAR 0{i + 1}
                      </span>
                    </div>

                    {/* Risk Gap Title */}
                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                      {item.title}
                    </h4>

                    {/* Risk Impact Pill */}
                    <div className="bg-red-500/5 border border-red-500/15 p-2.5 rounded-xl flex items-start gap-2 text-xs text-red-900 font-medium">
                      <span className="font-bold text-red-600 uppercase text-[9px] tracking-wider mt-0.5 flex-none">Risk Gap:</span>
                      <span>Vulnerability eliminated via audited controls.</span>
                    </div>

                    {/* Resolution Bullets */}
                    <ul className="space-y-2 pt-1">
                      {item.desc.split(/\.(?:\s+|$)/).filter(Boolean).map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 size={14} className="text-[#0072bc] mt-0.5 flex-none stroke-[2.5]" />
                          <span>{s.trim()}{s.trim().endsWith('.') ? '' : '.'}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Solution Badge */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-[#0072bc]">
                    <span>Mitigated Standard</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Integrated Architecture Governance Core Banner */}
          <div className="mt-10 pt-6 border-t border-slate-100 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-none">
                <RichIcon type="shield" size={42} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block">
                  SM ASSOCIATES GOVERNANCE CORE
                </span>
                <h4 className="text-base font-extrabold text-white tracking-tight">
                  Zero-Tolerance Credit Risk & Institutional Compliance Protection
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                RBI Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                DRA Certified Officers
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                100% Immutable Audit Trail
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
