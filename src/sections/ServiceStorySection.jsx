import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { enterpriseServices } from '../data/enterpriseServicesData';
import { serifHeading } from '../components/sections/shared/typography';

const TOTAL = enterpriseServices.length;

// Upsize local mock/placeholder/unsplash images to 1600px
const upsize = (url, width = 1600) => url.replace(/([?&])w=\d+/, `$1w=${width}`);

export default function ServiceStorySection() {
  const reduceMotion = useReducedMotion();

  // Scroll animations variants: standard high-performance slide & fade
  const imageVariants = (isImageLeft) => ({
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : (isImageLeft ? -120 : 120), // Clean offset for entry slide
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth Apple transition
      },
    },
  });

  const textVariants = {
    hidden: {
      opacity: 0.7, // High contrast even during animation entry
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="recovery-story"
      className="relative z-30 bg-white py-20 sm:py-28 overflow-hidden"
      aria-label="Enterprise Recovery Story"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER ── */}
        <div className="mb-20 text-center flex flex-col items-center justify-center">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
            Operational Workflow
          </span>
          <h2 className="mt-2 text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[38px] text-center font-sora">
            The complete recovery story
          </h2>
          {/* Premium Level Accent Line */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
        </div>

        {/* ── 7 SECTIONS STACK ── */}
        <div className="space-y-24 sm:space-y-36">
          {enterpriseServices.map((service, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image side */}
                <motion.div
                  className={`lg:col-span-6 flex items-center justify-center ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.05 }}
                  variants={imageVariants(isImageLeft)}
                >
                  <div className="relative overflow-hidden rounded-[32px] shadow-2xl bg-slate-950 aspect-[4/3] w-full max-w-xl mx-auto group">
                    <img
                      src={upsize(service.image)}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.3) 100%)' }}
                    />
                  </div>
                </motion.div>

                {/* Copy side */}
                <motion.div
                  className={`lg:col-span-6 flex flex-col justify-center w-full max-w-xl mx-auto ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.05 }}
                  variants={textVariants}
                >
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0072bc]">
                    {service.number} / {String(TOTAL).padStart(2, '0')}
                  </span>
                  <h3 style={serifHeading} className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-[16.5px] leading-relaxed text-slate-750 font-normal">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-[14.5px] font-semibold text-slate-800">
                        <CheckCircle2 size={16} className="text-[#0072bc] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.approach.map((step) => (
                      <span
                        key={step}
                        className="rounded-full bg-[#0072bc]/8 px-3 py-1 text-[11px] font-semibold text-[#0072bc]"
                      >
                        {step}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 text-[13.5px] font-bold text-[#0072bc]"
                    >
                      <span className="border-b border-[#0072bc]/30 pb-px group-hover:border-[#0072bc]">{service.cta}</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
