import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

/**
 * Creates and verifies Gmail SMTP transporter
 */
function getTransporter() {
  const user = process.env.GMAIL_USER ? process.env.GMAIL_USER.trim() : '';
  const pass = process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, '') : '';

  if (!user || !pass || pass === 'your_16_char_app_password') {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

/**
 * Dispatches confirmation emails to both Customer and Admin
 */
export async function sendBookingEmails(booking) {
  const transporter = getTransporter();
  const gmailUser = process.env.GMAIL_USER || 'auravitalstar@gmail.com';
  const adminEmail = process.env.ADMIN_EMAIL || gmailUser;

  if (!transporter) {
    console.warn('⚠️ GMAIL_USER or GMAIL_APP_PASSWORD not configured in server/.env. Skipping live email dispatch.');
    return {
      success: false,
      reason: 'Credentials not configured. Please add GMAIL_USER and GMAIL_APP_PASSWORD to server/.env'
    };
  }

  const customerHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F7F3EC; margin: 0; padding: 24px; color: #1E2421; }
        .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; border: 1px solid #E0D9CB; overflow: hidden; box-shadow: 0 8px 24px rgba(6,44,34,0.08); }
        .header { background: #062C22; color: #FAF5EA; padding: 32px 24px; text-align: center; border-bottom: 2px solid #B9975B; }
        .header h1 { font-family: Georgia, serif; margin: 0 0 6px 0; font-size: 26px; color: #FAF5EA; }
        .header p { margin: 0; color: #DFBE77; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; }
        .content { padding: 32px 28px; line-height: 1.6; }
        .recap-box { background: #FAF7F2; border: 1px solid #E2D9CB; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .recap-row { margin: 8px 0; font-size: 15px; }
        .recap-label { font-weight: 600; color: #062C22; display: inline-block; width: 110px; }
        .footer { background: #F6F1E8; padding: 20px 28px; font-size: 13px; color: #68706B; text-align: center; border-top: 1px solid #E8DCBE; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <p>AURA VITAL STAR</p>
          <h1>Appointment Confirmation</h1>
        </div>
        <div class="content">
          <p>Dear <strong>${booking.customerName}</strong>,</p>
          <p>Thank you for choosing Aura Vital Star. We are pleased to confirm that your appointment request has been received and scheduled in our concierge system.</p>
          
          <div class="recap-box">
            <div class="recap-row"><span class="recap-label">Reference:</span> <strong>${booking.id}</strong></div>
            <div class="recap-row"><span class="recap-label">Service:</span> ${booking.service} (${booking.duration || '60 min'})</div>
            <div class="recap-row"><span class="recap-label">Location:</span> ${booking.location}</div>
            <div class="recap-row"><span class="recap-label">Date:</span> ${booking.date}</div>
            <div class="recap-row"><span class="recap-label">Time:</span> ${booking.time}</div>
            ${booking.notes ? `<div class="recap-row"><span class="recap-label">Notes:</span> <em>"${booking.notes}"</em></div>` : ''}
          </div>

          <p>Our dedicated team is preparing your sanctuary prior to your arrival. If you have any questions or need to adjust your time, please call us at <strong>+1 647-987-5451</strong>.</p>
          <p>We look forward to welcoming you.</p>
          <p style="margin-top: 24px; color: #062C22; font-weight: 600;">Warm regards,<br>The Aura Vital Star Team</p>
        </div>
        <div class="footer">
          157 Queen Street West, Brampton, ON L6Y 1P9 &bull; <a href="https://www.auravitalstar.ca" style="color: #B9975B; text-decoration: none;">www.auravitalstar.ca</a>
        </div>
      </div>
    </body>
    </html>
  `;

  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 24px;">
        <h2 style="color: #062C22; margin-top: 0;">✨ New Appointment Received — Aura Vital Star</h2>
        <p>A new appointment has been requested through the website/QR booking portal:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 6px; font-weight: bold; width: 140px;">Booking ID:</td><td>${booking.id}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Customer Name:</td><td>${booking.customerName}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Phone:</td><td><a href="tel:${booking.phone}">${booking.phone}</a></td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Email:</td><td><a href="mailto:${booking.email}">${booking.email}</a></td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Service:</td><td>${booking.service}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Location:</td><td>${booking.location}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Date &amp; Time:</td><td>${booking.date} at ${booking.time}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Channel / Source:</td><td><strong>${booking.source}</strong></td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Notes:</td><td>${booking.notes || 'None'}</td></tr>
        </table>
        <p style="font-size: 12px; color: #888;">Recorded at ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `;

  try {
    // 1. Send confirmation to customer
    if (booking.email) {
      await transporter.sendMail({
        from: `"Aura Vital Star Rejuvenation" <${gmailUser}>`,
        to: booking.email,
        subject: `Your Aura Vital Star Appointment Confirmation [${booking.id}]`,
        html: customerHtml
      });
      console.log(`✅ Customer confirmation email sent to: ${booking.email}`);
    }

    // 2. Send notification to admin
    await transporter.sendMail({
      from: `"AVS Booking Engine" <${gmailUser}>`,
      to: adminEmail,
      subject: `NEW APPOINTMENT: ${booking.customerName} - ${booking.service} [${booking.id}]`,
      html: adminHtml
    });
    console.log(`✅ Admin notification email sent to: ${adminEmail}`);

    return { success: true };
  } catch (err) {
    console.error('❌ Failed to dispatch email via Gmail SMTP:', err);
    return { success: false, error: err.message };
  }
}
