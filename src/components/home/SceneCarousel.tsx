"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { homeData } from "@/data/home";
import { siteMeta } from "@/data/site";

const PLACEHOLDER_SLIDE_MS = 6000;

export function SceneCarousel() {
  const slides = homeData.slides;
  const total = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const [bgSlidesReady, setBgSlidesReady] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const activeSlide = slides[activeIndex] ?? slides[0];
  const activeHasVideo = activeSlide.videoSrc.trim().length > 0;

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || total <= 1) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(diff) < 40) return;
    setActiveIndex((current) =>
      diff > 0 ? (current + 1) % total : (current - 1 + total) % total
    );
  };

  // Defer mounting inactive videos until after route transition & header slide finish
  useEffect(() => {
    const timer = window.setTimeout(() => setBgSlidesReady(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  // Pause video when user scrolls down to Section 2
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

  // Fallback timer only when active slide is a placeholder without videoSrc
  useEffect(() => {
    if (activeHasVideo || !isInView || total <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, PLACEHOLDER_SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [activeHasVideo, isInView, total]);

  // Restart newly activated video from 0s whenever activeIndex changes
  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
    }
  }, [activeIndex]);

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
  }, [activeIndex, isInView, bgSlidesReady]);

  return (
    <section
      ref={sectionRef}
      aria-label="게임 씬 쇼케이스"
      className="relative h-[56vh] min-h-[340px] max-h-[520px] w-full overflow-hidden bg-[#14161B] sm:h-[68vh] sm:max-h-none lg:h-[calc(100vh-3.5rem)]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
                    loop={total <= 1}
                    muted
                    playsInline
                    preload={isActive ? "auto" : "metadata"}
                    onEnded={() => {
                      if (idx === activeIndex && isInView && total > 1) {
                        setActiveIndex((current) => (current + 1) % total);
                      }
                    }}
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
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:px-6 sm:pb-10">
          {/* Bottom-Left Minimal Game Identity */}
          <div className="max-w-2xl">
            <div className="mb-1 font-mono text-[11px] font-bold tracking-widest text-[var(--accent)] drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              PROJECT 01
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl">
              {siteMeta.gameTitle}
            </h1>
            <p className="mt-1.5 text-xs font-semibold leading-snug text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:mt-2 sm:text-base">
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
