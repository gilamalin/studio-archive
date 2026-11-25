"use client";

import { useState } from "react";
import { ArrowDown, Film, Image as ImageIcon, Play } from "lucide-react";
import { heroData } from "@/data/hero";
import { SteamCtaButton } from "./SteamCtaButton";

export function HeroSection() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const activeClip = heroData.mediaClips[activeClipIndex] ?? heroData.mediaClips[0];
  const hasMediaSource = activeClip.src.trim().length > 0;

  return (
    <section
      id="hero"
      className="scroll-mt-16 border-b-2 border-[#18181B] bg-[#FAF7F2]"
    >
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left 5 cols: Title, 1-line copy, 2x2 spec grid, Steam CTA */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wide text-[#52525B]">
                <span className="inline-block h-2.5 w-2.5 bg-[#FF5A1F] border border-[#18181B]" />
                <span>{heroData.eyebrow}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-4xl font-black tracking-tight text-[#18181B] sm:text-5xl">
                  {heroData.title}
                </h1>
                <span className="rounded-sm border-2 border-[#18181B] bg-[#FACC15] px-2 py-0.5 text-xs font-extrabold text-[#18181B]">
                  {heroData.workingTitleTag}
                </span>
              </div>

              <p className="text-base font-semibold leading-snug text-[#18181B] sm:text-lg">
                {heroData.subcopy}
              </p>
            </div>

            {/* 2x2 Key Metric Spec Grid */}
            <div className="grid grid-cols-2 gap-3">
              {heroData.metrics.map((metric) => {
                const dotColor =
                  metric.accent === "orange"
                    ? "bg-[#FF5A1F]"
                    : metric.accent === "yellow"
                      ? "bg-[#FACC15]"
                      : "bg-[#18181B]";

                return (
                  <div
                    key={metric.label}
                    className="arcade-card-sm rounded-md px-3.5 py-3"
                  >
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#52525B]">
                      <span
                        className={`inline-block h-2 w-2 border border-[#18181B] ${dotColor}`}
                      />
                      <span>{metric.label}</span>
                    </div>
                    <div className="tabular-nums mt-1 text-base font-extrabold text-[#18181B] sm:text-lg">
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <SteamCtaButton size="md" />
              <a
                href="#behind"
                className="arcade-btn inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-[#18181B]"
              >
                <span>개발 비하인드</span>
                <ArrowDown className="h-4 w-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right 7 cols: 16:9 Gameplay Frame + 3-clip switcher bar */}
          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="arcade-card relative aspect-video w-full overflow-hidden rounded-lg bg-white">
              {hasMediaSource ? (
                activeClip.type === "video" ? (
                  <video
                    key={activeClip.id}
                    src={activeClip.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="h-full w-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={activeClip.id}
                    src={activeClip.src}
                    alt={activeClip.title}
                    className="h-full w-full object-cover"
                  />
                )
              ) : (
                /* Clean 16:9 Media Placeholder Frame ready for public/media/ drop-in */
                <div className="relative flex h-full w-full flex-col justify-between bg-[#FAF7F2] p-4 sm:p-6">
                  {/* Top status bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-sm border-2 border-[#18181B] bg-[#18181B] px-2.5 py-1 font-mono text-xs font-bold text-white">
                      {activeClip.type === "video" ? (
                        <Film className="h-3.5 w-3.5 text-[#FACC15]" />
                      ) : (
                        <ImageIcon className="h-3.5 w-3.5 text-[#FACC15]" />
                      )}
                      <span>{activeClip.tag}</span>
                    </span>
                    <span className="rounded-sm border-2 border-[#18181B] bg-white px-2 py-0.5 font-mono text-xs font-extrabold text-[#18181B]">
                      16:9 FRAME
                    </span>
                  </div>

                  {/* Center clean cue */}
                  <div className="mx-auto flex max-w-md flex-col items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-md border-2 border-[#18181B] bg-[#FF5A1F] text-white shadow-[3px_3px_0px_#18181B]">
                      {activeClip.type === "video" ? (
                        <Play className="h-6 w-6 fill-white stroke-[2]" />
                      ) : (
                        <ImageIcon className="h-6 w-6 stroke-[2.2]" />
                      )}
                    </div>
                    <p className="text-lg font-black text-[#18181B] sm:text-xl">
                      {activeClip.index}. {activeClip.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#52525B]">
                      {activeClip.caption}
                    </p>
                  </div>

                  {/* Bottom file drop-in path indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-dashed border-[#18181B]/30 pt-3 font-mono text-xs text-[#52525B]">
                    <span>MEDIA SLOT READY</span>
                    <code className="rounded-sm border border-[#18181B] bg-white px-2 py-0.5 font-bold text-[#18181B]">
                      {activeClip.expectedPath}
                    </code>
                  </div>
                </div>
              )}
            </div>

            {/* 3-Minigame Clip Switcher Bar */}
            <div
              role="tablist"
              aria-label="플레이 클립 전환"
              className="grid grid-cols-3 gap-2.5"
            >
              {heroData.mediaClips.map((clip, idx) => {
                const isActive = idx === activeClipIndex;
                return (
                  <button
                    key={clip.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveClipIndex(idx)}
                    className={`flex cursor-pointer items-center justify-between gap-2 rounded-md border-2 border-[#18181B] px-3 py-2 text-left transition-transform ${
                      isActive
                        ? "bg-[#FACC15] shadow-[3px_3px_0px_#18181B] -translate-y-0.5"
                        : "bg-white hover:bg-[#FAF7F2] shadow-[2px_2px_0px_#18181B]"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] font-extrabold text-[#52525B]">
                        CLIP {clip.index}
                      </div>
                      <div className="truncate text-xs font-extrabold text-[#18181B] sm:text-sm">
                        {clip.title}
                      </div>
                    </div>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 border border-[#18181B] ${
                        isActive ? "bg-[#FF5A1F]" : "bg-white"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
