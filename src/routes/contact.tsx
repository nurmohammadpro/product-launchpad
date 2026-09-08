import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck } from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TankGuard Pro — Call or WhatsApp Us" },
      {
        name: "description",
        content:
          "Talk to the TankGuard Pro team about orders, application help or guarantee registration. Call +880 1611-927396 or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact TankGuard Pro — Call or WhatsApp Us" },
      {
        property: "og:description",
        content: "Questions about ordering, applying or registering TankGuard Pro? Call or WhatsApp our team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:py-24">
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Talk to <span className="text-primary">our team</span>
          </h1>
          <p className="mt-5 text-body-text">
            Orders, application help, guarantee registration — we're one message away.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href="https://wa.me/8801611927396"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-colors hover:bg-surface-elevated"
            >
              <MessageCircle className="h-7 w-7 text-primary" />
              <h2 className="mt-5 text-lg font-semibold">WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fastest way to reach us. Send photos of your tank and we'll guide you.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">
                +880 1611-927396
              </span>
            </a>

            <a
              href="tel:+8801611927396"
              className="rounded-xl border border-hairline bg-surface-card p-8 transition-colors hover:bg-surface-elevated"
            >
              <Phone className="h-7 w-7 text-primary" />
              <h2 className="mt-5 text-lg font-semibold">Call us</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer talking? Call and place your order directly with our team.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">
                +880 1611-927396
              </span>
            </a>

            <div className="rounded-xl border border-hairline bg-surface-card p-8">
              <Clock className="h-7 w-7 text-primary" />
              <h2 className="mt-5 text-lg font-semibold">Support hours</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Saturday to Thursday, 10:00 AM – 8:00 PM. Friday messages are answered the next day.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-surface-card p-8">
              <MapPin className="h-7 w-7 text-primary" />
              <h2 className="mt-5 text-lg font-semibold">Delivery</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We deliver nationwide with cash on delivery available in most areas.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-hairline bg-surface-soft p-8 md:flex-row">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <div className="font-semibold">Ready to protect your tank?</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Place your order online and we'll confirm the details by phone.
                </p>
              </div>
            </div>
            <Link
              to="/order"
              className="inline-flex h-12 shrink-0 items-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
