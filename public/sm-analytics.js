/**
 * ============================================================================
 *  SM ASSOCIATES — WEBSITE ANALYTICS TRACKER (client side)
 * ============================================================================
 *  Companion to analytics/Code.gs (Google Apps Script backend).
 *  Collects user / session / behavior / marketing / device / network /
 *  location / performance / conversion / technical / error data and posts
 *  it to the Apps Script Web App, which stores it in Google Sheets.
 *
 *  Every event is sent via fetch(). The request Content-Type is deliberately
 *  "text/plain" rather than "application/json": Apps Script Web Apps cannot
 *  answer CORS preflight (OPTIONS) requests, and application/json forces the
 *  browser to send one first. text/plain is a CORS-safelisted content type,
 *  so the browser sends it as a "simple request" (no preflight) and the POST
 *  actually reaches the server. The BODY is still valid JSON either way —
 *  Code.gs reads the raw text and JSON.parse()s it — so nothing about the
 *  data format changes, only the HTTP header label.
 *
 *  Rows produced per page: 1 x page_view, 1 x page_exit (+ conversion rows).
 *  SPA-aware: React Router route changes are tracked as separate pages.
 * ============================================================================
 */
(function () {
  'use strict';

  /* ------------------------------ CONFIG -------------------------------- */
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzEbK93Tt3EMJ77TF9Dqn_v4n-8rHzJqU0wrLvagUSDLiJJ3YEnGWew_evMsIEVGlAA/exec';
  var GEO_LOOKUP = true;              // ipapi.co (free) for IP/country/city/ISP
  var SESSION_TIMEOUT_MIN = 30;       // inactivity window that ends a session
  var IDLE_THRESHOLD_S = 5;           // seconds without input = idle

  if (!ENDPOINT) {
    if (window.console) console.warn('[sm-analytics] ENDPOINT not set — tracker idle.');
    return;
  }

  /* --------------------------- SMALL HELPERS ---------------------------- */
  function now() { return Date.now(); }
  function uuid() {
    return 'xxxxxxxx-4xxx'.replace(/x/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    }) + '-' + now().toString(36);
  }
  function safeGet(store, k) { try { return store.getItem(k); } catch (e) { return null; } }
  function safeSet(store, k, v) { try { store.setItem(k, v); } catch (e) { } }
  function storageWorks(store) {
    try { store.setItem('__t', '1'); store.removeItem('__t'); return 'Yes'; } catch (e) { return 'No'; }
  }

  /* --------------------------- USER TRACKING ---------------------------- */
  var visitorId = safeGet(localStorage, 'sm_vid');
  var visitorType = 'Returning Visitor';
  if (!visitorId) {
    visitorId = uuid();
    safeSet(localStorage, 'sm_vid', visitorId);
    visitorType = 'New Visitor';
  }

  // Session: new if none exists or last activity was > timeout ago.
  var sessionId = safeGet(sessionStorage, 'sm_sid');
  var lastSeen = parseInt(safeGet(localStorage, 'sm_last_seen') || '0', 10);
  var isNewSession = !sessionId || (now() - lastSeen > SESSION_TIMEOUT_MIN * 60 * 1000);
  if (isNewSession) {
    sessionId = uuid();
    safeSet(sessionStorage, 'sm_sid', sessionId);
    safeSet(sessionStorage, 'sm_session_start', String(now()));
    safeSet(sessionStorage, 'sm_landing', location.pathname);
    safeSet(sessionStorage, 'sm_pages', '0');
    var visits = parseInt(safeGet(localStorage, 'sm_visits') || '0', 10) + 1;
    safeSet(localStorage, 'sm_visits', String(visits));
  }
  safeSet(localStorage, 'sm_last_seen', String(now()));
  var visitCount = parseInt(safeGet(localStorage, 'sm_visits') || '1', 10);
  var sessionStart = parseInt(safeGet(sessionStorage, 'sm_session_start') || String(now()), 10);
  if (visitCount > 1 && visitorType === 'New Visitor') visitorType = 'Returning Visitor';

  /* ------------------------ MARKETING / TRAFFIC -------------------------- */
  var qs = new URLSearchParams(location.search);
  function utm(key) {
    var v = qs.get(key);
    if (v) { safeSet(sessionStorage, 'sm_' + key, v); return v; }
    return safeGet(sessionStorage, 'sm_' + key) || '';
  }
  var utmSource = utm('utm_source'), utmMedium = utm('utm_medium'),
    utmCampaign = utm('utm_campaign'), utmTerm = utm('utm_term'),
    utmContent = utm('utm_content');

  function trafficSource() {
    if (utmSource) return 'Campaign';
    var ref = document.referrer;
    if (!ref) return 'Direct';
    try {
      var host = new URL(ref).hostname;
      if (host.indexOf(location.hostname) !== -1) return 'Internal';
      if (/google\.|bing\.|yahoo\.|duckduckgo\./.test(host)) return 'Organic Search';
      if (/facebook\.|instagram\.|linkedin\.|twitter\.|x\.com|youtube\.|whatsapp\./.test(host)) return 'Social';
      return 'Referral';
    } catch (e) { return 'Referral'; }
  }

  /* --------------------------- DEVICE PARSING ---------------------------- */
  var ua = navigator.userAgent;
  function detect(re, def) { var m = ua.match(re); return m ? m[1] || m[0] : def; }
  var os = /Windows NT/.test(ua) ? 'Windows' : /Android/.test(ua) ? 'Android'
    : /iPhone|iPad|iPod/.test(ua) ? 'iOS' : /Mac OS X/.test(ua) ? 'macOS'
      : /Linux/.test(ua) ? 'Linux' : 'Other';
  var osVersion = os === 'Windows' ? detect(/Windows NT ([\d.]+)/, '')
    : os === 'Android' ? detect(/Android ([\d.]+)/, '')
      : os === 'iOS' ? detect(/OS (\d+[_\d]*)/, '').replace(/_/g, '.')
        : os === 'macOS' ? detect(/Mac OS X (\d+[_\d.]*)/, '').replace(/_/g, '.') : '';
  var browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera'
    : /SamsungBrowser/.test(ua) ? 'Samsung Internet'
      : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) && /Version\//.test(ua) ? 'Safari'
        : /Firefox\//.test(ua) ? 'Firefox' : 'Other';
  var browserVersion = browser === 'Edge' ? detect(/Edg\/([\d.]+)/, '')
    : browser === 'Opera' ? detect(/OPR\/([\d.]+)/, '')
      : browser === 'Chrome' ? detect(/Chrome\/([\d.]+)/, '')
        : browser === 'Safari' ? detect(/Version\/([\d.]+)/, '')
          : browser === 'Firefox' ? detect(/Firefox\/([\d.]+)/, '') : '';
  var deviceType = /iPad|Tablet/.test(ua) || (/(Android)/.test(ua) && !/Mobile/.test(ua)) ? 'Tablet'
    : /Mobi|iPhone|Android/.test(ua) ? 'Mobile' : 'Desktop';
  var uaData = navigator.userAgentData || null;
  var deviceBrand = '', deviceModel = '';
  if (uaData && uaData.getHighEntropyValues) {
    uaData.getHighEntropyValues(['model', 'platformVersion']).then(function (d) {
      deviceModel = d.model || '';
    }).catch(function () { });
    if (uaData.brands && uaData.brands.length) deviceBrand = uaData.brands[uaData.brands.length - 1].brand;
  }
  if (!deviceBrand) deviceBrand = os === 'iOS' || os === 'macOS' ? 'Apple' : /Samsung/i.test(ua) ? 'Samsung' : '';

  /* ------------------------------ NETWORK -------------------------------- */
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};

  /* --------------------------- GEO (per session) -------------------------- */
  var geo = null;
  try { geo = JSON.parse(safeGet(sessionStorage, 'sm_geo') || 'null'); } catch (e) { }
  if (GEO_LOOKUP && !geo) {
    fetch('https://ipapi.co/json/').then(function (r) { return r.json(); }).then(function (g) {
      geo = {
        ip: g.ip || '', country: g.country_name || '', region: g.region || '',
        city: g.city || '', lat: g.latitude || '', lon: g.longitude || '',
        tz: g.timezone || '', isp: g.org || ''
      };
      safeSet(sessionStorage, 'sm_geo', JSON.stringify(geo));
    }).catch(function () { geo = null; });
  }

  /* ---------------------------- PERFORMANCE ------------------------------ */
  var perf = { load: '', domReady: '', fp: '', fcp: '', lcp: '', cls: 0, inp: '', ttfb: '' };
  try {
    var nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
      perf.ttfb = Math.round(nav.responseStart);
      perf.domReady = Math.round(nav.domContentLoadedEventEnd);
    }
    window.addEventListener('load', function () {
      setTimeout(function () {
        var n2 = performance.getEntriesByType('navigation')[0];
        if (n2 && n2.loadEventEnd) perf.load = Math.round(n2.loadEventEnd);
        performance.getEntriesByType('paint').forEach(function (p) {
          if (p.name === 'first-paint') perf.fp = Math.round(p.startTime);
          if (p.name === 'first-contentful-paint') perf.fcp = Math.round(p.startTime);
        });
      }, 0);
    });
    new PerformanceObserver(function (list) {
      var e = list.getEntries(); if (e.length) perf.lcp = Math.round(e[e.length - 1].startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) { if (!e.hadRecentInput) perf.cls += e.value; });
    }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) {
        if (e.interactionId) perf.inp = Math.max(perf.inp || 0, Math.round(e.duration));
      });
    }).observe({ type: 'event', buffered: true, durationThreshold: 40 });
  } catch (e) { }

  /* ------------------------- BEHAVIOR TRACKING --------------------------- */
  // Snapshot of the page we are CURRENTLY measuring. On SPA route changes the
  // browser URL flips before page_exit is sent — these keep exit data honest.
  var currentPath = location.pathname;
  var currentUrl = location.href;
  var b = {
    pageStart: now(), clicks: 0, moves: 0, mouseX: 0, mouseY: 0,
    maxScrollPx: 0, maxScrollPct: 0, rage: 0, dead: 0,
    activeMs: 0, lastActivity: now(), visibleMs: 0, lastVisible: now(),
    formStarted: 'No', formSubmitted: 'No', buttons: 0, ctas: 0
  };
  var errors = { js: 0, http: 0, console: 0, lastMsg: '', stack: '' };
  var recentClicks = [];

  function markActive() {
    var t = now();
    if (t - b.lastActivity < IDLE_THRESHOLD_S * 1000) b.activeMs += t - b.lastActivity;
    b.lastActivity = t;
    safeSet(localStorage, 'sm_last_seen', String(t));
  }
  ['scroll', 'keydown', 'touchstart', 'pointerdown'].forEach(function (ev) {
    window.addEventListener(ev, markActive, { passive: true });
  });

  window.addEventListener('mousemove', function (e) {
    b.moves++; b.mouseX = e.clientX; b.mouseY = e.clientY;
    if (b.moves % 25 === 0) markActive();
  }, { passive: true });

  window.addEventListener('scroll', function () {
    var y = window.scrollY + window.innerHeight;
    var h = document.documentElement.scrollHeight || 1;
    if (y > b.maxScrollPx) b.maxScrollPx = Math.round(y);
    var pct = Math.min(100, Math.round((y / h) * 100));
    if (pct > b.maxScrollPct) b.maxScrollPct = pct;
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') b.visibleMs += now() - b.lastVisible;
    else b.lastVisible = now();
  });

  /* Clicks: counts + rage (4 clicks / 700ms / 40px) + dead + conversions */
  document.addEventListener('click', function (e) {
    b.clicks++; markActive();
    var t = now();
    recentClicks = recentClicks.filter(function (c) { return t - c.t < 700; });
    recentClicks.push({ t: t, x: e.clientX, y: e.clientY });
    if (recentClicks.length >= 4 &&
      recentClicks.every(function (c) {
        return Math.abs(c.x - e.clientX) < 40 && Math.abs(c.y - e.clientY) < 40;
      })) { b.rage++; recentClicks = []; }

    var el = e.target.closest('a,button,input,select,textarea,label,[role="button"],[onclick]');
    if (!el) { b.dead++; return; }

    if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') b.buttons++;
    if (el.className && /fg-btn|cta|btn-p/.test(String(el.className))) b.ctas++;

    var href = (el.tagName === 'A' && el.getAttribute('href')) || '';
    if (/^tel:/.test(href)) sendConversion('Phone Click', href, { phoneClick: 'Yes' });
    else if (/^mailto:/.test(href)) sendConversion('Email Click', href, { emailClick: 'Yes' });
    else if (el.hasAttribute('download') || /\.(pdf|docx?|xlsx?|zip)([?#]|$)/i.test(href)) {
      sendConversion('Download Click', href, { downloadClick: 'Yes' });
    } else if (/fg-btn-p|cta/.test(String(el.className))) {
      sendConversion('CTA Click', (el.textContent || '').trim().slice(0, 80), { ctaClicked: 'Yes' });
    }
  }, true);

  document.addEventListener('focusin', function (e) {
    if (e.target.closest('form')) b.formStarted = 'Yes';
  });
  document.addEventListener('submit', function (e) {
    b.formSubmitted = 'Yes';
    sendConversion('Form Submit', (e.target.getAttribute('id') || e.target.getAttribute('name') || 'form'), { formSubmitted: 'Yes' });
  }, true);

  /* --------------------------- ERROR MONITORING -------------------------- */
  window.addEventListener('error', function (e) {
    if (e.target && (e.target.src || e.target.href)) { errors.http++; return; } // resource load failure
    errors.js++;
    errors.lastMsg = String(e.message || '').slice(0, 200);
    errors.stack = String(e.error && e.error.stack || '').slice(0, 400);
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    errors.js++;
    errors.lastMsg = String(e.reason && e.reason.message || e.reason || '').slice(0, 200);
    errors.stack = String(e.reason && e.reason.stack || '').slice(0, 400);
  });
  var origConsoleError = console.error;
  console.error = function () { errors.console++; return origConsoleError.apply(console, arguments); };

  /* ------------------------------ PAYLOAD -------------------------------- */
  function basePayload(eventType) {
    var g = geo || {};
    return {
      timestamp: new Date().toISOString(),
      eventId: visitorId.slice(0, 8) + '_' + sessionId.slice(0, 8) + '_' + eventType + '_' + now(),
      eventType: eventType,
      pageUrl: currentUrl.slice(0, 300),
      pagePath: currentPath,
      pageTitle: document.title,
      referrer: document.referrer.slice(0, 200),

      visitorId: visitorId, sessionId: sessionId,
      visitCount: visitCount, visitorType: visitorType,

      sessionStart: new Date(sessionStart).toISOString(),
      sessionEnd: eventType === 'page_exit' ? new Date().toISOString() : '',
      sessionDuration: Math.round((now() - sessionStart) / 1000),
      landingPage: safeGet(sessionStorage, 'sm_landing') || '',
      exitPage: eventType === 'page_exit' ? currentPath : '',
      previousPage: safeGet(sessionStorage, 'sm_prev_page') || '',
      nextPage: '',
      pagesInSession: parseInt(safeGet(sessionStorage, 'sm_pages') || '0', 10),

      scrollDepth: b.maxScrollPct, maxScroll: b.maxScrollPx,
      clickCount: b.clicks, mouseMoveCount: b.moves,
      mousePosition: b.mouseX + ',' + b.mouseY,
      timeOnPage: Math.round((now() - b.pageStart) / 1000),
      activeTime: Math.round(b.activeMs / 1000),
      idleTime: Math.max(0, Math.round((now() - b.pageStart - b.activeMs) / 1000)),
      rageClicks: b.rage, deadClicks: b.dead,

      utmSource: utmSource, utmMedium: utmMedium, utmCampaign: utmCampaign,
      utmTerm: utmTerm, utmContent: utmContent,
      trafficSource: trafficSource(), campaignName: utmCampaign,

      deviceBrand: deviceBrand, deviceModel: deviceModel, deviceType: deviceType,
      os: os, osVersion: osVersion, browser: browser, browserVersion: browserVersion,
      screenResolution: screen.width + 'x' + screen.height,
      windowSize: window.innerWidth + 'x' + window.innerHeight,
      orientation: (screen.orientation && screen.orientation.type) || (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'),
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: ('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 'Yes' : 'No',
      deviceRam: navigator.deviceMemory || '',
      cpuCores: navigator.hardwareConcurrency || '',

      connectionType: conn.type || '', downlink: conn.downlink || '',
      effectiveType: conn.effectiveType || '', rtt: conn.rtt || '',
      isp: g.isp || '',

      ipAddress: g.ip || '', country: g.country || '', region: g.region || '',
      city: g.city || '', latitude: g.lat || '', longitude: g.lon || '',
      timezone: g.tz || Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      language: navigator.language || '',

      pageLoadTime: perf.load, domReadyTime: perf.domReady,
      firstPaint: perf.fp, fcp: perf.fcp, lcp: perf.lcp,
      cls: Math.round(perf.cls * 1000) / 1000, inp: perf.inp, ttfb: perf.ttfb,

      formStarted: b.formStarted, formSubmitted: b.formSubmitted,
      buttonClicked: b.buttons, ctaClicked: b.ctas,
      downloadClick: '', phoneClick: '', emailClick: '', conversionEvent: '',

      cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
      localStorageEnabled: storageWorks(localStorage),
      sessionStorageEnabled: storageWorks(sessionStorage),
      javaEnabled: (navigator.javaEnabled && navigator.javaEnabled()) ? 'Yes' : 'No',
      jsEnabled: 'Yes',
      darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Yes' : 'No',
      doNotTrack: navigator.doNotTrack === '1' ? 'Yes' : 'No',
      tabVisiblePercent: Math.min(100, Math.round(((b.visibleMs + (document.visibilityState === 'visible' ? now() - b.lastVisible : 0)) / Math.max(1, now() - b.pageStart)) * 100)),
      userAgent: ua.slice(0, 300),

      jsErrors: errors.js, httpErrors: errors.http, consoleErrors: errors.console,
      lastErrorMessage: errors.lastMsg, stackTrace: errors.stack
    };
  }

  /* ------------------------------- SENDER -------------------------------- */
  /**
   * Every event — page_view, page_exit, conversions — goes through this one
   * function, via fetch(). `keepalive: true` is what makes fetch() safe to
   * call on page unload (the browser finishes sending it even after the
   * page is gone), so a dedicated sendBeacon() path isn't needed.
   *
   * Content-Type is "text/plain", not "application/json" — see the file
   * header comment for why: Apps Script can't answer a CORS preflight, and
   * application/json triggers one. The body is still JSON.stringify(payload)
   * either way, and Code.gs JSON.parses it normally.
   */
  function send(payload) {
    try {
      fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      if (window.console) console.warn('[sm-analytics] send failed', e);
    }
  }

  function sendConversion(name, detail, extra) {
    var p = basePayload('conversion');
    p.conversionEvent = name + (detail ? ' — ' + String(detail).slice(0, 120) : '');
    if (extra) Object.keys(extra).forEach(function (k) { p[k] = extra[k]; });
    send(p);
  }

  /* --------------------------- PAGE LIFECYCLE ---------------------------- */
  var exitSent = false;
  function sendPageView() {
    var pages = parseInt(safeGet(sessionStorage, 'sm_pages') || '0', 10) + 1;
    safeSet(sessionStorage, 'sm_pages', String(pages));
    // Delay slightly so load/paint metrics are populated for most visits.
    setTimeout(function () { send(basePayload('page_view')); }, 2500);
  }
  function sendPageExit() {
    if (exitSent) return;
    exitSent = true;
    if (document.visibilityState === 'visible') b.visibleMs += now() - b.lastVisible;
    send(basePayload('page_exit'));
    safeSet(sessionStorage, 'sm_prev_page', currentPath);
  }

  window.addEventListener('pagehide', sendPageExit);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') sendPageExit();
  });

  /* SPA route changes (React Router uses history.pushState) */
  function onRouteChange() {
    sendPageExit();
    // Reset per-page state for the new "page".
    exitSent = false;
    b.pageStart = now(); b.clicks = 0; b.moves = 0; b.maxScrollPx = 0; b.maxScrollPct = 0;
    b.rage = 0; b.dead = 0; b.activeMs = 0; b.lastActivity = now();
    b.visibleMs = 0; b.lastVisible = now();
    b.formStarted = 'No'; b.formSubmitted = 'No'; b.buttons = 0; b.ctas = 0;
    perf.load = ''; perf.domReady = ''; perf.fp = ''; perf.fcp = ''; perf.lcp = ''; perf.ttfb = '';
    // Now that the old page's exit is recorded, adopt the new route.
    currentPath = location.pathname;
    currentUrl = location.href;
    sendPageView();
  }
  var origPush = history.pushState;
  history.pushState = function () {
    var r = origPush.apply(this, arguments);
    setTimeout(onRouteChange, 50);
    return r;
  };
  window.addEventListener('popstate', function () { setTimeout(onRouteChange, 50); });

  /* ------------------------------- START --------------------------------- */
  sendPageView();
})();
