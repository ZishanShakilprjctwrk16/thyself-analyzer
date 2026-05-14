import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analyze", href: "/analyze" },
  { label: "Admin", href: "/admin" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">Thyself Analyzer</p>
          <p className="mt-1">
            AI-powered personality and productivity insights from digital
            behavior.
          </p>
        </div>

        <nav className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <Link
              className="rounded-lg px-2 py-1 transition hover:bg-white/10 hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
