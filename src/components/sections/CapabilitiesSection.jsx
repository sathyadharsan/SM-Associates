import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, ShieldCheck, Sparkles, Smartphone, Wifi, Battery, Volume2, Bot, Layers } from 'lucide-react';
import { serifHeading } from './shared/typography';

const DEFAULT_CAPABILITIES = [
  {
    title: 'Powered by Proprietary Recovery Intelligence',
    desc: 'Trained on 25+ years of South Indian banking recovery data and RBI fair practice guidelines.'
  },
  {
    title: 'Real-time Language Switching',
    desc: 'Seamless multi-lingual borrower communication in Tamil, Telugu, Kannada, Malayalam & English.'
  },
  {
    title: 'DRA-Certified Field Dispatch',
    desc: 'Automated allocation of nearest certified field agents within 15 minutes of assignment.'
  },
  {
    title: 'Legal Escalation Routing',
    desc: 'Handles statutory notices and automatically escalates un-contactable cases to advocate panels.'
  },
  {
    title: 'AI-Driven Borrower Profiling',
    desc: 'Predicts willingness to pay, risk level, and next best recovery action for every NPA account.'
  },
  {
    title: 'Automated Follow-ups & Reminders',
    desc: 'Multi-channel engagements across SMS, WhatsApp, voice calls, and ground field visits.'
  },
  {
    title: 'Digital Payment & Settlement Links',
    desc: 'Generates instant, bank-approved settlement payment links directly during interaction.'
  },
  {
    title: 'Compliance-Ready Audit Trails',
    desc: 'GPS-tagged, time-stamped visit logs and call recordings ready for RBI compliance audit.'
  }
];

export default function CapabilitiesSection({ content }) {
  const pageCapabilities = content?.capabilities || [];
  
  // Build 8 dynamic capability cards (4 left, 4 right)
  const rawCapabilities = [];
  
  pageCapabilities.forEach((cap) => {
    rawCapabilities.push({
      title: cap.title,
      desc: cap.desc || cap.businessOutcome || (cap.bullets ? cap.bullets.join('. ') : '')
    });
  });

  // Fill up to 8 cards with default fallbacks if needed
  DEFAULT_CAPABILITIES.forEach((defCap) => {
    if (rawCapabilities.length < 8) {
      rawCapabilities.push(defCap);
    }
  });

  const finalCapabilities = rawCapabilities.slice(0, 8);
  const leftCapabilities = finalCapabilities.slice(0, 4);
  const rightCapabilities = finalCapabilities.slice(4, 8);

  const headingText = content?.capabilitiesHeading || `Core Platform Capabilities & AI Field OS`;

  return (
    <section id="capabilities" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28 border-y border-slate-200/80">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-700 shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span>SM Recovery Assistant & Platform Capabilities</span>
          </div>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {headingText}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Connecting intelligent borrower profiling, automated field dispatch, and compliance-first legal recovery under one unified platform.
          </p>
        </div>

        {/* Central Device Hub + 8 Connected Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ═══ LEFT COLUMN: 4 Capability Cards ═══ */}
          <div className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1">
            {leftCapabilities.map((item, idx) => (
              <motion.div
                key={item.title + idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-purple-300 hover:shadow-xl"
              >
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* SVG Connecting Leader Line (Desktop Only) */}
                <svg className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-px overflow-visible pointer-events-none">
                  <line 
                    x1="0" 
                    y1="0" 
                    x2="32" 
                    y2="0" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3"
                    className="group-hover:stroke-purple-400 transition-colors"
                  />
                  <circle cx="32" cy="0" r="2.5" fill="#94A3B8" className="group-hover:fill-purple-600 transition-colors" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* ═══ CENTER COLUMN: 3D Smartphone Device Mockup ═══ */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center w-full max-w-[290px] sm:max-w-[310px]"
            >
              {/* Pulsing Dotted Radar Rings Behind Device */}
              <div className="absolute inset-x-[-40px] inset-y-[-40px] rounded-full border border-dashed border-purple-200 animate-[spin_80s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-x-[-20px] inset-y-[-20px] rounded-full border border-slate-200 pointer-events-none" />

              {/* Smartphone Frame Outer Body */}
              <div className="relative w-full rounded-[44px] bg-slate-950 p-3 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.5)] border-[5px] border-slate-800 ring-1 ring-white/20 overflow-hidden">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-40 flex items-center justify-end px-2 gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500/80 animate-pulse" />
                </div>

                {/* Smartphone Screen Inner */}
                <div className="w-full h-[520px] rounded-[36px] bg-gradient-to-b from-[#1A0B36] via-[#2A105C] to-[#0E0524] text-white p-5 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Background Audio Wave & Radial Glow */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-white/70 font-semibold pt-1 z-30">
                    <span>09:30</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="h-3 w-3" />
                      <Battery className="h-3 w-3" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="text-center mt-6 z-30">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-purple-200 border border-white/10 backdrop-blur-md">
                      <Bot className="h-3.5 w-3.5 text-purple-300" />
                      <span>SM Associates AI Assistant</span>
                    </div>
                    <h4 className="mt-3 text-lg font-black text-white tracking-tight">
                      SM Recovery OS
                    </h4>
                    <p className="text-[10px] font-medium text-purple-300">
                      NextGen Collections AI Platform
                    </p>
                  </div>

                  {/* Central Waveform Microphone Orb */}
                  <div className="flex flex-col items-center justify-center my-auto z-30">
                    <motion.div 
                      className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-[0_0_40px_rgba(168,85,247,0.5)] border-2 border-white/40 cursor-pointer"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-purple-300/40 animate-ping" />
                      <Mic className="h-10 w-10 text-white" />
                    </motion.div>

                    {/* Audio Equalizer Bars */}
                    <div className="flex items-center gap-1 mt-4">
                      {[16, 28, 40, 20, 36, 14, 24].map((h, i) => (
                        <motion.span
                          key={i}
                          className="w-1 rounded-full bg-purple-400"
                          animate={{ height: [8, h, 8] }}
                          transition={{ repeat: Infinity, duration: 1 + i * 0.15, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Live Dialogue Chat Bubble */}
                  <div className="z-30 mb-2">
                    <div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur-md text-[11px] leading-relaxed text-purple-100">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Live Field Assistant
                      </div>
                      "Hello, I am SM Recovery AI. Coordinating your portfolio resolution with 100% RBI compliance."
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN: 4 Capability Cards ═══ */}
          <div className="lg:col-span-4 flex flex-col gap-5 order-3">
            {rightCapabilities.map((item, idx) => (
              <motion.div
                key={item.title + idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-purple-300 hover:shadow-xl"
              >
                {/* SVG Connecting Leader Line (Desktop Only) */}
                <svg className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-px overflow-visible pointer-events-none">
                  <line 
                    x1="0" 
                    y1="0" 
                    x2="32" 
                    y2="0" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3"
                    className="group-hover:stroke-purple-400 transition-colors"
                  />
                  <circle cx="0" cy="0" r="2.5" fill="#94A3B8" className="group-hover:fill-purple-600 transition-colors" />
                </svg>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
