"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project, ProjectCategory } from "@/types";

type Filter = "all" | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "ai", label: "AI" },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-3"
      >
        {filters.map((filter) => {
          const count =
            filter.value === "all"
              ? projects.length
              : projects.filter((p) => p.category === filter.value).length;
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 font-mono text-sm transition-colors ${
                isActive
                  ? "border-accent bg-accent text-navy-950"
                  : "border-navy-800 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {filter.label} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
