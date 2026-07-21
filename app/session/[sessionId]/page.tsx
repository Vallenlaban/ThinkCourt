import type { Metadata } from "next";

import { ReasoningCourt } from "@/components/reasoning-court/reasoning-court";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "Reasoning Court",
  description: "Examine your claim through guided critical-thinking practice.",
};

export default async function SessionPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="px-5 py-10 sm:px-8 sm:py-12"><ReasoningCourt sessionId={sessionId} /></main>
    </div>
  );
}
