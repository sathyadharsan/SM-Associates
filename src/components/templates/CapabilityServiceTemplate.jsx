import React from 'react';
import HeroSection from '../sections/HeroSection';
import CTASection from '../sections/CTASection';
import ConstantsStrip from '../capability/ConstantsStrip';
import CapabilityDifferentiator from '../capability/CapabilityDifferentiator';
import CapabilityChecklist from '../capability/CapabilityChecklist';
import WorkflowChain from '../capability/WorkflowChain';
import CapabilityInAction from '../capability/CapabilityInAction';
import TechnologyStrip from '../capability/TechnologyStrip';
import { serifHeading } from '../sections/shared/typography';
import { technologyLayers } from '../../data/siteWideCapabilities';

// The reusable enterprise page template implementing the approved IA
// blueprint's universal six-beat DNA: Hero -> Core Capabilities ->
// Execution Workflow -> Technology -> Business Outcomes -> CTA. Replaces
// EnterpriseServiceTemplate's 13-section stack for pages migrated to the
// new capability-profile content model. `content` shape (all fields from
// the approved blueprint's per-page capability profile):
//   { ...HeroSection fields, differentiator: {category, traditional, sm, impact},
//     checklist: {traditional: [], capabilities: []}, workflow: [],
//     capabilityInAction: {title, steps: [5 strings]}, techHighlight: 'Execution' }
export default function CapabilityServiceTemplate({ content }) {
  if (!content) return null;
  const { differentiator, checklist, workflow, capabilityInAction, techHighlight } = content;

  const SectionHeading = ({ eyebrow, heading }) => (
    <div>
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0072bc]">{eyebrow}</span>
      <h2 style={serifHeading} className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">{heading}</h2>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-inter">
      <HeroSection content={content} />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <ConstantsStrip />

          {differentiator && <CapabilityDifferentiator {...differentiator} />}

          <div id="capabilities" className="space-y-5">
            <SectionHeading eyebrow="Core Capabilities" heading="What We Execute" />
            {checklist && <CapabilityChecklist {...checklist} />}
          </div>

          {workflow?.length > 0 && (
            <div className="space-y-5">
              <SectionHeading eyebrow="Execution Workflow" heading="How It Runs" />
              <WorkflowChain steps={workflow} />
            </div>
          )}

          <div className="space-y-5">
            <SectionHeading eyebrow="Technology" heading="What Powers It" />
            <TechnologyStrip layers={technologyLayers} highlight={techHighlight} />
          </div>

          {capabilityInAction && (
            <div className="space-y-5">
              <SectionHeading eyebrow="Proof, Not Promises" heading="Capability in Action" />
              <CapabilityInAction {...capabilityInAction} />
            </div>
          )}
        </div>
      </section>

      <CTASection content={content} />
    </div>
  );
}
