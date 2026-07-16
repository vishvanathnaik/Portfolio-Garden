export type ContentKind = "project" | "essay" | "note" | "reading";

export type ContentItem = {
  title: string;
  description: string;
  kind: ContentKind;
  status: string;
  topics: string[];
  methods?: string[];
  href: string;
  featured?: boolean;
  index: string;
};

export const topics = [
  { name: "Systems", tone: "sage", description: "How parts interact, fail, and improve." },
  { name: "Operations", tone: "amber", description: "Turning plans into reliable delivery." },
  { name: "Markets", tone: "blue", description: "Customers, incentives, and commercial choices." },
  { name: "Energy", tone: "rust", description: "Industry, transition, and development." },
  { name: "People", tone: "rose", description: "Organizations, culture, and behavior." },
];

export const content: ContentItem[] = [
  {
    index: "01",
    title: "Wolt Customer and Operations Growth Study",
    description: "Where do customer expectations and operating realities create the clearest opportunities for sustainable growth?",
    kind: "project",
    status: "Portfolio concept · developing",
    topics: ["Operations", "Markets", "People"],
    methods: ["Customer journey", "Operations review", "Growth hypotheses"],
    href: "/projects/#wolt-customer-operations-growth-study",
    featured: true,
  },
  {
    index: "02",
    title: "ExxonMobil and Guyana’s Economic Transformation",
    description: "How can a resource-led transformation be evaluated across commercial opportunity, public value, and long-term risk?",
    kind: "project",
    status: "Portfolio concept · developing",
    topics: ["Energy", "Markets", "Systems"],
    methods: ["Desk research", "Market analysis", "Scenario framing"],
    href: "/projects/#exxonmobil-guyana-economic-transformation",
    featured: true,
  },
  {
    index: "03",
    title: "AI-Assisted Marketing Research System",
    description: "How can AI accelerate research synthesis while preserving source quality, human judgment, and traceability?",
    kind: "project",
    status: "Portfolio concept · developing",
    topics: ["Markets", "Systems", "People"],
    methods: ["Workflow design", "Prompt systems", "Insight synthesis"],
    href: "/projects/#ai-assisted-marketing-research-system",
    featured: true,
  },
  {
    index: "04",
    title: "What chemical engineering taught me about marketing systems",
    description: "A practical look at feedback loops, constraints, and trade-offs—and why they matter when designing customer acquisition and growth strategies.",
    kind: "essay",
    status: "Planned essay · writing in progress",
    topics: ["Systems", "Markets"],
    href: "/writing/#chemical-engineering-marketing-systems",
  },
  {
    index: "05",
    title: "Customer insight meets frontline operations",
    description: "Lessons from connecting customer research and program work with the daily realities of service quality, speed, and execution.",
    kind: "essay",
    status: "Planned essay · writing in progress",
    topics: ["Operations", "People", "Markets"],
    href: "/writing/#customer-insight-frontline-operations",
  },
  {
    index: "06",
    title: "How to research an energy transition without losing the system",
    description: "A framework for examining commercial opportunity, public value, and long-term risk in resource-led economic transitions.",
    kind: "essay",
    status: "Planned essay · writing in progress",
    topics: ["Energy", "Systems", "Markets"],
    href: "/writing/#researching-energy-transitions-as-systems",
  },
  {
    index: "07",
    title: "What process engineering teaches strategy",
    description: "Notes on constraints, feedback loops, and why technically sound plans can still fail in organizations.",
    kind: "note",
    status: "Field note · growing",
    topics: ["Systems", "People", "Operations"],
    href: "/notes/#process-strategy",
  },
  {
    index: "08",
    title: "The fog around money",
    description: "Reading notes and open questions on money creation, banking, and the stories systems tell about themselves.",
    kind: "reading",
    status: "Book note · seedling",
    topics: ["Markets", "Systems"],
    href: "/reading/#fog-around-money",
  },
];

export const nowItems = [
  "Building this portfolio into a durable home for projects, evidence, and writing.",
  "Developing case studies that connect customer insight and operations decisions to business outcomes.",
  "Reading across energy, economics, organizations, marketing, and the craft of clear explanation.",
];

export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Writing", href: "/writing/" },
  { label: "Notes", href: "/notes/" },
  { label: "Reading", href: "/reading/" },
  { label: "Now", href: "/now/" },
];
