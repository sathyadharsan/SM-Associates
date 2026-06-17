import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';

const locations = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Vellore', 'Erode'];

export default function OperationalPresencePage() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[24px] p-8"
      >
        <h3 className="text-2xl font-semibold text-blue-950">Operational Presence</h3>
        <p className="mt-4 text-slate-500 leading-7">
          With pan-Tamil Nadu coverage, our field teams operate across 8+ districts ensuring rapid response
          and localized recovery operations.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((location, index) => (
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="glass-card flex items-center justify-center rounded-[24px] py-8"
          >
            <span className="text-lg font-semibold text-blue-950">{location}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}