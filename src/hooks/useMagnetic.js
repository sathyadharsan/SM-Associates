import { useEffect, useRef } from 'react';

const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

const lerp = (a, b, t) => a + (b - a) * t;

// Ports the v6 `[data-mag]` magnetic-button effect: the button drifts
// toward the cursor within a small pull radius and eases back when the
// cursor leaves, via a lerped rAF loop.
export function useMagnetic(pull = 80, strength = 0.36) {
  const ref = useRef(null);

  useEffect(() => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;

    let raf;
    let targetX = 0, targetY = 0, curX = 0, curY = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      targetX = dist < pull ? dx * strength * (1 - dist / pull) : 0;
      targetY = dist < pull ? dy * strength * (1 - dist / pull) : 0;
    };

    const tick = () => {
      curX = lerp(curX, targetX, 0.13);
      curY = lerp(curY, targetY, 0.13);
      el.style.transform = `translate(${curX.toFixed(1)}px,${curY.toFixed(1)}px)`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [pull, strength]);

  return ref;
}
