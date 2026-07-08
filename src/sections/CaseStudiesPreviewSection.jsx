import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { caseStudies } from '../data/caseStudies';

const featured = caseStudies.filter((s) => s.featured).slice(0, 3);
const preview = featured.length >= 3 ? featured : caseStudies.slice(0, 3);

// Mirrors the service-division colors used in ServicesOverviewSection so a
// SARFAESI case study, say, reads in the same hue as the SARFAESI service card.
const SERVICE_COLORS = {
  sarfaesi: '#E11D48',
  'field-collections': '#16A34A',
  'security-custodian': '#C8922A',
  'npa-management': '#7C3AED',
  'fraud-control': '#0891B2',
};

// ── Magnetic tilt + image-parallax card ──────────────────────────────────────
function PremiumCard({ study, i }) {
  const cardRef = useRef(null);
  const color = SERVICE_COLORS[study.serviceId] ?? '#3366FF';

  // Raw pointer position
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smoothed springs — give the tilt a luxurious deceleration
  const springCfg = { stiffness: 180, damping: 22, mass: 0.6 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  // Card tilt — max ±8 degrees
  const rotateX = useTransform(y, [-1, 1], [8, -8]);
  const rotateY = useTransform(x, [-1, 1], [-8, 8]);

  // Image parallax — image slides opposite direction to the tilt by ±12px
  const imgX = useTransform(x, [-1, 1], [-12, 12]);
  const imgY = useTransform(y, [-1, 1], [-10, 10]);

  // Glow position follows pointer
  const glowX = useTransform(x, [-1, 1], [20, 80]);
  const glowY = useTransform(y, [-1, 1], [20, 80]);

  function onPointerMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width  - 0.5;   // -0.5…0.5
    const ny = (e.clientY - rect.top)  / rect.height - 0.5;
    rawX.set(nx * 2);   // -1…1
    rawY.set(ny * 2);
  }
  function onPointerLeave() { rawX.set(0); rawY.set(0); }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
        '--card-c': color,
      }}
      className="csp6-card csp6-card--premium"
    >
      {/* ── Dynamic glow layer ── */}
      <motion.div
        className="csp6-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, color-mix(in srgb, ${color} 18%, transparent), transparent 65%)`,
        }}
      />

      {/* ── Thumbnail image band ── */}
      <div className="csp6-thumb">
        <motion.img
          src={study.image}
          alt={study.title}
          style={{ x: imgX, y: imgY }}
          className="csp6-thumb-img"
          loading="lazy"
          draggable={false}
        />
        {/* Shimmer sweep on hover */}
        <div className="csp6-thumb-shimmer" />
        {/* Gradient fade into card body */}
        <div className="csp6-thumb-fade" />
      </div>

      {/* ── Card body ── */}
      <div className="csp6-body">
        <span className="csp6-tag">{study.serviceLabel}</span>
        <h4>{study.title}</h4>
        <p>{study.challenge}</p>
        <Link to="/insights/case-studies" className="csp6-link">
          View case study <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPreviewSection() {
  return (
    <section className="csp6" id="case-studies">
      <div className="fg-wrap">
        <motion.div
          className="fg-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="fg-eyebrow">Proof of Work</span>
          <h2>Real engagements,<br />documented outcomes.</h2>
        </motion.div>

        <div className="fg-section-card">
          <div className="csp6-grid">
            {preview.map((study, i) => (
              <PremiumCard key={study.id} study={study} i={i} />
            ))}
          </div>

          <motion.div
            style={{ marginTop: 48, textAlign: 'center' }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            <Link to="/insights/case-studies" className="fg-btn fg-btn-s">
              View All Case Studies <ArrowRight size={16} className="arr" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
