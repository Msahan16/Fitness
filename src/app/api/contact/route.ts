import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("Environment variables check:", {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD ? "****" : "missing",
      receiver: process.env.RECEIVER_EMAIL
    });

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("Transporter verified successfully");
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      throw verifyError;
    }

    const mailOptions = {
      from: `"Fitness Contact Form" <${process.env.MAIL_USERNAME}@mailtrap.io>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent info:", info);

    return NextResponse.json({ message: "Email sent successfully", info }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error.message 
    }, { status: 500 });
  }
}
