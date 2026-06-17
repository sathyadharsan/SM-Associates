import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { processSteps } from '../data/homeData';

export default function ProcessFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recovery Workflow Timeline"
          title="From verification to resolution through one controlled operating flow."
          description="A disciplined process flow connects verification, collections, recovery, asset management, legal coordination and final resolution through controlled operational stages."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="relative">
            <div className="absolute bottom-4 left-9 top-4 hidden w-0.5 bg-slate-200 lg:block" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute bottom-4 left-9 top-4 z-10 hidden w-0.5 origin-top bg-gold-400 lg:block"
            />

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className={`relative z-10 flex w-full items-center gap-4 rounded-[20px] border p-4 text-left transition duration-300 hover:shadow-enterpriseHover ${
                    activeStep === index
                      ? 'border-gold-400/50 bg-white shadow-enterprise'
                      : 'border-slate-200 bg-white/80 hover:border-gold-400/35'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold transition duration-300 ${
                      activeStep === index ? 'bg-navy-900 text-navy-950' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">Click to view workflow detail</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={processSteps[activeStep].title}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -28, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-[28px] p-8 sm:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-gold-500">
                Workflow Stage {processSteps[activeStep].step}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-navy-900">
                {processSteps[activeStep].title}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-500">{processSteps[activeStep].description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Field Execution', 'Documentation', 'Escalation Control', 'Outcome Tracking'].map(item => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold text-navy-900">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Controlled workflow layer for recovery visibility.</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  key={activeStep}
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-navy-900"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
