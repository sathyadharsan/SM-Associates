import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, FolderKanban, FileBarChart, MapPin, FileText } from 'lucide-react';

// Mock data definitions
const CHART = [38, 52, 41, 67, 58, 74, 63];

const OVERVIEW_KPIS = [
  { v: '1,284', k: 'Active Cases' },
  { v: '47', k: 'Resolved Today' },
  { v: '9.2d', k: 'Avg. TAT' },
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
    <div className="dbv6" ref={ref}>
      <div className="dbv6-topbar">
        <span className="dbv6-dot" /> <span className="dbv6-dot" /> <span className="dbv6-dot" />
        <span className="dbv6-title">Recovery OS</span>
      </div>

      <div className="dbv6-tabs">
        {TABS.map(({ label, Icon }, i) => (
          <button key={label} type="button" className={activeTab === i ? 'on' : ''} onClick={() => handleTabClick(i)}>
            <Icon size={13} />{label}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <>
          <div className="dbv6-kpis">
            {OVERVIEW_KPIS.map((k) => (
              <div className="dbv6-kpi" key={k.k}>
                <div className="v">{k.v}</div>
                <div className="k">{k.k}</div>
              </div>
            ))}
          </div>
          <div className="dbv6-chart">
            {CHART.map((h, i) => (
              <i key={i} style={{ height: grown ? `${h}%` : '4%', transitionDelay: `${i * 60}ms` }} />
            ))}
          </div>
          <div className="dbv6-table">
            {OVERVIEW_CASES.map((c) => (
              <div className="dbv6-row" key={c.id}>
                <span className="dbv6-case">{c.id}</span>
                <span className="dbv6-stage">{c.stage}</span>
                <span className={`dbv6-status ${c.tone}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 1 && (
        <>
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
        </>
      )}

      {activeTab === 2 && (
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
      )}

      <div className="dbv6-coverage">
        <MapPin size={13} /> 5 States · 19 Branches Live
      </div>
    </div>
  );
}
