"use client";

import { CompassIcon, ScaleIcon, SparkIcon } from "@/components/landing/icons";
import { useSiteSettings } from "@/components/shared/site-settings-context";
import { getStrings } from "@/components/shared/site-strings";

export function Principles() {
  const { language } = useSiteSettings();
  const strings = getStrings(language);

  const principles = [
    {
      description: strings.principle1Description,
      icon: CompassIcon,
      title: strings.principle1Title,
    },
    {
      description: strings.principle2Description,
      icon: ScaleIcon,
      title: strings.principle2Title,
    },
    {
      description: strings.principle3Description,
      icon: SparkIcon,
      title: strings.principle3Title,
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-indigo-700 uppercase">
          {strings.howHelpsTitle}
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 sm:text-5xl">
          {strings.howHelpsHeadline}
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {principles.map(({ description, icon: Icon, title }, index) => (
          <article
            className="group overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.28)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.34)] sm:p-7"
            key={title}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-indigo-200 shadow-sm">
                <Icon className="size-5" />
              </div>
              <div className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-indigo-200 uppercase shadow-sm">
                0{index + 1}
              </div>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-slate-100">
              {title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
