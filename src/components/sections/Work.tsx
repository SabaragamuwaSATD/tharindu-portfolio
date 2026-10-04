import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/content/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        label="work"
        title="Things I've built"
        description="Production platforms for real clients, plus projects exploring mobile and AI."
      />
      <ProjectGrid projects={projects} />
    </section>
  );
}
