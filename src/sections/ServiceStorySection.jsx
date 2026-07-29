/**
 * ServiceStorySection
 * ─────────────────────────────────────────────────────────────────────
 * Scroll-driven product storytelling for the Services page — the visitor
 * scrolls through the same 8 enterprise recovery categories used elsewhere
 * on the site (see data/enterpriseServicesData.js), one chapter at a time.
 *
 * Mechanic: a tall wrapper (TOTAL chapters × 100vh) holds a `position: sticky`
 * stage that stays pinned to the viewport while the wrapper scrolls past.
 * Scroll position is read continuously (not stepped) and mapped onto each
 * chapter's image + copy: the image slides in from the right and settles,
 * copy reveals a beat after, then both cross-fade into the next chapter.
 * This is the same sticky-wrapper technique already used for the homepage
 * Operating Model filmstrip (see sections/OperatingModelSection.jsx), kept
 * consistent rather than introducing a new scroll/animation library.
 *
 * Desktop only (≥1024px) and gated behind prefers-reduced-motion — narrower
 * viewports and reduced-motion get a plain stacked list instead, since a
 * two-column pinned layout has nowhere to go on a phone-width screen.
 */

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { enterpriseServices } from '../data/enterpriseServicesData';
import { mountScrollStory } from '../utils/scrollStoryMath';

const TOTAL = enterpriseServices.length;
const SEGMENT_VH = 100; // scroll distance given to each chapter

// Sharper crop for the large story column — the same data feeds a much
// smaller card elsewhere (EnterpriseServicesSection), so the source images
// are only requested at 900px there.
const upsize = (url, width = 1600) => url.replace(/([?&])w=\d+/, `$1w=${width}`);

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function ChapterCopy({ service, index }) {
  return (
    <>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
        {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[32px]">
        {service.title}
      </h3>
      <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-slate-600">
        {service.description}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
        {service.capabilities.slice(0, 6).map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0072bc]/10 text-[#0072bc]">
              <Check size={9} strokeWidth={3} />
            </span>
            {cap}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {service.approach.map((step) => (
          <span
            key={step}
            className="rounded-full border border-[#0072bc]/20 bg-[#0072bc]/8 px-3 py-1 text-[11px] font-semibold text-[#0072bc]"
          >
            {step}
          </span>
        ))}
      </div>

      <Link
        to="/contact"
        className="group mt-7 inline-flex items-center gap-2 text-[13.5px] font-bold text-[#0072bc]"
      >
        <span className="border-b border-[#0072bc]/30 pb-px group-hover:border-[#0072bc]">{service.cta}</span>
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </>
  );
}

// ── Static fallback (mobile + reduced-motion): plain stacked list ──────
function StaticStoryList() {
  return (
    <div className="mx-auto max-w-3xl space-y-14 px-4 py-20 sm:px-6">
      {enterpriseServices.map((service, index) => (
        <motion.div
          key={service.id}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={rise} className="overflow-hidden rounded-[24px]">
            <img
              src={service.image}
              alt={service.title}
              className="h-56 w-full object-cover sm:h-64"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={rise} className="mt-6">
            <ChapterCopy service={service} index={index} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ServiceStorySection() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const progressRef = useRef(null);
  const numeralRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    return mountScrollStory({
      wrapRef,
      cardRefs,
      textRefs,
      total: TOTAL,
      onProgress: ({ progress, activeIndex }) => {
        if (numeralRef.current) numeralRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
        if (progressRef.current) progressRef.current.style.width = `${progress * 100}%`;
      },
    });
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section id="enterprise-services" className="bg-white py-4" aria-label="Enterprise Recovery Story">
        <StaticStoryList />
      </section>
    );
  }

  return (
    <section id="enterprise-services" className="relative bg-white" aria-label="Enterprise Recovery Story">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,114,188,0.06) 0%, transparent 70%)' }}
      />

      {/* Mobile / tablet: static list, no scroll-jack */}
      <div className="relative z-10 lg:hidden">
        <StaticStoryList />
      </div>

      {/* Desktop: pinned scroll story */}
      <div ref={wrapRef} className="relative z-10 hidden lg:block" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-8">
            {/* Header: eyebrow + chapter numeral + progress rail */}
            <div className="mb-14 flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                  Our Services
                </span>
                <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
                  The complete recovery story.
                </h2>
              </div>
              <div className="hidden shrink-0 text-right font-mono sm:block">
                <span ref={numeralRef} className="text-3xl font-black text-slate-900">01</span>
                <span className="text-lg font-bold text-slate-400"> / {String(TOTAL).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="mb-14 h-[2px] w-full bg-slate-200">
              <div ref={progressRef} className="h-full bg-[#0072bc]" style={{ width: '0%' }} />
            </div>

            {/* Story stage: text left, image right — both stacked absolutely per chapter */}
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="relative h-[300px]">
                {enterpriseServices.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => (textRefs.current[index] = el)}
                    className="absolute inset-0"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <ChapterCopy service={service} index={index} />
                  </div>
                ))}
              </div>

              <div className="relative h-[420px]">
                {enterpriseServices.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 overflow-hidden rounded-[32px] border border-slate-200 shadow-xl shadow-slate-900/10"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <img
                      src={upsize(service.image)}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.4) 100%)' }}
                    />
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/40 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                      {service.number}
                    </span>
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
