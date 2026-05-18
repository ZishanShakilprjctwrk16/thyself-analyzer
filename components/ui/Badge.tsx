import { cn } from "@/lib/styles";

type Tone = "cyan" | "violet" | "emerald" | "slate";

const toneStyles: Record<Tone, string> = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  slate: "border-slate-600 bg-slate-800 text-slate-300",
};

export default function Badge({
  children,
  tone = "cyan",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg border px-3 py-1 text-xs font-bold uppercase",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
