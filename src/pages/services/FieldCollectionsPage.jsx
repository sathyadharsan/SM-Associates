import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function FieldCollectionsPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Field Collections</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Disciplined field collection operations across portfolios, geographies, and product categories
          with escalation protocols, performance tracking, and compliance monitoring.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Collection Approach</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Field visit scheduling and tracking</li>
          <li>• Escalation and follow-up protocols</li>
          <li>• Negotiation and settlement support</li>
          <li>• Performance analytics and reporting</li>
        </ul>
      </motion.div>
    </div>
  );
}