import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const ASSET_CLASSES = [
  {
    num: '01',
    title: 'Property Recovery',
    tags: ['RESIDENTIAL', 'COMMERCIAL', 'LAND'],
    items: [
      'Residential Flats & Apartments',
      'Independent Houses & Villas',
      'Commercial Office Buildings',
      'Residential & Industrial Land Plots'
    ]
  },
  {
    num: '02',
    title: 'Vehicle Recovery',
    tags: ['CARS & SUVS', 'TRUCKS', 'TRACTORS'],
    items: [
      'Cars, Sedans & SUVs',
      'Motorcycles & Scooters',
      'Commercial Trucks & Buses',
      'Agricultural Tractors & JCBs'
    ]
  },
  {
    num: '03',
    title: 'Financial & Credit Recovery',
    tags: ['HOME LOANS', 'MSME', 'NPA'],
    items: [
      'Home Loans & Loan Against Property',
      'Personal & Unsecured Credit',
      'MSME & Business Working Capital',
      'Credit Cards & Written-Off NPA Portfolios'
    ]
  },
  {
    num: '04',
    title: 'Industrial Asset Recovery',
    tags: ['MACHINERY', 'EQUIPMENT', 'PLANT'],
    items: [
      'Factory Machinery & Manufacturing Lines',
      'Heavy Industrial Equipment',
      'Construction Machinery & Tools',
      'Processing & Tooling Assets'
    ]
  },
  {
    num: '05',
    title: 'Digital & Consumer Asset Recovery',
    tags: ['IT HARDWARE', 'MOBILES', 'POS'],
    items: [
      'Laptops & Desktop Workstations',
      'Mobile Phones & Tablets',
      'Networking Routers & IT Hardware',
      'POS Terminals & Smart TVs'
    ]
  },
  {
    num: '06',
    title: 'Commercial & Trade Recovery',
    tags: ['INVENTORY', 'RECEIVABLES', 'ASSETS'],
    items: [
      'Warehouse Inventory & Stock',
      'Retail Stock & Business Assets',
      'Office Furniture & IT Equipment',
      'Trade Receivables & Corporate Claims'
    ]
  }
];

function AssetAccordionCard({ asset, isOpen, onToggle }) {
  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${
      isOpen 
        ? 'bg-white border-[#0072bc]/40 shadow-md' 
        : 'bg-white/95 border-slate-200/90 shadow-xs hover:border-slate-300'
    }`}>
      {/* Header Button Row (Compact) */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 text-left cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-sm sm:text-base font-bold text-[#059669] shrink-0">
            {asset.num}
          </span>
          <h3 className="font-sans text-base sm:text-lg font-extrabold text-slate-900 tracking-tight truncate">
            {asset.title}
          </h3>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 font-sans">
          {/* Tags (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5 font-sans">
            {asset.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9.5px] font-mono font-bold text-[#0072bc] bg-[#0072bc]/8 px-2.5 py-0.5 rounded-full border border-[#0072bc]/15 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Toggle Icon */}
          <div className={`p-1.5 rounded-full transition-colors ${isOpen ? 'bg-slate-100 text-[#0072bc]' : 'text-slate-400'}`}>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {/* Expanded Items Content Grid (Compact) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-100 bg-slate-50/60 px-5 py-3.5 font-sans"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
              {asset.items.map((item) => (
                <div key={item} className="flex items-center gap-2 font-sans">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#059669] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EndToEndPlatformArchitectureSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="capabilities" className="bg-[#fafbfc] border-t border-b border-slate-200/90 relative overflow-hidden font-sans py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Compact Section Header */}
        <div className="fg-section-header">
          <span className="fg-section-eyebrow">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0072bc]" />
            REAL BUSINESS RECOVERY COVERAGE
          </span>
          <h2 className="fg-section-title">
            Recover Across Every Major Asset Class
          </h2>
          <p className="fg-section-subtitle">
            What types of assets, loans, portfolios, and collateral can SM Associates recover?
          </p>
        </div>

        {/* Compact Accordion Stacked Cards (Fitted inside 1 Viewport) */}
        <div className="space-y-2.5">
          {ASSET_CLASSES.map((asset, index) => (
            <AssetAccordionCard
              key={asset.title}
              asset={asset}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Compact Supporting Technology Banner */}
        <div className="mt-5 p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between gap-3 text-left shadow-xs">
          <div className="flex items-center gap-2.5">
            <Zap className="h-4 w-4 text-[#0072bc] shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-700 font-mono leading-tight">
              Supporting Technology Rails: AI Voicebots · GPS Field Dispatch · Doorstep UPI QR · SARFAESI Legal Framework
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#059669] bg-[#059669]/10 px-2.5 py-0.5 rounded-full border border-[#059669]/20 shrink-0">
            RBI COMPLIANT
          </span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#0072bc]" />
          <span>Pan-South India Operations · 25+ Years Track Record</span>
        </div>

      </div>
    </section>
  );
}
