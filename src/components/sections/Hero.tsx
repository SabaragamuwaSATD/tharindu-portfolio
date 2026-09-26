import Button from "@/components/ui/Button";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-16">
      <div className="flex items-center gap-3 font-mono text-sm text-muted">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span>Currently building: {profile.status.building}</span>
      </div>

      <p className="mt-8 font-mono text-accent">{"// hi, my name is"}</p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-3 text-3xl font-bold text-muted sm:text-5xl">
        {profile.headline}
      </p>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {profile.positioning}
      </p>

      <p className="mt-3 font-mono text-sm text-muted">
        Learning: <span className="text-accent">{profile.status.learning}</span>
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/#work">View my work</Button>
        <Button href={profile.links.cv} variant="outline" external>
          Download CV
        </Button>
        <Button href="/#contact" variant="outline">
          Contact me
        </Button>
      </div>
    </section>
  );
}
