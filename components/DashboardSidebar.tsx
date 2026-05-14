import Link from "next/link";

type DashboardSection = "dashboard" | "analyze" | "history" | "feedback";

const items: Array<{ label: string; href: string; id: DashboardSection }> = [
  { label: "Overview", href: "/dashboard", id: "dashboard" },
  { label: "Analyze", href: "/analyze", id: "analyze" },
  { label: "History", href: "/history", id: "history" },
  { label: "Feedback", href: "/feedback", id: "feedback" },
];

export default function DashboardSidebar({
  active = "dashboard",
}: {
  active?: DashboardSection;
}) {
  return (
    <aside className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-black/20">
      <p className="px-3 text-xs font-bold uppercase text-cyan-300">
        Workspace
      </p>
      <nav className="mt-4 grid gap-2">
        {items.map((item) => (
          <Link
            className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
              active === item.id
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
            href={item.href}
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
