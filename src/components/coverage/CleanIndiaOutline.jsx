import { motion } from 'framer-motion';
import { INDIA_OUTLINE_PATH, INDIA_PATH_TRANSFORM } from '../../data/LocationData';

/**
 * India silhouette for the light command-center theme — a soft tinted
 * fill plus a crisp accent line on top. Real state-boundary data isn't
 * part of this dataset, so "highlight operational states" is approximated
 * with the per-mode accent color tinting the whole silhouette instead of
 * per-state geometry.
 */
export default function CleanIndiaOutline({ accentColor }) {
  return (
    <>
      <motion.path
        d={INDIA_OUTLINE_PATH} transform={INDIA_PATH_TRANSFORM}
        fill={`${accentColor}14`} stroke="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ vectorEffect: 'non-scaling-stroke' }}
      />
      <motion.path
        d={INDIA_OUTLINE_PATH} transform={INDIA_PATH_TRANSFORM}
        fill="none" stroke={accentColor} strokeWidth="0.55"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        style={{ vectorEffect: 'non-scaling-stroke' }}
      />
    </>
  );
}
