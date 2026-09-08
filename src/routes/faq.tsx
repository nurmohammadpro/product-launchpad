import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const faqs = [
  {
    q: "Which bikes is TankGuard Pro suitable for?",
    a: "It is made for motorcycle steel fuel tanks — carbureted or EFI. One kit covers one tank.",
  },
  {
    q: "Can I apply it myself at home?",
    a: "Yes. The kit is designed for DIY use with a printed step-by-step guide. You need a clean, dry tank, a ventilated space and some patience while it cures.",
  },
  {
    q: "My tank already has rust. Will it still work?",
    a: "Loose rust must be removed and the tank fully dried first. The coating then seals the surface and stops corrosion from spreading. Tanks with actual holes or cracks need repair before coating.",
  },
  {
    q: "How long does the coating last?",
    a: "A correct application lasts for years. Registered kits carry a 30-month guarantee against rust and leakage under proper use.",
  },
  {
    q: "How do I activate the guarantee?",
    a: "Send us a before photo, an after photo and your details on WhatsApp or Messenger after application. That registers your guarantee card.",
  },
  {
    q: "How do I pay and how fast is delivery?",
    a: "Cash on delivery is available nationwide. Place your order on the order page and our team confirms the details by phone before dispatch.",
  },
  {
    q: "Is the product safe for fuel?",
    a: "Yes — once cured, the coating is fuel-resistant and bonds to the tank wall so it does not contaminate the fuel system.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TankGuard Pro Tank Coating Questions" },
      {
        name: "description",
        content:
          "Answers about TankGuard Pro: which bikes it fits, applying it at home, rusty tanks, how long it lasts, guarantee registration, payment and delivery.",
      },
      { property: "og:title", content: "FAQ — TankGuard Pro Tank Coating Questions" },
      {
        property: "og:description",
        content: "Common questions about applying TankGuard Pro, the 30-month guarantee, payment and delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:py-24">
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Frequently asked <span className="text-primary">questions</span>
          </h1>
          <p className="mt-5 text-body-text">
            Everything riders usually ask before protecting their tank.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-hairline bg-surface-card p-6 open:bg-surface-elevated"
              >
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-hairline bg-surface-soft p-7 text-center">
            <p className="text-sm text-body-text">Still have a question?</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
