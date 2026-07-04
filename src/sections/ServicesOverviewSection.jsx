import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch, ArrowRight } from 'lucide-react';
import { servicesOverview } from '../data/flagshipHomeData';

const iconMap = { Search, PhoneCall, RefreshCw, Gavel, Warehouse, FileSearch };

export default function ServicesOverviewSection() {
  return (
    <section className="svc6" id="services">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">What We Do</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>Six business divisions,<br />one accountable partner.</h2>
        </div>

        <div className="svc6-grid">
          {servicesOverview.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="svc6-card"
                style={{ '--card-c': s.color }}
              >
                <span className="svc6-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="svc6-ico"><Icon size={20} /></span>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
                <Link to={s.href} className="svc6-link">
                  Learn more <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Link to="/services" className="fg-btn fg-btn-s">
            Explore All Services <ArrowRight size={16} className="arr" />
          </Link>
        </div>
      </div>
    </section>
  );
}
