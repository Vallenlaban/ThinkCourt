import type { Metadata } from "next";

import { StartSessionFlow } from "@/components/start-session/start-session-flow";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "Start a session",
  description: "Choose a claim to examine with ThinkCourt.",
};

export default function StartSessionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <StartSessionFlow />
      </main>
    </div>
  );
}
