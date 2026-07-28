import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// ─── 1. SCROLL PROGRESS BAR ─────────────────────────────────────────────────
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-[#0072bc] via-[#1a84c8] to-[#3d9ed6]"
    />
  );
}

// ─── 2. CUSTOM CURSOR WITH GLOW TRAIL ───────────────────────────────────────
export function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const cursorGlow = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnterLink = () => {
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate(-50%, -50%) scale(1.8)`;
        cursorRing.current.style.borderColor = '#0072bc';
        cursorRing.current.style.background = 'rgba(0,114,188,0.08)';
      }
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(-50%, -50%) scale(0)`;
      }
    };

    const handleMouseLeaveLink = () => {
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate(-50%, -50%) scale(1)`;
        cursorRing.current.style.borderColor = 'rgba(0,114,188,0.6)';
        cursorRing.current.style.background = 'transparent';
      }
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(-50%, -50%) scale(1)`;
      }
    };

    const animate = () => {
      // Dot — instant
      if (cursorDot.current) {
        cursorDot.current.style.left = `${mouseX}px`;
        cursorDot.current.style.top = `${mouseY}px`;
      }
      // Ring — slight lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing.current) {
        cursorRing.current.style.left = `${ringX}px`;
        cursorRing.current.style.top = `${ringY}px`;
      }
      // Glow — more lag
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;
      if (cursorGlow.current) {
        cursorGlow.current.style.left = `${glowX}px`;
        cursorGlow.current.style.top = `${glowY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    // Hover state on all interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterLink);
      el.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = 'auto';
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterLink);
        el.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Glow Trail */}
      <div
        ref={cursorGlow}
        className="fixed pointer-events-none z-[9990] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,114,188,0.18) 0%, transparent 70%)',
          transition: 'transform 0.1s ease',
          filter: 'blur(8px)',
        }}
      />
      {/* Outer Ring */}
      <div
        ref={cursorRing}
        className="fixed pointer-events-none z-[9995] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,114,188,0.6)',
          transition: 'transform 0.18s ease, border-color 0.2s, background 0.2s',
          mixBlendMode: 'multiply',
        }}
      />
      {/* Center Dot */}
      <div
        ref={cursorDot}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#0072bc',
          transition: 'transform 0.1s ease',
        }}
      />
    </>
  );
}
