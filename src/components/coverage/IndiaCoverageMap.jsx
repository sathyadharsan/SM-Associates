import { AnimatePresence, motion } from 'framer-motion';
import CleanIndiaOutline from './CleanIndiaOutline';
import LocationNode from './LocationNode';
import { locations as allLocations, tierLabel, MAP_VIEWPORT, MAP_MODES } from '../../data/LocationData';

/**
 * Office coverage map — presence only, no network visualization. No
 * connection lines, no flow particles, no data-pulse animation between
 * locations. Hover gives a soft glow + name tooltip; click updates the
 * parent's selection, which the right-side panel reflects.
 *
 * `locations` and `viewport` default to the full Pan-India set, but callers
 * (e.g. the homepage's South-India-only Command Center) can pass a filtered
 * subset and a tighter viewport crop without touching the shared data file.
 */
export default function IndiaCoverageMap({ activeMode, activeId, hoverId, onHover, onSelect, locations = allLocations, viewport = MAP_VIEWPORT }) {
  const accent = MAP_MODES.find(m => m.id === activeMode)?.color ?? '#3FA9FF';
  const hoverLocation = locations.find(l => l.id === hoverId);
  const toPercentX = (x) => ((x - viewport.x) / viewport.w) * 100;
  const toPercentY = (y) => ((y - viewport.y) / viewport.h) * 100;

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border p-6 sm:p-8"
      style={{
        background: 'linear-gradient(180deg, #f7faff 0%, #ffffff 55%)',
        borderColor: 'rgba(51,102,255,0.14)',
      }}
      onClick={() => onSelect(null)}
    >
      {/* faint grid */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: 'linear-gradient(rgba(51,102,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(51,102,255,0.05) 1px, transparent 1px)',
        backgroundSize: '34px 34px',
      }} />

      <div className="relative" style={{ height: 560 }}>
        <svg viewBox={`${viewport.x} ${viewport.y} ${viewport.w} ${viewport.h}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <CleanIndiaOutline accentColor={accent} />

          {locations.map((l, i) => (
            <LocationNode
              key={l.id}
              location={l}
              index={i}
              activeId={activeId}
              isHover={hoverId === l.id}
              isActive={activeId === l.id}
              isRelevant={l.modes.includes(activeMode)}
              onHover={onHover}
              onSelect={onSelect}
            />
          ))}
        </svg>

        {/* hover tooltip — name only, no stats card */}
        <AnimatePresence>
          {hoverLocation && (
            <motion.div
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="pointer-events-none absolute z-10 whitespace-nowrap rounded-lg border px-3 py-1.5 text-[11px] font-semibold text-gray-900 shadow-lg"
              style={{
                left: `${toPercentX(hoverLocation.x)}%`, top: `${toPercentY(hoverLocation.y)}%`, transform: 'translate(-50%, -150%)',
                background: 'rgba(255,255,255,0.97)', borderColor: 'rgba(51,102,255,0.22)',
              }}
            >
              {hoverLocation.name} <span className="text-gray-400">· {tierLabel(hoverLocation.tier)}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {locations.map((l, i) => (
          <motion.div
            key={l.id}
            className="absolute pointer-events-none"
            style={{ left: `${toPercentX(l.x)}%`, top: `${toPercentY(l.y)}%`, transform: 'translate(-50%, 6px)' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: l.modes.includes(activeMode) ? 1 : 0.3 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.04 }}
          >
            <span className="whitespace-nowrap text-[10px] font-bold text-gray-700">{l.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-4 flex flex-wrap items-center justify-center gap-4 text-[10.5px] font-semibold text-gray-500">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: '#D4AF37' }} />Chennai HQ</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: '#3FA9FF' }} />Office Location</span>
      </div>
    </div>
  );
}
