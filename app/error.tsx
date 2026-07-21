"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  void error;
  return (
    <html lang="en">
      <body className="bg-[#f7f8fc] font-sans text-[#172033]">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
          <p className="text-sm font-bold tracking-[0.12em] text-[#4b4aa8] uppercase">ThinkCourt</p>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em]">Something interrupted the session.</h1>
          <p className="mt-4 text-base leading-7 text-[#556176]">Your most recent saved reasoning is kept in this browser. You can try the page again or begin a new session.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button className="min-h-12 rounded-[10px] bg-[#172033] px-5 text-sm font-bold text-white" onClick={() => reset()} type="button">Try again</button><Link className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#d9dfea] bg-white px-5 text-sm font-bold" href="/start">Start a session</Link></div>
        </main>
      </body>
    </html>
  );
}
