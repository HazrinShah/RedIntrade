/**
 * Input sanitization & validation utilities.
 * Protects against: XSS injection, HTML injection, SQL injection patterns,
 * excessively long inputs, and invalid email formats.
 */

/**
 * Strip HTML tags and dangerous characters from a string.
 * @param {string} str
 * @returns {string}
 */
export function sanitizeString(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/**
 * Validate email address format.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // RFC 5322 simplified regex
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Detect common SQL injection patterns.
 * @param {string} str
 * @returns {boolean}
 */
export function hasSQLInjection(str) {
  if (typeof str !== "string") return false;
  const patterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
    /(--|;|\/\*|\*\/|xp_)/gi,
    /('|('')|`)/g,
  ];
  return patterns.some((pattern) => pattern.test(str));
}

/**
 * Validate and sanitize contact form fields.
 * Returns { valid: boolean, errors: string[], data: object }
 */
export function validateContactForm({ name, email, service, message }) {
  const errors = [];

  // --- Name ---
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  } else if (name.length > 100) {
    errors.push("Name must not exceed 100 characters.");
  } else if (hasSQLInjection(name)) {
    errors.push("Name contains invalid characters.");
  }

  // --- Email ---
  if (!email) {
    errors.push("Email is required.");
  } else if (!isValidEmail(email)) {
    errors.push("Please provide a valid email address.");
  }

  // --- Service (optional but constrain to known values) ---
  const allowedServices = [
    "seminar", "drama", "events", "gifts", "other", ""
  ];
  if (service && !allowedServices.includes(service)) {
    errors.push("Invalid service selection.");
  }

  // --- Message ---
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  } else if (message.length > 2000) {
    errors.push("Message must not exceed 2000 characters.");
  }

  if (errors.length > 0) {
    return { valid: false, errors, data: null };
  }

  // Return sanitized data
  return {
    valid: true,
    errors: [],
    data: {
      name: sanitizeString(name),
      email: email.trim().toLowerCase(),
      service: service || "General",
      message: sanitizeString(message),
    },
  };
}
