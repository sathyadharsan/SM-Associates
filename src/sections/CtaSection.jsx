import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0a1628]" id="cta-consultation">

      {/* Full bleed gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2040] to-[#0a1628]" />
        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0072bc]/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1a84c8]/15 blur-[120px]"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#3d9ed6] bg-[#0072bc]/20 border border-[#0072bc]/30 mb-6">
                <CalendarDays size={12} /> Free Consultation
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                Ready to recover<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#1a84c8] to-[#3d9ed6]">
                  what's yours?
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
                Book a free consultation with our recovery specialists. We'll audit your NPA portfolio and propose a performance-based recovery plan — no commitment required.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                {[
                  { icon: ShieldCheck, text: 'ISO 27001 Certified' },
                  { icon: Clock, text: '48hr Response Guarantee' },
                  { icon: MapPin, text: '5 States · 19 Branches' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Icon size={14} className="text-[#1a84c8]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-[#0072bc] hover:bg-[#005291] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-2xl shadow-[#0072bc]/40 transition-colors duration-200"
                >
                  <CalendarDays size={18} />
                  Book Free Consultation
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white font-bold text-base px-8 py-4 rounded-2xl border border-white/20 transition-colors duration-200 backdrop-blur-sm"
                >
                  <Phone size={18} />
                  Call Us Directly
                </motion.a>
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
            <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">
              <div className="text-white font-bold text-xl mb-6">What happens next?</div>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Portfolio Audit', desc: 'We review your NPA book — size, age, geography, collateral status.' },
                  { step: '02', title: 'Recovery Strategy', desc: 'Customized plan across soft, field, SARFAESI & legal channels.' },
                  { step: '03', title: 'Mobilise in 72hrs', desc: 'Dedicated team deployed. GPS tracking from Day 1.' },
                  { step: '04', title: 'Performance Billing', desc: 'You pay only on successful recovery. Zero fixed overhead.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0072bc]/30 border border-[#0072bc]/40 flex items-center justify-center text-[#3d9ed6] text-xs font-black flex-shrink-0">
                      {step}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{title}</div>
                      <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</div>
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
