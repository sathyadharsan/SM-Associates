import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import RichIcon from '../components/sections/shared/RichIcon';

export default function ServicesDetailedSection() {
  const handleScrollTo = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="services-detailed" className="relative py-20 sm:py-24 lg:py-28" style={{ background: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Our Services"
            title="Complete recovery and risk management solutions for financial institutions."
            description="From pre-disbursal verification to post-disbursal collections, SARFAESI enforcement to legal coordination, we cover the full recovery lifecycle."
            className="lg:max-w-3xl"
          />
          <button
            onClick={handleScrollTo('#contact')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900 bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:border-[#0072bc] hover:bg-slate-50"
          >
            Discuss Your Portfolio
          </button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesMenu.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card group rounded-[20px] p-6 transition duration-300 hover:border-[#0072bc]/40 hover:shadow-enterpriseHover"
            >
              <div className="mb-4 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                <RichIcon type={service.icon || service.title} size={48} />
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-gray-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-2">{service.description}</p>
              <a
                href="#contact"
                onClick={handleScrollTo('#contact')}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gray-950 transition group-hover:text-[#0072bc]"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-gray-950 shadow-soft transition hover:border-brand-500"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}