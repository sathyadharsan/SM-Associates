import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { recoveryModules } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

export default function RecoveryOperatingSystemSection() {
  const [activeModule, setActiveModule] = useState(0);
  const active = recoveryModules[activeModule];

  const handleScrollTo = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="recovery-os" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Operating System"
          title="One operating layer for debt recovery, collections and risk execution."
          description="SM Associates brings verification, collections, fraud control, SARFAESI, legal coordination, asset recovery and auction execution into one controlled operating ecosystem."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {recoveryModules.map((module, index) => (
              <motion.button
                key={module.title}
                onClick={() => setActiveModule(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className={`glass-card group rounded-[24px] p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-enterpriseHover ${
                  activeModule === index ? 'border-blue-500 bg-blue-50 shadow-enterprise' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-blue-600">
                  {getIcon(module.icon)}
                </div>
                <h3 className="text-lg font-semibold text-blue-950">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{module.description}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active.title}
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -28, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="glass-card relative overflow-hidden rounded-[32px] p-8 sm:p-10"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white">
                {getIcon(active.icon)}
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.26em] text-gold-500">{active.signal}</p>
              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-blue-950">{active.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-500">{active.description}</p>

              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-950">Operating Outcome</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-blue-950">{active.outcome}</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Controlled workflows, field visibility and institutional reporting designed for sensitive recovery operations.
                </p>
              </div>

              <a href="#contact" onClick={handleScrollTo('#contact')} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-gold-500">
                Discuss this capability <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}