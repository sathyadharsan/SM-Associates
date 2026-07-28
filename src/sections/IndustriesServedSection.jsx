import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Home, Users, CreditCard, Shield, Scale, Briefcase } from 'lucide-react';
import { industriesOverview } from '../data/flagshipHomeData';

const SECTORS = [
  { label: 'Banking',            Icon: Landmark,   grad: 'from-blue-600 to-blue-400',       glow: 'rgba(37,99,235,0.18)' },
  { label: 'NBFC',               Icon: Building2,  grad: 'from-indigo-600 to-indigo-400',   glow: 'rgba(79,70,229,0.18)' },
  { label: 'Housing Finance',    Icon: Home,        grad: 'from-sky-600 to-sky-400',         glow: 'rgba(2,132,199,0.18)' },
  { label: 'Microfinance',       Icon: Users,       grad: 'from-violet-600 to-violet-400',   glow: 'rgba(124,58,237,0.18)' },
  { label: 'Fintech',            Icon: CreditCard,  grad: 'from-blue-500 to-cyan-400',       glow: 'rgba(6,182,212,0.18)' },
  { label: 'Asset Reconstruction',Icon: Scale,      grad: 'from-slate-700 to-slate-500',     glow: 'rgba(71,85,105,0.18)' },
  { label: 'Insurance',          Icon: Shield,      grad: 'from-teal-600 to-emerald-400',    glow: 'rgba(5,150,105,0.18)' },
  { label: 'Commercial Lending', Icon: Briefcase,   grad: 'from-blue-700 to-blue-500',       glow: 'rgba(29,78,216,0.18)' },
];

export default function IndustriesServedSection() {
  return (
    <section
      id="industries"
      style={{ background: 'linear-gradient(160deg,#f8fafc 0%,#eef4fb 50%,#f8fafc 100%)' }}
      className="relative py-20 lg:py-28 overflow-hidden border-t border-slate-200/70"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,114,188,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,114,188,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(0,114,188,0.09)', color: '#0072bc', border: '1px solid rgba(0,114,188,0.2)' }}
          >
            SECTOR SPECIALISATION
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight"
            style={{ fontFamily: 'var(--sans)' }}
          >
            Purpose-Built for Scale
          </h2>
          <p className="mt-3 text-base text-slate-500 font-medium max-w-lg mx-auto">
            Calibrated recovery frameworks across 8 regulated lender segments
          </p>
        </motion.div>

        {/* Icon Grid */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
          {SECTORS.map(({ label, Icon, grad, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.06 }}
              className="group flex flex-col items-center gap-2 lg:gap-3 cursor-pointer"
            >
              {/* Icon tile */}
              <div
                className="relative flex items-center justify-center rounded-2xl transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px]"
                style={{
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                  border: '1px solid #e2e8f0',
                }}
              >
                {/* Gradient bg on hover via overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                {/* Shimmer sweep */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                >
                  <div
                    style={{
                      position: 'absolute', top: 0, left: '-100%',
                      width: '60%', height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                      transform: 'skewX(-20deg)',
                      animation: 'none',
                    }}
                    className="group-hover:animate-[shimmer_0.6s_ease-in-out]"
                  />
                </div>
                <Icon
                  size={22}
                  strokeWidth={1.75}
                  className="relative z-10 transition-colors duration-300 text-[#0072bc] group-hover:text-white sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7"
                />
              </div>

              {/* Label */}
              <span
                className="text-center text-[10px] sm:text-[11px] lg:text-[12px] font-semibold text-slate-600 leading-tight group-hover:text-slate-900 transition-colors duration-200"
                style={{ maxWidth: 64 }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
