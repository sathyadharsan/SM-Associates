import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, FolderKanban, FileBarChart, MapPin, FileText, CheckCircle2, TrendingUp, Sliders } from 'lucide-react';

const CHART = [38, 52, 41, 67, 58, 74, 88];

const OVERVIEW_KPIS = [
  { v: '₹249Cr', k: 'Target Resolution' },
  { v: '1,284', k: 'Active Field Cases' },
  { v: '9.2d', k: 'Avg. TAT Speed' },
];

const OVERVIEW_CASES = [
  { id: 'CASE-4471', stage: 'Field Visit', status: 'In Progress', tone: 'amber' },
  { id: 'CASE-4458', stage: 'Legal Notice', status: 'Active', tone: 'blue' },
  { id: 'CASE-4502', stage: 'Verification', status: 'Pending', tone: 'gray' },
  { id: 'CASE-4439', stage: 'Settlement', status: 'Resolved', tone: 'green' },
];

const CASE_BREAKDOWN = [
  { v: '312', k: 'Verification' },
  { v: '248', k: 'Field Visit' },
  { v: '96', k: 'Legal Stage' },
  { v: '628', k: 'Resolved' },
];

const ALL_CASES = [
  ...OVERVIEW_CASES,
  { id: 'CASE-4486', stage: 'Field Visit', status: 'In Progress', tone: 'amber' },
  { id: 'CASE-4395', stage: 'SARFAESI', status: 'Active', tone: 'blue' },
];

const REPORTS = [
  { name: 'Monthly Recovery Summary', meta: 'Generated 1 Jun 2026 · PDF' },
  { name: 'Field Officer Performance', meta: 'Generated 1 Jun 2026 · PDF' },
  { name: 'Compliance Audit Trail', meta: 'Generated 28 May 2026 · PDF' },
  { name: 'Portfolio Resolution Trend', meta: 'Generated 25 May 2026 · XLSX' },
];

const TABS = [
  { label: 'Overview', Icon: LayoutDashboard },
  { label: 'Cases', Icon: FolderKanban },
  { label: 'Reports', Icon: FileBarChart },
];

export default function HeroDashboardVisual() {
  const [grown, setGrown] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const userInteractedRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGrown(true);
          intervalRef.current = setInterval(() => {
            if (!userInteractedRef.current) {
              setActiveTab((t) => (t + 1) % TABS.length);
            }
          }, 4500);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleTabClick = (i) => {
    userInteractedRef.current = true;
    clearInterval(intervalRef.current);
    setActiveTab(i);
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Main Dashboard Visual Container */}
      <div className="dbv6 shadow-2xl border border-slate-200 rounded-3xl overflow-hidden bg-white" ref={ref}>
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-slate-200 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase font-semibold">
            SM RECOVERY OS v6
          </span>
          <span className="text-[11px] bg-indigo-500/30 text-indigo-200 px-2.5 py-0.5 rounded-md font-mono font-bold">
            LIVE DEMO
          </span>
        </div>

        {/* Feature Badges Bar (Matching Video Frame 00:01) */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            <Sliders size={12} className="text-indigo-600" /> CUSTOMIZABLE
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            <TrendingUp size={12} className="text-emerald-600" /> FLEXIBLE
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            <CheckCircle2 size={12} className="text-blue-600" /> FULL CONTROL
          </span>
        </div>

        {/* Tabs Bar */}
        <div className="dbv6-tabs border-b border-slate-200 bg-white p-2">
          {TABS.map(({ label, Icon }, i) => (
            <button key={label} type="button" className={activeTab === i ? 'on' : ''} onClick={() => handleTabClick(i)}>
              <Icon size={13} />{label}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="p-5 sm:p-6">
            <div className="dbv6-kpis">
              {OVERVIEW_KPIS.map((k) => (
                <div className="dbv6-kpi" key={k.k}>
                  <div className="v text-indigo-600 font-extrabold">{k.v}</div>
                  <div className="k">{k.k}</div>
                </div>
              ))}
            </div>

            {/* Dynamic Trend Chart */}
            <div className="dbv6-chart my-5">
              {CHART.map((h, i) => (
                <i key={i} style={{ height: grown ? `${h}%` : '4%', transitionDelay: `${i * 60}ms` }} />
              ))}
            </div>

            <div className="dbv6-table mt-4">
              {OVERVIEW_CASES.map((c) => (
                <div className="dbv6-row" key={c.id}>
                  <span className="dbv6-case">{c.id}</span>
                  <span className="dbv6-stage">{c.stage}</span>
                  <span className={`dbv6-status ${c.tone}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="p-5 sm:p-6">
            <div className="dbv6-kpis">
              {CASE_BREAKDOWN.map((k) => (
                <div className="dbv6-kpi" key={k.k}>
                  <div className="v">{k.v}</div>
                  <div className="k">{k.k}</div>
                </div>
              ))}
            </div>
            <div className="dbv6-table" style={{ marginTop: 4 }}>
              {ALL_CASES.map((c) => (
                <div className="dbv6-row" key={c.id}>
                  <span className="dbv6-case">{c.id}</span>
                  <span className="dbv6-stage">{c.stage}</span>
                  <span className={`dbv6-status ${c.tone}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="p-5 sm:p-6">
            <div className="dbv6-table" style={{ marginTop: 4 }}>
              {REPORTS.map((r) => (
                <div className="dbv6-row dbv6-report-row" key={r.name}>
                  <span className="dbv6-report-icon"><FileText size={14} /></span>
                  <div>
                    <div className="dbv6-stage" style={{ color: 'var(--ink)', fontWeight: 600 }}>{r.name}</div>
                    <div className="dbv6-report-meta">{r.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="dbv6-coverage bg-slate-50 border-t border-slate-200 p-3.5 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-semibold text-slate-700">
            <MapPin size={13} className="text-indigo-600" /> 5 States · 19 Branches Active
          </span>
          <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ● Geotagged Field Network
          </span>
        </div>
      </div>
    </div>
  );
}
