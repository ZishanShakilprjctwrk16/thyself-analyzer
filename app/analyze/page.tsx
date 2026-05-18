import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { TextareaField } from "@/components/ui/FormField";
import Notice from "@/components/ui/Notice";
import PageShell from "@/components/layout/PageShell";
import DashboardSidebar from "@/components/DashboardSidebar";
import PageHeader from "@/components/PageHeader";
import { analysisFieldLabels } from "@/lib/project";

export const metadata: Metadata = {
  title: "Analyze | Thyself Analyzer",
  description: "Static analysis form placeholder for Thyself Analyzer.",
};

export default function AnalyzePage() {
  return (
    <PageShell sidebar={<DashboardSidebar active="analyze" />}>
      <section className="min-w-0">
        <PageHeader
          badge="Analyze"
          description="AI analysis form will be added in Phase 3. This page is only a polished interface shell with disabled inputs."
          title="Analysis workspace"
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <Card>
            <div className="grid gap-5">
              {analysisFieldLabels.map((field) => (
                <TextareaField
                  disabled
                  key={field}
                  label={field}
                  placeholder="Phase 3 input field"
                />
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button disabled type="button" variant="disabled">
                Analysis unavailable
              </Button>
              <p className="text-sm text-slate-500">
                No model calls, predictions, or rule-based scoring are active.
              </p>
            </div>
          </Card>

          <Notice
            badge="Phase 3 placeholder"
            description="Backend submission, validation, storage, and Hugging Face model calls will be added later."
            title="The interface is ready for a real workflow."
          />
        </div>
      </section>
    </PageShell>
  );
}
