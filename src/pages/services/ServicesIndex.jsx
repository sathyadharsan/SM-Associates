import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
            Our Services
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            Complete Recovery &amp; Risk Management Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            From pre-disbursal verification to post-disbursal collections, SARFAESI enforcement to legal coordination.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Categories"
          title="All Services at a Glance"
          description="Our comprehensive portfolio covers the entire recovery lifecycle for financial institutions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            { title: 'Pre Disbursal Services', desc: 'CPV, CPA, Telephone Verification, Seeding, skip tracing.', to: '/services/pre-disbursal' },
            { title: 'Post Disbursal Services', desc: 'Field collections, payment pickup, recovery follow-up.', to: '/services/post-disbursal' },
            { title: 'Fraud Control Services', desc: 'Investigation-led fraud prevention and risk intelligence.', to: '/services/fraud-control' },
            { title: 'SARFAESI Services', desc: 'Enforcement, possession and legal recovery coordination.', to: '/services/sarfaesi' },
            { title: 'Legal Services', desc: 'Court, advocate and documentation coordination.', to: '/services/legal' },
            { title: 'Field Collections', desc: 'Disciplined field operations across geographies.', to: '/services/field-collections' },
            { title: 'Yard Management Services', desc: 'Authorized yard services for asset custody.', to: '/services/yard-management' },
            { title: 'Manpower Solutions', desc: 'Trained manpower for recovery operations.', to: '/services/manpower' }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <h3 className="text-2xl font-semibold text-blue-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
              <Link
                to={service.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-gold-500"
              >
                Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}