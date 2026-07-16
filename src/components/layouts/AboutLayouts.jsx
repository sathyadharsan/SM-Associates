import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPageContent } from '../../data/pagesContent';
import '../../styles/homepage-v6.css';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Award,
  Shield,
  Users,
  Clock,
  Building2,
  MapPin,
  TrendingUp,
  FileText,
  Activity,
  Database,
  Briefcase,
  Sparkles,
  Info,
  Heart,
  ChevronDown,
  Scale,
  CalendarDays,
  Check,
  FileCheck,
  AlertCircle,
  Fingerprint,
  Server,
  UserCheck,
  Volume2,
  Lock,
  PieChart,
  HelpCircle,
  Mail
} from 'lucide-react';

import { INDIA_OUTLINE_PATH, INDIA_PATH_TRANSFORM } from '../../data/LocationData';

const Linkedin = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Common Framer Motion Animations for Editorial Feel
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const drawLine = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut" } }
};

// ── Premium Interactive 3D-Tilt Card for About Page ──
function PremiumTiltCard({ children, className = '', color = '#2563EB', delay = 0, style = {} }) {
  const cardRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 26, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const rotateX = useTransform(y, [-1, 1], [6, -6]);
  const rotateY = useTransform(x, [-1, 1], [-6, 6]);

  const glowX = useTransform(x, [-1, 1], [15, 85]);
  const glowY = useTransform(y, [-1, 1], [15, 85]);

  function onPointerMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function onPointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={() => setIsFocused(!isFocused)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        '--card-c': color,
        borderColor: isFocused ? color : undefined,
        boxShadow: isFocused ? `0 0 0 3px color-mix(in srgb, ${color} 25%, transparent), 0 20px 40px -15px color-mix(in srgb, ${color} 15%, transparent)` : undefined,
        outline: 'none',
        ...style,
      }}
      className={`svc6-card ${className}`}
    >
      {/* Dynamic cursor pointer glow */}
      <motion.div
        className="svc6-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, color-mix(in srgb, ${color} 11%, transparent), transparent 60%)`,
        }}
      />
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d', translateZ: 10 }}>
        {children}
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// 1. COMPANY OVERVIEW LAYOUT (`/about`)
// ----------------------------------------------------
export function CompanyOverviewLayout({ content }) {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Load other pages' content to act as single-source-of-truth
  const leadershipContent = getPageContent('leadership') || {};
  const historyContent = getPageContent('history') || {};
  const complianceContent = getPageContent('compliance') || {};

  // Framer Motion Animation Presets
  const sectionVar = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased overflow-x-hidden company-page-snap-container">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <div className="ambient-glow ambient-glow--3" />
      <div className="h-24 bg-[#FFFFFF]" style={{ scrollSnapAlign: 'start' }} />


      {/* ── SECTION 2: COMPANY OVERVIEW ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-white border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono block">ORGANIZATIONAL PROFILE</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">
                  Aligning Institutional Governance with High-Performance Recovery
                </h2>
                <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              </div>

              {/* Editorial Highlight Statement */}
              <div className="border-l-4 border-[#2563EB] pl-5 py-2">
                <p className="text-base md:text-lg font-medium text-slate-700 font-serif italic leading-relaxed">
                  "Pioneering compliant debt resolution, asset tracing, and physical custody operations across South India since 2000."
                </p>
              </div>

              {/* Refined Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                S M Associates Risk Management Pvt. Ltd. is South India's premier recovery and risk management partner. We deliver institutional-grade solutions for nationalized banks, NBFCs, Housing Finance Companies, and ARCs, safeguarding reputation while maximizing asset yields.
              </p>

              {/* Core Competencies Bento Grid */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-mono">Core Competency Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'End-to-End NPA Lifecycle',
                      desc: 'Stage-1 early resolution through to Stage-3 legal enforcement.',
                      color: '#2563EB'
                    },
                    {
                      title: 'Zero-Tolerance Compliance',
                      desc: '100% adherence to RBI fair practice collection codes.',
                      color: '#10B981'
                    },
                    {
                      title: 'IIBF DRA Certified Staff',
                      desc: 'Examination-verified field representatives protect brand trust.',
                      color: '#7C3AED'
                    },
                    {
                      title: 'Geotagged Visit Telemetry',
                      desc: 'Real-time GPS check-ins and immutable audit logging.',
                      color: '#0D9488'
                    }
                  ].map((comp, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-4 flex gap-4 items-start transition-all duration-305 hover:border-slate-300 hover:shadow-sm"
                    >
                      <div 
                        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `color-mix(in srgb, ${comp.color} 12%, transparent)`, color: comp.color }}
                      >
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div className="space-y-0.5 text-left leading-tight">
                        <h5 className="font-bold text-sm text-[#0F172A] font-serif">{comp.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{comp.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content-Based generated image representing corporate governance & operations */}
            <div className="relative w-full h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md">
              <img
                src="/images/company_overview.png"
                alt="Corporate Governance and Recovery Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: OUR JOURNEY (Vertical Timeline) ──
           Replaced the rainbow serpentine map with a restrained, alternating
           vertical timeline — the standard enterprise "our history" pattern
           (McKinsey/BCG-style). Naturally responsive at any width, no
           scale/scroll tricks needed, and reads as more restrained/premium
           than a snake-shaped multi-hue path. Single accent colour (brand
           blue) throughout, with gold reserved for the final "road ahead"
           milestone to signal the future distinctly. */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">HISTORICAL TIMELINE</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">A Quarter-Century of Operational Evolution</h2>
            <p className="text-sm text-slate-650 max-w-lg mx-auto">
              Follow our chronological milestones as we scaled from a local recovery desk to a premier risk management ecosystem.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Central line — left-aligned on mobile, centred from lg up */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 lg:-translate-x-1/2" />

            <div className="space-y-6 lg:space-y-3">
              {(historyContent.timelineMilestones || [])
                .filter(m => ['2000', '2010', '2020', '2026'].includes(String(m.year)))
                .map((m, i, arr) => {
                const isFuture = i === arr.length - 1;
                const accent = isFuture ? '#C8922A' : '#2563EB';
                const onRight = i % 2 === 1;

                const card = (
                  <PremiumTiltCard delay={i * 0.06} color={accent} className="p-6 text-left w-full">
                    <div className="font-mono text-2xl font-black tracking-tight mb-2" style={{ color: accent }}>{m.year}</div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-serif leading-snug">{m.title}</h3>
                    <p className="mt-2 text-sm text-slate-650 leading-relaxed">{m.summary}</p>
                    {m.highlights?.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {m.highlights.slice(0, 3).map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-650">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: accent }} />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {m.impact?.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                        {m.impact.slice(0, 2).map((imp, idx) => (
                          <div key={idx}>
                            <div className="text-base font-bold font-serif" style={{ color: accent }}>{imp.value}</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-0.5">{imp.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </PremiumTiltCard>
                );

                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: onRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-12 lg:pl-0 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:items-start"
                  >
                    <span
                      className="absolute left-4 top-1.5 lg:static lg:left-auto lg:top-2 lg:col-start-2 lg:justify-self-center h-3.5 w-3.5 -translate-x-1/2 lg:translate-x-0 rounded-full border-[3px] border-white shadow-md z-10"
                      style={{ background: accent }}
                    />
                    <div className="lg:col-start-1 lg:flex lg:justify-end">{!onRight && <div className="lg:max-w-md">{card}</div>}</div>
                    <div className="lg:col-start-3">{onRight && <div className="lg:max-w-md">{card}</div>}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: VISION & MISSION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Vision Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <motion.div
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 20px 25px -5px rgba(37,99,235,0.06)' }}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 lg:p-12 space-y-6 text-left transition-all duration-300 cursor-pointer"
              >
                <span className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Charting the Vision for Risk Leadership</h3>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-serif italic">
                  "To become India's most trusted Recovery and Risk Management organization by combining operational excellence, technology, and future AI-driven capabilities."
                </p>
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Strategic Philosophy</h4>
                    <p className="text-sm text-slate-650 mt-1 leading-relaxed">
                      Upholding financial system integrity through long-term bank partnerships, transparent telemetry reporting, and DRA certified ground teams.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Future Roadmap</h4>
                    <p className="text-sm text-slate-650 mt-1 leading-relaxed">
                      Active expansion from South India to West and North zones while deploying machine learning default propensity routing.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md">
              <img
                src="/images/vision_analytics.png"
                alt="Our Vision Forward: Predictive Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Mission Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:order-1 order-2 relative h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md">
              <img
                src="/images/mission_training.png"
                alt="Our Corporate Mission: Compliance Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="lg:col-span-7 lg:order-2 order-1 text-left">
              <motion.div
                whileHover={{ y: -5, borderColor: '#F59E0B', boxShadow: '0 20px 25px -5px rgba(245,158,11,0.06)' }}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 lg:p-12 space-y-6 text-left transition-all duration-300 cursor-pointer"
              >
                <span className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Pioneering the Standard for Secure Recovery</h3>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-serif italic">
                  "Deliver enterprise-grade recovery and risk management services through structured processes, professional execution, regulatory compliance, and continuous innovation."
                </p>
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Operational Commitment</h4>
                    <p className="text-sm text-slate-650 mt-1 leading-relaxed">
                      Continuous training updates for 100% of outreach officers, weekly QA caller audits, and secure information barriers to protect client data.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Lender Value Realization</h4>
                    <p className="text-sm text-slate-650 mt-1 leading-relaxed">
                      Maximizing recovery yields in Stage-3 delinquencies to directly release locked provisioning capital back onto balance sheets.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── NEW SECTION: AI-DRIVEN RISK OPERATIONS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">TECHNOLOGY INTEGRATION</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Augmenting Field Operations with AI Agents &amp; Automation</h2>
            <p className="text-sm md:text-base text-slate-650 leading-relaxed max-w-xl mx-auto">
              SM Associates is pioneering the next era of debt resolution by combining field force strength with state-of-the-art AI agents and compliance monitoring bots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Holographic Dashboard graphic */}
            <div className="lg:col-span-5 relative min-h-[420px] bg-slate-55 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md flex flex-col justify-end">
              <img
                src="/images/ai_operations.png"
                alt="AI Agent Command Center dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/30 to-transparent pointer-events-none" />
              <div className="relative p-8 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-mono block mb-1">AI Integration</span>
                <h4 className="text-xl font-bold font-serif leading-snug">The Next Era: Digital Agents &amp; Real-time Compliance</h4>
              </div>
            </div>

            {/* AI Pillars grid */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {[
                {
                  title: 'Multilingual Voice AI Outreach',
                  desc: 'Automated pre-delinquency voice agents communicating with borrowers in Tamil, Telugu, Kannada, Malayalam, and English to offer quick resolution paths.',
                  icon: Volume2,
                  color: '#2563EB'
                },
                {
                  title: 'Dynamic Portfolio Allocation AI',
                  desc: 'Machine learning algorithms that analyze borrower behavior history and automatically dispatch digital notifications or route complex accounts to field DRA officers.',
                  icon: Activity,
                  color: '#7C3AED'
                },
                {
                  title: 'Automated Compliance Verification',
                  desc: 'Server-side compliance engines validating device GPS location, timestamp, and field-outreach logs in real-time to guarantee 100% RBI Fair Practice compliance.',
                  icon: UserCheck,
                  color: '#10B981'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <PremiumTiltCard
                    key={idx}
                    delay={idx * 0.1}
                    color={item.color}
                    className="flex-1 flex gap-5 items-start p-6"
                  >
                    <div className="flex gap-5 items-start">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 text-white shadow-md"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-left leading-snug">
                        <h4 className="font-bold text-base text-[#0F172A] font-serif mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: LEADERSHIP & MANAGEMENT (Reused exactly) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">EXECUTIVE DIRECTION</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Guiding Operations with Seasoned Banking Authority</h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Decades of combined banking recovery leadership guiding operational execution, legal compliance, and strategic alliances.
            </p>
          </div>

          {/* MD Spotlight Spot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5 relative">
              <PremiumTiltCard color="#2563EB" className="p-5 space-y-4">
                <div className="h-80 w-full rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 relative">
                  <img
                    src={leadershipContent.mdSpotlight?.photo || "/images/jebaraj.M MD.png"}
                    alt={leadershipContent.mdSpotlight?.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A]">{leadershipContent.mdSpotlight?.name}</h3>
                  <p className="text-sm text-[#2563EB] font-bold uppercase tracking-wider font-mono mt-0.5">{leadershipContent.mdSpotlight?.role}</p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0]">
                  <a
                    href={leadershipContent.mdSpotlight?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors w-full justify-center"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-[#2563EB] fill-[#2563EB]" /> Connect on LinkedIn
                  </a>
                </div>
              </PremiumTiltCard>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono block">Managing Director's Statement</span>
              <blockquote className="text-[#0F172A] text-lg font-medium font-serif leading-relaxed italic border-l-4 border-[#2563EB] pl-6 py-1">
                "{leadershipContent.mdSpotlight?.quote}"
              </blockquote>

              <div className="grid grid-cols-2 gap-4">
                {leadershipContent.mdSpotlight?.stats?.map((stat, idx) => (
                  <div key={idx} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl px-4 py-3 text-left">
                    <div className="text-lg font-bold text-[#2563EB] font-serif">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="font-bold text-xs text-[#0F172A] uppercase tracking-wider font-mono">Executive Career Matrix</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  {leadershipContent.mdSpotlight?.timeline.map((step, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded font-mono inline-block mb-1">{step.inst}</div>
                      <div className="text-xs font-bold text-slate-500 font-mono">{step.year}</div>
                      <h5 className="font-bold text-xs text-[#0F172A] leading-snug">{step.role}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Board grid */}
          <div className="space-y-8 pt-12 border-t border-slate-100">
            <h3 className="text-2xl font-bold font-serif text-[#0F172A]">The Executive Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {leadershipContent.executiveDirectors?.map((member, i) => (
                <PremiumTiltCard 
                  key={i} 
                  delay={i * 0.08} 
                  color="#2563EB" 
                  className="p-0 overflow-hidden flex flex-col justify-between h-full text-left"
                >
                  <div className="h-64 w-full overflow-hidden bg-slate-50 border-b border-[#E2E8F0] relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-left flex flex-col justify-between flex-grow">
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-[#0F172A] font-serif leading-snug">{member.name}</h3>
                      <p className="text-xs text-[#2563EB] font-bold uppercase tracking-wider font-mono leading-none">{member.role}</p>
                      <p className="text-xs text-slate-500 font-mono pt-1">Tenure: {member.experience}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-slate-650 leading-relaxed font-mono">
                      <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px] mb-1">Former Position:</span>
                      <span>{member.former}</span>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedLeader(member)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
                      >
                        View Profile <ChevronRight className="h-3 w-3 animate-bounce-horizontal" />
                      </button>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="h-7 w-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                      >
                        <Linkedin className="h-3.5 w-3.5 fill-current" />
                      </a>
                    </div>
                  </div>
                </PremiumTiltCard>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: CORE VALUES ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">ETHICAL FOUNDATION</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">The Principles Driving Institutional Trust</h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Every decision we execute aligns with our values of transparency, regulatory compliance, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                value: 'Integrity',
                meaning: '100% adherence to codes of conduct and fair practices.',
                impact: 'Guarantees brand safety and credit policy alignment for bank partners.'
              },
              {
                value: 'Compliance',
                meaning: 'Adherence to regulatory codes and fair-practice guidelines in every borrower interaction.',
                impact: 'Eliminates legal recourse liabilities and regulatory audit penalties.'
              },
              {
                value: 'Accountability',
                meaning: 'Ownership of outcomes at every level of the field organization, not just at head office.',
                impact: 'Provides clean audit trails and transparent field force activity checks.'
              },
              {
                value: 'Operational Excellence',
                meaning: 'Decentralized branch networks executing fast TAT mobilizations.',
                impact: 'Accelerates capital recovery, immediately lowering Bank NPA provisions.'
              }
            ].map((v, i) => {
              const valueData = [
                { color: '#2563EB', icon: Shield },
                { color: '#10B981', icon: FileCheck },
                { color: '#7C3AED', icon: UserCheck },
                { color: '#D97706', icon: TrendingUp }
              ][i];
              const ValIcon = valueData.icon;
              return (
                <PremiumTiltCard key={i} delay={i * 0.08} color={valueData.color} className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span 
                      className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono text-white shadow-sm"
                      style={{ backgroundColor: valueData.color }}
                    >
                      0{i + 1}
                    </span>
                    <span 
                      className="h-8 w-8 rounded-lg flex items-center justify-center text-xs"
                      style={{ backgroundColor: `color-mix(in srgb, ${valueData.color} 12%, transparent)`, color: valueData.color }}
                    >
                      <ValIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] font-serif">{v.value}</h4>
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="text-xs text-slate-650 leading-relaxed">
                      <span className="font-bold uppercase font-mono block text-[10px] text-slate-400">Business Meaning:</span>
                      {v.meaning}
                    </div>
                    <div className="text-xs text-slate-650 leading-relaxed">
                      <span className="font-bold uppercase font-mono block text-[10px]" style={{ color: valueData.color }}>Operational Impact:</span>
                      {v.impact}
                    </div>
                  </div>
                </PremiumTiltCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 7: WHY SM ASSOCIATES ──
           Consolidates what used to be three separate sections making
           overlapping "why choose us" arguments (this card grid, a
           SM-vs-Traditional-Agencies comparison table, and "Enterprise
           Operating Philosophy") into one concise differentiation section. */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">DIFFERENTIATION MATRIX</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">What Anchors Our Empanelment with Top Lenders</h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Five reasons banks, NBFCs and HFCs trust us with stressed portfolios that carry real regulatory and reputational risk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Featured trust image card */}
            <div className="lg:col-span-4 relative min-h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md flex flex-col justify-end">
              <img
                src="/images/enterprise_trust.png"
                alt="Enterprise Trust & Partnerships"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent pointer-events-none" />
              <div className="relative p-8 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-mono block mb-1">Corporate Trust</span>
                <h4 className="text-xl font-bold font-serif leading-snug">Partnerships Built on Performance &amp; Compliance</h4>
              </div>
            </div>

            {/* Grid of 5 edge cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Enterprise Experience',
                  value: 'Two and a half decades operating through multiple credit cycles, not a vendor new to the discipline of recovery.',
                  advantage: 'A track record institutions can diligence, not a pitch deck promise.'
                },
                {
                  title: 'Operational Excellence',
                  value: 'A direct, managed field network executing structured recovery workflows end to end — not subcontracted local agents.',
                  advantage: 'Predictable execution quality across every branch, every case.'
                },
                {
                  title: 'Governance',
                  value: 'Every engagement runs on documented conduct, recorded calls and an audit trail built for regulator scrutiny.',
                  advantage: 'De-risks the institution’s own compliance exposure, not just ours.'
                },
                {
                  title: 'Banking Domain Expertise',
                  value: 'Built specifically around how banks, NBFCs and HFCs actually manage stressed portfolios — not generic collections.',
                  advantage: 'Fewer translation gaps between what the lender needs and what the field executes.'
                },
                {
                  title: 'Regional Execution Capability',
                  value: '19 branch offices across South India, with local language fluency and local authority liaising under one accountable model.',
                  advantage: 'Reach without the coordination overhead of managing multiple regional vendors.'
                }
              ].map((card, i) => {
                const cardData = [
                  { color: '#D97706', icon: Award },
                  { color: '#2563EB', icon: Activity },
                  { color: '#E11D48', icon: Fingerprint },
                  { color: '#4F46E5', icon: Building2 },
                  { color: '#0D9488', icon: MapPin }
                ][i];
                const CardIcon = cardData.icon;
                return (
                  <PremiumTiltCard key={i} delay={i * 0.08} color={cardData.color} className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#0F172A] font-serif">{card.title}</h4>
                      <span 
                        className="h-7 w-7 rounded-lg flex items-center justify-center text-xs shrink-0"
                        style={{ backgroundColor: `color-mix(in srgb, ${cardData.color} 12%, transparent)`, color: cardData.color }}
                      >
                        <CardIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="text-sm text-slate-650 leading-relaxed">{card.value}</p>
                    <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-650 font-mono">
                      <span className="font-bold uppercase tracking-wider block text-[10px]" style={{ color: cardData.color }}>Advantage:</span>
                      {card.advantage}
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 8: CERTIFICATIONS & COMPLIANCE ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">RISK MITIGATION</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Certifications, Security Standards &amp; Regulatory Audits</h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              We systematically control operational risk through certified processes and audited field structures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Featured security image card */}
            <div className="lg:col-span-4 relative min-h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md flex flex-col justify-end">
              <img
                src="/images/secure_custody.png"
                alt="ISO/IEC 27001 Secure Data Custody"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent pointer-events-none" />
              <div className="relative p-8 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#FFFFFF]/10 backdrop-blur-sm px-2.5 py-1 rounded font-mono inline-block mb-2 border border-[#FFFFFF]/20">Information Security</span>
                <h4 className="text-xl font-bold font-serif leading-snug">ISO 27001 Certified Audited Infrastructure</h4>
              </div>
            </div>

            {/* Grid of 6 certification cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: 'ISO/IEC 27001 Certified', desc: 'Secure data pipelines utilizing role-based access gates and encrypted SFTP vaults.', icon: Shield },
                { title: '100% DRA Certified Staff', desc: 'Mandatory IIBF DRA curriculum certification before any field assignment.', icon: UserCheck },
                { title: 'Structured Audit Trails', desc: 'Voice logs and geotagged field activity logs preserved securely for 180 days.', icon: FileCheck },
                { title: 'GPS Geotagged Visits', desc: 'Agent check-ins require device geolocation matches and timestamped photos.', icon: MapPin },
                { title: 'Dialer Hours Lockouts', desc: 'Outbound dialers restricted to 08:00 AM – 07:00 PM via server rules.', icon: Lock },
                { title: 'Documentation Governance', desc: 'Standardized foreclosure file processing and title deed verification forensic checklists.', icon: FileText }
              ].map((cert, i) => {
                const CertIcon = cert.icon;
                const certColors = ['#2563EB', '#10B981', '#7C3AED', '#E11D48', '#D97706', '#0D9488'];
                const cardColor = certColors[i % certColors.length];
                return (
                  <PremiumTiltCard key={i} delay={i * 0.06} color={cardColor} className="p-5 flex flex-col justify-between h-full text-left">
                    <div className="space-y-3">
                      <div 
                        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 text-white shadow-sm"
                        style={{ backgroundColor: cardColor }}
                      >
                        <CertIcon className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A]">{cert.title}</h4>
                      <p className="text-xs text-slate-650 leading-relaxed">{cert.desc}</p>
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>

          <div className="pt-8 mt-4 border-t border-slate-200 space-y-8">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">REGULATORY MATRIX</span>
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">RBI Fair Practice Compliance Architecture</h3>
              <p className="text-sm text-slate-655">
                How we enforce RBI fair practice collection codes through server-side locks and agent logs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
              {complianceContent.rbiMatrix?.map((row, idx) => {
                const matrixData = [
                  { color: '#D97706', icon: Clock },
                  { color: '#2563EB', icon: Users },
                  { color: '#E11D48', icon: AlertCircle },
                  { color: '#0D9488', icon: HelpCircle }
                ][idx % 4];
                const MatrixIcon = matrixData.icon;
                return (
                  <PremiumTiltCard key={idx} delay={idx * 0.08} color={matrixData.color} className="p-6 space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-[8px] font-bold text-slate-400 font-mono uppercase tracking-wider">Guideline</span>
                      <span 
                        className="h-7 w-7 rounded-lg flex items-center justify-center text-xs shrink-0"
                        style={{ backgroundColor: `color-mix(in srgb, ${matrixData.color} 12%, transparent)`, color: matrixData.color }}
                      >
                        <MatrixIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-[#0F172A] font-serif leading-none">{row.guideline}</h4>
                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      <p className="text-sm text-slate-650"><strong className="text-slate-700 font-serif">Code:</strong> {row.code}</p>
                      <p className="text-sm font-semibold" style={{ color: matrixData.color }}><strong style={{ color: matrixData.color }}>SM Enforcement:</strong> {row.smAction}</p>
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── EXPLORE MORE (Industries + Clients teaser) ──
           Industries We Serve and Clients & Partnerships used to be full
           card-grid sections here, duplicating the dedicated /industries
           and /clients pages. Replaced with a compact link strip so About
           stays focused on "who is SM Associates" rather than becoming a
           second Industries or Clients page. */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/industries"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-5 text-left shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:shadow-md"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Explore</span>
                <h4 className="mt-1 font-bold text-base text-[#0F172A] font-serif">Industries We Serve</h4>
              </div>
              <ArrowRight className="h-4 w-4 text-[#2563EB] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/clients"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-5 text-left shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] font-mono">Explore</span>
                <h4 className="mt-1 font-bold text-sm text-[#0F172A] font-serif">Clients &amp; Partnerships</h4>
              </div>
              <ArrowRight className="h-4 w-4 text-[#2563EB] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Lender Onboarding Pipeline removed from About per architecture
          refinement — it's process/services content ("how to start working
          with us"), not company-identity content. Belongs on Contact or
          Services; not re-implemented there yet, flagged as a follow-up. */}

      {/* ── SECTION 13: CALL TO ACTION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#0F172A] relative overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-4xl font-extrabold text-white font-serif leading-tight">
            Partner with India's Leading Risk Operations Desk
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Invite Bank committees, NBFCs, Housing Finance Companies, and ARCs to initiate vendor due diligence and empanelment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-4 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] hover:shadow-xl shadow-[#2563EB]/35">
              Request Empanelment Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition-all hover:scale-[1.02]">
              Schedule Leadership Meeting
            </a>
          </div>
        </div>
      </motion.section>

      {/* Interactive Profile Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-[#E2E8F0] rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute right-6 top-6 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column */}
              <div className="w-full md:w-2/5 bg-slate-50 border-r border-[#E2E8F0] p-8 flex flex-col justify-between items-center text-center">
                <div className="space-y-4 w-full flex flex-col items-center">
                  <div className="h-56 w-56 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-200 shadow-inner">
                    <img src={selectedLeader.photo} alt={selectedLeader.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#0F172A]">{selectedLeader.name}</h3>
                    <p className="text-xs text-[#2563EB] font-bold uppercase tracking-wider font-mono mt-1">{selectedLeader.role}</p>
                  </div>
                </div>

                <div className="mt-8 italic text-slate-500 text-xs px-4 relative">
                  <span className="text-2xl font-serif text-[#2563EB]/20 absolute -top-4 -left-2">“</span>
                  <p className="relative z-10">"{selectedLeader.quote}"</p>
                  <span className="text-2xl font-serif text-[#2563EB]/20 absolute -bottom-4 -right-2">”</span>
                </div>

                <div className="mt-6 w-full">
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-[#E2E8F0] hover:border-slate-350 bg-white px-4 py-2.5 text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-[#2563EB] fill-[#2563EB]" /> Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-3/5 p-8 overflow-y-auto space-y-6 text-left">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Professional Overview</h4>
                  <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 text-xs">
                    <div>
                      <div className="text-slate-400 font-mono text-[9px] uppercase">Experience</div>
                      <div className="font-bold text-[#0F172A] mt-0.5">{selectedLeader.experience}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 font-mono text-[9px] uppercase">Location</div>
                      <div className="font-bold text-[#0F172A] mt-0.5">{selectedLeader.location}</div>
                    </div>
                    <div className="col-span-2 border-t border-[#E2E8F0] pt-2 mt-2">
                      <div className="text-slate-400 font-mono text-[9px] uppercase">Education</div>
                      <div className="font-bold text-[#0F172A] mt-0.5">{selectedLeader.education}</div>
                    </div>
                    {selectedLeader.email && (
                      <div className="col-span-2 border-t border-[#E2E8F0] pt-2 mt-2">
                        <div className="text-slate-400 font-mono text-[9px] uppercase">Contact</div>
                        <div className="font-bold text-[#2563EB] mt-0.5 inline-flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5" /> {selectedLeader.email}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Key Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise?.map((exp, idx) => (
                      <span key={idx} className="border border-[#E2E8F0] bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-sm">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Previous Institutions</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.prevInstitutions?.map((inst, idx) => (
                      <span key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-1.5 text-xs font-mono font-bold text-[#2563EB]">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Executive Timeline</h4>
                  <div className="space-y-4 border-l-2 border-slate-100 pl-4 ml-2">
                    {selectedLeader.careerTimeline?.map((item, idx) => (
                      <div key={idx} className="relative space-y-1">
                        <div className="absolute -left-[22px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#2563EB] bg-white" />
                        <div className="text-[9px] font-mono font-bold text-slate-400 leading-none">{item.year}</div>
                        <h5 className="text-xs font-extrabold text-[#0F172A] leading-snug">{item.role}</h5>
                        <p className="text-[10px] text-[#2563EB] font-bold font-mono">{item.inst}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


// Animated Counter Component
function AnimatedCounter({ targetValue, duration = 1.5 }) {
  const numericStr = targetValue.replace(/[^0-9]/g, '');
  const suffix = targetValue.replace(/[0-9]/g, '');
  const numericVal = parseInt(numericStr, 10) || 0;

  const count = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const controls = animate(count, numericVal, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setVal(Math.round(latest))
    });
    return () => controls.stop();
  }, [numericVal, duration]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}
