import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Landmark, BadgeCheck, FileCheck, MapPin, Activity, Lock, FileText } from 'lucide-react';

const certifications = [
  { icon: Landmark, title: 'RBI Guidelines', subtitle: 'Regulatory Framework' },
  { icon: FileCheck, title: 'SARFAESI', subtitle: 'Authorized Recovery Agent' },
  { icon: BadgeCheck, title: 'IIBF Certified', subtitle: 'DRA Trained Workforce' },
  { icon: ShieldCheck, title: 'ISO 27001', subtitle: 'Information Security' },
  { icon: MapPin, title: 'GPS Enabled', subtitle: 'Ground Operations' },
  { icon: Activity, title: 'Audit Ready', subtitle: 'Complete Audit Trail' },
  { icon: Lock, title: 'Secure Data', subtitle: 'Data Protection Protocol' },
  { icon: FileText, title: 'Legal Documentation', subtitle: 'Statutory Enforcement' },
];

const TOTAL = certifications.length;
const ARC_RADIUS = 300;

// Evenly distribute cards from 10° to 170° along the top semicircle
// 0° = right, 90° = top, 180° = left
const getBaseAngle = (idx) => 10 + (idx / (TOTAL - 1)) * 160;

/* ── Individual orbital card ── */
function OrbitalCard({ cert, index, scrollProgress, shouldAnimate }) {
  const Icon = cert.icon;
  const baseAngle = getBaseAngle(index);

  // Scroll drives a counterclockwise rotation: -30° to +30° sweep
  const x = useTransform(scrollProgress, (p) => {
    const offset = shouldAnimate ? -30 + p * 60 : 0;
    const rad = ((baseAngle + offset) * Math.PI) / 180;
    return ARC_RADIUS * Math.cos(rad);
  });

  const y = useTransform(scrollProgress, (p) => {
    const offset = shouldAnimate ? -30 + p * 60 : 0;
    const rad = ((baseAngle + offset) * Math.PI) / 180;
    return -ARC_RADIUS * Math.sin(rad);
  });

  // Cards closer to the top of the arc are slightly larger
  const scale = useTransform(scrollProgress, (p) => {
    const offset = shouldAnimate ? -30 + p * 60 : 0;
    const rad = ((baseAngle + offset) * Math.PI) / 180;
    return 0.82 + 0.18 * Math.sin(rad);
  });

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '52%',
        x,
        y,
        scale,
        marginLeft: '-75px',
        marginTop: '-48px',
        zIndex: 20,
      }}
      className="w-[150px] group flex flex-col items-center text-center p-5 rounded-2xl border border-transparent bg-white shadow-lg shadow-slate-200/60 hover:bg-gradient-to-br hover:from-[#005291] hover:via-[#0072bc] hover:to-[#021a38] hover:border-[#0072bc] hover:shadow-2xl hover:shadow-[#0072bc]/35 hover:text-white transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-blue-50 text-[#0072bc] group-hover:bg-white group-hover:text-[#0072bc] group-hover:shadow-lg transition-all duration-300">
        <Icon size={22} />
      </div>
      <div className="font-extrabold text-[13px] leading-snug text-slate-900 group-hover:text-white transition-colors duration-200">
        {cert.title}
      </div>
      <div className="text-[11px] mt-1 leading-relaxed font-medium text-slate-500 group-hover:text-slate-200 transition-colors duration-200">
        {cert.subtitle}
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function AwardsCertificationsSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white overflow-hidden"
      id="awards-certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── DESKTOP: Orbital Arc Layout ── */}
        <div className="hidden lg:block relative" style={{ height: '700px' }}>

          {/* Decorative dashed semicircle arc line */}
          <div
            className="absolute pointer-events-none border-2 border-dashed border-[#0072bc]/8 rounded-t-full"
            style={{
              width: ARC_RADIUS * 2,
              height: ARC_RADIUS,
              left: '50%',
              top: '52%',
              transform: 'translate(-50%, -100%)',
            }}
          />

          {/* Inner content — heading inside the concave area of the arc */}
          <div className="absolute left-1/2 top-[64%] -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-lg pointer-events-none">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
            </h2>
            <div className="mt-4 mb-2 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
            </div>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Every operation runs under strict regulatory compliance — so your portfolio is always protected.
            </p>
          </div>

          {/* Orbital cards */}
          {certifications.map((cert, idx) => (
            <OrbitalCard
              key={idx}
              cert={cert}
              index={idx}
              scrollProgress={scrollYProgress}
              shouldAnimate={!reduceMotion}
            />
          ))}
        </div>

        {/* ── MOBILE: Standard Grid ── */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-md mx-auto"
          >
            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
            </h2>
            <div className="mt-4 mb-2 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
            </div>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Every operation runs under strict regulatory compliance.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-blue-50 text-[#0072bc]">
                    <Icon size={22} />
                  </div>
                  <div className="font-extrabold text-sm text-slate-900">{cert.title}</div>
                  <div className="text-xs mt-1 text-slate-500 font-medium">{cert.subtitle}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
