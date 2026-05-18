"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNavItems, type DashboardSection } from "@/lib/navigation";
import { cn } from "@/lib/styles";

export default function DashboardSidebar({
  active = "dashboard",
}: {
  active?: DashboardSection;
}) {
  const pathname = usePathname();

  return (
    <aside className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-black/20">
      <p className="px-3 text-xs font-bold uppercase text-cyan-300">
        Workspace
      </p>
      <nav className="mt-4 grid gap-2">
        {dashboardNavItems.map((item) => {
          const isActive = pathname === item.href || active === item.id;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-sm font-semibold transition",
                isActive
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
              href={item.href}
              key={item.id}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
