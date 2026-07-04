export default function ServiceFilterTabs({ filters, active, onChange }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
      {filters.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onChange(f.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-bold whitespace-nowrap transition ${
              isActive
                ? 'border-brand-500 bg-brand-500 text-white shadow-soft'
                : 'border-brand-500 bg-white text-brand-500 hover:bg-brand-50'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
