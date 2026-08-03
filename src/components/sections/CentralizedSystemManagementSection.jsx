import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import RichIcon from './shared/RichIcon';

export default function CentralizedSystemManagementSection({ content }) {
  const title = content?.title || 'Litigation & Recovery Management';
  const eyebrow = content?.eyebrow || 'Centralized Operations';

  // Smart Service Type Detector
  const detectServiceCategory = () => {
    const t = (title + ' ' + eyebrow + ' ' + (content?.id || '')).toLowerCase();
    
    if (t.includes('asset') || t.includes('repossession') || t.includes('auction') || t.includes('custodian') || t.includes('valuation') || t.includes('vehicle')) {
      return 'asset';
    }
    if (t.includes('collect') || t.includes('recovery') || t.includes('bucket') || t.includes('pdc') || t.includes('npa') || t.includes('debt')) {
      return 'collections';
    }
    if (t.includes('trace') || t.includes('skip') || t.includes('investig') || t.includes('fraud') || t.includes('due diligence') || t.includes('address')) {
      return 'investigation';
    }
    if (t.includes('verif') || t.includes('cpv') || t.includes('residence') || t.includes('office') || t.includes('business') || t.includes('document')) {
      return 'verification';
    }
    if (t.includes('legal') || t.includes('notice') || t.includes('cheque') || t.includes('sarfaesi') || t.includes('litigation') || t.includes('possession') || t.includes('court')) {
      return 'legal';
    }
    return 'operational';
  };

  const category = detectServiceCategory();

  // Dynamic Service-Based Configurations
  const configs = {
    legal: {
      eyebrow: 'LEGAL & LITIGATION MANAGEMENT',
      heading: 'Centralized Legal Case Management',
      bullets: [
        'Gain a 360° view of legal proceedings, from Section 138 notice service to court complaint filings.',
        'Manage all matter types including SARFAESI, Arbitration, IBC, RDB & FI, Magistrate, and DRT cases.',
        'e-Court & DRT portal integration for real-time case tracking and instant advocate status updates.'
      ],
      diagramHeader: 'Comprehensive Litigation Management System',
      hierarchyTitle: 'Legal Team',
      leftNodes: [
        { line1: 'Central Legal', line2: 'Team', artType: 'legal', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Legal', line2: 'Teams', artType: 'odr', badge: 'REG', color: '#059669' },
        { line1: 'Local Legal', line2: 'Teams', artType: 'compliance', badge: 'LOC', color: '#7c3aed' },
        { line1: 'Certified', line2: 'Advocates', artType: 'mission', isGold: true, color: '#f59e0b' }
      ],
      rightNodes: [
        { title: 'Loan Management System', desc: 'Case docs & MIS', artType: 'bank', color: '#0072bc' },
        { title: 'Court Website Portal', desc: 'e-Court Portal', artType: 'legal', color: '#f43f5e' },
        { title: 'Bank Legal Desk', desc: 'Collections Desk', artType: 'servicing', color: '#0284c7' }
      ],
      callouts: {
        c1: 'Approvals',
        g1: 'Real-time MIS',
        c2: 'Case allocation',
        g2: 'Escalation',
        g3: 'Reminders',
        c3: 'Case updates',
        g4: 'Reminders & Logs',
        g5: 'Case docs & MIS',
        c4: 'Loans data',
        g6: 'Live updates',
        c5: 'Newly filed cases',
        c6: 'Approvals',
        g7: 'Real-time case reports'
      }
    },

    asset: {
      eyebrow: 'ASSET RECOVERY & REPOSSESSION',
      heading: 'Centralized Asset Repossession Management',
      bullets: [
        'Gain real-time tracking of secured assets, from physical repossession to statutory e-auction sale.',
        'Manage all asset classes including commercial vehicles, industrial machinery, real estate, and equipment.',
        'Geotagged yard management, valuation reports, and RBI-compliant inventory audit trails.'
      ],
      diagramHeader: 'Comprehensive Asset Recovery & Repossession Architecture',
      hierarchyTitle: 'Recovery Hierarchy',
      leftNodes: [
        { line1: 'Central Repossession', line2: 'Command', artType: 'workflow', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Field', line2: 'Marshals', artType: 'field', badge: 'FIELD', color: '#059669' },
        { line1: 'Holding Yard', line2: 'Custodians', artType: 'asset', badge: 'YARD', color: '#d97706' },
        { line1: 'Asset Recovery', line2: 'Officers', artType: 'mission', isGold: true, color: '#ea580c' }
      ],
      rightNodes: [
        { title: 'Bank Asset Master', desc: 'LMS Ingestion', artType: 'bank', color: '#0072bc' },
        { title: 'E-Auction Portals', desc: 'Statutory Sale', artType: 'legal', color: '#f43f5e' },
        { title: 'Bidding & Bank Desk', desc: 'Buyer Portal', artType: 'analytics', color: '#7c3aed' }
      ],
      callouts: {
        c1: 'Seizure Orders',
        g1: 'Inventory MIS',
        c2: 'Yard Allocation',
        g2: 'Field Escalation',
        g3: 'Valuation Alerts',
        c3: 'Condition Log',
        g4: 'Seizure Orders',
        g5: 'Asset Valuation MIS',
        c4: 'Asset Master',
        g6: 'Bidding Updates',
        c5: 'New Auction Listings',
        c6: 'Sale Approvals',
        g7: 'Repossession Reports'
      }
    },

    collections: {
      eyebrow: 'DEBT RECOVERY & FIELD OPERATIONS',
      heading: 'Centralized Debt Recovery & Bucket Operations',
      bullets: [
        'Track delinquency buckets (SMA-0 to DPD 90+) with geotagged field collection trails.',
        'Strict DRA-certified officer deployment adhering to RBI Fair Practice Code and ethical recovery standards.',
        'Real-time cash reconciliation, digital receipting, and instant payment gateway settlement.'
      ],
      diagramHeader: 'Comprehensive Debt Recovery & Field Operations Architecture',
      hierarchyTitle: 'Field Operations',
      leftNodes: [
        { line1: 'Central Debt', line2: 'Operations', artType: 'analytics', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Bucket', line2: 'Managers', artType: 'workflow', badge: 'REG', color: '#7c3aed' },
        { line1: 'Local Collection', line2: 'Squads', artType: 'field', badge: 'LOC', color: '#059669' },
        { line1: 'DRA Field', line2: 'Officers', artType: 'compliance', isGold: true, color: '#d97706' }
      ],
      rightNodes: [
        { title: 'Core Banking System', desc: 'Loan Portfolio', artType: 'bank', color: '#0072bc' },
        { title: 'Tele-Dialer Gateway', desc: 'Call Center', artType: 'dialer', color: '#0284c7' },
        { title: 'Bank Recovery Desk', desc: 'Cash Reconciliation', artType: 'comm', color: '#10b981' }
      ],
      callouts: {
        c1: 'Bucket Strategy',
        g1: 'Collection Feeds',
        c2: 'Field Dispatch',
        g2: 'Payer Escalation',
        g3: 'Payment Alerts',
        c3: 'Visit Updates',
        g4: 'Receipt Orders',
        g5: 'Reconciliation MIS',
        c4: 'Borrower Data',
        g6: 'Live Dialer Feeds',
        c5: 'Dialer Allocation',
        c6: 'Settlement Approvals',
        g7: 'Cash Receipts Sync'
      }
    },

    investigation: {
      eyebrow: 'RISK INVESTIGATION & FORENSICS',
      heading: 'Centralized Intelligence & Borrower Tracing System',
      bullets: [
        'Locate untraceable borrowers through multi-source field tracing and digital footprint forensics.',
        'Execute pre-litigation asset discovery, workplace verification, and hidden liability detection.',
        'Geotagged field intelligence reports with photo evidence and verifiable audit trails.'
      ],
      diagramHeader: 'Comprehensive Risk Intelligence & Borrower Tracing Architecture',
      hierarchyTitle: 'Intelligence Hierarchy',
      leftNodes: [
        { line1: 'Chief Intelligence', line2: 'Desk', artType: 'trace', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Forensics', line2: 'Units', artType: 'analytics', badge: 'INTEL', color: '#7c3aed' },
        { line1: 'Local Field', line2: 'Investigators', artType: 'field', badge: 'FIELD', color: '#0284c7' },
        { line1: 'Ground Field', line2: 'Investigators', artType: 'compliance', isGold: true, color: '#f59e0b' }
      ],
      rightNodes: [
        { title: 'Identity Databases', desc: 'Multi-Source API', artType: 'trace', color: '#0284c7' },
        { title: 'GPS Mobile App', desc: 'Field Audit', artType: 'comm', color: '#10b981' },
        { title: 'Credit Audit Desk', desc: 'Bank Underwriting', artType: 'bank', color: '#0072bc' }
      ],
      callouts: {
        c1: 'Case Allocation',
        g1: 'Intelligence MIS',
        c2: 'Field Dispatch',
        g2: 'Fraud Escalation',
        g3: 'Trace Prompts',
        c3: 'Location Found',
        g4: 'Investigation Orders',
        g5: 'Asset Discovery MIS',
        c4: 'Profile Records',
        g6: 'Live GPS Feeds',
        c5: 'Verification Jobs',
        c6: 'Risk Sign-offs',
        g7: 'Trace Dossier Reports'
      }
    },

    verification: {
      eyebrow: 'PRE-DISBURSAL VERIFICATION',
      heading: 'Centralized Pre-Disbursal Verification Engine',
      bullets: [
        'Accelerate loan disbursal with instant TAT residence, office, and business CPV audits.',
        'Geotagged physical visits with live photo evidence, neighbor verification, and workplace audits.',
        'Automated risk scoring to eliminate fraudulent documentation before loan approval.'
      ],
      diagramHeader: 'Comprehensive Pre-Disbursal Verification Architecture',
      hierarchyTitle: 'Verification Flow',
      leftNodes: [
        { line1: 'Verification Command', line2: 'Desk', artType: 'compliance', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Hub', line2: 'Managers', artType: 'workflow', badge: 'REG', color: '#059669' },
        { line1: 'Local Verification', line2: 'Squads', artType: 'field', badge: 'LOC', color: '#0284c7' },
        { line1: 'CPV Verification', line2: 'Agents', artType: 'mission', isGold: true, color: '#10b981' }
      ],
      rightNodes: [
        { title: 'Loan Origination (LOS)', desc: 'Bank Application', artType: 'bank', color: '#0072bc' },
        { title: 'GPS Audit Mobile App', desc: 'Geotagged Audit', artType: 'comm', color: '#059669' },
        { title: 'Underwriting Desk', desc: 'Credit Approval', artType: 'analytics', color: '#7c3aed' }
      ],
      callouts: {
        c1: 'LOS Job Dispatch',
        g1: 'Verification MIS',
        c2: 'Agent Allocation',
        g2: 'Risk Escalation',
        g3: 'Address Check Alert',
        c3: 'Field Verification',
        g4: 'Audit Orders',
        g5: 'CPV Dossiers & Proof',
        c4: 'Applicant Master',
        g6: 'Live Geotag Proof',
        c5: 'Verification Jobs',
        c6: 'Disbursal Clearance',
        g7: 'Verification MIS Sync'
      }
    },

    operational: {
      eyebrow: 'OPERATIONAL & STRATEGIC GOVERNANCE',
      heading: 'Centralized Operations & SLA Governance',
      bullets: [
        'Single accountable partner for call center operations, liaising, and facility management.',
        'Dedicated manpower deployment, specialized NPA turnaround strategies, and portfolio governance.',
        'Immutable SLA tracking, RBI compliance governance, and executive bank MIS reporting.'
      ],
      diagramHeader: 'Comprehensive Strategic Operations Architecture',
      hierarchyTitle: 'Operations Stack',
      leftNodes: [
        { line1: 'Strategic Operations', line2: 'Desk', artType: 'workflow', badge: 'HQ', color: '#0072bc' },
        { line1: 'Regional Project', line2: 'Managers', artType: 'analytics', badge: 'REG', color: '#7c3aed' },
        { line1: 'Call Center Squads', line2: 'Operations', artType: 'dialer', badge: 'OPS', color: '#0284c7' },
        { line1: 'Liaison & Field', line2: 'Officers', artType: 'compliance', isGold: true, color: '#059669' }
      ],
      rightNodes: [
        { title: 'Enterprise CRM System', desc: 'Activity Tracker', artType: 'analytics', color: '#0072bc' },
        { title: 'Govt & Regulatory Portals', desc: 'Liaison Filing', artType: 'legal', color: '#f43f5e' },
        { title: 'Bank Taskforce Desk', desc: 'NPA Governance', artType: 'bank', color: '#059669' }
      ],
      callouts: {
        c1: 'Strategy Dispatch',
        g1: 'SLA Dashboards',
        c2: 'Project Allocation',
        g2: 'SLA Escalation',
        g3: 'Action Prompts',
        c3: 'Daily Operations Log',
        g4: 'Liaison Orders',
        g5: 'Governance Dossiers',
        c4: 'Portfolio Data',
        g6: 'Regulatory Approvals',
        c5: 'Liaison Submissions',
        c6: 'Executive Sign-offs',
        g7: 'CRM & SLA Sync'
      }
    }
  };

  const currentConfig = configs[category] || configs.operational;
  const displayHeading = content?.managementHeading || currentConfig.heading;
  const displayBullets = content?.managementFeatures || currentConfig.bullets;
  const displayEyebrow = eyebrow || currentConfig.eyebrow;

  const bulletColors = ['#0072bc', '#059669', '#7c3aed'];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-t border-b border-slate-200/90 relative overflow-hidden font-inter">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Dynamic Eyebrow, Heading & Service Checkmarks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-4">
                <Layers className="w-3.5 h-3.5" />
                {displayEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {displayHeading}
              </h2>
            </div>

            {/* Service-Specific Checkmark List with Multi-Color HSL Accents */}
            <div className="space-y-6">
              {displayBullets.map((text, i) => {
                const bColor = bulletColors[i % bulletColors.length];
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div 
                      className="mt-0.5 flex-none w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: bColor }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs text-slate-600">
                <Sparkles className="w-4 h-4 text-[#0072bc] flex-none" />
                <span>
                  <strong className="text-slate-900">Right-Angled System Architecture: </strong>
                  Cyan L-lines represent data & task allocation; Green L-lines represent real-time status feeds & MIS.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Vector Art Diagram (Seamless Integration - No Outer White Card) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-visible py-2">
              
              {/* Diagram Header Title */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {currentConfig.diagramHeader}
                </h3>
              </div>

              {/* 100% Pure Vector Diagram Canvas (800x520 ViewBox - Clean Geometry) */}
              <div className="w-full relative">
                <svg className="w-full h-auto drop-shadow-xs" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="arrowCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0072bc" />
                    </marker>
                    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#059669" />
                    </marker>

                    {/* Ambient Radial Glow */}
                    <filter id="hubGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0072bc" floodOpacity="0.25" />
                    </filter>

                    <linearGradient id="hubGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0072bc" />
                      <stop offset="100%" stopColor="#005a94" />
                    </linearGradient>
                  </defs>

                  {/* ================= 1. CLEAR RIGHT-ANGLED CONNECTOR LINES ================= */}
                  {/* Left Column Lines (Starts at x = 210, vertical channel at x = 300) */}
                  <path d="M 210 45 H 300 V 230" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
                  <path d="M 345 230 V 85 H 210" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />

                  <path d="M 210 165 H 320 V 245" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
                  <path d="M 345 260 H 210" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />

                  <path d="M 345 295 H 210" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
                  <path d="M 210 315 H 320 V 305" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />

                  <path d="M 355 325 V 435 H 210" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />

                  {/* Right Column Lines (Starts at x = 590, vertical channel at x = 490) */}
                  <path d="M 450 230 V 45 H 590" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
                  <path d="M 590 85 H 475 V 230" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />

                  <path d="M 590 260 H 455" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
                  <path d="M 455 295 H 590" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />

                  <path d="M 590 435 H 475 V 325" stroke="#0072bc" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
                  <path d="M 440 325 V 475 H 590" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />

                  {/* Downward Directional Arrows on Left Hierarchy Stack */}
                  <text x="105" y="116" fill="#cbd5e1" fontSize="16" textAnchor="middle">↓</text>
                  <text x="105" y="236" fill="#cbd5e1" fontSize="16" textAnchor="middle">↓</text>
                  <text x="105" y="356" fill="#cbd5e1" fontSize="16" textAnchor="middle">↓</text>

                  {/* ================= 2. LINE CALLOUT TEXT LABELS (Positioned at x = 255 and x = 535 with zero collision) ================= */}
                  {/* Left Callouts */}
                  <text x="255" y="36" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c1}</text>
                  <text x="255" y="76" fill="#059669" fontSize="9.5" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g1}</text>

                  <text x="255" y="156" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c2}</text>
                  <text x="255" y="252" fill="#059669" fontSize="10" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g2}</text>

                  <text x="255" y="287" fill="#059669" fontSize="10" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g3}</text>
                  <text x="255" y="332" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c3}</text>

                  <text x="255" y="426" fill="#059669" fontSize="9.5" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g4}</text>

                  {/* Right Callouts */}
                  <text x="535" y="36" fill="#059669" fontSize="9.5" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g5}</text>
                  <text x="535" y="76" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c4}</text>

                  <text x="535" y="252" fill="#059669" fontSize="10" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g6}</text>
                  <text x="535" y="287" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c5}</text>

                  <text x="535" y="426" fill="#0072bc" fontSize="10" fontWeight="800" textAnchor="middle">{currentConfig.callouts.c6}</text>
                  <text x="535" y="466" fill="#059669" fontSize="9.5" fontWeight="700" textAnchor="middle">{currentConfig.callouts.g7}</text>

                  {/* ================= 3. LEFT FLOATING ARTWORK NODES (Compact 2-Line Text, Clean Badges) ================= */}
                  <text x="30" y="20" fill="#0f172a" fontSize="13" fontMonospace="true" fontWeight="800" uppercase="true" letterSpacing="1">{currentConfig.hierarchyTitle}</text>

                  {/* Left Node 1 */}
                  <g>
                    <foreignObject x="25" y="25" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.leftNodes[0].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="72" y="40" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.leftNodes[0].line1}</text>
                    <text x="72" y="54" fill="#64748b" fontSize="11" fontWeight="700">{currentConfig.leftNodes[0].line2}</text>
                    <rect x="180" y="32" width="22" height="14" rx="4" fill="#0072bc" />
                    <text x="191" y="43" fill="#ffffff" fontSize="8.5" fontWeight="800" textAnchor="middle">{currentConfig.leftNodes[0].badge}</text>
                  </g>

                  {/* Left Node 2 */}
                  <g>
                    <foreignObject x="25" y="145" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.leftNodes[1].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="72" y="160" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.leftNodes[1].line1}</text>
                    <text x="72" y="174" fill="#64748b" fontSize="11" fontWeight="700">{currentConfig.leftNodes[1].line2}</text>
                    <rect x="172" y="152" width="32" height="14" rx="4" fill="#059669" />
                    <text x="188" y="163" fill="#ffffff" fontSize="8.5" fontWeight="800" textAnchor="middle">{currentConfig.leftNodes[1].badge}</text>
                  </g>

                  {/* Left Node 3 */}
                  <g>
                    <foreignObject x="25" y="265" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.leftNodes[2].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="72" y="280" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.leftNodes[2].line1}</text>
                    <text x="72" y="294" fill="#64748b" fontSize="11" fontWeight="700">{currentConfig.leftNodes[2].line2}</text>
                    <rect x="175" y="272" width="28" height="14" rx="4" fill="#d97706" />
                    <text x="189" y="283" fill="#ffffff" fontSize="8.5" fontWeight="800" textAnchor="middle">{currentConfig.leftNodes[2].badge}</text>
                  </g>

                  {/* Left Node 4 (Gold Badge Officer) */}
                  <g>
                    <foreignObject x="25" y="385" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.leftNodes[3].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="72" y="400" fill="#ea580c" fontSize="12" fontWeight="900">{currentConfig.leftNodes[3].line1}</text>
                    <text x="72" y="414" fill="#ea580c" fontSize="11.5" fontWeight="800">{currentConfig.leftNodes[3].line2}</text>
                  </g>

                  {/* ================= 4. CENTER HUB (EXACT GEOMETRIC CENTER AT cx = 400, cy = 260) ================= */}
                  <g filter="url(#hubGlow)">
                    <circle cx="400" cy="260" r="54" fill="#ffffff" stroke="#0072bc" strokeWidth="4" />
                    <circle cx="400" cy="248" r="28" fill="url(#hubGradient)" />
                    <text x="400" y="256" fill="#ffffff" fontSize="18" fontStyle="italic" fontWeight="900" textAnchor="middle" fontFamily="serif">SM</text>
                    <text x="400" y="292" fill="#0f172a" fontSize="11.5" fontWeight="900" textAnchor="middle">SM Platform</text>
                  </g>

                  {/* ================= 5. RIGHT FLOATING ARTWORK NODES (Clean Layout) ================= */}
                  {/* Right Node 1 */}
                  <g>
                    <foreignObject x="590" y="25" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.rightNodes[0].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="638" y="40" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.rightNodes[0].title}</text>
                    <text x="638" y="54" fill="#64748b" fontSize="10" fontWeight="600">{currentConfig.rightNodes[0].desc}</text>
                  </g>

                  {/* Right Node 2 */}
                  <g>
                    <foreignObject x="590" y="235" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.rightNodes[1].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="638" y="250" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.rightNodes[1].title}</text>
                    <text x="638" y="264" fill="#64748b" fontSize="10" fontWeight="600">{currentConfig.rightNodes[1].desc}</text>
                  </g>

                  {/* Right Node 3 */}
                  <g>
                    <foreignObject x="590" y="415" width="40" height="40">
                      <div className="w-full h-full flex items-center justify-center">
                        <RichIcon type={currentConfig.rightNodes[2].artType} size={38} />
                      </div>
                    </foreignObject>
                    <text x="638" y="430" fill="#0f172a" fontSize="11.5" fontWeight="800">{currentConfig.rightNodes[2].title}</text>
                    <text x="638" y="444" fill="#64748b" fontSize="10" fontWeight="600">{currentConfig.rightNodes[2].desc}</text>
                  </g>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
