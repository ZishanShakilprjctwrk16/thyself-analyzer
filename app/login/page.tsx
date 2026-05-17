import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Thyself Analyzer",
  description: "Static login placeholder for Thyself Analyzer.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-cyan-300">
          Authentication
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Login</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Authentication logic is pending for a future phase. This screen is a
          static interface placeholder.
        </p>

        <form className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Email
            <input
              autoComplete="email"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Password
            <input
              autoComplete="current-password"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              placeholder="Coming later"
              type="password"
            />
          </label>
          <button
            className="mt-2 rounded-lg bg-slate-700 px-5 py-3 text-sm font-bold text-slate-300 disabled:cursor-not-allowed"
            disabled
            type="button"
          >
            Login unavailable
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          New here?{" "}
          <Link className="font-semibold text-cyan-300" href="/register">
            View registration UI
          </Link>
        </p>
      </section>

      <aside className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
        <p className="text-sm font-bold uppercase text-cyan-200">
          Future auth
        </p>
        <h2 className="mt-3 text-xl font-black text-white">
          No sign-in logic is active.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Credentials are not submitted, stored, or validated in this frontend
          polish pass.
        </p>
      </aside>
    </main>
  );
}
