import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Building2, Home, Users, Smartphone, Layers, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { industriesOverview } from '../data/flagshipHomeData';

const iconMap = { Landmark, Building2, Home, Users, Smartphone, Layers, ShieldCheck, Briefcase };

export default function IndustriesServedSection() {
  return (
    <section className="ind6" id="industries">
      <div className="fg-wrap">
        <div className="fg-section-header">
          <span className="fg-eyebrow">Who We Serve</span>
          <h2>Built for regulated<br />lenders, at scale.</h2>
        </div>

        <div className="fg-section-card">
          <div className="ind6-grid">
            {industriesOverview.map((ind, i) => {
              const Icon = iconMap[ind.icon];
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={ind.href} className="ind6-card" style={{ '--card-c': ind.color }}>
                    {/* Accent bar */}
                    <span className="ind6-ico"><Icon size={18} /></span>
                    <div className="ind6-body">
                      <span className="ind6-name">{ind.name}</span>
                      {ind.desc && <span className="ind6-desc">{ind.desc}</span>}
                    </div>
                    <ArrowRight className="ind6-arr" size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
