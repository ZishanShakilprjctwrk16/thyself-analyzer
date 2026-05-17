import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ModelStatus from "@/components/ModelStatus";

export const metadata: Metadata = {
  title: "Thyself Analyzer | Behavioral Insight Platform",
  description:
    "AI-powered personality and productivity insights from digital behavior.",
};

const features = [
  {
    title: "Behavioral Analysis",
    description:
      "A dedicated UI foundation for future lifestyle, focus, and digital behavior inputs.",
    accent: "from-cyan-300/20",
  },
  {
    title: "AI Model Integration",
    description:
      "Prepared for a later Hugging Face model connection without adding placeholder predictions now.",
    accent: "from-violet-300/20",
  },
  {
    title: "User Feedback",
    description:
      "A planned feedback loop for improving the experience after core analysis workflows exist.",
    accent: "from-emerald-300/20",
  },
  {
    title: "Admin Monitoring",
    description:
      "Static admin surfaces are ready for future monitoring, review, and operations work.",
    accent: "from-cyan-300/20",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-cyan-300">Phase 1</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            A polished foundation for a future behavioral insight platform.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Thyself Analyzer starts with a responsive product shell, navigation,
            route structure, and clear placeholders. Database, authentication,
            and AI model behavior are intentionally left for later phases.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20"
              key={feature.title}
            >
              <div
                className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${feature.accent} to-transparent`}
              />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <ModelStatus />
      </section>
    </main>
  );
}
