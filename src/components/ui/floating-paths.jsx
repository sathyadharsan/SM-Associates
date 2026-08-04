import { motion, useReducedMotion } from 'framer-motion';

// Ambient decorative line-art background — a generated field of curved paths,
// mirrored left/right via `position` (1 / -1) so the two calls interleave
// into one continuous weave rather than two obviously-repeated halves.
// Brand blue only, not the library's original neutral slate: this site's
// other ambient motion background (WovenLightBackground, home page hero)
// keeps every decorative effect inside the single sitewide accent hue, and
// this one follows the same rule rather than introducing a second, unrelated
// grayscale decorative language.
// Opacity is capped well below the original template's (which ran a few
// paths up to fully opaque) — this sits directly behind real headline copy,
// so it needs to read as a quiet texture, not compete with the text.
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.04 + (i / 35) * 0.22,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="h-full w-full text-[#0072bc]" viewBox="0 0 696 875" preserveAspectRatio="xMidYMin slice" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Two mirrored fields layered together — the shared recipe behind the whole
// effect. Static (no animate) under prefers-reduced-motion, matching the
// convention already used by this site's other ambient backgrounds.
export default function FloatingPathsBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <FloatingPathsStatic position={1} />
        <FloatingPathsStatic position={-1} />
      </div>
    );
  }

  return (
    <>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </>
  );
}

// Reduced-motion fallback: same generated paths, rendered once with no
// animation loop.
function FloatingPathsStatic({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.04 + (i / 35) * 0.22,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="h-full w-full text-[#0072bc]" viewBox="0 0 696 875" preserveAspectRatio="xMidYMin slice" fill="none">
        {paths.map((path) => (
          <path key={path.id} d={path.d} stroke="currentColor" strokeWidth={path.width} strokeOpacity={path.opacity} />
        ))}
      </svg>
    </div>
  );
}
