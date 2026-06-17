import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { megaMenu } from '../data/homeData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

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

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', menuKey: 'about' },
    { label: 'Services', menuKey: 'services' },
    { label: 'Industries', menuKey: 'industries' },
    { label: 'Capabilities', menuKey: 'capabilities' },
    { label: 'Resources', menuKey: 'resources' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' }
  ];

  const menuItems = {
    about: [
      { title: 'Company Overview', to: '/about/company-overview' },
      { title: 'Vision & Mission', to: '/about/vision-mission' },
      { title: 'Leadership Team', to: '/about/leadership' },
      { title: 'Operational Presence', to: '/about/operational-presence' }
    ],
    services: [
      { title: 'Recovery Services', to: '/services/recovery-services' },
      { title: 'SARFAESI Services', to: '/services/sarfaesi-services' },
      { title: 'Verification Services', to: '/services/verification-services' },
      { title: 'Fraud Control', to: '/services/fraud-control' },
      { title: 'Legal Services', to: '/services/legal-services' },
      { title: 'Auction Services', to: '/services/auction-services' },
      { title: 'Asset Repossession', to: '/services/asset-repossession' },
      { title: 'Field Collections', to: '/services/field-collections' }
    ],
    industries: [
      { title: 'Banking', to: '/industries/banking' },
      { title: 'NBFC', to: '/industries/nbfc' },
      { title: 'Housing Finance', to: '/industries/housing-finance' },
      { title: 'Fintech', to: '/industries/fintech' },
      { title: 'ARC', to: '/industries/arc' }
    ],
    capabilities: [
      { title: 'Recovery OS', to: '/capabilities/recovery-os' },
      { title: 'Collections Workflow', to: '/capabilities/collections-workflow' },
      { title: 'Legal Coordination', to: '/capabilities/legal-coordination' },
      { title: 'Risk Operations', to: '/capabilities/risk-operations' }
    ],
    resources: [
      { title: 'Case Studies', to: '/resources/case-studies' },
      { title: 'Blogs', to: '/resources/blogs' },
      { title: 'Insights', to: '/resources/insights' }
    ]
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
            const hasMenu = Boolean(item.menuKey);
            return (
              <div key={item.label} className="relative">
                {hasMenu ? (
                  <button
                    onMouseEnter={() => setActiveMenu(item.menuKey)}
                    onMouseLeave={() => setActiveMenu(null)}
                    onFocus={() => setActiveMenu(item.menuKey)}
                    onBlur={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-blue-950"
                  >
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link to={item.to} className="text-sm font-semibold text-slate-600 transition hover:text-blue-950">
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {activeMenu === item.menuKey && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      onMouseEnter={() => setActiveMenu(item.menuKey)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute left-1/2 top-8 w-[560px] -translate-x-1/2 rounded-[28px] border border-slate-200 bg-white p-4 shadow-enterprise"
                    >
                      <div className="grid gap-2">
                        {menuItems[item.menuKey].map(menuItem => (
                          <Link key={menuItem.title} to={menuItem.to} className="rounded-2xl p-3 transition hover:bg-blue-50">
                            <p className="text-sm font-bold text-blue-950">{menuItem.title}</p>
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
                const hasMenu = Boolean(item.menuKey);
                return (
                  <div key={item.label}>
                    {hasMenu ? (
                      <div>
                        <button
                          onClick={() => setMobileOpenMenu(mobileOpenMenu === item.menuKey ? null : item.menuKey)}
                          className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-950"
                        >
                          {item.label} <ChevronDown className="h-4 w-4" />
                        </button>
                        <AnimatePresence>
                          {mobileOpenMenu === item.menuKey && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="rounded-2xl bg-blue-50 p-3">
                                {menuItems[item.menuKey].map(menuItem => (
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
                        to={item.to}
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