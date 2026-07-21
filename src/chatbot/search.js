// ─── Website Content Search ─────────────────────────────────────────────────
// Two-stage retrieval over the in-memory content index:
//   1. Fuse.js fuzzy match (typo-tolerant), on NORMALIZED queries
//      (normalize.js strips stopword noise: "what is services" → "service").
//   2. Deterministic tier re-rank — an FAQ or service page at equal
//      fuzziness always outranks a generic page (QA "wrong ranking" class).
// Field weighting favours titles > summaries > keywords > body.

import Fuse from 'fuse.js';
import { getContentIndex } from './contentIndex';
import { normalizeForSearch } from './normalize';

let fuse = null;

function getFuse() {
  if (fuse) return fuse;
  fuse = new Fuse(getContentIndex(), {
    includeScore: true,
    threshold: 0.38,
    ignoreLocation: true,
    minMatchCharLength: 3,
    keys: [
      { name: 'title', weight: 0.45 },
      { name: 'summary', weight: 0.3 },
      { name: 'keywords', weight: 0.15 },
      { name: 'body', weight: 0.1 },
    ],
  });
  return fuse;
}

// Lower multiplier = ranked higher at equal fuzz. Business priority order.
const TIER = {
  faq: 0.55,
  service: 0.7,
  capability: 0.8,
  industry: 0.85,
  'case-study': 0.9,
  resource: 0.95,
  // page / office / coverage / contact / metric → 1.0
};

/**
 * Search the website content index.
 * @param {string} query raw user text (normalized internally)
 * @param {{ types?: string[], limit?: number, dedupe?: boolean }} [opts]
 * @returns {Array<{doc: object, score: number}>} best-first (tier-adjusted)
 */
export function searchContent(query, opts = {}) {
  const { types, limit = 5, dedupe = false } = opts;
  const q = normalizeForSearch(query);
  if (!q || q.length < 2) return [];

  let results = getFuse()
    .search(q)
    .map((r) => ({ doc: r.item, score: (r.score ?? 1) * (TIER[r.item.type] ?? 1) }))
    .sort((a, b) => a.score - b.score);

  if (types?.length) results = results.filter((r) => types.includes(r.doc.type));

  if (dedupe) {
    const seen = new Set();
    results = results.filter((r) => {
      if (seen.has(r.doc.href)) return false;
      seen.add(r.doc.href);
      return true;
    });
  }

  return results.slice(0, limit);
}

/** A confident single answer: clearly best match, materially ahead of #2. */
export function bestMatch(query, opts = {}) {
  const results = searchContent(query, { ...opts, limit: 3 });
  if (!results.length) return null;
  const [first, second] = results;
  const confident = first.score < 0.2 && (!second || second.score - first.score > 0.06);
  return { ...first, confident, alternatives: results.slice(1) };
}
