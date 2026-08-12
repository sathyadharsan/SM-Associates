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
import AboutHeroSection from '../../sections/AboutHeroSection';
import AboutStorySection from '../../sections/AboutStorySection';
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
import { CtaButton } from '../ui/cta-button';

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
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0072bc]/15">
      <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-white sm:h-[320px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top scale-[1.04] transition-transform duration-700 group-hover:scale-[1.08]"
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

      {/* ── SECTION 1: ABOUT HERO SECTION (Reference Image 1 Style) ── */}
      <AboutHeroSection />

      {/* ── SECTION 2: OUR STORY SECTION (Reference Image 2 Style) ── */}
      <AboutStorySection />

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


      {/* ── SECTION 4: VISION, MISSION & VALUES STACKING SCROLL CARDS ── */}
      <section className="py-[clamp(56px,8vh,88px)] bg-slate-50 overflow-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Vision, Mission &amp; Values</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Where we are going, how we operate, and the core principles driving our enterprise recovery operations.
            </p>
          </div>

          {/* Stacking Cards Container */}
          <div className="relative space-y-12 sm:space-y-16 max-w-5xl mx-auto pb-16">
            
            {/* ── CARD 1: VISION (Clean White #FFFFFF) ── */}
            <div className="sticky top-28 sm:top-32 z-10 rounded-[32px] bg-white p-8 sm:p-12 shadow-[0_28px_70px_-15px_rgba(15,23,42,0.12)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Text */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono uppercase tracking-widest">
                    Strategic Future
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0072bc] font-serif">Vision</h3>
                  <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                    Our vision is to bring financial inclusion and empower the credit ecosystem across India by providing structured recovery operations, AI-augmented field intelligence, and regulator-ready audit standards.
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-200/60">
                    Expanding from South India to national scale through disciplined execution, long-term bank partnerships, and continuous investment in field workforce excellence.
                  </p>
                </div>

                {/* Right Column: Visual Card */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full aspect-4/3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/60 p-5 overflow-hidden border border-slate-200 shadow-md flex items-center justify-between">
                    {/* Floating Pills */}
                    <div className="space-y-2 z-10">
                      <div className="bg-[#0072bc] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                        What do you need recovery for?
                      </div>
                      <div className="bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-2xs border border-slate-200">
                        Asset Resolution
                      </div>
                      <div className="bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-2xs border border-slate-200">
                        Field Operations
                      </div>
                      <div className="bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-2xs border border-slate-200">
                        Legal Desk &amp; Notice
                      </div>
                      <div className="bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-2xs border border-slate-200">
                        NPA Portfolio
                      </div>
                    </div>
                    <img
                      src="/assets/cards/portfolio_photo.png"
                      alt="Vision Visual"
                      className="absolute right-0 bottom-0 h-full w-1/2 object-cover rounded-r-2xl opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 2: MISSION (Clean White #FFFFFF) ── */}
            <div className="sticky top-32 sm:top-36 z-20 rounded-[32px] bg-white p-8 sm:p-12 shadow-[0_28px_70px_-15px_rgba(15,23,42,0.12)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Text */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono uppercase tracking-widest">
                    Core Purpose
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0072bc] font-serif">Mission</h3>
                  <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                    SM Associates’ mission is to become the go-to enterprise recovery partner for financial institutions nationwide. We deliver structured recovery operations with mandates from ₹1,000 to ₹2,00,000+ through professional execution and transparent reporting.
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-200/60">
                    Every engagement runs on documented conduct, recorded outreach, and a regulator-ready audit trail — protecting the lender’s reputation at every step.
                  </p>
                </div>

                {/* Right Column: Visual Card */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full aspect-4/3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/60 p-5 overflow-hidden border border-slate-200 shadow-md flex items-center justify-center">
                    <img
                      src="/assets/cards/legal_photo.png"
                      alt="Mission Visual"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl max-w-[200px] text-center space-y-1">
                      <div className="bg-[#0072bc] text-white px-2.5 py-1 rounded-lg text-[10.5px] font-bold flex items-center justify-center gap-1">
                        <span>✓</span> Money Recovered
                      </div>
                      <div className="text-2xl font-black text-slate-900 tracking-tight">₹ 5,00,000+</div>
                      <p className="text-[10px] text-slate-500 font-semibold">Sent &amp; Deposited to Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 3: VALUES (Clean White #FFFFFF) ── */}
            <div className="sticky top-36 sm:top-40 z-30 rounded-[32px] bg-white p-8 sm:p-12 shadow-[0_28px_70px_-15px_rgba(15,23,42,0.12)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Text */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono uppercase tracking-widest">
                    Operating Principles
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0072bc] font-serif">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                        Integrity &amp; Ethics
                      </div>
                      <p className="text-xs text-slate-500">Zero tolerance for misconduct or unverified field visits.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        RBI Compliance
                      </div>
                      <p className="text-xs text-slate-500">100% adherence to Fair Practice codes &amp; time window rules.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-500" />
                        Data Security
                      </div>
                      <p className="text-xs text-slate-500">256-bit encrypted borrower records and audit logs.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        Performance First
                      </div>
                      <p className="text-xs text-slate-500">High resolution yield backed by 25+ years of experience.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Visual Card */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="relative w-full aspect-4/3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/60 p-5 overflow-hidden border border-slate-200 shadow-md flex items-center justify-center">
                    <img
                      src="/assets/cards/branches_photo.png"
                      alt="Values Visual"
                      className="absolute inset-0 h-full w-full object-cover opacity-85"
                    />
                    <div className="relative z-10 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 shadow-xl text-center space-y-1">
                      <span className="font-mono text-[10px] font-bold text-[#0072bc] uppercase tracking-widest">100% AUDIT READY</span>
                      <div className="text-sm font-extrabold text-slate-900">Banking Grade Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>






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

      {/* ── SECTION 13: CALL TO ACTION (White Mode) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-[clamp(56px,8vh,88px)] bg-white border-t border-slate-100 relative overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
            Ready to Partner?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Initiate vendor due diligence and empanelment for your portfolio — banks, NBFCs, HFCs, and ARCs welcome.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <CtaButton to="/contact" className="px-8 py-4">
              Request Empanelment Proposal
            </CtaButton>
            <CtaButton href="/contact" variant="secondary" className="px-8 py-4">
              Schedule Leadership Meeting
            </CtaButton>
          </div>
          <div className="flex flex-wrap gap-6 justify-center pt-2">
            <Link
              to="/industries"
              className="text-xs font-semibold text-slate-500 hover:text-[#0072bc] transition-colors inline-flex items-center gap-1"
            >
              Industries We Serve <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              to="/clients"
              className="text-xs font-semibold text-slate-500 hover:text-[#0072bc] transition-colors inline-flex items-center gap-1"
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
