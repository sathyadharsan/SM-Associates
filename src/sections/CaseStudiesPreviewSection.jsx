import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const featured = caseStudies.filter((s) => s.featured).slice(0, 3);
const preview = featured.length >= 3 ? featured : caseStudies.slice(0, 3);
const [mainAudit, secAudit1, secAudit2] = preview;

export default function CaseStudiesPreviewSection() {
  return (
    <section className="csp6 bg-[#fafbfc] py-24 lg:py-32 border-t border-b border-slate-200/90 relative overflow-hidden" id="case-studies">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="fg-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="fg-section-eyebrow">
            EXECUTIVE CASE AUDITS
          </span>
          <h2 className="fg-section-title">
            Proven Recovery Outcomes
          </h2>
          <p className="fg-section-subtitle">
            Verified execution reports for stressed institutional portfolios.
          </p>
        </motion.div>

        {/* ═══ UNIQUE ASYMMETRIC SPOTLIGHT AUDIT LAYOUT (Collekt.ai / Stripe Style) ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Audit Spotlight (7 Cols) */}
          {mainAudit && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-white rounded-[32px] border border-slate-200/90 p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#0072bc]/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3.5 py-1.5 rounded-full border border-[#0072bc]/20">
                    FEATURED AUDIT SPOTLIGHT · AUDIT-01
                  </span>
                  <span className="text-xs font-mono font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED OUTCOME
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {mainAudit.title}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100">
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                      CHALLENGE / PROBLEM
                    </span>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      {mainAudit.challenge || 'High delinquency and uncontactable accounts across rural sectors requiring specialized field intervention.'}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100">
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#0072bc] block mb-1">
                      OPERATIONAL EXECUTION
                    </span>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      {mainAudit.solution || 'Deployed geo-tracked field officers, automated SMS reminders, and doorstep digital payment collection.'}
                    </p>
                  </div>
                </div>

                {/* Big Impact Metric Banner */}
                <div className="mt-6 rounded-2xl bg-[#0072bc]/10 border border-[#0072bc]/20 p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0072bc]">
                      PORTFOLIO RESOLUTION METRIC
                    </div>
                    <div className="text-sm font-extrabold text-slate-800 mt-0.5">
                      {mainAudit.resultLabel || 'Stressed Accounts Recovered'}
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#0072bc]">
                    {mainAudit.resultMetric || '84.2%'}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/insights/case-studies"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0072bc] font-mono uppercase tracking-wider group-hover:underline"
                >
                  READ FULL INSTITUTIONAL CASE STUDY
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Secondary Stacked Audits (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {[secAudit1, secAudit2].filter(Boolean).map((study, idx) => (
              <motion.div
                key={study.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-[32px] border border-slate-200/90 p-7 shadow-md flex-1 flex flex-col justify-between group hover:border-[#0072bc]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/8 px-3 py-1 rounded-full border border-[#0072bc]/15">
                      AUDIT-0{idx + 2}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {study.serviceLabel || 'FIELD RECOVERY'}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                    {study.title}
                  </h4>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {study.solution || 'Deployed geo-tracked field teams and doorstep recovery workflows.'}
                  </p>

                  <div className="mt-4 flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-mono font-bold text-slate-500">OUTCOME:</span>
                    <span className="text-base font-black text-[#0072bc]">{study.resultMetric || '78.5%'}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <Link
                    to="/insights/case-studies"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0072bc] font-mono uppercase tracking-wider group-hover:underline"
                  >
                    View Audit Report
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <Link
            to="/insights/case-studies"
            className="inline-flex items-center gap-2 bg-[#0072bc] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md font-mono"
          >
            Explore All Institutional Case Audits <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
