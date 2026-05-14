import Link from "next/link";
import ModelStatus from "@/components/ModelStatus";

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-violet-300">
          About the project
        </p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Thyself Analyzer
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Thyself Analyzer is an AI-powered behavioral insight platform being
          built in phases. The long-term goal is to analyze digital behavior and
          lifestyle data with a trained Hugging Face model.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-400">
          Phase 1 focuses only on setup, layout, navigation, static pages, and a
          professional responsive UI. There is no database, authentication
          logic, or AI model logic in this phase.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-lg bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            href="/analyze"
          >
            Start Analysis
          </Link>
          <Link
            className="rounded-lg border border-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            href="/dashboard"
          >
            View Dashboard
          </Link>
        </div>
      </section>

      <ModelStatus />
    </main>
  );
}
