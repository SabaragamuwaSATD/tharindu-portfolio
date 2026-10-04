type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-accent">{`// ${label}`}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}
