/**
 * DayInRecoverySection — Horizontal Timeline
 * ─────────────────────────────────────────────────────────────────────
 * Redesigned from scroll-driven story to a premium horizontal timeline
 * showing 6 stages of a recovery day with animated connecting line.
 * Desktop: horizontal flow. Mobile: vertical stacked.
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, FileText, Package, ClipboardList, Send, Sparkles } from 'lucide-react';
import { dayInRecoveryStages } from '../data/dayInRecoveryData';

const stageIcons = [Clock, MapPin, FileText, Package, ClipboardList, Send];

const stageColors = [
  { dot: '#0072bc', bg: 'rgba(0,114,188,0.10)', border: 'rgba(0,114,188,0.25)' },
  { dot: '#0284c7', bg: 'rgba(2,132,199,0.10)', border: 'rgba(2,132,199,0.25)' },
  { dot: '#0369a1', bg: 'rgba(3,105,161,0.10)', border: 'rgba(3,105,161,0.25)' },
  { dot: '#075985', bg: 'rgba(7,89,133,0.10)', border: 'rgba(7,89,133,0.25)' },
  { dot: '#0c4a6e', bg: 'rgba(12,74,110,0.10)', border: 'rgba(12,74,110,0.25)' },
  { dot: '#0ea5e9', bg: 'rgba(14,165,233,0.10)', border: 'rgba(14,165,233,0.25)' },
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.10 } } };

function TimelineCard({ stage, index, total }) {
  const Icon = stageIcons[index] || Clock;
  const color = stageColors[index] || stageColors[0];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={rise}
      className="relative flex flex-col items-center"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Connector line (except last) — desktop only */}
      {index < total - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: index * 0.12 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[28px] left-[calc(50%+28px)] hidden lg:block"
          style={{
            width: 'calc(100% - 56px)',
            height: '2px',
            background: `linear-gradient(90deg, ${color.dot}, rgba(0,114,188,0.2))`,
            transformOrigin: 'left center',
          }}
        />
      )}

      {/* Icon circle */}
      <div
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg"
        style={{ background: color.bg, borderColor: color.border }}
      >
        <Icon size={20} strokeWidth={2} style={{ color: color.dot }} />
      </div>

      {/* Time badge */}
      <span
        className="mt-3 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
        style={{ background: color.bg, color: color.dot, border: `1px solid ${color.border}` }}
      >
        {stage.time}
      </span>

      {/* Title */}
      <h4 className="mt-3 text-center text-[15px] font-extrabold leading-snug tracking-tight text-slate-900">
        {stage.title}
      </h4>

      {/* Sentence */}
      <p className="mt-2 max-w-[160px] text-center text-[12.5px] leading-relaxed text-slate-500">
        {stage.sentence}
      </p>
    </motion.div>
  );
}

export default function DayInRecoverySection() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28"
      aria-label="A Day in Recovery"
    >
      {/* Subtle background glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,114,188,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16 text-center"
        >
          {/* Illustrative badge — content-integrity: do not remove */}
          <motion.div variants={rise} className="mb-5 flex items-center justify-center gap-2">
            <Sparkles size={13} className="text-[#0072bc]" />
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#0072bc]">
              Illustrative Scenario
            </span>
          </motion.div>

          <motion.h2
            variants={rise}
            className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[38px]"
          >
            A Day in Recovery
          </motion.h2>
          <motion.p variants={rise} className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
            From morning allocation to same-day institutional reporting — every stage logged, verified, and transparent.
          </motion.p>

          {/* Accent line */}
          <motion.div variants={rise} className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-transparent to-[#0072bc]/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 rounded-full bg-gradient-to-l from-transparent to-[#0072bc]/60" />
          </motion.div>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {dayInRecoveryStages.map((stage, index) => (
            <TimelineCard
              key={stage.title}
              stage={stage}
              index={index}
              total={dayInRecoveryStages.length}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 text-center text-[12px] text-slate-400"
        >
          Composite illustration of SM Associates' standard operating sequence. Actual timelines vary by mandate type and portfolio.
        </motion.p>
      </div>
    </section>
  );
}
