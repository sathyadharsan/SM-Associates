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
import { mountScrollStory, attachPointerTilt, clamp, easeApple } from '../utils/scrollStoryMath';

const TOTAL = enterpriseServices.length;
const SEGMENT_VH = 100; // scroll distance given to each chapter

// One unique off-screen origin per chapter (8 chapters, 8 origins, assigned
// 1:1 by index) — every chapter flies in from a different point in space,
// and since the mapping is 1:1 no two chapters can ever share a direction,
// consecutive or otherwise. Each origin also carries its own starting
// scale/rotation and which axis its mid-flight "bulge" curves along, so no
// two entrances trace the same path either.
const FLIGHT_ORIGINS = [
  { x: -1000, y: 0, rotate: -8, scale: 0.8, arcAxis: 'y', arcSign: 1 }, // Far Left
  { x: 1000, y: 0, rotate: 8, scale: 0.8, arcAxis: 'y', arcSign: -1 }, // Far Right
  { x: -680, y: -540, rotate: -6, scale: 0.85, arcAxis: 'x', arcSign: 1 }, // Top Left
  { x: 680, y: -540, rotate: 6, scale: 0.85, arcAxis: 'x', arcSign: -1 }, // Top Right
  { x: -680, y: 540, rotate: 7, scale: 0.78, arcAxis: 'x', arcSign: -1 }, // Bottom Left
  { x: 680, y: 540, rotate: -7, scale: 0.78, arcAxis: 'x', arcSign: 1 }, // Bottom Right
  { x: 0, y: -700, rotate: -4, scale: 0.9, arcAxis: 'x', arcSign: 1 }, // Top Center
  { x: 0, y: 700, rotate: 4, scale: 0.9, arcAxis: 'x', arcSign: -1 }, // Bottom Center
];

/**
 * Apple/Linear-style "flies in from elsewhere in space" visual recipe —
 * replaces the simple flying-card recipe with a per-chapter curved 3D
 * trajectory. Reuses imageState's existing entrance/exit timing (see
 * scrollStoryMath.js) unchanged: entrance already runs 1→0 over the
 * incoming chapter's own t∈[-0.3,0], overlapping exactly with the outgoing
 * chapter's exit over its t∈[0.7,1] — that overlap is what makes the old
 * image visibly hold in place while the new one arrives, instead of an
 * instant swap.
 */
function flyInCardStyle(el, { opacity, entrance, exit, index, docked }) {
  const origin = FLIGHT_ORIGINS[index % FLIGHT_ORIGINS.length];

  // 1. Text Leads, Image Follows:
  // arrivalProgress moves 0 -> 1 as image approaches the display frame AFTER user reads the text.
  const arrivalProgress = clamp(1 - entrance, 0, 1);
  const eased = easeApple(arrivalProgress);
  const remaining = 1 - eased; // 1 = approaching from origin, 0 = softly docked in display frame

  // 2. Curved Approach: Image travels through space towards the display frame
  const bulge = Math.sin(eased * Math.PI) * 75;
  let x = origin.x * remaining * 0.8;
  let y = origin.y * remaining * 0.8;
  if (origin.arcAxis === 'x') x += bulge * origin.arcSign;
  else y += bulge * origin.arcSign;

  // 3. Detach & Exit: Previous image detaches from display frame, lifts off, and travels away
  y -= exit * 38;
  x += exit * 50 * (index % 2 === 0 ? 1 : -1);

  // 4. Soft Docking Scale & 3D Alignment
  const scale = 1 - remaining * (1 - origin.scale) + (docked ? 0 : exit * 0.04);
  const rotate = origin.rotate * remaining + exit * (index % 2 === 0 ? 6 : -6);

  // 3D Alignment: Tumbles in 3D space during approach, aligns 100% flush with display frame when docked
  const tiltY = origin.x === 0 ? 0 : Math.sign(origin.x) * 10 * remaining;
  const tiltX = origin.y === 0 ? 0 : Math.sign(origin.y) * -8 * remaining;

  // Elevation Vault Shadow: Wide floating shadow while travelling, grounded vault shadow when docked
  const lift = Math.max(remaining, exit);
  const shadowBlur = 24 + lift * 65;
  const shadowSpread = -6 - lift * 5;
  const shadowY = 16 + lift * 42;
  const shadowAlpha = 0.45 - lift * 0.2;

  el.style.opacity = String(entrance > 0 ? eased : opacity);
  el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)}) rotate(${rotate.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  el.style.filter = 'none';
  el.style.boxShadow = `0 ${shadowY.toFixed(0)}px ${shadowBlur.toFixed(0)}px ${shadowSpread.toFixed(0)}px rgba(15,23,42,${shadowAlpha.toFixed(2)})`;
}

// Sharper crop for the large story column — the same data feeds a much
// smaller card elsewhere (EnterpriseServicesSection), so the source images
// are only requested at 900px there.
const upsize = (url, width = 1600) => url.replace(/([?&])w=\d+/, `$1w=${width}`);

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

function ChapterCopy({ service, index, wordRefs }) {
  if (wordRefs) wordRefs.current[index] = [];
  const words = service.description.split(' ');
  return (
    <>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
        {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[32px]">
        {service.title}
      </h3>
      {/* Each word is its own span — scroll progress "reads" the sentence
          word by word instead of fading the whole paragraph in at once.
          (Static/mobile fallback has no wordRefs and renders plain text.) */}
      <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-slate-700 font-medium">
        {wordRefs
          ? words.map((word, wi) => (
              <span key={wi} ref={(el) => { wordRefs.current[index][wi] = el; }} style={{ opacity: 1 }}>
                {word}
                {wi < words.length - 1 ? ' ' : ''}
              </span>
            ))
          : service.description}
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
      applyCardStyle: flyInCardStyle,
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
      <section id="enterprise-services" className="bg-white py-4" aria-label="Enterprise Recovery Story">
        <StaticStoryList />
      </section>
    );
  }

  return (
    // overflow-x:clip (not overflow-hidden) here, and specifically NOT on the
    // sticky stage below: an ancestor with overflow-hidden on both axes would
    // make IT the "nearest scrolling ancestor" for position:sticky, breaking
    // the pin entirely (the exact bug already hit and fixed elsewhere this
    // session). overflow-x:clip with overflow-y left alone doesn't have that
    // problem (same pattern already proven safe in homepage-v6.css's
    // .fg-home) while still stopping cards flying in from ±1000px off-screen
    // from creating a horizontal scrollbar on the page.
    <section
      id="enterprise-services"
      className="relative bg-white"
      style={{ overflowX: 'clip' }}
      aria-label="Enterprise Recovery Story"
    >
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
        {/* pt-24 clears the site's fixed header — same convention as
            OperatingModelSection's .model6-head (top:96px). */}
        <div ref={stageRef} className="sticky top-0 flex h-screen flex-col justify-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-8">
            {/* Header: eyebrow + chapter numeral + progress rail */}
            <div className="mb-14 text-center flex flex-col items-center justify-center">
              <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px] text-center">
                The complete recovery story.
              </h2>
            </div>

            {/* Story stage: text left, image right — both stacked absolutely per chapter */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="relative h-[420px]">
                {enterpriseServices.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => (textRefs.current[index] = el)}
                    className="absolute inset-0"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index }}
                  >
                    <ChapterCopy service={service} index={index} wordRefs={wordRefs} />
                  </div>
                ))}
              </div>

              <div className="relative h-[420px]" style={{ perspective: 1400 }}>
                {enterpriseServices.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="group absolute inset-0 overflow-hidden rounded-[32px] border border-slate-200/90 shadow-2xl bg-slate-950"
                    style={{ opacity: index === 0 ? 1 : 0, zIndex: index, transformStyle: 'preserve-3d' }}
                  >
                    {/* Nested tilt wrapper */}
                    <div
                      ref={(el) => (tiltRefs.current[index] = el)}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={upsize(service.image)}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.45) 100%)' }}
                      />

                      {/* Physical Evidence Module Badge (Top-Left) */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/80 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc] animate-pulse" />
                        <span>EVIDENCE MODULE {service.number} · VERIFIED</span>
                      </div>

                      {/* Readiness Highlight Sweep Glare */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/15 to-transparent transition-opacity duration-700 opacity-60"
                      />

                      {/* Chapter Numeral Badge (Bottom-Right) */}
                      <span className="absolute bottom-5 right-5 rounded-full border border-white/30 bg-black/50 px-3.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-md">
                        {service.number} / {String(TOTAL).padStart(2, '0')}
                      </span>
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
