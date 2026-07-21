"use client";

import Link from "next/link";

import { ArrowRightIcon, CheckIcon, ScaleIcon } from "@/components/landing/icons";
import { useSiteSettings } from "@/components/shared/site-settings-context";
import { getStrings } from "@/components/shared/site-strings";

export function ExampleSessionPreview() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  const stages = [
    [strings.stage1Title, strings.stage1Description],
    [strings.stage2Title, strings.stage2Description],
    [strings.stage3Title, strings.stage3Description],
    [strings.stage4Title, strings.stage4Description],
  ];
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.08),transparent_35%)] text-slate-100"
      id="example"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-indigo-700 uppercase">
              {strings.exampleSectionTitle}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 sm:text-5xl">
              {strings.exampleHeadline}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
              {strings.exampleSubtitle}
            </p>
            <Link
              className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-[1.5rem] bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="/start"
            >
              <span className="text-white">{strings.exampleCta}</span>
              <ArrowRightIcon className="size-4 text-white" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/95 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.26)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-700/80 pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800 text-indigo-200 shadow-sm">
                <ScaleIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">{strings.exampleMetaTitle}</p>
                <p className="mt-1 text-sm text-slate-400">{strings.exampleMetaSubtitle}</p>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="absolute top-8 bottom-8 left-10 w-px bg-slate-700" />
              <div className="space-y-5">
                {stages.map(([title, description], index) => (
                  <div
                    className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950 p-6 pl-28 shadow-[0_15px_30px_rgba(15,23,42,0.12)]"
                    key={title}
                  >
                    <div className="absolute top-1/2 left-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-indigo-700 text-base font-semibold text-white shadow-lg">
                      <CheckIcon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-[1.75rem] border border-slate-700/70 bg-slate-900/80 p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.24em] text-indigo-200 uppercase">
                {strings.exampleResultLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-100">{strings.exampleResultCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
