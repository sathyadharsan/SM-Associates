import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEOManager from '../components/SEOManager';
import ChatWidget from '../chatbot/ChatWidget';

// Suspense fallback for lazy-loaded route chunks: an empty full-height block
// (not a spinner) so the header/footer hold position without any flash while
// the chunk loads — typically imperceptible on repeat visits due to caching.
function RouteFallback() {
  return <div style={{ minHeight: '100vh' }} aria-hidden="true" />;
}

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.search, location.key]);

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
      {/* Business assistant — launcher on every page; the chat window and
          its content index lazy-load into a separate chunk on first open. */}
      <ChatWidget />
    </>
  );
}