export const reasoningStages = ["foundation", "evidence", "challenge", "reflection"] as const;

export type ReasoningStage = (typeof reasoningStages)[number];

export type CompletedStage = {
  acknowledgement: string;
  coachPrompt: string;
  learnerResponse: string;
  stage: ReasoningStage;
  summary: string;
};

export type CoachingChallenge = {
  assumption: string;
  argument: string;
  title: string;
};

export type CoachingTurn = {
  acknowledgement: string;
  challenge?: CoachingChallenge;
  question: string;
  questionPurpose: string;
  stageSummary: string;
  thinkingStarters: string[];
};

export type GeneratedReasoningStage = {
  introduction: string;
  question: string;
  why: string;
};

export type GeneratedReasoningSession = Record<ReasoningStage, GeneratedReasoningStage>;

export type ReasoningDimension = {
  label: "Developing" | "Practiced" | "Strongly demonstrated";
  name: "Claim clarity" | "Assumption awareness" | "Evidence quality" | "Alternative views";
  rationale: string;
};

export type ReasoningSnapshot = {
  demonstratedStrength: string;
  dimensions: ReasoningDimension[];
  nextPracticeGoal: string;
  refinedClaim: string;
  suggestedExercise: string;
};

export type StoredSession = {
  claim: string;
  context: string;
  currentStage: ReasoningStage;
  id: string;
  reflection: string;
  reasoningSession?: GeneratedReasoningSession;
  snapshot?: ReasoningSnapshot;
  stages: CompletedStage[];
  updatedAt: string;
};
