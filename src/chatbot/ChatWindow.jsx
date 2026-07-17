import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { useChatStore } from './store';
import { QUICK_ACTIONS } from './orchestrator';

// Presentational only — every behaviour lives in store.js / orchestrator.js.

function TypingDots() {
  return (
    <div className="smb-msg smb-msg--bot" aria-label="Assistant is typing">
      <div className="smb-bubble smb-typing">
        <span /><span /><span />
      </div>
    </div>
  );
}

function BotMessage({ m, onSuggestion, onCardNav }) {
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
              <span className="smb-card-title">{c.title}</span>
              {c.summary && <span className="smb-card-sum">{c.summary}</span>}
              <span className="smb-card-cta">
                {c.cta || 'Read more'} <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      )}

      {(m.options?.length > 0 || m.suggestions?.length > 0) && (
        <div className="smb-chips">
          {(m.options || m.suggestions).map((s) => (
            <button key={s} type="button" className="smb-chip" onClick={() => onSuggestion(s)}>
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatWindow() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const { open, messages, typing, flow, closeChat, send, cancelFlow } = useChatStore();
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-scroll on new content; focus input on open; Escape closes.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
  }, [messages, typing, reduced]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && closeChat();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeChat]);

  const handleCardNav = (href) => {
    closeChat();
    navigate(href);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    const value = inputRef.current?.value;
    if (!value?.trim()) return;
    inputRef.current.value = '';
    send(value);
  };

  // Agent responses may carry a navigate action — perform it once rendered.
  const lastAction = messages[messages.length - 1]?.action;
  useEffect(() => {
    if (lastAction?.type === 'navigate') {
      const t = setTimeout(() => {
        closeChat();
        navigate(lastAction.href);
      }, 650);
      return () => clearTimeout(t);
    }
  }, [lastAction, navigate, closeChat]);

  const showQuickActions = messages.length <= 1 && !flow;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="smb-window"
          role="dialog"
          aria-modal="false"
          aria-label="SM Associates business assistant"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        >
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
            {messages.map((m) =>
              m.role === 'user' ? (
                <div key={m.id} className="smb-msg smb-msg--user">
                  <div className="smb-bubble">{m.text}</div>
                </div>
              ) : (
                <BotMessage key={m.id} m={m} onSuggestion={(s) => send(s)} onCardNav={handleCardNav} />
              )
            )}

            {showQuickActions && (
              <div className="smb-chips smb-chips--qa">
                {QUICK_ACTIONS.map((qa) => (
                  <button key={qa.label} type="button" className="smb-chip smb-chip--qa" onClick={() => send(qa.message, qa.intent)}>
                    {qa.label}
                  </button>
                ))}
              </div>
            )}

            {typing && <TypingDots />}
          </div>

          {/* Composer */}
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
            />
            <button type="submit" className="smb-send" aria-label="Send message">
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
