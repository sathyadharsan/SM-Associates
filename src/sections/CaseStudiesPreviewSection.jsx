import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

export default function CaseStudiesPreviewSection() {
  return (
    <section className="csp6" id="case-studies">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">Proof of Work</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>Real engagements,<br />documented outcomes.</h2>
        </div>

        <div className="csp6-grid">
          {preview.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="csp6-card"
              style={{ '--card-c': SERVICE_COLORS[study.serviceId] }}
            >
              <span className="csp6-tag">{study.serviceLabel}</span>
              <h4>{study.title}</h4>
              <p>{study.challenge}</p>
              <Link to="/insights/case-studies" className="csp6-link">
                View case study <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Link to="/insights/case-studies" className="fg-btn fg-btn-s">
            View All Case Studies <ArrowRight size={16} className="arr" />
          </Link>
        </div>
      </div>
    </section>
  );
}
