import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, ShieldCheck, TrendingUp, ClipboardCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { resourceCards } from '../data/homeData';

const iconMap = {
  FileText: <FileText className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Download: <Download className="h-6 w-6" />,
  ClipboardCheck: <ClipboardCheck className="h-6 w-6" />
};

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resources & Insights"
          title="Thought leadership and operational insights for financial institutions."
          description="Access our collection of case studies, industry insights, and regulatory updates to stay ahead in recovery and risk management."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-card group block rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-enterpriseHover"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-gold-500">
                {iconMap[card.icon] || <FileText className="h-6 w-6" />}
              </div>
              <h3 className="text-xl font-semibold text-blue-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{card.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-gold-500">
                Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}