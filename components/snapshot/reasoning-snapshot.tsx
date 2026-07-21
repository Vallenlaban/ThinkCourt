"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import type { ReasoningSnapshot, StoredSession } from "@/types/reasoning";
import { loadStoredSession, saveStoredSession } from "@/utils/session-storage";

type ReasoningSnapshotViewProps = { sessionId: string };

const dimensionStyles = {
  Developing: "bg-[var(--color-warning-surface)] text-[var(--color-warning)]",
  Practiced: "bg-[color:color-mix(in_srgb,var(--color-indigo)_9%,transparent)] text-indigo",
  "Strongly demonstrated": "bg-[var(--color-success-surface)] text-[var(--color-success)]",
};

const dimensionProgress = {
  Developing: 42,
  Practiced: 68,
  "Strongly demonstrated": 90,
};

function DimensionIndicator({ label }: { label: keyof typeof dimensionProgress }) {
  const progress = dimensionProgress[label];
  const circumference = 100.5;

  return (
    <svg
      aria-label={`${label} practice level`}
      className="size-12 -rotate-90"
      role="img"
      viewBox="0 0 40 40"
    >
      <circle
        cx="20"
        cy="20"
        fill="none"
        r="16"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="4"
      />
      <circle
        cx="20"
        cy="20"
        fill="none"
        r="16"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress / 100)}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function SnapshotContent({ session }: { session: StoredSession }) {
  const snapshot = session.snapshot as ReasoningSnapshot;
  return (
    <div className="landing-fade-in mx-auto max-w-4xl py-2 sm:py-4">
      <p className="text-indigo text-sm font-bold tracking-[0.12em] uppercase">
        Reasoning Snapshot
      </p>
      <h1 className="text-ink mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] sm:text-5xl">
        You did not just reach a conclusion. You tested it.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
        This is a reflection on the reasoning you practiced—not a verdict on whether your position
        is right or wrong.
      </p>
      <section
        className="mt-10 rounded-[var(--radius-dialog)] border border-slate-700/70 bg-slate-950/90 p-6 shadow-[var(--shadow-raised)] sm:p-8"
        aria-labelledby="claim-evolution-title"
      >
        <p
          className="text-indigo text-xs font-bold tracking-[0.12em] uppercase"
          id="claim-evolution-title"
        >
          Claim evolution
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="rounded-[var(--radius-card)] border border-slate-700/80 bg-slate-950/90 p-5">
            <p className="text-sm font-bold text-slate-400">Starting claim</p>
            <p className="mt-2 font-serif text-xl leading-8 text-slate-100">“{session.claim}”</p>
          </div>
          <span
            aria-hidden="true"
            className="text-indigo mx-auto flex size-11 items-center justify-center rounded-full bg-[color:color-mix(in_srgb,var(--color-indigo)_9%,transparent)] text-2xl leading-none"
          >
            →
          </span>
          <div className="rounded-[var(--radius-card)] border border-[color:color-mix(in_srgb,var(--color-success)_30%,var(--color-border))] bg-[var(--color-success-surface)] p-5">
            <p className="text-sm font-bold text-[var(--color-success)]">
              More considered position
            </p>
            <p className="text-ink mt-2 font-serif text-xl leading-8">“{snapshot.refinedClaim}”</p>
          </div>
        </div>
      </section>
      <section className="mt-6" aria-labelledby="reasoning-profile-title">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-indigo text-sm font-bold tracking-[0.12em] uppercase">
              Your practice profile
            </p>
            <h2
              className="text-ink mt-2 text-2xl font-bold tracking-[-0.035em]"
              id="reasoning-profile-title"
            >
              What you demonstrated
            </h2>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">Four qualitative dimensions</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {snapshot.dimensions.map((dimension) => (
            <article
              className="group rounded-[var(--radius-card)] border border-slate-700/80 bg-slate-950/90 p-5 shadow-[var(--shadow-subtle)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-raised)]"
              key={dimension.name}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-100">{dimension.name}</h3>
                  <span
                    className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${dimensionStyles[dimension.label]}`}
                  >
                    {dimension.label}
                  </span>
                </div>
                <div className={dimensionStyles[dimension.label]}>
                  <DimensionIndicator label={dimension.label} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{dimension.rationale}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-[var(--radius-card)] border border-[color:color-mix(in_srgb,var(--color-teal)_35%,var(--color-border))] bg-[var(--color-success-surface)] p-6 shadow-[var(--shadow-subtle)]">
          <p className="text-xs font-bold tracking-[0.12em] text-[var(--color-success)] uppercase">
            Demonstrated strength
          </p>
          <p className="text-ink mt-3 text-base leading-7 font-semibold">
            {snapshot.demonstratedStrength}
          </p>
        </article>
        <article className="rounded-[var(--radius-card)] border border-slate-700/80 bg-slate-950/90 p-6 shadow-[var(--shadow-subtle)]">
          <p className="text-indigo text-xs font-bold tracking-[0.12em] uppercase">
            Your next practice goal
          </p>
          <p className="mt-3 text-base leading-7 font-semibold text-slate-100">
            {snapshot.nextPracticeGoal}
          </p>
        </article>
      </section>
      <section className="mt-6 rounded-[var(--radius-card)] border border-slate-700/80 bg-slate-950/90 p-6">
        <p className="text-sm font-bold text-slate-100">Try this next</p>
        <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">
          {snapshot.suggestedExercise}
        </p>
      </section>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
          href="/start"
        >
          Start another session
        </Link>
        <Link
          className="border-border bg-surface text-ink hover:bg-surface-subtle inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] border px-5 py-3 text-sm font-bold transition-colors"
          href="/"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export function ReasoningSnapshotView({ sessionId }: ReasoningSnapshotViewProps) {
  const [session, setSession] = useState<StoredSession | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const createSnapshot = useCallback(async (current: StoredSession) => {
    setError(null);
    setIsLoading(true);
    try {
      // #region agent log
      fetch("http://127.0.0.1:7407/ingest/2aa5b542-c8ae-404c-a744-e2be0bea4eac", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "fb632f" },
        body: JSON.stringify({
          sessionId: "fb632f",
          location: "reasoning-snapshot.tsx:createSnapshot",
          message: "Snapshot request payload from stored session",
          data: {
            stagesCount: current.stages.length,
            reflectionLen: current.reflection.trim().length,
            claimLen: current.claim.trim().length,
            contextLen: current.context.length,
            ackLengths: current.stages.map((s) => s.acknowledgement.length),
            stageNames: current.stages.map((s) => s.stage),
          },
          timestamp: Date.now(),
          hypothesisId: "C-D",
        }),
      }).catch(() => {});
      // #endregion
      const response = await fetch("/api/snapshot", {
        body: JSON.stringify({
          claim: current.claim,
          context: current.context,
          reflection: current.reflection,
          stages: current.stages,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = (await response.json()) as { error?: string; snapshot?: ReasoningSnapshot };
      if (!response.ok || !payload.snapshot)
        throw new Error(payload.error ?? "ThinkCourt could not create your snapshot.");
      const completed = {
        ...current,
        snapshot: payload.snapshot,
        updatedAt: new Date().toISOString(),
      };
      saveStoredSession(completed);
      setSession(completed);
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "ThinkCourt could not create your snapshot.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const stored = loadStoredSession(sessionId);
    if (!stored) {
      setError("This guest session is not available in this browser.");
      setIsLoading(false);
      return;
    }
    if (stored.snapshot) {
      setSession(stored);
      setIsLoading(false);
      return;
    }
    void createSnapshot(stored);
  }, [createSnapshot, sessionId]);

  if (isLoading)
    return (
      <div
        className="mx-auto flex min-h-[55vh] max-w-xl flex-col items-center justify-center text-center"
        role="status"
      >
        <span
          aria-hidden="true"
          className="border-indigo size-9 animate-pulse rounded-full border-4 border-t-transparent"
        />
        <h1 className="text-ink mt-6 text-2xl font-bold tracking-[-0.035em]">
          Preparing your Reasoning Snapshot…
        </h1>
        <p className="mt-3 text-base leading-7 text-[var(--color-text-secondary)]">
          Turning your reflection into a clear next step.
        </p>
      </div>
    );
  if (error)
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-indigo text-sm font-bold tracking-[0.12em] uppercase">
          Reasoning Snapshot
        </p>
        <h1 className="text-ink mt-4 text-3xl font-bold tracking-[-0.04em]">
          Your session is still here.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">{error}</p>
        {session ? (
          <button
            className="bg-ink mt-8 min-h-12 rounded-[var(--radius-button)] px-5 text-sm font-bold text-white hover:bg-[var(--color-ink-hover)]"
            onClick={() => void createSnapshot(session)}
            type="button"
          >
            Try again
          </button>
        ) : (
          <Link
            className="bg-ink mt-8 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] px-5 text-sm font-bold text-white hover:bg-[var(--color-ink-hover)]"
            href="/start"
          >
            Start a session
          </Link>
        )}
      </div>
    );
  return session?.snapshot ? <SnapshotContent session={session} /> : null;
}
