import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const format = (v, decimals) => (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-IN'));

// Ports the v6 `runC()` counter: animates 0 -> `to` once the element is in
// view, with `en-IN` grouping and an ease-out curve. Returns just the
// formatted number — callers wrap their own prefix/suffix spans so those
// can carry independent styling (e.g. a blue accent suffix). Pass
// `replayKey` to re-run the animation on demand (e.g. switching tabs) once
// it has already been revealed the first time.
export function useCounter({ to, duration = 1400, decimals = 0, replayKey } = {}) {
  const ref = useRef(null);
  const startedRef = useRef(false);
  const replayedRef = useRef(replayKey);
  const [display, setDisplay] = useState(format(0, decimals));

  const run = () => {
    if (REDUCED_MOTION) {
      setDisplay(format(to, decimals));
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setDisplay(format(to * easeOut(p), decimals));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || startedRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            run();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.55 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!startedRef.current) return;
    if (replayedRef.current === replayKey) return;
    replayedRef.current = replayKey;
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayKey]);

  return [ref, display];
}
