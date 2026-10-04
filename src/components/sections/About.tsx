import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading label="about" title="A bit about me" />

      <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
        {/* README window */}
        <div className="overflow-hidden rounded-xl border border-navy-800 bg-navy-900/60">
          <div className="flex items-center gap-2 border-b border-navy-800 px-4 py-3">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full bg-red-400/70"
            />
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full bg-yellow-400/70"
            />
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full bg-green-400/70"
            />
            <span className="ml-3 font-mono text-xs text-muted">README.md</span>
          </div>

          <div className="space-y-4 p-6 leading-relaxed text-muted">
            <p className="font-mono text-lg text-ink">
              <span className="text-accent"># </span>About me
            </p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p className="pt-2 font-mono text-ink">
              <span className="text-accent">## </span>Outside of code
            </p>
            <p>{profile.about.outsideCode}</p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative mx-auto w-56 md:w-64">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-accent"
          />
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={256}
            height={323}
            className="relative rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
