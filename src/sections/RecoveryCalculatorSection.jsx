import React, { useState } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Sparkles, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RecoveryCalculatorSection() {
  const [portfolio, setPortfolio] = useState(500); // Cr
  const [targetRate, setTargetRate] = useState(48); // %
  const [months, setMonths] = useState(12);
  const [showAuditModal, setShowAuditModal] = useState(false);

  // Dynamic calculations
  const totalRecovery = Math.round((portfolio * (targetRate / 100)) * 10) / 10;
  const monthlyAvg = Math.round((totalRecovery / months) * 10) / 10;

  // Generate dynamic bar heights based on selected months (scales from 4 to 24 bars)
  const barCount = Math.min(Math.max(months, 4), 24);
  const barData = Array.from({ length: barCount }, (_, i) => {
    const factor = Math.sin((i / (barCount - 1 || 1)) * (Math.PI / 2)) * 0.85 + 0.15;
    return Math.round(monthlyAvg * factor * 10) / 10;
  });

  return (
    <section className="fg-home-section py-20 relative overflow-hidden bg-white" id="calculator">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="allset-pill-tag mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072bc]/10 text-[#0072bc] font-mono text-xs font-bold border border-[#0072bc]/20">
            <Sparkles size={13} /> Interactive Portfolio Tool
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sora">
            See your potential
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Play with our calculator to see how much resolution performance and compliance recovery SM Associates delivers for your portfolio.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="calc-card-wrap border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-xl shadow-slate-200/50">
          {/* Controls Column */}
          <div>
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-slider-label">Loan Portfolio Size</span>
                <span className="calc-slider-val font-mono text-[#0072bc]">₹{portfolio.toLocaleString('en-IN')} Cr</span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={portfolio}
                onChange={(e) => setPortfolio(Number(e.target.value))}
                className="calc-input-range"
              />
            </div>

            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-slider-label">Target Recovery Rate</span>
                <span className="calc-slider-val font-mono text-[#0072bc]">{targetRate}%</span>
              </div>
              <input
                type="range"
                min="15"
                max="85"
                step="1"
                value={targetRate}
                onChange={(e) => setTargetRate(Number(e.target.value))}
                className="calc-input-range"
              />
            </div>

            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-slider-label">Execution Time Horizon</span>
                <span className="calc-slider-val font-mono text-[#0072bc]">{months} Months</span>
              </div>
              <input
                type="range"
                min="3"
                max="36"
                step="1"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="calc-input-range"
              />
            </div>

            <button
              onClick={() => setShowAuditModal(true)}
              className="allset-btn allset-btn-primary mt-6 w-full justify-center bg-[#0072bc] text-white py-3.5 px-6 rounded-2xl font-bold hover:bg-[#005a96] transition-all shadow-md flex items-center gap-2"
            >
              Calculate Custom Audit <span className="allset-btn-icon-circle bg-white/20 p-1 rounded-full"><ArrowRight size={14} /></span>
            </button>
          </div>

          {/* Visualization Column */}
          <div className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
            {/* Top Metric Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Potential Resolution Balance</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0072bc] tracking-tight mt-1 font-mono">
                  ₹{totalRecovery.toLocaleString('en-IN')} Cr
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0072bc]/10 text-[#0072bc] px-3 py-1.5 rounded-full text-xs font-bold border border-[#0072bc]/20">
                <TrendingUp size={14} /> +{Math.round(targetRate * 0.4)}% Efficiency
              </div>
            </div>

            {/* Dynamic Bar Graph */}
            <div className="calc-bar-graph flex items-end gap-1.5 h-44 py-2">
              {barData.map((val, idx) => {
                const maxVal = Math.max(...barData);
                const heightPct = Math.max(12, Math.round((val / maxVal) * 100));
                const isMax = val === maxVal;

                return (
                  <div
                    key={idx}
                    className={`flex-1 rounded-t-md transition-all duration-300 relative group ${isMax ? 'bg-[#0072bc]' : 'bg-[#0072bc]/25 hover:bg-[#0072bc]/40'}`}
                    style={{ height: `${heightPct}%` }}
                  >
                    {isMax && (
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                        ₹{val} Cr/Mo Peak
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Floating Toast Badge */}
            <div className="mt-6 flex items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% DRA &amp; RBI Compliant</div>
                  <div className="text-[11px] text-slate-500">Audit trail backed resolution</div>
                </div>
              </div>
              <button onClick={() => setShowAuditModal(true)} className="text-xs font-bold text-[#0072bc] hover:underline">
                View Audit →
              </button>
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE CUSTOM AUDIT MODAL ── */}
        <AnimatePresence>
          {showAuditModal && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
              >
                <button
                  onClick={() => setShowAuditModal(false)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                >
                  <X size={16} />
                </button>

                <div className="flex items-center gap-2 text-[#0072bc] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 size={16} /> Projected Audit Report
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 font-sora">
                  Custom Recovery Assessment
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Based on your selected portfolio parameters, here is the projected institutional resolution capacity:
                </p>

                <div className="mt-5 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Portfolio Size:</span>
                    <span className="font-bold text-slate-900 font-mono">₹{portfolio.toLocaleString('en-IN')} Cr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Target Recovery Rate:</span>
                    <span className="font-bold text-slate-900 font-mono">{targetRate}%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Execution Horizon:</span>
                    <span className="font-bold text-slate-900 font-mono">{months} Months</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Projected Resolution Balance:</span>
                    <span className="font-extrabold text-[#0072bc] font-mono text-sm">₹{totalRecovery.toLocaleString('en-IN')} Cr</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Monthly Recovery Peak:</span>
                    <span className="font-extrabold text-emerald-600 font-mono">₹{monthlyAvg.toLocaleString('en-IN')} Cr/Mo</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="/contact"
                    className="flex-1 text-center bg-[#0072bc] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#005a96] transition-colors"
                  >
                    Submit Mandate Inquiry
                  </a>
                  <button
                    onClick={() => setShowAuditModal(false)}
                    className="px-4 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-xs hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
