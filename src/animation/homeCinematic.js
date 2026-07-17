import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Cinematic scroll choreography for the homepage: Hero hand-off → pinned
// Trusted & Certified chapter → natural release into Metrics.
//
// Design rules encoded here:
// - Everything is scrub-driven (scroll = the story's timeline). No
//   time-based autoplay, so the user conducts the pace.
// - GPU-only properties (transform / opacity / one soft blur) — no layout
//   properties are animated, so no CLS.
// - gsap.matchMedia() gates the cinematic to desktop widths with motion
//   allowed; mobile and prefers-reduced-motion users get the page exactly
//   as it renders today (GSAP never even sets initial hidden states there).
// - Lenis and ScrollTrigger share one clock (gsap.ticker drives lenis.raf,
//   lenis 'scroll' pings ScrollTrigger.update) so pins never drift.
// - init returns a single cleanup that reverts every trigger, inline style
//   and ticker hook — safe against React 18 double-mount and route leaves.

export function initHomeCinematic() {
  const hero = document.querySelector('.hero6');
  const trust = document.querySelector('.tc7');
  if (!hero || !trust) return () => {};

  // ── Shared clock: Lenis smooth scroll driven by GSAP's ticker ──────────
  const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  const mm = gsap.matchMedia();

  // Builds the Trust-chapter reveal timeline onto the given ScrollTrigger
  // config. Used by both the pinned (tall viewport) and non-pinned (short
  // viewport) variants below.
  const buildTrustReveal = (scrollTriggerConfig) => {
    const eyebrow = trust.querySelector('.tc7-head .fg-eyebrow');
    const title = trust.querySelector('.tc7-title');
    const rows = trust.querySelectorAll('.trust6-marquee');
    const facts = trust.querySelectorAll('.tc7-fact');

    gsap.set([eyebrow, title], { autoAlpha: 0, y: 28 });
    gsap.set(rows, { autoAlpha: 0, y: 44 });
    gsap.set(facts, { autoAlpha: 0, y: 24 });

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
      defaults: { ease: 'none', force3D: true },
    });
    tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.10 }, 0.02)
      .to(title, { autoAlpha: 1, y: 0, duration: 0.14 }, 0.10)
      .to(rows, { autoAlpha: 1, y: 0, duration: 0.16, stagger: 0.06 }, 0.26)
      .to(facts, { autoAlpha: 1, y: 0, duration: 0.10, stagger: 0.045 }, 0.58)
      .to({}, { duration: 0.22 }); // settle-hold so the release never feels abrupt
    return tl;
  };

  // Hero content recedes: slight scale-down, fade, soft blur. origin kept
  // high so it sinks "into" the page rather than dropping away.
  const buildHeroHandoff = () => {
    const heroInner = hero.querySelector('.fg-wrap') || hero;
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false, // Trust slides up OVER the pinned hero
      anticipatePin: 1,
    });
    gsap.to(heroInner, {
      scale: 0.94,
      autoAlpha: 0.28,
      filter: 'blur(6px)',
      transformOrigin: '50% 30%',
      ease: 'none',
      force3D: true,
      scrollTrigger: { trigger: hero, start: 'top top', end: '+=90%', scrub: 0.6 },
    });
  };

  // Tall desktop: full cinematic — hero hand-off + pinned trust chapter.
  mm.add(
    '(min-width: 900px) and (min-height: 820px) and (prefers-reduced-motion: no-preference)',
    () => {
      buildHeroHandoff();
      buildTrustReveal({
        trigger: trust,
        start: 'top top',
        end: '+=110%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
      });
    }
  );

  // Short desktop (e.g. 1366×768): hero hand-off, but the trust chapter
  // reveals WITHOUT pinning — its content can exceed the viewport there,
  // and pinning would clip the facts row.
  mm.add(
    '(min-width: 900px) and (max-height: 819px) and (prefers-reduced-motion: no-preference)',
    () => {
      buildHeroHandoff();
      buildTrustReveal({
        trigger: trust,
        start: 'top 78%',
        end: 'top 8%',
        scrub: 0.6,
      });
    }
  );

  return () => {
    mm.revert();
    gsap.ticker.remove(tick);
    lenis.destroy();
    ScrollTrigger.refresh();
  };
}
