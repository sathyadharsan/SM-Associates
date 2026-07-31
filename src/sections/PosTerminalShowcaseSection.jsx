/**
 * PosTerminalShowcaseSection
 * ─────────────────────────────────────────────────────────────────────
 * Homepage-only — text on one side, an illustrated POS-terminal device
 * mockup on the other, showing the same six track-record figures already
 * built in StatsCounterSection (that section's own dark card-grid design
 * exists but was never wired into a page — its data is reused here so the
 * numbers stay in one place rather than being duplicated).
 *
 * The device choice isn't arbitrary: POS machines are literally one of SM
 * Associates' own recovery categories (Business Asset Recovery — "POS
 * Machines, Routers, Network Devices, Business Equipment"), so showing the
 * firm's own track record on a POS terminal ties the illustration back to
 * the business instead of being a generic device-mockup gimmick.
 *
 * All figures reused verbatim from stats/servicesLandingData sources
 * already verified earlier in the project — nothing here is a new claim.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Nfc, Printer, Sparkles } from 'lucide-react';
import { stats } from './StatsCounterSection';

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

function StatChip({ stat, index }) {
  const Icon = stat.icon;
  return (
    <motion.div variants={rise} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
      <div className="flex items-center justify-between">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0072bc]/10 text-[#0072bc]">
          <Icon size={11} strokeWidth={2.4} />
        </span>
        <span className="font-mono text-[8.5px] font-bold text-slate-300">#{index + 1}</span>
      </div>
      <div className="mt-1.5 text-[17px] font-black leading-none text-[#0072bc]">
        {stat.prefix}{stat.value.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="mt-1 text-[10px] font-bold leading-tight text-slate-800">{stat.label}</div>
      <div className="mt-0.5 text-[8.5px] leading-tight text-slate-400">{stat.sublabel}</div>
    </motion.div>
  );
}

// Real CSS 3D box (transform-style: preserve-3d, six positioned faces) —
// not a flat frame with a drop-shadow. Standard cube-construction formula:
// front/back sit at ±D/2 along Z, left/right at ±W/2 along X (after a
// rotateY so their own box-local Z becomes the scene's X), top/bottom at
// ±H/2 along Y (after a rotateX). Proportions (narrow + thick + tall, with
// a visible card-slot cut into the top edge) are what actually reads as
// "POS terminal" rather than "phone" — a phone-shaped frame doesn't sell it
// no matter how good the screen content is.
const DEVICE_W = 260;
const DEVICE_H = 570;
const DEVICE_D = 46;

function PosTerminalMockup() {
  const reduceMotion = useReducedMotion();
  const faceCommon = { position: 'absolute', backfaceVisibility: 'hidden' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex justify-center"
      style={{ perspective: 1800 }}
    >
      {/* Floating "Notice Sent" toast — sits outside the 3D scene, screen-space */}
      <div className="absolute -top-2 right-2 z-20 flex items-center gap-1.5 rounded-full bg-[#0072bc] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg shadow-[#0072bc]/30 sm:right-8">
        <Sparkles size={12} />
        Notice Sent
      </div>

      {/* 3D scene: fixed dramatic tilt so front, top and right edges are all
          visible at once (a classic product-shot 3/4 view), easing to a
          slightly squarer angle on hover so the depth reads as interactive.
          rotateX/rotateY are set as motion-value style props (numbers, not
          a transform string) specifically so Framer Motion can compose the
          base tilt with the whileHover target itself — mixing a plain CSS
          `transform` string with Framer's own rotateX/rotateY animation on
          the same element makes Framer silently drop the static value. */}
      <motion.div
        initial={false}
        whileHover={reduceMotion ? undefined : { rotateY: -14, rotateX: 4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: DEVICE_W,
          height: DEVICE_H,
          transformStyle: 'preserve-3d',
          rotateX: 8,
          rotateY: -24,
        }}
      >
        {/* FRONT — the screen face (unchanged content, just relocated onto
            a real 3D face instead of a flat card). */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_W,
            height: DEVICE_H,
            transform: `translateZ(${DEVICE_D / 2}px)`,
            background: 'linear-gradient(160deg, #232f42 0%, #131b28 55%, #0b1119 100%)',
            borderRadius: 26,
          }}
          className="p-2.5 shadow-2xl"
        >
          <div className="flex items-center justify-between px-1.5 pb-2">
            <Nfc size={13} strokeWidth={1.8} className="text-white/40" />
            <span className="font-mono text-[6.5px] uppercase tracking-[0.15em] text-white/30">Thermal Printer</span>
            <Printer size={12} strokeWidth={1.8} className="text-white/30" />
          </div>

          <div className="relative h-[calc(100%-28px)] overflow-hidden rounded-[20px] bg-white p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">9:41</span>
              <span className="rounded-full bg-[#0072bc]/10 px-2 py-0.5 font-mono text-[7.5px] font-bold uppercase tracking-widest text-[#0072bc]">
                SM POS Terminal
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0072bc] text-[11px] font-black text-white">
                SM
              </span>
              <span>
                <span className="block text-[12px] font-bold leading-tight text-slate-900">SM Associates</span>
                <span className="block text-[9.5px] leading-tight text-slate-400">Company Overview</span>
              </span>
            </div>

            <span className="mt-3 block font-mono text-[8.5px] font-bold uppercase tracking-[0.16em] text-[#0072bc]">
              Key Highlights
            </span>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-2 grid grid-cols-2 gap-1.5"
            >
              {stats.map((stat, index) => (
                <StatChip key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* TOP edge — card-reader slot + NFC/speaker detail: the single
            most recognizable "this is a POS machine" cue. */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_W,
            height: DEVICE_D,
            transform: `rotateX(90deg) translateZ(${DEVICE_H / 2}px)`,
            background: 'linear-gradient(180deg, #3a4a63 0%, #1c2532 100%)',
            borderRadius: '26px 26px 0 0',
          }}
          className="flex items-center justify-center gap-3"
        >
          {/* card-slot groove */}
          <div
            className="h-[7px] w-[130px] rounded-full"
            style={{ background: '#05070a', boxShadow: 'inset 0 2px 3px rgba(0,0,0,0.8), inset 0 -1px 0 rgba(255,255,255,0.06)' }}
          />
          {/* speaker dots */}
          <div className="flex gap-[3px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-[3px] w-[3px] rounded-full bg-black/50" />
            ))}
          </div>
        </div>

        {/* RIGHT edge — side buttons, sells the "chunky handheld" thickness */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_D,
            height: DEVICE_H,
            transform: `rotateY(90deg) translateZ(${DEVICE_W / 2}px)`,
            background: 'linear-gradient(90deg, #1c2532 0%, #2b3648 50%, #1c2532 100%)',
          }}
          className="flex flex-col items-center justify-center gap-2.5"
        >
          <span className="h-9 w-[5px] rounded-full bg-black/40" />
          <span className="h-5 w-[5px] rounded-full bg-black/40" />
        </div>

        {/* LEFT edge — plain filler, mostly hidden at this viewing angle but
            keeps the box airtight if the visitor drags/hovers further */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_D,
            height: DEVICE_H,
            transform: `rotateY(-90deg) translateZ(${DEVICE_W / 2}px)`,
            background: 'linear-gradient(270deg, #1c2532 0%, #2b3648 50%, #1c2532 100%)',
          }}
        />

        {/* BOTTOM edge — plain filler */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_W,
            height: DEVICE_D,
            transform: `rotateX(-90deg) translateZ(${DEVICE_H / 2}px)`,
            background: 'linear-gradient(0deg, #3a4a63 0%, #1c2532 100%)',
            borderRadius: '0 0 26px 26px',
          }}
        />

        {/* BACK — plain filler */}
        <div
          style={{
            ...faceCommon,
            width: DEVICE_W,
            height: DEVICE_H,
            transform: `translateZ(${-DEVICE_D / 2}px) rotateY(180deg)`,
            background: '#10151f',
            borderRadius: 26,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function PosTerminalShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" aria-label="Track record">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border border-[#0072bc]/20 bg-[#0072bc]/8 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#0072bc]"
            >
              Track Record
            </motion.span>
            <motion.h2
              variants={rise}
              className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Numbers that speak for themselves.
            </motion.h2>
            <motion.p variants={rise} className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              25+ years of institutional-grade recovery operations across South India — every figure
              here already lives in our own systems, the same record an institution can audit.
            </motion.p>
          </motion.div>

          {/* POS terminal mockup */}
          <PosTerminalMockup />
        </div>
      </div>
    </section>
  );
}
