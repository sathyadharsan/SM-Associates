// ─── Conversion Agents: Lead · Booking · Handoff · Feedback ────────────────
// Lead qualification and feedback run as guided step flows (the widget asks
// one question per turn). Flow definitions live here; the store executes
// them. Completed submissions go through leadTransport — the single
// pluggable seam where a real backend (Resend email, DB) attaches later.

import { COMPANY_FACTS } from '../contentIndex';
import { saveSubmission } from '../leadTransport';

const { PRIMARY_CONTACT } = COMPANY_FACTS;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// A phone is valid when it carries 7–13 actual digits once formatting is
// stripped — the old character-class regex accepted "+((((((((" (QA BUG-08).
const validPhone = (v) => {
  const digits = v.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 13;
};

// Names/companies must contain at least two letters — blocks "123", "..",
// stray chip labels and single-character noise.
const validName = (v) => (v.match(/\p{L}/gu) || []).length >= 2;

// ── Lead Qualification flow ────────────────────────────────────────────────
export const LEAD_FLOW = {
  id: 'lead',
  intro: "I'll take a few quick details so the right person can respond — usually within one business day.",
  steps: [
    {
      key: 'company', prompt: 'Your company / institution name?',
      validate: (v) => validName(v) || 'Please enter your company or institution name.',
    },
    { key: 'industry', prompt: 'Which segment are you in?', options: ['Bank', 'NBFC', 'Housing Finance', 'Fintech', 'ARC', 'Other'] },
    {
      key: 'name', prompt: 'Your name?',
      validate: (v) => validName(v) || 'Please enter your name.',
    },
    {
      key: 'phone', prompt: 'Best phone number to reach you?',
      validate: (v) => validPhone(v) || 'That doesn’t look like a phone number — please re-enter (7–13 digits).',
    },
    {
      key: 'email', prompt: 'Work email address?',
      validate: (v) => EMAIL_RE.test(v.trim()) || 'That doesn’t look like an email — please re-enter.',
    },
    { key: 'requirement', prompt: 'What do you need help with? (e.g. collections, SARFAESI, verification)' },
    { key: 'portfolio', prompt: 'Approximate portfolio size? (accounts or value — an estimate is fine)', optional: true },
    { key: 'challenge', prompt: 'Briefly, the main challenge you’re trying to solve?', optional: true },
  ],
  complete(answers) {
    saveSubmission('lead', answers);
    return {
      text: `Thank you, ${answers.name?.split(' ')[0] || 'there'} — your enquiry is logged. Our team will contact you at ${answers.email}. For anything urgent: ${PRIMARY_CONTACT.landline}.`,
      suggestions: [
        { label: 'Explore services', intent: 'service' },
        { label: 'Case studies', intent: 'case-study' },
      ],
    };
  },
};

// ── Feedback flow ──────────────────────────────────────────────────────────
export const FEEDBACK_FLOW = {
  id: 'feedback',
  intro: 'We read every piece of feedback — thank you for taking the time.',
  steps: [
    { key: 'rating', prompt: 'How was your experience on our site?', options: ['Excellent', 'Good', 'Okay', 'Poor'] },
    { key: 'comments', prompt: 'Anything specific you’d like us to know?', optional: true },
    {
      key: 'email', prompt: 'Email, if you’d like a reply? (optional)', optional: true,
      validate: (v) => EMAIL_RE.test(v.trim()) || 'That doesn’t look like an email — re-enter or type "skip".',
    },
  ],
  complete(answers) {
    saveSubmission('feedback', answers);
    return {
      text: 'Thank you — your feedback has been recorded.',
      suggestions: [
        { label: 'Explore services', intent: 'service' },
        { label: 'Contact the team', intent: 'contact' },
      ],
    };
  },
};

export const FLOWS = { lead: LEAD_FLOW, feedback: FEEDBACK_FLOW };

// ── Simple conversion agents ───────────────────────────────────────────────
export const leadAgent = {
  id: 'lead',
  handle() {
    return { text: LEAD_FLOW.intro, flow: { id: 'lead' } };
  },
};

// Meeting booking rides the lead flow today (a scheduling integration can
// replace this handler without touching anything else).
export const bookingAgent = {
  id: 'booking',
  handle() {
    return {
      text: 'Happy to set that up. I’ll take your details and the team will confirm a consultation slot — usually within one business day.',
      flow: { id: 'lead' },
    };
  },
};

export const handoffAgent = {
  id: 'human',
  handle() {
    return {
      text:
        'Of course — here’s the direct line to a human:\n' +
        `• Call: ${PRIMARY_CONTACT.landline} (Mon–Sat, 9:30 AM – 6:30 PM IST)\n` +
        `• Email: ${PRIMARY_CONTACT.corporateEmail}\n` +
        'Or leave your details and the business team will call you back.',
      suggestions: [
        { label: 'Leave my details', intent: 'lead' },
        { label: 'Contact page', intent: 'contact' },
      ],
      cards: [{ title: 'Contact & Offices', summary: 'Phone, email, addresses and enquiry form.', href: '/contact', cta: 'Open contact page' }],
    };
  },
};

export const feedbackAgent = {
  id: 'feedback',
  handle() {
    return { text: FEEDBACK_FLOW.intro, flow: { id: 'feedback' } };
  },
};
