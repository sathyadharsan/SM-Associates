import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function RecoveryOsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Recovery Operating System</h3>
        <p className="mt-4 text-slate-500 leading-7">
          An integrated recovery operating ecosystem that brings together verification, collections, fraud control,
          SARFAESI, legal coordination, asset recovery, and auction execution into one controlled framework.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">OS Modules</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Verification engine for pre/post-disbursal checks</li>
          <li>• Collections workflow orchestration</li>
          <li>• Fraud detection and risk intelligence</li>
          <li>• SARFAESI enforcement automation</li>
          <li>• Legal case management</li>
          <li>• Asset recovery tracking</li>
          <li>• Auction coordination</li>
        </ul>
      </motion.div>
    </div>
  );
}