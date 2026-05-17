import type { Metadata } from "next";
import AdminSidebar from "@/components/AdminSidebar";
import EmptyState from "@/components/EmptyState";
import ModelStatus from "@/components/ModelStatus";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Admin | Thyself Analyzer",
  description: "Static admin dashboard placeholder for Thyself Analyzer.",
};

export default function AdminPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <AdminSidebar />

      <section className="grid min-w-0 gap-6">
        <PageHeader
          accent="violet"
          badge="Admin"
          description="Admin dashboard will be added in later phases."
          title="Administrative console"
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
          <EmptyState
            description="Administrative monitoring is represented as a static shell only. Role-based access, user review, and model operations are intentionally not implemented yet."
            eyebrow="Static shell"
            title="Admin dashboard will be added in later phases."
            tone="violet"
          />
          <ModelStatus />
        </div>
      </section>
    </main>
  );
}
