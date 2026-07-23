import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import { serifHeading } from '../components/sections/shared/typography';
import RichIcon from '../components/sections/shared/RichIcon';

export default function EndToEndPlatformArchitectureSection() {
  return (
    <section id="platform-architecture" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-b border-slate-200/90 relative overflow-hidden font-inter">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0072bc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0072bc] bg-[#0072bc]/10 border border-[#0072bc]/20 mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            FLAGSHIP ENTERPRISE ARCHITECTURE
          </span>
          <h2 style={serifHeading} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From Data to Decisions: Powering AI Across Collections &amp; Legal
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A unified platform orchestrating borrower intelligence, multi-channel engagement, ground field enforcement, pre-legal ODR, and statutory court proceedings.
          </p>
        </div>

        {/* ── ULTRA-PREMIUM VECTOR CANVAS (Seamless Art Integration - No Outer White Card) ── */}
        <div className="relative overflow-visible py-2">
          
          {/* Top Canvas Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0072bc] to-[#004f85] text-white flex items-center justify-center font-bold shadow-lg shadow-[#0072bc]/30">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-extrabold text-slate-900 tracking-tight">
                  SM Associates End-to-End Operating Architecture
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Automated Ingestion &rarr; AI Risk Routing &rarr; Multi-Channel Execution &rarr; Bank Settlement
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0072bc]/10 text-[#0072bc] text-xs font-extrabold border border-[#0072bc]/30 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0072bc] stroke-[2.5]" />
              <span>100% RBI &amp; SLA Governed</span>
            </div>
          </div>

          {/* Pure SVG Vector Architecture Diagram (Expanded ViewBox 0 0 1200 620 - Zero Clipping) */}
          <div className="w-full relative">
            <svg className="w-full h-auto drop-shadow-sm" viewBox="0 0 1200 620" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Arrow Markers */}
                <marker id="arrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0072bc" />
                </marker>
                <marker id="arrGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#059669" />
                </marker>
                <marker id="arrPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#7c3aed" />
                </marker>

                {/* Drop Shadows */}
                <filter id="nodeShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.08" />
                </filter>
                <filter id="hubShadow" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#0072bc" floodOpacity="0.3" />
                </filter>

                {/* Hub Gradients */}
                <linearGradient id="smCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0072bc" />
                  <stop offset="100%" stopColor="#004f85" />
                </linearGradient>

                <linearGradient id="aiOrbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6d28d9" />
                </linearGradient>
              </defs>

              {/* Background Subtle Grid Pattern */}
              <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
              </pattern>
              <rect width="1200" height="620" fill="url(#archGrid)" rx="24" />

              {/* ── STAGE 1: BANK & LENDER INGESTION STACK (X: 20 to 215) ── */}
              <g transform="translate(20, 70)">
                <rect x="0" y="0" width="195" height="490" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#nodeShadow)" />
                <rect x="0" y="0" width="195" height="42" rx="20" fill="#f8fafc" />
                <text x="97.5" y="26" fill="#334155" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.5">1. DATA INGESTION</text>

                {/* Regulated Lender Badges Stack */}
                <g transform="translate(15, 52)">
                  <rect x="0" y="0" width="165" height="26" rx="8" fill="#0072bc" />
                  <text x="82.5" y="17" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">Commercial Banks</text>

                  <rect x="0" y="32" width="165" height="26" rx="8" fill="#059669" />
                  <text x="82.5" y="49" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">NBFCs &amp; HFCs</text>

                  <rect x="0" y="64" width="165" height="26" rx="8" fill="#0284c7" />
                  <text x="82.5" y="81" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">Fintech Lenders</text>

                  <rect x="0" y="96" width="165" height="26" rx="8" fill="#ea580c" />
                  <text x="82.5" y="113" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">ARCs &amp; Microfinance</text>
                </g>

                {/* 3 Ingestion Data Feeds with Storyset Micro-Art */}
                <g transform="translate(12, 190)">
                  <rect x="0" y="0" width="171" height="85" rx="14" fill="#f8fafc" stroke="#0072bc" strokeWidth="1.5" />
                  <foreignObject x="8" y="12" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="bank" size={32} />
                    </div>
                  </foreignObject>
                  <text x="50" y="30" fill="#0072bc" fontSize="11" fontWeight="800">Core Banking API</text>
                  <text x="50" y="44" fill="#64748b" fontSize="9.5" fontWeight="600">Real-time Loan Feed</text>
                  <text x="50" y="62" fill="#10b981" fontSize="9" fontWeight="800">✓ Encrypted SSL Sync</text>
                </g>

                <g transform="translate(12, 285)">
                  <rect x="0" y="0" width="171" height="85" rx="14" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
                  <foreignObject x="8" y="12" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="analytics" size={32} />
                    </div>
                  </foreignObject>
                  <text x="50" y="30" fill="#0284c7" fontSize="11" fontWeight="800">Credit Bureau Sync</text>
                  <text x="50" y="44" fill="#64748b" fontSize="9.5" fontWeight="600">CIBIL / Experian</text>
                  <text x="50" y="62" fill="#0284c7" fontSize="9" fontWeight="800">✓ Auto Score Pull</text>
                </g>

                <g transform="translate(12, 380)">
                  <rect x="0" y="0" width="171" height="85" rx="14" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="1.5" />
                  <foreignObject x="8" y="12" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="workflow" size={32} />
                    </div>
                  </foreignObject>
                  <text x="50" y="30" fill="#8b5cf6" fontSize="11" fontWeight="800">NPA Allocation</text>
                  <text x="50" y="44" fill="#64748b" fontSize="9.5" fontWeight="600">SMA-0,1,2 &amp; Write-offs</text>
                  <text x="50" y="62" fill="#8b5cf6" fontSize="9" fontWeight="800">✓ Batch Ingestion</text>
                </g>
              </g>

              {/* Connective Stream: Data Ingestion &rarr; Central AI Engine */}
              <path d="M 215 315 C 240 315, 245 315, 265 315" stroke="#0072bc" strokeWidth="3.5" fill="none" markerEnd="url(#arrCyan)" />

              {/* ── STAGE 2: AI ROUTING & INTELLIGENCE CORE (X: 265 to 435) ── */}
              <g transform="translate(265, 160)" filter="url(#hubShadow)">
                <rect x="0" y="0" width="170" height="300" rx="24" fill="url(#smCoreGrad)" stroke="#ffffff" strokeWidth="2.5" />
                
                {/* Central AI Brain Orb */}
                <circle cx="85" cy="75" r="38" fill="url(#aiOrbGrad)" stroke="#c4b5fd" strokeWidth="2" />
                <text x="85" y="70" fill="#ffffff" fontSize="20" textAnchor="middle">🧠</text>
                <text x="85" y="90" fill="#e0e7ff" fontSize="9" fontWeight="900" textAnchor="middle">SM AI ENGINE</text>

                <text x="85" y="142" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="0.5">SM ASSOCIATES</text>
                <text x="85" y="158" fill="#38bdf8" fontSize="10" fontWeight="800" textAnchor="middle">INTELLIGENCE CORE</text>

                {/* 3 AI Sub-Engine Pills */}
                <rect x="15" y="176" width="140" height="32" rx="16" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1" />
                <text x="85" y="196" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">⚡ Risk &amp; Intent Scoring</text>

                <rect x="15" y="216" width="140" height="32" rx="16" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1" />
                <text x="85" y="236" fill="#38bdf8" fontSize="10" fontWeight="800" textAnchor="middle">🎯 Dynamic Channel Alloc</text>

                <rect x="15" y="256" width="140" height="32" rx="16" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1" />
                <text x="85" y="276" fill="#a7f3d0" fontSize="10" fontWeight="800" textAnchor="middle">🛡️ SLA &amp; RBI Compliance</text>
              </g>

              {/* Connective Streams: Intelligence Core &rarr; 6 Operational Channels */}
              <path d="M 435 220 C 455 220, 465 75, 480 75" stroke="#0072bc" strokeWidth="2.5" fill="none" markerEnd="url(#arrCyan)" />
              <path d="M 435 250 C 455 250, 465 160, 480 160" stroke="#059669" strokeWidth="2.5" fill="none" markerEnd="url(#arrGreen)" />
              <path d="M 435 280 C 455 280, 465 245, 480 245" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arrPurple)" />
              <path d="M 435 310 C 455 310, 465 330, 480 330" stroke="#d97706" strokeWidth="2.5" fill="none" />
              <path d="M 435 340 C 455 340, 465 415, 480 415" stroke="#f43f5e" strokeWidth="2.5" fill="none" />
              <path d="M 435 370 C 455 370, 465 500, 480 500" stroke="#0284c7" strokeWidth="2.5" fill="none" />

              {/* ── STAGE 3: 6 MULTI-CHANNEL EXECUTION ENGINE (X: 480 to 830) ── */}
              {/* Outer Credgenics-Style Policy & Audit Control Box */}
              <rect x="470" y="20" width="370" height="575" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
              <rect x="485" y="28" width="340" height="26" rx="8" fill="#f1f5f9" />
              <text x="655" y="45" fill="#475569" fontSize="9.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
                POLICY CONTROL • USER MANAGEMENT • AUDIT CONTROLS • RBI COMPLIANCE
              </text>

              {/* Channel 1: Digital Collections & Voicebot */}
              <g transform="translate(485, 60)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#0072bc" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#eff6ff" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="comm" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">1. Digital Collections &amp; Voicebot</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">WhatsApp, SMS, Email, 8+ Lang Voicebot</text>
                <text x="74" y="58" fill="#0072bc" fontSize="9.5" fontWeight="800">Dynamic Intensity &amp; Frequency Engine</text>
              </g>

              {/* Channel 2: Telecalling & Predictive Dialer */}
              <g transform="translate(485, 145)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#059669" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#f0fdf4" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="dialer" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">2. Telecalling &amp; Predictive Dialer</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">DialNext Gateway &amp; Performance Mgmt</text>
                <text x="74" y="58" fill="#059669" fontSize="9.5" fontWeight="800">100% Call Recording &amp; Speech Analytics</text>
              </g>

              {/* Channel 3: Geotagged Field Recovery */}
              <g transform="translate(485, 230)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#faf5ff" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="field" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">3. Geotagged Field Recovery</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">CG Collect App &amp; DRA Field Squads</text>
                <text x="74" y="58" fill="#7c3aed" fontSize="9.5" fontWeight="800">Live GPS Tracking &amp; Visit Proof</text>
              </g>

              {/* Channel 4: Pre-Legal & Sec 138 Notices */}
              <g transform="translate(485, 315)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#d97706" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#fefce8" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="legal" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">4. Pre-Legal &amp; Sec 138 Notices</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">RPAD Dispatch &amp; Response Tracking</text>
                <text x="74" y="58" fill="#d97706" fontSize="9.5" fontWeight="800">Pre-Conciliation &amp; Lok Adalat</text>
              </g>

              {/* Channel 5: Court Litigation & ODR */}
              <g transform="translate(485, 400)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#f43f5e" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#fff1f2" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="odr" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">5. Court Litigation &amp; ODR</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">e-Courts API Sync &amp; Advocate Panel</text>
                <text x="74" y="58" fill="#f43f5e" fontSize="9.5" fontWeight="800">DRT, Arbitration &amp; SARFAESI</text>
              </g>

              {/* Channel 6: Repossession & Yard Operations */}
              <g transform="translate(485, 485)" filter="url(#nodeShadow)">
                <rect x="0" y="0" width="340" height="72" rx="16" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
                <rect x="10" y="10" width="52" height="52" rx="12" fill="#f0f9ff" />
                <foreignObject x="12" y="12" width="48" height="48">
                  <div className="w-full h-full flex items-center justify-center">
                    <RichIcon type="asset" size={40} />
                  </div>
                </foreignObject>
                <text x="74" y="28" fill="#0f172a" fontSize="12" fontWeight="900">6. Repossession &amp; Yard Operations</text>
                <text x="74" y="44" fill="#64748b" fontSize="10" fontWeight="600">Geotagged Yard &amp; Valuation Reports</text>
                <text x="74" y="58" fill="#0284c7" fontSize="9.5" fontWeight="800">Statutory E-Auction &amp; Buyer Bidding</text>
              </g>

              {/* Connective Stream: 6 Channels &rarr; Settlement & Outputs */}
              <path d="M 825 181 C 845 181, 850 130, 865 130" stroke="#059669" strokeWidth="3" fill="none" markerEnd="url(#arrGreen)" />
              <path d="M 825 266 C 845 266, 850 250, 865 250" stroke="#0072bc" strokeWidth="3" fill="none" markerEnd="url(#arrCyan)" />
              <path d="M 825 351 C 845 351, 850 370, 865 370" stroke="#d97706" strokeWidth="3" fill="none" />
              <path d="M 825 436 C 845 436, 850 490, 865 490" stroke="#7c3aed" strokeWidth="3" fill="none" />

              {/* ── STAGE 4: BANK SETTLEMENT & REAL-TIME RECOVERY OUTPUTS (X: 865 to 1180 - Zero Truncation) ── */}
              <g transform="translate(865, 70)">
                <rect x="0" y="0" width="310" height="490" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#nodeShadow)" />
                <rect x="0" y="0" width="310" height="42" rx="20" fill="#f8fafc" />
                <text x="155" y="26" fill="#334155" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.5">4. SETTLEMENT &amp; RECONCILIATION</text>

                {/* Output 1: Promise to Pay (PTP) */}
                <g transform="translate(14, 52)">
                  <rect x="0" y="0" width="282" height="95" rx="16" fill="#059669" />
                  <foreignObject x="12" y="16" width="44" height="44">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="bank" size={38} />
                    </div>
                  </foreignObject>
                  <text x="64" y="32" fill="#ffffff" fontSize="13" fontWeight="900">Promise to Pay (PTP)</text>
                  <text x="64" y="50" fill="#a7f3d0" fontSize="10.5" fontWeight="700">Direct Bank Account Credit</text>
                  <text x="64" y="68" fill="#ffffff" fontSize="10" fontWeight="900">✓ Instant Settlement &amp; PTP Clearance</text>
                </g>

                {/* Output 2: Payment & Reconciliation */}
                <g transform="translate(14, 160)">
                  <rect x="0" y="0" width="282" height="95" rx="16" fill="#0072bc" />
                  <foreignObject x="12" y="16" width="44" height="44">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="analytics" size={38} />
                    </div>
                  </foreignObject>
                  <text x="64" y="32" fill="#ffffff" fontSize="13" fontWeight="900">Payment &amp; Reconciliation</text>
                  <text x="64" y="50" fill="#bae6fd" fontSize="10.5" fontWeight="700">Automated Ledger Sync &amp; MIS</text>
                  <text x="64" y="68" fill="#ffffff" fontSize="10" fontWeight="900">✓ 0% Manual Reconciliation Error</text>
                </g>

                {/* Output 3: RBI Compliance Audit Trail */}
                <g transform="translate(14, 268)">
                  <rect x="0" y="0" width="282" height="95" rx="16" fill="#d97706" />
                  <foreignObject x="12" y="16" width="44" height="44">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="compliance" size={38} />
                    </div>
                  </foreignObject>
                  <text x="64" y="32" fill="#ffffff" fontSize="13" fontWeight="900">Immutable Audit Trail</text>
                  <text x="64" y="50" fill="#fde68a" fontSize="10.5" fontWeight="700">100% RBI Fair Practice Conduct</text>
                  <text x="64" y="68" fill="#ffffff" fontSize="10" fontWeight="900">✓ Regulator Audit-Ready Logging</text>
                </g>

                {/* Output 4: Integrated Feedback Loop */}
                <g transform="translate(14, 376)">
                  <rect x="0" y="0" width="282" height="95" rx="16" fill="#7c3aed" />
                  <foreignObject x="12" y="16" width="44" height="44">
                    <div className="w-full h-full flex items-center justify-center">
                      <RichIcon type="workflow" size={38} />
                    </div>
                  </foreignObject>
                  <text x="64" y="32" fill="#ffffff" fontSize="13" fontWeight="900">Integrated Feedback Loop</text>
                  <text x="64" y="50" fill="#ddd6fe" fontSize="10.5" fontWeight="700">Self-Learning Recovery Models</text>
                  <text x="64" y="68" fill="#ffffff" fontSize="10" fontWeight="900">✓ Ongoing Portfolio Optimization</text>
                </g>
              </g>
            </svg>
          </div>

          {/* Bottom Interactive Legend & Capabilities Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072bc]/10 text-[#0072bc] text-xs font-bold border border-[#0072bc]/20">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" /> Telecalling &amp; IVR Voicebot
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Geotagged Field Recovery
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Sec 138 &amp; SARFAESI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Court Litigation &amp; ODR
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Integrated Feedback Loop
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Sparkles className="w-4 h-4 text-[#0072bc]" />
              <span>Pan-South India SLA &amp; RBI Compliance Active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
