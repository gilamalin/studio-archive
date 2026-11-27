import { ArrowRight } from "lucide-react";
import { behindData } from "@/data/behind";

export function BehindSection() {
  return (
    <section id="highlights" className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        {/* Clean Page Header */}
        <div className="mb-6 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {behindData.headline}
          </h1>
        </div>

        {/* Top Tier: Flat Surface 3-Column Pivot Bar (No Drop Shadow) */}
        <div className="mb-6 overflow-hidden rounded-md border border-white/[0.08] bg-[#1A1D24]">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0">
            {behindData.pivotStages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`p-5 ${stage.highlight ? "bg-[#20242E]" : ""}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-extrabold tracking-wider text-[var(--text-muted)]">
                    {stage.step}
                  </span>
                  {idx < behindData.pivotStages.length - 1 && (
                    <ArrowRight className="hidden h-3.5 w-3.5 text-[var(--text-muted)]/50 md:block" />
                  )}
                </div>
                <h2 className="mt-1.5 text-sm font-extrabold text-[var(--text)] sm:text-base">
                  {stage.title}
                </h2>
                <p className="mt-1 text-xs font-medium leading-snug text-[var(--text-muted)]">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Asymmetric 5:7 Flat Surface Split */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
          {/* Left 5 cols: Pipeline + Short Dev Notes */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="rounded-md border border-white/[0.08] bg-[#1A1D24] p-5">
              <h2 className="text-base font-extrabold text-[var(--text)]">
                {behindData.pipelineTitle}
              </h2>

              {behindData.pipelineTools.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {behindData.pipelineTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--text-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-3 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                {behindData.pipelineItems.map((item) => (
                  <div key={item.label} className="py-3 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs font-bold text-[var(--text)] sm:text-sm">
                        {item.label}
                      </span>
                      <span className="tabular-nums font-mono text-xs font-black text-[var(--accent)]">
                        {item.metric}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Short Dev Notes */}
            <div className="rounded-md border border-white/[0.08] bg-[#1A1D24] p-5">
              <h2 className="text-base font-extrabold text-[var(--text)]">
                개발 노트
              </h2>
              <div className="mt-3 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                {behindData.devNotes.map((note) => (
                  <div key={note.date} className="py-3 last:pb-0">
                    <div className="text-xs font-bold text-[var(--text)] sm:text-sm">
                      {note.title}
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-[var(--text-muted)]">
                      {note.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 cols: 2 Real Technical Solutions */}
          <div className="rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 lg:col-span-7">
            <h2 className="text-base font-extrabold text-[var(--text)]">
              {behindData.techTitle}
            </h2>

            <div className="mt-4 divide-y divide-white/[0.08] border-t border-white/[0.08]">
              {behindData.techSolutions.map((item) => (
                <article key={item.id} className="py-5 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 text-[11px] font-bold text-[var(--accent)]">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-extrabold text-[var(--text)]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    <div className="border-l-2 border-l-white/15 pl-3">
                      <span className="text-[11px] font-bold text-[var(--text-muted)]">
                        문제
                      </span>
                      <p className="mt-0.5 text-xs font-medium leading-relaxed text-[var(--text-muted)] sm:text-sm">
                        {item.problem}
                      </p>
                    </div>
                    <div className="border-l-2 border-l-[var(--accent)] pl-3">
                      <span className="text-[11px] font-bold text-[var(--accent)]">
                        해결
                      </span>
                      <p className="mt-0.5 text-xs font-semibold leading-relaxed text-[var(--text)]/90 sm:text-sm">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
