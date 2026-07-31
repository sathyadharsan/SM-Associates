import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, TrendingUp, ShieldCheck, Zap, Layers, Plus } from 'lucide-react';

// Counter component for animated currency numbers
function Counter({ value, prefix = '₹', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(end * (1 - Math.pow(2, -10 * progress)));
      setCount(current);
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}</span>;
}

export default function SayHelloShowcaseSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-white overflow-hidden" id="command-center-showcase">
      


      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        
        {/* Header at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Say hello to <span className="text-indigo-600">SM Associates</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mt-4 font-medium">
            Manage field verification, legal notices, SARFAESI coordination, and portfolio resolution from one unified operating system.
          </p>
        </motion.div>

        {/* Central Phone & Arc Fan Cards Showcase */}
        <div className="relative max-w-4xl mx-auto mt-8 min-h-[580px] sm:min-h-[640px] flex items-start justify-center">

          {/* ══════════════════════════════════════════════════════════ */}
          {/* 🌫️ BROAD CONCENTRIC SMOKY RADIAL BANDS (NO BORDER LINES - 100% MATCHING PICTURE) */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div 
            aria-hidden 
            className="absolute top-[260px] sm:top-[280px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center"
          >
            {/* Outer Broad Smoky Band 3 */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[440px] h-[440px] sm:w-[680px] sm:h-[680px] rounded-full bg-gradient-to-b from-indigo-100/40 via-indigo-50/20 to-transparent blur-2xl flex items-center justify-center"
            >
              {/* Middle Broad Smoky Band 2 */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-indigo-100/60 via-purple-50/40 to-blue-50/30 blur-xl flex items-center justify-center"
              >
                {/* Inner Broad Smoky Band 1 */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-b from-indigo-200/50 via-white/80 to-indigo-50/40 blur-lg flex items-center justify-center"
                />
              </motion.div>
            </motion.div>

            {/* Continuous Smooth Radiating Smoke Ripples */}
            {[0, 2.5].map((delay, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: [0.6, 1.35],
                  opacity: [0.45, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay }}
                className="absolute w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full bg-indigo-100/40 blur-2xl pointer-events-none"
              />
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* FLOATING FAN CARDS WITH ANIMATED ENTRANCE & COUNTERS */}
          {/* ══════════════════════════════════════════════════════════ */}

          {/* 1. TOP-LEFT FAR CARD (Rotated Left -14deg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 60, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -14 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, stiffness: 90, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="absolute top-6 left-2 sm:left-6 lg:-left-4 z-20 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-lg text-left w-[170px] sm:w-[210px] transition-shadow duration-300"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="bg-slate-900 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                <Layers size={10} /> Target
              </span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400">Portfolio Target</div>
            <div className="text-base sm:text-xl font-black text-slate-900 mt-0.5">
              <Counter value={201928000} />
            </div>
          </motion.div>

          {/* 2. TOP-LEFT INNER CARD (Rotated Left -6deg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 40, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, stiffness: 90, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="absolute top-28 left-6 sm:left-24 lg:left-16 z-20 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-lg text-left w-[175px] sm:w-[215px] transition-shadow duration-300"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="bg-indigo-50 text-indigo-600 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                <ShieldCheck size={10} /> SARFAESI 13(2)
              </span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400">Secured Assets</div>
            <div className="text-base sm:text-xl font-black text-slate-900 mt-0.5">
              <Counter value={375902000} />
            </div>
          </motion.div>

          {/* 3. SMALL FLOATING BADGE (TOP CENTER-LEFT) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 14, stiffness: 120, delay: 0.4 }}
            className="absolute top-2 left-[28%] sm:left-[34%] z-30 bg-indigo-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5"
          >
            <Zap size={12} /> Auto-Trace
          </motion.div>

          {/* 4. SMALL FLOATING BADGE (TOP CENTER-RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 14, stiffness: 120, delay: 0.45 }}
            className="absolute top-10 right-[28%] sm:right-[34%] z-30 bg-indigo-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5"
          >
            <Sparkles size={12} /> Notice Sent
          </motion.div>

          {/* 5. TOP-RIGHT ARC GAUGE CARD (Rotated Right +8deg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -40, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, stiffness: 90, delay: 0.35 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="absolute top-4 right-2 sm:right-6 lg:-right-2 z-20 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-lg text-center w-[180px] sm:w-[220px] transition-shadow duration-300"
          >
            {/* SVG Semi-Circle Arc Gauge */}
            <div className="relative w-28 h-14 mx-auto mb-2 flex items-end justify-center overflow-hidden">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e0e7ff" strokeWidth="10" fill="none" strokeDasharray="125 250" strokeLinecap="round" />
                <motion.circle
                  cx="50" cy="50" r="40" stroke="#4f46e5" strokeWidth="10" fill="none"
                  strokeDasharray="95 250" strokeLinecap="round"
                  initial={{ strokeDasharray: '0 250' }}
                  whileInView={{ strokeDasharray: '95 250' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                />
              </svg>
            </div>

            <div className="text-[11px] font-semibold text-slate-400">Resolved Today</div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
              <Counter value={2248000} />
            </div>
            
            <button className="mt-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-[11px] font-bold px-3 py-1 rounded-full flex items-center justify-center gap-1 mx-auto transition-colors">
              <Plus size={11} /> Add Cases
            </button>
          </motion.div>

          {/* 6. TOP-RIGHT FAR BAR GRAPH CARD (Rotated Right +14deg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -60, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 14 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, stiffness: 90, delay: 0.45 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="absolute top-32 right-6 sm:right-20 lg:right-12 z-20 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-lg text-left w-[160px] sm:w-[190px] transition-shadow duration-300"
          >
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Recovery Velocity</div>
            
            {/* Mini Bar Graph */}
            <div className="flex items-end justify-between h-14 gap-1 pt-2">
              {[35, 45, 30, 60, 50, 75, 65, 90].map((h, idx) => (
                <div key={idx} className="w-full bg-indigo-100 rounded-t-sm relative overflow-hidden" style={{ height: `${h}%` }}>
                  <motion.div
                    initial={{ height: '0%' }}
                    whileInView={{ height: `${h * 0.75}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.05 }}
                    className="absolute bottom-0 inset-x-0 bg-indigo-600 rounded-t-sm"
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] font-bold text-emerald-600 mt-2 flex items-center gap-1">
              <TrendingUp size={11} /> +24.8% vs last bucket
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* CENTER POS MACHINE TERMINAL MOCKUP — REAL 3D HARDWARE SIDE VIEW */}
          {/* ══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: 0, rotateX: 0, rotateZ: 0 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              rotateY: -38, // PRONOUNCED 3D ISOMETRIC SIDE VIEW TILT
              rotateX: 22,
              rotateZ: 8,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 2.2, 
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            className="relative z-10 mt-8 sm:mt-4 w-[290px] sm:w-[330px]"
          >
            {/* TOP BULGING PRINTER HEAD HOOD (A REAL POS TERMINAL COMPARTMENT) */}
            <div 
              className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 rounded-t-[44px] p-4 pb-3 border-t-4 border-x-4 border-slate-700 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] relative z-20 flex flex-col items-center justify-center -mb-3"
              style={{ transform: 'translateZ(12px)' }}
            >
              {/* Contactless / NFC Symbol on Top Printer Cylinder Hood */}
              <div className="flex items-center justify-center gap-1.5 text-slate-300 mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.5]">
                  <path d="M12 2a10 10 0 0 1 0 20" strokeLinecap="round" />
                  <path d="M12 6a6 6 0 0 1 0 12" strokeLinecap="round" />
                  <path d="M12 10a2 2 0 0 1 0 4" strokeLinecap="round" />
                </svg>
                <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-200">NFC CONTACTLESS</span>
              </div>

              {/* Thermal Receipt Paper Tear Slot */}
              <div className="w-full bg-slate-950 rounded-xl p-1.5 border border-slate-700 flex items-center justify-between px-3 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500" />
                  <div className="h-1.5 w-20 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-10 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-400">THERMAL PRINTER</span>
              </div>
            </div>

            {/* POS Machine Main Body & Touchscreen Frame */}
            <div 
              className="bg-slate-950 rounded-b-[44px] rounded-t-[20px] border-x-4 border-b-4 border-slate-800 relative z-10 overflow-visible p-3.5 pt-4 pb-5"
              style={{
                boxShadow: '18px 24px 0px #0b0f19, -28px 42px 90px rgba(15,23,42,0.65)',
              }}
            >
              {/* Right Side Card Swiping Track (Protruding Hardware Slot) */}
              <div className="absolute -right-4 top-24 w-4 h-40 bg-gradient-to-r from-slate-900 to-slate-800 border-y-2 border-r-2 border-slate-700 rounded-r-xl shadow-lg flex flex-col items-center justify-center text-[7px] font-mono text-slate-300 gap-2 z-30">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="writing-mode-vertical tracking-widest font-bold text-[7px]">MAGSTRIPE SWIPE</span>
              </div>

              {/* POS Machine Touchscreen Display */}
              <div className="bg-white rounded-[24px] overflow-hidden text-left p-3.5 pt-3 pb-4 relative min-h-[460px] border-2 border-slate-300 shadow-inner">
                
                {/* POS Screen Top Status Bar */}
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 px-1 mb-3 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                    9:41
                  </span>
                  <span className="text-[#0072bc] font-extrabold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    SM POS TERMINAL
                  </span>
                </div>

                {/* User Profile / Company Header */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0072bc] to-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    SM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">SM Associates</div>
                    <div className="text-[10px] text-slate-400">Company Overview</div>
                  </div>
                </div>

                {/* Section Label */}
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0072bc] mb-2.5">KEY HIGHLIGHTS</div>

                {/* 2x3 Stats Grid — preserving exact screen data */}
                <div className="grid grid-cols-2 gap-2">

                  {/* 1. 25+ YRS */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">🕐 #1</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={25} prefix="" /><span className="text-sm font-extrabold text-blue-400"> + YRS</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">Continuous Operations</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">Since 2000 — through every credit cycle.</div>
                  </motion.div>

                  {/* 2. 19 Branch Network */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">📍 #2</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={19} prefix="" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">Branch Network</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">Under direct management across South India.</div>
                  </motion.div>

                  {/* 3. 1,500+ Field Workforce */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">👥 #3</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={1500} prefix="" /><span className="text-sm font-extrabold text-blue-400"> +</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">Field Workforce</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">IIBF DRA-certified &amp; continuously audited.</div>
                  </motion.div>

                  {/* 4. 5 States Covered */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.5 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">🗺️ #4</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={5} prefix="" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">States Covered</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">TN, Karnataka, Kerala, AP &amp; Telangana.</div>
                  </motion.div>

                  {/* 5. 1M+ Accounts Managed */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.6 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">📱 #5</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={1} prefix="" /><span className="text-sm font-extrabold text-blue-400">M+</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">Accounts Managed</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">Resolved across retail loan classes.</div>
                  </motion.div>

                  {/* 6. 100+ Institutional Partners */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.7 }}
                    className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm"
                  >
                    <div className="text-[9px] text-slate-400 mb-1">🤝 #6</div>
                    <div className="text-lg font-black text-[#0072bc] leading-none">
                      <Counter value={100} prefix="" /><span className="text-sm font-extrabold text-blue-400"> +</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 mt-1">Institutional Partners</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">Banks, NBFCs, ARCs &amp; HFCs.</div>
                  </motion.div>

                </div>
              </div>

              {/* POS Android Hardware Navigation Buttons (Back, Home, Recent) */}
              <div className="mt-3 flex items-center justify-center gap-6 text-slate-400 text-xs">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-400 hover:bg-slate-300 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-slate-400 hover:bg-slate-200 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-xs border-2 border-slate-400 hover:bg-slate-300 transition-colors" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
