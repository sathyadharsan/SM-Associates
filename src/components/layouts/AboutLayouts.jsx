import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPageContent } from '../../data/pagesContent';
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
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased overflow-hidden">
      <div className="h-24 bg-[#FFFFFF]" />

      {/* ── SECTION 1: HERO SECTION ── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVar}
        className="relative py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden min-h-[500px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono shadow-sm"
          >
            <Sparkles className="h-3 w-3 animate-pulse" /> ISO 27001 & Compliance First
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-7xl font-serif leading-tight"
          >
            South India's Premier<br />
            <span className="text-[#2563EB] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">Debt Recovery</span> &amp; <span className="text-amber-500">Enforcement</span> Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto"
          >
            Delivering end-to-end NPA lifecycle resolution, pre-disbursal verification, and physical asset repossession services for nationalized banks, NBFCs, Housing Finance Companies, and ARCs since 2000.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-2.5 justify-center pt-2"
          >
            {['Compliant outreach', 'IIBF DRA Trained', 'ISO 27001 Audited', 'Structured Governance'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-650 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-1.5 hover:bg-slate-50 transition-colors shadow-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" /> {badge}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-4 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-[#2563EB]/25">
              Request Empanelment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-8 py-4 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] hover:border-slate-300 transition-all hover:scale-[1.02]">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── SECTION 2: COMPANY OVERVIEW ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-white border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono block">Company Overview</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">
                Corporate Governance Meets On-Ground Recovery Strength
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              <p className="text-sm text-slate-600 leading-relaxed">
                S M Associates Risk Management Pvt. Ltd. is a professional recovery and risk management organization providing end-to-end business solutions for Banks, NBFCs, Housing Finance Companies, Financial Institutions, and other enterprise clients.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                As one of South India's largest field-based recovery and enforcement partners, we specialize in operational recovery, legal recovery coordination, verification services, security solutions, asset management support, and enterprise risk management services.
              </p>
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-mono">Core Competency Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'End-to-End NPA Lifecycle Resolution',
                    'Zero-Tolerance Compliance Culture',
                    'IIBF DRA Certified Personnel',
                    'Geotagged Field Intelligence Systems'
                  ].map((focus) => (
                    <div key={focus} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scale Node Graphic */}
            <div className="relative w-full h-[380px] bg-slate-50 border border-[#E2E8F0] rounded-[32px] overflow-hidden p-4 flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent pointer-events-none" />

              {/* Trimmed to 3 identity-scale facts that don't restate the
                  operational footprint numbers (branches/field force/yards)
                  — those live once, in the Branch Network section below. */}
              <svg viewBox="0 0 400 360" className="w-full h-full overflow-visible select-none">
                <line x1="200" y1="180" x2="75" y2="75" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="325" y2="75" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="200" y2="290" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />

                <g className="filter drop-shadow-md">
                  <circle cx="200" cy="180" r="32" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                  <path d="M200 166 L203.5 174 L212 174 L205 179 L207.5 188 L200 183 L192.5 188 L195 179 L188 174 L196.5 174 Z" fill="#2563EB" />
                </g>

                <foreignObject x="10" y="40" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <CalendarDays className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Daily Visits</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">5,000+</span>
                    </div>
                  </motion.div>
                </foreignObject>

                <foreignObject x="260" y="40" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Empanelled Banks</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">100+</span>
                    </div>
                  </motion.div>
                </foreignObject>

                <foreignObject x="135" y="255" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Years of Legacy</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">25+</span>
                    </div>
                  </motion.div>
                </foreignObject>
              </svg>
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
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Evolution Journey</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Our Journey</h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Follow our chronological milestones as we scaled from a local recovery desk to a premier risk management ecosystem.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Central line — left-aligned on mobile, centred from lg up */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 lg:-translate-x-1/2" />

            <div className="space-y-6 lg:space-y-3">
              {(historyContent.timelineMilestones || []).map((m, i, arr) => {
                const isFuture = i === arr.length - 1;
                const accent = isFuture ? '#C8922A' : '#2563EB';
                const onRight = i % 2 === 1;

                const card = (
                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                    <div className="font-mono text-2xl font-black tracking-tight mb-2" style={{ color: accent }}>{m.year}</div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-serif leading-snug">{m.title}</h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">{m.summary}</p>
                    {m.highlights?.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {m.highlights.slice(0, 3).map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
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
                            <div className="text-sm font-bold font-serif" style={{ color: accent }}>{imp.value}</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{imp.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
        className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 20px 25px -5px rgba(37,99,235,0.06), 0 8px 10px -6px rgba(37,99,235,0.06)' }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 lg:p-12 space-y-6 text-left transition-all duration-300 cursor-pointer"
            >
              <span className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Our Vision Forward</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-serif italic">
                "To become India's most trusted Recovery and Risk Management organization by combining operational excellence, technology, and future AI-driven capabilities."
              </p>
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Strategic Philosophy</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Upholding financial system integrity through long-term bank partnerships, transparent telemetry reporting, and DRA certified ground teams.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Future Roadmap</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Active expansion from South India to West and North zones while deploying machine learning default propensity routing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -5, borderColor: '#F59E0B', boxShadow: '0 20px 25px -5px rgba(245,158,11,0.06), 0 8px 10px -6px rgba(245,158,11,0.06)' }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 lg:p-12 space-y-6 text-left transition-all duration-300 cursor-pointer"
            >
              <span className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Our Corporate Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-serif italic">
                "Deliver enterprise-grade recovery and risk management services through structured processes, professional execution, regulatory compliance, and continuous innovation."
              </p>
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Operational Commitment</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Continuous training updates for 100% of outreach officers, weekly QA caller audits, and secure information barriers to protect client data.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Lender Value Realization</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Maximizing recovery yields in Stage-3 delinquencies to directly release locked provisioning capital back onto balance sheets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: LEADERSHIP & MANAGEMENT (Reused exactly) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Governing Leadership</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Executive Leadership &amp; Governance</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Decades of combined banking recovery leadership guiding operational execution, legal compliance, and strategic alliances.
            </p>
          </div>

          {/* MD Spotlight Spot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5 relative">
              <motion.div
                whileHover={{ y: -4, borderColor: '#2563EB' }}
                className="border border-[#E2E8F0] bg-white rounded-3xl p-5 shadow-sm space-y-4 transition-colors duration-300"
              >
                <div className="h-80 w-full rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 relative">
                  <img
                    src={leadershipContent.mdSpotlight?.photo || "/images/jebaraj.M MD.png"}
                    alt={leadershipContent.mdSpotlight?.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A]">{leadershipContent.mdSpotlight?.name}</h3>
                  <p className="text-xs text-[#2563EB] font-bold uppercase tracking-wider font-mono mt-0.5">{leadershipContent.mdSpotlight?.role}</p>
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
              </motion.div>
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
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="font-bold text-xs text-[#0F172A] uppercase tracking-wider font-mono">Executive Career Matrix</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  {leadershipContent.mdSpotlight?.timeline.map((step, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded font-mono inline-block mb-1">{step.inst}</div>
                      <div className="text-[9px] font-bold text-slate-400 font-mono">{step.year}</div>
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
                <motion.div
                  key={i}
                  whileHover={{ y: -6, borderColor: '#2563EB', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.06)' }}
                  className="group border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer"
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
                      <h3 className="font-bold text-sm text-[#0F172A] font-serif leading-snug">{member.name}</h3>
                      <p className="text-[10px] text-[#2563EB] font-bold uppercase tracking-wider font-mono leading-none">{member.role}</p>
                      <p className="text-[10px] text-slate-400 font-mono pt-1">Tenure: {member.experience}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[10px] text-slate-500 leading-relaxed font-mono">
                      <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[8px] mb-1">Former Position:</span>
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
                </motion.div>
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
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Core Values</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Enterprise Values &amp; Impact</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
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
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 space-y-4 shadow-sm transition-all duration-300 cursor-pointer"
              >
                <span className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center text-xs font-bold font-mono">
                  0{i + 1}
                </span>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{v.value}</h4>
                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <div className="text-[10px] text-slate-500">
                    <span className="font-bold uppercase font-mono block text-[8px] text-slate-400">Business Meaning:</span>
                    {v.meaning}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    <span className="font-bold uppercase font-mono block text-[8px] text-[#2563EB]">Operational Impact:</span>
                    {v.impact}
                  </div>
                </div>
              </motion.div>
            ))}
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
        className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Enterprise Edge</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Why Institutions Choose SM Associates</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Five reasons banks, NBFCs and HFCs trust us with stressed portfolios that carry real regulatory and reputational risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
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
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-3 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{card.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{card.value}</p>
                <div className="pt-2 border-t border-slate-200/60 text-[10px] text-slate-500 font-mono">
                  <span className="font-bold uppercase tracking-wider block text-[8px] text-[#2563EB]">Advantage:</span>
                  {card.advantage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 8: CERTIFICATIONS & COMPLIANCE ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Risk Management</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Certifications &amp; Regulatory Compliance</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We systematically control operational risk through certified processes and audited field structures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {[
              { title: 'ISO/IEC 27001 Certified', desc: 'Secure data pipelines utilizing role-based access gates and encrypted SFTP vaults.', icon: Shield },
              { title: '100% DRA Certified Staff', desc: 'Mandatory IIBF DRA curriculum certification before any field assignment.', icon: UserCheck },
              { title: 'Structured Audit Trails', desc: 'Voice logs and geotagged field activity logs preserved securely for 180 days.', icon: FileCheck },
              { title: 'GPS Geotagged Visits', desc: 'Agent check-ins require device geolocation matches and timestamped photos.', icon: MapPin },
              { title: 'Dialer Hours Lockouts', desc: 'Outbound dialers restricted to 08:00 AM – 07:00 PM via server rules.', icon: Lock },
              { title: 'Documentation Governance', desc: 'Standardized foreclosure file processing and title deed verification forensic checklists.', icon: FileText }
            ].map((cert, i) => {
              const CertIcon = cert.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-5 space-y-3 shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <CertIcon className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0F172A]">{cert.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{cert.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-8 mt-4 border-t border-slate-200 space-y-8">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Regulatory Safeguards</span>
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">RBI Compliance Matrix</h3>
              <p className="text-xs text-slate-500">
                How we enforce RBI fair practice collection codes through server-side locks and agent logs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
              {complianceContent.rbiMatrix?.map((row, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                  className="border border-[#E2E8F0] bg-white rounded-2xl p-6 space-y-3 transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span className="inline-block text-[8px] font-bold text-slate-400 font-mono uppercase tracking-wider">Guideline</span>
                  <h4 className="font-bold text-sm text-[#0F172A] font-serif leading-none">{row.guideline}</h4>
                  <div className="space-y-2 pt-2 border-t border-slate-200/60">
                    <p className="text-xs text-slate-500"><strong className="text-slate-700 font-serif">Code:</strong> {row.code}</p>
                    <p className="text-xs text-[#2563EB] font-semibold"><strong className="text-[#2563EB]">SM Enforcement:</strong> {row.smAction}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 9: BRANCH NETWORK & OPERATIONAL PRESENCE ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map Column */}
            <div className="lg:col-span-6 flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
              <div className="w-full max-w-sm relative">
                <img
                  src="/images/india_coverage_map.png"
                  alt="SM Associates Southern India Regional Footprint Map"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Scale Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Geographic Reach</span>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif leading-tight">Branch Network &amp; Field Force Density</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating a structured network of 19 physical branches covering Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Operating States', val: '5 States' },
                  { label: 'Physical Branches', val: '19 Offices' },
                  { label: 'DRA Field Force', val: '1,500+ Crew' },
                  { label: 'Secure Storage Yards', val: '25+ Yards' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, borderColor: '#2563EB' }}
                    className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl px-4 py-3 text-left transition-colors duration-300"
                  >
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">{item.label}</div>
                    <div className="text-lg font-bold text-[#2563EB] font-serif mt-1">{item.val}</div>
                  </motion.div>
                ))}
              </div>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] font-mono">Explore</span>
                <h4 className="mt-1 font-bold text-sm text-[#0F172A] font-serif">Industries We Serve</h4>
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
        className="py-24 bg-[#0F172A] relative overflow-hidden"
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
