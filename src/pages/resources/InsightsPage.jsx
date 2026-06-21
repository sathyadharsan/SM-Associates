import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function InsightsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-gray-950">Insights</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Operational insights and data-driven analysis for recovery leaders managing portfolios
          across banking, NBFC, housing finance, and ARC sectors.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-[24px] p-6"
        >
          <h4 className="text-lg font-semibold text-gray-950">Recovery Benchmarks</h4>
          <p className="mt-3 text-sm text-slate-500">Performance metrics and industry standards.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-[24px] p-6"
        >
          <h4 className="text-lg font-semibold text-gray-950">Compliance Updates</h4>
          <p className="mt-3 text-sm text-slate-500">Latest regulatory changes affecting recovery.</p>
        </motion.div>
      </div>
    </div>
  );
}