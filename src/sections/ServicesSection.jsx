import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { capabilities } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

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
                className={`glass-card group relative overflow-hidden rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3366FF]/40 hover:shadow-enterpriseHover ${className}`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-400/10 blur-2xl transition duration-300 group-hover:bg-gold-400/20" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3366FF] text-gray-950 transition duration-300 group-hover:bg-gold-500">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className={`font-semibold text-gray-900 ${service.featured ? 'text-2xl tracking-[-0.025em] sm:text-3xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{service.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition group-hover:text-[#3366FF]">
                    Learn More <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
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
