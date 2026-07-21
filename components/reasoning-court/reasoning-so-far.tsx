import type { CompletedStage } from "@/types/reasoning";

type ReasoningSoFarProps = {
  stages: CompletedStage[];
};

export function ReasoningSoFar({ stages }: ReasoningSoFarProps) {
  return (
    <aside className="rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/90 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:p-6">
      <h2 className="text-sm font-bold tracking-[-0.01em] text-slate-100">Your reasoning so far</h2>
      {stages.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Your key ideas will gather here as you move through the session.
        </p>
      ) : (
        <ol className="mt-4 space-y-4">
          {stages.map((stage) => (
            <li
              className="border-l-2 border-[color:color-mix(in_srgb,var(--color-indigo)_28%,transparent)] pl-3"
              key={stage.stage}
            >
              <p className="text-indigo text-xs font-bold tracking-[0.1em] uppercase">
                {stage.stage}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{stage.summary}</p>
            </li>
          ))}
        </ol>
      )}
    </aside>
  );
}
