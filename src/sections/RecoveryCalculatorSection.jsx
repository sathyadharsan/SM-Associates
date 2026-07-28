import React, { useState } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export default function RecoveryCalculatorSection() {
  const [portfolio, setPortfolio] = useState(500); // Cr
  const [targetRate, setTargetRate] = useState(48); // %
  const [months, setMonths] = useState(12);

  // Dynamic calculations
  const totalRecovery = Math.round((portfolio * (targetRate / 100)) * 10) / 10;
  const monthlyAvg = Math.round((totalRecovery / months) * 10) / 10;

  // Generate 12 bar heights based on exponential resolution curve
  const barData = Array.from({ length: 12 }, (_, i) => {
    const factor = Math.sin((i / 11) * (Math.PI / 2)) * 0.85 + 0.15;
    return Math.round(monthlyAvg * factor * 10) / 10;
  });

  return (
    <section className="fg-home-section py-20 relative overflow-hidden" id="calculator">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="allset-pill-tag mb-4">
            <Sparkles size={13} /> Interactive Portfolio Tool
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See your potential
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Play with our calculator to see how much resolution performance and compliance recovery SM Associates delivers for your portfolio.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="calc-card-wrap">
          {/* Controls Column */}
          <div>
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-slider-label">Loan Portfolio Size</span>
                <span className="calc-slider-val">₹{portfolio} Cr</span>
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
                <span className="calc-slider-val">{targetRate}%</span>
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
                <span className="calc-slider-val">{months} Months</span>
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

            <a className="allset-btn allset-btn-primary mt-4 w-full justify-center" href="#cta">
              Calculate Custom Audit <span className="allset-btn-icon-circle"><ArrowRight size={14} /></span>
            </a>
          </div>

          {/* Visualization Column */}
          <div className="relative bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
            {/* Top Metric Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Potential Resolution Balance</div>
                <div className="text-4xl font-extrabold text-indigo-600 tracking-tight mt-1">
                  ₹{totalRecovery.toLocaleString()} Cr
                </div>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold">
                <TrendingUp size={14} /> +{Math.round(targetRate * 0.4)}% Efficiency
              </div>
            </div>

            {/* Dynamic Bar Graph */}
            <div className="calc-bar-graph">
              {barData.map((val, idx) => {
                const maxVal = Math.max(...barData);
                const heightPct = Math.max(12, Math.round((val / maxVal) * 100));
                const isMax = val === maxVal;

                return (
                  <div
                    key={idx}
                    className={`calc-bar-col ${isMax ? 'active' : ''}`}
                    style={{ height: `${heightPct}%` }}
                  >
                    {isMax && (
                      <div className="calc-bar-tooltip">
                        ₹{val}Cr Peak
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Floating Toast Badge */}
            <div className="mt-6 flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% DRA & RBI Compliant</div>
                  <div className="text-[11px] text-slate-500">Audit trail backed resolution</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-600 hover:underline cursor-pointer">Learn how →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
