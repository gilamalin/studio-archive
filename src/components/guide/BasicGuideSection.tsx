"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { guideData } from "@/data/guide";
import type { GuideStepPanel } from "@/data/types";

type BasicTab = "keys" | "customize" | "stage-select";

function GuideMediaPanel({ panel }: { panel: GuideStepPanel }) {
  const hasMedia = panel.mediaSrc.trim().length > 0;

  return (
    <div className="grid h-full grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
      <div className="flex flex-col justify-between rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 lg:col-span-5">
        <p className="text-sm font-bold text-[var(--text)]">{panel.summary}</p>

        <ol className="mt-4 divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {panel.steps.map((step, idx) => (
            <li
              key={step}
              className="flex items-start gap-2.5 py-3 text-sm font-semibold leading-snug text-[var(--text)]/90 last:pb-0"
            >
              <span className="mt-0.5 font-mono text-xs font-black text-[var(--accent)]">
                0{idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="order-first relative aspect-video h-full w-full overflow-hidden rounded-md border border-white/10 bg-[#0E1014] shadow-[0_16px_40px_rgba(0,0,0,0.45)] lg:order-none lg:col-span-7 lg:aspect-auto">
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

  const tabs: { id: BasicTab; label: string }[] = [
    { id: "keys", label: "기본 조작키" },
    { id: "customize", label: "캐릭터 · 커스터마이징" },
    { id: "stage-select", label: "스테이지 선택" },
  ];

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:px-6 lg:pt-10 lg:pb-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
            <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
              {guideData.headline}
            </h1>
          </div>

          {/* Minimal Tab Switcher */}
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
                  className={`inline-flex h-8 cursor-pointer items-center rounded-md border px-3 text-xs font-bold transition-colors ${
                    isActive
                      ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                      : "border-white/10 bg-[#111318] text-[var(--text-muted)] hover:border-white/25 hover:text-[var(--text)]"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed Desktop Height Container -> 0px Layout Shift Between Tabs */}
        <div className="lg:h-[348px]">
          {activeTab === "keys" && (
            <div className="grid h-full grid-cols-2 gap-3 lg:grid-cols-3 lg:grid-rows-2">
              {guideData.keyBindings.map((binding) => {
                const isPhysics = binding.category === "물리";
                return (
                  <div
                    key={binding.action}
                    className="flex flex-col justify-between rounded-md border border-white/[0.08] bg-[#1A1D24] p-4 sm:p-5"
                  >
                    <span
                      className={`text-[11px] font-bold ${
                        isPhysics
                          ? "text-[var(--accent)]"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {binding.category}
                    </span>

                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                      <span className="text-sm font-extrabold text-[var(--text)] sm:text-base">
                        {binding.action}
                      </span>

                      <div className="flex flex-wrap items-center gap-1 sm:justify-end sm:gap-1.5">
                        {binding.keys.map((key) => (
                          <kbd
                            key={key}
                            className="inline-flex min-w-7 items-center justify-center rounded-sm border border-white/15 bg-[#111318] px-2 py-1 font-mono text-[11px] font-bold text-[var(--text)] sm:min-w-8 sm:px-2.5 sm:text-xs"
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
