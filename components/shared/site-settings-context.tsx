"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "id";

interface SiteSettingsContextValue {
  language: Language;
  setLanguage: (value: Language) => void;
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | undefined>(undefined);

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("thinkcourt-language") as Language | null;
    setLanguageState(storedLanguage === "id" ? "id" : "en");
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("thinkcourt-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  }
  return context;
}
