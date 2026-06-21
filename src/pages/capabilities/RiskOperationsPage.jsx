import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function RiskOperationsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-gray-950">Risk Operations</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Comprehensive risk management including fraud control, verification services, portfolio risk
          analysis, and early warning systems to prevent asset leakage.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-gray-950">Risk Services</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Fraud detection and prevention</li>
          <li>• Borrower and asset verification</li>
          <li>• Portfolio risk scoring</li>
          <li>• Early warning monitoring</li>
        </ul>
      </motion.div>
    </div>
  );
}