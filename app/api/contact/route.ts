import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { sanityClient } from "@/lib/sanity" 
import { getSiteSettings } from "@/lib/getSiteSettings" // import helper 
import type { SiteSettings } from "@/types/siteSettings"

import { sendEmail } from '@/lib/email/sendEmail';

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json()

  // 1. Validate required fields
  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  // 2. Fetch contact email from Sanity site settings
  const settings: SiteSettings = await getSiteSettings()

  const siteEmail = settings?.email || process.env.CONTACT_FALLBACK_EMAIL || "info@rfsolutions.ae"
  const sitePhone = settings?.phone || process.env.CONTACT_FALLBACK_Phone || "0087190919991"
  

  
  try {
    // 4. Send email to site administrator (RiverFlow)
    await sendEmail({
      fromName: `"Riverflow Website" <${process.env.SMTP_USER}>`,
      to: siteEmail,
      subject: `New Contact Request – ${service}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "(No message provided)"}</p>
      `,
    })

    // 2. Confirmation Email to User
    await sendEmail({
      fromName: `"Riverflow Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your inquiry",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting <strong>Riverflow Solutions FZ-LLC</strong>. We've received your request regarding <strong>${service}</strong>.</p>
        <p>Our team will get back to you shortly. If you need immediate assistance, feel free to call us at <a href="tel:${sitePhone}">${sitePhone}</a>.</p>
        <br/>
        <p>Best regards,<br/>
        Riverflow Solutions Team</p>
        <hr/>
        <small>This is an automated message. Please do not reply.</small>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email error:", err)
    return NextResponse.json({ success: false, error: "Failed to send emails" }, { status: 500 })
  }
}
