import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { servicesMenu } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

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
    <section id="services-detailed" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900 bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:border-gold-500 hover:bg-slate-50"
          >
            Discuss Your Portfolio
          </button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {servicesMenu.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-blue-600">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-blue-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{service.description}</p>

              {service.benefits && (
                <div className="mt-6 space-y-3">
                  {service.benefits.map(benefit => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="#contact"
                onClick={handleScrollTo('#contact')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-gold-500"
              >
                Contact Specialist <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}