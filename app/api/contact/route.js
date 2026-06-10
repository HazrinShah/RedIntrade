import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || "redintrade@gmail.com";

    // If SMTP details are not configured, run in Simulation Mode
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("=== CONTACT FORM SUBMISSION (SIMULATION MODE) ===");
      console.log(`To: ${receiver}`);
      console.log(`From Name: ${name}`);
      console.log(`From Email: ${email}`);
      console.log(`Service: ${service || "Not specified"}`);
      console.log(`Message:\n${message}`);
      console.log("=================================================");

      return NextResponse.json({
        success: true,
        message: "Message received successfully (Simulation Mode).",
      });
    }

    // Set up Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: receiver,
      subject: `New Contact Form Inquiry: ${service || "General"}`,
      text: `You have received a new message from the contact form:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Service: ${service || "General inquiry"}\n\n` +
            `Message:\n${message}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">` +
            `<h2 style="color: #C8102E; border-bottom: 2px solid #C8102E; padding-bottom: 10px;">New Inquiry</h2>` +
            `<p><strong>Name:</strong> ${name}</p>` +
            `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` +
            `<p><strong>Service:</strong> ${service || "General Inquiry"}</p>` +
            `<div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #C8102E;">` +
            `<strong>Message:</strong><br/>` +
            `<p style="white-space: pre-wrap; margin-top: 10px; line-height: 1.6;">${message}</p>` +
            `</div>` +
            `</div>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again later." },
      { status: 500 }
    );
  }
}
