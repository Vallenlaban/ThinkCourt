"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { ClaimCard } from "@/components/reasoning-court/claim-card";
import { ReasoningSoFar } from "@/components/reasoning-court/reasoning-so-far";
import { StageProgress } from "@/components/reasoning-court/stage-progress";
import { useReasoningSession } from "@/hooks/use-reasoning-session";

type ReasoningCourtProps = {
  sessionId: string;
};

const stageDescriptions = {
  challenge: "Meet the strongest reasonable case against your view.",
  evidence: "Test whether your support reaches your conclusion.",
  foundation: "Clarify the assumption beneath your claim.",
  reflection: "Name what changed and what you want to know next.",
};

export function ReasoningCourt({ sessionId }: ReasoningCourtProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const claim = searchParams.get("claim") ?? "";
  const context = searchParams.get("context") ?? "";
  const mode = (searchParams.get("mode") as "guided" | "own") ?? "own";
  const session = useReasoningSession({ claim, context, sessionId, mode });

  async function handleContinue() {
    const result = await session.submit();

    if (result.complete) {
      router.push(`/snapshot/${sessionId}`);
    }
  }

  if (claim.trim().length < 16) {
    return (
      <section className="mx-auto max-w-xl py-16 text-center">
        <p className="text-sm font-bold tracking-[0.12em] text-indigo-200 uppercase">
          Start a session
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-100">
          Bring a claim to the Court first.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-400">
          ThinkCourt needs a position to examine before it can begin asking useful questions.
        </p>
        <Link
          className="bg-ink mt-8 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-ink-hover)]"
          href="/start"
        >
          Choose a claim
        </Link>
      </section>
    );
  }

  return (
    <div className="landing-fade-in mx-auto max-w-6xl py-2 sm:py-4">
      <div className="rounded-[var(--radius-dialog)] border border-slate-700/80 bg-slate-950/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-7">
        <p className="text-sm font-bold tracking-[0.12em] text-indigo-200 uppercase">
          Reasoning Court
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
              Think through your position.
            </h1>
            <p className="mt-2 text-base leading-7 text-slate-400">
              One question at a time. Your reasoning stays at the center.
            </p>
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-slate-300">
            Guest session
          </span>
        </div>
        <div className="mt-6">
          <StageProgress
            completedCount={session.stages.length}
            currentStage={session.currentStage}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className="min-w-0">
          <div className="lg:hidden">
            <ClaimCard claim={session.claim} context={session.context} />
          </div>
          <section
            aria-labelledby="coach-question"
            className="mt-6 rounded-[var(--radius-dialog)] border border-slate-700/80 bg-slate-950/95 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:p-8 lg:mt-0"
          >
            <p className="text-indigo text-sm font-bold tracking-[0.12em] uppercase">
              {session.currentStage}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {stageDescriptions[session.currentStage]}
            </p>

            {session.isLoading ? (
              <div
                className="mt-10 flex min-h-68 flex-col items-center justify-center rounded-[var(--radius-card)] border border-slate-700/70 bg-slate-950/90 px-5 text-center"
                role="status"
              >
                <span
                  aria-hidden="true"
                  className="size-10 animate-pulse rounded-full border-4 border-indigo-400 border-t-transparent shadow-[0_0_0_7px_rgba(99,102,241,0.15)]"
                />
                <p className="mt-6 text-base font-semibold text-slate-100">
                  {session.stageMessage}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                  ThinkCourt is preparing one focused question from the reasoning you have shared.
                </p>
              </div>
            ) : session.error && !session.currentTurn ? (
              <div
                className="mt-8 rounded-[var(--radius-card)] border border-rose-500/30 bg-slate-950/80 p-5"
                role="alert"
              >
                <p className="font-bold text-rose-300">The next question is unavailable.</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{session.error}</p>
                <button
                  className="bg-ink mt-4 min-h-10 rounded-[var(--radius-button)] px-4 text-sm font-bold text-white hover:bg-[var(--color-ink-hover)]"
                  onClick={session.retry}
                  type="button"
                >
                  Try again
                </button>
              </div>
            ) : session.currentTurn ? (
              <div className="mt-7">
                <p className="text-sm leading-6 text-slate-400">
                  {session.currentTurn.acknowledgement}
                </p>
                {session.currentTurn.challenge ? (
                  <aside className="mt-6 rounded-[var(--radius-card)] border border-amber-500/30 bg-slate-900/80 p-5">
                    <p className="text-xs font-bold tracking-[0.12em] text-amber-300 uppercase">
                      {session.currentTurn.challenge.title}
                    </p>
                    <p className="mt-3 text-base leading-7 font-semibold text-slate-100">
                      {session.currentTurn.challenge.argument}
                    </p>
                    <p className="mt-4 border-t border-amber-500/20 pt-4 text-sm leading-6 text-slate-400">
                      <strong className="font-bold text-slate-100">
                        Assumption under pressure:
                      </strong>{" "}
                      {session.currentTurn.challenge.assumption}
                    </p>
                  </aside>
                ) : null}
                <h2
                  className="mt-8 max-w-3xl font-serif text-3xl leading-[1.15] text-slate-100 sm:text-4xl"
                  id="coach-question"
                >
                  {session.currentTurn.question}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                  <strong className="font-bold text-slate-100">Why this question:</strong>{" "}
                  {session.currentTurn.questionPurpose}
                </p>

                <div className="mt-8">
                  <label className="text-sm font-bold text-slate-100" htmlFor="reasoning-response">
                    Your response
                  </label>
                  <textarea
                    className="mt-3 min-h-48 w-full resize-y rounded-[var(--radius-input)] border border-slate-700 bg-slate-950/95 px-5 py-4 text-base leading-7 text-slate-100 shadow-[0_4px_10px_rgba(15,23,42,0.16)] shadow-inner transition-[border-color,box-shadow,background] outline-none placeholder:text-slate-500 focus:border-indigo-400 focus:bg-slate-950 focus:ring-3 focus:ring-[rgba(99,102,241,0.18)]"
                    id="reasoning-response"
                    onChange={(event) => session.setDraft(event.target.value)}
                    placeholder="Write what you think. ThinkCourt will build from your reasoning, not replace it."
                    value={session.draft}
                  />
                  <div className="mt-4">
                    <p className="text-sm font-bold text-slate-100">Thinking starters</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {session.currentTurn.thinkingStarters.map((starter) => (
                        <li
                          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-slate-500"
                          key={starter}
                        >
                          {starter}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {session.error ? (
                    <p
                      className="mt-4 text-sm font-semibold text-[var(--color-error)]"
                      role="alert"
                    >
                      {session.error}
                    </p>
                  ) : null}
                  <div className="mt-7 flex justify-end border-t border-slate-700 pt-5">
                    <button
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgb(23_32_51_/_0.18)] transition-[background,transform,box-shadow] hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_14px_30px_rgb(23_32_51_/_0.22)] disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-400"
                      disabled={session.isLoading}
                      onClick={() => void handleContinue()}
                      type="button"
                    >
                      {session.currentStage === "reflection"
                        ? "See my Reasoning Snapshot"
                        : "Continue"}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </div>

        <aside className="space-y-5">
          <div className="hidden lg:block">
            <ClaimCard claim={session.claim} context={session.context} />
          </div>
          <ReasoningSoFar stages={session.stages} />
        </aside>
      </div>
    </div>
  );
}
