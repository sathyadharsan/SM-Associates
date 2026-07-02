// Keyword-based cross-link resolvers connecting Services <-> Industries.
// Sections call these with a display name/title and get back an internal
// route (or null). Rules are ordered: the FIRST matching pattern wins, so
// specific phrases must stay above generic ones (e.g. 'commercial lend'
// before the bare 'bank' fallback). Content data never stores hrefs —
// linking stays automatic as pages are added or renamed.

const INDUSTRY_RULES = [
  [/asset reconstruction|\barcs?\b/i, '/industries/arc'],
  [/microfinance|\bmfis?\b|\bjlg\b/i, '/industries/microfinance'],
  [/housing finance|\bhfcs?\b/i, '/industries/housing-finance'],
  [/fintech|digital lend/i, '/industries/fintech'],
  [/nbfc/i, '/industries/nbfc'],
  [/vehicle finance|auto finance|tractor/i, '/industries/vehicle-finance'],
  [/gold loan|jewel/i, '/industries/gold-loan'],
  [/insurance|insurer/i, '/industries/insurance'],
  [/commercial lend/i, '/industries/commercial-lending'],
  [/bank/i, '/industries/banking'],
];

const SERVICE_RULES = [
  [/sarfaesi/i, '/services/legal-recovery/sarfaesi-support'],
  [/possession/i, '/services/legal-recovery/possession-support'],
  [/cheque|bounce|section 138/i, '/services/legal-recovery/cheque-bounce-notices'],
  [/litigation|\bdrt\b/i, '/services/legal-recovery/litigation-support'],
  [/foreclosure|notice/i, '/services/legal-recovery/sarfaesi-support'],
  [/legal/i, '/services/legal-recovery/legal-coordination'],
  [/repossession/i, '/services/asset-recovery/vehicle-repossession'],
  [/custody|custodian|yard/i, '/services/asset-recovery/custodian-services'],
  [/valuation/i, '/services/asset-recovery/valuation-services'],
  [/auction/i, '/services/asset-recovery/auction-coordination'],
  [/skip tracing|skip trace/i, '/services/investigation/skip-tracing'],
  [/address/i, '/services/investigation/address-tracing'],
  [/fraud|\bsiu\b|claims audit|claims investigation/i, '/services/investigation/fraud-investigation'],
  [/due diligence/i, '/services/investigation/due-diligence'],
  [/contact verification/i, '/services/investigation/contact-verification'],
  [/pre-disbursal|\bcpv\b/i, '/services/verification/cpv-services'],
  [/residence verification/i, '/services/verification/residence-verification'],
  [/document verification/i, '/services/verification/document-verification'],
  [/business verification/i, '/services/verification/business-verification'],
  [/verification/i, '/services/verification/cpv-services'],
  [/early[- ]stage/i, '/services/collections/early-stage'],
  [/soft collection/i, '/services/collections/soft-collections'],
  [/hard collection/i, '/services/collections/hard-collections'],
  [/pdc/i, '/services/collections/pdc-collections'],
  [/debt recovery/i, '/services/collections/debt-recovery'],
  [/collection/i, '/services/collections/field-collections'],
  [/calling|call centre|dialer|tele-?call/i, '/services/operational/call-centre'],
  [/\bnpa\b/i, '/services/specialized/npa-management'],
  [/analytics|propensity|scoring/i, '/services/specialized/recovery-analytics'],
  [/portfolio/i, '/services/specialized/portfolio-management'],
  [/\bots\b|settlement/i, '/services/specialized/resolution-strategy'],
];

function resolve(rules, text) {
  if (!text) return null;
  for (const [re, href] of rules) {
    if (re.test(text)) return href;
  }
  return null;
}

export function resolveIndustryHref(name) {
  return resolve(INDUSTRY_RULES, name);
}

export function resolveServiceHref(title) {
  return resolve(SERVICE_RULES, title);
}
