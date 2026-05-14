import AdminSidebar from "@/components/AdminSidebar";
import ModelStatus from "@/components/ModelStatus";

export default function AdminPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <AdminSidebar />

      <section className="grid gap-6">
        <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
          <p className="text-sm font-bold uppercase text-violet-300">Admin</p>
          <h1 className="mt-3 text-3xl font-black text-white">
            Admin dashboard will be added in later phases.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            Administrative monitoring is represented as a static shell only in
            Phase 1.
          </p>
        </div>

        <ModelStatus />
      </section>
    </main>
  );
}
