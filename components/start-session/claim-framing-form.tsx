import { type FormEvent, useId, useMemo, useState } from "react";

type ClaimFramingFormProps = {
  initialClaim?: string;
  initialContext?: string;
  mode: "guided" | "own";
  onBack: () => void;
  onContinue: (claim: string, context: string, mode: "guided" | "own") => void;
};

const maximumClaimLength = 500;
const maximumContextLength = 600;

function getClarityCue(claim: string) {
  const normalizedClaim = claim.trim();

  if (normalizedClaim.length === 0) {
    return "A useful claim takes a position that someone could reasonably examine or challenge.";
  }

  if (normalizedClaim.length < 35) {
    return "Try adding what should change, for whom, or why the position matters.";
  }

  if (/\b(better|worse|good|bad|always|never)\b/i.test(normalizedClaim)) {
    return "Consider naming the context or standard you would use to judge this broad term.";
  }

  if (
    !/\b(should|shouldn't|should not|is|are|can|cannot|must|will|would)\b/i.test(normalizedClaim)
  ) {
    return "Try phrasing this as a position or prediction that can be examined, rather than a topic.";
  }

  return "This is a clear starting position. ThinkCourt will help you examine what it depends on.";
}

export function ClaimFramingForm({
  initialClaim = "",
  initialContext = "",
  mode,
  onBack,
  onContinue,
}: ClaimFramingFormProps) {
  const claimId = useId();
  const contextId = useId();
  const [claim, setClaim] = useState(initialClaim);
  const [context, setContext] = useState(initialContext);
  const [submitted, setSubmitted] = useState(false);
  const clarityCue = useMemo(() => getClarityCue(claim), [claim]);
  const isClaimValid = claim.trim().length >= 16;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!isClaimValid) {
      return;
    }

    onContinue(claim.trim(), context.trim(), mode);
  }

  return (
    <section aria-labelledby="claim-framing-title" className="landing-fade-in mx-auto max-w-3xl">
      <button
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-slate-100"
        onClick={onBack}
        type="button"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>
      <p className="text-indigo mt-8 text-sm font-bold tracking-[0.12em] uppercase">
        Frame your claim
      </p>
      <h1
        className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-slate-100 sm:text-5xl"
        id="claim-framing-title"
      >
        What position would you like to examine?
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        State a belief, policy, prediction, or decision in your own words. ThinkCourt will guide the
        reasoning process; it will not decide the position for you.
      </p>

      <form className="mt-10 space-y-7" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="text-sm font-bold text-slate-100" htmlFor={claimId}>
            Your claim
          </label>
          <p className="mt-1 text-sm leading-6 text-slate-400" id={`${claimId}-hint`}>
            Be specific enough that someone could reasonably question, support, or refine it.
          </p>
          <textarea
            aria-describedby={`${claimId}-hint ${claimId}-cue${submitted && !isClaimValid ? ` ${claimId}-error` : ""}`}
            aria-invalid={submitted && !isClaimValid}
            className="mt-3 min-h-40 w-full resize-y rounded-[var(--radius-input)] border border-slate-700 bg-slate-950/95 px-4 py-4 text-base leading-7 text-slate-100 transition-[border-color,box-shadow] outline-none placeholder:text-slate-500 focus:border-indigo-400 focus:ring-3 focus:ring-[rgba(99,102,241,0.18)]"
            id={claimId}
            maxLength={maximumClaimLength}
            onChange={(event) => setClaim(event.target.value)}
            placeholder="For example: Universities should allow AI in coursework when assignments still require independent understanding."
            value={claim}
          />
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <p
              className="flex max-w-xl gap-2 text-sm leading-6 text-slate-400"
              id={`${claimId}-cue`}
            >
              <span aria-hidden="true" className="bg-amber mt-2 size-1.5 shrink-0 rounded-full" />
              <span>
                <strong className="font-bold text-slate-100">Clarity cue:</strong> {clarityCue}
              </span>
            </p>
            <span className="shrink-0 text-sm text-slate-400">
              {claim.length}/{maximumClaimLength}
            </span>
          </div>
          {submitted && !isClaimValid ? (
            <p
              className="mt-3 text-sm font-semibold text-rose-300"
              id={`${claimId}-error`}
              role="alert"
            >
              Write at least 16 characters so ThinkCourt has a position to examine.
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-bold text-slate-100" htmlFor={contextId}>
            Why does this matter to you?{" "}
            <span className="font-medium text-slate-400">Optional</span>
          </label>
          <p className="mt-1 text-sm leading-6 text-slate-400" id={`${contextId}-hint`}>
            A little context can help make the questions more relevant to your situation.
          </p>
          <textarea
            aria-describedby={`${contextId}-hint`}
            className="mt-3 min-h-28 w-full resize-y rounded-[var(--radius-input)] border border-slate-700 bg-slate-950/95 px-4 py-4 text-base leading-7 text-slate-100 transition-[border-color,box-shadow] outline-none placeholder:text-slate-500 focus:border-indigo-400 focus:ring-3 focus:ring-[rgba(99,102,241,0.18)]"
            id={contextId}
            maxLength={maximumContextLength}
            onChange={(event) => setContext(event.target.value)}
            placeholder="For example: I am deciding how AI should be used in a course I am taking."
            value={context}
          />
          <p className="mt-2 text-right text-sm text-slate-400">
            {context.length}/{maximumContextLength}
          </p>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-slate-700 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            className="min-h-11 rounded-[var(--radius-button)] px-4 text-sm font-bold text-slate-300 transition-colors hover:bg-slate-900/80 hover:text-slate-100"
            onClick={onBack}
            type="button"
          >
            Choose a different path
          </button>
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-blue-600 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            type="submit"
          >
            Enter the Reasoning Court
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </section>
  );
}
