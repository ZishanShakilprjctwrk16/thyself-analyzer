import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Hero from "@/components/Hero";
import ModelStatus from "@/components/ModelStatus";
import { featureCards, roadmapItems, tagline } from "@/lib/project";

export const metadata: Metadata = {
  title: "Thyself Analyzer | Behavioral Insight Platform",
  description:
    "AI-powered personality and productivity insights from digital behavior.",
};

const accentBars = {
  cyan: "from-cyan-300/30",
  violet: "from-violet-300/30",
  emerald: "from-emerald-300/30",
};

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge>Frontend foundation</Badge>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            A polished foundation for a future behavioral insight platform.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            {tagline} The app now has a responsive product shell, reusable UI
            components, navigation, route structure, and clear future-phase
            boundaries.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((feature) => (
            <Card as="article" className="p-5 sm:p-5" key={feature.title}>
              <div
                className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${accentBars[feature.accent]} to-transparent`}
              />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {roadmapItems.map((item) => (
            <Card as="article" className="p-5 sm:p-5" key={item.phase}>
              <div className="flex items-start justify-between gap-4">
                <Badge tone={item.status === "Complete" ? "emerald" : "violet"}>
                  {item.phase}
                </Badge>
                <span className="text-xs font-bold uppercase text-slate-500">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <ModelStatus />
      </section>
    </main>
  );
}
