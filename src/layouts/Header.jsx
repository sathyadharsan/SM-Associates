import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  ChevronDown, Menu, X, CalendarDays, Shield, ArrowRight,
  FileCheck, Users, Scale, Car, Search, LineChart,
  Briefcase, Zap, Layout, ChevronRight, CheckCircle2,
  Building2, Landmark, ShieldAlert, BadgeCheck, FileSearch
} from 'lucide-react';
import { navigationData } from '../data/navigation';

const BRAND  = '#3366FF';
const VIOLET = '#7C3AED';

// Map icons to column titles for the Mega Menu
const getColumnIcon = (title) => {
  switch (title) {
    case 'Verification Services': return <FileCheck className="h-4 w-4 text-blue-400" />;
    case 'Collections & Recovery': return <Users className="h-4 w-4 text-blue-400" />;
    case 'Legal Recovery': return <Scale className="h-4 w-4 text-blue-400" />;
    case 'Asset Recovery': return <Car className="h-4 w-4 text-blue-400" />;
    case 'Investigation Services': return <Search className="h-4 w-4 text-blue-400" />;
    case 'Operational & Specialized': return <LineChart className="h-4 w-4 text-blue-400" />;
    case 'Financial Institutions': return <Landmark className="h-4 w-4 text-blue-400" />;
    case 'Specialized Lending': return <Zap className="h-4 w-4 text-blue-400" />;
    case 'Asset-Based Lending': return <Building2 className="h-4 w-4 text-blue-400" />;
    case 'Loan Products': return <BadgeCheck className="h-4 w-4 text-blue-400" />;
    default: return <Shield className="h-4 w-4 text-blue-400" />;
  }
};

// Generic small icon for items
const ItemIcon = () => <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-blue-400" />;

// Map item labels to description strings for premium look
const getItemDescription = (label) => {
  switch (label) {
    // Services - Verification
    case 'CPV Services': return 'Contact Point Verification & Address Audit';
    case 'Residence Verification': return 'Physical residence verification & profile audit';
    case 'Office Verification': return 'Commercial verification & employee checks';
    case 'Business Verification': return 'Merchant site audits & business checks';
    case 'Document Verification': return 'KYC documents & credentials verification';
    
    // Services - Collections
    case 'Early Stage Collections': return 'Pre-delinquency digital and call recovery campaigns';
    case 'Soft Collections': return 'Tele-calling, payment reminders & follow-ups';
    case 'Hard Collections': return 'Legal demand letter deliveries & recovery visits';
    case 'Field Collections': return 'In-person visits & doorstep collection coordination';
    case 'Debt Recovery': return 'NPA recovery & resolution of write-off portfolios';
    
    // Services - Legal
    case 'SARFAESI Support': return 'Securitization act support & legal notification flow';
    case 'Possession Support': return 'Secured asset inventory & physical possession assist';
    case 'Legal Coordination': return 'Advocates tracking & legal document processing';
    case 'Litigation Support': return 'Civil suits, arbitration & legal recovery tracking';
    
    // Services - Asset Recovery
    case 'Vehicle Repossession': return 'Automobile tracing, yard checkin & repossession';
    case 'Asset Tracing': return 'Skip tracing, real-estate & asset identification';
    case 'Asset Recovery': return 'Physical recovery & secure yard custody tracking';
    case 'Auction Coordination': return 'Asset valuation & e-auction process support';
    
    // Services - Investigation
    case 'Skip Tracing': return 'Locating untraceable debtors & contact information';
    case 'Address Tracing': return 'Audit trail analysis for location identification';
    case 'Contact Verification': return 'Phone number checks & digital trace verification';
    case 'Fraud Investigation': return 'Forensic accounting & corporate fraud audits';
    
    // Services - Operational
    case 'Call Centre Operations': return 'DRA-compliant predictive dialer outbound centers';
    case 'Manpower Sourcing': return 'Sourcing skilled verification and collection staff';
    case 'Facility Management': return 'Secure records storage & administrative support';
    case 'Liaising Services': return 'Regulatory, legal & bank liaison operations';
    case 'Portfolio Management': return 'End-to-end debt portfolio performance auditing';
    case 'NPA Recovery': return 'Specialized stressed assets recovery operations';
    case 'Recovery Analytics': return 'Delinquency prediction & routing scorecards';
    case 'Recovery Consulting': return 'Workflow optimizations & risk policy consulting';

    // About
    case 'Company Overview': return 'Overview of SM Associates history and setup';
    case 'Leadership': return 'Meet our management team and executive board';
    case 'Company History': return 'Milestones and expansion journey since Y2K';
    case 'Why SM Associates': return 'Our competitive edge, compliance and security';
    case 'Our Clientele': return 'Serving top public & private sector banks';
    case 'Compliance & Ethics': return 'Strict compliance standards & DRA code of conduct';

    // Industries
    case 'Banking': return 'Public & private banking recovery workflows';
    case 'NBFC': return 'Non-banking finance credit recovery models';
    case 'Housing Finance': return 'Home loan verification & SARFAESI actions';
    case 'Microfinance': return 'Rural credit & SHG recovery operations';
    case 'Fintech': return 'Digital loans, API checks & billing loops';
    case 'Asset Reconstruction Companies': return 'Stressed corporate asset resolution services';
    case 'Commercial Lending': return 'Corporate debt collections & collateral recovery';
    case 'Insurance': return 'Premium renewals & claims verification audits';
    case 'Vehicle Finance': return 'Auto loans repossession & auction management';
    case 'Gold Loan Institutions': return 'Gold loan validation, storage & recovery audits';
    case 'Retail & Personal Loans': return 'Credit cards & unsecured loans collection';
    case 'Auto & Vehicle Loans': return 'Vehicle repossession & recovery operations';
    case 'SME & Business Loans': return 'Working capital & business collateral recovery';
    case 'Agricultural & Rural': return 'KCC & rural micro-credit recovery actions';
    case 'Jewel & Gold Loans': return 'Jewel appraisal verification & auction actions';
    case 'Educational Loans': return 'Student tracing & education loan collections';

    // Recovery Operations
    case 'Recovery Operating System': return 'Centralized case registry & governance framework';
    case 'Escalation Governance Framework': return 'Rules-based escalation from calling to field to legal';
    case 'Field Operations Network': return 'GPS-enabled field staff dispatch & verification';
    case 'Compliance Monitoring': return 'Daily voice recording audits & legal standards';
    case 'Recovery Intelligence Framework': return 'Propensity scoring & portfolio diagnostics';
    case 'AI Recovery Roadmap': return 'Governed AI pilots under human oversight';

    // Coverage
    case 'India Presence': return 'National footprint, branch office & yard networks';
    case 'Tamil Nadu': return 'State-wide verification & collection network';
    case 'Karnataka': return 'Regional branch offices & field agents coverage';
    case 'Kerala': return 'South regional offices & local language support';
    case 'Telangana': return 'Hyderabad branch & regional field operations';
    case 'Andhra Pradesh': return 'Vijayawada branch & state-wide field network';
    case 'Puducherry': return 'UT regional verification and recovery operations';
    case 'Branch Network': return 'Detailed branch office & secure yard locations';

    // Insights
    case 'Case Studies': return 'Lender recovery success stories and metrics';
    case 'Blog': return 'Articles on risk assessment, recovery & regulations';
    case 'News & Updates': return 'Latest company news, press releases & audits';

    default: return 'Learn more about our dedicated operations';
  }
};

const getMenuSubtitle = (label) => {
  switch (label) {
    case 'Services': return 'Explore our recovery, verification and risk management capabilities.';
    case 'Industries': return 'Solutions tailored to your sector and lending product.';
    default: return '';
  }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [hoverKey, setHoverKey] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Filter out Home, Careers, Contact from middle nav since they might be standalone or placed elsewhere
  const middleNavItems = navigationData.mainNav.filter(
    (item) => item.label !== 'Home' && item.label !== 'Careers' && item.label !== 'Contact'
  );

  const isItemActive = (item) => {
    if (location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    if (item.isMegaMenu && item.columns) {
      return item.columns.some(col => 
        col.items.some(subItem => location.pathname === subItem.href)
      );
    }
    return false;
  };

  const handleMouseEnter = (key) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(key);
    setHoverKey(key);
  };

  // Only clears the close timeout — does NOT open the menu.
  // Used on the dropdown panel so entering it from page content below never triggers a menu open.
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setHoverKey(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(null);
    setHoverKey(null);
    const activeItem = middleNavItems.find(item => isItemActive(item));
    if (activeItem) {
      setMobileExpanded(activeItem.label);
    }
  }, [location]);

  useEffect(() => {
    setExpandedCategory(null);
  }, [activeMenu]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">


      <div className="relative mx-auto max-w-[1400px] px-3 pt-3 sm:px-4 lg:px-6">
        <div
          className="relative overflow-visible rounded-2xl transition-all duration-300"
          style={{
            border: '1px solid rgba(15,23,42,0.08)',
            boxShadow: scrolled
              ? `0 18px 50px -12px rgba(15,23,42,0.10), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px -8px ${BRAND}33`
              : `0 24px 60px -16px rgba(15,23,42,0.08), 0 0 30px -10px ${BRAND}26`,
          }}
        >
          {/* Background blur layer to avoid stacking context & text blur issues in children */}
          <div 
            className="absolute inset-0 -z-10 rounded-2xl pointer-events-none"
            style={{
              background: scrolled ? '#ffffff' : 'rgba(255,255,255,0.96)',
            }}
          />

          {/* Main nav row */}
          <div className="flex h-[60px] items-center px-5 lg:px-7">

            {/* Logo */}
            <Link to="/" className="flex shrink-0 items-center gap-2.5">
              <Shield className="h-7 w-7" strokeWidth={1.6} style={{ color: BRAND }} />
              <span className="text-[16px] font-bold text-gray-900">SM Associates</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden flex-1 h-full items-stretch justify-center gap-1 xl:flex">
              {middleNavItems.map((navItem) => {
                const key = navItem.label;
                const hasDropdown = navItem.children || navItem.isMegaMenu;

                return (
                  <div
                    key={key}
                    className={`flex items-center ${navItem.isMegaMenu ? "static" : "relative"}`}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <Link
                        to={navItem.href}
                        onMouseEnter={() => handleMouseEnter(key)}
                        onClick={() => {
                          setActiveMenu(activeMenu === key ? null : key);
                        }}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                        style={{ color: isItemActive(navItem) || activeMenu === key || hoverKey === key ? BRAND : 'rgba(15, 23, 42, 0.65)' }}
                      >
                        {navItem.label}
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2px] origin-center rounded-full transition-all duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${BRAND}, ${VIOLET})`,
                            opacity: hoverKey === key || isItemActive(navItem) || activeMenu === key ? 1 : 0,
                            transform: hoverKey === key || isItemActive(navItem) || activeMenu === key ? 'scaleX(1)' : 'scaleX(0.3)',
                            boxShadow: hoverKey === key || isItemActive(navItem) || activeMenu === key ? `0 0 12px ${BRAND}` : 'none',
                          }}
                        />
                      </Link>
                    ) : (
                      <Link
                        to={navItem.href}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                        style={{ color: isItemActive(navItem) ? BRAND : 'rgba(15, 23, 42, 0.65)' }}
                      >
                        {navItem.label}
                      </Link>
                    )}

                    {hasDropdown && (
                      <div
                        onMouseEnter={handleDropdownMouseEnter}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '16px',
                          zIndex: 50,
                          width: navItem.isMegaMenu ? '680px' : navItem.children?.length >= 6 ? '480px' : '280px',
                          display: activeMenu === key ? 'block' : 'none',
                          visibility: activeMenu === key ? 'visible' : 'hidden',
                          opacity: activeMenu === key ? 1 : 0,
                          pointerEvents: activeMenu === key ? 'auto' : 'none',
                          transition: activeMenu === key
                            ? 'opacity 0.15s ease'
                            : 'opacity 0.1s ease, visibility 0s linear 0.1s',
                        }}
                      >
                          <div
                            className={`w-full max-h-[75vh] overflow-y-auto overflow-x-hidden rounded-2xl ${navItem.isMegaMenu ? '' : 'p-3'}`}
                            style={{
                              background: '#ffffff',
                              border: '1px solid rgba(15,23,42,0.08)',
                              boxShadow: '0 32px 64px -12px rgba(15,23,42,0.20), 0 0 0 1px rgba(15,23,42,0.02)',
                            }}
                          >
                            {navItem.isMegaMenu ? (
                              <div className="flex">
                                <div
                                  className="w-[240px] shrink-0 p-6"
                                  style={{ background: `linear-gradient(180deg, ${BRAND}14, ${VIOLET}0F)` }}
                                >
                                  <h3 className="font-sora text-2xl font-bold text-slate-900">{navItem.label}</h3>
                                  <p className="mt-2 text-[13px] leading-snug text-slate-500">
                                    {getMenuSubtitle(navItem.label)}
                                  </p>

                                  <div className="mt-6 flex flex-col gap-2">
                                    {navItem.columns.map((col, idx) => {
                                      const activeTitle = expandedCategory ?? navItem.columns[0].title;
                                      const isActive = activeTitle === col.title;
                                      return (
                                        <button
                                          key={idx}
                                          onMouseEnter={() => setExpandedCategory(col.title)}
                                          onClick={() => setExpandedCategory(col.title)}
                                          className={`flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition-all ${
                                            isActive ? 'bg-white text-slate-900 shadow-md' : 'bg-white/50 text-slate-700 hover:bg-white/80'
                                          }`}
                                        >
                                          {col.title}
                                          {!isActive && <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>

                                <div
                                  className="min-w-[400px] flex-1 p-6"
                                  style={{ position: 'relative', minHeight: '320px' }}
                                >
                                  {navItem.columns.map((col) => {
                                    const activeTitle = expandedCategory ?? navItem.columns[0].title;
                                    const isActive = col.title === activeTitle;

                                    return (
                                      <div
                                        key={col.title}
                                        style={{
                                          position: 'absolute',
                                          inset: '24px',
                                          visibility: isActive ? 'visible' : 'hidden',
                                          pointerEvents: isActive ? 'auto' : 'none',
                                          userSelect: isActive ? 'auto' : 'none',
                                        }}
                                        aria-hidden={!isActive}
                                      >
                                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                          {col.items.map((item) => (
                                            <Link
                                              key={item.label}
                                              to={item.href}
                                              onClick={() => setActiveMenu(null)}
                                              className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                            >
                                              <span className="text-[15px] font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                                                {item.label}
                                              </span>
                                              <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-blue-500" />
                                            </Link>
                                          ))}
                                        </div>

                                        <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5">
                                          <span className="text-[13px] text-slate-500">
                                            Need help choosing the right {navItem.label.toLowerCase()}?
                                          </span>
                                          <Link
                                            to="/contact"
                                            onClick={() => setActiveMenu(null)}
                                            className="shrink-0 rounded-lg px-3.5 py-2 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                            style={{ background: `linear-gradient(135deg, ${BRAND}, ${VIOLET})` }}
                                          >
                                            Contact Us
                                          </Link>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>

                              </div>
                            ) : (
                              <div className={navItem.children.length >= 6 ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-2'}>
                                {navItem.children.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50"
                                  >
                                    <div className="mt-1 shrink-0 p-1 rounded-lg bg-slate-100 group-hover:bg-blue-500/10 transition-colors">
                                      <ItemIcon />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-[13px] font-semibold text-slate-800 transition-colors group-hover:text-slate-950 leading-tight">
                                        {item.label}
                                      </span>
                                      <span className="text-[11px] text-slate-500 transition-colors group-hover:text-slate-600 mt-0.5 leading-snug">
                                        {getItemDescription(item.label)}
                                      </span>
                                      {item.isFuture && (
                                        <span className="mt-1 inline-block rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-600 w-fit border border-indigo-200">
                                          Future Release
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>

            {/* Right: Careers + Login + CTA */}
            <div className="hidden shrink-0 items-center gap-4 xl:flex">
              <Link
                to="/careers"
                className="relative inline-flex items-center px-3 py-2 text-[15px] font-semibold text-gray-900/65 transition-colors duration-200 hover:text-gray-950 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                style={{
                  background: `linear-gradient(135deg, ${BRAND}, ${VIOLET})`,
                  boxShadow: `0 8px 24px -4px ${BRAND}66, 0 0 0 1px rgba(255,255,255,0.15) inset`,
                }}
              >
                Contact Us
                <CalendarDays className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border text-gray-700 xl:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              style={{ borderColor: 'rgba(15,23,42,0.12)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div
              className="overflow-hidden border-t xl:hidden"
              style={{ borderColor: 'rgba(15,23,42,0.08)' }}
            >
                <div className="max-h-[calc(100dvh-120px)] overflow-y-auto px-5 py-4 space-y-1 bg-white/95">
                  {middleNavItems.map((navItem) => {
                    const key = navItem.label;
                    const hasDropdown = navItem.children || navItem.isMegaMenu;

                    return (
                      <div key={key}>
                        {hasDropdown ? (
                          <>
                            <button
                              onClick={() => {
                                setMobileExpanded(mobileExpanded === key ? null : key);
                              }}
                              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-semibold transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                              style={{ color: isItemActive(navItem) || mobileExpanded === key ? BRAND : 'rgba(17, 24, 39, 0.75)' }}
                            >
                              {navItem.label}
                              <ChevronDown 
                                className="h-4 w-4 transition-transform duration-200 text-gray-400"
                                style={{ transform: mobileExpanded === key ? 'rotate(180deg)' : 'none' }}
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
                                  <div className="ml-3 mt-1 space-y-2 border-l-2 pl-3 pb-2" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
                                    {/* View All category link */}
                                    <Link
                                      to={navItem.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block rounded-lg px-2 py-1.5 text-[13px] font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                    >
                                      View All {navItem.label}
                                    </Link>

                                    {navItem.isMegaMenu ? (
                                      navItem.columns.map((col, idx) => (
                                        <div key={idx} className="mb-2">
                                          <div className="mb-1 text-[11px] font-bold text-gray-400 uppercase">{col.title}</div>
                                          {col.items.map((item) => (
                                            <Link
                                              key={item.label}
                                              to={item.href}
                                              onClick={() => setMobileOpen(false)}
                                              className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-gray-900/60 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                            >
                                              {item.label}
                                            </Link>
                                          ))}
                                        </div>
                                      ))
                                    ) : (
                                      navItem.children.map((item) => (
                                        <Link
                                          key={item.label}
                                          to={item.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-gray-900/60 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                        >
                                          {item.label}
                                        </Link>
                                      ))
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={navItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold text-gray-900/75 hover:bg-gray-50"
                          >
                            {navItem.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}

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
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
