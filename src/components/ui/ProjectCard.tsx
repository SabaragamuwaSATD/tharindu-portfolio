import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { Project, ProjectCategory } from "@/types";

const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  ai: "AI",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-navy-800 bg-navy-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-accent">
          {categoryLabels[project.category]}
        </span>
        <div className="flex gap-4 font-mono text-xs">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </ul>

      {project.caseStudy && (
        <Link
          href={`/work/${project.slug}`}
          className="mt-6 font-mono text-sm text-accent hover:underline"
        >
          Read case study →
        </Link>
      )}
    </article>
  );
}