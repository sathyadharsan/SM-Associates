import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { serviceCards } from '../data/serviceCards';
import ServiceCreditCard, { CARD_SPRING } from '../components/cards/ServiceCreditCard';
import '../styles/service-cards.css';

const TOTAL = serviceCards.length;

// Credit Card Wallet Rack geometry. Index 0 is the card in hand; each step back
// shifts up and right into the wallet rack slot, leaving the top brand header showing.
const poseFor = (depth) => ({
  x: depth === 0 ? 0 : depth * 12,
  y: depth === 0 ? 36 : 36 - depth * 12,
  scale: Math.max(0.88, 1 - depth * 0.02),
  rotate: depth === 0 ? 0 : (depth % 2 === 1 ? -2 : 2),
  zIndex: TOTAL - depth,
  opacity: depth > 5 ? 0 : 1,
});

// Detail copy reveals as a short stagger once a card reaches the front.
const detailStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const detailItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicesOverviewSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  // Once the visitor drives the deck themselves, scroll stops reassigning the
  // active card — otherwise their choice would be silently overridden.
  const userControlled = useRef(false);

  // Brings a card to the front of the deck. Used by the position indicator and
  // by swipe, where "show me this one" is the expected meaning.
  const bringToFront = useCallback((index) => {
    userControlled.current = true;
    setActive(((index % TOTAL) + TOTAL) % TOTAL);
  }, []);

  // Clicking a card slides it to the BACK of the deck, the way you would push
  // the top card of a physical stack behind the rest. Placing card `index` at
  // the deepest position means the next card becomes the front one, which is
  // exactly `index + 1` under the circular depth model used in poseFor().
  const sendToBack = useCallback((index) => {
    userControlled.current = true;
    setActive((index + 1) % TOTAL);
  }, []);

  // Scroll-linked progression. Deliberately NOT a pin/scroll-jack: the page
  // scrolls normally and the deck simply advances as the section travels
  // through the viewport, so touch scrolling is never hijacked.
  useEffect(() => {
    if (reduceMotion) return undefined;
    const el = sectionRef.current;
    if (!el) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking || userControlled.current) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const rect = el.getBoundingClientRect();
        const travel = rect.height + window.innerHeight;
        if (travel <= 0) return;
        const progress = (window.innerHeight - rect.top) / travel;
        if (progress < 0 || progress > 1) return;
        // Middle 70% of the pass maps onto the deck, so the first and last
        // cards each get a moment to sit still.
        const eased = Math.min(1, Math.max(0, (progress - 0.15) / 0.7));
        setActive(Math.min(TOTAL - 1, Math.floor(eased * TOTAL)));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion]);

  // Keyboard: arrow keys walk the deck when focus is inside it.
  const onDeckKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      bringToFront(active + 1);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      bringToFront(active - 1);
    }
  };

  const current = serviceCards[active];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >

      <div className="fg-wrap relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">SERVICE CATEGORIES</span>
          <h2 className="fg-section-title">Six Portfolio Management Capabilities. One Reliable Partner.</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Details ── */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={detailStagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              >
                <motion.span
                  variants={detailItem}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0072bc]/20 bg-[#0072bc]/10 px-3.5 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0072bc]"
                >
                  {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')} · {current.finish}
                </motion.span>

                <motion.h3
                  variants={detailItem}
                  className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
                >
                  {current.name}
                </motion.h3>

                <motion.p variants={detailItem} className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  {current.desc}
                </motion.p>

                <motion.ul variants={detailItem} className="mt-6 space-y-2.5">
                  {current.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[14.5px] font-semibold text-slate-800">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072bc]/10 text-[#0072bc]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={detailItem}
                  className="mt-6 flex items-center gap-2.5 border-t border-slate-200 pt-5 font-mono text-[11.5px] uppercase tracking-wider text-slate-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                  {current.timeline}
                </motion.div>

                <motion.div variants={detailItem} className="mt-7">
                  <Link
                    to={current.href}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-shadow hover:shadow-xl hover:shadow-[#0072bc]/30"
                  >
                    Explore {current.name.split(' & ')[0]}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Deck ── */}
          <div className="order-1 lg:order-2 pt-6 lg:pt-10">
            <motion.div
              className="svc-deck relative mx-auto w-full max-w-[440px]"
              // Tall enough to contain the fanned tail as well as the front
              // card — sized short, the deepest cards ran past the container
              // and collided with the position indicator below.
              style={{ height: 'clamp(370px, 36vw, 450px)' }}
              onKeyDown={onDeckKeyDown}
              drag={reduceMotion ? false : 'y'}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (info.offset.y < -50) bringToFront(active + 1);
                else if (info.offset.y > 50) bringToFront(active - 1);
              }}
              role="group"
              aria-roledescription="card deck"
              aria-label="Service categories — click a card to send it to the back, or use arrow keys and swipe to change card"
            >
              {serviceCards.map((card, index) => {
                const depth = (index - active + TOTAL) % TOTAL;
                return (
                  <ServiceCreditCard
                    key={card.id}
                    card={card}
                    pose={poseFor(depth)}
                    isActive={depth === 0}
                    onSelect={() => bringToFront(index)}
                    position={index + 1}
                    total={TOTAL}
                  />
                );
              })}
            </motion.div>

            {/* Deck position indicator */}
            <div className="mt-7 flex items-center justify-center gap-2">
              {serviceCards.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => bringToFront(index)}
                  aria-label={`Show ${card.name}`}
                  aria-current={index === active}
                  className="group p-1.5"
                >
                  <motion.span
                    className="block h-1.5 rounded-full"
                    animate={{
                      width: index === active ? 26 : 8,
                      backgroundColor: index === active ? '#0072bc' : '#cbd5e1',
                    }}
                    transition={reduceMotion ? { duration: 0 } : CARD_SPRING}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link to="/services" className="text-[13px] font-bold text-[#0072bc] hover:underline">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
