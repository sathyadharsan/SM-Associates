import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { caseStudies } from '../data/homeData';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Case Studies"
          title="Execution stories from sensitive recovery and risk operations."
          description="Anonymized operating examples showing how SM Associates structures recovery programs across banking, SARFAESI, verification and fraud control mandates."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {study.category}
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-blue-950">{study.title}</h3>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Approach</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{study.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{study.outcome}</p>
                </div>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-gold-500">
                Discuss similar mandate <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
