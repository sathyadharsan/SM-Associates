import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export function useCountUp({ value = 0, duration = 1600, startWhen = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 28, stiffness: 120 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView || !startWhen) return;

    const unsubscribe = rounded.on('change', latest => {
      setDisplay(Math.floor(latest).toLocaleString('en-IN'));
    });

    const timer = setTimeout(() => rounded.set(value), 80);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, [isInView, rounded, startWhen, value]);

  return [ref, display];
}
