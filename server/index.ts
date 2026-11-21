import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { PROJECTS } from '../src/data/projects.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const MAX_STORED_SUBMISSIONS = 100;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;

const allowedOrigins = new Set([
  'https://salaheddinelafnouche.com',
  'https://www.salaheddinelafnouche.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }
    callback(null, false);
  },
}));
app.use(express.json({ limit: '20kb' }));

// Target email address where inquiries will be delivered
const TARGET_EMAIL = process.env.TARGET_EMAIL || 'portfolio@salaheddinelafnouche.com';

// Transporter configuration for sending emails
const createTransporter = () => {
  // Hostinger Mail SMTP configuration
  const smtpHost = process.env.SMTP_HOST || (process.env.HOSTINGER_EMAIL_PASS ? 'smtp.hostinger.com' : undefined);
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || process.env.HOSTINGER_USER || 'portfolio@salaheddinelafnouche.com';
  const smtpPass = process.env.SMTP_PASS || process.env.HOSTINGER_EMAIL_PASS;

  if (smtpHost && smtpPass) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  // Gmail SMTP fallback configuration
  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

  if (gmailUser && gmailPass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }

  return null;
};

// In-memory store for contact submissions
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  scope: string[];
  createdAt: string;
}

const contactSubmissions: ContactSubmission[] = [];
const contactHits = new Map<string, number[]>();

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').replace(/"/g, '').trim();
}

function clientIp(req: Request): string {
  return req.ip || req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
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

function trimmedField(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;
  return trimmed;
}

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend Node.js/Express server is operational' });
});

app.get('/api/projects', (_req: Request, res: Response) => {
  res.json(PROJECTS);
});

app.post('/api/contact', async (req: Request, res: Response) => {
  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({
      success: false,
      error: 'Too many messages. Please email directly or try again later.',
    });
  }

  const name = trimmedField(req.body?.name, 120);
  const email = trimmedField(req.body?.email, 254);
  const message = trimmedField(req.body?.message, 5000);
  const scope = req.body?.scope;

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a name, a valid email, and a message.',
    });
  }

  let scopeList: string[] = [];
  if (scope !== undefined) {
    const invalidScope = !Array.isArray(scope)
      || scope.length > 8
      || scope.some((item) => typeof item !== 'string' || item.trim().length > 80);
    if (invalidScope) {
      return res.status(400).json({
        success: false,
        error: 'Project scope must be a short list of modules.',
      });
    }
    scopeList = scope.map((item: string) => item.trim()).filter(Boolean);
  }

  const newSubmission: ContactSubmission = {
    id: 'msg_' + Date.now(),
    name,
    email,
    message,
    scope: scopeList,
    createdAt: new Date().toISOString(),
  };

  contactSubmissions.push(newSubmission);
  if (contactSubmissions.length > MAX_STORED_SUBMISSIONS) {
    contactSubmissions.shift();
  }
  console.log(`Contact submission stored (${newSubmission.id})`);

  const transporter = createTransporter();
  if (!transporter) {
    console.warn('Email transporter is not configured.');
    return res.status(503).json({
      success: false,
      error: 'Email delivery is not configured.',
    });
  }

  const safeName = oneLine(name);
  const safeEmail = oneLine(email);
  const scopeLabel = scopeList.length > 0 ? scopeList.join(', ') : 'None selected';
  const senderUser = process.env.SMTP_USER || process.env.HOSTINGER_USER || process.env.GMAIL_USER || process.env.EMAIL_USER || 'portfolio@salaheddinelafnouche.com';

  try {
    await transporter.sendMail({
      from: `"${safeName} (via Portfolio)" <${senderUser}>`,
      replyTo: safeEmail,
      to: TARGET_EMAIL,
      subject: `Portfolio inquiry from ${safeName}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: -8px;">Sent via your portfolio website ("Let's Connect" form)</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">From:</span><br/>
            <strong style="font-size: 16px; color: #111827;">${escapeHtml(name)}</strong>
          </div>
          <div style="margin-bottom: 12px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</span><br/>
            <a href="mailto:${escapeHtml(safeEmail)}" style="color: #3b82f6; text-decoration: none; font-size: 15px;">${escapeHtml(email)}</a>
          </div>
          <div style="margin-bottom: 16px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Project Scope / Modules:</span><br/>
            <span style="display: inline-block; background-color: #f3f4f6; color: #374151; padding: 4px 10px; border-radius: 6px; font-size: 14px; margin-top: 4px;">${escapeHtml(scopeLabel)}</span>
          </div>
          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #6366f1; border-radius: 6px;">
            <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message:</span>
            <p style="white-space: pre-wrap; margin-top: 8px; margin-bottom: 0; color: #1f2937; font-size: 15px; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          <div style="margin-top: 24px; border-top: 1px dashed #e5e7eb; font-size: 12px; color: #9ca3af;">
            Submitted at: ${escapeHtml(new Date(newSubmission.createdAt).toLocaleString())}
          </div>
        </div>
      `,
    });
    console.log(`Contact email sent to ${TARGET_EMAIL}`);
    return res.json({
      success: true,
      message: "Thanks! I'll be in touch within 24 hours.",
    });
  } catch (mailErr) {
    console.error('Failed to send contact email');
    return res.status(502).json({
      success: false,
      error: 'The message could not be sent right now.',
    });
  }
});

// --- MCP (SEP-1649 / streamable-http JSON-RPC surface) ---
const MCP_SITE = 'https://salaheddinelafnouche.com';

const mcpProfile = {
  name: 'Salaheddine Lafnouche',
  role: 'Product Designer',
  location: 'Khemisset, Morocco',
  url: MCP_SITE,
  sameAs: [
    'https://www.linkedin.com/in/salah-eddine-lafnouche-66881525b',
    'https://www.behance.net/salah-elafnouc',
    'https://dribbble.com/salah-elafnouc',
    'https://www.credly.com/badges/aee2e68f-151f-4859-891a-6eafb2865cf8/public_url',
  ],
};

const mcpProjects = [
  {
    id: 'hiking-mode',
    title: 'Google Maps Hiking Mode',
    role: 'Lead UX Designer',
    summary:
      'Backpacker-led native Maps Hiking mode for multi-day trail continuity; 79% dual-app same trip (Hypothesis).',
    url: `${MCP_SITE}/hiking-mode`,
  },
  {
    id: 'youscent-saas',
    title: 'YouScent SaaS',
    role: 'Lead Product Designer (SaaS)',
    summary:
      'Custom fragrance atelier opened via a two-door compose flow and perfumer marketplace; designed to a SUS ≥ 80 usability bar.',
    url: `${MCP_SITE}/youscent-saas`,
  },
  {
    id: 'youscent',
    title: 'YouScent',
    role: 'Product Designer',
    summary:
      'Emotion-led AI fragrance flow; 73% first-generation conversion for first-time users in testing.',
    url: `${MCP_SITE}/youscent`,
  },
  {
    id: 'tech4u',
    title: 'Tech4U',
    role: 'Founder & Lead UX Designer',
    summary:
      'Inclusive ed-tech Soft Program with WCAG 2.1 AA adaptive pacing; +40% projected learner retention.',
    url: `${MCP_SITE}/tech4u`,
  },
];

const mcpContact = {
  email: 'portfolio@salaheddinelafnouche.com',
  telephone: '+212629335434',
  contactUrl: `${MCP_SITE}/contact`,
};

const mcpTools = [
  {
    name: 'get_profile',
    description: "Returns Salaheddine Lafnouche's name, role, location, and profile links.",
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'list_projects',
    description: 'Returns featured case studies with summaries and URLs.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'get_contact',
    description: 'Returns email, phone, and contact page URL.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
];

function mcpToolResult(data: unknown) {
  return {
    content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
  };
}

function executeMcpTool(name: string) {
  switch (name) {
    case 'get_profile':
      return mcpToolResult(mcpProfile);
    case 'list_projects':
      return mcpToolResult({ projects: mcpProjects });
    case 'get_contact':
      return mcpToolResult(mcpContact);
    default:
      return null;
  }
}

function handleMcpJsonRpc(body: { jsonrpc?: string; id?: string | number | null; method?: string; params?: Record<string, unknown> }) {
  const id = body.id ?? null;
  const method = body.method;

  if (method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2025-06-18',
        capabilities: { tools: {} },
        serverInfo: {
          name: 'salaheddinelafnouche-portfolio',
          version: '1.0.0',
        },
      },
    };
  }

  if (method === 'notifications/initialized' || method === 'initialized') {
    return { jsonrpc: '2.0', id, result: {} };
  }

  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: { tools: mcpTools },
    };
  }

  if (method === 'tools/call') {
    const params = body.params || {};
    const name = typeof params.name === 'string' ? params.name : '';
    const result = executeMcpTool(name);
    if (!result) {
      return {
        jsonrpc: '2.0',
        id,
        error: { code: -32602, message: `Unknown tool: ${name}` },
      };
    }
    return { jsonrpc: '2.0', id, result };
  }

  if (method === 'ping') {
    return { jsonrpc: '2.0', id, result: {} };
  }

  return {
    jsonrpc: '2.0',
    id,
    error: { code: -32601, message: `Method not found: ${method ?? 'undefined'}` },
  };
}

app.get('/api/mcp', (_req: Request, res: Response) => {
  res.json({
    name: 'salaheddinelafnouche-portfolio',
    version: '1.0.0',
    protocolVersion: '2025-06-18',
    transport: 'streamable-http',
    tools: mcpTools.map((t) => t.name),
    documentationUrl: `${MCP_SITE}/llms.txt`,
    serverCard: `${MCP_SITE}/.well-known/mcp/server-card.json`,
  });
});

app.post('/api/mcp', (req: Request, res: Response) => {
  const body = req.body;

  if (Array.isArray(body)) {
    return res.json(body.map((item) => handleMcpJsonRpc(item || {})));
  }

  if (body && typeof body === 'object') {
    return res.json(handleMcpJsonRpc(body));
  }

  return res.status(400).json({
    jsonrpc: '2.0',
    id: null,
    error: { code: -32700, message: 'Parse error: expected JSON-RPC object or batch' },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Express Backend server running on http://localhost:${PORT}`);
});

