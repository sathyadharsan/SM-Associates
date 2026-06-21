import { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { outcomes } from '../data/flagshipHomeData';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

function OutcomePanel({ outcome }) {
  const [numRef, display] = useCounter({ to: outcome.big.n });
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    el.style.width = '0';
    const t = setTimeout(() => { el.style.width = `${outcome.barValue}%`; }, 50);
    return () => clearTimeout(t);
  }, [outcome.barValue]);

  return (
    <div className="oc6-panel on">
      <div className="oct">{outcome.title}</div>
      <h3>{outcome.headline}</h3>
      <div className="oc-big">
        {outcome.big.prefix && <span className="p">{outcome.big.prefix}</span>}
        <span className="n" ref={numRef}>{display}</span>
        <span className="s">{outcome.big.suffix}</span>
      </div>
      <div className="oc-desc">{outcome.desc}</div>
      <div className="oc-bar"><i ref={barRef} /></div>
      <div className="oc-sub">
        {outcome.sub.map((s) => (
          <div className="s" key={s.k}><div className="v">{s.v}</div><div className="k">{s.k}</div></div>
        ))}
      </div>
      <div className="oc-quote">
        {outcome.quote}
        <div className="who">{outcome.who}</div>
      </div>
    </div>
  );
}

export default function OutcomesSection() {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  const touchedRef = useRef(false);
  const timerRef = useRef(null);
  const navBarRefs = useRef([]);

  const select = (i) => {
    touchedRef.current = true;
    clearInterval(timerRef.current);
    timerRef.current = null;
    setActive(i);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el || reducedMotion()) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!touchedRef.current && !timerRef.current) {
              timerRef.current = setInterval(() => setActive((i) => (i + 1) % outcomes.length), 6000);
            }
          } else if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => { io.disconnect(); clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    navBarRefs.current.forEach((bar, i) => {
      if (!bar) return;
      bar.style.transition = 'none';
      bar.style.width = '0';
      if (i === active && !reducedMotion()) {
        requestAnimationFrame(() => {
          bar.style.transition = 'width 6s linear';
          bar.style.width = '100%';
        });
      }
    });
  }, [active]);

  return (
    <section className="outcomes6" id="outcomes">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">Outcomes</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>Performance that shows up<br />on the balance sheet.</h2>
        </div>

        <div className="oc6-stage" ref={stageRef}>
          <div className="oc6-nav">
            {outcomes.map((o, i) => (
              <button key={o.title} type="button" className={active === i ? 'on' : ''} onClick={() => select(i)}>
                <div className="ot">{o.tag}</div>
                <div className="oh">{o.head}</div>
                <div className="oc6-prog-bar"><i ref={(el) => (navBarRefs.current[i] = el)} /></div>
              </button>
            ))}
          </div>
          <div className="oc6-view">
            <OutcomePanel key={active} outcome={outcomes[active]} />
          </div>
        </div>
      </div>
    </section>
  );
}
