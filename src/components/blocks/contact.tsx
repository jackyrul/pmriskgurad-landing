import React from "react";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-3xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Join the Waitlist
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-center leading-snug">
          Real-time risk scoring, cooling-off protection, and on-page guardrails
          are dropping soon. Enter your email below to be first in line.
        </p>

        <div className="bg-card mx-auto mt-10 w-full overflow-hidden rounded-2xl border shadow-sm md:mt-14 lg:mt-16">
          <iframe
            src="https://tally.so/r/yPEWLd?transparentBackground=1"
            width="100%"
            height="640"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="PM Risk Guard waitlist form"
            className="bg-background"
          />
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
