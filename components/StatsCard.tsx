import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type Accent = "cyan" | "violet" | "emerald";

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
    <Card
      as="article"
      className="p-5 transition hover:-translate-y-0.5 hover:border-white/20 sm:p-5"
    >
      <Badge className="mb-5" tone={accent}>
        {title}
      </Badge>
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}
