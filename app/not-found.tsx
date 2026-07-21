import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-bold tracking-[0.12em] text-indigo uppercase">ThinkCourt</p>
      <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-ink">This page is not part of the Court.</h1>
      <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">Return to ThinkCourt and bring an idea worth examining.</p>
      <Link className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] bg-ink px-5 text-sm font-bold text-white hover:bg-[var(--color-ink-hover)]" href="/">Return home</Link>
    </main>
  );
}
