import { AnimatePresence, motion } from 'framer-motion';
import { locations as allLocations, tierColor, tierLabel, MAP_MODES } from '../../data/LocationData';

// Padding (in the map image's 0-100 percent space) kept around the fitted
// set of markers when auto-zooming — keeps pins off the very edge.
const FIT_PAD = 6;

/* Map-pin marker — teardrop shape with the anchor at its bottom tip
   (drawn at local origin), gradient fill by tier color, white core dot,
   soft drop shadow + ground shadow ellipse. Replaces the old dot+ring
   style with a standard "pin drop" look. */
function Pin({ loc, isHover, isActive, isRelevant, index, onHover, onSelect, activeId }) {
  const color = tierColor(loc.tier);
  const isHQ = loc.tier === 'hq';
  const dimmed = !isRelevant;
  const emphasized = isHover || isActive;
  const baseScale = isHQ ? 1.3 : 1;
  const liveScale = emphasized ? baseScale * 1.18 : baseScale;
  const gradId = `pin-grad-${loc.id}`;

  return (
    <motion.g
      style={{ cursor: 'pointer' }}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: dimmed ? 0.35 : 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.06, type: 'spring', stiffness: 240, damping: 18 }}
      onMouseEnter={() => onHover(loc.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => { e.stopPropagation(); onSelect(loc.id === activeId ? null : loc.id); }}
    >
      <g
        transform={`translate(${loc.x} ${loc.y}) scale(${liveScale})`}
        style={{ transition: 'transform .28s cubic-bezier(0.22,1,0.36,1)', opacity: dimmed ? 0.4 : 1 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.74" />
          </linearGradient>
        </defs>

        <ellipse cx="0" cy="0.2" rx={isHQ ? 1.3 : 1.0} ry="0.38" fill="rgba(15,23,42,0.25)" style={{ filter: 'blur(1px)' }} />

        {isHQ && (
          <motion.circle
            cx="0" cy="-2.55" r="0.6"
            fill="none" stroke={color} strokeWidth="0.16"
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          />
        )}

        <path
          d="M0,0 C-1.05,-1.55 -1.35,-1.95 -1.35,-2.55 A1.35,1.35 0 1 1 1.35,-2.55 C1.35,-1.95 1.05,-1.55 0,0 Z"
          fill={`url(#${gradId})`}
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="0.12"
          style={{ filter: emphasized ? 'drop-shadow(0 0.6px 1.6px rgba(15,23,42,0.5))' : 'drop-shadow(0 0.4px 1px rgba(15,23,42,0.32))' }}
        />
        <circle cx="0" cy="-2.55" r={isHQ ? 0.55 : 0.42} fill="#fff" />

        <circle cx="0" cy="-1.3" r={isHQ ? 2.2 : 1.8} fill="transparent" />
      </g>
    </motion.g>
  );
}

export default function IndiaCoverageMap({
  activeMode,
  activeId,
  hoverId,
  onHover,
  onSelect,
  locations = allLocations,
}) {
  const accent = MAP_MODES.find((m) => m.id === activeMode)?.color ?? '#3FA9FF';
  const hoverLocation = locations.find((l) => l.id === hoverId);

  const mapLocations = locations.filter((l) => !l.northOffice && l.x >= 0 && l.y >= 0);
  const northLocations = locations.filter((l) => l.northOffice);

  // Auto-fit zoom: compute a uniform (non-distorting) scale + center so the
  // markers actually in scope fill the frame, instead of a fixed 0-100
  // viewBox that leaves the crop wherever the base image happens to sit.
  const xs = mapLocations.map((l) => l.x);
  const ys = mapLocations.map((l) => l.y);
  const minX = Math.min(...xs) - FIT_PAD;
  const maxX = Math.max(...xs) + FIT_PAD;
  const minY = Math.min(...ys) - FIT_PAD;
  const maxY = Math.max(...ys) + FIT_PAD;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const fitScale = 100 / Math.max(maxX - minX, maxY - minY, 40); // never zoom past a sane floor
  // screen-space position (0-100%) for any raw map coordinate, matching the
  // CSS transform applied to the image+pin layer below.
  const toScreen = (v, c) => 50 + fitScale * (v - c);

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border"
      style={{
        background: 'linear-gradient(160deg, #f7f8fc 0%, #fbfcff 50%, #ffffff 100%)',
        borderColor: 'rgba(200,164,93,0.22)',
      }}
      onClick={() => onSelect(null)}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-[28px]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.6,
        }}
      />

      <div className="relative w-full" style={{ aspectRatio: '1 / 1', maxHeight: 600, overflow: 'hidden' }}>
        {/* Zoomed layer — image + pins scaled/panned together so they never drift apart */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${(50 - cx) * fitScale}%, ${(50 - cy) * fitScale}%) scale(${fitScale})`,
            transformOrigin: 'center',
          }}
        >
          <img
            src="/images/south_india_coverage_map.png"
            alt="SM Associates South India Coverage Map"
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
            style={{ objectFit: 'contain', objectPosition: 'center', opacity: 0.95 }}
            draggable={false}
          />
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full"
            style={{ overflow: 'visible' }}
          >
            {mapLocations.map((l, i) => (
              <Pin
                key={l.id}
                loc={l}
                index={i}
                isHover={hoverId === l.id}
                isActive={activeId === l.id}
                isRelevant={l.modes.includes(activeMode)}
                onHover={onHover}
                onSelect={onSelect}
                activeId={activeId}
              />
            ))}
          </svg>
        </div>

        {/* City name labels — outside the zoomed layer so text stays crisp and legible.
            HQ gets extra vertical clearance since its pin is bigger and carries a
            pulsing ring, which otherwise crowds right into the label underneath. */}
        {mapLocations.map((l, i) => (
          <motion.div
            key={`lbl-${l.id}`}
            className="absolute pointer-events-none z-10"
            style={{
              left: `${toScreen(l.x, cx)}%`,
              top: `${toScreen(l.y, cy)}%`,
              transform: `translate(-50%, ${l.tier === 'hq' ? 22 : 17}px)`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: l.modes.includes(activeMode) ? 1 : 0.25 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.05 }}
          >
            <span
              className="whitespace-nowrap rounded-md px-1 py-0.5 text-[8.5px] font-bold leading-tight"
              style={{
                color: l.tier === 'hq' ? '#8a6412' : '#1e3a8a',
                background: l.tier === 'hq' ? 'rgba(254,243,199,0.96)' : 'rgba(219,234,254,0.94)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 1px 5px rgba(0,0,0,0.12)',
              }}
            >
              {l.name}
            </span>
          </motion.div>
        ))}

        {/* Hover tooltip — pointer arrow + fixed size so it never gets swallowed by a neighboring pin */}
        <AnimatePresence>
          {hoverLocation && !hoverLocation.northOffice && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="pointer-events-none absolute z-40 whitespace-nowrap rounded-xl border px-3 py-1.5 text-[11px] font-semibold text-gray-800 shadow-xl"
              style={{
                left: `${toScreen(hoverLocation.x, cx)}%`,
                top: `${toScreen(hoverLocation.y, cy)}%`,
                transform: 'translate(-50%, -220%)',
                background: 'rgba(255,255,255,0.98)',
                borderColor: 'rgba(37,99,235,0.22)',
              }}
            >
              {hoverLocation.tier === 'hq' ? '★ ' : '● '}
              {hoverLocation.name}
              <span className="ml-1.5 text-gray-400 font-normal">
                · {tierLabel(hoverLocation.tier)}
              </span>
              <span
                className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r"
                style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'rgba(37,99,235,0.22)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {northLocations.length > 0 && (
          <div
            className="absolute top-3 left-3 z-20 rounded-xl border px-3 py-2 text-[10px] font-semibold shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.93)',
              borderColor: 'rgba(37,99,235,0.18)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div className="text-blue-700 font-bold mb-1 flex items-center gap-1.5">
              <span>🗺️</span> Pan-India Reach
            </div>
            <div className="text-gray-500 text-[9px] space-y-0.5">
              {northLocations.map((l) => (
                <div key={l.id} className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 inline-block" />
                  {l.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="relative flex flex-wrap items-center justify-center gap-5 border-t px-5 py-3.5 text-[11.5px] font-semibold text-gray-500" style={{ borderColor: 'rgba(200,164,93,0.18)' }}>
        <span className="inline-flex items-center gap-2 font-bold text-gray-700">
          <span className="h-3.5 w-3.5 rounded-full border-[2.5px] bg-white" style={{ borderColor: '#D4AF37' }} />
          Chennai HQ
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: '#5FB6FF' }} />
          Regional Office
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: '#3FA9FF' }} />
          Branch Location
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3.5 rounded-sm" style={{ background: '#2563EB' }} />
          Operational States
        </span>
      </div>
    </div>
  );
}
