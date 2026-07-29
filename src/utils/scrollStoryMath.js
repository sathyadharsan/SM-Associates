/**
 * Shared scroll-progress math for pinned "scroll story" sections — used by
 * ServiceStorySection, TechnologyStorySection and ComplianceStorySection so
 * all three chapter-by-chapter pinned experiences behave identically and
 * share one verified formula instead of three copies drifting apart.
 *
 * Per-chapter visibility envelope, in that chapter's own local scroll
 * coordinate (localT = raw - chapterIndex, where raw = scrollProgress * TOTAL):
 *
 *   localT:  -0.3        0         0.7        1.0
 *            |--arrives--|---holds---|--exits--|
 *
 * A chapter starts arriving (sliding in + fading in) 0.3 chapters "early",
 * during the tail of the PREVIOUS chapter's own exit window — the two
 * windows are constructed to line up exactly so outgoing + incoming opacity
 * always sum to 1 (verified by exhaustive sweep: no double-blackout, no
 * double-bright overlap, at any scroll position). The last chapter never
 * exits (nothing to hand off to), so it holds at full opacity to the end.
 */

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export const PRE = 0.3;
export const HOLD_END = 0.7;

export function imageState(raw, index, isLast) {
  const t = raw - index;
  if (t <= -PRE) return { opacity: 0, entrance: 1 };
  if (t < 0) {
    const p = (t + PRE) / PRE;
    return { opacity: p, entrance: 1 - p };
  }
  if (t <= HOLD_END || isLast) return { opacity: 1, entrance: 0 };
  if (t <= 1) return { opacity: 1 - (t - HOLD_END) / (1 - HOLD_END), entrance: 0 };
  return { opacity: 0, entrance: 0 };
}

export function textState(raw, index, isLast) {
  const t = raw - index;
  const TEXT_IN = 0.3;
  if (t <= 0) return { opacity: 0, reveal: 0 };
  if (t <= TEXT_IN) return { opacity: t / TEXT_IN, reveal: t / TEXT_IN };
  if (t <= HOLD_END || isLast) return { opacity: 1, reveal: 1 };
  if (t <= 1) return { opacity: 1 - (t - HOLD_END) / (1 - HOLD_END), reveal: 1 };
  return { opacity: 0, reveal: 1 };
}

/**
 * Wires the shared scroll-progress engine to a wrapper ref + per-chapter
 * image/text refs. Returns a cleanup function. Desktop-only (matches
 * `minWidthPx`) and skipped entirely under prefers-reduced-motion — callers
 * are expected to render a static fallback in that case instead of mounting
 * this at all.
 */
export function mountScrollStory({ wrapRef, cardRefs, textRefs, total, minWidthPx = 1024, onProgress }) {
  const wrap = wrapRef.current;
  if (!wrap) return () => {};
  const mq = window.matchMedia(`(min-width: ${minWidthPx}px)`);

  let ticking = false;
  const update = () => {
    if (!mq.matches) return;
    const rect = wrap.getBoundingClientRect();
    const travel = wrap.offsetHeight - window.innerHeight;
    const progress = clamp(-rect.top / (travel || 1), 0, 1);
    const raw = progress * total;

    const imageOpacities = Array.from({ length: total }, (_, i) => imageState(raw, i, i === total - 1).opacity);
    let activeIndex = 0;
    imageOpacities.forEach((o, i) => { if (o > imageOpacities[activeIndex]) activeIndex = i; });

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const { opacity, entrance } = imageState(raw, i, i === total - 1);
      el.style.opacity = String(opacity);
      el.style.transform = `translateX(${entrance * 72}px) scale(${1 - entrance * 0.03})`;
      el.setAttribute('aria-hidden', i === activeIndex ? 'false' : 'true');
    });

    textRefs.current.forEach((el, i) => {
      if (!el) return;
      const { opacity, reveal } = textState(raw, i, i === total - 1);
      el.style.opacity = String(opacity);
      el.style.transform = `translateY(${(1 - reveal) * 22}px)`;
      el.setAttribute('aria-hidden', i === activeIndex ? 'false' : 'true');
    });

    if (onProgress) onProgress({ progress, raw, activeIndex });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', update);
  };
}
