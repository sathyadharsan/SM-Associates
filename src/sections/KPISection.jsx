import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import SectionHeader from '../components/SectionHeader';
import { kpis } from '../data/homeData';

const bentoClasses = {
  large: 'lg:col-span-6 lg:row-span-2',
  tall: 'lg:col-span-3 lg:row-span-2',
  wide: 'lg:col-span-6',
  standard: 'lg:col-span-3'
};

export default function KPISection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Operational Scale. Measurable Trust."
          title="Two decades of recovery and risk operations excellence."
          description="A field-led and technology-enabled risk operations partner with deep experience across recovery, collections, repossession, auctions, verification and legal coordination."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {kpis.map((kpi, index) => {
            const className = bentoClasses[kpi.size] || bentoClasses.standard;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className={`glass-card group relative overflow-hidden rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3366FF]/40 hover:shadow-enterpriseHover ${className}`}
              >
                <div className="absolute right-6 top-6 h-2 w-16 rounded-full bg-gold-400/70 transition duration-300 group-hover:w-28" />
                {kpi.value ? (
                  <>
                    <div className="text-5xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-7xl">
                      <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                    </div>
                    <p className="mt-4 text-lg font-semibold text-gray-900">{kpi.label}</p>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-semibold tracking-[-0.035em] text-gray-900 sm:text-5xl">{kpi.label}</div>
                    <p className="mt-4 text-lg font-semibold text-gray-900">Operations</p>
                  </>
                )}
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">{kpi.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
