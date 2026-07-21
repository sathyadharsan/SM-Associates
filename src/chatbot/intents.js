// ─── Intent Detection ───────────────────────────────────────────────────────
// Deterministic, rule-based intent classification over NORMALIZED input
// (see normalize.js): input is lowercased, typo/synonym-corrected and
// singularized before matching, so every pattern is written in singular
// canonical form and automatically covers plurals, case and punctuation
// variants ("What are services?" → "what be service" → \bservice\b ✓).
//
// Order = specificity: conversion intents outrank informational ones,
// which outrank the generic search fallback. Coverage sits ABOVE contact
// so "office in chennai" reaches the per-city coverage answers (QA BUG-06).

import { normalizeForIntent } from './normalize';

const INTENTS = [
  {
    id: 'lead',
    test: /\b(proposal|quote|quotation|pricing|price|cost|charge|engage|onboard|empanel|partner with|work with you|rfp|enquiry|inquiry|leave my detail)\b/,
  },
  {
    id: 'booking',
    test: /\b(book|schedule|meeting|consultation|call back|callback|demo|appointment)\b/,
  },
  {
    id: 'human',
    test: /\b(human|agent|person|representative|talk to (someone|team)|speak (to|with)|whatsapp|escalate)\b/,
  },
  {
    id: 'feedback',
    test: /\b(feedback|suggestion|complain|complaint|review)\b/,
  },
  {
    id: 'navigate',
    test: /\b(go to|go back|take me|open|navigate|visit|return home|go home|back home)\b/,
  },
  {
    id: 'coverage',
    test: /\b(coverage|where (do|are) you|operate|state|city|citie|region|presence|branch|tamil nadu|kerala|karnataka|telangana|andhra|puducherry|chennai|coimbatore|bengaluru|bangalore|madurai|salem|trichy|tirunelveli|tindivanam|vellore|dharmapuri|cochin|kollam|shivamogga|hyderabad|vijayawada)\b/,
  },
  {
    id: 'contact',
    test: /\b(contact|phone|call|email|office|working hour|timing|located?)\b/,
  },
  {
    id: 'clients',
    test: /\b(client|customer|who do you work|which bank do you|logo|partner list|empanelled)\b/,
  },
  {
    id: 'case-study',
    test: /\b(case (study|studie)|proof|result|outcome|track record|success stor)\b/,
  },
  {
    id: 'industry',
    test: /\b(industry|industrie|sector|bank(ing)?|nbfc|housing finance|hfc|microfinance|mfi|fintech|arc\b|asset reconstruction|insurance|gold loan|vehicle finance)\b/,
  },
  {
    id: 'service',
    test: /\b(service|sarfaesi|collection|recovery|recoverie|repossess|verification|cpv|skip trac|legal|auction|custod|yard|npa|fraud|investigat|due diligence|manpower|call centre|call center|debt)\b/,
  },
  {
    id: 'about',
    test: /\b(about (you|us|sm|the company)|who are you|company|history|founded|leadership|managing director|\bmd\b|director|since when|how old)\b/,
  },
];

/**
 * Classify a user message.
 * @param {string} text raw user input
 * @returns {{ intent: string, normalized: string }} — 'search' fallback
 */
export function detectIntent(text) {
  const normalized = normalizeForIntent(text);
  if (!normalized) return { intent: 'welcome', normalized };
  for (const { id, test } of INTENTS) {
    if (test.test(normalized)) return { intent: id, normalized };
  }
  return { intent: 'search', normalized };
}
