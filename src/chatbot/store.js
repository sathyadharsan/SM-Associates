// ─── Chat Store (Zustand) ──────────────────────────────────────────────────
// All conversation state lives here; UI components stay purely presentational.
// Guided flows (lead / feedback) are executed here step-by-step: while a
// flow is active, user input is treated as the answer to the current step
// instead of being routed through intent detection.

import { create } from 'zustand';
import { processMessage, getWelcome } from './orchestrator';
import { FLOWS } from './agents/conversionAgents';

let nextId = 1;
const msg = (role, payload) => ({ id: nextId++, role, ...payload });

// Typing indicator dwell — long enough to read as "thinking", short enough
// to never feel slow. Rule-based answers are instant; the pause is pure UX.
const TYPING_MS = 550;

export const useChatStore = create((set, get) => ({
  open: false,
  typing: false,
  messages: [],
  flow: null, // { id, stepIndex, answers }

  openChat() {
    const { messages } = get();
    if (!messages.length) {
      const w = getWelcome();
      set({ open: true, messages: [msg('bot', w)] });
    } else {
      set({ open: true });
    }
  },

  closeChat() {
    set({ open: false });
  },

  /** Entry point for every user turn (typed or quick-action). */
  send(text, forcedIntent) {
    const trimmed = (text || '').trim();
    if (!trimmed || get().typing) return;
    set((s) => ({ messages: [...s.messages, msg('user', { text: trimmed })], typing: true }));

    setTimeout(() => {
      const { flow } = get();
      const response = flow ? get()._advanceFlow(trimmed) : processMessage(trimmed, forcedIntent);

      // An agent may start a guided flow.
      if (response.flow && FLOWS[response.flow.id]) {
        const def = FLOWS[response.flow.id];
        set((s) => ({
          typing: false,
          flow: { id: def.id, stepIndex: 0, answers: {} },
          messages: [
            ...s.messages,
            msg('bot', { text: response.text }),
            msg('bot', { text: def.steps[0].prompt, options: def.steps[0].options, isFlowStep: true }),
          ],
        }));
        return;
      }

      set((s) => ({ typing: false, messages: [...s.messages, msg('bot', response)] }));
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
    set((s) => ({
      flow: null,
      messages: [...s.messages, msg('bot', { text: 'No problem — flow cancelled. Anything else I can help with?', suggestions: ['Explore services', 'Contact the team'] })],
    }));
  },
}));
