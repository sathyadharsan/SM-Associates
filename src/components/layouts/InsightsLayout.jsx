import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronRight,
  FileText,
  Gauge,
  LineChart,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudiesSection from '../../sections/CaseStudiesSection';

const categories = [
  { name: 'All', icon: Sparkles },
  { name: 'Blog', icon: BookOpen },
  { name: 'Case Studies', icon: Target },
  { name: 'Whitepapers', icon: FileText },
  { name: 'Industry Reports', icon: BarChart3 },
  { name: 'Guides', icon: Check },
];

const articles = [
  { title: 'Recovery Analytics for Modern Enterprises', summary: 'A practical framework for turning portfolio signals into accountable recovery action.', category: 'Blog', date: '24 July 2026', time: '7 min read', icon: LineChart, accent: 'from-[#0072BC] to-[#0B1F3A]', span: 'md:col-span-2' },
  { title: 'Future of Enterprise Recovery Operations', summary: 'The operating principles that help institutions scale with control and clarity.', category: 'Blog', date: '16 July 2026', time: '6 min read', icon: Activity, accent: 'from-[#123A63] to-[#0B1F3A]', span: '' },
  { title: 'AI-Assisted Portfolio Prioritisation', summary: 'How human-supervised intelligence supports account allocation and next-best action.', category: 'Industry Reports', date: '28 June 2026', time: '8 min read', icon: BrainCircuit, accent: 'from-[#0B1F3A] to-[#1B628C]', span: '' },
  { title: 'Compliance-Driven Recovery Operations', summary: 'A reference framework for audit readiness, policy control and escalation evidence.', category: 'Whitepapers', date: '10 June 2026', time: '9 min read', icon: ShieldCheck, accent: 'from-[#0E4B72] to-[#0B1F3A]', span: '' },
  { title: 'Customer Communication During Recovery', summary: 'Respectful, transparent engagement that supports sustainable resolution outcomes.', category: 'Guides', date: '19 June 2026', time: '6 min read', icon: Users, accent: 'from-[#166A91] to-[#0B1F3A]', span: '' },
  { title: 'Reducing Portfolio Risk Through Data Intelligence', summary: 'A decision model for identifying risk concentration before it affects performance.', category: 'Case Studies', date: '31 May 2026', time: '7 min read', icon: Gauge, accent: 'from-[#0072BC] to-[#16456A]', span: 'md:col-span-2' },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[560px] py-6 sm:py-10">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 560 410" fill="none">
        <path d="M60 287C138 287 170 174 267 174S372 248 495 248" stroke="#0072BC" strokeOpacity=".2" strokeWidth="1.5" strokeDasharray="5 6" />
        <path d="M72 84C170 84 210 174 285 174S398 98 488 98" stroke="#0072BC" strokeOpacity=".16" strokeWidth="1.5" strokeDasharray="5 6" />
      </svg>
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(11,31,58,.12)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-slate-400">Portfolio intelligence</p><p className="mt-1 text-sm font-semibold text-[#091E42]">Recovery command view</p></div><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5FC] text-[#0072BC]"><LineChart className="h-5 w-5" /></div></div>
        <div className="mt-7 grid grid-cols-[1.25fr_.75fr] gap-4"><div className="rounded-2xl border border-slate-100 bg-slate-50 p-4"><div className="flex h-24 items-end gap-2">{[36, 52, 43, 69, 61, 84, 76].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-[#0072BC] opacity-[0.28] last:opacity-100" />)}</div><div className="mt-3 flex justify-between text-[10px] font-medium text-slate-400"><span>Risk analytics</span><span className="text-[#0072BC]">+18.2%</span></div></div><div className="space-y-3"><div className="rounded-2xl bg-[#091E42] p-3 text-white"><p className="text-[9px] uppercase tracking-wider text-white/55">Priority score</p><p className="mt-1 text-xl font-semibold">86.4</p></div><div className="rounded-2xl border border-slate-100 bg-white p-3"><p className="text-[9px] uppercase tracking-wider text-slate-400">Compliance</p><p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#091E42]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Within policy</p></div></div></div>
      </motion.div>
      <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 left-0 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:-left-5"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">SARFAESI timeline</p><p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#091E42]"><Check className="h-3.5 w-3.5 text-[#0072BC]" /> Governed workflow</p></motion.div>
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-0 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:-right-5"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">AI recommendation</p><p className="mt-1 text-sm font-semibold text-[#0072BC]">Route: Specialist</p></motion.div>
    </div>
  );
}

export function InsightsLayout() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const reduceMotion = useReducedMotion();
  const filteredArticles = activeCategory === 'All' ? articles : articles.filter((article) => article.category === activeCategory);
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' };
  const subscribe = (event) => { event.preventDefault(); setSubscribed(true); event.currentTarget.reset(); };

  return (
    <main className="overflow-hidden bg-white text-[#091E42]">
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-[#FAFBFC] py-28 sm:py-36 lg:min-h-[88svh] lg:py-20">
        <div className="absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(0,114,188,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,188,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute -right-32 top-0 -z-10 h-[620px] w-[620px] rounded-full bg-[#DCEFFA] blur-3xl" />
        <div className="mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={transition}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE8F6] bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#0072BC]"><span className="h-1.5 w-1.5 rounded-full bg-[#0072BC]" /> Knowledge hub</span>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.07em] text-[#091E42] sm:text-6xl lg:text-7xl">Enterprise Recovery <span className="text-[#0B5FFF]">Insights</span></h1>
            <p className="mt-7 max-w-[680px] text-lg leading-8 text-[#52606D] sm:text-xl sm:leading-9">Expert perspectives, operational best practices and recovery intelligence for enterprise financial institutions.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#latest-insights" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0072BC] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,114,188,.2)] transition hover:scale-[1.02] hover:bg-[#005D99]">Explore insights <ArrowRight className="h-4 w-4" /></a><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-base font-semibold text-[#091E42] backdrop-blur transition hover:border-[#0072BC] hover:text-[#0072BC]">Talk to an expert <ChevronRight className="h-4 w-4" /></Link></div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-6 text-xs font-semibold text-[#52606D]"><span className="flex items-center gap-1.5"><Scale className="h-3.5 w-3.5 text-[#0072BC]" /> Banks</span><span className="flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5 text-[#0072BC]" /> NBFCs</span><span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#0072BC]" /> Housing Finance</span><span className="flex items-center gap-1.5"><BrainCircuit className="h-3.5 w-3.5 text-[#0072BC]" /> Fintech</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}><HeroVisual /></motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#0072BC]">Featured insight</p><motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} variants={reveal} transition={transition} className="mt-7 grid overflow-hidden rounded-[30px] border border-slate-200 bg-[#FBFCFE] shadow-[0_18px_60px_rgba(11,31,58,.06)] lg:grid-cols-[1.2fr_.8fr]"><div className="group relative min-h-[340px] overflow-hidden bg-[#091E42] p-7 sm:p-10"><div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:42px_42px]" /><div className="relative flex h-full flex-col justify-between"><div className="flex flex-wrap gap-2"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">Editor's pick</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80">2026 outlook</span></div><div className="rounded-2xl border border-white/10 bg-white/[.07] p-5 backdrop-blur-sm"><div className="flex h-28 items-end gap-3">{[38, 46, 35, 66, 59, 82, 72, 91].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="flex-1 origin-bottom rounded-t bg-[#7CD1F6] transition-transform duration-500 group-hover:scale-y-110" />)}</div><div className="mt-4 flex items-center justify-between text-xs text-white/65"><span>Portfolio performance signal</span><span className="font-semibold text-white">Actionable intelligence</span></div></div></div></div><div className="flex flex-col p-7 sm:p-10 lg:p-12"><div className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-semibold text-slate-500"><span className="text-[#0072BC]">RECOVERY ANALYTICS</span><span>18 July 2026</span><span>8 min read</span></div><h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-.045em] text-[#091E42] sm:text-4xl">How Analytics Improves Enterprise Recovery Outcomes</h2><p className="mt-5 leading-7 text-[#52606D]">Analytics gives recovery leaders a clearer view of account behaviour, opportunity and operating risk—so teams can direct action with greater precision, consistency and governance.</p><div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-7"><div><p className="text-xs font-semibold text-[#091E42]">SM Associates Research</p><p className="mt-1 text-[11px] text-slate-500">Enterprise Intelligence Desk</p></div><a href="#latest-insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0072BC] transition hover:gap-3">Read article <ArrowRight className="h-4 w-4" /></a></div></div></motion.article></div></section>

      <section id="latest-insights" className="border-y border-slate-200 bg-[#FAFBFC] py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#0072BC]">Explore the library</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] text-[#091E42] sm:text-4xl">Latest insights</h2><p className="mt-4 leading-7 text-[#52606D]">A focused library of research, perspectives and practical guidance for recovery leaders.</p></div><div role="tablist" aria-label="Insight categories" className="mt-9 flex max-w-full gap-1 overflow-x-auto rounded-full border border-white bg-white/75 p-1.5 shadow-[0_10px_26px_rgba(11,31,58,.07)] backdrop-blur-xl scrollbar-hide">{categories.map(({ name, icon: Icon }) => <button key={name} role="tab" aria-selected={activeCategory === name} onClick={() => setActiveCategory(name)} className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition ${activeCategory === name ? 'bg-[#0072BC] text-white shadow-[0_8px_18px_rgba(0,114,188,.2)]' : 'text-slate-600 hover:text-[#0072BC]'}`}><Icon className="h-3.5 w-3.5" />{name}</button>)}</div><motion.div layout className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">{filteredArticles.map((article) => { const Icon = article.icon; return <motion.article layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={transition} key={article.title} className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#9ED7F0] hover:shadow-[0_18px_36px_rgba(11,31,58,.08)] ${article.span}`}><div className={`relative h-40 bg-gradient-to-br ${article.accent} p-5`}><div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,.75)_1px,transparent_1px)] [background-size:16px_16px]" /><div className="relative flex h-full items-end justify-between"><span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">{article.category}</span><Icon className="h-10 w-10 text-white/90 transition duration-500 group-hover:scale-110" /></div></div><div className="flex flex-1 flex-col p-6"><p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{article.time} · {article.date}</p><h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-.025em] text-[#091E42]">{article.title}</h3><p className="mt-3 text-sm leading-6 text-[#52606D]">{article.summary}</p><a href="#contact-insights" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0072BC] transition group-hover:gap-2.5">Read more <ArrowRight className="h-4 w-4" /></a></div></motion.article>; })}</AnimatePresence></motion.div></div></section>

      <CaseStudiesSection />

      <section id="contact-insights" className="bg-[#091E42] py-20 text-white sm:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#8DCBE9]">Enterprise intelligence, delivered</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">Stay ahead of recovery trends.</h2><p className="mt-5 max-w-lg leading-7 text-slate-300">Receive focused recovery insights, industry intelligence and compliance updates. When you need tailored guidance, our specialists are ready to help.</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8DCBE9]">Talk to an expert <ArrowRight className="h-4 w-4" /></Link></div><form onSubmit={subscribe} className="rounded-3xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-white">Name<input required name="name" className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#8DCBE9]" /></label><label className="text-xs font-semibold text-white">Company<input required name="company" className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-sm text-white outline-none focus:border-[#8DCBE9]" /></label></div><label className="mt-4 block text-xs font-semibold text-white">Business email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-sm text-white outline-none focus:border-[#8DCBE9]" /></label><button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#091E42] transition hover:bg-[#DDF2FC]"><Mail className="h-4 w-4" /> {subscribed ? 'You are subscribed' : 'Subscribe to insights'}</button></form></div></section>
    </main>
  );
}
