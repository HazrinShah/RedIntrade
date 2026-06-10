/**
 * Simple in-memory rate limiter for API routes.
 * Protects against brute-force attacks and spam.
 *
 * NOTE: This is suitable for single-instance deployments (Laragon/VPS).
 * For multi-instance/serverless deployments, use Redis-backed rate limiting.
 */

// Store: { ip -> { count, resetAt } }
const store = new Map();

// Cleanup expired entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of store.entries()) {
    if (now > val.resetAt) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * @param {Request} request
 * @param {{ limit: number, windowMs: number }} options
 * @returns {{ success: boolean, remaining: number, resetAt: number }}
 */
export function rateLimit(request, { limit = 5, windowMs = 60_000 } = {}) {
  // Get client IP from headers (supports Nginx/proxy setups)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const key = `${ip}`;

  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    // First request or window expired — reset
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (entry.count >= limit) {
    // Over the limit
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  // Increment count
  entry.count += 1;
  return { success: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}
