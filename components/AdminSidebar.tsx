"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminItems = [
  { label: "Admin Overview", href: "/admin" },
  { label: "Model Readiness", href: "/admin" },
  { label: "User Feedback", href: "/admin" },
  { label: "System Notes", href: "/admin" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-lg border border-violet-300/20 bg-slate-900/70 p-4 shadow-xl shadow-black/20">
      <p className="px-3 text-xs font-bold uppercase text-violet-300">
        Admin
      </p>
      <nav className="mt-4 grid gap-2">
        {adminItems.map((item, index) => {
          const isActive = pathname === item.href && index === 0;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-violet-400 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
