import { useState } from 'react';
import { motion } from 'framer-motion';
import IndiaCoverageMap from '../components/coverage/IndiaCoverageMap';
import LocationPanel from '../components/coverage/LocationPanel';
import MapModeTabs from '../components/coverage/MapModeTabs';
import { getLocation } from '../data/LocationData';

const NAVY = '#081120';
const B = '#3FA9FF';

export default function TamilNaduCoverageSection() {
  const [activeMode, setActiveMode] = useState('coverage');
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);

  const activeLocation = activeId ? getLocation(activeId) : null;

  return (
    <section id="coverage" className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: NAVY }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${B}, transparent)` }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: B }}>Operational Presence</p>
          <h2 className="font-sora mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            India Office Coverage Map
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            SM Associates operates from a Chennai headquarters and regional offices across India, delivering field verification, collections, recovery and legal coordination services close to every market we serve.
          </p>
        </motion.div>

        {/* ── Mode filter tabs ── */}
        <div className="mt-10">
          <MapModeTabs activeMode={activeMode} onChange={setActiveMode} />
        </div>

        {/* ── Map (70%) + Command Panel (30%) ── */}
        <div className="grid gap-6 lg:grid-cols-[70%_30%]">
          <IndiaCoverageMap
            activeMode={activeMode}
            activeId={activeId}
            hoverId={hoverId}
            onHover={setHoverId}
            onSelect={setActiveId}
          />
          <LocationPanel location={activeLocation} />
        </div>
      </div>
    </section>
  );
}
