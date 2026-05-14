import DashboardSidebar from "@/components/DashboardSidebar";
import ModelStatus from "@/components/ModelStatus";
import StatsCard from "@/components/StatsCard";

export default function DashboardPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="dashboard" />

      <section className="min-w-0">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase text-cyan-300">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
            Phase 1 overview
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            These cards are static placeholders for the future product
            dashboard.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            accent="cyan"
            description="No database is connected in Phase 1."
            title="Total Analyses"
            value="0"
          />
          <StatsCard
            accent="violet"
            description="AI model integration is planned for a later phase."
            title="Model Status"
            value="Pending"
          />
          <StatsCard
            accent="emerald"
            description="Activity records will appear after data storage exists."
            title="Recent Activity"
            value="None"
          />
          <StatsCard
            accent="cyan"
            description="Feedback collection will be added in Phase 4."
            title="Feedback Given"
            value="0"
          />
        </div>

        <div className="mt-6">
          <ModelStatus />
        </div>
      </section>
    </main>
  );
}
