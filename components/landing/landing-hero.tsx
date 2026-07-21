"use client";

import Link from "next/link";

import { ArrowRightIcon, CompassIcon } from "@/components/landing/icons";
import { useSiteSettings } from "@/components/shared/site-settings-context";
import { getStrings } from "@/components/shared/site-strings";

export function LandingHero() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  return (
    <section className="landing-fade-in mx-auto max-w-6xl rounded-b-[2.5rem] px-5 pt-20 pb-28 sm:px-8 sm:pt-28 sm:pb-32 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24 lg:pt-32 lg:pb-36">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-indigo-200 shadow-sm">
          <CompassIcon className="size-4" />
          {strings.heroPill}
        </div>
        <h1 className="mt-8 max-w-3xl text-5xl leading-[0.96] font-semibold tracking-[-0.06em] text-slate-100 sm:text-6xl lg:text-7xl">
          {strings.heroTitlePrefix}{" "}
          <span className="text-indigo-200">{strings.heroTitleAccent}</span>
          <span className="block"></span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          {strings.heroSubtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[1.5rem] bg-indigo-600 px-7 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/start"
          >
            <span className="text-white">{strings.heroPrimaryCta}</span>
            <ArrowRightIcon className="size-4 text-white" />
          </Link>
          <a
            className="inline-flex h-12 items-center justify-center rounded-[1.5rem] border border-slate-700 bg-slate-950 px-7 text-sm font-semibold text-slate-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="#example"
          >
            {strings.heroSecondaryCta}
          </a>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
          {strings.heroFooter}
        </p>
      </div>

      <div className="relative mt-16 lg:mt-0" aria-label="A preview of guided reasoning">
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.18),transparent_62%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-8 lg:mt-0">
          <div className="flex items-center justify-between gap-4 border-b border-slate-700/80 pb-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-indigo-200 uppercase">
                Reasoning Court
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-200">Foundation</p>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
              1 of 4
            </span>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-300">Your claim</p>
          <p className="mt-2 font-serif text-xl leading-8 text-slate-100">
            “AI should be allowed in university coursework because it makes students more
            productive.”
          </p>
          <div className="mt-6 rounded-[1.75rem] border border-slate-700/70 bg-slate-900 p-5 shadow-sm">
            <p className="text-xs font-bold tracking-[0.12em] text-indigo-200 uppercase">
              Guiding Question
            </p>
            <p className="mt-3 text-base leading-7 font-semibold text-slate-100">
              What would need to be true for greater productivity to also mean deeper learning?
            </p>
          </div>
          <div className="mt-5 rounded-[1.5rem] border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300 shadow-sm">
            Start with the assumption beneath your claim…
          </div>
        </div>
      </div>
    </section>
  );
}
