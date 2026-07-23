import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fUp } from '../sections/shared/motion';

const STAGES = ['Capability', 'Execution', 'Evidence', 'Deliverable', 'Business Outcome'];

// Capability -> Execution -> Evidence -> Client Deliverable -> Business
// Outcome, traced for one flagship capability per page (approved IA
// blueprint, evolution 3). `steps` is an array of exactly 5 short strings,
// one per STAGES entry, in order.
export default function CapabilityInAction({ title, steps = [] }) {
  if (steps.length !== 5) return null;

  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-slate-400">Capability in Action{title ? ` — ${title}` : ''}</span>
      <div className="mt-4 flex items-stretch flex-wrap gap-0">
        {steps.map((text, i) => {
          const isLast = i === steps.length - 1;
          return (
            <React.Fragment key={STAGES[i]}>
              <div
                className={
                  isLast
                    ? 'flex-1 min-w-[150px] rounded-xl border border-[#0072bc]/25 bg-[#0072bc]/5 p-4'
                    : 'flex-1 min-w-[150px] rounded-xl border border-slate-200 bg-slate-50 p-4'
                }
              >
                <span className={isLast ? 'font-mono text-[9px] font-bold uppercase tracking-wide text-[#0072bc]' : 'font-mono text-[9px] font-bold uppercase tracking-wide text-slate-400'}>
                  {STAGES[i]}
                </span>
                <p className="mt-1.5 text-[12.5px] leading-snug text-slate-700">{text}</p>
              </div>
              {!isLast && (
                <div className="hidden sm:flex items-center justify-center w-6 shrink-0 text-slate-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}
