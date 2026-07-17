// ─── Website Content Search ─────────────────────────────────────────────────
// Fuzzy search over the in-memory content index (see contentIndex.js).
// Field weighting favours titles, then summaries, then keywords/body —
// so "sarfaesi" ranks the SARFAESI service page above a passing mention.

import Fuse from 'fuse.js';
import { getContentIndex } from './contentIndex';

let fuse = null;

function getFuse() {
  if (fuse) return fuse;
  fuse = new Fuse(getContentIndex(), {
    includeScore: true,
    threshold: 0.38,          // tolerant of typos, strict enough to avoid noise
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

/**
 * Search the website content index.
 * @param {string} query
 * @param {{ types?: string[], limit?: number }} [opts] restrict to doc types
 * @returns {Array<{doc: object, score: number}>} best-first
 */
export function searchContent(query, opts = {}) {
  const { types, limit = 5 } = opts;
  if (!query || query.trim().length < 2) return [];
  let results = getFuse().search(query.trim());
  if (types?.length) results = results.filter((r) => types.includes(r.item.type));
  return results.slice(0, limit).map((r) => ({ doc: r.item, score: r.score }));
}

/** A confident single answer: clearly best match, materially ahead of #2. */
export function bestMatch(query, opts = {}) {
  const results = searchContent(query, { ...opts, limit: 3 });
  if (!results.length) return null;
  const [first, second] = results;
  const confident = first.score < 0.22 && (!second || second.score - first.score > 0.08);
  return { ...first, confident, alternatives: results.slice(1) };
}
