import {
  Fingerprint,
  Briefcase,
  MapPin,
  FileWarning,
  TrendingDown,
  ShieldAlert,
  MapPinned,
  ClipboardCheck,
  Timer,
  ShieldCheck,
  Landmark,
  Building2,
  Home,
  Smartphone,
  Banknote
} from 'lucide-react';

// Shared icon-name -> lucide component registry. Content objects reference
// icons by string name (e.g. 'shieldCheck') so page content stays
// serializable JSON-shaped data, not JSX. Used by any section that renders
// an icon from content (Hero trust row, WhyItMatters, KPI cards, etc).
export const ICONS = {
  fingerprint: Fingerprint,
  briefcase: Briefcase,
  mapPin: MapPin,
  fileWarning: FileWarning,
  trendingDown: TrendingDown,
  shieldAlert: ShieldAlert,
  mapPinned: MapPinned,
  clipboardCheck: ClipboardCheck,
  timer: Timer,
  shieldCheck: ShieldCheck
};

// Rotation used by sections that render a list of cards without a
// per-item icon in the content (e.g. Industries cards).
export const ICON_ROTATION = [Landmark, Building2, Home, Smartphone, Banknote];

export function resolveIcon(name) {
  return ICONS[name] || ShieldCheck;
}
