/**
 * CompanyJourneySection
 * ─────────────────────────────────────────────────────────────────────
 * Scroll-linked horizontal storytelling for the company history.
 *
 * Vertical scroll drives horizontal travel: a tall spacer pins a
 * full-viewport stage, and `scrollYProgress` is mapped to a continuous
 * milestone index. Every layer reads that same index at a different
 * multiplier, so the whole composition is scrubbed — animation progress
 * always equals scroll progress. No springs, no timers, no snapping:
 * a spring would decouple motion from the scrollbar, which is exactly
 * the "physically connected" feel this section is meant to have.
 *
 * ONE PAGE-SPECIFIC CONSTRAINT worth knowing before editing: sibling
 * sections in AboutLayouts.jsx animate `y: 30 → 0`. A transformed
 * ancestor becomes the containing block for position:sticky and
 * silently kills the pin, so this must never be wrapped in one of
 * those motion.section blocks.
 *
 * (The page previously also had sitewide CSS scroll-snap gated behind
 * a `company-page-snap-container` class — removed from index.css and
 * AboutLayouts.jsx, since CSS scroll-snap actively fights a
 * scroll-scrubbed pinned region: a snap point on a neighbouring
 * section can pull the scroll position back right at the boundary of
 * this 600vh stage, which reads as the pin being stuck.)
 *
 * Below `lg`, and whenever the visitor prefers reduced motion, the
 * horizontal stage is replaced by a plain vertical list — the same
 * content, no pinning. Scroll-jacked horizontal travel on a phone is
 * hostile, so it isn't shipped there. See `getInitialIsDesktop` below
 * for why that switch reads synchronously instead of defaulting to
 * `false` — the ref useScroll measures against must be attached to the
 * same element from the very first render, and it wasn't, which is
 * why the whole stage used to sit frozen on the first milestone no
 * matter how far the page scrolled.
 */

import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  animate,
} from 'framer-motion';

const BRAND = '#0072bc';

// Layer travel multipliers, expressed as a fraction of one viewport
// width per milestone step. The spread between them IS the parallax —
// the year drifts, the image outruns the text.
const SPEED = {
  year: 0.55,
  headline: 0.85,
  body: 1,
  image: 1.25,
};

// Metrics are only given a numeric counter where the figure is
// supported by the corporate profile (founding year, branch count,
// staff count, years standing, states covered). The intermediate years
// carry qualitative chips instead — inventing branch or headcount
// numbers for 2005/2010/2015 is exactly the kind of unsourced figure
// this site cannot afford.
const MILESTONES = [
  {
    year: '2000',
    headline: 'Foundation of SM Associates',
    story:
      'Started with a vision to build compliant recovery operations for financial institutions.',
    points: [
      'Established headquarters',
      'First banking partnership',
      'Initial recovery operations',
    ],
    metrics: [
      { value: 2000, label: 'Founded' },
      { value: 1, label: 'Chennai Head Office' },
    ],
    image: '/images/india_coverage_map_2000.png',
    alt: 'Operational footprint in 2000 — a single Chennai head office',
  },
  {
    year: '2005',
    headline: 'Regional Expansion',
    story: 'Expanded recovery operations across Tamil Nadu.',
    points: [
      'Multiple branch locations',
      'Larger field workforce',
      'Standardized SOPs',
    ],
    metrics: [
      { text: 'Tamil Nadu', label: 'Coverage' },
      { text: 'Branch Model', label: 'Operating Structure' },
    ],
    image: '/images/india_coverage_map_2005.png',
    alt: 'Operational footprint in 2005 — branches across Tamil Nadu',
  },
  {
    year: '2010',
    headline: 'Technology Adoption',
    story:
      'Introduced digital documentation, centralized reporting, and operational monitoring.',
    points: [
      'Digital documentation',
      'Centralized reporting',
      'Operational monitoring',
    ],
    metrics: [
      { text: 'Centralised', label: 'Reporting' },
      { text: 'Payment Tracker', label: 'Control Mechanism' },
    ],
    image: '/images/sm_service_analytics.png',
    alt: 'Centralised reporting and operational monitoring',
  },
  {
    year: '2015',
    headline: 'Enterprise Recovery Platform',
    story:
      'SARFAESI execution, legal coordination, GPS-enabled field execution and audit reporting brought under one operating model.',
    points: [
      'SARFAESI end-to-end execution',
      'Legal coordination desk',
      'GPS-enabled field execution',
    ],
    metrics: [
      { text: 'Sec 13(2) / 13(4)', label: 'Statutory Enforcement' },
      { text: 'GPS-Enabled', label: 'Field Execution' },
    ],
    image: '/images/sm_service_legal.png',
    alt: 'SARFAESI enforcement and legal coordination',
  },
  {
    year: '2020',
    headline: 'Multi-State Operations',
    story:
      'Expanded beyond Tamil Nadu, with institutional partnerships across South India.',
    points: [
      'Kerala, Karnataka, Telangana and Andhra Pradesh',
      'Institutional partnerships increased',
      'Regional supervision structure',
    ],
    metrics: [
      { value: 6, label: 'States & UT Covered' },
      { text: 'South India', label: 'Operating Region' },
    ],
    image: '/images/south_india_coverage_map.png',
    alt: 'Multi-state operational coverage across South India',
  },
  {
    year: '2025',
    headline: 'Recovery Operating Platform',
    story:
      'A technology-enabled enterprise recovery ecosystem serving banks, NBFCs, HFCs and ARCs.',
    points: [
      'Banks, NBFCs, HFCs and ARCs',
      'Audit-ready reporting discipline',
      'One accountable operating partner',
    ],
    metrics: [
      { value: 19, label: 'Branch Offices' },
      { value: 1500, suffix: '+', label: 'Trained Staff' },
      { value: 25, suffix: '+', label: 'Years Standing' },
    ],
    image: '/images/sm_stats_infographic.png',
    alt: 'The recovery operating platform across South India',
  },
];

/* ── Scroll-triggered count-up ─────────────────────────────────────── */
function Counter({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return undefined;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function MetricBlock({ metric, isActive }) {
  return (
    <div className="min-w-0">
      <div className="text-[26px] font-extrabold leading-none tracking-tight text-slate-900 sm:text-[30px]">
        {metric.value != null ? (
          // Remount on activation so the count-up replays for the
          // milestone the visitor is actually looking at.
          isActive ? (
            <Counter key="on" value={metric.value} suffix={metric.suffix} />
          ) : (
            <span className="tabular-nums">0{metric.suffix ?? ''}</span>
          )
        ) : (
          <span className="text-[19px] sm:text-[21px]">{metric.text}</span>
        )}
      </div>
      <div className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        {metric.label}
      </div>
    </div>
  );
}

/* ── One milestone panel — every layer scrubs off the same index ───── */
function JourneyPanel({ item, index, progressIndex, isActive }) {
  // Distance from centre, in milestone steps. 0 = dead centre.
  const offset = useTransform(progressIndex, (v) => index - v);

  const xYear = useTransform(offset, (v) => `${v * SPEED.year * 100}vw`);
  const xHeadline = useTransform(offset, (v) => `${v * SPEED.headline * 100}vw`);
  const xBody = useTransform(offset, (v) => `${v * SPEED.body * 100}vw`);
  const xImage = useTransform(offset, (v) => `${v * SPEED.image * 100}vw`);

  // Slide is the primary transition; the fade only prevents neighbouring
  // panels from ghosting over the active one.
  const opacity = useTransform(offset, [-0.85, -0.5, 0, 0.5, 0.85], [0, 1, 1, 1, 0]);
  const imageScale = useTransform(offset, [-0.6, 0, 0.6], [0.94, 1, 0.94]);

  return (
    <motion.div
      aria-hidden={!isActive}
      style={{ opacity, pointerEvents: isActive ? 'auto' : 'none' }}
      className="absolute inset-0 flex items-center justify-center pt-32 sm:pt-40 lg:pt-44 will-change-[opacity]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-6 px-6 lg:px-10">
        {/* ── Layer 1 · giant year, the slow anchor ── */}
        <motion.div
          style={{ x: xYear }}
          className="pointer-events-none col-span-5 select-none will-change-transform"
        >
          <span
            className="block font-extrabold leading-[0.82] tracking-[-0.045em]"
            style={{
              fontSize: 'clamp(120px, 15vw, 260px)',
              color: BRAND,
              opacity: 0.13,
            }}
          >
            {item.year}
          </span>
        </motion.div>

        {/* ── Right column · headline / body / metrics / image ── */}
        <div className="col-span-7 flex items-center gap-8">
          <div className="min-w-0 flex-1">
            <motion.h3
              style={{ x: xHeadline }}
              className="text-[30px] font-extrabold leading-[1.1] tracking-tight text-slate-900 will-change-transform xl:text-[38px]"
            >
              {item.headline}
            </motion.h3>

            <motion.div style={{ x: xBody }} className="will-change-transform">
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-slate-600">
                {item.story}
              </p>

              <ul className="mt-6 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] text-slate-700"
                  >
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: BRAND }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-slate-200 pt-6">
                {item.metrics.map((metric) => (
                  <MetricBlock
                    key={metric.label}
                    metric={metric}
                    isActive={isActive}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Layer 5 · image, the fastest layer ── */}
          <motion.div
            style={{ x: xImage, scale: imageScale }}
            className="hidden w-[300px] shrink-0 will-change-transform xl:block"
          >
            <div className="overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.28)]">
              <img
                src={item.image}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="h-[300px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Vertical fallback: small screens + reduced motion ─────────────── */
function VerticalJourney() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-6">
      <div className="relative border-l border-slate-200 pl-8">
        {MILESTONES.map((item) => (
          <div key={item.year} className="relative pb-14 last:pb-0">
            <span
              className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-[3px] border-white shadow-md"
              style={{ background: BRAND }}
            />
            <div
              className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: BRAND }}
            >
              {item.year}
            </div>
            <h3 className="mt-2 text-[22px] font-extrabold leading-tight tracking-tight text-slate-900">
              {item.headline}
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
              {item.story}
            </p>
            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[14px] text-slate-700"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: BRAND }}
                  />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-4">
              {item.metrics.map((metric) => (
                <MetricBlock key={metric.label} metric={metric} isActive />
              ))}
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover sm:h-56"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reads synchronously on mount instead of defaulting to `false` and
// correcting after an effect — with a lazy default, the very first
// render already picks the horizontal branch on desktop, so `rootRef`
// is never mounted onto the vertical-fallback's <div> first. That
// matters because of the bug this fixes: `useScroll`'s target must be
// attached to the SAME element from the first render onward. This
// component used to switch which top-level <div> got `ref={rootRef}`
// depending on `isHorizontal`, and since `isDesktop` started `false`,
// mount always attached the ref to nothing until an effect flipped it
// — but `useScroll` had already subscribed against a null target by
// then. Symptom: the pin held and the rail rendered (both purely
// CSS/layout), but `scrollYProgress` never left 0, so every panel sat
// frozen on the first milestone no matter how far the page scrolled.
function getInitialIsDesktop() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(min-width: 1024px)').matches;
}

export default function CompanyJourneySection() {
  const rootRef = useRef(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(getInitialIsDesktop);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const useHorizontal = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  });

  // The single source of truth every layer reads from.
  const progressIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, MILESTONES.length - 1],
  );
  useMotionValueEvent(progressIndex, 'change', (v) => {
    const next = Math.round(v);
    setActive((prev) => (prev === next ? prev : next));
  });

  const header = (
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
      <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[34px] lg:text-[40px]">
        Our Journey
      </h2>
    </div>
  );

  // `rootRef` lives on this outer <div> unconditionally — it's what
  // useScroll measures against, and it must never move to a different
  // element across renders (see getInitialIsDesktop comment above).
  // Only the height and the children inside it switch on useHorizontal.
  return (
    <div
      ref={rootRef}
      className="relative bg-white"
      style={useHorizontal ? { height: `${MILESTONES.length * 100}vh` } : undefined}
    >
      {useHorizontal ? (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background: flat pure white — no gradient, no glow, no grid. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white" />

          {/* ── Pinned header ── */}
          <div className="absolute inset-x-0 top-0 z-20 pt-24">{header}</div>

          {/* ── Panels ── */}
          <div className="absolute inset-0">
            {MILESTONES.map((item, i) => (
              <JourneyPanel
                key={item.year}
                item={item}
                index={i}
                progressIndex={progressIndex}
                isActive={active === i}
              />
            ))}
          </div>


        </div>
      ) : (
        <div className="bg-white py-16 sm:py-20">
          <div className="mb-12">{header}</div>
          <VerticalJourney />
        </div>
      )}
    </div>
  );
}
