import { Award, Briefcase, Building2, Car, CreditCard, FileText, Gavel, Handshake, Landmark, MonitorSmartphone, Percent, Repeat, Scale, ShieldCheck, ShieldAlert, Smartphone, Sprout, Target, TrendingUp, UserCheck } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services-detailed' },
  { label: 'Industries', href: '#industries' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Resources', href: '#resources' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' }
];

export const megaMenu = {
  about: [
    { title: 'Company Overview', href: '#about', description: 'Two decades of recovery and risk management execution.' },
    { title: 'Our Journey Since 2000', href: '#about', description: 'Building trusted recovery infrastructure for financial institutions.' },
    { title: 'Leadership Team', href: '#about', description: 'Operational leadership across recovery, verification and legal coordination.' },
    { title: 'Why SM Associates', href: '#why', description: 'Professional integrity and client-first approach.' },
    { title: 'Vision & Mission', href: '#about', description: 'Building trusted recovery infrastructure for financial institutions.' }
  ],
  services: [
    { title: 'Pre Disbursal Services', href: '#services-detailed', description: 'CPV, CPA, Telephone Verification, Seeding, skip tracing.' },
    { title: 'Post Disbursal Services', href: '#services-detailed', description: 'Field collections, payment pickup, recovery follow-up.' },
    { title: 'Fraud Control Services', href: '#services-detailed', description: 'Investigation-led fraud prevention and risk intelligence.' },
    { title: 'SARFAESI Services', href: '#services-detailed', description: 'Enforcement, possession and legal recovery coordination.' },
    { title: 'Legal Services', href: '#services-detailed', description: 'Court, advocate and documentation coordination.' },
    { title: 'Field Collections', href: '#services-detailed', description: 'Disciplined field operations across geographies.' },
    { title: 'Yard Management Services', href: '#services-detailed', description: 'Authorized yard services for asset custody.' },
    { title: 'Manpower Solutions', href: '#services-detailed', description: 'Trained manpower for recovery operations.' }
  ],
  industries: [
    { title: 'Banking', href: '#industries', description: 'Recovery and collections for banking portfolios.' },
    { title: 'NBFC', href: '#industries', description: 'Scalable operations for high-volume lending portfolios.' },
    { title: 'Housing Finance', href: '#industries', description: 'Mortgage and housing loan recovery support.' },
    { title: 'Asset Reconstruction Companies', href: '#industries', description: 'Stress asset and enforcement execution support.' },
    { title: 'Insurance', href: '#industries', description: 'Claims investigation and recovery support.' },
    { title: 'FinTech', href: '#industries', description: 'Digital lender recovery and verification workflows.' }
  ],
  capabilities: [
    { title: 'Pan India Operations', href: '#capabilities', description: 'District-level recovery and collections coverage.' },
    { title: 'Risk Management', href: '#recovery-os', description: 'Fraud control, verification and portfolio risk support.' },
    { title: 'Recovery Operations', href: '#capabilities', description: 'Portfolio-led recovery strategies for measurable outcomes.' },
    { title: 'Legal Expertise', href: '#capabilities', description: 'SARFAESI, legal and enforcement coordination.' },
    { title: 'Field Investigation', href: '#recovery-os', description: 'Professional investigation and skip tracing.' },
    { title: 'Technology Enabled Tracking', href: '#recovery-os', description: 'Digital monitoring and field operations.' },
    { title: 'Workforce Strength', href: '#capabilities', description: '300+ trained professionals across operations.' }
  ],
  resources: [
    { title: 'Case Studies', href: '#case-studies', description: 'Anonymized recovery execution examples.' },
    { title: 'Success Stories', href: '#testimonials', description: 'Client success stories and testimonials.' },
    { title: 'Industry Insights', href: '#resources', description: 'Operational insights for recovery leaders.' },
    { title: 'Regulatory Updates', href: '#resources', description: 'Latest RBI guidelines and compliance updates.' },
    { title: 'Download Brochures', href: '#contact', description: 'Company profile and service brochures.' },
    { title: 'FAQ', href: '#contact', description: 'Frequently asked questions.' }
  ]
};

export const servicesMenu = [
  { title: 'Recovery Services', description: 'Portfolio-led recovery strategies for measurable collections.', benefits: ['Account-level recovery planning', 'Risk bucket segmentation', 'Performance tracking'] },
  { title: 'SARFAESI Services', description: 'Enforcement, possession and legal recovery coordination.', benefits: ['Sec 13(2) & 13(4) execution', 'Asset possession support', 'Legal documentation'] },
  { title: 'Field Collections', description: 'Disciplined field operations across geographies.', benefits: ['50 accounts/executive/month', 'Daily reporting system', 'Escalation protocols'] },
  { title: 'Asset Repossession', description: 'Secured asset recovery with documented workflows.', benefits: ['Cars, tractors, excavators', 'Notarized inventory reports', 'Legal compliance'] },
  { title: 'Auction Services', description: 'Auction coordination and bidder engagement.', benefits: ['Fair valuation', 'Transparent process', 'Bidders network'] },
  { title: 'Legal Services', description: 'Court, advocate and documentation coordination.', benefits: ['DRT case follow-up', 'Warrant execution', 'Police coordination'] },
  { title: 'Verification Services', description: 'Pre and post-disbursal risk validation.', benefits: ['CPV & CPA checks', 'Telephone verification', 'Skip tracing'] },
  { title: 'Fraud Control', description: 'Investigation-led fraud prevention and risk intelligence.', benefits: ['ITR verification', 'Title deed checks', 'Warrant execution'] },
  { title: 'Call Centre Services', description: 'Structured communication workflows for recovery operations.', benefits: ['30-90 day accounts', 'Professional follow-up', 'Documented calls'] },
  { title: 'Yard Management Services', description: 'Secure asset custody and management.', benefits: ['Authorized yards', 'Insurance coverage', 'Regular audits'] },
  { title: 'Manpower Solutions', description: 'Trained manpower for recovery operations.', benefits: ['Experienced professionals', 'Background verified', 'Skilled teams'] }
];

export const trustLogos = [
  { name: 'SBI', fullName: 'State Bank of India' },
  { name: 'Indian Bank', fullName: 'Indian Bank' },
  { name: 'Canara Bank', fullName: 'Canara Bank' },
  { name: 'Union Bank', fullName: 'Union Bank of India' },
  { name: 'Punjab National Bank', fullName: 'Punjab National Bank' },
  { name: 'Bank of Baroda', fullName: 'Bank of Baroda' },
  { name: 'UCO Bank', fullName: 'UCO Bank' },
  { name: 'LIC Housing', fullName: 'LIC Housing Finance' },
  { name: 'Repco Home', fullName: 'Repco Home Finance' },
  { name: 'ICICI Bank', fullName: 'ICICI Bank' },
  { name: 'HDFC Bank', fullName: 'HDFC Bank' },
  { name: 'Citibank', fullName: 'Citibank' }
];

export const whyCards = [
  {
    title: 'Professional Integrity',
    description: 'Operating with highest ethical standards since 2000.',
    icon: UserCheck
  },
  {
    title: 'Genuine Client Approach',
    description: 'Client-first strategy with transparent operations.',
    icon: Handshake
  },
  {
    title: 'Excellence in Execution',
    description: 'Consistent delivery across recovery and verification workflows.',
    icon: Award
  },
  {
    title: 'Premier Market Position',
    description: 'Trusted by leading banks and NBFCs for recovery operations.',
    icon: Sprout
  }
];

export const products = [
  {
    title: 'Corporate / SME Loans',
    icon: Briefcase
  },
  {
    title: 'Housing Loans',
    icon: Landmark
  },
  {
    title: 'Credit Cards',
    icon: CreditCard
  },
  {
    title: 'Auto Loans',
    icon: Car
  },
  {
    title: 'Consumer Durables',
    icon: MonitorSmartphone
  },
  {
    title: 'Personal Loans',
    icon: Handshake
  },
  {
    title: 'Mortgage Loans',
    icon: FileText
  },
  {
    title: 'Agricultural Loans',
    icon: Sprout
  }
];

export const capabilityTabs = [
  {
    title: 'Recovery OS',
    description: 'Integrated recovery operating ecosystem for portfolio management.',
    points: ['Portfolio-level strategy', 'Risk segmentation', 'Performance tracking', 'Compliance control']
  },
  {
    title: 'Collections Workflow',
    description: 'Lifecycle workflow from verification to resolution.',
    points: ['Field collections', 'Call centre support', 'Escalation control', 'Daily reporting']
  },
  {
    title: 'Risk Operations',
    description: 'Fraud control, verification and portfolio risk support.',
    points: ['Pre-disbursal checks', 'Post-disbursal verification', 'Fraud investigation', 'Risk reporting']
  },
  {
    title: 'Legal Coordination',
    description: 'SARFAESI, legal and enforcement coordination.',
    points: ['Court coordination', 'Advocate support', 'Documentation', 'Warrant execution']
  }
];

export const resourceCards = [
  {
    title: 'Case Studies',
    description: 'Anonymized recovery execution examples showing our methodology.',
    icon: 'FileText',
    href: '#case-studies'
  },
  {
    title: 'Success Stories',
    description: 'Client testimonials and outcome highlights.',
    icon: 'ShieldCheck',
    href: '#testimonials'
  },
  {
    title: 'Industry Insights',
    description: 'Operational insights for recovery leaders.',
    icon: 'TrendingUp',
    href: '#recovery-os'
  },
  {
    title: 'Regulatory Updates',
    description: 'Latest RBI guidelines and compliance updates.',
    icon: 'FileText',
    href: '#contact'
  },
  {
    title: 'Download Brochures',
    description: 'Company profile and service brochures.',
    icon: 'Download',
    href: '#contact'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions about our services.',
    icon: 'ClipboardCheck',
    href: '#contact'
  }
];

export const careerPositions = [
  {
    title: 'Recovery Officer',
    department: 'Field Operations',
    location: 'Chennai',
    type: 'Full-time'
  },
  {
    title: 'Legal Coordinator',
    department: 'Legal',
    location: 'Chennai',
    type: 'Full-time'
  },
  {
    title: 'Verification Executive',
    department: 'Verification',
    location: 'Tamil Nadu',
    type: 'Full-time'
  },
  {
    title: 'Call Centre Agent',
    department: 'Collections',
    location: 'Chennai',
    type: 'Full-time'
  }
];

export const kpis = [
  { value: 24, suffix: '+', label: 'Years of Recovery Excellence', description: 'Operating across recovery, collections and financial risk services.', size: 'large' },
  { value: 1200, suffix: '+', label: 'Recovery Professionals', description: 'Field, verification, operations and coordination professionals.', size: 'tall' },
  { label: 'Tamil Nadu Wide', description: 'District-level recovery and collections coverage.', size: 'wide' },
  { value: 20, suffix: '+', label: 'Major Banks & NBFC Partners', description: 'Trusted partners across banking and NBFC sectors.', size: 'standard' },
  { value: 5, suffix: '', label: 'Core Service Verticals', description: 'Recovery, Collections, Verification, Legal, Fraud Control.', size: 'standard' }
];

export const recoveryModules = [
  {
    title: 'Verification',
    description: 'Pre and post-disbursal validation of borrower, address, business, asset and risk signals.',
    icon: 'SearchCheck',
    signal: 'Risk Validation',
    outcome: 'Lower early-stage portfolio leakage'
  },
  {
    title: 'Collections',
    description: 'Field, call centre and digital collection workflows aligned through escalation protocols.',
    icon: 'MapPin',
    signal: 'Action Orchestration',
    outcome: 'Faster account-level follow-up'
  },
  {
    title: 'Recovery',
    description: 'Portfolio recovery strategies designed around borrower behaviour, risk buckets and recovery probability.',
    icon: 'TrendingUp',
    signal: 'Outcome Intelligence',
    outcome: 'Improved recovery visibility'
  },
  {
    title: 'Fraud Control',
    description: 'Investigation support, anomaly detection and field intelligence for suspicious lending patterns.',
    icon: 'ShieldAlert',
    signal: 'Risk Intelligence',
    outcome: 'Reduced fraud leakage'
  },
  {
    title: 'SARFAESI',
    description: 'Enforcement support, possession coordination, documentation and legal recovery alignment.',
    icon: 'FileText',
    signal: 'Enforcement Readiness',
    outcome: 'Structured secured asset recovery'
  },
  {
    title: 'Legal Coordination',
    description: 'Coordination with advocates, courts, legal teams and institutional stakeholders.',
    icon: 'Scale',
    signal: 'Legal Alignment',
    outcome: 'Better litigation tracking'
  },
  {
    title: 'Asset Recovery',
    description: 'Repossession, possession, asset readiness and recovery handover support.',
    icon: 'Car',
    signal: 'Asset Control',
    outcome: 'Controlled secured asset movement'
  },
  {
    title: 'Auction Services',
    description: 'Auction coordination, bidder engagement, documentation and post-auction follow-up.',
    icon: 'Gavel',
    signal: 'Monetization Support',
    outcome: 'Transparent auction execution'
  }
];

export const industries = [
  {
    title: 'Banking',
    description: 'Recovery, collections, verification and legal coordination for banking portfolios.',
    icon: 'Building2',
    cta: 'Banking Solutions'
  },
  {
    title: 'NBFC',
    description: 'Scalable recovery operations for high-volume retail and SME lending portfolios.',
    icon: 'Percent',
    cta: 'NBFC Solutions'
  },
  {
    title: 'Housing Finance',
    description: 'Specialized recovery and repossession support for housing and mortgage portfolios.',
    icon: 'Landmark',
    cta: 'HFC Solutions'
  },
  {
    title: 'Fintech',
    description: 'Fast, compliant and data-driven recovery operations for digital lenders.',
    icon: 'Smartphone',
    cta: 'Fintech Solutions'
  },
  {
    title: 'ARC',
    description: 'Operational support for stressed assets, enforcement actions and recovery execution.',
    icon: 'Scale',
    cta: 'ARC Solutions'
  },
  {
    title: 'Corporate Lending',
    description: 'Structured recovery support for corporate exposures and secured lending assets.',
    icon: 'Briefcase',
    cta: 'Corporate Solutions'
  }
];

export const capabilities = [
  {
    title: 'Recovery Services',
    description: 'Portfolio-led recovery strategies designed for measurable collections and compliant execution.',
    icon: 'Repeat',
    featured: true
  },
  {
    title: 'SARFAESI Services',
    description: 'End-to-end SARFAESI enforcement support, asset takeover coordination and legal recovery alignment.',
    icon: 'FileText',
    featured: true
  },
  {
    title: 'Field Collections',
    description: 'Disciplined field collection operations across portfolios, geographies and product categories.',
    icon: 'MapPin'
  },
  {
    title: 'Verification',
    description: 'Pre-disbursal and post-disbursal verification services to support lending decisions.',
    icon: 'SearchCheck'
  },
  {
    title: 'Fraud Control',
    description: 'Risk intelligence, investigation support and fraud prevention workflows for lenders.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Legal Coordination',
    description: 'Coordination with legal teams, courts, advocates and documentation teams.',
    icon: 'Scale'
  },
  {
    title: 'Auction Services',
    description: 'Auction coordination, documentation support, bidder engagement and recovery assistance.',
    icon: 'Gavel'
  },
  {
    title: 'Asset Repossession',
    description: 'Professional repossession support for secured assets with documented workflows.',
    icon: 'Car'
  }
];

export const processSteps = [
  { step: '01', title: 'Verification', description: 'Validate borrower, asset, business and address information to reduce credit and fraud risk.' },
  { step: '02', title: 'Collections', description: 'Execute structured collection workflows through trained field teams and escalation protocols.' },
  { step: '03', title: 'Recovery', description: 'Drive account-level recovery through negotiation, monitoring and performance tracking.' },
  { step: '04', title: 'Asset Management', description: 'Support repossession, possession, documentation and asset readiness workflows.' },
  { step: '05', title: 'Legal Coordination', description: 'Coordinate with legal stakeholders, courts, advocates and enforcement teams.' },
  { step: '06', title: 'Resolution', description: 'Deliver recovery closure, documentation support and outcome reporting.' }
];

export const coverageNodes = [
  'Chennai',
  'Coimbatore',
  'Madurai',
  'Trichy',
  'Salem',
  'Tirunelveli',
  'Vellore',
  'Erode'
];

export const coverageStats = [
  { value: '1200+', label: 'Recovery Professionals', description: 'Field and operations strength across Tamil Nadu.' },
  { value: 'Pan Tamil Nadu', label: 'Operational Reach', description: 'District-level recovery, collection and verification coverage.' },
  { value: 'Multi-product', label: 'Portfolio Coverage', description: 'Secured, unsecured, retail, SME and specialized lending assets.' }
];

export const caseStudies = [
  {
    title: 'Banking Portfolio Recovery Program',
    category: 'Banking',
    challenge: 'A large overdue portfolio required structured recovery coordination across field teams, legal partners and borrower communication channels.',
    approach: 'SM Associates deployed a recovery operating model with verification checks, collection sequencing, escalation control and documentation discipline.',
    outcome: 'Improved recovery visibility, faster escalation and stronger coordination between field operations and legal stakeholders.'
  },
  {
    title: 'SARFAESI Enforcement Coordination',
    category: 'SARFAESI',
    challenge: 'Secured asset recovery required careful coordination between possession support, documentation, legal teams and institutional stakeholders.',
    approach: 'The team created a controlled workflow for asset readiness, legal alignment, stakeholder updates and recovery follow-through.',
    outcome: 'Structured enforcement support with improved documentation control and operational transparency.'
  },
  {
    title: 'Verification and Fraud Control Program',
    category: 'Verification',
    challenge: 'A lender needed stronger pre-disbursal and post-disbursal validation to reduce misrepresentation and portfolio leakage.',
    approach: 'SM Associates supported field verification, document validation, address checks, business authenticity checks and risk signal reporting.',
    outcome: 'Better lending decision support and stronger visibility into borrower and asset-level risk.'
  }
];

export const testimonials = [
  {
    quote: 'SM Associates has been a reliable partner for recovery operations, bringing field discipline, transparency and consistent follow-through across portfolios.',
    name: 'Risk Operations Lead',
    role: 'Head of Recovery Operations',
    institution: 'Financial Institution'
  },
  {
    quote: 'Their team understands the sensitivity of collections and recovery work. Professional execution and strong coordination have made them a trusted partner.',
    name: 'Collections Head',
    role: 'Collections Leadership',
    institution: 'NBFC'
  },
  {
    quote: 'For SARFAESI and legal coordination requirements, SM Associates has supported us with structured workflows and dependable execution.',
    name: 'Asset Recovery Manager',
    role: 'Asset Recovery Leadership',
    institution: 'Asset Reconstruction Company'
  }
];
