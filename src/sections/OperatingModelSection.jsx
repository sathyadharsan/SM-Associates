import { useEffect, useRef } from 'react';
import { operatingModelStages } from '../data/flagshipHomeData';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function PvAlloc() {
  return (
    <div className="pv">
      {[0, 1, 2].map((i) => <div key={`lane-${i}`} className="pv-lane" style={{ top: `${30 + i * 20}%` }} />)}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={`chip-${i}`}
          className={`pv-chip ${i % 3 === 0 ? 'a' : ''}`}
          style={{ top: `${30 + (i % 3) * 20}%`, animation: `flowc ${2.4 + i * 0.25}s linear ${i * 0.3}s infinite` }}
        />
      ))}
    </div>
  );
}
function PvVerify() {
  return (
    <div className="pv">
      <div className="pv-rng" />
      <div className="pv-rng" style={{ animationDelay: '1.2s' }} />
      <div className="pv-pin" />
    </div>
  );
}
function PvEngage() {
  return (
    <div className="pv" style={{ flexDirection: 'column', gap: 12, alignItems: 'stretch', padding: 24 }}>
      {[0.8, 0.55, 0.9, 0.65].map((w, i) => (
        <div key={i} className="pv-log" style={{ position: 'relative', '--w': `${w * 100}%` }}>
          <i style={{ animationDelay: `${i * 0.4}s` }} />
        </div>
      ))}
    </div>
  );
}
function PvLegal() {
  return (
    <div className="pv">
      <div className="pv-doc">
        <span style={{ width: '60%' }} /><span /><span style={{ width: '80%' }} /><span /><span style={{ width: '50%' }} />
        <div className="pv-stamp">SEC<br />13(4)</div>
      </div>
    </div>
  );
}
function PvResolve() {
  const bars = [[40, '', ''], [62, '', '.2s'], [54, '', '.4s'], [88, 'a', '.6s'], [72, '', '.8s']];
  return (
    <div className="pv">
      <div className="pv-bars">
        {bars.map(([h, c, d], i) => (
          <i key={i} className={c} style={{ '--h': `${h}%`, animationDelay: d }} />
        ))}
      </div>
    </div>
  );
}
function PvReport() {
  return (
    <div className="pv">
      <div className="pv-dash">
        <div className="d1" /><div className="d2" />
        <div className="dl">{[50, 70, 45, 85, 60, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      </div>
    </div>
  );
}
const visualMap = { alloc: PvAlloc, verify: PvVerify, engage: PvEngage, legal: PvLegal, resolve: PvResolve, report: PvReport };

export default function OperatingModelSection() {
  const pinWrapRef = useRef(null);
  const filmstripRef = useRef(null);
  const stageRef = useRef(null);
  const railBarRef = useRef(null);
  const maxShiftRef = useRef(0);

  useEffect(() => {
    const pinWrap = pinWrapRef.current;
    const strip = filmstripRef.current;
    if (!pinWrap || !strip) return;

    const measure = () => {
      const firstPanel = strip.querySelector('.panel6');
      const pw = firstPanel ? firstPanel.offsetWidth : 0;
      const pad = Math.max(20, (window.innerWidth - pw) / 2);
      strip.style.paddingLeft = `${pad}px`;
      strip.style.paddingRight = `${pad}px`;
      maxShiftRef.current = Math.max(0, strip.scrollWidth - window.innerWidth);
    };

    const update = () => {
      const total = pinWrap.offsetHeight - window.innerHeight;
      const p = clamp(-pinWrap.getBoundingClientRect().top / (total || 1), 0, 1);
      strip.style.transform = `translateX(${-p * maxShiftRef.current}px)`;
      if (stageRef.current) stageRef.current.textContent = String(clamp(Math.floor(p * 6) + 1, 1, 6)).padStart(2, '0');
      if (railBarRef.current) railBarRef.current.style.width = `${p * 100}%`;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    const onResize = () => { measure(); update(); };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="model6" id="model">
      <div className="pin-wrap" ref={pinWrapRef} style={{ height: '480vh' }}>
        <div className="pin-stage">
          <div className="model6-head">
            <div className="fg-wrap">
              <div>
                <span className="fg-eyebrow">The Recovery Operating Model</span>
                <h2 style={{ marginTop: 14 }}>One accountable lifecycle.</h2>
              </div>
              <div className="model6-ctr">STAGE <b ref={stageRef}>01</b> / 06</div>
            </div>
          </div>

          <div className="filmstrip6" ref={filmstripRef}>
            {operatingModelStages.map((stage) => {
              const Visual = visualMap[stage.visual];
              return (
                <div className="panel6" key={stage.no}>
                  <div>
                    <div className="p-big">{stage.no}</div>
                    <h3>{stage.title}</h3>
                    <p>{stage.desc}</p>
                    <div className="tags">{stage.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                  <div className="panel6-vis"><Visual /></div>
                  <div className="p-no">{stage.tag}</div>
                </div>
              );
            })}
          </div>

          <div className="model6-rail">
            <div className="fg-wrap">
              <span className="rail-lbl">ALLOCATE</span>
              <span className="rail-bar"><i ref={railBarRef} /></span>
              <span className="rail-lbl">AUDIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
