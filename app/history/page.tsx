import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "History | Thyself Analyzer",
  description: "Static history placeholder for Thyself Analyzer.",
};

export default function HistoryPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="history" />

      <section className="min-w-0">
        <PageHeader
          accent="violet"
          badge="History"
          description="Analysis history will be available after database integration."
          title="Saved analysis timeline"
        />
        <EmptyState
          actionHref="/dashboard"
          actionLabel="Back to dashboard"
          description="The history route is ready for future records. No sample history is created in this phase because saved analyses should come from real database entries."
          eyebrow="No records"
          title="Analysis history will be available after database integration."
          tone="violet"
        />
      </section>
    </main>
  );
}
