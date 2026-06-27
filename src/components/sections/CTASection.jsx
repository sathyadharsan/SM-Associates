import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fUp } from './shared/motion';
import { DEFAULT_CTA } from './shared/sectionDefaults';
import { serifHeading } from './shared/typography';

// Reads `content.cta: {heading, subheading, buttonText, href}`, falling
// back to a generic default so this section never renders empty.
export default function CTASection({ content }) {
  const cta = content.cta || DEFAULT_CTA;

  return (
    <section id="enquiry" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fUp}>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl font-bold tracking-[-0.01em] text-slate-900 mb-4">{cta.heading}</h2>
          {cta.subheading && <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{cta.subheading}</p>}
          <a href={cta.href || '/contact'} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-9 py-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200">
            {cta.buttonText} <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
