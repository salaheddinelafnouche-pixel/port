import type { Request, Response } from 'express';
import {
  buildContactEmailHtml,
  corsOrigin,
  createMailTransporter,
  isRateLimited,
  oneLine,
  parseContactBody,
} from '../lib/contact.ts';

function clientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function applyCors(req: Request, res: Response) {
  const origin = corsOrigin(typeof req.headers.origin === 'string' ? req.headers.origin : undefined);
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

export default async function handler(req: Request, res: Response) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({
      success: false,
      error: 'Too many messages. Please email directly or try again later.',
    });
  }

  const parsed = parseContactBody(req.body);
  if (!parsed.ok) {
    return res.status(400).json({ success: false, error: parsed.error });
  }

  const mail = createMailTransporter();
  if (!mail) {
    return res.status(503).json({
      success: false,
      error: 'Email delivery is not configured.',
    });
  }

  const { fields } = parsed;
  const submittedAt = new Date().toISOString();
  const TARGET_EMAIL = process.env.TARGET_EMAIL || 'portfolio@salaheddinelafnouche.com';

  try {
    await mail.transporter.sendMail({
      from: `"${oneLine(fields.name)} (via Portfolio)" <${mail.senderUser}>`,
      replyTo: oneLine(fields.email),
      to: TARGET_EMAIL,
      subject: `Portfolio inquiry from ${oneLine(fields.name)}`,
      html: buildContactEmailHtml(fields, new Date(submittedAt).toLocaleString()),
    });

    return res.status(200).json({
      success: true,
      message: "Thanks! I'll be in touch within 24 hours.",
    });
  } catch {
    console.error('Vercel API contact error');
    return res.status(502).json({
      success: false,
      error: 'The message could not be sent right now.',
    });
  }
}
