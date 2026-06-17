import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Banknote } from 'lucide-react';

const clientLogos = [
  { name: 'SBI', initials: 'SBI' },
  { name: 'Indian Bank', initials: 'IB' },
  { name: 'Punjab National Bank', initials: 'PNB' },
  { name: 'Bank of Baroda', initials: 'BOB' },
  { name: 'Canara Bank', initials: 'CB' },
  { name: 'ICICI Bank', initials: 'ICICI' },
  { name: 'HDFC Bank', initials: 'HDFC' },
  { name: 'Citibank', initials: 'Citi' },
  { name: 'Union Bank', initials: 'UB' },
  { name: 'PNB Housing', initials: 'PNBH' },
  { name: 'L&T Finance', initials: 'L&T' },
  { name: 'Mahindra Finance', initials: 'MF' }
];

export default function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Institutional Trust"
          title="Trusted by Leading Financial Institutions"
          description="Serving banks, NBFCs, housing finance companies and financial institutions with recovery, collections and risk management operations."
          className="max-w-4xl"
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
              className="glass-card flex h-20 items-center justify-center rounded-[18px] border border-slate-200 bg-white p-4 grayscale transition duration-300 hover:grayscale-0 hover:shadow-enterpriseHover"
            >
              <div className="flex flex-col items-center">
                <Banknote className="h-6 w-6 text-blue-950" />
                <span className="mt-1 text-xs font-bold tracking-[0.15em] text-slate-500">{logo.initials}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}