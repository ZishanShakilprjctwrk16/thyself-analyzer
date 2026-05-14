import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.14),transparent_36%),linear-gradient(240deg,rgba(139,92,246,0.18),transparent_32%),linear-gradient(180deg,rgba(16,185,129,0.12),transparent_44%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/30">
            AI Behavioral Insight Platform
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Thyself Analyzer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            AI-powered personality and productivity insights from digital
            behavior.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-lg bg-cyan-400 px-7 py-4 text-center text-base font-bold text-slate-950 shadow-xl shadow-cyan-950/40 transition hover:bg-cyan-300"
              href="/analyze"
            >
              Start Analysis
            </Link>
            <Link
              className="rounded-lg border border-white/15 bg-white/10 px-7 py-4 text-center text-base font-bold text-white transition hover:bg-white/15"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[500px] lg:block">
          <div className="absolute right-0 top-8 h-[420px] w-[360px] rotate-6 rounded-lg border border-white/15 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur" />
          <div className="absolute right-16 top-0 h-[460px] w-[360px] -rotate-3 rounded-lg border border-white/20 bg-slate-900/85 p-6 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Phase 1 foundation
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Static UI shell only
                </p>
              </div>
              <div className="h-12 w-12 rounded-lg border border-violet-300/30 bg-violet-300/15" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="h-24 rounded-lg border border-white/10 bg-white/10 p-4">
                <div className="h-3 w-28 rounded-full bg-white/30" />
                <div className="mt-5 flex items-end gap-2">
                  <div className="h-8 flex-1 rounded bg-cyan-300" />
                  <div className="h-14 flex-1 rounded bg-violet-300" />
                  <div className="h-10 flex-1 rounded bg-emerald-300" />
                  <div className="h-16 flex-1 rounded bg-white/40" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-28 rounded-lg border border-white/10 bg-white/10 p-4">
                  <div className="h-3 w-16 rounded-full bg-white/25" />
                  <div className="mt-5 h-10 w-10 rounded-full border-8 border-cyan-300" />
                </div>
                <div className="h-28 rounded-lg border border-white/10 bg-white/10 p-4">
                  <div className="h-3 w-20 rounded-full bg-white/25" />
                  <div className="mt-5 h-2 rounded-full bg-violet-300" />
                  <div className="mt-3 h-2 w-3/4 rounded-full bg-emerald-300" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-cyan-300" />
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <div className="h-3 w-32 rounded-full bg-white/25" />
                <div className="mt-5 space-y-3">
                  <div className="h-2 rounded-full bg-white/20" />
                  <div className="h-2 w-5/6 rounded-full bg-white/20" />
                  <div className="h-2 w-2/3 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
