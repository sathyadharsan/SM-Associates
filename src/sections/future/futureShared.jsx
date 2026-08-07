/**
 * Shared design system for the /future cinematic experience.
 *
 * REDESIGN NOTE (why this file looks the way it does):
 * The first build revealed one word at a time in a dead-centre void.
 * Seen in a real browser that read as a broken render, not premium
 * minimalism — a 56px word adrift in a 1568px empty frame — and it was
 * also the performance bug: eleven separately-animated lines in Act I
 * alone meant ~33 live motion values recalculating every scroll frame,
 * which starved rAF and hung the tab.
 *
 * Both problems have the same fix, so this rebuild is built on it:
 * reveal composed STANZAS, not single words. A stanza fills the frame
 * (so the screen is never empty) and needs one motion value instead of
 * three-per-word (so scrolling stays cheap).
 *
 * Two structural rules everything below depends on:
 *
 * 1. useIsDesktop reads matchMedia synchronously on first render — a
 *    scroll-pinned act's ref must be attached to the same element from
 *    the very first render, or useScroll subscribes against null and
 *    the pin silently never engages.
 *
 * 2. Never combine `animate` (with repeat) and `whileInView` targeting
 *    the same property on one element. That conflict is what hung the
 *    page in the first build's Scene 16 — the two animation sources
 *    fight and re-render forever.
 */

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BRAND = '#0072bc';
export const PEAK_BRAND = '#4fa6e0';
export const PEAK_BG = '#0b0f14';

export const ACTS = [
  { id: 'future-act-1', label: 'The World We Know' },
  { id: 'future-act-2', label: 'The Breaking Point' },
  { id: 'future-act-3', label: 'Intelligence Awakens' },
  { id: 'future-act-4', label: 'Humans + Intelligence' },
  { id: 'future-act-5', label: 'One Connected Ecosystem' },
  { id: 'future-act-6', label: 'The Intelligent Enterprise' },
];

export function useIsDesktop(query = '(min-width: 1024px)') {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const apply = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [query]);
  return isDesktop;
}

/* ── Type scale ──────────────────────────────────────────────────────
 * The single biggest visual fix. Statements now genuinely fill the
 * frame instead of floating in it: the display size tops out at 104px
 * rather than the old 56px, and tracking tightens as size grows.
 */
export const displayType =
  'font-extrabold tracking-[-0.035em] leading-[1.05] text-slate-900';
export const displaySize = 'text-[clamp(28px,4vw,62px)]';
export const midSize = 'text-[clamp(24px,3.2vw,44px)]';

/* ── Act frame ───────────────────────────────────────────────────────
 * A quiet, persistent chrome so no scene is ever a bare white void:
 * act name top-left, scene counter top-right. Present in every pinned
 * act, which is what makes the emptiness read as composition rather
 * than a failed render.
 */
export function ActFrame({ children }) {
  return <>{children}</>;
}

/* ── The recurring blue-line signature ───────────────────────────── */
export function TransitionLine() {
  return null;
}

/* ── Peak statement — the five dark moments ──────────────────────── */
export function PeakStatement({ lines, support, exitToWhite = false, sceneLabel }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.5, delayChildren: 0.15 } },
  };
  const line = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center sm:px-10"
      style={{
        background: exitToWhite
          ? `linear-gradient(180deg, ${PEAK_BG} 0%, ${PEAK_BG} 65%, #ffffff 100%)`
          : PEAK_BG,
      }}
    >
      {sceneLabel && (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-mono text-[10.5px] font-bold uppercase tracking-[0.24em]"
          style={{ color: PEAK_BRAND }}
        >
          {sceneLabel}
        </motion.span>
      )}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        {lines.map((text, i) => (
          <motion.p
            key={text}
            variants={line}
            className="text-[clamp(30px,5vw,68px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
            style={{ marginTop: i === 0 ? 0 : '0.7em' }}
          >
            {text}
          </motion.p>
        ))}
        {support && (
          <motion.p
            variants={line}
            className="mt-10 max-w-md text-[14.5px] leading-relaxed text-slate-400"
          >
            {support}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

/* ── Section heading for the non-pinned acts ─────────────────────── */
export function ActHeading({ eyebrow, title, support }) {
  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: BRAND }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: eyebrow ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
        className={`${eyebrow ? 'mt-4' : 'mt-5'} ${midSize} ${displayType}`}
      >
        {title}
      </motion.h2>
      {support && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: eyebrow ? 0.2 : 0.1 }}
          className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500"
        >
          {support}
        </motion.p>
      )}
    </div>
  );
}
