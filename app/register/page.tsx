import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | Thyself Analyzer",
  description: "Static registration placeholder for Thyself Analyzer.",
};

export default function RegisterPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-emerald-300">
          Account setup
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Register</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          User accounts will be connected after authentication is added. This is
          only the static registration interface.
        </p>

        <form className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Name
            <input
              autoComplete="name"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Email
            <input
              autoComplete="email"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Password
            <input
              autoComplete="new-password"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20"
              placeholder="Coming later"
              type="password"
            />
          </label>
          <button
            className="mt-2 rounded-lg bg-slate-700 px-5 py-3 text-sm font-bold text-slate-300 disabled:cursor-not-allowed"
            disabled
            type="button"
          >
            Registration unavailable
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Already have a UI account?{" "}
          <Link className="font-semibold text-emerald-300" href="/login">
            View login UI
          </Link>
        </p>
      </section>

      <aside className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-6">
        <p className="text-sm font-bold uppercase text-emerald-200">
          Future accounts
        </p>
        <h2 className="mt-3 text-xl font-black text-white">
          Account creation is not wired yet.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          This page keeps the product flow visible while backend authentication
          remains out of scope.
        </p>
      </aside>
    </main>
  );
}
