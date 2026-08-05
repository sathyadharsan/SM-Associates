import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceStorySection from '../../sections/ServiceStorySection';
import DayInRecoverySection from '../../sections/DayInRecoverySection';
import TechnologyStorySection from '../../sections/TechnologyStorySection';
import ComplianceStorySection from '../../sections/ComplianceStorySection';
import StickyScrollCardsSection from '../../sections/StickyScrollCardsSection';
import BrandManifestoSection from '../../sections/BrandManifestoSection';
import HeroParallax from '../../components/ui/hero-parallax';

const recoveryProducts = [
  // ── ROW 1: Financial & Secured Asset Recovery (4 Cards) ──
  {
    title: "Retail & Delinquency Recovery",
    category: "Financial Recovery",
    link: "/services/collections/commercial",
    thumbnail: "/services/images/retail-delinquency.png",
    description: "End-to-end delinquency curve recovery for early-stage retail banking & NBFC loan portfolios.",
    details: "Specialized tele-recovery and field engagement workflows designed for early to late-stage delinquency management across personal loans, credit cards, auto loans, and retail banking products with 100% RBI Fair Practices compliance."
  },
  {
    title: "Commercial Real Estate Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "/services/images/commercial-real-estate.png",
    description: "Statutory enforcement and physical recovery for commercial mortgages & corporate properties.",
    details: "End-to-end collateral takeover, physical property security management, valuation coordination, and statutory auction execution under SARFAESI & legal frameworks for commercial real estate."
  },
  {
    title: "SARFAESI Legal Enforcement",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "/services/images/sarfaesi-legal.png",
    description: "End-to-end statutory Section 13 notices, physical possession, and court bailiff execution.",
    details: "Full statutory compliance under SARFAESI Act 2002: drafting and serving Section 13(2) & 13(4) notices, District Magistrate (DM/CMM) order coordination, and peaceful physical possession execution."
  },
  {
    title: "Commercial Fleet Repossession",
    category: "Movable Assets",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "/services/images/commercial-fleet.png",
    description: "Repossession, secured yard custody, and auction realization for commercial transport fleets.",
    details: "On-field tracking, legal repossession notices, secure yard warehousing with 24/7 CCTV surveillance, and institutional auctioning for trucks, commercial fleets, and heavy equipment."
  },

  // ── ROW 2: Operations, Field & Investigation (4 Cards) ──
  {
    title: "Merchant POS & Hardware Recovery",
    category: "Business Equipment",
    link: "/services/operational/field-operations",
    thumbnail: "/services/images/merchant-pos.png",
    description: "Field retrieval of deployed merchant POS hardware, terminals, routers, and enterprise assets.",
    details: "Field asset tracking and physical retrieval of EDC machines, POS terminals, QR kits, and enterprise hardware from defaulted merchants across urban and semi-urban retail corridors."
  },
  {
    title: "Borrower Tracing & Deep Verification",
    category: "Investigation",
    link: "/services/investigation/skip-tracing",
    thumbnail: "/services/images/borrower-tracing.png",
    description: "Digital footprint investigation and physical field tracing for untraceable accounts.",
    details: "Advanced borrower tracing leveraging digital intelligence, field discreet inquiries, cross-reference mapping, and physical verification to locate untraceable borrowers and hidden collateral."
  },
  {
    title: "Real-Time Compliance & Governance",
    category: "Governance",
    link: "/services/operational/field-operations",
    thumbnail: "/services/images/compliance-governance.png",
    description: "Banking-grade audit trails with continuous conduct monitoring across all field interactions.",
    details: "Comprehensive governance suite ensuring strict adherence to RBI Fair Practices Code, automated agent conduct monitoring, audio/GPS audit logs, and zero-breach operational standards."
  },
  {
    title: "Two-Wheeler Repossession & Custody",
    category: "Auto Recovery",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "/services/images/two-wheeler.png",
    description: "Rapid two-wheeler field repossession with secure yard storage and digital auctioning.",
    details: "High-volume two-wheeler recovery operations with automated inventory tagging, secure regional yard custody, and accelerated digital auction liquidation."
  },

  // ── ROW 3: Specialized & High-Ticket NPA (4 Cards) ──
  {
    title: "Gold Loan Default Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "/services/images/gold-loan.png",
    description: "Compliance-backed notice delivery and public auction management for gold loan defaults.",
    details: "Legal notice serving, borrower resolution meetings, and public auction publication & management for overdue gold loan portfolios in accordance with statutory guidelines."
  },
  {
    title: "Doorstep Address Verification",
    category: "Field Operations",
    link: "/services/operational/field-operations",
    thumbnail: "/services/images/doorstep-verification.png",
    description: "On-ground physical residence and business office verification with photographic evidence.",
    details: "Real-time field verification visits for retail credit origination and delinquent accounts, capturing geo-tagged photos, landmark verification, and neighborhood checks."
  },
  {
    title: "SME & MSME Business Loan Recovery",
    category: "Commercial Lending",
    link: "/services/collections/commercial",
    thumbnail: "/services/images/msme-recovery.png",
    description: "Secured and unsecured MSME loan workout programs with cash-flow monitoring.",
    details: "Strategic recovery management for MSME business loans, offering structured repayment plans, cash-flow assessments, and legal workout mechanisms."
  },
  {
    title: "Corporate Stressed Asset Resolution",
    category: "NPA Portfolios",
    link: "/services/collections/banking",
    thumbnail: "/services/images/corporate-npa.png",
    description: "High-ticket written-off account recovery for ARC portfolios and corporate NPAs.",
    details: "Turnkey resolution for high-ticket corporate non-performing assets, written-off portfolios, and Asset Reconstruction Company (ARC) debt assignments across South India."
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

      {/* ═══════════ 1a · OPERATING PRINCIPLES ═══════════
          Same manifesto section already built for the homepage — reused
          as-is (not a new copy) rather than inventing services-specific
          statements. Also gives the pinned mandate cards above a proper
          landing beat instead of running straight into the next story. */}
      <BrandManifestoSection lines={[
        'Every portfolio is managed with institutional discipline.',
        'Every field operation is documented, audited, and reported.',
        'Every service we offer is backed by 25 years of proven recovery expertise.',
      ]} />

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
