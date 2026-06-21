import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { complianceRows } from '../data/flagshipHomeData';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export default function ComplianceScanSection() {
  const [status, setStatus] = useState(() => Array(complianceRows.length).fill('pending'));
  const [scanning, setScanning] = useState(true);
  const stageRef = useRef(null);
  const ranRef = useRef(false);
  const timeoutsRef = useRef([]);

  const runScan = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setStatus(Array(complianceRows.length).fill('pending'));
    setScanning(true);
    const reduced = reducedMotion();
    complianceRows.forEach((_, i) => {
      const t = setTimeout(() => {
        setStatus((prev) => {
          const next = [...prev];
          next[i] = 'ok';
          return next;
        });
        if (i === complianceRows.length - 1) setScanning(false);
      }, reduced ? 0 : 360 + i * 340);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !ranRef.current) {
            ranRef.current = true;
            runScan();
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => { io.disconnect(); timeoutsRef.current.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="comp6" id="comp">
      <div className="fg-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 48 }}>
          <div>
            <span className="fg-eyebrow">Trust &amp; Governance</span>
            <h2 style={{ fontSize: 'clamp(26px,3.4vw,44px)', marginTop: 18 }}>Built to be defensible<br />in front of a regulator.</h2>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 17 }}>
            Governance isn&apos;t a department here — it&apos;s the operating system. Watch the compliance scan run.
          </p>
        </div>

        <div className="comp6-stage" ref={stageRef}>
          <div className="comp6-bar">
            <span className="ttl">compliance-scan --portfolio=all</span>
            <button type="button" onClick={runScan}>↻ Re-run</button>
            <span className={`st ${!scanning ? 'ok' : ''}`}>
              {scanning ? <><span className="spin" /> SCANNING…</> : '✓ ALL CHECKS PASSED'}
            </span>
          </div>

          {complianceRows.map((row, i) => (
            <div key={row.title} className={`comp6-row ${status[i] === 'ok' ? 'ok' : ''}`}>
              <span className="ck6"><Check size={13} /></span>
              <div>
                <h4>{row.title}</h4>
                <p>{row.desc}</p>
              </div>
              <span className="reg">{row.reg}</span>
              <span className="cst">{status[i] === 'ok' ? 'VERIFIED' : 'PENDING'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
