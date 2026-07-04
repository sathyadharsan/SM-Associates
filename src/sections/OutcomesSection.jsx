import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Workflow, TrendingUp } from 'lucide-react';
import { outcomes } from '../data/flagshipHomeData';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const STEPS = [
  { key: 'challenge', label: 'The Challenge', icon: AlertTriangle, color: '#E11D48' },
  { key: 'approach', label: 'Our Approach', icon: Workflow, color: '#3366FF' },
  { key: 'result', label: 'The Outcome', icon: TrendingUp, color: '#16A34A' },
];

function OutcomePanel({ outcome }) {
  return (
    <motion.div
      className="oc6-panel"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="oct">{outcome.title}</div>
      <h3>{outcome.headline}</h3>
      <div className="oc6-steps">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              className="oc6-step"
              key={step.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 + i * 0.1, duration: 0.35 }}
            >
              <span className="oc6-step-ico" style={{ color: step.color, background: `${step.color}17` }}>
                <Icon size={16} />
              </span>
              <div className="oc6-step-body">
                <div className="oc6-step-label" style={{ color: step.color }}>{step.label}</div>
                <p className="oc-desc">{outcome[step.key]}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
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
            <AnimatePresence mode="wait">
              <OutcomePanel key={active} outcome={outcomes[active]} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
