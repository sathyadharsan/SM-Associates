import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Landmark, BadgeCheck, FileCheck, MapPin, Activity, Lock, FileText, ArrowDown } from 'lucide-react';

const certifications = [
  {
    icon: Landmark,
    title: 'RBI Guidelines',
    subtitle: 'Regulatory Framework',
    badge: 'COMPLIANCE',
  },
  {
    icon: FileCheck,
    title: 'SARFAESI',
    subtitle: 'Authorized Recovery Agent',
    badge: 'STATUTORY',
  },
  {
    icon: BadgeCheck,
    title: 'IIBF Certified',
    subtitle: 'DRA Trained Workforce',
    badge: 'CERTIFIED',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001',
    subtitle: 'Information Security',
    badge: 'SECURITY',
  },
  {
    icon: MapPin,
    title: 'GPS Enabled',
    subtitle: 'Ground Operations',
    badge: 'TELEMETRY',
  },
  {
    icon: Activity,
    title: 'Audit Ready',
    subtitle: 'Complete Audit Trail',
    badge: 'GOVERNANCE',
  },
  {
    icon: Lock,
    title: 'Secure Data',
    subtitle: 'Data Protection Protocol',
    badge: 'ENCRYPTED',
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    subtitle: 'Statutory Enforcement',
    badge: 'LEGAL',
  },
];

// Single scroll-scrubbed floating card traveling along curved trajectory
function OrbitalScrollCard({ cert, index, totalCards, scrollYProgress, activeIndex, setActiveIndex }) {
  const Icon = cert.icon;

  // Flight timing calculation per card
  // Each card spends 34% of total section scroll traversing from lower-left to lower-right
  const span = 0.34;
  const stagger = (1 - span) / (totalCards - 1);
  const start = index * stagger;
  const mid = start + span / 2;
  const end = start + span;

  // Trajectory Math: Single centered, perfectly symmetrical upper-semicircle trajectory
  // u = 0 -> -38vw (Bottom-Left) | u = 0.5 -> 0vw (Top-Center) | u = 1.0 -> +38vw (Bottom-Right)
  const STEPS = 16;
  const progressInputs = [];
  const xOutputs = [];
  const yOutputs = [];
  const rotOutputs = [];
  const scaleOutputs = [];

  const radiusX = 38; // Symmetric horizontal radius in vw
  const radiusY = 46; // Vertical arc height in vh
  const yBaseline = 24; // Symmetric bottom endpoint elevation in vh

  for (let k = 0; k <= STEPS; k++) {
    const u = k / STEPS; // Normalized 0 -> 1 along card flight span
    const p = start + u * span;
    const angle = Math.PI * u;

    const xVal = -Math.cos(angle) * radiusX;
    const yVal = yBaseline - Math.sin(angle) * radiusY;
    const rotVal = -Math.cos(angle) * 4.5;
    const scaleVal = 0.88 + Math.sin(angle) * 0.15;

    progressInputs.push(p);
    xOutputs.push(`${xVal.toFixed(2)}vw`);
    yOutputs.push(`${yVal.toFixed(2)}vh`);
    rotOutputs.push(`${rotVal.toFixed(2)}deg`);
    scaleOutputs.push(parseFloat(scaleVal.toFixed(3)));
  }

  const x = useTransform(scrollYProgress, progressInputs, xOutputs);
  const y = useTransform(scrollYProgress, progressInputs, yOutputs);
  const rotate = useTransform(scrollYProgress, progressInputs, rotOutputs);
  const scale = useTransform(scrollYProgress, progressInputs, scaleOutputs);

  // Opacity: fade in at start, full opacity during arc, fade out at exit
  const opacityInput = [
    Math.max(0, start - 0.02),
    start + span * 0.12,
    start + span * 0.88,
    Math.min(1, end + 0.02)
  ];
  const opacityOutput = [0, 1, 1, 0];
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  // Z-index calculation to bring card forward at peak
  const zIndexInput = [start, mid, end];
  const zIndexOutput = [10 + index, 40, 10 + index];
  const zIndex = useTransform(scrollYProgress, zIndexInput, zIndexOutput);

  const isActive = activeIndex === index;

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex,
      }}
      onClick={() => setActiveIndex(isActive ? null : index)}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer select-none"
    >
      <div
        className={`w-64 sm:w-72 p-5 sm:p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
          isActive
            ? 'bg-gradient-to-br from-[#005291] via-[#0072bc] to-[#021a38] border-[#0072bc] shadow-2xl shadow-[#0072bc]/40 text-white scale-[1.04] ring-2 ring-[#0072bc]/60'
            : 'bg-white/95 border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(0,114,188,0.12),0_5px_15px_rgba(0,0,0,0.06)] text-slate-900 hover:border-[#0072bc]/50 hover:shadow-2xl hover:shadow-[#0072bc]/20'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive
                ? 'bg-white text-[#0072bc] shadow-md scale-105'
                : 'bg-blue-50 text-[#0072bc] group-hover:bg-white group-hover:text-[#0072bc]'
            }`}
          >
            <Icon size={22} strokeWidth={2.2} />
          </div>

          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider font-mono ${
              isActive
                ? 'bg-white/20 text-white border border-white/30'
                : 'bg-blue-50 text-[#0072bc] border border-blue-100'
            }`}
          >
            {cert.badge}
          </span>
        </div>

        <div className={`font-extrabold text-base sm:text-lg leading-snug tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
          {cert.title}
        </div>

        <div className={`text-xs mt-1 font-medium leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
          {cert.subtitle}
        </div>
      </div>
    </motion.div>
  );
}

export default function AwardsCertificationsSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll authority progress tracking (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="relative w-full bg-white text-slate-900" id="awards-certifications">
      {/* Static Fallback for Mobile (<1024px) or reduced motion */}
      <div className={`${shouldReduceMotion ? 'block' : 'lg:hidden'} py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072BC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0072BC]" />
            Regulatory Governance & Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-3">
            Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
          </h2>
          <div className="mt-4 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Every operation runs under strict regulatory compliance — so your portfolio is always protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#005291] via-[#0072bc] to-[#021a38] border-[#0072bc] shadow-2xl text-white'
                    : 'bg-white border-slate-200/80 shadow-md text-slate-900 hover:border-[#0072bc]/40 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-white text-[#0072bc]' : 'bg-blue-50 text-[#0072bc]'}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#0072bc]'}`}>
                      {cert.badge}
                    </span>
                  </div>
                  <div className="font-extrabold text-base sm:text-lg">{cert.title}</div>
                  <div className={`text-xs mt-1 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>{cert.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Cinematic Scroll-Scrubbed Pinned Canvas */}
      {!shouldReduceMotion && (
        <div
          ref={containerRef}
          className="relative hidden lg:block w-full"
          style={{ height: '220vh' }}
        >
          {/* Locked Viewport Canvas */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 pt-16 pb-8">
            {/* Ambient subtle arc guide line */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
              viewBox="0 0 1200 800"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 120 620 A 480 370 0 0 1 1080 620"
                stroke="url(#arcGradient)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0072bc" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#0072bc" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0072bc" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Stable Header Content */}
            <div className="relative z-20 text-center max-w-3xl mx-auto pt-6 pointer-events-auto">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072BC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0072BC]" />
                Regulatory Governance & Standards
              </span>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-3">
                Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
              </h2>

              <div className="mt-4 mb-2 flex items-center justify-center gap-2">
                <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
                <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
              </div>

              <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Every operation runs under strict regulatory compliance — so your portfolio is always protected.
              </p>
            </div>

            {/* Floating Orbital Cards Container */}
            <div className="relative flex-1 w-full max-w-7xl mx-auto">
              {certifications.map((cert, index) => (
                <OrbitalScrollCard
                  key={cert.title}
                  cert={cert}
                  index={index}
                  totalCards={certifications.length}
                  scrollYProgress={scrollYProgress}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>

            {/* Bottom Scroll Cue */}
            <div className="relative z-20 mx-auto flex items-center gap-3 py-1 pointer-events-auto">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <ArrowDown size={14} className="text-[#0072BC]" />
                Scroll to scrub regulatory motion timeline
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072BC] animate-ping" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

