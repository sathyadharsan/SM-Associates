import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, Radar, Database, Lightbulb, LineChart, Shield, Smartphone, LayoutDashboard, ShieldCheck, ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { recoveryOsLayers } from '../data/flagshipHomeData';

const iconMap = { List, Radar, Database, Lightbulb, LineChart, Shield, Smartphone, LayoutDashboard, ShieldCheck };
const LAYER_ICONS = [Database, Lightbulb, ShieldCheck];

export default function RecoveryOsArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [headRef, headIn] = useReveal();
  const [archRef, archIn] = useReveal();

  return (
    <section className="os6" id="os">
      <div className="fg-wrap">
        <div className="os6-head" ref={headRef}>
          <div className={`fg-r ${headIn ? 'in' : ''}`}>
            <span className="os6-badge">◆ NEXT — IN DEVELOPMENT</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', marginTop: 16 }}>Recovery OS</h2>
          </div>
          <p className={`fg-r ${headIn ? 'in' : ''}`} style={{ color: 'var(--ink-2)', fontSize: 18 }}>
            The intelligence layer built on two decades of field operations — turning recovery from a manual process into a measurable, AI-assisted system.
          </p>
        </div>

        <div ref={archRef} className={`arch6 fg-r ${archIn ? 'in' : ''}`}>
          {recoveryOsLayers.map((layer, i) => {
            const LayerIcon = LAYER_ICONS[i] ?? Database;
            const isOpen = activeLayer === i;
            return (
              <div key={layer.no} className={`arch6-layer ${isOpen ? 'on' : ''}`}>
                <button type="button" className="arch6-side" onClick={() => setActiveLayer(isOpen ? -1 : i)}>
                  <span className="arch6-num">
                    <LayerIcon size={16} />
                  </span>
                  <span className="arch6-side-text">
                    <span className="ln">{layer.no}</span>
                    <span className="arch6-title">{layer.title}</span>
                    <span className="arch6-desc">{layer.desc}</span>
                  </span>
                  <ChevronDown size={16} className={`arch6-chev ${isOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="mods"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="arch6-mods">
                        {layer.modules.map((m, mi) => {
                          const Icon = iconMap[m.icon];
                          return (
                            <motion.div
                              className="amod"
                              key={m.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: mi * 0.07, duration: 0.3 }}
                            >
                              <span className="amod-ico"><Icon size={14} /></span>
                              <span>{m.name}<small>{m.sub}</small></span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
