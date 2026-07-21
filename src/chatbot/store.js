// ─── Chat Store (Zustand) ──────────────────────────────────────────────────
// All conversation state lives here; UI components stay purely presentational.
// Guided flows (lead / feedback) are executed here step-by-step: while a
// flow is active, user input is treated as the answer to the current step
// instead of being routed through intent detection.
//
// Persistence: messages survive refresh via sessionStorage (dies with the
// tab — deliberate privacy boundary). Active flows are NOT persisted:
// restoring a half-answered PII flow after reload is worse than restarting
// it, and keeps personal answers out of storage.

import { create } from 'zustand';
import { processMessage, getWelcome } from './orchestrator';
import { FLOWS } from './agents/conversionAgents';
import { replayPending } from './leadTransport';

const PERSIST_KEY = 'smb-conversation';
let nextId = 1;
const msg = (role, payload) => ({ id: nextId++, role, ...payload });

// Typing indicator dwell — long enough to read as "thinking", short enough
// to never feel slow. Rule-based answers are instant; the pause is pure UX.
const TYPING_MS = 550;

// Typed cancel commands honoured mid-flow (QA BUG-03) — previously
// "cancel" was stored as the step answer (e.g. company name = "cancel").
const CANCEL_RE = /^(cancel|stop|exit|quit|abort|never ?mind|back|restart)$/i;

function loadPersisted() {
  try {
    const raw = sessionStorage.getItem(PERSIST_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Re-key ids above anything restored so new messages never collide.
    nextId = parsed.reduce((m, x) => Math.max(m, x.id || 0), 0) + 1;
    return parsed;
  } catch {
    return [];
  }
}

function persist(messages) {
  try {
    // Cap what we store; strip navigate actions so a restored conversation
    // can never replay a navigation side-effect.
    const safe = messages.slice(-40).map(({ action, ...rest }) => rest);
    sessionStorage.setItem(PERSIST_KEY, JSON.stringify(safe));
  } catch {
    /* storage unavailable — conversation simply won't survive refresh */
  }
}

export const useChatStore = create((set, get) => ({
  open: false,
  openedByUser: false, // false when the 10s auto-open triggered it — the
  // window must not steal keyboard focus in that case (QA BUG-05).
  typing: false,
  messages: loadPersisted(),
  flow: null, // { id, stepIndex, answers }

  openChat({ auto = false } = {}) {
    replayPending(); // retry any queued lead/feedback submissions
    const { messages } = get();
    if (!messages.length) {
      const w = getWelcome();
      const initial = [msg('bot', w)];
      persist(initial);
      set({ open: true, openedByUser: !auto, messages: initial });
    } else {
      set({ open: true, openedByUser: !auto });
    }
  },

  closeChat() {
    set({ open: false });
  },

  /** Entry point for every user turn (typed or chip). */
  send(text, forcedIntent) {
    const trimmed = (text || '').trim();
    if (!trimmed || get().typing) return;

    // Typed cancel commands end an active flow immediately.
    if (get().flow && CANCEL_RE.test(trimmed)) {
      get().cancelFlow();
      return;
    }

    set((s) => {
      const messages = [...s.messages, msg('user', { text: trimmed })];
      persist(messages);
      return { messages, typing: true };
    });

    setTimeout(() => {
      const { flow } = get();
      const response = flow ? get()._advanceFlow(trimmed) : processMessage(trimmed, forcedIntent);

      // An agent may start a guided flow.
      if (response.flow && FLOWS[response.flow.id]) {
        const def = FLOWS[response.flow.id];
        set((s) => {
          const messages = [
            ...s.messages,
            msg('bot', { text: response.text }),
            msg('bot', { text: def.steps[0].prompt, options: def.steps[0].options, isFlowStep: true }),
          ];
          persist(messages);
          return { typing: false, flow: { id: def.id, stepIndex: 0, answers: {} }, messages };
        });
        return;
      }

      set((s) => {
        const messages = [...s.messages, msg('bot', response)];
        persist(messages);
        return { typing: false, messages };
      });
    }, TYPING_MS);
  },

  /** Internal: consume input as the active flow step's answer. */
  _advanceFlow(input) {
    const { flow } = get();
    const def = FLOWS[flow.id];
    const step = def.steps[flow.stepIndex];

    // "skip" honours optional steps; validation failures re-ask.
    const skipped = step.optional && /^(skip|no|na|-)$/i.test(input);
    if (!skipped && step.validate) {
      const ok = step.validate(input);
      if (ok !== true) return { text: ok, options: step.options, isFlowStep: true };
    }

    const answers = { ...flow.answers, [step.key]: skipped ? '' : input };
    const nextIndex = flow.stepIndex + 1;

    if (nextIndex >= def.steps.length) {
      set({ flow: null });
      return def.complete(answers);
    }

    set({ flow: { ...flow, stepIndex: nextIndex, answers } });
    const next = def.steps[nextIndex];
    const hint = next.optional ? ' (type "skip" to skip)' : '';
    return { text: next.prompt + hint, options: next.options, isFlowStep: true };
  },

  cancelFlow() {
    if (!get().flow) return;
    set((s) => {
      const messages = [
        ...s.messages,
        msg('bot', {
          text: 'No problem — cancelled. Anything else I can help with?',
          suggestions: [
            { label: 'Explore services', intent: 'service' },
            { label: 'Contact the team', intent: 'contact' },
          ],
        }),
      ];
      persist(messages);
      return { flow: null, messages };
    });
  },
}));
