import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FlowButton } from '../components/ui/flow-button';

const PARTNER_LOGOS = [
  { name: 'SBI Cards', logo: '/logos/sbi-cards.svg', code: 'SBI CARDS' },
  { name: 'Axis Bank', logo: '/logos/axis.svg', code: 'AXIS BANK' },
  { name: 'HDFC Bank', logo: '/logos/hdfc.svg', code: 'HDFC BANK' },
  { name: 'ICICI Bank', logo: '/logos/icici-bank.svg', code: 'ICICI BANK' },
  { name: 'LIC Housing Finance', logo: '/logos/lic-housing-finance.svg', code: 'LIC HOUSING' },
  { name: 'Tata Capital', logo: '/logos/tata-capital.jpg', code: 'TATA CAPITAL' }
];

export default function AboutHeroSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-20 px-6 sm:px-12 lg:px-20 bg-white font-sans overflow-hidden">
      
      {/* Soft Ambient Bottom-Right Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[450px] bg-gradient-to-tl from-[#0072BC]/12 via-blue-50/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        


        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Headline with INLINE Avatar Stack directly attached at the end */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 pt-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
              Your Trusted Partner in Enterprise Recovery
              
            </h1>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#0072BC]/10 text-[#0072BC] text-xs font-mono font-bold tracking-wider uppercase border border-[#0072BC]/20">
                1,500+ DRA Certified Field Specialists
              </span>
            </div>
          </motion.div>

          {/* Right Column: Top Paragraph, Right Image Card, and Underneath Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-6 pt-6 sm:pt-10 lg:pt-14"
          >
            {/* Paragraph Text */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-left max-w-md">
              We help scheduled commercial banks, NBFCs, and financial institutions streamline recovery operations, scale field execution efficiently, and maintain zero-breach RBI compliance.
            </p>

            {/* Right Card Image */}
            <div className="w-full max-w-[380px] relative rounded-[28px] overflow-hidden shadow-xl shadow-slate-200/90 border border-slate-100 aspect-[4/3.5] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="SM Associates Enterprise Recovery Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>

            {/* CTA Pill Button (FlowButton with smooth circle expansion and sliding arrows) */}
            <div className="w-full flex justify-start">
              <FlowButton
                to="/contact"
                text="Schedule Consultation"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Partner Logos Section (Updated to render real client SVG/image logos) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/70 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Bottom Left Title */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 font-sans">
              Our Trusted Partners
            </h3>
            <p className="text-xs text-slate-500 font-medium">Empanelled with premier Indian lenders</p>
          </div>

          {/* Bottom Right Logos (Renders real client SVG/image logos) */}
          <div className="md:col-span-9 flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {PARTNER_LOGOS.map((partner, index) => (
              <div
                key={index}
                className="flex items-center h-8 transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 sm:h-7 w-auto object-contain max-w-[110px]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'inline';
                    }
                  }}
                />
                <span className="hidden font-mono text-xs sm:text-sm font-extrabold tracking-widest text-slate-700 uppercase hover:text-[#0072BC] transition-colors">
                  {partner.code}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
