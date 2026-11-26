import { ArrowRight } from "lucide-react";
import { behindData } from "@/data/behind";

export function BehindSection() {
  return (
    <section id="highlights" className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        {/* Clean Page Header */}
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {behindData.headline}
          </h1>
        </div>

        {/* Top Tier: Compact Full-Width Horizontal Pivot Bar */}
        <div className="mb-6 overflow-hidden rounded-md border border-white/10 bg-[var(--surface)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#111318] px-4 py-2.5">
            <span className="text-xs font-extrabold text-[var(--text)]">
              {behindData.pivotLabel}
            </span>
            <span className="font-mono text-[11px] font-bold text-[var(--text-muted)]">
              BEFORE → PIVOT → NOW
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {behindData.pivotStages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`px-4 py-4 ${
                  stage.highlight
                    ? "border-t-2 border-t-[var(--accent)] bg-[var(--surface)] md:border-t-0"
                    : "bg-[var(--surface-alt)]/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[11px] font-black tracking-wider ${
                      stage.highlight
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {stage.step}
                  </span>
                  {idx < behindData.pivotStages.length - 1 && (
                    <ArrowRight className="hidden h-3.5 w-3.5 text-[var(--text-muted)]/60 md:block" />
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

        {/* Bottom Tier: Asymmetric 2-Split */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 5 cols: Pipeline + Short Dev Notes */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <h2 className="text-base font-black text-[var(--text)]">
                {behindData.pipelineTitle}
              </h2>

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

              <div className="mt-4 divide-y divide-white/10 border-t border-white/10">
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
            <div className="rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <div className="text-sm font-black text-[var(--text)]">
                짧은 개발 노트
              </div>
              <div className="mt-3 space-y-2.5">
                {behindData.devNotes.map((note) => (
                  <div
                    key={note.date}
                    className="rounded-sm border border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-black text-[var(--accent)]">
                        {note.date}
                      </span>
                      <span className="text-xs font-bold text-[var(--text)]">
                        {note.title}
                      </span>
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
          <div className="flex flex-col gap-4 lg:col-span-7">
            <h2 className="px-0.5 text-base font-black text-[var(--text)]">
              {behindData.techTitle}
            </h2>

            <div className="grid flex-1 grid-cols-1 gap-4">
              {behindData.techSolutions.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-[11px] font-black tracking-wider text-[var(--accent)]">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-extrabold text-[var(--text)]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3.5 space-y-2">
                    <div className="rounded-sm border border-white/10 bg-[var(--surface-alt)] px-3.5 py-2.5">
                      <span className="font-mono text-[10px] font-extrabold text-[var(--text-muted)]">
                        문제
                      </span>
                      <p className="mt-0.5 text-xs font-medium leading-relaxed text-[var(--text-muted)] sm:text-sm">
                        {item.problem}
                      </p>
                    </div>
                    <div className="rounded-sm border-l-4 border-l-[var(--accent)] border-y border-r border-white/10 bg-[#111318] px-3.5 py-2.5">
                      <span className="font-mono text-[10px] font-extrabold text-[var(--accent)]">
                        해결
                      </span>
                      <p className="mt-0.5 text-xs font-semibold leading-relaxed text-[var(--text)] sm:text-sm">
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
