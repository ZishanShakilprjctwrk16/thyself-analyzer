import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-center px-5 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-emerald-300">
          Account setup
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Register</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          User accounts will be connected after authentication is added. This is
          only the Phase 1 registration interface.
        </p>

        <form className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Name
            <input
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Email
            <input
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Password
            <input
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
              placeholder="Phase 2"
              type="password"
            />
          </label>
          <button
            className="mt-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950"
            type="button"
          >
            Register UI Placeholder
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Already have a UI account?{" "}
          <Link className="font-semibold text-emerald-300" href="/login">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
