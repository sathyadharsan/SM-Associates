import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ChevronDown, Building2 } from 'lucide-react';
import { officeGroups, mapsUrl } from '../../data/contactOfficesData';

function CopyBtn({ value }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-semibold text-slate-500 transition hover:border-brand-400 hover:text-brand-600"
      title="Copy address"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-brand-500" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function OfficeCard({ office, city, state, isHQ }) {
  return (
    <div
      className={`relative rounded-2xl border p-5 transition hover:shadow-soft ${
        isHQ ? 'border-brand-500/50 bg-gradient-to-br from-blue-50/70 to-white' : 'border-slate-200 bg-white'
      }`}
    >
      {isHQ && (
        <span className="absolute -top-3 left-5 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft">
          Head Office
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-sora text-[15px] font-bold text-slate-900">{office.name}</p>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-400">{office.code} · {city} · {state}</p>
        </div>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isHQ ? 'bg-brand-500/15 text-brand-500' : 'bg-brand-50 text-brand-500'}`}>
          <Building2 className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{office.address}</p>
      {office.landmark && <p className="mt-1 text-[11.5px] italic text-slate-400">{office.landmark}</p>}

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
        <a
          href={mapsUrl(office.address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-brand-600"
        >
          <Navigation className="h-3.5 w-3.5" /> Directions
        </a>
        <CopyBtn value={office.address} />
      </div>
    </div>
  );
}

function StateGroup({ group, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const officeCount = group.cities.reduce((n, c) => n + c.offices.length, 0);

  return (
    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="font-sora text-lg font-bold text-slate-900">{group.state}</p>
            <p className="text-[12px] font-semibold text-slate-400">{officeCount} office{officeCount > 1 ? 's' : ''} · {group.cities.length} cit{group.cities.length > 1 ? 'ies' : 'y'}</p>
          </div>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-5 border-t border-slate-100 px-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.cities.flatMap((city) =>
                city.offices.map((office) => (
                  <OfficeCard
                    key={office.code}
                    office={office}
                    city={city.city}
                    state={group.state}
                    isHQ={office.code === 'HO'}
                  />
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function OfficeDirectory() {
  return (
    <section className="relative bg-white py-20 sm:py-24" id="offices">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-500">Our Offices</span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">20 offices, six states, one operating standard</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
            Our Chennai headquarters anchors a network of 19 branch offices across South India, Telangana, Andhra Pradesh and Puducherry.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {officeGroups.map((group, i) => (
            <motion.div
              key={group.state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <StateGroup group={group} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
