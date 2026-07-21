import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal,
  Code,
  Shield,
  Layers,
  Activity,
  Sparkles,
  Database,
  Lock,
  Cpu
} from 'lucide-react';

const fUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 15 } }
};

export function PlatformLayout({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const payloadSnippets = [
    {
      label: "Ingest Cases API",
      method: "POST",
      url: "/api/v1/cases",
      body: `{
  "client_id": "sm_bank_axis_01",
  "product_type": "auto_loan",
  "delinquency_bucket": "NPA_Sec13",
  "borrower_details": {
    "name": "Anonymized Defaulter",
    "last_known_address": "Chennai, TN"
  }
}`
    },
    {
      label: "Webhook Dispatch Event",
      method: "EVENT",
      url: "cases.dispatched",
      body: `{
  "event_id": "evt_998a12bc",
  "timestamp": "2026-06-22T22:07:00Z",
  "case_id": "case_10293",
  "field_officer": {
    "id": "fo_4492",
    "status": "dispatched",
    "coordinates": "13.0827, 80.2707"
  }
}`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(payloadSnippets[activeTab].body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden font-inter">
      {/* Dark grids and neon glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative pt-44 pb-24 bg-slate-950 border-b border-slate-900 text-left overflow-hidden">
        {/* Code grids and neon glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px] animate-pulse" />
          <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px] animate-pulse" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                {content.eyebrow}
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sora leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                {content.description}
              </p>
              <div className="pt-2 flex gap-4">
                <a href="#playground" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-[1.02]">
                  Launch Developer Sandbox <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right side live diagnostics console */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-5 bg-slate-900/60 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Operations Command Telemetry</span>
                </div>
                <div className="rounded bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-400 font-mono">
                  Online
                </div>
              </div>

              {/* Key Metrics list */}
              <div className="space-y-3 font-mono text-xs text-left mb-4">
                {content.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500">{stat.label}</span>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Logs terminal box */}
              <div className="bg-slate-950/80 border border-white/5 rounded-xl p-4 font-mono text-[9px] text-left text-slate-500 space-y-1 max-h-[100px] overflow-hidden">
                <div>&gt; Connection establishing... OK</div>
                <div>&gt; Database sync coordinate feed... OK</div>
                <div className="text-emerald-400">&gt; Webhook receiver listener active.</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM OVERVIEW */}
      <section className="py-20 bg-[#050914] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Unified Console</span>
          <h3 className="text-2xl font-bold font-sora">Stressed Asset Operating Engine</h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            We digitize portfolio uploads, ground officer route maps, caller voice recordings, and secured repossession metrics. Lenders manage enpanellments SLAs and check transaction audits under a bank-grade console.
          </p>
        </div>
      </section>

      {/* SECTION 3: SYSTEM ARCHITECTURE */}
      <section className="py-20 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Core System Architecture</span>
              <h3 className="text-2xl font-bold font-sora">Lending Books API Connectivity</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Our database coordinates daily SFTP file imports and REST endpoints to trigger outbound call queues and branch dispatch.
              </p>
            </div>
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 text-xs font-mono space-y-2">
              <div className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> OAuth2 Auth Connection</div>
              <div className="flex gap-2 items-center"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 256-bit DB Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SYSTEM FEATURES */}
      <section className="py-20 bg-[#050914] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Operations Console</span>
            <h2 className="text-3xl font-bold font-sora mt-2">Platform Infrastructure Modules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <div className="text-blue-400"><Cpu className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Workflow Automation</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Configuring dialer queue assignments and notice serving timelines.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <div className="text-blue-400"><Activity className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Field Route Tracking</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Geofenced field officers visit check-in logs and witness photo records.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <div className="text-blue-400"><Database className="h-5 w-5" /></div>
              <h4 className="font-bold text-sm font-sora">Compliance Auditor Log</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Auto auditing call recordings to match RBI Fair practices conduct.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DEVELOPER API PLAYGROUND */}
      <section className="py-20 bg-[#030712] border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Sandbox Environment</span>
              <h3 className="text-3xl font-bold font-sora">Interactive Developer Desk</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect and ingest distressed portfolios. Select tabs to test REST API connections and schema outputs.
              </p>
              <div className="flex flex-col gap-2 pt-4">
                {payloadSnippets.map((snip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-xl border text-xs font-mono text-left transition-all ${
                      activeTab === idx 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md' 
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {snip.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-2xl text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                  <span>{payloadSnippets[activeTab].method}</span>
                  <span>{payloadSnippets[activeTab].url}</span>
                  <button onClick={handleCopy} className="text-blue-400 hover:underline hover:text-blue-300 font-bold">
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>
              </div>
              <pre className="text-xs text-emerald-400 font-mono overflow-x-auto select-all max-h-[200px]">
                {payloadSnippets[activeTab].body}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DATA SECURITY */}
      <section className="py-20 bg-[#050914] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Security Vault</span>
          <h3 className="text-2xl font-bold font-sora flex items-center gap-2">
            <Lock className="h-5 w-5 text-amber-500" /> ISO 27001 Bank-Grade Data Custody
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            We isolate borrower transaction records and verification files coordinates inside secure, encrypted database tables. No data is stored outside pre-vetted banking firewalls.
          </p>
        </div>
      </section>

      {/* SECTION 7: AUDIT AND LOGGING */}
      <section className="py-20 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Auditable Logs</span>
          <h3 className="text-2xl font-bold font-sora">Continuous Audit Trails</h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Outbound calling hour rules are geofenced automatically. Every ground representative geolocated visit check is recorded with timing and witness logs.
          </p>
        </div>
      </section>

      {/* SECTION 8: INGESTION PIPELINE */}
      <section className="py-20 bg-[#050914] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Ingestion Sync</span>
          <h3 className="text-2xl font-bold font-sora mt-2">SFTP and REST Connections</h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Lenders set up daily automated batch case files uploads via secure SSH FTP lines. Status updates sync back to core underwriting or collection desks daily.
          </p>
        </div>
      </section>

      {/* SECTION 9: SLA PERFORMANCE METRICS */}
      <section className="py-20 bg-[#030712] border-b border-slate-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Performance Yields</span>
              <h3 className="text-2xl font-bold font-sora">Blended Resolution Metrics</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                We maintain high-velocity TAT loops for pre-disbursal checks (average 48 Hours) and coordinate symbolic possessions or police liaisons under strict statutory timelines.
              </p>
            </div>
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 text-xs font-mono space-y-3">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>CPV TAT</span><span>48 Hours</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>SARFAESI Timeline</span><span>100% Compliant</span></div>
              <div className="flex justify-between"><span>Resolution SLA</span><span>92% average</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: SYSTEM COMPLIANCE & BANK AUDITS */}
      <section className="py-16 bg-[#0a1128] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold font-sora text-amber-400">Governance Vetting Audits</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">RBI Fair Practices Compliant</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">DRA certified representatives</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">Data Custody Audited</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: CLIENT TESTIMONIALS */}
      <section className="py-20 bg-[#050914] border-t border-b border-slate-900 text-left">
        <div className="mx-auto max-w-4xl px-4 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">Partners Feedback</span>
          <p className="italic text-slate-300 text-sm md:text-base leading-relaxed">
            "Ingesting our auto loan default book coordinates directly to SM Associates branch dispatch desks minimized local eviction delays and cleared NPAprovisioning buckets."
          </p>
          <div className="text-xs font-bold text-white font-mono">— Nationalized Bank Risk Committee</div>
        </div>
      </section>

      {/* SECTION 12: TRIAL / SANDBOX CTA */}
      <section className="py-20 bg-[#030712]">
        <div className="mx-auto max-w-4xl px-4 text-center bg-blue-600 rounded-[32px] p-12 space-y-6 shadow-2xl">
          <h2 className="text-3xl font-extrabold font-sora text-white">Integrate Our Operations Infrastructure</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm leading-relaxed">
            Request credentials packages or sandbox API access tokens to preview distressed asset management dashboards.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-600 shadow-md hover:bg-blue-50 transition-all hover:scale-[1.02]">
            Request Sandbox Access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
