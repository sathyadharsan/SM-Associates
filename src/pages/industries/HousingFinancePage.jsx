import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function HousingFinancePage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Housing Finance</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Specialized recovery and repossession support for housing and mortgage portfolios with legal
          expertise in property recovery and eviction procedures.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Mortgage Recovery</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Property possession and eviction support</li>
          <li>• Legal documentation and court coordination</li>
          <li>• Valuation and auction preparation</li>
          <li>• Regulatory compliance management</li>
        </ul>
      </motion.div>
    </div>
  );
}