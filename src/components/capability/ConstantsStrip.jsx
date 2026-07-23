import React from 'react';
import { ShieldCheck, Building2, BarChart3 } from 'lucide-react';
import { deliveryModels, complianceControls, reportingCapabilities } from '../../data/siteWideCapabilities';

// The three site-wide-constant dimensions (Delivery Models, Compliance
// Controls, Reporting & Analytics) that are true of every service, per the
// approved IA blueprint's "Site-Wide Constant Layer." Shown once, compactly,
// near the hero on every capability page — never repeated in full per page,
// since that would reintroduce the "explaining the same thing 38 times"
// problem the blueprint exists to remove.
const GROUPS = [
  { icon: Building2, label: 'How We Deliver', items: deliveryModels.slice(0, 3).map((d) => d.title) },
  { icon: ShieldCheck, label: 'Compliance', items: complianceControls.slice(0, 3) },
  { icon: BarChart3, label: 'Reporting', items: reportingCapabilities.slice(0, 2) },
];

export default function ConstantsStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      {GROUPS.map((g) => {
        const Icon = g.icon;
        return (
          <div key={g.label} className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#0072bc]">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <h5 className="font-mono text-[9.5px] font-bold uppercase tracking-widest text-slate-400">{g.label}</h5>
              <ul className="mt-1 space-y-0.5">
                {g.items.map((item) => (
                  <li key={item} className="text-[12px] text-slate-600 leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
