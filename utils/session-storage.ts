import type { StoredSession } from "@/types/reasoning";

const storagePrefix = "thinkcourt:session:";

export function loadStoredSession(sessionId: string): StoredSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(`${storagePrefix}${sessionId}`);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as StoredSession;
  } catch {
    window.localStorage.removeItem(`${storagePrefix}${sessionId}`);
    return null;
  }
}

export function saveStoredSession(session: StoredSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(`${storagePrefix}${session.id}`, JSON.stringify(session));
}
