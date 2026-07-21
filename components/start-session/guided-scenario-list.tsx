import type { GuidedScenario } from "@/components/start-session/scenarios";

type GuidedScenarioListProps = {
  onBack: () => void;
  onSelect: (scenario: GuidedScenario) => void;
  scenarios: GuidedScenario[];
};

export function GuidedScenarioList({ onBack, onSelect, scenarios }: GuidedScenarioListProps) {
  return (
    <section aria-labelledby="guided-case-title" className="landing-fade-in mx-auto max-w-3xl">
      <button
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-slate-100"
        onClick={onBack}
        type="button"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>
      <p className="mt-8 text-sm font-bold tracking-[0.12em] text-indigo-200 uppercase">
        Guided cases
      </p>
      <h1
        className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-slate-100 sm:text-5xl"
        id="guided-case-title"
      >
        Choose a question to examine.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Each case begins with a defensible starting position. You will still decide how to test,
        qualify, or revise it.
      </p>

      <div className="mt-10 space-y-4">
        {scenarios.map((scenario) => (
          <button
            className="group flex w-full flex-col items-start rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/95 p-5 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6"
            key={scenario.id}
            onClick={() => onSelect(scenario)}
            type="button"
          >
            <span>
              <span className="text-xs font-bold tracking-[0.12em] text-teal-300 uppercase">
                {scenario.category}
              </span>
              <span className="mt-2 block text-lg font-bold tracking-[-0.025em] text-slate-100">
                {scenario.title}
              </span>
              <span className="mt-2 block max-w-xl text-sm leading-6 text-slate-400">
                {scenario.description}
              </span>
            </span>
            <span className="mt-4 shrink-0 text-sm font-bold text-teal-300 sm:mt-0">
              Use this case <span aria-hidden="true">→</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
