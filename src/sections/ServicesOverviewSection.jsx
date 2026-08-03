import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { serviceCards } from '../data/serviceCards';
import ServiceCreditCard, { CARD_SPRING } from '../components/cards/ServiceCreditCard';
import { mountScrollStory, useDesktopPin } from '../utils/scrollStoryMath';
import '../styles/service-cards.css';

const TOTAL = serviceCards.length;
const SEGMENT_VH = 90;

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

export default function ServicesOverviewSection() {
  const reduceMotion = useReducedMotion();
  const isPinned = useDesktopPin({ minWidth: 1024, minHeight: 600 });
  const [active, setActive] = useState(0);

  const wrapRef = useRef(null);
  const mobileSectionRef = useRef(null);
  const numeralRef = useRef(null);
  const progressRef = useRef(null);
  const textRefs = useRef([]);
  const wordRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const userControlled = useRef(false);

  const bringToFront = useCallback((index) => {
    userControlled.current = true;
    const next = ((index % TOTAL) + TOTAL) % TOTAL;
    activeIndexRef.current = next;
    setActive(next);
  }, []);

  // Non-pinned / mobile scroll link
  useEffect(() => {
    if (reduceMotion || isPinned) return undefined;
    const el = mobileSectionRef.current;
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
        const eased = Math.min(1, Math.max(0, (progress - 0.15) / 0.7));
        setActive(Math.min(TOTAL - 1, Math.floor(eased * TOTAL)));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion, isPinned]);

  // Desktop pinned scroll-driven storytelling engine
  useEffect(() => {
    if (reduceMotion || !isPinned) return undefined;

    const cleanup = mountScrollStory({
      wrapRef,
      cardRefs: { current: [] },
      textRefs,
      wordRefs,
      total: TOTAL,
      onProgress: ({ progress, activeIndex }) => {
        if (activeIndex !== activeIndexRef.current) {
          activeIndexRef.current = activeIndex;
          setActive(activeIndex);
        }
        if (numeralRef.current) {
          numeralRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${progress * 100}%`;
        }
      },
    });

    return cleanup;
  }, [reduceMotion, isPinned]);

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

  // Mobile / non-pinned layout fallback
  if (!isPinned) {
    return (
      <section id="services" className="relative bg-white py-20 sm:py-28">
        <div ref={mobileSectionRef}>
          <div className="fg-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="fg-section-header">
              <h2 className="fg-section-title">Six Portfolio Management Capabilities. One Reliable Partner.</h2>
            </div>
          </div>

          <div className="fg-wrap relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Details */}
              <div className="order-2 lg:order-1">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#0072bc]/20 bg-[#0072bc]/10 px-3.5 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0072bc]">
                    {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')} · {current.finish}
                  </span>

                  <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    {current.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                    {current.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {current.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[14.5px] font-semibold text-slate-800">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072bc]/10 text-[#0072bc]">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2.5 border-t border-slate-200 pt-5 font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                    {current.timeline}
                  </div>

                  <div className="mt-7">
                    <Link
                      to={current.href}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-shadow hover:shadow-xl hover:shadow-[#0072bc]/30"
                    >
                      Explore {current.name.split(' & ')[0]}
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Deck */}
              <div className="order-1 lg:order-2 pt-6 lg:pt-10">
                <div
                  className="svc-deck relative mx-auto w-full max-w-[440px]"
                  style={{ height: 'clamp(370px, 36vw, 450px)' }}
                  onKeyDown={onDeckKeyDown}
                  tabIndex={0}
                  role="group"
                  aria-label="Service categories deck"
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
                </div>

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
        </div>
      </section>
    );
  }

  // Desktop Pinned Storytelling Section
  return (
    <section id="services" className="relative bg-white" aria-label="Core Recovery Services Overview">
      <div ref={wrapRef} className="relative z-10" style={{ height: `${TOTAL * SEGMENT_VH}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-36 sm:pt-40 pb-6">
          <div className="fg-wrap mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col items-center justify-center text-center w-full relative">
              <div className="fg-section-header text-center flex flex-col items-center justify-center" style={{ marginBottom: 0, textAlign: 'center' }}>
                <h2 className="fg-section-title text-center">Six Portfolio Management Capabilities. One Reliable Partner.</h2>
                {/* Premium Level Accent Line */}
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
                  <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
                </div>
              </div>
              <div className="hidden absolute right-0 top-1/2 -translate-y-1/2 shrink-0 text-right font-mono sm:block">
                <span ref={numeralRef} className="text-3xl font-black text-slate-900">01</span>
                <span className="text-lg font-bold text-slate-400"> / {String(TOTAL).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="fg-wrap relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Details Stack (single active chapter with AnimatePresence mode="wait" hand-off) */}
              <div className="relative h-[440px] min-h-[440px] overflow-hidden order-2 lg:order-1">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={serviceCards[active].id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-20 flex flex-col justify-start"
                  >
                    <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                      {serviceCards[active].name}
                    </h3>

                    <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 font-medium">
                      {serviceCards[active].desc}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {serviceCards[active].features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[14.5px] font-semibold text-slate-800">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072bc]/10 text-[#0072bc]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-2.5 border-t border-slate-200/90 pt-3.5 font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc]" />
                      {serviceCards[active].timeline}
                    </div>

                    <div className="mt-5">
                      <Link
                        to={serviceCards[active].href}
                        className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-all hover:bg-[#005a96] hover:shadow-xl hover:shadow-[#0072bc]/30"
                      >
                        Explore {serviceCards[active].name.split(' & ')[0]}
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Deck (driven by active index) */}
              <div className="order-1 lg:order-2">
                <div
                  className="svc-deck relative mx-auto w-full max-w-[440px]"
                  style={{ height: 'clamp(260px, 26vw, 320px)' }}
                  role="group"
                  aria-label="Service categories card deck — scroll to move through the deck"
                >
                  {serviceCards.map((card, index) => {
                    const depth = (index - active + TOTAL) % TOTAL;
                    return (
                      <ServiceCreditCard
                        key={card.id}
                        card={card}
                        pose={poseFor(depth)}
                        isActive={depth === 0}
                        position={index + 1}
                        total={TOTAL}
                      />
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {serviceCards.map((card, index) => (
                    <span key={card.id} className="group p-1.5">
                      <motion.span
                        className="block h-1.5 rounded-full"
                        animate={{
                          width: index === active ? 26 : 8,
                          backgroundColor: index === active ? '#0072bc' : '#cbd5e1',
                        }}
                        transition={reduceMotion ? { duration: 0 } : CARD_SPRING}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/services" className="text-[13px] font-bold text-[#0072bc] hover:underline">
                View all services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
