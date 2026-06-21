import { motion } from 'framer-motion';

export default function CareersPage() {
  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-card rounded-[32px] p-10 lg:p-16">
          <h1 className="text-4xl font-semibold tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-7xl">Careers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Join our team of recovery professionals, legal coordinators and risk experts.
          </p>
          <div className="mt-12">
            <p className="text-slate-500">Career opportunities coming soon.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}