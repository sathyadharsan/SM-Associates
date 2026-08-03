import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { isPlaceholder } from '../../data/caseStudies';

export default function CaseStudyModal({ study, onClose }) {
  const closeBtnRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!study) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    // Isolate mouse wheel & trackpad scroll ONLY to the modal card
    const cardEl = cardRef.current;
    const handleWheel = (e) => {
      if (!cardEl) return;
      e.preventDefault();
      e.stopPropagation();
      cardEl.scrollTop += e.deltaY;
    };

    if (cardEl) {
      cardEl.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      if (cardEl) {
        cardEl.removeEventListener('wheel', handleWheel);
      }
    };
  }, [study, onClose]);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 sm:p-6 backdrop-blur-sm"
          onClick={onClose}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <motion.div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[82vh] w-full max-w-2xl overflow-y-auto overscroll-contain clean-wheel-scroll rounded-3xl bg-white p-8 shadow-2xl sm:p-10 text-left"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-500 px-3 py-1 text-[10.5px] font-bold text-white">
                {study.serviceLabel}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-[10.5px] font-semibold text-gray-700">
                {study.industry}
              </span>
              <span className="rounded-full border border-brand-500 px-3 py-1 text-[10.5px] font-bold text-brand-500">
                {study.tag}
              </span>
            </div>

            <h2 id="case-study-modal-title" className="mt-5 font-sora text-2xl font-bold leading-tight text-slate-900 sm:text-[28px]">{study.title}</h2>
            <p className="mt-2 text-[14px] font-semibold text-gray-400">{study.subtitle}</p>

            <div className="mt-6 space-y-1.5 text-[12.5px] text-gray-500">
              <p><span className="font-bold text-slate-700">Geography:</span> {study.geographyCovered}</p>
              <p><span className="font-bold text-slate-700">Portfolio:</span> {study.portfolioType}</p>
              <p>
                <span className="font-bold text-slate-700">Engagement Period:</span>{' '}
                {isPlaceholder(study.engagementPeriod)
                  ? (
                    <span className="italic text-brand-500">
                      {study.engagementPeriodExample}{' '}
                      <span className="text-[10px] font-bold not-italic uppercase tracking-wide text-brand-500">(Sample data)</span>
                    </span>
                  )
                  : study.engagementPeriod}
              </p>
            </div>

            <div className="mt-6 h-px bg-gray-100" />

            <h4 className="mt-6 font-sora text-sm font-bold uppercase tracking-wide text-slate-900">The Challenge</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{study.challenge}</p>

            <h4 className="mt-6 font-sora text-sm font-bold uppercase tracking-wide text-slate-900">Our Approach</h4>
            <ul className="mt-3 space-y-2.5">
              {study.approach.map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {step}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-sora text-sm font-bold uppercase tracking-wide text-slate-900">Outcomes</h4>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {study.metrics.map((m) => {
                const placeholder = isPlaceholder(m.value);
                return (
                  <div key={m.label} className="rounded-xl bg-gray-50 p-3 text-center">
                    <p className={`text-[13px] font-bold ${placeholder ? 'italic text-brand-500' : 'text-slate-900'}`}>
                      {placeholder ? m.example : m.value}
                    </p>
                    {placeholder && (
                      <p className="mt-0.5 text-[8.5px] font-bold uppercase tracking-wide text-brand-500">Sample data</p>
                    )}
                    <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-wide text-gray-400">{m.label}</p>
                  </div>
                );
              })}
            </div>

            {study.quote && (
              <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                <p className="text-[14px] italic leading-relaxed text-gray-600">&ldquo;{study.quote}&rdquo;</p>
                {study.quoteAuthor && <p className="mt-2 text-[11.5px] font-bold text-gray-400">— {study.quoteAuthor}</p>}
                {study.quoteIsExample && (
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-brand-500">
                    Sample quote — replace with real client feedback
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
