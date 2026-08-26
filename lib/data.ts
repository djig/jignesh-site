export const person = {
  name: "Jignesh Dhamecha",
  first: "Jignesh",
  last: "Dhamecha",
  initials: "JD",
  location: "Foster City, CA",
  email: "jigu74@gmail.com",
  phone: "213-509-2687",
  phoneHref: "tel:+12135092687",
  site: "https://engtoolshub.com/",
  siteLabel: "engtoolshub.com",
  web: "https://djig.github.io/",
  webLabel: "djig.github.io",
  role: "Senior Frontend / Fullstack / AI Engineer",
  positioning:
    "Fourteen years of product UI — now shipping agentic and generative interfaces.",
  summary:
    "Senior frontend, fullstack, and AI engineer. 14+ years building product-facing UI. Specializes in agentic and generative interfaces.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const cases = [
  {
    index: "01",
    company: "Axiomatic AI",
    place: "Boston · remote",
    dates: "2026",
    title: "Local agent harness",
    subtitle: "CLI · plugins · skills",
    role: "Senior Software Engineer, Frontend",
    problem:
      "Running agent workflows locally needs a harness you can fork, extend with plugins/skills, and drive from a CLI — not only a notebook UI.",
    built:
      "CLI for a local harness (fork of PI). JavaScript/TypeScript libraries for the CLI, plugin surface, and skills harness so the same agent stack can be scripted and extended outside Lemma.",
    stack: ["TypeScript", "Node.js", "CLI", "Plugins", "Skills harness"],
  },
  {
    index: "02",
    company: "Axiomatic AI",
    place: "Boston · remote",
    dates: "2026",
    title: "Lemma",
    subtitle: "Agent notebook",
    role: "Senior Software Engineer, Frontend",
    problem:
      "Agentic workflows need a product-grade notebook — streaming conversation, tools, and outputs that are not deterministic. Demo chat UIs do not survive that.",
    built:
      "Core Lemma UI in Next.js, React 19, and TypeScript: conversation sidebar, streaming chat, and component architecture. CopilotKit / AG-UI integration, including React 19 batching work so streaming stays reliable. Playwright e2e for non-deterministic agent output using semantic embeddings and LLM-as-judge.",
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "CopilotKit",
      "AG-UI",
      "Playwright",
    ],
  },
  {
    index: "03",
    company: "Zoom Communications",
    place: "San Jose",
    dates: "2024–2025",
    title: "Zoom AI Companion",
    subtitle: "Generative UI",
    role: "Senior Software Engineer",
    problem:
      "Generative UI on a live collaboration product has to stream, orchestrate tools, and render dynamic components without feeling bolted on.",
    built:
      "Generative UI for Zoom AI Companion with AI SDK and LLM backends (Claude, LangChain / LangGraph) — real-time streaming, tool orchestration, and dynamic component rendering. A JavaScript Snowplow telemetry SDK across Zoom Docs, Billing, and AI Companion. Autocomplete search and Jupyter Notebook integration for data workflows.",
    stack: [
      "AI SDK",
      "Claude",
      "LangChain",
      "LangGraph",
      "Snowplow JS",
      "Jupyter",
    ],
  },
  {
    index: "04",
    company: "Prealize Health",
    place: "",
    dates: "2021–2024",
    title: "ML prediction dashboards",
    subtitle: "Healthcare ML",
    role: "Staff / Senior Software Engineer",
    problem:
      "Clinical and operations teams needed ML predictions presented clearly, inside a HITRUST-constrained healthcare stack.",
    built:
      "Frontend for healthcare ML prediction dashboards in React, Next.js, TypeScript, and Tailwind. AWS Amplify, Python Chalice, API Gateway, Cognito / SSO / SAML. Jest and E2E in CI. OWASP CSP controls supporting HITRUST.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "AWS Amplify",
      "Chalice",
      "Cognito",
      "Jest",
    ],
  },
] as const;

export const experience = [
  {
    company: "Axiomatic AI",
    place: "Boston · remote",
    title: "Senior Software Engineer, Frontend",
    dates: "01/2026 – Present",
    points: [
      "Lemma agent notebook in Next.js, React 19, and TypeScript — conversation sidebar, streaming chat, component architecture.",
      "CLI for a local agent harness (fork of PI); JS/TS libraries for CLI, plugins, and a skills harness.",
      "CopilotKit / AG-UI; React 19 batching work for reliable streaming and headless chat.",
      "Playwright e2e for non-deterministic agentic output using semantic embeddings and LLM-as-judge.",
    ],
  },
  {
    company: "Zoom Communications",
    place: "San Jose",
    title: "Senior Software Engineer",
    dates: "09/2024 – 11/2025",
    points: [
      "Generative UI for Zoom AI Companion with AI SDK, Claude, LangChain / LangGraph — streaming, tool orchestration, dynamic rendering.",
      "Snowplow JS telemetry SDK for Zoom Docs, Billing, and AI Companion.",
      "Autocomplete search and Jupyter Notebook integration.",
    ],
  },
  {
    company: "Prealize Health",
    place: "",
    title: "Staff Software Engineer (09/2023 – 08/2024); Senior Software Engineer (05/2021 – 10/2022)",
    dates: "05/2021 – 08/2024",
    points: [
      "Healthcare ML prediction dashboards in React, Next.js, TypeScript, and Tailwind.",
      "AWS Amplify, Python Chalice, API Gateway, Cognito / SSO / SAML.",
      "Jest and E2E in CI. OWASP CSP for HITRUST.",
    ],
  },
  {
    company: "Bluevine Capital",
    place: "Redwood City",
    title: "",
    dates: "10/2022 – 08/2023",
    points: [
      "Vue microfrontends, unit-testing discipline, and ESLint standards.",
      "Mentored frontend engineers on complexity and clean coding practices.",
    ],
  },
] as const;

export const earlier = [
  {
    company: "Zignal Labs",
    place: "San Francisco",
    title: "",
    dates: "08/2019 – 04/2021",
    summary: "Product features, e2e / CI, Backbone.js modernization.",
  },
  {
    company: "Yahoo / AdapTV / Verizon",
    place: "Sunnyvale",
    title: "",
    dates: "05/2016 – 07/2019",
    summary: "AngularJS to Ember engines micro-frontends.",
  },
  {
    company: "IBM Commerce",
    place: "Foster City",
    title: "Advisory",
    dates: "11/2015 – 05/2016",
    summary: "React omnichannel Direct Pricing.",
  },
  {
    company: "Mellon Financial",
    place: "San Francisco",
    title: "",
    dates: "12/2012 – 10/2015",
    summary: "Distribution dashboard in HTML5.",
  },
  {
    company: "Nuveen Investments",
    place: "Los Angeles",
    title: "Senior / Lead",
    dates: "02/2006 – 05/2012",
    summary: "Equity PM / trading browser apps.",
  },
] as const;

export const skills = [
  {
    group: "Frontend",
    items: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 / Sass",
      "Tailwind CSS",
      "Redux / RTK",
      "Vue.js",
      "React Hooks",
      "React Server Components",
      "SSR / SSG / static export",
      "Responsive design",
      "Web accessibility (WCAG / a11y)",
      "Web performance / Core Web Vitals",
      "Design systems",
      "Component architecture",
      "Micro-frontends",
      "Legacy modernization (Backbone, AngularJS, Ember)",
    ],
  },
  {
    group: "Agentic / AI",
    items: [
      "Agent harnesses",
      "CopilotKit / AG-UI",
      "Vercel AI SDK",
      "Claude / Anthropic API",
      "LangChain / LangGraph",
      "MCP (Model Context Protocol)",
      "Generative UI",
      "Streaming UI (SSE / WebSockets)",
      "Tool orchestration / function calling",
      "Prompt engineering",
      "LLM evals / LLM-as-judge",
      "Semantic embeddings",
      "Jupyter",
      "Claude Code",
    ],
  },
  {
    group: "Harness / Tooling",
    items: [
      "Node.js CLI development",
      "Agent harness architecture",
      "Plugin systems",
      "Skills harness",
      "TypeScript library authoring",
      "npm packages",
      "Monorepos",
      "Git / GitHub Actions",
      "CI/CD pipelines",
      "Vite / Webpack",
    ],
  },
  {
    group: "Fullstack / Cloud",
    items: [
      "Node.js",
      "Python",
      "REST API design",
      "Next.js fullstack / API routes",
      "AWS Amplify",
      "AWS Lambda / serverless",
      "Python Chalice",
      "API Gateway",
      "Cognito / SSO / SAML / OAuth 2.0",
    ],
  },
  {
    group: "Data / Databases",
    items: [
      "PostgreSQL",
      "PL/SQL",
      "Redis",
      "MongoDB",
      "Knowledge graphs",
      "Graph data modeling",
      "Vector databases / semantic search",
      "Data visualization dashboards",
      "Jupyter data workflows",
    ],
  },
  {
    group: "Quality",
    items: [
      "Playwright",
      "Jest",
      "E2E / CI",
      "LLM-based testing (embeddings, LLM-as-judge)",
      "OWASP / CSP",
      "HITRUST-minded UI",
      "ESLint / Prettier",
      "Code review",
      "Mentoring",
    ],
  },
] as const;

export const education = {
  degree: "B.E. Electrical Engineering",
  school: "Dharmsinh Desai Institute of Technology",
} as const;

export const certification = {
  name: "Claude Code: Software Engineering with Generative AI Agents",
  date: "11/2025",
} as const;
