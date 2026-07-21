import { NextResponse } from "next/server";

import { getFixtureSnapshot } from "@/lib/fixtures/coaching";
import { getRequestKey, isRateLimited } from "@/lib/rate-limit";
import { snapshotRequestSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (isRateLimited(`snapshot:${getRequestKey(request)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "You have reached the snapshot request limit. Please try again shortly." },
      { status: 429 },
    );
  }

  const raw = await request.json().catch(() => null);
  const parsed = snapshotRequestSchema.safeParse(raw);
  const claim = parsed.success
    ? parsed.data.claim
    : typeof raw?.claim === "string"
      ? raw.claim
      : "Your claim";

  return NextResponse.json({ snapshot: getFixtureSnapshot(claim), source: "fixture" });
}
