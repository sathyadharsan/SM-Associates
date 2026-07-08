import { useEffect } from 'react';
import Button from '../components/Button';

// Catch-all route (see src/routes/index.jsx, path="*"). Overrides the title
// SEOManager just set and adds noindex — a 404 page should never be indexed
// or compete in search results with real pages.
export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | SM Associates';
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');

    return () => {
      // Restore indexability once the visitor navigates to a real page —
      // SEOManager's own effect will overwrite title/description right after,
      // but robots must be explicitly reset since no other route sets it.
      robots.setAttribute('content', 'index, follow');
    };
  }, []);

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-white pt-28 pb-20">
      <div className="noise-overlay absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-700">Error 404</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] text-gray-950 sm:text-5xl">
          This page doesn't exist.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-500">
          The page you're looking for may have moved or the link may be outdated.
          Here are a few places to get back on track.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/">Back to Home</Button>
          <Button to="/services" variant="secondary">Explore Services</Button>
          <Button to="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
