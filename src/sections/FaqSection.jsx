import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { flagshipFaqs } from '../data/flagshipHomeData';

function FaqItem({ faq, open, onToggle, index }) {
  const innerRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    wrap.style.height = open ? `${inner.offsetHeight}px` : '0';
  }, [open]);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
      <button
        type="button"
        className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
        onClick={onToggle}
      >
        <span>{faq.q}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'bg-[#0072bc] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        ref={wrapRef}
      >
        <div className="p-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1" ref={innerRef}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative" id="faq">
      <div className="fg-wrap max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight text-center">
            Frequently Asked Questions
          </h2>
          {/* Premium Level Accent Line */}
          <div className="mt-4 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-lg mt-3">
            Clear answers regarding compliance, data security, field operations, and resolution timelines.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {flagshipFaqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FaqItem
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
