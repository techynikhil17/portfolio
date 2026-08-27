import { Project } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/techynikhil17",
  linkedin: "https://www.linkedin.com/in/m-nikhil-126690289"
};

export const SKILLS = [
  "Python", "Machine Learning", "XGBoost", "Scikit-Learn", 
  "FastAPI", "GenAI", "SQL", "Azure Fundamentals", "Prompt Engineering"
];

export const PROJECTS: Project[] = [
  {
    id: "ghostfolio",
    title: "GhostFolio",
    shortDescription: "AI-powered startup autopsy & revival strategy platform.",
    tags: ["GenAI", "React", "Gemini API", "Vercel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    overview: "GhostFolio is an AI-powered platform that analyzes failed startups and produces actionable revival strategies using real datasets and Gemini API intelligence.",
    problemStatement: "Young founders repeat the same mistakes of past failed startups. GhostFolio converts failure data into learning material and actionable pivots.",
    datasetDetails: {
      source: "30+ failed startup profiles from Failory and other public sources.",
      fields: ["Category", "Funding", "Market", "Team Size", "Failure Reason", "Business Model", "Year"]
    },
    features: [
      "Startup failure profiling",
      "AI-powered pivot suggestions",
      "“Chance of Revival” viability score (0–10)",
      "Name revamp generator",
      "Automated business SWOT analysis",
      "Real API endpoint served from Vercel"
    ],
    architecture: {
      frontend: "React + Tailwind",
      backend: "Vercel Edge Functions",
      ai_model: "Gemini API",
      data: "Custom JSON dataset with 30+ entries",
      description: "User selects startup → System loads structured data → Sends context to Gemini → Gets pivot ideas, viability score, new names → Shows animated result pages."
    },
    techStack: ["React", "Tailwind CSS", "TypeScript", "Gemini API", "Vercel"],
    pipeline: "User selects startup → System loads structured data → Sends context to Gemini → Gets pivot ideas, viability score, new names → Shows animated result pages.",
    uniqueSellingPoints: [
      "Not a toy project — uses real startup data.",
      "Real AI analysis pipeline.",
      "Production-grade public API."
    ],
    liveUrl: "https://ghostfoliov2.vercel.app/"
  },
  {
    id: "errbuddy",
    title: "errbuddy",
    shortDescription: "npm CLI tool that intercepts terminal stderr and turns raw stack traces into actionable fix panels.",
    tags: ["Node.js", "CLI", "npm", "Open Source"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop",
    overview: "errbuddy is a published npm CLI tool that wraps any terminal command and intercepts its stderr stream in real time. Instead of dumping raw stack traces, it classifies errors across 11 runtimes using a two-tier hybrid detector (known-signature matching + heuristic fallback) and replaces them with clean, structured diagnostic panels with actionable fix suggestions.",
    problemStatement: "Developers — especially beginners — waste enormous time decoding cryptic stack traces. Raw stderr output is noisy, unstructured, and rarely tells you what to actually do next. There was no lightweight, API-key-free CLI tool that intelligently classifies and explains terminal errors across multiple runtimes.",
    datasetDetails: {
      source: "11 runtime error signature libraries (Node.js, Python, Go, Rust, Docker, Prisma, TypeScript, Git, npm, Bash, Java)",
      fields: ["Error signature patterns", "Runtime classifier", "Fix suggestions", "Severity level", "Fallback heuristic output"]
    },
    features: [
      "Intercepts stderr from any command in real time",
      "Two-tier hybrid detection: known-signature matching + heuristic fallback",
      "Supports 11 runtimes: Node.js, Python, Go, Rust, Docker, Prisma, TypeScript, Git, npm, Bash, Java",
      "Structured diagnostic panel with classify → explain → suggest pipeline",
      "Zero API key required — fully offline and free",
      "Published on npm: installable with `npm install -g errbuddy`",
      "Clean minimal panels for unknown errors (no hallucinated output)"
    ],
    architecture: {
      backend: "Node.js (CommonJS)",
      description: "User runs `errbuddy <command>` → stderr stream intercepted → two-tier classifier runs → known signature matched or heuristic applied → structured panel rendered in terminal."
    },
    techStack: ["Node.js", "npm", "CommonJS", "stderr stream interception", "Regex pattern matching"],
    pipeline: "User runs errbuddy <command> → stderr intercepted in real time → Tier 1: known-signature match across 11 runtimes → Tier 2: heuristic fallback if no match → classify → explain → suggest panel rendered",
    uniqueSellingPoints: [
      "Published and live on npm — real open-source tool with actual users.",
      "Zero dependencies on LLMs or external APIs — works offline, always free.",
      "Two-tier hybrid detection avoids both false positives and silent failures."
    ],
    githubUrl: "https://github.com/techynikhil17/ErrorBuddy",
    npmUrl: "https://npmjs.com/package/errbuddy"
  },
  {
    id: "npm-hawk",
    title: "NPM Hawk",
    shortDescription: "Full-stack npm security dashboard with real-time CVE scanning and composite health scoring.",
    tags: ["React", "Node.js", "Express", "Security", "OSV.dev API"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    overview: "NPM Hawk is a full-stack security monitoring dashboard for npm packages. It auto-discovers all packages published by a GitHub/npm username, scans each one for known CVEs via the OSV.dev API in real time, computes a composite health score (0–100) across five dimensions, and generates a side-by-side multi-package comparison matrix. Deployed on Vercel (frontend) and Railway (backend).",
    problemStatement: "npm package maintainers and consumers have no single dashboard to monitor the security health of multiple packages simultaneously. Manually checking CVEs per-package on npm is tedious and lacks scoring or comparison tooling.",
    datasetDetails: {
      source: "OSV.dev API (Open Source Vulnerabilities database) + npm registry metadata",
      fields: ["CVE ID", "Severity", "Package version", "Vulnerability description", "Health score dimensions", "Publish date", "Download stats"]
    },
    features: [
      "Auto-discovery of all npm packages by username",
      "Real-time CVE scanning via OSV.dev API",
      "Composite health score (0–100) across 5 dimensions",
      "Multi-package side-by-side comparison matrix",
      "Deployed: Vercel (frontend) + Railway (backend)"
    ],
    architecture: {
      frontend: "React + Tailwind CSS",
      backend: "Node.js + Express",
      hosting: "Vercel + Railway",
      description: "User enters npm username → backend auto-discovers all packages from npm registry → OSV.dev API queried per package for CVEs → health score computed → comparison matrix rendered in frontend."
    },
    techStack: ["React", "Node.js", "Express", "OSV.dev API", "Tailwind CSS", "Vercel", "Railway"],
    pipeline: "Username entered → npm registry queried for all packages → OSV.dev API scanned per package → CVEs parsed → 5-dimension health score computed → comparison matrix rendered",
    uniqueSellingPoints: [
      "Auto-discovers all packages for any npm username — no manual input per package.",
      "Composite 5-dimension health scoring goes beyond simple CVE count.",
      "Live deployed tool — not a prototype."
    ],
    githubUrl: "https://github.com/techynikhil17/NPM-Hawk",
    liveUrl: "https://npm-hawk.vercel.app"
  },
  {
    id: "crime-prediction",
    title: "Bangalore Crime Prediction",
    shortDescription: "XGBoost-based crime pattern analysis system.",
    tags: ["XGBoost", "FastAPI", "Machine Learning", "Analytics"],
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop",
    overview: "A machine learning system that predicts crime likelihood across Bangalore using a multi-year real Bangalore crime dataset, deployed with FastAPI.",
    problemStatement: "Bangalore’s crime reporting data is large and inconsistent. Citizens and police could benefit from early pattern prediction for hotspots and categories.",
    datasetDetails: {
      source: "Multi-year dataset (2019–2025) exclusively for Bangalore.",
      fields: ["Crime type", "Crime code", "Area/Region", "Victim age/gender", "Year/Month", "Lat/Long", "Case category"],
      description: "Cleaned, merged, and preprocessed manually. Handled missing fields and encoded classes."
    },
    features: [
      "Focused entirely on Bangalore (not generic India)",
      "Real ML pipeline + deployment",
      "Cleanly designed API for frontend integration",
      "Built to scale for additional cities"
    ],
    architecture: {
      backend: "FastAPI",
      ai_model: "Saved XGBoost .json or pickle",
      description: "Communication: JSON POST request → model → prediction."
    },
    mlModel: {
      algorithm: "XGBoost Classifier",
      evaluation: "Accuracy, Confusion Matrix",
      featureEngineering: "Category encoding, balancing, normalization",
      optimization: "Tuning learning rate, depth"
    },
    techStack: ["Python", "XGBoost", "FastAPI", "Pandas", "Scikit-Learn"],
    pipeline: "User enters details → FastAPI → XGBoost model → returns prediction → displayed in UI.",
    uniqueSellingPoints: [
      "Localized to Bangalore specific dynamics",
      "Full deployment cycle (not just a notebook)"
    ]
  },
  {
    id: "movie-rec",
    title: "CineMatch AI",
    shortDescription: "Content-based recommendation engine using metadata similarity.",
    tags: ["NLP", "Scikit-Learn", "TF-IDF", "Python"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
    overview: "A content-based movie recommendation engine using metadata similarity.",
    problemStatement: "Users struggle to find movies similar to niche favorites based on plot nuances rather than just broad genres.",
    datasetDetails: {
      source: "TMDB dataset",
      fields: ["Title", "Genre", "Cast", "Plot Summary", "Keywords"]
    },
    features: [
      "Indirect similarity matching (plot-based)",
      "Direct similarity matching (genre/cast)",
      "Stable recommendation output",
      "Clean fallback handling for missing metadata"
    ],
    architecture: {
      backend: "Python",
      ai_model: "Scikit-Learn (TF-IDF + Cosine Similarity)",
      description: "Lightweight API wrapping the recommendation logic."
    },
    mlModel: {
      algorithm: "Cosine Similarity on TF-IDF Vectors",
      evaluation: "Qualitative testing of recommendation relevance",
      featureEngineering: "Text vectorization of plot summaries"
    },
    techStack: ["Python", "Pandas", "Scikit-Learn", "Numpy"],
    pipeline: "TF-IDF vectorization of plot → Cosine similarity matrix → Ranked top-N recommendations.",
    uniqueSellingPoints: [
      "Focuses on plot content rather than user ratings",
      "Highly interpretable results"
    ]
  },
  {
    id: "lenny-growth-assistant",
    title: "Lenny Growth Assistant",
    shortDescription: "Grounded RAG product & growth advisor over Lenny's Podcast transcripts, with citation-backed answers and generated essays.",
    tags: ["GenAI", "RAG", "FastAPI", "Claude", "pgvector"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2670&auto=format&fit=crop",
    overview: "A grounded product & growth advisor built on ~300 Lenny's Podcast episode transcripts. Every answer is traceable to a real guest and episode, or the assistant explicitly says the archive doesn't cover it instead of guessing. Can also generate Ship 30 for 30-style essays and Markdown/HTML artifacts rendered in a security-sandboxed viewer. Built for a Forward Deployed Engineer take-home assignment.",
    problemStatement: "Generic LLM chat over a knowledge corpus tends to hallucinate confidently instead of admitting gaps, and provider lock-in makes evaluation and cost control hard. This project needed grounded, citation-backed answers with a swappable local/cloud model backend and a safe way to render generated documents.",
    datasetDetails: {
      source: "~300 Lenny's Podcast episode transcripts, ingested via an idempotent CLI pipeline and embedded with local sentence-transformers into Postgres/pgvector.",
      fields: ["Guest", "Episode", "Transcript excerpt", "YouTube link", "Embedding vector"]
    },
    features: [
      "Grounded multi-turn Q&A with visible, expandable citations back to guest/episode/excerpt",
      "Ship 30 for 30 essay generation as a dedicated skill, not a one-off prompt",
      "Markdown/HTML artifact generation rendered in a sandboxed, security-isolated viewer",
      "Runtime-switchable local (Ollama) or cloud (Anthropic Claude) model, no restart required",
      "Animated marketing landing page separate from the working chat app",
      "Full automated test suite covering retrieval, session isolation, agent routing, and artifact XSS sanitization"
    ],
    architecture: {
      frontend: "React + TypeScript (landing page + chat app)",
      backend: "FastAPI, provider-agnostic tool-calling agent loop",
      ai_model: "Claude (Anthropic) or local Ollama (llama3.2), switchable at runtime",
      data: "PostgreSQL + pgvector for retrieval, local sentence-transformers for embeddings",
      description: "User asks a question → FastAPI agent routes to one of three skills (grounded_qa, ship30, artifact_gen) → pgvector similarity search retrieves relevant transcript chunks → LLM (Ollama or Claude) generates a grounded response with citations → Markdown/HTML artifacts render in a sandboxed panel."
    },
    techStack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "pgvector", "Claude API", "Ollama", "Docker", "SQLAlchemy", "Alembic"],
    pipeline: "Transcript ingestion (idempotent CLI) → chunking + local embedding → pgvector storage → user query → agent skill routing → grounded retrieval → LLM response with citations or artifact generation → sandboxed rendering.",
    uniqueSellingPoints: [
      "Explicitly refuses to answer outside its grounded corpus instead of hallucinating.",
      "Two-layer artifact security (sandboxed iframe + server-side sanitization) verified against a dozen XSS payloads.",
      "Genuine runtime provider switch between local and cloud LLMs, not just a config toggle."
    ],
    githubUrl: "https://github.com/techynikhil17/lenny-growth-assistant"
  },
  {
    id: "vaultx",
    title: "VaultX",
    shortDescription: "Zero-knowledge password manager with client-side AES-256-GCM encryption, breach checking, and a vault health score.",
    tags: ["Next.js", "Security", "Supabase", "Web Crypto API", "Hackathon Winner"],
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop",
    overview: "VaultX is a zero-knowledge password manager and strength analyzer. Vault entries are encrypted on-device with AES-256-GCM using a key derived from the user's master password via PBKDF2 (310,000 iterations); the master password and derived key never leave the browser, so the server only ever sees ciphertext. Built as part of the BVA Hackathon — and won.",
    problemStatement: "Most password managers require trusting the server with plaintext credentials at some point in the pipeline. VaultX needed to guarantee the server can never see vault contents, while still offering breach checking, strength analysis, and a health dashboard.",
    datasetDetails: {
      source: "Have I Been Pwned (HIBP) breach database, queried via k-Anonymity so only the first 5 hex characters of a password's SHA-1 hash ever leave the client.",
      fields: ["Password entropy", "Breach status", "Reuse count", "Vault health score", "Activity log events"]
    },
    features: [
      "Client-side AES-256-GCM encryption with per-entry IV; server stores ciphertext only",
      "PBKDF2-SHA256 (310k iterations) master-password key derivation, key never leaves the browser",
      "Password strength analyzer: entropy, crack-time estimate, pattern detection",
      "HIBP breach check via k-Anonymity, single and bulk vault health scan (0-100 score)",
      "Supabase Row Level Security so users can only ever access their own rows",
      "Activity log, keyboard shortcuts, clipboard auto-clear after 30 seconds"
    ],
    architecture: {
      frontend: "Next.js 14 (App Router)",
      backend: "Supabase (Postgres + Auth + Row Level Security)",
      data: "Encrypted vault rows in Supabase, decrypted only in-browser via Web Crypto API",
      hosting: "Vercel",
      description: "User unlocks vault with master password → PBKDF2 derives an AES-256-GCM key client-side → vault CRUD operations encrypt/decrypt entirely in-browser → only ciphertext is sent to Supabase, which enforces per-user row-level security independent of application logic."
    },
    techStack: ["Next.js 14", "TypeScript", "Supabase", "Web Crypto API", "PostgreSQL", "Zod"],
    pipeline: "Master password entered → PBKDF2-SHA256 (310k iters) derives AES key client-side → vault entries encrypted/decrypted in-browser → ciphertext synced to Supabase → RLS enforces per-user isolation server-side.",
    uniqueSellingPoints: [
      "True zero-knowledge design — the server never has access to plaintext or the derived key.",
      "HIBP breach checking without ever exposing the full password hash.",
      "Won the BVA Hackathon."
    ],
    githubUrl: "https://github.com/techynikhil17/VaultX",
    liveUrl: "https://vault-x-mauve.vercel.app"
  },
  {
    id: "avems",
    title: "AI Video Evidence Management System",
    shortDescription: "Body-worn camera video evidence platform for law enforcement — AI detection, face/plate recognition, and grounded bilingual incident summaries.",
    tags: ["Computer Vision", "YOLO", "FastAPI", "Vector Search", "Team Project"],
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2670&auto=format&fit=crop",
    overview: "AVEMS is a centralized platform for ingesting, storing, analyzing, searching, and exporting body-worn camera evidence using computer vision, vector search, and LLMs. Built as a team project (contributor) with evidence integrity and bilingual (English + Kannada) support as hard, non-negotiable design constraints rather than bolted-on features.",
    problemStatement: "Law enforcement agencies generate huge volumes of bodycam footage with no efficient way to search, cross-reference, or summarize it for investigations, while any evidence-handling system must guarantee chain-of-custody integrity and support regional-language content without corrupting it.",
    datasetDetails: {
      source: "Real bodycam footage processed end-to-end through the live pipeline; face embeddings and detections indexed in Qdrant.",
      fields: ["Face embeddings (512-d)", "Vehicle/plate detections (EN + Kannada OCR)", "Weapon/person/object detections", "Chain-of-custody audit events", "Grounded incident summaries"]
    },
    features: [
      "End-to-end pipeline: upload → detection → face/attribute recognition → ANPR → LLM incident summary, fully automatic",
      "Dual-model detection: YOLO11m for people/vehicles/bags plus a dedicated higher-recall weapon model",
      "Face re-identification via InsightFace embeddings + Qdrant similarity search",
      "Bilingual ANPR/OCR (English + Kannada) with strict script separation, never concatenated",
      "Content-addressed SHA-256 storage with an append-only, tamper-evident audit trail",
      "Idempotent, retry-safe Celery task graph — redeliveries never duplicate vectors or rows"
    ],
    architecture: {
      backend: "FastAPI + Celery (GPU/CPU queue split)",
      ai_model: "YOLO11m + YOLOv8 (weapon), InsightFace (buffalo_l), Florence-2, PaddleOCR, Claude Haiku 4.5",
      data: "PostgreSQL (relational) + Qdrant (vectors) + MinIO (object storage)",
      description: "Video upload → FastAPI hashes and stores it → Celery fans out to a GPU worker (frame-sampled YOLO detection, batched) → detections fan out again in parallel to face/attribute extraction (GPU) and plate OCR (CPU) → a chord callback grounds an LLM incident summary once both finish → results land in Postgres + Qdrant for search."
    },
    techStack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Qdrant", "MinIO", "Redis", "Docker", "YOLOv11", "InsightFace", "Claude API"],
    pipeline: "Upload (SHA-256 dedup) → GPU frame-sampled detection (~1fps, batched) → parallel fan-out: face/attribute recognition (GPU) + ANPR (CPU) → chord callback triggers grounded LLM summary → indexed in Postgres + Qdrant for search.",
    uniqueSellingPoints: [
      "Evidence integrity by construction: content-addressed storage, append-only audit trail, no stuck processing states.",
      "Latency-engineered pipeline (frame sampling, batching, crop-only recognition, GPU/CPU queue split) rather than naively running every model on every frame.",
      "Bilingual OCR pipeline that keeps English and Kannada script cleanly separated end-to-end."
    ],
    githubUrl: "https://github.com/rezbites/bodydetection"
  }
];

export const EXPERIENCE = [
  {
    role: "AI Product Developer Intern",
    company: "Rooman Technologies Pvt. Ltd.",
    location: "Bangalore, India",
    period: "2026 – Present",
    techStack: ["Python", "Django", "React", "PostgreSQL", "Convex", "FastAPI", "Docker", "REST APIs", "STT", "TTS", "LLM"],
    projects: [
      {
        name: "Voice Agent",
        bullets: [
          "Stabilized a real-time multi-persona voice agent using streaming STT → LLM → TTS pipelines enabling seamless persona switching without session resets.",
          "Resolved complex async and streaming failures including routing errors, STT reconnection loops, silent handoffs, and interruption deadlocks.",
          "Benchmarked open-source TTS models for conversational AI — evaluating latency, streaming feasibility, and deployment constraints.",
          "Designed deterministic routing prompts and persistent streaming logic to maintain low-latency conversational voice interactions."
        ]
      },
      {
        name: "CRM Modules — Accounts, Meetings, Tasks",
        bullets: [
          "Engineered the Accounts module with full CRUD, six view modes (List, Kanban, Grid, Chart, Timeline, Split), 18+ filterable fields, and a deduplication engine for group-based merge resolution.",
          "Built the Meetings module with Google Meet auto-provisioning, RSVP participant tracking, real-time reminder polling every 30 seconds, and role-based visibility for host vs. admin users.",
          "Developed the Tasks module with bidirectional account sync, overdue detection, recurring task configuration, and five-status lifecycle management with automatic closedAt timestamping.",
          "Implemented cross-module Bulk Actions system (mass delete, transfer, update) with criteria-based filtering and server-side preview across Accounts, Meetings, and Tasks.",
          "Designed RESTful Django proxy APIs mapping snake_case frontend fields to camelCase Convex backend, with CSV import/export, soft-delete/restore flows, and timeline audit logging."
        ]
      },
      {
        name: "ERP Modules",
        bullets: [
          "Built RBAC-secured ERP modules with normalized database schemas, dynamic dashboards, and advanced filtering.",
          "Delivered scalable React frontend systems with server-side pagination, debounced search, and reusable UI components across Git-tracked version control workflows."
        ]
      }
    ]
  }
];
