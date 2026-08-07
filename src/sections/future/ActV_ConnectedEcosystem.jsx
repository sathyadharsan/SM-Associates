/**
 * Act V — One Connected Ecosystem (Scenes 10–11)
 *
 * The camera's first true zoom-out — nine institutional nodes
 * brightening in sequence. Built as a whileInView stagger rather than
 * a scroll-pinned scrub: the concept ("system view coming into focus")
 * reads just as clearly on a one-shot reveal as on a scrubbed one, and
 * whileInView is the pattern already proven dozens of times elsewhere
 * on this site — reserving true pin+scrub for the acts where holding
 * position while something transforms in place is the whole point
 * (II, III, IV, and Act VI's assemblies) keeps this build's fragile
 * surface area smaller without losing the beat.
 *
 * Scene 11 is the one peak that exits to white instead of holding
 * dark — the hinge between "the vision" (Acts I–V) and "the mechanics
 * of it" (Act VI).
 */

import { motion } from 'framer-motion';
import { PeakStatement, BRAND, midSize, displayType } from './futureShared';

// AIRecoveryWorkflowDiagram (src/components/future/) was tried here and
// removed — not a polish call. It's a dark SaaS-dashboard UI with a live
// simulation toggle, clickable channel tabs, and hard percentage figures
// (99.4%, 96.8%, 100% accuracy) shown with no "vision"/"future" framing,
// which directly contradicts this page's own brief on three separate
// points: "This is NOT a SaaS dashboard," "No feature grids, no tab
// systems," and "Do NOT present speculative AI capabilities as existing
// products." It was also the source of the page hang: a setInterval
// firing React state every 40ms forever regardless of scroll position,
// plus three `animate={{ width: [...] }}` loops — animating `width`
// forces layout recalculation every frame, unlike transform/opacity.
// The file is left on disk, unreferenced, in case parts of it are useful
// on a page that already hedges AI capability as pilot-stage, like
// /platform/ai-recovery — just not here.

const NODES = [
  { label: 'Bank', angle: 0 },
  { label: 'Portfolio', angle: 45 },
  { label: 'Intelligence', angle: 90 },
  { label: 'Decision', angle: 135 },
  { label: 'Field', angle: 180 },
  { label: 'Legal', angle: 225 },
  { label: 'Settlement', angle: 270 },
  { label: 'Reporting', angle: 315 },
];

export default function ActV_ConnectedEcosystem() {
  return (
    <div id="future-act-5" className="relative bg-white overflow-hidden">
      <section className="mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto mt-5 max-w-3xl ${midSize} ${displayType}`}
        >
          Recovery is no longer a department. It becomes an intelligent ecosystem.
        </motion.h2>

        {/* Central Circular Ecosystem Mesh */}
        <div className="relative mx-auto mt-16 flex h-[380px] w-full max-w-[380px] sm:h-[460px] sm:max-w-[460px] items-center justify-center">
          {/* Radial SVG Lines connecting to Central Core */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 460 460">
            <circle cx="230" cy="230" r="160" fill="none" stroke={`${BRAND}22`} strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="230" cy="230" r="100" fill="none" stroke={`${BRAND}15`} strokeWidth="1" />
            
            {NODES.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const r = 160;
              const x2 = 230 + r * Math.cos(rad);
              const y2 = 230 + r * Math.sin(rad);

              return (
                <motion.line
                  key={n.label}
                  x1="230"
                  y1="230"
                  x2={x2}
                  y2={y2}
                  stroke={BRAND}
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 3, delay: i * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                />
              );
            })}
          </svg>

          {/* Central Hub Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10 flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border-2 border-[#0072bc] bg-white shadow-2xl shadow-[#0072bc]/25"
          >
            <span className="h-2 w-2 rounded-full bg-[#0072bc] animate-ping absolute" />
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#0072bc]">SM HUB</span>
            <span className="text-[11px] font-extrabold text-slate-900 mt-1">Core Engine</span>
          </motion.div>

          {/* Orbiting Satellite Nodes */}
          {NODES.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = 160;
            const x = r * Math.cos(rad);
            const y = r * Math.sin(rad);

            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x, y }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-20 flex items-center gap-2 rounded-full border border-[#0072bc]/30 bg-white px-4 py-2 shadow-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
                <span className="font-mono text-[11.5px] font-bold text-slate-800">{n.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <PeakStatement
        sceneLabel="THE VISION IN ACTION"
        lines={['The future is no longer imagined.', 'It is being built.']}
        exitToWhite
      />
    </div>
  );
}
