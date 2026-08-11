import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CARD_WIDTH = 320;

// Small bordered logo chip + name caption beneath it — matches a compact
// "verified partner directory" style rather than a loose logo wall.
// Hovering (or tapping on touch devices) reveals an engagement profile
// card centered above the logo. Cards near the viewport edges align to
// the tile's left/right edge instead so they never render off-screen.
export default function ClientLogoTile({ client, category, index = 0 }) {
  const { name, logo, products, services, since, states } = client;
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState('center');
  const [vAlign, setVAlign] = useState('top'); // 'top' (above tile) or 'bottom' (below tile)
  const tileRef = useRef(null);

  const openCard = () => {
    const rect = tileRef.current?.getBoundingClientRect();
    if (rect) {
      // Horizontal placement check
      const centerX = rect.left + rect.width / 2;
      const half = CARD_WIDTH / 2;
      if (centerX - half < 16) setAlign('left');
      else if (centerX + half > window.innerWidth - 16) setAlign('right');
      else setAlign('center');

      // Vertical placement check: header takes ~110px, card height ~260px.
      // If tile is near top (< 280px from top viewport edge), open card BELOW tile.
      if (rect.top < 280) {
        setVAlign('bottom');
      } else {
        setVAlign('top');
      }
    }
    setOpen(true);
  };

  const cardStyle =
    align === 'left' ? { left: 0 }
    : align === 'right' ? { right: 0 }
    : { left: '50%', marginLeft: -(CARD_WIDTH / 2) };

  const arrowPos =
    align === 'left' ? 'ml-14'
    : align === 'right' ? 'ml-auto mr-14'
    : 'mx-auto';

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative flex w-36 flex-col items-center gap-2 sm:w-44"
      style={{ zIndex: open ? 50 : 'auto' }}
      onMouseEnter={openCard}
      onMouseLeave={() => setOpen(false)}
      onFocus={openCard}
      onBlur={() => setOpen(false)}
      onClick={() => (open ? setOpen(false) : openCard())}
      tabIndex={0}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: vAlign === 'top' ? 12 : -12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: vAlign === 'top' ? 8 : -8, scale: 0.96 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-none absolute z-50 w-80 ${
              vAlign === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
            }`}
            style={cardStyle}
          >
            {vAlign === 'bottom' && (
              <div className={`-mb-1.5 h-3 w-3 rotate-45 border-l border-t border-slate-200 bg-white ${arrowPos}`} />
            )}

            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
              <button
                type="button"
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                className="pointer-events-auto absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>

              <h4 className="pr-8 font-sora text-base font-semibold leading-snug text-slate-900">{name}</h4>
              <span className="mt-1.5 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-500">
                {category}
              </span>

              {products && products.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Portfolios We Manage
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {products.map((p) => (
                      <span
                        key={p}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {services && (
                <div className="mt-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Services
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600">{services}</p>
                </div>
              )}

              {(since || states) && (
                <p className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] font-medium text-slate-400">
                  {[since && `Partner since ${since}`, states].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>

            {vAlign === 'top' && (
              <div className={`-mt-1.5 h-3 w-3 rotate-45 border-b border-r border-slate-200 bg-white ${arrowPos}`} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex h-24 w-36 items-center justify-center rounded-xl overflow-hidden bg-white px-4 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,114,188,0.16)] sm:h-28 sm:w-44">
        {!failed ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="max-h-16 w-auto max-w-full object-contain sm:max-h-20 transition-transform duration-300"
            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
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
