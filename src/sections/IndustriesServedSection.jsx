import React from 'react';
import { motion } from 'framer-motion';

// 1. Banking — RBI Official Seal (#0072BC)
function RbiBankingLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="39" stroke="#0072bc" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M30 72H70M34 68H66M38 46V64M46 46V64M54 46V64M62 46V64" stroke="#0072bc" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 22L24 39H76L50 22Z" fill="#0072bc" />
      <circle cx="50" cy="32" r="3.5" fill="#ffffff" />
      <path d="M21 50L23 53L21 56L19 53Z" fill="#0072bc" />
      <path d="M79 50L81 53L79 56L77 53Z" fill="#0072bc" />
    </svg>
  );
}

// 2. NBFC — RBI Regulated NBFC Crest (#0072BC)
function NbfcLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8L86 25V50C86 71 71 88 50 94C29 88 14 71 14 50V25L50 8Z" fill="#0072bc" />
      <path d="M50 14L80 28V50C80 67 67 82 50 87C33 82 20 67 20 50V28L50 14Z" stroke="#ffffff" strokeWidth="2" />
      <rect x="34" y="44" width="32" height="28" rx="4" fill="#ffffff" />
      <path d="M42 35L50 28L58 35V44H42V35Z" fill="#ffffff" />
      <path d="M44 53H49V64H44V53ZM51 53H56V64H51V53Z" fill="#0072bc" />
    </svg>
  );
}

// 3. Housing Finance — NHB Crest (#0072BC)
function NhbHousingLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <path d="M50 18L18 43H28V76H72V43H82L50 18Z" fill="#0072bc" />
      <path d="M42 50C42 45.5817 45.5817 42 50 42C54.4183 42 58 45.5817 58 50V76H42V50Z" fill="#ffffff" />
      <path d="M50 27L65 39H35L50 27Z" fill="#ffffff" />
    </svg>
  );
}

// 4. Microfinance — MFIN Crest (#0072BC)
function MicrofinanceLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <path d="M26 40C26 28 74 28 74 40H26Z" fill="#0072bc" />
      <path d="M50 40V78M50 78C45 78 43 74 43 71" stroke="#0072bc" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="33" cy="53" r="5.5" fill="#0072bc" />
      <path d="M25 70C25 61 29 58 33 58C37 58 41 61 41 70" stroke="#0072bc" strokeWidth="3" />
      <circle cx="67" cy="53" r="5.5" fill="#0072bc" />
      <path d="M59 70C59 61 63 58 67 58C71 58 75 61 75 70" stroke="#0072bc" strokeWidth="3" />
    </svg>
  );
}

// 5. Small Finance Banks — RBI SFB Regulatory Emblem (#0072BC)
function SmallFinanceBankLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <path d="M30 72H70M36 68H64M40 48V64M50 48V64M60 48V64" stroke="#0072bc" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 24L28 40H72L50 24Z" fill="#0072bc" />
      <circle cx="50" cy="34" r="3" fill="#ffffff" />
    </svg>
  );
}

// 6. Asset Reconstruction — SARFAESI Statutory ARC (#0072BC)
function ArcLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <path d="M50 18V74M28 74H72" stroke="#0072bc" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M24 30H76" stroke="#0072bc" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 30L16 49H32L24 30Z" fill="#0072bc" />
      <path d="M76 30L68 49H84L76 30Z" fill="#0072bc" />
      <path d="M42 22L50 14L58 22H42Z" fill="#0072bc" />
    </svg>
  );
}

// 7. Insurance — IRDAI Protection Badge (#0072BC)
function InsuranceLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 6L84 21V48C84 70 70 87 50 93C30 87 16 70 16 48V21L50 6Z" fill="#0072bc" />
      <path d="M50 12L78 25V48C78 65 66 80 50 85C34 80 22 65 22 48V25L50 12Z" fill="#ffffff" />
      <path d="M30 44C30 34 70 34 70 44" stroke="#0072bc" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 44V68" stroke="#0072bc" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="30" r="4.5" fill="#0072bc" />
      <path d="M39 54L46 61L61 46" stroke="#0072bc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 8. Commercial Lending — SIDBI / Corporate Banking Crest (#0072BC)
function CommercialLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#0072bc" strokeWidth="3.5" />
      <rect x="24" y="36" width="52" height="36" rx="5" fill="#0072bc" />
      <path d="M36 36V27C36 23.134 39.134 20 43 20H57C60.866 20 64 23.134 64 27V36" stroke="#0072bc" strokeWidth="3.5" />
      <circle cx="50" cy="54" r="5.5" fill="#ffffff" />
      <path d="M18 76H82" stroke="#0072bc" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

const SECTORS = [
  {
    label: 'Banking',
    Logo: RbiBankingLogo,
    sub: 'RBI Regulated',
  },
  {
    label: 'NBFC',
    Logo: NbfcLogo,
    sub: 'RBI Regulated NBFC',
  },
  {
    label: 'Housing Finance',
    Logo: NhbHousingLogo,
    sub: 'NHB Authorized HFC',
  },
  {
    label: 'Microfinance',
    Logo: MicrofinanceLogo,
    sub: 'RBI / MFIN SRO',
  },
  {
    label: 'Small Finance Banks',
    Logo: SmallFinanceBankLogo,
    sub: 'RBI SFB Mandates',
  },
  {
    label: 'Asset Reconstruction',
    Logo: ArcLogo,
    sub: 'SARFAESI Sec 13 ARC',
  },
  {
    label: 'Insurance',
    Logo: InsuranceLogo,
    sub: 'IRDAI Approved',
  },
  {
    label: 'Commercial Lending',
    Logo: CommercialLogo,
    sub: 'SIDBI / Institutional',
  },
];

export default function IndustriesServedSection() {
  return (
    <section
      id="industries"
      style={{ background: '#ffffff' }}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight"
            style={{ fontFamily: 'var(--sans)' }}
          >
            Purpose-Built for Scale
          </h2>
          <p className="mt-3 text-base text-slate-500 font-medium max-w-lg mx-auto">
            Calibrated recovery frameworks across 8 regulated lender segments
          </p>
        </motion.div>

        {/* Official Sector Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5 lg:gap-6">
          {SECTORS.map(({ label, Logo, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 44, scale: 0.94, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex flex-col items-center gap-2.5 cursor-pointer"
            >
              {/* Official Sector Logo Tile */}
              <div
                className="relative flex items-center justify-center rounded-2xl transition-all duration-300 w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px] bg-white p-2 shadow-sm border border-slate-200 group-hover:border-[#0072bc] group-hover:shadow-xl group-hover:shadow-[#0072bc]/15"
              >
                <Logo className="w-11 h-11 sm:w-13 sm:h-13 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Label & Statutory Regulatory Badge */}
              <div className="text-center min-w-0">
                <span
                  className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight group-hover:text-[#0072bc] transition-colors duration-200"
                >
                  {label}
                </span>
                <span className="block text-[10px] font-semibold text-[#0072bc] mt-0.5 leading-tight truncate">
                  {sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




