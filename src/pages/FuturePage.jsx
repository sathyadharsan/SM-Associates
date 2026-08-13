/**
 * FuturePage — /future
 *
 * The approved Claude Design layout, ported to React. This replaces the
 * previous Acts I–VI story entirely; that narrative is retired, not
 * adapted.
 *
 * ONE ACCOUNT, END TO END. A single case — LAN-06471 — arrives in a
 * lender's file at the top of the page and leaves, closed, at the
 * bottom. The fixed marker at the foot of the screen carries its state
 * the whole way, so every section reads as a consequence of the last
 * rather than as another feature.
 *
 * Scroll is driven by useFutureScroll, which publishes each section's
 * progress as a `--p` custom property that the markup reads inside
 * calc(). Nothing re-renders while scrolling.
 */

import { useRef } from 'react';
import { useFutureScroll, CASE_STATES } from '../sections/future/useFutureScroll';
import '../styles/future.css';

import Hero from '../sections/future/story/Hero';
import Shift from '../sections/future/story/Shift';
import Intake from '../sections/future/story/Intake';
import Classification from '../sections/future/story/Classification';
import Intelligence from '../sections/future/story/Intelligence';
import DecisionEngine from '../sections/future/story/DecisionEngine';
import Outreach from '../sections/future/story/Outreach';
import Voice from '../sections/future/story/Voice';
import Alongside from '../sections/future/story/Alongside';
import Field from '../sections/future/story/Field';
import Payment from '../sections/future/story/Payment';
import TheLine from '../sections/future/story/TheLine';
import LenderView from '../sections/future/story/LenderView';
import Close from '../sections/future/story/Close';
import EndNote from '../sections/future/story/EndNote';

/**
 * The case marker. Fixed to the foot of the viewport for the whole
 * page, inverting over the two dark sections so it stays legible
 * against them. Decorative as a whole — the state it reports is also
 * stated in the copy of the section that changes it — so it is hidden
 * from assistive technology rather than announcing nine times.
 */
function CaseMarker({ index, dark }) {
  return (
    <aside
      aria-hidden="true"
      style={{
        position: 'fixed',
        zIndex: 21,
        left: 0,
        right: 0,
        bottom: 0,
        height: '46px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
        pointerEvents: 'none',
        background: dark ? '#0B0D10' : '#FFFFFF',
        borderTop: `1px solid ${dark ? 'rgba(242,241,237,.16)' : 'rgba(21,24,28,.12)'}`,
        transition: 'background .6s ease, border-color .6s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(20px,6vw,90px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            fontSize: '10.5px',
            letterSpacing: '.2em',
            color: dark ? 'rgba(242,241,237,.55)' : '#6C7075',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: dark ? '#4EA8E4' : '#0072BC',
              animation: 'future-breathe 3.2s ease-in-out infinite',
            }}
          />
          <span>LAN-06471</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,2vw,22px)' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {CASE_STATES.map((state, i) => (
              <i
                key={state}
                style={{
                  display: 'block',
                  width: '13px',
                  height: '1px',
                  transition: 'background .5s ease',
                  background:
                    i <= index
                      ? dark
                        ? '#4EA8E4'
                        : '#0072BC'
                      : dark
                        ? 'rgba(242,241,237,.22)'
                        : 'rgba(21,24,28,.18)',
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontSize: '11.5px',
              letterSpacing: '.26em',
              color: dark ? '#F2F1ED' : '#15181C',
              transition: 'color .5s ease',
            }}
          >
            {CASE_STATES[index] ?? CASE_STATES[0]}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function FuturePage() {
  const rootRef = useRef(null);
  const marker = useFutureScroll(rootRef);

  return (
    <div ref={rootRef} className="future-story">
      {/* Each section carries its own h2 as one beat in a continuous
          story, so none of them is the page title. This is the
          accessible page name only. */}
      <h1 className="sr-only">
        The next chapter — how one account moves through SM Associates
      </h1>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Shift />
        <Intake />
        <Classification />
        <Intelligence />
        <DecisionEngine />
        <Outreach />
        <Voice />
        <Alongside />
        <Field />
        <Payment />
        <TheLine />
        <LenderView />
        <Close />
      </main>

      <CaseMarker index={marker.index} dark={marker.dark} />
    </div>
  );
}
