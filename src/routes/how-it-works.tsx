import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, FlaskConical, RotateCcw, Wind, AlertTriangle } from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import guaranteeAsset from "../assets/tankguard-guarantee.jpg.asset.json";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How to Apply TankGuard Pro — Step by Step" },
      {
        name: "description",
        content:
          "Clean, dry, mix, coat and cure — the full DIY application process for TankGuard Pro internal motorcycle fuel tank protection.",
      },
      { property: "og:title", content: "How to Apply TankGuard Pro — Step by Step" },
      {
        property: "og:description",
        content: "The complete DIY application process for TankGuard Pro internal tank coating.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});

const steps = [
  {
    icon: Sparkles,
    title: "Clean the tank",
    desc: "Drain all fuel and remove loose rust, dirt and oil residue from inside the tank. A clean surface is essential for the coating to bond.",
  },
  {
    icon: Wind,
    title: "Dry it completely",
    desc: "Make sure the inside of the tank is fully dry before you start. Any trapped moisture will weaken the coating.",
  },
  {
    icon: FlaskConical,
    title: "Mix Part A + Part B",
    desc: "Mix the two components with the pigment exactly as the included guide describes. Mix only what you will use right away.",
  },
  {
    icon: RotateCcw,
    title: "Coat and rotate",
    desc: "Pour the mixture in, seal the openings and rotate the tank slowly in every direction so the coating reaches the whole inner surface. Drain the excess.",
  },
  {
    icon: Wind,
    title: "Cure and refit",
    desc: "Let the tank air cure for the time stated in the guide before refitting and refuelling. Do not rush this step.",
  },
];

const tips = [
  "Work in a well-ventilated area away from flame or sparks.",
  "Wear gloves and eye protection while mixing and pouring.",
  "Take before and after photos — you need them to register the guarantee.",
  "If unsure at any point, call us before you continue.",
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:py-24">
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            How to apply <span className="text-primary">TankGuard Pro</span>
          </h1>
          <p className="mt-5 text-body-text">
            No workshop, no special tools. Five careful steps and your fuel tank
            is protected from the inside for years.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface-soft">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-5 rounded-xl border border-hairline bg-surface-card p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Step {i + 1}
                  </div>
                  <h2 className="mt-1.5 text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <AlertTriangle className="h-3.5 w-3.5" /> Safety first
            </div>
            <h2 className="font-display mt-5 text-3xl md:text-4xl">Before you start</h2>
            <ul className="mt-6 space-y-3 text-sm text-body-text">
              {tips.map((t) => (
                <li key={t} className="rounded-lg border border-hairline bg-surface-card px-5 py-4">
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/guarantee"
              className="mt-8 inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Register Your Guarantee
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-hairline">
            <img
              src={guaranteeAsset.url}
              alt="TankGuard Pro guarantee registration instructions"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
