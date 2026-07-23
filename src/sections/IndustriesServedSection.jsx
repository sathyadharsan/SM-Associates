import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers as HubLayers
} from 'lucide-react';
import { industriesOverview } from '../data/flagshipHomeData';
import RichIcon from '../components/sections/shared/RichIcon';

// 8 Distinct Vibrant Multi-Color HSL Palette for 8 Regulated Lender Segments
const SECTOR_DESIGN_STYLES = [
  { color: '#0072bc', gradient: 'from-[#0072bc] to-[#0284c7]', shadow: 'rgba(0, 114, 188, 0.35)', badgeBg: 'bg-[#0072bc]/10' }, // Banking
  { color: '#059669', gradient: 'from-[#059669] to-[#10b981]', shadow: 'rgba(5, 150, 105, 0.35)', badgeBg: 'bg-[#059669]/10' },   // NBFC
  { color: '#d97706', gradient: 'from-[#d97706] to-[#fbbf24]', shadow: 'rgba(217, 119, 6, 0.35)', badgeBg: 'bg-[#d97706]/10' },  // Housing Finance
  { color: '#7c3aed', gradient: 'from-[#7c3aed] to-[#a855f7]', shadow: 'rgba(124, 58, 237, 0.35)', badgeBg: 'bg-[#7c3aed]/10' }, // Microfinance
  { color: '#0284c7', gradient: 'from-[#0284c7] to-[#38bdf8]', shadow: 'rgba(2, 132, 199, 0.35)', badgeBg: 'bg-[#0284c7]/10' },  // Fintech
  { color: '#ea580c', gradient: 'from-[#ea580c] to-[#f97316]', shadow: 'rgba(234, 88, 12, 0.35)', badgeBg: 'bg-[#ea580c]/10' },  // Asset Reconstruction (ARC)
  { color: '#f43f5e', gradient: 'from-[#f43f5e] to-[#fb7185]', shadow: 'rgba(244, 63, 94, 0.35)', badgeBg: 'bg-[#f43f5e]/10' },   // Insurance
  { color: '#4f46e5', gradient: 'from-[#4f46e5] to-[#6366f1]', shadow: 'rgba(79, 70, 229, 0.35)', badgeBg: 'bg-[#4f46e5]/10' },  // Commercial Lending
];

export default function IndustriesServedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeInd = industriesOverview[activeTab] || industriesOverview[0];
  const activeStyle = SECTOR_DESIGN_STYLES[activeTab % SECTOR_DESIGN_STYLES.length];

  // Auto-rotate 8 radial sector nodes every 2 seconds (2000ms), pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % industriesOverview.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-white py-20 lg:py-28 border-y border-slate-200/80" 
      id="industries"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Who We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Built for regulated<br />lenders, at scale.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Deploying specialized recovery frameworks, certified field teams, and legal enforcement customized for 8 regulated lender segments.
          </p>
        </div>

        {/* ═══ 1. INTERACTIVE CENTRAL RADIAL HUB DIAGRAM (Auto-rotates 2s) ═══ */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative flex items-center justify-center w-full max-w-[480px] aspect-square">
            
            {/* Outer Subtle Dash Ring */}
            <div className="absolute inset-2 rounded-full border border-dashed border-slate-300 animate-[spin_100s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-slate-200 pointer-events-none" />

            {/* Central Dark Navy Core Node */}
            <motion.div 
              className="relative z-30 flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#0B132B] text-white shadow-[0_20px_50px_rgba(11,19,43,0.4)] border-4 border-white p-3 text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/30 text-blue-400 border border-blue-400/40 mb-1">
                <HubLayers className="h-4.5 w-4.5 animate-pulse" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                REGULATED LENDING
              </span>
              <span className="mt-0.5 text-[8.5px] font-bold tracking-widest text-blue-400 uppercase">
                SM OPERATIONAL HUB
              </span>
            </motion.div>

            {/* Render 8 Radial Petal Sector Nodes with Multi-Color HSL Styling */}
            {industriesOverview.map((ind, i) => {
              const total = industriesOverview.length;
              const angleDeg = -90 + (i * 360) / total;
              const angleRad = (angleDeg * Math.PI) / 180;
              
              const radiusPct = 38;
              const xPct = 50 + radiusPct * Math.cos(angleRad);
              const yPct = 50 + radiusPct * Math.sin(angleRad);

              const isActive = activeTab === i;
              const style = SECTOR_DESIGN_STYLES[i % SECTOR_DESIGN_STYLES.length];

              return (
                <React.Fragment key={ind.name}>
                  {/* SVG Connecting Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${xPct}%`}
                      y2={`${yPct}%`}
                      stroke={isActive ? style.color : '#CBD5E1'}
                      strokeWidth={isActive ? '3' : '1.5'}
                      strokeDasharray={isActive ? 'none' : '3 3'}
                      className="transition-all duration-300"
                    />
                  </svg>

                  {/* Radial Petal Node Button */}
                  <motion.button
                    type="button"
                    onClick={() => setActiveTab(i)}
                    onMouseEnter={() => setActiveTab(i)}
                    style={{
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                    }}
                    className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-18 h-18 sm:w-22 sm:h-22 rounded-full text-white transition-all duration-300 cursor-pointer ${
                      isActive ? 'scale-110 z-40 ring-4 ring-white shadow-2xl' : 'hover:scale-105 opacity-90'
                    }`}
                  >
                    <div 
                      className={`w-full h-full rounded-full bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center p-2 text-center shadow-lg border-2 border-white/40`}
                      style={{
                        boxShadow: isActive 
                          ? `0 12px 28px ${style.shadow}, inset 0 2px 4px rgba(255,255,255,0.4)`
                          : `0 6px 16px ${style.shadow}`
                      }}
                    >
                      <div className="mb-0.5">
                        <RichIcon type={ind.icon || ind.name} size={24} />
                      </div>
                      <span className="text-[8.5px] sm:text-[9.5px] font-extrabold leading-tight text-white tracking-tight line-clamp-2 px-1">
                        {ind.name}
                      </span>
                    </div>
                  </motion.button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ═══ 2. ACTIVE INDUSTRY INSPECTION STAGE ═══ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeInd.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="rounded-3xl border-2 bg-white p-6 sm:p-9 shadow-2xl relative overflow-hidden"
            style={{ borderColor: activeStyle.color }}
          >
            {/* Top Sector Color Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeStyle.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Segment Specifications (7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-xs shrink-0">
                    <RichIcon type={activeInd.icon || activeInd.name} size={48} />
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-black uppercase tracking-widest block"
                      style={{ color: activeStyle.color }}
                    >
                      INSTITUTIONAL SEGMENT 0{activeTab + 1} • REGULATED LENDER
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {activeInd.name}
                    </h3>
                  </div>
                </div>

                {/* 100% Preserved Industry Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {activeInd.desc}
                </p>

                {/* Key Workflow Checkmark Cards */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 size={16} style={{ color: activeStyle.color }} /> 
                    <span>Tailored Recovery Workflows</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 size={16} style={{ color: activeStyle.color }} /> 
                    <span>Regulatory Audit Trail</span>
                  </div>
                </div>

                {/* Framework CTA Link with Explicit Pure White Text */}
                <div className="pt-3">
                  <Link
                    to={activeInd.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:opacity-95"
                    style={{ backgroundColor: activeStyle.color, color: '#ffffff' }}
                  >
                    <span style={{ color: '#ffffff' }}>View {activeInd.name} Framework</span>
                    <ArrowRight size={14} style={{ color: '#ffffff' }} />
                  </Link>
                </div>
              </div>

              {/* Right Workflow Operations Console (5 Cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-6 sm:p-7 rounded-2xl space-y-5 border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    DEPLOYMENT STATUS
                  </span>
                  <span className="text-[10px] font-black tracking-wider text-blue-300 bg-blue-500/20 px-2.5 py-1 rounded-md border border-blue-400/30">
                    LIVE IN SOUTH INDIA
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Operational Focus:
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                    <li className="flex items-center gap-2.5">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Custom portfolio ingestion & mapping</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Field officer geo-tracking</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Milestone-based recovery reporting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>100% RBI Fair Practice Conduct</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>PAN-SOUTH INDIA SLA</span>
                  <span className="text-blue-400">19 REGIONAL BRANCHES</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
