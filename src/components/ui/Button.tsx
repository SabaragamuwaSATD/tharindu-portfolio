import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

const variantStyles = {
  primary: "bg-accent text-navy-950 hover:bg-accent/90",
  outline: "border border-accent text-accent hover:bg-accent/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const className = `inline-flex items-center rounded-md px-6 py-3 font-mono text-sm font-medium transition-colors ${variantStyles[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
