import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import WovenLightBackground from '../components/WovenLightBackground';

const COPY_STAGES = [
  { first: 'Collect.', second: 'Recover.' },
  { first: 'Recover.', second: 'Resolve.' },
  { first: 'Resolve.', second: 'Do Compliance.' },
];

const wordTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

// How long each stage stays on screen before the words cross-fade to the next.
// Comfortably longer than wordTransition so the line is readable at rest.
const STAGE_HOLD_MS = 2400;

function AnimatedWord({ value, accent = false }) {
  return (
    <span className={`ln hero6-word-slot${accent ? ' accent' : ''}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={value}
          className="hero6-word-motion"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={wordTransition}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HeroFlagshipSection() {
  const [subRef, subIn] = useReveal();
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState(reducedMotion ? 2 : 0);
  const copy = COPY_STAGES[stage];

  // Continuous loop: Collect -> Recover -> Resolve -> back to Collect, holding
  // each stage long enough to read before the words cross-fade. Reduced-motion
  // visitors get the final stage as static text and no cycling at all.
  useEffect(() => {
    if (reducedMotion) {
      setStage(COPY_STAGES.length - 1);
      return undefined;
    }

    const cycle = window.setInterval(() => {
      setStage((current) => (current + 1) % COPY_STAGES.length);
    }, STAGE_HOLD_MS);

    return () => window.clearInterval(cycle);
  }, [reducedMotion]);

  return (
    <section className="hero6 text-left" id="hero">
      <div className="hero6-bg" />
      <WovenLightBackground />
      <div className="fg-wrap w-full text-left">
        <div className="max-w-3xl relative z-10 py-8 text-left mr-auto ml-0">
          <div className="flex flex-col items-start text-left w-full">
            <div className="hero6-eyebrow self-start text-left">
              <span className="live-dot" />
              SOUTH INDIA&apos;S ENTERPRISE RECOVERY OPERATIONS PARTNER
            </div>
            <h1 className="hero6-h1 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              <span className="ln">We Don&apos;t Just</span>
              <AnimatedWord value={copy.first} />
              <span className="ln">We</span>
              <AnimatedWord value={copy.second} accent />
            </h1>
            <p ref={subRef} className={`hero6-sub fg-r text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mt-6 text-left ${subIn ? 'in' : ''}`}>
              End-to-end recovery operations backed by technology, compliance and 25+ years of field excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
