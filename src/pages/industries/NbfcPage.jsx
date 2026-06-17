import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function NbfcPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">NBFC</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Scalable recovery operations designed for high-volume retail and SME lending portfolios with
          flexible workflows and rapid field response capabilities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">NBFC Services</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Consumer durable loan recovery</li>
          <li>• SME and MSME portfolio support</li>
          <li>• Vehicle loan collections</li>
          <li>• Personal loan resolution</li>
        </ul>
      </motion.div>
    </div>
  );
}