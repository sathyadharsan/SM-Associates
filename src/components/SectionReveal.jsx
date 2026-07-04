import { motion, useReducedMotion } from 'framer-motion';

// Wraps a homepage section so it fades + rises + settles into place as it
// scrolls into view, instead of appearing as a static stacked block. Skips
// the motion entirely for prefers-reduced-motion, matching the rest of the
// site's reveal conventions (see homepage-v6.css .fg-r).
export default function SectionReveal({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
