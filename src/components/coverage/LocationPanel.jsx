import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';
import { tierColor, tierLabel } from '../../data/LocationData';

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString('en-IN')}</span>;
}

/**
 * Default (no office selected) view — company-confirmed headline figures
 * only. Do not compute aggregates from per-office sample data here; the
 * per-office fields in LocationData are illustrative until branch-level
 * numbers are confirmed by management.
 */
function RegionSummary({ locations, states }) {
  const stats = [
    { label: 'Field Workforce', value: 1500, suffix: '+' },
    { label: 'Partner Institutions', value: 100, suffix: '+' },
    { label: 'Branches', value: 19, suffix: '' },
    { label: 'States Covered', value: states.length, suffix: '' },
  ];

  return (
    <motion.div key="region" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">South India Command</p>
        <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />Live
        </span>
      </div>

      <p className="mt-3 text-[12.5px] leading-5 text-gray-500">{states.join(' · ')}</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((m) => (
          <div key={m.label} className="rounded-xl border p-3.5" style={{ background: 'rgba(51,102,255,0.04)', borderColor: 'rgba(51,102,255,0.12)' }}>
            <p className="text-lg font-extrabold tracking-[-0.02em] text-gray-900">
              <Counter to={m.value} />{m.suffix}
            </p>
            <p className="mt-1 text-[10.5px] font-semibold leading-tight text-gray-500">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed px-4 py-8 text-center" style={{ borderColor: 'rgba(51,102,255,0.16)' }}>
        <MapPin className="h-6 w-6 text-gray-300" />
        <p className="mt-3 text-[12.5px] font-semibold text-gray-400">Click an office marker to view its operational details.</p>
      </div>
    </motion.div>
  );
}

function LocationDetail({ loc }) {
  const color = tierColor(loc.tier);
  return (
    <motion.div key={loc.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]" style={{ background: `${color}1a`, color }}>
        {tierLabel(loc.tier)}
      </span>
      <h4 className="mt-3 text-2xl font-bold text-gray-900">{loc.name}{loc.tier === 'hq' && ' Headquarters'}</h4>
      <p className="mt-1 text-[12.5px] font-semibold text-gray-400">{loc.region}</p>

      <div className="my-5 h-px bg-gray-100" />

      <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Coverage Area</p>
      <p className="mt-1.5 text-[13px] leading-6 text-gray-600">{loc.coverage}</p>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-wide text-gray-400">Services</p>
      <div className="mt-2 space-y-1.5">
        {loc.services.map(s => (
          <p key={s} className="flex items-center gap-1.5 text-[13px] text-gray-700">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color }} />{s}
          </p>
        ))}
      </div>

    </motion.div>
  );
}

/**
 * Right-side command panel — shows a South-India region summary by
 * default, switches to a single location's detail when a marker is
 * clicked. `locations` is the filtered set the map is currently showing,
 * used to compute the default aggregate.
 */
export default function LocationPanel({ location, locations = [], states = [] }) {
  return (
    <div
      className="rounded-[28px] border bg-white p-6 shadow-[0_24px_60px_-32px_rgba(20,30,70,0.25)] lg:sticky lg:top-24"
      style={{ borderColor: 'rgba(51,102,255,0.14)' }}
    >
      <AnimatePresence mode="wait">
        {!location ? <RegionSummary locations={locations} states={states} /> : <LocationDetail loc={location} />}
      </AnimatePresence>
    </div>
  );
}
