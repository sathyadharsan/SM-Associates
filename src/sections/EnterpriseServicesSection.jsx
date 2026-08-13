/**
 * EnterpriseServicesSection
 * ─────────────────────────────────────────────────────────────────────
 * World-class horizontal expandable accordion for SM Associates.
 *
 * Desktop (≥1024px)  — 8 horizontal cards; one expands at a time (70px→420px)
 * Tablet (768–1023px) — 2-column responsive grid
 * Mobile (<768px)    — Vertical accordion with swipe gesture
 *
 * Animation stack: Framer Motion layout + spring physics + GPU transforms
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { enterpriseServices } from '../data/enterpriseServicesData';

// ── Spring config ──────────────────────────────────────────────────
const SPRING = { type: 'spring', stiffness: 300, damping: 30 };
const SPRING_SLOW = { type: 'spring', stiffness: 220, damping: 28 };

// ── Animation variants ─────────────────────────────────────────────
const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1], delay: 0.22 },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.18 } },
};

const listStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.32 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Mouse spotlight hook ───────────────────────────────────────────
function useMouseSpotlight(ref) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [ref]);

  return pos;
}

// ── Cinematic 3D Active Expanded Card (Left Column) ──────────────────────
function ActiveServiceCard({ service, reduceMotion }) {
  const cardRef = useRef(null);
  const spotlight = useMouseSpotlight(cardRef);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 overflow-hidden rounded-[32px] h-full w-full flex flex-col justify-between p-8 border border-[#2563EB]/40 shadow-2xl shadow-slate-900/20 bg-[#0c1e38]"
    >
      {/* Mouse spotlight glass reflection */}
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[32px]"
          style={{
            background: `radial-gradient(320px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.06) 0%, transparent 70%)`,
            transition: 'background 0.1s',
          }}
        />
      )}

      {/* High-resolution background photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(15,23,42,0.48) 0%, rgba(10,18,35,0.82) 50%, rgba(5,10,22,0.92) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col justify-between h-full"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl font-mono text-[13px] font-bold bg-[#2563EB]/30 border border-[#2563EB]/50 text-blue-300 backdrop-blur-md shadow-sm">
            {service.number}
          </div>
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-blue-300/90 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
            ACTIVE SELECTION
          </span>
        </div>

        {/* Middle Info */}
        <div className="my-auto py-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-300 font-medium">
            {service.description}
          </p>
        </div>

        {/* Bottom Capabilities & Approach Panel */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 shadow-xl">
          <p className="mb-2 font-mono text-[9.5px] font-bold uppercase tracking-widest text-slate-300/80">
            CAPABILITIES &amp; OUTCOMES
          </p>
          <ul className="mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {service.capabilities.slice(0, 6).map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-[12px] font-medium text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                {cap}
              </li>
            ))}
          </ul>

          <p className="mb-2 font-mono text-[9.5px] font-bold uppercase tracking-widest text-slate-300/80">
            APPROACH
          </p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {service.approach.map((step) => (
              <span
                key={step}
                className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-blue-600/30 border border-blue-400/40 text-blue-200"
              >
                {step}
              </span>
            ))}
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-white transition-colors"
          >
            <span className="border-b border-white/30 pb-px group-hover:border-white">
              {service.cta}
            </span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Industrial Display Rack (Right Column Container) ─────────────────────
function IndustrialDisplayRack({ services, activeIndex, onSelectService, reduceMotion }) {
  return (
    <div
      className="relative flex flex-col justify-between p-6 rounded-[32px] border border-white/15 bg-gradient-to-b from-[#0e213b]/90 via-[#0a192e]/90 to-[#081527]/90 shadow-2xl shadow-black/40 backdrop-blur-xl h-[580px] w-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Metallic Status Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-2 px-1 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#60a5fa]" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-200">
            INDUSTRIAL DISPLAY RACK
          </span>
        </div>
        <span className="font-mono text-[10.5px] font-bold text-blue-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15 shadow-2xs">
          0{services.length} TOTAL SLOTS
        </span>
      </div>

      {/* Rack Stack Container */}
      <div className="relative flex-1 flex flex-col justify-between gap-2 overflow-hidden py-1" style={{ transformStyle: 'preserve-3d' }}>
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          if (isActive) return null;

          return (
            <RackCard
              key={service.id}
              service={service}
              isActive={false}
              onClick={() => onSelectService(index)}
              reduceMotion={reduceMotion}
            />
          );
        })}
      </div>
    </div>
  );
}

// ── Industrial Display Rack Card Strip ──────────────────────────────────
function RackCard({ service, isActive, onClick, reduceMotion }) {
  return (
    <motion.button
      type="button"
      layoutId={`service-card-${service.id}`}
      onClick={onClick}
      aria-label={`Select ${service.title}`}
      className={`group relative w-full h-[60px] rounded-2xl overflow-hidden text-left focus-visible:outline-none transition-all duration-200 shrink-0 ${
        isActive
          ? 'ring-2 ring-[#2563EB] shadow-lg opacity-40 pointer-events-none'
          : 'border border-slate-200/90 hover:border-[#2563EB]/50 hover:shadow-md'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={reduceMotion || isActive ? undefined : { y: -4, scale: 1.015, rotateY: -3 }}
      whileTap={reduceMotion || isActive ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vivid Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.65) 50%, rgba(15,23,42,0.40) 100%)',
        }}
      />

      {/* Card Content Bar */}
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        {/* Left: Badge + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg font-mono text-[11px] font-bold bg-white/20 border border-white/30 text-white backdrop-blur-md shrink-0">
            {service.number}
          </div>
          <span className="font-bold text-[14px] text-white tracking-tight truncate group-hover:text-blue-300 transition-colors">
            {service.title}
          </span>
        </div>

        {/* Right: Capabilities Count Badge */}
        <div className="flex items-center shrink-0">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-white/15 px-3 py-1 rounded-full border border-white/20 shadow-2xs">
            {service.capabilities?.length || 6} CAPS
          </span>
        </div>
      </div>
    </motion.button>
  );
}


// ── Expanded card ─────────────────────────────────────────────────
function ExpandedCard({ service, onCollapse, reduceMotion }) {
  const cardRef = useRef(null);
  const spotlight = useMouseSpotlight(cardRef);

  return (
    <motion.div
      ref={cardRef}
      layout
      layoutId={`card-${service.id}`}
      className="relative overflow-hidden focus-visible:outline-none"
      style={{
        width: 420,
        minWidth: 420,
        height: 520,
        borderRadius: 28,
        flexShrink: 0,
        border: '1.5px solid rgba(37,99,235,0.55)',
        boxShadow: '0 0 0 1px rgba(37,99,235,0.15), 0 30px 80px rgba(15,23,42,0.22)',
      }}
      transition={SPRING}
    >
      {/* Mouse spotlight glass reflection */}
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[28px]"
          style={{
            background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.055) 0%, transparent 70%)`,
            transition: 'background 0.1s',
          }}
        />
      )}

      {/* Background image with zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Dark gradient overlay 65% */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(0,0,0,0.42) 0%, rgba(10,18,35,0.72) 45%, rgba(5,10,22,0.88) 100%)',
        }}
      />

      {/* Glass content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={contentVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0 flex flex-col justify-between p-8"
          style={{ zIndex: 20 }}
        >
          {/* Top: number + collapse */}
          <div className="flex items-start justify-between">
            {/* Animated number badge */}
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl font-mono text-[13px] font-bold"
              style={{
                background: 'rgba(37,99,235,0.25)',
                border: '1px solid rgba(37,99,235,0.45)',
                color: '#93c5fd',
                backdropFilter: 'blur(8px)',
              }}
            >
              {service.number}
            </div>

            {/* Collapse button */}
            <button
              onClick={onCollapse}
              aria-label="Collapse card"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Middle: title + description */}
          <div>
            <h3
              className="text-[22px] font-bold leading-tight tracking-tight text-white"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
            >
              {service.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
              {service.description}
            </p>
          </div>

          {/* Bottom: glass morphism panel */}
          <div
            className="rounded-[18px] p-4"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            }}
          >
            {/* Capabilities */}
            <p
              className="mb-2.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Capabilities
            </p>
            <motion.ul
              variants={listStagger}
              initial="hidden"
              animate="show"
              className="mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5"
            >
              {service.capabilities.slice(0, 6).map((cap) => (
                <motion.li
                  key={cap}
                  variants={listItem}
                  className="flex items-center gap-1.5 text-[12px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.82)' }}
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full"
                    style={{ background: '#60a5fa' }}
                  />
                  {cap}
                </motion.li>
              ))}
            </motion.ul>

            {/* Approach tags */}
            <p
              className="mb-2 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Approach
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {service.approach.map((step) => (
                <span
                  key={step}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                  style={{
                    background: 'rgba(37,99,235,0.22)',
                    border: '1px solid rgba(37,99,235,0.35)',
                    color: '#93c5fd',
                  }}
                >
                  {step}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-all"
            >
              <span className="border-b border-white/30 pb-px transition-all duration-200 group-hover:border-white/70">
                {service.cta}
              </span>
              <motion.span
                className="inline-flex"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <ArrowUpRight size={14} className="text-[#60a5fa]" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ── Mobile Accordion Item ─────────────────────────────────────────
function MobileAccordionItem({ service, isOpen, onToggle }) {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        border: isOpen ? '1.5px solid rgba(37,99,235,0.5)' : '1px solid rgba(203,213,225,0.6)',
        background: '#fff',
        boxShadow: isOpen ? '0 12px 40px rgba(37,99,235,0.10)' : '0 2px 12px rgba(15,23,42,0.06)',
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        {/* Thumbnail */}
        <div
          className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <span
              className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: '#2563EB' }}
            >
              {service.number}
            </span>
            <span className="block text-[15px] font-bold text-slate-900">{service.title}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={SPRING_SLOW}
            className="ml-3 shrink-0 text-slate-400"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {/* Image banner */}
            <div
              className="relative h-44 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(0,0,0,0.30) 0%, rgba(10,18,35,0.65) 100%)',
                }}
              />
            </div>

            {/* Body content */}
            <div className="p-5">
              <p className="text-[14px] leading-relaxed text-slate-600">{service.description}</p>

              {/* Capabilities */}
              <p className="mt-4 mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Capabilities
              </p>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-1.5 text-[13px] text-slate-700">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#2563EB]" />
                    {cap}
                  </li>
                ))}
              </ul>

              {/* Approach */}
              <p className="mt-4 mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Approach
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.approach.map((step) => (
                  <span
                    key={step}
                    className="rounded-full px-3 py-1 text-[12px] font-semibold"
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.2)',
                      color: '#2563EB',
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB]"
              >
                {service.cta}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────
export default function EnterpriseServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate cards every 3 seconds (pauses when mouse is hovering over the section)
  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % enterpriseServices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [reduceMotion, isPaused]);

  // Keyboard navigation for desktop accordion
  const handleKeyDown = useCallback(
    (e, index) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((index + 1) % enterpriseServices.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(
          (index - 1 + enterpriseServices.length) % enterpriseServices.length
        );
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveIndex(index);
      }
    },
    []
  );

  const toggleMobile = useCallback((index) => {
    setMobileOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      id="enterprise-services"
      className="relative overflow-hidden bg-[#07162c] py-24 sm:py-32"
      aria-label="Enterprise Services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-[700px] text-center"
        >
          {/* Eyebrow Pill Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-center backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#60a5fa] animate-pulse" />
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: '#93c5fd' }}
            >
              Our Services
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[52px]"
            style={{ letterSpacing: '-0.022em' }}
          >
            Enterprise Recovery{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563EB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Capabilities
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-[620px] text-[16.5px] leading-relaxed text-slate-300">
            Future Ready Recovery Platform powered by AI, field intelligence, legal expertise and
            enterprise-grade recovery operations across every asset class.
          </p>
        </motion.div>

        {/* ── Cinematic 3D Interactive Services Showcase (≥1024px) ── */}
        <div
          ref={containerRef}
          className="hidden lg:grid grid-cols-12 gap-8 items-stretch max-w-[1440px] mx-auto min-h-[580px]"
          style={{ perspective: 1800, transformStyle: 'preserve-3d' }}
          role="group"
          aria-label="Interactive 3D Service Showcase"
        >
          {/* Left Column (6/12): Active Expanded Service Card */}
          <div className="col-span-6 relative h-[580px] w-full">
            <AnimatePresence mode="wait">
              <ActiveServiceCard
                key={enterpriseServices[activeIndex].id}
                service={enterpriseServices[activeIndex]}
                reduceMotion={reduceMotion}
              />
            </AnimatePresence>
          </div>

          {/* Right Column (6/12): Industrial Display Rack */}
          <div className="col-span-6 flex flex-col h-full" style={{ transformStyle: 'preserve-3d' }}>
            <IndustrialDisplayRack
              services={enterpriseServices}
              activeIndex={activeIndex}
              onSelectService={(idx) => setActiveIndex(idx)}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>

        {/* ── Tablet Grid (768–1023px) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {enterpriseServices.map((service) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-[24px]"
              style={{
                height: 340,
                border: '1px solid rgba(203,213,225,0.5)',
                boxShadow: '0 8px 32px rgba(15,23,42,0.08)',
              }}
              whileHover={{ scale: 1.015, boxShadow: '0 20px 60px rgba(15,23,42,0.14)' }}
              transition={SPRING}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(0,0,0,0.35) 0%, rgba(10,18,35,0.80) 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.14em]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {service.number}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-white leading-snug mb-2">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.approach.map((step) => (
                      <span
                        key={step}
                        className="rounded-full px-2 py-0.5 text-[10.5px] font-semibold"
                        style={{
                          background: 'rgba(37,99,235,0.28)',
                          border: '1px solid rgba(37,99,235,0.4)',
                          color: '#93c5fd',
                        }}
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {service.cta} <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile Accordion (<768px) ── */}
        <div className="md:hidden space-y-3">
          {enterpriseServices.map((service, index) => (
            <MobileAccordionItem
              key={service.id}
              service={service}
              isOpen={mobileOpen === index}
              onToggle={() => toggleMobile(index)}
            />
          ))}
        </div>

        {/* ── Desktop indicator dots ── */}
        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex" role="tablist" aria-label="Card navigation">
          {enterpriseServices.map((service, index) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to ${service.title}`}
              onClick={() => setActiveIndex(index)}
              className="group p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded"
            >
              <motion.span
                className="block h-1.5 rounded-full"
                animate={{
                  width: index === activeIndex ? 28 : 8,
                  backgroundColor:
                    index === activeIndex ? '#2563EB' : 'rgba(100,116,139,0.3)',
                }}
                transition={reduceMotion ? { duration: 0 } : SPRING}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
