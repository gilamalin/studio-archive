"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { siteMeta } from "@/data/site";
import type { TeamMember } from "@/data/types";

interface MemberDetailModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function MemberDetailModal({ member, onClose }: MemberDetailModalProps) {
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-md border border-white/15 bg-[var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      >
        {/* Modal Header (No numbering, single X close button) */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#111318] px-5 py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <h3
              id="member-modal-title"
              className="truncate text-base font-black text-[var(--text)] sm:text-lg"
            >
              {member.name}
            </h3>
            <span className="font-mono text-[11px] font-bold text-[var(--accent)]">
              {member.handle}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-white/10 bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-white/25 hover:text-[var(--text)]"
          >
            <X className="h-4 w-4 stroke-[2.2]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 p-5">
          {/* Short Intro */}
          <p className="text-sm font-medium leading-relaxed text-[var(--text)]/90">
            {member.bio}
          </p>

          {/* Contributions on FLIP & FLOP */}
          <div>
            <div className="mb-2.5 flex items-center gap-2">
              <span className="inline-block h-3.5 w-1 rounded-xs bg-[var(--accent)]" />
              <span className="text-xs font-extrabold tracking-tight text-[var(--text)]">
                {siteMeta.gameTitle} 작업 내역
              </span>
            </div>
            <ul className="space-y-2">
              {member.contributions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs font-medium leading-relaxed text-[var(--text)]/85 sm:text-sm"
                >
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools / Stack */}
          <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
            {member.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-sm border border-white/10 bg-[#111318] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--text-muted)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
