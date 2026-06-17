import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function FintechPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Fintech</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Fast, compliant, and data-driven recovery operations designed for digital lenders and
          technology-enabled financial institutions with API integration and real-time reporting.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Digital Lender Services</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• API-integrated recovery workflows</li>
          <li>• Real-time status updates</li>
          <li>• Digital communication protocols</li>
          <li>• Risk analytics and reporting</li>
        </ul>
      </motion.div>
    </div>
  );
}