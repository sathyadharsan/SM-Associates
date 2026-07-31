/**
 * DayInRecoverySection
 * ─────────────────────────────────────────────────────────────────────
 * "A Day in Recovery" — a single illustrative mandate's timeline, told as
 * one sentence per scroll chapter. Deliberately a different "moment" from
 * the other three story sections: full-bleed photography fills the whole
 * screen with a slow continuous Ken-Burns zoom, and the sentence sits
 * centered directly over the image (word-swept as you scroll) instead of
 * living in its own text column next to a card.
 *
 * CONTENT-INTEGRITY: this is a composite, illustrative day built from the
 * real stages of the operating model — not a specific real case file. The
 * "Illustrative Scenario" badge is load-bearing; don't remove it.
 */

import { useEffect, useRef } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { dayInRecoveryStages } from '../data/dayInRecoveryData';
import { mountScrollStory, attachPointerTilt, clamp, PRE } from '../utils/scrollStoryMath';

const TOTAL = dayInRecoveryStages.length;
const SEGMENT_VH = 85;

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// Continuous slow zoom for as long as a chapter is relevant on screen — from
// its first appearance (t = -PRE) through to full exit (t = 1) — rather than
// only animating during the slide-in, so the photo keeps drifting the whole
// time it's being read, the classic Ken-Burns feel.
function zoomCardStyle(el, { opacity, index, raw }) {
  const t = clamp((raw - index + PRE) / (1 + PRE), 0, 1);
  const scale = 1 + t * 0.22;
  el.style.opacity = String(opacity);
  el.style.transform = `scale(${scale})`;
}

function ChapterCopy({ stage, index, wordRefs }) {
  if (wordRefs) wordRefs.current[index] = [];
  const words = stage.sentence.split(' ');
  return (
    <>
      <span className="font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-[#8fc4ea]">
        {stage.time} · {stage.title}
      </span>
      <p className="mt-5 text-[26px] font-bold leading-snug tracking-tight text-white sm:text-[36px]">
        {wordRefs
          ? words.map((word, wi) => (
              <span key={wi} ref={(el) => { wordRefs.current[index][wi] = el; }} style={{ opacity: 0.3 }}>
                {word}
                {wi < words.length - 1 ? ' ' : ''}
              </span>
            ))
          : stage.sentence}
      </p>
    </>
  );
}

function StaticStoryList() {
  return (
    <div className="mx-auto max-w-3xl space-y-14 px-4 py-20 sm:px-6">
      {dayInRecoveryStages.map((stage, index) => (
        <motion.div key={stage.time} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={rise} className="relative overflow-hidden rounded-[24px]">
            <img src={stage.image} alt={stage.title} className="h-64 w-full object-cover sm:h-72" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-[#8fc4ea]">
                {stage.time} · {stage.title}
              </span>
              <p className="mt-2 text-xl font-bold leading-snug text-white">{stage.sentence}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function IntroHeader() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#0072bc]/20 bg-[#0072bc]/8 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#0072bc]">
        <Sparkles size={13} />
        Illustrative Scenario
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">A Day in Recovery</h2>
      <p className="mt-2 text-sm text-slate-500">
        One representative mandate's timeline — not a specific client case.
      </p>
    </div>
  );
}

export default function DayInRecoverySection() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const stageElRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const wordRefs = useRef([]);
  const tiltRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const timeRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const cleanupScroll = mountScrollStory({
      wrapRef,
      cardRefs,
      textRefs,
      wordRefs,
      total: TOTAL,
      applyCardStyle: zoomCardStyle,
      onProgress: ({ activeIndex }) => {
        activeIndexRef.current = activeIndex;
        if (timeRef.current) timeRef.current.textContent = dayInRecoveryStages[activeIndex].time;
      },
    });
    const cleanupTilt = attachPointerTilt({ stageRef: stageElRef, tiltRefs, activeIndexRef, maxTilt: 3 });
    return () => {
      cleanupScroll();
      cleanupTilt();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="border-b border-slate-200/90 bg-white" aria-label="A Day in Recovery — illustrative scenario">
        <IntroHeader />
        <StaticStoryList />
      </section>
    );
  }

  return (
    <section className="relative border-b border-slate-200/90 bg-[#050b16]" aria-label="A Day in Recovery — illustrative scenario">
      {/* Mobile / tablet: static list, no scroll-jack */}
      <div className="relative z-10 bg-white lg:hidden">
        <IntroHeader />
        <StaticStoryList />
      </div>

      {/* Desktop: full-bleed pinned zoom timeline */}
      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        <div ref={stageElRef} className="sticky top-0 h-screen overflow-hidden">
          {/* Full-bleed photo layers, one per chapter */}
          {dayInRecoveryStages.map((stage, index) => (
            <div
              key={stage.time}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute inset-0"
              style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
            >
              <div ref={(el) => (tiltRefs.current[index] = el)} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}

          {/* Vignette — darker toward the center-bottom where the sentence sits */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: 'linear-gradient(180deg, rgba(5,11,22,0.55) 0%, rgba(5,11,22,0.25) 35%, rgba(5,11,22,0.72) 100%)' }}
          />

          {/* Header bar */}
          {/* pt-24 clears the site's fixed header — same convention as
              OperatingModelSection's .model6-head (top:96px). */}
          <div className="absolute inset-x-0 top-0 z-30 mx-auto flex w-full max-w-7xl items-start justify-between px-8 pt-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <Sparkles size={12} />
              Illustrative Scenario — A Day in Recovery
            </span>
            <span ref={timeRef} className="font-mono text-2xl font-black text-white">6:00 AM</span>
          </div>

          {/* Centered sentence, one chapter visible at a time */}
          <div className="absolute inset-0 z-30 flex items-center justify-center px-8">
            <div className="relative w-full max-w-3xl">
              {dayInRecoveryStages.map((stage, index) => (
                <div
                  key={stage.time}
                  ref={(el) => (textRefs.current[index] = el)}
                  className="absolute inset-x-0 text-center"
                  style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                >
                  <ChapterCopy stage={stage} index={index} wordRefs={wordRefs} />
                </div>
              ))}
            </div>
          </div>

          <p className="absolute inset-x-0 bottom-8 z-30 text-center font-mono text-[10.5px] uppercase tracking-widest text-white/50">
            A representative mandate — figures and sequence are illustrative, not a specific client record.
          </p>
        </div>
      </div>
    </section>
  );
}
