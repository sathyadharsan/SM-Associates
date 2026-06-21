import { useEffect, useRef, useState } from 'react';
import { Users, Landmark, Gavel, Search, LineChart, ShieldCheck, Compass } from 'lucide-react';
import { capabilityNodes } from '../data/flagshipHomeData';

const iconMap = { Users, Landmark, Gavel, Search, LineChart, ShieldCheck };

const NODES = Array.from({ length: 6 }, (_, i) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
});

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export default function CapabilitiesRadialSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const touchedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reducedMotion()) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !touchedRef.current && !timerRef.current) {
            timerRef.current = setInterval(() => setActive((i) => (i + 1) % 6), 3200);
          } else if (!entry.isIntersecting && timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => { io.disconnect(); clearInterval(timerRef.current); };
  }, []);

  const select = (i) => {
    touchedRef.current = true;
    clearInterval(timerRef.current);
    timerRef.current = null;
    setActive(i);
  };

  return (
    <section className="cap6" id="cap" ref={sectionRef}>
      <div className="fg-wrap">
        <div style={{ marginBottom: 56 }}>
          <span className="fg-eyebrow">Capabilities</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', marginTop: 18 }}>A complete recovery stack,<br />orbiting one core.</h2>
          <p style={{ marginTop: 18, color: 'var(--ink-2)', fontSize: 18, maxWidth: '50ch' }}>
            Select a capability to explore how each function connects to the operating core.
          </p>
        </div>

        <div className="cap6-stage">
          <div className="radial6">
            <svg className="spk" viewBox="0 0 480 480">
              {NODES.map((n, i) => (
                <line key={i} x1={240} y1={240} x2={(n.x / 100) * 480} y2={(n.y / 100) * 480} className={active === i ? 'on' : ''} />
              ))}
            </svg>

            <div className="rcenter">
              <div className="rcenter-ico"><Compass strokeWidth={1.8} /></div>
              <b>Recovery Core</b>
              <small>OPERATING LAYER</small>
            </div>

            {NODES.map((n, i) => {
              const Icon = iconMap[capabilityNodes[i].icon];
              return (
                <button
                  key={i}
                  type="button"
                  className={`rcnode ${active === i ? 'on' : ''}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  onClick={() => select(i)}
                  aria-label={capabilityNodes[i].title}
                >
                  <Icon strokeWidth={1.9} />
                </button>
              );
            })}
          </div>

          <div id="cap6-detail">
            {capabilityNodes.map((c, i) => (
              <div key={c.title} data-cpanel={i} className={`cap6-detail ${active === i ? 'on' : ''}`}>
                <div className="cd-tag">{c.tag}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="cd-stats">
                  {c.stats.map((s) => (
                    <div className="cd-s" key={s.k}><div className="v">{s.v}</div><div className="k">{s.k}</div></div>
                  ))}
                </div>
                <div className="cd-list">
                  {c.list.map((l) => <span key={l}>{l}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
