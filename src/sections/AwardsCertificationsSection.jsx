import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BadgeCheck, Star, Landmark, FileCheck } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: '25+ Years',
    subtitle: 'Continuous Operation',
    color: '#005291',
    bg: '#e8f2fb',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001',
    subtitle: 'Information Security',
    color: '#0072bc',
    bg: '#eef6fb',
  },
  {
    icon: Landmark,
    title: 'RBI Compliant',
    subtitle: 'Regulatory Framework',
    color: '#005291',
    bg: '#e8f2fb',
  },
  {
    icon: BadgeCheck,
    title: 'IIBF Certified',
    subtitle: 'DRA Trained Workforce',
    color: '#1a84c8',
    bg: '#eef6fb',
  },
  {
    icon: FileCheck,
    title: 'SARFAESI',
    subtitle: 'Authorized Recovery Agent',
    color: '#0072bc',
    bg: '#eef6fb',
  }


];

export default function AwardsCertificationsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="awards-certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
          </h2>
          <p className="text-slate-600 text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Every operation runs under strict regulatory compliance — so your portfolio is always protected.
          </p>
        </motion.div>

        {/* 5 Cards evenly balanced across 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto items-stretch justify-center">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl border border-slate-200/60 bg-white shadow-xs hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: cert.bg }}
                >
                  <Icon size={24} style={{ color: cert.color }} />
                </div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">{cert.title}</div>
                <div className="text-slate-500 text-xs mt-1.5 leading-relaxed font-normal">{cert.subtitle}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
