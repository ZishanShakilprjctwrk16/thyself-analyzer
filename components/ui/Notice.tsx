import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type Tone = "cyan" | "violet" | "emerald";

const toneStyles: Record<Tone, string> = {
  cyan: "border-cyan-300/20 bg-cyan-300/10",
  violet: "border-violet-300/20 bg-violet-300/10",
  emerald: "border-emerald-300/20 bg-emerald-300/10",
};

export default function Notice({
  badge,
  title,
  description,
  tone = "cyan",
}: {
  badge: string;
  title: string;
  description: string;
  tone?: Tone;
}) {
  return (
    <Card as="aside" className={toneStyles[tone]}>
      <Badge tone={tone}>{badge}</Badge>
      <h2 className="mt-3 text-xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </Card>
  );
}
