const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;

type Entry = {
  count: number;
  expiresAt: number;
};

const store = new Map<string, Entry>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.expiresAt < now) {
    store.set(key, {
      count: 1,
      expiresAt: now + WINDOW_MS,
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      reset: now + WINDOW_MS,
    };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      reset: existing.expiresAt,
    };
  }

  existing.count += 1;
  store.set(key, existing);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    reset: existing.expiresAt,
  };
}