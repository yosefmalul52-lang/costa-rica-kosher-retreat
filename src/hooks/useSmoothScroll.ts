import React from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";

const LUXURY_EASE = (t: number) => 1 - Math.pow(1 - t, 4);

function shouldLenisHandleScroll(data: { deltaX: number; deltaY: number; event: WheelEvent | TouchEvent }) {
  const target = data.event.target;
  if (!(target instanceof HTMLElement)) return true;

  const horizontalScroller = target.closest(".horizontal-scroll-container");
  if (!horizontalScroller) return true;

  // Let the browser handle horizontal wheel/trackpad gestures inside carousels.
  if (Math.abs(data.deltaX) > Math.abs(data.deltaY)) return false;

  // Vertical scroll over a carousel should stay on Lenis (do not use data-lenis-prevent).
  return true;
}

export function useSmoothScroll() {
  const reduceMotion = useReducedMotion();
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    if (reduceMotion) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: LUXURY_EASE,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      syncTouch: false,
      allowNestedScroll: true,
      virtualScroll: shouldLenisHandleScroll,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  return lenisRef;
}
