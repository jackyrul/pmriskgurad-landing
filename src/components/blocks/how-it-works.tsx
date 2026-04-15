import Link from "next/link";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "1) Install and connect 🧩🦊",
    description:
      "Add PM Risk Guard to your browser, then connect the wallet you use for trading.",
  },
  {
    title: "2) Set your guardrails 🛡️",
    description:
      "Configure session budget, max loss limits, cool-off periods, self-exclusion windows, and alerts.",
  },
  {
    title: "3) Trade, monitor, and refine 📊🔁",
    description:
      "Trade with protection on, check your dashboard, and refine limits weekly as your strategy evolves.",
  },
];

const prerequisites = [
  "A supported browser",
  "Your trading wallet",
  "2-3 minutes to configure your rules",
];

const benefits = [
  "Reduce emotional decisions",
  "Prevent chasing losses",
  "Stay consistent with bankroll strategy",
  "Build long-term trading discipline",
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SET GUARDRAILS BEFORE YOU TRADE
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center md:mt-12">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            PM Risk Guard helps you set guardrails before emotions take over, so
            every session stays within your plan.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="rounded-2xl">
              <CardContent className="space-y-3 p-5 md:p-6">
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="space-y-4 p-5 md:p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                What You Need Before You Start
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {prerequisites.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="space-y-4 p-5 md:p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                Why Traders Use Risk Guard
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {benefits.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
          <Button asChild>
            <a
              href="https://tally.so/r/yPEWLd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#screenshots">View Dashboard Demo</Link>
          </Button>
          <Link
            href="/faq"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Learn How Guardrails Work
          </Link>
        </div>
      </div>
    </section>
  );
};
