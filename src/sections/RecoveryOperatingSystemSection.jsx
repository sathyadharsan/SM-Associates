import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { recoveryModules } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

const B = '#0072bc';
const V = '#0072bc';
const RADIUS = 230;

export default function RecoveryOperatingSystemSection() {
  const [active, setActive] = useState(0);
  const node = recoveryModules[active];
  const n = recoveryModules.length;

  const go = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Node positions around a circle, starting at top (-90deg)
  const positions = recoveryModules.map((_, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: Math.cos(angle) * RADIUS, y: Math.sin(angle) * RADIUS };
  });

  return (
    <section id="recovery-os" className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${B}, transparent)` }} />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full opacity-[0.05] blur-[120px]" style={{ background: V }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Operating System"
          title="One operating layer for debt recovery, collections and risk execution."
          description="SM Associates brings verification, collections, fraud control, SARFAESI, legal coordination, asset recovery and auction execution into one controlled operating ecosystem."
        />

        {/* ── Desktop: radial node graph ── */}
        <div className="mt-16 hidden justify-center lg:flex">
          <div className="relative" style={{ width: RADIUS * 2 + 160, height: RADIUS * 2 + 160 }}>

            {/* Connection lines */}
            <svg className="absolute inset-0 h-full w-full" style={{ overflow: 'visible' }}>
              <g transform={`translate(${RADIUS + 80}, ${RADIUS + 80})`}>
                {positions.map((p, i) => (
                  <motion.line
                    key={i}
                    x1={0} y1={0} x2={p.x} y2={p.y}
                    stroke={i === active ? B : 'rgba(15,23,42,0.10)'}
                    strokeWidth={i === active ? 2 : 1}
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0.5 }}
                    style={i === active ? { filter: `drop-shadow(0 0 6px ${B})` } : {}}
                  />
                ))}
              </g>
            </svg>

            {/* Center hub */}
            <div className="absolute flex flex-col items-center justify-center rounded-full text-center"
              style={{
                left: RADIUS + 80 - 56, top: RADIUS + 80 - 56, width: 112, height: 112,
                background: `linear-gradient(135deg, ${B}, ${V})`,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.2), 0 12px 36px -8px ${B}55`,
              }}>
              <span className="font-sora text-[13px] font-extrabold leading-tight text-white">SM<br/>Recovery OS</span>
            </div>

            {/* Pulse ring around hub */}
            <motion.div
              className="absolute rounded-full"
              style={{ left: RADIUS + 80 - 56, top: RADIUS + 80 - 56, width: 112, height: 112, border: `1px solid ${B}` }}
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />

            {/* Nodes */}
            {recoveryModules.map((m, i) => {
              const p = positions[i];
              const isActive = i === active;
              return (
                <motion.button
                  key={m.title}
                  onClick={() => setActive(i)}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left: RADIUS + 80 + p.x - 44, top: RADIUS + 80 + p.y - 44, width: 88 }}
                  whileHover={{ scale: 1.06 }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                    style={{
                      background: isActive ? `linear-gradient(135deg, ${B}, ${V})` : '#f6f8fb',
                      border: isActive ? 'none' : '1px solid #e2e8f0',
                      color: isActive ? '#fff' : '#536070',
                      boxShadow: isActive ? `0 8px 24px -4px ${B}55` : 'none',
                    }}
                  >
                    {getIcon(m.icon)}
                  </div>
                  <span className={`text-center text-[11px] font-semibold leading-tight ${isActive ? 'text-gray-950' : 'text-gray-400'}`}>
                    {m.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Mobile fallback: simple chips ── */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {recoveryModules.map((m, i) => (
            <button
              key={m.title}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-2 rounded-xl p-4 transition"
              style={{
                background: i === active ? `${B}14` : '#f6f8fb',
                border: `1px solid ${i === active ? B + '55' : '#e2e8f0'}`,
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: i === active ? B : '#e8ecf4', color: i === active ? '#fff' : '#536070' }}>
                {getIcon(m.icon)}
              </div>
              <span className="text-center text-[11px] font-semibold text-gray-700">{m.title}</span>
            </button>
          ))}
        </div>

        {/* ── Active node detail panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={node.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl p-8 text-center sm:p-10"
            style={{ background: '#f6f8fb', border: '1px solid #e2e8f0' }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-10 blur-3xl" style={{ background: B }} />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.26em]" style={{ color: B }}>{node.signal}</p>
            <h3 className="font-sora relative mt-3 text-[28px] font-bold tracking-[-0.02em] text-gray-950">{node.title}</h3>
            <p className="relative mx-auto mt-4 max-w-lg text-[15px] leading-7 text-gray-500">{node.description}</p>

            <div className="relative mx-auto mt-7 inline-flex items-center gap-3 rounded-xl px-5 py-3"
              style={{ background: `${B}10`, border: `1px solid ${B}25` }}>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">Outcome</span>
              <span className="text-[15px] font-bold text-gray-950">{node.outcome}</span>
            </div>

            <a href="#contact" onClick={go('#contact')}
              className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-950">
              Discuss this capability <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
