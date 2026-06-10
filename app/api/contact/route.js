import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rateLimit";
import { validateContactForm } from "@/lib/sanitize";

export async function POST(request) {
  // ── 1. RATE LIMITING ────────────────────────────────────────────────────────
  // Allow max 5 submissions per IP per 10 minutes
  const { success: allowed, resetAt } = rateLimit(request, {
    limit: 5,
    windowMs: 10 * 60 * 1000,
  });

  if (!allowed) {
    const retryAfterSecs = Math.ceil((resetAt - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSecs),
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // ── 2. CONTENT-TYPE CHECK ────────────────────────────────────────────────────
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 415 }
    );
  }

  // ── 3. BODY PARSING ──────────────────────────────────────────────────────────
  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  // ── 4. BODY SIZE GUARD ───────────────────────────────────────────────────────
  // Reject suspiciously oversized payloads
  const bodyStr = JSON.stringify(rawBody);
  if (bodyStr.length > 10_000) {
    return NextResponse.json(
      { error: "Request payload too large." },
      { status: 413 }
    );
  }

  // ── 5. INPUT VALIDATION & SANITIZATION ──────────────────────────────────────
  const { name, email, service, message } = rawBody;
  const { valid, errors, data } = validateContactForm({ name, email, service, message });

  if (!valid) {
    return NextResponse.json(
      { error: errors[0] }, // Return first error to the user
      { status: 422 }
    );
  }

  // ── 6. SEND EMAIL ─────────────────────────────────────────────────────────────
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER || "hazrinshah0406@gmail.com";

  // Simulation mode (no SMTP configured)
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("=== CONTACT FORM SUBMISSION (SIMULATION MODE) ===");
    console.log(`To: ${receiver}`);
    console.log(`From Name: ${data.name}`);
    console.log(`From Email: ${data.email}`);
    console.log(`Service: ${data.service}`);
    console.log(`Message:\n${data.message}`);
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Redintrade Website" <${smtpUser}>`,
      replyTo: data.email,
      to: receiver,
      subject: `New Enquiry [${data.service}] from ${data.name}`,
      text:
        `New message from the contact form:\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Service: ${data.service}\n\n` +
        `Message:\n${data.message}`,
      html:
        `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">` +
        `<h2 style="color: #C8102E; border-bottom: 2px solid #C8102E; padding-bottom: 10px;">New Enquiry</h2>` +
        `<p><strong>Name:</strong> ${data.name}</p>` +
        `<p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>` +
        `<p><strong>Service:</strong> ${data.service}</p>` +
        `<div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #C8102E;">` +
        `<strong>Message:</strong><br/>` +
        `<p style="white-space: pre-wrap; margin-top: 10px; line-height: 1.6;">${data.message}</p>` +
        `</div></div>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Block all other HTTP methods (GET, PUT, DELETE, etc.)
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
export async function PATCH() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
