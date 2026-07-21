import type { Metadata } from "next";

import { SiteHeader } from "@/components/shared/site-header";
import { ReasoningSnapshotView } from "@/components/snapshot/reasoning-snapshot";

export const metadata: Metadata = { title: "Reasoning Snapshot", description: "Review what your reasoning session helped you examine." };

export default async function SnapshotPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="px-5 py-10 sm:px-8 sm:py-12"><ReasoningSnapshotView sessionId={sessionId} /></main></div>;
}
