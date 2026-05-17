type Accent = "cyan" | "violet" | "emerald";

const accentStyles: Record<Accent, string> = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
};

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
      <span
        className={`inline-flex rounded-lg border px-3 py-1 text-xs font-bold uppercase ${accentStyles[accent]}`}
      >
        {badge}
      </span>
      <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
        {description}
      </p>
    </header>
  );
}
