import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, Car, FileText, Gavel, MapPin, Scale, SearchCheck, ShieldAlert, TrendingUp } from 'lucide-react';
import { recoveryModules } from '../data/homeData';

const iconMap = {
  SearchCheck,
  MapPin,
  TrendingUp,
  ShieldAlert,
  FileText,
  Scale,
  Car,
  Gavel
};

const positions = [
  { top: '0%', left: '0%' },
  { top: '0%', left: '50%' },
  { top: '0%', left: '100%' },
  { top: '33%', left: '0%' },
  { top: '33%', left: '100%' },
  { top: '66%', left: '0%' },
  { top: '66%', left: '50%' },
  { top: '66%', left: '100%' },
  { top: '100%', left: '50%' }
];

export default function RecoveryOSVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = recoveryModules[activeIndex];

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-8 bottom-12 h-48 w-48 rounded-full bg-blue-800/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card relative overflow-hidden rounded-[32px] p-5"
      >
        <div className="noise-overlay absolute inset-0 opacity-70" />

        <div className="relative">
          <div className="rounded-[28px] bg-gradient-to-br from-blue-950 to-blue-900 p-6 text-white">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Interactive Recovery Operating System</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">Risk Management OS</h3>
              </div>
              <div className="rounded-2xl bg-white/12 p-3 text-yellow-400">
                <Activity className="h-6 w-6" />
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-[24px] bg-white/10 p-4">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 400">
                {recoveryModules.map((_, index) => {
                  const x = index % 3 === 0 ? 70 : index % 3 === 1 ? 210 : 350;
                  const y = index < 3 ? 50 : index < 6 ? 160 : 270;
                  return (
                    <motion.line
                      key={index}
                      x1="210"
                      y1="160"
                      x2={x}
                      y2={y}
                      stroke={activeIndex === index ? '#E6C87A' : 'rgba(255,255,255,0.22)'}
                      strokeWidth={activeIndex === index ? 2.5 : 1.5}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.08 * index }}
                    />
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-blue-950 text-center shadow-enterprise">
                <div>
                  <p className="text-xs text-white/60">Live OS</p>
                  <p className="text-lg font-bold">SM</p>
                </div>
              </div>
              {recoveryModules.map((module, index) => {
                const Icon = iconMap[module.icon] || ShieldAlert;
                return (
                  <motion.button
                    key={module.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`absolute flex h-20 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border p-3 text-center transition ${
                      activeIndex === index
                        ? 'border-yellow-400 bg-white text-blue-950 shadow-enterprise'
                        : 'border-white/15 bg-white/10 text-white hover:bg-white/15'
                    }`}
                    style={positions[index]}
                  >
                    <Icon className={`h-5 w-5 ${activeIndex === index ? 'text-yellow-500' : 'text-white'}`} />
                    <span className="mt-1 text-[11px] font-bold leading-tight">{module.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="mt-4 rounded-[24px] border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-500">{active.signal}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-blue-950">{active.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{active.description}</p>
                </div>
                <div className="rounded-2xl bg-blue-950 p-3 text-white">
                  {(() => {
                    const Icon = iconMap[active.icon];
                    return Icon ? <Icon className="h-5 w-5" /> : <ShieldAlert className="h-5 w-5" />;
                  })()}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-blue-50 px-4 py-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Outcome</p>
                  <p className="text-sm font-bold text-blue-950">{active.outcome}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-blue-700" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}