export const appName = "Thyself Analyzer";

export const tagline =
  "AI-powered personality and productivity insights from digital behavior.";

export const currentPhase = "Phase 2 foundation";

export const featureCards = [
  {
    title: "Behavioral Analysis",
    description:
      "A dedicated UI foundation for future lifestyle, focus, and digital behavior inputs.",
    accent: "cyan",
  },
  {
    title: "AI Model Integration",
    description:
      "Prepared for a later Hugging Face model connection without adding placeholder predictions now.",
    accent: "violet",
  },
  {
    title: "User Feedback",
    description:
      "A planned feedback loop for improving the experience after core analysis workflows exist.",
    accent: "emerald",
  },
  {
    title: "Admin Monitoring",
    description:
      "Static admin surfaces are ready for future monitoring, review, and operations work.",
    accent: "cyan",
  },
] as const;

export const roadmapItems = [
  {
    phase: "Phase 1",
    title: "UI Skeleton",
    description: "Routes, layout, navigation, and responsive static pages.",
    status: "Complete",
  },
  {
    phase: "Phase 2",
    title: "Database Foundation",
    description: "Prisma schema and PostgreSQL connection structure.",
    status: "In progress",
  },
  {
    phase: "Phase 3",
    title: "Analysis Workflow",
    description: "Real form handling and Hugging Face model integration.",
    status: "Next",
  },
] as const;

export const modelStatusItems = [
  { label: "Frontend", value: "Ready", tone: "ready" },
  { label: "Database", value: "Pending", tone: "pending" },
  { label: "Authentication", value: "Pending", tone: "pending" },
  { label: "AI Model", value: "Pending", tone: "pending" },
] as const;

export const dashboardStats = [
  {
    title: "Total Analyses",
    value: "0",
    description:
      "No saved records are displayed until database-backed workflows are connected.",
    accent: "cyan",
  },
  {
    title: "Model Status",
    value: "Pending",
    description: "The Hugging Face model integration is intentionally not connected yet.",
    accent: "violet",
  },
  {
    title: "Recent Activity",
    value: "None",
    description: "Activity will populate after real analysis submissions exist.",
    accent: "emerald",
  },
  {
    title: "Feedback Given",
    value: "0",
    description: "Feedback collection remains a future phase.",
    accent: "cyan",
  },
] as const;

export const analysisFieldLabels = [
  "Digital behavior notes",
  "Work rhythm summary",
  "Lifestyle context",
] as const;
