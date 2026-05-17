export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div className="hidden rounded-lg border border-white/10 bg-slate-900/70 p-4 lg:block">
          <div className="h-3 w-24 rounded-full bg-white/10" />
          <div className="mt-6 grid gap-3">
            <div className="h-10 rounded-lg bg-white/10" />
            <div className="h-10 rounded-lg bg-white/10" />
            <div className="h-10 rounded-lg bg-white/10" />
          </div>
        </div>

        <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="h-4 w-28 rounded-full bg-cyan-300/20" />
          <div className="mt-5 h-10 w-2/3 rounded-lg bg-white/10" />
          <div className="mt-5 grid gap-3">
            <div className="h-3 rounded-full bg-white/10" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />
          </div>
        </section>
      </div>
    </main>
  );
}
