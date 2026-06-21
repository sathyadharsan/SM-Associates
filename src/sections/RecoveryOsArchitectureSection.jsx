import { useState } from 'react';
import { List, Radar, Database, Lightbulb, LineChart, Shield, Smartphone, LayoutDashboard, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { recoveryOsLayers } from '../data/flagshipHomeData';

const iconMap = { List, Radar, Database, Lightbulb, LineChart, Shield, Smartphone, LayoutDashboard, ShieldCheck };

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
          {recoveryOsLayers.map((layer, i) => (
            <div key={layer.no} className={`arch6-layer ${activeLayer === i ? 'on' : ''}`}>
              <div className="arch6-side" onClick={() => setActiveLayer(i)}>
                <div className="ln">{layer.no}</div>
                <h4>{layer.title}</h4>
                <p>{layer.desc}</p>
              </div>
              <div className="arch6-mods">
                {layer.modules.map((m) => {
                  const Icon = iconMap[m.icon];
                  return (
                    <div className="amod" key={m.name}>
                      <span className="amod-ico"><Icon size={14} /></span>
                      <span>{m.name}<small>{m.sub}</small></span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
