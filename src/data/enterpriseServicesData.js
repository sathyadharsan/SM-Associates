/**
 * Enterprise Services Data
 * Used by EnterpriseServicesSection — each card definition drives the
 * collapsed + expanded states of the horizontal accordion.
 */

export const enterpriseServices = [
  {
    id: 'enterprise-loan-recovery',
    number: '01',
    title: 'Enterprise Loan Recovery',
    description:
      'Recovering retail and business loan portfolios through a structured combination of digital engagement, field operations, legal coordination and compliance-driven recovery strategies.',
    image: '/services/story-images/enterprise-loan-recovery.png',
    capabilities: [
      'Personal Loans',
      'Auto Loans',
      'Education Loans',
      'Gold Loans',
      'Credit Cards',
      'Business Loans',
      'MSME Loans',
    ],
    approach: ['Digital Recovery', 'Field Visits', 'Legal Coordination', 'Performance Reporting'],
    cta: 'Talk to an Expert',
  },
  {
    id: 'enterprise-portfolio-recovery',
    number: '02',
    title: 'Enterprise Portfolio Recovery',
    description:
      'Managing large-scale recovery portfolios across regulated financial institutions with measurable performance and transparent reporting.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'Banking Portfolios',
      'NBFC Portfolios',
      'Housing Finance',
      'Fintech',
      'ARC Portfolios',
      'Bulk NPA Books',
      'Corporate Accounts',
    ],
    approach: ['Portfolio Strategy', 'Analytics', 'Recovery Operations', 'MIS Reporting'],
    cta: 'Explore Portfolio Recovery',
  },
  {
    id: 'secured-asset-recovery',
    number: '03',
    title: 'Secured Asset Recovery',
    description:
      'Recovering secured assets under statutory frameworks through compliant execution and specialized asset management.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'Residential Property',
      'Commercial Property',
      'Industrial Property',
      'Mortgaged Assets',
      'SARFAESI Assets',
      'Auction Support',
    ],
    approach: ['Legal Execution', 'Possession', 'Auction', 'Compliance'],
    cta: 'Learn More',
  },
  {
    id: 'vehicle-equipment-recovery',
    number: '04',
    title: 'Vehicle & Equipment Recovery',
    description:
      'Professional repossession and recovery services for vehicles and industrial equipment with nationwide operational coverage.',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'Cars',
      'Commercial Vehicles',
      'Trucks',
      'Earth Movers',
      'Construction Equipment',
      'Agricultural Equipment',
    ],
    approach: ['Field Recovery', 'Tracking', 'Documentation', 'Logistics'],
    cta: 'View Recovery Services',
  },
  {
    id: 'enterprise-asset-recovery',
    number: '05',
    title: 'Enterprise Asset Recovery',
    description:
      'Recovering enterprise hardware assets across retail, banking and corporate locations with full inventory and compliance reporting.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'POS Machines',
      'Routers',
      'Networking Devices',
      'Servers',
      'Office Equipment',
      'Enterprise Hardware',
    ],
    approach: ['Inventory', 'Recovery', 'Verification', 'Reporting'],
    cta: 'Explore Assets',
  },
  {
    id: 'investigation-verification',
    number: '06',
    title: 'Investigation & Verification',
    description:
      'Verification and intelligence services supporting compliant lending and recovery operations through field and digital channels.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'CPV',
      'Residence Verification',
      'Business Verification',
      'Asset Verification',
      'Fraud Investigation',
      'Borrower Tracing',
    ],
    approach: ['Field Intelligence', 'Digital Verification', 'Reporting', 'Compliance'],
    cta: 'Know More',
  },
  {
    id: 'legal-compliance',
    number: '07',
    title: 'Legal & Compliance',
    description:
      'Supporting lenders with end-to-end legal coordination and regulatory compliance throughout the recovery lifecycle.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85&auto=format&fit=crop',
    capabilities: [
      'SARFAESI',
      'Court Liaison',
      'Legal Notices',
      'Cheque Bounce',
      'Documentation',
      'Compliance',
    ],
    approach: ['Legal Workflow', 'Documentation', 'Court Coordination', 'Risk Control'],
    cta: 'Legal Support',
  },
];

// A ninth "AI Recovery Operations" chapter used to sit here, describing AI
// voice agents, auto dialing and predictive recovery as an already-live
// service ("Experience AI Recovery"). Removed: those exact capabilities are
// the same ones data/servicesLandingData.js's `futureCapabilities` labels as
// an explicit, not-yet-deployed roadmap — the two directly contradicted each
// other on the same page. If AI capability content belongs here again, it
// needs to describe what's actually live today, not restate the roadmap.
