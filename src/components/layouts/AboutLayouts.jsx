import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { clientLogos } from '../../data/clientLogos';
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
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                <Sparkles className="h-3 w-3" />
                {content.eyebrow}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:shadow-lg shadow-[#2563EB]/20">
                  {content.cta?.buttonText || 'Schedule Consultation'} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#operational-pillars" className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3.5 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-all">
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/5 to-transparent rounded-3xl -m-4 pointer-events-none" />
              <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-3xl p-8 space-y-6 text-left shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Corporate Overview</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  SM Associates is empanelled as a high-capacity vendor managing credit verification and statutory debt resolution mandates for India's leading financial networks.
                </p>
                <div className="border-t border-[#E2E8F0] pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]"><Check className="h-4 w-4" /></div>
                    <span className="text-xs font-semibold text-slate-700">RBI Fair Practices Aligned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]"><Check className="h-4 w-4" /></div>
                    <span className="text-xs font-semibold text-slate-700">ISO 27001 Data Security Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST BAR */}
      <section className="py-12 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Empanelled Partnerships & Network Trust</p>
          <InstitutionalLogos />
        </div>
      </section>

      {/* SECTION 3: KEY METRICS GRID */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Scale Indicators</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Measurable Risk Operations Standing</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our operational footprint provides financial partners with the geographic scale and staffing numbers required to secure large credit portfolios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.stats?.map((stat, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-8 text-center hover:border-slate-300 transition-all hover:shadow-md">
                <div className="text-4xl font-extrabold text-[#2563EB] font-serif">{stat.value}</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mt-2">{stat.label}</div>
                <p className="text-xs text-slate-400 mt-2">Verified empanelled capability across Southern districts.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MD NARRATIVE STORYTELLING */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl p-8 space-y-6 text-left shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <Scale className="h-6 w-6" />
                </div>
                <blockquote className="text-slate-600 text-xs italic leading-relaxed">
                  "Our mission is to establish compliance-first credit collection and asset verification operations that isolate our clients from reputational and regulatory exposure."
                </blockquote>
                <div className="border-t border-[#E2E8F0] pt-4">
                  <div className="font-bold text-xs text-[#0F172A]">Shri. M. Jebaraj</div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase mt-0.5">Managing Director, SM Associates</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Executive Stewardship</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Ensuring Credit System Stability Since 2000</h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                SM Associates grew from a localized verification office into a multi-state risk operations firm by adhering to two core principles: transparency of action and absolute compliance. We recognize that field collections and asset repossession represent critical touchpoints for banking brand reputations.
              </p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our board and compliance departments manage ground coordinators directly out of regional branch offices, enforcing strict ethical rules of outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OPERATIONAL CHALLENGES */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Market Context</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">The Delinquency Management Crisis</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Financial institutions face critical operational headwinds when coordinating large default books across scattered regions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.challenges?.map((challenge, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-4 hover:border-slate-300 transition-all">
                <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><AlertCircle className="h-5 w-5" /></div>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{challenge.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SOLUTIONS FRAMEWORK */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Methodology</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Structured Recovery Operations</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We resolve credit complex challenges through centralized compliance controls and immediate regional deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.solutions?.map((sol, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-4 shadow-sm hover:border-slate-300 transition-all">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]"><FileCheck className="h-5 w-5" /></div>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{sol.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CORE CAPABILITIES */}
      <section id="operational-pillars" className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Service Lines</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Comprehensive Risk Management Scope</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We support the asset lifecycle from credit check verifications to final foreclosure auction coordination.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.capabilities?.map((cap, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-4 hover:border-slate-350 transition-all hover:shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]"><Briefcase className="h-5 w-5" /></div>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{cap.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: OPERATIONS WORKFLOW TIMELINE */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Accountability Loop</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Structured Engagement Process</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our standard integration path ensures clear milestone tracking and strict audit trials for every account.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.workflow?.map((step, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-4 relative shadow-sm hover:border-slate-300 transition-all">
                <div className="text-3xl font-extrabold text-[#2563EB]/25 font-mono">{step.step}</div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: QUANTIFIABLE VALUE BENEFITS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Partner Gains</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">The Value of Institutional Sourcing</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We maximize portfolio recovery yields while protecting compliance standards across lending classes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits?.map((benefit, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-4 hover:border-slate-300 transition-all">
                <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><CheckCircle2 className="h-5 w-5" /></div>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: INDUSTRIES SERVED */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Domain Footprint</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Supporting Every Major Lending Class</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                We calibrate our field outreach, legal notice setups, and verification databases based on the distinct risk profiles of bank portfolios, retail NBFC loan books, and digital FinTech products.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="flex flex-wrap gap-3">
                {content.industries?.map((ind, i) => (
                  <span key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl px-4 py-2.5 text-xs font-bold text-[#0F172A] shadow-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: COMPLIANCE INTEGRITY BLOCK */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Compliance Governance</span>
          <h3 className="text-2xl font-bold text-[#0F172A] font-serif">Corporate Adherence and Audit Shields</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {content.compliance?.map((c, i) => (
              <span key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: STRATEGIC FAQ ACCORDION */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Diligence Answers</span>
            <h2 className="text-2xl font-bold font-serif text-[#0F172A] mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {content.faqs?.map((faq, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FFFFFF] shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center text-xs font-bold text-[#0F172A] text-left hover:text-[#2563EB] transition-colors"
                >
                  <span className="font-serif">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <p className="mt-4 text-xs text-slate-500 border-t border-[#E2E8F0] pt-4 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: CONVERSION BANNER */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-[#2563EB]/15">
              {content.cta?.buttonText || 'Schedule Consultation'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 2. LEADERSHIP TEAM LAYOUT (`/about/leadership`)
// ----------------------------------------------------
export function LeadershipLayout({ content }) {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Map of hierarchy levels for Section 02
  const hierarchyItems = [
    { label: 'Managing Director', value: '1', icon: UserCheck },
    { label: 'Executive Directors', value: '4', icon: Users },
    { label: 'Regional Directors', value: '5', icon: Building2 },
    { label: 'Business Heads', value: '8', icon: Briefcase },
    { label: 'Operations Leaders', value: '25+', icon: Activity }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* SECTION 01 — Executive Leadership Hero */}
      <section className="relative py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                  <Shield className="h-3.5 w-3.5" />
                  {content.eyebrow}
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
                  {content.title}
                </h1>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
                  {content.description}
                </p>
              </div>

              {/* Stats Counters with Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {content.stats?.map((stat, i) => {
                  let StatIcon = Shield;
                  if (i === 0) StatIcon = Shield;
                  else if (i === 1) StatIcon = Building2;
                  else if (i === 2) StatIcon = MapPin;
                  else if (i === 3) StatIcon = CheckCircle2;

                  return (
                    <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-4 text-left shadow-sm relative group hover:border-[#2563EB]/40 transition-all duration-300">
                      <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-3">
                        <StatIcon className="h-4 w-4" />
                      </div>
                      <div className="text-2xl font-bold text-[#2563EB] font-serif">{stat.value}</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1 leading-snug">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Visual Network Tree */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
              <svg viewBox="0 0 400 320" className="w-full h-auto overflow-visible select-none max-w-sm mx-auto">
                {/* Connection lines */}
                <motion.line x1="200" y1="40" x2="60" y2="130" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <motion.line x1="200" y1="40" x2="150" y2="130" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <motion.line x1="200" y1="40" x2="250" y2="130" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                <motion.line x1="200" y1="40" x2="340" y2="130" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />

                <motion.line x1="60" y1="130" x2="30" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="60" y1="130" x2="80" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="150" y1="130" x2="130" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="150" y1="130" x2="170" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="250" y1="130" x2="230" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="250" y1="130" x2="270" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="340" y1="130" x2="320" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                <motion.line x1="340" y1="130" x2="370" y2="240" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />

                {/* Level 1: MD Node */}
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="200" cy="40" r="20" fill="#2563EB" className="shadow-lg" />
                  <circle cx="200" cy="40" r="12" fill="#FFFFFF" opacity="0.95" />
                  <path d="M195 44 C195 40 197 38 200 38 C203 38 205 40 205 44 Z" fill="#2563EB" />
                  <circle cx="200" cy="34" r="3.5" fill="#2563EB" />
                </motion.g>

                {/* Level 2: Executive Director Nodes */}
                <motion.g
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="60" cy="130" r="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                  <path d="M56 133 C56 130 58 128 60 128 C62 128 64 130 64 133 Z" fill="#2563EB" />
                  <circle cx="60" cy="125" r="2.5" fill="#2563EB" />
                </motion.g>

                <motion.g
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="150" cy="130" r="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                  <path d="M146 133 C146 130 148 128 150 128 C152 128 154 130 154 133 Z" fill="#2563EB" />
                  <circle cx="150" cy="125" r="2.5" fill="#2563EB" />
                </motion.g>

                <motion.g
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 4.2, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="250" cy="130" r="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                  <path d="M246 133 C246 130 248 128 250 128 C252 128 254 130 254 133 Z" fill="#2563EB" />
                  <circle cx="250" cy="125" r="2.5" fill="#2563EB" />
                </motion.g>

                <motion.g
                  animate={{ y: [0, -4.8, 0] }}
                  transition={{ duration: 4.6, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="340" cy="130" r="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                  <path d="M336 133 C336 130 338 128 340 128 C342 128 344 130 344 133 Z" fill="#2563EB" />
                  <circle cx="340" cy="125" r="2.5" fill="#2563EB" />
                </motion.g>

                {/* Level 3: RDs/Business Heads Nodes */}
                {[30, 80, 130, 170, 230, 270, 320, 370].map((cx, idx) => (
                  <motion.circle
                    key={idx}
                    cx={cx}
                    cy="240"
                    r="8"
                    fill="#F1F5F9"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — Leadership Hierarchy Tree */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Operational Structure</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Leadership Command Hierarchy</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our structured operational architecture ensures direct governance flows from executive board management to field collections divisions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {hierarchyItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="border border-[#E2E8F0] bg-white rounded-2xl p-6 text-center shadow-sm w-full lg:w-44 flex flex-col items-center justify-between transition-all hover:border-[#2563EB]/40 hover:shadow-md duration-300">
                    <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-3">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <div className="text-slate-500 font-mono text-[9px] font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-3xl font-extrabold text-[#2563EB] font-serif mt-2">{item.value}</div>
                  </div>
                  {idx < 4 && (
                    <div className="flex items-center justify-center text-slate-300 font-bold p-1">
                      <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — Managing Director Spotlight */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: MD Photo Box */}
            <div className="lg:col-span-5 relative text-left">
              <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl p-5 shadow-sm space-y-4">
                <div className="h-80 w-full rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 relative">
                  <img 
                    src={content.mdSpotlight?.photo} 
                    alt={content.mdSpotlight?.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A]">{content.mdSpotlight?.name}</h3>
                  <p className="text-xs text-[#2563EB] font-bold uppercase tracking-wider font-mono mt-0.5">{content.mdSpotlight?.role}</p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0]">
                  <a 
                    href={content.mdSpotlight?.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors w-full justify-center"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-[#2563EB] fill-[#2563EB]" /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Statement & Journey Timeline */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Managing Director Statement</span>
                <blockquote className="text-[#0F172A] text-xl font-medium font-serif leading-relaxed italic border-l-4 border-[#2563EB] pl-6 py-1">
                  "{content.mdSpotlight?.quote}"
                </blockquote>
              </div>

              {/* MD Core Stats */}
              <div className="grid grid-cols-2 gap-4">
                {content.mdSpotlight?.stats?.map((stat, idx) => (
                  <div key={idx} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl px-4 py-3 text-left">
                    <div className="text-lg font-bold text-[#2563EB] font-serif">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Career timeline with bank logos */}
              <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                <h4 className="font-bold text-xs text-[#0F172A] uppercase tracking-wider font-mono">Executive Career Journey</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {content.mdSpotlight?.timeline.map((step, idx) => {
                    let logoSrc = '';
                    if (step.inst.toLowerCase().includes('state bank')) logoSrc = '/logos/sbi.svg';
                    else if (step.inst.toLowerCase().includes('icici')) logoSrc = '/logos/icici.svg';
                    else if (step.inst.toLowerCase().includes('hdfc')) logoSrc = '/logos/hdfc.svg';

                    return (
                      <div key={idx} className="space-y-2">
                        <div className="h-6 flex items-center mb-1">
                          {logoSrc ? (
                            <img src={logoSrc} alt={step.inst} className="h-5 w-auto object-contain" />
                          ) : (
                            <span className="text-[9px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded font-mono">{step.inst}</span>
                          )}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 font-mono">{step.year}</div>
                        <h5 className="font-bold text-xs text-[#0F172A] leading-snug">{step.role}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — Executive Directors Grid */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Board of Directors</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">The Executive Board</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Meet the key executive leaders steering our compliance, operations, strategy, and technology integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content.executiveDirectors?.map((member, i) => (
              <div 
                key={i} 
                className="group border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[8px] mb-1">Former Positions:</span>
                    <span>{member.former}</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedLeader(member)} 
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
                    >
                      View Profile <ChevronRight className="h-3 w-3" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — Banking Legacy Wall */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 font-mono">
            Leadership Experience Across India's Leading Financial Institutions
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
            {content.legacyWall?.map((bank, i) => {
              const logo = clientLogos.find(
                l => l.name.toLowerCase().includes(bank.name.toLowerCase()) || 
                     bank.name.toLowerCase().includes(l.name.toLowerCase())
              );
              return (
                <div key={i} className="flex items-center justify-center h-8">
                  {logo ? (
                    <img src={logo.logo} alt={bank.name} className="h-6 w-auto object-contain" />
                  ) : (
                    <span className="font-bold text-xs tracking-widest text-[#0F172A] font-mono border border-[#E2E8F0] px-4 py-2 rounded-xl bg-slate-50">
                      {bank.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 — Leadership Philosophy */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Governing Philosophy</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Executive Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.philosophy?.map((pillar, i) => {
              let PillarIcon = Shield;
              if (pillar.title.toLowerCase().includes('integrity')) PillarIcon = Shield;
              else if (pillar.title.toLowerCase().includes('results')) PillarIcon = TrendingUp;
              else if (pillar.title.toLowerCase().includes('client')) PillarIcon = Users;
              else if (pillar.title.toLowerCase().includes('people')) PillarIcon = Award;

              return (
                <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-8 text-left space-y-4 hover:border-[#2563EB]/40 hover:shadow-sm transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0F172A] font-serif leading-snug">{pillar.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — Connect with Leadership */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <div>
              <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-[#2563EB]/15 group">
                {content.cta?.buttonText || 'Schedule a Leadership Meeting'} 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — Interactive Profile Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-[#E2E8F0] rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Close Icon Button */}
              <button 
                onClick={() => setSelectedLeader(null)} 
                className="absolute right-6 top-6 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column - Portrait & Statement */}
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

              {/* Right Column - Detailed bio, timeline, etc. */}
              <div className="w-full md:w-3/5 p-8 overflow-y-auto space-y-6 text-left">
                {/* Section: Overview details */}
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

                {/* Section: Key Expertise */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Key Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map((exp, idx) => (
                      <span key={idx} className="border border-[#E2E8F0] bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-sm">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Previous Institutions */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">Previous Institutions</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.prevInstitutions.map((inst, idx) => (
                      <span key={idx} className="border border-[#E2E8F0] bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-[#2563EB] shadow-sm font-mono">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Career Journey */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-4">Career Timeline</h4>
                  <div className="relative border-l border-[#E2E8F0] pl-6 space-y-6">
                    {selectedLeader.careerTimeline.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#2563EB]" />
                        <div className="text-[10px] font-bold text-[#2563EB] font-mono leading-none">{step.year}</div>
                        <div className="font-bold text-xs text-[#0F172A] mt-1 font-serif">{step.role}</div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">{step.inst}</div>
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

// ---------------------// 3. OUR JOURNEY LAYOUT (`/about/history`)
// ---------------------------------// Animated Counter Component
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

export function HistoryLayout({ content }) {
  const [activeYear, setActiveYear] = useState('2010');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  const years = ['2000', '2005', '2010', '2015', '2020', '2025', '2026'];
  const activeMilestone = content.timelineMilestones?.find(m => m.year === activeYear) || content.timelineMilestones?.[0] || {};

  const [activeTag, setActiveTag] = useState('All');
  const categories = ['All', 'Partnerships', 'Expansion', 'Technology', 'Recognition'];
  const filteredMilestones = activeTag === 'All' 
    ? content.milestonesWall 
    : content.milestonesWall?.filter(m => m.category === activeTag);

  // Auto-play state machine looping every 2s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveYear(prev => {
        const idx = years.indexOf(prev);
        return years[(idx + 1) % years.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Scroll spy to update the navigation rail items
  useEffect(() => {
    const handleScroll = () => {
      const railSections = [
        { id: 'journey', label: 'Company Journey' },
        { id: 'expansion', label: 'Geographic Expansion' },
        { id: 'services', label: 'Service Evolution' },
        { id: 'technology', label: 'Technology Evolution' },
        { id: 'leadership', label: 'Leadership Evolution' },
        { id: 'future', label: 'Future Vision' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of railSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll timeline progress drawing setup
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const renderMiniMap = (activeStates = []) => {
    let mapSrc = '/images/india_coverage_map.png';
    if (activeYear === '2000') {
      mapSrc = '/images/india_coverage_map_2000.png';
    } else if (activeYear === '2005') {
      mapSrc = '/images/india_coverage_map_2005.png';
    } else if (activeYear === '2010' || activeYear === '2015') {
      mapSrc = '/images/india_coverage_map_2010.png';
    }

    return (
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2 border border-slate-100 shadow-inner">
        <img 
          src={mapSrc} 
          alt={`SM Associates Coverage Map ${activeYear}`}
          className="h-full w-auto object-contain select-none transition-all duration-300"
        />
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased overflow-x-hidden">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* LEFT SIDE: FIXED NAVIGATION RAIL (Visible on lg viewports) */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 p-4 border-l border-slate-200 text-xs text-slate-400 font-medium">
        {[
          { id: 'journey', label: 'Company Journey' },
          { id: 'expansion', label: 'Geographic Expansion' },
          { id: 'services', label: 'Service Evolution' },
          { id: 'technology', label: 'Technology Evolution' },
          { id: 'leadership', label: 'Leadership Evolution' },
          { id: 'future', label: 'Future Vision' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className={`flex items-center gap-3 transition-colors text-left group hover:text-slate-900 ${
              activeSection === item.id ? 'text-[#2563EB] font-bold' : ''
            }`}
          >
            <span className={`h-2.5 w-2.5 rounded-full border-2 transition-all ${
              activeSection === item.id ? 'bg-[#2563EB] border-[#2563EB] scale-110' : 'bg-white border-slate-300 group-hover:border-slate-500'
            }`} />
            <span className="font-mono">{item.label}</span>
          </button>
        ))}
      </div>

      {/* SECTION 1: JOURNEY HERO */}
      <section id="journey" className="relative py-20 bg-[#FFFFFF] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                  Documentary Narrative
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
                  {content.title}
                </h1>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
                  {content.description}
                </p>
              </div>

              {/* Grid of stats counter cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
                {content.stats?.map((stat, i) => {
                  let StatIcon = Clock;
                  if (i === 0) StatIcon = Clock;
                  else if (i === 1) StatIcon = MapPin;
                  else if (i === 2) StatIcon = Users;
                  else if (i === 3) StatIcon = Building2;
                  else if (i === 4) StatIcon = FileText;

                  return (
                    <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-4 shadow-sm hover:border-[#2563EB]/40 transition-colors duration-300">
                      <div className="h-7 w-7 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-3">
                        <StatIcon className="h-4 w-4" />
                      </div>
                      <div className="text-xl font-bold text-[#2563EB] font-serif">
                        <AnimatedCounter targetValue={stat.value} />
                      </div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 leading-snug">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Mountain path illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
              <svg viewBox="0 0 500 400" className="w-full h-auto overflow-visible select-none max-w-md mx-auto">
                <polygon points="100,380 250,120 400,380" fill="none" stroke="#E2E8F0" strokeWidth="2" />
                <polygon points="200,380 300,200 400,380" fill="none" stroke="#E2E8F0" strokeWidth="1" opacity="0.5" />
                <polygon points="250,120 220,170 280,170" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3" />

                {/* Summit Flag */}
                <line x1="250" y1="120" x2="250" y2="80" stroke="#2563EB" strokeWidth="2" />
                <polygon points="250,80 290,95 250,110" fill="#2563EB" />
                
                {/* Winding climb path line */}
                <path 
                  d="M100,380 Q130,340 180,330 T270,280 T260,210 T250,120" 
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="2.5" 
                  strokeDasharray="6,6"
                />

                {[
                  { x: 100, y: 380, yr: '2000' },
                  { x: 140, y: 345, yr: '2005' },
                  { x: 200, y: 325, yr: '2010' },
                  { x: 265, y: 285, yr: '2015' },
                  { x: 255, y: 215, yr: '2020' },
                  { x: 250, y: 150, yr: '2025' },
                  { x: 250, y: 120, yr: '2026' }
                ].map((pt, idx) => (
                  <motion.g 
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <circle cx={pt.x} cy={pt.y} r="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                    <circle cx={pt.x} cy={pt.y} r="4" fill="#2563EB" />
                    <text x={pt.x + 14} y={pt.y + 4} fill="#475569" className="text-[9px] font-bold font-mono">{pt.yr}</text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EVOLUTION ROADMAP */}
      <section ref={roadmapRef} className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Evolution Journey</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Our Evolution Roadmap</h2>
            <div className="flex justify-center items-center gap-4 pt-2">
              <button 
                onClick={() => {
                  const targetState = !isPlaying;
                  setIsPlaying(targetState);
                  setIsManuallyPaused(!targetState);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#E2E8F0] bg-white rounded-full text-xs font-semibold shadow-sm hover:bg-slate-50 transition-colors"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-ping' : 'bg-rose-500'}`} />
                {isPlaying ? 'Timeline Playing (Autoplay)' : 'Timeline Paused'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Center Column: Curved Road Map */}
            <div 
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => {
                if (!isManuallyPaused) setIsPlaying(true);
              }}
              className="lg:col-span-5 relative h-[980px] flex items-center justify-center"
            >
              <svg viewBox="0 0 200 1000" className="absolute inset-0 w-full h-full overflow-visible select-none">
                {/* Underlay road outline */}
                <path 
                  d="M 100 50 C 30 130 30 170 40 220 C 50 270 150 310 100 360 C 50 410 150 450 160 500 C 170 550 50 590 100 640 C 150 690 50 730 40 780 C 30 830 170 870 100 920"
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="3.5" 
                  opacity="0.1" 
                />
                {/* Continuous dash-offset flow path */}
                <motion.path 
                  d="M 100 50 C 30 130 30 170 40 220 C 50 270 150 310 100 360 C 50 410 150 450 160 500 C 170 550 50 590 100 640 C 150 690 50 730 40 780 C 30 830 170 870 100 920"
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="3.5" 
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                  strokeDasharray="8,8"
                  opacity="0.6"
                />
                {/* Scroll linked drawing path */}
                <motion.path 
                  d="M 100 50 C 30 130 30 170 40 220 C 50 270 150 310 100 360 C 50 410 150 450 160 500 C 170 550 50 590 100 640 C 150 690 50 730 40 780 C 30 830 170 870 100 920"
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="4.5" 
                  style={{ pathLength }}
                />
              </svg>

              {/* Interactive milestones along serpentine road path */}
              <div className="absolute inset-0 pointer-events-auto">
                {[
                  { yr: '2000', y: 44, x: 'calc(50% - 12px)', name: 'The Beginning' },
                  { yr: '2005', y: 215, x: 'calc(50% - 72px)', name: 'Early Foundation' },
                  { yr: '2010', y: 355, x: 'calc(50% - 12px)', name: 'Expanding Footprint' },
                  { yr: '2015', y: 495, x: 'calc(50% + 48px)', name: 'Strategic Scale-Up' },
                  { yr: '2020', y: 635, x: 'calc(50% - 12px)', name: 'Pan-South India' },
                  { yr: '2025', y: 775, x: 'calc(50% - 72px)', name: 'Digital Shift' },
                  { yr: '2026', y: 915, x: 'calc(50% - 12px)', name: 'The Road Ahead' }
                ].map((node, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => {
                      setActiveYear(node.yr);
                    }}
                    onClick={() => {
                      setActiveYear(node.yr);
                    }}
                    style={{ top: `${node.y}px`, left: node.x }}
                    className={`absolute z-10 flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                      activeYear === node.yr
                        ? 'bg-[#2563EB] text-white ring-4 ring-[#2563EB]/25 scale-110 shadow-lg'
                        : 'bg-white text-slate-500 border-2 border-[#E2E8F0] hover:border-[#2563EB] hover:scale-105 shadow-sm'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold px-2 py-0.5">{node.yr}</span>
                    <span className="absolute hidden md:block text-[9px] font-bold text-slate-400 whitespace-nowrap top-8 font-mono">{node.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Sliding glassmorphism details panel */}
            <div 
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => {
                if (!isManuallyPaused) setIsPlaying(true);
              }}
              className="lg:col-span-7 sticky top-32 relative flex gap-6 text-left items-stretch h-fit"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-grow border border-slate-200 bg-white/95 backdrop-blur-lg rounded-[32px] p-8 shadow-xl flex flex-col md:flex-row gap-8 items-stretch"
                >
                  {/* Left inside card: details & Map */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="text-5xl font-black text-[#2563EB] font-mono tracking-tight">{activeMilestone.year}</div>
                      <h3 className="text-2xl font-bold text-[#0F172A] font-serif leading-snug">{activeMilestone.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-inter">{activeMilestone.summary}</p>
                    </div>

                    <div className="border border-[#E2E8F0] rounded-2xl p-4 bg-[#F8FAFC] flex flex-col items-center justify-center relative">
                      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400 font-mono absolute top-2 left-3">Geographic Reach</div>
                      {renderMiniMap(activeMilestone.activeStates)}
                    </div>
                  </div>

                  {/* Right inside card: highlights & impact stats */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest font-mono">Milestone Accomplishments</h4>
                      <ul className="space-y-2.5">
                        {activeMilestone.highlights?.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Key Business Impact</h4>
                      <div className="grid grid-cols-2 gap-3">
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
        </div>
      </section>

      {/* GROWTH VISUALIZATION STRIP */}
      <section id="expansion" className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Progress Strips</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Geographic & Sourcing Expansion</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: India map */}
            <div className="lg:col-span-6 relative flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
              <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Geographic Rollout</div>
              <div className="w-full max-w-sm">
                <img 
                  src="/images/india_coverage_map.png" 
                  alt="SM Associates South India Coverage Map"
                  className="w-full h-auto object-contain rounded-2xl select-none"
                />
              </div>
            </div>

            {/* Right side: Checkmarks grid */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Territorial Footprint</span>
                <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] font-serif">Geographic Expansion</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-inter">
                  Through a calculated multi-state rollout plan, we expanded our operations state-by-state, ensuring robust regional leadership and regulatory compliance in each territory.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                {content.geographicExpansion?.map((exp, idx) => (
                  <div key={idx} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-4 flex items-center justify-between hover:border-[#2563EB]/30 transition-colors duration-300 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#0F172A]">{exp.state}</h4>
                        <p className="text-[9px] text-slate-400 font-mono">Operations Established</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full font-mono">{exp.year}</span>
                      <div className="h-6 w-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shadow-inner"><Check className="h-3.5 w-3.5" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANKING RELATIONSHIPS & SERVICE CAPABILITIES */}
      <section id="services" className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: SVG Line Chart of Banking Relationships */}
            <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Scale Indicators</span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Banking Relationship Growth</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-inter">Traced client empanelments scaling over the years to reach over 100+ banking institutions across India.</p>
              </div>

              <div className="relative h-60 w-full pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  {/* Grid Lines */}
                  <line x1="20" y1="180" x2="480" y2="180" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4" />
                  <line x1="20" y1="130" x2="480" y2="130" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4" />
                  <line x1="20" y1="80" x2="480" y2="80" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4" />
                  <line x1="20" y1="30" x2="480" y2="30" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4" />

                  {/* Growth Path */}
                  <motion.path 
                    d="M 20 180 C 100 170 180 130 250 80 T 480 30"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  />

                  {/* Nodes along path */}
                  {[
                    { x: 20, y: 180, yr: '2000', v: '1' },
                    { x: 135, y: 155, yr: '2005', v: '12' },
                    { x: 250, y: 80, yr: '2010', v: '25+' },
                    { x: 365, y: 55, yr: '2020', v: '75+' },
                    { x: 480, y: 30, yr: '2026', v: '100+' }
                  ].map((pt, idx) => (
                    <g key={idx}>
                      <circle cx={pt.x} cy={pt.y} r="5" fill="#2563EB" />
                      <circle cx={pt.x} cy={pt.y} r="8" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" />
                      <text x={pt.x - 10} y={pt.y - 14} fill="#0F172A" className="text-[9px] font-bold font-mono">{pt.v}</text>
                      <text x={pt.x - 12} y={pt.y + 18} fill="#94A3B8" className="text-[8px] font-bold font-mono">{pt.yr}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Right: Service capability evolution */}
            <div className="text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Service Capabilities</span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Service Evolution</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-inter">Continuous capability scaling from retail verification checkpoints up to automated recovery intelligence operations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.serviceEvolution?.map((srv, idx) => {
                  let SrvIcon = Shield;
                  if (idx === 0) SrvIcon = UserCheck;
                  else if (idx === 1) SrvIcon = Users;
                  else if (idx === 2) SrvIcon = Scale;
                  else if (idx === 3) SrvIcon = Building2;
                  else if (idx === 4) SrvIcon = MapPin;
                  else if (idx === 5) SrvIcon = TrendingUp;

                  return (
                    <div key={idx} className="border border-[#E2E8F0] bg-white rounded-2xl p-4 flex gap-4 hover:border-[#2563EB]/40 hover:shadow-sm transition-all duration-300">
                      <div className="h-9 w-9 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                        <SrvIcon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#0F172A] font-serif leading-snug">{srv.name}</h4>
                        <p className="text-[9px] text-slate-400 font-mono mt-0.5">Launched {srv.year}</p>
                        <p className="text-[10px] text-slate-500 leading-normal mt-1.5">{srv.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EVOLUTION */}
      <section id="technology" className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Infrastructure Epochs</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Technology Evolution</h2>
          </div>

          <div className="relative border border-[#E2E8F0] bg-white rounded-[32px] p-8 max-w-5xl mx-auto shadow-sm">
            {/* Connecting lines */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 800 120" fill="none">
                <line x1="50" y1="60" x2="750" y2="60" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4,4" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-6">
              {content.technologyEvolution?.map((tech, idx) => {
                let TechIcon = FileText;
                if (idx === 0) TechIcon = FileText;
                else if (idx === 1) TechIcon = Database;
                else if (idx === 2) TechIcon = Server;
                else if (idx === 3) TechIcon = Activity;
                else if (idx === 4) TechIcon = PieChart;
                else if (idx === 5) TechIcon = Sparkles;

                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                    <div className="h-12 w-12 rounded-full border-2 border-[#E2E8F0] bg-[#FFFFFF] flex items-center justify-center text-[#2563EB] shadow-sm group-hover:border-[#2563EB] group-hover:scale-105 transition-all duration-300">
                      <TechIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#2563EB] font-mono">{tech.year}</div>
                      <h4 className="font-bold text-xs text-[#0F172A] mt-1">{tech.name}</h4>
                      <p className="text-[9px] text-slate-400 max-w-[120px] mx-auto mt-0.5">{tech.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES WALL */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Achievements Archive</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Milestones Wall</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 border-b border-[#E2E8F0] pb-6 max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTag(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTag === cat
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-slate-500 hover:border-slate-350 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredMilestones?.map((item, idx) => (
              <div 
                key={idx} 
                className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-3 shadow-sm hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 font-mono uppercase">{item.category}</span>
                  <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full font-mono">{item.year}</span>
                </div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section id="future" className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Future Roadmap</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">The Next Chapter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.futureRoadmap?.map((item, idx) => (
              <div 
                key={idx} 
                className="backdrop-blur-md bg-white/60 border border-[#E2E8F0] rounded-2xl p-6 text-left space-y-3 shadow-sm hover:border-[#2563EB]/40 transition-all duration-300"
              >
                <div className="text-lg font-bold text-[#2563EB] font-mono">{item.year}</div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC LEADERSHIP MORPH TRANSITION */}
      <section id="leadership" className="py-24 bg-[#FFFFFF] overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Stewardship Morph</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] font-serif leading-tight">Company Evolution to Leadership</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-inter max-w-xl mx-auto">
              Our continuous history road curves directly into organizational stewardship led by banking, legal compliance, and technological architects.
            </p>
          </div>

          {/* Morphing connectors org tree */}
          <div className="max-w-3xl mx-auto border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-8 shadow-sm relative overflow-hidden">
            {/* Curved continuation roadmap lines morphing to tree */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 800 360" fill="none">
                <path d="M 400 0 L 400 135" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
                <path d="M 400 180 L 400 230" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
                <path d="M 200 230 L 600 230" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
                <path d="M 200 230 L 200 270" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
                <path d="M 400 230 L 400 270" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
                <path d="M 600 230 L 600 270" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" />
              </svg>
            </div>

            <div className="relative z-10 space-y-12">
              {/* Founder Node */}
              <div className="flex justify-center">
                <div className="bg-white border border-[#E2E8F0] rounded-2xl px-6 py-3.5 text-center shadow-sm max-w-xs hover:border-[#2563EB] transition-colors duration-300">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Founding Chair • 2000</div>
                  <h4 className="font-bold text-xs text-[#0F172A] mt-0.5">{content.leadershipEvolution?.founder.name}</h4>
                  <p className="text-[9px] text-[#2563EB] uppercase font-mono">{content.leadershipEvolution?.founder.role}</p>
                </div>
              </div>

              {/* MD Node */}
              <div className="flex justify-center">
                <div className="bg-white border border-[#2563EB] rounded-2xl px-6 py-3.5 text-center shadow-md max-w-xs hover:scale-[1.02] transition-all duration-300">
                  <div className="text-[8px] font-bold text-[#2563EB] uppercase tracking-widest font-mono">MD Appointment • 2016</div>
                  <h4 className="font-bold text-xs text-[#0F172A] mt-0.5">{content.leadershipEvolution?.managingDirector.name}</h4>
                  <p className="text-[9px] text-slate-500 uppercase font-mono">{content.leadershipEvolution?.managingDirector.role}</p>
                </div>
              </div>

              {/* Board Directors Node */}
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 pt-4">
                {content.leadershipEvolution?.directors.map((dir, idx) => (
                  <div key={idx} className="bg-white border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-center shadow-sm w-full md:w-48 hover:border-[#2563EB] transition-colors duration-300">
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Board Join • {dir.year}</div>
                    <h4 className="font-bold text-xs text-[#0F172A] mt-0.5">{dir.name}</h4>
                    <p className="text-[9px] text-[#2563EB] uppercase font-mono">{dir.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cinematic preview card & Navigation CTA */}
          <div className="max-w-4xl mx-auto pt-8">
            <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Stewardship of Decades of Operations</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xl mx-auto">
                Explore the executive stewardship directing our compliance operations, legal advisory boards, and recovery intelligence desks.
              </p>
              <div className="pt-2">
                <Link to="/about/leadership" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-[#2563EB]/15 group">
                  Meet the Leadership Team 
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER WALL */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif leading-snug">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <div className="pt-2">
              <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] shadow-lg shadow-[#2563EB]/15 group">
                {content.cta?.buttonText || 'Partner With SM Associates'} 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="pt-8 border-t border-[#E2E8F0] mt-8 text-center space-y-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 font-mono">Trusted by Leading Financial Institutions</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                {clientLogos.slice(0, 7).map((bank, i) => (
                  <img key={i} src={bank.logo} alt={bank.name} className="h-5 w-auto object-contain" />
                ))}
                <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider">Many More</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 4. WHY SM ASSOCIATES LAYOUT (`/about/why-sm-associates`)
// ----------------------------------------------------
export function WhySMAssociatesLayout({ content }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const mockAuditChecks = [
    { rule: "IIBF DRA certification checks", status: "Pass", details: "All active field coordinators hold IIBF licenses." },
    { rule: "VoIP calling times lockout", status: "Pass", details: "Server restricts outbound calls outside 08:00 AM - 07:00 PM." },
    { rule: "Geofenced client checks", status: "Pass", details: "Ground coordinates logged automatically on check-in." },
    { rule: "180-day call recording logs", status: "Pass", details: "All dialer communications backed up on secure SFTP files." },
    { rule: "Secure yard CCTVs", status: "Pass", details: "Feed archives retained for 90 days with gate-entry logs." }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                <Award className="h-3.5 w-3.5" />
                {content.eyebrow}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:shadow-lg shadow-[#2563EB]/25">
                  {content.cta?.buttonText || 'Schedule Consultation'} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#why-comparisons" className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3.5 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-all">
                  Compare Vendor Features
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 space-y-6 text-left shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Corporate Standings</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We eliminate corporate empanelment risk through audited compliance steps, preventing reputation damage.
              </p>
              <div className="border-t border-[#E2E8F0] pt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Guaranteed SLA Adherence</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Safe Data Handling Portal</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Geotagged Visit Audit Logs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST BAR */}
      <section className="py-12 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">The Standard Chosen by Top Lenders</p>
          <InstitutionalLogos />
        </div>
      </section>

      {/* SECTION 3: CORE PERFORMANCE STATS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Audited Outcomes</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Verifiable Quality & Operations</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {content.stats?.map((stat, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 shadow-sm hover:border-slate-350 transition-all">
                <div className="text-3xl font-extrabold text-[#2563EB] font-serif">{stat.value}</div>
                <div className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider mt-1.5 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE STRATEGIC DIFFERENTIATORS */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Vendor Comparison</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Core Pillars of Recovery Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {content.differentiators?.map((pillar, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 shadow-sm space-y-3">
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{pillar.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DETAILED COMPARATIVE TABLE */}
      <section id="why-comparisons" className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl px-4 text-left">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Comparative Metrics</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">SM Associates vs. Traditional Sourcing</h2>
          </div>
          <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-[#E2E8F0] font-mono text-slate-500">
                  <th className="p-4">OPERATIONS METRIC</th>
                  <th className="p-4 text-[#2563EB]">SM ASSOCIATES</th>
                  <th className="p-4">TRADITIONAL VENDOR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {content.comparison?.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-700">{item.metric}</td>
                    <td className="p-4 font-bold text-[#2563EB]">{item.sm}</td>
                    <td className="p-4 text-slate-500">{item.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: REGULATORY ISOLATION FLOW CHART */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">SLA Isolation</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Compliance Gates Flow Chart</h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              How our system validates case files and tracks outbound outreach to insulate partner banks from reputation risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left relative">
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-[#2563EB] font-mono uppercase">Gate 1: SFTP Intake</div>
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Verify Data Checks</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">System logs database checklist, preventing incomplete records ingestion.</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-[#2563EB] font-mono uppercase">Gate 2: Dial Lock</div>
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Time Constraints Lock</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Outbound channels automatically deactivated outside 08:00 AM - 07:00 PM.</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-[#2563EB] font-mono uppercase">Gate 3: Geofenced Visit</div>
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">GPS Coordinate Match</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Agent check-in match ensures field coordinates match debtor details.</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-[10px] font-bold text-[#2563EB] font-mono uppercase">Gate 4: Quality Check</div>
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Audit QA Reviews</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Compliance desk reviews call logs and witness files before reconciliation upload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GROUND FORCE PROFILE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Ground Operations</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">On-Ground Force Profile</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Typical agencies use sub-contractors with zero vetting. At SM Associates, 100% of our field agents undergo comprehensive background checking and complete mandatory IIBF training prior to assignment.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 text-left">
              <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-2">
                <h4 className="font-bold text-xs text-[#0F172A] font-mono uppercase">01. SCREENING AUDITS</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{content.groundForceProfile?.screening}</p>
              </div>
              <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-2">
                <h4 className="font-bold text-xs text-[#0F172A] font-mono uppercase">02. COMPLIANCE TRAINING</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{content.groundForceProfile?.training}</p>
              </div>
              <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-2">
                <h4 className="font-bold text-xs text-[#0F172A] font-mono uppercase">03. ONGOING PERFORMANCE AUDITING</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{content.groundForceProfile?.auditing}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: ASSET SECURITY YARD DETAILS */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Secure Yards</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Yard Infrastructure & Audit Logs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-sm text-[#0F172A] font-serif">Security Controls</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.yardDetails?.security}</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-sm text-[#0F172A] font-serif">Inventory Auditing</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.yardDetails?.inventory}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: EMPANELMENT ONBOARDING CHECKLIST */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Onboarding Loop</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Empanelment Setup Checklist</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.onboardingSteps?.map((step, i) => (
              <div 
                key={i} 
                className={`border bg-[#FFFFFF] rounded-2xl p-6 text-left space-y-3 cursor-pointer transition-all ${
                  activeStep === i ? 'border-[#2563EB] shadow-md shadow-blue-50' : 'border-[#E2E8F0] hover:border-slate-350'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <div className="text-2xl font-extrabold text-[#2563EB]/25 font-mono">{step.id}</div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: REDACTED AUDIT SCORECARDS GRID */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Empanelled Auditing</span>
            <h2 className="text-2xl font-bold font-serif text-[#0F172A]">Compliance Checks Audit Matrix</h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xl mx-auto">
              Our procedures undergo quarterly external compliance validations. Redacted checks scorecard details are shown below.
            </p>
          </div>

          <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm text-left">
            <div className="divide-y divide-[#E2E8F0]">
              {mockAuditChecks.map((check, idx) => (
                <div key={idx} className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 hover:bg-slate-50/50">
                  <div>
                    <h5 className="font-bold text-xs text-[#0F172A]">{check.rule}</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">{check.details}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    <Check className="h-3 w-3" /> Pass
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHY SM ASSOCIATES FAQ */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Diligence Answers</span>
            <h2 className="text-2xl font-bold font-serif text-[#0F172A] mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {content.faqs?.map((faq, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FFFFFF] shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center text-xs font-bold text-[#0F172A] text-left hover:text-[#2563EB] transition-colors"
                >
                  <span className="font-serif">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <p className="mt-4 text-xs text-slate-500 border-t border-[#E2E8F0] pt-4 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: RFP CONVERSION BANNER */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02]">
              {content.cta?.buttonText || 'Schedule Call'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 5. CLIENT NETWORK LAYOUT (`/about/clientele`)
// ----------------------------------------------------
export function ClienteleLayout({ content }) {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const selectedSegment = content.segments?.[activeSegment] || {};
  const matchingCaseStudy = content.caseStudies?.find(cs => cs.segment.toLowerCase().includes(selectedSegment.name?.split(' ')[0].toLowerCase())) || content.caseStudies?.[0];

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
              <Building2 className="h-3.5 w-3.5" />
              {content.eyebrow}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {content.description}
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a href={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:shadow-lg shadow-[#2563EB]/25">
                {content.cta?.buttonText || 'Inquire Empanelment'} <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#client-segments" className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3.5 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-all">
                View Client Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST BAR */}
      <section className="py-12 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Empanelled Panel Longevity Benchmarks</p>
          <InstitutionalLogos />
        </div>
      </section>

      {/* SECTION 3: KEY PARTNERS / EMPANELMENT STATS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Scale Indicators</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Empanelled Trust in Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {content.stats?.map((stat, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-8 hover:border-slate-350 transition-all shadow-sm">
                <div className="text-4xl font-extrabold text-[#2563EB] font-serif">{stat.value}</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SEGMENTED CLIENT FILTER PANEL */}
      <section id="client-segments" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Sourced Portfolios</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Empanelled Partner Segments</h2>
            <p className="text-slate-500 text-xs">Select a sector to review our empanelled banking partners and tailored workflows.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {content.segments?.map((seg, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSegment(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                  activeSegment === idx
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md'
                    : 'bg-[#FFFFFF] text-slate-600 border-[#E2E8F0] hover:border-slate-350'
                }`}
              >
                {seg.name}
              </button>
            ))}
          </div>

          {/* Display active segment clients */}
          <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl p-8 max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 gap-8 shadow-sm">
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-xl font-bold font-serif text-[#0F172A]">{selectedSegment.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{selectedSegment.desc}</p>
            </div>
            <div className="md:col-span-7 border-l border-[#E2E8F0] pl-0 md:pl-8 space-y-4">
              <h5 className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider font-mono">Approved Bank Panels [PLACEHOLDER]</h5>
              <div className="grid grid-cols-2 gap-4">
                {selectedSegment.clients?.map((client, idx) => (
                  <div key={idx} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl px-4 py-2.5 text-xs font-bold text-[#0F172A]">
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SEGMENTED STORYTELLING (Calibrated Workflows) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Partner Verticals</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Calibrated Workflows for Every Lending Vertical</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Nationalized public commercial banks demand strict document verification and high-compliance notices serving paths. Retail NBFCs rely on doorstep field outreach and local magistrate liaison enforcements. Modern FinTech platforms require real-time database updates and automated SFTP CSV feeds.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                SM Associates operates separate teams for banking, NBFC and FinTech books, ensuring all outreach fits client parameters.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 text-left space-y-4">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Sourcing Integration Checklist</h4>
              <ul className="space-y-3 text-xs text-slate-500">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Secured SFTP connection setup</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Custom SLA workflow parameters</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Geotagged coordinate visit logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DYNAMIC CASE STUDIES */}
      {matchingCaseStudy && (
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="mx-auto max-w-4xl px-4 text-left">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Success Stories</span>
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Anonymized Case Study: {matchingCaseStudy.segment}</h3>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-bold text-[#2563EB] font-mono uppercase">
                  {matchingCaseStudy.title}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E2E8F0] text-xs text-slate-600">
                <div className="space-y-2">
                  <h5 className="font-bold text-[#0F172A] uppercase">Challenge</h5>
                  <p className="leading-relaxed">{matchingCaseStudy.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-[#0F172A] uppercase">Action</h5>
                  <p className="leading-relaxed">{matchingCaseStudy.action}</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-[#0F172A] uppercase">Outcome</h5>
                  <p className="leading-relaxed font-semibold text-[#2563EB]">{matchingCaseStudy.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: KEY ACCOUNT MANAGEMENT SLA */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Operational Sync</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Key Account Management & SLA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Dedicated SLA Managers</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.slaStructure?.management}</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Report Frequency</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.slaStructure?.reporting}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SECURE DATA SHARING SETUP */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Information Exchange</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Secure Data Ingestion Pipelines</h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              We connect with client core recovery databases through secure PGP-encrypted SFTP sync paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">01. Key Generation</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Exchange of PGP keys between bank IT desks and our secure server hosts.</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">02. Automated Sync</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Daily database uploads and automated ingestion checks on case records.</p>
            </div>
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">03. Telemetry Update</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">Daily progress records and geofenced visit reports transmitted to the bank.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: EMPANELMENT ONBOARDING FLOW TIMELINE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Onboarding Loop</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Empanelment Setup Flow Chart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {content.workflow?.map((step, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 text-left space-y-3 relative shadow-sm">
                <div className="text-xs font-bold text-[#2563EB] font-mono">Stage {step.step}</div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: DISCLOSED COMPLIANCE CLAIMS / DILIGENCE CHECKLIST */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Empanelled Audits</span>
          <h3 className="text-2xl font-bold text-[#0F172A] font-serif">Data Custody & Compliance Declarations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {content.compliance?.map((c, i) => (
              <span key={i} className="border border-[#E2E8F0] bg-[#FFFFFF] px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: CLIENT DILIGENCE FAQ ACCORDION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Client FAQ</span>
            <h2 className="text-2xl font-bold font-serif text-[#0F172A] mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {content.faqs?.map((faq, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FFFFFF] shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center text-xs font-bold text-[#0F172A] text-left hover:text-[#2563EB] transition-colors"
                >
                  <span className="font-serif">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <p className="mt-4 text-xs text-slate-500 border-t border-[#E2E8F0] pt-4 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: EMPANELMENT PROPOSAL CTA */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all">
              {content.cta?.buttonText || 'Connect Now'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 6. COMPLIANCE & GOVERNANCE LAYOUT (`/about/compliance`)
// ----------------------------------------------------
export function ComplianceLayout({ content }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const mockAgentRules = [
    { title: "No Coercive Actions", desc: "Outreach teams are prohibited from threat tactics or call frequency violations." },
    { title: "Privacy Adherence", desc: "Debtor accounts may not be discussed with family, employers, or neighbors." },
    { title: "Outbound Dial boundaries", desc: "Calling dialers lockout from placing contacts outside 08:00 AM – 07:00 PM." },
    { title: "True Identity scripts", desc: "Agents must represent themselves and bank panel names accurately on calls." }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0F172A] font-inter antialiased">
      {/* Spacer for navigation */}
      <div className="h-24 bg-[#FFFFFF]" />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                <Shield className="h-3.5 w-3.5" />
                {content.eyebrow}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl font-serif leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:shadow-lg shadow-[#2563EB]/25">
                  {content.cta?.buttonText || 'Request Compliance Pack'} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#compliance-matrix" className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-3.5 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-all">
                  Explore Safeguards
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 space-y-6 text-left shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Regulatory Safeguards</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our outreach campaigns and field agent visits adhere fully to consumer protection regulations, protecting lender panels.
              </p>
              <div className="border-t border-[#E2E8F0] pt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> 100% DRA certified field agents</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Outbound call times lock</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Audited GPS check-in trails</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST BAR */}
      <section className="py-12 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Audited Compliance Infrastructure</p>
          <InstitutionalLogos />
        </div>
      </section>

      {/* SECTION 3: CORE COMPLIANCE STATS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Verification Audits</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Measurable Compliance Audits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {content.stats?.map((stat, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-8 hover:border-slate-350 transition-all shadow-sm">
                <div className="text-4xl font-extrabold text-[#2563EB] font-serif">{stat.value}</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPLIANCE PLEDGE (CCO STATEMENT) */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative text-left">
              <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-3xl p-8 shadow-sm space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <Scale className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] font-serif">{content.compliancePledge?.officer}</h4>
                <p className="text-[10px] text-[#2563EB] font-bold uppercase tracking-wider font-mono">Compliance Mandate</p>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-[#E2E8F0] pt-4">{content.compliancePledge?.mandate}</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Executive Stewardship</span>
              <blockquote className="text-[#0F172A] text-xl font-medium font-serif leading-relaxed italic border-l-4 border-[#2563EB] pl-6">
                "{content.compliancePledge?.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RBI FAIR PRACTICE CODE MATRIX */}
      <section id="compliance-matrix" className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Regulatory Guidelines</span>
            <h3 className="text-2xl font-bold font-serif text-[#0F172A]">The RBI Fair Practice Code Alignment Matrix</h3>
          </div>

          <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] font-mono text-slate-500">
                  <th className="p-4">GUIDELINE</th>
                  <th className="p-4">RBI REGULATORY REQUIREMENT</th>
                  <th className="p-4 text-[#2563EB]">SM ASSOCIATES ENFORCEMENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {content.rbiMatrix?.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-700">{row.guideline}</td>
                    <td className="p-4 text-slate-500">{row.code}</td>
                    <td className="p-4 font-bold text-[#2563EB]">{row.smAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: QUALITY VOICE LOGGER LOGGING DETAILS */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Quality Audits</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Voice Logging & quality checkpoints</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-mono">Audits Coverage</span>
              <div className="text-xs text-slate-600 font-bold leading-relaxed">{content.voiceLogsRules?.checkPercentage}</div>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-mono">Call Archives Retention</span>
              <div className="text-xs text-slate-600 font-bold leading-relaxed">{content.voiceLogsRules?.retention}</div>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 space-y-2 shadow-sm">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-mono">Compliance Trigger Codes</span>
              <div className="text-xs text-slate-600 font-bold leading-relaxed">{content.voiceLogsRules?.triggers}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GRIEVANCE REDRESSAL TAT SEQUENCE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Resolution TAT</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Daily Compliance Check-in Sequence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.grievanceTAT?.map((step, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-2xl p-6 text-left space-y-3 relative shadow-sm">
                <div className="text-xs font-bold text-[#2563EB] font-mono">Stage {step.step}</div>
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DATA SECURITY & PRIVACY CHECKLIST */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Data Security</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Secure Data Custody</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-sm text-[#0F172A] font-serif">Access Controls Console</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.dataSecurity?.access}</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl p-8 space-y-4 shadow-sm">
              <h4 className="font-bold text-sm text-[#0F172A] font-serif">Storage Framework Encryption</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.dataSecurity?.storage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FIELD SUPERVISION FLOW */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Compliance Checks</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Geotagged Visit Audit Logs</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Each physical field outreach visit requires real-time mobile app login matching coordinate geolocations, check-in timestamps, and geotagged photographic confirmation of site assets. Compliance panels review all visit audit checklists daily.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 text-left space-y-4 shadow-sm">
              <h4 className="font-bold text-xs text-[#0F172A] font-serif">Field Audit Items</h4>
              <ul className="space-y-3 text-xs text-slate-500">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Geofenced checkins match debtor address</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Timestamp verifies calling limits</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2563EB] shrink-0" /> Video logs verify possession actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: ZERO-TOLERANCE AGENT CODE OF CONDUCT */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Ethical Conduct</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] font-serif">Zero-Tolerance Policies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
            {mockAgentRules.map((rule, idx) => (
              <div key={idx} className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-2xl p-6 shadow-sm space-y-3">
                <h4 className="font-bold text-xs text-[#0F172A] font-serif">{rule.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: REGULATORY COMPLIANCE FAQ */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] font-mono">Compliance FAQ</span>
            <h2 className="text-2xl font-bold font-serif text-[#0F172A] mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {content.faqs?.map((faq, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FFFFFF] shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center text-xs font-bold text-[#0F172A] text-left hover:text-[#2563EB] transition-colors"
                >
                  <span className="font-serif">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <p className="mt-4 text-xs text-slate-500 border-t border-[#E2E8F0] pt-4 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: HANDBOOK REQUEST CTA */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-[32px] p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] font-serif">{content.cta?.heading}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs leading-relaxed">{content.cta?.subheading}</p>
            <Link to={content.cta?.href || '/contact'} className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-all hover:scale-[1.02]">
              {content.cta?.buttonText || 'Connect Now'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
