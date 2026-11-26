import { ArrowUpRight } from "lucide-react";
import { teamData } from "@/data/team";

export function TeamSection() {
  return (
    <section className="border-b border-white/10 bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {teamData.headline}
          </h1>
        </div>

        {/* Clean Horizontal Roster Cards */}
        <div className="space-y-3.5">
          {teamData.members.map((member) => {
            const hasAvatar = member.avatarSrc.trim().length > 0;
            return (
              <article
                key={member.id}
                className="flex flex-col gap-4 rounded-md border border-white/10 bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4 sm:items-center">
                  {/* Profile Avatar Slot */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-[#111318]">
                    {hasAvatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.avatarSrc}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-lg font-black text-[var(--accent)]">
                        {member.index}
                      </span>
                    )}
                  </div>

                  {/* Bio & Roles */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-base font-extrabold text-[var(--text)] sm:text-lg">
                        {member.name}
                      </h2>
                      <span className="font-mono text-[11px] font-bold text-[var(--accent)]">
                        {member.handle}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
                      {member.oneLiner}
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {member.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 text-xs font-semibold text-[var(--text)]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Member Links */}
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                  {member.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#111318] px-3 py-1.5 font-mono text-xs font-bold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
