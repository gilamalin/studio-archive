"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { guideData } from "@/data/guide";

export function StageRulesSection() {
  const [selectedStageId, setSelectedStageId] = useState(guideData.stages[0].id);
  const [mpTab, setMpTab] = useState<"create" | "join">("create");

  const activeStage =
    guideData.stages.find((s) => s.id === selectedStageId) ?? guideData.stages[0];

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-12 sm:px-6 lg:pt-8 lg:pb-14">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {guideData.stagesHeadline}
          </h2>
        </div>

        {/* Asymmetric 7:5 Flat Surface Split (Zero Shadow, Crisp Horizontal Separation) */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          {/* Left 7 cols: Stage Selector + Editorial Hairline Rule Rows */}
          <div className="flex flex-col justify-between rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4">
                <div className="flex flex-wrap gap-1.5">
                  {guideData.stages.map((stage) => {
                    const isActive = stage.id === activeStage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setSelectedStageId(stage.id)}
                        className={`inline-flex h-8 cursor-pointer items-center rounded-md border px-3 text-xs font-bold transition-colors ${
                          isActive
                            ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                            : "border-white/10 bg-[#111318] text-[var(--text-muted)] hover:border-white/25 hover:text-[var(--text)]"
                        }`}
                      >
                        <span>{stage.name}</span>
                      </button>
                    );
                  })}
                </div>

                <span className="text-xs font-bold text-[var(--accent)]">
                  {activeStage.modeTag}
                </span>
              </div>

              <dl className="divide-y divide-white/10 border-t border-white/10">
                <div className="grid min-h-[56px] grid-cols-1 items-baseline gap-1 py-3 sm:grid-cols-12 sm:gap-3">
                  <dt className="text-xs font-bold text-[var(--accent)] sm:col-span-3">
                    승리 조건
                  </dt>
                  <dd className="text-sm font-bold text-[var(--text)] sm:col-span-9">
                    {activeStage.winCondition}
                  </dd>
                </div>

                <div className="grid min-h-[56px] grid-cols-1 items-baseline gap-1 py-3 sm:grid-cols-12 sm:gap-3">
                  <dt className="text-xs font-bold text-[var(--text-muted)] sm:col-span-3">
                    싱글
                  </dt>
                  <dd className="text-xs font-medium leading-snug text-[var(--text)]/90 sm:col-span-9 sm:text-sm">
                    {activeStage.singleRule}
                  </dd>
                </div>

                <div className="grid min-h-[56px] grid-cols-1 items-baseline gap-1 py-3 sm:grid-cols-12 sm:gap-3">
                  <dt className="text-xs font-bold text-[var(--text-muted)] sm:col-span-3">
                    멀티
                  </dt>
                  <dd className="text-xs font-medium leading-snug text-[var(--text)]/90 sm:col-span-9 sm:text-sm">
                    {activeStage.multiRule}
                  </dd>
                </div>

                <div className="grid min-h-[56px] grid-cols-1 items-baseline gap-1 py-3 last:pb-0 sm:grid-cols-12 sm:gap-3">
                  <dt className="text-xs font-bold text-[var(--text-muted)] sm:col-span-3">
                    점수 획득
                  </dt>
                  <dd className="text-xs font-medium text-[var(--text)]/90 sm:col-span-9 sm:text-sm">
                    {activeStage.scoringRule}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 5 cols: Multiplayer Create/Join + Restrained Warning */}
          <div className="flex flex-col justify-between gap-5 rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4">
                <h3 className="text-base font-extrabold text-[var(--text)]">
                  멀티플레이
                </h3>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setMpTab("create")}
                    className={`inline-flex h-8 cursor-pointer items-center rounded-md border px-2.5 text-xs font-bold transition-colors ${
                      mpTab === "create"
                        ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                        : "border-white/10 bg-[#111318] text-[var(--text-muted)] hover:border-white/25 hover:text-[var(--text)]"
                    }`}
                  >
                    방 만들기
                  </button>
                  <button
                    type="button"
                    onClick={() => setMpTab("join")}
                    className={`inline-flex h-8 cursor-pointer items-center rounded-md border px-2.5 text-xs font-bold transition-colors ${
                      mpTab === "join"
                        ? "border-[var(--accent)] bg-transparent text-[var(--accent)]"
                        : "border-white/10 bg-[#111318] text-[var(--text-muted)] hover:border-white/25 hover:text-[var(--text)]"
                    }`}
                  >
                    방 참여
                  </button>
                </div>
              </div>

              <ol className="min-h-[124px] divide-y divide-white/10 border-t border-white/10">
                {(mpTab === "create"
                  ? guideData.multiplayer.createSteps
                  : guideData.multiplayer.joinSteps
                ).map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 py-2.5 text-xs font-medium leading-snug text-[var(--text)]/90 sm:text-sm"
                  >
                    <span className="mt-0.5 font-mono text-xs font-black text-[var(--accent)]">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Restrained Warning Strip */}
            <div className="rounded-sm border-l-2 border-l-[var(--accent)] bg-[var(--surface-alt)]/70 px-3.5 py-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--accent)]">
                <AlertTriangle className="h-3.5 w-3.5 stroke-[2.2]" />
                <span>주의사항</span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {guideData.multiplayer.warnings.map((warning) => (
                  <li
                    key={warning}
                    className="text-xs font-medium leading-snug text-[var(--text-muted)]"
                  >
                    · {warning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
