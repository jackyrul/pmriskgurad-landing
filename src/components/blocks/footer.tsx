import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Features", href: "/#features" },
    { name: "Screenshots", href: "/#screenshots" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Add responsible guardrails to your trading workflow
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          PM Risk Guard helps you monitor risk signals, configure cooling-off
          policy, and reduce impulsive decisions on prediction markets.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a
              href="https://tally.so/r/yPEWLd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 mb-8 w-full text-center md:mt-14 lg:mt-20">
        <p className="text-2xl font-semibold tracking-tight md:text-4xl">
          PM Risk Guard
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          Risk guardrails for prediction market trading.
        </p>
        <p className="text-muted-foreground/90 mt-2 text-xs">
          Independent tool - not affiliated with, endorsed by, or officially supported by Polymarket.
        </p>
        <p className="text-muted-foreground/80 mt-1 text-xs">
          Educational risk-management tool only; not financial advice.
        </p>
      </div>
    </footer>
  );
}
