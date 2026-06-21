import { motion } from 'framer-motion';
import { Activity, FileCheck, Gavel, MapPin, ShieldCheck, TrendingUp } from 'lucide-react';

const floatingCard = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.4, 0]
  }
};

const floatingCards = [
  { title: 'Verification Complete', value: '98%', icon: ShieldCheck, delay: 0.1 },
  { title: 'Recovery Pipeline', value: '₹42.8 Cr', icon: TrendingUp, delay: 0.7 },
  { title: 'Legal Coordination', value: '124 Active', icon: Gavel, delay: 1.2 },
  { title: 'Asset Status', value: '86% Tracked', icon: FileCheck, delay: 1.7 },
  { title: 'Portfolio Risk', value: 'Controlled', icon: Activity, delay: 2.1 }
];

export default function FinancialIllustration() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="absolute -right-8 bottom-12 h-48 w-48 rounded-full bg-navy-800/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card relative overflow-hidden rounded-[28px] p-5"
      >
        <div className="noise-overlay absolute inset-0 opacity-70" />

        <div className="relative grid gap-4">
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-5 text-white">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Recovery Operations Dashboard</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">Risk Management OS</h3>
              </div>
              <div className="rounded-2xl bg-white/12 p-3 text-[#3366FF]">
                <Activity className="h-6 w-6" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ['Verification', '98%'],
                ['Collections', '74%'],
                ['Legal', '42']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-3">
                  <p className="text-xs text-white/65">{label}</p>
                  <p className="mt-2 text-xl font-semibold tabular-nums">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex h-32 items-end gap-3 rounded-2xl bg-white/10 p-4">
              {[38, 58, 45, 72, 64, 86, 76].map((height, index) => (
                <motion.div
                  key={height}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{ duration: 0.9, delay: 0.15 * index }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-gold-500 to-gold-400/80"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {floatingCards.slice(0, 4).map(card => (
              <motion.div
                key={card.title}
                variants={floatingCard}
                animate="animate"
                transition={{ duration: 5, repeat: Infinity, delay: card.delay }}
                className="glass-card rounded-3xl p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#3366FF]/5 text-[#3366FF]">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#3366FF]/10 px-2.5 py-1 text-xs font-semibold text-gray-900">Live</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">{card.value}</p>
              </motion.div>
            ))}

            <motion.div
              variants={floatingCard}
              animate="animate"
              transition={{ duration: 6, repeat: Infinity, delay: 1.2 }}
              className="glass-card rounded-3xl p-4 sm:col-span-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3366FF] text-gray-950">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Tamil Nadu Operations</p>
                    <p className="text-xs leading-5 text-slate-500">Pan-state recovery and collections coverage.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '82%' }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="h-full rounded-full bg-[#3366FF]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
