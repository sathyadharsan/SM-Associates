import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { caseStudies } from '../data/homeData';

export default function CaseStudiesSection() {
  const handleScrollTo = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="relative py-20 sm:py-24 lg:py-28" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0072bc, transparent)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Case Studies"
          title="Execution stories from real recovery operations."
          description="Anonymized operating examples showing how SM Associates structures recovery programs across banking, SARFAESI, verification and fraud control mandates."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0072bc]/40 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#0072bc]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0072bc]">
                    {study.category}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    CASE 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug">{study.title}</h3>
                
                {/* ── Interactive Before vs. After Impact Meter ── */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5"><TrendingUp size={14} className="text-[#0072bc]" /> Impact Recovery Meter</span>
                    <span className="text-[#0072bc] font-extrabold">{study.outcome}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-500 font-medium text-[11px]">
                      <span>Before Execution</span>
                      <span className="font-bold text-slate-600">Low / Delayed Resolution</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full w-[25%]" />
                    </div>

                    <div className="flex items-center justify-between text-slate-700 font-medium text-[11px] pt-1">
                      <span>After SM Execution</span>
                      <span className="font-bold text-[#0072bc]">Verified SLA Success</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-[#0072bc] h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <a href="#contact" onClick={handleScrollTo('#contact')} className="inline-flex items-center gap-2 text-xs font-bold text-[#0072bc] transition group-hover:translate-x-1">
                  Discuss similar mandate <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-[#0072bc]" /> Audited Case
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

