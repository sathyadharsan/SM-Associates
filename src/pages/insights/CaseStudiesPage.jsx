import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, ArrowRight, Download } from 'lucide-react';
import { caseStudies, serviceFilters } from '../../data/caseStudies';
import ServiceFilterTabs from '../../components/case-studies/ServiceFilterTabs';
import CaseStudyCard from '../../components/case-studies/CaseStudyCard';
import CaseStudyModal from '../../components/case-studies/CaseStudyModal';
import { CtaButton } from '../../components/ui/cta-button';
import { FlowButton } from '../../components/ui/flow-button';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openStudy, setOpenStudy] = useState(null);

  const filtered = useMemo(
    () => (activeFilter === 'all' ? caseStudies : caseStudies.filter((s) => s.serviceId === activeFilter)),
    [activeFilter]
  );

  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="bg-white pb-16 pt-40 text-center sm:pt-44">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc]"
          >
            PROVED RECOVERY PERFORMANCE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-4 font-sora text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Institutional Case Studies & Execution Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg font-normal"
          >
            Documented recovery outcomes, NPA resolution benchmarks, and SARFAESI enforcement execution across South India’s banking and financial risk sector.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8"
          >
            <CtaButton to="/contact">
              Request a Capability Briefing
            </CtaButton>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — FILTER TABS */}
      <section className="bg-white pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceFilterTabs filters={serviceFilters} active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      {/* SECTION 3 — CASE STUDY CARDS GRID */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((study, i) => (
                <CaseStudyCard key={study.id} study={study} index={i} onOpen={setOpenStudy} showMetrics={true} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — INSTITUTIONAL PERFORMANCE BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#0072bc]/20 bg-slate-50 p-8 text-center sm:p-10 shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0072bc] text-white shadow-sm">
              <ClipboardList className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-sora text-2xl font-bold text-slate-900">Institutional Recovery Performance Benchmarks</h3>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] leading-relaxed text-slate-600">
              We continuously document verified resolution outcomes across SARFAESI enforcement, field collections, and portfolio recovery engagements. For unpublished institutional evidence or custom portfolio benchmark reports, contact our operations desk.
            </p>
            <CtaButton to="/contact" className="mt-6">
              Speak With Our Operations Team
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA STRIP (PURE WHITE THEME) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-sora text-3xl font-bold text-slate-900 sm:text-4xl">Looking for Proof Before You Decide?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 font-medium">
            We can walk you through our methodology and reference past engagements directly. No brochure required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <FlowButton to="/contact" text="Request an Institutional Briefing" />
            <FlowButton to="/contact" text="Download Our Credentials Pack" variant="dark" />
          </div>
        </div>
      </section>

      <CaseStudyModal study={openStudy} onClose={() => setOpenStudy(null)} />
    </div>
  );
}
