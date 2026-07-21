import type { CompletedStage, ReasoningStage } from "@/types/reasoning";

import { coreCoachInstructions } from "@/lib/prompts/core";

const stageInstructions: Record<ReasoningStage, string> = {
  foundation:
    "Help clarify the learner's claim and surface one consequential assumption. Ask what would need to be true for the claim to hold.",
  evidence:
    "Examine whether the learner's support is relevant and sufficient. Help distinguish an example, assertion, and evidence without fact-checking.",
  challenge:
    "Present the strongest fair counterargument, not a caricature. Identify the key trade-off and one assumption it pressures.",
  reflection:
    "Invite the learner to articulate what changed, what remains uncertain, and what evidence would improve their confidence.",
};

export function buildCoachingPrompt({
  claim,
  context,
  history,
  stage,
}: {
  claim: string;
  context: string;
  history: CompletedStage[];
  stage: ReasoningStage;
}) {
  const priorWork = history.length
    ? history
        .map(
          (entry) =>
            `${entry.stage}: learner said "${entry.learnerResponse}". Summary: ${entry.summary}`,
        )
        .join("\n")
    : "No previous stage has been completed.";

  return `${coreCoachInstructions}

Current stage: ${stage}.
Stage goal: ${stageInstructions[stage]}
Learner's opening claim: ${claim}
Learner context: ${context || "No additional context supplied."}
Prior reasoning work:\n${priorWork}

Return a JSON object with acknowledgement, question, questionPurpose, thinkingStarters, stageSummary, and challenge.
For foundation, evidence, and reflection, set challenge to null. For challenge, include a concise challenge object with title, argument, and assumption.`;
}

export function buildSnapshotPrompt({
  claim,
  context,
  reflection,
  stages,
}: {
  claim: string;
  context: string;
  reflection: string;
  stages: CompletedStage[];
}) {
  return `${coreCoachInstructions}

Create a supportive Reasoning Snapshot from this session. Never score intelligence or declare the conclusion objectively correct.
Opening claim: ${claim}
Context: ${context || "None"}
Learner reflection: ${reflection}
Completed work:\n${stages
    .map((stage) => `${stage.stage}: ${stage.learnerResponse} | ${stage.summary}`)
    .join("\n")}

Return JSON with refinedClaim, dimensions, demonstratedStrength, nextPracticeGoal, and suggestedExercise.
dimensions must contain exactly four entries named Claim clarity, Assumption awareness, Evidence quality, Alternative views. Use only Developing, Practiced, or Strongly demonstrated for labels.`;
}
