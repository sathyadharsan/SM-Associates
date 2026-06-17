import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industryLinks = [
  { title: 'Banking', to: '/industries/banking' },
  { title: 'NBFC', to: '/industries/nbfc' },
  { title: 'Housing Finance', to: '/industries/housing-finance' },
  { title: 'Fintech', to: '/industries/fintech' },
  { title: 'ARC', to: '/industries/arc' }
];

export default function IndustriesIndex() {
  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-card rounded-[32px] p-10 lg:p-16">
          <h1 className="text-4xl font-semibold tracking-[-0.055em] text-blue-950 sm:text-5xl lg:text-7xl">Industries</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Recovery operations built for every lending segment.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industryLinks.map(link => (
              <Link key={link.title} to={link.to} className="glass-card rounded-[24px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-enterpriseHover">
                <h3 className="text-xl font-semibold text-blue-950">{link.title}</h3>
                <p className="mt-3 text-sm text-slate-500">Industry-specific solutions.</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}