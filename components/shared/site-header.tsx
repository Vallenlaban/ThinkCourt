"use client";

import Link from "next/link";

import { BrandMark } from "@/components/shared/brand-mark";
import { LanguageToggle } from "@/components/shared/site-controls";
import { getStrings } from "@/components/shared/site-strings";
import { useSiteSettings } from "@/components/shared/site-settings-context";

export function SiteHeader() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  return (
    <header className="bg-background/80 sticky top-0 z-20 border-b border-[color:color-mix(in_srgb,var(--color-border)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          aria-label="ThinkCourt home"
          className="text-ink inline-flex items-center gap-2.5"
          href="/"
        >
          <BrandMark size={28} />
          <span className="text-base font-bold tracking-[-0.03em]">ThinkCourt</span>
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-3 md:gap-6">
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            <a
              className="hover:text-ink text-sm font-semibold text-[var(--color-text-secondary)] transition-colors"
              href="#method"
            >
              {strings.navHowItWorks}
            </a>
            <a
              className="hover:text-ink text-sm font-semibold text-[var(--color-text-secondary)] transition-colors"
              href="#example"
            >
              {strings.navSeeExample}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
