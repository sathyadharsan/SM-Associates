import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies, isPlaceholder } from '../data/caseStudies';

const featured = caseStudies.filter((s) => s.featured).slice(0, 3);
const preview = featured.length >= 3 ? featured : caseStudies.slice(0, 3);
const [mainStudy, secStudy1, secStudy2] = preview;

function Metric({ m }) {
  const placeholder = isPlaceholder(m.value);
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 text-center flex-1">
      <p className={`text-sm font-black ${placeholder ? 'italic text-[#0072bc]/70' : 'text-[#0072bc]'}`}>
        {placeholder ? m.example : m.value}
      </p>
      {placeholder && <p className="mt-0.5 text-[8.5px] font-bold uppercase tracking-wide text-[#0072bc]/70">Sample data</p>}
      <p className="mt-1 text-[9.5px] font-bold uppercase tracking-wide text-slate-400">{m.label}</p>
    </div>
  );
}

export default function CaseStudiesPreviewSection() {
  return (
    <section className="csp6 bg-[#fafbfc] py-20 sm:py-24 border-t border-b border-slate-200/90 relative overflow-hidden" id="case-studies">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="fg-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="fg-section-eyebrow">PROOF OF WORK</span>
          <h2 className="fg-section-title">Real engagements, documented outcomes.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {mainStudy && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-7 bg-white rounded-[28px] border border-slate-200 p-7 sm:p-9 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3.5 py-1.5 rounded-full border border-slate-200">
                  {mainStudy.serviceLabel}
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {mainStudy.title}
                </h3>
                <p className="mt-3 text-[13.5px] text-slate-600 leading-relaxed">{mainStudy.challenge}</p>

                <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                  {mainStudy.metrics.map((m) => <Metric key={m.label} m={m} />)}
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <Link
                  to="/insights/case-studies"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0072bc] hover:underline"
                >
                  Read full case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}

          <div className="lg:col-span-5 flex flex-col gap-6">
            {[secStudy1, secStudy2].filter(Boolean).map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">{study.serviceLabel}</span>
                  <h4 className="mt-1.5 text-base font-extrabold text-slate-900 tracking-tight leading-snug">{study.title}</h4>
                  <p className="mt-2 text-[12.5px] text-slate-500 leading-relaxed line-clamp-2">{study.challenge}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to="/insights/case-studies"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0072bc] hover:underline"
                  >
                    View case study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
