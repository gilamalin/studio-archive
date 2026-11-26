"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { homeData } from "@/data/home";
import { siteMeta } from "@/data/site";

const AUTO_SLIDE_MS = 6000;

export function SceneCarousel() {
  const slides = homeData.slides;
  const total = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [bgSlidesReady, setBgSlidesReady] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Defer mounting inactive videos until after route transition & header slide finish
  useEffect(() => {
    const timer = window.setTimeout(() => setBgSlidesReady(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  // Pause video & auto-slide when user scrolls down to Section 2
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.55);
      },
      { threshold: [0, 0.3, 0.55, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isInView || total <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTO_SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, isInView, total]);

  // Play only the focused video while in view; pause inactive / off-screen videos
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex && isInView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex, isInView]);

  return (
    <section
      ref={sectionRef}
      aria-label="게임 씬 쇼케이스"
      className="relative h-[72vh] min-h-[440px] w-full overflow-hidden bg-[#14161B] lg:h-[calc(100vh-3.5rem)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Bleed Crossfading Video Layers */}
      <div
        className={`absolute inset-0 transition-[filter] duration-500 ${
          isInView ? "brightness-[0.9]" : "brightness-[0.55]"
        }`}
      >
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          const hasVideo = slide.videoSrc.trim().length > 0;
          const shouldMountVideo = isActive || bgSlidesReady;

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
              }`}
            >
              {hasVideo ? (
                shouldMountVideo ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={slide.videoSrc}
                    autoPlay={isActive}
                    loop
                    muted
                    playsInline
                    preload={isActive ? "auto" : "none"}
                    className="h-full w-full object-cover object-top"
                  />
                ) : null
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--surface-alt)] px-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--accent)] text-[var(--accent-fg)]">
                    <Play className="h-6 w-6 fill-current stroke-[2]" />
                  </div>
                  <code className="font-mono text-xs font-bold text-[var(--text-muted)]">
                    {slide.index} · {slide.expectedPath}
                  </code>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Seamless Fusion Gradient into #14161B Page Canvas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-56 bg-gradient-to-t from-[#14161B] via-[#14161B]/60 to-transparent" />

      {/* Bottom Overlay Content (Strictly Aligned to max-w-6xl Grid) */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 pb-8 sm:px-6 sm:pb-10">
          {/* Bottom-Left Minimal Game Identity */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl">
              {siteMeta.gameTitle}
            </h1>
            <p className="mt-2 text-sm font-semibold leading-snug text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-base">
              {homeData.tagline}
            </p>
          </div>

          {/* Bottom-Right Generous Hitbox 01 · 02 · 03 Mini Scene Bars */}
          <div
            role="tablist"
            aria-label="씬 선택"
            className="flex shrink-0 items-end gap-1.5"
          >
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${slide.index}번 씬: ${slide.title}`}
                  onClick={() => setActiveIndex(idx)}
                  className="group flex cursor-pointer flex-col items-start gap-1.5 px-1.5 py-2 text-left"
                >
                  <span
                    className={`font-mono text-[11px] font-bold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white/85"
                    }`}
                  >
                    {slide.index}
                  </span>
                  <span
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-12 bg-[#E4E4E7]"
                        : "w-9 bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle Scroll-Down Cue (Desktop) */}
      <a
        href="#features"
        aria-label="재미 요소 섹션으로 이동"
        className="absolute bottom-2.5 left-1/2 z-30 hidden -translate-x-1/2 items-center justify-center rounded-full p-1.5 text-white/50 transition-colors hover:text-white lg:inline-flex"
      >
        <ChevronDown className="h-5 w-5 stroke-[2]" />
      </a>
    </section>
  );
}
