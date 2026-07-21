import { z } from "zod";

import { reasoningStages } from "@/types/reasoning";

export const completedStageSchema = z.object({
  acknowledgement: z.string().min(1).max(2000),
  coachPrompt: z.string().min(1).max(1000),
  learnerResponse: z.string().min(1).max(2000),
  stage: z.enum(reasoningStages),
  summary: z.string().min(1).max(1200),
});

export const coachingRequestSchema = z.object({
  claim: z.string().trim().min(16).max(500),
  context: z.string().trim().max(600),
  history: z.array(completedStageSchema).max(4),
  stage: z.enum(reasoningStages),
});

export const coachingTurnSchema = z.object({
  acknowledgement: z.string().min(1).max(600),
  challenge: z
    .object({
      assumption: z.string().min(1).max(500),
      argument: z.string().min(1).max(900),
      title: z.string().min(1).max(140),
    })
    .nullable(),
  question: z.string().min(1).max(900),
  questionPurpose: z.string().min(1).max(300),
  stageSummary: z.string().min(1).max(900),
  thinkingStarters: z.array(z.string().min(1).max(180)).min(1).max(3),
});

export const snapshotRequestSchema = z.object({
  claim: z.string().trim().min(16).max(500),
  context: z.string().trim().max(600),
  reflection: z.string().trim().min(1).max(2000),
  stages: z.array(completedStageSchema).length(4),
});

export const snapshotSchema = z.object({
  demonstratedStrength: z.string().min(1).max(600),
  dimensions: z
    .array(
      z.object({
        label: z.enum(["Developing", "Practiced", "Strongly demonstrated"]),
        name: z.enum([
          "Claim clarity",
          "Assumption awareness",
          "Evidence quality",
          "Alternative views",
        ]),
        rationale: z.string().min(1).max(500),
      }),
    )
    .length(4),
  nextPracticeGoal: z.string().min(1).max(600),
  refinedClaim: z.string().min(1).max(700),
  suggestedExercise: z.string().min(1).max(500),
});
