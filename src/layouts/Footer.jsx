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

// Light "Google-style" footer: white surface, quiet grey links, plain-weight
// column headings, hairline dividers. All links/content identical to the
// previous blue footer — only the visual treatment changed.
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.95fr_0.95fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-12 items-center justify-center rounded-xl border border-gray-100 bg-white p-1.5 shadow-sm">
                <img
                  src="/sm-logo.png"
                  alt="SM Associates Risk Management logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">SM Associates</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Recovery Management</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              Established in 2000, SM Associates helps banks, NBFCs and lenders recover debt through
              structured collections, verification, SARFAESI enforcement and asset recovery.
            </p>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-[#0072bc] hover:text-[#0072bc]" aria-label={link.label}>
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-900">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map(link => (
                <Link key={link.label} to={link.to} className="text-sm text-gray-500 transition hover:text-gray-900">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-900">Services</h3>
            <div className="mt-5 grid gap-3">
              {services.map(service => (
                <Link key={service.label} to={service.to} className="text-sm text-gray-500 transition hover:text-gray-900">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-900">Industries</h3>
            <div className="mt-5 grid gap-3">
              {industriesLinks.map(industry => (
                <Link key={industry.label} to={industry.to} className="text-sm text-gray-500 transition hover:text-gray-900">
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-900">Contact</h3>
            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <p className="text-sm leading-6 text-gray-500">
                  No.10/17, 2nd Floor, East Ellaiamman Koil Street, Kotturpuram, Chennai – 600085
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <div className="grid gap-1 text-sm text-gray-500">
                  <a href="tel:04443060206" className="hover:text-gray-900">044-43060206</a>
                  <a href="tel:04448530577" className="hover:text-gray-900">044-48530577</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <a href="mailto:smarmpl.ho@gmail.com" className="text-sm text-gray-500 hover:text-gray-900">
                  smarmpl.ho@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SM Associates Risk Management Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/about" className="transition hover:text-gray-900">About</Link>
            <Link to="/contact" className="transition hover:text-gray-900">Contact</Link>
            <Link to="/careers" className="transition hover:text-gray-900">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
