import Card from "@/components/ui/Card";
import { modelStatusItems } from "@/lib/project";

const toneStyles = {
  ready: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  pending: "border-slate-600 bg-slate-800 text-slate-300",
};

export default function ModelStatus() {
  return (
    <Card className="p-5 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white">Model Status</h2>
          <p className="mt-1 text-sm text-slate-400">
            Phase readiness overview.
          </p>
        </div>
        <span className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
          Static
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {modelStatusItems.map((item) => (
          <div
            className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-3"
            key={item.label}
          >
            <span className="text-sm font-medium text-slate-300">
              {item.label}
            </span>
            <span
              className={`rounded-lg border px-3 py-1 text-xs font-bold ${
                toneStyles[item.tone as keyof typeof toneStyles]
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
