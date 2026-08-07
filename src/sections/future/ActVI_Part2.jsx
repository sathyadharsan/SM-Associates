/**
 * Act VI, Part 2 — The Intelligent Enterprise: Chapters 9–12
 * (Scenes 16, 17, 18a-peak, 18b-closing)
 *
 * FIX: the first build's Scene 16 put `whileInView` (entrance) and
 * `animate` with `repeat: Infinity` (ambient pulse) on the same
 * `<motion.span>`, both targeting `opacity`. Framer Motion's viewport
 * observer and the infinite loop fought over the same motion value
 * across all 9 nodes at once — that's what hung the tab. Fixed by
 * splitting each node into two layers: an outer element that only ever
 * does the one-time whileInView entrance, and an inner decorative dot
 * that only ever does the infinite pulse. Different elements, no
 * shared motion value, no fight.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { ActHeading, PeakStatement, TransitionLine, BRAND, PEAK_BG } from './futureShared';
import RecoveryOperatingModel from './RecoveryOperatingModel';

// ── Scene 16 — The enterprise starts thinking ───────────────────────
const ENTERPRISE_NODES = [
  { label: 'Branches', x: -180, y: -30 },
  { label: 'District Teams', x: -70, y: 60 },
  { label: 'Regional Managers', x: 50, y: -66 },
  { label: 'Call Centres', x: 150, y: 14 },
  { label: 'Legal', x: -230, y: 66 },
  { label: 'Banks', x: 210, y: -30 },
  { label: 'NBFCs', x: 90, y: 78 },
  { label: 'ARCs', x: -40, y: -6 },
  { label: 'Dashboards', x: 240, y: 58 },
];

function EnterpriseNode({ n, i, reduce }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: n.x * 0.4, y: n.y * 0.4, scale: 0.9 }}
      whileInView={{ opacity: 1, x: n.x, y: n.y, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="absolute flex items-center gap-2 rounded-full border border-[#0072bc]/30 bg-white px-4 py-2 font-mono text-[12px] font-bold text-slate-800 shadow-md backdrop-blur-md z-20 will-change-transform"
    >
      <motion.span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 rounded-full bg-[#0072bc]"
        animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
        transition={reduce ? undefined : { duration: 2.6 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
      />
      {n.label}
    </motion.span>
  );
}

function Scene16() {
  const reduce = useReducedMotion();
  return (
    <section className="scroll-mt-28 border-t border-slate-100 bg-white px-6 pt-32 pb-28 sm:pt-40 sm:pb-36">
      <ActHeading
        eyebrow="ENTERPRISE INTELLIGENCE NETWORK"
        title="The enterprise starts thinking"
        support="No connecting arrows — every decision quietly updates another, like a nervous system."
      />
      <div className="relative mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-[0_16px_48px_-12px_rgba(0,114,188,0.1)] overflow-hidden">
        {/* Tech Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#0072bc_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* SVG Rays connecting EXACTLY from Central Core (400,160) to Node Pill Centers (400+x, 160+y) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 800 320">
          {ENTERPRISE_NODES.map((n) => (
            <line
              key={n.label}
              x1="400"
              y1="160"
              x2={400 + n.x}
              y2={160 + n.y}
              stroke={BRAND}
              strokeWidth="1.8"
              strokeDasharray="5 4"
              opacity="0.45"
            />
          ))}
        </svg>

        {/* Central Core Indicator (Solid BG on Z-30 to prevent line overlap) */}
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-2 border-[#0072bc] bg-white px-5 py-2.5 shadow-xl shadow-[#0072bc]/20 relative">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0072bc] animate-ping absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="font-mono text-[10.5px] font-extrabold uppercase tracking-widest text-[#0072bc]">SM NEURAL CORE</span>
        </div>

        {/* Orbiting Enterprise Nodes */}
        <div className="relative h-[280px] w-full sm:h-[240px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {ENTERPRISE_NODES.map((n, i) => (
              <EnterpriseNode key={n.label} n={n} i={i} reduce={reduce} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Scene 17 — Every action creates intelligence ────────────────────
const RIPPLE_TARGETS = ['Dashboard', 'Branch KPI', 'Recovery probability', 'Forecast', 'Manager notification', 'Compliance log'];

function Scene17() {
  return (
    <section className="scroll-mt-28 border-t border-slate-100 bg-white px-6 pt-32 pb-28 sm:pt-40 sm:pb-36">
      <ActHeading eyebrow="AUTOMATED SYNCHRONIZATION" title="One payment. Six quiet updates." />

      <div className="relative mx-auto mt-16 flex max-w-2xl flex-col items-center">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <motion.span
            initial={{ scale: 0.4, opacity: 0.5 }}
            whileInView={{ scale: 3, opacity: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute h-14 w-14 rounded-full"
            style={{ background: BRAND }}
          />
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            className="relative h-3 w-3 rounded-full"
            style={{ background: BRAND }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } } }}
          className="mt-12 grid w-full grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3"
        >
          {RIPPLE_TARGETS.map((label) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0.15 },
                show: { opacity: 1, transition: { duration: 0.5 } },
              }}
              className="text-center"
            >
              <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
              <span className="font-mono text-[12.5px] font-medium text-slate-600">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Scene 18b — The future has already started (closing) ───────────
function ClosingScene() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center sm:min-h-screen"
      style={{ background: `linear-gradient(180deg, ${PEAK_BG} 0%, ${PEAK_BG} 45%, #ffffff 100%)` }}
    >
      <span className="absolute left-6 top-10 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:left-10">
        THE INTELLIGENT ENTERPRISE
      </span>

      <TransitionLine dark className="mb-12 w-full max-w-sm" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-[clamp(26px,4.6vw,52px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white"
      >
        Recovery will no longer be measured by collections.
        <br />
        It will be measured by intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 1, duration: 1.1 }}
        className="mt-20 font-serif text-[20px] font-semibold tracking-tight text-white"
      >
        SM Associates
      </motion.div>
    </section>
  );
}

export default function ActVI_Part2() {
  return (
    <div id="future-act-6b" className="bg-white">
      <Scene16 />
      <Scene17 />
      <RecoveryOperatingModel />
      <PeakStatement
        sceneLabel="SYSTEM TRANSFORMATION"
        lines={["We didn't automate recovery.", 'We transformed how recovery thinks.']}
      />
      <ClosingScene />
    </div>
  );
}
