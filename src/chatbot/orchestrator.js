// ─── Chat Orchestrator ─────────────────────────────────────────────────────
// Widget → orchestrator → intent detection → agent → response.
//
// FUTURE AI SEAM: when an LLM is added, register it below as `aiAgent` and
// it becomes the fallback INSIDE searchAgent's no-result branch (website
// search first, AI second, always citing site links). Nothing else in the
// system — widget, store, agents, index — changes. That is the entire
// integration surface, by design.

import { detectIntent } from './intents';
import { welcomeAgent, navigationAgent, contactAgent } from './agents/coreAgents';
import {
  searchAgent,
  serviceDiscoveryAgent,
  industryAgent,
  coverageAgent,
  caseStudyAgent,
  clientsAgent,
  aboutAgent,
  capabilityAgent,
} from './agents/knowledgeAgents';
import {
  leadAgent,
  bookingAgent,
  handoffAgent,
  feedbackAgent,
} from './agents/conversionAgents';

const AGENTS = {
  welcome: welcomeAgent,
  navigate: navigationAgent,
  contact: contactAgent,
  search: searchAgent,
  service: serviceDiscoveryAgent,
  capability: capabilityAgent,
  industry: industryAgent,
  coverage: coverageAgent,
  'case-study': caseStudyAgent,
  clients: clientsAgent,
  about: aboutAgent,
  lead: leadAgent,
  booking: bookingAgent,
  human: handoffAgent,
  feedback: feedbackAgent,
};

// Quick-action chips map straight to intents — same pipeline, no shortcuts.
export const QUICK_ACTIONS = [
  { label: 'Explore Services', message: 'Show me your services', intent: 'service' },
  { label: 'Industries', message: 'Which industries do you serve?', intent: 'industry' },
  { label: 'Coverage', message: 'Where do you operate?', intent: 'coverage' },
  { label: 'Case Studies', message: 'Show me case studies', intent: 'case-study' },
  { label: 'Request Proposal', message: 'I want to request a proposal', intent: 'lead' },
  { label: 'Book Consultation', message: 'Book a consultation', intent: 'booking' },
  { label: 'Contact', message: 'How do I contact you?', intent: 'contact' },
];

/**
 * Process one user turn.
 * @param {string} text user message
 * @param {string} [forcedIntent] quick-action override (skips detection only,
 *                                never the agent pipeline)
 * @returns {object} agent response (see coreAgents.js contract)
 */
export function processMessage(text, forcedIntent) {
  const detection = detectIntent(text);
  const intent = forcedIntent || detection.intent;
  const agent = AGENTS[intent] || searchAgent;
  try {
    // Agents receive the raw text (search normalizes internally) plus the
    // normalized form for pattern work (e.g. navigation aliases).
    return agent.handle(text, detection.normalized);
  } catch (err) {
    if (import.meta.env.DEV) console.error('[chatbot] agent error:', intent, err);
    return {
      text: 'Something went wrong on my side. You can reach the team directly on the contact page.',
      cards: [{ title: 'Contact', summary: 'Phone, email and offices.', href: '/contact', cta: 'Open' }],
    };
  }
}

export function getWelcome() {
  return welcomeAgent.handle();
}
