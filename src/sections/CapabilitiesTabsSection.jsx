import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { capabilityTabs } from '../data/homeData';

export default function CapabilitiesTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Operational Capabilities"
          title="A structured approach to financial risk resolution."
          description="Each capability is built around documented workflows, trained teams, escalation control and outcome tracking for institutional recovery operations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card rounded-[20px] p-3">
            <div className="grid gap-2">
              {capabilityTabs.map((tab, index) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-left text-sm font-bold transition ${
                    activeTab === index
                      ? 'bg-navy-900 text-navy-950'
                      : 'text-slate-600 hover:bg-white hover:text-navy-900'
                  }`}
                >
                  <span>{tab.title}</span>
                  <span className={`h-2 w-2 rounded-full ${activeTab === index ? 'bg-gold-400' : 'bg-slate-200'}`} />
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={capabilityTabs[activeTab].title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-[20px] p-7 sm:p-9"
            >
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-gold-500">
                Capability {String(activeTab + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-navy-900">{capabilityTabs[activeTab].title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-500">{capabilityTabs[activeTab].description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilityTabs[activeTab].points.map(point => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <p className="text-sm font-semibold leading-6 text-navy-900">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}