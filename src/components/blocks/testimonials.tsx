import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    description:
      "At-a-glance risk context: score, bankroll, exposure, and period PnL in one view.",
    image: "/screenshots/tiles/dashboard-tile-dark.png",
  },
  {
    title: "Browser Notifications",
    description:
      "Optional browser alerts notify you when period losses hit your configured threshold.",
    image: "/screenshots/tiles/browser-notifications-tile-dark.png",
  },
  {
    title: "Alerts",
    description:
      "Alert settings help surface meaningful risk changes without overwhelming noise.",
    image: "/screenshots/tiles/alrets-tile-dark.png",
  },
  {
    title: "Cooling-off and Risk Budget",
    description:
      "Configure cooldown behavior and budget constraints to slow risky escalation.",
    image: "/screenshots/tiles/coolin-off-and-risk-budged-tiles-dark.png",
  },
  {
    title: "Micro Filters",
    description:
      "Fine-grained filters tune what activity contributes to score and interventions.",
    image: "/screenshots/tiles/micro-filters-tile-dark.png",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section id="screenshots" className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Product walkthrough
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              These screenshots show the exact in-product flow: monitor risk,
              configure guardrails, and intervene with cooling-off when needed.
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain object-center p-2"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <div className="space-y-3">
                            <h3 className="font-display text-lg leading-tight font-semibold md:text-xl">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-snug">
                              {item.description}
                            </p>
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-primary text-sm font-medium">PM Risk Guard UI</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
