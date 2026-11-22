import nodemailer from 'nodemailer';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const RATE_WINDOW_MS = 15 * 60 * 1000;
export const RATE_MAX = 5;
export const ALLOWED_ORIGINS = new Set([
  'https://salaheddinelafnouche.com',
  'https://www.salaheddinelafnouche.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]);

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').replace(/"/g, '').trim();
}

export function trimmedField(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;
  return trimmed;
}

export type ContactFields = {
  name: string;
  email: string;
  message: string;
  scopeList: string[];
};

export type ContactParseResult =
  | { ok: true; fields: ContactFields }
  | { ok: false; error: string };

export function parseContactBody(body: unknown): ContactParseResult {
  const data = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
  const name = trimmedField(data.name, 120);
  const email = trimmedField(data.email, 254);
  const message = trimmedField(data.message, 5000);
  const scope = data.scope;

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return {
      ok: false,
      error: 'Please provide a name, a valid email, and a message.',
    };
  }

  let scopeList: string[] = [];
  if (scope !== undefined) {
    const invalidScope =
      !Array.isArray(scope) ||
      scope.length > 8 ||
      scope.some((item) => typeof item !== 'string' || item.trim().length > 80);
    if (invalidScope) {
      return {
        ok: false,
        error: 'Project scope must be a short list of modules.',
      };
    }
    scopeList = scope.map((item: string) => item.trim()).filter(Boolean);
  }

  return { ok: true, fields: { name, email, message, scopeList } };
}

const contactHits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (contactHits.get(ip) || []).filter((timestamp) => now - timestamp < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    contactHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  contactHits.set(ip, recent);
  if (contactHits.size > 1000) {
    const oldest = contactHits.keys().next().value;
    if (oldest) contactHits.delete(oldest);
  }
  return false;
}

export function createMailTransporter() {
  const smtpHost =
    process.env.SMTP_HOST || (process.env.HOSTINGER_EMAIL_PASS ? 'smtp.hostinger.com' : undefined);
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser =
    process.env.SMTP_USER || process.env.HOSTINGER_USER || 'portfolio@salaheddinelafnouche.com';
  const smtpPass = process.env.SMTP_PASS || process.env.HOSTINGER_EMAIL_PASS;

  if (smtpHost && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      }),
      senderUser: smtpUser,
    };
  }

  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

  if (gmailUser && gmailPass) {
    return {
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      }),
      senderUser: gmailUser,
    };
  }

  return null;
}

export function buildContactEmailHtml(fields: ContactFields, submittedAt: string): string {
  const scopeLabel = fields.scopeList.length > 0 ? fields.scopeList.join(', ') : 'None selected';
  const safeEmail = oneLine(fields.email);

  return `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: -8px;">Sent via your portfolio website ("Let's Connect" form)</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">From:</span><br/>
            <strong style="font-size: 16px; color: #111827;">${escapeHtml(fields.name)}</strong>
          </div>
          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</span><br/>
            <a href="mailto:${escapeHtml(safeEmail)}" style="color: #3b82f6; text-decoration: none; font-size: 15px;">${escapeHtml(fields.email)}</a>
          </div>
          <div style="margin-bottom: 16px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Project Scope / Modules:</span><br/>
            <span style="display: inline-block; background-color: #f3f4f6; color: #374151; padding: 4px 10px; border-radius: 6px; font-size: 14px; margin-top: 4px;">${escapeHtml(scopeLabel)}</span>
          </div>
          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #6366f1; border-radius: 6px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message:</span>
            <p style="white-space: pre-wrap; margin-top: 8px; margin-bottom: 0; color: #1f2937; font-size: 15px; line-height: 1.6;">${escapeHtml(fields.message)}</p>
          </div>
          <div style="margin-top: 24px; border-top: 1px dashed #e5e7eb; font-size: 12px; color: #9ca3af;">
            Submitted at: ${escapeHtml(submittedAt)}
          </div>
        </div>
      `;
}

export function corsOrigin(origin: string | undefined): string | null {
  if (!origin) return null;
  return ALLOWED_ORIGINS.has(origin) ? origin : null;
}
