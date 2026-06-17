import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function SarfaesiServicesPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">SARFAESI Services</h3>
        <p className="mt-4 text-slate-500 leading-7">
          End-to-end SARFAESI enforcement support including possession coordination, documentation, legal recovery
          alignment, and asset monetization. We navigate the complexities of the Securitization and Reconstruction
          of Financial Assets Act for optimal secured asset recovery.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Our Capabilities</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Section 13(2) and 13(4) enforcement support</li>
          <li>• Asset possession and takeover coordination</li>
          <li>• Legal documentation and advocate coordination</li>
          <li>• Auction preparation and bidder engagement</li>
        </ul>
      </motion.div>
    </div>
  );
}