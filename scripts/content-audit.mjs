// Full content audit — checks every service page key against pagesContent registry
// Reports: key match, and per-field presence for all 12 template sections

import { collectionsContent } from '../src/data/pages/collections.js';
import { legalContent } from '../src/data/pages/legal.js';
import { assetContent } from '../src/data/pages/asset.js';
import { investigationContent } from '../src/data/pages/investigation.js';
import { operationalContent } from '../src/data/pages/operational.js';
import { specializedContent } from '../src/data/pages/specialized.js';
import { verificationContent } from '../src/data/pages/verification.js';

const ALL_DATA = {
  ...collectionsContent,
  ...legalContent,
  ...assetContent,
  ...investigationContent,
  ...operationalContent,
  ...specializedContent,
  ...verificationContent,
};

// All service pages and their content keys (from JSX files)
const SERVICE_PAGES = [
  // Collections
  { page: 'EarlyStageCollectionsPage',   key: 'early-stage',           group: 'Collections' },
  { page: 'SoftCollectionsPage',         key: 'soft-collections',      group: 'Collections' },
  { page: 'HardCollectionsPage',         key: 'hard-collections',      group: 'Collections' },
  { page: 'FieldCollectionsPage',        key: 'field-collections',     group: 'Collections' },
  { page: 'PdcCollectionsPage',          key: 'pdc-collections',       group: 'Collections' },
  { page: 'DebtRecoveryPage',            key: 'debt-recovery',         group: 'Collections' },
  // Legal
  { page: 'SarfaesiSupportPage',         key: 'sarfaesi-support',      group: 'Legal' },
  { page: 'PossessionSupportPage',       key: 'possession-support',    group: 'Legal' },
  { page: 'ChequeBounceNoticesPage',     key: 'cheque-bounce-notices', group: 'Legal' },
  { page: 'LegalCoordinationPage',       key: 'legal-coordination',    group: 'Legal' },
  { page: 'LitigationSupportPage',       key: 'litigation-support',    group: 'Legal' },
  // Verification
  { page: 'CpvServicesPage',             key: 'cpv-services',          group: 'Verification' },
  { page: 'ResidenceVerificationPage',   key: 'residence-verification',group: 'Verification' },
  { page: 'OfficeVerificationPage',      key: 'office-verification',   group: 'Verification' },
  { page: 'BusinessVerificationPage',    key: 'business-verification', group: 'Verification' },
  { page: 'DocumentVerificationPage',    key: 'document-verification', group: 'Verification' },
  // Asset Recovery
  { page: 'VehicleRepossessionPage',     key: 'vehicle-repossession',  group: 'Asset' },
  { page: 'AssetRecoveryPage',           key: 'asset-recovery',        group: 'Asset' },
  { page: 'CustodianServicesPage',       key: 'custodian-services',    group: 'Asset' },
  { page: 'ValuationServicesPage',       key: 'valuation-services',    group: 'Asset' },
  { page: 'AuctionCoordinationPage',     key: 'auction-coordination',  group: 'Asset' },
  // Investigation
  { page: 'SkipTracingPage',             key: 'skip-tracing',          group: 'Investigation' },
  { page: 'AddressTracingPage',          key: 'address-tracing',       group: 'Investigation' },
  { page: 'ContactVerificationPage',     key: 'contact-verification',  group: 'Investigation' },
  { page: 'DueDiligencePage',            key: 'due-diligence',         group: 'Investigation' },
  { page: 'FraudInvestigationPage',      key: 'fraud-investigation',   group: 'Investigation' },
  { page: 'AssetTracingPage',            key: 'asset-tracing',         group: 'Investigation' },
  // Operational
  { page: 'CallCentrePage',              key: 'call-centre',           group: 'Operational' },
  { page: 'ManpowerPage',               key: 'manpower',              group: 'Operational' },
  { page: 'FacilityManagementPage',     key: 'facility-management',   group: 'Operational' },
  { page: 'LiaisingPage',               key: 'liaising',              group: 'Operational' },
  // Specialized
  { page: 'NpaManagementPage',          key: 'npa-management',        group: 'Specialized' },
  { page: 'ResolutionStrategyPage',     key: 'resolution-strategy',   group: 'Specialized' },
  { page: 'NpaRecoveryPage',            key: 'npa-recovery',          group: 'Specialized' },
  { page: 'PortfolioManagementPage',    key: 'portfolio-management',  group: 'Specialized' },
  { page: 'RecoveryAnalyticsPage',      key: 'recovery-analytics',    group: 'Specialized' },
  { page: 'RecoveryConsultingPage',     key: 'recovery-consulting',   group: 'Specialized' },
];

// Fields required for full EnterpriseServiceTemplate render
const REQUIRED_FIELDS = [
  { field: 'kpiCards',       label: 'KPI Cards',     check: v => Array.isArray(v) && v.length >= 4 },
  { field: 'capabilities',   label: 'Capabilities',  check: v => Array.isArray(v) && v.length >= 6 },
  { field: 'tabs',           label: 'Tabs',          check: v => Array.isArray(v) && v.length >= 6 },
  { field: 'challenges',     label: 'Challenges',    check: v => Array.isArray(v) && v.length >= 6 },
  { field: 'processFlow',    label: 'Process Flow',  check: v => v && Array.isArray(v.steps) && v.steps.length >= 5 },
  { field: 'outcomes',       label: 'Outcomes',      check: v => Array.isArray(v) && v.length >= 6 },
  { field: 'faqs',           label: 'FAQs',          check: v => Array.isArray(v) && v.length >= 2 },
  { field: 'cta',            label: 'CTA',           check: v => v && v.href && !v.href.includes(' ') },
  { field: 'problemStatement', label: 'Problem Stmt',check: v => Array.isArray(v) && v.length >= 3 },
  { field: 'overview',       label: 'Overview',      check: v => v && v.summary && v.summary.length > 50 },
];

// Run audit
let totalIssues = 0;
let fallbackCount = 0;
const groups = {};

for (const svc of SERVICE_PAGES) {
  const data = ALL_DATA[svc.key];
  const issues = [];

  if (!data) {
    fallbackCount++;
    issues.push('!! KEY NOT FOUND — using generic fallback template (all sections missing)');
    totalIssues++;
  } else {
    for (const { field, label, check } of REQUIRED_FIELDS) {
      const val = data[field];
      if (val === undefined || val === null) {
        issues.push(`MISSING: ${label}`);
        totalIssues++;
      } else if (!check(val)) {
        const count = Array.isArray(val) ? val.length : (val.steps ? val.steps.length : '?');
        issues.push(`THIN: ${label} (has ${count}, needs more)`);
        totalIssues++;
      }
    }
  }

  if (!groups[svc.group]) groups[svc.group] = [];
  groups[svc.group].push({ ...svc, issues, data: !!data });
}

// Print report
console.log('\n════════════════════════════════════════════════════════');
console.log('  SM ASSOCIATES — SERVICE CONTENT AUDIT REPORT');
console.log('  ' + new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }));
console.log('════════════════════════════════════════════════════════\n');

for (const [group, svcs] of Object.entries(groups)) {
  console.log(`┌─── ${group.toUpperCase()} ───`);
  for (const svc of svcs) {
    const status = !svc.data ? '✗ FALLBACK' : svc.issues.length === 0 ? '✓ CLEAN' : `⚠ ${svc.issues.length} issue(s)`;
    console.log(`│  ${status.padEnd(18)} ${svc.key}`);
    for (const issue of svc.issues) {
      console.log(`│       → ${issue}`);
    }
  }
  console.log('│');
}

console.log('════════════════════════════════════════════════════════');
console.log(`  SUMMARY`);
console.log(`  Total services audited : ${SERVICE_PAGES.length}`);
console.log(`  Key not found (fallback): ${fallbackCount}`);
console.log(`  Total field issues      : ${totalIssues}`);
console.log(`  Clean (no issues)       : ${SERVICE_PAGES.filter(s => ALL_DATA[s.key] && !groups[s.group].find(x=>x.key===s.key).issues.length).length}`);
console.log('════════════════════════════════════════════════════════\n');
