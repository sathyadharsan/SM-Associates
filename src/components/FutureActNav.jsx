import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACTS } from '../sections/future/futureShared';

export default function FutureActNav() {
  return null;
  const [hoveredAct, setHoveredAct] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const actEntries = [
        { id: 'future-act-1', mappedId: 'future-act-1' },
        { id: 'future-act-2', mappedId: 'future-act-2' },
        { id: 'future-act-3', mappedId: 'future-act-3' },
        { id: 'future-act-4', mappedId: 'future-act-4' },
        { id: 'future-act-5', mappedId: 'future-act-5' },
        { id: 'future-act-6', mappedId: 'future-act-6' },
        { id: 'future-act-6a', mappedId: 'future-act-6' },
        { id: 'future-act-6b', mappedId: 'future-act-6' },
      ];

      const triggerPoint = window.innerHeight * 0.4;
      let matched = 'future-act-1';

      for (const entry of actEntries) {
        const el = document.getElementById(entry.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            matched = entry.mappedId;
            break;
          }
        }
      }

      setActiveAct(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAct = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4.5 lg:flex">
      <div className="flex flex-col gap-3.5 rounded-full border border-slate-200/80 bg-white/85 p-3 shadow-xl backdrop-blur-md">
        {ACTS.map((act, index) => {
          const isActive = activeAct === act.id || (act.id === 'future-act-6' && (activeAct === 'future-act-6a' || activeAct === 'future-act-6b'));
          const isHovered = hoveredAct === act.id;

          return (
            <div
              key={act.id}
              className="relative flex items-center justify-end group"
              onMouseEnter={() => setHoveredAct(act.id)}
              onMouseLeave={() => setHoveredAct(null)}
            >
              {/* Tooltip Badge */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-9 pointer-events-none whitespace-nowrap rounded-lg border border-slate-200 bg-slate-900 px-3 py-1.5 font-mono text-[11px] font-semibold text-white shadow-lg"
                  >
                    <span className="text-[#4fa6e0] font-bold">Act 0{index + 1}</span> · {act.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dot Button */}
              <button
                type="button"
                onClick={() => scrollToAct(act.id)}
                aria-label={`Jump to ${act.label}`}
                className="relative flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-200 hover:scale-125 focus:outline-none"
              >
                <motion.span
                  className="block rounded-full"
                  animate={{
                    width: isActive ? 12 : 6,
                    height: isActive ? 12 : 6,
                    backgroundColor: isActive ? '#0072bc' : '#94a3b8',
                  }}
                  transition={{ duration: 0.25 }}
                />
                {isActive && (
                  <motion.span
                    layoutId="activeActRing"
                    className="absolute inset-0 rounded-full border-2 border-[#0072bc]"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
