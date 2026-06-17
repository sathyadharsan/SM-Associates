import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { whyCards } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

export default function WhySection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Why Financial Institutions Choose Us"
            title="A recovery partner built on integrity, execution and trust."
            description="SM Associates combines institutional experience, field discipline and client-first recovery workflows to support banks, NBFCs, financial institutions and asset reconstruction companies."
            className="lg:max-w-xl"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="glass-card group rounded-[20px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-enterpriseHover"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-navy-950 transition group-hover:bg-gold-500">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-xl font-semibold text-navy-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
