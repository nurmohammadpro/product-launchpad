import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Bike, Truck, HeartHandshake } from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import boxAsset from "../assets/tankguard-box.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TankGuard Pro — Who We Are" },
      {
        name: "description",
        content:
          "TankGuard Pro builds premium internal fuel tank protection for motorcycle riders in Bangladesh — sealed genuine kits, honest guidance and a 30-month guarantee.",
      },
      { property: "og:title", content: "About TankGuard Pro — Who We Are" },
      {
        property: "og:description",
        content: "Premium internal fuel tank protection for motorcycle riders, backed by a 30-month guarantee.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Genuine product only", desc: "Every kit ships sealed in branded packaging with a numbered guarantee card." },
  { icon: Bike, title: "Built for riders", desc: "Made for real motorcycle tanks and everyday road conditions, not a lab shelf." },
  { icon: Truck, title: "Nationwide delivery", desc: "We deliver across the country with cash on delivery available." },
  { icon: HeartHandshake, title: "Support that answers", desc: "Call or message us before, during or after application — a real person replies." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              We protect tanks <span className="text-primary">from the inside</span>
            </h1>
            <p className="mt-5 text-body-text">
              Fuel tank rust quietly destroys filters, carburettors, pumps and
              injectors. Most riders only find out when the bike starts choking
              on the road. TankGuard Pro exists to stop that before it starts.
            </p>
            <p className="mt-4 text-body-text">
              Our internal coating system is designed to be applied at home,
              without a workshop — clean, dry, mix, coat and cure. One careful
              application protects the tank for years, and we stand behind it
              with a 30-month guarantee on every registered kit.
            </p>
            <Link
              to="/order"
              className="mt-8 inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Order a Kit
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-hairline">
            <img
              src={boxAsset.url}
              alt="Sealed TankGuard Pro packaging box"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-3xl md:text-4xl">What we stand for</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-hairline bg-surface-card p-7">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
