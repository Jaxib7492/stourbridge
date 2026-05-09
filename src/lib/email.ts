import { supabase } from './supabase';

interface SendEmailParams {
  to: string | string[];
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  try {
    const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const recipients = Array.isArray(to) ? to : [to];

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Stourbridge Hearing Centre <noreply@stourbridgehearingcentre.co.uk>',
        to: recipients,
        subject: subject,
        html: html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export function createBookingEmailHTML(booking: {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_datetime?: string;
  message?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 15px;
            padding: 15px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #f43f5e;
          }
          .label {
            font-weight: bold;
            color: #f43f5e;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Booking Request</h1>
            <p style="margin: 10px 0 0 0;">Stourbridge Hearing Centre</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${booking.name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${booking.email}">${booking.email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${booking.phone}">${booking.phone}</a></div>
            </div>

            <div class="field">
              <div class="label">Service:</div>
              <div class="value">${booking.service}</div>
            </div>

            ${booking.preferred_datetime ? `
            <div class="field">
              <div class="label">Preferred Date & Time:</div>
              <div class="value">${booking.preferred_datetime}</div>
            </div>
            ` : ''}

            ${booking.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${booking.message}</div>
            </div>
            ` : ''}

            <div class="footer">
              <p>This is an automated notification from your website booking form.</p>
              <p>Please respond to the customer as soon as possible.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function createContactEmailHTML(contact: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 15px;
            padding: 15px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #f43f5e;
          }
          .label {
            font-weight: bold;
            color: #f43f5e;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0;">Stourbridge Hearing Centre</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${contact.name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${contact.email}">${contact.email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${contact.phone}">${contact.phone}</a></div>
            </div>

            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${contact.message}</div>
            </div>

            <div class="footer">
              <p>This is an automated notification from your website contact form.</p>
              <p>Please respond to the customer as soon as possible.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
