import { Link } from 'react-router-dom';
import { Shield, Phone, FileCheck, ArrowUpRight } from 'lucide-react';

export default function FloatingActionDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-3 text-xs font-bold">
        <span className="flex items-center gap-1.5 text-slate-300 px-2 border-r border-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#0072bc] animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider text-slate-400">SM EXECUTIVE DOCK</span>
        </span>

        <Link
          to="/contact"
          className="flex items-center gap-1.5 hover:text-[#0072bc] transition-colors text-slate-200 px-2"
        >
          <FileCheck size={14} className="text-[#0072bc]" />
          <span>Request Audit</span>
        </Link>

        <Link
          to="/contact"
          className="flex items-center gap-1.5 hover:text-[#0072bc] transition-colors text-slate-200 px-2"
        >
          <Shield size={14} className="text-[#0072bc]" />
          <span>Verify Agent ID</span>
        </Link>

        <a
          href="tel:+919840000000"
          className="bg-[#0072bc] hover:bg-[#005f9e] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Phone size={13} />
          <span>Direct Connect</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
