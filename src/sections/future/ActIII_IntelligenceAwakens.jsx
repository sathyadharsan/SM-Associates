/**
 * Act III — Intelligence Awakens (Scenes 06–07)
 *
 * Two phases sharing one pinned scroll range: a node web assembles
 * first, then dissolves into a vertical chain that accumulates one
 * link per scroll step and stays fully built at rest.
 *
 * Rebuilt with the same fix as Acts I–II: the first pass used 24-32px
 * text and a 110px-tall SVG in a full-height pinned viewport — both
 * disappeared into surrounding whitespace. Text now uses the shared
 * midSize scale, the web is sized to actually anchor the frame, and a
 * persistent ActFrame replaces the bare empty chrome.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useIsDesktop, ActFrame, TransitionLine, BRAND, midSize, displayType } from './futureShared';

const WEB_TEXT = ['This is intelligence.', 'Not software. Not AI marketing.'];
const CHAIN_TEXT = ['What if every decision', 'understood context before action?'];
const CHAIN = ['Portfolio', 'Behaviour', 'Risk', 'Location', 'History', 'Intent', 'Compliance', 'Field availability'];

const WEB_NODES = [
  { x: 220, y: 110, label: 'SM INTELLIGENCE', isCore: true },
  { x: 80, y: 40, label: 'Portfolio' },
  { x: 350, y: 35, label: 'Risk Analytics' },
  { x: 70, y: 185, label: 'Behaviour' },
  { x: 355, y: 180, label: 'Intent-to-Pay' },
];

const WEB_STEPS = 2;
const CHAIN_STEPS = CHAIN.length;
const STEPS = WEB_STEPS + CHAIN_STEPS;

function CrossfadeLine({ text, index, total, progress, holdLast }) {
  const offset = useTransform(progress, (v) => (holdLast ? index - Math.min(v, total - 1) : index - v));
  const opacity = useTransform(offset, [-0.4, -0.15, 0, 0.15, 0.4], [0, 1, 1, 1, 0]);
  const y = useTransform(offset, (v) => `${v * 12}px`);
  return (
    <motion.p
      style={{ opacity, y }}
      className={`absolute inset-x-0 top-1/2 -translate-y-1/2 text-center ${midSize} ${displayType}`}
      aria-hidden={index !== 0}
    >
      {text}
    </motion.p>
  );
}

function CrossfadeLines({ lines, progress, holdLast = false }) {
  return (
    <div className="relative mx-auto h-[2.4em] w-full max-w-2xl">
      {lines.map((text, i) => (
        <CrossfadeLine key={text} text={text} index={i} total={lines.length} progress={progress} holdLast={holdLast} />
      ))}
    </div>
  );
}

// An earlier pass gave each of the 5 nodes its own SVG <rect>+<text>
// label badge — its OWN opacity/scale motion values on top of the
// circle's, doubling the live values per node — and got simplified
// down to unlabelled dots to fix jank. That went too far: a node
// diagram with no labels doesn't communicate anything, it's just dots
// on lines. Fixed properly this time — the label reuses the exact same
// `opacity` MotionValue the circle already has (no new useTransform,
// so no new live value added), it just needs its own y offset and
// styling.
function WebNode({ node, index, webProgress }) {
  const opacity = useTransform(webProgress, [index - 0.3, index + 0.1], [0, 1], { clamp: true });
  const scale = useTransform(webProgress, [index - 0.3, index + 0.1], [0.4, 1], { clamp: true });
  const isCenter = node.isCore;
  const labelY = isCenter ? node.y + 34 : node.y - 14;

  return (
    <g>
      {isCenter && (
        <motion.circle
          style={{ opacity }}
          cx={node.x}
          cy={node.y}
          r={18}
          fill="none"
          stroke={BRAND}
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
      )}
      <motion.circle
        style={{ opacity, scale }}
        cx={node.x}
        cy={node.y}
        r={isCenter ? 9 : 6}
        fill={BRAND}
      />
      <motion.text
        style={{ opacity }}
        x={node.x}
        y={labelY}
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize={isCenter ? 11 : 9.5}
        fontWeight={isCenter ? 800 : 700}
        letterSpacing={isCenter ? '0.04em' : undefined}
        fill={isCenter ? BRAND : '#475569'}
        className="pointer-events-none select-none"
      >
        {node.label}
      </motion.text>
    </g>
  );
}

function WebLine({ index, webProgress, x1, y1, x2, y2 }) {
  const opacity = useTransform(webProgress, [index - 0.2, index + 0.2], [0, 0.65], { clamp: true });
  return <motion.line style={{ opacity }} x1={x1} y1={y1} x2={x2} y2={y2} stroke={BRAND} strokeWidth="2" strokeDasharray="6 3" />;
}

function ChainLink({ index, chainProgress, text }) {
  const opacity = useTransform(chainProgress, [index - 0.15, index + 0.15], [0, 1], { clamp: true });
  const y = useTransform(chainProgress, [index - 0.15, index + 0.15], [14, 0], { clamp: true });
  return (
    <motion.li
      style={{ opacity, y }}
      className="flex items-center gap-3.5 rounded-full border border-[#0072bc]/20 bg-slate-50/80 px-4 py-2 shadow-xs backdrop-blur-xs will-change-transform"
    >
      <span className="h-2.5 w-2.5 shrink-0 rounded-full shadow-sm shadow-[#0072bc]/40" style={{ background: BRAND }} />
      <span className="font-mono text-[14.5px] font-bold text-slate-800">{text}</span>
    </motion.li>
  );
}

function StaticFallback() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className={`${midSize} ${displayType}`}>This is intelligence.</h2>
      <p className="mt-4 text-[16px] text-slate-500">Not software. Not AI marketing.</p>
      <ul className="mt-12 flex flex-wrap justify-center gap-3">
        {CHAIN.map((text) => (
          <li key={text} className="rounded-full border border-slate-200 bg-white px-4 py-2 font-mono text-[13px] font-semibold text-slate-700 shadow-sm">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ActIII_IntelligenceAwakens() {
  const rootRef = useRef(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const usePinned = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end end'] });
  const progressIndex = useTransform(scrollYProgress, [0, 1], [0, STEPS - 1]);
  const webProgress = useTransform(progressIndex, [0, WEB_STEPS], [0, WEB_NODES.length - 1], { clamp: true });
  // Web phase and chain phase are two entirely different compositions
  // (an SVG node diagram vs. a pill list) sharing the same absolute
  // inset-0 stage. They used to fade with a long mutual overlap window
  // (web fading 1.4->2.4, chain fading in from 1.6) so for ~0.8 of a
  // scroll-step both were simultaneously visible, stacked directly on
  // top of each other — unreadable. Fixed by making the handoff a
  // sequential cut: web finishes fading out before chain starts fading
  // in, with a brief blank gap between them instead of a crossfade.
  const webOpacity = useTransform(progressIndex, [WEB_STEPS - 0.3, WEB_STEPS - 0.05], [1, 0], { clamp: true });
  const chainProgress = useTransform(progressIndex, [WEB_STEPS, STEPS - 1], [0, CHAIN_STEPS - 1], { clamp: true });
  const chainOpacity = useTransform(progressIndex, [WEB_STEPS + 0.05, WEB_STEPS + 0.3, STEPS - 1.5, STEPS - 0.2], [0, 1, 1, 0], { clamp: true });

  return (
    <div ref={rootRef} id="future-act-3" className="relative bg-white" style={usePinned ? { height: `${STEPS * 32}vh` } : undefined}>
      {usePinned ? (
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <ActFrame act="Act III — Intelligence Awakens" scene="03 / 06">
            <motion.div style={{ opacity: webOpacity }} className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 pt-12">
              <CrossfadeLines lines={WEB_TEXT} progress={webProgress} holdLast />
              <svg viewBox="0 0 440 230" className="h-[220px] w-[400px] sm:h-[260px] sm:w-[460px]">
                {WEB_NODES.slice(1).map((n, i) => (
                  <WebLine key={`l-${i}`} index={i + 1} webProgress={webProgress} x1={WEB_NODES[0].x} y1={WEB_NODES[0].y} x2={n.x} y2={n.y} />
                ))}
                {WEB_NODES.map((n, i) => (
                  <WebNode key={`n-${i}`} node={n} index={i} webProgress={webProgress} />
                ))}
              </svg>
            </motion.div>

            <motion.div style={{ opacity: chainOpacity }} className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 pt-12">
              <CrossfadeLines lines={CHAIN_TEXT} progress={chainProgress} holdLast />
              {/* No max-height/overflow-y-auto here: a nested scrollable
                  list under the cursor traps mouse-wheel input — once
                  it hits its own internal scroll limit, further ticks
                  neither scroll it further nor bubble to the page,
                  which froze the entire pinned scroll experience the
                  moment a visitor's cursor sat over this list. All 8
                  links fit within the stage at their natural height
                  now that the per-node SVG badges are gone. */}
              <ul className="flex flex-col gap-2.5">
                {CHAIN.map((text, i) => (
                  <ChainLink key={text} index={i} chainProgress={chainProgress} text={text} />
                ))}
              </ul>
            </motion.div>
          </ActFrame>
        </div>
      ) : (
        <StaticFallback />
      )}

      <div className="bg-white pb-24 pt-16">
        <TransitionLine />
      </div>
    </div>
  );
}
