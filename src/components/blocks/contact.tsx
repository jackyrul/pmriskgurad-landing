import React from "react";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-center leading-snug">
          Questions, support, or partnership requests. Reach us directly by
          email.
        </p>

        <div className="bg-card mx-auto mt-10 max-w-md rounded-2xl border p-6 text-center shadow-sm md:mt-14 lg:mt-16">
          <h2 className="text-lg font-semibold">Email us</h2>
          <p className="text-muted-foreground mt-2 text-sm">General inquiries</p>
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
