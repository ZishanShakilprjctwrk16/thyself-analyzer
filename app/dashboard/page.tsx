import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";
import EmptyState from "@/components/EmptyState";
import ModelStatus from "@/components/ModelStatus";
import PageHeader from "@/components/PageHeader";
import StatsCard from "@/components/StatsCard";

export const metadata: Metadata = {
  title: "Dashboard | Thyself Analyzer",
  description: "Static dashboard foundation for Thyself Analyzer.",
};

export default function DashboardPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="dashboard" />

      <section className="min-w-0">
        <PageHeader
          badge="Dashboard"
          description="A static product dashboard shell for Phase 2. Data-backed activity, history, and model results will appear only after the database and AI phases are wired."
          title="Workspace overview"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            accent="cyan"
            description="No saved records are displayed until database-backed workflows are connected."
            title="Total Analyses"
            value="0"
          />
          <StatsCard
            accent="violet"
            description="The Hugging Face model integration is intentionally not connected yet."
            title="Model Status"
            value="Pending"
          />
          <StatsCard
            accent="emerald"
            description="Activity will populate after real analysis submissions exist."
            title="Recent Activity"
            value="None"
          />
          <StatsCard
            accent="cyan"
            description="Feedback collection remains a future phase."
            title="Feedback Given"
            value="0"
          />
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
    </main>
  );
}
