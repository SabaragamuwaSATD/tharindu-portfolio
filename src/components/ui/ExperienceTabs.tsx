"use client";

import { useState } from "react";
import Tag from "@/components/ui/Tag";
import type { Experience } from "@/types";

export default function ExperienceTabs({ jobs }: { jobs: Experience[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const job = jobs[activeIndex];

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Company tabs */}
      <div
        role="tablist"
        aria-label="Work history"
        className="flex overflow-x-auto md:w-56 md:shrink-0 md:flex-col"
      >
        {jobs.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.company}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={isActive}
              aria-controls={`panel-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap border-b-2 px-5 py-3 text-left font-mono text-sm transition-colors md:whitespace-normal md:border-b-0 md:border-l-2 ${
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-navy-800 text-muted hover:bg-navy-900 hover:text-accent"
              }`}
            >
              {item.company}
            </button>
          );
        })}
      </div>

      {/* Job details */}
      <div
        role="tabpanel"
        id={`panel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
        className="min-h-80 flex-1"
      >
        <h3 className="text-xl font-semibold">
          {job.role}{" "}
          {job.companyUrl ? (
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @ {job.company}
            </a>
          ) : (
            <span className="text-accent">@ {job.company}</span>
          )}
        </h3>

        <p className="mt-1 font-mono text-sm text-muted">
          {job.startDate} – {job.endDate ?? "Present"} · {job.location}
        </p>

        <ul className="mt-6 space-y-4">
          {job.highlights.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-muted">
              <span aria-hidden="true" className="text-accent">
                ▹
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>
      </div>
    </div>
  );
}
