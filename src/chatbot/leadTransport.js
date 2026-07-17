// ─── Lead / Feedback Transport ─────────────────────────────────────────────
// The single seam between the chatbot and the outside world. Phase 1 ships
// without a backend, so submissions are: (1) persisted to localStorage so
// nothing is ever lost client-side, and (2) POSTed to an endpoint if one is
// configured — the same pattern as public/sm-analytics.js (Google Apps
// Script / any webhook). Phase 2 (Express + Resend + DB) replaces only the
// body of `deliver()`; every agent and UI component stays untouched.

const STORAGE_KEY = 'sm-chatbot-submissions';

// Set to a webhook / Apps Script URL to receive submissions server-side.
// Left null deliberately — no fake endpoint.
const ENDPOINT = null;

function persistLocally(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-100)));
  } catch {
    /* storage unavailable (private mode) — deliver() still runs */
  }
}

function deliver(entry) {
  if (!ENDPOINT) return;
  try {
    const blob = new Blob([JSON.stringify(entry)], { type: 'application/json' });
    // sendBeacon survives page navigation; fetch keepalive as fallback.
    if (!navigator.sendBeacon?.(ENDPOINT, blob)) {
      fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(entry), keepalive: true, headers: { 'Content-Type': 'application/json' } }).catch(() => {});
    }
  } catch {
    /* network failure must never break the chat UX */
  }
}

/**
 * Record a completed flow submission.
 * @param {'lead'|'feedback'} kind
 * @param {Record<string, string>} answers
 */
export function saveSubmission(kind, answers) {
  const entry = {
    kind,
    answers,
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    at: new Date().toISOString(),
  };
  persistLocally(entry);
  deliver(entry);
}

/** Read locally stored submissions (admin/debug helper). */
export function readSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
