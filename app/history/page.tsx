import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import DashboardSidebar from "@/components/DashboardSidebar";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "History | Thyself Analyzer",
  description: "Static history placeholder for Thyself Analyzer.",
};

export default function HistoryPage() {
  return (
    <PageShell sidebar={<DashboardSidebar active="history" />}>
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
    </PageShell>
  );
}
