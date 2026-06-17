import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

export default function AssetRepossessionPage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Asset Repossession</h3>
        <p className="mt-4 text-slate-500 leading-7">
          Professional repossession services for secured assets including vehicles, equipment, inventory,
          and real estate with documented workflows and regulatory compliance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h4 className="text-xl font-semibold text-blue-950">Asset Types</h4>
        <ul className="mt-4 space-y-2 text-slate-500">
          <li>• Vehicle repossession</li>
          <li>• Equipment and machinery recovery</li>
          <li>• Inventory and stock liquidation</li>
          <li>• Real estate possession</li>
        </ul>
      </motion.div>
    </div>
  );
}