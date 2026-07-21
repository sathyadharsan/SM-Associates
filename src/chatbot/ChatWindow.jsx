import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { useChatStore } from './store';
import { QUICK_ACTIONS } from './orchestrator';

// Presentational only — every behaviour lives in store.js / orchestrator.js.

// Chips accept both plain strings and {label, intent} objects — intent-tagged
// chips route straight to their agent instead of re-entering detection.
const chipOf = (s) => (typeof s === 'string' ? { label: s } : s);

const TYPE_BADGE = {
  service: 'Service', industry: 'Industry', 'case-study': 'Case Study',
  faq: 'FAQ', capability: 'Capability', office: 'Office', coverage: 'Coverage',
  resource: 'Resource',
};

function TypingDots() {
  return (
    <div className="smb-msg smb-msg--bot">
      <div className="smb-bubble smb-typing" aria-hidden="true">
        <span /><span /><span />
      </div>
    </div>
  );
}

function BotMessage({ m, active, disabled, onSuggestion, onCardNav }) {
  const chips = (m.options || m.suggestions || []).map(chipOf);
  return (
    <div className="smb-msg smb-msg--bot">
      <div className="smb-bubble">
        {m.text.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {m.cards?.length > 0 && (
        <div className="smb-cards">
          {m.cards.map((c) => (
            <button key={c.href + c.title} type="button" className="smb-card" onClick={() => onCardNav(c.href)}>
              <span className="smb-card-title">
                {c.title}
                {TYPE_BADGE[c.type] && <em className="smb-card-badge">{TYPE_BADGE[c.type]}</em>}
              </span>
              {c.summary && <span className="smb-card-sum">{c.summary}</span>}
              <span className="smb-card-cta">
                {c.cta || 'Read more'} <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Chips are interactive only on the LATEST bot message — stale chips
          from earlier turns can no longer inject text into an active flow
          (QA BUG-03b) or fire outdated suggestions. */}
      {chips.length > 0 && active && (
        <div className="smb-chips">
          {chips.map((s) => (
            <button key={s.label} type="button" className="smb-chip" disabled={disabled} onClick={() => onSuggestion(s)}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatWindow() {
  const navigate = useNavigate();
  const location = useLocation();
  const reduced = useReducedMotion();
  const { open, openedByUser, messages, typing, flow, closeChat, send, cancelFlow } = useChatStore();
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const windowRef = useRef(null);

  // Auto-scroll on new content.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
  }, [messages, typing, reduced]);

  // Focus the composer ONLY on user-initiated opens — the 10s auto-open
  // must never steal keyboard focus from whatever the visitor is doing
  // elsewhere on the page (QA BUG-05 / WCAG 3.2.1).
  useEffect(() => {
    if (open && openedByUser) inputRef.current?.focus();
  }, [open, openedByUser]);

  // On unmount (close), return focus to the launcher so keyboard users
  // aren't dropped at the document root.
  useEffect(() => () => document.getElementById('smb-launcher-btn')?.focus(), []);

  // Escape closes; Tab is trapped inside the dialog while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeChat();
        return;
      }
      if (e.key === 'Tab' && windowRef.current) {
        const focusables = windowRef.current.querySelectorAll('button:not(:disabled), input:not(:disabled)');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeChat]);

  // Card/hash navigation. React Router's pushState does not perform native
  // anchor scrolling, so /#faq-style targets are scrolled manually after
  // the route settles (QA BUG-07).
  const goTo = (href) => {
    const [path, hash] = href.split('#');
    closeChat();
    if (path && path !== location.pathname) navigate(href);
    if (hash) {
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }), 350);
    }
  };

  const handleSend = (e) => {
    e?.preventDefault();
    const value = inputRef.current?.value;
    if (!value?.trim()) return;
    inputRef.current.value = '';
    send(value);
  };

  const handleChip = (chip) => send(chip.label, chip.intent);

  // Agent responses may carry a navigate action — perform it once rendered.
  const lastMessage = messages[messages.length - 1];
  const lastAction = lastMessage?.action;
  useEffect(() => {
    if (lastAction?.type === 'navigate') {
      const t = setTimeout(() => goTo(lastAction.href), 650);
      return () => clearTimeout(t);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAction]);

  const showQuickActions = messages.length <= 1 && !flow;
  const lastBotText = [...messages].reverse().find((m) => m.role === 'bot')?.text || '';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={windowRef}
          className="smb-window"
          role="dialog"
          aria-modal="false"
          aria-label="SM Associates business assistant"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        >
          {/* Screen-reader announcement of the latest bot reply (visually hidden) */}
          <div className="smb-sr-only" aria-live="polite" role="status">
            {typing ? 'Assistant is typing' : lastBotText}
          </div>

          {/* Header */}
          <div className="smb-head">
            <div className="smb-head-id">
              <span className="smb-avatar"><ShieldCheck size={16} /></span>
              <span>
                <span className="smb-head-name">SM Business Assistant</span>
                <span className="smb-head-sub"><i className="smb-dot" /> Answers from our website content</span>
              </span>
            </div>
            <button type="button" className="smb-close" onClick={closeChat} aria-label="Close chat">
              <X size={15} />
            </button>
          </div>

          {/* Messages */}
          <div className="smb-scroll" ref={scrollRef}>
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={m.id} className="smb-msg smb-msg--user">
                  <div className="smb-bubble">{m.text}</div>
                </div>
              ) : (
                <BotMessage
                  key={m.id}
                  m={m}
                  active={i === messages.length - 1}
                  disabled={typing}
                  onSuggestion={handleChip}
                  onCardNav={goTo}
                />
              )
            )}

            {showQuickActions && (
              <div className="smb-chips smb-chips--qa">
                {QUICK_ACTIONS.map((qa) => (
                  <button key={qa.label} type="button" className="smb-chip smb-chip--qa" disabled={typing} onClick={() => send(qa.message, qa.intent)}>
                    {qa.label}
                  </button>
                ))}
              </div>
            )}

            {typing && <TypingDots />}
          </div>

          {/* Composer — input disabled while the bot is "typing" so blocked
              sends are visible, not silently swallowed (QA BUG-12). */}
          <form className="smb-composer" onSubmit={handleSend}>
            {flow && (
              <button type="button" className="smb-cancel" onClick={cancelFlow}>
                Cancel
              </button>
            )}
            <input
              ref={inputRef}
              type="text"
              placeholder={flow ? 'Type your answer…' : 'Ask about services, coverage, case studies…'}
              aria-label="Message"
              maxLength={400}
              disabled={typing}
            />
            <button type="submit" className="smb-send" aria-label="Send message" disabled={typing}>
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
