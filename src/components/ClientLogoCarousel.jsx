import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { clientLogos } from '../data/clientLogos';

export default function ClientLogoCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20" style={{ background: '#f1f5f9' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
            Trusted By Leading Banks &amp; NBFCs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base leading-7 text-slate-500 sm:text-lg">
            Supporting recovery, SARFAESI, legal execution and field collections across financial institutions.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 px-2"
            animate={{ x: isHovered ? '0' : '-33.333%' }}
            transition={{
              duration: isHovered ? 0 : 30,
              ease: 'linear',
              repeat: isHovered ? 0 : Infinity,
              repeatType: 'loop'
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex h-20 min-w-[200px] items-center justify-center rounded-[16px] border border-slate-200 bg-white px-6 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto max-w-[140px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}