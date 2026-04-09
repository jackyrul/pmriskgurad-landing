import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Notification alerts: instant loss warnings",
    image: "/screenshots/chrome-notification-loss-alert2.png",
    imageClassName: "object-contain object-center",
  },
  {
    title: "Cooling-off modal: pause before risky actions",
    image: "/screenshots/cooling-off-modal-with-polymarket-bg.png",
    imageClassName: "object-cover object-left-top ps-4 pt-2",
  },
  {
    title: "Guard banner: in-page protection prompts",
    image: "/screenshots/soft-guard-banner.png",
    imageClassName: "object-cover object-left-top ps-4 pt-2",
  },
];

export const Features = () => {
  return (
    <section id="features" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MONITOR RISK. ACT DELIBERATELY.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Built for responsible prediction market trading
          </h2>
          <p className="text-muted-foreground leading-snug">
            PM Risk Guard turns behavior signals into practical guardrails:
            dashboards for context, policy controls for intervention, and on-page
            enforcement during high-risk moments.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      className={item.imageClassName}
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <div className="pe-4 pt-4 md:pe-6 md:pt-6">
                    <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
