"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 56; // h-14 (3.5rem)
const TRANSITION_MS = 780;

function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export function HomeSnapController() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("home-smooth-snap");

    let isAnimating = false;
    let rafId = 0;
    let unlockTimer = 0;

    const getFeaturesTop = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const target = document.getElementById("features");
      if (!target) {
        return Math.min(maxScroll, Math.max(0, window.innerHeight - HEADER_OFFSET));
      }
      const rect = target.getBoundingClientRect();
      const rawTop = Math.max(0, Math.round(rect.top + window.scrollY - HEADER_OFFSET));
      return Math.min(maxScroll, rawTop);
    };

    const animateScrollTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;

      if (Math.abs(distance) < 4) return;

      isAnimating = true;
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(unlockTimer);

      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / TRANSITION_MS, 1);
        const eased = easeInOutQuart(progress);
        window.scrollTo({
          top: startY + distance * eased,
          behavior: "instant",
        });

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          unlockTimer = window.setTimeout(() => {
            isAnimating = false;
          }, 160);
        }
      };

      rafId = window.requestAnimationFrame(step);
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      if (event.ctrlKey || event.metaKey) return;

      // Normalize line-mode mouse wheels (deltaMode === 1, e.g. deltaY = ±3)
      const delta =
        event.deltaMode === 1
          ? event.deltaY * 32
          : event.deltaMode === 2
            ? event.deltaY * window.innerHeight
            : event.deltaY;

      if (Math.abs(delta) < 4) return;

      event.preventDefault();
      if (isAnimating) return;

      const featuresTop = getFeaturesTop();
      const currentY = window.scrollY;
      const midpoint = featuresTop * 0.45;

      if (delta > 0 && currentY < midpoint) {
        animateScrollTo(featuresTop);
      } else if (delta < 0 && currentY >= midpoint) {
        animateScrollTo(0);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        const featuresTop = getFeaturesTop();
        if (window.scrollY < featuresTop * 0.45) {
          event.preventDefault();
          if (!isAnimating) animateScrollTo(featuresTop);
        }
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        const featuresTop = getFeaturesTop();
        if (window.scrollY >= featuresTop * 0.45) {
          event.preventDefault();
          if (!isAnimating) animateScrollTo(0);
        }
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const anchor = (event.target as HTMLElement | null)?.closest(
        'a[href="#features"]'
      );
      if (!anchor) return;
      event.preventDefault();
      if (!isAnimating) animateScrollTo(getFeaturesTop());
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      html.classList.remove("home-smooth-snap");
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(unlockTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
