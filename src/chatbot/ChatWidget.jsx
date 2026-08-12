import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useChatStore } from './store';
import './chatbot.css';

// The launcher is tiny and renders on every page; the full window (agents,
// content index, fuzzy search) code-splits into its own chunk that only
// downloads on first open — zero cost to page load and Core Web Vitals.
const ChatWindow = lazy(() => import('./ChatWindow'));

export default function ChatWidget() {
  const reduced = useReducedMotion();
  const { open, openChat, closeChat } = useChatStore();

  return (
    <>
      <motion.button
        type="button"
        id="smb-launcher-btn"
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
