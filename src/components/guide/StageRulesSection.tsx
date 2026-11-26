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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {guideData.stagesHeadline}
          </h2>
        </div>

        {/* Asymmetric 7:5 Split with Stable Heights (Zero Layout Shift) */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left 7 cols: Stage Selector + Structured Spec Rows */}
          <div className="flex flex-col justify-between rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] lg:col-span-7">
            <div>
              <div className="flex flex-wrap gap-1.5">
                {guideData.stages.map((stage) => {
                  const isActive = stage.id === activeStage.id;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setSelectedStageId(stage.id)}
                      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-bold transition-colors ${
                        isActive
                          ? "border-[var(--accent)] bg-[#111318] text-[var(--text)]"
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
                        {stage.index}
                      </span>
                      <span>{stage.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-black text-[var(--text)]">
                  {activeStage.name}
                </h3>
                <span className="font-mono text-xs font-extrabold tracking-wider text-[var(--accent)]">
                  {activeStage.modeTag}
                </span>
              </div>

              <dl className="mt-3.5 space-y-2.5">
                <div className="min-h-[62px] rounded-sm border-l-4 border-l-[var(--accent)] border-y border-r border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5">
                  <dt className="font-mono text-[10px] font-extrabold text-[var(--accent)]">
                    승리 조건
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-[var(--text)]">
                    {activeStage.winCondition}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="min-h-[68px] rounded-sm border border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5">
                    <dt className="font-mono text-[10px] font-extrabold text-[var(--text-muted)]">
                      싱글
                    </dt>
                    <dd className="mt-0.5 text-xs font-semibold leading-snug text-[var(--text)]">
                      {activeStage.singleRule}
                    </dd>
                  </div>
                  <div className="min-h-[68px] rounded-sm border border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5">
                    <dt className="font-mono text-[10px] font-extrabold text-[var(--text-muted)]">
                      멀티
                    </dt>
                    <dd className="mt-0.5 text-xs font-semibold leading-snug text-[var(--text)]">
                      {activeStage.multiRule}
                    </dd>
                  </div>
                </div>

                <div className="min-h-[62px] rounded-sm border border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5">
                  <dt className="font-mono text-[10px] font-extrabold text-[var(--text-muted)]">
                    점수 획득
                  </dt>
                  <dd className="mt-0.5 text-xs font-semibold text-[var(--text)] sm:text-sm">
                    {activeStage.scoringRule}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 5 cols: Multiplayer Create/Join + Warning Box */}
          <div className="flex flex-col justify-between gap-4 rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <h3 className="text-base font-black text-[var(--text)]">
                  멀티플레이
                </h3>
                <div className="flex rounded-sm border border-white/10 bg-[#111318] p-0.5">
                  <button
                    type="button"
                    onClick={() => setMpTab("create")}
                    className={`cursor-pointer rounded-xs px-2.5 py-1 text-xs font-bold transition-colors ${
                      mpTab === "create"
                        ? "bg-[var(--surface)] text-[var(--accent)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    방 만들기
                  </button>
                  <button
                    type="button"
                    onClick={() => setMpTab("join")}
                    className={`cursor-pointer rounded-xs px-2.5 py-1 text-xs font-bold transition-colors ${
                      mpTab === "join"
                        ? "bg-[var(--surface)] text-[var(--accent)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    방 참여
                  </button>
                </div>
              </div>

              <ol className="mt-4 min-h-[120px] space-y-3">
                {(mpTab === "create"
                  ? guideData.multiplayer.createSteps
                  : guideData.multiplayer.joinSteps
                ).map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 text-xs font-semibold leading-snug text-[var(--text)] sm:text-sm"
                  >
                    <span className="mt-0.5 font-mono text-xs font-black text-[var(--accent)]">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Warnings */}
            <div className="rounded-sm border-l-4 border-l-[var(--accent)] border-y border-r border-white/10 bg-[#111318] p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-extrabold text-[var(--accent)]">
                <AlertTriangle className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>주의사항</span>
              </div>
              <ul className="mt-2 space-y-1.5">
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
