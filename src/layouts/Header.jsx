import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, CalendarDays, Shield, ArrowRight } from 'lucide-react';

const BRAND  = '#3366FF';
const VIOLET = '#7C3AED';

const menuItems = {
  about: [
    { title: 'Company Overview', to: '/about/company-overview', desc: 'Two decades of recovery operations.' },
    { title: 'Vision & Mission', to: '/about/vision-mission', desc: 'Building trusted recovery infrastructure since 2000.' },
    { title: 'Leadership Team', to: '/about/leadership', desc: 'Operational leadership across recovery and legal.' },
    { title: 'Why SM Associates', to: '/#why', desc: 'Professional integrity, client-first approach.' },
  ],
  services: [
    { title: 'Pre Disbursal', to: '/services/pre-disbursal', desc: 'CPV, CPA, telephone verification, seeding.' },
    { title: 'Post Disbursal', to: '/services/post-disbursal', desc: 'Field collections, payment pickup, follow-up.' },
    { title: 'Fraud Control', to: '/services/fraud-control', desc: 'Investigation-led fraud prevention.' },
    { title: 'SARFAESI Services', to: '/services/sarfaesi', desc: 'Enforcement, possession and legal recovery.' },
    { title: 'Legal Services', to: '/services/legal', desc: 'Court, advocate and documentation coordination.' },
    { title: 'Field Collections', to: '/services/field-collections', desc: 'Disciplined field operations across geographies.' },
    { title: 'Yard Management', to: '/services/yard-management', desc: 'Authorized yard services for asset custody.' },
    { title: 'Manpower Solutions', to: '/services/manpower', desc: 'Trained workforce for recovery operations.' },
  ],
  industries: [
    { title: 'Banking', to: '/industries/banking', desc: 'Recovery and collections for banking portfolios.' },
    { title: 'NBFC', to: '/industries/nbfc', desc: 'High-volume lending recovery at scale.' },
    { title: 'Housing Finance', to: '/industries/housing-finance', desc: 'Mortgage and housing loan recovery.' },
    { title: 'ARCs', to: '/industries/arc', desc: 'Stress asset and enforcement execution.' },
    { title: 'Insurance', to: '/industries/insurance', desc: 'Claims investigation and recovery support.' },
    { title: 'FinTech', to: '/industries/fintech', desc: 'Digital lender recovery workflows.' },
  ],
  resources: [
    { title: 'Case Studies', to: '/resources/case-studies', desc: 'Anonymized recovery execution examples.' },
    { title: 'Blogs', to: '/resources/blogs', desc: 'Articles and updates from our team.' },
    { title: 'Industry Insights', to: '/resources/insights', desc: 'Operational insights for recovery leaders.' },
    { title: 'Download Brochures', to: '/contact', desc: 'Company profile and service brochures.' },
  ],
};

const navLinks = [
  { label: 'Services', key: 'services' },
  { label: 'Industries', key: 'industries' },
  { label: 'About', key: 'about' },
  { label: 'Resources', key: 'resources' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [hoverKey, setHoverKey] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">

      {/* ── Ambient purple-blue glow behind the floating navbar ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[140px] overflow-hidden">
        <div className="absolute left-1/2 top-[-60px] h-[200px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[70px]"
          style={{ background: `linear-gradient(90deg, ${BRAND}, ${VIOLET})` }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-3 pt-3 sm:px-4 lg:px-6">
        <div
          className="overflow-hidden rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(26px) saturate(160%)',
            WebkitBackdropFilter: 'blur(26px) saturate(160%)',
            border: '1px solid rgba(15,23,42,0.08)',
            boxShadow: scrolled
              ? `0 18px 50px -12px rgba(15,23,42,0.10), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px -8px ${BRAND}33`
              : `0 24px 60px -16px rgba(15,23,42,0.08), 0 0 30px -10px ${BRAND}26`,
          }}
        >

          {/* ── Main nav row ── */}
          <div className="flex h-[60px] items-center px-5 lg:px-7">

            {/* Logo */}
            <Link to="/" className="flex shrink-0 items-center gap-2.5">
              <Shield className="h-7 w-7" strokeWidth={1.6} style={{ color: BRAND }} />
              <span className="text-[16px] font-bold text-gray-900">SM Associates</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden flex-1 items-center gap-1 xl:flex" style={{ paddingLeft: '40px' }} onMouseLeave={() => setActiveMenu(null)}>
              {navLinks.map(({ label, key }) => (
                <div key={key} className="relative" onMouseEnter={() => setHoverKey(key)} onMouseLeave={() => setHoverKey(null)}>
                  <button
                    onMouseEnter={() => setActiveMenu(key)}
                    className="relative inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold tracking-[-0.01em] text-gray-900/65 transition-colors duration-200 hover:text-gray-950"
                  >
                    {label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300"
                      style={{ transform: activeMenu === key ? 'rotate(-180deg)' : 'rotate(0deg)', color: 'rgba(15,23,42,0.35)' }}
                    />
                    {/* Glow underline on hover */}
                    <span
                      className="absolute bottom-0 left-4 right-4 h-[2px] origin-center rounded-full transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${BRAND}, ${VIOLET})`,
                        opacity: hoverKey === key ? 1 : 0,
                        transform: hoverKey === key ? 'scaleX(1)' : 'scaleX(0.3)',
                        boxShadow: hoverKey === key ? `0 0 12px ${BRAND}` : 'none',
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMenu === key && menuItems[key] && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        onMouseEnter={() => setActiveMenu(key)}
                        className="absolute left-1/2 top-full mt-2 w-[440px] -translate-x-1/2 overflow-hidden rounded-2xl p-3"
                        style={{
                          background: 'rgba(255,255,255,0.97)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          border: '1px solid rgba(15,23,42,0.08)',
                          boxShadow: `0 24px 60px -12px rgba(15,23,42,0.18), 0 0 30px -10px ${BRAND}33`,
                        }}
                      >
                        <div className={`grid gap-0.5 ${menuItems[key].length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {menuItems[key].map(item => (
                            <Link
                              key={item.title}
                              to={item.to}
                              className="group flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-gray-50"
                              onClick={() => setActiveMenu(null)}
                            >
                              <span className="text-[13px] font-semibold text-gray-900/85 group-hover:text-gray-950">{item.title}</span>
                              <span className="mt-0.5 text-[11px] leading-4 text-gray-900/35">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right: Careers + Book a Consultation */}
            <div className="hidden shrink-0 items-center gap-4 xl:flex">
              <Link
                to="/careers"
                className="text-[14px] font-semibold text-gray-900/65 transition hover:text-gray-950"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${BRAND}, ${VIOLET})`,
                  boxShadow: `0 8px 24px -4px ${BRAND}66, 0 0 0 1px rgba(255,255,255,0.15) inset`,
                }}
              >
                Book a Consultation
                <CalendarDays className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border text-gray-700 xl:hidden"
              style={{ borderColor: 'rgba(15,23,42,0.12)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* ── Mobile menu ── */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t xl:hidden"
                style={{ borderColor: 'rgba(15,23,42,0.08)' }}
              >
                <div className="max-h-[calc(100dvh-120px)] overflow-y-auto px-5 py-4 space-y-1">
                  {navLinks.map(({ label, key }) => (
                    <div key={key}>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-semibold text-gray-900/75 hover:bg-gray-50"
                      >
                        {label}
                        <ChevronDown
                          className="h-4 w-4 text-gray-900/35 transition-transform duration-200"
                          style={{ transform: mobileExpanded === key ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 mt-1 space-y-0.5 border-l-2 pl-3" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
                              {menuItems[key].map(item => (
                                <Link
                                  key={item.title}
                                  to={item.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-2 py-2 text-[13px] font-medium text-gray-900/55 hover:text-gray-950"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <div className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
                    <Link
                      to="/careers"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold text-gray-900/75 hover:bg-gray-50"
                    >
                      Careers
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${BRAND}, ${VIOLET})` }}
                    >
                      Book a Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
