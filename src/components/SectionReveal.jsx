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
      initial={{ opacity: 0, y: 50, scale: 0.992 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
