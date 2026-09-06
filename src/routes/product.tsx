import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Droplet, Layers, Timer, Check } from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import heroProduct from "../assets/hero-product.jpg";
import kitAsset from "../assets/tankguard-kit.jpg.asset.json";
import boxAsset from "../assets/tankguard-box.jpg.asset.json";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "TankGuard Pro Kit — Internal Fuel Tank Coating" },
      {
        name: "description",
        content:
          "Inside the TankGuard Pro kit: Part A + Part B fuel-resistant coating, pigment, application guide and a 30-month guarantee card for one motorcycle tank.",
      },
      { property: "og:title", content: "TankGuard Pro Kit — Internal Fuel Tank Coating" },
      {
        property: "og:description",
        content:
          "Part A + Part B coating system, pigment, guide and guarantee card — everything needed to protect one motorcycle fuel tank.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const specs = [
  { label: "Coverage", value: "One motorcycle fuel tank" },
  { label: "System", value: "Part A + Part B + pigment" },
  { label: "Tank types", value: "Steel tanks, carbureted or EFI" },
  { label: "Cure", value: "Air cure after application" },
  { label: "Guarantee", value: "30 months after registration" },
  { label: "Price", value: "৳1,990 per kit" },
];

const benefits = [
  { icon: ShieldCheck, title: "Anti-Rust Shield", desc: "Blocks moisture and oxygen from reaching bare steel inside the tank." },
  { icon: Droplet, title: "Leak Protection", desc: "Seals micro-pores and hairline leaks in the tank wall." },
  { icon: Layers, title: "Strong Coating", desc: "Fuel-resistant layer that bonds tightly to the tank surface." },
  { icon: Timer, title: "Long Lasting", desc: "One correct application protects for years." },
];

function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 lg:py-24">
          <div className="overflow-hidden rounded-xl border border-hairline bg-surface-card">
            <img
              src={heroProduct}
              alt="TankGuard Pro internal tank protection kit"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex rounded-full bg-surface-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              The Kit
            </span>
            <h1 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
              TankGuard Pro <span className="text-primary">Complete Kit</span>
            </h1>
            <p className="mt-5 text-body-text">
              A premium DIY internal tank protection system for motorcycles. Mix,
              pour, rotate and drain — the coating bonds to the inside of your
              fuel tank and creates a permanent barrier against rust, corrosion
              and leakage.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Part A & Part B coating system with pigment",
                "Step-by-step application guide included",
                "30-month guarantee card with QR registration",
                "Sealed, branded packaging — genuine product only",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="font-display text-4xl text-primary">৳1,990</span>
              <Link
                to="/order"
                className="inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Order This Kit
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Cash on delivery available nationwide.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-3xl md:text-4xl">Why riders choose it</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-hairline bg-surface-card p-7">
                <b.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Specifications</h2>
            <dl className="mt-8 divide-y divide-hairline rounded-xl border border-hairline bg-surface-card">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-6 px-6 py-4">
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="text-sm font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-xl border border-hairline">
              <img src={kitAsset.url} alt="TankGuard Pro kit contents" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl border border-hairline">
              <img src={boxAsset.url} alt="TankGuard Pro sealed packaging box" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
