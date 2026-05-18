import Badge from "@/components/ui/Badge";

type Accent = "cyan" | "violet" | "emerald";

export default function PageHeader({
  badge,
  title,
  description,
  accent = "cyan",
}: {
  badge: string;
  title: string;
  description: string;
  accent?: Accent;
}) {
  return (
    <header className="mb-6">
      <Badge tone={accent}>{badge}</Badge>
      <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
        {description}
      </p>
    </header>
  );
}
