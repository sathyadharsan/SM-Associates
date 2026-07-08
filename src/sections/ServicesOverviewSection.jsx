import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch, ArrowRight } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';

const iconMap = { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch };

// ── Interactive Premium 3D-Tilt Service Card ─────────────────────────────────
function ServiceCard({ s, i }) {
  const cardRef = useRef(null);
  const Icon = iconMap[s.icon];

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 26, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  // Smooth rotation values
  const rotateX = useTransform(y, [-1, 1], [6, -6]);
  const rotateY = useTransform(x, [-1, 1], [-6, 6]);

  // Subtle pointer-following coordinates for radial glow
  const glowX = useTransform(x, [-1, 1], [15, 85]);
  const glowY = useTransform(y, [-1, 1], [15, 85]);

  // Icon bobs opposite to direction for visual depth
  const icoX = useTransform(x, [-1, 1], [4, -4]);
  const icoY = useTransform(y, [-1, 1], [3, -3]);

  function onPointerMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    rawY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  }
  function onPointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        '--card-c': s.color,
      }}
      className="svc6-card"
    >
      {/* Dynamic cursor pointer glow */}
      <motion.div
        className="svc6-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, color-mix(in srgb, ${s.color} 11%, transparent), transparent 60%)`,
        }}
      />

      <span className="svc6-idx">{String(i + 1).padStart(2, '0')}</span>

      {/* Parallax Icon */}
      <motion.span
        className="svc6-ico"
        style={{ x: icoX, y: icoY, transformStyle: 'preserve-3d', translateZ: 18 }}
      >
        <Icon size={20} />
      </motion.span>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h4>{s.name}</h4>
        <p>{s.desc}</p>
        <Link to={s.href} className="svc6-link">
          Learn more <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesOverviewSection() {
  return (
    <section className="svc6" id="services">
      <div className="fg-wrap">
        <div className="fg-section-header">
          <span className="fg-eyebrow">What We Do</span>
          <h2>Six business divisions,<br />one accountable partner.</h2>
        </div>

        <div className="fg-section-card">
          <div className="svc6-grid">
            {servicesOverview.map((s, i) => (
              <ServiceCard key={s.name} s={s} i={i} />
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Link to="/services" className="fg-btn fg-btn-s">
              Explore All Services <ArrowRight size={16} className="arr" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
