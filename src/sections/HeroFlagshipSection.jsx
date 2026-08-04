import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import WovenLightBackground from '../components/WovenLightBackground';

const COPY_STAGES = [
  { first: 'Collect.', second: 'Recover.' },
  { first: 'Recover.', second: 'Resolve.' },
  { first: 'Resolve.', second: 'Regulate.' },
];

const wordTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

// Hold each stage for 4.2 seconds so visitors can read comfortably
const STAGE_HOLD_MS = 4200;

function AnimatedWord({ value, accent = false }) {
  const letters = Array.from(value);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.02,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 16,
      rotateX: -45,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      rotateX: 45,
      filter: 'blur(4px)',
      transition: {
        duration: 0.28,
        ease: [0.7, 0, 0.84, 0],
      },
    },
  };

  return (
    <span className={`hero6-word-slot${accent ? ' accent' : ''}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="hero6-word-motion inline-flex items-baseline"
        >
          {letters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              className="inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
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
              <span className="ln"><span>We Don&apos;t Just</span></span>
              <span className="ln"><AnimatedWord value={copy.first} accent /></span>
              <span className="ln hero6-inline-row">
                <span className="hero6-we-text">We</span>
                <AnimatedWord value={copy.second} accent />
              </span>
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
