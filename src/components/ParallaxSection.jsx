import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

import "./ParallaxSection.css";

const clamp01 = (n) => Math.min(1, Math.max(0, n));
const lerp = (a, b, t) => a + (b - a) * t;

// Context allows any number of layers to register with the parent section
// without re-rendering on scroll.
const ParallaxContext = createContext(null);

function usePrefersReducedMotion() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return prefersReducedMotion;
}

/**
 * ParallaxSection
 * - Scroll-driven (uses window.scrollY)
 * - Normalizes progress per section: 0 -> 1
 * - Uses rAF loop + lerp smoothing to stay buttery on fast scroll
 * - No React state updates during scroll (DOM writes only)
 *
 * Structure:
 * <section>
 *   <div className="parallaxSticky">  // 100vh sticky viewport
 *     {layers...}
 *   </div>
 * </section>
 */
export function ParallaxSection({
  className,
  stickyClassName,
  children,
  height = "200vh",
  disabled,
}) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  // Each layer is stored as a mutable record to avoid re-renders.
  // record: { id, node, speed, offset, currentY, maxTranslate }
  const layersRef = useRef(new Map());

  // Cached measurements (updated on resize)
  const metricsRef = useRef({
    top: 0,
    height: 1,
    vh: 1,
    span: 1,
  });

  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isDisabled = !!disabled || prefersReducedMotion;

  const measure = useCallback(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const rect = sectionEl.getBoundingClientRect();
    const scrollY = window.scrollY || 0;
    const vh = window.innerHeight || 1;

    // Absolute document Y position (no need to read layout in the animation loop)
    const top = rect.top + scrollY;
    const heightPx = Math.max(1, rect.height);

    // We normalize against the scroll span where the section goes from
    // entering viewport to leaving viewport.
    // start = top - vh   (top hits viewport bottom)
    // end   = top + height
    // span  = height + vh
    const span = heightPx + vh;

    metricsRef.current = { top, height: heightPx, vh, span };
  }, []);

  const registerLayer = useCallback((id, record) => {
    layersRef.current.set(id, record);

    // Ensure the node starts with a transform to avoid first-frame snap.
    if (record.node) {
      record.node.style.transform = `translate3d(0, ${record.offset || 0}px, 0)`;
      record.node.style.willChange = "transform";
    }

    return () => {
      layersRef.current.delete(id);
    };
  }, []);

  const contextValue = useMemo(
    () => ({ registerLayer, disabled: isDisabled }),
    [registerLayer, isDisabled]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    measure();

    const onResize = () => {
      measure();
    };

    // Passive scroll listener (we don't set state here; rAF loop reads scrollY)
    const onScroll = () => {
      // Intentionally empty; just having this listener helps some browsers
      // coalesce scroll events while we animate in rAF.
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = (time) => {
      rafRef.current = window.requestAnimationFrame(animate);

      const { top, span, vh } = metricsRef.current;
      const scrollY = window.scrollY || 0;

      // Progress math (per-section):
      // progress = 0 when scrollY == top - vh (section just enters)
      // progress = 1 when scrollY == top + height (section leaves)
      const start = top - vh;
      const raw = (scrollY - start) / Math.max(1, span);
      const progress = clamp01(raw);

      // Scroll distance relative to the section center, in pixels.
      // This keeps motion symmetric and avoids overscroll jumps.
      const centered = (progress - 0.5) * span;

      // dt-normalized lerp factor for consistent smoothing across refresh rates.
      const last = lastTimeRef.current || time;
      const dt = Math.min(64, Math.max(1, time - last));
      lastTimeRef.current = time;

      // 0.12 tuned for "buttery"; normalized to ~60fps.
      const smooth = 1 - Math.pow(1 - 0.12, dt / 16.67);

      layersRef.current.forEach((layer) => {
        const node = layer.node;
        if (!node) return;

        const speed = typeof layer.speed === "number" ? layer.speed : 0;
        const offset = typeof layer.offset === "number" ? layer.offset : 0;
        const maxTranslate =
          typeof layer.maxTranslate === "number" ? layer.maxTranslate : null;

        // Translate amount is a ratio of scroll distance (cinematic feel):
        // - Background should be slow (e.g. 0.2)
        // - Mid should be medium (0.4-0.6)
        // - Foreground/text subtle (0.8)
        let targetY = -centered * speed + offset;

        if (maxTranslate != null) {
          targetY = Math.max(-maxTranslate, Math.min(maxTranslate, targetY));
        }

        if (isDisabled) {
          layer.currentY = targetY;
          node.style.transform = `translate3d(0, ${targetY}px, 0)`;
          return;
        }

        const current = typeof layer.currentY === "number" ? layer.currentY : 0;
        const next = lerp(current, targetY, smooth);
        layer.currentY = next;

        // GPU-only transform; avoids layout and paint thrash.
        node.style.transform = `translate3d(0, ${next}px, 0)`;
      });
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [measure, isDisabled]);

  return (
    <ParallaxContext.Provider value={contextValue}>
      <section
        ref={sectionRef}
        className={"parallaxSection" + (className ? ` ${className}` : "")}
        style={{ height }}
      >
        <div
          ref={stickyRef}
          className={
            "parallaxSticky" + (stickyClassName ? ` ${stickyClassName}` : "")
          }
        >
          {children}
        </div>
      </section>
    </ParallaxContext.Provider>
  );
}

/**
 * ParallaxLayer
 * A single moving layer inside ParallaxSection.
 *
 * Props:
 * - speed: movement ratio vs scroll distance (0.2, 0.5, 0.8)
 * - offset: constant px offset
 * - maxTranslate: clamps movement to avoid extreme offsets
 */
export function ParallaxLayer({
  speed = 0,
  offset = 0,
  maxTranslate,
  className,
  style,
  children,
  as = "div",
}) {
  const ctx = useContext(ParallaxContext);
  const nodeRef = useRef(null);

  const Component = as;

  const id = useMemo(
    () => `layer_${Math.random().toString(16).slice(2)}`,
    []
  );

  useEffect(() => {
    if (!ctx) return;

    const record = {
      id,
      node: nodeRef.current,
      speed,
      offset,
      maxTranslate,
      currentY: offset,
    };

    return ctx.registerLayer(id, record);
  }, [ctx, id, speed, offset, maxTranslate]);

  return React.createElement(
    Component,
    {
      ref: nodeRef,
      className: "parallaxLayer" + (className ? ` ${className}` : ""),
      style,
    },
    children
  );
}
