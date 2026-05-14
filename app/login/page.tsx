import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-center px-5 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-cyan-300">
          Authentication
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Login</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Authentication logic is pending for a future phase. This screen is a
          static UI placeholder.
        </p>

        <form className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Email
            <input
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Password
            <input
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
              placeholder="Phase 2"
              type="password"
            />
          </label>
          <button
            className="mt-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950"
            type="button"
          >
            Login UI Placeholder
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          New here?{" "}
          <Link className="font-semibold text-cyan-300" href="/register">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
