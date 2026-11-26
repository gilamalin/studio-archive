"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { homeData } from "@/data/home";
import { SteamCtaButton } from "@/components/SteamCtaButton";

export function GameFeaturesSection() {
  const [activeId, setActiveId] = useState(homeData.features[0].id);
  const activeFeature =
    homeData.features.find((f) => f.id === activeId) ?? homeData.features[0];
  const hasScreenshot = activeFeature.screenshotSrc.trim().length > 0;

  return (
    <section
      id="features"
      className="flex items-center bg-[var(--bg)] lg:min-h-[calc(100vh-6.6rem)] lg:snap-start lg:snap-always"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 lg:py-11">
        {/* Clean Heading without duplicate English badge */}
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {homeData.featuresHeadline}
          </h2>
        </div>

        {/* Asymmetric 2-Column Interactive Feature Showcase */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left 5 cols: Editorial Keyword Tabs + Full-Width Steam CTA */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-5">
            <div className="space-y-2.5">
              {homeData.features.map((feature) => {
                const isActive = feature.id === activeFeature.id;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => setActiveId(feature.id)}
                    className={`w-full cursor-pointer rounded-md border px-4 py-3.5 text-left transition-all ${
                      isActive
                        ? "border-l-4 border-l-[var(--accent)] border-y-[var(--border-strong)] border-r-[var(--border-strong)] bg-[var(--surface)] shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                        : "border-transparent bg-[var(--surface-alt)]/60 opacity-70 hover:border-[var(--border)] hover:bg-[var(--surface-alt)] hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-xs font-black ${
                          isActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {feature.index}
                      </span>
                      <span className="text-base font-extrabold text-[var(--text)]">
                        {feature.keyword}
                      </span>
                    </div>
                    <p className="mt-1 pl-6 text-xs font-medium leading-snug text-[var(--text-muted)] sm:text-sm">
                      {feature.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            <SteamCtaButton size="md" fullWidth />
          </div>

          {/* Right 7 cols: Crisp Borderless 16:9 Screenshot Frame */}
          <div className="relative aspect-video w-full overflow-hidden rounded-md border border-white/10 bg-[#0E1014] shadow-[0_16px_40px_rgba(0,0,0,0.5)] lg:col-span-7">
            {hasScreenshot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={activeFeature.id}
                src={activeFeature.screenshotSrc}
                alt={activeFeature.keyword}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--surface-alt)] px-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)]">
                  <ImageIcon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <code className="rounded-sm border border-[var(--border-strong)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--text-muted)]">
                  {activeFeature.index} · {activeFeature.expectedPath}
                </code>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
