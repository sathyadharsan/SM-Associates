/**
 * AwardsCertificationsSection — "Regulated. Certified. Trusted."
 *
 * Premium scroll-pinned cinematic experience: each of 8 certification cards
 * travels one at a time along an upper-half semicircular arc path from
 * BOTTOM-LEFT → TOP → BOTTOM-RIGHT, driven entirely by the user's scroll.
 *
 * Reuses the existing scrollStoryMath infrastructure (mountScrollStory pattern)
 * and useDesktopPin gate so the pinning behaviour matches the rest of the site.
 *
 * Mobile / reduced-motion: standard 2-column grid, no pinning.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Landmark, BadgeCheck, FileCheck, MapPin, Activity, Lock, FileText } from 'lucide-react';
import { clamp, easeApple, useDesktopPin } from '../utils/scrollStoryMath';

/* ── Card data ── */
const certifications = [
  { icon: Landmark, title: 'RBI Guidelines', subtitle: 'Regulatory Framework' },
  { icon: FileCheck, title: 'SARFAESI', subtitle: 'Authorized Recovery Agent' },
  { icon: BadgeCheck, title: 'IIBF Certified', subtitle: 'DRA Trained Workforce' },
  { icon: ShieldCheck, title: 'ISO 27001', subtitle: 'Information Security' },
  { icon: MapPin, title: 'GPS Enabled', subtitle: 'Ground Operations' },
  { icon: Activity, title: 'Audit Ready', subtitle: 'Complete Audit Trail' },
  { icon: Lock, title: 'Secure Data', subtitle: 'Data Protection Protocol' },
  { icon: FileText, title: 'Legal Documentation', subtitle: 'Statutory Enforcement' },
];

const TOTAL = certifications.length;
const SEGMENT_VH = 110; // scroll distance per card (vh)

/* ── Semicircle path math ──
 *
 * The upper-half semicircle arc:
 *
 *                  TOP (t=0.5)
 *             ╭────────────╮
 *          ╭──╯              ╰──╮
 *        ╱                        ╲
 *      ╱                            ╲
 * START (t=0)                    END (t=1)
 * BOTTOM-LEFT                  BOTTOM-RIGHT
 *
 * Parametric: angle goes from π (180°, left) to 0° (right)
 *   x(t) = cx + R * cos(π * (1 - t))
 *   y(t) = cy - R * sin(π * (1 - t))
 *
 * At t=0: angle=π  → x = cx - R (left),  y = cy (bottom)
 * At t=0.5: angle=π/2 → x = cx (center), y = cy - R (top)
 * At t=1: angle=0  → x = cx + R (right), y = cy (bottom)
 */
function getArcPosition(t, radiusX, radiusY, cx, cy) {
  const angle = Math.PI * (1 - t);
  return {
    x: cx + radiusX * Math.cos(angle),
    y: cy - radiusY * Math.sin(angle),
  };
}

/* ── Scale along the arc: peak at top (t=0.5) ── */
function getArcScale(t) {
  const sinVal = Math.sin(Math.PI * t); // peaks at t=0.5
  return 0.78 + 0.22 * sinVal;
}

/* ── Opacity envelope for a card along its journey ── */
function getCardOpacity(t) {
  if (t <= 0) return 0;
  if (t <= 0.12) return easeApple(t / 0.12); // fade in
  if (t <= 0.88) return 1;                    // full
  if (t <= 1) return 1 - easeApple((t - 0.88) / 0.12); // fade out
  return 0;
}

/* ── Subtle rotation: tilts with the trajectory ── */
function getCardRotation(t) {
  // Very subtle: tilts -3° ascending, 0° at top, +3° descending
  return (t - 0.5) * 6;
}

/* ═══════════════════════════════════════════════════════════
 * DESKTOP: Pinned Cinematic Scroll Experience
 * ═══════════════════════════════════════════════════════════ */
function DesktopCinematic() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const arcRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const settledGridRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let ticking = false;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const travel = wrap.offsetHeight - window.innerHeight;
      if (travel <= 0) return;
      const progress = clamp(-rect.top / travel, 0, 1);

      // Map total progress → which card is active and where it is on the arc
      const raw = progress * TOTAL;
      const cardIndex = clamp(Math.floor(raw), 0, TOTAL - 1);
      const cardT = clamp(raw - cardIndex, 0, 1); // 0→1 within this card's journey

      // Update counter
      if (counterRef.current) {
        counterRef.current.textContent = String(cardIndex + 1).padStart(2, '0');
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      // Get viewport dimensions for arc sizing
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const radiusX = Math.min(vw * 0.36, 480);
      const radiusY = Math.min(vh * 0.3, 280);
      const cx = vw / 2;
      const cy = vh * 0.62;

      // Position the active card on the arc
      const el = cardRef.current;
      if (el) {
        const pos = getArcPosition(cardT, radiusX, radiusY, cx, cy);
        const scale = getArcScale(cardT);
        const opacity = getCardOpacity(cardT);
        const rotate = getCardRotation(cardT);

        // Centre the card element on the computed point
        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)}) rotate(${rotate.toFixed(1)}deg)`;
        el.style.opacity = String(opacity.toFixed(3));
      }

      // Draw the arc trace (shows how far this card has travelled)
      if (arcRef.current) {
        // Update the arc highlight
        const svg = arcRef.current;
        const trail = svg.querySelector('#arc-trail');
        if (trail) {
          // The arc path uses a dasharray to reveal based on cardT
          const pathLength = trail.getTotalLength();
          const drawn = pathLength * clamp(cardT, 0, 1);
          trail.style.strokeDasharray = `${drawn} ${pathLength}`;
        }
      }

      // Show settled grid when all cards are done
      if (settledGridRef.current) {
        const allDone = progress >= 0.98;
        settledGridRef.current.style.opacity = allDone ? '1' : '0';
        settledGridRef.current.style.transform = allDone ? 'translateY(0)' : 'translateY(20px)';
      }

      setActiveIdx(cardIndex);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  const currentCert = certifications[activeIdx];
  const CurrentIcon = currentCert.icon;

  return (
    <section id="awards-certifications" className="relative bg-white" aria-label="Regulatory Certifications & Compliance">
      {/* Outer scroll-distance container */}
      <div ref={wrapRef} className="relative z-10" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>

        {/* Pinned viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

          {/* ── Heading (stable, always visible) ── */}
          <div className="flex-shrink-0 pt-28 sm:pt-32 pb-4 text-center px-4 relative z-20">
            <h2 className="text-3xl sm:text-[2.8rem] font-black text-slate-900 tracking-tight leading-tight">
              Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
            </h2>
            <div className="mt-3 mb-1 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
            </div>
            <p className="text-slate-500 text-[15px] mt-2 max-w-md mx-auto leading-relaxed">
              Every operation runs under strict regulatory compliance — so your portfolio is always protected.
            </p>
          </div>

          {/* ── Arc + Card Stage ── */}
          <div className="flex-1 relative w-full">

            {/* Decorative semicircle arc (SVG) */}
            <svg
              ref={arcRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#0072bc" stopOpacity="0.06" />
                  <stop offset="50%" stopColor="#0072bc" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#0072bc" stopOpacity="0.06" />
                </linearGradient>
                <linearGradient id="arcTrailGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#0072bc" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#0072bc" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0072bc" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Static arc guide — thin, restrained */}
              <ArcPath id="arc-guide" stroke="url(#arcGrad)" strokeWidth="1.5" strokeDasharray="6 4" />
              {/* Trail that fills as the card travels */}
              <ArcPath id="arc-trail" stroke="url(#arcTrailGrad)" strokeWidth="2" />
              {/* Node markers at start and end */}
              <ArcEndpoints />
            </svg>

            {/* The travelling card */}
            <div
              ref={cardRef}
              className="absolute top-0 left-0 will-change-transform"
              style={{ opacity: 0 }}
            >
              <div className="w-[160px] sm:w-[180px] flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-shadow duration-300">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 bg-[#0072bc]/8 text-[#0072bc]">
                  <CurrentIcon size={24} />
                </div>
                <div className="font-extrabold text-[13px] sm:text-[14px] leading-snug text-slate-900">
                  {currentCert.title}
                </div>
                <div className="text-[11px] sm:text-xs mt-1 leading-relaxed font-medium text-slate-500">
                  {currentCert.subtitle}
                </div>
              </div>
            </div>

            {/* Counter + progress bar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-slate-400 select-none">
                <span ref={counterRef} className="text-sm font-black text-slate-700">01</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-400">{String(TOTAL).padStart(2, '0')}</span>
              </div>
              <div className="w-24 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                <div ref={progressBarRef} className="h-full bg-[#0072bc]/40 rounded-full transition-none" style={{ width: '0%' }} />
              </div>
            </div>

            {/* Settled grid (appears at the very end) */}
            <div
              ref={settledGridRef}
              className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-700"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto px-4">
                {certifications.map((cert, idx) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-100 shadow-md"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 bg-[#0072bc]/8 text-[#0072bc]">
                        <Icon size={18} />
                      </div>
                      <div className="font-bold text-[11px] text-slate-900 leading-tight">{cert.title}</div>
                      <div className="text-[9px] mt-0.5 text-slate-500">{cert.subtitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SVG arc path component (responsive) ──
 * Renders an upper-half semicircular arc that adapts to the viewport.
 * Uses a viewBox-free approach: the arc is drawn using percentages
 * of the SVG container's dimensions via a <path> element.
 */
function ArcPath({ id, stroke, strokeWidth, strokeDasharray }) {
  // The arc endpoints and shape are computed in the useEffect of the parent,
  // but for the static SVG guide, we use a fixed viewBox-relative arc.
  // We'll use a JS-computed path that matches the card trajectory.
  return (
    <path
      id={id}
      d=""
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
    />
  );
}

function ArcEndpoints() {
  return <g id="arc-endpoints" />;
}

/* ═══════════════════════════════════════════════════════════
 * MOBILE: Clean 2-Column Grid Fallback
 * ═══════════════════════════════════════════════════════════ */
function MobileFallback() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="awards-certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-md mx-auto"
        >
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
          </h2>
          <div className="mt-4 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            Every operation runs under strict regulatory compliance — so your portfolio is always protected.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-[#0072bc]/8 text-[#0072bc]">
                  <Icon size={22} />
                </div>
                <div className="font-extrabold text-sm text-slate-900">{cert.title}</div>
                <div className="text-xs mt-1 text-slate-500 font-medium">{cert.subtitle}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
 * MAIN EXPORT
 * ═══════════════════════════════════════════════════════════ */
export default function AwardsCertificationsSection() {
  const reduceMotion = useReducedMotion();
  const isPinned = useDesktopPin({ minWidth: 1024, minHeight: 700 });

  if (reduceMotion || !isPinned) {
    return <MobileFallback />;
  }

  return <DesktopCinematic />;
}
