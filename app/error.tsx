"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-xl rounded-lg border border-white/10 bg-slate-900/70 p-6 text-center shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-rose-300">Error</p>
        <h1 className="mt-3 text-3xl font-black text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          The application shell caught an unexpected route error.
        </p>
        <button
          className="mt-7 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
