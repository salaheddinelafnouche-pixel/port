import { assetUrl } from "./assetUrl";

export const links = {
  figma: "https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ",
  prototypeLocal:
    import.meta.env.VITE_PROTOTYPE_URL || "/hiking-mode/prototype/index.html",
  docs: "../docs/case-study/README.md",
};

export const meta = {
  role: "Lead UX Designer",
  timeline: "Concept sprint · 2026",
  methods: "Mixed survey + interviews",
  tools: "Figma · React · Vite",
  framing: "Concept case study · synthesized research",
};

export const researchMeta = {
  goal: "Understand why hikers, trackers, and sport enthusiasts abandon Google Maps once terrain turns rugged, and what must be true for a Maps-native Hiking mode to earn dirt trust.",
  framing:
    "Mixed methods · synthesized case study. Interview, survey, and social-listening claims are Hypothesis unless tagged otherwise, not live fieldwork.",
  decision:
    "Optimize Hiking mode first for multi-day trail continuity and safety (backpacker-led), while remaining usable for day/weekend hikers, versus day-hike discovery first.",
  sample:
    "Survey n≈124 (88 backpacker-primary, 36 day/weekend) · Interviews n=8 (6 backpacker / long-distance, 2 day/weekend) · Social coding of public trail reviews and outdoor forums (synthesized)",
};

export const interviewGuide = {
  format:
    "45–60 min semi-structured · remote or in-person · consent + anonymise",
  focus:
    "Tool abandonment on rugged mountain terrain, day-commit rituals, and dirt trust vs road trust",
  close:
    "Is there anything we did not ask that matters for staying found and on plan when the trail gets steep, remote, or unsigned?",
  warmups: [
    {
      id: "W1",
      question:
        "How would you describe yourself as a hiker, tracker, or outdoor athlete?",
      probes: [
        "Day trips, weekends, multi-day sections, or long-distance?",
        "What terrain do you seek most often, forest, alpine, desert?",
        "Do you usually go alone, with a partner, or in a small group?",
      ],
    },
    {
      id: "W2",
      question:
        "Walk me through your most recent overnight or longer trip in a few sentences.",
      probes: [
        "Where did you start and end?",
        "What went smoothly, and what stressed you?",
        "How prepared did you feel the night before you left?",
      ],
    },
    {
      id: "W3",
      question: "When do you open Google Maps for outdoor trips today?",
      probes: [
        "Roads and parking only, or also on dirt?",
        "What about towns, lodging, or resupply?",
        "What do you never use Maps for?",
      ],
    },
  ],
  topics: [
    {
      topic: "Tool sequence & abandonment",
      rq: "RQ1",
      questions: [
        {
          id: "Q1",
          question:
            "Walk me through your last multi-day (or longest) hike from planning at home to arriving in town, which apps at which moments?",
          probes: [
            "Where does Google Maps show up first?",
            "When do specialty apps take over?",
            "What triggers a switch mid-day?",
          ],
        },
        {
          id: "Q2",
          question:
            "Tell me about a moment on rugged mountain terrain when you stopped trusting Google Maps and switched away.",
          probes: [
            "What did the map show versus what you saw on the ground?",
            "Was it a junction, grade, trail line, or signal issue?",
            "How did you decide which other app to open?",
          ],
        },
        {
          id: "Q3",
          question:
            "What would have to be true for you to stay in Maps past the gravel lot?",
          probes: [
            "Trail continuity? Offline? Elevation? Bailouts?",
            "What would still make you keep a backup app?",
            "Have you ever tried staying in Maps longer than usual?",
          ],
        },
      ],
    },
    {
      topic: "Failure stories on rugged terrain",
      rq: "RQ2",
      questions: [
        {
          id: "Q4",
          question:
            "Tell me about a time navigation or day planning went wrong in steep, remote, or unsigned terrain.",
          probes: [
            "Wrong fork, elevation surprise, dry water, offline gap, or no bailout?",
            "What information were you missing in that moment?",
            "How did you recover, and what did it cost you (time, water, nerves)?",
          ],
        },
        {
          id: "Q5",
          question:
            "Which on-trail failure do you fear most when the mountains get rugged, and why that one?",
          probes: [
            "How often has it actually happened versus how often you prepare for it?",
            "Does fear change what you pack or which apps you download?",
            "Who do you tell when something goes wrong?",
          ],
        },
      ],
    },
    {
      topic: "Committing to the next day",
      rq: "RQ3",
      questions: [
        {
          id: "Q6",
          question:
            "How do you decide tomorrow’s miles the evening before a hard mountain day?",
          probes: [
            "What must you see before you sleep?",
            "What do you ignore even if apps show it?",
            "Where do distance, gain, water, camp, and exits live today?",
          ],
        },
        {
          id: "Q7",
          question:
            "Describe your “day-commit” ritual, screenshots, notes, paper, or talking it through.",
          probes: [
            "How many apps or screens does it take?",
            "What breaks when battery or signal is low?",
            "What would a single honest sheet need to include?",
          ],
        },
      ],
    },
    {
      topic: "Trust on pavement vs dirt",
      rq: "RQ4",
      questions: [
        {
          id: "Q8",
          question:
            "When do you trust Google Maps completely on an outdoor trip?",
          probes: [
            "Driving, parking, walking into town?",
            "Any dirt moments where it earned trust?",
            "What language do you use when recommending Maps to other hikers?",
          ],
        },
        {
          id: "Q9",
          question:
            "When would you refuse to rely on Maps for dirt navigation, even with signal?",
          probes: [
            "Missing trail emphasis, grade, or offline confidence?",
            "Past bad experience versus general reputation?",
            "What would change that refusal?",
          ],
        },
      ],
    },
    {
      topic: "Consolidation & lighter needs",
      rq: "RQ5 · RQ6",
      questions: [
        {
          id: "Q10",
          question:
            "If a Hiking mode lived inside Google Maps, what would it need on day one for a multi-day mountain section?",
          probes: [
            "Must-haves versus nice-to-haves?",
            "What would feel like “too much” or “too casual”?",
            "Would offline corridor + bailouts be deal-breakers?",
          ],
        },
        {
          id: "Q11",
          question:
            "For day or weekend hikers you know, what do they need that serious backpackers might not?",
          probes: [
            "Difficulty and time versus multi-day resupply?",
            "What would overwhelm them?",
            "Would a lighter preset keep them in Maps?",
          ],
        },
        {
          id: "Q12",
          question:
            "How likely would you be to make Maps your primary on-trail map if Hiking mode covered continuity, elevation, offline pack, and exits?",
          probes: [
            "What would still keep a specialty app installed?",
            "After one successful offline corridor, would habit change?",
            "What proof would you need before trusting it on a remote stretch?",
          ],
        },
      ],
    },
  ],
};

export const surveyResearch = {
  purpose:
    "Size tool-switching and Maps abandonment on rugged terrain, rank on-trail failure stress, measure day-commit must-haves, and triangulate with coded public commentary from Google Maps trail reviews and outdoor social channels.",
  screening: [
    "In the last 24 months, have you used a smartphone map while hiking or mountain sport? (Yes / No; end if No)",
    "Longest trip in that period: Day hike / Weekend (1 night) / Multi-day (2–6 nights) / Long-distance section or thru-hike (7+ nights)",
    "Have you used Google Maps on any outdoor trip in that period? (Yes / No; continue either way; segment later)",
  ],
  questions: [
    {
      id: "S1",
      theme: "Tool mix · RQ1",
      prompt:
        "On your most recent overnight or longer trip, which did you use? (multi-select: Google Maps, Apple Maps, AllTrails, Gaia/similar, FarOut/Guthook-style, offline GPX app, paper/guidebook only)",
      metric:
        "% using Google Maps + at least one specialty trail app on the same trip",
    },
    {
      id: "S2",
      theme: "Stage use · RQ1",
      prompt:
        "When did you open Google Maps on that trip? (multi-select: planning at home, driving to trailhead, on-trail navigation, water/camp finding, town/resupply, not used)",
      metric:
        "Stage-use rates; drop-off from road/trailhead stages to on-trail dirt stages",
    },
    {
      id: "S3",
      theme: "Abandonment · RQ1",
      prompt:
        "If you stopped using Google Maps once terrain got rugged, what was the main reason? (single: wrong trail line / missing footpaths, no offline, weak elevation/grade, no water/camp/bailouts, habit / other app preferred, did not stop)",
      metric:
        "Primary abandonment reason distribution among backpacker-primary respondents",
    },
    {
      id: "S4",
      theme: "Stress events · RQ2",
      prompt:
        "Which caused the most stress on trail? Pick up to 3: wrong junction, harder elevation, dry water, no bailout, map unavailable offline, conflicting apps, weather without a plan",
      metric: "Top-3 selection rate per failure mode among backpacker-primary",
    },
    {
      id: "S5",
      theme: "Day-commit · RQ3",
      prompt:
        "To commit to tomorrow’s hiking day, which are must-have? (select all: distance, elevation gain/loss, grade/difficulty, water, campsites, bailout/exit, weather/advisory, resupply/town timing)",
      metric: "% marking each info type “must-have”",
    },
    {
      id: "S6",
      theme: "Trust · RQ4",
      prompt:
        "Rate trust 1–5: navigating paved roads in Google Maps; navigating dirt trails in Google Maps; navigating dirt trails in your primary specialty app",
      metric: "Mean trust scores; dirt-vs-road gap for Maps",
    },
    {
      id: "S7",
      theme: "Segment · RQ5",
      prompt:
        "Trip-length segment (from screen) plus: would a simpler Hiking mode in Maps help versus road-only view? (Yes / No / Not sure)",
      metric:
        "Day/weekend vs backpacker agreement on simpler mode; overload flags",
    },
    {
      id: "S8",
      theme: "Intent · RQ6",
      prompt:
        "If Google Maps added a Hiking mode with multi-day plan, elevation, offline corridor download, and bailouts, how likely would you use it as your primary on-trail map? (1–5)",
      metric: "% rating 4–5 among backpacker-primary",
    },
  ],
  socialListening: {
    title: "Social listening · Google Maps comments & outdoor discourse",
    synthesizedYield:
      "Hypothesis · Coded public language clustered around trailhead handoff (“switched to AllTrails/Gaia after parking”), wrong-turn blame on road routing, offline/download gaps on remote ridges, missing elevation honesty, and bailout/exit questions in storm or injury threads. Continuity and safety dominate over discovery praise.",
    sources: [
      "Google Maps place and trailhead reviews mentioning hiking, trail, offline, or “got lost”",
      "Reddit communities (r/hiking, r/CampingandHiking, r/Ultralight, regional trail subs)",
      "Trail app forums and GPX sharing threads",
      "Public posts/comments on X and Instagram outdoor accounts referencing Maps vs trail apps",
    ],
    codingFocus: [
      "Abandonment phrases: “switched to…”, “Maps took me off trail”, “useless after trailhead”",
      "Failure modes: wrong turn, no offline, dry water, elevation surprise, no bailout",
      "Trust language: roads vs dirt; “would never rely on Maps in the mountains”",
      "Day-commit cues: miles, gain, water, camp, weather before sleep",
      "Consolidation desire: “wish Maps did hiking”, “too many apps”",
    ],
  },
};

export const affinityClusters = [
  {
    id: "C1",
    method: "Affinity · interview + survey + social",
    title: "Road layer vs dirt layer",
    insight:
      "Maps is the default for pavement, parking, and town; specialty apps own footpath continuity once the lot ends.",
    evidence:
      "Hypothesis · F1 · 79% dual-app same trip; social “switch after parking” codes",
    designImplication:
      "Hiking mode must bridge the gravel-lot handoff without a new brand.",
  },
  {
    id: "C2",
    method: "Affinity · stress ranking + failure stories",
    title: "Continuity and exits over discovery",
    insight:
      "Wrong junctions, offline gaps, dry water, and missing bailouts outrank “find a scenic trail” as stress drivers.",
    evidence: "Hypothesis · F2 · top stress rates 61% / 54% / 49% / 47%",
    designImplication:
      "Prioritize trail continuity and exits over gallery-style discovery.",
  },
  {
    id: "C3",
    method: "Affinity · day-commit checklist",
    title: "Honest next-day sheet",
    insight:
      "Backpackers need distance, gain, water, camp, and bailout in one place the night before a mountain day.",
    evidence: "Hypothesis · F3 · must-have rates 92% / 88% / 85% / 71% / 69%",
    designImplication:
      "Day-commit clarity is a primary job, not a secondary tip card.",
  },
  {
    id: "C4",
    method: "Affinity · trust Likert + probes",
    title: "Dirt-trust gap",
    insight:
      "Maps earns high road trust and low dirt trust; the gap is trail emphasis, grade, and offline confidence, not chrome dislike.",
    evidence:
      "Hypothesis · F4 · trust 4.6 roads vs 2.4 dirt vs 4.1 specialty dirt",
    designImplication:
      "Earn dirt trust through readable trails, grade, and offline-first corridors.",
  },
  {
    id: "C5",
    method: "Affinity · segment compare",
    title: "Subset, not a fork",
    insight:
      "Day/weekend hikers share junction clarity and difficulty needs but reject multi-day density.",
    evidence: "Hypothesis · F5 · 72% want simpler Hiking mode vs road-only",
    designImplication:
      "One mode with a lighter preset, not a separate product.",
  },
  {
    id: "C6",
    method: "Affinity · intent + consolidation talk",
    title: "Willingness to consolidate",
    insight:
      "Backpackers will consider Maps primary on trail if multi-day plan, elevation, offline pack, and bailouts ship together.",
    evidence:
      "Hypothesis · F6 · 68% intent 4–5; interviews condition on signal-free proof",
    designImplication:
      "Ship backpacker-led depth first; prove offline before claiming dirt trust.",
  },
];

export const findings = [
  {
    id: "F1",
    title: "Maps owns roads; specialty apps own dirt",
    body: "79% of backpacker-primary respondents used Google Maps and at least one specialty trail app on the same trip.",
    quote: "I open Maps until the gravel lot. Then I switch. Every time.",
  },
  {
    id: "F2",
    title: "Continuity and exits beat discovery",
    body: "Top stress: wrong junction (61%), offline gap (54%), dry water (49%), no bailout (47%), elevation surprise (44%).",
  },
  {
    id: "F3",
    title: "Day-commit cluster is clear",
    body: "Must-haves: distance 92%, elevation gain 88%, water 85%, bailout 71%, campsite 69%, advisory 66%.",
  },
  {
    id: "F4",
    title: "Dirt-trust gap is large",
    body: "Mean trust 1–5: Maps on roads 4.6; Maps on dirt 2.4; specialty app on dirt 4.1, missing trail emphasis, grade, and offline confidence.",
  },
  {
    id: "F5",
    title: "Secondary users need a subset",
    body: "Day/weekend hikers share trail clarity and difficulty needs but reject multi-day density. 72% still want a simpler Hiking mode in Maps.",
  },
  {
    id: "F6",
    title: "Consolidation intent is real",
    body: "68% of backpackers rated 4–5 likelihood to use a Maps Hiking mode with multi-day plan, elevation, offline pack, and bailouts.",
  },
];

export const principles = [
  {
    title: "Maps-native, trail-smart",
    body: "Keep Google Maps chrome; change what the map prioritizes in Hiking mode.",
  },
  {
    title: "Backpacker-led, openly usable",
    body: "Default depth for long routes; lighter preset for casual hikers.",
  },
  {
    title: "Day-commit clarity",
    body: "Distance, gain, water, camp, bailout before decoration.",
  },
  {
    title: "Offline is first-class",
    body: "Visible before departure, not a buried setting.",
  },
  {
    title: "Safety without drama",
    body: "Share progress and nearest exit as calm utilities.",
  },
];

export const hmws = [
  "Carry hikers from highway → trail → town without breaking context?",
  "Make footpaths, grade, and junctions readable in a Maps-native view?",
  "Help backpackers commit to tomorrow’s day with distance, elevation, water, camp, and bailouts?",
  "Make offline corridor confidence visible before signal drops?",
  "Offer a lighter path for day/weekend hikers without forking into a separate product?",
];

export const wireframes = [
  {
    file: "01-home-search.svg",
    title: "Home & search",
    job: "Enter the familiar Maps surface hikers already trust for roads and towns.",
    finding: "F1",
    happyPaths: [] as const,
  },
  {
    file: "02-mode-switcher.svg",
    title: "Mode switcher",
    job: "Add Hiking beside Drive, Walk, and Bike, with no separate app brand.",
    finding: "F1 · F6",
    happyPaths: [] as const,
  },
  {
    file: "03-hiking-map.svg",
    title: "Trail-first map",
    job: "Trust the fork: recommended trail line, GPX conflict resolved, blaze legend, calm safety strip.",
    finding: "F2 · F4",
    happyPaths: ["H2"] as const,
  },
  {
    file: "04-route-overview.svg",
    title: "Route overview",
    job: "See the multi-day corridor with daily miles and gain, Corridor ready before you leave.",
    finding: "F3 · F6",
    happyPaths: ["H1"] as const,
  },
  {
    file: "05-day-plan.svg",
    title: "Day plan",
    job: "Commit offline with next water (mi + gain), bailout, camp, and steep callouts.",
    finding: "F3",
    happyPaths: ["H1", "H3"] as const,
  },
  {
    file: "06-elevation.svg",
    title: "Elevation",
    job: "Read grade and steep flags; at a junction, stay on the recommended main grade.",
    finding: "F2 · F3",
    happyPaths: ["H2"] as const,
  },
  {
    file: "07-offline-pack.svg",
    title: "Offline pack",
    job: "Corridor ready: elevation, water, camp, and exits packed before signal drops.",
    finding: "F2 · F4",
    happyPaths: ["H1"] as const,
  },
  {
    file: "08-safety-share.svg",
    title: "Safety share",
    job: "Recover calmly: next water, offline bailout to road, share and advisory without drama.",
    finding: "F2 · F3",
    happyPaths: ["H3"] as const,
  },
];

/** Final solution, H1–H3 productized as Google Maps Hiking Mode features. */

/** Final solution, H1–H3 productized as Google Maps Hiking Mode features. */

/** Final solution, H1–H3 productized as Google Maps Hiking Mode features. */
export const solutionFeatures = [
  {
    id: "hiking-mode",
    mapsLabel: "Google Maps · Hiking travel mode",
    title: "Hiking beside Drive, Walk, and Bike",
    job: "Enter Hiking from the familiar travel-mode row, with no separate app brand, same Maps chrome hikers already trust.",
    happyPaths: [] as const,
    features: [
      "Hiking icon in the Maps mode switcher",
      "Search → directions → Hike without leaving Maps",
      "Promo entry from home for trail corridors",
    ],
    mockup: assetUrl("solution/01-hiking-mode.svg"),
    mockupAlt:
      "Google Maps mode switcher with Hiking selected beside Drive, Transit, Walk, and Bike",
  },
  {
    id: "trail-first-map",
    mapsLabel: "Google Maps · Trail-first map",
    title: "Trust the fork on one map",
    job: "At unsigned or snow-covered junctions, footpaths stay readable, conflicts are labeled, and blaze systems have a legend.",
    happyPaths: ["H2"] as const,
    features: [
      "Trail-first footpaths with junction emphasis",
      "GPX vs Maps conflict callout with a clear recommended line",
      "Blaze / marking legend for foreign or regional systems",
    ],
    mockup: assetUrl("solution/02-trail-first-map.svg"),
    mockupAlt:
      "Hiking map at a fork with recommended trail line, resolved GPX conflict, and blaze legend",
  },
  {
    id: "multi-day-corridor",
    mapsLabel: "Google Maps · Multi-day corridor",
    title: "See the whole section before you commit",
    job: "Multi-day overview with daily miles and gain, Corridor ready before you leave, Backpacker or Day/Weekend preset.",
    happyPaths: ["H1"] as const,
    features: [
      "Multi-day corridor with daily miles and elevation gain",
      "Corridor ready chip when the offline pack is complete",
      "Backpacker vs Day/Weekend experience preset",
    ],
    mockup: assetUrl("solution/03-multi-day-corridor.svg"),
    mockupAlt:
      "Route overview sheet showing Sierra Crest multi-day corridor with Corridor ready chip",
  },
  {
    id: "day-plan",
    mapsLabel: "Google Maps · Day plan",
    title: "Commit the day offline",
    job: "One sheet for miles, gain, next water, bailout, and camp, usable with no signal.",
    happyPaths: ["H1", "H3"] as const,
    features: [
      "Day plan available fully offline",
      "Next reliable water with distance and gain",
      "Bailout and camp stops on the same sheet",
    ],
    mockup: assetUrl("solution/04-day-plan.svg"),
    mockupAlt:
      "Day plan screen with offline badge, next water, bailout, and camp stops",
  },
  {
    id: "elevation",
    mapsLabel: "Google Maps · Elevation",
    title: "Grade before the climb surprises you",
    job: "Read steep flags on the profile; at a junction, stay on the recommended main grade.",
    happyPaths: ["H2"] as const,
    features: [
      "Elevation profile with steep-zone highlights",
      "Junction callout to stay on the recommended main grade",
      "Day gain and loss tied to the corridor plan",
    ],
    mockup: assetUrl("solution/05-elevation.svg"),
    mockupAlt:
      "Elevation bottom sheet with steep zone and stay-on-main-grade callout",
  },
  {
    id: "offline-pack",
    mapsLabel: "Google Maps · Offline pack",
    title: "Corridor ready before bars drop",
    job: "Pack the full multi-day corridor, elevation, water, camp, and exits, and see ready status before departure.",
    happyPaths: ["H1"] as const,
    features: [
      "Offline pack for the full multi-day corridor",
      "Corridor ready status visible before departure",
      "Elevation, water, camp, and exits included in one pack",
    ],
    mockup: assetUrl("solution/06-offline-pack.svg"),
    mockupAlt:
      "Offline pack screen showing corridor ready with packed elevation, water, camp, and exits",
  },
  {
    id: "safety-share",
    mapsLabel: "Google Maps · Safety strip",
    title: "Recover without drama",
    job: "Next water, nearest offline bailout, calm share, and advisory stay available when the plan breaks.",
    happyPaths: ["H3"] as const,
    features: [
      "Next reliable water with distance and gain",
      "Offline bailout to nearest road or trailhead",
      "Calm safety share and advisory strip on the map",
    ],
    mockup: assetUrl("solution/07-safety-share.svg"),
    mockupAlt:
      "Safety screen with next water, nearest bailout, share link, and wind advisory",
  },
];

export const learnings = [
  {
    id: "L1",
    title: "Trust is a handoff, not a chrome swap",
    audience: "For design",
    body: "Hikers trust Maps on pavement and drop it at the gravel lot. Hiking mode bridges that moment — trail emphasis, grade, and offline confidence before the specialty-app switch.",
    stealThis:
      "Find the trust drop-off, then design the handoff — not a parallel product.",
  },
  {
    id: "L2",
    title: "Stress drivers beat discovery",
    audience: "For product & eng",
    body: "Wrong junctions, offline gaps, dry water, and missing bailouts beat “find a scenic trail.” Scope followed: continuity and exits first; discovery later.",
    stealThis:
      "Rank stress before delight; ship what reduces fear on the hard path.",
  },
  {
    id: "L3",
    title: "Prove the hard path offline first",
    audience: "For product & eng",
    body: "Dirt-trust claims are empty until a corridor works with no signal. The offline pack — segments, water, camp, bailouts — was the proof artifact.",
    stealThis:
      "Make the offline corridor the acceptance test for “trust on dirt.”",
  },
  {
    id: "L4",
    title: "One mode, lighter preset — not a fork",
    audience: "For design",
    body: "Backpackers needed depth; day hikers needed a lighter subset. One mode with a Day / Weekend preset kept both in shared Maps chrome.",
    stealThis:
      "Lead with the deepest job, then offer a lighter preset — don’t fork.",
  },
];

export const learningAssumption = {
  title: "Biggest assumption still open",
  body: "Will one successful offline corridor earn dirt-trust — or does specialty-app habit stick even near feature parity?",
};

export const learningInvite = {
  title: "Open for designers and engineers",
  body: "Critique the framing, reuse the stress-to-capability pattern, or push on the open assumption. In the web prototype, walk H1–H3 chips (Corridor → Fork → Recover) to see the must-works live.",
};

export const personas = {
  maya: {
    name: "Maya Chen",
    age: "28–40",
    role: "Primary · thru-section backpacker",
    image: assetUrl("research/maya-chen.jpg"),
    context:
      "Plans and hikes multi-day mountain corridors with a full pack; uses Google Maps for roads, lodging, and resupply towns between dirt stretches.",
    goal: "Finish each section day on plan and reach town safely without navigation chaos.",
    jtbd: "When I’m moving for days on a long trail, I want continuous trail-aware planning and navigation in one place, so I can manage miles, water, camp, and exits without juggling apps.",
    quote:
      "If Maps could carry me from the interstate to my tent site with the same confidence, I’d delete two apps tomorrow.",
    behaviors: [
      "Mixes FarOut / AllTrails / Gaia + GPX + Maps",
      "Screenshots water and camp notes before remote stretches",
      "Plans days by miles and elevation gain",
      "Downloads offline packs before leaving cell coverage",
    ],
    pains: [
      "Trail continuity breaks after the trailhead in Maps",
      "Elevation and grade surprises wreck day plans",
      "Water, camp, and bailout data are scattered",
      "Offline gaps create fear of getting stuck without a plan",
      "App switching burns battery and attention when tired",
    ],
    needs: [
      "Multi-day trail continuity",
      "Day-commit info",
      "Offline corridor confidence",
      "Clear exits to roads",
    ],
    implication:
      "Hiking mode must prioritize long-route continuity, day planning, safety exits, and offline readiness over discovery galleries.",
  },
  jordan: {
    name: "Jordan Blake",
    age: "25–45",
    role: "Secondary · day & weekend hiker",
    image: assetUrl("research/jordan-blake.jpg"),
    context:
      "Drives to popular trailheads for out-and-backs or loops; occasionally camps one night; wants clarity without thru-hiker complexity.",
    goal: "Pick a doable hike, stay on the path, and get back before dark.",
    jtbd: "When I have a free day or weekend, I want a simple trail plan with difficulty and time, so I can enjoy the hike without getting lost or overcommitted.",
    quote:
      "I just need the trail to be obvious and to know if it’s too hard for me.",
    behaviors: [
      "Searches trails in Maps or AllTrails",
      "Follows blue-dot / trail line on popular paths",
      "Checks parking and estimated duration",
      "Rarely needs multi-day resupply logic",
    ],
    pains: [
      "Hard to judge difficulty from road maps",
      "Unsure which path is the hiking trail",
      "Overwhelmed by thru-hiker density when tools are too advanced",
    ],
    needs: [
      "Easy Hiking mode entry",
      "Difficulty & time",
      "Clear trail emphasis",
      "Lighter preset",
    ],
    implication:
      "Keep advanced backpacker tools available but default secondary users into a lighter experience so the mode stays open without overload.",
  },
};

export const empathyMap = {
  persona: "Maya Chen · primary backpacker",
  framing: "F1–F6 synthesis: where Maps loses dirt trust after the trailhead.",
  status: "Hypothesis · provisional",
  says: [
    "Maps gets me to the lot. After that I’m in three other apps.",
    "Miles, gain, water, bailout — not a star rating.",
  ],
  thinks: [
    "Specialty apps are more trustworthy on dirt than Maps.",
    "Wrong fork or dry water can cost a whole day.",
  ],
  does: [
    "Plans in FarOut / AllTrails / GPX; uses Maps for town and parking.",
    "Screenshots water and camp notes; checks weather elsewhere.",
  ],
  feels: [
    "Confident on pavement; anxious at unsigned junctions.",
    "Overloaded juggling apps with a heavy pack and fading light.",
  ],
  pains: [
    "Trail continuity breaks after the trailhead.",
    "Elevation, water, camp, and bailouts are scattered.",
    "Offline gaps leave her without a trustworthy plan.",
  ],
  gains: [
    "One trusted map: highway → trail → resupply town.",
    "Honest next-day plan with distance, gain, water, exits.",
    "Offline corridor ready before leaving coverage.",
  ],
};

export const journeyMap = {
  scenario:
    "Maya plans a four-day mountain section between resupply towns — Maps for the drive, then abandoned at the lot.",
  stages: [
    {
      stage: "Pre-trip planning",
      short: "Plan",
      emotion: "Hopeful",
      actions:
        "Sketches daily miles, water, camps across apps; downloads offline packs.",
      thoughts: "Can I make town by day four without a dry camp?",
      pain: "Scattered data; no continuous trail-first day plan.",
      opportunity: "Unify corridor planning with water, camp, and bailouts.",
    },
    {
      stage: "Approach to trailhead",
      short: "Approach",
      emotion: "Neutral",
      actions:
        "Drives in Maps to parking; locks offline before coverage drops.",
      thoughts: "Once I leave pavement, does my trail plan still work?",
      pain: "Handoff anxiety from Maps roads to specialty trail apps.",
      opportunity: "Mode switch from driving to hiking without losing context.",
    },
    {
      stage: "First miles on trail",
      short: "On trail",
      emotion: "Anxious",
      actions: "Confirms junctions; glances at elevation for the climb ahead.",
      thoughts: "Is this the right fork under a full pack?",
      pain: "Weak footpath continuity and grade; wrong-fork fear.",
      opportunity: "Readable footpaths and grade at junctions and climbs.",
    },
    {
      stage: "Evening camp / next-day commit",
      short: "Camp",
      emotion: "Frustrated",
      actions: "Reviews miles and water; adjusts day length; shares location.",
      thoughts: "Tomorrow must be honest about gain and water.",
      pain: "No day-commit sheet; battery burned switching apps.",
      opportunity: "Day plan with distance, elevation, water, camp, share.",
    },
    {
      stage: "Remote stretch / no signal",
      short: "Remote",
      emotion: "Anxious",
      actions: "Uses offline map; rations battery; watches for bailout spurs.",
      thoughts: "If I need out, where is the nearest road?",
      pain: "Offline gaps; unclear exits; advisories not on the corridor.",
      opportunity: "Offline corridor with bailouts visible without signal.",
    },
    {
      stage: "Resupply town arrival",
      short: "Town",
      emotion: "Relieved",
      actions:
        "Uses Maps for motel, food, laundry; plans the next dirt section.",
      thoughts: "Same map for town chores and the next section.",
      pain: "Rebuilding trail context after town days in another app.",
      opportunity: "Keep hiking corridor and town nav in one Maps session.",
    },
  ],
};

export const edgeCases = [
  {
    id: "E1",
    theme: "T1" as const,
    vignette: "battery" as const,
    title: "Dead battery mid-climb",
    detail:
      "Phone dies on a steep, unsigned section; paper notes and prior screenshots become the only backup.",
  },
  {
    id: "E2",
    theme: "T2" as const,
    vignette: "snow" as const,
    title: "Snow-obscured junction",
    detail:
      "Blazes and tread disappear under snow; conflicting apps disagree on which spur is the main trail.",
  },
  {
    id: "E3",
    theme: "T3" as const,
    vignette: "dry" as const,
    title: "Marked water source is dry",
    detail:
      "Community or map-marked spring is empty in late season; next reliable water adds miles and gain.",
  },
  {
    id: "E4",
    theme: "T3" as const,
    vignette: "night" as const,
    title: "Night medical exit",
    detail:
      "Injury after dark with no signal; nearest bailout to a road or trailhead must be findable offline.",
  },
  {
    id: "E5",
    theme: "T2" as const,
    vignette: "gpx" as const,
    title: "Conflicting GPX vs Maps geometry",
    detail:
      "Imported track and on-device Maps trail line diverge at a fork; hikers do not know which source is current.",
  },
  {
    id: "E6",
    theme: "T1" as const,
    vignette: "zerosignal" as const,
    title: "Zero-signal multi-day corridor",
    detail:
      "Two or more days without coverage; offline pack must include elevation, water, camp, and exits for the full stretch.",
  },
  {
    id: "E7",
    theme: "T2" as const,
    vignette: "blaze" as const,
    title: "Foreign blaze / language systems",
    detail:
      "International or regional marking systems do not match hikers’ mental model; map labels alone are insufficient.",
  },
];

/** Suffering themes T1–T3: cluster rugged edge cases before happy-path inversion. */
export const sufferingThemes = [
  {
    id: "T1",
    title: "Phone & corridor go dark",
    suffering:
      "Mid-climb or deep on a multi-day ridge, the phone dies or signal vanishes. The day plan, junction memory, and bailout map lived in that device — and now hikers are left with paper scraps, half-remembered screenshots, and rising panic.",
    image: assetUrl("research/edge-phone-dark.jpg"),
    vignette: "battery" as const,
    edgeIds: ["E1", "E6"],
    happyPathId: "H1",
  },
  {
    id: "T2",
    title: "The trail line lies",
    suffering:
      "At an unsigned fork, snow hides the tread, GPX and Maps disagree, or blaze systems feel foreign. Every wrong choice burns miles, water, and daylight — and trust in the map collapses right when continuity matters most.",
    image: assetUrl("research/edge-trail-lies.jpg"),
    vignette: "snow" as const,
    edgeIds: ["E2", "E5", "E7"],
    happyPathId: "H2",
  },
  {
    id: "T3",
    title: "Crisis when the plan fails",
    suffering:
      "A late-season spring marked as reliable is bone dry, or injury hits after dark with no bars. Hikers need the next water or the nearest road exit offline — without it, fatigue and fear compound into a real emergency.",
    image: assetUrl("research/edge-crisis-plan.jpg"),
    vignette: "dry" as const,
    edgeIds: ["E3", "E4"],
    happyPathId: "H3",
  },
];

/** Happy paths, feature outcomes that invert T1–T3 edge-case suffering. */
export const happyPaths = [
  {
    id: "H1",
    title: "Corridor stays with you",
    theme: "T1",
    need: "Stay on plan when phone or signal fail",
    outcome:
      "Before the ridge goes dark, the full multi-day corridor is packed offline, elevation, water, camp, and exits. When bars drop mid-climb, the day plan still opens.",
    features: [
      "Offline pack for the full multi-day corridor (elevation, water, camp, exits)",
      "“Corridor ready” status visible before departure",
      "Day plan usable fully offline, no signal required",
    ],
    addresses: ["E1", "E6"],
    wireframes: ["04-route-overview", "05-day-plan", "07-offline-pack"],
    image: assetUrl("research/happy-corridor-ready.jpg"),
    mockup: assetUrl("happy-path/h1-corridor-ready.svg"),
    mockupAlt:
      "Offline pack screen showing corridor ready with day plan available offline",
  },
  {
    id: "H2",
    title: "Trust the fork",
    theme: "T2",
    need: "Choose the right spur without app-switching",
    outcome:
      "At an unsigned or snow-covered junction, footpaths stay readable, conflicts are labeled, and foreign blaze systems have a legend, one map, one clear recommended line.",
    features: [
      "Trail-first footpaths with junction emphasis",
      "GPX vs Maps conflict callout with a clear recommended line",
      "Blaze / marking legend for foreign or regional systems",
    ],
    addresses: ["E2", "E5", "E7"],
    wireframes: ["03-hiking-map", "06-elevation"],
    image: assetUrl("research/happy-trust-fork.jpg"),
    mockup: assetUrl("happy-path/h2-trust-fork.svg"),
    mockupAlt:
      "Hiking map at a fork with recommended trail line, resolved GPX conflict, and blaze legend",
  },
  {
    id: "H3",
    title: "Recover without drama",
    theme: "T3",
    need: "Get water or exit when the plan breaks",
    outcome:
      "A dry spring or night injury does not strand the hiker. Next reliable water shows distance and gain; nearest bailout to a road or trailhead works offline; share stays calm.",
    features: [
      "Next reliable water with distance and gain",
      "Offline bailout to nearest road or trailhead",
      "Calm safety share and advisory strip on the map",
    ],
    addresses: ["E3", "E4"],
    wireframes: ["05-day-plan", "08-safety-share"],
    image: assetUrl("research/happy-recover.jpg"),
    mockup: assetUrl("happy-path/h3-recover.svg"),
    mockupAlt:
      "Recover screen with next water, nearest bailout, and calm safety share",
  },
];

/** Emotion scores for journey curve (0 = low, 1 = high valence). */

export const journeyEmotions = [
  { stage: "Pre-trip planning", emotion: "Hopeful", score: 0.78 },
  { stage: "Approach to trailhead", emotion: "Neutral", score: 0.52 },
  { stage: "First miles on trail", emotion: "Anxious", score: 0.28 },
  {
    stage: "Evening camp / next-day commit",
    emotion: "Frustrated",
    score: 0.18,
  },
  { stage: "Remote stretch / no signal", emotion: "Anxious", score: 0.24 },
  { stage: "Resupply town arrival", emotion: "Relieved", score: 0.86 },
];

export const journeyHighlights = [
  {
    stage: "Trailhead handoff",
    pain: "Anxiety switching from Maps roads to specialty trail apps.",
    opportunity:
      "Seamless mode switch from driving to hiking without losing context.",
  },
  {
    stage: "Evening day-commit",
    pain: "No single sheet for miles, gain, water, and exits, battery spent app-switching.",
    opportunity:
      "Day plan with distance, elevation, water, camp, and calm safety share.",
  },
  {
    stage: "Remote / offline",
    pain: "Offline gaps and unclear bailouts when signal is gone.",
    opportunity:
      "Offline-ready corridor with exits and advisory visible without signal.",
  },
];
