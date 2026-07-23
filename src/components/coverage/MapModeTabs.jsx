import { MAP_MODES } from '../../data/LocationData';

/** Five mode tabs — switching retints active connections/glow and flags
 *  which locations are relevant to that operating mode. */
export default function MapModeTabs({ activeMode, onChange }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {MAP_MODES.map(mode => {
        const active = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onChange(mode.id)}
            className="rounded-full px-4 py-2 text-[12px] font-semibold transition-all"
            style={active
              ? { background: `${mode.color}1a`, color: mode.color, border: `1px solid ${mode.color}55`, boxShadow: `0 0 16px -6px ${mode.color}` }
              : { background: 'rgba(0, 114, 188,0.04)', color: 'rgba(10,14,26,0.45)', border: '1px solid rgba(0, 114, 188,0.1)' }}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
