import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, Globe, Link2, Share2 } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Clients', to: '/clients' },
  { label: 'Case Studies', to: '/insights/case-studies' },
  { label: 'Insights & News', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' }
];

const serviceLinks = [
  { label: 'Recovery Operations', to: '/services' },
  { label: 'SARFAESI Execution', to: '/services' },
  { label: 'Field Collections & Audits', to: '/services' },
  { label: 'Asset Repossession', to: '/services' },
  { label: 'Legal & Statutory Notice', to: '/services' },
  { label: 'Verification & Fraud Control', to: '/services' },
  { label: 'Skip Tracing & Intelligence', to: '/services' }
];

const industryLinks = [
  { label: 'Commercial Banks', to: '/clients' },
  { label: 'NBFCs & HFCs', to: '/clients' },
  { label: 'Asset Reconstruction (ARCs)', to: '/clients' },
  { label: 'Fintech & Digital Lenders', to: '/clients' },
  { label: 'Microfinance Institutions', to: '/clients' },
  { label: 'Corporate Lending Books', to: '/clients' }
];

const socialLinks = [
  {
    label: 'Corporate Contact',
    href: '/contact',
    icon: (props) => (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z" />
      </svg>
    ),
  },
  {
    label: 'Head Office Support',
    href: 'tel:04424451500',
    icon: (props) => <Globe className="h-4 w-4" {...props} />,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 font-sans overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0072bc]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0072bc]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1.3fr]">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-md shadow-slate-200/50 transition-transform duration-300 hover:scale-105">
                <img
                  src="/sm-logo.png"
                  alt="SM Associates Risk Management logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-black text-slate-900 tracking-tight leading-none">SM Associates</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#0072bc]">
                  Enterprise Recovery Management
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              Established in 2000, SM Associates delivers institutional-grade recovery operations, SARFAESI execution, verification, and legal enforcement for India&apos;s leading scheduled commercial banks and financial institutions.
            </p>

            {/* Compliance Badges */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700">
              <ShieldCheck className="h-4 w-4 text-[#0072bc]" />
              <span>ISO/IEC 27001 & RBI Compliant</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#0072bc] hover:bg-[#0072bc] hover:text-white hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Synced with Header Navbar) */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center text-sm font-medium text-slate-600 transition-all duration-200 hover:text-[#0072bc] hover:translate-x-1"
                  >
                    <span className="text-slate-300 mr-2 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0072bc]" />
              Head Office
            </h3>
            <div className="mt-5 space-y-3.5">
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0072bc] shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-sm leading-snug text-slate-600 font-medium">
                  No.10/17, 2nd Floor, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600085
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0072bc] shrink-0 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5 text-sm font-medium text-slate-600">
                  <a href="tel:04443060206" className="hover:text-[#0072bc] transition-colors">044-43060206</a>
                  <a href="tel:04448530577" className="hover:text-[#0072bc] transition-colors">044-48530577</a>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0072bc] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:smarmpl.ho@gmail.com" className="text-sm font-medium text-slate-600 hover:text-[#0072bc] transition-colors truncate">
                  smarmpl.ho@gmail.com
                </a>
              </div>

              <div className="flex gap-3 items-center pt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0072bc] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Mon – Sat: 9:00 AM – 6:30 PM IST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Divider & Copyright Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 pt-8">
          <p className="text-xs font-medium text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} SM Associates Risk Management Pvt Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 text-xs font-medium text-slate-500 justify-center sm:justify-end">
            <Link to="/privacy-policy" className="transition hover:text-[#0072bc]">Privacy Policy</Link>
            <span className="text-slate-300">•</span>
            <Link to="/cookie-policy" className="transition hover:text-[#0072bc]">Cookie Policy</Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms-of-use" className="transition hover:text-[#0072bc]">Terms of Use</Link>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-semibold text-[#0072bc] hover:underline cursor-pointer ml-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
