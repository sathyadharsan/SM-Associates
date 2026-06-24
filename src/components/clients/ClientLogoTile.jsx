import { useState } from 'react';
import { motion } from 'framer-motion';

// Small bordered logo chip + name caption beneath it — matches a compact
// "verified partner directory" style rather than a loose logo wall.
export default function ClientLogoTile({ name, logo, index = 0 }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex w-36 flex-col items-center gap-2 sm:w-44"
    >
      <div className="flex h-24 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-brand-200 hover:shadow-[0_10px_28px_rgba(51,102,255,0.18)] sm:h-28 sm:w-44">
        {!failed ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="max-h-16 w-auto max-w-full object-contain sm:max-h-20"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 font-sora text-lg font-semibold text-slate-300">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span className="w-full text-center font-mono text-[13px] font-medium uppercase leading-snug tracking-wide text-slate-600">
        {name}
      </span>
    </motion.div>
  );
}
