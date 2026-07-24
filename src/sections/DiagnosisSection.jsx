import CapabilityDifferentiator from '../components/capability/CapabilityDifferentiator';
import { diagnosisInsert } from '../data/flagshipHomeData';

export default function DiagnosisSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-b border-slate-200/90 relative overflow-hidden" id="diagnosis">
      <div className="fg-wrap mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <CapabilityDifferentiator {...diagnosisInsert} />
      </div>
    </section>
  );
}
