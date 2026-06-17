import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { industries } from '../data/homeData';
import { getIcon } from '../utils/icons.jsx';

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const active = industries[activeIndustry];

  return (
    <section id="industries" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry Solutions"
          title="Recovery operations built for every lending segment."
          description="Our operating model is designed for banks, NBFCs, housing finance companies, fintech lenders, ARCs and corporate lending institutions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card rounded-[28px] p-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  onClick={() => setActiveIndustry(index)}
                  className={`flex items-center gap-4 rounded-2xl p-4 text-left transition duration-300 ${
                    activeIndustry === index
                      ? 'bg-blue-950 text-white shadow-enterprise'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-950'
                  }`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    activeIndustry === index ? 'bg-white/12 text-white' : 'bg-blue-50 text-blue-950'
                  }`}>
                    {getIcon(industry.icon)}
                  </div>
                  <div>
                    <p className="font-bold">{industry.title}</p>
                    <p className={`text-sm ${activeIndustry === index ? 'text-white/65' : 'text-slate-500'}`}>
                      {industry.cta}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -28, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="glass-card relative overflow-hidden rounded-[32px] p-8 sm:p-10"
            >
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white">
                  {getIcon(active.icon)}
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.26em] text-gold-500">Industry Solution</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-blue-950">{active.title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-500">{active.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {['Recovery', 'Collections', 'Verification'].map(item => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-bold text-blue-950">{item}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">Operating layer for lender-specific mandates.</p>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-gold-500">
                  Discuss {active.title} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
