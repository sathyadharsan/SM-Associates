import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #3366FF, transparent)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Case Studies"
          title="Execution stories from real recovery operations."
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
              className="group rounded-[24px] border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3366FF]/40 hover:bg-gray-100"
            >
              <span className="rounded-full bg-[#3366FF]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#3366FF]">
                {study.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-gray-950">{study.title}</h3>
              <p className="mt-3 text-2xl font-bold text-[#3366FF]">{study.outcome}</p>
              <a href="#contact" onClick={handleScrollTo('#contact')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition group-hover:text-[#3366FF]">
                Discuss similar mandate <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
