import { AnimatePresence, motion } from 'framer-motion';
import { locations as allLocations, tierColor, tierLabel, MAP_VIEWPORT, MAP_MODES } from '../../data/LocationData';

/**
 * India Coverage Map — Gemini AI 1024×1024 square map image as base.
 * Both <img> and <svg> share IDENTICAL CSS:
 *   position: absolute, inset: 0, width: 100%, height: 100%
 *   object-fit: contain / preserveAspectRatio="xMidYMid meet"
 * Since both are square (1:1), they letterbox identically — perfect alignment.
 *
 * Location x,y = image percentages calibrated to the 1024×1024 map:
 *   x = 8  + ((lon − 68) / 29) × 80
 *   y = 4  + ((37 − lat) / 29) × 92
 */
export default function IndiaCoverageMap({
  activeMode,
  activeId,
  hoverId,
  onHover,
  onSelect,
  locations = allLocations,
  viewport = MAP_VIEWPORT,
}) {
  const accent = MAP_MODES.find((m) => m.id === activeMode)?.color ?? '#3FA9FF';
  const hoverLocation = locations.find((l) => l.id === hoverId);

  // x,y are already 0-100 image percentages → pass directly as SVG coords
  const svgX = (x) => x;
  const svgY = (y) => y;

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border"
      style={{
        background: 'linear-gradient(160deg, #e8f0fe 0%, #ffffff 60%)',
        borderColor: 'rgba(37,99,235,0.15)',
      }}
      onClick={() => onSelect(null)}
    >
      {/* Faint dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[28px]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          opacity: 0.55,
        }}
      />

      {/* ── Map area — square aspect ratio so image + SVG letterbox identically ── */}
      <div
        className="relative w-full"
        style={{ aspectRatio: '1 / 1', maxHeight: 560, overflow: 'hidden' }}
      >
        {/* India Map Image: 1024×1024 square, object-contain */}
        <img
          src="/images/india_map_south_highlighted.png"
          alt="India Office Coverage Map"
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center', opacity: 0.93 }}
          draggable={false}
        />

        {/*
         * SVG overlay: viewBox "0 0 100 100" (square) + xMidYMid meet.
         * Because both image and SVG are 1:1 square, they scale identically
         * inside any container → dots land precisely on cities.
         */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {locations.map((l, i) => {
            const color = tierColor(l.tier);
            const isHQ = l.tier === 'hq';
            const isRelevant = l.modes.includes(activeMode);
            const isHover = hoverId === l.id;
            const isActive = activeId === l.id;
            const dimmed = !isRelevant;
            const emphasized = isHover || isActive;
            const cx = svgX(l.x);
            const cy = svgY(l.y);

            // Small crisp dots: white fill + colored ring, as requested
            const dotR   = isHQ ? 1.4 : 0.9;   // core white dot radius
            const ringR  = isHQ ? 2.2 : 1.5;   // colored ring radius
            const glowR  = isHQ ? 3.5 : 2.4;   // soft glow behind

            return (
              <g
                key={l.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => onHover(l.id)}
                onMouseLeave={() => onHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(l.id === activeId ? null : l.id);
                }}
              >
                {/* Soft glow */}
                <circle
                  cx={cx} cy={cy} r={glowR}
                  fill={color}
                  opacity={dimmed ? 0.04 : emphasized ? 0.3 : isHQ ? 0.22 : 0.14}
                  style={{ filter: 'blur(2.5px)', transition: 'opacity 0.25s' }}
                />

                {/* HQ: animated pulse rings */}
                {isHQ && (
                  <>
                    <motion.circle
                      cx={cx} cy={cy} r={ringR}
                      fill="none" stroke={color} strokeWidth="0.55"
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                    <motion.circle
                      cx={cx} cy={cy} r={ringR}
                      fill="none" stroke={color} strokeWidth="0.45"
                      initial={{ scale: 1, opacity: 0.45 }}
                      animate={{ scale: [1, 2.2], opacity: [0.45, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                  </>
                )}

                {/* Colored ring (all locations) */}
                <motion.circle
                  cx={cx} cy={cy}
                  r={emphasized ? ringR * 1.15 : ringR}
                  fill="none"
                  stroke={color}
                  strokeWidth={isHQ ? '0.7' : '0.55'}
                  opacity={dimmed ? 0.22 : 1}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: dimmed ? 0.22 : 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, type: 'spring', stiffness: 200 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />

                {/* WHITE core dot — small and crisp */}
                <motion.circle
                  cx={cx} cy={cy}
                  r={emphasized ? dotR * 1.2 : dotR}
                  fill="white"
                  stroke={color}
                  strokeWidth="0.3"
                  opacity={dimmed ? 0.5 : 1}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: dimmed ? 0.5 : 1 }}
                  transition={{ delay: 0.2 + i * 0.06, type: 'spring', stiffness: 250 }}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    filter: emphasized ? `drop-shadow(0 0 2px ${color})` : 'none',
                  }}
                />

                {/* Transparent larger hit area */}
                <circle cx={cx} cy={cy} r={5} fill="transparent" />
              </g>
            );
          })}
        </svg>

        {/* City name labels */}
        {locations.map((l, i) => (
          <motion.div
            key={`lbl-${l.id}`}
            className="absolute pointer-events-none z-10"
            style={{
              left: `${svgX(l.x)}%`,
              top: `${svgY(l.y)}%`,
              transform: 'translate(-50%, 9px)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: l.modes.includes(activeMode) ? 1 : 0.2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.04 }}
          >
            <span
              className="whitespace-nowrap rounded-sm px-1 py-0 text-[8.5px] font-bold leading-tight"
              style={{
                color: l.tier === 'hq' ? '#92400e' : '#1e3a8a',
                background: l.tier === 'hq' ? 'rgba(254,243,199,0.92)' : 'rgba(219,234,254,0.9)',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              {l.name}
            </span>
          </motion.div>
        ))}

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoverLocation && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="pointer-events-none absolute z-30 whitespace-nowrap rounded-xl border px-3 py-1.5 text-[11px] font-semibold text-gray-800 shadow-xl"
              style={{
                left: `${svgX(hoverLocation.x)}%`,
                top: `${svgY(hoverLocation.y)}%`,
                transform: 'translate(-50%, -145%)',
                background: 'rgba(255,255,255,0.97)',
                borderColor: 'rgba(37,99,235,0.2)',
              }}
            >
              {hoverLocation.tier === 'hq' ? '★ ' : '● '}
              {hoverLocation.name}
              <span className="ml-1.5 text-gray-400 font-normal">
                · {tierLabel(hoverLocation.tier)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="relative px-5 py-3 flex flex-wrap items-center justify-center gap-4 text-[10px] font-semibold text-gray-500 border-t border-blue-50/80">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center h-3 w-3 rounded-full border-2" style={{ borderColor: '#D4AF37', background: 'white' }} />
          Chennai HQ
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center h-3 w-3 rounded-full border-2" style={{ borderColor: '#5FB6FF', background: 'white' }} />
          Regional Office
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center h-3 w-3 rounded-full border-2" style={{ borderColor: '#3FA9FF', background: 'white' }} />
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
