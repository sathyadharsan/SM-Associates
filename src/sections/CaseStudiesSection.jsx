import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/case-studies/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesSection() {
  const displayedStudies = caseStudies.slice(0, 4);

  return (
    <section id="case-studies" className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center justify-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
            Real engagements, documented outcomes.
          </h2>
          {/* Premium Level Accent Line */}
          <div className="mt-3 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed text-center">
            Anonymized operating examples showing how SM Associates structures recovery programs across banking, SARFAESI, verification and fraud control mandates.
          </p>
        </div>

        {/* 4 Grid Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {displayedStudies.map((study, index) => (
            <div key={study.id} className="h-full">
              <CaseStudyCard
                study={study}
                index={index}
                to="/insights/case-studies"
              />
            </div>
          ))}
        </div>

        {/* View All Case Studies Link */}
        <div className="mt-12 text-center">
          <Link
            to="/insights/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-[#0072bc] hover:text-[#0072bc] hover:shadow-md hover:scale-[1.02]"
          >
            View All Case Studies & Detailed Metrics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
