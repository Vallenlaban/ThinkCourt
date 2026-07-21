"use client";

"use client";

import Link from "next/link";

import { BrandMark } from "@/components/shared/brand-mark";
import { useSiteSettings } from "@/components/shared/site-settings-context";
import { getStrings } from "@/components/shared/site-strings";

export function LandingFooter() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-slate-100">
            <BrandMark size={25} />
            <span className="text-base font-bold tracking-[-0.03em]">ThinkCourt</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">
            {strings.footerDescription}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-400">
          <a className="transition-colors hover:text-slate-100" href="#method">
            {strings.navHowItWorks}
          </a>
          <a className="transition-colors hover:text-slate-100" href="#example">
            {strings.navSeeExample}
          </a>
          <Link className="transition-colors hover:text-slate-100" href="/start">
            {strings.footerStartSession}
          </Link>
        </div>
      </div>
    </footer>
  );
}
