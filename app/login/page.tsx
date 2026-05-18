import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { TextField } from "@/components/ui/FormField";
import Notice from "@/components/ui/Notice";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Login | Thyself Analyzer",
  description: "Static login placeholder for Thyself Analyzer.",
};

export default function LoginPage() {
  return (
    <PageShell columns="marketing">
      <Card>
        <p className="text-sm font-bold uppercase text-cyan-300">
          Authentication
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Login</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Authentication logic is pending for a future phase. This screen is a
          static interface placeholder.
        </p>

        <form className="mt-8 grid gap-4">
          <TextField
            autoComplete="email"
            label="Email"
            placeholder="you@example.com"
            type="email"
          />
          <TextField
            autoComplete="current-password"
            label="Password"
            placeholder="Coming later"
            type="password"
          />
          <Button className="mt-2" disabled type="button" variant="disabled">
            Login unavailable
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          New here?{" "}
          <Link className="font-semibold text-cyan-300" href="/register">
            View registration UI
          </Link>
        </p>
      </Card>

      <Notice
        badge="Future auth"
        description="Credentials are not submitted, stored, or validated in this frontend architecture pass."
        title="No sign-in logic is active."
      />
    </PageShell>
  );
}
