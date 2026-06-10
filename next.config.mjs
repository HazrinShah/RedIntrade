/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only allow images from trusted domains
    domains: [],
  },

  async headers() {
    return [
      {
        // Apply security headers to ALL routes
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing attacks
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking — deny framing entirely
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Block pages from loading when XSS is detected (legacy browsers)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer info sent on navigation
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser features (camera, mic, geolocation, etc.)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Force HTTPS for 1 year (only effective when deployed over HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Content Security Policy — whitelist trusted sources only
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + Google Fonts inline scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.instagram.com",
              // Styles: self + Google Fonts + FontAwesome inline
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
              // Fonts: self + Google Fonts + FontAwesome CDN
              "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              // Images: self + data URIs (for inline base64)
              "img-src 'self' data: https: blob:",
              // Connect (fetch/XHR): self only
              "connect-src 'self'",
              // Frames: only Facebook & Google Maps embeds
              "frame-src https://www.facebook.com https://www.google.com https://www.instagram.com",
              // Media: self only
              "media-src 'self'",
              // Object tags: none
              "object-src 'none'",
              // Base URI: self only (prevents base tag injection)
              "base-uri 'self'",
              // Form submissions: self only
              "form-action 'self'",
              // Upgrade insecure requests
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Remove server fingerprinting
          {
            key: "X-Powered-By",
            value: "",
          },
          // Disable DNS prefetching by external resources
          {
            key: "X-DNS-Prefetch-Control",
            value: "off",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
