/**
 * BrandManifestoSection
 * ─────────────────────────────────────────────────────────────────────
 * Homepage-only — a centered, text-only scroll moment between the trust
 * badges and the services overview. Three short statements sit on screen
 * together and light up word-by-word, in order, as the visitor scrolls
 * through this section — the same "read as you scroll" sweep built for the
 * Services page story sections, but a single continuous pass (no chapters,
 * no images) since this is one short passage, not a multi-part story.
 *
 * See utils/scrollStoryMath.js (mountWordSweep) for the shared math.
 */

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { mountWordSweep } from '../utils/scrollStoryMath';

const LINES = [
  'Every account is a person, not a number.',
  'Every recovery follows the law, not shortcuts.',
  'Every report reaches the institution the same day it happens.',
];

const SEGMENT_VH = 260;

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.16 } } };

function StaticManifesto() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto max-w-4xl px-6 py-28 text-center sm:px-8"
    >
      {LINES.map((line) => (
        <motion.p
          key={line}
          variants={rise}
          className="text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-4xl"
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default function BrandManifestoSection() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    return mountWordSweep({ wrapRef, wordRefs });
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="bg-white py-4" aria-label="Our operating principles">
        <StaticManifesto />
      </section>
    );
  }

  return (
    <section className="relative bg-white" aria-label="Our operating principles">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,114,188,0.06) 0%, transparent 70%)' }}
      />

      {/* Mobile/tablet: static reveal, no scroll-jack */}
      <div className="relative z-10 lg:hidden">
        <StaticManifesto />
      </div>

      {/* Desktop: one continuous pinned word-sweep across all three lines */}
      <ManifestoStage wrapRef={wrapRef} wordRefs={wordRefs} />
    </section>
  );
}

// Split out so the flat word-index counter is scoped to one render pass —
// a plain incrementing counter here is safe (freshly reset every render),
// but pushing into wordRefs.current from inside a ref callback would not be:
// ref callbacks re-fire on every render (including React StrictMode's
// double-invoke in dev), so `.push()` would duplicate entries over time.
function ManifestoStage({ wrapRef, wordRefs }) {
  let wordCounter = 0;
  return (
    <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${SEGMENT_VH}vh` }}>
      {/* Sticky viewport stage positioned higher up */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden pt-12 sm:pt-16 -mt-12 sm:-mt-20">
        <div className="mx-auto w-full max-w-5xl px-8 text-center space-y-6 sm:space-y-8">
          {LINES.map((line, li) => {
            const words = line.split(' ');
            return (
              <p
                key={`line-${li}`}
                className="text-3xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-5xl lg:text-[54px]"
              >
                {words.map((word, wi) => {
                  const gi = wordCounter++;
                  return (
                    <span
                      key={`w-${gi}`}
                      ref={(el) => { wordRefs.current[gi] = el; }}
                      className="inline-block transition-all duration-300 ease-out cursor-default select-none py-1"
                      style={{
                        WebkitTextStroke: '1.5px #475569',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.5,
                        transform: 'translateY(6px) scale(0.98)',
                      }}
                    >
                      {word}
                      {wi < words.length - 1 ? '\u00A0' : ''}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
