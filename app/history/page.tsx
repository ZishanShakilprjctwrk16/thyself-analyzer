import DashboardSidebar from "@/components/DashboardSidebar";

export default function HistoryPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="history" />

      <section className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
        <p className="text-sm font-bold uppercase text-violet-300">History</p>
        <h1 className="mt-3 text-3xl font-black text-white">
          Analysis history will be available after database integration.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          The history surface is present so routing and layout are ready before
          persistence is introduced.
        </p>
      </section>
    </main>
  );
}
