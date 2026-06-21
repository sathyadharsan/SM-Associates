import { motion } from 'framer-motion';
import { tierColor } from '../../data/LocationData';

/**
 * Static, precise office marker — no continuous motion except on Chennai
 * HQ, which keeps a subtle pulse to mark it as the head office. Every
 * other marker is calm at rest; hover/active only brighten the glow and
 * scale the core dot slightly. ~25% smaller than the previous network-map
 * sizing so markers read as precise points, not "instrument" nodes.
 */
export default function LocationNode({ location, index, isHover, isActive, isRelevant, activeId, onHover, onSelect }) {
  const { x, y, tier, id } = location;
  const color = tierColor(tier);
  const isHQ = tier === 'hq';
  const r = isHQ ? 2.0 : tier === 'regional' ? 1.5 : 1.1; // ~25% smaller than prior 2.7/2.0/1.5
  const dimmed = !isRelevant;
  const emphasized = isHover || isActive;

  return (
    <g
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => { e.stopPropagation(); onSelect(id === activeId ? null : id); }}
    >
      {/* subtle pulse — Chennai HQ only */}
      {isHQ && (
        <motion.circle
          cx={x} cy={y} r={r}
          fill="none" stroke={color} strokeWidth="0.32"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      )}
      {/* static ring for non-HQ markers — precise, no motion */}
      {!isHQ && (
        <circle cx={x} cy={y} r={r * 1.3} fill="none" stroke={color} strokeWidth="0.2"
          opacity={dimmed ? 0.12 : emphasized ? 0.5 : 0.25} />
      )}
      {/* glow — brightens only on hover/active */}
      <circle cx={x} cy={y} r={r * (isHQ ? 1.9 : 1.5)} fill={color}
        opacity={dimmed ? 0.05 : emphasized ? 0.32 : isHQ ? 0.22 : 0.12}
        style={{ filter: 'blur(2px)', transition: 'opacity 0.2s' }} />
      {/* core marker dot */}
      <motion.circle
        cx={x} cy={y} r={emphasized ? r * 0.85 : r * 0.62}
        fill={color}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: dimmed ? 0.35 : 1 }}
        viewport={{ once: true }}
        animate={{ opacity: dimmed ? 0.35 : 1 }}
        transition={{ delay: index * 0.04, duration: 0.3 }}
        style={{ filter: emphasized ? `drop-shadow(0 0 2.5px ${color})` : 'none' }}
      />
      <circle cx={x} cy={y} r={3.5} fill="transparent" />
    </g>
  );
}
