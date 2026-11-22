import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PROJECTS } from '../src/data/projects.ts';
import {
  ALLOWED_ORIGINS,
  buildContactEmailHtml,
  createMailTransporter,
  isRateLimited,
  oneLine,
  parseContactBody,
} from '../lib/contact.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const MAX_STORED_SUBMISSIONS = 100;

app.set('trust proxy', 1);

app.use(cors({
  origin(origin, callback) {
    if (!origin || ALLOWED_ORIGINS.has(origin)) {
      callback(null, true);
      return;
    }
    callback(null, false);
  },
}));
app.use(express.json({ limit: '20kb' }));

const TARGET_EMAIL = process.env.TARGET_EMAIL || 'portfolio@salaheddinelafnouche.com';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  scope: string[];
  createdAt: string;
}

const contactSubmissions: ContactSubmission[] = [];

function clientIp(req: Request): string {
  return req.ip || req.socket.remoteAddress || 'unknown';
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

  const parsed = parseContactBody(req.body);
  if (!parsed.ok) {
    return res.status(400).json({ success: false, error: parsed.error });
  }

  const { fields } = parsed;
  const newSubmission: ContactSubmission = {
    id: 'msg_' + Date.now(),
    name: fields.name,
    email: fields.email,
    message: fields.message,
    scope: fields.scopeList,
    createdAt: new Date().toISOString(),
  };

  contactSubmissions.push(newSubmission);
  if (contactSubmissions.length > MAX_STORED_SUBMISSIONS) {
    contactSubmissions.shift();
  }
  console.log(`Contact submission stored (${newSubmission.id})`);

  const mail = createMailTransporter();
  if (!mail) {
    console.warn('Email transporter is not configured.');
    return res.status(503).json({
      success: false,
      error: 'Email delivery is not configured.',
    });
  }

  try {
    await mail.transporter.sendMail({
      from: `"${oneLine(fields.name)} (via Portfolio)" <${mail.senderUser}>`,
      replyTo: oneLine(fields.email),
      to: TARGET_EMAIL,
      subject: `Portfolio inquiry from ${oneLine(fields.name)}`,
      html: buildContactEmailHtml(fields, new Date(newSubmission.createdAt).toLocaleString()),
    });
    console.log(`Contact email sent to ${TARGET_EMAIL}`);
    return res.json({
      success: true,
      message: "Thanks! I'll be in touch within 24 hours.",
    });
  } catch {
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

