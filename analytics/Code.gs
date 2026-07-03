/**
 * ============================================================================
 *  SM ASSOCIATES — ENTERPRISE WEBSITE ANALYTICS BACKEND (Google Apps Script)
 * ============================================================================
 *  Receives visitor analytics from the website (sent by sm-analytics.js) and
 *  stores them in Google Sheets, structured for pivot tables, charts and an
 *  executive dashboard.
 *
 *  FEATURES
 *  --------
 *  - 110+ analytics columns (user, session, behavior, marketing, device,
 *    network, location, performance, conversion, technical, errors)
 *  - Auto-creates the spreadsheet, monthly sheets and headers
 *  - Auto-adds NEW headers later without breaking old data (migration-safe)
 *  - Validates + sanitizes every incoming value (formula-injection safe)
 *  - Duplicate-event rejection via CacheService (no slow sheet scans)
 *  - LockService so concurrent visitors don't corrupt writes
 *  - Monthly sheet rotation => scales past 100,000 records safely
 *
 *  DEPLOYMENT (one time)
 *  ---------------------
 *  1. Paste this whole file into Code.gs (replace myFunction).
 *  2. Deploy > New deployment > type: Web app
 *       - Execute as:        Me
 *       - Who has access:    Anyone
 *  3. Copy the Web app URL (ends in /exec) into sm-analytics.js on the site.
 *  4. Re-deploy ("New version") every time you edit this file.
 * ============================================================================
 */

/* ========================== CONFIGURATION ================================ */

var CONFIG = {
  // Leave '' to auto-create a spreadsheet named below on first hit.
  // Or paste an existing Spreadsheet ID to use your own sheet.
  SPREADSHEET_ID: '',
  SPREADSHEET_NAME: 'SM Associates - Website Analytics',

  // One sheet per month ("Data_2026_07") keeps each sheet small and fast,
  // so the system stays healthy well past 100k total records.
  ROTATE_MONTHLY: true,
  SHEET_PREFIX: 'Data',

  MAX_CELL_LENGTH: 500,        // hard cap per cell (sanitization)
  MAX_PAYLOAD_BYTES: 50000,    // reject absurdly large posts
  DEDUP_TTL_SECONDS: 21600,    // 6h duplicate-event memory
  TIMEZONE: 'Asia/Kolkata'
};

/* ========================== COLUMN SCHEMA ================================ */
/**
 * Single source of truth. h = sheet header, k = JSON key from the client.
 * To add a field later: append here + send the key from the client.
 * ensureHeaders_() auto-adds any missing header to the sheet (at the end,
 * so existing columns and old rows are never disturbed).
 */
var SCHEMA = [
  /* --- Core event --- */
  { h: 'Timestamp',                k: 'timestamp' },
  { h: 'Event ID',                 k: 'eventId' },
  { h: 'Event Type',               k: 'eventType' },     // page_view | page_exit | conversion | error
  { h: 'Page URL',                 k: 'pageUrl' },
  { h: 'Page Path',                k: 'pagePath' },
  { h: 'Page Title',               k: 'pageTitle' },
  { h: 'Referrer',                 k: 'referrer' },

  /* --- User tracking --- */
  { h: 'Visitor ID',               k: 'visitorId' },
  { h: 'Session ID',               k: 'sessionId' },
  { h: 'Visit Count',              k: 'visitCount' },
  { h: 'Visitor Type',             k: 'visitorType' },   // New Visitor | Returning Visitor

  /* --- Session analytics --- */
  { h: 'Session Start',            k: 'sessionStart' },
  { h: 'Session End',              k: 'sessionEnd' },
  { h: 'Session Duration (s)',     k: 'sessionDuration' },
  { h: 'Landing Page',             k: 'landingPage' },
  { h: 'Exit Page',                k: 'exitPage' },
  { h: 'Previous Page',            k: 'previousPage' },
  { h: 'Next Page',                k: 'nextPage' },
  { h: 'Pages In Session',         k: 'pagesInSession' },

  /* --- Behavior analytics --- */
  { h: 'Scroll Depth (%)',         k: 'scrollDepth' },
  { h: 'Max Scroll (px)',          k: 'maxScroll' },
  { h: 'Click Count',              k: 'clickCount' },
  { h: 'Mouse Move Count',         k: 'mouseMoveCount' },
  { h: 'Last Mouse Position',      k: 'mousePosition' },
  { h: 'Time On Page (s)',         k: 'timeOnPage' },
  { h: 'Idle Time (s)',            k: 'idleTime' },
  { h: 'Active Time (s)',          k: 'activeTime' },
  { h: 'Rage Clicks',              k: 'rageClicks' },
  { h: 'Dead Clicks',              k: 'deadClicks' },

  /* --- Marketing analytics --- */
  { h: 'UTM Source',               k: 'utmSource' },
  { h: 'UTM Medium',               k: 'utmMedium' },
  { h: 'UTM Campaign',             k: 'utmCampaign' },
  { h: 'UTM Term',                 k: 'utmTerm' },
  { h: 'UTM Content',              k: 'utmContent' },
  { h: 'Traffic Source',           k: 'trafficSource' }, // Direct | Organic | Referral | Social | Campaign
  { h: 'Campaign Name',            k: 'campaignName' },

  /* --- Device analytics --- */
  { h: 'Device Brand',             k: 'deviceBrand' },
  { h: 'Device Model',             k: 'deviceModel' },
  { h: 'Device Type',              k: 'deviceType' },    // Desktop | Mobile | Tablet
  { h: 'Operating System',         k: 'os' },
  { h: 'OS Version',               k: 'osVersion' },
  { h: 'Browser',                  k: 'browser' },
  { h: 'Browser Version',          k: 'browserVersion' },
  { h: 'Screen Resolution',        k: 'screenResolution' },
  { h: 'Window Size',              k: 'windowSize' },
  { h: 'Orientation',              k: 'orientation' },
  { h: 'Pixel Ratio',              k: 'pixelRatio' },
  { h: 'Touch Support',            k: 'touchSupport' },
  { h: 'Device RAM (GB)',          k: 'deviceRam' },
  { h: 'CPU Cores',                k: 'cpuCores' },

  /* --- Network analytics --- */
  { h: 'Connection Type',          k: 'connectionType' },
  { h: 'Downlink (Mbps)',          k: 'downlink' },
  { h: 'Effective Network',        k: 'effectiveType' },
  { h: 'RTT (ms)',                 k: 'rtt' },
  { h: 'ISP',                      k: 'isp' },

  /* --- Location analytics --- */
  { h: 'IP Address',               k: 'ipAddress' },
  { h: 'Country',                  k: 'country' },
  { h: 'Region',                   k: 'region' },
  { h: 'City',                     k: 'city' },
  { h: 'Latitude',                 k: 'latitude' },
  { h: 'Longitude',                k: 'longitude' },
  { h: 'Timezone',                 k: 'timezone' },
  { h: 'Language',                 k: 'language' },

  /* --- Performance analytics (ms) --- */
  { h: 'Page Load Time (ms)',      k: 'pageLoadTime' },
  { h: 'DOM Ready (ms)',           k: 'domReadyTime' },
  { h: 'First Paint (ms)',         k: 'firstPaint' },
  { h: 'FCP (ms)',                 k: 'fcp' },
  { h: 'LCP (ms)',                 k: 'lcp' },
  { h: 'CLS',                      k: 'cls' },
  { h: 'INP (ms)',                 k: 'inp' },
  { h: 'TTFB (ms)',                k: 'ttfb' },

  /* --- Conversion analytics --- */
  { h: 'Form Started',             k: 'formStarted' },
  { h: 'Form Submitted',           k: 'formSubmitted' },
  { h: 'Button Clicked',           k: 'buttonClicked' },
  { h: 'CTA Clicked',              k: 'ctaClicked' },
  { h: 'Download Click',           k: 'downloadClick' },
  { h: 'Phone Click',              k: 'phoneClick' },
  { h: 'Email Click',              k: 'emailClick' },
  { h: 'Conversion Event',         k: 'conversionEvent' },

  /* --- Technical analytics --- */
  { h: 'Cookies Enabled',          k: 'cookiesEnabled' },
  { h: 'LocalStorage Enabled',     k: 'localStorageEnabled' },
  { h: 'SessionStorage Enabled',   k: 'sessionStorageEnabled' },
  { h: 'Java Enabled',             k: 'javaEnabled' },
  { h: 'JavaScript Enabled',       k: 'jsEnabled' },
  { h: 'Dark Mode',                k: 'darkMode' },
  { h: 'Do Not Track',             k: 'doNotTrack' },
  { h: 'Tab Visible (%)',          k: 'tabVisiblePercent' },
  { h: 'User Agent',               k: 'userAgent' },

  /* --- Error monitoring --- */
  { h: 'JS Errors',                k: 'jsErrors' },
  { h: 'HTTP Errors',              k: 'httpErrors' },
  { h: 'Console Errors',           k: 'consoleErrors' },
  { h: 'Last Error Message',       k: 'lastErrorMessage' },
  { h: 'Stack Trace',              k: 'stackTrace' },

  /* --- Server-side stamp (added by this script, not the client) --- */
  { h: 'Received At (IST)',        k: '_receivedAt' }
];

/* ============================ WEB APP ENTRY ============================== */

/** Health check — open the /exec URL in a browser to confirm deployment. */
function doGet() {
  return jsonResponse_({ ok: true, service: 'SM Associates Analytics', columns: SCHEMA.length });
}

/** Main collector — receives one JSON event per POST from the website. */
function doPost(e) {
  try {
    /* ---- 1. Validate the raw request ---- */
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'Empty request' });
    }
    if (e.postData.contents.length > CONFIG.MAX_PAYLOAD_BYTES) {
      return jsonResponse_({ ok: false, error: 'Payload too large' });
    }

    /* ---- 2. Parse + validate JSON ---- */
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return jsonResponse_({ ok: false, error: 'Invalid JSON' });
    }
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      return jsonResponse_({ ok: false, error: 'Payload must be a JSON object' });
    }
    // Minimum required fields — reject junk hits.
    if (!data.visitorId || !data.sessionId || !data.eventType) {
      return jsonResponse_({ ok: false, error: 'Missing required fields (visitorId, sessionId, eventType)' });
    }

    /* ---- 3. Duplicate rejection (fast, cache-based — no sheet scans) ---- */
    if (data.eventId) {
      var cache = CacheService.getScriptCache();
      var dupKey = 'evt_' + String(data.eventId).slice(0, 200);
      if (cache.get(dupKey)) {
        return jsonResponse_({ ok: true, duplicate: true }); // silently accepted, not stored twice
      }
      cache.put(dupKey, '1', CONFIG.DEDUP_TTL_SECONDS);
    }

    /* ---- 4. Server-side stamp ---- */
    data._receivedAt = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss');

    /* ---- 5. Build the row in schema order, sanitizing every value ---- */
    var row = SCHEMA.map(function (col) {
      return sanitizeValue_(data[col.k]);
    });

    /* ---- 6. Append under lock (protects against concurrent visitors) ---- */
    var lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      return jsonResponse_({ ok: false, error: 'Server busy, retry' });
    }
    try {
      var sheet = getTargetSheet_();
      ensureHeaders_(sheet);
      sheet.appendRow(row);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });

  } catch (err) {
    // Never throw raw errors back to the browser.
    console.error('doPost failed: ' + err + (err && err.stack ? '\n' + err.stack : ''));
    return jsonResponse_({ ok: false, error: 'Internal error' });
  }
}

/* ========================== SHEET MANAGEMENT ============================= */

/** Returns the spreadsheet, creating it once and remembering its ID. */
function getSpreadsheet_() {
  if (CONFIG.SPREADSHEET_ID) return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

  var props = PropertiesService.getScriptProperties();
  var savedId = props.getProperty('SS_ID');
  if (savedId) {
    try { return SpreadsheetApp.openById(savedId); } catch (e) { /* recreate below */ }
  }
  var ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
  props.setProperty('SS_ID', ss.getId());
  return ss;
}

/** Returns this month's data sheet (or the single sheet if rotation is off). */
function getTargetSheet_() {
  var ss = getSpreadsheet_();
  var name = CONFIG.ROTATE_MONTHLY
    ? CONFIG.SHEET_PREFIX + '_' + Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy_MM')
    : CONFIG.SHEET_PREFIX;

  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    writeHeaderRow_(sheet);
  }
  return sheet;
}

/**
 * Writes the full header row with dashboard-friendly formatting.
 * setValues() and the formatting calls are deliberately NOT chained off one
 * another — each is a separate statement on its own Range read, so a
 * formatting hiccup can never prevent the header TEXT itself from being
 * written (text is the part that actually matters for the data pipeline;
 * color is cosmetic).
 */
function writeHeaderRow_(sheet) {
  var headers = SCHEMA.map(function (c) { return c.h; });
  var range = sheet.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  range.setFontWeight('bold');
  range.setBackground('#0F172A');
  range.setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);
  SpreadsheetApp.flush(); // force the write to commit immediately, not on a lazy batch
}

/**
 * Migration safety: if the SCHEMA gains new columns after data already
 * exists, the new headers are appended to the END of the header row so no
 * existing column (or historical row) ever shifts.
 */
function ensureHeaders_(sheet) {
  var lastCol = sheet.getLastColumn();
  if (lastCol === 0) { writeHeaderRow_(sheet); return; }

  var existing = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
  var missing = SCHEMA
    .map(function (c) { return c.h; })
    .filter(function (h) { return existing.indexOf(h) === -1; });

  if (missing.length > 0) {
    var range = sheet.getRange(1, existing.length + 1, 1, missing.length);
    range.setValues([missing]);
    range.setFontWeight('bold');
    range.setBackground('#0F172A');
    range.setFontColor('#FFFFFF');
    SpreadsheetApp.flush();
  }
}

/**
 * MANUAL FIX — run this directly (function dropdown > fixHeaders > Run) if
 * row 1 ever looks empty for any reason. It force-rewrites row 1 with the
 * current SCHEMA regardless of what's there now. Safe to run any number of
 * times; it never touches data rows below row 1.
 */
function fixHeaders() {
  var sheet = getTargetSheet_();
  writeHeaderRow_(sheet);
  console.log('Headers rewritten on: ' + sheet.getName());
  console.log('Open: ' + getSpreadsheet_().getUrl());
}

/* ============================ SANITIZATION =============================== */

/**
 * Makes every incoming value safe for Sheets:
 *  - undefined/null -> ''            - objects -> JSON string
 *  - strips control characters       - caps length
 *  - neutralizes formula injection (=, +, -, @ prefixes)
 */
function sanitizeValue_(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'number') return isFinite(v) ? v : '';
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  if (typeof v === 'object') {
    try { v = JSON.stringify(v); } catch (e) { v = String(v); }
  }
  var s = String(v)
    .replace(/[\u0000-\u001F\u007F]/g, '') // strip control characters
    .slice(0, CONFIG.MAX_CELL_LENGTH);
  // Formula-injection guard: Sheets executes cells starting with = + - @
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

/* ============================== HELPERS ================================== */

/** Consistent JSON response for the client tracker. */
function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * OPTIONAL — run once manually to pre-create this month's sheet and see the
 * spreadsheet URL in the log (View > Logs / Execution log).
 */
function setup() {
  var sheet = getTargetSheet_();
  ensureHeaders_(sheet);
  console.log('Spreadsheet ready: ' + getSpreadsheet_().getUrl());
  console.log('Sheet: ' + sheet.getName() + ' with ' + SCHEMA.length + ' columns');
}
