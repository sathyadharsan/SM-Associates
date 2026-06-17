import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { clientLogos } from '../data/homeData';

const marqueeLogos = [...clientLogos, ...clientLogos];

export default function ClientTrustSection() {
  return (
    <section id="clients" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Institutional Trust"
          title="Trusted by leading financial institutions."
          description="SM Associates has built long-standing relationships with banks, NBFCs, financial institutions and asset reconstruction companies through consistent execution, professional conduct and measurable recovery outcomes."
        />

        <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 py-8">
          <motion.div className="flex w-max gap-5" animate={{ x: '-50%' }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}>
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="glass-card flex h-24 min-w-[220px] items-center justify-center rounded-[20px] px-8"
              >
                <span className="text-sm font-bold tracking-[0.16em] text-slate-400">{logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
