import { ArrowRight } from "lucide-react";
import { behindData } from "@/data/behind";

export function BehindSection() {
  return (
    <section
      id="behind"
      className="scroll-mt-16 border-b-2 border-[#18181B] bg-[#FAF7F2]"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-12">
        {/* Section Header */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 items-center rounded-sm border-2 border-[#18181B] bg-[#18181B] px-2 font-mono text-xs font-extrabold text-[#FACC15]">
                {behindData.sectionIndex}
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[#18181B] sm:text-3xl">
                {behindData.headline}
              </h2>
            </div>
            <p className="mt-1.5 text-sm font-medium text-[#52525B] sm:text-base">
              {behindData.subcopy}
            </p>
          </div>
        </div>

        {/* Top Tier: Compact Full-Width Horizontal Pivot Bar (Before -> Pivot -> Now) */}
        <div className="arcade-card mb-6 overflow-hidden rounded-lg">
          <div className="flex items-center justify-between border-b-2 border-[#18181B] bg-[#18181B] px-4 py-2 text-white">
            <span className="font-mono text-xs font-extrabold tracking-wider text-[#FACC15]">
              {behindData.pivotLabel}
            </span>
            <span className="font-mono text-[11px] font-semibold text-white/80">
              BEFORE → PIVOT → NOW
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y-2 divide-[#18181B] md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            {behindData.pivotStages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`relative px-4 py-3.5 ${
                  stage.highlight ? "bg-[#FACC15]/25" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-block rounded-sm border-2 border-[#18181B] px-2 py-0.5 font-mono text-[11px] font-black ${
                      stage.highlight
                        ? "bg-[#FF5A1F] text-white"
                        : "bg-[#FAF7F2] text-[#18181B]"
                    }`}
                  >
                    {stage.step}
                  </span>
                  {idx < behindData.pivotStages.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-[#18181B] md:block" />
                  )}
                </div>
                <h3 className="mt-2 text-base font-extrabold text-[#18181B]">
                  {stage.title}
                </h3>
                <p className="mt-1 text-xs font-medium leading-relaxed text-[#52525B] sm:text-sm">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Asymmetric 2-Split (Left 5: AI/MCP Efficiency, Right 7: Tech Solutions) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Bottom Left (5 cols): AI & MCP Pipeline Production Efficiency */}
          <div className="arcade-card flex flex-col justify-between rounded-lg p-5 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-black tracking-tight text-[#18181B]">
                  {behindData.pipelineTitle}
                </h3>
                <span className="font-mono text-xs font-extrabold text-[#FF5A1F]">
                  WORKFLOW
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {behindData.pipelineTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-sm border-2 border-[#18181B] bg-[#FAF7F2] px-2 py-0.5 font-mono text-[11px] font-bold text-[#18181B]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 divide-y-2 divide-[#18181B]/15 border-t-2 border-[#18181B]">
              {behindData.pipelineItems.map((item) => (
                <div key={item.label} className="py-3 first:pt-3.5 last:pb-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-extrabold text-[#18181B]">
                      {item.label}
                    </span>
                    <span className="tabular-nums rounded-sm border border-[#18181B] bg-[#FACC15] px-2 py-0.5 font-mono text-xs font-black text-[#18181B]">
                      {item.metric}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-[#52525B]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right (7 cols): 2 Real Technical Solutions (Problem -> Solution) */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg font-black tracking-tight text-[#18181B]">
                {behindData.techTitle}
              </h3>
              <span className="font-mono text-xs font-extrabold text-[#52525B]">
                PROBLEM → SOLUTION
              </span>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-4">
              {behindData.techSolutions.map((item) => (
                <article
                  key={item.id}
                  className="arcade-card flex flex-col justify-between rounded-lg p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-sm border-2 border-[#18181B] bg-[#18181B] px-2 py-0.5 font-mono text-[11px] font-extrabold text-white">
                      {item.tag}
                    </span>
                    <h4 className="text-base font-black text-[#18181B] sm:text-lg">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-3 space-y-2">
                    <p className="rounded-sm border border-[#18181B]/25 bg-[#FAF7F2] px-3 py-2 text-xs font-semibold leading-relaxed text-[#52525B] sm:text-sm">
                      {item.problem}
                    </p>
                    <p className="rounded-sm border-l-4 border-l-[#FF5A1F] border-y border-r border-[#18181B] bg-white px-3 py-2 text-xs font-bold leading-relaxed text-[#18181B] sm:text-sm">
                      {item.solution}
                    </p>
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
