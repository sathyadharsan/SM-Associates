import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    case 'Recovery Operating System': return 'Digital dashboard for case status tracking';
    case 'Workflow Automation': return 'Automated dialing queues & legal letters dispatch';
    case 'Field Operations Network': return 'Real-time field staff navigation & verification';
    case 'Compliance Monitoring': return 'Daily voice recording audits & legal standards';
    case 'Recovery Analytics': return 'Delinquency predictive indexing scoring';
    case 'AI Recovery Platform': return 'Automated settlement negotiations chatbot';

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

  // Filter out Home, Careers, Contact from middle nav since they might be standalone or placed elsewhere
  const middleNavItems = navigationData.mainNav.filter(
    (item) => item.label !== 'Home' && item.label !== 'Careers' && item.label !== 'Contact'
  );

  return (
    <div className="fixed inset-x-0 top-0 z-50">

      {/* Ambient purple-blue glow behind the floating navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[140px] overflow-hidden">
        <div className="absolute left-1/2 top-[-60px] h-[200px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[70px]"
          style={{ background: `linear-gradient(90deg, ${BRAND}, ${VIOLET})` }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-3 pt-3 sm:px-4 lg:px-6">
        <div
          className="relative overflow-visible rounded-2xl transition-all duration-300"
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
                    onMouseEnter={() => {
                      setActiveMenu(key);
                      setHoverKey(key);
                    }}
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setHoverKey(null);
                    }}
                  >
                    {hasDropdown ? (
                      <button
                        onMouseEnter={() => setActiveMenu(key)}
                        onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] text-gray-900/65 transition-colors duration-200 hover:text-gray-950"
                      >
                        {navItem.label}
                        <ChevronDown
                          className="h-3.5 w-3.5 transition-transform duration-300"
                          style={{ transform: activeMenu === key ? 'rotate(-180deg)' : 'rotate(0deg)', color: 'rgba(15,23,42,0.35)' }}
                        />
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2px] origin-center rounded-full transition-all duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${BRAND}, ${VIOLET})`,
                            opacity: hoverKey === key ? 1 : 0,
                            transform: hoverKey === key ? 'scaleX(1)' : 'scaleX(0.3)',
                            boxShadow: hoverKey === key ? `0 0 12px ${BRAND}` : 'none',
                          }}
                        />
                      </button>
                    ) : (
                      <Link
                        to={navItem.href}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] text-gray-900/65 transition-colors duration-200 hover:text-gray-950"
                      >
                        {navItem.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {activeMenu === key && hasDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98, x: navItem.isMegaMenu ? "0%" : "-50%" }}
                          animate={{ opacity: 1, y: 0, scale: 1, x: navItem.isMegaMenu ? "0%" : "-50%" }}
                          exit={{ opacity: 0, y: 8, scale: 0.98, x: navItem.isMegaMenu ? "0%" : "-50%" }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full pt-4 z-50 ${
                            navItem.isMegaMenu ? 'left-0 right-0 mx-auto w-full max-w-[1300px]' : 'left-1/2 w-[280px]'
                          }`}
                        >
                          <div
                            className={`w-full overflow-hidden rounded-2xl ${
                              navItem.isMegaMenu ? 'p-8' : 'p-4'
                            }`}
                            style={{
                              background: '#0B1120',
                              border: '1px solid rgba(255,255,255,0.08)',
                              boxShadow: `0 32px 64px -12px rgba(0,0,0,0.5), 0 0 40px -10px ${BRAND}40`,
                            }}
                          >
                            {navItem.isMegaMenu ? (
                              <div className={navItem.columns.length === 6 ? "grid grid-cols-3 gap-x-12 gap-y-10" : "grid grid-cols-4 gap-8"}>
                                {navItem.columns.map((col, idx) => (
                                  <div key={idx} className="flex-1">
                                    <div className="mb-4 flex items-center gap-2">
                                      {getColumnIcon(col.title)}
                                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-100">
                                        {col.title}
                                      </h3>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      {col.items.map((item) => (
                                        <Link
                                          key={item.label}
                                          to={item.href}
                                          onClick={() => setActiveMenu(null)}
                                          className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 transition-all duration-200 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/10"
                                        >
                                          <div className="mt-1 shrink-0 p-1 rounded-lg bg-white/[0.03] group-hover:bg-blue-500/10 transition-colors">
                                            <ItemIcon />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-[13px] font-semibold text-slate-200 transition-colors group-hover:text-white leading-tight">
                                              {item.label}
                                            </span>
                                            <span className="text-[11px] text-slate-500 transition-colors group-hover:text-slate-400 mt-0.5 leading-snug">
                                              {getItemDescription(item.label)}
                                            </span>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="flex flex-col gap-2">
                                {navItem.children.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                                  >
                                    <div className="mt-1 shrink-0 p-1 rounded-lg bg-white/[0.03] group-hover:bg-blue-500/10 transition-colors">
                                      <ItemIcon />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-[13px] font-semibold text-slate-200 transition-colors group-hover:text-white leading-tight">
                                        {item.label}
                                      </span>
                                      <span className="text-[11px] text-slate-500 transition-colors group-hover:text-slate-400 mt-0.5 leading-snug">
                                        {getItemDescription(item.label)}
                                      </span>
                                      {item.isFuture && (
                                        <span className="mt-1 inline-block rounded bg-indigo-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-400 w-fit border border-indigo-500/20">
                                          Future Release
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right: Careers + Login + CTA */}
            <div className="hidden shrink-0 items-center gap-4 xl:flex">
              <Link
                to="/careers"
                className="text-[14px] font-semibold text-gray-900/65 transition hover:text-gray-950"
              >
                Careers
              </Link>
              <Link
                to="/login"
                className="text-[14px] font-semibold text-indigo-600 transition hover:text-indigo-800"
              >
                Client Login
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
              onClick={() => setMobileOpen((v) => !v)}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border text-gray-700 xl:hidden"
              style={{ borderColor: 'rgba(15,23,42,0.12)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
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
                              onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-semibold text-gray-900/75 hover:bg-gray-50"
                            >
                              {navItem.label}
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
                                  <div className="ml-3 mt-1 space-y-2 border-l-2 pl-3 pb-2" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
                                    {navItem.isMegaMenu ? (
                                      navItem.columns.map((col, idx) => (
                                        <div key={idx} className="mb-2">
                                          <div className="mb-1 text-[11px] font-bold text-gray-400 uppercase">{col.title}</div>
                                          {col.items.map((item) => (
                                            <Link
                                              key={item.label}
                                              to={item.href}
                                              onClick={() => setMobileOpen(false)}
                                              className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-gray-900/60 hover:text-gray-950"
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
                                          className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-gray-900/60 hover:text-gray-950"
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
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-[14px] font-semibold text-indigo-600 hover:bg-indigo-50"
                    >
                      Client Login
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
