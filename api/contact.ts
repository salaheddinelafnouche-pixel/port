import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default async function handler(req: Request, res: Response) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, message, scope } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, and message.'
    });
  }

  const TARGET_EMAIL = process.env.TARGET_EMAIL || 'portfolio@salaheddinelafnouche.com';

  // Transporter initialization
  const smtpHost = process.env.SMTP_HOST || (process.env.HOSTINGER_EMAIL_PASS ? 'smtp.hostinger.com' : undefined);
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || process.env.HOSTINGER_USER || 'portfolio@salaheddinelafnouche.com';
  const smtpPass = process.env.SMTP_PASS || process.env.HOSTINGER_EMAIL_PASS;

  let transporter: any = null;

  if (smtpHost && smtpPass) {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  } else if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  }

  if (!transporter) {
    return res.status(500).json({
      success: false,
      error: 'Email transporter not configured. Please set Hostinger SMTP credentials in environment variables.'
    });
  }

  const selectedScopeList = Array.isArray(scope) && scope.length > 0 ? scope.join(', ') : 'None selected';
  const senderUser = smtpUser || process.env.GMAIL_USER || 'portfolio@salaheddinelafnouche.com';

  try {
    await transporter.sendMail({
      from: `"${name} (via Portfolio)" <${senderUser}>`,
      replyTo: email,
      to: TARGET_EMAIL,
      subject: `📩 Portfolio Inquiry from ${name} - Let's Connect`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: -8px;">Sent via your portfolio website ("Let's Connect" form)</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">From:</span><br/>
            <strong style="font-size: 16px; color: #111827;">${name}</strong>
          </div>

          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</span><br/>
            <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px;">${email}</a>
          </div>

          <div style="margin-bottom: 16px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Project Scope / Modules:</span><br/>
            <span style="display: inline-block; background-color: #f3f4f6; color: #374151; padding: 4px 10px; border-radius: 6px; font-size: 14px; margin-top: 4px;">${selectedScopeList}</span>
          </div>

          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #6366f1; border-radius: 6px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message:</span>
            <p style="white-space: pre-wrap; margin-top: 8px; margin-bottom: 0; color: #1f2937; font-size: 15px; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 24px; pt: 16px; border-top: 1px dashed #e5e7eb; font-size: 12px; color: #9ca3af;">
            Submitted at: ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Thanks! I'll be in touch within 24 hours."
    });
  } catch (error: any) {
    console.error('Vercel API contact error:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Error delivering email.'
    });
  }
}
