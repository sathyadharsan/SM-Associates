/**
 * RecoveryOperatingModel — "The Recovery Operating Model" (Act VI addition)
 *
 * Client reference: credgenics.com, collekt.ai, dpdzero.com — real
 * AI-native debt-collection SaaS platforms, each with a dense
 * architecture diagram (sources → process pillars → outcomes). Client
 * wants the same visual density and "here's the real machinery" payoff
 * for SM Associates' own future operating model.
 *
 * ONE DELIBERATE DIFFERENCE FROM THE REFERENCE SITES, on purpose:
 * Credgenics/Collekt/DPDZero are software vendors selling a platform
 * TO lenders — pricing tiers, "Book a demo," usage-stat banners
 * ($250Bn+ processed). SM Associates is a recovery SERVICES company;
 * banks engage SM to do the recovery, they don't buy software from
 * SM. So this diagram is framed as "how our own operation runs," not
 * as a product being sold — no pricing, no demo CTA, no invented
 * usage stats. Same structural ambition, honest framing.
 *
 * Every pillar's base description is real, grounded in the actual
 * Corporate Profile (Call Centre/Auto dialer, GPS field visits, CPV,
 * SARFAESI/DRT, auction & settlement). AI capability on top of each
 * pillar is explicitly tagged "In development" — no specific timeline
 * (client chose general roadmap language over a stated month count) —
 * matching the hedge language already established on
 * /platform/ai-recovery ("Pilot") rather than presenting any of it as
 * live today.
 */

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ActHeading, BRAND } from './futureShared';

// Same cursor-spotlight technique already proven in EnterpriseServicesSection —
// adapted from a white-glow-on-dark-card version to a faint brand-blue glow,
// since these pillar cards sit on white, not dark, backgrounds.
function useMouseSpotlight(ref) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [ref]);
  return pos;
}

function PillarCard({ p }) {
  const ref = useRef(null);
  const spotlight = useMouseSpotlight(ref);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 hover:border-[#0072bc]/40 hover:shadow-md sm:p-5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at ${spotlight.x}% ${spotlight.y}%, ${BRAND}0d 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[15px] font-bold text-slate-900">{p.title}</h3>
        {p.ai && <AiTag>{p.ai}</AiTag>}
      </div>
      <p className="relative mt-2 text-[13px] leading-relaxed text-slate-600">{p.base}</p>
    </motion.div>
  );
}

const SOURCES = ['Banks', 'NBFCs', 'HFCs', 'ARCs'];

const INTELLIGENCE_LAYER = [
  { label: 'AI-Powered Portfolio Segmentation', note: 'Prioritise accounts by recovery likelihood' },
  { label: 'AI Customer Analytics', note: 'Borrower behaviour & intent-to-pay signals' },
  { label: 'Smart Case Allocation', note: 'Route each account to the right channel' },
];

const PILLARS = [
  {
    title: 'Digital & Tele-Calling',
    base: 'Call centre operations (flexi, referral, hybrid) with auto-dialer collections across the delinquency curve.',
    ai: 'AI Voice Bot',
  },
  {
    title: 'Field Collections',
    base: 'GPS-verified doorstep visits by IIBF DRA-certified field officers, with same-day disposition logging.',
    ai: 'AI Route Optimisation',
  },
  {
    title: 'Verification & Due Diligence',
    base: 'Contact point verification, field investigation and due diligence ahead of allocation or escalation.',
    ai: 'AI Document Intelligence',
  },
  {
    title: 'Legal & SARFAESI',
    base: 'Section 13(2)/13(4) notices, DRT coordination, Section 138 cheque-bounce enforcement — statutory process, legal-team led.',
    ai: null,
  },
  {
    title: 'Settlement & Asset Disposal',
    base: 'One-time settlement negotiation, repossession and statutory auction execution through to realisation.',
    ai: 'AI Settlement Recommendations',
  },
];

const OUTCOMES = ['Promise to Pay', 'Payment & Reconciliation', 'Recovery Performance Reporting'];

function Chip({ children, dim = false }) {
  return (
    <span
      className={`rounded-lg border px-4 py-2.5 text-center font-mono text-[12px] font-semibold ${
        dim ? 'border-slate-200 bg-slate-50 text-slate-500' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
      }`}
    >
      {children}
    </span>
  );
}

function AiTag({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.06em]"
      style={{ background: `${BRAND}0f`, color: BRAND }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND }} />
      {children} — in development
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function RecoveryOperatingModel() {
  return (
    <section className="border-t border-slate-100 bg-white px-6 py-28 sm:py-36">
      <ActHeading
        eyebrow="The Operating Model — Roadmap"
        title="How the recovery operation is built to run"
        support="The real process behind SM Associates' recovery mandates, with AI capability layered on top where it's currently in development — not a product, not live today, the architecture we're building toward."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start"
      >
        {/* Sources */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Institutions Served
          </p>
          <div className="flex flex-col gap-2">
            {SOURCES.map((s) => (
              <Chip key={s} dim>{s}</Chip>
            ))}
          </div>
        </motion.div>

        {/* Intelligence layer + pillars */}
        <div className="lg:col-span-7">
          <motion.div variants={fadeUp} className="mb-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
              Intelligence Layer — Roadmap
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {INTELLIGENCE_LAYER.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-3 transition-colors duration-300 hover:border-[#0072bc]/40"
                >
                  <p className="text-[12.5px] font-bold leading-snug text-slate-900">{item.label}</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {PILLARS.map((p) => (
              <PillarCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Outcomes
          </p>
          <div className="flex flex-col gap-2">
            {OUTCOMES.map((o) => (
              <Chip key={o}>{o}</Chip>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-auto mt-12 max-w-lg text-center text-[12.5px] leading-relaxed text-slate-400"
      >
        Every stage marked "in development" is a real, active build item — not a live capability yet. Statutory legal process stays human-led by design.
      </motion.p>
    </section>
  );
}
