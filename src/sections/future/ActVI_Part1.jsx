/**
 * Act VI, Part 1 — The Intelligent Enterprise: Chapters 6–7
 * (Scenes 12, 13, 14-peak)
 *
 * A former standalone Scene 15 ("Prepared before she ever arrives") was
 * folded into Scene 13 as a closing line — it repeated Scene 13's own
 * stagger-reveal list device one beat later with no new idea of its own.
 *
 * All whileInView-based — no scroll-pinning in this act. Acts II–IV
 * already carry the film's scroll-scrubbing craft; this act instead
 * varies its reveal choreography scene to scene (a swarm, a horizontal
 * flow, a framed assembly) so nothing here repeats another scene's
 * animation pattern without adding more fragile pin/ref surface area
 * this deep into the build.
 */

import { motion } from 'framer-motion';
import { ActHeading, PeakStatement, BRAND, midSize, displayType } from './futureShared';

// ── Scene 12 — Every account tells a story ─────────────────────────
const LOAN_IDS = ['45872', '55891', '77381', '99271', '61042', '38650', '82914', '20573', '46389', '71205'];
const LABELS = ['Behaviour', 'Intent', 'Affordability', 'Employment', 'History', 'Location', 'Compliance'];

function Scene12() {
  return (
    <section className="scroll-mt-28 border-t border-slate-100 bg-white px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <ActHeading eyebrow="ACCOUNT INTELLIGENCE" title="Every decision begins with intelligence" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
        className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2.5"
      >
        {LOAN_IDS.map((id, i) => (
          <motion.span
            key={id}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            style={{ rotate: (i % 2 === 0 ? -1 : 1) * (2 + (i % 3)) }}
            className="rounded border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-[11.5px] text-slate-400"
          >
            Loan {id}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`mx-auto mt-12 max-w-2xl text-center ${midSize} ${displayType}`}
      >
        Every account tells a story.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } } }}
        className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-2.5"
      >
        {LABELS.map((label) => (
          <motion.span
            key={label}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.4 }}
            className="rounded-full border px-4 py-1.5 font-mono text-[11.5px] font-semibold"
            style={{ borderColor: `${BRAND}33`, color: BRAND, background: `${BRAND}0a` }}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

// ── Scene 13 — One customer, one journey ────────────────────────────
const JOURNEY = ['WhatsApp', 'Voice Reminder', 'Telecalling', 'Field Visit', 'Legal', 'Settlement'];

function Scene13() {
  return (
    <section className="scroll-mt-28 border-t border-slate-100 bg-white px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <ActHeading eyebrow="UNIFIED CUSTOMER JOURNEY" title="One customer. One journey." />
      <p className="mx-auto mt-4 max-w-md text-center text-[14px] leading-relaxed text-slate-500">
        Every step appears only when it's required — most journeys resolve long before reaching the end of this list.
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
        className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {JOURNEY.map((step, i) => (
          <motion.div key={step} className="flex items-center gap-2 sm:gap-3">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 font-mono text-[12.5px] font-semibold text-slate-700 shadow-sm sm:px-5"
            >
              {step}
            </motion.span>
            {i < JOURNEY.length - 1 && (
              <motion.span
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }}
                className="text-slate-300"
                aria-hidden="true"
              >
                →
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Folded in from a former standalone Scene 15 ("Prepared before
          she ever arrives"), which repeated this scene's own
          stagger-reveal list device one beat later with no new idea —
          two consecutive scenes doing the same visual move. The content
          (a field visit arrives pre-prepared) is real and worth keeping,
          it just belongs as this journey's own field-visit step paying
          off, not a second full checklist card. */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto mt-10 max-w-md text-center text-[13.5px] leading-relaxed text-slate-500"
      >
        By the time a field visit happens, the officer already has the context, the route, and what's needed — the visit itself is just the conversation.
      </motion.p>
    </section>
  );
}

export default function ActVI_Part1() {
  return (
    <div id="future-act-6a" className="bg-white">
      <Scene12 />
      <Scene13 />
      <PeakStatement
        sceneLabel="HUMAN EMPOWERMENT"
        lines={['The future is not AI replacing recovery officers.', 'It is AI removing everything that never needed a human.']}
      />
    </div>
  );
}
