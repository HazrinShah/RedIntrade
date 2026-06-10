import { NextResponse } from "next/server";

/**
 * Next.js Middleware — runs on every request BEFORE it hits any route.
 * Provides:
 *  - Block malicious User-Agents (known scanners/bots)
 *  - Block path traversal attempts
 *  - Block common exploit probes (wp-admin, .env, shell, etc.)
 *  - Strip sensitive request headers before forwarding
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // ── 1. BLOCK MALICIOUS PATH PROBES ───────────────────────────────────────────
  const blockedPaths = [
    /\/\.env/i,                    // .env file access
    /\/\.git/i,                    // .git folder access
    /wp-admin/i,                   // WordPress admin probes
    /wp-login/i,                   // WordPress login probes
    /wp-config/i,                  // WordPress config probes
    /phpmyadmin/i,                 // phpMyAdmin probes
    /admin\.php/i,                 // Generic admin PHP
    /shell\.php/i,                 // PHP shell
    /eval\(/i,                     // Eval injection in URL
    /base64_/i,                    // Base64 decode injection
    /\.\.\/|\.\.%2F|%2e%2e/i,    // Path traversal
    /etc\/passwd/i,               // Linux password file probe
    /etc\/shadow/i,               // Linux shadow file probe
    /\/proc\//i,                  // Linux proc probe
    /xmlrpc\.php/i,               // XML-RPC attack vector
    /\.(bak|sql|zip|tar|gz|log)$/i, // Backup/data file probes
  ];

  for (const pattern of blockedPaths) {
    if (pattern.test(pathname)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // ── 2. BLOCK MALICIOUS QUERY STRING PATTERNS ─────────────────────────────────
  const queryString = request.nextUrl.search || "";
  const blockedQueryPatterns = [
    /<script/i,           // XSS via query
    /javascript:/i,       // JavaScript protocol injection
    /onload=/i,           // Event handler injection
    /onerror=/i,          // Event handler injection
    /UNION.*SELECT/i,     // SQL injection
    /DROP.*TABLE/i,       // SQL injection
    /INSERT.*INTO/i,      // SQL injection
    /SELECT.*FROM/i,      // SQL injection
    /\bexec\b.*\(/i,      // Code execution attempt
  ];

  for (const pattern of blockedQueryPatterns) {
    if (pattern.test(decodeURIComponent(queryString))) {
      return new NextResponse("Bad Request", { status: 400 });
    }
  }

  // ── 3. BLOCK KNOWN MALICIOUS USER-AGENTS ─────────────────────────────────────
  const blockedAgents = [
    /sqlmap/i,
    /nikto/i,
    /nessus/i,
    /openvas/i,
    /nmap/i,
    /masscan/i,
    /zgrab/i,
    /python-requests\/[01]\./i,   // Very old Python scanners
    /go-http-client\/1\.1/i,      // Go mass scanner pattern
    /libwww-perl/i,
    /curl\/[0-6]\./i,             // Curl versions used in old scanners
    /zgrab/i,
    /WPScan/i,
    /dirbuster/i,
    /gobuster/i,
    /nuclei/i,
  ];

  for (const pattern of blockedAgents) {
    if (pattern.test(userAgent)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // ── 4. BLOCK EMPTY USER-AGENT ON API ROUTES ───────────────────────────────────
  // Legitimate browsers always send a user-agent
  if (pathname.startsWith("/api/") && !userAgent) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 5. CONTINUE WITH SECURITY HEADERS ADDED ──────────────────────────────────
  const response = NextResponse.next();

  // Extra headers added at middleware level (supplements next.config.mjs headers)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Remove server identification headers
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");

  return response;
}

export const config = {
  // Run middleware on all routes EXCEPT static files and Next.js internals
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
