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
} from 'lucide-react';
import { technologyCapabilities } from '../data/servicesLandingData';
import { mountScrollStory, attachPointerTilt, easeOutBack } from '../utils/scrollStoryMath';

// Diagonal-clip visual recipe — a distinct "moment" from the flying-card
// pattern used by ServiceStorySection: the panel's left edge is cut on a
// slant (via clip-path) instead of being a plain rectangle, and it settles
// into place with a slide + skew rather than a slide + 3D rotate.
function diagonalCardStyle(el, { opacity, entrance, exit }) {
  const settle = easeOutBack(1 - entrance);
  const slideIn = (1 - settle) * 60;
  const skew = (1 - settle) * 7;
  const slideOut = exit * -44;
  el.style.opacity = String(opacity);
  el.style.transform = `translateX(${slideIn + slideOut}px) skewX(${skew}deg)`;
}

const TOTAL = technologyCapabilities.length;
const SEGMENT_VH = 90;

const iconMap = { Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck };

// Illustrative photography reused from the site's own verified image pool
// (data/*.js) — chosen for thematic fit, not literal product screenshots.
const IMAGE_BY_TITLE = {
  'Digital Recovery Workflows': 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1600&q=85&auto=format&fit=crop',
  'Portfolio Segmentation': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=85&auto=format&fit=crop',
  'Recovery Analytics': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=85&auto=format&fit=crop',
  'Performance Dashboards': 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=85&auto=format&fit=crop',
  'GPS-Enabled Field Operations': 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=85&auto=format&fit=crop',
  'Centralised Reporting': 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600&q=85&auto=format&fit=crop',
  'Case Tracking': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=85&auto=format&fit=crop',
  'Compliance Monitoring': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85&auto=format&fit=crop',
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
      applyCardStyle: diagonalCardStyle,
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

  return (
    <section className="relative bg-white" aria-label="Technology Driven Recovery Operations">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#0072bc]/[0.08] blur-[110px]" />

      <div className="relative z-10 lg:hidden">
        <StaticStoryList />
      </div>

      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        {/* pt-24 clears the site's fixed header — same convention as
            OperatingModelSection's .model6-head (top:96px). */}
        <div ref={stageRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mb-14 text-center flex flex-col items-center justify-center">
              <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] text-center">
                Technology Driven Recovery Operations
              </h2>
              {/* Premium Level Accent Line */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
                <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="relative h-[280px] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={technologyCapabilities[activeChapterIndex].title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-20 flex flex-col justify-start"
                  >
                    <ChapterCopy cap={technologyCapabilities[activeChapterIndex]} index={activeChapterIndex} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative h-[400px]" style={{ perspective: 1400 }}>
                {technologyCapabilities.map((cap, index) => (
                  <div
                    key={cap.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 overflow-hidden shadow-2xl shadow-slate-900/10"
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      zIndex: index,
                      transformStyle: 'preserve-3d',
                      clipPath: 'polygon(13% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                  >
                    <div
                      ref={(el) => (tiltRefs.current[index] = el)}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={IMAGE_BY_TITLE[cap.title]}
                        alt={cap.title}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.35) 100%)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
