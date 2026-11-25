"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { upcomingData } from "@/data/upcoming";
import type { UpcomingProject } from "@/data/types";
import { ProjectPreviewModal } from "./ProjectPreviewModal";

export function UpcomingSection() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] =
    useState<UpcomingProject | null>(null);

  const handleSelectProject = (project: UpcomingProject) => {
    if (project.hasDetailPage) {
      router.push(`/projects/${project.slug}`);
      return;
    }
    setSelectedProject(project);
  };

  return (
    <section id="upcoming" className="scroll-mt-16 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-12">
        {/* Section Header */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 items-center rounded-sm border-2 border-[#18181B] bg-[#18181B] px-2 font-mono text-xs font-extrabold text-[#FACC15]">
                {upcomingData.sectionIndex}
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[#18181B] sm:text-3xl">
                {upcomingData.headline}
              </h2>
            </div>
            <p className="mt-1.5 text-sm font-medium text-[#52525B] sm:text-base">
              {upcomingData.subcopy}
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-[#52525B]">
            CLICK ROW TO PREVIEW
          </span>
        </div>

        {/* Arcade Catalog Index List */}
        <div className="space-y-3">
          {upcomingData.projects.map((project) => {
            const isPrototype = project.stage === "Prototype";
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleSelectProject(project)}
                className="arcade-row group flex w-full cursor-pointer flex-col gap-3 rounded-lg px-4 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:px-5"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  {/* Index + Title */}
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-[#18181B] bg-[#FAF7F2] font-mono text-xs font-black text-[#18181B] transition-colors group-hover:bg-[#FF5A1F] group-hover:text-white">
                      {project.index}
                    </span>
                    <span className="truncate text-lg font-black tracking-tight text-[#18181B]">
                      {project.title}
                    </span>
                  </div>

                  {/* Genre + Stage Badges */}
                  <div className="flex shrink-0 items-center gap-1.5 sm:w-52">
                    <span className="rounded-sm border-2 border-[#18181B] bg-[#FAF7F2] px-2 py-0.5 text-xs font-bold text-[#18181B]">
                      {project.genre}
                    </span>
                    <span
                      className={`rounded-sm border-2 border-[#18181B] px-2 py-0.5 font-mono text-[11px] font-extrabold ${
                        isPrototype
                          ? "bg-[#FF5A1F] text-white"
                          : "bg-[#FACC15] text-[#18181B]"
                      }`}
                    >
                      {project.stage}
                    </span>
                  </div>

                  {/* 1-Line Hook */}
                  <p className="min-w-0 flex-1 truncate text-sm font-semibold text-[#52525B] group-hover:text-[#18181B]">
                    {project.hook}
                  </p>
                </div>

                {/* Right Action Arrow */}
                <div className="flex shrink-0 items-center justify-end gap-1.5 font-mono text-xs font-extrabold text-[#18181B]">
                  <span className="hidden transition-colors group-hover:text-[#FF5A1F] md:inline">
                    PREVIEW
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border-2 border-[#18181B] bg-white transition-colors group-hover:bg-[#FACC15]">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
