import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileText, AlertTriangle, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { serifHeading } from './shared/typography';

export default function VerticalTabsSection({ content }) {
  const tabs = content?.tabs;
  const [activeTab, setActiveTab] = useState(0);

  if (!Array.isArray(tabs) || tabs.length === 0) return null;
  const active = tabs[activeTab] || tabs[0];
  const headingText = content?.tabsHeading || 'Inside Each Stage';

  return (
    <section id="tabs" className="relative overflow-hidden bg-slate-50/70 py-20 lg:py-28 border-y border-slate-200/80">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Execution Parameters & Governance</span>
          </div>

          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {headingText}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed operational breakdown, verifiable activities, document audits, and risk mitigations for every stage.
          </p>
        </motion.div>

        {/* Main Grid: Left Tabs (3 Cols) + Right Content Showcase (9 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ═══ LEFT NAVIGATION TABS ═══ */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-hide">
            {tabs.map((t, i) => {
              const isActive = activeTab === i;

              return (
                <button
                  key={t.id || t.label + i}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`group relative flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border border-blue-500 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    <span className="truncate">{t.label}</span>
                  </div>

                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ml-2 shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    0{i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ═══ RIGHT SHOWCASE PANEL ═══ */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id || active.label + activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="relative rounded-3xl bg-white border-2 border-slate-200/90 p-6 sm:p-9 shadow-2xl space-y-7 overflow-hidden"
                >
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                  {/* Heading & Overview */}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
                      STAGE 0{activeTab + 1} SPECIFICATIONS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                      {active.heading}
                    </h3>
                    {active.overview && (
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                        {active.overview}
                      </p>
                    )}
                  </div>

                  {/* 2-Column Grid: Verification Activities & Documents Reviewed */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Verification Activities */}
                    {Array.isArray(active.activities) && active.activities.length > 0 && (
                      <div className="rounded-2xl bg-blue-50/60 border border-blue-100 p-5 space-y-3">
                        <h4 className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 border-b border-blue-200/60 pb-2">
                          <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                          <span>Verification Activities</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {active.activities.map((act) => (
                            <li key={act} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Documents Reviewed */}
                    {Array.isArray(active.documents) && active.documents.length > 0 && (
                      <div className="rounded-2xl bg-purple-50/60 border border-purple-100 p-5 space-y-3">
                        <h4 className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-900 border-b border-purple-200/60 pb-2">
                          <FileText className="h-4.5 w-4.5 text-purple-600 shrink-0" />
                          <span>Documents Reviewed</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {active.documents.map((doc) => (
                            <li key={doc} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                              <FileText className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                  {/* Related Risks & Mitigation */}
                  {Array.isArray(active.risks) && active.risks.length > 0 && (
                    <div className="rounded-2xl bg-rose-50/50 border border-rose-100 p-5">
                      <h4 className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-900 mb-3">
                        <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0" />
                        <span>Related Risks & Mitigation</span>
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {active.risks.map((risk) => (
                          <span 
                            key={risk} 
                            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-rose-200 px-3.5 py-1.5 text-xs font-bold text-rose-700 shadow-xs"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            {risk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Deliverable & Business Benefit Grid */}
                  {(active.deliverable || active.benefit) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-slate-200/80">
                      {active.deliverable && (
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                              Key Deliverable
                            </h4>
                            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                              {active.deliverable}
                            </p>
                          </div>
                        </div>
                      )}

                      {active.benefit && (
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                              Business Benefit
                            </h4>
                            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                              {active.benefit}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
