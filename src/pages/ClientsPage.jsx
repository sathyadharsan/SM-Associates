import { motion } from 'framer-motion';
import { clientSections } from '../data/clientsPageData';
import ClientLogoSection from '../components/clients/ClientLogoSection';

export default function ClientsPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-white pb-16 pt-44 text-center">
        <div className="aurora-a absolute left-[10%] top-[-10%] h-[480px] w-[480px] rounded-full blur-[110px]"
          style={{ background: 'radial-gradient(circle, rgba(51,102,255,0.10), transparent 70%)' }} />
        <div className="aurora-b absolute right-[8%] top-[0%] h-[420px] w-[420px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)' }} />

        <div className="relative mx-auto max-w-5xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Our Clients
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="whitespace-nowrap font-sora text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.4rem]"
          >
            Trusted by Leading Financial Institutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            Serving Banks, NBFCs, Housing Finance Companies and Fintech Lenders Across India
          </motion.p>
        </div>
      </section>

      <div className="relative">
        {clientSections.map((section, i) => (
          <section
            key={section.title}
            className={`py-16 sm:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <ClientLogoSection title={section.title} clients={section.clients} />
          </section>
        ))}
      </div>
    </div>
  );
}
