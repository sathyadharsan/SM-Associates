import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';

export default function IndustriesIndex() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
            Industries We Serve
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            Recovery Solutions for Every Lending Segment
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            Our operating model is designed for banks, NBFCs, housing finance companies, fintech lenders, ARCs and corporate lending institutions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry Specializations"
          title="Customized Recovery for Each Sector"
          description="We understand the unique requirements of different lending institutions and tailor our approach accordingly."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Banking', desc: 'Recovery, collections, verification and legal coordination for banking portfolios.', to: '/industries/banking' },
            { title: 'NBFC', desc: 'Scalable recovery operations for high-volume retail and SME lending portfolios.', to: '/industries/nbfc' },
            { title: 'Housing Finance', desc: 'Specialized recovery and repossession support for housing and mortgage portfolios.', to: '/industries/housing-finance' },
            { title: 'Asset Reconstruction Companies', desc: 'Operational support for stressed assets, enforcement actions and recovery execution.', to: '/industries/arc' },
            { title: 'Insurance', desc: 'Claims investigation and recovery support.', to: '/industries/insurance' },
            { title: 'FinTech', desc: 'Fast, compliant and data-driven recovery operations for digital lenders.', to: '/industries/fintech' }
          ].map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              className="glass-card group rounded-[24px] p-7 transition duration-300 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <h3 className="text-2xl font-semibold text-blue-950">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{industry.desc}</p>
              <Link
                to={industry.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-gold-500"
              >
                Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}