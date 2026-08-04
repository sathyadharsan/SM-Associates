import { motion } from 'framer-motion';
import { History, ShieldCheck, Landmark } from 'lucide-react';
import { whyUsPoints } from '../data/flagshipHomeData';

const iconMap = { History, ShieldCheck, Landmark };

export default function WhySmAssociatesSection() {
  return (
    <section className="bg-white py-20 sm:py-24 relative overflow-hidden" id="why-us">
      <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="fg-section-header">
          <span className="fg-section-eyebrow">WHY SM ASSOCIATES</span>
          <h2 className="fg-section-title">What sets the operating model apart.</h2>
          <p className="fg-section-subtitle">
            We bring industrial scale, legal precision, and institutional-grade compliance to recovery operations across South India, protecting lender reputation at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyUsPoints.map((w, i) => {
            const Icon = iconMap[w.icon] || History;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-lg hover:border-[#0072bc]/30 transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0072bc]/8 text-[#0072bc]">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-300 tracking-widest">PILLAR {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{w.title}</h3>
                <p className="mt-2 text-[13.5px] text-slate-600 leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
