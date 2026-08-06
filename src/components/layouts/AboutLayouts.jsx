import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPageContent } from '../../data/pagesContent';
import '../../styles/homepage-v6.css';
import RichIcon from '../sections/shared/RichIcon';
import SolutionComparisonSection from '../../sections/SolutionComparisonSection';
import ComplianceStorySection from '../../sections/ComplianceStorySection';
import AxionAboutSection from '../../sections/AxionAboutSection';
import CompanyJourneySection from '../../sections/CompanyJourneySection';
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

// ── Leadership Card — pure-white studio photo, no dark scrim ──
// The previous version laid a slate-950 gradient directly over the photo
// (darker still on hover) to keep name/quote text legible, which tinted
// every studio-white background navy instead of showing it clean. Text now
// sits below the photo on the same white card surface instead of on top
// of it, so nothing darkens the image and the studio backdrop reads as
// actual white.
function LeadershipCard({ name, role, image, quote, description }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0072bc]/15">
      <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-white sm:h-[320px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/jebaraj.M MD.png';
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-7 text-left sm:p-8">
        <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 font-serif sm:text-2xl">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold tracking-wide text-[#0072bc]">
          {role}
        </p>
        <div className="mt-4 h-1 w-12 rounded-full bg-[#0072bc]" />

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          &ldquo;{quote}&rdquo;
        </p>
        {description && (
          <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
            {description}
          </p>
        )}
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
  // historyContent was the source for the old vertical timeline; the
  // journey content now lives in CompanyJourneySection.
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
    // overflow-x-clip, NOT overflow-x-hidden: `hidden` forces the other axis
    // to compute as `auto`, which makes this div a scroll container and
    // therefore the scrollport for any position:sticky descendant — the
    // page itself scrolls on <html>, so CompanyJourneySection's pin would
    // silently never engage. `clip` clips identically without creating a
    // scroll container, leaving sticky bound to the viewport.
    //
    // No scroll-snap on this page (the `company-page-snap-container` class
    // and its index.css rules were removed): CSS scroll-snap and a
    // scroll-scrubbed pinned section fight each other — each discrete wheel
    // tick can get pulled back toward a neighbouring section's snap point
    // right at the boundary of the pinned area, which reads as the pin
    // being stuck. Whole-page snap was also inconsistent with the one
    // section that's genuinely scroll-jacked, so this drops it everywhere
    // rather than special-casing around CompanyJourneySection.
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased overflow-x-clip">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <div className="ambient-glow ambient-glow--3" />


      {/* ── SECTION 2: AXION ABOUT SECTION ── */}
      <AxionAboutSection />

      {/* ── SECTION 3: OUR JOURNEY (Scroll-Linked Horizontal Story) ──
           The alternating vertical timeline that sat here was replaced by
           CompanyJourneySection: vertical scroll now drives horizontal
           travel through the milestone years, scrubbed frame-for-frame off
           scroll progress.

           It is deliberately NOT wrapped in one of this file's
           motion.section blocks — those animate `y: 30 → 0`, and a
           transformed ancestor becomes the containing block for
           position:sticky, which silently breaks the pin. */}
      <CompanyJourneySection />


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
        className="py-[clamp(56px,8vh,88px)] bg-[#FFFFFF] border-b border-[#E2E8F0]"
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
              description="Founded SM Associates in 2004, establishing specialized recovery and verification operations for premier institutions like SBI Cards, LIC Housing Finance, ICICI Bank, SCB, and Citibank. He has since built a robust enterprise infrastructure for SARFAESI enforcement, resolution, and recovery operations spanning Tamil Nadu, Kerala, Karnataka, Telangana, and Puducherry."
            />

            {/* Card 2: P. David Raja */}
            <LeadershipCard
              name="P. David Raja"
              role="Director"
              image="/images/p_david_raja.png"
              quote="Every recovery mandate we take on carries the same discipline — structured execution, complete documentation, and unwavering compliance with the frameworks that govern it."
              description="Manages SM Associates' recovery and verification operations for premier institutions including SBI Cards, LIC Housing Finance, ICICI Bank, SCB, Citibank, and Axis Bank. He oversees the field execution of SARFAESI enforcement, resolution, and recovery operations spanning Tamil Nadu, Kerala, Karnataka, Telangana, and Puducherry."
            />

            {/* Card 3: Anisley Jebaraj */}
            <LeadershipCard
              name="Anisley Jebaraj"
              role="Director"
              image="/images/anisley_jebaraj.jpg"
              quote="Representing the next generation of recovery operations leadership, driving technology integration, operational excellence, and compliant growth across India."
              description="Directs operational strategy, client relations, and modernizing recovery operations frameworks for enterprise portfolios."
            />
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 7: INSTITUTIONAL COMPARISON MATRIX ── */}
      <SolutionComparisonSection />

      {/* ── SECTION 7b: ENTERPRISE GOVERNANCE & COMPLIANCE (3D FLIP CARDS) ── */}
      <ComplianceStorySection />

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
              <div className="w-full md:w-3/5 p-8 overflow-y-auto no-scrollbar space-y-6 text-left">
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
