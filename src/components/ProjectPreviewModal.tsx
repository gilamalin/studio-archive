"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { UpcomingProject } from "@/data/types";

interface ProjectPreviewModalProps {
  project: UpcomingProject | null;
  onClose: () => void;
}

export function ProjectPreviewModal({
  project,
  onClose,
}: ProjectPreviewModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPrototype = project.stage === "Prototype";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/65 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-lg border-2 border-[#18181B] bg-white shadow-[6px_6px_0px_#18181B]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-[#18181B] bg-[#FAF7F2] px-5 py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="font-mono text-sm font-black text-[#FF5A1F]">
              {project.index}
            </span>
            <h3
              id="modal-project-title"
              className="truncate text-xl font-black tracking-tight text-[#18181B]"
            >
              {project.title}
            </h3>
            <span
              className={`shrink-0 rounded-sm border-2 border-[#18181B] px-2 py-0.5 font-mono text-[11px] font-extrabold ${
                isPrototype
                  ? "bg-[#FF5A1F] text-white"
                  : "bg-[#FACC15] text-[#18181B]"
              }`}
            >
              {project.stage}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="프리뷰 닫기"
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 border-[#18181B] bg-white text-[#18181B] transition-colors hover:bg-[#18181B] hover:text-white"
          >
            <X className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 p-5">
          {/* Genre & Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-sm border-2 border-[#18181B] bg-[#18181B] px-2 py-0.5 text-xs font-bold text-white">
              {project.genre}
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border-2 border-[#18181B] bg-[#FAF7F2] px-2 py-0.5 font-mono text-xs font-bold text-[#18181B]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 1-Line Logline */}
          <div className="rounded-md border-2 border-[#18181B] bg-[#FAF7F2] px-4 py-3">
            <div className="font-mono text-[10px] font-extrabold text-[#52525B]">
              LOGLINE
            </div>
            <p className="mt-1 text-sm font-bold leading-snug text-[#18181B] sm:text-base">
              {project.logline}
            </p>
          </div>

          {/* 3 Core Design Points */}
          <div>
            <div className="mb-2 font-mono text-[11px] font-extrabold text-[#52525B]">
              CORE DESIGN POINTS
            </div>
            <ul className="space-y-2">
              {project.corePoints.map((point, idx) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-[#18181B]"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs border border-[#18181B] bg-[#FACC15] font-mono text-[11px] font-black text-[#18181B]">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t-2 border-[#18181B] bg-[#FAF7F2] px-5 py-3">
          <span className="font-mono text-xs font-bold text-[#52525B]">
            STAGE · {project.stage.toUpperCase()}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="arcade-btn cursor-pointer rounded-sm bg-white px-3.5 py-1.5 text-xs font-extrabold text-[#18181B]"
          >
            닫기 (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
