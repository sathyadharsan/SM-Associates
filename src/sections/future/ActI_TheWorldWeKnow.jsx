/**
 * Act I — The World We Know (Scenes 01–03)
 *
 * Three composed stanzas cross-fade in place as the viewport pins.
 *
 * The first build revealed ONE WORD at a time here, which in a real
 * browser looked like a broken render (a 56px word adrift in an empty
 * 1568px frame) and cost ~33 live motion values. Stanzas fix both: the
 * type fills the frame, and each stanza needs a single opacity/y pair.
 *
 * Left-aligned inside a max-width column rather than dead-centred —
 * centring a lone line in an empty viewport is exactly what read as
 * unfinished; an aligned column with a visible act frame reads as
 * deliberate composition.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ActFrame, TransitionLine, displayType, displaySize, BRAND } from './futureShared';

const STANZAS = [
  {
    id: 'decades',
    lines: ['Recovery has worked', 'the same way', 'for decades.'],
    support: null,
  },
  {
    id: 'manual',
    lines: ['Calls. Spreadsheets.', 'Paper trails.', 'Manual decisions.'],
    support: 'The operating model behind most recovery desks has barely moved in twenty-five years.',
  },
  {
    id: 'complex',
    lines: ['It worked —', 'until recovery became', 'far more complex.'],
    support: null,
  },
];

function Stanza({ stanza, index, progress }) {
  const offset = useTransform(progress, (v) => index - v);
  const opacity = useTransform(offset, [-0.4, -0.15, 0, 0.15, 0.4], [0, 1, 1, 1, 0]);
  const y = useTransform(offset, (v) => `${v * 8}px`);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-4"
      aria-hidden={index !== 0}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center flex flex-col items-center justify-center">
        <h2 className={`${displaySize} ${displayType}`}>
          {stanza.lines.map((l, li) => {
            const isHighlight =
              (stanza.id === 'decades' && li === 1) ||
              (stanza.id === 'manual' && li === 3) ||
              (stanza.id === 'complex' && li === 2);

            return (
              <span
                key={l}
                className={`block ${isHighlight ? 'text-[#0072bc]' : ''}`}
              >
                {l}
              </span>
            );
          })}
        </h2>
        {stanza.support && (
          <p className="mt-8 sm:mt-10 max-w-lg mx-auto text-[14.5px] sm:text-[16px] font-semibold leading-relaxed text-slate-500 shrink-0">
            {stanza.support}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function StaticFallback() {
  return (
    <div className="mx-auto max-w-5xl space-y-20 px-6 py-28 sm:px-10 text-center">
      {STANZAS.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={`${displaySize} ${displayType}`}>
            {s.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          {s.support && (
            <p className="mt-6 max-w-md mx-auto text-[15px] leading-relaxed text-slate-500">{s.support}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function ActI_TheWorldWeKnow() {
  const rootRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, STANZAS.length - 1]);

  return (
    <div
      ref={rootRef}
      id="future-act-1"
      className="relative bg-white"
      style={reduce ? undefined : { height: `${STANZAS.length * 85}vh` }}
    >
      {reduce ? (
        <StaticFallback />
      ) : (
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <ActFrame act="Act I — The World We Know" scene="01 / 06">
            <div className="relative h-full w-full flex items-center justify-center">
              {STANZAS.map((s, i) => (
                <Stanza key={s.id} stanza={s} index={i} progress={progress} />
              ))}
            </div>
          </ActFrame>
        </div>
      )}
    </div>
  );
}
