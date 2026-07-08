import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { History, ShieldCheck, Landmark } from 'lucide-react';
import { useRef } from 'react';
import { whyUsPoints } from '../data/flagshipHomeData';

const iconMap = { History, ShieldCheck, Landmark };

// ── Individual premium tilt card (stacked row style) ──────────────────────────
function WhyCard({ w, i }) {
  const cardRef = useRef(null);
  const Icon = iconMap[w.icon];

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 26, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const rotateX = useTransform(y, [-1, 1], [4, -4]);
  const rotateY = useTransform(x, [-1, 1], [-4, 4]);

  // Icon bobs opposite to card tilt for depth-layer feel
  const icoX = useTransform(x, [-1, 1], [3, -3]);
  const icoY = useTransform(y, [-1, 1], [2, -2]);

  const glowX = useTransform(x, [-1, 1], [15, 85]);
  const glowY = useTransform(y, [-1, 1], [15, 85]);

  function onPointerMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    rawY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  }
  function onPointerLeave() { rawX.set(0); rawY.set(0); }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        '--card-c': w.color,
      }}
      className="why6-item why6-item--premium"
    >
      {/* Dynamic radial glow */}
      <motion.div
        className="why6-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, color-mix(in srgb, ${w.color} 10%, transparent), transparent 60%)`,
        }}
      />

      {/* Icon with inverse parallax */}
      <motion.span
        className="why6-ico"
        style={{ x: icoX, y: icoY, transformStyle: 'preserve-3d', translateZ: 15 }}
      >
        {Icon && <Icon size={20} />}
      </motion.span>

      <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <h4>{w.title}</h4>
        <p>{w.desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhySmAssociatesSection() {
  return (
    <section className="why6" id="why-us">
      <div className="fg-wrap">
        <div className="fg-section-header">
          <span className="fg-eyebrow">Why SM Associates</span>
          <h2>What sets the operating<br />model apart.</h2>
        </div>

        <div className="fg-section-card">
          <div className="why6-split">
            
            {/* Left Column — Intro */}
            <div className="why6-sticky-left" style={{ top: 40 }}>
              <p className="why6-intro" style={{ fontSize: '16.5px', marginTop: 0, maxWidth: '32ch' }}>
                We bring industrial scale, legal precision, and institutional-grade compliance to recovery operations across South India, protecting lender reputation at every step.
              </p>
              <div className="why6-highlight-card">
                <span className="fg-mono-tag" style={{ color: 'var(--blue)', fontWeight: 600 }}>OPERATIONAL GUARANTEE</span>
                <h4>100% Compliant Resolution</h4>
                <p>
                  Every account is managed strictly under RBI guidelines, backed by immutable GPS logs, certified DRA representatives, and full call archiving.
                </p>
              </div>
            </div>

            {/* Right Column — Stacked Benefit Cards */}
            <div className="why6-stack">
              {whyUsPoints.map((w, i) => (
                <WhyCard key={w.title} w={w} i={i} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
