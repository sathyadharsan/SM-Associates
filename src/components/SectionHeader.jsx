import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center', className = '', inverted = false }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`mx-auto flex max-w-4xl flex-col gap-4 ${alignClass} ${className}`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: '#0072bc' }}>{eyebrow}</span>
      <h2 className={`font-sora text-balance text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl ${inverted ? 'text-white' : 'text-gray-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-8 sm:text-lg ${inverted ? 'text-white/65' : 'text-slate-500'}`}>{description}</p>
      )}
    </motion.div>
  );
}
