import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Feedback | Thyself Analyzer",
  description: "Static feedback placeholder for Thyself Analyzer.",
};

export default function FeedbackPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <DashboardSidebar active="feedback" />

      <section className="min-w-0">
        <PageHeader
          accent="emerald"
          badge="Feedback"
          description="Feedback system will be added in Phase 4."
          title="Model feedback"
        />
        <EmptyState
          actionHref="/dashboard"
          actionLabel="Back to dashboard"
          description="The feedback surface is reserved for future user ratings and comments after real model outputs exist."
          eyebrow="Coming later"
          title="Feedback system will be added in Phase 4."
          tone="emerald"
        />
      </section>
    </main>
  );
}
