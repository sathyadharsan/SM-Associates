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

const PENDING_KEY = 'sm-chatbot-pending';

function readPending() {
  try {
    return JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
  } catch {
    return [];
  }
}

function writePending(list) {
  try {
    localStorage.setItem(PENDING_KEY, JSON.stringify(list.slice(-25)));
  } catch {
    /* storage unavailable */
  }
}

function queuePending(entry) {
  writePending([...readPending(), entry]);
}

function post(entry) {
  const blob = new Blob([JSON.stringify(entry)], { type: 'application/json' });
  // sendBeacon survives page navigation; fetch keepalive as fallback.
  if (navigator.sendBeacon?.(ENDPOINT, blob)) return Promise.resolve(true);
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(entry),
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
  }).then((r) => r.ok, () => false);
}

function deliver(entry) {
  // No endpoint configured → entry stays in the pending queue so it is
  // delivered automatically the moment an endpoint ships. Losing a lead
  // now requires delivery to fail AND the visitor never returning.
  if (!ENDPOINT) {
    queuePending(entry);
    return;
  }
  try {
    post(entry).then((ok) => {
      if (!ok) queuePending(entry);
    });
  } catch {
    queuePending(entry);
  }
}

/** Retry anything queued from earlier visits. Called on widget open. */
export function replayPending() {
  if (!ENDPOINT) return;
  const pending = readPending();
  if (!pending.length) return;
  writePending([]);
  pending.forEach((entry) => {
    try {
      post(entry).then((ok) => {
        if (!ok) queuePending(entry);
      });
    } catch {
      queuePending(entry);
    }
  });
}

/**
 * Record a completed flow or form submission.
 * @param {'lead'|'feedback'|'contact'|'careers'|'newsletter'} kind
 * @param {Record<string, string>} answers
 */
export function saveSubmission(kind, answers) {
  const entry = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    kind,
    answers,
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    at: new Date().toISOString(),
  };
  persistLocally(entry);
  deliver(entry);
  return entry;
}

/**
 * Generate a mailto: fallback URL for any form submission
 * @param {'contact'|'careers'|'newsletter'} type
 * @param {Record<string, string>} data
 */
export function createMailtoUrl(type, data) {
  const recipient = type === 'careers' ? 'smarmpl.ho@gmail.com' : 'smarmpl.ho@gmail.com';
  let subject = `[SM Associates Web Enquiry] - ${type.toUpperCase()}`;
  let body = `Submission Details:\n-------------------\nDate: ${new Date().toLocaleString()}\nPage: ${typeof window !== 'undefined' ? window.location.href : ''}\n\n`;

  Object.entries(data).forEach(([key, val]) => {
    if (val) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
      body += `${formattedKey}: ${val}\n`;
    }
  });

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Read locally stored submissions (admin/debug helper). */
export function readSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
