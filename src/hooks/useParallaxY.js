import { useEffect, useRef, useState } from "react";

export default function useParallaxY({
  range = [0, 140],
  start = 0.1,
  end = 0.9,
  easing,
  disabled = false,
} = {}) {
  const ref = useRef(null);
  const [y, setY] = useState(range?.[0] ?? 0);

  useEffect(() => {
    if (disabled) {
      setY(range?.[0] ?? 0);
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress: 0 when element is just entering, 1 when leaving
      const tRaw = (vh - rect.top) / (vh + rect.height);
      const tClamped = Math.min(1, Math.max(0, tRaw));

      const local = (tClamped - start) / Math.max(0.0001, end - start);
      const pLinear = Math.min(1, Math.max(0, local));
      const ease =
        typeof easing === "function" ? easing : (t) => 1 - Math.pow(1 - t, 3);
      const p = ease(pLinear);

      const from = range?.[0] ?? 0;
      const to = range?.[1] ?? 0;
      setY(from + (to - from) * p);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [disabled, end, range, start]);

  return { ref, y };
}
