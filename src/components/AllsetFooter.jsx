import React from 'react';
import { ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

export default function AllsetFooter() {
  return (
    <footer className="py-16 bg-slate-50 border-t border-slate-200" id="footer">
      <div className="fg-wrap max-w-6xl mx-auto px-4">
        {/* Bento Footer Grid */}
        <div className="allset-footer-grid mb-12">
          {/* Card 1: Brand Info */}
          <div className="allset-footer-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-extrabold text-2xl text-slate-900 tracking-tight">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                  SM
                </span>
                SM Associates
              </div>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                South India's premier enterprise recovery operations partner. Backed by technology, compliance, and 25+ years of field excellence.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400">
              info@smassociates.com <br />
              SM Associates © 2026. All rights reserved.
            </div>
          </div>

          {/* Card 2: Quick Navigation */}
          <div className="allset-footer-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
              <ul className="space-y-3 mt-4 text-sm font-semibold text-slate-700">
                <li><a href="#hero" className="hover:text-indigo-600 transition-colors">Home</a></li>
                <li><a href="#calculator" className="hover:text-indigo-600 transition-colors">Calculator</a></li>
                <li><a href="#bento-workflow" className="hover:text-indigo-600 transition-colors">How It Works</a></li>
                <li><a href="#solution-comparison" className="hover:text-indigo-600 transition-colors">Benefits & Comparison</a></li>
                <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Card 3: Enterprise Action (Dark Card) */}
          <div className="allset-footer-card dark flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">For Lenders & Banks</span>
              <h4 className="text-2xl font-extrabold text-white mt-2 leading-snug">
                Offer enterprise recovery for your institution
              </h4>
              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                Connect with our resolution team for bespoke portfolio audit & deployment strategy across South India.
              </p>
            </div>

            <div className="mt-8">
              <a className="allset-btn allset-btn-primary w-full justify-center !bg-indigo-600 text-sm" href="tel:+914424350111">
                <PhoneCall size={14} /> Speak with us <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Micro Copyright Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-indigo-600" /> ISO/IEC 27001 Certified · RBI Compliant Operations
          </div>
          <div className="flex gap-6 text-slate-500">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#compliance" className="hover:underline">Compliance Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
