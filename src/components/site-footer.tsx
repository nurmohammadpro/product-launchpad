import { Link } from "@tanstack/react-router";
import { ShieldCheck, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-base">
              TankGuard <span className="text-primary">Pro</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Premium internal tank protection system. Stop rust. Stop leak.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/product" className="hover:text-foreground">Product</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground">How to Apply</Link></li>
            <li><Link to="/guarantee" className="hover:text-foreground">Guarantee</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/order" className="hover:text-foreground">Order Now</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Talk to us</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a href="tel:+8801611927396" className="flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" /> +880 1611-927396
            </a>
            <a
              href="https://wa.me/8801611927396"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} TankGuard Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
