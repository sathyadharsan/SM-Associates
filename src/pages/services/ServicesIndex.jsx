import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceStorySection from '../../sections/ServiceStorySection';
import DayInRecoverySection from '../../sections/DayInRecoverySection';
import TechnologyStorySection from '../../sections/TechnologyStorySection';
import ComplianceStorySection from '../../sections/ComplianceStorySection';
import StickyScrollCardsSection from '../../sections/StickyScrollCardsSection';
import HeroParallax from '../../components/ui/hero-parallax';

const recoveryProducts = [
  // ── ROW 1: Financial & Secured Asset Recovery (13 Services) ──
  {
    title: "Retail & Delinquency Recovery",
    category: "Financial Recovery",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    description: "End-to-end delinquency curve recovery for early-stage retail banking & NBFC loan portfolios."
  },
  {
    title: "Commercial Real Estate Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "Statutory enforcement and physical recovery for commercial mortgages & corporate properties."
  },
  {
    title: "SARFAESI Legal Enforcement",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    description: "End-to-end statutory Section 13 notices, physical possession, and court bailiff execution."
  },
  {
    title: "Commercial Fleet Repossession",
    category: "Movable Assets",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    description: "Repossession, secured yard custody, and auction realization for commercial transport fleets."
  },
  {
    title: "Merchant POS & Hardware Recovery",
    category: "Business Equipment",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
    description: "Field retrieval of deployed merchant POS hardware, terminals, routers, and enterprise assets."
  },
  {
    title: "Institutional Banking Mandates",
    category: "Enterprise Mandates",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    description: "Whole-book recovery mandates for scheduled commercial banks and regulated financial institutions."
  },
  {
    title: "Residential Mortgage Collateral",
    category: "Secured Assets",
    link: "/services/asset-recovery/real-estate",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Resolution and statutory physical possession for defaulted residential housing loans."
  },
  {
    title: "Heavy Industrial Equipment",
    category: "Movable Assets",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    description: "Secured recovery and custody management for construction equipment and plant machinery."
  },
  {
    title: "AI Propensity Scoring Engine",
    category: "Intelligence",
    link: "/services/operational/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Machine learning algorithms ranking accounts by recoverability and optimal contact timing."
  },
  {
    title: "GPS Geo-Tagged Field Operations",
    category: "Field Operations",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    description: "Doorstep field recovery backed by real-time GPS verification and audit-ready logging."
  },
  {
    title: "Section 138 Negotiated Resolution",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=1200&auto=format&fit=crop",
    description: "Cheque bounce legal escalation, notice serving, and structured settlement negotiation."
  },
  {
    title: "Corporate Stressed Asset Resolution",
    category: "NPA Portfolios",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    description: "High-ticket written-off account recovery for ARC portfolios and corporate NPAs."
  },
  {
    title: "Industrial Plant Custody & Sale",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    description: "24/7 security custody, valuation, and auction management for manufacturing plants."
  },

  // ── ROW 2: Legal, Investigation & Retail Portfolios (12 Services) ──
  {
    title: "Skip Tracing & Deep Verification",
    category: "Investigation",
    link: "/services/investigation/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    description: "Digital footprint investigation and physical field tracing for untraceable accounts."
  },
  {
    title: "Real-Time Compliance & Governance",
    category: "Governance",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "Banking-grade audit trails with continuous conduct monitoring across all field interactions."
  },
  {
    title: "Agriculture & Tractor Recovery",
    category: "Equipment Recovery",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop",
    description: "Rural field recovery and repossession for agricultural equipment and tractor loans."
  },
  {
    title: "Credit Card & Unsecured Recovery",
    category: "Retail Portfolios",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    description: "Structured bucket-wise resolution for credit cards and unsecured consumer loans."
  },
  {
    title: "Two-Wheeler Repossession & Custody",
    category: "Auto Recovery",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    description: "Rapid two-wheeler field repossession with secure yard storage and digital auctioning."
  },
  {
    title: "Vehicle Valuation & E-Auction",
    category: "Asset Realization",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    description: "Certified vehicle valuation and transparent e-auction execution for max asset recovery."
  },
  {
    title: "High-Ticket Corporate NPA Resolution",
    category: "Stressed Debt",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    description: "Tailored resolution strategies for high-exposure corporate NPA portfolios."
  },
  {
    title: "Debt Recovery Tribunal (DRT) Filing",
    category: "Legal Proceedings",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1200&auto=format&fit=crop",
    description: "DRT original application filings, interim injunctions, and receiver appointment support."
  },
  {
    title: "NCLT & Insolvency Resolution",
    category: "Corporate Restructuring",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
    description: "IBC Section 7 & 9 petitions support, operational creditor representation, and claim filing."
  },
  {
    title: "Corporate Debt Mediation",
    category: "Resolution Engine",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description: "Out-of-court structured debt restructuring and One-Time Settlement (OTS) negotiation."
  },
  {
    title: "Omnichannel Tele-Calling Outreach",
    category: "Digital Contact",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop",
    description: "Multi-language call center operations with automated dialers and speech analytics."
  },
  {
    title: "Automated WhatsApp & SMS Campaign",
    category: "Omnichannel AI",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
    description: "Interactive payment link delivery via verified WhatsApp Business API and SMS channels."
  },

  // ── ROW 3: Field Operations, Commercial & Specialized Recovery (12 Services) ──
  {
    title: "Doorstep Address Verification",
    category: "Field Operations",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description: "On-ground physical residence and business office verification with photographic evidence."
  },
  {
    title: "Asset Tracing & Financial Audit",
    category: "Investigation",
    link: "/services/investigation/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    description: "Uncovering hidden borrower assets, property deeds, and undisclosed business holdings."
  },
  {
    title: "Gold Loan Default Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1200&auto=format&fit=crop",
    description: "Compliance-backed notice delivery and public auction management for gold loan defaults."
  },
  {
    title: "Microfinance (MFI) Group Recovery",
    category: "Inclusive Finance",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    description: "Community-sensitive Joint Liability Group (JLG) center meeting recovery operations."
  },
  {
    title: "SME & MSME Business Loan Recovery",
    category: "Commercial Lending",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Secured and unsecured MSME loan workout programs with cash-flow monitoring."
  },
  {
    title: "Mining Machinery Repossession",
    category: "Industrial Assets",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200&auto=format&fit=crop",
    description: "Off-road heavy machinery locate, secure extraction, and logistics transport to yards."
  },
  {
    title: "Pre-Litigation Mediation & Counseling",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    description: "Lok Adalat & pre-litigation settlement forums organizing formal legal compromise."
  },
  {
    title: "Statutory Execution Bailiff Action",
    category: "Statutory Enforcement",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1200&auto=format&fit=crop",
    description: "Magistrate order execution, District Collector assistance, and police protection deployment."
  },
  {
    title: "Stressed Asset Portfolio Acquisition",
    category: "ARC Mandates",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
    description: "Due diligence and resolution support for Asset Reconstruction Companies (ARCs)."
  },
  {
    title: "Autonomous AI Settlement Negotiation",
    category: "AI Technology",
    link: "/services/operational/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Self-service borrower portal negotiating policy-compliant payment schedules 24/7."
  },
  {
    title: "Warehouse & Stock Verification",
    category: "Audit & Inspection",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    description: "Pledged inventory physical audit, stock counting, and warehouse sealing operations."
  },
  {
    title: "Cross-Border & NRI Asset Recovery",
    category: "Specialized Enforcement",
    link: "/services/investigation/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    description: "Inter-state and overseas borrower contact, legal notice serving, and asset tracing."
  }
];

// One reveal vocabulary shared by every section, so the page reads as a single
// composition rather than eight blocks with their own timing.
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function ServicesIndex() {
  return (
    <div className="bg-white">
      {/* ═══════════ 1 · HERO PARALLAX SECTION ═══════════ */}
      <HeroParallax products={recoveryProducts} />

      {/* ═══════════ 1b · SCROLL-DRIVEN SERVICE STORY ═══════════
          Replaces the auto-rotating EnterpriseServicesSection (still used
          on the homepage) with a scroll-scrubbed version of the same 8
          categories — the client asked for the whole services page to read
          as a scroll-driven story, Ather-Rizta-connectivity-section style. */}
      <ServiceStorySection />

      {/* ═══════════ 2 · A DAY IN RECOVERY (SCROLL-DRIVEN STORY) ═══════════
          New section — humanizes the abstract capability list above with one
          illustrative mandate's timeline, one sentence per scroll chapter. */}
      <DayInRecoverySection />

      {/* ═══════════ 3 · TECHNOLOGY (SCROLL-DRIVEN STORY) ═══════════
          (An "Operational Strength" KPI block sat here originally. Removed:
          the homepage Metrics section already carries those same figures —
          25+ years, branch network, field workforce, institutional partners —
          and this page is explicitly meant not to repeat the home page.) */}
      <TechnologyStorySection />

      {/* ═══════════ 4 · COMPLIANCE & DATA SECURITY (SCROLL-DRIVEN STORY) ═══════════
          Operating practice, not a certification badge grid — the ISO 27001 /
          RBI Compliant / SARFAESI Authorized / IIBF badges themselves already
          live on the homepage AwardsCertificationsSection. */}
      <ComplianceStorySection />

      {/* ═══════════ 5 · APPLE-INSPIRED STICKY SCROLL GLASS CARDS (ROADMAP) ═══════════
          Already scroll-driven (Framer Motion useScroll/useTransform pinned
          cards) — left as-is, no conversion needed. */}
      <StickyScrollCardsSection />

      {/* ═══════════ 6 · CTA ═══════════
          (An "How We Execute" step-by-step section sat here originally. Removed:
          the homepage Operating Model section already carries the same
          accountable-lifecycle sequence, and this page must not repeat the
          home page.) */}
      <section className="relative overflow-hidden bg-white border-t border-slate-100 py-20 sm:py-28">
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[460px] w-[460px] rounded-full bg-[#0072bc]/10 blur-[110px]" />

        <div className="fg-wrap relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2
              variants={rise}
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[42px]"
            >
              Let&apos;s Build Smarter Recovery Operations
            </motion.h2>
            <motion.p variants={rise} className="mx-auto mt-5 max-w-2xl text-[16.5px] leading-relaxed text-slate-600">
              Whether you require portfolio recovery, secured asset recovery, field operations or
              enterprise recovery transformation, our specialists are ready to help.
            </motion.p>
            <motion.div variants={rise} className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0072bc] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0072bc]/25 transition-shadow hover:shadow-xl hover:shadow-[#0072bc]/30"
              >
                Schedule Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400"
              >
                Contact SM Associates
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
