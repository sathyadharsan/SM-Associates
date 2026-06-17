import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { coverageNodes, coverageStats } from '../data/homeData';

export default function TamilNaduCoverageSection() {
  return (
    <section id="coverage" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tamil Nadu Operational Coverage"
          title="District-level recovery execution across Tamil Nadu."
          description="SM Associates combines field strength, local coordination and structured recovery workflows to support lenders across Tamil Nadu recovery markets."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card rounded-[32px] p-8 sm:p-10">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 to-white p-6">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative grid gap-4 sm:grid-cols-2">
                {coverageNodes.map((node, index) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className="glass-card flex items-center justify-between rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <p className="font-semibold text-blue-950">{node}</p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Active</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {coverageStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass-card rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-enterpriseHover"
              >
                <p className="text-4xl font-semibold tracking-[-0.04em] text-blue-950">{stat.value}</p>
                <h3 className="mt-3 text-xl font-semibold text-blue-950">{stat.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
