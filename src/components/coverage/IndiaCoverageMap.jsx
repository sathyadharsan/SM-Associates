import { AnimatePresence, motion } from 'framer-motion';
import { locations as allLocations, tierColor, tierLabel, MAP_VIEWPORT, MAP_MODES } from '../../data/LocationData';

/**
 * South India Coverage Map — Gemini AI generated 1024×1024 square map.
 * Shows all SM Associates South India offices with precise white dot markers.
 * North India offices (Pune, Ahmedabad, Jaipur, Lucknow) are flagged northOffice:true
 * and shown only in the legend panel, not as map dots.
 *
 * Coordinate system (x,y = 0-100 image percentages):
 *   x = 10 + ((lon − 72) / 13) × 82   [72°E–85°E]
 *   y = 5  + ((20 − lat) / 12) × 90   [20°N–8°N, Y inverted]
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

  // Only show locations that have valid map coordinates (South India)
  const mapLocations = locations.filter((l) => !l.northOffice && l.x >= 0 && l.y >= 0);
  const northLocations = locations.filter((l) => l.northOffice);

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border"
      style={{
        background: 'linear-gradient(160deg, #dbeafe 0%, #f8fbff 50%, #ffffff 100%)',
        borderColor: 'rgba(37,99,235,0.15)',
      }}
      onClick={() => onSelect(null)}
    >
      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[28px]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.6,
        }}
      />

      {/* ── Map area — 1:1 square aspect matches the 1024×1024 image ── */}
      <div
        className="relative w-full"
        style={{ aspectRatio: '1 / 1', maxHeight: 600, overflow: 'hidden' }}
      >
        {/* South India map image */}
        <img
          src="/images/south_india_coverage_map.png"
          alt="SM Associates South India Coverage Map"
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center', opacity: 0.95 }}
          draggable={false}
        />

        {/*
         * SVG overlay: viewBox "0 0 100 100" (square) + xMidYMid meet.
         * Both image and SVG are 1:1 → identical letterboxing → perfect alignment.
         */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {mapLocations.map((l, i) => {
            const color = tierColor(l.tier);
            const isHQ = l.tier === 'hq';
            const isRelevant = l.modes.includes(activeMode);
            const isHover = hoverId === l.id;
            const isActive = activeId === l.id;
            const dimmed = !isRelevant;
            const emphasized = isHover || isActive;

            // Small white dot + colored ring (as requested)
            const dotR  = isHQ ? 1.5 : 0.95;
            const ringR = isHQ ? 2.4 : 1.65;
            const glowR = isHQ ? 4.0  : 2.8;

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
                {/* Soft glow behind */}
                <circle
                  cx={l.x} cy={l.y} r={glowR}
                  fill={color}
                  opacity={dimmed ? 0.04 : emphasized ? 0.32 : isHQ ? 0.2 : 0.12}
                  style={{ filter: 'blur(3px)', transition: 'opacity 0.25s' }}
                />

                {/* HQ: animated pulse rings */}
                {isHQ && (
                  <>
                    <motion.circle
                      cx={l.x} cy={l.y} r={ringR}
                      fill="none" stroke={color} strokeWidth="0.55"
                      initial={{ scale: 1, opacity: 0.75 }}
                      animate={{ scale: [1, 3.5], opacity: [0.75, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                      style={{ transformOrigin: `${l.x}px ${l.y}px` }}
                    />
                    <motion.circle
                      cx={l.x} cy={l.y} r={ringR}
                      fill="none" stroke={color} strokeWidth="0.45"
                      initial={{ scale: 1, opacity: 0.45 }}
                      animate={{ scale: [1, 2.3], opacity: [0.45, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.85 }}
                      style={{ transformOrigin: `${l.x}px ${l.y}px` }}
                    />
                  </>
                )}

                {/* Colored outer ring — all locations */}
                <motion.circle
                  cx={l.x} cy={l.y}
                  r={emphasized ? ringR * 1.18 : ringR}
                  fill="none"
                  stroke={color}
                  strokeWidth={isHQ ? '0.75' : '0.55'}
                  opacity={dimmed ? 0.2 : 1}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, type: 'spring', stiffness: 220 }}
                  style={{ transformOrigin: `${l.x}px ${l.y}px` }}
                />

                {/* WHITE filled core dot — small & crisp */}
                <motion.circle
                  cx={l.x} cy={l.y}
                  r={emphasized ? dotR * 1.25 : dotR}
                  fill="white"
                  stroke={color}
                  strokeWidth="0.35"
                  opacity={dimmed ? 0.45 : 1}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: dimmed ? 0.45 : 1 }}
                  transition={{ delay: 0.18 + i * 0.07, type: 'spring', stiffness: 260 }}
                  style={{
                    transformOrigin: `${l.x}px ${l.y}px`,
                    filter: emphasized ? `drop-shadow(0 0 3px ${color})` : 'none',
                  }}
                />

                {/* Transparent hit area */}
                <circle cx={l.x} cy={l.y} r={6} fill="transparent" />
              </g>
            );
          })}
        </svg>

        {/* City name label pills */}
        {mapLocations.map((l, i) => (
          <motion.div
            key={`lbl-${l.id}`}
            className="absolute pointer-events-none z-10"
            style={{ left: `${l.x}%`, top: `${l.y}%`, transform: 'translate(-50%, 11px)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: l.modes.includes(activeMode) ? 1 : 0.2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.05 }}
          >
            <span
              className="whitespace-nowrap rounded px-1 py-px text-[8px] font-bold leading-tight"
              style={{
                color: l.tier === 'hq' ? '#92400e' : '#1e3a8a',
                background: l.tier === 'hq'
                  ? 'rgba(254,243,199,0.95)'
                  : 'rgba(219,234,254,0.92)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              {l.name}
            </span>
          </motion.div>
        ))}

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoverLocation && !hoverLocation.northOffice && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="pointer-events-none absolute z-30 whitespace-nowrap rounded-xl border px-3 py-1.5 text-[11px] font-semibold text-gray-800 shadow-xl"
              style={{
                left: `${hoverLocation.x}%`,
                top: `${hoverLocation.y}%`,
                transform: 'translate(-50%, -148%)',
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

        {/* North India offices badge — top-left corner */}
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
      <div className="relative px-5 py-3 flex flex-wrap items-center justify-center gap-4 text-[10px] font-semibold text-gray-500 border-t border-blue-50">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: '#D4AF37' }} />
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
