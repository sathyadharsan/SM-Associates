import { lazy, Suspense, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useChatStore } from './store';
import './chatbot.css';

// The launcher is tiny and renders on every page; the full window (agents,
// content index, fuzzy search) code-splits into its own chunk that only
// downloads on first open — zero cost to page load and Core Web Vitals.
const ChatWindow = lazy(() => import('./ChatWindow'));

// Auto-open the assistant once per browser session, 10s after the visitor
// lands. The sessionStorage flag guarantees it never re-opens after the
// visitor has seen it once (including if they opened it themselves first,
// or closed it) — a single welcome, never a nag.
const AUTO_OPEN_MS = 10000;
const AUTO_OPEN_KEY = 'smb-auto-opened';

const flagRead = () => {
  try { return sessionStorage.getItem(AUTO_OPEN_KEY) === '1'; } catch { return true; }
};
const flagSet = () => {
  try { sessionStorage.setItem(AUTO_OPEN_KEY, '1'); } catch { /* private mode */ }
};

export default function ChatWidget() {
  const reduced = useReducedMotion();
  const { open, openChat, closeChat } = useChatStore();

  // Any open (manual or automatic) consumes the one auto-open credit.
  useEffect(() => {
    if (open) flagSet();
  }, [open]);

  useEffect(() => {
    if (flagRead()) return undefined;
    const t = setTimeout(() => {
      if (!flagRead() && !useChatStore.getState().open) {
        flagSet();
        openChat();
      }
    }, AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, [openChat]);

  return (
    <>
      <motion.button
        type="button"
        className="smb-launcher"
        aria-label={open ? 'Close business assistant' : 'Open business assistant'}
        aria-expanded={open}
        onClick={() => (open ? closeChat() : openChat())}
        whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
        whileTap={reduced ? undefined : { scale: 0.95 }}
      >
        <MessageCircle size={22} />
        <span className="smb-launcher-ring" aria-hidden="true" />
      </motion.button>

      <Suspense fallback={null}>{open && <ChatWindow />}</Suspense>
    </>
  );
}
