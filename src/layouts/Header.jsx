import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems, megaMenu } from '../data/homeData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled
    ? 'border-b border-slate-200/80 bg-white/85 shadow-soft backdrop-blur-xl'
    : 'border-b border-transparent bg-white/60 backdrop-blur-xl';

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpenMenu(null);
  };

  const menuItems = {
    about: [
      { title: 'Company Overview', to: '/about/company-overview', description: 'Two decades of recovery and risk management execution.' },
      { title: 'Our Journey Since 2000', to: '/about/our-journey', description: 'Building trusted recovery infrastructure for financial institutions.' },
      { title: 'Leadership Team', to: '/about/leadership', description: 'Operational leadership across recovery, verification and legal coordination.' },
      { title: 'Why SM Associates', to: '/#why', description: 'Professional integrity and client-first approach.' },
      { title: 'Vision & Mission', to: '/about/vision-mission', description: 'Building trusted recovery infrastructure for financial institutions.' }
    ],
    services: [
      { title: 'Pre Disbursal Services', to: '/services/pre-disbursal', description: 'CPV, CPA, Telephone Verification, Seeding, skip tracing.' },
      { title: 'Post Disbursal Services', to: '/services/post-disbursal', description: 'Field collections, payment pickup, recovery follow-up.' },
      { title: 'Fraud Control Services', to: '/services/fraud-control', description: 'Investigation-led fraud prevention and risk intelligence.' },
      { title: 'SARFAESI Services', to: '/services/sarfaesi', description: 'Enforcement, possession and legal recovery coordination.' },
      { title: 'Legal Services', to: '/services/legal', description: 'Court, advocate and documentation coordination.' },
      { title: 'Field Collections', to: '/services/field-collections', description: 'Disciplined field operations across geographies.' },
      { title: 'Yard Management Services', to: '/services/yard-management', description: 'Authorized yard services for asset custody.' },
      { title: 'Manpower Solutions', to: '/services/manpower', description: 'Trained manpower for recovery operations.' }
    ],
    industries: [
      { title: 'Banking', to: '/industries/banking', description: 'Recovery and collections for banking portfolios.' },
      { title: 'NBFC', to: '/industries/nbfc', description: 'Scalable operations for high-volume lending portfolios.' },
      { title: 'Housing Finance', to: '/industries/housing-finance', description: 'Mortgage and housing loan recovery support.' },
      { title: 'Asset Reconstruction Companies', to: '/industries/arc', description: 'Stress asset and enforcement execution support.' },
      { title: 'Insurance', to: '/industries/insurance', description: 'Claims investigation and recovery support.' },
      { title: 'FinTech', to: '/industries/fintech', description: 'Digital lender recovery and verification workflows.' }
    ],
    capabilities: [
      { title: 'Pan India Operations', to: '/capabilities/operations', description: 'District-level recovery and collections coverage.' },
      { title: 'Risk Management', to: '/capabilities/risk', description: 'Fraud control, verification and portfolio risk support.' },
      { title: 'Recovery Operations', to: '/capabilities/recovery', description: 'Portfolio-led recovery strategies for measurable outcomes.' },
      { title: 'Legal Expertise', to: '/capabilities/legal', description: 'SARFAESI, legal and enforcement coordination.' },
      { title: 'Field Investigation', to: '/capabilities/investigation', description: 'Professional investigation and skip tracing.' },
      { title: 'Technology Enabled Tracking', to: '/capabilities/technology', description: 'Digital monitoring and field operations.' },
      { title: 'Workforce Strength', to: '/capabilities/workforce', description: '300+ trained professionals across operations.' }
    ],
    resources: [
      { title: 'Case Studies', to: '/resources/case-studies', description: 'Anonymized recovery execution examples.' },
      { title: 'Success Stories', to: '/resources/success-stories', description: 'Client success stories and testimonials.' },
      { title: 'Industry Insights', to: '/resources/insights', description: 'Operational insights for recovery leaders.' },
      { title: 'Regulatory Updates', to: '/resources/regulatory', description: 'Latest RBI guidelines and compliance updates.' },
      { title: 'Download Brochures', to: '/resources/brochures', description: 'Company profile and service brochures.' },
      { title: 'FAQ', to: '/resources/faq', description: 'Frequently asked questions.' }
    ]
  };

  const getMenuKey = (item) => {
    if (item.label === 'About Us') return 'about';
    if (item.label === 'Services') return 'services';
    if (item.label === 'Industries') return 'industries';
    if (item.label === 'Capabilities') return 'capabilities';
    if (item.label === 'Resources') return 'resources';
    return null;
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950 text-sm font-bold tracking-tight text-white">
            SM
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-blue-950">SM Associates</p>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Recovery OS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map(item => {
            const menuKey = getMenuKey(item);
            const hasMenu = Boolean(menuKey);
            
            return (
              <div key={item.label} className="relative">
                {hasMenu ? (
                  <button
                    onMouseEnter={() => setActiveMenu(menuKey)}
                    onMouseLeave={() => setActiveMenu(null)}
                    onFocus={() => setActiveMenu(menuKey)}
                    onBlur={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-blue-950"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === menuKey}
                  >
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link to={item.href.replace('#', '/')} className="text-sm font-semibold text-slate-600 transition hover:text-blue-950">
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {activeMenu === menuKey && menuItems[menuKey] && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      onMouseEnter={() => setActiveMenu(menuKey)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute left-1/2 top-8 w-[560px] -translate-x-1/2 rounded-[28px] border border-slate-200 bg-white p-6 shadow-enterprise"
                      role="menu"
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {menuItems[menuKey].map(menuItem => (
                          <Link
                            key={menuItem.title}
                            to={menuItem.to}
                            onClick={closeMenus}
                            className="rounded-2xl p-3 transition hover:bg-blue-50 block"
                            role="menuitem"
                          >
                            <p className="text-sm font-bold text-blue-950">{menuItem.title}</p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">{menuItem.description}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <Link
          to="/contact"
          onClick={closeMenus}
          className="hidden rounded-full bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-700 xl:inline-flex"
        >
          Request Consultation
        </Link>

        <button
          onClick={() => setIsMobileOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-blue-950 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="max-h-[calc(100vh-72px)] overflow-y-auto border-b border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <p className="text-sm font-bold text-blue-950">Menu</p>
              <button onClick={() => setIsMobileOpen(false)} className="rounded-2xl p-2 hover:bg-slate-50" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mx-auto mt-4 max-w-7xl space-y-2">
              {navItems.map(item => {
                const menuKey = getMenuKey(item);
                const hasMenu = Boolean(menuKey);
                
                return (
                  <div key={item.label}>
                    {hasMenu ? (
                      <div>
                        <button
                          onClick={() => setMobileOpenMenu(mobileOpenMenu === menuKey ? null : menuKey)}
                          className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-950"
                          aria-expanded={mobileOpenMenu === menuKey}
                        >
                          {item.label} <ChevronDown className="h-4 w-4" />
                        </button>
                        <AnimatePresence>
                          {mobileOpenMenu === menuKey && menuItems[menuKey] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="rounded-2xl bg-blue-50 p-3 mt-2 space-y-1">
                                {menuItems[menuKey].map(menuItem => (
                                  <Link
                                    key={menuItem.title}
                                    to={menuItem.to}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block rounded-xl px-2 py-2 text-sm text-slate-600 hover:bg-white hover:text-blue-950"
                                  >
                                    {menuItem.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href.replace('#', '/')}
                        onClick={() => setIsMobileOpen(false)}
                        className="block rounded-2xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-950"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 flex items-center justify-center rounded-full bg-blue-950 px-5 py-3 text-sm font-bold text-white"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}