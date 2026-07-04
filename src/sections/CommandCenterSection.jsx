import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, MapPin, ChevronRight, Navigation, LocateFixed, List } from 'lucide-react';

/* ── All 20 offices with real lat/lon ──────────────────────────────────── */
const OFFICES = [
  { id: 'ho',   code: 'HO',    name: 'Head Office',          city: 'Chennai',      state: 'Tamil Nadu',
    lat: 13.0101, lon: 80.2620, tier: 'hq',
    address: 'No. 10/17, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600 085',
    landmark: 'Near Kotturpuram Railway Station' },
  { id: 'br1',  code: 'BR-1',  name: 'Chennai Branch 1',     city: 'Chennai',      state: 'Tamil Nadu',
    lat: 13.0857, lon: 80.2099, tier: 'branch',
    address: 'No. 21, 1st Floor, 1st Main Road, Jai Nagar, Arumbakkam, Chennai – 600 106' },
  { id: 'br2',  code: 'BR-2',  name: 'Chennai Branch 2',     city: 'Chennai',      state: 'Tamil Nadu',
    lat: 13.0105, lon: 80.2590, tier: 'branch',
    address: 'No. 1, Karunanidhi 2nd Street, Kotturpuram, Chennai – 600 085' },
  { id: 'br3',  code: 'BR-3',  name: 'Chennai Branch 3',     city: 'Chennai',      state: 'Tamil Nadu',
    lat: 13.0477, lon: 80.1553, tier: 'branch',
    address: 'No. F2, Vin Virtusa Homes, 84, 5th Street, Rajas Garden, Vanagaram, Chennai – 600 095',
    landmark: 'Near Porur Toll Plaza' },
  { id: 'br4',  code: 'BR-4',  name: 'Coimbatore Branch 4',  city: 'Coimbatore',   state: 'Tamil Nadu',
    lat: 11.0200, lon: 77.0060, tier: 'branch',
    address: 'No. 437, "Premm Towers", 2nd Floor, Avinashi Road, Peelamedu, Coimbatore – 641 004',
    landmark: 'Opp. SMS Hotel' },
  { id: 'br5',  code: 'BR-5',  name: 'Coimbatore Branch 5',  city: 'Coimbatore',   state: 'Tamil Nadu',
    lat: 10.9825, lon: 77.0110, tier: 'branch',
    address: 'No. 450/1, Trichy Road, Opp. Vasantha Mill, Singanallur, Coimbatore – 641 005' },
  { id: 'br6',  code: 'BR-6',  name: 'Salem Branch',         city: 'Salem',        state: 'Tamil Nadu',
    lat: 11.6488, lon: 78.1465, tier: 'branch',
    address: 'PR Residency, No. 6/111-7, 3rd Floor, Bharathi Nagar 4th Cross, Vellakkalpatti, Salem – 636 012',
    landmark: 'Near Salem ELCO-SEZ IT Park' },
  { id: 'br7',  code: 'BR-7',  name: 'Madurai Branch',       city: 'Madurai',      state: 'Tamil Nadu',
    lat: 9.9252,  lon: 78.1198, tier: 'branch',
    address: 'No. 330 & 331, New LIG Colony, K K Nagar, Madurai – 625 020' },
  { id: 'br8',  code: 'BR-8',  name: 'Tirunelveli Branch',   city: 'Tirunelveli',  state: 'Tamil Nadu',
    lat: 8.7300,  lon: 77.7000, tier: 'branch',
    address: 'Sri Krishna Complex, No. 98/2, Salai Street, Vannarpettai, Tirunelveli – 627 005' },
  { id: 'br9',  code: 'BR-9',  name: 'Tindivanam Branch',    city: 'Tindivanam',   state: 'Tamil Nadu',
    lat: 12.2388, lon: 79.6511, tier: 'branch',
    address: 'No. 150, Gingee Road, MGR Nagar, Tindivanam – 604 001' },
  { id: 'br10', code: 'BR-10', name: 'Trichy Branch',        city: 'Trichy',       state: 'Tamil Nadu',
    lat: 10.7905, lon: 78.7047, tier: 'branch',
    address: 'No. C-145, NVV Castle, 2nd Floor, 6th Cross, Thillai Nagar, Trichy – 620 018' },
  { id: 'br11', code: 'BR-11', name: 'Vellore Branch',       city: 'Vellore',      state: 'Tamil Nadu',
    lat: 12.9165, lon: 79.1325, tier: 'branch',
    address: 'No. 19, 1st Floor, 4th Street, Gopalapuram, Katpadi, Vellore – 632 006',
    landmark: 'Near Akshya Hospital & ESI Dispensary' },
  { id: 'br12', code: 'BR-12', name: 'Dharmapuri Branch',    city: 'Dharmapuri',   state: 'Tamil Nadu',
    lat: 12.1211, lon: 78.1582, tier: 'branch',
    address: 'Door #2/60, N.G.G.O. Colony, Ottapatti, Dharmapuri – 636 705' },
  { id: 'br13', code: 'BR-13', name: 'Cochin Branch',        city: 'Cochin',       state: 'Kerala',
    lat: 9.9312,  lon: 76.2673, tier: 'branch',
    address: 'SRA-63, Sreekala Byline Road, Near EMC, Vennala P.O., Cochin – 682 028' },
  { id: 'br14', code: 'BR-14', name: 'Kollam Branch',        city: 'Kollam',       state: 'Kerala',
    lat: 8.8932,  lon: 76.6141, tier: 'branch',
    address: 'KMC 29/1857, Opposite Indialayappan Temple, Ayathil P.O., Kollam – 691 021' },
  { id: 'br15', code: 'BR-15', name: 'Bengaluru Branch',     city: 'Bengaluru',    state: 'Karnataka',
    lat: 13.0022, lon: 77.5598, tier: 'branch',
    address: 'Makam Plaza, 2nd Floor, 3rd Main Road, 18th Cross Road, Malleshwaram, Bengaluru – 560 055' },
  { id: 'br16', code: 'BR-16', name: 'Shivamogga Branch',    city: 'Shivamogga',   state: 'Karnataka',
    lat: 13.9299, lon: 75.5681, tier: 'branch',
    address: 'Renuka Complex, 1st Floor, Near Bharat Petroleum, Basavveshwar Nagar, Shivamogga – 577 204' },
  { id: 'br17', code: 'BR-17', name: 'Hyderabad Branch',     city: 'Hyderabad',    state: 'Telangana',
    lat: 17.4400, lon: 78.3897, tier: 'branch',
    address: 'Flat No. F1, Srivijaya Laxmi Classic, Erragadda, Hyderabad – 500 038' },
  { id: 'br18', code: 'BR-18', name: 'Vijayawada Branch',    city: 'Vijayawada',   state: 'Andhra Pradesh',
    lat: 16.5062, lon: 80.6480, tier: 'branch',
    address: '"Jasmine Residency", Flat No. 302, Nearby Benz Circle, Vijayawada – 520 008' },
  { id: 'br19', code: 'BR-19', name: 'Puducherry Branch',    city: 'Puducherry',   state: 'Puducherry',
    lat: 11.9416, lon: 79.8083, tier: 'branch',
    address: 'Old Door No. 446, New Door No. 152, 1st Floor, Bharathiyar Salai, Lawspet – 605 008' },
];

const TIER_COLOR = { hq: '#D4AF37', branch: '#3366FF' };
const pinColor = (tier) => TIER_COLOR[tier] ?? '#3366FF';

// Cities with more than one office — clustered into a single marker until
// the user zooms in close enough to tell the individual pins apart.
const CITY_GROUPS = Object.values(
  OFFICES.reduce((acc, o) => {
    (acc[o.city] ||= []).push(o);
    return acc;
  }, {})
);
const CLUSTER_ZOOM_THRESHOLD = 11;

const BOUNDS = OFFICES.map((o) => [o.lat, o.lon]);

/* ── Leaflet styles ─────────────────────────────────────────────────────── */
const LEAFLET_STYLES = `
  .sm-pin-wrap { background: transparent !important; border: none !important; }
  .sm-pin { cursor: pointer; display: flex; align-items: flex-start; justify-content: center;
    position: relative; transition: transform .22s cubic-bezier(0.22,1,0.36,1);
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.45)); }
  .sm-pin:hover { transform: scale(1.25) translateY(-4px); }
  .sm-pin svg { width: 100%; height: 100%; }
  .sm-pin-pulse { position: absolute; border-radius: 50%;
    animation: smPulse 2.3s ease-out infinite; pointer-events: none; }
  @keyframes smPulse {
    0%   { transform: translate(-50%,-50%) scale(0.7); opacity: 0.8; }
    100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
  }
  /* Cluster marker — count badge for cities with multiple offices */
  .sm-cluster { cursor: pointer; display: flex; align-items: center; justify-content: center;
    border-radius: 50%; color: #fff; font-weight: 800; font-family: inherit;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4), 0 0 0 4px rgba(255,255,255,0.85);
    transition: transform .22s cubic-bezier(0.22,1,0.36,1); }
  .sm-cluster:hover { transform: scale(1.12); }
  /* Zoom controls */
  .leaflet-bottom.leaflet-right { z-index: 500 !important; margin-bottom: 18px !important; }
  .leaflet-control-zoom {
    border: none !important; border-radius: 12px !important;
    overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.25) !important;
  }
  .leaflet-control-zoom a {
    background: #fff !important; color: #0f172a !important; border: none !important;
    border-bottom: 1px solid #e2e8f0 !important;
    font-size: 20px !important; font-weight: 300 !important;
    width: 36px !important; height: 36px !important; line-height: 36px !important;
    transition: background .15s, color .15s;
  }
  .leaflet-control-zoom a:hover { background: #3366FF !important; color: #fff !important; }
  .leaflet-control-zoom-in  { border-radius: 12px 12px 0 0 !important; }
  .leaflet-control-zoom-out { border-radius: 0 0 12px 12px !important; border-bottom: none !important; }
  .leaflet-control-attribution {
    background: rgba(255,255,255,0.88) !important; border-radius: 8px 0 0 0 !important;
    font-size: 9px !important; color: #94a3b8 !important;
  }
  .leaflet-control-attribution a { color: #3366FF !important; }
  /* Let scroll pass through map to page; pinch-zoom still works on touch */
  .leaflet-container { touch-action: pan-y !important; }
  .leaflet-grab { cursor: default !important; }
  .leaflet-dragging .leaflet-grab { cursor: default !important; }
  /* Location name labels */
  .sm-label {
    background: rgba(255,255,255,0.94) !important;
    border: none !important;
    border-radius: 6px !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.18) !important;
    padding: 2px 7px !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    white-space: nowrap !important;
    pointer-events: none !important;
  }
  .sm-label::before { display: none !important; }
  .sm-label-hq {
    color: #92651a !important;
    background: rgba(255,248,220,0.97) !important;
    border: 1px solid rgba(212,175,55,0.35) !important;
  }
  .sm-label-branch { color: #1d4ed8 !important; }
`;

/* ── Pin HTML ────────────────────────────────────────────────────────────── */
function buildPinHTML(tier) {
  const c = pinColor(tier);
  const isHQ = tier === 'hq';
  const w = isHQ ? 42 : 34;
  const h = isHQ ? 50 : 42;
  return `<div class="sm-pin" style="width:${w}px;height:${h}px">
    ${isHQ ? `<div class="sm-pin-pulse" style="width:${w}px;height:${w}px;border:2px solid ${c};top:${w/2}px;left:50%;"></div>` : ''}
    <svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g${tier}" x1="14" y1="0" x2="14" y2="36" gradientUnits="userSpaceOnUse">
          <stop stop-color="${c}"/>
          <stop offset="1" stop-color="${c}" stop-opacity="0.78"/>
        </linearGradient>
      </defs>
      <path d="M14 0C8.48 0 4 4.48 4 10c0 8 10 26 10 26S24 18 24 10C24 4.48 19.52 0 14 0z"
        fill="url(#g${tier})" stroke="white" stroke-width="${isHQ ? 1.8 : 1.4}"/>
      <circle cx="14" cy="10" r="${isHQ ? 5 : 4}" fill="white"/>
      ${isHQ ? `<circle cx="14" cy="10" r="2.5" fill="${c}"/>` : ''}
    </svg>
  </div>`;
}

/* ── Cluster badge HTML — count of offices grouped at this city ──────────── */
function buildClusterHTML(count, hasHQ) {
  const c = hasHQ ? TIER_COLOR.hq : TIER_COLOR.branch;
  const size = 40 + Math.min(count, 6) * 2;
  return `<div class="sm-cluster" style="width:${size}px;height:${size}px;background:${c};font-size:${count > 9 ? 13 : 15}px;">${count}</div>`;
}

/* ── Overlay Info Card (top-left, always visible) ───────────────────────── */
function InfoCard({ selected, onClose, onReset }) {
  if (selected) {
    const c = pinColor(selected.tier);
    const isHQ = selected.tier === 'hq';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.address)}`;
    return (
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22 }}
        className="w-[280px] rounded-2xl bg-white p-5 shadow-[0_8px_48px_rgba(0,0,0,0.22)]"
        style={{ border: `1.5px solid ${c}22` }}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wide"
              style={{ background: `${c}15`, color: c }}
            >
              {isHQ && <Star className="h-2.5 w-2.5 fill-current" />}
              {isHQ ? 'Head Office' : 'Branch Office'}
            </span>
            <h3 className="mt-2 font-sora text-[15px] font-bold leading-tight text-slate-900">{selected.name}</h3>
            <p className="mt-0.5 text-[10.5px] font-semibold text-slate-400">{selected.code} · {selected.state}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-slate-300 hover:text-slate-700"
          >
            <X className="h-3 w-3" />
          </button>
        </div>

        <div className="my-3 h-px bg-slate-100" />

        <p className="text-[12px] leading-5 text-slate-600">{selected.address}</p>
        {selected.landmark && (
          <p className="mt-1 text-[10.5px] italic text-slate-400">{selected.landmark}</p>
        )}

        <div className="mt-4 flex gap-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-[11.5px] font-bold text-white transition hover:opacity-90"
            style={{ background: c }}
          >
            <Navigation className="h-3 w-3" /> Directions
          </a>
          <button
            onClick={onReset}
            className="flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-[11.5px] font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <MapPin className="h-3 w-3" /> All
          </button>
        </div>
      </motion.div>
    );
  }

  // Default card
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22 }}
      className="w-[260px] rounded-2xl bg-white p-5 shadow-[0_8px_48px_rgba(0,0,0,0.22)]"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500">
          <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75 absolute" />
        </span>
        <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-500">South India Operations</p>
      </div>
      <h3 className="mt-2 font-sora text-[17px] font-bold leading-tight text-slate-900">
        {OFFICES.length} Offices,<br />6 States
      </h3>
      <p className="mt-2 text-[12px] leading-5 text-slate-500">
        Chennai headquarters anchoring a network of 19 branch offices across South India.
      </p>
      <p className="mt-3 text-[11px] text-slate-400">
        Click any <span className="font-bold text-brand-600">pin</span> for office details. Pinch or use <span className="font-bold">+ −</span> to zoom.
      </p>
    </motion.div>
  );
}

/* ── Location list — shared by desktop sidebar and mobile bottom sheet ──── */
function LocationList({ selected, onSelect }) {
  return (
    <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: 410 }}>
      {OFFICES.map((o) => {
        const c = pinColor(o.tier);
        const isActive = selected?.id === o.id;
        return (
          <button
            key={o.id}
            onClick={() => onSelect(o)}
            className={`group flex w-full items-center gap-2.5 px-4 py-2.5 text-left transition ${isActive ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
          >
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: c }} />
            <div className="min-w-0 flex-1">
              <p className={`truncate text-[11.5px] font-semibold ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                {o.city}
              </p>
              <p className="text-[10px] font-mono text-slate-400">{o.code}</p>
            </div>
            {isActive && <ChevronRight className="h-3 w-3 shrink-0 text-brand-500" />}
          </button>
        );
      })}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────────── */
export default function CommandCenterSection() {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markerLayerRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [mobileListOpen, setMobileListOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById('sm-leaflet-styles')) {
      const s = document.createElement('style');
      s.id = 'sm-leaflet-styles';
      s.textContent = LEAFLET_STYLES;
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => {
    let map;
    let L;

    // Renders individual pins or a single cluster badge per city, depending
    // on the current zoom level — keeps Chennai's 4 offices and
    // Coimbatore's 2 from overlapping into an unreadable pile at low zoom.
    function renderMarkers() {
      const layer = markerLayerRef.current;
      if (!layer) return;
      layer.clearLayers();
      const zoom = map.getZoom();

      CITY_GROUPS.forEach((group) => {
        if (group.length === 1 || zoom >= CLUSTER_ZOOM_THRESHOLD) {
          group.forEach((office) => {
            const isHQ = office.tier === 'hq';
            const icon = L.divIcon({
              html: buildPinHTML(office.tier),
              className: 'sm-pin-wrap',
              iconSize: [isHQ ? 42 : 34, isHQ ? 50 : 42],
              iconAnchor: [isHQ ? 21 : 17, isHQ ? 50 : 42],
            });
            const marker = L.marker([office.lat, office.lon], {
              icon,
              keyboard: true,
              alt: `${office.name}, ${office.city}`,
              title: `${office.name}, ${office.city}`,
            })
              .addTo(layer)
              .on('click', (e) => { L.DomEvent.stopPropagation(e); setSelected(office); });

            marker.bindTooltip(
              `<span>${isHQ ? '★ ' : ''}${office.city}</span>`,
              {
                permanent: true,
                direction: 'right',
                offset: [isHQ ? 14 : 10, isHQ ? -28 : -24],
                className: `sm-label ${isHQ ? 'sm-label-hq' : 'sm-label-branch'}`,
              }
            );
          });
        } else {
          const hasHQ = group.some((o) => o.tier === 'hq');
          const centroid = [
            group.reduce((s, o) => s + o.lat, 0) / group.length,
            group.reduce((s, o) => s + o.lon, 0) / group.length,
          ];
          const size = 40 + Math.min(group.length, 6) * 2;
          const icon = L.divIcon({
            html: buildClusterHTML(group.length, hasHQ),
            className: 'sm-pin-wrap',
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
          });
          const marker = L.marker(centroid, {
            icon,
            keyboard: true,
            alt: `${group[0].city} — ${group.length} offices`,
            title: `${group[0].city} — ${group.length} offices, click to zoom in`,
          })
            .addTo(layer)
            .on('click', (e) => {
              L.DomEvent.stopPropagation(e);
              const groupBounds = L.latLngBounds(group.map((o) => [o.lat, o.lon]));
              map.flyToBounds(groupBounds, { padding: [60, 60], maxZoom: CLUSTER_ZOOM_THRESHOLD + 1, duration: 0.6 });
            });

          marker.bindTooltip(
            `<span>${hasHQ ? '★ ' : ''}${group[0].city} (${group.length})</span>`,
            {
              permanent: true,
              direction: 'right',
              offset: [size / 2 - 6, -size / 2 + 8],
              className: `sm-label ${hasHQ ? 'sm-label-hq' : 'sm-label-branch'}`,
            }
          );
        }
      });
    }

    async function init() {
      L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');
      if (leafletMapRef.current || !mapRef.current) return;

      const bounds = L.latLngBounds(BOUNDS);

      map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false, // scroll wheel = page scroll (NOT map zoom)
        dragging: true,         // mouse click + drag = map pans ✓
        touchZoom: true,        // pinch-to-zoom enabled on touch devices
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: true,         // arrow keys pan, +/- keys zoom
        tap: false,
        minZoom: 5,
        maxZoom: 13,
      });
      map.fitBounds(bounds, { padding: [48, 48] });

      // Touch devices: vertical swipe → page scrolls (not map pan)
      // Desktop: mouse drag → map pans (dragging:true handles this)
      mapRef.current.style.touchAction = 'pan-y';
      leafletMapRef.current = map;

      // ESRI Ocean Basemap — deep sea depth shading & ocean feel
      const baseLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
          maxZoom: 13,
        }
      ).addTo(map);

      // Ocean reference overlay (place names, borders on top of ocean tiles)
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}',
        { opacity: 0.7, maxZoom: 13 }
      ).addTo(map);

      map.zoomControl.setPosition('bottomright');

      markerLayerRef.current = L.layerGroup().addTo(map);
      renderMarkers();
      map.on('zoomend', renderMarkers);

      // Reveal the map only once tiles have actually painted, not just once
      // markers are set up — avoids a flash of pins floating on blank tiles.
      let readyTimer = setTimeout(() => setMapReady(true), 2500);
      baseLayer.once('load', () => { clearTimeout(readyTimer); setMapReady(true); });
    }
    init();
    return () => {
      if (map) map.off('zoomend', renderMarkers);
      if (leafletMapRef.current) { leafletMapRef.current.remove(); leafletMapRef.current = null; }
    };
  }, []);

  // No flyTo — map stays at full South India view when a pin is clicked
  // Only the detail card opens/closes
  const handleReset = () => {
    setSelected(null);
  };

  const handleRecenter = () => {
    if (!leafletMapRef.current) return;
    leafletMapRef.current.flyToBounds(BOUNDS, { padding: [48, 48], duration: 0.7 });
  };

  return (
    <section id="cmd" className="relative w-full" style={{ height: '88vh', minHeight: 600 }}>

      {/* Loading */}
      {!mapReady && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100">
          <div className="flex flex-col items-center gap-3">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
            <p className="text-[13px] font-medium text-slate-500">Loading map…</p>
          </div>
        </div>
      )}

      {/* Full-bleed Leaflet map */}
      <div ref={mapRef} className="absolute inset-0 z-0" />

      {/* ── Overlays (z-[400] to sit above Leaflet tiles) ── */}

      {/* Section label — top center */}
      <div className="pointer-events-none absolute inset-x-0 top-5 z-[400] flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
            SM Associates — South India Operations
          </span>
        </div>
      </div>

      {/* Info card — top left */}
      <div className="absolute left-4 top-16 z-[400] sm:left-6">
        <AnimatePresence mode="wait">
          <InfoCard
            key={selected?.id ?? 'default'}
            selected={selected}
            onClose={handleReset}
            onReset={handleReset}
          />
        </AnimatePresence>
      </div>

      {/* Location list — desktop sidebar, right side */}
      <div className="absolute right-4 top-16 z-[400] hidden sm:right-6 lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-[200px] rounded-2xl bg-white shadow-[0_8px_48px_rgba(0,0,0,0.22)] overflow-hidden"
        >
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">All Locations</p>
          </div>
          <LocationList selected={selected} onSelect={setSelected} />
        </motion.div>
      </div>

      {/* Mobile controls — recenter + "All Locations" toggle */}
      <div className="absolute right-4 top-16 z-[400] flex flex-col gap-2 lg:hidden">
        <button
          onClick={handleRecenter}
          aria-label="Recenter map on South India"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:text-brand-600"
        >
          <LocateFixed className="h-4.5 w-4.5" />
        </button>
        <button
          onClick={() => setMobileListOpen(true)}
          aria-label="View all office locations"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:text-brand-600"
        >
          <List className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Recenter — desktop, next to the location sidebar */}
      <button
        onClick={handleRecenter}
        aria-label="Recenter map on South India"
        className="absolute right-4 top-16 z-[400] hidden h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:text-brand-600 sm:right-6 lg:right-[224px] lg:flex"
      >
        <LocateFixed className="h-4.5 w-4.5" />
      </button>

      {/* Mobile "All Locations" bottom sheet */}
      <AnimatePresence>
        {mobileListOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-slate-900/40 lg:hidden"
            onClick={() => setMobileListOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-0 bottom-0 max-h-[70vh] rounded-t-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">All Locations</p>
                <button onClick={() => setMobileListOpen(false)} aria-label="Close" className="text-slate-400">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <LocationList
                selected={selected}
                onSelect={(o) => { setSelected(o); setMobileListOpen(false); }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats strip — bottom (pointer-events-none on the wrapper so the
          invisible full-width flex row never blocks the Leaflet zoom
          control sitting bottom-right underneath it) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[400] flex justify-center pb-4">
        <div className="pointer-events-auto flex items-center gap-1 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-soft backdrop-blur-sm">
          {[
            { value: '20', label: 'Offices' },
            { value: '916+', label: 'Staff' },
            { value: '6', label: 'States' },
            { value: '25+', label: 'Years' },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className={`px-5 py-2.5 text-center ${i < 3 ? 'border-r border-slate-200' : ''}`}
            >
              <p className="font-sora text-[17px] font-bold text-slate-900">{value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
