import Link from "next/link";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="w-full rounded-md border p-5 md:p-8">
      <div className="flex items-start gap-3">
        <Mail className="mt-0.5 size-5 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Contact by email</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            This site is published as a fully static GitHub Pages build, so the
            contact form is disabled. Please email us directly and we will reply
            as soon as possible.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <Link href="mailto:support@pmriskguard.com">
                support@pmriskguard.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
