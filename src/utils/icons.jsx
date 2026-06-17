import {
  Award,
  Briefcase,
  Building2,
  Car,
  ClipboardCheck,
  CreditCard,
  FileText,
  Gavel,
  Handshake,
  Home,
  Landmark,
  MapPin,
  MonitorSmartphone,
  Percent,
  Repeat,
  Scale,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sprout,
  Target,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export const iconMap = {
  Award,
  Briefcase,
  Building2,
  Car,
  ClipboardCheck,
  CreditCard,
  FileText,
  Gavel,
  Handshake,
  Home,
  Landmark,
  MapPin,
  MonitorSmartphone,
  Percent,
  Repeat,
  Scale,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sprout,
  Target,
  TrendingUp,
  UserCheck
};

export function getIcon(name) {
  const Icon = iconMap[name];
  return Icon ? <Icon className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />;
}
