/**
 * ComplianceStorySection
 * ─────────────────────────────────────────────────────────────────────
 * Scroll-driven story version of "Compliance & Data Security" for the
 * Services page — same pinned sticky-wrapper mechanic as
 * ServiceStorySection (see utils/scrollStoryMath.js), dark-themed to
 * alternate with the light Technology Story above it.
 */

import { useEffect, useRef } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { Lock, ClipboardCheck, Scale, UserCheck, Check } from 'lucide-react';
import { complianceAssurance } from '../data/servicesLandingData';
import { mountScrollStory, attachPointerTilt, easeOutBack } from '../utils/scrollStoryMath';

const TOTAL = complianceAssurance.length;
const SEGMENT_VH = 100;

// "Materializes into place" visual recipe — a third distinct moment (after
// the flying-card and diagonal-clip patterns): the panel assembles from a
// small, rotated, blurred-out state rather than sliding in from a side.
function materializeCardStyle(el, { opacity, entrance, exit }) {
  const settle = easeOutBack(1 - entrance);
  const growth = 1 - settle; // ~0 when settled; up to ~1 while still assembling
  const scale = 0.7 + 0.3 * settle - exit * 0.08;
  const rotate = growth * -10 + exit * 6;
  el.style.opacity = String(opacity);
  el.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
  el.style.filter = 'none';
}

const iconMap = { Lock, ClipboardCheck, Scale, UserCheck };

// Illustrative photography reused from the site's own verified image pool
// (data/servicesIndex recoveryProducts) — thematic fit, not literal photos
// of SM Associates' own systems.
const IMAGE_BY_TITLE = {
  'Data Handling & Confidentiality': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85&auto=format&fit=crop',
  'Audit-Trail Discipline': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&auto=format&fit=crop',
  'Regulatory Alignment': 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1600&q=85&auto=format&fit=crop',
  'Engagement & Reporting Structure': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop',
};

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function ChapterCopy({ pillar, index, wordRefs, dark = false }) {
  if (wordRefs) wordRefs.current[index] = [];
  let wordCounter = 0;
  return (
    <>
      <span className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-[#3d9ed6]' : 'text-[#0072bc]'}`}>
        {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </span>
      <h3 className={`mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-[32px] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {pillar.title}
      </h3>
      {/* Word-sweep spans the bullets in reading order (bullet 1 lights up
          fully before bullet 2 starts) — static/mobile fallback has no
          wordRefs and renders plain text. */}
      <ul className="mt-6 space-y-3">
        {pillar.points.map((point) => {
          const words = point.split(' ');
          return (
            <li key={point} className={`flex items-start gap-2.5 text-[14px] leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-[#0072bc]/20 text-[#3d9ed6]' : 'bg-[#0072bc]/10 text-[#0072bc]'}`}>
                <Check size={9} strokeWidth={3} />
              </span>
              <span>
                {wordRefs
                  ? words.map((word, wi) => {
                      const globalIndex = wordCounter++;
                      return (
                        <span
                          key={wi}
                          ref={(el) => { wordRefs.current[index][globalIndex] = el; }}
                          style={{ opacity: 0.32 }}
                        >
                          {word}
                          {wi < words.length - 1 ? ' ' : ''}
                        </span>
                      );
                    })
                  : point}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function StaticStoryList() {
  return (
    <div className="mx-auto max-w-3xl space-y-14 px-4 py-20 sm:px-6">
      {complianceAssurance.map((pillar, index) => (
        <motion.div key={pillar.title} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={rise} className="overflow-hidden rounded-[24px]">
            <img src={IMAGE_BY_TITLE[pillar.title]} alt={pillar.title} className="h-56 w-full object-cover sm:h-64" loading="lazy" />
          </motion.div>
          <motion.div variants={rise} className="mt-6">
            <ChapterCopy pillar={pillar} index={index} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ComplianceStorySection() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const wordRefs = useRef([]);
  const tiltRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const progressRef = useRef(null);
  const numeralRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const cleanupScroll = mountScrollStory({
      wrapRef,
      cardRefs,
      textRefs,
      wordRefs,
      total: TOTAL,
      applyCardStyle: materializeCardStyle,
      onProgress: ({ progress, activeIndex }) => {
        activeIndexRef.current = activeIndex;
        if (numeralRef.current) numeralRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
        if (progressRef.current) progressRef.current.style.width = `${progress * 100}%`;
      },
    });
    const cleanupTilt = attachPointerTilt({ stageRef, tiltRefs, activeIndexRef });
    return () => {
      cleanupScroll();
      cleanupTilt();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="bg-white" aria-label="Compliance & Data Security">
        <StaticStoryList />
      </section>
    );
  }

  return (
    // Dark-themed — alternates with the light Technology Story above it (see
    // file header comment). Mobile/reduced-motion fallbacks stay white by
    // design, matching DayInRecoverySection's identical convention: the dark
    // treatment is a desktop-pinned-stage flourish, not a section-wide theme.
    <section className="relative bg-[#0a1628]" aria-label="Compliance & Data Security">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,114,188,0.14) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 bg-white lg:hidden">
        <StaticStoryList />
      </div>

      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        {/* pt-24 clears the site's fixed header — same convention as
            OperatingModelSection's .model6-head (top:96px). */}
        <div ref={stageRef} className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#3d9ed6]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                  Compliance & Data Security
                </span>
                <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
                  Every engagement runs under enterprise governance.
                </h2>
              </div>
              <div className="hidden shrink-0 text-right font-mono sm:block">
                <span ref={numeralRef} className="text-3xl font-black text-white">01</span>
                <span className="text-lg font-bold text-slate-400"> / {String(TOTAL).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="relative h-[320px]">
                {complianceAssurance.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    ref={(el) => (textRefs.current[index] = el)}
                    className="absolute inset-0"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <ChapterCopy pillar={pillar} index={index} wordRefs={wordRefs} dark />
                  </div>
                ))}
              </div>

              <div className="relative h-[420px]" style={{ perspective: 1400 }}>
                {complianceAssurance.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/40"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index, transformStyle: 'preserve-3d' }}
                  >
                    <div
                      ref={(el) => (tiltRefs.current[index] = el)}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={IMAGE_BY_TITLE[pillar.title]}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.4) 100%)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
