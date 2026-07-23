import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const featured = caseStudies.filter((s) => s.featured).slice(0, 3);
const preview = featured.length >= 3 ? featured : caseStudies.slice(0, 3);

export default function CaseStudiesPreviewSection() {
  const mainStudy = preview[0];
  const sideStudies = preview.slice(1, 3);

  return (
    <section className="csp6 bg-white py-20 lg:py-28" id="case-studies">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="fg-section-header mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="fg-eyebrow text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full inline-block mb-3">
            Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real engagements,<br />documented outcomes.
          </h2>
        </motion.div>

        {/* ── Editorial Story Narrative Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Spotlight (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-[#fafbfc] overflow-hidden shadow-lg flex flex-col justify-between group">
            <div className="relative h-72 sm:h-[380px] overflow-hidden">
              <img
                src={mainStudy.image}
                alt={mainStudy.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#0072bc] shadow-sm">
                FEATURED ENGAGEMENT
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block mb-1">
                  {mainStudy.serviceLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-snug">
                  {mainStudy.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {mainStudy.challenge}
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/insights/case-studies"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072bc] hover:underline"
                >
                  View Case Study Report <ArrowRight size={14} />
                </Link>
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <FileText size={13} /> Institutional Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Secondary Editorial Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 flex items-center gap-2">
              <BookOpen size={14} className="text-[#0072bc]" /> Additional Operational Audits
            </div>

            {sideStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between space-y-4 flex-1"
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-20 h-20 rounded-xl object-cover object-top flex-shrink-0 border border-slate-100"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-2 py-0.5 rounded">
                      {study.serviceLabel}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {study.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {study.challenge}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/insights/case-studies"
                    className="text-xs font-bold text-[#0072bc] hover:underline inline-flex items-center gap-1"
                  >
                    Read case study <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Bottom CTA Action */}
            <div className="pt-2">
              <Link
                to="/insights/case-studies"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#0072bc] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
              >
                Explore All Case Studies <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

