import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import DashboardSidebar from "@/components/DashboardSidebar";
import EmptyState from "@/components/EmptyState";
import ModelStatus from "@/components/ModelStatus";
import PageHeader from "@/components/PageHeader";
import StatsCard from "@/components/StatsCard";
import { dashboardStats } from "@/lib/project";

export const metadata: Metadata = {
  title: "Dashboard | Thyself Analyzer",
  description: "Static dashboard foundation for Thyself Analyzer.",
};

export default function DashboardPage() {
  return (
    <PageShell sidebar={<DashboardSidebar active="dashboard" />}>
      <section className="min-w-0">
        <PageHeader
          badge="Dashboard"
          description="A static product dashboard shell for Phase 2. Data-backed activity, history, and model results will appear only after the database and AI phases are wired."
          title="Workspace overview"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatsCard
              accent={stat.accent}
              description={stat.description}
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
          <EmptyState
            actionHref="/analyze"
            actionLabel="Preview analysis shell"
            description="The dashboard is ready for future data, but it does not invent activity or AI outputs. Once analysis storage exists, this area can become the recent activity feed."
            eyebrow="Empty state"
            title="No analyses yet"
            tone="cyan"
          />
          <ModelStatus />
        </div>
      </section>
    </PageShell>
  );
}
