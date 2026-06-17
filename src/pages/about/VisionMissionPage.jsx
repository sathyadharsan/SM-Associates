import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function VisionMissionPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Vision</h3>
        <p className="mt-4 text-slate-500 leading-7">
          To be India's most reliable partner for financial institutions seeking structured recovery, risk management, and
          enforcement coordination across secured and unsecured portfolios.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Mission</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Deliver professional recovery operations through disciplined field execution, compliant legal coordination, and
          data-driven risk intelligence that protects institutional reputation and maximizes recovery outcomes.
        </p>
      </motion.div>
    </div>
  );
}