import { motion } from 'framer-motion';
import { Award, Handshake, Sprout, UserCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const whyCards = [
  {
    title: 'Professional Integrity',
    description: 'Operating with highest ethical standards since 2000.',
    icon: UserCheck
  },
  {
    title: 'Genuine Client Approach',
    description: 'Client-first strategy with transparent operations.',
    icon: Handshake
  },
  {
    title: 'Excellence in Execution',
    description: 'Consistent delivery across recovery and verification workflows.',
    icon: Award
  },
  {
    title: 'Premier Market Position',
    description: 'Trusted by leading banks and NBFCs for recovery operations.',
    icon: Sprout
  }
];

export default function WhySection() {
  return (
    <section id="why" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-gold-500">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-blue-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}