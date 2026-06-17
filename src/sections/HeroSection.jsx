import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const kpis = [
  { value: '24+', label: 'Yrs\nIn Operation' },
  { value: '300+', label: 'Recovery\nProfessionals' },
  { value: '5+', label: 'Major Banks\nServed' },
  { value: '5', label: 'Core Service\nLines' }
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-white px-4 py-20">
      <div className="noise-overlay absolute inset-0 opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
          Empanelled with Leading Nationalized Banks & NBFCs
        </span>

        <h1 className="mt-8 text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-blue-950 sm:text-5xl lg:text-6xl">
          Risk Management, Recovery & Legal Execution
          <br />
          <span className="text-blue-700">for Banks and NBFCs</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-500 sm:text-xl">
          SARFAESI possession, field collections, repossession and legal services — managed end-to-end
          by ex-bankers, advocates and chartered accountants since 2000.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-950 px-8 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-blue-700"
          >
            Talk To Our Team
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-950 px-8 py-3.5 text-sm font-bold text-blue-950 transition hover:bg-blue-50"
          >
            View Our Services
          </Link>
        </div>

        <div className="mt-16 grid justify-center gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-transparent px-6 py-8"
            >
              <span className="text-4xl font-bold text-blue-950 sm:text-5xl">{kpi.value}</span>
              <span className="mt-2 whitespace-pre-line text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}