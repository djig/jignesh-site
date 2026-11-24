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
  github: "https://github.com/djig",
  githubLabel: "github.com/djig",
  role: "Senior Software Engineer · AI Agent Products",
  positioningLead: "Fourteen years of product UI —",
  positioningTail: "now building AI agent products end to end.",
  positioning:
    "Fourteen years of product UI — now building AI agent products end to end.",
  summary:
    "Full-stack engineer who builds AI agent products end to end: streaming chat UIs, terminal clients, agent plugins, and the test and release pipelines behind them.",
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
    place: "remote",
    dates: "2026",
    title: "Lemma",
    subtitle: "AI agent chat for science and engineering",
    role: "Senior Software Engineer",
    problem:
      "Scientists and engineers need an agent chat that does real work — notebooks, papers, shared threads — and stays fast through long sessions.",
    built:
      "Full-stack features across Next.js, React, TypeScript, Python, and Postgres: embedded marimo notebooks, conversation content search, in-app LaTeX editing with PDF preview, and organization-shared conversations with training-data opt-in controls. Fixed long-session slowness in the streaming chat by removing per-event transcript clones, bounding re-renders, and cutting the per-turn wire payload.",
    stack: ["Next.js", "React", "TypeScript", "Python", "Postgres", "marimo"],
  },
  {
    index: "02",
    company: "Axiomatic AI",
    place: "remote",
    dates: "2026",
    title: "Terminal AI client",
    subtitle: "CLI · plan mode · plugins",
    role: "Senior Software Engineer",
    problem:
      "The same agent had to be usable from a terminal, not only from the web app.",
    built:
      "The company's terminal AI client, from initial setup to published releases: plan mode, plugin support, and the public SSE chat endpoint it consumes. Release and publish pipelines in GitHub Actions.",
    stack: ["TypeScript", "Node.js", "CLI", "SSE", "Plugins", "GitHub Actions"],
  },
  {
    index: "03",
    company: "Axiomatic AI",
    place: "remote",
    dates: "2026",
    title: "AxiPH",
    subtitle: "Photonics design agent",
    role: "Senior Software Engineer",
    problem:
      "A photonics design agent has to install, sign in, and update cleanly inside the coding agents engineers already use.",
    built:
      "Delivery for AxiPH across Claude Code, Codex, and pi: plugin build and marketplace, sign-in and environment handling, an in-agent feedback tool, cross-platform installers, and the download site.",
    stack: ["Claude Code", "Codex", "pi", "Plugins", "Installers", "MCP"],
  },
  {
    index: "04",
    company: "Zoom",
    place: "San Jose",
    dates: "2024–2025",
    title: "Zoom AI Companion",
    subtitle: "Generative UI",
    role: "Senior Software Engineer",
    problem:
      "Generative UI on a live collaboration product has to stream, orchestrate tools, and render dynamic components without feeling bolted on.",
    built:
      "Generative UI for Zoom AI Companion with the Vercel AI SDK, Claude, and LangGraph — real-time streaming, tool orchestration, and dynamic component rendering. A Snowplow-based JavaScript telemetry SDK used across Zoom Docs, Billing, and AI Companion.",
    stack: ["Vercel AI SDK", "Claude", "LangGraph", "Snowplow JS"],
  },
  {
    index: "05",
    company: "Prealize Health",
    place: "",
    dates: "2021–2024",
    title: "ML prediction dashboards",
    subtitle: "Healthcare ML",
    role: "Staff / Senior Software Engineer",
    problem:
      "Clinical and operations teams needed ML predictions presented clearly, inside a HITRUST-constrained healthcare stack.",
    built:
      "Serverless dashboards for healthcare ML predictions in React, Next.js, and TypeScript on AWS Amplify, Lambda, API Gateway, and Python Chalice. Cognito SSO (SAML, OIDC) and CSP controls that helped the web apps achieve HITRUST certification.",
    stack: ["React", "Next.js", "TypeScript", "AWS Amplify", "Chalice", "Cognito", "Jest"],
  },
] as const;

export const experience = [
  {
    company: "Axiomatic AI",
    place: "remote",
    title: "Senior Software Engineer",
    dates: "01/2026 – Present",
    points: [
      "Full-stack features on Lemma, an AI agent chat product for scientific and engineering work: embedded marimo notebooks, conversation search, in-app LaTeX editing with PDF preview, and organization-shared conversations with training-data opt-in controls.",
      "Fixed long-session slowness in the streaming chat by removing per-event transcript clones, bounding re-renders, and cutting the per-turn wire payload.",
      "Built the company's terminal AI client from initial setup to published releases: plan mode, plugin support, and the public SSE chat endpoint it consumes.",
      "AxiPH, the photonics design agent for Claude Code, Codex, and pi: plugin build and marketplace, sign-in and environment handling, in-agent feedback tool, cross-platform installers, and the download site.",
      "Playwright end-to-end smoke suite run on deployment, release and publish pipelines, and a label-triggered AI code review workflow in GitHub Actions.",
      "Prototyped Lemma Desktop (a bridge to local folders and MCP tools) and Lemma Buddy (persistent background agents).",
    ],
  },
  {
    company: "Zoom",
    place: "San Jose",
    title: "Senior Software Engineer",
    dates: "09/2024 – 11/2025",
    points: [
      "Generative UI for Zoom AI Companion with the Vercel AI SDK, Claude, and LangGraph: streaming, tool orchestration, dynamic component rendering.",
      "Snowplow-based JavaScript telemetry SDK used across Zoom Docs, Billing, and AI Companion.",
    ],
  },
  {
    company: "Prealize Health",
    place: "",
    title: "Staff Software Engineer (09/2023 – 08/2024); Senior Software Engineer (05/2021 – 10/2022)",
    dates: "05/2021 – 08/2024",
    points: [
      "Serverless dashboards for healthcare ML predictions in React, Next.js, and TypeScript on AWS Amplify, Lambda, API Gateway, and Python Chalice.",
      "Cognito SSO (SAML, OIDC) and CSP controls that helped the web apps achieve HITRUST certification.",
      "Jest and end-to-end tests in CI/CD, code reviews, and mentoring.",
    ],
  },
  {
    company: "Bluevine",
    place: "Redwood City",
    title: "Senior Software Engineer",
    dates: "10/2022 – 08/2023",
    points: [
      "Streamlined unit testing for Vue.js micro-frontends and wrote custom ESLint rules that enforced complexity limits.",
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
    group: "AI agents",
    items: [
      "Claude / Anthropic API",
      "MCP",
      "Agent plugins (Claude Code, Codex, pi)",
      "Vercel AI SDK",
      "LangGraph",
      "AG-UI / CopilotKit",
      "SSE streaming",
      "LLM evals",
    ],
  },
  {
    group: "Frontend",
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    group: "Backend / Cloud",
    items: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "AWS (Lambda, API Gateway, Amplify, Cognito)",
    ],
  },
  {
    group: "Quality / Delivery",
    items: ["Playwright", "Jest", "GitHub Actions", "npm publishing", "Monorepos"],
  },
] as const;

export const projects = [
  {
    name: "EngToolsHub.com",
    href: "https://engtoolshub.com/",
    summary:
      "47+ free browser-based developer tools, built with coding agents (Claude Code, Codex, Cursor).",
  },
  {
    name: "bettagames.io",
    href: "https://bettagames.io/",
    summary: "Browser puzzle games, including Last Piece Standing and Twinsies.",
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
