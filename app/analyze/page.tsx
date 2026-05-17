import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Analyze | Thyself Analyzer",
  description: "Static analysis form placeholder for Thyself Analyzer.",
};

const fields = [
  "Digital behavior notes",
  "Work rhythm summary",
  "Lifestyle context",
];

export default function AnalyzePage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="analyze" />

      <section className="min-w-0">
        <PageHeader
          badge="Analyze"
          description="AI analysis form will be added in Phase 3. This page is only a polished interface shell with disabled inputs."
          title="Analysis workspace"
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
            <div className="grid gap-5">
              {fields.map((field) => (
                <label
                  className="grid gap-2 text-sm font-semibold text-slate-200"
                  key={field}
                >
                  {field}
                  <textarea
                    className="min-h-28 resize-none rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-500 outline-none placeholder:text-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled
                    placeholder="Phase 3 input field"
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                className="rounded-lg bg-slate-700 px-5 py-3 text-sm font-bold text-slate-300 disabled:cursor-not-allowed"
                disabled
                type="button"
              >
                Analysis unavailable
              </button>
              <p className="text-sm text-slate-500">
                No model calls, predictions, or rule-based scoring are active.
              </p>
            </div>
          </section>

          <aside className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-sm font-bold uppercase text-cyan-200">
              Phase 3 placeholder
            </p>
            <h2 className="mt-3 text-xl font-black text-white">
              The interface is ready for a real workflow.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Backend submission, validation, storage, and Hugging Face model
              calls will be added later.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
