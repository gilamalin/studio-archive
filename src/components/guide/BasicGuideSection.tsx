"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { guideData } from "@/data/guide";
import type { GuideStepPanel } from "@/data/types";

type BasicTab = "keys" | "customize" | "stage-select";

function GuideMediaPanel({ panel }: { panel: GuideStepPanel }) {
  const hasMedia = panel.mediaSrc.trim().length > 0;

  return (
    <div className="grid h-full grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
      <div className="flex flex-col justify-between rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] lg:col-span-5">
        <div>
          <h3 className="text-base font-extrabold text-[var(--text)] sm:text-lg">
            {panel.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
            {panel.summary}
          </p>
        </div>

        <ol className="mt-4 space-y-3 border-t border-white/10 pt-4">
          {panel.steps.map((step, idx) => (
            <li
              key={step}
              className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-[var(--text)]"
            >
              <span className="mt-0.5 font-mono text-xs font-black text-[var(--accent)]">
                0{idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative aspect-video h-full w-full overflow-hidden rounded-md border border-white/10 bg-[#0E1014] shadow-[0_14px_36px_rgba(0,0,0,0.45)] lg:col-span-7 lg:aspect-auto">
        {hasMedia ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={panel.mediaSrc}
            alt={panel.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-[var(--surface-alt)] px-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-[var(--surface)] text-[var(--accent)]">
              <ImageIcon className="h-5 w-5 stroke-[2.2]" />
            </div>
            <code className="rounded-sm border border-white/10 bg-[var(--surface)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--text-muted)]">
              {panel.expectedPath}
            </code>
          </div>
        )}
      </div>
    </div>
  );
}

export function BasicGuideSection() {
  const [activeTab, setActiveTab] = useState<BasicTab>("keys");

  const tabs: { id: BasicTab; index: string; label: string }[] = [
    { id: "keys", index: "01", label: "기본 조작키" },
    { id: "customize", index: "02", label: "캐릭터 · 커스터마이징" },
    { id: "stage-select", index: "03", label: "스테이지 선택" },
  ];

  return (
    <section className="border-b border-white/10 bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
            <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
              {guideData.headline}
            </h1>
          </div>

          {/* Minimal Tab Switcher (Matches Header Underline Language) */}
          <div role="tablist" className="flex flex-wrap gap-1.5">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-bold transition-colors ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--text)]"
                      : "border-white/10 bg-[var(--surface-alt)] text-[var(--text-muted)] hover:border-white/20 hover:text-[var(--text)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-black ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-muted)]/70"
                    }`}
                  >
                    {tab.index}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed Desktop Height Container -> 0px Layout Shift Between Tabs */}
        <div className="lg:h-[348px]">
          {activeTab === "keys" && (
            <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {guideData.keyBindings.map((binding) => {
                const isPhysics = binding.category === "PHYSICS";
                return (
                  <div
                    key={binding.action}
                    className={`flex flex-col justify-between rounded-md border bg-[var(--surface)] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] ${
                      isPhysics
                        ? "border-l-4 border-l-[var(--accent)] border-y-white/10 border-r-white/10"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[10px] font-extrabold tracking-wider ${
                          isPhysics
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {binding.category}
                      </span>
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-3">
                      <span className="text-base font-extrabold text-[var(--text)]">
                        {binding.action}
                      </span>

                      <div className="flex flex-wrap items-center justify-end gap-1.5">
                        {binding.keys.map((key) => (
                          <kbd
                            key={key}
                            className="inline-flex min-w-8 items-center justify-center rounded-sm border border-white/15 bg-[#111318] px-2.5 py-1 font-mono text-xs font-black text-[var(--text)] shadow-[0_2px_0_rgba(0,0,0,0.6)]"
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "customize" && (
            <GuideMediaPanel panel={guideData.customizeGuide} />
          )}

          {activeTab === "stage-select" && (
            <GuideMediaPanel panel={guideData.stageSelectGuide} />
          )}
        </div>
      </div>
    </section>
  );
}
