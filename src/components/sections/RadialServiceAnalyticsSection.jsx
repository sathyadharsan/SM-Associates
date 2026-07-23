import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUp,
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Scale, 
  FileSearch, 
  BrainCircuit, 
  Coins, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

const PETAL_COLOR_PALETTE = [
  {
    gradient: 'from-[#0EA5E9] to-[#10B981]',
    color: '#10B981',
    shadow: 'rgba(16, 185, 129, 0.35)',
    icon: ShieldCheck
  },
  {
    gradient: 'from-[#1D4ED8] to-[#3B82F6]',
    color: '#2563EB',
    shadow: 'rgba(37, 99, 235, 0.35)',
    icon: BrainCircuit
  },
  {
    gradient: 'from-[#0284C7] to-[#38BDF8]',
    color: '#0284C7',
    shadow: 'rgba(2, 132, 199, 0.35)',
    icon: Target
  },
  {
    gradient: 'from-[#6366F1] to-[#8B5CF6]',
    color: '#7C3AED',
    shadow: 'rgba(124, 58, 237, 0.35)',
    icon: TrendingUp
  },
  {
    gradient: 'from-[#C026D3] to-[#E879F9]',
    color: '#D946EF',
    shadow: 'rgba(217, 70, 239, 0.35)',
    icon: Layers
  },
  {
    gradient: 'from-[#E11D48] to-[#FB7185]',
    color: '#F43F5E',
    shadow: 'rgba(244, 63, 94, 0.35)',
    icon: Scale
  },
  {
    gradient: 'from-[#D97706] to-[#FBBF24]',
    color: '#F59E0B',
    shadow: 'rgba(245, 158, 11, 0.35)',
    icon: FileSearch
  }
];

const DEFAULT_KPI_METRICS = [
  {
    label: 'Time to collect',
    value: '42% Faster TAT',
    direction: 'down',
    type: 'reduction'
  },
  {
    label: 'Cost Savings',
    value: '35% OpEx Savings',
    direction: 'up',
    type: 'increase'
  },
  {
    label: 'Fraud & NPA Risk',
    value: 'Zero Non-compliance',
    direction: 'down',
    type: 'reduction'
  },
  {
    label: 'Write off',
    value: '28% Provision Saving',
    direction: 'down',
    type: 'reduction'
  },
  {
    label: 'Recovered amount',
    value: '3.4x Higher Yield',
    direction: 'up',
    type: 'increase'
  }
];

export default function RadialServiceAnalyticsSection({ content }) {
  const [activePetal, setActivePetal] = useState(0);

  // 1. DYNAMICALLY EXTRACT PETALS BASED ON PAGE CONTENT
  const pageTitle = content?.title || 'Recovery Analytics';
  const pageCapabilities = content?.capabilities || [];
  const pageOutcomes = content?.overview?.outcomes || [];
  const pageProblems = content?.problemStatement || [];

  // Combine page capabilities and outcomes to build exactly 7 dynamic petals
  const dynamicPetals = [];
  
  // Fill from page capabilities first
  pageCapabilities.forEach((cap, i) => {
    if (dynamicPetals.length < 7) {
      dynamicPetals.push({
        id: `cap-${i}`,
        label: cap.title || cap.name,
        desc: cap.desc || cap.businessOutcome || cap.summary,
        bullets: cap.bullets || []
      });
    }
  });

  // Fill remaining slots from overview outcomes if needed
  if (dynamicPetals.length < 7) {
    pageOutcomes.forEach((out, i) => {
      if (dynamicPetals.length < 7) {
        dynamicPetals.push({
          id: `out-${i}`,
          label: out.title,
          desc: out.desc || 'Optimized operational workflow.'
        });
      }
    });
  }

  // Fill remaining slots from problem statements if needed
  if (dynamicPetals.length < 7) {
    pageProblems.forEach((prob, i) => {
      if (dynamicPetals.length < 7) {
        dynamicPetals.push({
          id: `prob-${i}`,
          label: prob.title,
          desc: prob.desc
        });
      }
    });
  }

  // Fallback items if page content has fewer than 7 capabilities
  const defaultFallbackLabels = [
    { label: 'Risk Profiling', desc: 'ML-based borrower delinquency scoring.' },
    { label: 'Intent Analysis', desc: 'Predictive behavioral willingness model.' },
    { label: 'Bounce Prediction', desc: 'Early warning signals for clearing mandates.' },
    { label: 'Yield Optimizer', desc: 'Portfolio recovery scoring engine.' },
    { label: 'Field Allocation', desc: 'Dynamic agent dispatch & SLA tracking.' },
    { label: 'SARFAESI Strategy', desc: 'Sec 13(2)/13(4) statutory legal execution.' },
    { label: 'Field Intelligence', desc: 'Skip tracing & asset audit forensics.' }
  ];

  while (dynamicPetals.length < 7) {
    const idx = dynamicPetals.length;
    dynamicPetals.push({
      id: `fallback-${idx}`,
      label: defaultFallbackLabels[idx].label,
      desc: defaultFallbackLabels[idx].desc
    });
  }

  // Attach design styling (colors, icons) to each dynamic petal
  const finalPetals = dynamicPetals.slice(0, 7).map((pet, idx) => {
    const style = PETAL_COLOR_PALETTE[idx % PETAL_COLOR_PALETTE.length];
    return {
      ...pet,
      ...style
    };
  });

  // 2. DYNAMICALLY BUILD KPI METRICS
  const dynamicMetrics = content?.overview?.outcomes?.map((item, idx) => ({
    label: item.title,
    value: item.desc || 'Optimized Result',
    direction: idx % 2 === 1 ? 'up' : 'down'
  })) || DEFAULT_KPI_METRICS;

  const metrics = (dynamicMetrics.length >= 3 ? dynamicMetrics : DEFAULT_KPI_METRICS).slice(0, 5);

  const headlineText = `Boost ${pageTitle} Performance with the power of ML & advanced analytics`;
  const subtext = content?.description || 
    `Lenders and recovery teams that use SM Associates ${pageTitle} can enhance recovery performance, meet statutory timelines, and elevate borrower resolution standards.`;

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-16 lg:py-24 border-y border-slate-200/80">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* ═══ LEFT COLUMN: Headline & Copywriting ═══ */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>{content?.eyebrow || 'SM Analytics & Field Engine'}</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[38px] lg:leading-[1.16]">
                {headlineText}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {subtext}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/35 focus:outline-none"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ═══ CENTER COLUMN: Credgenics-Style Teardrop Petal Radial Wheel ═══ */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center w-full max-w-[460px] aspect-square"
            >
              {/* Outer Subtle Dash Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-slate-300/80 animate-[spin_90s_linear_infinite] pointer-events-none" />

              {/* Central Dark Navy Node */}
              <motion.div 
                className="relative z-30 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-[#0B132B] text-white shadow-[0_20px_40px_rgba(11,19,43,0.45)] border-4 border-white p-3 text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-[11px] font-black uppercase tracking-wider leading-tight text-white px-1">
                  {pageTitle?.toUpperCase()}
                </span>
                <span className="mt-1 text-[8px] font-bold tracking-widest text-cyan-400 uppercase">
                  ANALYTICS ENGINE
                </span>
              </motion.div>

              {/* Render 7 Teardrop Flower Petals */}
              {finalPetals.map((petal, index) => {
                const total = 7;
                // Calculate angle: top starts at -90 deg
                const angleDeg = -90 + (index * 360) / total;
                const angleRad = (angleDeg * Math.PI) / 180;
                
                // Radius distance from center
                const radiusPct = 37;
                const xPct = 50 + radiusPct * Math.cos(angleRad);
                const yPct = 50 + radiusPct * Math.sin(angleRad);

                const isActive = activePetal === index;

                return (
                  <React.Fragment key={petal.id || index}>
                    {/* SVG Connector spoke line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${xPct}%`}
                        y2={`${yPct}%`}
                        stroke={isActive ? petal.color : '#CBD5E1'}
                        strokeWidth={isActive ? '3' : '1.5'}
                        className="transition-all duration-300"
                      />
                    </svg>

                    {/* Credgenics-Style Teardrop Petal Node */}
                    <motion.button
                      type="button"
                      onClick={() => setActivePetal(index)}
                      onMouseEnter={() => setActivePetal(index)}
                      style={{
                        left: `${xPct}%`,
                        top: `${yPct}%`,
                      }}
                      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-22 h-22 sm:w-24 sm:h-24 rounded-full text-white transition-all duration-300 cursor-pointer ${
                        isActive ? 'scale-110 z-40 ring-4 ring-white shadow-2xl' : 'hover:scale-105 opacity-95'
                      }`}
                    >
                      <div 
                        className={`w-full h-full rounded-full bg-gradient-to-br ${petal.gradient} flex flex-col items-center justify-center p-2.5 text-center shadow-lg border-2 border-white/40`}
                        style={{
                          boxShadow: isActive 
                            ? `0 14px 32px ${petal.shadow}, inset 0 2px 4px rgba(255,255,255,0.4)`
                            : `0 8px 20px ${petal.shadow}`
                        }}
                      >
                        <span className="text-[10px] font-bold leading-tight text-white tracking-tight line-clamp-3 drop-shadow-sm px-0.5">
                          {petal.label}
                        </span>
                      </div>
                    </motion.button>
                  </React.Fragment>
                );
              })}
            </motion.div>

            {/* Active Petal Detail Banner */}
            <div className="mt-6 w-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePetal}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-md text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span 
                      className="h-3 w-3 rounded-full" 
                      style={{ backgroundColor: finalPetals[activePetal]?.color }} 
                    />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                      {finalPetals[activePetal]?.label}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">
                    {finalPetals[activePetal]?.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: Credgenics-Style KPI Pills with Bold Arrow Badges ═══ */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3.5"
            >
              {metrics.map((metric, idx) => {
                const isDown = metric.direction === 'down' || metric.type === 'reduction';

                return (
                  <motion.div
                    key={metric.label + idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between rounded-2xl bg-[#EBEFF5]/90 border border-slate-200/90 px-4 py-3 shadow-sm transition-all hover:shadow-md hover:bg-slate-200/70"
                  >
                    <div className="flex flex-col pr-2">
                      <span className="text-[12px] font-bold text-slate-800 leading-tight">
                        {metric.label}
                      </span>
                      {metric.value && (
                        <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                          {metric.value}
                        </span>
                      )}
                    </div>

                    {/* Bold Filled Circle Arrow Badge (Image 2 style) */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md ${
                        isDown 
                          ? 'bg-[#22C55E] text-white border-2 border-white' 
                          : 'bg-[#0284C7] text-white border-2 border-white'
                      }`}
                    >
                      {isDown ? (
                        <ArrowDown className="h-5 w-5 stroke-[3]" />
                      ) : (
                        <ArrowUp className="h-5 w-5 stroke-[3]" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
