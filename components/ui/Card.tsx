import { cn } from "@/lib/styles";

export default function Card({
  children,
  className,
  as: Component = "section",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "aside" | "section" | "div";
}) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
