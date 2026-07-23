import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';
import RichIcon from '../components/sections/shared/RichIcon';

const iconMap = { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch };

const nodeColors = [
  { bg: 'bg-[#0072bc]', hex: '#0072bc', text: 'text-[#0072bc]', border: 'border-[#0072bc]', ring: 'ring-[#0072bc]/25', border30: 'border-[#0072bc]/40', lightBg: 'bg-[#0072bc]/10', hoverBg: 'hover:bg-[#005f9e]' },
  { bg: 'bg-teal-600', hex: '#0d9488', text: 'text-teal-600', border: 'border-teal-600', ring: 'ring-teal-600/25', border30: 'border-teal-600/40', lightBg: 'bg-teal-600/10', hoverBg: 'hover:bg-teal-700' },
  { bg: 'bg-indigo-600', hex: '#4f46e5', text: 'text-indigo-600', border: 'border-indigo-600', ring: 'ring-indigo-600/25', border30: 'border-indigo-600/40', lightBg: 'bg-indigo-600/10', hoverBg: 'hover:bg-indigo-700' },
  { bg: 'bg-amber-600', hex: '#d97706', text: 'text-amber-600', border: 'border-amber-600', ring: 'ring-amber-600/25', border30: 'border-amber-600/40', lightBg: 'bg-amber-600/10', hoverBg: 'hover:bg-amber-700' },
  { bg: 'bg-emerald-600', hex: '#059669', text: 'text-emerald-600', border: 'border-emerald-600', ring: 'ring-emerald-600/25', border30: 'border-emerald-600/40', lightBg: 'bg-emerald-600/10', hoverBg: 'hover:bg-emerald-700' },
  { bg: 'bg-purple-600', hex: '#9333ea', text: 'text-purple-600', border: 'border-purple-600', ring: 'ring-purple-600/25', border30: 'border-purple-600/40', lightBg: 'bg-purple-600/10', hoverBg: 'hover:bg-purple-700' },
];

export default function ServicesOverviewSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeService = servicesOverview[activeIdx];
  const Icon = iconMap[activeService.icon] || Search;
  const activeColor = nodeColors[activeIdx % nodeColors.length];

  // Auto-rotate division nodes every 2 seconds (2000ms), pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % servicesOverview.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="svc6 bg-[#fafbfc] py-20 lg:py-28 border-t border-b border-gray-200/80 relative overflow-hidden" id="services">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="fg-section-header mb-12 max-w-3xl text-center mx-auto">
          <span className="fg-eyebrow text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1.5 rounded-full inline-block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Six business divisions,<br />one accountable partner.
          </h2>
        </div>

        {/* ── Circular Dial Wheel Infographic Diagram (Auto-rotates 2s) ── */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Left Column (5 Cols): Circular Dial Ring & Pointer Selector */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
            
            {/* Outer Circular Graphic Dial Ring */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-slate-100 shadow-inner relative flex items-center justify-center bg-[#fafbfc]">
              
              {/* Dashed Orbital Arc */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-slate-300 animate-[spin_120s_linear_infinite]" />

              {/* Central Core Circle Badge */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white border-4 border-[#0072bc] shadow-2xl flex flex-col items-center justify-center p-4 text-center z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0072bc]">
                  INFOGRAPHIC ARCHITECTURE
                </span>
                <span className="text-sm font-black text-slate-900 leading-tight mt-1">
                  6 DIVISIONS
                </span>
                <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                  SM ASSOCIATES
                </span>
              </div>

              {/* 6 Circular Node Buttons around the ring with Distinct Colors */}
              {servicesOverview.map((s, i) => {
                const ItemIcon = iconMap[s.icon] || Search;
                const isActive = activeIdx === i;
                const color = nodeColors[i % nodeColors.length];
                
                // Calculate position angles around 360 degrees
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 120; // radius in px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-20 group cursor-pointer ${
                      isActive
                        ? `${color.bg} text-white shadow-xl scale-125 ring-4 ${color.ring}`
                        : `bg-white text-slate-700 border-2 ${color.border} hover:scale-110 shadow-md`
                    }`}
                    title={s.name}
                  >
                    <ItemIcon size={18} style={{ color: isActive ? '#ffffff' : undefined }} />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-slate-900 text-[8px] font-bold text-slate-900 flex items-center justify-center shadow-xs">
                        {i + 1}
                      </span>
                    )}
                  </button>
                );
              })}

            </div>

            {/* Horizontal Dial Selector Pills below for mobile / easy touch access */}
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {servicesOverview.map((s, i) => {
                const color = nodeColors[i % nodeColors.length];
                const isActive = activeIdx === i;
                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    style={{
                      color: isActive ? '#ffffff' : undefined
                    }}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? `${color.bg} shadow-md`
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    0{i + 1} {s.name}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column (7 Cols): Speech Bubble Infographic Specification Viewport */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.name}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`relative bg-slate-50 border-2 ${activeColor.border30} rounded-3xl p-6 sm:p-8 space-y-6 shadow-md`}
              >
                {/* Speech Bubble Pointer Tail (Left side facing the dial) */}
                <div className={`hidden lg:block absolute -left-4 top-12 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[16px] border-r-slate-300`} />

                {/* Infographic Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <RichIcon type={activeService.icon || activeService.name} size={48} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${activeColor.text}`}>
                        DATA 0{activeIdx + 1} • INFOGRAPHIC SPECIFICATION
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {activeService.name}
                      </h3>
                    </div>
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${activeColor.text} ${activeColor.lightBg} px-3 py-1.5 rounded-full border ${activeColor.border30} shadow-2xs`}>
                    DIVISION 0{activeIdx + 1}
                  </span>
                </div>

                {/* Main Copy Description (100% Preserved) */}
                <p className="text-slate-700 text-sm leading-relaxed font-medium bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
                  {activeService.desc}
                </p>

                {/* Standards Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    Execution SLA & Governance
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 size={16} className={`${activeColor.text} flex-shrink-0`} />
                      <span>Audited field operations & SLA adherence</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 size={16} className={`${activeColor.text} flex-shrink-0`} />
                      <span>Real-time data reconciliation & reporting</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 size={16} className={`${activeColor.text} flex-shrink-0`} />
                      <span>IIBF DRA-certified officer deployment</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 size={16} className={`${activeColor.text} flex-shrink-0`} />
                      <span>Immutable audit trails for regulator scrutiny</span>
                    </div>
                  </div>
                </div>

                {/* Route Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <Link
                    to={activeService.href}
                    style={{ backgroundColor: activeColor.hex, color: '#ffffff' }}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md hover:opacity-95`}
                  >
                    <span style={{ color: '#ffffff' }}>Learn more about {activeService.name}</span>
                    <ArrowRight size={14} style={{ color: '#ffffff' }} />
                  </Link>

                  <div className="flex items-center justify-between sm:justify-end gap-2 text-xs">
                    <span className="text-slate-500 font-semibold">
                      <ShieldCheck size={14} className={`inline ${activeColor.text}`} /> RBI Compliant
                    </span>
                    <Link to="/services" className={`font-bold ${activeColor.text} hover:underline ml-3`}>
                      View All &rarr;
                    </Link>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
