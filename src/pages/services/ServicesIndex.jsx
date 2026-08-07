import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceStorySection from '../../sections/ServiceStorySection';
import BentoWorkflowSection from '../../sections/BentoWorkflowSection';

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
    details: "Specialized tele-recovery and field engagement workflows designed for early to late-stage delinquency management across personal loans, credit cards, auto loans, and retail banking products with 100% RBI Fair Practices compliance.",
    approach: ["Tele-Recovery", "Field Engagement", "Bucket Management", "RBI Compliance"]
  },
  {
    title: "Commercial Real Estate Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "/services/images/commercial-real-estate.png",
    description: "Statutory enforcement and physical recovery for commercial mortgages & corporate properties.",
    details: "End-to-end collateral takeover, physical property security management, valuation coordination, and statutory auction execution under SARFAESI & legal frameworks for commercial real estate.",
    approach: ["Collateral Takeover", "Property Security", "Valuation Coordination", "Statutory Auction"]
  },
  {
    title: "SARFAESI Legal Enforcement",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "/services/images/sarfaesi-legal.png",
    description: "End-to-end statutory Section 13 notices, physical possession, and court bailiff execution.",
    details: "Full statutory compliance under SARFAESI Act 2002: drafting and serving Section 13(2) & 13(4) notices, District Magistrate (DM/CMM) order coordination, and peaceful physical possession execution.",
    approach: ["Section 13 Notices", "DM/CMM Coordination", "Physical Possession", "Statutory Compliance"]
  },
  {
    title: "Commercial Fleet Repossession",
    category: "Movable Assets",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "/services/images/commercial-fleet.png",
    description: "Repossession, secured yard custody, and auction realization for commercial transport fleets.",
    details: "On-field tracking, legal repossession notices, secure yard warehousing with 24/7 CCTV surveillance, and institutional auctioning for trucks, commercial fleets, and heavy equipment.",
    approach: ["Field Tracking", "Repossession Notices", "Secure Yard Custody", "Institutional Auction"]
  },

  // ── ROW 2: Operations, Field & Investigation (4 Cards) ──
  {
    title: "Agriculture & Tractor Recovery",
    category: "Agricultural Loans",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop",
    description: "Tractor and farm equipment loan recovery — field repossession, safe custody, and auction realization for agricultural portfolios.",
    details: "Rural field recovery for tractor and agricultural equipment loans, covering repossession, secure custody, and auction sale — the same statutory discipline applied across every secured lending category.",
    approach: ["Rural Field Recovery", "Repossession", "Secure Custody", "Auction Sale"]
  },
  {
    title: "Borrower Tracing & Deep Verification",
    category: "Investigation",
    link: "/services/investigation/skip-tracing",
    thumbnail: "/services/images/borrower-tracing.png",
    description: "Digital footprint investigation and physical field tracing for untraceable accounts.",
    details: "Advanced borrower tracing leveraging digital intelligence, field discreet inquiries, cross-reference mapping, and physical verification to locate untraceable borrowers and hidden collateral.",
    approach: ["Digital Intelligence", "Discreet Field Inquiry", "Cross-Reference Mapping", "Physical Verification"]
  },
  {
    title: "Real-Time Compliance & Governance",
    category: "Governance",
    link: "/services/operational/field-operations",
    thumbnail: "/services/images/compliance-governance.png",
    description: "Banking-grade audit trails with continuous conduct monitoring across all field interactions.",
    details: "Comprehensive governance suite ensuring strict adherence to RBI Fair Practices Code, automated agent conduct monitoring, audio/GPS audit logs, and zero-breach operational standards.",
    approach: ["Conduct Monitoring", "Audio/GPS Audit Logs", "RBI Fair Practices", "Zero-Breach Standards"]
  },
  {
    title: "Two-Wheeler Repossession & Custody",
    category: "Auto Recovery",
    link: "/services/asset-recovery/heavy-equipment",
    thumbnail: "/services/images/two-wheeler.png",
    description: "Rapid two-wheeler field repossession with secure yard storage and digital auctioning.",
    details: "High-volume two-wheeler recovery operations with automated inventory tagging, secure regional yard custody, and accelerated digital auction liquidation.",
    approach: ["Inventory Tagging", "Regional Yard Custody", "Digital Auction", "High-Volume Recovery"]
  },

  // ── ROW 3: Specialized & High-Ticket NPA (4 Cards) ──
  {
    title: "Gold Loan Default Recovery",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "/services/images/gold-loan.png",
    description: "Compliance-backed notice delivery and public auction management for gold loan defaults.",
    details: "Legal notice serving, borrower resolution meetings, and public auction publication & management for overdue gold loan portfolios in accordance with statutory guidelines.",
    approach: ["Legal Notice Serving", "Borrower Resolution", "Public Auction", "Statutory Guidelines"]
  },
  {
    title: "Doorstep Address Verification",
    category: "Field Operations",
    link: "/services/operational/field-operations",
    thumbnail: "/services/images/doorstep-verification.png",
    description: "On-ground physical residence and business office verification with photographic evidence.",
    details: "Real-time field verification visits for retail credit origination and delinquent accounts, capturing geo-tagged photos, landmark verification, and neighborhood checks.",
    approach: ["Field Verification Visits", "Geo-Tagged Evidence", "Landmark Verification", "Neighborhood Checks"]
  },
  {
    title: "SME & MSME Business Loan Recovery",
    category: "Commercial Lending",
    link: "/services/collections/commercial",
    thumbnail: "/services/images/msme-recovery.png",
    description: "Secured and unsecured MSME loan workout programs with cash-flow monitoring.",
    details: "Strategic recovery management for MSME business loans, offering structured repayment plans, cash-flow assessments, and legal workout mechanisms.",
    approach: ["Structured Repayment Plans", "Cash-Flow Assessment", "Legal Workout", "Recovery Management"]
  },
  {
    title: "Corporate Stressed Asset Resolution",
    category: "NPA Portfolios",
    link: "/services/collections/banking",
    thumbnail: "/services/images/corporate-npa.png",
    description: "High-ticket written-off account recovery for ARC portfolios and corporate NPAs.",
    details: "Turnkey resolution for high-ticket corporate non-performing assets, written-off portfolios, and Asset Reconstruction Company (ARC) debt assignments across South India.",
    approach: ["Turnkey Resolution", "Written-Off Portfolios", "ARC Debt Assignment", "South India Coverage"]
  },

  // ── ROW 4: Legal Notices & Verification (4 Cards) ──
  {
    title: "Section 138 Cheque Bounce Enforcement",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=85&auto=format&fit=crop",
    description: "Statutory legal notice drafting, filing, and judicial summons coordination under Negotiable Instruments Act.",
    details: "Turnkey legal enforcement for dishonored cheques under Section 138 of N.I. Act, including demand notice dispatch within statutory 30-day timelines, magistrate court complaint filing, and summons execution.",
    approach: ["Demand Notice Dispatch", "Magistrate Court Filing", "Summons Execution", "Statutory Timelines"]
  },
  {
    title: "Contact Point Verification (CPV)",
    category: "Pre-Recovery",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=85&auto=format&fit=crop",
    description: "High-volume pre-allocation contact point verification for banking & fintech credit books.",
    details: "Structured physical CPV operations verifying applicant residence, employment stability, neighbor discreet feedback, and landmark mapping prior to portfolio allocation.",
    approach: ["Residence Verification", "Employment Stability Check", "Discreet Feedback", "Landmark Mapping"]
  },
  {
    title: "Soft & Early-Stage Tele-Collections",
    category: "Financial Recovery",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=900&q=85&auto=format&fit=crop",
    description: "Multi-lingual tele-calling resolution for 1-30 DPD early delinquency buckets.",
    details: "Call-center tele-recovery operations operating in Tamil, Telugu, Kannada, Malayalam, and Hindi, establishing contact and securing commitments to pay (PTP) for early-stage delinquent retail loans.",
    approach: ["Multi-Lingual Calling", "Promise-to-Pay (PTP)", "Early-Bucket Contact", "Call-Center Operations"]
  },
  {
    title: "Hard Field Recovery & Repossession",
    category: "Field Operations",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=90&auto=format&fit=crop",
    description: "Intensive on-ground field outreach for late-stage (60-90+ DPD) written-off accounts.",
    details: "Certified Direct Recovery Agents (DRAs) conducting structured field engagements, borrower negotiation, settlement workouts, and asset recovery for hard NPA buckets.",
    approach: ["Certified DRA Deployment", "Borrower Negotiation", "Settlement Workout", "Hard-Bucket Recovery"]
  },

  // ── ROW 5: Asset Valuation & Physical Investigation (4 Cards) ──
  {
    title: "Physical Property Takeover & Security",
    category: "Secured Assets",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85&auto=format&fit=crop",
    description: "Collate security setup, physical locks, 24/7 yard security, and inventory valuation.",
    details: "Physical takeover of defaulted commercial premises, industrial units, and residential properties with formal inventory audit, round-the-clock security deployment, and valuation coordination.",
    approach: ["Physical Takeover", "Inventory Audit", "24/7 Security Deployment", "Valuation Coordination"]
  },
  {
    title: "Physical Skip Tracing & Asset Hunt",
    category: "Investigation",
    link: "/services/investigation/skip-tracing",
    thumbnail: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=900&q=85&auto=format&fit=crop",
    description: "On-field intelligence tracing for hidden assets, secondary properties, and unlinked accounts.",
    details: "Field investigation squads tracing absconded borrowers, hidden commercial assets, unencumbered properties, and secondary income sources through local field networks.",
    approach: ["Field Investigation Squads", "Hidden Asset Tracing", "Unencumbered Property Search", "Local Field Networks"]
  },
  {
    title: "Public Auction Publication & Execution",
    category: "Asset Liquidation",
    link: "/services/asset-recovery/commercial",
    thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=85&auto=format&fit=crop",
    description: "End-to-end e-auction publication, buyer discovery, and court auction coordination.",
    details: "Managing public auction notices under SARFAESI rules, newspaper ad placements, pan-India e-auction portal listing, bidder verification, and final sale certificate coordination.",
    approach: ["Auction Notice Publication", "E-Auction Portal Listing", "Bidder Verification", "Sale Certificate Coordination"]
  },
  {
    title: "Document Verification & Title Search",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop",
    description: "Legal encumbrance search, sub-registrar document verification, and collateral audit.",
    details: "Deep title search at Sub-Registrar Offices (SRO), EC verification, patta/chitta document audit, and legal clearance reports for mortgage enforcement.",
    approach: ["Sub-Registrar Title Search", "EC Verification", "Patta/Chitta Audit", "Legal Clearance Reports"]
  },

  // ── ROW 6: Enterprise Partnerships & ARC Workout (4 Cards) ──
  {
    title: "Dedicated IIBF DRA Workforce Deployment",
    category: "Governance",
    link: "/services/operational/field-operations",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85&auto=format&fit=crop",
    description: "Exclusive deployment of IIBF certified Direct Recovery Agents dedicated per institutional partner.",
    details: "Deputing institution-dedicated DRA officers trained in RBI conduct codes, police verification cleared, equipped with GPS field logging devices and real-time MIS apps.",
    approach: ["Institution-Dedicated DRAs", "Police Verification Cleared", "GPS Field Logging", "Real-Time MIS"]
  },
  {
    title: "ARC Stressed Asset Assignment Workout",
    category: "NPA Portfolios",
    link: "/services/collections/banking",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop",
    description: "Turnkey recovery management for Asset Reconstruction Companies (ARCs).",
    details: "End-to-end resolution of assigned corporate and retail NPA pools transferred to ARCs, driving compromise settlements, legal enforcement, and asset monetization.",
    approach: ["Compromise Settlements", "Legal Enforcement", "Asset Monetization", "NPA Pool Resolution"]
  },
  {
    title: "Turnkey Portfolio Management & MIS",
    category: "Financial Recovery",
    link: "/services/collections/commercial",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop",
    description: "Complete book takeover with scheduled daily, weekly, and monthly institutional reporting.",
    details: "Full portfolio custody management with custom API integration, daily collection reconciliation, automated MIS packs, and single-point accountability.",
    approach: ["Portfolio Custody", "Daily Reconciliation", "Automated MIS Packs", "Single-Point Accountability"]
  },
  {
    title: "Litigation & Magistrate Order Support",
    category: "Legal Recovery",
    link: "/services/legal-recovery/sarfaesi",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85&auto=format&fit=crop",
    description: "District Magistrate (DM/CMM) order assistance, police protection, and court receiver coordination.",
    details: "Filing and tracking Section 14 applications before District Magistrates / CMM, securing police assistance orders, and coordinating peaceful possession execution.",
    approach: ["Section 14 Filing", "Police Assistance Orders", "DM/CMM Tracking", "Peaceful Possession"]
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
      {/* ═══════════ 1 · HERO PARALLAX SHOWCASE ═══════════ */}
      <HeroParallax products={recoveryProducts} />


      {/* ═══════════ 3 · SCROLL-DRIVEN SERVICE STORY ═══════════ */}
      <ServiceStorySection />

      {/* ═══════════ 4 · RECOVERY WORKFLOW (BENTO GRID) ═══════════ */}
      <BentoWorkflowSection />

      {/* ═══════════ 5 · OPERATING MANIFESTO ═══════════ */}
      <BrandManifestoSection lines={[
        'Every portfolio is managed with institutional discipline.',
        'Every field operation is documented, audited, and reported.',
        'Every service we offer is backed by 25 years of proven recovery expertise.',
      ]} />

      {/* ═══════════ 6 · MANDATE CONSULTATION CTA ═══════════ */}
      <section className="relative overflow-hidden bg-white border-t border-slate-100 py-20 sm:py-28">

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
