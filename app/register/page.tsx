import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { TextField } from "@/components/ui/FormField";
import Notice from "@/components/ui/Notice";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Register | Thyself Analyzer",
  description: "Static registration placeholder for Thyself Analyzer.",
};

export default function RegisterPage() {
  return (
    <PageShell columns="marketing">
      <Card>
        <p className="text-sm font-bold uppercase text-emerald-300">
          Account setup
        </p>
        <h1 className="mt-3 text-3xl font-black text-white">Register</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          User accounts will be connected after authentication is added. This is
          only the static registration interface.
        </p>

        <form className="mt-8 grid gap-4">
          <TextField
            autoComplete="name"
            label="Name"
            placeholder="Your name"
            type="text"
          />
          <TextField
            autoComplete="email"
            label="Email"
            placeholder="you@example.com"
            type="email"
          />
          <TextField
            autoComplete="new-password"
            label="Password"
            placeholder="Coming later"
            type="password"
          />
          <Button className="mt-2" disabled type="button" variant="disabled">
            Registration unavailable
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Already have a UI account?{" "}
          <Link className="font-semibold text-emerald-300" href="/login">
            View login UI
          </Link>
        </p>
      </Card>

      <Notice
        badge="Future accounts"
        description="This page keeps the product flow visible while backend authentication remains out of scope."
        title="Account creation is not wired yet."
        tone="emerald"
      />
    </PageShell>
  );
}
