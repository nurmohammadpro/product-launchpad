import { createFileRoute } from "@tanstack/react-router";
import { Camera, FlaskConical, Send, Gift, Phone, MessageCircle, ShieldCheck } from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import guaranteeAsset from "../assets/tankguard-guarantee.jpg.asset.json";

export const Route = createFileRoute("/guarantee")({
  head: () => ({
    meta: [
      { title: "30-Month Guarantee — TankGuard Pro" },
      {
        name: "description",
        content:
          "Register your TankGuard Pro kit with before and after photos to activate a 30-month guarantee against rust and leakage under proper use.",
      },
      { property: "og:title", content: "30-Month Guarantee — TankGuard Pro" },
      {
        property: "og:description",
        content: "Register with before and after photos and activate your 30-month tank protection guarantee.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuaranteePage,
});

const steps = [
  { icon: Camera, num: "1", title: "Before Photo", desc: "Take a clear photo of your fuel tank's inside condition before application." },
  { icon: FlaskConical, num: "2", title: "Apply TankGuard Pro", desc: "Clean, dry, mix and apply the product exactly as per the instructions." },
  { icon: Camera, num: "3", title: "After Photo", desc: "Take a clear photo of the tank after the coating is applied." },
  { icon: Send, num: "4", title: "Submit & Register", desc: "Send photos and your details via Messenger or WhatsApp to activate the guarantee." },
];

const covered = [
  "Rust or corrosion returning inside a properly coated tank",
  "Leakage through pores sealed by the coating",
  "Coating peeling when applied as per the guide",
];

const notCovered = [
  "Damage from accidents, dents or external impact",
  "Application that skipped cleaning, drying or curing steps",
  "Tanks with structural cracks or heavy holes before application",
  "Kits with no registered before/after photos",
];

function GuaranteePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> 30-Month Coverage
          </span>
          <h1 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
            Your <span className="text-primary">30-month guarantee</span>
          </h1>
          <p className="mt-5 text-body-text">
            Every genuine kit ships with a guarantee card. Register it after
            application and your tank is covered against rust and leakage under
            proper use.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-display text-3xl md:text-4xl">How to register</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-xl border border-hairline bg-surface-card p-7">
                <span className="font-display absolute right-5 top-5 text-4xl text-primary/25">{s.num}</span>
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
                  Record a short video while applying TankGuard Pro and receive a special gift with your registration.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://wa.me/8801611927396?text=I%20want%20to%20register%20my%20TankGuard%20Pro%20guarantee"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" /> Register on WhatsApp
              </a>
              <a
                href="tel:+8801611927396"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-surface-elevated px-5 text-sm font-semibold transition-colors hover:bg-hairline-strong"
              >
                <Phone className="h-4 w-4" /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl">What's covered</h2>
              <ul className="mt-4 space-y-3 text-sm text-body-text">
                {covered.map((c) => (
                  <li key={c} className="rounded-lg border border-hairline bg-surface-card px-5 py-4">{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl">What's not covered</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {notCovered.map((c) => (
                  <li key={c} className="rounded-lg border border-hairline bg-surface-soft px-5 py-4">{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-hairline">
            <img
              src={guaranteeAsset.url}
              alt="TankGuard Pro 30-month guarantee card and registration instructions"
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
