import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import Button from '../../components/Button';

export default function FieldCollectionsPage() {
  const handleScrollTo = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
            Field Collections
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl">
            Disciplined Field Collection Operations
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            Field, call centre and digital collection workflows aligned through escalation protocols.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          align="left"
          eyebrow="Field Collections Service"
          title="Pan Tamil Nadu field collection operations with professional execution."
          description="Our field teams execute structured collection workflows across portfolios with daily reporting systems."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[24px] p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-950">Key Benefits</h3>
            <ul className="mt-6 space-y-4">
              {['50 accounts/executive/month', 'Daily reporting system', 'Escalation protocols', 'Professional conduct'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold-500" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-[24px] p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-950">Service Details</h3>
            <p className="mt-4 text-slate-500">
              SM Associates maintains field collection teams across Tamil Nadu with structured escalation
              protocols, daily reporting systems, and professional borrower engagement.
            </p>
            <a
              href="#contact"
              onClick={handleScrollTo('#contact')}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-950"
            >
              Discuss Requirements <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}