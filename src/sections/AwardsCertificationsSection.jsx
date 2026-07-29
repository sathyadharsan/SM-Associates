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
    <section className="py-20 bg-white" id="awards-certifications">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Regulated. Certified. <span className="text-[#0072bc]">Trusted.</span>
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-md mx-auto">
            Every operation runs under strict regulatory compliance — so your portfolio is always protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5, scale: 1.04 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#0072bc]/30 hover:shadow-xl hover:shadow-[#0072bc]/10 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cert.bg }}
                >
                  <Icon size={22} style={{ color: cert.color }} />
                </div>
                <div className="font-black text-slate-900 text-sm leading-tight">{cert.title}</div>
                <div className="text-slate-400 text-[10px] mt-1 leading-tight">{cert.subtitle}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
