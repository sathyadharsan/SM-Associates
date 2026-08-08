import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
  ChevronDown, Menu, X, Shield, ArrowRight, CalendarDays,
  FileCheck, Users, Scale, Car, Search, LineChart,
  Briefcase, Zap, Layout, ChevronRight, CheckCircle2,
  Building2, Landmark, ShieldAlert, BadgeCheck, FileSearch
} from 'lucide-react';
import { navigationData } from '../data/navigation';
import { CtaButton } from '../components/ui/cta-button';
import { FlowButton } from '../components/ui/flow-button';

const BRAND  = '#0072bc';
const VIOLET = '#0072bc';

// Map icons to column titles for the Mega Menu
const getColumnIcon = (title) => {
  switch (title) {
    case 'Verification Services': return <FileCheck className="h-4 w-4 text-brand-500" />;
    case 'Collections & Recovery': return <Users className="h-4 w-4 text-brand-500" />;
    case 'Legal Recovery': return <Scale className="h-4 w-4 text-brand-500" />;
    case 'Asset Recovery': return <Car className="h-4 w-4 text-brand-500" />;
    case 'Investigation Services': return <Search className="h-4 w-4 text-brand-500" />;
    case 'Operational & Specialized': return <LineChart className="h-4 w-4 text-brand-500" />;
    case 'Financial Institutions': return <Landmark className="h-4 w-4 text-brand-500" />;
    case 'Specialized Lending': return <Zap className="h-4 w-4 text-brand-500" />;
    case 'Asset-Based Lending': return <Building2 className="h-4 w-4 text-brand-500" />;
    case 'Loan Products': return <BadgeCheck className="h-4 w-4 text-brand-500" />;
    default: return <Shield className="h-4 w-4 text-brand-500" />;
  }
};

// Generic small icon for items
const ItemIcon = () => <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-brand-500" />;

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
    case 'Asset Tracing': return 'Borrower tracing, real-estate & asset identification';
    case 'Asset Recovery': return 'Physical recovery & secure yard custody tracking';
    case 'Auction Coordination': return 'Asset valuation & e-auction process support';
    
    // Services - Investigation
    case 'Borrower Tracing': return 'Locating untraceable debtors & contact information';
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

    // Services - Main Categories
    case 'Recovery Operations':
    case 'Collections & Recovery': return 'Early-stage, soft & field collections with PDC tracking';
    case 'Legal Recovery & Enforcement':
    case 'Legal Recovery': return 'SARFAESI Sec 13/14 support, cheque bounce notices & court liaising';
    case 'Verification & Due Diligence':
    case 'Verification Services': return 'CPV checks, residence & business audits, and pre-disbursal verifications';
    case 'Asset Recovery & Realisation':
    case 'Asset Recovery': return 'Vehicle repossession, asset tracing, yard custody & e-auctions';
    case 'Investigation & Fraud Control':
    case 'Investigation Services': return 'Borrower tracing, debtor address mapping, forensic audits & fraud control';
    case 'Operational Excellence & Analytics':
    case 'Operational Excellence': return 'Call centre dialers, manpower sourcing, facilities & liaising';

    // Insights & Resources
    case 'Insights': return 'Industry research, whitepapers & recovery trends';
    case 'Careers': return 'Explore career opportunities and join our team';

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

// Reference behaviour (client-supplied video, collekt.ai): the nav does NOT
// scrub continuously with scroll position — it's a single threshold crossing
// that plays a springy "settle" animation: flat edge-to-edge → the pill
// overshoots NARROW (and a secondary link fades out to give it room) →
// eases back out to a wider, still-floating resting width (link fades back
// in). Scrolling back to top simply tweens straight back to flat — the
// overshoot only plays on the way IN, matching what was recorded.
const NAV_FLAT = { width: '100%', radius: 0, shadow: '0 0px 0px rgba(15,23,42,0)' };
const NAV_DIP = { width: 'max-content', radius: 24, shadow: '0 24px 60px -20px rgba(15,23,42,0.22)' };
const NAV_SETTLED = { width: 'max-content', radius: 20, shadow: '0 16px 40px -18px rgba(15,23,42,0.14)' };

function useFloatingNav(scrolled) {
  const widthKeyframes = scrolled ? [NAV_FLAT.width, NAV_DIP.width, NAV_SETTLED.width] : NAV_FLAT.width;
  const radiusKeyframes = scrolled ? [NAV_FLAT.radius, NAV_DIP.radius, NAV_SETTLED.radius] : NAV_FLAT.radius;
  const shadowKeyframes = scrolled ? [NAV_FLAT.shadow, NAV_DIP.shadow, NAV_SETTLED.shadow] : NAV_FLAT.shadow;
  const times = scrolled ? [0, 0.45, 1] : undefined;

  return {
    cardAnimate: {
      width: widthKeyframes,
      borderRadius: radiusKeyframes,
      borderColor: scrolled ? 'rgba(15,23,42,0.08)' : 'rgba(15,23,42,0.06)',
      boxShadow: shadowKeyframes,
    },
    cardTransition: { duration: 0.65, times, ease: [0.22, 1, 0.36, 1] },
    glassAnimate: {
      borderRadius: radiusKeyframes,
      backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,1)',
    },
    glassTransition: { duration: 0.65, times, ease: [0.22, 1, 0.36, 1] },
    rowAnimate: { height: scrolled ? 56 : 76 },
    rowTransition: { duration: 0.4, ease: 'easeOut' },
    logoAnimate: { scale: scrolled ? 0.92 : 1.02 },
    logoTransition: { type: 'spring', stiffness: 300, damping: 24 },
    // The de-emphasized link (Careers, standing in for the reference's
    // "Login") dips out only during the narrow overshoot, then returns.
    deemphasizedAnimate: { opacity: scrolled ? [1, 0, 1] : 1 },
    deemphasizedTransition: { duration: 0.65, times, ease: [0.22, 1, 0.36, 1] },
  };
}

export default function Header() {
  // Threshold-crossing boolean (not continuous scroll tracking) — matches
  // the reference video's behaviour of a single triggered settle animation
  // rather than a scrubbed one. 24px gives a little dead zone so a stray
  // 1-2px scroll-restoration jiggle on route change doesn't retrigger it.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const nav = useFloatingNav(scrolled);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [hoverKey, setHoverKey] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Filter out only Contact from middle nav, since Careers should be in the main list
  const middleNavItems = navigationData.mainNav.filter(
    (item) => item.label !== 'Contact'
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


      <div className={`relative mx-auto w-full transition-all duration-300 ${
        scrolled 
          ? 'max-w-[1400px] px-3 pt-3 sm:px-4 lg:px-6' 
          : 'max-w-none px-0 pt-0'
      }`}>
        {/* Outer shell: overflow VISIBLE is load-bearing — mega-menu dropdowns
            are positioned absolute inside this element and must be able to
            render outside the rounded card's bounds. Width/border/shadow
            live here; background+blur live on the separate inset layer below
            so they clip to the rounded shape without clipping the dropdowns. */}
        <motion.div
          className="relative overflow-visible"
          initial={false}
          animate={nav.cardAnimate}
          transition={nav.cardTransition}
          style={{
            margin: '0 auto',
            borderTopWidth: scrolled ? 1 : 0,
            borderLeftWidth: scrolled ? 1 : 0,
            borderRightWidth: scrolled ? 1 : 0,
            borderBottomWidth: 1,
            borderStyle: 'solid',
          }}
        >
          {/* Glass background + blur — clipped to the rounded rect, sits
              behind all content, never affects dropdown overflow above.
              Blur itself is a plain CSS-transitioned style (not a framer
              `animate` target) — kept simple and reliable rather than
              relying on filter-string keyframe interpolation. */}
          <motion.div
            className="absolute inset-0 -z-10 pointer-events-none transition-[backdrop-filter] duration-500"
            initial={false}
            animate={nav.glassAnimate}
            transition={nav.glassTransition}
            style={{
              backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'blur(0px)',
              WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'blur(0px)',
            }}
          />

          {/* Main nav row */}
          <motion.div
            className={`flex items-center justify-center gap-6 lg:gap-8 transition-all duration-300 mx-auto w-full ${
              scrolled ? 'px-5 lg:px-6' : 'px-8 lg:px-12 max-w-[1400px]'
            }`}
            initial={false}
            animate={nav.rowAnimate}
            transition={nav.rowTransition}
          >

            {/* Logo — only this inner group scales; the Link itself (click
                target) stays full-size so the hit area never shrinks. */}
            <Link to="/" className="flex shrink-0 items-center">
              <motion.div
                className="flex items-center"
                initial={false}
                animate={nav.logoAnimate}
                transition={nav.logoTransition}
                style={{ transformOrigin: 'left center' }}
              >
                <img
                  src="/sm-logo.png"
                  alt="SM Associates Logo"
                  className="h-11 w-auto object-contain"
                />
                <motion.span 
                  className="flex flex-col leading-tight overflow-hidden"
                  initial={false}
                  animate={{
                    width: scrolled ? 0 : 'auto',
                    opacity: scrolled ? 0 : 1,
                    marginLeft: scrolled ? 0 : 8,
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <span className="text-[16px] font-bold text-gray-900">SM Associates</span>
                  <span className="text-[10.5px] font-semibold text-gray-500 tracking-wide whitespace-nowrap">Risk Management Pvt. Ltd.</span>
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden h-full items-center gap-6 lg:gap-8 xl:flex">
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
                          setActiveMenu(null);
                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                        }}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                        style={{ color: isItemActive(navItem) || activeMenu === key || hoverKey === key ? BRAND : '#0a0e1a' }}
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
                        onMouseEnter={() => handleMouseEnter(key)}
                        onClick={() => {
                          setActiveMenu(null);
                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                        }}
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                        style={{ color: isItemActive(navItem) || hoverKey === key ? BRAND : '#0a0e1a' }}
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
                                              <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-500" />
                                            </Link>
                                          ))}
                                        </div>

                                        <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5">
                                          <span className="text-[13px] text-slate-500">
                                            Need help choosing the right {navItem.label.toLowerCase()}?
                                          </span>
                                          <CtaButton
                                            to="/contact"
                                            onClick={() => setActiveMenu(null)}
                                            showIcon={false}
                                            className="shrink-0 px-3.5 py-2 text-[13px]"
                                          >
                                            Contact Us
                                          </CtaButton>
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
                                    <div className="mt-1 shrink-0 p-1 rounded-lg bg-slate-100 group-hover:bg-brand-500/10 transition-colors">
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
                                        <span className="mt-1 inline-block rounded bg-brand-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-500 w-fit border border-brand-500">
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

            {/* Right: CTA — the site's reference "Contact Us" treatment.
                CtaButton (components/ui/cta-button) is this exact design
                extracted for reuse elsewhere; kept as literal markup here
                rather than routed through it, so the one button this was
                modeled on can never drift from what it was modeled on. */}
            <div className="hidden shrink-0 items-center xl:flex">
              <FlowButton to="/contact" text="Contact Us" />
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
          </motion.div>

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
                              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-bold transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                              style={{ color: isItemActive(navItem) || mobileExpanded === key ? BRAND : '#0a0e1a' }}
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
                                      onClick={() => {
                                        setMobileOpen(false);
                                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                      }}
                                      className="block rounded-lg px-2 py-1.5 text-[13px] font-semibold text-brand-500 hover:text-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
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
                            onClick={() => {
                              setMobileOpen(false);
                              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                            }}
                            className="block rounded-xl px-3 py-2.5 text-[15px] font-bold text-[#0a0e1a] hover:bg-gray-50"
                          >
                            {navItem.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}

                  <div className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
                    <CtaButton
                      to="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="w-full py-3 text-[14px]"
                    >
                      Contact Us
                    </CtaButton>
                  </div>
                </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
