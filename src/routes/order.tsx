import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  Phone,
} from "lucide-react";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import heroProduct from "../assets/hero-product.jpg";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order TankGuard Pro — ৳1,990 Cash on Delivery" },
      {
        name: "description",
        content:
          "Order your TankGuard Pro internal tank protection kit for ৳1,990 with cash on delivery nationwide and a 30-month guarantee. Confirm your order in under a minute.",
      },
      { property: "og:title", content: "Order TankGuard Pro — ৳1,990 Cash on Delivery" },
      {
        property: "og:description",
        content: "Place your TankGuard Pro order with cash on delivery nationwide and a 30-month guarantee.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrderPage,
});

const UNIT_PRICE = 1990;
const DELIVERY_FEE = 120;
const WHATSAPP = "8801611927396";

const inputClass =
  "mt-2 w-full rounded-md border border-hairline bg-surface-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function OrderPage() {
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [bike, setBike] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const subtotal = UNIT_PRICE * qty;
  const total = subtotal + DELIVERY_FEE;
  const bdt = (n: number) => `৳${n.toLocaleString("en-US")}`;

  function buildMessage() {
    return [
      "New TankGuard Pro order",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Address: ${address}, ${city}`,
      bike ? `Bike: ${bike}` : "",
      `Quantity: ${qty} kit(s)`,
      `Total (with delivery): ${bdt(total)}`,
      notes ? `Notes: ${notes}` : "",
      "Payment: Cash on delivery",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please enter your name";
    if (!/^[0-9+\-\s]{6,}$/.test(phone.trim())) next.phone = "Enter a valid phone number";
    if (!address.trim()) next.address = "Please enter your full address";
    if (!city.trim()) next.city = "Please enter your city or district";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitted(true);
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Truck className="h-3.5 w-3.5" /> Cash on delivery nationwide
          </span>
          <h1 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
            Order your <span className="text-primary">TankGuard Pro</span> kit
          </h1>
          <p className="mt-4 text-body-text">
            Fill in your delivery details — we confirm every order by phone before dispatch.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-xl border border-hairline bg-surface-card p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Check className="h-6 w-6 text-primary-foreground" />
                </span>
                <h2 className="font-display mt-6 text-2xl">Order details sent</h2>
                <p className="mt-3 text-sm text-body-text">
                  Thanks {name.split(" ")[0]}! We've opened WhatsApp with your order
                  summary — press send there so our team receives it. We'll call you on{" "}
                  <span className="font-semibold text-foreground">{phone}</span> to confirm
                  delivery.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage())}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4" /> Open WhatsApp again
                  </a>
                  <a
                    href="tel:+8801611927396"
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-surface-elevated px-6 text-sm font-semibold transition-colors hover:bg-hairline-strong"
                  >
                    <Phone className="h-4 w-4" /> Call to confirm
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  Edit my order
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-hairline bg-surface-card p-7 md:p-9"
              >
                <h2 className="font-display text-2xl">Delivery details</h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="text-sm font-medium">Full name</label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-primary">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">Phone number</label>
                    <input
                      id="phone"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className={inputClass}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-primary">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="city" className="text-sm font-medium">City / District</label>
                    <input
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Dhaka"
                      className={inputClass}
                    />
                    {errors.city && <p className="mt-1.5 text-xs text-primary">{errors.city}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="text-sm font-medium">Full address</label>
                    <textarea
                      id="address"
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House, road, area — anything that helps the courier find you"
                      className={inputClass}
                    />
                    {errors.address && <p className="mt-1.5 text-xs text-primary">{errors.address}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="bike" className="text-sm font-medium">
                      Bike model <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="bike"
                      value={bike}
                      onChange={(e) => setBike(e.target.value)}
                      placeholder="e.g. Pulsar 150"
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Notes <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Preferred delivery time, tank condition, anything else"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between rounded-lg border border-hairline bg-surface-soft px-5 py-4">
                  <div>
                    <div className="text-sm font-semibold">Quantity</div>
                    <div className="text-xs text-muted-foreground">One kit covers one tank</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-elevated transition-colors hover:bg-hairline-strong"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-display text-lg">{qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty((q) => Math.min(10, q + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-elevated transition-colors hover:bg-hairline-strong"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-hairline bg-surface-soft px-5 py-4 text-sm">
                  <div className="flex items-center gap-2 font-semibold">
                    <BadgeCheck className="h-4 w-4 text-primary" /> Cash on delivery
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Pay the courier when your kit arrives. No advance payment needed.
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex h-13 w-full items-center justify-center rounded-md bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Confirm Order — {bdt(total)}
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  We'll send your order summary over WhatsApp and call you to confirm.
                </p>
              </form>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-hairline bg-surface-card p-7">
              <div className="flex gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-hairline">
                  <img
                    src={heroProduct}
                    alt="TankGuard Pro kit"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold">TankGuard Pro Kit</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Internal tank protection · Part A + Part B
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">{bdt(UNIT_PRICE)} each</p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5 border-t border-hairline pt-5 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({qty} kit{qty > 1 ? "s" : ""})</span>
                  <span className="text-foreground">{bdt(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-foreground">{bdt(DELIVERY_FEE)}</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-hairline pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span className="font-display text-2xl text-primary">{bdt(total)}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-hairline pt-5 text-xs text-muted-foreground">
                {[
                  "30-month guarantee on every registered kit",
                  "Sealed, genuine branded packaging",
                  "Nationwide delivery, pay on arrival",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-hairline bg-surface-soft p-6 text-sm">
              <p className="font-semibold">Prefer to order by phone?</p>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Call us and we'll take your order directly.
              </p>
              <a
                href="tel:+8801611927396"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-surface-elevated px-5 text-sm font-semibold transition-colors hover:bg-hairline-strong"
              >
                <Phone className="h-4 w-4 text-primary" /> +880 1611-927396
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Not sure yet? <Link to="/product" className="text-primary underline underline-offset-4">See what's in the kit</Link>
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
