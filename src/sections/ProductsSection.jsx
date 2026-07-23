import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { products } from '../data/homeData';
import RichIcon from '../components/sections/shared/RichIcon';

export default function ProductsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio Coverage"
          title="Products handled across secured and unsecured lending."
          description="Our recovery and verification teams support financial institutions across a wide range of retail, secured, SME and specialized lending products."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card group rounded-[20px] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0072bc]/40 hover:shadow-enterpriseHover"
            >
              <div className="mb-5 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                <RichIcon type={product.icon || product.title} size={48} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-500">Recovery, collections and verification support.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}