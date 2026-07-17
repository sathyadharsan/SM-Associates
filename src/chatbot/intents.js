// ─── Intent Detection ───────────────────────────────────────────────────────
// Deterministic, rule-based intent classification. Patterns are ordered by
// specificity: conversion intents (lead/booking/human) outrank informational
// ones, which outrank the generic search fallback. No ML, no ambiguity —
// the same input always routes the same way, which makes the bot testable.

const INTENTS = [
  {
    id: 'lead',
    test: /\b(proposal|quote|quotation|pricing|price|cost|engage|onboard|empanel|partner with|work with you|rfp|enquiry|inquiry)\b/i,
  },
  {
    id: 'booking',
    test: /\b(book|schedule|meeting|consultation|call back|callback|demo|appointment)\b/i,
  },
  {
    id: 'human',
    test: /\b(human|agent|person|representative|talk to (someone|team)|speak (to|with)|whatsapp|escalate)\b/i,
  },
  {
    id: 'feedback',
    test: /\b(feedback|suggestion|complain|complaint|review)\b/i,
  },
  {
    id: 'contact',
    test: /\b(contact|phone|call you|email|address|office|reach|working hours|timings|location of)\b/i,
  },
  {
    id: 'coverage',
    test: /\b(coverage|where do you operate|states?|cities|regions?|presence|branch(es)?|tamil nadu|kerala|karnataka|telangana|andhra|puducherry|chennai|coimbatore|bengaluru|bangalore|madurai|salem|trichy|cochin|hyderabad|vijayawada)\b/i,
  },
  {
    id: 'case-study',
    test: /\b(case stud(y|ies)|proof|results?|outcomes?|track record|success stor)\b/i,
  },
  {
    id: 'industry',
    test: /\b(bank(ing|s)?|nbfc|housing finance|hfc|microfinance|mfi|fintech|arc|asset reconstruction|insurance|gold loan|vehicle finance)\b/i,
  },
  {
    id: 'service',
    test: /\b(service|sarfaesi|collections?|recovery|repossess|verification|cpv|skip trac|legal|auction|custod|yard|npa|fraud|investigat|due diligence|manpower|call cent)\b/i,
  },
  {
    id: 'navigate',
    test: /\b(go to|take me|open|show me the|navigate|visit)\b/i,
  },
  {
    id: 'about',
    test: /\b(about (you|sm|the company)|who are you|company|history|founded|leadership|md|director|since when|how old)\b/i,
  },
];

/**
 * Classify a user message.
 * @param {string} text
 * @returns {{ intent: string }} intent id, 'search' when nothing specific hits
 */
export function detectIntent(text) {
  const t = (text || '').trim();
  if (!t) return { intent: 'welcome' };
  for (const { id, test } of INTENTS) {
    if (test.test(t)) return { intent: id };
  }
  return { intent: 'search' };
}
