import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceTabs from "@/components/ui/ExperienceTabs";
import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading label="experience" title="Where I've worked" />
      <ExperienceTabs jobs={experience} />
    </section>
  );
}
