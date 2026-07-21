"use client";

import { useSiteSettings } from "@/components/shared/site-settings-context";

export function LanguageToggle() {
  const { language, setLanguage } = useSiteSettings();

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-sm text-slate-100 shadow-sm transition">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2 py-1 font-semibold transition ${language === "en" ? "bg-slate-100 text-slate-950" : "text-slate-300 hover:text-white"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`rounded-full px-2 py-1 font-semibold transition ${language === "id" ? "bg-slate-100 text-slate-950" : "text-slate-300 hover:text-white"}`}
      >
        ID
      </button>
    </div>
  );
}
