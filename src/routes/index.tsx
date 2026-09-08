import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Droplet,
  Layers,
  Timer,
  Camera,
  FlaskConical,
  Send,
  Bike,
  Phone,
  MessageCircle,
  Check,
  Gift,
} from "lucide-react";

import heroProduct from "../assets/hero-product.jpg";
import kitAsset from "../assets/tankguard-kit.jpg.asset.json";
import boxAsset from "../assets/tankguard-box.jpg.asset.json";
import guaranteeAsset from "../assets/tankguard-guarantee.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TankGuard Pro — Premium Motorcycle Tank Protection" },
      {
        name: "description",
        content:
          "TankGuard Pro is a DIY internal fuel tank protection system that stops rust, seals leaks and keeps your motorcycle tank protected — backed by a 30-month guarantee.",
      },
      { property: "og:title", content: "TankGuard Pro — Stop Rust. Stop Leak." },
      {
        property: "og:description",
        content:
          "Premium internal tank protection for motorcycles. Anti-rust, leak-sealing internal coating with a 30-month guarantee.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "30", unit: "mo", label: "Guarantee on every kit" },
  { value: "1000s", unit: "", label: "Riders protected nationwide" },
  { value: "3", unit: "step", label: "Simple DIY application" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Anti-Rust Shield",
    desc: "A permanent internal coating that stops rust and corrosion from ever taking hold inside your fuel tank.",
  },
  {
    icon: Droplet,
    title: "Leak Protection",
    desc: "Seals micro-pores and hairline leaks in the tank wall — fuel stays where it belongs.",
  },
  {
    icon: Layers,
    title: "Strong Internal Coating",
    desc: "Part A + Part B formula with pigment creates a durable, fuel-resistant layer that bonds to steel.",
  },
  {
    icon: Timer,
    title: "Long-Lasting",
    desc: "One proper application protects your tank for years — backed by our 30-month guarantee card.",
  },
];

const steps = [
  {
    icon: Camera,
    num: "1",
    title: "Before Photo",
    desc: "Take a clear photo of your fuel tank's inside condition before application.",
  },
  {
    icon: FlaskConical,
    num: "2",
    title: "Apply TankGuard Pro",
    desc: "Clean, dry, mix and apply the product exactly as per instructions.",
  },
  {
    icon: Camera,
    num: "3",
    title: "After Photo",
    desc: "Take a clear photo of your tank after the coating is applied.",
  },
  {
    icon: Send,
    num: "4",
    title: "Submit & Register",
    desc: "Send photos and details via Messenger or WhatsApp to activate your guarantee.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />


      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-16 md:grid-cols-2 md:items-center lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> 30-Month Guarantee
            </span>
            <h1 className="font-display mt-6 text-balance text-5xl leading-[1.05] md:text-6xl">
              Stop Rust.
              <br />
              Stop Leak.
              <br />
              <span className="text-primary">Protect Your Tank.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-body-text">
              TankGuard Pro is a premium DIY internal tank protection system. One
              application seals, coats and protects your motorcycle's fuel tank
              from rust, corrosion and leakage — from the inside out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#order"
                className="inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get the Kit — ৳1,990
              </a>
              <a
                href="#how"
                className="inline-flex h-12 items-center rounded-md bg-surface-card px-7 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-primary">
                    {s.value}
                    {s.unit && <span className="ml-1 text-lg">{s.unit}</span>}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-hairline bg-surface-card">
              <img
                src={heroProduct}
                alt="TankGuard Pro premium internal tank protection kit with motorcycle fuel tank"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-lg border border-hairline bg-surface-card px-4 py-3 shadow-2xl">
              <Bike className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <div className="font-semibold text-foreground">Safe for all types of bikes</div>
                <div className="text-muted-foreground">Steel tanks, carbureted or EFI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section id="features" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight">
              Protection that works <span className="text-primary">from the inside</span>
            </h2>
            <p className="mt-4 text-body-text">
              Fuel tank rust destroys filters, pumps and injectors. TankGuard Pro
              coats the inside of your tank with a fuel-resistant barrier — so
              corrosion never starts and existing pinholes get sealed.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-hairline bg-surface-card p-7 transition-colors hover:bg-surface-elevated"
              >
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the kit */}
      <section className="border-t border-hairline bg-surface-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-hairline">
            <img
              src={kitAsset.url}
              alt="TankGuard Pro complete DIY kit with coating bottles and warranty card"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Complete DIY Kit
            </span>
            <h2 className="font-display mt-5 text-4xl leading-tight">
              Everything you need, in one box
            </h2>
            <p className="mt-4 text-body-text">
              No workshop needed. Each kit contains the full Part A + Part B
              system, pigment, and a warranty card — sized for one motorcycle
              tank.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Part A & Part B coating system with pigment",
                "Detailed step-by-step application guide",
                "30-month guarantee card with QR registration",
                "Enough coverage for one full motorcycle tank",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-4xl text-primary">৳1,990</span>
              <span className="text-sm text-muted-foreground">MRP — per kit</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to register */}
      <section id="how" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl leading-tight">
              Activate your <span className="text-primary">30-month guarantee</span>
            </h2>
            <p className="mt-4 text-body-text">
              Apply the product, register with before/after photos, and your
              tank is covered. Four simple steps.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative rounded-xl border border-hairline bg-surface-card p-7"
              >
                <span className="font-display absolute right-5 top-5 text-4xl text-primary/25">
                  {s.num}
                </span>
                <s.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl border border-hairline bg-surface-card p-7 md:flex-row">
            <div className="flex items-start gap-3">
              <Gift className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <div className="font-semibold">Bonus: send an application video, get a special gift</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Make a short video while applying TankGuard Pro and receive a
                  special gift from us with registration.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://wa.me/8801611927396"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="tel:+8801611927396"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-surface-elevated px-5 text-sm font-semibold transition-colors hover:bg-hairline-strong"
              >
                <Phone className="h-4 w-4" /> +880 1611-927396
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section id="guarantee" className="border-t border-hairline bg-surface-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-tight">
              Trusted by <span className="text-primary">thousands of riders</span>
            </h2>
            <p className="mt-4 text-body-text">
              Every genuine TankGuard Pro kit ships in sealed, branded packaging
              with a guarantee card. Register it after application — if rust or
              leaks return within 30 months under proper use, you're covered.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "Anti Rust" },
                { icon: Droplet, label: "Prevents Leakage" },
                { icon: Timer, label: "Long Lasting" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-lg border border-hairline bg-surface-card px-3 py-5 text-center"
                >
                  <b.icon className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2.5 text-xs font-semibold">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-xl border border-hairline">
              <img
                src={boxAsset.url}
                alt="TankGuard Pro sealed kraft packaging box with guarantee branding"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-hairline">
              <img
                src={guaranteeAsset.url}
                alt="TankGuard Pro 30-month guarantee registration instructions"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yellow CTA band */}
      <section id="order" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="rounded-xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Protect your tank from the inside
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Order your TankGuard Pro kit today — ৳1,990 with a 30-month
              guarantee. Cash on delivery available nationwide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/8801611927396?text=I%20want%20to%20order%20TankGuard%20Pro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-primary-foreground px-8 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
              <a
                href="tel:+8801611927396"
                className="inline-flex h-12 items-center gap-2 rounded-md border-2 border-primary-foreground px-8 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
