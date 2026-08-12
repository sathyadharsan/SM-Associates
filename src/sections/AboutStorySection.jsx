import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';


const STORY_SLIDES = [
  {
    id: 'genesis',
    headline: "We believe that strong financial institutions are built on disciplined execution, clear governance, and trust.",
    description: "What began in 2000 as a focused collections practice for India's leading banks has grown into full-spectrum enterprise recovery — tele-calling, field operations, SARFAESI enforcement, legal recovery, and due diligence, delivered end-to-end.",
    stats: [
      { value: "25+ Years", label: "Experience in enterprise recovery operations, field execution, and statutory SARFAESI enforcement." },
      { value: "100+ Banks", label: "Scheduled commercial banks, premier NBFCs, and ARCs served across South India." },
      { value: "1,500+ Staff", label: "IIBF DRA-certified coordinators, field enforcement agents, and legal officers." },
      { value: "98% Resolution", label: "Consistent recovery performance backed by 100% RBI Fair Practices Code compliance." }
    ]
  },
  {
    id: 'scale',
    headline: "Delivering multi-state operational reach with deep regional expertise across 19 branch offices.",
    description: "From our first mandates with SBI Cards, LIC Housing Finance, and ICICI Bank in 2004, we have built an expansive physical infrastructure across Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh, and Puducherry.",
    stats: [
      { value: "19 Branches", label: "Full-fledged regional branch network providing hyper-local field coverage." },
      { value: "6 States", label: "Continuous coverage across South India with centralized command control." },
      { value: "₹500Cr+", label: "Monthly delinquency portfolio handled with institutional oversight." },
      { value: "24/7 Audit", label: "Real-time GPS tracking and voice-logged audit trails for every field call." }
    ]
  },
  {
    id: 'compliance',
    headline: "Uncompromised compliance and audit readiness embedded into every recovery workflow.",
    description: "We protect our client banks' brand reputation through strict adherence to the RBI Fair Practices Code, mandatory IIBF DRA certifications for 100% of field staff, and continuous legal oversight.",
    stats: [
      { value: "100% Certified", label: "All field agents hold active Indian Institute of Banking & Finance (IIBF) DRA licenses." },
      { value: "Zero Breach", label: "Unblemished compliance record with zero regulatory breaches across 25 years." },
      { value: "ISO 27001", label: "Banking-grade SFTP data pipelines with military-grade borrower data encryption." },
      { value: "SARFAESI Legal", label: "In-house statutory legal desk coordinating Section 13 & DM order enforcement." }
    ]
  }
];

export default function AboutStorySection() {
  const containerRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Vertical scroll-linked story scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = STORY_SLIDES.length;
    const nextIndex = Math.min(Math.floor(latest * total), total - 1);
    if (nextIndex !== currentSlideIndex && nextIndex >= 0) {
      setCurrentSlideIndex(nextIndex);
    }
  });

  const activeSlide = STORY_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % STORY_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length);
  };

  return (
    <section id="our-story-section" ref={containerRef} className="relative bg-white text-slate-900 h-[280vh]">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden font-sans pt-16">

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Top Left Eyebrow */}
            <div className="lg:col-span-3">
              <span className="font-mono text-2xl tracking-[0.25em] text-slate-900 font-bold uppercase block pt-2">
                OUR STORY
              </span>
            </div>

            {/* Top Right Main Headline & Description */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-slate-900 font-sans leading-[1.22]">
                    {activeSlide.headline}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Subtle Full-Width Horizontal Divider Line */}
          <div className="my-10 sm:my-14 border-t border-slate-200/90 w-full" />

          {/* Bottom Metrics Row (4 Columns matching Reference Image 2) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${activeSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            >
              {activeSlide.stats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Slide Progress Bar / Indicators at bottom */}
          <div className="flex justify-center items-center gap-2 mt-10 sm:mt-12">
            {STORY_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex ? 'w-8 bg-[#0072BC]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
