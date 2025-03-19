import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPort = process.env.EMAIL_PORT;
const emailHost = process.env.EMAIL_HOST;
const emailPass = process.env.EMAIL_PASS;
const emailUser = process.env.EMAIL_USER;
const emailSecure = process.env.EMAIL_SECURE === "true";
const emailService = process.env.EMAIL_SERVICE;

if (!emailPort || !emailHost || !emailPass || !emailUser || !emailService) {
  throw new Error("Missing required email environment variables!");
}

export const sendMail = async (name, phone = "", email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: emailHost,
      service: emailService,
      port: Number(emailPort),
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const emailTemplate = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { width: 100%; max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 10px; }
          .header { text-align: center; background: #007bff; color: white; padding: 15px; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; line-height: 1.6; color: #333; }
          .footer { text-align: center; font-size: 12px; color: #666; padding: 10px; border-top: 1px solid #ddd; margin-top: 20px; }
          .button { display: inline-block; padding: 10px 20px; color: white; background: #007bff; text-decoration: none; border-radius: 5px; margin-top: 10px; }
          .button:hover { background: #0056b3; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Message from Your Portfolio</h2>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f8f9fa; padding: 10px; border-radius: 5px;">${message}</p>
            <p>Reply directly to <a href="mailto:${email}">${email}</a>.</p>
          </div>
          <div class="footer">
            <p>Thank you for using my portfolio contact form!</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailData = {
      from: emailUser,
      to: emailUser,
      subject: `New message from ${name}`,
      html: emailTemplate,
    };

    const response = await transporter.sendMail(mailData);
    return response;
  } catch (error) {
    console.error("Email error:", error);
    if (error.code === "EENVELOPE") {
      throw new Error("Invalid email address format");
    }
    throw new Error("Failed to send email");
  }
};

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();
    if (!name.trim() || !email.trim() || !message.trim()) {
      throw new Error("Please fill all fields properly");
    }
    await sendMail(name, phone, email, message);
    return NextResponse.json(
      { message: "Thank you for contacting me.\nWill get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Something went wrong!" },
      { status: 500 }
    );
  }
}
