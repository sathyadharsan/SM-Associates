import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { isPlaceholder } from '../../data/caseStudies';

function MetricBox({ label, value, example }) {
  const placeholder = isPlaceholder(value);
  const displayVal = placeholder ? example : value;
  return (
    <div className="flex-1 rounded-2xl bg-[#f8fafc] border border-slate-100 p-2.5 sm:p-3 text-center flex flex-col justify-center items-center">
      <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0072bc] tracking-tight block leading-tight">
        {displayVal}
      </span>
      {placeholder && (
        <span className="mt-1 text-[8.5px] font-bold uppercase tracking-wider text-[#0072bc] block">
          SAMPLE DATA
        </span>
      )}
      <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 block leading-tight text-center">
        {label}
      </span>
    </div>
  );
}

export default function CaseStudyCard({ study, index, onOpen, to, showMetrics = false }) {
  const cardInner = (
    <>
      {/* ── Hero image with full head visibility ── */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-[20px]">
        {study.image ? (
          <img
            src={study.image}
            alt={study.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Overlay badges bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between gap-1.5 z-10">
          <span className="rounded-full bg-[#0072bc] px-3 py-0.5 text-[10px] font-bold text-white shadow-xs">
            {study.serviceLabel}
          </span>
          <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-2.5 py-0.5 text-[9.5px] font-semibold text-white shadow-xs">
            {study.tag}
          </span>
        </div>

        {/* Industry badge top-right */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[9.5px] font-bold text-slate-800 shadow-xs">
            {study.industry}
          </span>
        </div>
      </div>

      {/* ── Compact card content ── */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div>
          <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug line-clamp-2">{study.title}</h3>
          
          {/* Explicit Subtitle / Outcome Highlight */}
          {study.subtitle && (
            <div className="mt-2.5 flex items-start gap-1.5 text-[11.5px] font-bold text-[#0072bc] bg-[#0072bc]/8 px-2.5 py-1 rounded-lg border border-[#0072bc]/15">
              <TrendingUp size={13} className="shrink-0 mt-0.5 text-[#0072bc]" />
              <span className="line-clamp-1">{study.subtitle}</span>
            </div>
          )}

          <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-500 line-clamp-3">{study.challenge}</p>

          {showMetrics && (
            <div className="mt-3.5 flex flex-row gap-2">
              {study.metrics.map((m) => (
                <MetricBox key={m.label} label={m.label} value={m.value} example={m.example} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          {to ? (
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0072bc] group-hover:underline transition-all cursor-pointer">
              View Full Case Study <ArrowRight className="h-3.5 w-3.5" />
            </span>
          ) : (
            <button
              type="button"
              onClick={() => onOpen?.(study)}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#0072bc] hover:underline transition-all cursor-pointer"
            >
              View Full Case Study <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </>
  );

  if (to) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        whileHover={{ y: -4 }}
        className="group flex flex-col h-full rounded-[22px] bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
      >
        <Link to={to} className="flex flex-col h-full">
          {cardInner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full rounded-[22px] bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
    >
      {cardInner}
    </motion.div>
  );
}
