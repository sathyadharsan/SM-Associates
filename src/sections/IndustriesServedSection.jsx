import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Building2, Home, Users, Smartphone, Layers, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { industriesOverview } from '../data/flagshipHomeData';

const iconMap = { Landmark, Building2, Home, Users, Smartphone, Layers, ShieldCheck, Briefcase };

export default function IndustriesServedSection() {
  return (
    <section className="ind6" id="industries">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">Who We Serve</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>Built for regulated<br />lenders, at scale.</h2>
        </div>

        <div className="ind6-grid">
          {industriesOverview.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link to={ind.href} className="ind6-card" style={{ '--card-c': ind.color }}>
                  <span className="ind6-ico"><Icon size={18} /></span>
                  <span>{ind.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
