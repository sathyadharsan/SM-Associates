import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import { FlowButton } from '../components/ui/flow-button';

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-white" id="cta-consultation">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Ready to recover<br />
                <span className="text-[#0072bc]">
                  what&apos;s yours?
                </span>
              </h2>
              {/* Premium Level Accent Line */}
              <div className="mt-3 mb-6 flex items-center justify-center gap-2">
                <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
                <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 font-medium">
                Book a free consultation with our recovery specialists. We&apos;ll audit your NPA portfolio and propose a performance-based recovery plan — no commitment required.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                {[
                  { icon: ShieldCheck, text: 'ISO 27001 Certified' },
                  { icon: Clock, text: '48hr Response Guarantee' },
                  { icon: MapPin, text: '6 States · 19 Branches' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <Icon size={15} className="text-[#0072bc]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FlowButton to="/contact" text="Book Free Consultation" />
                <FlowButton href="tel:+919876543210" text="Call Us Directly" variant="dark" />
              </div>
            </motion.div>
          </div>

          {/* Right — Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 w-full max-w-sm"
          >
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-xs">
              <div className="text-slate-900 font-bold text-xl mb-6">What happens next?</div>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Portfolio Audit', desc: 'We review your NPA book — size, age, geography, collateral status.' },
                  { step: '02', title: 'Recovery Strategy', desc: 'Customized plan across soft, field, SARFAESI & legal channels.' },
                  { step: '03', title: 'Mobilise in 72hrs', desc: 'Dedicated team deployed. GPS tracking from Day 1.' },
                  { step: '04', title: 'Performance Billing', desc: 'You pay only on successful recovery. Zero fixed overhead.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0072bc]/10 border border-[#0072bc]/20 flex items-center justify-center text-[#0072bc] text-xs font-black flex-shrink-0">
                      {step}
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm">{title}</div>
                      <div className="text-slate-500 text-xs mt-0.5 leading-relaxed font-medium">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
