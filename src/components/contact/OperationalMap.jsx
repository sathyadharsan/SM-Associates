import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, X, Building2 } from 'lucide-react';
import { officeCities, COMPANY, mapsUrl } from '../../data/contactOfficesData';

const HQ_COLOR = '#C8A45D';
const BRANCH_COLOR = '#3FA9FF';

function CityMarker({ loc, isActive, onSelect }) {
  const isHQ = loc.tier === 'hq';
  const color = isHQ ? HQ_COLOR : BRANCH_COLOR;
  const dotR = isHQ ? 1.5 : 1.0;
  const ringR = isHQ ? 2.5 : 1.75;
  const officeCount = loc.offices.length;

  return (
    <g
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(loc.id === isActive ? null : loc.id);
      }}
    >
      <circle cx={loc.x} cy={loc.y} r={isHQ ? 4.2 : 3} fill={color} opacity={isActive === loc.id ? 0.3 : 0.14} style={{ filter: 'blur(3px)' }} />
      {isHQ && (
        <motion.circle
          cx={loc.x} cy={loc.y} r={ringR}
          fill="none" stroke={color} strokeWidth="0.6"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
        />
      )}
      <circle cx={loc.x} cy={loc.y} r={isActive === loc.id ? ringR * 1.2 : ringR} fill="none" stroke={color} strokeWidth={isHQ ? 0.8 : 0.6} />
      <circle cx={loc.x} cy={loc.y} r={isActive === loc.id ? dotR * 1.3 : dotR} fill="#fff" stroke={color} strokeWidth="0.4" />
      {officeCount > 1 && (
        <text x={loc.x + 2.6} y={loc.y - 2} fontSize="1.8" fontWeight="700" fill={color}>{officeCount}</text>
      )}
      <circle cx={loc.x} cy={loc.y} r={5.5} fill="transparent" />
    </g>
  );
}

function CityPopup({ loc, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="glass-card relative z-30 mt-6 rounded-2xl p-5"
    >
      <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-700">
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${loc.tier === 'hq' ? 'bg-gold-500/15 text-gold-500' : 'bg-brand-50 text-brand-500'}`}>
          {loc.tier === 'hq' ? 'Head Office' : 'Branch Location'}
        </span>
        <span className="text-[11px] font-semibold text-slate-400">{loc.state}</span>
      </div>
      <h4 className="mt-3 font-sora text-xl font-bold text-slate-900">{loc.city}</h4>

      <div className="mt-4 space-y-3">
        {loc.offices.map((office) => (
          <div key={office.code} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[12.5px] font-bold text-slate-800">{office.name} <span className="font-mono text-[10px] font-normal text-slate-400">· {office.code}</span></p>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{office.address}</p>
              </div>
              <a
                href={mapsUrl(office.address)}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white transition hover:bg-brand-600"
                title="Get directions"
              >
                <Navigation className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function OperationalMap() {
  const [activeId, setActiveId] = useState('chennai');
  const active = officeCities.find((l) => l.id === activeId);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24" id="operational-presence">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-gold-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-400">Operational Presence</span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-white sm:text-4xl">Our footprint across India</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            {COMPANY.staffCount} field and operations staff, working out of {COMPANY.officeCount} offices across {COMPANY.statesCovered.join(', ')}.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div
            className="relative overflow-hidden rounded-[28px] border border-white/10"
            style={{ background: 'linear-gradient(160deg, #111827 0%, #0b1120 60%, #030712 100%)' }}
            onClick={() => setActiveId(null)}
          >
            <div className="relative w-full" style={{ aspectRatio: '1 / 1', maxHeight: 560, overflow: 'hidden' }}>
              <img
                src="/images/south_india_coverage_map.png"
                alt="SM Associates operational presence map"
                className="absolute inset-0 h-full w-full select-none pointer-events-none opacity-25 mix-blend-luminosity"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                draggable={false}
              />
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" style={{ overflow: 'visible' }}>
                {officeCities.map((loc) => (
                  <CityMarker key={loc.id} loc={loc} isActive={activeId} onSelect={setActiveId} />
                ))}
              </svg>
              {officeCities.map((loc) => (
                <div
                  key={`lbl-${loc.id}`}
                  className="pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, 10px)' }}
                >
                  <span
                    className="rounded px-1.5 py-0.5 text-[8.5px] font-bold leading-tight"
                    style={{
                      color: loc.tier === 'hq' ? '#7a5a1e' : '#0b3a63',
                      background: loc.tier === 'hq' ? 'rgba(250,235,200,0.92)' : 'rgba(214,234,255,0.9)',
                    }}
                  >
                    {loc.city}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-5 border-t border-white/10 px-5 py-4 text-[10.5px] font-semibold text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border-2 bg-transparent" style={{ borderColor: HQ_COLOR }} /> Head Office
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border-2 bg-transparent" style={{ borderColor: BRANCH_COLOR }} /> Branch Location
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Click a marker for office details
              </span>
            </div>
          </div>

          <div>
            {!active ? (
              <div className="glass-card flex h-full flex-col items-center justify-center rounded-[26px] p-8 text-center">
                <Building2 className="h-8 w-8 text-slate-300" />
                <p className="mt-4 text-[13px] font-semibold text-slate-500">Select a marker on the map to view office details and get directions.</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <CityPopup key={active.id} loc={active} onClose={() => setActiveId(null)} />
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
