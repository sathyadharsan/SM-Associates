import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fUp } from '../sections/shared/motion';

// Component B from the approved IA blueprint — a left-to-right chip chain,
// 4-7 short steps, replacing a "how it works" paragraph. The last step is
// visually distinct (ghost/outline) since it's typically the ongoing
// visibility outcome (a live dashboard) rather than a one-time action.
export default function WorkflowChain({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fUp}
      className="flex flex-wrap items-center gap-2"
    >
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <React.Fragment key={step}>
            <span
              className={
                isLast
                  ? 'font-mono text-[12.5px] font-bold text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/25 px-4 py-2 rounded-full'
                  : 'font-mono text-[12.5px] font-bold text-white bg-[#0072bc] px-4 py-2 rounded-full'
              }
            >
              {step}
            </span>
            {!isLast && <ArrowRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
