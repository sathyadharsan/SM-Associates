import { useEffect, useRef, useState } from 'react';
import { outcomes } from '../data/flagshipHomeData';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const BLOCK_LABEL = {
  fontSize: 10.5,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-3, #94a3b8)',
  marginBottom: 6,
};

function OutcomePanel({ outcome }) {
  return (
    <div className="oc6-panel on">
      <div className="oct">{outcome.title}</div>
      <h3>{outcome.headline}</h3>
      <div style={{ display: 'grid', gap: 22, marginTop: 28 }}>
        <div>
          <div style={BLOCK_LABEL}>The Challenge</div>
          <div className="oc-desc">{outcome.challenge}</div>
        </div>
        <div>
          <div style={BLOCK_LABEL}>Our Approach</div>
          <div className="oc-desc">{outcome.approach}</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(51,102,255,0.14)', paddingTop: 18 }}>
          <div style={{ ...BLOCK_LABEL, color: 'var(--blue, #3366FF)' }}>The Outcome</div>
          <div className="oc-desc" style={{ color: 'var(--ink-1, #0f172a)', fontWeight: 500 }}>{outcome.result}</div>
        </div>
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
          <span className="fg-eyebrow">Engagement Snapshots</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>How we take over<br />a stressed book.</h2>
          <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-2, #475569)', maxWidth: '58ch' }}>
            Anonymized operating examples from real recovery mandates across banking, SARFAESI and verification programs.
          </p>
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
