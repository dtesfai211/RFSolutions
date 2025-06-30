// app/api/consultation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import { SiteSettings } from '@/types/siteSettings';
import { getSiteSettings } from '@/lib/getSiteSettings';

import { sendEmail } from '@/lib/email/sendEmail';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function POST(req: NextRequest) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Fetch contact email from Sanity site settings
    const settings: SiteSettings = await getSiteSettings()

    const siteEmail = settings?.email || process.env.CONTACT_FALLBACK_EMAIL || "info@rfsolutions.ae"
    const sitePhone = settings?.phone || process.env.CONTACT_FALLBACK_Phone || "0087190919991"

    const { error } = await supabase.from('consultations').insert([{ name, email, phone, message }]);
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send email
    try {
        await sendEmail({
            to: siteEmail,
            subject: 'New Consultation Booking',
            html: `
              <h2>New Consultation Booking</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            `,
          });
 
    // 2. Confirmation Email to User
    await sendEmail({
        fromName: `"Riverflow Solutions" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We've received your inquiry",
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for contacting <strong>Riverflow Solutions FZ-LLC</strong>. We've received your request.</p>
          <p>Our team will get back to you shortly. If you need immediate assistance, feel free to call us at <a href="tel:${sitePhone}">${sitePhone}</a>.</p>
          <br/>
          <p>Best regards,<br/>
          Riverflow Solutions Team</p>
          <hr/>
          <small>This is an automated message. Please do not reply.</small>
        `,
      });
    } catch (err) {
        return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Consultation booked and email sent!' }, { status: 200 });
}
