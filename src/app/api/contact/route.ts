import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

// Define message structure
interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Server-Side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // 2. Determine Receiver Email
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "basedsparshjain@gmail.com";

    // 3. Check for SMTP config env variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      // Configure Nodemailer SMTP Transporter
      const portVal = SMTP_PORT ? parseInt(SMTP_PORT, 10) : 587;
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: portVal,
        secure: portVal === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"${name}" <${SMTP_USER}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `New SparshFolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New SparshFolio Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; padding: 10px; background-color: #f7f7f7; border-left: 4px solid #ff523b;">${message}</p>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Message sent successfully via email!",
        mode: "live",
      });
    } else {
      // 4. Local fallback: Save message to local messages.json
      const localFilePath = path.join(process.cwd(), "messages.json");
      const newMessage: ContactMessage = {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      };

      let existingMessages: ContactMessage[] = [];

      try {
        // Try writing locally (local development)
        try {
          const fileContent = await fs.readFile(localFilePath, "utf-8");
          existingMessages = JSON.parse(fileContent);
        } catch (err) {
          // File doesn't exist or is empty
        }

        existingMessages.push(newMessage);
        await fs.writeFile(localFilePath, JSON.stringify(existingMessages, null, 2), "utf-8");

        console.log("Local contact form message logged:", newMessage);

        return NextResponse.json({
          success: true,
          message: "Logged successfully to messages.json (SMTP not configured).",
          mode: "local",
        });
      } catch (writeError: any) {
        // Fall back to /tmp folder on serverless env (like Vercel read-only filesystem)
        console.warn("Local file write failed (expected on Vercel), falling back to /tmp:", writeError.message);

        try {
          const tmpFilePath = path.join("/tmp", "messages.json");
          let tmpMessages: ContactMessage[] = [];
          try {
            const fileContent = await fs.readFile(tmpFilePath, "utf-8");
            tmpMessages = JSON.parse(fileContent);
          } catch (err) {
            // File doesn't exist in /tmp
          }

          tmpMessages.push(newMessage);
          await fs.writeFile(tmpFilePath, JSON.stringify(tmpMessages, null, 2), "utf-8");

          return NextResponse.json({
            success: true,
            message: "Logged to temporary serverless storage. Configure SMTP environment variables in Vercel to receive emails directly!",
            mode: "temp",
          });
        } catch (tmpError: any) {
          console.error("Temp folder write failed:", tmpError.message);
          // If everything fails, still return a successful simulated submit with a warning toast
          return NextResponse.json({
            success: true,
            message: "Simulated submission successful! Configure SMTP env variables in Vercel to receive emails directly.",
            mode: "simulated",
          });
        }
      }
    }
  } catch (error: any) {
    console.error("Backend contact form error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
