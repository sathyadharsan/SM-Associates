import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { trustLogos } from '../data/homeData';

export default function TrustSection() {
  return (
    <section id="trust" className="relative py-14 sm:py-16" style={{ background: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Institutional Trust"
          title="Empanelled With Leading Nationalized Banks & NBFCs"
          description="Serving banks, NBFCs, housing finance companies and financial institutions with recovery, collections and risk management operations."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
              className="glass-card flex h-20 items-center justify-center rounded-[18px] border border-slate-200 bg-white p-4 transition duration-300 hover:shadow-enterpriseHover"
            >
              <img src={logo.logo} alt={logo.fullName} className="h-9 w-auto max-w-[140px] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}