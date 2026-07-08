import { motion } from 'framer-motion';
import { History, ShieldCheck, Landmark } from 'lucide-react';
import { whyUsPoints } from '../data/flagshipHomeData';

const iconMap = { History, ShieldCheck, Landmark };

export default function WhySmAssociatesSection() {
  return (
    <section className="why6" id="why-us">
      <div className="fg-wrap">
        <div style={{ marginBottom: 44 }}>
          <span className="fg-eyebrow">Why SM Associates</span>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', marginTop: 18 }}>What sets the operating<br />model apart.</h2>
        </div>

        <div className="why6-grid">
          {whyUsPoints.map((w, i) => {
            const Icon = iconMap[w.icon];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="why6-item"
                style={{ '--card-c': w.color }}
              >
                <span className="why6-ico"><Icon size={20} /></span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
