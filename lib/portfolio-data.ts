export const profile = {
  name: "Ava Reyes",
  role: "Product & UX Designer",
  location: "Berlin, DE",
  status: "Available for select projects",
  tagline:
    "I design clear, technical interfaces for data-heavy products — turning complex systems into things people actually understand.",
  email: "ava@avareyes.design",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Read.cv", href: "https://read.cv" },
    { label: "GitHub", href: "https://github.com" },
  ],
}

export const stats = [
  { value: "8", label: "Years designing" },
  { value: "40+", label: "Products shipped" },
  { value: "5", label: "Design systems built" },
  { value: "3", label: "Teams led" },
]

export const about = {
  paragraphs: [
    "I'm a product designer focused on the unglamorous, high-stakes surfaces of software: dashboards, admin tools, developer platforms, and the dense data views most designers avoid.",
    "My process is equal parts research and systems thinking. I map the domain, define the primitives, and build the components and rules that let a product scale without turning into chaos.",
    "Before design I studied information systems, which is why I'm comfortable pairing directly with engineers, reading the schema, and arguing about edge cases at the whiteboard.",
  ],
  focus: [
    "Product & interaction design",
    "Design systems & tokens",
    "Data visualization",
    "Design engineering handoff",
  ],
}

export type Project = {
  id: string
  index: string
  title: string
  category: string
  year: string
  summary: string
  image: string
  tags: string[]
  metrics: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    id: "atlas-analytics",
    index: "01",
    title: "Atlas Analytics",
    category: "Fintech Dashboard",
    year: "2024",
    summary:
      "Rebuilt the core reporting experience for a treasury platform, unifying twelve fragmented views into one configurable workspace.",
    image: "/projects/fintech-dashboard.png",
    tags: ["Product Design", "Data Viz", "Design System"],
    metrics: [
      { value: "-38%", label: "Time to insight" },
      { value: "4.6", label: "SUS score → 8.9" },
    ],
  },
  {
    id: "north-mobile",
    index: "02",
    title: "North Mobile Banking",
    category: "Mobile App",
    year: "2023",
    summary:
      "Led the end-to-end redesign of a challenger bank's mobile app, from card management to a rethought money-movement flow.",
    image: "/projects/mobile-banking.png",
    tags: ["Mobile", "Interaction", "Research"],
    metrics: [
      { value: "+22%", label: "Weekly active" },
      { value: "4.8★", label: "App store rating" },
    ],
  },
  {
    id: "monolith-ds",
    index: "03",
    title: "Monolith Design System",
    category: "Design System",
    year: "2023",
    summary:
      "Authored a token-driven component library adopted across seven product teams, with living docs and Figma–code parity.",
    image: "/projects/design-system.png",
    tags: ["Design System", "Tokens", "Design Eng"],
    metrics: [
      { value: "180+", label: "Components" },
      { value: "7", label: "Teams onboarded" },
    ],
  },
  {
    id: "vector-onboarding",
    index: "04",
    title: "Vector SaaS Onboarding",
    category: "Growth / SaaS",
    year: "2022",
    summary:
      "Designed a progressive onboarding flow for a developer tool, replacing a wall of settings with a guided first-run experience.",
    image: "/projects/saas-onboarding.png",
    tags: ["Product Design", "Growth", "Prototyping"],
    metrics: [
      { value: "+31%", label: "Activation rate" },
      { value: "-1.9d", label: "Time to value" },
    ],
  },
]

export const skillGroups = [
  {
    title: "Design",
    items: [
      "Product Design",
      "Interaction Design",
      "Information Architecture",
      "Data Visualization",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Research",
    items: [
      "User Interviews",
      "Usability Testing",
      "Journey Mapping",
      "Heuristic Audits",
      "Analytics",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Framer", "Storybook", "Linear", "Protopie", "Rive"],
  },
  {
    title: "Technical",
    items: [
      "HTML / CSS",
      "React basics",
      "Design Tokens",
      "Git",
      "SQL reading",
    ],
  },
]
