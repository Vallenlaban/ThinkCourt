import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "ThinkCourt | Train Critical Thinking",
    template: "%s | ThinkCourt",
  },
  description:
    "A guided reasoning practice space that helps you examine claims, evidence, and assumptions.",
};

import { SiteSettingsProvider } from "@/components/shared/site-settings-context";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable} dark`}>
      <body>
        <SiteSettingsProvider>{children}</SiteSettingsProvider>
      </body>
    </html>
  );
}
