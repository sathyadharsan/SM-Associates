"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X, ShieldCheck, CheckCircle2, FileText, ChevronRight } from "lucide-react";

import FloatingPathsBackground from "./floating-paths";

const SECOND_LINE_PHRASES = [
  "Across South India.",
  "Powered by Technology.",
  "Driven by Compliance.",
  "Executed with Precision.",
  "Trusted by Institutions.",
];

function AnimatedHeadlineSecondLine() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SECOND_LINE_PHRASES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const currentText = SECOND_LINE_PHRASES[index];
  const letters = Array.from(currentText);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.015,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 16,
      rotateX: -45,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.36,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      rotateX: 45,
      filter: 'blur(4px)',
      transition: {
        duration: 0.25,
        ease: [0.7, 0, 0.84, 0],
      },
    },
  };

  return (
    <span className="relative flex justify-center items-center w-full text-center overflow-hidden py-2 px-4 min-h-[1.4em] sm:min-h-[1.6em] mt-1">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentText}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="inline-flex items-baseline justify-center text-[#0072bc] italic font-serif font-semibold text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl tracking-normal px-4"
        >
          {letters.map((char, idx) => (
            <motion.span
              key={`${char}-${idx}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Compact sticky-stacking primitives, scoped to the featured-mandates teaser
// only — a small, separate moment ahead of the full grid below, not a
// replacement for it. Same cascading-stack technique as before, just local
// to this one small use rather than a shared file, since nothing else on
// the site needs it.
function TeaserScroll({ children, className = "", style }) {
  return (
    <div className={`relative w-full ${className}`} style={{ perspective: 900, ...style }}>
      {children}
    </div>
  );
}

// 96px base clearance — same convention used everywhere else on this site
// for a sticky element that needs to clear the fixed ~77px header (see
// OperatingModelSection's .model6-head). Without it, the first several
// cards' own `top` offsets (12px, 24px, 36px…) land inside the header's own
// height and render underneath it.
const HEADER_CLEARANCE = 96;

function TeaserCardSticky({ index, incrementY = 12, children, className = "" }) {
  return (
    <motion.div
      layout="position"
      style={{ top: HEADER_CLEARANCE + index * incrementY, zIndex: index }}
      className={`sticky ${className}`}
    >
      {children}
    </motion.div>
  );
}

// One featured mandate in the teaser strip — deliberately simpler than the
// full grid card below (no hover choreography needed here, it's a quick
// glance, not the primary interactive moment on the page).
function FeaturedMandateCard({ product, index, onSelect }) {
  return (
    <TeaserCardSticky index={index + 1} incrementY={12} className="mx-auto w-full max-w-2xl">
      <div
        onClick={onSelect}
        className="group/teaser flex cursor-pointer select-none items-center gap-5 overflow-hidden rounded-[24px] border border-[#005a96]/40 bg-[#0072bc] p-3 shadow-xl shadow-[#0072bc]/25 transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#0072bc]/40 sm:gap-6 sm:p-4"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/teaser:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        </div>

        <div className="min-w-0 flex-1 py-2 pr-4 text-left">
          {product.category && (
            <span className="mb-1.5 inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0072bc] shadow-sm">
              {product.category}
            </span>
          )}
          <h3 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">{product.title}</h3>
          <p className="mt-1 line-clamp-1 text-xs text-blue-50">{product.description}</p>
        </div>

        <ChevronRight size={18} className="mr-4 shrink-0 text-white transition-transform duration-300 group-hover/teaser:translate-x-1" />
      </div>
    </TeaserCardSticky>
  );
}

// All mandates, in a compact stacking-card sequence — this is now the one
// and only presentation of the 12 mandates (the separate 4-column grid was
// removed rather than kept alongside this, since showing the same 12 cards
// twice in a row would just be duplication).
function FeaturedMandatesPreview({ products, onSelect }) {
  return (
    <section id="enterprise-services" className="relative bg-white px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
            Our Capabilities
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Recovery Mandates
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Twelve specialized mandates, one accountable operating partner.
          </p>
        </div>
        <TeaserScroll style={{ minHeight: `${products.length * 20}vh` }}>
          <div className="space-y-4">
            {products.map((product, index) => (
              <FeaturedMandateCard product={product} index={index} key={product.title} onSelect={() => onSelect(product)} />
            ))}
          </div>
        </TeaserScroll>
      </div>
    </section>
  );
}

export const HeroParallax = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* ── SECTION 1: FULL SCREEN HERO HEADER (Apple Keynote Premium Level) ── */}
      <section className="hero6 relative w-full flex items-center justify-center text-center pt-16 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Ambient Premium Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] bg-[#0072bc]/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Ambient flowing-line background — sits behind the radial glow's
            visual weight, gives the hero quiet motion without competing with
            the headline. */}
        <FloatingPathsBackground />

        <div className="fg-wrap w-full max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center justify-center">
          {/* Main Title matching Apple Keynote Editorial Standard */}
          <h1 className="hero6-h1 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] text-center flex flex-col items-center justify-center font-['Geist',sans-serif]">
            <span className="block text-slate-900 tracking-tight font-['Geist',sans-serif] font-extrabold">Recovery Operations</span>
            <AnimatedHeadlineSecondLine />
          </h1>

          {/* Subtitle */}
          <p className="hero6-sub text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mt-6 text-center mx-auto max-w-2xl">
            Delivering technology-enabled recovery, legal coordination, field execution and asset resolution through one accountable operating partner.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: ALL MANDATES — STICKY STACKING SEQUENCE ──
          Replaces the old 4-column grid entirely: all 12 mandates now live
          here, in the compact stacking format, so they're not duplicated
          across two sections. */}
      <FeaturedMandatesPreview products={products} onSelect={setSelectedProduct} />

      {/* Service Modal Detail Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <ServiceModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export const ServiceModal = ({ product, onClose }) => {
  const modalBodyRef = useRef(null);

  useEffect(() => {
    if (!product) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    const bodyEl = modalBodyRef.current;
    const handleWheel = (e) => {
      if (!bodyEl) return;
      e.preventDefault();
      e.stopPropagation();
      bodyEl.scrollTop += e.deltaY;
    };

    if (bodyEl) {
      bodyEl.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      if (bodyEl) bodyEl.removeEventListener('wheel', handleWheel);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onWheel={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header with Photo */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-white/20 z-20 backdrop-blur-md cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Service Title & Category */}
          <div className="absolute bottom-6 left-6 right-6 text-left">
            <span className="inline-block text-xs font-bold text-white bg-[#0072bc] px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 shadow-md">
              {product.category || 'Recovery Operations'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {product.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div ref={modalBodyRef} className="p-6 sm:p-8 overflow-y-auto no-scrollbar space-y-6 text-left flex-1">
          {/* Core Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0072bc] font-mono mb-2">
              Mandate Overview
            </h4>
            <p className="text-base text-slate-800 font-medium leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Operational Details */}
          {product.details && (
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono mb-2">
                Operational Framework
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {product.details}
              </p>
            </div>
          )}

          {/* Key Standards */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              Key Standards & Compliance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={16} className="text-[#0072bc] shrink-0" />
                <span>RBI Conduct Compliant</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <ShieldCheck size={16} className="text-[#0072bc] shrink-0" />
                <span>Audited Ground Operations</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <FileText size={16} className="text-[#0072bc] shrink-0" />
                <span>Real-Time Status Logging</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={16} className="text-[#0072bc] shrink-0" />
                <span>Institutional Realization</span>
              </div>
            </div>
          </div>

          {/* Modal CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap sm:flex-nowrap gap-3">
            <Link
              to={product.link || "/services"}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0072bc] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-all hover:bg-[#005ea6]"
            >
              <span>Explore Dedicated Capability</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroParallax;
