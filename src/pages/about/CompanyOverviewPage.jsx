import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function CompanyOverviewPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Company Overview</h3>
        <p className="mt-4 text-slate-500 leading-7">
          SM Associates Risk Management Pvt Ltd, established in 2000, has grown to become one of Tamil Nadu's most trusted
          recovery and risk management partners. With over 300 employees across field operations, verification teams, and legal
          coordination, we serve banks, NBFCs, housing finance companies, fintech lenders, and asset reconstruction companies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Our Mission</h3>
        <p className="mt-4 text-slate-500 leading-7">
          To provide structured, compliant, and measurable recovery solutions that protect institutional interests while maintaining
          professional conduct across sensitive financial operations.
        </p>
      </motion.div>
    </div>
  );
}