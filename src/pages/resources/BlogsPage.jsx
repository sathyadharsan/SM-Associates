import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function BlogsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Blogs</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Thought leadership and industry insights on recovery operations, risk management, SARFAESI,
          legal coordination, and financial institution best practices.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-[24px] p-6"
        >
          <h4 className="text-lg font-semibold text-blue-950">Recovery Trends 2024</h4>
          <p className="mt-3 text-sm text-slate-500">Emerging patterns in debt recovery and collections.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-[24px] p-6"
        >
          <h4 className="text-lg font-semibold text-blue-950">SARFAESI Deep Dive</h4>
          <p className="mt-3 text-sm text-slate-500">Legal considerations and operational best practices.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-[24px] p-6"
        >
          <h4 className="text-lg font-semibold text-blue-950">Risk Intelligence</h4>
          <p className="mt-3 text-sm text-slate-500">Fraud detection strategies for lenders.</p>
        </motion.div>
      </div>
    </div>
  );
}