import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, ArrowRight, Download } from 'lucide-react';
import { caseStudies, serviceFilters } from '../../data/caseStudies';
import ServiceFilterTabs from '../../components/case-studies/ServiceFilterTabs';
import CaseStudyCard from '../../components/case-studies/CaseStudyCard';
import CaseStudyModal from '../../components/case-studies/CaseStudyModal';

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
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-500"
          >
            Proof of Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-4 font-sora text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Client Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg"
          >
            Real engagements. Documented outcomes. Honest placeholders where data is still being collected.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto mt-6 max-w-xl border-l-2 border-brand-500 pl-4 text-left text-sm italic leading-relaxed text-gray-500"
          >
            Case study data is currently being compiled from live client engagements. Fields marked <span className="not-italic">[ CLIENT TO PROVIDE ]</span> will be updated with verified information once received. No data on this page has been invented.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-600"
            >
              Request a Capability Briefing <ArrowRight className="h-4 w-4" />
            </Link>
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
                <CaseStudyCard key={study.id} study={study} index={i} onOpen={setOpenStudy} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CONTENT PLACEHOLDER BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center sm:p-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-sm">
              <ClipboardList className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-sora text-2xl font-bold text-slate-900">Case Study Data Collection in Progress</h3>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] leading-relaxed text-gray-600">
              We are currently documenting real client outcomes across SARFAESI enforcement, field collections, and NPA resolution engagements. If you are an existing client and would like to contribute your results — or if you would like to see unpublished capability evidence — please reach out directly.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-600"
            >
              Speak With Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA STRIP */}
      <section className="py-20" style={{ background: '#1F3864' }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-sora text-3xl font-bold text-white sm:text-4xl">Looking for Proof Before You Decide?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
            We can walk you through our methodology and reference past engagements directly. No brochure required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1F3864] shadow-soft transition hover:bg-gray-100"
            >
              Request an Institutional Briefing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Download Our Credentials Pack <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CaseStudyModal study={openStudy} onClose={() => setOpenStudy(null)} />
    </div>
  );
}
