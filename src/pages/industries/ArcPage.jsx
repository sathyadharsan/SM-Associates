import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function ArcPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">ARC</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Operational support for asset reconstruction companies in stressed asset acquisition, enforcement
          actions, and recovery execution with specialized expertise in distressed portfolio management.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">ARC Services</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Stressed asset evaluation and due diligence</li>
          <li>• Enforcement action coordination</li>
          <li>• Recovery execution and monitoring</li>
          <li>• Portfolio performance optimization</li>
        </ul>
      </motion.div>
    </div>
  );
}