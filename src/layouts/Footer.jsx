import { Link } from 'react-router-dom';
import { Globe, Link2, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { servicesMenu, industries } from '../data/homeData';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Capabilities', to: '/platform' },
  { label: 'Resources', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' }
];

const services = servicesMenu.map(s => ({ label: s.title, to: '/services' }));
const industriesLinks = industries.map(i => ({ label: i.title, to: '/industries' }));

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Link2 },
  { label: 'Facebook', href: '#', icon: Share2 },
  { label: 'Website', href: '#', icon: Globe }
];

export default function Footer() {
  return (
    <footer className="bg-[#3366FF] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.95fr_0.95fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-12 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                <img
                  src="/sm-logo.png"
                  alt="SM Associates Risk Management logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-base font-bold">SM Associates</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">Recovery Management</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
              Established in 2000, SM Associates helps banks, NBFCs and lenders recover debt through
              structured collections, verification, SARFAESI enforcement and asset recovery.
            </p>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-950" aria-label={link.label}>
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map(link => (
                <Link key={link.label} to={link.to} className="text-sm text-white/68 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">Services</h3>
            <div className="mt-5 grid gap-3">
              {services.map(service => (
                <Link key={service.label} to={service.to} className="text-sm text-white/68 transition hover:text-white">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">Industries</h3>
            <div className="mt-5 grid gap-3">
              {industriesLinks.map(industry => (
                <Link key={industry.label} to={industry.to} className="text-sm text-white/68 transition hover:text-white">
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">Contact</h3>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <p className="text-sm leading-6 text-white/68">
                  No.10/17, 2nd Floor, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600085
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div className="grid gap-1 text-sm text-white/68">
                  <a href="tel:04443060206" className="hover:text-white">044-43060206</a>
                  <a href="tel:04448530577" className="hover:text-white">044-48530577</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <a href="mailto:smarmpl.ho@gmail.com" className="text-sm text-white/68 hover:text-white">
                  smarmpl.ho@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} SM Associates Risk Management Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}