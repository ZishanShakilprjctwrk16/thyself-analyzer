import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analyze", href: "/analyze" },
  { label: "History", href: "/history" },
  { label: "Feedback", href: "/feedback" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
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
                Thyself Analyzer
              </span>
              <span className="hidden text-xs text-slate-400 sm:block">
                Phase 1 UI Skeleton
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link
              className="shrink-0 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
