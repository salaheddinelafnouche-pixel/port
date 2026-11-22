export interface ImpactMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  impactMetric: ImpactMetric;
  tags: string[];
  category: string;
  link: string;
  thumb: string;
  initials: string;
  keyResults: string[];
  deliverables: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'hiking-mode',
    num: '01',
    title: 'Google Maps Hiking Mode',
    subtitle: 'Native Maps mode for multi-day trail continuity',
    role: 'Lead UX Designer',
    date: 'Concept sprint · 2026',
    description: 'Hikers abandon Maps once dirt starts — 79% dual-app the same trip. Designed a backpacker-led Hiking mode (corridor, day plan, offline pack, bailouts) with a Day/Weekend preset.',
    problem: 'Once hikers leave the trailhead, Google Maps loses dirt trust. Backpackers dual-app the same trip for junctions, offline coverage, water, and bailouts.',
    solution: 'Designed Hiking as a native Maps travel mode: trail-first map, multi-day corridor, day plan, elevation honesty, offline pack, and safety share — with a lighter Day/Weekend preset.',
    impactMetric: {
      value: '79%',
      label: 'Dual-app same trip',
    },
    tags: ['Concept Case Study', 'Mixed Methods', 'React Prototype'],
    category: 'Maps & Outdoor UX',
    link: '/hiking-mode',
    thumb: '/assets/hiking-mode-thumb.png',
    initials: 'HM',
    keyResults: [
      '79% of backpacker-primary respondents used Maps plus a specialty trail app on the same trip (Hypothesis).',
      'Shipped H1–H3 happy paths: corridor ready, trust the fork, and recover — as a clickable React Hi-Fi.',
      'Backpacker-led mode with a Day/Weekend preset so lighter hikers are not blocked by multi-day density.',
    ],
    deliverables: ['Synthesized Research Pack', 'Happy Paths H1–H3', 'Low-fi Wireframes WF01–08', 'Hi-Fi React Prototype', 'Narrative Case Study Site'],
  },
  {
    id: 'youscent-saas',
    num: '02',
    title: 'YouScent SaaS',
    subtitle: 'Digital Perfume Atelier & Perfumer Marketplace',
    role: 'Lead Product Designer (SaaS)',
    date: 'Feb 2026 – Present',
    description: 'Custom fragrance sat behind a closed atelier. A two-door compose flow and perfumer marketplace opened it—designed to a SUS ≥ 80 usability bar.',
    problem: 'Custom fragrance sat behind perfumery jargon and a closed atelier. People could describe a memory, but they could not turn it into a formula a perfumer could actually claim.',
    solution: 'Designed two doors into one atelier: a four-step compose flow (memory, archetypes, setting, formula) and a brief marketplace with published perfumer plans.',
    impactMetric: {
      value: 'SUS ≥ 80',
      label: 'Usability Bar',
    },
    tags: ['Usability Testing', 'Interaction Design', 'SUS ≥ 80'],
    category: 'AI & Emotion SaaS',
    link: '/youscent-saas',
    thumb: '/assets/youscent-saas-thumb.png',
    initials: 'YS',
    keyResults: [
      'Shipped a deterministic compose flow: memory, up to three archetype colors, then season, occasion, and strength.',
      'Every formula states top, heart, and base shares and is sealed with a verification hash.',
      'Perfumer plans run from Freemium to Perfumery House, where custom IFRA export is included.',
    ],
    deliverables: ['Two-door Atelier Flows', 'Four-step Compose Prototype', 'Verification Hash Pattern', 'Usability Test Reports', 'Perfumer Plan Matrix'],
  },
  {
    id: 'youscent',
    num: '03',
    title: 'YouScent',
    subtitle: 'AI Fragrance Discovery Platform (Consumer App)',
    role: 'Product Designer',
    date: 'Nov 2025 – Jan 2026',
    description: 'Expert jargon locked out 67% of shoppers. An emotion-led AI fragrance flow turned browse into first generation for 73% of first-time users in testing.',
    problem: 'Chemical terminology & expert jargon created high cognitive friction for 67% of non-expert shoppers, leading to choice paralysis.',
    solution: 'Designed an emotion-driven discovery flow that turns memories into AI fragrance prompts, validated with iterative Figma prototypes.',
    impactMetric: {
      value: '73%',
      label: 'First-Gen Conversion',
    },
    tags: ['User Interviews', 'Figma Prototype', 'SUS 81.4'],
    category: 'AI & Emotion UX',
    link: '/youscent',
    thumb: '/assets/youscent-thumb.png',
    initials: 'YS',
    keyResults: [
      '73% conversion rate from initial browse to creating a custom AI fragrance formula in testing.',
      'Validated end-to-end Figma prototypes to an 81.4 System Usability Scale (SUS) score.',
      'Mapped cognitive friction via 6 group interviews and 4 competitor audits.',
    ],
    deliverables: ['Figma Component Library', 'Interactive Consumer Prototype', 'Usability Test Reports', 'AI Input Schema'],
  },
  {
    id: 'tech4u',
    num: '04',
    title: 'Tech4U',
    subtitle: 'Adaptive Learning Platform for Irregular Schedules',
    role: 'Founder & Lead UX Designer',
    date: 'Jun 2025 – Oct 2025',
    description: 'Rigid ed-tech pacing drove an 89% dropout rate. A Soft Program with WCAG 2.1 AA adaptive pacing projected +40% learner retention.',
    problem: 'Rigid assignment deadlines and overwhelming UI density caused an 89% dropout rate among working adult learners.',
    solution: 'Engineered an adaptive "Soft Program" architecture with customizable pacing loops, low-fatigue UI density toggle, and 100% WCAG 2.1 AA compliance.',
    impactMetric: {
      value: '+40%',
      label: 'Projected Retention',
    },
    tags: ['User Research', 'Design Systems', 'WCAG 2.1 AA'],
    category: 'EdTech & Inclusive UX',
    link: '/tech4u',
    thumb: '/assets/tech4u-thumb.png',
    initials: 'T4',
    keyResults: [
      '40% projected increase in 90-day learner retention.',
      '100% WCAG 2.1 AA color contrast and screen-reader accessibility compliance.',
      'Soft Program pacing control giving learners control over daily cognitive load.',
    ],
    deliverables: ['WCAG 2.1 AA Design System', 'Adaptive Pacing Flow', 'User Research Synthesis', 'Screen Reader Audits', 'High-Fi Prototypes'],
  },
];
