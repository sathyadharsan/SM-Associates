import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function VerificationServicesPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Verification Services</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Pre-disbursal and post-disbursal borrower validation including address verification, business authenticity
          checks, asset inspection, and risk signal reporting. Our field verification teams provide rapid turnaround
          with detailed reporting to support lending decisions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Verification Types</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Residential address verification</li>
          <li>• Business and employment validation</li>
          <li>• Asset and collateral inspection</li>
          <li>• Legal clearance and encumbrance checks</li>
        </ul>
      </motion.div>
    </div>
  );
}