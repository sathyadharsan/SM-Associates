import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`mx-auto flex max-w-4xl flex-col gap-4 ${alignClass} ${className}`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">{eyebrow}</span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
