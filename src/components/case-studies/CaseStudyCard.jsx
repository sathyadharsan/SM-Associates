import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { isPlaceholder } from '../../data/caseStudies';

function MetricBox({ label, value, example }) {
  const placeholder = isPlaceholder(value);
  return (
    <div className="flex-1 rounded-xl bg-gray-50 p-3 text-center">
      <p className={`text-[13px] font-bold ${placeholder ? 'italic text-amber-600' : 'text-slate-900'}`}>
        {placeholder ? example : value}
      </p>
      {placeholder && (
        <p className="mt-0.5 text-[8.5px] font-bold uppercase tracking-wide text-amber-500">Sample data</p>
      )}
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
    </div>
  );
}

export default function CaseStudyCard({ study, index, onOpen }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="flex flex-col rounded-2xl bg-white overflow-hidden shadow-md transition-shadow"
    >
      {/* ── Hero image with gradient overlay ── */}
      <div className="relative h-52 w-full overflow-hidden">
        {study.image ? (
          <img
            src={study.image}
            alt={study.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Overlay badges */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap items-end justify-between gap-2">
          <span className="rounded-full bg-brand-500 px-3 py-1 text-[10.5px] font-bold text-white shadow">
            {study.serviceLabel}
          </span>
          <span className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-[10px] font-semibold text-white">
            {study.tag}
          </span>
        </div>

        {/* Industry badge top-right */}
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-slate-700 shadow-sm">
            {study.industry}
          </span>
        </div>
      </div>

      {/* ── Card content ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-sora text-[16px] font-bold leading-snug text-slate-900">{study.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-gray-500 line-clamp-2">{study.challenge}</p>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          {study.metrics.map((m) => (
            <MetricBox key={m.label} label={m.label} value={m.value} example={m.example} />
          ))}
        </div>

        <div className="mt-5 h-px bg-gray-100" />

        <button
          type="button"
          onClick={() => onOpen(study)}
          className="mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-bold text-brand-500 transition hover:text-brand-600"
        >
          View Full Case Study <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
