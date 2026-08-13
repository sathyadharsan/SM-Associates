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

  // Flight timing calculation per card: Smooth continuous flow with optimal card spacing
  const span = 0.25;
  const cardPhaseEnd = 0.68;
  const stagger = (cardPhaseEnd - span) / (totalCards - 1);
  const start = index * stagger;
  const mid = start + span / 2;
  const end = start + span;

  // Trajectory Math: Balanced orbital radius for smooth card succession
  const STEPS = 16;
  const progressInputs = [];
  const xOutputs = [];
  const yOutputs = [];
  const rotOutputs = [];
  const scaleOutputs = [];

  const radiusX = 39; // Balanced horizontal radius in vw
  const radiusY = 24; // Vertical arc height in vh
  const yBaseline = -2; // Elevated baseline in vh to position cards closer up under title

  for (let k = 0; k <= STEPS; k++) {
    const u = k / STEPS; // Normalized 0 -> 1 along card flight span
    const p = start + u * span;
    const angle = Math.PI * u;

    const xVal = -Math.cos(angle) * radiusX;
    const yVal = yBaseline - Math.sin(angle) * radiusY;
    const rotVal = -Math.cos(angle) * 4;
    const scaleVal = 0.90 + Math.sin(angle) * 0.12;

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

  // Opacity: smooth fade-in and fade-out at trajectory ends
  const opacityInput = [
    Math.max(0, start - 0.01),
    start + span * 0.15,
    start + span * 0.85,
    Math.min(1, end + 0.01)
  ];
  const opacityOutput = [0, 1, 1, 0];
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  // Z-index calculation
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
        className={`w-56 sm:w-64 p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md ${isActive
          ? 'bg-gradient-to-br from-[#005291] via-[#0072bc] to-[#021a38] border-[#0072bc] shadow-2xl shadow-[#0072bc]/40 text-white scale-[1.04] ring-2 ring-[#0072bc]/60'
          : 'bg-white/95 border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(0,114,188,0.12),0_5px_15px_rgba(0,0,0,0.06)] text-slate-900 hover:border-[#0072bc]/50 hover:shadow-2xl hover:shadow-[#0072bc]/20'
          }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
              ? 'bg-white text-[#0072bc] shadow-md scale-105'
              : 'bg-blue-50 text-[#0072bc] group-hover:bg-white group-hover:text-[#0072bc]'
              }`}
          >
            <Icon size={20} strokeWidth={2.2} />
          </div>

          <span
            className={`px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase tracking-wider font-mono ${isActive
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-blue-50 text-[#0072bc] border border-blue-100'
              }`}
          >
            {cert.badge}
          </span>
        </div>

        <div className={`font-extrabold text-sm sm:text-base leading-snug tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
          {cert.title}
        </div>

        <div className={`text-xs mt-0.5 font-medium leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
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

  // Dynamic scroll-driven motion for background heading convergence
  // Heading text appears ONLY AFTER all cards have finished moving (0.68 -> 0.88)
  const wordLeftX = useTransform(scrollYProgress, [0.68, 0.88], ['-20vw', '0vw']);
  const wordCenterScale = useTransform(scrollYProgress, [0.68, 0.88], [0.7, 1]);
  const wordRightX = useTransform(scrollYProgress, [0.68, 0.88], ['20vw', '0vw']);
  const bgOpacity = useTransform(scrollYProgress, [0.68, 0.78, 1.0], [0, 1, 1]);

  // Upward movement of desktop cards container when scrolling into section
  const cardsContainerY = useTransform(scrollYProgress, [0, 0.25], ['50px', '0px']);

  return (
    <div className="relative w-full bg-white text-slate-900" id="awards-certifications">
      {/* Static Fallback for Mobile (<1024px) or reduced motion */}
      <div className={`${shouldReduceMotion ? 'block' : 'lg:hidden'} py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Regulatory Governance & Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop Cinematic Scroll-Scrubbed Pinned Canvas */}
      {!shouldReduceMotion && (
        <div
          ref={containerRef}
          className="relative hidden lg:block w-full"
          style={{ height: '200vh' }}
        >
          {/* Locked Viewport Canvas */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 pt-16 pb-8">

            {/* Stable Header Content */}
            <div className="relative z-20 text-center max-w-3xl mx-auto pt-6 pointer-events-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Regulatory Governance & Standards
              </h2>
            </div>

            {/* Floating Orbital Cards Container with Animated Background Heading */}
            <motion.div 
              style={{ y: cardsContainerY }}
              className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center"
            >
              {/* Background Heading & Divider converging into center on scroll */}
              <motion.div 
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none pb-8"
              >
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight text-center flex items-center justify-center gap-3 sm:gap-4 font-sans">
                  <motion.span style={{ x: wordLeftX }} className="inline-block whitespace-nowrap">
                    Regulated.
                  </motion.span>
                  <motion.span style={{ scale: wordCenterScale }} className="inline-block whitespace-nowrap">
                    Certified.
                  </motion.span>
                  <motion.span style={{ x: wordRightX }} className="inline-block whitespace-nowrap text-[#0072bc]">
                    Trusted.
                  </motion.span>
                </h2>
              </motion.div>

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
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

