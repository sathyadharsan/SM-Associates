import React from 'react';
import { motion } from 'framer-motion';

// 100% Unique Branded Product Experience Artworks
// Clean White/Light Theme Compliant with Vibrant HSL Gradients & Glass Panels
export default function HeroCustomArtwork({ category = 'services' }) {
  const cat = (category || 'services').toLowerCase();

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 1: VEHICLE & ASSET REPOSSESSION — "THE GIANT RECOVERY PLANET"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'asset') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(234,88,12,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="recoveryPlanetLight" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="35%" stopColor="#fb923c" />
              <stop offset="75%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#9a3412" />
            </radialGradient>

            <filter id="glowOrangeLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#ea580c" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Interconnected Vehicle Trajectory Orbital Rings */}
          <ellipse cx="290" cy="230" rx="220" ry="80" fill="none" stroke="#ea580c" strokeWidth="3" strokeDasharray="14 8" style={{ transform: 'rotate(-15deg)', transformOrigin: '290px 230px' }} />
          <ellipse cx="290" cy="230" rx="160" ry="55" fill="none" stroke="#fdba74" strokeWidth="2" opacity="0.8" style={{ transform: 'rotate(-15deg)', transformOrigin: '290px 230px' }} />

          {/* Floating Vehicle & Yard Glass Pods */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="45" y="45" width="190" height="48" rx="24" fill="#ffffff" fillOpacity="0.95" stroke="#ea580c" strokeWidth="2" filter="url(#glowOrangeLight)" />
            <text x="140" y="74" fill="#9a3412" fontSize="12" fontWeight="900" textAnchor="middle">🚜 VEHICLE SEIZURE ORDER</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <rect x="345" y="45" width="190" height="48" rx="24" fill="#ffffff" fillOpacity="0.95" stroke="#0284c7" strokeWidth="2" filter="url(#glowOrangeLight)" />
            <text x="440" y="74" fill="#0369a1" fontSize="12" fontWeight="900" textAnchor="middle">🏗️ GEOTAGGED YARD GRID</text>
          </motion.g>

          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}>
            <rect x="345" y="365" width="190" height="48" rx="24" fill="#ffffff" fillOpacity="0.95" stroke="#059669" strokeWidth="2" filter="url(#glowOrangeLight)" />
            <text x="440" y="394" fill="#047857" fontSize="12" fontWeight="900" textAnchor="middle">🔨 STATUTORY E-AUCTION</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 1.5 }}>
            <rect x="45" y="365" width="190" height="48" rx="24" fill="#ffffff" fillOpacity="0.95" stroke="#d97706" strokeWidth="2" filter="url(#glowOrangeLight)" />
            <text x="140" y="394" fill="#b45309" fontSize="12" fontWeight="900" textAnchor="middle">🏢 BANK RECOVERY DESK</text>
          </motion.g>

          {/* Central Sunset Orange Recovery Planet Core */}
          <g filter="url(#glowOrangeLight)">
            <circle cx="290" cy="230" r="82" fill="url(#recoveryPlanetLight)" stroke="#ffffff" strokeWidth="4" />
            <text x="290" y="222" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" letterSpacing="1">RECOVERY</text>
            <text x="290" y="242" fill="#ffedd5" fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="2">PLANET CORE</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 2: LEGAL & NOTICES — "THE GOLDEN JUSTICE RIBBON"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'legal') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(244,63,94,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roseRibbonGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <filter id="glowRoseLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#f43f5e" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Sweeping Statutory Justice Ribbon Arc */}
          <path
            d="M 50 360 C 190 360, 190 90, 290 90 C 390 90, 390 360, 530 360"
            stroke="url(#roseRibbonGradLight)" strokeWidth="10" fill="none" strokeLinecap="round"
          />
          <path
            d="M 50 360 C 190 360, 190 90, 290 90 C 390 90, 390 360, 530 360"
            stroke="#ffffff" strokeWidth="3" strokeDasharray="8 8" fill="none" opacity="0.9"
          />

          {/* Stage 1: Sec 138 Notice */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <circle cx="50" cy="360" r="34" fill="#ffffff" stroke="#f43f5e" strokeWidth="3" filter="url(#glowRoseLight)" />
            <text x="50" y="367" fontSize="22" textAnchor="middle">📋</text>
            <rect x="0" y="406" width="100" height="26" rx="13" fill="#ffffff" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="50" y="423" fill="#be123c" fontSize="10.5" fontWeight="900" textAnchor="middle">SEC 138 NOTICE</text>
          </motion.g>

          {/* Stage 2: RPAD Service Proof */}
          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <circle cx="290" cy="90" r="38" fill="#ffffff" stroke="#f59e0b" strokeWidth="3" filter="url(#glowRoseLight)" />
            <text x="290" y="97" fontSize="24" textAnchor="middle">✉️</text>
            <rect x="215" y="138" width="150" height="28" rx="14" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="290" y="156" fill="#b45309" fontSize="11" fontWeight="900" textAnchor="middle">RPAD SERVICE PROOF</text>
          </motion.g>

          {/* Stage 3: Court Filing */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}>
            <circle cx="530" cy="360" r="34" fill="#ffffff" stroke="#10b981" strokeWidth="3" filter="url(#glowRoseLight)" />
            <text x="530" y="367" fontSize="22" textAnchor="middle">⚖️</text>
            <rect x="480" y="406" width="100" height="26" rx="13" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
            <text x="530" y="423" fill="#047857" fontSize="10.5" fontWeight="900" textAnchor="middle">COURT FILING</text>
          </motion.g>

          {/* Central 3D Golden Gavel Emblem */}
          <g filter="url(#glowRoseLight)">
            <rect x="250" y="215" width="80" height="80" rx="24" fill="#ffffff" stroke="#f59e0b" strokeWidth="3" />
            <text x="290" y="262" fontSize="34" textAnchor="middle">🔨</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 3: SKIP TRACING — "THE SATELLITE DISCOVERY RADAR"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'tracing') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(2,132,199,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyberSweepLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>

            <filter id="glowCyanLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0284c7" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* 360° Satellite Radar Target Rings */}
          <circle cx="290" cy="230" r="195" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.3" />
          <circle cx="290" cy="230" r="145" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
          <circle cx="290" cy="230" r="95" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />

          {/* Angle Crosshairs */}
          <line x1="290" y1="35" x2="290" y2="425" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
          <line x1="95" y1="230" x2="485" y2="230" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />

          {/* Rotating Radar Sweep Beam */}
          <motion.path
            d="M 290 230 L 485 230 A 195 195 0 0 0 290 35 Z"
            fill="url(#cyberSweepLight)"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "290px 230px" }}
          />

          {/* Target Signal Discovery Beacons */}
          <motion.g animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <circle cx="370" cy="150" r="14" fill="#f43f5e" opacity="0.3" />
            <circle cx="370" cy="150" r="7" fill="#f43f5e" />
            <text x="370" y="128" fill="#be123c" fontSize="11" fontWeight="900" textAnchor="middle">GPS TARGET 01</text>
          </motion.g>

          <motion.g animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>
            <circle cx="200" cy="300" r="14" fill="#10b981" opacity="0.3" />
            <circle cx="200" cy="300" r="7" fill="#10b981" />
            <text x="200" y="322" fill="#047857" fontSize="11" fontWeight="900" textAnchor="middle">ASSET LOCATED</text>
          </motion.g>

          {/* Central Satellite Lens */}
          <g filter="url(#glowCyanLight)">
            <circle cx="290" cy="230" r="42" fill="#ffffff" stroke="#0284c7" strokeWidth="3" />
            <text x="290" y="237" fontSize="24" textAnchor="middle">📡</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 4: DIGITAL & TELECALLING — "THE GENAI VOICEWAVE SPECTRUM"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'digital') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(59,130,246,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0072bc" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <filter id="glowWaveLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0072bc" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Dynamic Soundwave Equalizer Bars */}
          {[120, 160, 200, 240, 280, 320, 360, 400, 440].map((x, i) => (
            <motion.rect
              key={x}
              x={x} y={150 - (i % 3) * 20} width="16" height={160 + (i % 4) * 30} rx="8"
              fill="url(#waveGradLight)" opacity={0.85}
              animate={{ height: [120 + (i % 4) * 30, 220 - (i % 3) * 20, 120 + (i % 4) * 30] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Floating Voicebot Cards */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="50" y="45" width="190" height="48" rx="24" fill="#ffffff" stroke="#0072bc" strokeWidth="2" filter="url(#glowWaveLight)" />
            <text x="145" y="74" fill="#005a96" fontSize="12" fontWeight="900" textAnchor="middle">🤖 GENAI VOICEBOT</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <rect x="340" y="45" width="190" height="48" rx="24" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" filter="url(#glowWaveLight)" />
            <text x="435" y="74" fill="#6d28d9" fontSize="12" fontWeight="900" textAnchor="middle">📞 PREDICTIVE DIALER</text>
          </motion.g>

          <g filter="url(#glowWaveLight)">
            <circle cx="290" cy="230" r="54" fill="#ffffff" stroke="#0072bc" strokeWidth="3" />
            <text x="290" y="236" fontSize="26" textAnchor="middle">🎙️</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 5: FIELD COLLECTIONS — "THE GEOTAGGED FIELD DISPATCH MATRIX"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'field') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(244,63,94,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glowFieldLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#f43f5e" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Perspective Map Grid Lines */}
          <path d="M 60 380 L 290 80 L 520 380 Z" fill="none" stroke="#f43f5e" strokeWidth="2" opacity="0.3" />
          <line x1="175" y1="230" x2="405" y2="230" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />

          {/* Geotagged Field Pins */}
          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
            <circle cx="175" cy="230" r="14" fill="#f43f5e" opacity="0.3" />
            <circle cx="175" cy="230" r="7" fill="#f43f5e" />
            <rect x="75" y="175" width="200" height="44" rx="22" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" filter="url(#glowFieldLight)" />
            <text x="175" y="202" fill="#be123c" fontSize="11.5" fontWeight="900" textAnchor="middle">🛵 15-MIN FIELD DISPATCH</text>
          </motion.g>

          <motion.g animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
            <circle cx="405" cy="230" r="14" fill="#10b981" opacity="0.3" />
            <circle cx="405" cy="230" r="7" fill="#10b981" />
            <rect x="305" y="175" width="200" height="44" rx="22" fill="#ffffff" stroke="#10b981" strokeWidth="2" filter="url(#glowFieldLight)" />
            <text x="405" y="202" fill="#047857" fontSize="11.5" fontWeight="900" textAnchor="middle">🛡️ DRA CERTIFIED VISIT</text>
          </motion.g>

          <g filter="url(#glowFieldLight)">
            <circle cx="290" cy="230" r="48" fill="#ffffff" stroke="#f43f5e" strokeWidth="3" />
            <text x="290" y="237" fontSize="24" textAnchor="middle">📍</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 6: PRE-LEGAL ODR — "THE DIGITAL ODR DISPUTE BALANCE SCALE"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'odr') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(245,158,11,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glowAmberLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#f59e0b" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* ODR Mediation Arc */}
          <path d="M 120 300 Q 290 100, 460 300" stroke="#f59e0b" strokeWidth="4" strokeDasharray="10 6" fill="none" opacity="0.8" />

          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="45" y="278" width="180" height="46" rx="23" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" filter="url(#glowAmberLight)" />
            <text x="135" y="306" fill="#b45309" fontSize="11.5" fontWeight="900" textAnchor="middle">⚖️ ONLINE MEDIATION</text>
          </motion.g>

          <motion.g animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <rect x="355" y="278" width="180" height="46" rx="23" fill="#ffffff" stroke="#10b981" strokeWidth="2" filter="url(#glowAmberLight)" />
            <text x="445" y="306" fill="#047857" fontSize="11.5" fontWeight="900" textAnchor="middle">🤝 INSTANT SETTLEMENT</text>
          </motion.g>

          <g filter="url(#glowAmberLight)">
            <circle cx="290" cy="200" r="52" fill="#ffffff" stroke="#f59e0b" strokeWidth="3" />
            <text x="290" y="207" fontSize="26" textAnchor="middle">🏛️</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 7: COMPLIANCE — "THE GOLDEN SHIELD & TRUST HALO"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'compliance') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(217,119,6,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldMonolithLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="40%" stopColor="#fbbf24" />
              <stop offset="80%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            <filter id="cinematicGoldLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#d97706" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Security Halos & Audit Rings */}
          <circle cx="290" cy="230" r="200" fill="none" stroke="#f59e0b" strokeWidth="24" opacity="0.08" />
          <circle cx="290" cy="230" r="160" fill="none" stroke="#f59e0b" strokeWidth="18" opacity="0.14" />
          <circle cx="290" cy="230" r="120" fill="none" stroke="#d97706" strokeWidth="12" opacity="0.2" />

          {/* Floating Trust Seals */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="190" y="25" width="200" height="46" rx="23" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" filter="url(#cinematicGoldLight)" />
            <text x="290" y="53" fill="#b45309" fontSize="11.5" fontWeight="900" textAnchor="middle">🟢 100% RBI FAIR PRACTICE</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <rect x="365" y="208" width="195" height="46" rx="23" fill="#ffffff" stroke="#10b981" strokeWidth="2" filter="url(#cinematicGoldLight)" />
            <text x="462.5" y="236" fill="#047857" fontSize="11.5" fontWeight="900" textAnchor="middle">🛡️ DRA CERTIFIED OFFICERS</text>
          </motion.g>

          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}>
            <rect x="190" y="390" width="200" height="46" rx="23" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#cinematicGoldLight)" />
            <text x="290" y="418" fill="#0369a1" fontSize="11.5" fontWeight="900" textAnchor="middle">🔒 IMMUTABLE AUDIT TRAIL</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 1.5 }}>
            <rect x="20" y="208" width="195" height="46" rx="23" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" filter="url(#cinematicGoldLight)" />
            <text x="117.5" y="236" fill="#be123c" fontSize="11.5" fontWeight="900" textAnchor="middle">⚡ ZERO EXPOSURE SLA</text>
          </motion.g>

          {/* Gold Shield Core */}
          <g filter="url(#cinematicGoldLight)">
            <path d="M 290 150 L 350 178 V 245 C 350 290 312 318 290 328 C 268 318 230 290 230 245 V 178 Z" fill="url(#goldMonolithLight)" stroke="#ffffff" strokeWidth="4" />
            <path d="M 275 235 L 287 247 L 312 212" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 8: BANKING — "FINANCIAL GALAXY & CAPITAL FLOW RIVERS"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'banking') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(5,150,105,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="emeraldPrismLight" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="40%" stopColor="#10b981" />
              <stop offset="80%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>

            <filter id="cinematicEmeraldLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#059669" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Layered Concentric Financial Disks */}
          <circle cx="290" cy="230" r="195" fill="none" stroke="#059669" strokeWidth="24" opacity="0.1" />
          <circle cx="290" cy="230" r="155" fill="none" stroke="#10b981" strokeWidth="18" opacity="0.18" />
          <circle cx="290" cy="230" r="118" fill="none" stroke="#34d399" strokeWidth="12" opacity="0.3" />

          {/* Rotating Emerald Ring */}
          <motion.circle
            cx="290" cy="230" r="175"
            fill="none" stroke="#059669" strokeWidth="3.5" strokeDasharray="45 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "290px 230px" }}
          />

          {/* Floating Glass Metric Cards */}
          <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="40" y="60" width="190" height="50" rx="25" fill="#ffffff" stroke="#059669" strokeWidth="2" filter="url(#cinematicEmeraldLight)" />
            <text x="135" y="81" fill="#064e3b" fontSize="12" fontWeight="900" textAnchor="middle">📊 RETAIL LOANS</text>
            <text x="135" y="98" fill="#047857" fontSize="10.5" fontWeight="700" textAnchor="middle">82% Recovery Rate</text>
          </motion.g>

          <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
            <rect x="350" y="60" width="190" height="50" rx="25" fill="#ffffff" stroke="#047857" strokeWidth="2" filter="url(#cinematicEmeraldLight)" />
            <text x="445" y="81" fill="#064e3b" fontSize="12" fontWeight="900" textAnchor="middle">🚜 AUTO & HOME</text>
            <text x="445" y="98" fill="#047857" fontSize="10.5" fontWeight="700" textAnchor="middle">64% Portfolio Scale</text>
          </motion.g>

          {/* Central Emerald Sphere */}
          <g filter="url(#cinematicEmeraldLight)">
            <circle cx="290" cy="230" r="78" fill="url(#emeraldPrismLight)" stroke="#ffffff" strokeWidth="4" />
            <text x="290" y="224" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="1">FINANCIAL</text>
            <text x="290" y="242" fill="#a7f3d0" fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="2">GALAXY</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 9: TECHNOLOGY — "THE AI NEURAL BRAIN CORE"
  // ════════════════════════════════════════════════════════════════════════
  if (cat === 'technology') {
    return (
      <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
        <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(124,58,237,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="violetCoreLight" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="40%" stopColor="#a855f7" />
              <stop offset="80%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </radialGradient>

            <filter id="cinematicPurpleLight" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#7c3aed" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Synaptic Wave Lines */}
          <path d="M 40 110 C 180 10, 400 450, 540 330" stroke="#a855f7" strokeWidth="3" strokeDasharray="10 8" fill="none" opacity="0.6" />
          <path d="M 40 330 C 180 450, 400 10, 540 110" stroke="#0072bc" strokeWidth="3" strokeDasharray="10 8" fill="none" opacity="0.6" />

          {/* Floating AI Card */}
          <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="45" y="45" width="190" height="50" rx="25" fill="#ffffff" stroke="#a855f7" strokeWidth="2" filter="url(#cinematicPurpleLight)" />
            <text x="140" y="66" fill="#581c87" fontSize="12" fontWeight="900" textAnchor="middle">🧠 RISK SCORING AI</text>
            <text x="140" y="83" fill="#6b21a8" fontSize="10" fontWeight="700" textAnchor="middle">Predictive Segmentation</text>
          </motion.g>

          {/* Central AI Sphere */}
          <g filter="url(#cinematicPurpleLight)">
            <circle cx="290" cy="230" r="80" fill="url(#violetCoreLight)" stroke="#ffffff" strokeWidth="4" />
            <text x="290" y="224" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle" letterSpacing="1">AI NEURAL</text>
            <text x="290" y="242" fill="#e9d5ff" fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="2">BRAIN CORE</text>
          </g>
        </svg>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // ARTWORK 10: COMPANY — "THE 25-YEAR CONSTELLATION GALAXY"
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="w-full relative flex items-center justify-center pointer-events-none select-none">
      <svg className="w-full h-auto max-w-[440px] max-h-[350px] drop-shadow-[0_20px_40px_rgba(0,114,188,0.25)]" viewBox="0 0 580 460" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sapphireCoreLight" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="40%" stopColor="#38bdf8" />
            <stop offset="80%" stopColor="#0072bc" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>

          <filter id="cinematicSapphireLight" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0072bc" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Constellation Lines */}
        <polygon points="290,75 460,175 400,370 180,370 120,175" fill="none" stroke="#0072bc" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.6" />

        {/* Star Pods */}
        <motion.g animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity }}>
          <circle cx="290" cy="75" r="30" fill="#ffffff" stroke="#0072bc" strokeWidth="2.5" filter="url(#cinematicSapphireLight)" />
          <text x="290" y="81" fontSize="16" textAnchor="middle">🏛️</text>
          <text x="290" y="122" fill="#005a96" fontSize="11.5" fontWeight="900" textAnchor="middle">25+ YRS HERITAGE</text>
        </motion.g>

        <motion.g animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
          <circle cx="460" cy="175" r="30" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2.5" filter="url(#cinematicSapphireLight)" />
          <text x="460" y="181" fontSize="16" textAnchor="middle">🏢</text>
          <text x="460" y="222" fill="#6d28d9" fontSize="11.5" fontWeight="900" textAnchor="middle">19 REGIONAL HUBS</text>
        </motion.g>

        {/* Central Identity Sphere */}
        <g filter="url(#cinematicSapphireLight)">
          <circle cx="290" cy="230" r="65" fill="url(#sapphireCoreLight)" stroke="#ffffff" strokeWidth="4" />
          <text x="290" y="224" fill="#ffffff" fontSize="22" fontStyle="italic" fontWeight="900" textAnchor="middle" fontFamily="serif">SM</text>
          <text x="290" y="244" fill="#e0f2fe" fontSize="9.5" fontWeight="900" textAnchor="middle" letterSpacing="1">CONSTELLATION</text>
        </g>
      </svg>
    </div>
  );
}
