/**
 * TechnologyStorySection
 * ─────────────────────────────────────────────────────────────────────
 * Scroll-driven story version of "Technology Driven Recovery Operations"
 * for the Services page — same pinned sticky-wrapper mechanic as
 * ServiceStorySection (see utils/scrollStoryMath.js for the shared formula),
 * light-themed here to alternate with the dark Enterprise Story above it.
 */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
import {
  Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { technologyCapabilities } from '../data/servicesLandingData';
import { mountScrollStory, attachPointerTilt, easeOutBack } from '../utils/scrollStoryMath';

// Clean slide-in recipe — no skewX (causes subpixel blur) and no diagonal
// clip-path (causes white bleed-through on white bg). Pure translateX + scale
// with GPU acceleration via will-change for smooth rendering.
function smoothSlideCardStyle(el, { opacity, entrance, exit }) {
  const settle = easeOutBack(1 - entrance);
  const slideIn = (1 - settle) * 55;
  const slideOut = exit * -38;
  const scale = 0.92 + settle * 0.08 - exit * 0.04;
  el.style.opacity = String(opacity);
  el.style.transform = `translateX(${slideIn + slideOut}px) scale(${scale.toFixed(3)})`;
  el.style.willChange = 'transform, opacity';
}

const TOTAL = technologyCapabilities.length;
const SEGMENT_VH = 90;

const iconMap = { Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck };

// Content-relevant images — every chapter uses a UNIQUE photo (no cross-section duplicates)
const IMAGE_BY_TITLE = {
  // Digital workflow / case management system
  'Digital Recovery Workflows':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop',
  // Portfolio risk segmentation — analyst with data charts
  'Portfolio Segmentation':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=85&auto=format&fit=crop',
  // Recovery analytics — financial data screens
  'Recovery Analytics':
    'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1600&q=85&auto=format&fit=crop',
  // Live performance dashboard — operations monitors
  'Performance Dashboards':
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=85&auto=format&fit=crop',
  // GPS field operations — location / map tracking
  'GPS-Enabled Field Operations':
    'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=1600&q=85&auto=format&fit=crop',
  // Centralised MIS reporting — structured report documents
  'Centralised Reporting':
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=85&auto=format&fit=crop',
  // Case tracking — per-account history records
  'Case Tracking':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=85&auto=format&fit=crop',
  // Compliance monitoring — security shield / audit monitoring (DIFFERENT from legal scales)
  'Compliance Monitoring':
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=85&auto=format&fit=crop',
};

// Extra contextual details shown on the right panel overlay per chapter
const CHAPTER_DETAILS = {
  'Digital Recovery Workflows': {
    stats: [{ label: 'Stages Tracked', value: '12+' }, { label: 'Zero Missed Handoffs', value: '100%' }],
    features: ['Automated Stage Progression', 'Real-Time Case Logs', 'Escalation Triggers', 'Audit Trail per Account'],
  },
  'Portfolio Segmentation': {
    stats: [{ label: 'Risk Buckets', value: '6' }, { label: 'Coverage', value: 'Pan-India' }],
    features: ['Risk-Based Scoring', 'Geography Mapping', 'Recovery Propensity Index', 'Priority Allocation Engine'],
  },
  'Recovery Analytics': {
    stats: [{ label: 'Metrics Tracked', value: '30+' }, { label: 'Report Frequency', value: 'Daily' }],
    features: ['Account-Level Analytics', 'Bucket-Wise Resolution', 'Recovery Rate Trends', 'Portfolio Performance View'],
  },
  'Performance Dashboards': {
    stats: [{ label: 'Data Latency', value: 'Real-Time' }, { label: 'Stakeholders', value: 'All Levels' }],
    features: ['Field Activity View', 'Allocation Tracker', 'Resolution Monitoring', 'Executive Summary Reports'],
  },
  'GPS-Enabled Field Operations': {
    stats: [{ label: 'Accuracy', value: 'GPS Verified' }, { label: 'Timestamp', value: 'Auto-Logged' }],
    features: ['Geo-Tagged Doorstep Visits', 'Live Field Tracking', 'Time-Stamped Records', 'Self-Reporting Eliminated'],
  },
  'Centralised Reporting': {
    stats: [{ label: 'MIS Formats', value: 'Custom' }, { label: 'Delivery', value: 'Scheduled' }],
    features: ['Institution-Aligned Cadence', 'Automated MIS Packs', 'Cross-Portfolio View', 'Exportable Data Sets'],
  },
  'Case Tracking': {
    stats: [{ label: 'Events Logged', value: 'Every One' }, { label: 'History Depth', value: 'Full Lifecycle' }],
    features: ['Contact History Log', 'Notice Delivery Tracking', 'Visit Records', 'Payment Confirmation Trail'],
  },
  'Compliance Monitoring': {
    stats: [{ label: 'Monitoring', value: 'Continuous' }, { label: 'Sampling', value: 'Zero' }],
    features: ['Conduct Verification', 'Recording Compliance', 'Statutory Adherence', 'Breach-Free Operations'],
  },
};

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function ChapterCopy({ cap, index, wordRefs }) {
  const Icon = iconMap[cap.icon] || Workflow;
  if (wordRefs) wordRefs.current[index] = [];
  const words = cap.desc.split(' ');
  return (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0072bc]/10 text-[#0072bc]">
        <Icon size={19} strokeWidth={2} />
      </span>
      <span className="mt-5 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
        {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </span>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[30px]">
        {cap.title}
      </h3>
      {/* Word-by-word scroll sweep, same mechanic as ServiceStorySection —
          static/mobile fallback has no wordRefs and renders plain text. */}
      <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-slate-600">
        {wordRefs
          ? words.map((word, wi) => (
              <span key={wi} ref={(el) => { wordRefs.current[index][wi] = el; }} style={{ opacity: 0.32 }}>
                {word}
                {wi < words.length - 1 ? ' ' : ''}
              </span>
            ))
          : cap.desc}
      </p>

      {/* Feature checklist — extra content on left side */}
      {CHAPTER_DETAILS[cap.title] && (
        <ul className="mt-5 space-y-2">
          {CHAPTER_DETAILS[cap.title].features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
              <CheckCircle2 size={13} className="shrink-0 text-[#0072bc]" strokeWidth={2.5} />
              {feat}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function StaticStoryList() {
  return (
    <div className="mx-auto max-w-3xl space-y-14 px-4 py-20 sm:px-6">
      {technologyCapabilities.map((cap, index) => (
        <motion.div key={cap.title} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={rise} className="overflow-hidden rounded-[24px]">
            <img src={IMAGE_BY_TITLE[cap.title]} alt={cap.title} className="h-56 w-full object-cover sm:h-64" loading="lazy" />
          </motion.div>
          <motion.div variants={rise} className="mt-6">
            <ChapterCopy cap={cap} index={index} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function TechnologyStorySection() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const wordRefs = useRef([]);
  const tiltRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const progressRef = useRef(null);
  const numeralRef = useRef(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const cleanupScroll = mountScrollStory({
      wrapRef,
      cardRefs,
      textRefs,
      wordRefs,
      total: TOTAL,
      applyCardStyle: smoothSlideCardStyle,
      onProgress: ({ progress, activeIndex }) => {
        if (activeIndexRef.current !== activeIndex) {
          activeIndexRef.current = activeIndex;
          setActiveChapterIndex(activeIndex);
        }
        if (numeralRef.current) numeralRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
        if (progressRef.current) progressRef.current.style.width = `${progress * 100}%`;
      },
    });
    const cleanupTilt = attachPointerTilt({ stageRef, tiltRefs, activeIndexRef });
    return () => {
      cleanupScroll();
      cleanupTilt();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="bg-white" aria-label="Technology Driven Recovery Operations">
        <StaticStoryList />
      </section>
    );
  }

  const activeCap = technologyCapabilities[activeChapterIndex];
  const activeDetails = CHAPTER_DETAILS[activeCap.title];

  return (
    <section className="relative bg-white" aria-label="Technology Driven Recovery Operations">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#0072bc]/[0.08] blur-[110px]" />

      {/* Mobile / tablet: static list, no scroll-jack */}
      <div className="relative z-10 lg:hidden">
        <StaticStoryList />
      </div>

      {/* Desktop: pinned scroll story */}
      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        <div ref={stageRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
          <div className="mx-auto w-full max-w-7xl px-8">

            {/* Section heading */}
            <div className="mb-10 text-center flex flex-col items-center justify-center">
              <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] text-center">
                Technology Driven Recovery Operations
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
                <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 items-center">

              {/* ── LEFT: Text copy + feature checklist ── */}
              <div className="relative h-[340px] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeCap.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-20 flex flex-col justify-start"
                  >
                    <ChapterCopy cap={activeCap} index={activeChapterIndex} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── RIGHT: Content-relevant Image + overlay panel ── */}
              <div className="relative h-[400px]" style={{ perspective: 1400 }}>

                {/* Stacked image cards — dark background wrapper prevents white bleed-through */}
                {technologyCapabilities.map((cap, index) => (
                  <div
                    key={cap.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 overflow-hidden shadow-2xl shadow-slate-900/15"
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      zIndex: index,
                      borderRadius: '24px',
                      background: '#0a1628',
                    }}
                  >
                    <div
                      ref={(el) => (tiltRefs.current[index] = el)}
                      className="absolute inset-0"
                    >
                      <img
                        src={IMAGE_BY_TITLE[cap.title]}
                        alt={cap.title}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        style={{ display: 'block' }}
                      />
                      {/* Gradient overlay for text legibility */}
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(170deg, rgba(0,10,30,0.08) 0%, rgba(0,20,60,0.70) 100%)' }}
                      />
                    </div>
                  </div>
                ))}

                {/* RIGHT OVERLAY: stats + feature pills on top of image — z-50 so it renders above all card layers */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeCap.title + '-overlay'}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-50 flex flex-col justify-between p-5 pointer-events-none"
                    style={{ borderRadius: '24px' }}
                  >
                    {/* TOP: Stats pills (top-right) */}
                    {activeDetails && (
                      <div className="flex justify-end gap-2 flex-wrap">
                        {activeDetails.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex flex-col items-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 shadow-md"
                          >
                            <span className="font-mono text-[20px] font-extrabold text-white leading-none">{stat.value}</span>
                            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/75">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* BOTTOM: chapter label + title + feature tag pills */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                          Capability {String(activeChapterIndex + 1).padStart(2, '0')} · SM Associates
                        </span>
                      </div>
                      <p className="text-[15px] font-bold text-white mb-3 leading-snug">{activeCap.title}</p>

                      {activeDetails && (
                        <div className="flex flex-wrap gap-1.5">
                          {activeDetails.features.map((feat) => (
                            <span
                              key={feat}
                              className="rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 text-[10px] font-semibold text-white"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
