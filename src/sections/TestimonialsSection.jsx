import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';

const testimonials = [
  {
    quote: "SM Associates delivered results that our internal team couldn't achieve in 3 years. Their SARFAESI execution and field coordination is unmatched across Tamil Nadu and Karnataka.",
    name: "V. R. Subramanian",
    role: "Senior VP, Recovery Operations",
    company: "Leading Private Sector Bank",
    type: "Banking",
    rating: 5,
    stat: "₹42 Cr Recovered",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "The real-time GPS tracking and daily resolution dashboards gave us complete transparency. We finally had confidence in our field operations. SM Associates is our exclusive recovery partner.",
    name: "K. Meenakshi Sundaram",
    role: "Head of Collections",
    company: "Major NBFC — South India",
    type: "NBFC",
    rating: 5,
    stat: "1,200+ Cases Resolved",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "From NPA identification to physical possession under SARFAESI 13(4), their end-to-end support eliminated the need for multiple vendors. Compliance at every step was impeccable.",
    name: "Rajesh Kumar Sharma",
    role: "Legal & Recovery Head",
    company: "Regional Cooperative Bank",
    type: "Banking",
    rating: 5,
    stat: "98% Compliance Rate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Their field workforce is truly IIBF-certified and operates with a level of professionalism we haven't seen elsewhere. The RBI audit trail they maintain saved us significant regulatory exposure.",
    name: "Anand Venkatesh",
    role: "Chief Risk Officer (CRO)",
    company: "Top-Tier Housing Finance Co.",
    type: "HFC",
    rating: 5,
    stat: "Zero RBI Audit Flags",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "SM Associates handled our MSME loan book recovery across 3 states simultaneously. Their 19-branch network meant zero execution gaps — something a single-city team could never offer.",
    name: "Priya Nair",
    role: "Portfolio Risk Manager",
    company: "Mid-Market NBFC",
    type: "NBFC",
    rating: 5,
    stat: "3 States Network",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Their speed of action during Section 14 magistrate orders and law enforcement liaison saved months of litigation delay. Highly structured enterprise recovery solutions.",
    name: "S. Pattabiraman",
    role: "GM, Stressed Asset Mgmt",
    company: "Leading PSU Bank",
    type: "PSU Bank",
    rating: 5,
    stat: "60 Days Avg Resolution",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Partnering with SM Associates on multi-crore retail and commercial NPA portfolios provided us with instant ground-level intelligence and fast physical asset repossession.",
    name: "Deepak Choudhury",
    role: "VP, Asset Resolution",
    company: "Leading ARC",
    type: "ARC",
    rating: 5,
    stat: "₹85 Cr Portfolio Managed",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Their digital field reporting app gives our regional managers minute-by-minute visit logs. Total transparency and high recovery yields quarter after quarter.",
    name: "Sunita Krishnamurthy",
    role: "Head of Retail Collections",
    company: "Pan-India Commercial Bank",
    type: "Banking",
    rating: 5,
    stat: "100% Real-time Audit",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Ethical field practices, strict compliance with RBI codes of conduct, and empathetic yet firm resolution tactics make SM Associates our most trusted recovery partner.",
    name: "Arun Prakash",
    role: "Director of Field Operations",
    company: "Microfinance Institution",
    type: "MFI",
    rating: 5,
    stat: "15,000+ Field Visits",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-4">
            <Building2 size={13} /> Client Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by India's <span className="text-[#0072bc]">leading lenders</span>
          </h2>
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