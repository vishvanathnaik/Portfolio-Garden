export type ContentKind = "project" | "essay" | "note" | "reading";

export type ContentItem = {
  title: string;
  description: string;
  kind: ContentKind;
  status: string;
  topics: string[];
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
    title: "Rethinking last-mile operations",
    description: "A practical operations case study: mapping demand, bottlenecks, and service trade-offs in a delivery system.",
    kind: "project",
    status: "Case study · in progress",
    topics: ["Operations", "Systems", "Markets"],
    href: "/projects/#last-mile",
    featured: true,
  },
  {
    index: "02",
    title: "Oil, growth, and the Guyana question",
    description: "A research brief on how a resource discovery can reshape public choices, local capacity, and long-term value.",
    kind: "essay",
    status: "Research brief · developing",
    topics: ["Energy", "Markets", "Systems"],
    href: "/writing/#guyana",
    featured: true,
  },
  {
    index: "03",
    title: "What process engineering teaches strategy",
    description: "Notes on constraints, feedback loops, and why technically sound plans can still fail in organizations.",
    kind: "note",
    status: "Field note · growing",
    topics: ["Systems", "People", "Operations"],
    href: "/notes/#process-strategy",
    featured: true,
  },
  {
    index: "04",
    title: "The fog around money",
    description: "Reading notes and open questions on money creation, banking, and the stories systems tell about themselves.",
    kind: "reading",
    status: "Book note · seedling",
    topics: ["Markets", "Systems"],
    href: "/reading/#fog-around-money",
  },
];

export const nowItems = [
  "Building this portfolio into a durable home for projects and writing.",
  "Developing case studies that connect operations decisions to customer and business outcomes.",
  "Reading across energy, economics, organizations, and the craft of clear explanation.",
];

export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Writing", href: "/writing/" },
  { label: "Notes", href: "/notes/" },
  { label: "Reading", href: "/reading/" },
  { label: "Now", href: "/now/" },
];
