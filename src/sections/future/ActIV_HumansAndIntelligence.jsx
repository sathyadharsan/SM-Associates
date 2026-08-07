/**
 * Act IV — Humans + Intelligence (Scenes 08–09)
 *
 * A true 50/50 split held in place: the left column individually dims
 * while the right individually sharpens — never a wipe, never a swap.
 * Rebuilt with larger type and real column width (the first pass used
 * 16-19px list items in two narrow columns, which read as an
 * afterthought rather than the film's emotional turning point).
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useIsDesktop, ActFrame, PeakStatement, BRAND } from './futureShared';

const TRADITIONAL = ['Manual allocation', 'Phone calls', 'Excel', 'Waiting', 'Status updates', 'Rework', 'Delays'];
const FUTURE = ['Prediction', 'Automation', 'Recommendations', 'Live visibility', 'Decision support', 'Human oversight'];

function Column({ items, title, dissolve, side }) {
  const isLeft = side === 'left';
  const opacity = useTransform(dissolve, [0, 1], isLeft ? [1, 0.7] : [0.9, 1]);

  if (isLeft) {
    return (
      <motion.div
        style={{ opacity }}
        className="flex-1 rounded-3xl border border-slate-300/80 bg-slate-100/90 p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)]"
      >
        <div className="flex items-center justify-between border-b border-slate-300/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            <span className="font-mono text-[11.5px] font-black uppercase tracking-[0.2em] text-slate-700">
              Traditional Operations
            </span>
          </div>
          <span className="rounded-md bg-slate-200 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-slate-700">
            Legacy Model
          </span>
        </div>
        <ul className="space-y-2.5">
          {items.map((text) => (
            <li
              key={text}
              className="flex items-center gap-3 text-[17px] font-bold leading-snug tracking-tight text-slate-500 line-through decoration-slate-400 sm:text-[19px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ opacity }}
      className="flex-1 rounded-3xl border-2 border-[#0072bc]/40 bg-gradient-to-b from-sky-50 via-white to-sky-50/80 p-6 sm:p-7 shadow-[0_24px_60px_-15px_rgba(0,114,188,0.18)] ring-1 ring-[#0072bc]/20"
    >
      <div className="flex items-center justify-between border-b border-[#0072bc]/25 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0072bc] animate-pulse shadow-xs shadow-[#0072bc]" />
          <span className="font-mono text-[11.5px] font-black uppercase tracking-[0.2em] text-[#0072bc]">
            Future AI Ecosystem
          </span>
        </div>
        <span className="rounded-md bg-[#0072bc]/15 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-[#0072bc]">
          Intelligent OS
        </span>
      </div>
      <ul className="space-y-2.5">
        {items.map((text) => (
          <li
            key={text}
            className="flex items-center gap-3 text-[17px] font-black leading-snug tracking-tight text-slate-950 sm:text-[19px] bg-white p-3 rounded-xl border border-sky-200/90 shadow-xs transition-all hover:shadow-md hover:border-[#0072bc]/40"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#0072bc] shrink-0 shadow-xs shadow-[#0072bc]" />
            {text}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StaticStack() {
  return (
    <div className="mx-auto max-w-xl space-y-14 px-6 py-24">
      {[
        { title: 'Traditional', items: TRADITIONAL, accent: '#94a3b8' },
        { title: 'Future', items: FUTURE, accent: BRAND },
      ].map((col) => (
        <motion.div key={col.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: col.accent }}>
            {col.title}
          </span>
          <ul className="mt-5 space-y-3.5">
            {col.items.map((text) => (
              <li key={text} className="text-[18px] font-semibold leading-snug tracking-tight text-slate-900">
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default function ActIV_HumansAndIntelligence() {
  const rootRef = useRef(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const usePinned = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end end'] });
  const dissolve = useTransform(scrollYProgress, [0.1, 0.9], [0, 1], { clamp: true });
  const stageOpacity = useTransform(scrollYProgress, [0, 0.05, 0.82, 0.98], [1, 1, 1, 0], { clamp: true });

  return (
    <div ref={rootRef} id="future-act-4" className="relative bg-white" style={usePinned ? { height: '180vh' } : undefined}>
      {usePinned ? (
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-8">
          <ActFrame act="Act IV — Humans + Intelligence" scene="04 / 06">
            <motion.div style={{ opacity: stageOpacity }} className="mx-auto flex w-full max-w-5xl items-stretch gap-6 px-6 pt-4">
              <Column items={TRADITIONAL} title="Traditional" dissolve={dissolve} side="left" />
              <Column items={FUTURE} title="Future" dissolve={dissolve} side="right" />
            </motion.div>
          </ActFrame>
        </div>
      ) : (
        <StaticStack />
      )}

      <PeakStatement
        sceneLabel="DECISION EMPOWERMENT"
        lines={[
          'The future is not AI replacing people.',
          'The future is intelligence helping people make better decisions.',
        ]}
      />
    </div>
  );
}
