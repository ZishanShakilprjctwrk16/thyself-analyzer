import Link from "next/link";
import { mainNavItems } from "@/lib/navigation";
import { appName, tagline } from "@/lib/project";

const footerLinks = mainNavItems.filter((link) =>
  ["About", "Dashboard", "Analyze", "Admin"].includes(link.label),
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">{appName}</p>
          <p className="mt-1">{tagline}</p>
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
