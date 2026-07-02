import { motion } from 'framer-motion';
import ClientLogoTile from './ClientLogoTile';

export default function ClientLogoSection({ title, clients }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
      <div className="mb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          {title}
        </motion.h2>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 56 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 block h-1 rounded-full bg-brand-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {clients.map((client, i) => (
          <ClientLogoTile key={client.slug} client={client} category={title} index={i} />
        ))}
      </div>
    </div>
  );
}
