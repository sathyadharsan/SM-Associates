/**
 * Scroll engine for /future.
 *
 * Ported from the approved design's own runtime. Every tracked section
 * publishes its progress as a `--p` custom property (0..1), and the
 * markup reads that variable directly inside calc() — so scroll drives
 * CSS rather than React. One rAF-throttled listener writes a single
 * property per section; no component re-renders while scrolling.
 *
 * Two progress formulas, matching the original:
 *   pinned   — travel across the section's own sticky range
 *   unpinned — the section crossing the viewport
 *
 * `data-beat` siblings inside one section cross-dissolve on a
 * trapezoidal window: each beat holds at full opacity, then hands over
 * to the next across a short overlap, so a stacked headline reads as one
 * statement replacing another rather than two fading through each other.
 */

import { useEffect, useRef, useState } from 'react';

export const CASE_STATES = [
  'RECEIVED',
  'VALIDATED',
  'CLASSIFIED',
  'SCORED',
  'CONTACTED',
  'SPOKEN TO',
  'VISITED',
  'SETTLED',
  'CLOSED',
];

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

const beatOpacity = (p, i, n, w) => {
  const t = p * n - i;
  const rise = clamp01((t + w) / w);
  return i === n - 1 ? rise : Math.min(rise, clamp01((1 - t) / w));
};

export function useFutureScroll(rootRef) {
  // Only the marker's own state is React state — it changes at most nine
  // times across the page, so it costs nothing. Everything continuous
  // stays in CSS custom properties.
  const [marker, setMarker] = useState({ index: 0, dark: false });
  const frame = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const sections = Array.from(root.querySelectorAll('[data-track]'));
    if (!sections.length) return undefined;
    const beatMap = sections.map((s) => Array.from(s.querySelectorAll('[data-beat]')));

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Reduced motion: the CSS pins every scene open, so the scroll
    // listener would only fight it. Publish the resolved state once.
    if (reduce.matches) {
      sections.forEach((s) => s.style.setProperty('--p', '0.5'));
      setMarker({ index: CASE_STATES.length - 1, dark: false });
      return undefined;
    }

    let last = -1;
    let lastDark = null;

    const update = () => {
      frame.current = 0;
      const vh = window.innerHeight;
      let active = sections[0];

      for (let i = 0; i < sections.length; i += 1) {
        const s = sections[i];
        const r = s.getBoundingClientRect();
        let p;
        if (s.hasAttribute('data-pin')) {
          const span = Math.max(1, r.height - vh);
          p = clamp01(-r.top / span);
        } else {
          p = clamp01((vh - r.top) / (vh + r.height));
        }
        s.style.setProperty('--p', p.toFixed(4));

        const beats = beatMap[i];
        if (beats.length > 1) {
          for (let b = 0; b < beats.length; b += 1) {
            beats[b].style.opacity = beatOpacity(p, b, beats.length, 0.14).toFixed(3);
          }
        }

        if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) active = s;
      }

      const index = parseInt(active.dataset.state, 10) || 0;
      const dark = active.hasAttribute('data-dark');
      if (index !== last || dark !== lastDark) {
        last = index;
        lastDark = dark;
        setMarker({ index, dark });
      }
    };

    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [rootRef]);

  return marker;
}
