import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/contactOfficesData';

// A handful of representative offices for the static teaser dots — full
// interactive detail (all 20 offices, directions, addresses) lives on the
// Contact page, not duplicated here.
const DOTS = [
  { id: 'chennai', x: 60.9, y: 52.7, hq: true },
  { id: 'bengaluru', x: 43.5, y: 53.5 },
  { id: 'hyderabad', x: 48.9, y: 19.7 },
  { id: 'coimbatore', x: 37.2, y: 67.5 },
  { id: 'madurai', x: 38.1, y: 75.6 },
  { id: 'kochi', x: 28.7, y: 76.4 },
];

export default function CoveragePreviewSection() {
  return (
    <section className="cov6-lite" id="coverage">
      <div className="fg-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="cov6-lite-stage"
        >
          <div>
            <span className="fg-eyebrow">Operational Coverage</span>
            <h2 style={{ fontSize: 'clamp(26px,3.4vw,42px)', marginTop: 16 }}>
              A direct branch network,<br />not a subcontracted map.
            </h2>
            <p style={{ marginTop: 14, fontSize: 15.5, color: 'var(--ink-2)', maxWidth: '48ch' }}>
              Chennai headquarters anchoring {COMPANY.branchCount} branch offices across {COMPANY.statesCovered.length} states — every location directly managed, not outsourced.
            </p>

            <div className="cov6-lite-stats">
              <div><div className="v">{COMPANY.officeCount}</div><div className="k">OFFICES</div></div>
              <div><div className="v">{COMPANY.statesCovered.length}</div><div className="k">STATES</div></div>
              <div><div className="v">{COMPANY.staffCount}</div><div className="k">FIELD STAFF</div></div>
            </div>

            <Link to="/contact" className="fg-btn fg-btn-p" style={{ marginTop: 28 }}>
              View Full Coverage Map <ArrowRight size={16} className="arr" />
            </Link>
          </div>

          <div className="cov6-lite-map">
            <img src="/images/south_india_coverage_map.png" alt="SM Associates South India coverage" draggable={false} />
            {DOTS.map((d) => (
              <span
                key={d.id}
                className={`cov6-lite-dot ${d.hq ? 'hq' : ''}`}
                style={{ left: `${d.x}%`, top: `${d.y}%`, transform: 'translate(-50%,-50%)' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
