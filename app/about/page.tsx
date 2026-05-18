import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageShell from "@/components/layout/PageShell";
import ModelStatus from "@/components/ModelStatus";
import PageHeader from "@/components/PageHeader";
import { appName, tagline } from "@/lib/project";

export const metadata: Metadata = {
  title: "About | Thyself Analyzer",
  description: "About the Thyself Analyzer project and development phases.",
};

export default function AboutPage() {
  return (
    <PageShell columns="marketing">
      <Card>
        <PageHeader
          accent="violet"
          badge="About the project"
          description="Thyself Analyzer is being built in careful phases so the interface, data layer, authentication, and model integration each have a clean boundary."
          title={appName}
        />

        <div className="grid gap-4 text-base leading-8 text-slate-400">
          <p>{tagline}</p>
          <p>
            The long-term goal is to analyze digital behavior and lifestyle
            data with a trained Hugging Face model. Phase 2 currently provides
            the UI shell and Prisma/PostgreSQL database foundation.
          </p>
          <p>
            Login behavior, admin operations, saved analysis history, feedback
            collection, and AI model calls are intentionally not active yet.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/analyze">
            Start Analysis
          </ButtonLink>
          <ButtonLink href="/dashboard" variant="secondary">
            View Dashboard
          </ButtonLink>
        </div>
      </Card>

      <ModelStatus />
    </PageShell>
  );
}
