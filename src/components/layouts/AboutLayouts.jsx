import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPageContent } from '../../data/pagesContent';
import '../../styles/homepage-v6.css';
import RichIcon from '../sections/shared/RichIcon';
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
function PremiumTiltCard({ children, className = '', color = '#0072bc', delay = 0, style = {} }) {
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

// ── Premium Full-Height Leadership Card with Transparent Photo Overlay ──
function LeadershipCard({ name, role, image, quote, description }) {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div
      onClick={() => setShowQuote(!showQuote)}
      onMouseEnter={() => setShowQuote(true)}
      onMouseLeave={() => setShowQuote(false)}
      className="relative h-[540px] sm:h-[560px] w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/80 group cursor-pointer border border-slate-200/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0072bc]/25 hover:-translate-y-1 bg-slate-900"
    >
      {/* Background Photo - Always Crisp & 100% Clear (Zero Blur!) */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/jebaraj.M MD.png';
        }}
      />

      {/* Pure semi-transparent dark gradient overlay over photo - ZERO blur so photo stays crystal clear */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          showQuote
            ? 'bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/20'
            : 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent'
        }`}
      />

      {/* Text Content Overlay directly over the crisp background photo */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-left z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight leading-tight">
          {name}
        </h3>
        <p className="text-sm font-semibold text-[#0072bc] mt-1 tracking-wide">
          {role}
        </p>

        {/* Quote / Description Text - Appears directly over the photo */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showQuote ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans font-normal drop-shadow-md">
            "{quote}"
          </p>
          {description && (
            <p className="text-[11px] sm:text-xs text-slate-300 mt-3 leading-relaxed font-normal border-t border-slate-700/60 pt-2.5 font-sans">
              {description}
            </p>
          )}
        </div>

        {/* Wide Blue Underline Bar (Matching Reference Image) */}
        <div className="w-full h-1 bg-[#0072bc] rounded-full mt-4 transition-all duration-300 shadow-sm" />
      </div>
    </div>
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

  const filteredMilestones = (historyContent.timelineMilestones || [])
    .filter(m => ['2000', '2010', '2020', '2026'].includes(String(m.year)));
  const leftMilestones = filteredMilestones.filter((_, idx) => idx % 2 === 0);
  const rightMilestones = filteredMilestones.filter((_, idx) => idx % 2 === 1);

  const renderMilestoneCard = (m, accent) => (
    <PremiumTiltCard color={accent} className="p-6 text-left w-full">
      <div className="font-mono text-2xl font-black tracking-tight mb-2" style={{ color: accent }}>{m.year}</div>
      <h3 className="text-lg font-bold text-[#0F172A] font-serif leading-snug">{m.title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.summary}</p>
      {m.highlights?.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {m.highlights.slice(0, 3).map((hl, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
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
                <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono block">ORGANIZATIONAL PROFILE</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">
                  Who We Are
                </h2>
                <div className="w-16 h-1 bg-[#0072bc] rounded-full" />
              </div>

              {/* Editorial Highlight Statement */}
              <div className="border-l-4 border-[#0072bc] pl-5 py-2">
                <p className="text-base md:text-lg font-medium text-slate-750 font-serif italic leading-relaxed">
                  "Pioneering compliant debt resolution, asset tracing, and physical custody operations across South India since 2000."
                </p>
              </div>

              {/* Refined Description */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                South India's institutional recovery and risk management partner — built for nationalized banks, NBFCs, HFCs, and ARCs.
              </p>

              {/* Core Competencies Bento Grid */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-mono">Core Competency Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'End-to-End NPA Lifecycle',
                      desc: 'Stage-1 early resolution through to Stage-3 legal enforcement.',
                      color: '#0072bc'
                    },
                    {
                      title: 'Zero-Tolerance Compliance',
                      desc: '100% adherence to RBI fair practice collection codes.',
                      color: '#059669'
                    },
                    {
                      title: 'IIBF DRA Certified Staff',
                      desc: 'Examination-verified field representatives protect brand trust.',
                      color: '#7c3aed'
                    },
                    {
                      title: 'Geotagged Visit Telemetry',
                      desc: 'Real-time GPS check-ins and immutable audit logging.',
                      color: '#d97706'
                    }
                  ].map((comp, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-4 flex gap-4 items-start transition-all duration-305 hover:border-slate-300 hover:shadow-sm group"
                    >
                      <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <RichIcon type={comp.title} size={40} />
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">HISTORICAL TIMELINE</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Our Journey</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From a single Chennai desk in 2000 to a five-state risk operations network — built milestone by milestone.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Central line — left-aligned on mobile, centred from lg up */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 lg:-translate-x-1/2" />

            {/* Mobile Layout (stacked sequentially) */}
            <div className="space-y-8 lg:hidden">
              {filteredMilestones.map((m, i) => {
                const isFuture = m.year === '2026';
                const accent = isFuture ? '#0072bc' : '#0072bc';
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="relative pl-12 text-left"
                  >
                    <span
                      className="absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white shadow-md z-10"
                      style={{ background: accent }}
                    />
                    {renderMilestoneCard(m, accent)}
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Layout (staggered columns with overlap) */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 relative">
              {/* Left Column (even items: 2000, 2020) */}
              <div className="space-y-24 text-right flex flex-col items-end pr-12">
                {leftMilestones.map((m) => {
                  const accent = '#0072bc';
                  return (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      className="max-w-md w-full relative"
                    >
                      {/* Timeline dot positioned on the center line */}
                      <span
                        className="absolute -right-[48px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-white shadow-md z-10 translate-x-1/2"
                        style={{ background: accent }}
                      />
                      {renderMilestoneCard(m, accent)}
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column (odd items: 2010, 2026) - Offset down by mt-32 to center align with the gaps */}
              <div className="space-y-24 text-left flex flex-col items-start pl-12 mt-32">
                {rightMilestones.map((m) => {
                  const isFuture = m.year === '2026';
                  const accent = isFuture ? '#0072bc' : '#0072bc';
                  return (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      className="max-w-md w-full relative"
                    >
                      {/* Timeline dot positioned on the center line */}
                      <span
                        className="absolute -left-[48px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-white shadow-md z-10 -translate-x-1/2"
                        style={{ background: accent }}
                      />
                      {renderMilestoneCard(m, accent)}
                    </motion.div>
                  );
                })}
              </div>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">DIRECTION</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Vision &amp; Mission</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">Where we are going, and how we operate to get there.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PremiumTiltCard color="#8b5cf6" delay={0} className="p-8 space-y-5 text-left group">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <RichIcon type="vision" size={48} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b5cf6] font-mono block">Strategic Future</span>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A]">Vision</h3>
                </div>
              </div>
              <p className="text-base text-slate-700 font-serif italic leading-relaxed border-l-4 border-[#8b5cf6]/40 pl-4">
                &ldquo;To become India&rsquo;s most trusted Recovery and Risk Management organization by combining operational excellence, technology, and AI-driven capabilities.&rdquo;
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Expanding from South India to national scale through disciplined execution, long-term bank partnerships, and continuous investment in field intelligence.
              </p>
            </PremiumTiltCard>
            <PremiumTiltCard color="#f43f5e" delay={0.08} className="p-8 space-y-5 text-left group">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-2xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <RichIcon type="mission" size={48} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f43f5e] font-mono block">Core Purpose</span>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A]">Mission</h3>
                </div>
              </div>
              <p className="text-base text-slate-700 font-serif italic leading-relaxed border-l-4 border-[#f43f5e]/40 pl-4">
                &ldquo;Deliver enterprise-grade recovery and risk management through structured processes, professional execution, and continuous innovation.&rdquo;
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Every engagement runs on documented conduct, recorded calls, and a regulator-ready audit trail — protecting the lender&rsquo;s reputation at every step.
              </p>
            </PremiumTiltCard>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">TECHNOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Technology</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              AI-augmented field operations, ML-based portfolio routing, and real-time compliance engines — active across every mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Left Column (Cards): ~60% */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {[
                {
                  title: 'Smart Outreach',
                  desc: 'Multilingual AI voice agents handle pre-delinquency borrower contact in 5 languages, routing complex accounts to certified field officers.',
                  color: '#0072bc'
                },
                {
                  title: 'Portfolio Routing',
                  desc: 'ML algorithms prioritize accounts by recovery probability — maximizing field effort where resolution outcomes are highest.',
                  color: '#8b5cf6'
                },
                {
                  title: 'Compliance Automation',
                  desc: 'Server-side engines validate GPS location, timestamps, and outreach logs in real time — guaranteeing RBI Fair Practice adherence.',
                  color: '#059669'
                }
              ].map((item, idx) => {
                return (
                  <PremiumTiltCard
                    key={idx}
                    delay={idx * 0.08}
                    color={item.color}
                    className="flex-1 flex gap-5 items-start p-6 group"
                  >
                    <div className="flex gap-5 items-start">
                      <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <RichIcon type={item.title} size={42} />
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

            {/* Right Column (AI Illustration): ~40% */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-0 bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md flex flex-col justify-end">
              <img
                src="/images/ai_operations.png"
                alt="AI Agent Command Center dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/30 to-transparent pointer-events-none" />
              <div className="relative p-8 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500 font-mono block mb-1">AI Integration</span>
                <h4 className="text-lg font-bold font-serif leading-snug">Smart Portfolio Routing &amp; Outreach</h4>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0072bc] hover:text-[#0072bc] transition-colors group"
            >
              Explore Our Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>




      {/* ── SECTION 5: LEADERSHIP ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">EXECUTIVE DIRECTION</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Leadership</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Guided by decades of banking execution, strategic vision, and uncompromised compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto items-stretch">
            {/* Card 1: Jebaraj.M */}
            <LeadershipCard
              name="Jebaraj.M"
              role="Managing Director & Founder"
              image="/images/jebaraj.M MD.png"
              quote="Our purpose is simple — to protect the financial system's integrity by combining ground execution strength with compliance, technology and ethical operations."
              description="Over 28+ years of expertise in SARFAESI enforcement, institutional recovery operations, and banking resolution strategy across India."
            />

            {/* Card 2: Anisley Jebaraj */}
            <LeadershipCard
              name="Anisley Jebaraj"
              role="Director"
              image="/images/anisley_jebaraj.png"
              quote="Representing the next generation of recovery operations leadership, driving technology integration, operational excellence, and compliant growth across India."
              description="Focusing on digital transformation, enterprise client relations, and modernizing recovery operations frameworks."
            />

            {/* Card 3: Empty Card */}
            <div className="relative h-[540px] sm:h-[560px] rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#0072bc]/30 hover:bg-slate-50">
              <div className="w-16 h-16 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 flex items-center justify-center text-[#0072bc] mb-4 shadow-sm">
                <Users size={28} />
              </div>
              <h4 className="text-lg font-bold text-slate-700 font-serif mb-2">Leadership Expansion</h4>
              <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed font-mono">
                Empaneling senior recovery veterans & strategic board advisors.
              </p>
              <span className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 px-3 py-1 rounded-full border border-[#0072bc]/20 font-mono">
                Position Open
              </span>
            </div>
          </div>
        </div>
      </motion.section>      {/* ── SECTION 7: WHY SM ASSOCIATES ──
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">DIFFERENTIATION MATRIX</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Why SM</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Five structural advantages that make us the low-risk, high-accountability partner for stressed portfolio management.
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500 font-mono block mb-1">Corporate Trust</span>
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
                const cardColors = ['#0072bc', '#059669', '#7c3aed', '#d97706', '#0284c7'];
                const cardColor = cardColors[i % cardColors.length];
                return (
                  <PremiumTiltCard key={i} delay={i * 0.08} color={cardColor} className="space-y-3 text-left group">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#0F172A] font-serif">{card.title}</h4>
                      <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <RichIcon type={card.title} size={38} />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.value}</p>
                    <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-500 font-mono">
                      <span className="font-bold uppercase tracking-wider block text-[10px]" style={{ color: cardColor }}>Advantage:</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">INSTITUTIONAL GOVERNANCE</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Governance</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ISO 27001 certified, 100% DRA-certified staff, and RBI Fair Practice compliant — built for institutional-grade scrutiny.
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0072bc] bg-[#FFFFFF]/10 backdrop-blur-sm px-2.5 py-1 rounded font-mono inline-block mb-2 border border-[#FFFFFF]/20">Information Security</span>
                <h4 className="text-xl font-bold font-serif leading-snug">ISO 27001 Certified Audited Infrastructure</h4>
              </div>
            </div>

            {/* Grid of 6 certification cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: 'ISO/IEC 27001 Certified', desc: 'Secure data pipelines utilizing role-based access gates and encrypted SFTP vaults.' },
                { title: '100% DRA Certified Staff', desc: 'Mandatory IIBF DRA curriculum certification before any field assignment.' },
                { title: 'Structured Audit Trails', desc: 'Voice logs and geotagged field activity logs preserved securely for 180 days.' },
                { title: 'GPS Geotagged Visits', desc: 'Agent check-ins require device geolocation matches and timestamped photos.' },
                { title: 'Dialer Hours Lockouts', desc: 'Outbound dialers restricted to 08:00 AM – 07:00 PM via server rules.' },
                { title: 'Documentation Governance', desc: 'Standardized foreclosure file processing and title deed verification forensic checklists.' }
              ].map((cert, i) => {
                const certColors = ['#0072bc', '#059669', '#7c3aed', '#d97706', '#f43f5e', '#0284c7'];
                const cardColor = certColors[i % certColors.length];
                return (
                  <PremiumTiltCard key={i} delay={i * 0.06} color={cardColor} className="p-5 flex flex-col justify-between h-full text-left group">
                    <div className="space-y-3">
                      <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 w-fit">
                        <RichIcon type={cert.title} size={38} />
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A] font-serif">{cert.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>

          <div className="pt-8 mt-4 border-t border-slate-200 space-y-8">
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0072bc] font-mono">RBI COMPLIANCE MATRIX</span>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Four Fair Practice guidelines enforced through server-side controls, certified agent protocols, and real-time dispute tracking.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
              {complianceContent.rbiMatrix?.map((row, idx) => {
                const matrixColors = ['#0072bc', '#059669', '#f43f5e', '#d97706'];
                const cardColor = matrixColors[idx % matrixColors.length];
                return (
                  <PremiumTiltCard key={idx} delay={idx * 0.08} color={cardColor} className="p-6 space-y-3 text-left group">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-[8px] font-bold text-slate-400 font-mono uppercase tracking-wider">Guideline</span>
                      <div className="p-1 rounded-xl bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <RichIcon type={row.guideline} size={38} />
                      </div>
                    </div>
                    <h4 className="font-bold text-base text-[#0F172A] font-serif leading-none">{row.guideline}</h4>
                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      <p className="text-sm text-slate-600"><strong className="text-slate-700 font-serif">Code:</strong> {row.code}</p>
                      <p className="text-sm font-semibold" style={{ color: cardColor }}><strong style={{ color: cardColor }}>SM Enforcement:</strong> {row.smAction}</p>
                    </div>
                  </PremiumTiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 13: CALL TO ACTION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-[#0F172A] relative overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-tight">
            Ready to Partner?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Initiate vendor due diligence and empanelment for your portfolio — banks, NBFCs, HFCs, and ARCs welcome.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#0072bc] px-8 py-4 text-sm font-bold text-white hover:bg-[#0072bc] transition-all hover:scale-[1.02] hover:shadow-xl shadow-[#0072bc]/35">
              Request Empanelment Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition-all hover:scale-[1.02]">
              Schedule Leadership Meeting
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center pt-2">
            <Link
              to="/industries"
              className="text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              Industries We Serve <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              to="/clients"
              className="text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              Clients &amp; Partnerships <ArrowRight className="h-3 w-3" />
            </Link>
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
                    <p className="text-xs text-[#0072bc] font-bold uppercase tracking-wider font-mono mt-1">{selectedLeader.role}</p>
                  </div>
                </div>

                <div className="mt-8 italic text-slate-500 text-xs px-4 relative">
                  <span className="text-2xl font-serif text-[#0072bc]/20 absolute -top-4 -left-2">“</span>
                  <p className="relative z-10">"{selectedLeader.quote}"</p>
                  <span className="text-2xl font-serif text-[#0072bc]/20 absolute -bottom-4 -right-2">”</span>
                </div>

                <div className="mt-6 w-full">
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-[#E2E8F0] hover:border-slate-350 bg-white px-4 py-2.5 text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-[#0072bc] fill-[#0072bc]" /> Connect on LinkedIn
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
                        <div className="font-bold text-[#0072bc] mt-0.5 inline-flex items-center gap-1">
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
                      <span key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-1.5 text-xs font-mono font-bold text-[#0072bc]">
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
                        <div className="absolute -left-[22px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#0072bc] bg-white" />
                        <div className="text-[9px] font-mono font-bold text-slate-400 leading-none">{item.year}</div>
                        <h5 className="text-xs font-extrabold text-[#0F172A] leading-snug">{item.role}</h5>
                        <p className="text-[10px] text-[#0072bc] font-bold font-mono">{item.inst}</p>
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
