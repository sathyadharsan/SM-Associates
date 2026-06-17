import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function RecoveryServicesPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Recovery Services</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Portfolio-led recovery strategies designed for measurable collections with compliant execution across
          secured and unsecured lending portfolios. Our approach combines behavioral analysis, risk segmentation,
          and structured negotiation to maximize recovery outcomes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Key Features</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Risk-based account segmentation</li>
          <li>• Multi-channel collection workflows</li>
          <li>• Performance tracking and reporting</li>
          <li>• Compliance-first execution</li>
        </ul>
      </motion.div>
    </div>
  );
}