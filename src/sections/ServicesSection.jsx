import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { capabilities } from '../data/homeData';
import RichIcon from '../components/sections/shared/RichIcon';

const bentoClasses = {
  featured: 'lg:col-span-6 lg:row-span-2',
  large: 'lg:col-span-6',
  standard: 'lg:col-span-3'
};

export default function ServicesSection() {
  return (
    <section id="capabilities" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Capabilities Bento Grid"
            title="Every recovery capability connected through one operating model."
            description="From field collections to SARFAESI enforcement, repossession, auctions and legal coordination, every service is structured for compliance, control and measurable outcomes."
            className="lg:max-w-3xl"
          />
          <Button variant="secondary" href="#contact">
            Discuss Your Portfolio
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-3">
          {capabilities.map((service, index) => {
            const className = service.featured && service.title === 'Recovery Services'
              ? bentoClasses.featured
              : service.featured
                ? bentoClasses.large
                : bentoClasses.standard;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className={`relative overflow-hidden rounded-[24px] border border-slate-200/90 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0072bc]/40 hover:shadow-xs ${className}`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0072bc]/10 blur-2xl transition duration-300 group-hover:bg-[#0072bc]/20" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                    <RichIcon type={service.icon || service.title} size={48} />
                  </div>
                  <h3 className={`font-semibold text-slate-900 ${service.featured ? 'text-2xl tracking-[-0.025em] sm:text-3xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3.5">{service.description}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072bc] transition group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4 transition duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
