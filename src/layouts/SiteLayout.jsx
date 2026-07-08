import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEOManager from '../components/SEOManager';

// Suspense fallback for lazy-loaded route chunks: an empty full-height block
// (not a spinner) so the header/footer hold position without any flash while
// the chunk loads — typically imperceptible on repeat visits due to caching.
function RouteFallback() {
  return <div style={{ minHeight: '100vh' }} aria-hidden="true" />;
}

export default function SiteLayout() {
  return (
    <>
      <SEOManager />
      <Header />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}