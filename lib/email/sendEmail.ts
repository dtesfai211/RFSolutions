import nodemailer from 'nodemailer';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  fromName?: string;
}

export async function sendEmail({ to, subject, html, fromName }: SendEmailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"${fromName || 'Website Notification'}" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}
