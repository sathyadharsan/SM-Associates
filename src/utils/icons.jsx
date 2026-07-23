import React from 'react';
import RichIcon from '../components/sections/shared/RichIcon';
import {
  Award,
  Briefcase,
  Building2,
  Car,
  ClipboardCheck,
  CreditCard,
  Download,
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
  UserCheck,
  Users,
  Calendar
} from 'lucide-react';

export const iconMap = {
  Award,
  Briefcase,
  Building2,
  Car,
  ClipboardCheck,
  CreditCard,
  Download,
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
  UserCheck,
  Users,
  Calendar
};

// Global Content-Based Artwork Micro-Illustration Resolver
export function getIcon(name, size = 44) {
  return <RichIcon type={name} size={size} />;
}
