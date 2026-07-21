// ─── Query Normalization Layer ─────────────────────────────────────────────
// The single reusable text-normalization pipeline, applied BEFORE both
// intent detection and search (QA BUG-01/09/11/19 root-cause fix).
//
// Pipeline: lowercase → typo correction → phrase synonyms → word synonyms
// → punctuation strip → whitespace collapse → singularization
// (+ optional stopword removal, used by search only — intent patterns need
// phrases like "go to" intact).

// Common misspellings observed for this domain (exact-token replacements).
const TYPOS = {
  servce: 'service', servics: 'services', serivce: 'service', survice: 'service',
  servise: 'service', cntact: 'contact', contct: 'contact', locaton: 'location',
  reocvery: 'recovery', recovry: 'recovery', collction: 'collection',
  bankng: 'banking', sarfeasi: 'sarfaesi', sarfasi: 'sarfaesi', nbcf: 'nbfc',
  indutry: 'industry', indusrty: 'industry', adress: 'address',
};

// Multi-word synonyms first (longest match wins), then single words.
const PHRASE_SYNONYMS = [
  ['head office', 'office'],
  ['main office', 'office'],
  ['branch office', 'office'],
  ['loan recovery', 'debt recovery'],
  ['phone number', 'phone'],
  ['mobile number', 'phone'],
];

const WORD_SYNONYMS = {
  hq: 'office',
  headquarters: 'office',
  headquarter: 'office',
  telephone: 'phone',
  mobile: 'phone',
  mail: 'email',
  reach: 'contact',
  address: 'office address',
  location: 'office location',
  locations: 'office location',
};

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'do', 'does',
  'did', 'can', 'could', 'will', 'would', 'should', 'i', 'we', 'you', 'your',
  'our', 'us', 'me', 'my', 'it', 'its', 'of', 'for', 'about', 'tell', 'what',
  'which', 'how', 'please', 'need', 'want', 'know', 'have', 'has', 'there',
  'this', 'that', 'and', 'or', 'with', 'give', 'show', 'explain', 'details',
  'detail', 'info', 'information', 'more',
]);

// Words singularization must never touch (would corrupt meaning).
const SINGULAR_EXCEPTIONS = new Set([
  'sarfaesi', 'business', 'address', 'process', 'analysis', 'always', 'plus',
  'various', 'previous', 'this', 'us', 'status', 'aegis', 'chennai',
]);

/** Naive but effective English singularizer for domain vocabulary. */
export function singularize(word) {
  const w = word;
  if (w.length <= 3 || SINGULAR_EXCEPTIONS.has(w) || w.endsWith('ss')) return w;
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';        // industries→industry, recoveries→recovery
  if (/(ches|shes|xes|ses|zes)$/.test(w)) return w.slice(0, -2);             // branches→branch, cases→case
  if (w.endsWith('s')) return w.slice(0, -1);                                // services→service, banks→bank, nbfcs→nbfc
  return w;
}

function applyTyposAndSynonyms(text) {
  let t = text;
  for (const [from, to] of PHRASE_SYNONYMS) t = t.split(from).join(to);
  return t
    .split(/\s+/)
    .map((w) => TYPOS[w] || w)
    .map((w) => WORD_SYNONYMS[w] || w)
    .join(' ');
}

/**
 * Normalize for intent detection: lowercase, typo/synonym fixes,
 * punctuation stripped, every word singularized. Stopwords KEPT so
 * multi-word intent phrases ("go to", "talk to someone") still match.
 */
export function normalizeForIntent(text) {
  const base = (text || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s+]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return applyTyposAndSynonyms(base)
    .split(' ')
    .map(singularize)
    .join(' ');
}

/**
 * Normalize for search: everything above PLUS stopword removal, so
 * "what is services" retrieves as cleanly as "service".
 * Falls back to the intent form when stripping would empty the query.
 */
export function normalizeForSearch(text) {
  const intentForm = normalizeForIntent(text);
  const stripped = intentForm
    .split(' ')
    .filter((w) => w && !STOPWORDS.has(w))
    .join(' ');
  return stripped || intentForm;
}
