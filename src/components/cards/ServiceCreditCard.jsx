import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { PhoneCall, Gavel, Search, FileSearch, Warehouse, RefreshCw } from 'lucide-react';

const iconMap = { PhoneCall, Gavel, Search, FileSearch, Warehouse, RefreshCw };

// Spring shared by every stack transition — Apple-Wallet weight: enough
// overshoot to feel physical, damped enough never to wobble.
export const CARD_SPRING = { type: 'spring', stiffness: 210, damping: 26, mass: 0.9 };

/**
 * A single premium card face.
 *
 * Presentational only — the parent owns stacking order and the active index
 * and passes the resolved transform in via `pose`. Everything animated here is
 * a GPU transform (translate / scale / rotate), never a layout property, so
 * re-stacking the deck cannot trigger reflow.
 *
 * @param {object}   card      entry from data/serviceCards.js
 * @param {object}   pose      { y, scale, rotate, zIndex, opacity }
 * @param {boolean}  isActive  drives tilt-on-pointer and the stronger shadow
 * @param {Function} onSelect  called on click / Enter / Space
 * @param {number}   position  1-based index, announced to screen readers
 * @param {number}   total     deck size, announced to screen readers
 */
export default function ServiceCreditCard({ card, pose, isActive, onSelect, position, total }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const Icon = iconMap[card.icon] || Search;

  // Pointer parallax: only the active card tilts, so the cards behind it stay
  // visually calm and the eye is never pulled away from the front of the deck.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springCfg = { stiffness: 200, damping: 22 };
  const tiltX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), springCfg);
  const tiltY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), springCfg);
  // Built unconditionally — hooks must never sit behind a conditional, and the
  // node that consumes this is only mounted for the active card.
  const glare = useTransform(
    px,
    (value) =>
      `radial-gradient(42% 62% at ${28 + (value + 0.5) * 44}% 22%, ${card.sheen}, transparent 68%)`
  );

  const handlePointerMove = (event) => {
    if (!isActive || reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onSelect}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="svc-card text-left"
      aria-label={`${card.name} — card ${position} of ${total}${isActive ? ', at front of deck' : ''}. Activate to move it to the back of the deck.`}
      style={{
        background: card.surface,
        color: card.ink,
        rotateX: reduceMotion ? 0 : tiltX,
        rotateY: reduceMotion ? 0 : tiltY,
        zIndex: pose.zIndex,
      }}
      animate={{
        y: pose.y,
        scale: pose.scale,
        rotate: pose.rotate,
        opacity: pose.opacity,
        boxShadow: isActive
          ? '0 42px 80px -28px rgba(6,26,45,0.62), 0 12px 28px -14px rgba(6,26,45,0.4), inset 0 1px 0 rgba(255,255,255,0.28)'
          : '0 22px 48px -26px rgba(6,26,45,0.48), inset 0 1px 0 rgba(255,255,255,0.16)',
      }}
      transition={reduceMotion ? { duration: 0 } : CARD_SPRING}
      whileHover={reduceMotion ? undefined : { scale: pose.scale * 1.03, rotate: pose.rotate + 1 }}
      whileTap={reduceMotion ? undefined : { scale: pose.scale * 0.99 }}
    >
      {/* Texture stack — grain, brushed banding, engraved contours, gloss. */}
      <span className="svc-card__grain" aria-hidden="true" />
      <span className="svc-card__brush" aria-hidden="true" />
      <span className="svc-card__contour" aria-hidden="true" style={{ color: card.ink }} />
      <span className="svc-card__gloss" aria-hidden="true" style={{ '--sheen': card.sheen }} />

      {/* Pointer-tracked glare, active card only. */}
      {isActive && !reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: glare }}
        />
      )}

      <span className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        {/* Brand row */}
        <span className="flex items-start justify-between gap-4">
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: 'rgba(255,255,255,0.14)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)' }}
            >
              <Icon size={16} strokeWidth={2.1} />
            </span>
            <span className="leading-tight">
              <span className="block text-[12.5px] font-bold tracking-tight">SM Associates</span>
              <span className="block text-[9px] font-mono uppercase tracking-[0.18em]" style={{ color: card.inkSoft }}>
                Risk Management
              </span>
            </span>
          </span>
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[8.5px] font-mono font-bold uppercase tracking-[0.16em]"
            style={{ color: card.inkSoft, boxShadow: 'inset 0 0 0 1px currentColor' }}
          >
            {card.finish}
          </span>
        </span>

        {/* Chip + contactless */}
        <span className="flex items-center gap-4">
          <span className="svc-chip" style={{ background: card.chip }} aria-hidden="true" />
          <span className="svc-wave flex flex-col items-start" aria-hidden="true">
            <span /><span /><span />
          </span>
        </span>

        {/* Masked reference line — deliberately not a plausible card number:
            this is a service card, not a payment instrument. */}
        <span className="font-mono text-[15px] sm:text-[17px] font-semibold tracking-[0.18em]">
          •••• •••• •••• 2000
        </span>

        {/* Footer */}
        <span className="flex items-end justify-between gap-4">
          <span className="min-w-0">
            <span className="block text-[8.5px] font-mono uppercase tracking-[0.18em]" style={{ color: card.inkSoft }}>
              Service Division
            </span>
            <span className="mt-0.5 block truncate text-[13px] sm:text-sm font-bold tracking-tight">
              {card.name}
            </span>
          </span>
          <span className="shrink-0 text-right">
            <span className="block text-[8.5px] font-mono uppercase tracking-[0.18em]" style={{ color: card.inkSoft }}>
              Since
            </span>
            <span className="block font-mono text-[13px] font-bold">2000</span>
          </span>
        </span>
      </span>
    </motion.button>
  );
}
