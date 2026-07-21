"use client";

import { ArrowRightIcon, LensIcon } from "@/components/landing/icons";
import { useSiteSettings } from "@/components/shared/site-settings-context";
import { getStrings } from "@/components/shared/site-strings";

export function ClaimTransformation() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  return (
    <section className="relative overflow-hidden bg-slate-950" id="method">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-indigo-700 uppercase">
            {strings.practiceSectionTitle}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 sm:text-5xl">
            {strings.practiceHeadline}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            {strings.practiceSubtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_auto_1.1fr] lg:items-center lg:gap-10">
          <article className="rounded-[2rem] border border-slate-700 bg-slate-900 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
            <p className="text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
              {strings.beforeLabel}
            </p>
            <p className="mt-8 text-2xl leading-tight font-semibold text-slate-100">
              {strings.beforeTitle}
            </p>
            <div className="mt-10 rounded-[1.75rem] border border-slate-700 bg-slate-950 p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.22em] text-indigo-200 uppercase">
                {strings.missingLabel}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-400">{strings.missingCopy}</p>
            </div>
          </article>

          <div className="relative flex justify-center py-4">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-slate-600 to-transparent" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                <ArrowRightIcon className="size-5 rotate-90" />
              </div>
            </div>
          </div>

          <article className="rounded-[2rem] border border-slate-700 bg-slate-900 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
            <p className="text-sm font-semibold tracking-[0.22em] text-teal-200 uppercase">
              {strings.afterLabel}
            </p>
            <p className="mt-8 text-2xl leading-tight font-semibold text-slate-100">
              {strings.afterTitle}
            </p>
            <div className="mt-10 flex gap-3 rounded-[1.75rem] border border-slate-700 bg-slate-950 p-5 shadow-sm">
              <LensIcon className="size-6 text-teal-300" />
              <div>
                <p className="text-sm font-semibold text-slate-300">{strings.assumptionLabel}</p>
                <p className="mt-1 text-base leading-7 text-slate-400">{strings.assumptionCopy}</p>
              </div>
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-slate-900 px-5 py-4 text-sm text-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.16)] shadow-sm">
              {strings.hiddenAssumption}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
