"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type {
  CoachingTurn,
  CompletedStage,
  ReasoningStage,
  StoredSession,
} from "@/types/reasoning";
import { reasoningStages } from "@/types/reasoning";
import { loadStoredSession, saveStoredSession } from "@/utils/session-storage";

type UseReasoningSessionArgs = {
  claim: string;
  context: string;
  mode?: "guided" | "own";
  sessionId: string;
};

function getStageMessage(stage: ReasoningStage) {
  const messages: Record<ReasoningStage, string> = {
    foundation: "Looking beneath the claim…",
    evidence: "Examining how the evidence connects…",
    challenge: "Preparing the strongest reasonable challenge…",
    reflection: "Making space for reflection…",
  };

  return messages[stage];
}

export function useReasoningSession({
  claim: initialClaim,
  context: initialContext,
  sessionId,
}: UseReasoningSessionArgs) {
  const [claim, setClaim] = useState(initialClaim);
  const [context, setContext] = useState(initialContext);
  const [currentStage, setCurrentStage] = useState<ReasoningStage>("foundation");
  const [stages, setStages] = useState<CompletedStage[]>([]);
  const [currentTurn, setCurrentTurn] = useState<CoachingTurn | null>(null);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const restored = useRef(false);

  const persist = useCallback(
    (next: Omit<StoredSession, "id" | "updatedAt">) => {
      saveStoredSession({ ...next, id: sessionId, updatedAt: new Date().toISOString() });
    },
    [sessionId],
  );

  const loadTurn = useCallback(
    async (stage: ReasoningStage, history: CompletedStage[]) => {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch("/api/coach", {
          body: JSON.stringify({ claim, context, history, stage }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });
        const payload = (await response.json()) as { error?: string; turn?: CoachingTurn };

        if (!response.ok || !payload.turn) {
          throw new Error(payload.error ?? "ThinkCourt could not prepare the next question.");
        }

        setCurrentTurn(payload.turn);
      } catch (caught) {
        setError(
          caught instanceof Error
            ? caught.message
            : "ThinkCourt could not prepare the next question.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [claim, context],
  );

  useEffect(() => {
    if (restored.current) {
      return;
    }

    restored.current = true;
    const stored = loadStoredSession(sessionId);

    if (stored) {
      setClaim(stored.claim);
      setContext(stored.context);
      setCurrentStage(stored.currentStage);
      setStages(stored.stages);
      setDraft(stored.currentStage === "reflection" ? stored.reflection : "");
      return;
    }

    persist({
      claim: initialClaim,
      context: initialContext,
      currentStage: "foundation",
      reflection: "",
      stages: [],
    });
  }, [initialClaim, initialContext, persist, sessionId]);

  useEffect(() => {
    const expectedStage = reasoningStages[stages.length];

    if (expectedStage === currentStage && !currentTurn && !isLoading && claim) {
      void loadTurn(currentStage, stages);
    }
  }, [claim, currentStage, currentTurn, isLoading, loadTurn, stages]);

  const retry = useCallback(() => {
    void loadTurn(currentStage, stages);
  }, [currentStage, loadTurn, stages]);

  const submit = useCallback(async () => {
    const learnerResponse = draft.trim();

    if (learnerResponse.length < 8) {
      setError("Write a little more before continuing so ThinkCourt can build on your reasoning.");
      return { complete: false };
    }

    if (!currentTurn) {
      return { complete: false };
    }

    const completed: CompletedStage = {
      acknowledgement: currentTurn.acknowledgement,
      coachPrompt: currentTurn.question,
      learnerResponse,
      stage: currentStage,
      summary: currentTurn.stageSummary,
    };
    const nextStages = [...stages, completed];
    const nextStage = reasoningStages[nextStages.length];

    setStages(nextStages);
    setDraft("");
    setCurrentTurn(null);
    setError(null);

    if (!nextStage) {
      // #region agent log
      fetch("http://127.0.0.1:7407/ingest/2aa5b542-c8ae-404c-a744-e2be0bea4eac", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "fb632f" },
        body: JSON.stringify({
          sessionId: "fb632f",
          location: "use-reasoning-session.ts:submit-complete",
          message: "Reflection submit completing session",
          data: {
            stagesCount: nextStages.length,
            reflectionLen: learnerResponse.length,
            stageNames: nextStages.map((s) => s.stage),
            ackLengths: nextStages.map((s) => s.acknowledgement.length),
          },
          timestamp: Date.now(),
          hypothesisId: "C-D",
        }),
      }).catch(() => {});
      // #endregion
      persist({ claim, context, currentStage, reflection: learnerResponse, stages: nextStages });
      return { complete: true };
    }

    setCurrentStage(nextStage);
    persist({ claim, context, currentStage: nextStage, reflection: "", stages: nextStages });
    return { complete: false };
  }, [claim, context, currentStage, currentTurn, draft, persist, stages]);

  return {
    claim,
    context,
    currentStage,
    currentTurn,
    draft,
    error,
    isLoading,
    sessionId,
    stageMessage: getStageMessage(currentStage),
    stages,
    retry,
    setDraft,
    submit,
  };
}
