import { NextResponse } from "next/server";

import { getFixtureCoachingTurn } from "@/lib/fixtures/coaching";
import { getRequestKey, isRateLimited } from "@/lib/rate-limit";
import { coachingRequestSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (isRateLimited(`coach:${getRequestKey(request)}`, 20, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "You have reached the session request limit. Please try again shortly." },
      { status: 429 },
    );
  }

  const raw = await request.json().catch(() => null);
  const parsed = coachingRequestSchema.safeParse(raw);

  const stage = parsed.success
    ? parsed.data.stage
    : typeof raw?.stage === "string"
      ? raw.stage
      : "foundation";
  const claim = parsed.success
    ? parsed.data.claim
    : typeof raw?.claim === "string"
      ? raw.claim
      : "";

  const fixtureTurn = getFixtureCoachingTurn(
    stage as "foundation" | "evidence" | "challenge" | "reflection",
    claim,
  );

  return NextResponse.json({ turn: fixtureTurn, source: "fixture" });
}
