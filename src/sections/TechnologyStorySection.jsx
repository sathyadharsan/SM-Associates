/**
 * TechnologyStorySection
 * ─────────────────────────────────────────────────────────────────────
 * Scroll-driven story version of "Technology Driven Recovery Operations"
 * for the Services page — same pinned sticky-wrapper mechanic as
 * ServiceStorySection (see utils/scrollStoryMath.js for the shared formula),
 * light-themed here to alternate with the dark Enterprise Story above it.
 */

import { useEffect, useRef } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import {
  Workflow, PieChart, BarChart3, LayoutDashboard, MapPin, FileText, Search, ShieldCheck,
} from 'lucide-react';
import { technologyCapabilities } from '../data/servicesLandingData';
import { mountScrollStory } from '../utils/scrollStoryMath';

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

function ChapterCopy({ cap, index }) {
  const Icon = iconMap[cap.icon] || Workflow;
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
      <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-slate-600">{cap.desc}</p>
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
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const progressRef = useRef(null);
  const numeralRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    return mountScrollStory({
      wrapRef,
      cardRefs,
      textRefs,
      total: TOTAL,
      onProgress: ({ progress, activeIndex }) => {
        if (numeralRef.current) numeralRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
        if (progressRef.current) progressRef.current.style.width = `${progress * 100}%`;
      },
    });
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="border-b border-slate-200/90 bg-white" aria-label="Technology Driven Recovery Operations">
        <StaticStoryList />
      </section>
    );
  }

  return (
    <section className="relative border-b border-slate-200/90 bg-white" aria-label="Technology Driven Recovery Operations">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#0072bc]/[0.08] blur-[110px]" />

      <div className="relative z-10 lg:hidden">
        <StaticStoryList />
      </div>

      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                  Technology Driven Recovery Operations
                </span>
                <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
                  Recovery runs on a platform, not a call list.
                </h2>
              </div>
              <div className="hidden shrink-0 text-right font-mono sm:block">
                <span ref={numeralRef} className="text-3xl font-black text-slate-900">01</span>
                <span className="text-lg font-bold text-slate-400"> / {String(TOTAL).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="mb-14 h-[2px] w-full bg-slate-200">
              <div ref={progressRef} className="h-full bg-[#0072bc]" style={{ width: '0%' }} />
            </div>

            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="relative h-[280px]">
                {technologyCapabilities.map((cap, index) => (
                  <div
                    key={cap.title}
                    ref={(el) => (textRefs.current[index] = el)}
                    className="absolute inset-0"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <ChapterCopy cap={cap} index={index} />
                  </div>
                ))}
              </div>

              <div className="relative h-[400px]">
                {technologyCapabilities.map((cap, index) => (
                  <div
                    key={cap.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl shadow-slate-900/10"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <img
                      src={IMAGE_BY_TITLE[cap.title]}
                      alt={cap.title}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.35) 100%)' }} />
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
