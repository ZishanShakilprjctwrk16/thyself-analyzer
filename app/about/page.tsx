import type { Metadata } from "next";
import Link from "next/link";
import ModelStatus from "@/components/ModelStatus";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About | Thyself Analyzer",
  description: "About the Thyself Analyzer project and development phases.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <PageHeader
          accent="violet"
          badge="About the project"
          description="Thyself Analyzer is being built in careful phases so the interface, data layer, authentication, and model integration each have a clean boundary."
          title="Thyself Analyzer"
        />

        <div className="grid gap-4 text-base leading-8 text-slate-400">
          <p>
            The long-term goal is to analyze digital behavior and lifestyle
            data with a trained Hugging Face model. Phase 2 currently provides
            the UI shell and Prisma/PostgreSQL database foundation.
          </p>
          <p>
            Login behavior, admin operations, saved analysis history, feedback
            collection, and AI model calls are intentionally not active yet.
          </p>
        </div>

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
