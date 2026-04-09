import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Risk model and guardrails",
    questions: [
      {
        question: "When does cooling-off start?",
        answer:
          "Cooling-off soft guidance starts when risk score reaches 71. Hard protection begins at 85 and blocks risk-increasing actions.",
      },
      {
        question: "How does hard cooling-off end?",
        answer:
          "Hard protection remains active until cooldown time has passed and risk falls below the hard-exit threshold. This helps prevent immediate re-entry after a spike.",
      },
      {
        question: "What goes into the risk score?",
        answer:
          "Risk score combines loss streak, trade frequency, exposure, period PnL percentage, and order-flow intensity, with optional micro-behavior penalties.",
      },
    ],
  },
  {
    title: "Privacy and data",
    questions: [
      {
        question: "Do you collect private keys or custody funds?",
        answer:
          "No. PM Risk Guard does not collect private keys and does not take custody of funds.",
      },
      {
        question: "Where is my extension state stored?",
        answer:
          "Settings and guardrail state are stored locally in browser extension storage.",
      },
      {
        question: "What network access does the extension need?",
        answer:
          "The extension is designed for least privilege and uses prediction-market endpoints required to compute and display risk context.",
      },
    ],
  },
  {
    title: "Usage",
    questions: [
      {
        question: "Can I still close positions during hard cooling-off?",
        answer:
          "Yes. The guardrail is designed to allow risk reduction while blocking actions that increase risk.",
      },
      {
        question: "Can I set self-exclusion manually?",
        answer:
          "Yes. You can activate self-exclusion windows directly from settings.",
      },
      {
        question: "Do alerts support browser notifications?",
        answer:
          "Yes. You can enable notifications and choose alert thresholds to surface meaningful risk events.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you need help with policy behavior or setup details,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
