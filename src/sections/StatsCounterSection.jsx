import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, ShieldCheck, MapPin, Building2, Award } from 'lucide-react';

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const startVal = 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startVal + (end - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingUp,
    value: 485,
    suffix: ' Cr+',
    prefix: '₹',
    label: 'Portfolio Managed',
    sublabel: 'Total NPA book under active recovery',
    color: 'from-[#0072bc] to-[#1a84c8]',
    glow: 'rgba(0,114,188,0.25)',
  },
  {
    icon: Users,
    value: 1500,
    suffix: '+',
    prefix: '',
    label: 'Field Workforce',
    sublabel: 'IIBF DRA-certified agents across South India',
    color: 'from-[#005291] to-[#0072bc]',
    glow: 'rgba(0,82,145,0.25)',
  },
  {
    icon: Building2,
    value: 100,
    suffix: '+',
    prefix: '',
    label: 'Institutional Partners',
    sublabel: 'Banks, NBFCs, ARCs & HFCs served',
    color: 'from-[#1a84c8] to-[#3d9ed6]',
    glow: 'rgba(26,132,200,0.25)',
  },
  {
    icon: MapPin,
    value: 19,
    suffix: '',
    prefix: '',
    label: 'Branch Offices',
    sublabel: 'Under direct management across 5 states',
    color: 'from-[#0072bc] to-[#005291]',
    glow: 'rgba(0,114,188,0.25)',
  },
  {
    icon: ShieldCheck,
    value: 25,
    suffix: '+ Yrs',
    prefix: '',
    label: 'Continuous Operations',
    sublabel: 'Since 2000 — through every credit cycle',
    color: 'from-[#005291] to-[#1a84c8]',
    glow: 'rgba(0,82,145,0.25)',
  },
  {
    icon: Award,
    value: 1,
    suffix: 'M+',
    prefix: '',
    label: 'Accounts Managed',
    sublabel: 'Resolved across retail loan classes',
    color: 'from-[#3d9ed6] to-[#0072bc]',
    glow: 'rgba(61,158,214,0.25)',
  },
];

export default function StatsCounterSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a1628]" id="stats-counter">
      
      {/* Background atmosphere */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0072bc]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1a84c8]/8 blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#3d9ed6] bg-[#0072bc]/15 border border-[#0072bc]/30 mb-5">
            <TrendingUp size={12} /> Track Record
          </span>
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-[1.05]">
            Numbers that<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#1a84c8] to-[#3d9ed6]">
              speak for themselves
            </span>
          </h2>
          <p className="text-slate-400 text-lg mt-5 max-w-xl mx-auto">
            25+ years of institutional-grade recovery operations across South India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group cursor-default"
              >
                {/* Card */}
                <div className="relative p-7 rounded-3xl border border-white/8 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-[#0072bc]/40 group-hover:bg-white/8">
                  
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow} 0%, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Big Number */}
                  <div className={`text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color} leading-none mb-2`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>

                  {/* Label */}
                  <div className="text-white font-bold text-base mt-2">{stat.label}</div>
                  <div className="text-slate-500 text-xs mt-1 leading-relaxed">{stat.sublabel}</div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.color} opacity-[0.06] blur-xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
