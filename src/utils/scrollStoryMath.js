/**
 * Shared scroll-progress math for pinned "scroll story" sections — used by
 * ServiceStorySection, TechnologyStorySection and ComplianceStorySection so
 * all three chapter-by-chapter pinned experiences behave identically and
 * share one verified formula instead of three copies drifting apart.
 *
 * Per-chapter visibility envelope, in that chapter's own local scroll
 * coordinate (localT = raw - chapterIndex, where raw = scrollProgress * TOTAL):
 *
 *   localT:  -0.3        0         0.7        1.0
 *            |--arrives--|---holds---|--exits--|
 *
 * A chapter starts arriving (sliding in + fading in) 0.3 chapters "early",
 * during the tail of the PREVIOUS chapter's own exit window — the two
 * windows are constructed to line up exactly so outgoing + incoming opacity
 * always sum to 1 (verified by exhaustive sweep: no double-blackout, no
 * double-bright overlap, at any scroll position). The last chapter never
 * exits (nothing to hand off to), so it holds at full opacity to the end.
 */

import { useEffect, useState } from 'react';

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/**
 * Whether the viewport is both wide AND tall enough to safely pin a section
 * full-screen. Width alone (a plain Tailwind `lg:` breakpoint) isn't
 * sufficient — a common 1366×768-class laptop is "desktop width" but its
 * actual browser viewport (~650-700px after chrome) can be too short for a
 * pinned section's content, which overflows a fixed h-screen box and clips
 * behind the site's fixed header. Same min-height convention already used
 * for the homepage cinematic (see animation/homeCinematic.js's matchMedia
 * gates) — short-but-wide viewports fall back to normal (non-pinned) flow.
 */
export function useDesktopPin({ minWidth = 1024, minHeight = 820 } = {}) {
  const query = `(min-width: ${minWidth}px) and (min-height: ${minHeight}px)`;
  const [isPinned, setIsPinned] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsPinned(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return isPinned;
}

// Robert Penner's ease-out-back — overshoots past 1 then settles, giving the
// "flies in and snaps into place" feel instead of a flat linear/eased slide.
export function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

// Real cubic-bezier evaluator (implicit P0=(0,0), P3=(1,1)) — the standard
// Newton-Raphson + bisection algorithm used by browsers' own CSS easing and
// the bezier-easing npm package. Lets JS-driven scroll animations use the
// exact same easing curve as this site's CSS/Framer Motion transitions
// (ease: [0.16, 1, 0.3, 1] appears throughout) instead of an approximation.
export function cubicBezier(x1, y1, x2, y2) {
  const NEWTON_ITERATIONS = 4;
  const NEWTON_MIN_SLOPE = 0.001;
  const SUBDIVISION_PRECISION = 0.0000001;
  const SUBDIVISION_MAX_ITERATIONS = 10;
  const SPLINE_TABLE_SIZE = 11;
  const SAMPLE_STEP = 1.0 / (SPLINE_TABLE_SIZE - 1);

  const A = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;
  const B = (a1, a2) => 3.0 * a2 - 6.0 * a1;
  const C = (a1) => 3.0 * a1;
  const calcBezier = (t, a1, a2) => ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
  const getSlope = (t, a1, a2) => 3.0 * A(a1, a2) * t * t + 2.0 * B(a1, a2) * t + C(a1);

  const sampleValues = new Float32Array(SPLINE_TABLE_SIZE);
  for (let i = 0; i < SPLINE_TABLE_SIZE; ++i) sampleValues[i] = calcBezier(i * SAMPLE_STEP, x1, x2);

  function binarySubdivide(x, a, b) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = a + (b - a) / 2.0;
      currentX = calcBezier(currentT, x1, x2) - x;
      if (currentX > 0.0) b = currentT; else a = currentT;
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate(x, guessT) {
    let t = guessT;
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(t, x1, x2);
      if (currentSlope === 0.0) return t;
      t -= (calcBezier(t, x1, x2) - x) / currentSlope;
    }
    return t;
  }

  function getTForX(x) {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = SPLINE_TABLE_SIZE - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= x; ++currentSample) {
      intervalStart += SAMPLE_STEP;
    }
    --currentSample;
    const dist = (x - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * SAMPLE_STEP;
    const initialSlope = getSlope(guessForT, x1, x2);
    if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(x, guessForT);
    if (initialSlope === 0.0) return guessForT;
    return binarySubdivide(x, intervalStart, intervalStart + SAMPLE_STEP);
  }

  return function easing(x) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return calcBezier(getTForX(x), y1, y2);
  };
}

// The site's signature "premium" ease, as a JS function instead of a CSS
// string — same curve used across all the Framer Motion variants.
export const easeApple = cubicBezier(0.16, 1, 0.3, 1);

export const PRE = 0.3;
export const HOLD_END = 0.7;

// entrance: 1 = fully off-stage/not-arrived, 0 = settled (incoming chapter).
// exit: 0 = still in the hold, 1 = fully handed off (outgoing chapter).
// The two never overlap for a given chapter — entrance only moves during
// [-PRE, 0), exit only moves during (HOLD_END, 1] — so a caller can always
// add both into one transform without them fighting each other.
export function imageState(raw, index, isLast) {
  const t = raw - index;

  // Physical Evidence Module Choreography:
  // Text leads (t < 0.18): user reads and understands the idea first.
  // Image follows (t = 0.18 -> 0.42): approaches, aligns with display frame, softly docks.
  // Hold & Verify (t = 0.42 -> 0.78): locked as solid physical evidence.
  // Detach & Exit (t = 0.78 -> 1.05): previous image detaches and travels away.
  const IN_START = 0.18;
  const DOCK_TIME = 0.42;
  const EXIT_START = 0.78;
  const EXIT_END = 1.05;

  if (t < IN_START) {
    return { opacity: 0, entrance: 1, exit: 0, docked: false };
  }
  if (t < DOCK_TIME) {
    const p = (t - IN_START) / (DOCK_TIME - IN_START);
    const eased = easeApple(p);
    return { opacity: eased, entrance: 1 - eased, exit: 0, docked: false };
  }
  if (t <= EXIT_START || isLast) {
    return { opacity: 1, entrance: 0, exit: 0, docked: true };
  }
  if (t <= EXIT_END) {
    const p = (t - EXIT_START) / (EXIT_END - EXIT_START);
    return { opacity: 1 - p, entrance: 0, exit: p, docked: false };
  }
  return { opacity: 0, entrance: 0, exit: 1, docked: false };
}

export function textState(raw, index, isLast) {
  const t = raw - index;
  const IN_START = -0.08;
  const IN_END = 0.02;
  const OUT_START = 0.98;
  const OUT_END = 1.08;

  if (t < IN_START) {
    return { opacity: 0, reveal: 0 };
  }
  if (t < IN_END) {
    const p = (t - IN_START) / (IN_END - IN_START);
    return { opacity: p, reveal: p };
  }
  if (t <= OUT_START || isLast) {
    return { opacity: 1, reveal: 1 };
  }
  if (t <= OUT_END) {
    const p = (t - OUT_START) / (OUT_END - OUT_START);
    return { opacity: 1 - p, reveal: 1 + p * 0.5 };
  }
  return { opacity: 0, reveal: 1.5 };
}

// Word-by-word sweep — ensures words remain 100% crisp solid text.
export function wordOpacity(raw, index, wordIndex, wordCount) {
  return 1;
}

const DIM_OPACITY = 0.75;

// Simpler variant for a single continuous passage (e.g. several manifesto
// lines sitting on screen together, no per-chapter cross-fade): one cursor
// sweeps once across every word in the whole passage, in reading order.
export function sweepOpacity(cursor, wordIndex) {
  return DIM_OPACITY + (1 - DIM_OPACITY) * clamp(cursor - wordIndex, 0, 1);
}

/**
 * Wires a single continuous word-sweep to a wrapper ref + a flat array of
 * word elements (reading order). Unlike mountScrollStory this has no
 * chapters — one pass through the whole wrap's scroll distance lights up
 * every word from first to last. Desktop-only + reduced-motion-gated the
 * same way as mountScrollStory; callers render a static fallback instead of
 * calling this under prefers-reduced-motion.
 */
export function mountWordSweep({ wrapRef, wordRefs, minWidthPx = 1024, onProgress }) {
  const wrap = wrapRef.current;
  if (!wrap) return () => {};
  const mq = window.matchMedia(`(min-width: ${minWidthPx}px)`);

  let ticking = false;
  const update = () => {
    if (!mq.matches) return;
    const rect = wrap.getBoundingClientRect();
    const travel = wrap.offsetHeight - window.innerHeight;
    const progress = clamp(-rect.top / (travel || 1), 0, 1);
    const words = wordRefs.current;
    const cursor = progress * words.length * 1.25;

    words.forEach((el, i) => {
      if (!el) return;
      const local = clamp(cursor - i, 0, 1);
      const p = easeApple(local);

      if (p >= 0.92) {
        // READ (BOLD STATE): Solid dark typography
        el.style.WebkitTextFillColor = '#0f172a';
        el.style.WebkitTextStroke = '0px transparent';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px) scale(1)';
      } else if (p <= 0.05) {
        // PRE-READ STATE: Outlined text
        el.style.WebkitTextFillColor = 'transparent';
        el.style.WebkitTextStroke = '1.5px #475569';
        el.style.opacity = '0.5';
        el.style.transform = 'translateY(6px) scale(0.98)';
      } else {
        // MORPHING STATE: Outline fills into solid bold text
        const strokeW = (1.5 * (1 - p)).toFixed(2);
        const opacity = (0.5 + 0.5 * p).toFixed(2);
        const fillAlpha = Math.pow(p, 1.2).toFixed(2);

        el.style.WebkitTextFillColor = `rgba(15, 23, 42, ${fillAlpha})`;
        el.style.WebkitTextStroke = `${strokeW}px rgba(71, 85, 105, ${(1 - p).toFixed(2)})`;
        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${((1 - p) * 6).toFixed(1)}px) scale(${(0.98 + 0.02 * p).toFixed(3)})`;
      }
    });

    if (onProgress) onProgress({ progress });
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
}

/**
 * Wires the shared scroll-progress engine to a wrapper ref + per-chapter
 * image/text refs, and (optionally) per-chapter word refs for the
 * word-sweep text reveal. Returns a cleanup function. Desktop-only (matches
 * `minWidthPx`) and skipped entirely under prefers-reduced-motion — callers
 * are expected to render a static fallback in that case instead of mounting
 * this at all.
 */
// Default card visual recipe — the "flying card" look (slide in from the
// side, ease-out-back overshoot, drift away on exit). Sections that want a
// different composition (diagonal clip, scale-in, full-bleed zoom, etc.)
// pass their own `applyCardStyle(el, state)` to mountScrollStory instead of
// relying on this one; the underlying opacity/entrance/exit timing is
// identical either way, only how it's expressed visually differs.
function defaultCardStyle(el, { opacity, entrance, exit }) {
  const settle = easeOutBack(1 - entrance); // overshoots past 1 briefly, then settles at 1
  const slideIn = (1 - settle) * 84;
  const rotateIn = (1 - settle) * -14;
  const slideOut = exit * -60;
  const scale = 1 - (1 - settle) * 0.06 - exit * 0.05;
  el.style.opacity = String(opacity);
  el.style.transform = `translateX(${slideIn + slideOut}px) scale(${scale}) rotateY(${rotateIn}deg)`;
}

export function mountScrollStory({ wrapRef, cardRefs, textRefs, wordRefs, total, minWidthPx = 1024, onProgress, applyCardStyle }) {
  const wrap = wrapRef.current;
  if (!wrap) return () => {};
  const mq = window.matchMedia(`(min-width: ${minWidthPx}px)`);
  const styleCard = applyCardStyle || defaultCardStyle;

  let ticking = false;
  const update = () => {
    if (!mq.matches) return;
    const rect = wrap.getBoundingClientRect();
    const travel = wrap.offsetHeight - window.innerHeight;
    const progress = clamp(-rect.top / (travel || 1), 0, 1);
    const raw = progress * total;

    const activeIndex = clamp(Math.floor(raw), 0, total - 1);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const state = imageState(raw, i, i === total - 1);
      styleCard(el, { ...state, index: i, raw, isActive: i === activeIndex });
      el.setAttribute('aria-hidden', i === activeIndex ? 'false' : 'true');
    });

    textRefs.current.forEach((el, i) => {
      if (!el) return;
      const { opacity, reveal } = textState(raw, i, i === total - 1);
      const ty = Math.round((1 - reveal) * 16);
      el.style.opacity = opacity <= 0.01 ? '0' : String(opacity.toFixed(3));
      el.style.transform = `translateY(${ty}px) translateZ(0)`;
      el.style.filter = 'none';
      el.style.webkitFilter = 'none';
      el.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      el.setAttribute('aria-hidden', i === activeIndex ? 'false' : 'true');
    });

    if (wordRefs) {
      wordRefs.current.forEach((words) => {
        if (!words) return;
        words.forEach((wordEl) => {
          if (!wordEl) return;
          wordEl.style.opacity = '1';
          wordEl.style.filter = 'none';
        });
      });
    }

    if (onProgress) onProgress({ progress, raw, activeIndex });
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
}

/**
 * Subtle pointer-follow tilt on whichever chapter is currently active —
 * applied to a small nested wrapper (not the same element the scroll engine
 * transforms) so the two transforms compose via normal CSS nesting instead
 * of needing to be merged into one string.
 */
export function attachPointerTilt({ stageRef, tiltRefs, activeIndexRef, maxTilt = 7 }) {
  const stage = stageRef.current;
  if (!stage) return () => {};

  const onMove = (event) => {
    const rect = stage.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const el = tiltRefs.current[activeIndexRef.current];
    if (el) el.style.transform = `rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    tiltRefs.current.forEach((el) => { if (el) el.style.transform = 'rotateX(0deg) rotateY(0deg)'; });
  };

  stage.addEventListener('mousemove', onMove);
  stage.addEventListener('mouseleave', onLeave);
  return () => {
    stage.removeEventListener('mousemove', onMove);
    stage.removeEventListener('mouseleave', onLeave);
  };
}
