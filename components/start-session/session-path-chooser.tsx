import { CompassIcon, ScaleIcon } from "@/components/landing/icons";

type SessionPathChooserProps = {
  onChooseClaim: () => void;
  onChooseScenario: () => void;
};

export function SessionPathChooser({ onChooseClaim, onChooseScenario }: SessionPathChooserProps) {
  return (
    <section aria-labelledby="start-session-title" className="landing-fade-in mx-auto max-w-3xl">
      <p className="text-sm font-bold tracking-[0.12em] text-indigo-200 uppercase">
        Start a reasoning session
      </p>
      <h1
        className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-slate-100 sm:text-5xl"
        id="start-session-title"
      >
        Bring an idea worth examining.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Choose your own position or start with a guided case. ThinkCourt will help you inspect the
        reasoning—not decide the answer for you.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <button
          className="group flex min-h-72 flex-col items-start rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/95 p-6 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)] focus-visible:outline-offset-4 sm:p-7"
          onClick={onChooseClaim}
          type="button"
        >
          <span className="flex size-12 items-center justify-center rounded-[var(--radius-input)] bg-slate-900 text-teal-300">
            <CompassIcon className="size-6" />
          </span>
          <span className="mt-8 text-xl font-bold tracking-[-0.03em] text-slate-100">
            Bring your own claim
          </span>
          <span className="mt-3 max-w-xs text-base leading-7 text-slate-400">
            Start with a belief, position, or decision you genuinely want to think through.
          </span>
          <span className="mt-auto pt-7 text-sm font-bold text-teal-300">
            Write a claim <span aria-hidden="true">→</span>
          </span>
        </button>

        <button
          className="group flex min-h-72 flex-col items-start rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/95 p-6 text-left transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)] focus-visible:outline-offset-4 sm:p-7"
          onClick={onChooseScenario}
          type="button"
        >
          <span className="flex size-12 items-center justify-center rounded-[var(--radius-input)] bg-slate-900 text-teal-300">
            <ScaleIcon className="size-6" />
          </span>
          <span className="mt-8 text-xl font-bold tracking-[-0.03em] text-slate-100">
            Try a guided case
          </span>
          <span className="mt-3 max-w-xs text-base leading-7 text-slate-400">
            Pick a carefully framed issue and focus immediately on the quality of your reasoning.
          </span>
          <span className="mt-auto pt-7 text-sm font-bold text-teal-300">
            Choose a case <span aria-hidden="true">→</span>
          </span>
        </button>
      </div>

      <p className="mt-7 text-center text-sm leading-6 text-slate-400">
        There are no right answers here—only ideas worth examining.
      </p>
    </section>
  );
}
