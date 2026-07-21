import { reasoningStages, type ReasoningStage } from "@/types/reasoning";

const labels: Record<ReasoningStage, string> = {
  challenge: "Challenge",
  evidence: "Evidence",
  foundation: "Foundation",
  reflection: "Reflection",
};

type StageProgressProps = {
  currentStage: ReasoningStage;
  completedCount: number;
};

export function StageProgress({ currentStage, completedCount }: StageProgressProps) {
  return (
    <nav
      aria-label="Reasoning session progress"
      className="rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/90 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:p-4"
    >
      <ol className="flex min-w-max items-center justify-between gap-2 sm:gap-3">
        {reasoningStages.map((stage, index) => {
          const isCompleted = index < completedCount;
          const isCurrent = stage === currentStage;

          return (
            <li className="flex items-center gap-2" key={stage}>
              <span
                aria-current={isCurrent ? "step" : undefined}
                className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-[var(--color-success)] text-white shadow-[0_4px_10px_rgb(36_122_85_/_0.22)]"
                    : isCurrent
                      ? "bg-indigo text-white shadow-[0_4px_12px_rgb(75_74_168_/_0.28)]"
                      : "border border-slate-700 bg-slate-950 text-slate-400"
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </span>
              <span
                className={`text-sm font-bold transition-colors ${isCurrent ? "text-slate-100" : "text-slate-400"}`}
              >
                {labels[stage]}
              </span>
              {index < reasoningStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={`h-px w-4 sm:w-8 ${isCompleted ? "bg-[var(--color-success)]" : "bg-slate-700"}`}
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
