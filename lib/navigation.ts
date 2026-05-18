export type DashboardSection = "dashboard" | "analyze" | "history" | "feedback";

export const mainNavItems = [
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analyze", href: "/analyze" },
  { label: "History", href: "/history" },
  { label: "Feedback", href: "/feedback" },
  { label: "Admin", href: "/admin" },
] as const;

export const authNavItems = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
] as const;

export const dashboardNavItems: Array<{
  label: string;
  href: string;
  id: DashboardSection;
}> = [
  { label: "Overview", href: "/dashboard", id: "dashboard" },
  { label: "Analyze", href: "/analyze", id: "analyze" },
  { label: "History", href: "/history", id: "history" },
  { label: "Feedback", href: "/feedback", id: "feedback" },
];

export const adminNavItems = [
  { label: "Admin Overview", href: "/admin" },
  { label: "Model Readiness", href: "/admin" },
  { label: "User Feedback", href: "/admin" },
  { label: "System Notes", href: "/admin" },
] as const;
