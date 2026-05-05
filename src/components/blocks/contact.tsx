import React from "react";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-3xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Get PM Risk Guard
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-center leading-snug">
          PM Risk Guard is live on the Chrome Web Store. Install the
          extension to add responsible trading guardrails to your workflow.
        </p>

        <div className="bg-card mx-auto mt-10 flex w-full flex-col items-center rounded-2xl border p-8 text-center shadow-sm md:mt-14 lg:mt-16">
          <p className="text-muted-foreground max-w-xl text-sm leading-snug">
            Add PM Risk Guard to Chrome to access bankroll protection, live risk
            scoring, cooldown tools, and self-exclusion options.
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/pm-risk-guard/eimnenpidnfkaponhjijemkjkgemnflc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md border px-5 py-2.5 font-medium transition-colors hover:bg-accent"
          >
            Add to Chrome
          </Link>
        </div>

        <div className="bg-card mx-auto mt-6 max-w-md rounded-2xl border p-6 text-center shadow-sm">
          <h2 className="text-lg font-semibold">Need help now?</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            For support or partnership requests, email us directly.
          </p>
          <Link
            href="mailto:pmriskguard@gmail.com"
            className="hover:bg-accent mt-4 inline-flex rounded-md border px-4 py-2 font-medium transition-colors"
          >
            pmriskguard@gmail.com
          </Link>
          <p className="text-muted-foreground mt-3 text-xs">
            We usually reply within 24-48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
