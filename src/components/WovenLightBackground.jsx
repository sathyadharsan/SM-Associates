import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Point sizes are tuned against CAMERA_Z below — sizeAttenuation is on, so
// pulling the camera back shrinks points on screen and they must grow to stay
// legible on a white background.
// Counts are deliberately conservative: every particle is simulated on the CPU
// and the whole position buffer is re-uploaded to the GPU on frames where the
// cursor is interacting, so this is far heavier than a static point cloud.
function getRenderSettings(width) {
  if (width < 640) return { particles: 3_000, dpr: 1.2, size: 0.038 };
  if (width < 1200) return { particles: 5_000, dpr: 1.5, size: 0.036 };
  return { particles: 8_000, dpr: 1.75, size: 0.034 };
}

// Pulled well back so the weave reads as a contained ornament rather than a
// wall of particles. At the previous 6.2 it filled ~73% of the hero height,
// which made the (slow) rotation impossible to perceive — the shape is dense
// and symmetric, so at that scale it just looks like static noise.
const CAMERA_Z = 9.6;

export default function WovenLightBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let frameId;
    let renderer;
    let geometry;
    let material;
    let resizeObserver;
    let intersectionObserver;
    let visibilityListener;
    let pointerListener;
    let scrollListener;
    const settleTimers = [];

    const start = async () => {
      const THREE = await import('three');
      if (disposed) return;

      const { width, height } = mount.getBoundingClientRect();
      // Tier off the viewport, not the mount: the hero is full-bleed, and the
      // mount is frequently still mid-layout at this point (it has measured as
      // narrow as 320px on a 1521px window), which silently dropped desktop
      // visitors onto the mobile particle budget. A page opened in a background
      // tab reports 0 for every live dimension, so screen.width is the last
      // resort — otherwise those visitors get stuck on the lowest tier for the
      // whole session.
      const tierWidth =
        Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0, width || 0) ||
        window.screen?.width ||
        1280;
      const settings = getRenderSettings(tierWidth);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 0, CAMERA_Z);

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        });
      } catch {
        return;
      }

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, settings.dpr));
      renderer.domElement.setAttribute('aria-hidden', 'true');
      mount.appendChild(renderer.domElement);

      const knot = new THREE.TorusKnotGeometry(1.32, 0.42, 220, 20);
      const source = knot.getAttribute('position');
      const positions = new Float32Array(settings.particles * 3);
      // Rest pose + per-particle velocity, so the cursor can push points away
      // and they can spring back. Preallocated once — the whole simulation
      // below runs on these flat arrays with scalar maths and allocates
      // nothing per frame.
      const restPositions = new Float32Array(settings.particles * 3);
      const velocities = new Float32Array(settings.particles * 3);
      const colors = new Float32Array(settings.particles * 3);
      const color = new THREE.Color();

      for (let i = 0; i < settings.particles; i += 1) {
        const target = i * 3;
        const sourceIndex = Math.floor(Math.random() * source.count) * 3;
        const jitter = 0.012;

        positions[target] = source.array[sourceIndex] + (Math.random() - 0.5) * jitter;
        positions[target + 1] = source.array[sourceIndex + 1] + (Math.random() - 0.5) * jitter;
        positions[target + 2] = source.array[sourceIndex + 2] + (Math.random() - 0.5) * jitter;
        restPositions[target] = positions[target];
        restPositions[target + 1] = positions[target + 1];
        restPositions[target + 2] = positions[target + 2];

        // Brand blue only. #0072bc is hsl(203.6°, 100%, 36.9%) — hue 0.566 in
        // three's 0–1 scale — and the approved lighter tints (#3d93ce, #7fb8e0)
        // sit on the same hue. Depth therefore comes from lightness/saturation
        // spread inside that one hue, never from hue rotation, which is what
        // the sitewide single-accent rule requires. The lightness band sits
        // around and below #0072bc's own 0.369 — a lighter spread washed out
        // badly against the pure-white hero and read as pale grey rather than
        // brand blue.
        const hue = 0.566 + (Math.random() - 0.5) * 0.025;
        color.setHSL(hue, 0.78 + Math.random() * 0.22, 0.2 + Math.random() * 0.17);
        colors[target] = color.r;
        colors[target + 1] = color.g;
        colors[target + 2] = color.b;
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: settings.size,
        vertexColors: true,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      const points = new THREE.Points(geometry, material);
      points.rotation.z = 0.36;
      scene.add(points);
      knot.dispose();

      let pageVisible = true;
      let inViewport = true;

      // Pointer + scroll drive the weave: the cursor pushes individual points
      // aside (see the simulation in render) and the cloud also tilts toward
      // it. The 21st.dev original allocated 4 Vector3s per particle per frame
      // for this — at 17k particles that is ~4M objects/second and guaranteed
      // GC jank — so the simulation below is pure scalar maths on flat arrays
      // and allocates nothing.
      const REPEL_RADIUS = 1.45;
      const REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
      const REPEL_STRENGTH = 0.055;
      const RETURN_FORCE = 0.022;
      const DAMPING = 0.9;
      const pointerLocal = new THREE.Vector3();
      const halfHeight = Math.tan((42 * Math.PI) / 360) * CAMERA_Z;

      // The particle simulation only runs while the cursor is actually
      // disturbing the cloud, and for the settle-back afterwards. Idle visitors
      // (most of the time) pay nothing beyond the plain rotation — without this
      // gate the CPU loop plus a full buffer re-upload runs every single frame.
      let simActive = false;
      let settledFrames = 0;

      let pointerX = 0;
      let pointerY = 0;
      let currentX = 0;
      let currentY = 0;
      let scrollSpin = 0;
      let currentSpin = 0;

      // The canvas is a right-hand column, not the full viewport, so the cursor
      // must be normalised against the canvas box — normalising against the
      // window would put the computed world position (and therefore the dent in
      // the cloud) well away from the actual cursor. Cached rather than measured
      // per pointermove, so we never force a synchronous layout on a hot event.
      let mountRect = mount.getBoundingClientRect();
      const refreshRect = () => {
        const next = mount.getBoundingClientRect();
        if (next.width && next.height) mountRect = next;
      };

      const onPointerMove = (event) => {
        pointerX = ((event.clientX - mountRect.left) / mountRect.width) * 2 - 1;
        pointerY = -(((event.clientY - mountRect.top) / mountRect.height) * 2 - 1);
        simActive = true;
        settledFrames = 0;
      };

      const onScroll = () => {
        // Hero is pinned by the scroll cinematic, so scrollY keeps advancing
        // while the hero holds — the weave keeps turning as the user scrolls.
        scrollSpin = window.scrollY * 0.0035;
        // The pinned hero moves under the cursor, so the cached box goes stale.
        refreshRect();
      };

      // Resize-on-render: compares the drawing buffer against the canvas's
      // real layout size every frame and corrects drift. A ResizeObserver
      // alone proved unreliable here (it can miss the final layout pass,
      // leaving a low-res buffer stretched over a full-width canvas), so
      // this is the authoritative sizing path and the observer is only a
      // helper for when the loop is paused.
      const resize = () => {
        const canvas = renderer.domElement;
        const nextWidth = mount.clientWidth;
        const nextHeight = mount.clientHeight;
        if (!nextWidth || !nextHeight) return false;

        const ratio = renderer.getPixelRatio();
        const bufferWidth = Math.round(nextWidth * ratio);
        const bufferHeight = Math.round(nextHeight * ratio);
        if (canvas.width === bufferWidth && canvas.height === bufferHeight) return false;

        camera.aspect = nextWidth / nextHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(nextWidth, nextHeight, false);
        return true;
      };

      const render = (time) => {
        if (!pageVisible || !inViewport) return;
        resize();
        const seconds = time * 0.001;

        // Ease toward the pointer/scroll targets so motion never snaps.
        currentX += (pointerX - currentX) * 0.08;
        currentY += (pointerY - currentY) * 0.08;
        currentSpin += (scrollSpin - currentSpin) * 0.07;

        // Base spin is deliberately well above the old 0.085 rad/s — on a
        // dense symmetric knot anything slower is not readable as motion.
        points.rotation.y = seconds * 0.16 + currentX * 0.5 + currentSpin;
        points.rotation.x = Math.sin(seconds * 0.24) * 0.12 - currentY * 0.35;
        points.position.x = currentX * 0.35;
        points.position.y = Math.sin(seconds * 0.35) * 0.07 + currentY * 0.22;

        // Cursor position in the cloud's own local space. The cloud spins, so
        // this must be re-derived each frame — otherwise the "dent" would drift
        // off the cursor as the knot rotates. One Vector3 reused, never
        // reallocated, and the transform is done once per frame (not per point).
        if (simActive) {
          points.updateMatrixWorld();
          pointerLocal.set(pointerX * halfHeight * camera.aspect, pointerY * halfHeight, 0);
          points.worldToLocal(pointerLocal);
          const mx = pointerLocal.x;
          const my = pointerLocal.y;
          const mz = pointerLocal.z;
          let energy = 0;

          for (let i = 0; i < positions.length; i += 3) {
            const dx = positions[i] - mx;
            const dy = positions[i + 1] - my;
            const dz = positions[i + 2] - mz;
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < REPEL_RADIUS_SQ) {
              const dist = Math.sqrt(distSq) || 0.0001;
              // (radius - dist) scales the push by proximity; the extra /dist
              // normalises direction without a sqrt-heavy Vector3.normalize().
              const force = ((REPEL_RADIUS - dist) * REPEL_STRENGTH) / dist;
              velocities[i] += dx * force;
              velocities[i + 1] += dy * force;
              velocities[i + 2] += dz * force;
            }

            // Spring back toward the rest pose, then damp so it settles.
            velocities[i] = (velocities[i] + (restPositions[i] - positions[i]) * RETURN_FORCE) * DAMPING;
            velocities[i + 1] = (velocities[i + 1] + (restPositions[i + 1] - positions[i + 1]) * RETURN_FORCE) * DAMPING;
            velocities[i + 2] = (velocities[i + 2] + (restPositions[i + 2] - positions[i + 2]) * RETURN_FORCE) * DAMPING;

            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];

            energy += Math.abs(velocities[i]) + Math.abs(velocities[i + 1]) + Math.abs(velocities[i + 2]);
          }
          geometry.attributes.position.needsUpdate = true;

          // Once the cloud has visibly stopped moving, stand the simulation
          // down until the cursor next disturbs it.
          if (energy < positions.length * 0.000015) {
            settledFrames += 1;
            if (settledFrames > 20) simActive = false;
          } else {
            settledFrames = 0;
          }
        }

        renderer.render(scene, camera);
      };

      const animate = (time) => {
        frameId = window.requestAnimationFrame(animate);
        render(time);
      };

      visibilityListener = () => {
        pageVisible = !document.hidden;
      };

      resizeObserver = new ResizeObserver(() => {
        resize();
        refreshRect();
      });
      resizeObserver.observe(mount);

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          inViewport = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      intersectionObserver.observe(mount);

      document.addEventListener('visibilitychange', visibilityListener);
      resize();

      // Belt-and-braces sizing. The hero's final width is only known after
      // fonts/layout settle, and neither the ResizeObserver nor the rAF loop
      // is guaranteed to deliver that pass (both can be throttled). Without
      // these, a low-res buffer can end up stretched across the full-width
      // canvas and the weave renders visibly blurry.
      [0, 120, 400, 1200].forEach((delay) => {
        const id = window.setTimeout(() => {
          if (!disposed) {
            resize();
            refreshRect();
          }
        }, delay);
        settleTimers.push(id);
      });

      if (prefersReducedMotion()) {
        // Static frame only — no loop, no pointer/scroll reactivity.
        render(0);
      } else {
        pointerListener = onPointerMove;
        scrollListener = onScroll;
        window.addEventListener('pointermove', pointerListener, { passive: true });
        window.addEventListener('scroll', scrollListener, { passive: true });
        onScroll();
        animate(0);
      }
    };

    start();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      settleTimers.forEach(window.clearTimeout);
      if (visibilityListener) {
        document.removeEventListener('visibilitychange', visibilityListener);
      }
      if (pointerListener) window.removeEventListener('pointermove', pointerListener);
      if (scrollListener) window.removeEventListener('scroll', scrollListener);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      if (renderer?.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="hero6-woven-background" />;
}

