// /app/api/newsletter/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: Request) {
  const { email } = await req.json()

  // Basic validation of the email
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  try {
    // Send email
    await transporter.sendMail({
      from: '"Riverflow Solutions" <info@rfsolutions.ae>', // Sender address
      to: "info@rfsolutions.ae", // Your custom email
      subject: "New Newsletter Subscription", // Subject line
      text: `New subscriber: ${email}`, // Plain text body
      html: `<p>New subscriber: <strong>${email}</strong></p>`, // HTML body
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
