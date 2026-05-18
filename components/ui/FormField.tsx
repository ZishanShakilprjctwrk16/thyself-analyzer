import { cn } from "@/lib/styles";

const inputStyles =
  "rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 disabled:cursor-not-allowed disabled:text-slate-500 disabled:opacity-70";

function FieldShell({
  label,
  children,
  helperText,
}: {
  label: string;
  children: React.ReactNode;
  helperText?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      {children}
      {helperText ? (
        <span className="text-xs font-medium leading-5 text-slate-500">
          {helperText}
        </span>
      ) : null}
    </label>
  );
}

export function TextField({
  label,
  helperText,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
}) {
  return (
    <FieldShell helperText={helperText} label={label}>
      <input className={cn(inputStyles, className)} {...props} />
    </FieldShell>
  );
}

export function TextareaField({
  label,
  helperText,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
}) {
  return (
    <FieldShell helperText={helperText} label={label}>
      <textarea
        className={cn("min-h-28 resize-none", inputStyles, className)}
        {...props}
      />
    </FieldShell>
  );
}
