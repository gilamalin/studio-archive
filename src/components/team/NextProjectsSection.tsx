import { teamData } from "@/data/team";

export function NextProjectsSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h2 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {teamData.nextProjectsHeadline}
          </h2>
        </div>

        {/* Flat Surface Index Container (Unified with Pages 2 & 3) */}
        <div className="divide-y divide-white/[0.08] rounded-md border border-white/[0.08] bg-[#1A1D24] px-5">
          {teamData.nextProjects.map((project) => {
            const isPrototype = project.stage === "프로토타입";
            return (
              <div
                key={project.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex items-center gap-2.5 sm:w-52 sm:shrink-0">
                  <span
                    aria-hidden="true"
                    className={`inline-block h-2 w-2 shrink-0 rounded-[2px] ${
                      isPrototype ? "bg-[var(--accent)]" : "bg-white/25"
                    }`}
                  />
                  <span className="text-base font-extrabold tracking-tight text-[var(--text)]">
                    {project.title}
                  </span>
                </div>

                <p className="min-w-0 flex-1 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
                  {project.oneLiner}
                </p>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 text-xs font-semibold text-[var(--text-muted)]">
                    {project.genre}
                  </span>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] font-bold ${
                      isPrototype
                        ? "border-[var(--accent)] text-[var(--accent)]"
                        : "border-white/15 text-[var(--text-muted)]"
                    }`}
                  >
                    {project.stage}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
