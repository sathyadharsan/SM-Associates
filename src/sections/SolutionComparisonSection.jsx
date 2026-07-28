import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

export default function SolutionComparisonSection() {
  const comparisonData = [
    {
      feature: 'Asset & NPA Scope',
      sm: 'Any (Retail, MSME, SARFAESI)',
      dra: 'Retail Soft Only',
      legal: 'Legal Litigation Only',
    },
    {
      feature: 'Geographic Operations',
      sm: '5 States · 19 Branches Live',
      dra: 'Single District / City',
      legal: 'Stationed Offices Only',
    },
    {
      feature: 'Data Security & Audit',
      sm: 'ISO 27001 & RBI Certified',
      dra: 'Unverified / Manual',
      legal: 'Standard Paper Files',
    },
    {
      feature: 'Real-time GPS Tracking',
      sm: 'Yes (Live Mobile App)',
      dra: 'No',
      legal: 'No',
    },
    {
      feature: 'SARFAESI & Physical Possession',
      sm: 'End-to-End Support',
      dra: 'No',
      legal: 'Requires Third Party',
    },
    {
      feature: 'Commercial Structure',
      sm: 'Performance-Based Fee',
      dra: 'Fixed Monthly Retainer',
      legal: 'High Fixed Overhead',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="solution-comparison">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="allset-pill-tag mb-4">
            <ShieldCheck size={13} /> Institutional Comparison
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The most flexible solution
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Compare how SM Associates delivers institutional scale, compliance, and resolution efficiency over traditional channels.
          </p>
        </motion.div>

        {/* Matrix Container */}
        <motion.div
          className="comp-matrix-wrap"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-x-auto">
            <table className="comp-table">
              <thead>
                <tr>
                  <th className="w-1/3">Features</th>
                  <th className="highlight-col w-1/4">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-lg">SM Associates</span>
                      <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">All-in-one</span>
                    </div>
                  </th>
                  <th className="w-1/5 text-slate-600">Traditional DRA</th>
                  <th className="w-1/5 text-slate-600">In-House Team</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="hover:bg-indigo-50/30 transition-colors"
                  >
                    <td className="font-semibold text-slate-800">{row.feature}</td>
                    <td className="highlight-col font-bold text-indigo-700">
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-indigo-600 shrink-0" />
                        <span>{row.sm}</span>
                      </div>
                    </td>
                    <td className="text-slate-600">
                      <div className="flex items-center gap-2">
                        {row.dra === 'No' ? (
                          <X size={16} className="text-slate-400 shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        )}
                        <span>{row.dra}</span>
                      </div>
                    </td>
                    <td className="text-slate-600">
                      <div className="flex items-center gap-2">
                        {row.legal === 'No' ? (
                          <X size={16} className="text-slate-400 shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        )}
                        <span>{row.legal}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
