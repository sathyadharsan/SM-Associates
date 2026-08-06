import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';

const testimonials = [
  {
    quote: "SM Associates delivered reliable SARFAESI execution and ground field coordination across Tamil Nadu and Karnataka for our stressed portfolio.",
    name: "Recovery Operations Division",
    role: "Senior Leadership Team",
    company: "Leading Private Sector Bank",
    type: "Banking",
    rating: 5,
    stat: "Multi-State Execution",
    badge: "PSU / Private Bank",
  },
  {
    quote: "The real-time geotagged field tracking and daily resolution reporting give us complete transparency. SM Associates is an empaneled recovery partner.",
    name: "Collections & Recovery Desk",
    role: "Head of Collections",
    company: "Major NBFC — South India",
    type: "NBFC",
    rating: 5,
    stat: "Geotagged Telemetry",
    badge: "Top-Tier NBFC",
  },
  {
    quote: "From NPA identification to physical possession assistance under SARFAESI 13(4), their end-to-end support simplifies complex enforcement.",
    name: "Legal Enforcement Panel",
    role: "Legal & Recovery Head",
    company: "Regional Banking Institution",
    type: "Banking",
    rating: 5,
    stat: "100% RBI Compliance",
    badge: "Commercial Bank",
  },
  {
    quote: "Their field workforce is IIBF DRA-certified and operates under strict RBI Fair Practice guidelines with comprehensive audit trails.",
    name: "Risk & Audit Oversight",
    role: "Chief Risk Officer Desk",
    company: "Top Housing Finance Co.",
    type: "HFC",
    rating: 5,
    stat: "DRA Certified Staff",
    badge: "HFC Partner",
  },
  {
    quote: "SM Associates handled our MSME loan portfolio recovery across 6 states & UTs simultaneously. Their 19-branch network provides deep local coverage.",
    name: "Portfolio Operations Desk",
    role: "Portfolio Risk Manager",
    company: "Mid-Market Financial Institution",
    type: "NBFC",
    rating: 5,
    stat: "19 Branch Network",
    badge: "Pan-South Coverage",
  },
  {
    quote: "Their structured liaison during Section 14 magistrate orders and law enforcement coordination eliminates unnecessary procedural delays.",
    name: "Stressed Asset Management",
    role: "General Manager Desk",
    company: "Public Sector Bank",
    type: "PSU Bank",
    rating: 5,
    stat: "SARFAESI Sec 14 Support",
    badge: "PSU Bank Partner",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden" id="testimonials">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by India's <span className="text-[#0072bc]">leading lenders</span>
          </h2>
          {/* Premium Level Accent Line */}
          <div className="mt-4 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            From PSU banks to modern NBFCs — hear what our institutional partners say about SM Associates.
          </p>
        </motion.div>

        {/* 3-Column Animated Vertical Marquee with Top & Bottom Fade Mask */}
        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] max-h-[720px] overflow-hidden py-4">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={28} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={25} />
        </div>
      </div>
    </section>
  );
}