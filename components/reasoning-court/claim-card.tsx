type ClaimCardProps = {
  claim: string;
  context: string;
};

export function ClaimCard({ claim, context }: ClaimCardProps) {
  return (
    <aside className="rounded-[var(--radius-card)] border border-slate-700 bg-slate-950/95 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.24)] sm:p-6">
      <p className="text-xs font-bold tracking-[0.12em] text-indigo-200 uppercase">Your case</p>
      <p className="mt-3 font-serif text-xl leading-8 text-slate-100">“{claim}”</p>
      {context ? (
        <p className="mt-4 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-400">
          {context}
        </p>
      ) : null}
    </aside>
  );
}
