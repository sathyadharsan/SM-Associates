import { motion } from 'framer-motion';
import { Award, Handshake, Sprout, UserCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const B = '#3366FF';
const V = '#7C3AED';

const whyCards = [
  {
    title: 'Professional Integrity',
    description: 'Operating with highest ethical standards since 2000 — every engagement structured around regulatory compliance and field discipline.',
    icon: UserCheck,
    span: 'lg:col-span-2 lg:row-span-2',
    featured: true,
  },
  {
    title: 'Genuine Client Approach',
    description: 'Client-first strategy with transparent operations.',
    icon: Handshake,
    span: 'lg:col-span-1',
  },
  {
    title: 'Excellence in Execution',
    description: 'Consistent delivery across recovery and verification workflows.',
    icon: Award,
    span: 'lg:col-span-1',
  },
  {
    title: 'Premier Market Position',
    description: 'Trusted by leading banks and NBFCs for recovery operations.',
    icon: Sprout,
    span: 'lg:col-span-2',
  },
];

function BentoCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl p-7 ${card.span} ${card.featured ? 'flex flex-col justify-between' : ''}`}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
      }}
    >
      {/* Animated gradient border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${B}40, 0 12px 32px -10px ${B}30` }} />
      {/* Soft glow blob */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${V}33, transparent 70%)` }} />

      <div className="relative">
        <div className={`flex items-center justify-center rounded-xl ${card.featured ? 'h-14 w-14' : 'h-11 w-11'}`}
          style={{ background: `${B}14`, color: B }}>
          <card.icon className={card.featured ? 'h-6 w-6' : 'h-5 w-5'} />
        </div>
        <h3 className={`mt-6 font-sora font-bold text-gray-950 ${card.featured ? 'text-[26px] leading-tight' : 'text-lg'}`}
          style={{ letterSpacing: '-0.02em' }}>
          {card.title}
        </h3>
        <p className={`mt-3 leading-7 text-gray-500 ${card.featured ? 'max-w-sm text-[15px]' : 'text-sm'}`}>
          {card.description}
        </p>
      </div>

      {card.featured && (
        <div className="relative mt-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: B }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: B }} />
          Since 2000
        </div>
      )}
    </motion.div>
  );
}

export default function WhySection() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: '#f6f8fb' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${B}, transparent)` }} />
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: B }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Financial Institutions Choose Us"
          title="A recovery partner built on integrity, execution and trust."
          description="SM Associates combines institutional experience, field discipline and client-first recovery workflows to support banks, NBFCs and financial institutions."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {whyCards.map((card, i) => <BentoCard key={card.title} card={card} index={i} />)}
        </div>
      </div>
    </section>
  );
}
