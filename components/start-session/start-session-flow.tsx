"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ClaimFramingForm } from "@/components/start-session/claim-framing-form";
import { GuidedScenarioList } from "@/components/start-session/guided-scenario-list";
import { guidedScenarios, type GuidedScenario } from "@/components/start-session/scenarios";
import { SessionPathChooser } from "@/components/start-session/session-path-chooser";

type StartStep = "choose" | "claim" | "scenarios";

type Draft = {
  claim: string;
  context: string;
};

type StartMode = "guided" | "own";

const emptyDraft: Draft = {
  claim: "",
  context: "",
};

export function StartSessionFlow() {
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [mode, setMode] = useState<StartMode>("own");
  const [step, setStep] = useState<StartStep>("choose");

  function selectScenario(scenario: GuidedScenario) {
    setDraft({ claim: scenario.claim, context: scenario.context });
    setMode("guided");
    setStep("claim");
  }

  function continueToCourt(claim: string, context: string, selectedMode: StartMode) {
    const params = new URLSearchParams({ claim, mode: selectedMode });

    if (context) {
      params.set("context", context);
    }

    const sessionId = crypto.randomUUID();
    router.push(`/session/${sessionId}?${params.toString()}`);
  }

  if (step === "scenarios") {
    return (
      <GuidedScenarioList
        onBack={() => setStep("choose")}
        onSelect={selectScenario}
        scenarios={guidedScenarios}
      />
    );
  }

  if (step === "claim") {
    return (
      <ClaimFramingForm
        initialClaim={draft.claim}
        initialContext={draft.context}
        mode={mode}
        onBack={() => setStep("choose")}
        onContinue={continueToCourt}
      />
    );
  }

  return (
    <SessionPathChooser
      onChooseClaim={() => {
        setDraft(emptyDraft);
        setStep("claim");
      }}
      onChooseScenario={() => setStep("scenarios")}
    />
  );
}
