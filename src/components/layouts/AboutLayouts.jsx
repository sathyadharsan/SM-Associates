import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { clientLogos } from '../../data/clientLogos';
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

// Simple monochrome logo list for the institutional trust band
const InstitutionalLogos = () => (
  <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-[#F8FAFC]">SBI CARDS</span>
    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-[#F8FAFC]">AXIS BANK</span>
    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-[#F8FAFC]">BAJAJ FINANCE</span>
    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-[#F8FAFC]">SHRIRAM FINANCE</span>
    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-[#F8FAFC]">HDB FINANCIAL</span>
  </div>
);

// ----------------------------------------------------
// 1. COMPANY OVERVIEW LAYOUT (`/about`)
// ----------------------------------------------------
export function CompanyOverviewLayout({ content }) {
  const [activeYear, setActiveYear] = useState('2000');
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);

  // Load other pages' content to act as single-source-of-truth
  const leadershipContent = getPageContent('leadership') || {};
  const historyContent = getPageContent('history') || {};
  const whyContent = getPageContent('why-sm-associates') || {};
  const clienteleContent = getPageContent('clientele') || {};
  const complianceContent = getPageContent('compliance') || {};

  // Find active milestone for the serpentine roadmap
  const activeMilestone = historyContent.timelineMilestones?.find(m => m.year === activeYear) || historyContent.timelineMilestones?.[0] || {};

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

              <svg viewBox="0 0 400 360" className="w-full h-full overflow-visible select-none">
                <line x1="200" y1="180" x2="75" y2="45" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="325" y2="45" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="70" y2="180" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="330" y2="180" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="75" y2="315" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                <line x1="200" y1="180" x2="325" y2="315" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />

                <g className="filter drop-shadow-md">
                  <circle cx="200" cy="180" r="32" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                  <path d="M200 166 L203.5 174 L212 174 L205 179 L207.5 188 L200 183 L192.5 188 L195 179 L188 174 L196.5 174 Z" fill="#2563EB" />
                </g>

                <foreignObject x="10" y="10" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Field Strength</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">916+</span>
                    </div>
                  </motion.div>
                </foreignObject>

                <foreignObject x="260" y="10" width="130" height="70">
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

                <foreignObject x="5" y="145" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Branches</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">35</span>
                    </div>
                  </motion.div>
                </foreignObject>

                <foreignObject x="265" y="145" width="130" height="70">
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

                <foreignObject x="10" y="280" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Server className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Secure Yards</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">25+</span>
                    </div>
                  </motion.div>
                </foreignObject>

                <foreignObject x="260" y="280" width="130" height="70">
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#2563EB', boxShadow: '0 8px 16px -6px rgba(37, 99, 235, 0.15)' }}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm transition-all duration-300 flex items-center gap-2 h-full cursor-pointer"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Client Retention</span>
                      <span className="text-sm font-extrabold text-[#2563EB] font-serif block mt-1">98%</span>
                    </div>
                  </motion.div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: OUR JOURNEY (Serpentine Timeline) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Evolution Journey</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Our Journey</h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Follow our chronological milestones as we scaled from a local recovery desk to a premier risk management ecosystem.
            </p>
          </div>

          {/* Desktop serpentine loop */}
          <div className="hidden lg:block overflow-x-auto pb-6">
            <div className="w-[1024px] mx-auto relative h-[520px] bg-white border border-[#E2E8F0] rounded-[36px] p-8 shadow-sm">
              {/* SVG winding serpent path */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1024 500" fill="none">
                  <path
                    d="M 160 80 L 864 80 A 85 85 0 0 1 864 250 L 160 250 A 85 85 0 0 0 160 420 L 864 420"
                    stroke="#E2E8F0"
                    strokeWidth="28"
                    strokeLinecap="round"
                    opacity="0.8"
                  />

                  <defs>
                    <linearGradient id="gradRow1Seg1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                    <linearGradient id="gradRow1Seg2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <linearGradient id="gradRow2Seg1" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#D946EF" />
                    </linearGradient>
                    <linearGradient id="gradRow2Seg2" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#D946EF" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="gradRow3Seg1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="gradRow3Seg2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#84CC16" />
                    </linearGradient>
                  </defs>

                  <path d="M 160 80 L 512 80" stroke="url(#gradRow1Seg1)" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 512 80 L 864 80" stroke="url(#gradRow1Seg2)" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 864 80 A 85 85 0 0 1 864 250" stroke="#D1D5DB" strokeWidth="22" />
                  <path d="M 864 250 L 512 250" stroke="url(#gradRow2Seg1)" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 512 250 L 160 250" stroke="url(#gradRow2Seg2)" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 160 250 A 85 85 0 0 0 160 420" stroke="#D1D5DB" strokeWidth="22" />
                  <path d="M 160 420 L 512 420" stroke="url(#gradRow3Seg1)" strokeWidth="22" strokeLinecap="round" />
                  <path d="M 512 420 L 864 420" stroke="url(#gradRow3Seg2)" strokeWidth="22" strokeLinecap="round" />

                  <path d="M 160 80 L 864 80" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8,8" opacity="0.7" />
                  <path d="M 864 80 A 85 85 0 0 1 864 250" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8,8" opacity="0.7" />
                  <path d="M 864 250 L 160 250" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8,8" opacity="0.7" />
                  <path d="M 160 250 A 85 85 0 0 0 160 420" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8,8" opacity="0.7" />
                  <path d="M 160 420 L 864 420" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8,8" opacity="0.7" />

                  <path d="M 943 158 L 949 166 L 955 158" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 69 328 L 75 336 L 81 328" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Content & interactive nodes overlay */}
              <div className="relative z-10 h-full">
                <div className="absolute left-[160px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <button
                    onClick={() => setActiveYear('2000')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2000'
                        ? 'bg-amber-400 text-white ring-4 ring-amber-400/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-amber-400 hover:scale-105'
                      }`}
                  >
                    2000
                  </button>
                  <div className="absolute top-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mt-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">The Beginning</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Established Chennai HQ, formed first pre-disbursal desk with 12 experts.</p>
                  </div>
                </div>

                <div className="absolute left-[512px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="absolute bottom-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mb-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">Early Foundation</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Onboarded nationalized bank panels, integrated IIBF DRA agent trainings.</p>
                  </div>
                  <button
                    onClick={() => setActiveYear('2005')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2005'
                        ? 'bg-orange-500 text-white ring-4 ring-orange-500/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-orange-500 hover:scale-105'
                      }`}
                  >
                    2005
                  </button>
                </div>

                <div className="absolute left-[864px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <button
                    onClick={() => setActiveYear('2010')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2010'
                        ? 'bg-red-500 text-white ring-4 ring-red-500/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-red-500 hover:scale-105'
                      }`}
                  >
                    2010
                  </button>
                  <div className="absolute top-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mt-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">Expanding Footprint</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Entered Karnataka & Kerala, established 6 regional offices with 250+ crew.</p>
                  </div>
                </div>

                <div className="absolute left-[864px] top-[260px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="absolute bottom-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mb-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">Strategic Scale-Up</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Launched SARFAESI legal notice desk, built 12 secured yards in South India.</p>
                  </div>
                  <button
                    onClick={() => setActiveYear('2015')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2015'
                        ? 'bg-purple-600 text-white ring-4 ring-purple-600/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-purple-600 hover:scale-105'
                      }`}
                  >
                    2015
                  </button>
                </div>

                <div className="absolute left-[512px] top-[260px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <button
                    onClick={() => setActiveYear('2020')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2020'
                        ? 'bg-pink-500 text-white ring-4 ring-pink-500/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-pink-500 hover:scale-105'
                      }`}
                  >
                    2020
                  </button>
                  <div className="absolute top-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mt-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">Pan-South India</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Expanded to AP & Telangana, secured ISO 27001 data compliance certification.</p>
                  </div>
                </div>

                <div className="absolute left-[160px] top-[440px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="absolute bottom-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mb-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">Digital Shift</h4>
                    <p className="text-[10px] text-slate-500 mt-1">GPS field tracking, automated telemetry client SFTP integrations.</p>
                  </div>
                  <button
                    onClick={() => setActiveYear('2025')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2025'
                        ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-emerald-500 hover:scale-105'
                      }`}
                  >
                    2025
                  </button>
                </div>

                <div className="absolute left-[512px] top-[440px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <button
                    onClick={() => setActiveYear('2026')}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-lg duration-300 ${activeYear === '2026'
                        ? 'bg-teal-500 text-white ring-4 ring-teal-500/30 scale-110'
                        : 'bg-white text-slate-700 border-2 border-teal-500 hover:scale-105'
                      }`}
                  >
                    2026
                  </button>
                  <div className="absolute top-10 w-52 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm mt-4 text-left pointer-events-auto">
                    <h4 className="text-xs font-bold text-slate-800">The Road Ahead</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Predictive AI recovery analytics routing, expanding to West & North regions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden relative max-w-md mx-auto space-y-8 text-left border-l-2 border-slate-200 pl-6 ml-4">
            {[
              { yr: '2000', color: 'border-amber-400 text-amber-500', name: 'The Beginning', desc: 'Established Chennai HQ, formed first pre-disbursal desk with 12 experts.' },
              { yr: '2005', color: 'border-orange-500 text-orange-500', name: 'Early Foundation', desc: 'Onboarded nationalized bank panels, integrated IIBF DRA agent trainings.' },
              { yr: '2010', color: 'border-red-500 text-red-500', name: 'Expanding Footprint', desc: 'Entered Karnataka & Kerala, established 6 regional offices with 250+ crew.' },
              { yr: '2015', color: 'border-purple-600 text-purple-500', name: 'Strategic Scale-Up', desc: 'Launched SARFAESI legal notice desk, built 12 secured yards in South India.' },
              { yr: '2020', color: 'border-pink-500 text-pink-500', name: 'Pan-South India', desc: 'Expanded to AP & Telangana, secured ISO 27001 data compliance certification.' },
              { yr: '2025', color: 'border-emerald-500 text-emerald-500', name: 'Digital Shift', desc: 'GPS field tracking, automated telemetry client SFTP integrations.' },
              { yr: '2026', color: 'border-teal-500 text-teal-500', name: 'The Road Ahead', desc: 'Predictive AI recovery analytics routing, expanding to West & North regions.' }
            ].map((node, i) => (
              <div key={i} className="relative space-y-2">
                <div className={`absolute -left-[35px] top-1 bg-white border-2 ${node.color} rounded-full w-4 h-4 flex items-center justify-center z-10`} />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{node.yr}</span>
                  <h4 className="text-xs font-bold text-slate-800">{node.name}</h4>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive details dashboard */}
          <div className="max-w-5xl mx-auto mt-12 bg-white/70 backdrop-blur-md border border-slate-200 rounded-[32px] p-8 shadow-md text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                <div className="md:col-span-4 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-5xl font-black text-[#2563EB] font-mono tracking-tight">{activeMilestone.year}</div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-serif leading-snug">{activeMilestone.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-inter">{activeMilestone.summary}</p>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest font-mono">Milestone Accomplishments</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeMilestone.highlights?.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Key Business Impact</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeMilestone.impact?.map((imp, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-left">
                          <div className="text-base font-bold text-[#2563EB] font-serif leading-none">
                            <AnimatedCounter targetValue={imp.value} />
                          </div>
                          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-1">{imp.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
                    className="w-full h-full object-cover"
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
                meaning: 'VoIP calling restriction gates and IIBF-DRA certification matrices.',
                impact: 'Eliminates legal recourse liabilities and regulatory audit penalties.'
              },
              {
                value: 'Accountability',
                meaning: 'Automated telemetry mapping and GPS validation log entries.',
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

      {/* ── SECTION 7: WHY SM ASSOCIATES ── */}
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
              We resolve complex stressed asset lifecycles through institutional scale and strict operational controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Banking Expertise',
                value: 'Decades of combined board leadership derived directly from senior tiers of SBI, Canara Bank, and HDFC.',
                advantage: 'Aligns recovery operations directly with internal banking policies and security priorities.'
              },
              {
                title: 'Enterprise Operations',
                value: 'A massive ground footprint of 916+ recovery specialists executing over 5,000 daily borrower visits.',
                advantage: 'Allows instant scalability of portfolios without compromising on-ground file velocity.'
              },
              {
                title: 'Governance Framework',
                value: 'ISO/IEC 27001 data compliance framework protecting data custody through PGP-encrypted SFTP feeds.',
                advantage: 'Ensures zero leakage of borrower information and total information security isolation.'
              },
              {
                title: 'Recovery Experience',
                value: 'Over 1 Million accounts resolved across retail, mortgage, auto, agricultural and SME loan classes.',
                advantage: 'Equips field agents with localized negotiation models for every delinquency bucket.'
              },
              {
                title: 'Structured Documentation',
                value: 'Dedicated legal desk coordinating Sec 13(2)/13(4) notices and district magistrate order executions.',
                advantage: 'Shortens foreclosure delay times, preserving physical collateral value.'
              },
              {
                title: 'Regional Presence',
                value: '35 branch offices covering all key credit markets of TN, Karnataka, Kerala, AP and Telangana.',
                advantage: 'Combines local language fluency and local authority liaising under unified SLAs.'
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

      {/* ── INTERACTIVE COMPARISON DASHBOARD ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-20 bg-white border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Performance Auditing</span>
            <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Operations Metrics Comparison</h3>
            <p className="text-xs text-slate-500">
              See how our digital workflows and compliance safeguards compare to traditional agencies.
            </p>
          </div>
          <div className="border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-md bg-[#F8FAFC] transition-shadow duration-300 hover:shadow-lg">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                  <th className="p-5 font-bold text-[#0F172A] w-1/4">Operational Parameter</th>
                  <th className="p-5 font-bold text-[#2563EB] w-3/8">SM Associates Safeguards</th>
                  <th className="p-5 font-bold text-slate-500 w-3/8">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody>
                {whyContent.comparison?.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E2E8F0] hover:bg-white transition-colors">
                    <td className="p-5 font-bold text-[#0F172A] font-serif">{row.metric}</td>
                    <td className="p-5 text-[#2563EB] font-semibold bg-blue-500/5">{row.sm}</td>
                    <td className="p-5 text-slate-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        </div>
      </motion.section>

      {/* ── INTERACTIVE RBI COMPLIANCE MATRIX ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
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
                className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-3 transition-all duration-300 shadow-sm cursor-pointer"
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
                Operating a structured network of 35 physical branches covering Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Puducherry.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Operating States', val: '5 States + UT' },
                  { label: 'Physical Branches', val: '35 Offices' },
                  { label: 'DRA Field Force', val: '916+ Crew' },
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

      {/* ── SECTION 10: INDUSTRIES WE SERVE (Reused style) ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Target Segments</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Industries We Serve</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We deliver tailored NPA resolution and risk management structures configured for each credit class.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {[
              { name: 'Commercial Banking', desc: 'Providing retail credit cards recovery, mortgage foreclosures, and DRA outreach programs.', tag: 'Core segment' },
              { name: 'Non-Banking Financial Companies (NBFCs)', desc: 'Managing auto loans, tractor finance repossession coordination, and SME default recoveries.', tag: 'High-density' },
              { name: 'Housing Finance Companies (HFCs)', desc: 'Executing Section 13 notice servers, symbolic and physical home repossession processes.', tag: 'Collateral-focused' },
              { name: 'Fintech & Digital Lenders', desc: 'Syncing dialer analytics, micro-loan collection dashboards, and secure SFTP file handovers.', tag: 'API integrated' },
              { name: 'Microfinance Institutions (MFIs)', desc: 'Coordinating low-ticket doorstep collection campaigns aligned to fair recovery codes.', tag: 'High outreach' },
              { name: 'Asset Reconstruction Companies (ARCs)', desc: 'Conducting stressed asset valuation support, custody logistics, and liquidation coordination.', tag: 'Aspirational' }
            ].map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[8px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded font-mono uppercase tracking-wider">{ind.tag}</span>
                  <h4 className="font-bold text-sm text-[#0F172A] font-serif">{ind.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 11: CLIENTS & PARTNERSHIPS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Empanelled Partners</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Client Portfolios Managed</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We manage verification, collections, and foreclosure portfolios for India's leading financial institutions.
            </p>
          </div>

          {/* Institutional monochrome logos band */}
          <InstitutionalLogos />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left pt-6 max-w-6xl mx-auto">
            {clienteleContent.segments?.map((seg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-4 shadow-sm transition-all duration-300 cursor-pointer"
              >
                <h4 className="font-bold text-sm text-[#0F172A] font-serif leading-none border-l-2 border-[#2563EB] pl-3">{seg.name}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{seg.desc}</p>
                <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-1.5">
                  {seg.clients?.map((cl, i) => (
                    <span key={i} className="text-[9px] font-bold text-slate-700 bg-white border border-[#E2E8F0] rounded px-2 py-0.5 font-mono">{cl}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── INTERACTIVE CASE STUDIES DECK ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Proven Performance</span>
            <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Portfolio Resolution Case Studies</h3>
            <p className="text-xs text-slate-500">
              Explore how we resolve complex delinquencies for different classes of empanelled partners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-md space-y-6 hover:shadow-lg transition-shadow duration-300">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
              {clienteleContent.caseStudies?.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseStudy(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedCaseStudy === idx
                      ? 'bg-[#2563EB] text-white shadow-md'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {cs.segment}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {clienteleContent.caseStudies?.[selectedCaseStudy] && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCaseStudy}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider font-mono">Project Title</h4>
                    <h3 className="text-lg font-bold text-[#0F172A] font-serif mt-1">{clienteleContent.caseStudies[selectedCaseStudy].title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                    <div>
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">The Challenge</h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{clienteleContent.caseStudies[selectedCaseStudy].challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Our Action</h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{clienteleContent.caseStudies[selectedCaseStudy].action}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider font-mono">The Outcome</h5>
                      <p className="text-xs text-[#2563EB] mt-1 leading-relaxed font-semibold">{clienteleContent.caseStudies[selectedCaseStudy].outcome}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 12: ENTERPRISE OPERATING PHILOSOPHY ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Operating Model</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Enterprise Operating Philosophy</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our business model prioritizes long-term governance and systemic compliance over transactional collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {[
              {
                title: 'Solve Business Problems First',
                desc: 'Every file assigned to us is audited for collateral validity, borrower propensity, and settlement avenues rather than applying generic calling scripts.'
              },
              {
                title: 'Build Systemic Customer Trust',
                desc: 'Outreach agents undergo mandatory Fair Practice Code reviews, stress-management workshops, and background verification checkpoints before dispatch.'
              },
              {
                title: 'Deliver Measurable Outcomes',
                desc: 'Accelerating asset recovery cycle times allows financial institutions to directly claw back provisions onto active balance sheets.'
              }
            ].map((phil, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 space-y-4 shadow-sm transition-all duration-300 cursor-pointer"
              >
                <span className="h-9 w-9 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-bold font-mono text-xs">
                  0{i + 1}
                </span>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif leading-snug">{phil.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-inter">{phil.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── INTERACTIVE ONBOARDING PIPELINE ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVar}
        className="py-20 bg-white border-b border-[#E2E8F0]"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Empanelled Partners</span>
            <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Lender Onboarding Pipeline</h3>
            <p className="text-xs text-slate-500">
              How we coordinate code alignment, SFTP connections, and team dispatch rules in under 14 days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left relative">
            {whyContent.onboardingSteps?.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: '#2563EB', boxShadow: '0 12px 20px -8px rgba(37, 99, 235, 0.08)' }}
                className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-3 relative shadow-sm transition-all duration-300 cursor-pointer"
              >
                <span className="absolute right-4 top-4 text-2xl font-black text-[#2563EB]/15 font-mono">{step.id}</span>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{step.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
