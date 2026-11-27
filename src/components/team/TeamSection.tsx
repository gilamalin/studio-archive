"use client";

import { useState } from "react";
import { BrandIcon } from "@/components/BrandIcons";
import { teamData } from "@/data/team";
import type { TeamMember } from "@/data/types";
import { MemberDetailModal } from "./MemberDetailModal";

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:px-6 lg:pt-10 lg:pb-8">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="inline-block h-5 w-1 rounded-xs bg-[var(--accent)]" />
          <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">
            {teamData.headline}
          </h1>
        </div>

        {/* Individual Flat Surface Member Boxes */}
        <div className="space-y-3">
          {teamData.members.map((member) => {
            const hasAvatar = member.avatarSrc.trim().length > 0;
            const hasGithub = member.githubUrl.trim().length > 0;

            return (
              <article
                key={member.id}
                className="flex flex-col gap-4 rounded-md border border-white/[0.08] bg-[#1A1D24] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4 sm:items-center">
                  {/* Profile Avatar Slot */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-[var(--surface)]">
                    {hasAvatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.avatarSrc}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-sm font-black text-[var(--accent)]">
                        {member.index}
                      </span>
                    )}
                  </div>

                  {/* Bio & Roles */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-base font-extrabold text-[var(--text)]">
                        {member.name}
                      </h2>
                      <span className="font-mono text-[11px] font-bold text-[var(--accent)]">
                        {member.handle}
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
                      {member.oneLiner}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {member.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 text-[11px] font-semibold text-[var(--text-muted)]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Member Actions: GitHub + Works Detail Modal Trigger */}
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                  {hasGithub && (
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-[#111318] px-3 font-mono text-xs font-bold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <BrandIcon label="GitHub" className="h-3.5 w-3.5 shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-white/20 bg-[var(--surface)] px-3 font-mono text-xs font-bold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span>Works</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
