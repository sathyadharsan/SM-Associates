import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/case-studies/CaseStudyCard';
import CaseStudyModal from '../components/case-studies/CaseStudyModal';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="case-studies" className="relative py-20 sm:py-24 lg:py-28 bg-white border-t border-b border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Control Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc]">
              PROOF OF WORK
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real engagements, documented outcomes.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Anonymized operating examples showing how SM Associates structures recovery programs across banking, SARFAESI, verification and fraud control mandates.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous case studies"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-[#0072bc] hover:bg-[#0072bc] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next case studies"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-[#0072bc] hover:bg-[#0072bc] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Container with Large Floating Side Arrows */}
        <div className="relative group">
          
          {/* Side Floating Left Button (Aligned with image banner) */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-3 lg:-left-6 top-[104px] -translate-y-1/2 z-20 h-13 w-13 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl backdrop-blur-md transition-all hover:bg-[#0072bc] hover:text-white hover:border-[#0072bc] hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7 stroke-[2.5]" />
          </button>

          {/* Carousel Track (Showing 4 cards on XL desktop) */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-1 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[310px]"
              >
                <CaseStudyCard
                  study={study}
                  index={index}
                  onOpen={(s) => setSelectedStudy(s)}
                />
              </div>
            ))}
          </div>

          {/* Side Floating Right Button (Aligned with image banner) */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-3 lg:-right-6 top-[104px] -translate-y-1/2 z-20 h-13 w-13 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl backdrop-blur-md transition-all hover:bg-[#0072bc] hover:text-white hover:border-[#0072bc] hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7 stroke-[2.5]" />
          </button>

        </div>

        {/* View All Case Studies Link */}
        <div className="mt-10 text-center">
          <Link
            to="/insights/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#0072bc] hover:text-[#0072bc] hover:shadow-md"
          >
            View All Case Studies & Detailed Metrics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>

      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </section>
  );
}

