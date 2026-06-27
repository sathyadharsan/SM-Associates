import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileText, AlertTriangle, ShieldCheck, Gift } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.tabs: [{id, label, heading, overview, activities[], documents[], risks[], deliverable, benefit}]`.
// Left-border-accent nav list + right content panel, matching the approved visual reference.
export default function VerticalTabsSection({ content }) {
  const tabs = content.tabs;
  const [activeTab, setActiveTab] = useState(0);
  if (!Array.isArray(tabs) || tabs.length === 0) return null;
  const active = tabs[activeTab];
  const defaults = SECTION_DEFAULTS.tabs;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mt-3">{content.tabsHeading || defaults.heading}</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex-none text-left px-4 py-3 text-sm font-semibold transition-colors duration-150 border-l-2 ${
                  activeTab === i
                    ? 'border-blue-600 text-blue-700 bg-blue-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9"
                >
                  <h3 style={serifHeading} className="text-xl font-bold text-slate-900 mb-2">{active.heading}</h3>
                  <p className="text-slate-600 mb-7">{active.overview}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
                    {active.activities?.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />Verification activities
                        </h4>
                        <ul className="space-y-2">
                          {active.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-none" />{a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {active.documents?.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3">
                          <FileText className="h-4 w-4 text-blue-600" aria-hidden="true" />Documents reviewed
                        </h4>
                        <ul className="space-y-2">
                          {active.documents.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                              <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-none" />{d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {active.risks?.length > 0 && (
                    <div className="mb-7">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3">
                        <AlertTriangle className="h-4 w-4 text-red-500" aria-hidden="true" />Related risks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.risks.map((r) => (
                          <span key={r} className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-slate-100">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />Deliverable
                      </h4>
                      <p className="text-sm text-slate-700">{active.deliverable}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                        <Gift className="h-4 w-4 text-emerald-600" aria-hidden="true" />Business benefit
                      </h4>
                      <p className="text-sm text-slate-700">{active.benefit}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
