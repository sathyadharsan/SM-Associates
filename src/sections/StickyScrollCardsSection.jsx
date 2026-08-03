import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Bot,
  PhoneCall,
  CalendarClock,
  Sparkle,
  TrendingUp,
  UserCheck,
  ShieldAlert,
  LayoutDashboard,
  Handshake,
  ArrowUpRight,
} from 'lucide-react';

const cardPairs = [
  {
    pairId: 'pair-01',
    left: {
      id: '01',
      eyebrow: '01 · PORTFOLIO INTELLIGENCE',
      title: 'AI Assisted Portfolio Prioritisation',
      description: 'Rank accounts by predicted recoverability before effort is spent.',
      icon: ShieldCheck,
      badge: 'PILOT',
      category: 'Strategic Initiative',
    },
    right: {
      id: '02',
      eyebrow: '02 · CONVERSATIONAL AI',
      title: 'AI Agent Based Customer Conversations',
      description: 'Conversational agents handling routine borrower contact at scale.',
      icon: Bot,
      badge: 'PROTOTYPE',
      category: 'Automated Outreach',
    },
  },
  {
    pairId: 'pair-02',
    left: {
      id: '03',
      eyebrow: '03 · SMART OUTREACH',
      title: 'Intelligent Auto Dialing',
      description: 'Contact attempts timed to when a borrower is most likely to answer.',
      icon: PhoneCall,
      badge: 'PILOT',
      category: 'Optimized Contact',
    },
    right: {
      id: '04',
      eyebrow: '04 · TIMING ENGINE',
      title: 'AI-Powered Follow-Up Scheduling',
      description: 'Next-contact timing set by outcome patterns rather than fixed intervals.',
      icon: CalendarClock,
      badge: 'RESEARCH',
      category: 'Pattern Intelligence',
    },
  },
  {
    pairId: 'pair-03',
    left: {
      id: '05',
      eyebrow: '05 · OFFICER GUIDANCE',
      title: 'Smart Recovery Recommendations',
      description: 'Next-best-action guidance surfaced to officers on each case.',
      icon: Sparkle,
      badge: 'ARCHITECTURE',
      category: 'Action Guidance',
    },
    right: {
      id: '06',
      eyebrow: '06 · PORTFOLIO FORECASTING',
      title: 'Predictive Recovery Analytics',
      description: 'Forward-looking roll-rate and resolution forecasting per portfolio.',
      icon: TrendingUp,
      badge: 'RESEARCH',
      category: 'Roll-Rate Models',
    },
  },
  {
    pairId: 'pair-04',
    left: {
      id: '07',
      eyebrow: '07 · SMART ROUTING',
      title: 'Intelligent Case Assignment',
      description: 'Accounts routed to the officer and channel with the strongest fit.',
      icon: UserCheck,
      badge: 'ARCHITECTURE',
      category: 'Channel Optimization',
    },
    right: {
      id: '08',
      eyebrow: '08 · GOVERNANCE & AUDIT',
      title: 'Automated Compliance Monitoring',
      description: 'Conduct exceptions flagged automatically across every recorded interaction.',
      icon: ShieldAlert,
      badge: 'PROTOTYPE',
      category: 'Policy Enforcement',
    },
  },
  {
    pairId: 'pair-05',
    left: {
      id: '09',
      eyebrow: '09 · BOARD INTELLIGENCE',
      title: 'Executive Recovery Dashboards',
      description: 'Board-level portfolio health, presented for review rather than operations.',
      icon: LayoutDashboard,
      badge: 'PLANNED',
      category: 'C-Suite Analytics',
    },
    right: {
      id: '10',
      eyebrow: '10 · SETTLEMENT ENGINE',
      title: 'Autonomous Settlement Negotiation',
      description: 'Structured settlement offers and payment plans negotiated automatically under policy limits.',
      icon: Handshake,
      badge: 'FUTURE RELEASE',
      category: 'Resolution Engine',
    },
  },
];

// Flattened for the static/mobile list — same 10 initiatives, original order.
const allInitiatives = cardPairs.flatMap((pair) => [pair.left, pair.right]);

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Shared card visual — used by both the desktop pinned pairs and the static
// mobile/tablet list, so the two never drift apart.
function RoadmapCard({ item }) {
  const IconComponent = item.icon;
  return (
    <div className="flex flex-col justify-between rounded-[32px] border-2 border-slate-200 bg-white p-7 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,114,188,0.18),0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#0072BC]/15 h-[350px] sm:h-[380px] transition-all duration-300 hover:border-[#0072BC]/40 hover:shadow-2xl">
      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0072BC] text-white shadow-md shadow-[#0072BC]/25">
            <IconComponent size={22} strokeWidth={2.2} />
          </span>

          <span className="rounded-full bg-[#0072BC] px-3 py-1 font-mono text-[9.5px] font-extrabold uppercase tracking-wider text-white shadow-sm shadow-[#0072BC]/20">
            {item.badge}
          </span>
        </div>

        <span className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0072BC]">
          {item.eyebrow}
        </span>

        <h3 className="mt-2 text-xl sm:text-[22px] font-extrabold tracking-tight text-slate-900 leading-snug">
          {item.title}
        </h3>

        <p className="mt-3 text-sm sm:text-[15px] font-medium leading-relaxed text-slate-700">
          {item.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between gap-2 border-t-2 border-slate-100 pt-4">
        <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
          {item.category}
        </span>

        <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0072BC] transition-transform duration-200 hover:translate-x-1">
          <span>Learn More</span>
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

function SingleScrollPair({ pair, index, totalPairs, scrollYProgress }) {
  const step = 1 / (totalPairs - 1); // 0.25 for 5 pairs

  const activeAt = index * step;
  const startIn = Math.max(0, (index - 1) * step);
  const endOut = Math.min(1, (index + 1) * step);

  let inputRanges;
  let yOutputs;
  let opacityOutputs;
  let scaleOutputs;

  if (index === 0) {
    // Pair 0: Active at center (y=0) at start, stays centered until Pair 1 covers it at step (0.25)
    inputRanges = [0, step, Math.min(1, step + 0.02)];
    yOutputs = [0, 0, 0];
    opacityOutputs = [1, 1, 0];
    scaleOutputs = [1, 1, 1];
  } else if (index === totalPairs - 1) {
    // Pair 4 (last pair): Slides up from 350px below screen to 0 during [startIn, 1.0], stays active
    inputRanges = [startIn, 1.0];
    yOutputs = [350, 0];
    opacityOutputs = [0, 1];
    scaleOutputs = [1.02, 1];
  } else {
    // Middle pairs (1, 2, 3): Slides up from 350px to 0 during [startIn, activeAt], stays centered at y=0 until next pair covers it at endOut, then opacity drops to 0
    const fadeOutPoint = Math.min(1, endOut + 0.02);
    inputRanges = [startIn, activeAt, endOut, fadeOutPoint];
    yOutputs = [350, 0, 0, 0];
    opacityOutputs = [0, 1, 1, 0];
    scaleOutputs = [1.02, 1, 1, 1];
  }

  const y = useTransform(scrollYProgress, inputRanges, yOutputs);
  const opacity = useTransform(scrollYProgress, inputRanges, opacityOutputs);
  const scale = useTransform(scrollYProgress, inputRanges, scaleOutputs);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        zIndex: 10 + index,
      }}
      className="absolute inset-0 flex h-full w-full items-center justify-center pointer-events-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-6xl">
        <RoadmapCard item={pair.left} />
        <RoadmapCard item={pair.right} />
      </div>
    </motion.div>
  );
}

function RoadmapIntro() {
  return (
    <div className="text-center">
      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072BC]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0072BC]" />
        Strategic Initiatives
      </span>

      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        Next-Gen Recovery Architecture
      </h2>

      {/* Premium Level Accent Line */}
      <div className="mt-4 mb-3 flex items-center justify-center gap-2">
        <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
        <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
      </div>

      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">
        Explore our 10 strategic AI-driven recovery initiatives currently under development.
      </p>
    </div>
  );
}

// ── Static fallback (mobile + tablet, <1024px): plain stacked list ─────
// Scroll-jacked pinned stages only make sense on desktop, same rule already
// applied to every other story section on this page — a two-column,
// side-by-side card pair has nowhere to go on a phone or portrait tablet.
function StaticRoadmapList() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-20 pt-10 sm:px-6">
      <RoadmapIntro />
      <div className="mt-12 space-y-6">
        {allInitiatives.map((item) => (
          <motion.div
            key={item.id}
            variants={rise}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <RoadmapCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function StickyScrollCardsSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="relative w-full border-b border-slate-200/90 bg-white text-slate-900 selection:bg-[#0072BC]/20 selection:text-slate-900">
      {/* Mobile / tablet: static stacked list, no scroll-jack */}
      <div className="lg:hidden">
        <StaticRoadmapList />
      </div>

      {/* Desktop: pinned, scroll-scrubbed side-by-side pairs */}
      <div
        ref={containerRef}
        className="relative hidden w-full lg:block"
        style={{ height: `${cardPairs.length * 85}vh` }}
      >
        {/* Subtle ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/4 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#0072BC]/5 blur-[140px]"
        />

        {/* Sticky Viewport Container (100vh) — pt-24 clears the site's fixed
            header (same convention as every other pinned section on this
            page); only the top inset changes so the bottom stays balanced. */}
        <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
            {/* Header section */}
            <RoadmapIntro />

            {/* Side-by-Side Cards Stack Container */}
            <div className="relative my-auto flex h-[380px] w-full items-center justify-center md:h-[400px]">
              <div className="relative h-full w-full max-w-6xl">
                {cardPairs.map((pair, index) => (
                  <SingleScrollPair
                    key={pair.pairId}
                    pair={pair}
                    index={index}
                    totalPairs={cardPairs.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="mx-auto flex items-center gap-3 py-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Scroll down to navigate all 10 roadmap initiatives
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072BC] animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
