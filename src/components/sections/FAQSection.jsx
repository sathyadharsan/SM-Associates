import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fUp } from './shared/motion';
import { SECTION_DEFAULTS } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.faqsHeading`, `content.faqs: [{q, a}]`.
// Single-open accordion, mirroring the existing convention in
// BaseServiceLayout (src/components/layouts/ServiceLayouts.jsx) so FAQ
// interaction feels consistent across the site even though this is a
// separate, business-agnostic implementation.
export default function FAQSection({ content }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const items = content.faqs;
  if (!Array.isArray(items) || items.length === 0) return null;
  const defaults = SECTION_DEFAULTS.faq;

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fUp}
        className="mx-auto max-w-3xl px-4"
      >
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{defaults.eyebrow}</span>
          <h2 style={serifHeading} className="text-3xl font-bold tracking-[-0.01em] text-slate-900 mt-2">{content.faqsHeading || defaults.heading}</h2>
        </div>
        <div className="space-y-4">
          {items.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-sm font-bold text-slate-900 text-left py-1"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`h-4.5 w-4.5 text-slate-500 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-slate-600 border-t border-slate-200 pt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
