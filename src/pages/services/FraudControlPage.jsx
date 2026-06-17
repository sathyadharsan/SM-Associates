import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function FraudControlPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Fraud Control</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Investigation-led fraud prevention and risk intelligence to identify suspicious lending patterns,
          prevent portfolio leakage, and support recovery operations with actionable intelligence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Fraud Detection Areas</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Application and document fraud</li>
          <li>• Behavioral anomaly detection</li>
          <li>• Field intelligence and reporting</li>
          <li>• Portfolio risk monitoring</li>
        </ul>
      </motion.div>
    </div>
  );
}