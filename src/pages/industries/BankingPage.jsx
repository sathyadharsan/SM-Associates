import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function BankingPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Banking</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Specialized recovery and collections services for public sector banks, private banks, and cooperative banks
          across retail loans, corporate credit, and agricultural financing portfolios.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Banking Solutions</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Retail loan recovery programs</li>
          <li>• Corporate and SME portfolio management</li>
          <li>• Agricultural and rural loan resolution</li>
          <li>• SARFAESI enforcement for secured loans</li>
        </ul>
      </motion.div>
    </div>
  );
}