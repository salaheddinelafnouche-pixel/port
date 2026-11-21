const SITE = 'https://salaheddinelafnouche.com';

const PROFILE = {
  name: 'Salaheddine Lafnouche',
  role: 'Product Designer',
  location: 'Khemisset, Morocco',
  url: SITE,
  sameAs: [
    'https://www.linkedin.com/in/salah-eddine-lafnouche-66881525b',
    'https://www.behance.net/salah-elafnouc',
    'https://dribbble.com/salah-elafnouc',
    'https://www.credly.com/badges/aee2e68f-151f-4859-891a-6eafb2865cf8/public_url',
  ],
};

const PROJECTS = [
  {
    id: 'hiking-mode',
    title: 'Google Maps Hiking Mode',
    role: 'Lead UX Designer',
    summary:
      'Backpacker-led native Maps Hiking mode for multi-day trail continuity; 79% dual-app same trip (Hypothesis).',
    url: `${SITE}/hiking-mode`,
  },
  {
    id: 'youscent-saas',
    title: 'YouScent SaaS',
    role: 'Lead Product Designer (SaaS)',
    summary:
      'Custom fragrance atelier opened via a two-door compose flow and perfumer marketplace; designed to a SUS ≥ 80 usability bar.',
    url: `${SITE}/youscent-saas`,
  },
  {
    id: 'youscent',
    title: 'YouScent',
    role: 'Product Designer',
    summary:
      'Emotion-led AI fragrance flow; 73% first-generation conversion for first-time users in testing.',
    url: `${SITE}/youscent`,
  },
  {
    id: 'tech4u',
    title: 'Tech4U',
    role: 'Founder & Lead UX Designer',
    summary:
      'Inclusive ed-tech Soft Program with WCAG 2.1 AA adaptive pacing; +40% projected learner retention.',
    url: `${SITE}/tech4u`,
  },
];

const CONTACT = {
  email: 'portfolio@salaheddinelafnouche.com',
  telephone: '+212629335434',
  contactUrl: `${SITE}/contact`,
};

type ToolExecuteResult = { content: Array<{ type: 'text'; text: string }> };

type ModelContextTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args?: Record<string, unknown>) => Promise<ToolExecuteResult> | ToolExecuteResult;
};

type ModelContextAPI = {
  registerTool: (tool: ModelContextTool) => void | Promise<void>;
};

function textResult(data: unknown): ToolExecuteResult {
  return {
    content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
  };
}

export function registerWebMcpTools(): void {
  const nav = navigator as Navigator & { modelContext?: ModelContextAPI };
  if (!nav.modelContext || typeof nav.modelContext.registerTool !== 'function') {
    return;
  }

  const tools: ModelContextTool[] = [
    {
      name: 'get_profile',
      description: "Returns Salaheddine Lafnouche's name, role, location, and profile links.",
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: () => textResult(PROFILE),
    },
    {
      name: 'list_projects',
      description: 'Returns featured case studies with summaries and URLs.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: () => textResult({ projects: PROJECTS }),
    },
    {
      name: 'get_contact',
      description: 'Returns email, phone, and contact page URL.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: () => textResult(CONTACT),
    },
  ];

  for (const tool of tools) {
    try {
      void nav.modelContext.registerTool(tool);
    } catch (err) {
      console.warn('[WebMCP] Failed to register tool', tool.name, err);
    }
  }
}
