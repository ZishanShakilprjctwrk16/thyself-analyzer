import Link from "next/link";
import { cn } from "@/lib/styles";

type Variant = "primary" | "secondary" | "disabled";

const variantStyles: Record<Variant, string> = {
  primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  secondary:
    "border border-white/10 bg-transparent text-white hover:bg-white/10",
  disabled: "bg-slate-700 text-slate-300 disabled:cursor-not-allowed",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Exclude<Variant, "disabled">;
  className?: string;
}) {
  return (
    <Link className={cn(baseStyles, variantStyles[variant], className)} href={href}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
