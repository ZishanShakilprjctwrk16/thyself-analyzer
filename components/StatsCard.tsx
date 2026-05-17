type Accent = "cyan" | "violet" | "emerald";

const accentStyles: Record<Accent, string> = {
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/20 bg-violet-300/10 text-violet-200",
  emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
};

export default function StatsCard({
  title,
  value,
  description,
  accent = "cyan",
}: {
  title: string;
  value: string;
  description: string;
  accent?: Accent;
}) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/20">
      <div
        className={`mb-5 inline-flex rounded-lg border px-3 py-1 text-xs font-bold ${accentStyles[accent]}`}
      >
        {title}
      </div>
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
