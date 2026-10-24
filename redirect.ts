/** Only allow same-origin, non-protocol-relative paths as post-login redirects. */
export function sanitizeRedirect(value: unknown, fallback = "/dashboard"): string {
  if (typeof value !== "string" || value.length === 0) return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) return fallback;
  if (value.startsWith("/auth")) return fallback;
  return value;
}
