import React from 'react';
import { motion } from 'framer-motion';

// Single-accent brand rule: every KPI uses brand blue — no per-item hue.
const CREDENTIAL_PALETTE = Array.from({ length: 6 }, () => ({
  text: 'text-[#0072BC]', color: '#0072BC',
}));

const INSTITUTIONAL_FALLBACKS = [
  { value: '100+', label: 'Banks, NBFCs, ARCs and MFIs partnered across South India' },
  { value: '25+', label: 'Years of institutional risk & recovery standing' },
  { value: '80%', label: 'Time saved with automated field dispatch & reporting' },
  { value: '60%', label: 'Increase in legal process & Section 138 efficiency' },
  { value: '40%', label: 'Reduction in overall recovery & litigation cost' },
  { value: '42%', label: 'Reduction in turnaround time to resolution' }
];

export default function KpiSection({ content }) {
  const pageKpis = content?.kpiCards || [];
  
  const credentialItems = [];

  pageKpis.forEach((k) => {
    if (k.value && !k.value.includes('[DRAFT]')) {
      credentialItems.push({
        value: k.value,
        label: k.title || k.desc
      });
    }
  });

  INSTITUTIONAL_FALLBACKS.forEach((fallback) => {
    if (credentialItems.length < 6) {
      credentialItems.push(fallback);
    }
  });

  const finalCredentials = credentialItems.slice(0, 6);
  const headingText = content?.kpiHeading || 'Our Credentials';

  return (
    <section id="kpis" className="relative overflow-hidden bg-slate-50/70 py-10 lg:py-14 border-y border-slate-200/80">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {headingText}
          </h2>
          {content?.kpiSubheading && (
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              {content.kpiSubheading}
            </p>
          )}
        </motion.div>

        {/* Credentials Compact 6-Metric Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-md overflow-hidden backdrop-blur-sm">
          {finalCredentials.map((item, idx) => {
            const style = CREDENTIAL_PALETTE[idx % CREDENTIAL_PALETTE.length];
            
            const isRightBorderLg = (idx % 3) !== 2;
            const isBottomBorderLg = idx < 3;
            
            const isRightBorderSm = (idx % 2) !== 1;
            const isBottomBorderSm = idx < 4;

            return (
              <motion.div
                key={item.label + idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`flex flex-col items-center justify-center p-5 sm:p-7 text-center transition-colors hover:bg-slate-50/90 ${
                  isRightBorderLg ? 'lg:border-r lg:border-slate-200/80' : ''
                } ${
                  isBottomBorderLg ? 'lg:border-b lg:border-slate-200/80' : ''
                } ${
                  isRightBorderSm ? 'sm:border-r sm:border-slate-200/80 lg:border-r-0' : ''
                } ${
                  isBottomBorderSm ? 'sm:border-b sm:border-slate-200/80 lg:border-b-0' : ''
                } border-b border-slate-200/80 last:border-b-0 sm:last:border-b-0`}
              >
                {/* Compact Stat Value */}
                <span 
                  className={`text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-none mb-2 ${style.text}`}
                  style={{ color: style.color }}
                >
                  {item.value}
                </span>

                {/* Metric Subtext Label */}
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 max-w-[210px] leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
