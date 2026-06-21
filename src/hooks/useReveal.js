import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

// Ports the v6 `[data-r]` scroll-reveal: fades/lifts an element in once it
// nears the viewport, then leaves it alone. Elements already on screen at
// mount reveal immediately instead of waiting on the observer.
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(REDUCED_MOTION);

  useEffect(() => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(() => setInView(true), 60);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -5% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}
