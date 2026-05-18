"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { appName, currentPhase } from "@/lib/project";
import { authNavItems, mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/styles";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/40">
              TA
            </span>
            <span>
              <span className="block text-base font-bold text-white">
                {appName}
              </span>
              <span className="hidden text-xs text-slate-400 sm:block">
                {currentPhase}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            {authNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isPrimary = index === authNavItems.length - 1;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-semibold transition",
                    isPrimary
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-white/10 text-slate-200 hover:bg-white/10",
                    isActive &&
                      !isPrimary &&
                      "border-cyan-300/40 bg-cyan-300/10 text-cyan-100",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 md:hidden">
          {[...mainNavItems, authNavItems[0]].map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-lg border px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 text-slate-300 hover:bg-white/10",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
