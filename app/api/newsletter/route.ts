// /app/api/newsletter/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { getSiteSettings } from "@/lib/getSiteSettings" // import helper 
import type { SiteSettings } from "@/types/siteSettings"

import { sendEmail } from '@/lib/email/sendEmail';
import { sendNewsletterConfirmationEmail } from '@/lib/email/newsletter';

export async function POST(req: Request) {
  const { email } = await req.json()

  // Basic validation of the email
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  // 2. Fetch contact email from Sanity site settings
  const settings: SiteSettings = await getSiteSettings()

  const siteEmail = settings?.email || process.env.CONTACT_FALLBACK_EMAIL || "info@rfsolutions.ae"
  const sitePhone = settings?.phone || process.env.CONTACT_FALLBACK_Phone || "0087190919991"

  try {
    // Send email
    await sendEmail({
      fromName: '"Riverflow Solutions" <info@rfsolutions.ae>', // Sender address
      to: siteEmail, // Your custom email
      subject: "New Newsletter Subscription", // Subject line
      html: `<p>New subscriber: <strong>${email}</strong></p>`, // HTML body
    })
    
    await sendNewsletterConfirmationEmail(email);
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
