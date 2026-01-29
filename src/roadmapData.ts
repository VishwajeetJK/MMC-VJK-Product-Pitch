export const roadmapData = [
  {
    phase: "Phase 1: The R&D Pilot",
    role: "Lead: VC R&D Product Associate (Jeet)",
    cost: "$850/mo",
    objective: "Validate 'Media-Lift' hypothesis using historical portfolio data.",
    stack: "Multi-Model Sandbox (Gemini 1.5 Pro, GPT-4o, Claude 3.5)",
    breakdown: [
      { item: "OpenAI API (Reasoning)", cost: "$300 (GPT-4o)" },
      { item: "Anthropic API (Coding)", cost: "$250 (Sonnet 3.5)" },
      { item: "Google Vertex AI (Context)", cost: "$150 (Gemini 1.5)" },
      { item: "Vector DB (Pinecone Starter)", cost: "$70" },
      { item: "R&D Buffer (Failures/Retries)", cost: "$80" },
    ],
  },
  {
    phase: "Phase 2: Deal Flow Integration",
    role: "Lead: VC R&D Lead + 1 Data Eng",
    cost: "$3,200/mo",
    objective: "Real-time scoring of live incoming deal flow (15+ decks/week).",
    stack: "Enterprise Pipelines + Observability (LangSmith)",
    breakdown: [
      { item: "LLM Consortium (High Vol)", cost: "$1,800" },
      { item: "Pinecone Enterprise (p2.x8)", cost: "$400" },
      { item: "LangSmith (Tracing/Debug)", cost: "$300" },
      { item: "Cloud Run/Vercel Pro", cost: "$200" },
      { item: "Data Cleaning APIs", cost: "$500" },
    ],
  },
  {
    phase: "Phase 3: Automated Sourcing",
    role: "Lead: Product Manager + 2 Engineers",
    cost: "$9,500/mo",
    objective: "Proactive market scanning for startups matching expiring inventory.",
    stack: "Dedicated GPU Clusters + 24/7 Scrapers",
    breakdown: [
      { item: "Dedicated GPU Instances", cost: "$4,000" },
      { item: "Live Media Inventory Feeds", cost: "$2,500" },
      { item: "Scraping Proxies (BrightData)", cost: "$1,500" },
      { item: "Enterprise LLM Throughput", cost: "$1,500" },
    ],
  },
  {
    phase: "Phase 4: Sovereign IP (The Moat)",
    role: "Lead: Head of Data Product",
    cost: "CapEx Investment",
    objective: "Full data sovereignty. Training proprietary 'Media-Elasticity' models.",
    stack: "On-Prem NVIDIA H100 Cluster",
    breakdown: [
      { item: "Hardware Amortization", cost: "CapEx" },
      { item: "Zero-Data-Egress Architecture", cost: "—" },
    ],
  },
];
