import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { History, ShieldCheck, Landmark } from 'lucide-react';
import { useRef } from 'react';
import { whyUsPoints } from '../data/flagshipHomeData';

const iconMap = { History, ShieldCheck, Landmark };

// ── Individual premium tilt card ──────────────────────────────────────────────
function WhyCard({ w, i }) {
  const cardRef = useRef(null);
  const Icon = iconMap[w.icon];

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 200, damping: 24, mass: 0.55 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const rotateX = useTransform(y, [-1, 1], [6, -6]);
  const rotateY = useTransform(x, [-1, 1], [-6, 6]);

  // Icon bobs opposite to card tilt for a depth-layer feel
  const icoX = useTransform(x, [-1, 1], [4, -4]);
  const icoY = useTransform(y, [-1, 1], [3, -3]);

  const glowX = useTransform(x, [-1, 1], [10, 90]);
  const glowY = useTransform(y, [-1, 1], [10, 90]);

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
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
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
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, color-mix(in srgb, ${w.color} 14%, transparent), transparent 60%)`,
        }}
      />

      {/* Icon with inverse parallax */}
      <motion.span
        className="why6-ico"
        style={{ x: icoX, y: icoY, transformStyle: 'preserve-3d', translateZ: 20 }}
      >
        {Icon && <Icon size={20} />}
      </motion.span>

      <div style={{ position: 'relative', zIndex: 2 }}>
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
        <motion.div
          style={{ marginBottom: 44 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="fg-eyebrow">Why SM Associates</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>What sets the operating<br />model apart.</h2>
        </motion.div>

        <div className="why6-grid">
          {whyUsPoints.map((w, i) => (
            <WhyCard key={w.title} w={w} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
