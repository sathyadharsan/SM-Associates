import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageLayout({ eyebrow, title, description, children, cta }) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-20 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-700">{eyebrow}</p>
        )}
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] text-blue-950 sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">{description}</p>
        )}

        <div className="mt-10">{children}</div>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card mt-16 rounded-[32px] p-8 sm:p-12 lg:p-14"
          >
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-blue-950 sm:text-4xl">
              {cta.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">{cta.subheading}</p>
            <Link
              to={cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 font-bold text-white shadow-soft transition hover:bg-blue-700"
            >
              {cta.buttonText} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
