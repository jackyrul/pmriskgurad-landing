import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Risk score monitoring",
    description: "Track risk from loss streak, activity, exposure, and period PnL.",
    icon: CircleDot,
  },
  {
    title: "Cooling-off protection",
    description: "Soft guidance at 71 and hard guardrails at 85 for safer decisions.",
    icon: Blend,
  },
  {
    title: "Risk budget controls",
    description: "Set daily and weekly limits and monitor usage in real time.",
    icon: Diamond,
  },
  {
    title: "Self-exclusion and alerts",
    description: "Activate exclusion windows and optional browser notifications.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-3xl text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Trade with confidence, not impulse
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            PM Risk Guard helps you set guardrails before emotions take over, so
            every session stays within your plan.
          </p>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-snug">
            Built for responsible traders on prediction markets. Your keys stay
            in your wallet and all settings remain in browser extension storage.
          </p>
          <p className="text-muted-foreground/80 mt-2 text-xs leading-snug">
            Unofficial third-party tool • Not affiliated with or endorsed by
            Polymarket
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Add to Chrome - Free</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="#screenshots"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                View Dashboard Demo
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <div className="bg-background/95 text-foreground absolute top-4 right-4 z-20 rounded-full border px-3 py-1 text-xs font-medium shadow-sm">
            Dangerous (87) - Cooling-off active
          </div>
          <Image
            src="/screenshots/tiles/dashboard-tile-dark.png"
            alt="PM Risk Guard dashboard screenshot"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
