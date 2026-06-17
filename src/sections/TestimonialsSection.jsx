import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/homeData';

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Executive Testimonials"
          title="Trusted by recovery and risk leaders."
          description="Our clients rely on professional conduct, structured recovery workflows and dependable coordination across sensitive financial operations."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-8 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-500">
                <Quote className="h-6 w-6" />
              </div>
              <p className="text-lg leading-8 text-navy-900">{testimonial.quote}</p>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{testimonial.role}</p>
                <p className="mt-2 inline-flex rounded-full bg-navy-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-navy-950">
                  {testimonial.institution}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
