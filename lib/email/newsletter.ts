import fs from 'fs/promises';
import path from 'path';
import { sendEmail } from '@/lib/email/sendEmail';

export async function sendNewsletterConfirmationEmail(userEmail: string) {
  const filePath = path.join(process.cwd(), 'lib/email/templates/subscription-confirmation.html');
  const html = await fs.readFile(filePath, 'utf8');

  await sendEmail({
    to: userEmail,
    subject: 'You’re subscribed to Riverflow!',
    html,
  });
}
