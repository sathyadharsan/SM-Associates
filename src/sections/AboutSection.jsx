import { motion } from 'framer-motion';
import { Award, MapPin, ShieldCheck, Target } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const aboutCards = [
  {
    title: 'Company Overview',
    description: 'Established in 2000, SM Associates operates as a recovery and risk management partner for banks, NBFCs, HFCs, ARCs and corporate lenders.',
    icon: ShieldCheck
  },
  {
    title: 'Vision & Mission',
    description: 'To build trusted recovery infrastructure that improves outcomes while maintaining professionalism, documentation discipline and operational transparency.',
    icon: Target
  },
  {
    title: 'Leadership Team',
    description: 'Experienced operational leadership across recovery strategy, field coordination, verification, SARFAESI support and legal coordination.',
    icon: Award
  },
  {
    title: 'Operational Presence',
    description: 'Pan Tamil Nadu operations supported by field teams, verification resources, recovery coordinators and legal coordination partners.',
    icon: MapPin
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About SM Associates"
          title="A recovery operations partner built for financial institutions."
          description="SM Associates combines two decades of field execution, verification discipline, legal coordination and recovery strategy to support India's lending ecosystem."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-blue-600">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-blue-950">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
