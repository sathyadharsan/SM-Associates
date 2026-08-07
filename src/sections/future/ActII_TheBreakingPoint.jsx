/**
 * Act II — The Breaking Point (Scenes 04–05)
 *
 * Split composition: the "everything grew" stanza holds on the left
 * while six institutional systems drift apart on the right. The drift
 * tracks scroll until the last line lands, then freezes — the
 * treatment's "everything stops" beat — before the Scene 05 peak.
 *
 * The first build floated six small chips centred above a lone line of
 * text, which read as weightless. Anchoring them into a real
 * two-column composition with visible cards gives the fragmentation
 * something to actually fragment.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useIsDesktop, ActFrame, PeakStatement, displayType, midSize, BRAND } from './futureShared';

import imgPortfolio from '../../assets/case-studies/cs-003-npa.webp';
import imgLegal from '../../assets/operating-model/om-04-legal.png';
import imgField from '../../assets/case-studies/cs-004-field.webp';
import imgBranches from '../../assets/operating-model/om-01-allocation.png';
import imgMis from '../../assets/operating-model/om-06-reporting.png';
import imgDocuments from '../../assets/case-studies/cs-002-security.webp';

const GROWTH = ['Banks grew.', 'Customers grew.', 'Regulations grew.', 'Data grew.', 'Expectations grew.'];

const NODES = [
  { label: 'Portfolio', subtitle: 'Loan Asset Systems', img: imgPortfolio, x0: -260, y0: -190, x1: -350, y1: -240, r: -4 },
  { label: 'Legal',     subtitle: 'Notice & Court Desk', img: imgLegal,     x0: 20,   y0: -190, x1: 180,  y1: -230, r: 3 },
  { label: 'Field',     subtitle: 'Ground Agency App',  img: imgField,     x0: -260, y0: 0,    x1: -370, y1: 15,   r: -2 },
  { label: 'Branches',  subtitle: 'Regional Nodes',     img: imgBranches,  x0: 20,   y0: 0,    x1: 200,  y1: 30,   r: 5 },
  { label: 'MIS',       subtitle: 'Monthly Reports',    img: imgMis,       x0: -260, y0: 190,  x1: -340, y1: 245,  r: -3 },
  { label: 'Documents', subtitle: 'Physical Record Vault', img: imgDocuments, x0: 20, y0: 190,  x1: 170,  y1: 255,  r: 2 },
];

function SystemCard({ node, index, drift }) {
  const x = useTransform(drift, (d) => node.x0 + (node.x1 - node.x0) * d);
  const y = useTransform(drift, (d) => node.y0 + (node.y1 - node.y0) * d);
  const rotate = useTransform(drift, (d) => node.r * d);
  const opacity = useTransform(drift, [0, 0.15, 0.82, 0.98], [0.9, 1, 1, 0]);
  const borderColor = useTransform(drift, [0, 0.8], ['rgba(0,114,188,0.18)', 'rgba(0,114,188,0.45)']);

  return (
    <motion.div
      style={{ x, y, rotate, opacity, borderColor }}
      className="absolute left-1/2 top-1/2 -ml-[125px] -mt-[88px] flex w-[250px] flex-col rounded-3xl border bg-white p-2.5 shadow-[0_20px_42px_-14px_rgba(15,23,42,0.14)] z-20 transition-all hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="relative h-[125px] w-full overflow-hidden rounded-2xl bg-slate-100 mb-2">
        <img
          src={node.img}
          alt={node.label}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 shadow-xs border border-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0072bc] animate-pulse" />
          <span className="font-mono text-[9px] font-bold tracking-wider text-slate-800">
            SYS-{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pb-0.5">
        <div className="min-w-0 flex-1">
          <h4 className="font-sans text-[13.5px] font-bold leading-tight text-slate-900 truncate">
            {node.label}
          </h4>
          <p className="font-sans text-[10.5px] font-medium text-slate-500 truncate mt-0.5">
            {node.subtitle}
          </p>
        </div>
        <span className="ml-1.5 rounded-md bg-sky-50 px-2 py-0.5 font-mono text-[9px] font-semibold text-[#0072bc] shrink-0">
          Legacy System
        </span>
      </div>
    </motion.div>
  );
}

function GrowthLine({ text, index, progress }) {
  const offset = useTransform(progress, (v) => index - v);
  const opacity = useTransform(offset, [-0.4, -0.15, 0, 0.15, 0.4], [0, 1, 1, 1, 0]);
  const y = useTransform(offset, (v) => `${v * 14}px`);

  return (
    <motion.p
      style={{ opacity, y }}
      className={`absolute inset-x-0 top-1/2 -translate-y-1/2 text-left ${midSize} ${displayType}`}
      aria-hidden={index !== 0}
    >
      {text}
    </motion.p>
  );
}

function StaticFallback() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      >
        {GROWTH.map((text) => (
          <motion.p
            key={text}
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className={`${midSize} ${displayType}`}
          >
            {text}
          </motion.p>
        ))}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className={`mt-6 ${midSize} ${displayType} text-slate-400`}
        >
          But recovery did not.
        </motion.p>
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-3">
        {NODES.map((n) => (
          <span
            key={n.label}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-mono text-[11.5px] font-semibold text-slate-600 shadow-sm"
          >
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ActII_TheBreakingPoint() {
  const rootRef = useRef(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const usePinned = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  });
  // 5 growth lines + a held final beat on "But recovery did not."
  const progress = useTransform(scrollYProgress, [0, 1], [0, GROWTH.length]);
  const drift = useTransform(progress, [0, GROWTH.length - 1], [0, 1], { clamp: true });
  const finalOpacity = useTransform(progress, [GROWTH.length - 0.6, GROWTH.length - 0.1], [0, 1], { clamp: true });

  return (
    <div
      ref={rootRef}
      id="future-act-2"
      className="relative bg-white"
      style={usePinned ? { height: '320vh' } : undefined}
    >
      {usePinned ? (
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <ActFrame act="Act II — The Breaking Point" scene="02 / 06">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-12 px-10">
              <div className="relative h-[160px] w-full flex items-center">
                {GROWTH.map((text, i) => (
                  <GrowthLine key={text} text={text} index={i} progress={progress} />
                ))}
                <motion.p
                  style={{ opacity: finalOpacity, top: '50%' }}
                  className={`absolute inset-x-0 -translate-y-1/2 ${midSize} ${displayType} text-slate-400`}
                  aria-hidden="true"
                >
                  But recovery did not.
                </motion.p>
              </div>

              <div className="relative h-[520px]">
                {NODES.map((node, i) => (
                  <SystemCard key={node.label} node={node} index={i} drift={drift} />
                ))}
              </div>
            </div>
          </ActFrame>
        </div>
      ) : (
        <StaticFallback />
      )}

      <PeakStatement
        sceneLabel="THE IMPERATIVE"
        lines={['There had to be', 'another way.']}
      />
    </div>
  );
}
