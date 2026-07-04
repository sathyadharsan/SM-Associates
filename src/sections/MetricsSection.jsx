import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import { metrics } from '../data/flagshipHomeData';

function MetricCell({ m }) {
  const [litRef, lit] = useReveal(0.55);
  const [counterRef, display] = useCounter({ to: m.value });

  return (
    <div ref={litRef} className={`m6-cell ${lit ? 'lit' : ''}`}>
      <div className="m6-idx">{m.idx}</div>
      <div className="m6-num">
        {m.prefix && <span className="m6-pre">{m.prefix}</span>}
        <span ref={counterRef}>{display}</span>
        {m.suffix && <span className="m6-suf">{m.suffix}</span>}
      </div>
      <div className="m6-label">{m.label}</div>
      <div className="m6-desc">{m.desc}</div>
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section className="metrics6" id="metrics">
      <div className="fg-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <span className="fg-eyebrow">Infrastructure at scale</span>
            <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>Operational depth,<br /><em className="fg-hl">measured in the field.</em></h2>
          </div>
          <span className="fg-mono-tag">FIG.03 — OPERATING METRICS</span>
        </div>
        <div className="m6-grid">
          {metrics.map((m) => <MetricCell key={m.idx} m={m} />)}
        </div>
      </div>
    </section>
  );
}
