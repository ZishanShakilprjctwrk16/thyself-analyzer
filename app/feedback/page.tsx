import DashboardSidebar from "@/components/DashboardSidebar";

export default function FeedbackPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="feedback" />

      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-emerald-300">
          Feedback
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">
          Feedback system will be added in Phase 4.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          This route is a static placeholder for the future feedback workflow.
        </p>
      </section>
    </main>
  );
}
