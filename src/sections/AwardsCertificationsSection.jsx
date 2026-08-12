import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Landmark, BadgeCheck, FileCheck, MapPin, Activity, Lock, FileText } from 'lucide-react';

const certifications = [
  {
    icon: Landmark,
    title: 'RBI Guidelines',
    subtitle: 'Regulatory Framework',
    color: '#005291',
    bg: '#e8f2fb',
  },
  {
    icon: FileCheck,
    title: 'SARFAESI',
    subtitle: 'Authorized Recovery Agent',
    color: '#0072bc',
    bg: '#eef6fb',
  },
  {
    icon: BadgeCheck,
    title: 'IIBF Certified',
    subtitle: 'DRA Trained Workforce',
    color: '#1a84c8',
    bg: '#eef6fb',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001',
    subtitle: 'Information Security',
    color: '#0072bc',
    bg: '#eef6fb',
  },
  {
    icon: MapPin,
    title: 'GPS Enabled',
    subtitle: 'Ground Operations',
    color: '#005291',
    bg: '#e8f2fb',
  },
  {
    icon: Activity,
    title: 'Audit Ready',
    subtitle: 'Complete Audit Trail',
    color: '#1a84c8',
    bg: '#eef6fb',
  },
  {
    icon: Lock,
    title: 'Secure Data',
    subtitle: 'Data Protection Protocol',
    color: '#0072bc',
    bg: '#eef6fb',
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    subtitle: 'Statutory Enforcement',
    color: '#005291',
    bg: '#e8f2fb',
  },
];

export default function AwardsCertificationsSection() {
  const [activeCert, setActiveCert] = React.useState(null);

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
          {/* Premium Level Accent Line */}
          <div className="mt-4 mb-2 flex items-center justify-center gap-2">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#0072bc]/60 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#0072bc] shadow-sm shadow-[#0072bc]/40" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#0072bc]/60 rounded-full" />
          </div>
          <p className="text-slate-600 text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Every operation runs under strict regulatory compliance — so your portfolio is always protected.
          </p>
        </motion.div>

        {/* 8 Cards across 4 columns grid with Logo Dark Mode Theme on Click & Hover */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto items-stretch justify-center">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const isActive = activeCert === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActiveCert(isActive ? null : idx)}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'bg-gradient-to-br from-[#005291] via-[#0072bc] to-[#021a38] border-[#0072bc] shadow-2xl shadow-[#0072bc]/35 text-white scale-[1.02] ring-2 ring-[#0072bc]/60'
                    : 'bg-white border-transparent shadow-md shadow-slate-200/60 text-slate-900 hover:bg-gradient-to-br hover:from-[#005291] hover:via-[#0072bc] hover:to-[#021a38] hover:border-[#0072bc] hover:shadow-2xl hover:shadow-[#0072bc]/35 hover:text-white'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-xs ${
                    isActive
                      ? 'bg-white text-[#0072bc] shadow-lg scale-110'
                      : 'bg-blue-50 text-[#0072bc] group-hover:bg-white group-hover:text-[#0072bc] group-hover:shadow-lg group-hover:scale-110'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div className={`font-extrabold text-sm sm:text-base leading-snug transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}>
                  {cert.title}
                </div>
                <div className={`text-xs mt-1.5 leading-relaxed font-medium transition-colors duration-200 ${isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>
                  {cert.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
