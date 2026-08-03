"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X, ShieldCheck, CheckCircle2, FileText, ChevronRight } from "lucide-react";

import WovenLightBackground from "../WovenLightBackground";

const SECOND_LINE_PHRASES = [
  "Across South India.",
  "Powered by Technology.",
  "Driven by Compliance.",
  "Executed with Precision.",
  "Trusted by Institutions.",
];

function AnimatedHeadlineSecondLine() {
  return (
    <span className="relative flex justify-center items-center w-full text-center overflow-hidden py-2 px-4 min-h-[1.4em] sm:min-h-[1.6em] mt-1">
      <span className="inline-block text-[#0072bc] italic font-serif font-semibold text-center whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl tracking-normal px-4">
        {SECOND_LINE_PHRASES[0]}
      </span>
    </span>
  );
}

export const HeroParallax = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Group products into rows of 4
  const rows = [];
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <div className="w-full bg-white text-slate-900">
      {/* ── SECTION 1: FULL SCREEN HERO HEADER (Apple Keynote Premium Level) ── */}
      <section className="hero6 relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Ambient Premium Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] bg-[#0072bc]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="fg-wrap w-full max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center justify-center">
          {/* Main Title matching Apple Keynote Editorial Standard */}
          <h1 className="hero6-h1 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] text-center flex flex-col items-center justify-center">
            <span className="block text-slate-900 tracking-tight">Recovery Operations</span>
            <AnimatedHeadlineSecondLine />
          </h1>

          {/* Subtitle */}
          <p className="hero6-sub text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mt-6 text-center mx-auto max-w-2xl">
            Delivering technology-enabled recovery, legal coordination, field execution and asset resolution through one accountable operating partner.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: THE 12 KEY MANDATE CARDS GRID (Next Section Below) ── */}
      <section id="enterprise-services" className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="mb-12 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
              Specialized Recovery Mandates
            </h2>
            {/* Premium Level Accent Line */}
            <div className="mt-4 mb-2 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
            </div>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl text-center mx-auto">
              Click on any mandate card below to view detailed operational scope, legal frameworks, and compliance standards.
            </p>
          </div>

          {rows.map((row, rIdx) => (
            <div key={`row-${rIdx}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {row.map((product, idx) => {
                const globalIndex = rIdx * 4 + idx;
                return (
                  <ProductCard
                    product={product}
                    index={globalIndex}
                    key={`card-${product.title}-${rIdx}-${idx}`}
                    onSelect={() => setSelectedProduct(product)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Service Modal Detail Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <ServiceModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProductCard = ({ product, index = 0, onSelect }) => {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (onSelect) onSelect();
  };

  const handleTouch = (e) => {
    if (window.innerWidth < 1024) {
      if (!showQuote) {
        if (e && e.stopPropagation) e.stopPropagation();
        setShowQuote(true);
        return;
      }
    }
    handleClick(e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.94, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.11 + Math.floor(index / 4) * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTap={handleTouch}
      onClick={handleClick}
      onMouseEnter={() => setShowQuote(true)}
      onMouseLeave={() => setShowQuote(false)}
      className="group/product h-80 sm:h-84 w-full relative rounded-2xl overflow-hidden shadow-lg shadow-slate-200/80 cursor-pointer border border-slate-200/80 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#0072bc]/25 bg-slate-900 select-none z-10"
    >
      {/* Background Photo */}
      <img
        src={product.thumbnail}
        className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 ease-out group-hover/product:scale-105 pointer-events-none"
        alt={product.title}
        loading="lazy"
      />

      {/* Dark Gradient Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
          showQuote
            ? 'bg-gradient-to-t from-slate-950/95 via-slate-950/75 via-50% to-slate-950/20'
            : 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent lg:from-slate-950/85'
        }`}
      />

      {/* Text Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-left z-10 cursor-pointer">
        {product.category && (
          <div>
            <span className="inline-block text-[10px] font-extrabold text-[#0072bc] bg-white px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 shadow-md border border-[#0072bc]/30">
              {product.category}
            </span>
          </div>
        )}

        {/* Service Name / Title */}
        <h3 className="text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
          {product.title}
        </h3>

        {/* Teaser Description — Mobile preview by default, expandable on desktop hover / mobile tap */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showQuote
              ? 'max-h-48 opacity-100 mt-2.5'
              : 'max-h-24 opacity-95 mt-2 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover/product:max-h-48 lg:group-hover/product:opacity-100'
          }`}
        >
          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Leadership Card Signature Wide Blue Accent Underline Bar */}
        <div className="w-full h-1 bg-[#0072bc] rounded-full mt-3.5 transition-all duration-300 shadow-sm" />

        {/* Click / Tap Indicator */}
        <div className="mt-2 flex items-center justify-between text-[11px] font-bold text-[#0072bc] transition-opacity duration-300 opacity-90">
          <span className="text-slate-200 text-[10px]">Tap to view full mandate details</span>
          <ChevronRight size={14} className="text-[#0072bc]" />
        </div>
      </div>
    </motion.div>
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
