import Link from "next/link";

type Tone = "cyan" | "violet" | "emerald";

const toneStyles: Record<Tone, string> = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/25 bg-violet-300/10 text-violet-200",
  emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-200",
};

export default function EmptyState({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  tone = "cyan",
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
  tone?: Tone;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
      <div
        className={`mb-5 inline-flex rounded-lg border px-3 py-1 text-xs font-bold uppercase ${toneStyles[tone]}`}
      >
        {eyebrow}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-center">
        <div>
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            {description}
          </p>
          {actionHref && actionLabel ? (
            <Link
              className="mt-6 inline-flex rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              href={actionHref}
            >
              {actionLabel}
            </Link>
          ) : null}
        </div>

        <div className="hidden h-40 rounded-lg border border-white/10 bg-slate-950/80 p-4 lg:block">
          <div className="h-3 w-24 rounded-full bg-white/20" />
          <div className="mt-5 grid gap-3">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 w-5/6 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-cyan-300/20" />
            <div className="h-12 rounded-lg bg-violet-300/20" />
            <div className="h-12 rounded-lg bg-emerald-300/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
