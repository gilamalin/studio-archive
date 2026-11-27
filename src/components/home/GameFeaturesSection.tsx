"use client";

import { useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { homeData } from "@/data/home";
import { SteamCtaButton } from "@/components/SteamCtaButton";

export function GameFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const features = homeData.features;
  const total = features.length;
  const activeFeature = features[activeIndex] ?? features[0];

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || total <= 1) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(diff) < 40) return;
    setActiveIndex((current) =>
      diff > 0 ? (current + 1) % total : (current - 1 + total) % total
    );
  };

  return (
    <section
      id="features"
      className="flex items-center bg-[var(--bg)] lg:min-h-[calc(100vh-6.6rem)] lg:snap-start lg:snap-always"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        {/* Clean Section Heading */}
        <div className="mb-5 flex items-center gap-2.5 lg:mb-6">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {homeData.featuresHeadline}
          </h2>
        </div>

        {/* 5:7 Gallery Showcase Split (Screenshot first on mobile) */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-7">
          {/* Left 5 cols: Mobile compact tabs+active copy / Desktop 3-row editorial list + Steam CTA */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-5 lg:gap-6">
            {/* Mobile Only (< lg): Compact 01·02·03 Tabs + Single Active Description (Zero Scroll) */}
            <div className="space-y-3.5 lg:hidden">
              <div
                role="tablist"
                aria-label="재미 요소 선택"
                className="grid grid-cols-3 gap-2"
              >
                {features.map((feature, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex cursor-pointer items-center justify-center rounded-md border py-2 text-xs font-extrabold transition-colors ${
                        isActive
                          ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                          : "border-white/10 bg-[var(--surface)] text-[var(--text-muted)]"
                      }`}
                    >
                      <span>{feature.shortLabel}</span>
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[68px] rounded-md border border-white/[0.08] bg-[#1A1D24] px-4 py-3">
                <h3 className="text-base font-extrabold tracking-tight text-[var(--text)]">
                  {activeFeature.keyword}
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-snug text-[var(--text)]/80">
                  {activeFeature.summary}
                </p>
              </div>
            </div>

            {/* Desktop Only (lg+): Individual Flat Surface Boxes */}
            <div
              role="tablist"
              aria-label="재미 요소 선택"
              className="hidden space-y-2.5 lg:block"
            >
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className={`group w-full cursor-pointer rounded-md border px-4 py-3.5 text-left transition-all ${
                      isActive
                        ? "border-l-4 border-l-[var(--accent)] border-y-white/15 border-r-white/15 bg-[#1E2128]"
                        : "border-transparent bg-[var(--surface-alt)]/45 opacity-65 hover:border-white/10 hover:bg-[#1A1D24] hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`inline-flex h-6 shrink-0 items-center justify-center rounded-sm border px-2 text-[11px] font-extrabold transition-colors ${
                          isActive
                            ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                            : "border-white/10 bg-[#111318] text-[var(--text-muted)] group-hover:border-white/25 group-hover:text-[var(--text)]"
                        }`}
                      >
                        {feature.shortLabel}
                      </span>
                      <span
                        className={`text-base font-extrabold tracking-tight transition-colors ${
                          isActive
                            ? "text-[var(--text)]"
                            : "text-[var(--text-muted)] group-hover:text-[var(--text)]"
                        }`}
                      >
                        {feature.keyword}
                      </span>
                    </div>

                    <p
                      className={`mt-1.5 text-[13px] font-medium leading-snug tracking-tight transition-colors ${
                        isActive
                          ? "text-[var(--text)]/80"
                          : "text-[var(--text-muted)]/55 group-hover:text-[var(--text-muted)]/80"
                      }`}
                    >
                      {feature.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            <SteamCtaButton size="md" fullWidth />
          </div>

          {/* Right 7 cols: Pure Crossfade 16:9 Gallery Frame (Swipeable on mobile) */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="order-first relative aspect-video w-full overflow-hidden rounded-md border border-white/[0.08] bg-[#0E1014] lg:order-none lg:col-span-7"
          >
            {features.map((feature, idx) => {
              const isActive = idx === activeIndex;
              const hasScreenshot = feature.screenshotSrc.trim().length > 0;

              return (
                <div
                  key={feature.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isActive
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                >
                  {hasScreenshot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={feature.screenshotSrc}
                      alt={feature.keyword}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--surface-alt)] px-4 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-white/10 bg-[var(--surface)] text-[var(--accent)]">
                        <ImageIcon className="h-6 w-6 stroke-[2.2]" />
                      </div>
                      <code className="rounded-sm border border-white/10 bg-[var(--surface)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--text-muted)]">
                        {feature.index} · {feature.expectedPath}
                      </code>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
