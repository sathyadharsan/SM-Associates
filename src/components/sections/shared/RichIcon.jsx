import React from 'react';

// Storyset-Style Premium Corporate Vector Business SVG Illustrations
// Original SVG illustrations inspired by Storyset / Freepik corporate design language:
// Clean white/pastel backgrounds, multi-layer UI screens, floating micro-elements & brand HSL colors.
export default function RichIcon({ type = 'legal', size = 56, className = '' }) {
  const t = (type || 'legal').toLowerCase();

  // ════════════════════════════════════════════════════════════════════════
  // 1. SWARA NEXTGEN AI ASSISTANT (Storyset Monitor + ID Card + AI Avatar)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('ai') || t.includes('assistant') || t.includes('swara') || t.includes('bot') || t.includes('intelligence')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Storyset Pastel Background Blob */}
          <circle cx="32" cy="32" r="28" fill="#eff6ff" opacity="0.9" />

          {/* Desktop Monitor Framework */}
          <rect x="12" y="12" width="40" height="28" rx="5" fill="#334155" />
          <rect x="14" y="14" width="36" height="24" rx="3" fill="#ffffff" />
          <rect x="28" y="40" width="8" height="8" fill="#64748b" />
          <rect x="20" y="48" width="24" height="3" rx="1.5" fill="#334155" />

          {/* Monitor Screen Dashboard Lines */}
          <rect x="17" y="17" width="12" height="4" rx="1" fill="#e2e8f0" />
          <line x1="17" y1="24" x2="27" y2="24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="28" x2="25" y2="28" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="32" x2="29" y2="32" stroke="#0072bc" strokeWidth="2" strokeLinecap="round" />

          {/* Floating ID Card Badge (Storyset style) */}
          <rect x="30" y="18" width="17" height="18" rx="3" fill="#ffffff" stroke="#0072bc" strokeWidth="1.5" />
          <circle cx="38.5" cy="24" r="3.5" fill="#0072bc" />
          <path d="M 33.5 32 C 33.5 29 35.5 28 38.5 28 C 41.5 28 43.5 29 43.5 32 Z" fill="#38bdf8" />

          {/* Bright Yellow Chat Bubble */}
          <rect x="34" y="8" width="14" height="9" rx="3" fill="#fbbf24" />
          <path d="M 36 17 L 34 20 L 39 17 Z" fill="#fbbf24" />
          <line x1="37" y1="11" x2="44" y2="11" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />

          {/* Sparkle Badge */}
          <path d="M 12 18 L 13 20 L 15 21 L 13 22 L 12 24 L 11 22 L 9 21 L 11 20 Z" fill="#ec4899" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 2. DIGITAL COMMUNICATIONS (Storyset Hand + Phone + Chat & Social Icons)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('comm') || t.includes('omnichannel') || t.includes('whatsapp') || t.includes('sms') || t.includes('digital') || t.includes('email') || t.includes('broadcast')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Storyset Soft Backdrop */}
          <ellipse cx="32" cy="32" rx="26" ry="26" fill="#f0fdf4" opacity="0.9" />

          {/* Smartphone held by Hand */}
          <rect x="22" y="10" width="20" height="42" rx="5" fill="#0284c7" />
          <rect x="24" y="14" width="16" height="34" rx="3" fill="#ffffff" />
          <rect x="29" y="12" width="6" height="1.5" rx="0.75" fill="#0369a1" />

          {/* Phone Screen Chat Stream */}
          <rect x="26" y="18" width="10" height="4" rx="1" fill="#38bdf8" />
          <rect x="28" y="24" width="10" height="4" rx="1" fill="#10b981" />
          <rect x="26" y="30" width="10" height="4" rx="1" fill="#f43f5e" />

          {/* Floating Social & Comm Nodes (Storyset style) */}
          {/* Green WhatsApp/Chat Bubble */}
          <circle cx="14" cy="20" r="7" fill="#10b981" />
          <path d="M 12 20 L 13.5 21.5 L 16.5 18.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Pink Email Envelope */}
          <rect x="44" y="18" width="14" height="10" rx="2" fill="#f43f5e" />
          <path d="M 44 20 L 51 25 L 58 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Gold Rating Stars */}
          <path d="M 46 36 L 47 38 L 49 38 L 47.5 39.5 L 48 41.5 L 46 40 L 44 41.5 L 44.5 39.5 L 43 38 L 45 38 Z" fill="#fbbf24" />

          {/* Hand Stylized Silhouette Base */}
          <path d="M 18 48 C 18 42 22 40 26 40 L 26 54 L 18 54 Z" fill="#fed7aa" opacity="0.9" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 3. COLLECTIONS ANALYTICS (Storyset Monitor + Bar Chart + Magnifying Glass)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('analytic') || t.includes('chart') || t.includes('report') || t.includes('data') || t.includes('kpi') || t.includes('metric') || t.includes('routing')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#f0f9ff" opacity="0.9" />

          {/* Monitor Screen Frame */}
          <rect x="12" y="12" width="40" height="28" rx="5" fill="#0284c7" />
          <rect x="14" y="14" width="36" height="24" rx="3" fill="#ffffff" />
          <rect x="28" y="40" width="8" height="8" fill="#0369a1" />
          <rect x="20" y="48" width="24" height="3" rx="1.5" fill="#0284c7" />

          {/* Multi-Colored Storyset Bar Chart */}
          <rect x="18" y="28" width="5" height="8" rx="1" fill="#38bdf8" />
          <rect x="25" y="21" width="5" height="15" rx="1" fill="#ec4899" />
          <rect x="32" y="24" width="5" height="12" rx="1" fill="#f97316" />
          <rect x="39" y="18" width="5" height="18" rx="1" fill="#10b981" />

          {/* Growth Trend Line */}
          <path d="M 18 26 L 25 19 L 32 22 L 39 16" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="39" cy="16" r="2" fill="#8b5cf6" />

          {/* 3D Magnifying Glass with Red Handle */}
          <circle cx="42" cy="36" r="7" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" />
          <line x1="47" y1="41" x2="53" y2="47" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 4. RECOVERY OPERATING SYSTEM / WORKFLOW (Storyset Gears + Process Nodes)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('workflow') || t.includes('process') || t.includes('operating') || t.includes('system') || t.includes('engine') || t.includes('lifecycle')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#faf5ff" opacity="0.9" />

          {/* Main Blue Gear Wheel */}
          <circle cx="28" cy="28" r="12" fill="#0072bc" />
          <circle cx="28" cy="28" r="5" fill="#ffffff" />
          {/* Gear Teeth */}
          <rect x="26" y="12" width="4" height="4" rx="1" fill="#0072bc" />
          <rect x="26" y="40" width="4" height="4" rx="1" fill="#0072bc" />
          <rect x="12" y="26" width="4" height="4" rx="1" fill="#0072bc" />
          <rect x="40" y="26" width="4" height="4" rx="1" fill="#0072bc" />

          {/* Secondary Gold Gear Wheel */}
          <circle cx="44" cy="40" r="9" fill="#fbbf24" />
          <circle cx="44" cy="40" r="4" fill="#ffffff" />
          <rect x="42" y="28" width="4" height="3" rx="1" fill="#fbbf24" />
          <rect x="42" y="49" width="4" height="3" rx="1" fill="#fbbf24" />

          {/* Connected Process Flow Arrow (Emerald) */}
          <path d="M 16 44 C 20 50 30 52 38 46" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2" fill="none" />
          <polygon points="38,46 34,42 40,42" fill="#10b981" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 5. LEGAL SERVICES & LITIGATION (Storyset 3D Gavel + Scale + Notice)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('legal') || t.includes('litigation') || t.includes('notice') || t.includes('court') || t.includes('gavel')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#fff7ed" opacity="0.9" />

          {/* Sound Block Base (Amber Gold) */}
          <rect x="18" y="44" width="28" height="6" rx="3" fill="#d97706" />
          <rect x="20" y="42" width="24" height="4" rx="2" fill="#fbbf24" />

          {/* Gavel Handle (Warm Wood Tan) */}
          <rect x="26" y="24" width="7" height="26" rx="3" fill="#ea580c" transform="rotate(35 26 24)" />
          <rect x="27.5" y="25.5" width="4" height="23" rx="2" fill="#f97316" transform="rotate(35 27.5 25.5)" />

          {/* Gavel Head (3D Wooden Cylinder) */}
          <g transform="rotate(-30 24 20)">
            <rect x="10" y="16" width="28" height="14" rx="5" fill="#c2410c" />
            <rect x="12" y="14" width="24" height="14" rx="4" fill="#ea580c" />
            <rect x="14" y="14" width="4" height="14" fill="#fbbf24" />
            <rect x="26" y="14" width="4" height="14" fill="#fbbf24" />
          </g>

          {/* Rose Legal Notice Sparkle Badge */}
          <circle cx="48" cy="18" r="7" fill="#f43f5e" />
          <path d="M 45.5 18 L 47.5 20 L 51 16.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 6. FIELD RECOVERY & REPOSSESSION (Storyset Vehicle + Geotagged Pin)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('asset') || t.includes('repossession') || t.includes('vehicle') || t.includes('yard') || t.includes('auction') || t.includes('doorstep') || t.includes('field')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Storyset Soft Backdrop Aura */}
          <ellipse cx="38" cy="32" rx="20" ry="24" fill="#fbcfe8" opacity="0.8" />

          {/* 3D Smartphone Body (Vibrant Blue/Cyan) */}
          <rect x="16" y="8" width="26" height="48" rx="6" fill="#0284c7" />
          <rect x="18" y="12" width="22" height="40" rx="4" fill="#ffffff" />

          {/* Screen UI Cards (Storyset colorful blocks) */}
          <rect x="20" y="16" width="18" height="6" rx="2" fill="#38bdf8" />
          <rect x="20" y="24" width="8" height="9" rx="2" fill="#f43f5e" />
          <rect x="30" y="24" width="8" height="9" rx="2" fill="#10b981" />
          <rect x="20" y="35" width="18" height="7" rx="2" fill="#fbbf24" />

          {/* Floating Sparkles & Geotag Badge */}
          <circle cx="48" cy="18" r="8" fill="#f43f5e" />
          <path d="M 48 13 C 45 13 43 15 43 18 C 43 22 48 25 48 25 C 48 25 53 22 53 18 C 53 15 51 13 48 13 Z" fill="#ffffff" />
          <circle cx="48" cy="17" r="2" fill="#f43f5e" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 7. BANKING & NBFC (Storyset Bank Building + Financial Shield)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('bank') || t.includes('loan') || t.includes('repayment') || t.includes('cash') || t.includes('financial') || t.includes('lending') || t.includes('nbfc')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#f8fafc" opacity="0.9" />

          {/* Classic Bank Building (Slate Navy) */}
          <path d="M 12 24 L 28 14 L 44 24 Z" fill="#475569" />
          <rect x="14" y="24" width="28" height="3" fill="#334155" />
          <rect x="16" y="28" width="4" height="16" fill="#94a3b8" />
          <rect x="24" y="28" width="4" height="16" fill="#94a3b8" />
          <rect x="32" y="28" width="4" height="16" fill="#94a3b8" />
          <rect x="12" y="44" width="32" height="4" fill="#334155" />

          {/* White Loan Agreement Sheet */}
          <rect x="28" y="22" width="22" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="32" y1="27" x2="44" y2="27" stroke="#0072bc" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="32" x2="42" y2="32" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

          {/* Gold Dollar Tag & Blue Check Badge */}
          <rect x="22" y="42" width="12" height="6" rx="2" fill="#fbbf24" />
          <text x="28" y="46.5" fill="#78350f" fontSize="7" fontWeight="900" textAnchor="middle">$</text>

          <circle cx="44" cy="42" r="8" fill="#0284c7" />
          <path d="M 40.5 42 L 43 44.5 L 47.5 40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 8. ONLINE DISPUTE RESOLUTION / ODR (Storyset Scale + Mediators)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('odr') || t.includes('arbitration') || t.includes('scale') || t.includes('dispute') || t.includes('resolution')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#f0f9ff" opacity="0.9" />

          {/* Scale Beam & Pillar (Amber Gold) */}
          <rect x="30" y="12" width="4" height="18" fill="#d97706" />
          <path d="M 20 16 L 32 12 L 44 16" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="12" r="3" fill="#f59e0b" />

          {/* Scale Plates */}
          <path d="M 18 16 L 14 24 M 22 16 L 26 24" stroke="#d97706" strokeWidth="1.5" />
          <path d="M 12 24 C 12 27 28 27 28 24 Z" fill="#fbbf24" />

          <path d="M 42 16 L 38 24 M 46 16 L 50 24" stroke="#d97706" strokeWidth="1.5" />
          <path d="M 36 24 C 36 27 52 27 52 24 Z" fill="#fbbf24" />

          {/* Central Mediator (Blue Suit) */}
          <circle cx="32" cy="35" r="4" fill="#0284c7" />
          <path d="M 25 46 C 25 40 28 38 32 38 C 36 38 39 40 39 46 Z" fill="#0284c7" />

          {/* Side Participants (Rose Shirts) */}
          <circle cx="21" cy="40" r="3.5" fill="#f43f5e" />
          <path d="M 16 49 C 16 44 18 43 21 43 C 24 43 26 44 26 49 Z" fill="#f43f5e" />

          <circle cx="43" cy="40" r="3.5" fill="#f43f5e" />
          <path d="M 38 49 C 38 44 40 43 43 43 C 46 43 48 44 48 49 Z" fill="#f43f5e" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 9. DIALNEXT PREDICTIVE DIALER (Storyset Call Agent + Yellow Phone Bubble)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('dialer') || t.includes('tele') || t.includes('call') || t.includes('agent') || t.includes('contact')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#eff6ff" opacity="0.9" />

          {/* Green Chat Message Bubble */}
          <rect x="12" y="10" width="18" height="12" rx="3" fill="#22c55e" />
          <path d="M 15 22 L 13 25 L 18 22 Z" fill="#22c55e" />
          <line x1="15" y1="14" x2="25" y2="14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

          {/* Yellow Phone Receiver Bubble */}
          <circle cx="48" cy="16" r="10" fill="#eab308" />
          <path d="M 44 14 C 44 19 48 20 51 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Agent Person Head & Hair */}
          <circle cx="32" cy="28" r="9" fill="#fca5a5" />
          <path d="M 23 26 C 23 20 27 18 32 18 C 37 18 41 20 41 26 Z" fill="#78350f" />

          {/* Agent Shirt (Vibrant Blue) */}
          <path d="M 18 52 C 18 40 23 38 32 38 C 41 38 46 40 46 52 Z" fill="#0284c7" />

          {/* Headset Frame & Mic */}
          <path d="M 22 28 C 22 21 26 18 32 18 C 38 18 42 21 42 28" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <rect x="20" y="25" width="3.5" height="7" rx="1.5" fill="#0f172a" />
          <rect x="40.5" y="25" width="3.5" height="7" rx="1.5" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 10. SKIP TRACING & RISK INVESTIGATION (Storyset Cyber Radar + Red GPS Pin)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('trace') || t.includes('skip') || t.includes('investig') || t.includes('diligence') || t.includes('gps')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#f0f9ff" opacity="0.9" />

          {/* Cyber Radar Rings */}
          <circle cx="32" cy="32" r="22" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
          <circle cx="32" cy="32" r="14" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />

          {/* 3D Red GPS Location Pin */}
          <path d="M 32 14 C 25 14 20 19 20 26 C 20 35 32 46 32 46 C 32 46 44 35 44 26 C 44 19 39 14 32 14 Z" fill="#f43f5e" />
          <circle cx="32" cy="24" r="4.5" fill="#ffffff" />
          <circle cx="32" cy="24" r="2.5" fill="#0284c7" />

          {/* Green Discovery Check Badge */}
          <circle cx="44" cy="40" r="7" fill="#10b981" />
          <path d="M 41 40 L 43 42 L 47 38" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 11. CORPORATE VISION (Storyset Cyan Telescope, Compass & Gold Stars)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('vision') || t.includes('direction') || t.includes('future') || t.includes('sparkle')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#faf5ff" opacity="0.9" />

          {/* Purple Orbital Arc Ring */}
          <ellipse cx="32" cy="32" rx="22" ry="10" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 3" transform="rotate(-25 32 32)" />

          {/* 3D Cyan Telescope Lens Body */}
          <rect x="18" y="32" width="22" height="10" rx="3" fill="#0284c7" transform="rotate(-40 18 32)" />
          <rect x="22" y="26" width="16" height="8" rx="2" fill="#38bdf8" transform="rotate(-40 22 26)" />
          <circle cx="38" cy="18" r="8" fill="#0284c7" />
          <circle cx="38" cy="18" r="6" fill="#7dd3fc" />

          {/* Gold Sparkle Stars */}
          <path d="M 48 12 L 49 14 L 51 15 L 49 16 L 48 18 L 47 16 L 45 15 L 47 14 Z" fill="#fbbf24" />
          <polygon points="38,18 46,14 42,22" fill="#10b981" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 12. ENTERPRISE MISSION (Storyset Monolithic Shield & Target Bullseye)
  // ════════════════════════════════════════════════════════════════════════
  if (t.includes('mission') || t.includes('target') || t.includes('goal') || t.includes('purpose')) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#fefce8" opacity="0.9" />

          {/* Concentric Target Bullseye Circles */}
          <circle cx="32" cy="32" r="22" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" />
          <circle cx="32" cy="32" r="16" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
          <circle cx="32" cy="32" r="10" fill="#f43f5e" />
          <circle cx="32" cy="32" r="5" fill="#fbbf24" />

          {/* 3D Gold Security Shield Overlay Badge */}
          <path d="M 42 22 L 52 26 V 36 C 52 44 46 49 42 52 C 38 49 32 44 32 36 V 26 Z" fill="#f59e0b" />
          <path d="M 42 24 L 50 28 V 36 C 50 42 45 46 42 49 V 24 Z" fill="#fbbf24" />

          {/* Green Checkmark Seal */}
          <circle cx="42" cy="36" r="5" fill="#10b981" />
          <path d="M 39.5 36 L 41 37.5 L 44.5 34.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 13. DEFAULT COMPLIANCE & SECURITY SHIELD (Storyset Gold Shield & Green Check)
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill="#fefce8" opacity="0.9" />

        {/* 3D Golden Security Shield */}
        <path d="M 32 12 L 48 18 V 32 C 48 43 39 50 32 54 C 25 50 16 43 16 32 V 18 Z" fill="#f59e0b" />
        <path d="M 32 15 L 45 20 V 32 C 45 41 38 47 32 51 V 15 Z" fill="#fbbf24" />

        {/* Inner White Star & Green Check Circle */}
        <circle cx="32" cy="32" r="9" fill="#ffffff" />
        <circle cx="32" cy="32" r="7" fill="#10b981" />
        <path d="M 28.5 32 L 31 34.5 L 35.5 30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}
