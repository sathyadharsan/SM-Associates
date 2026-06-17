import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function LegalCoordinationPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Legal Coordination</h3>
        <p className="mt-4 text-slate-500 leading-7">
          End-to-end legal coordination including advocate liaison, court proceedings, documentation
          support, and litigation management for recovery and enforcement actions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Legal Services</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• SARFAESI legal proceedings</li>
          <li>• Civil suit filing and management</li>
          <li>• Documentation and filing support</li>
          <li>• Advocate and court coordination</li>
        </ul>
      </motion.div>
    </div>
  );
}