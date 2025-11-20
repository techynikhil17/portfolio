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
    tags: ["GenAI", "Next.js", "Gemini API", "Vercel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    overview: "GhostFolio is an AI-powered platform that analyzes failed startups and produces actionable revival strategies using real datasets and Gemini API intelligence.",
    problemStatement: "Young founders repeat the same mistakes of past failed startups. GhostFolio converts failure data into learning material and actionable pivots.",
    datasetDetails: {
      source: "100+ failed startup profiles from Failory and other public sources.",
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
      frontend: "Next.js + Tailwind",
      backend: "Vercel Edge Functions",
      ai_model: "Gemini API",
      data: "Custom JSON dataset with 30+ entries",
      description: "User selects startup → System loads structured data → Sends context to Gemini → Gets pivot ideas, viability score, new names → Shows animated result pages."
    },
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Gemini API", "Vercel"],
    pipeline: "User selects startup → System loads structured data → Sends context to Gemini → Gets pivot ideas, viability score, new names → Shows animated result pages.",
    uniqueSellingPoints: [
      "Not a toy project — uses real startup data.",
      "Real AI analysis pipeline.",
      "Production-grade public API."
    ]
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
      hosting: "Replit",
      ai_model: "Saved XGBoost .json or pickle",
      description: "Communication: JSON POST request → model → prediction."
    },
    mlModel: {
      algorithm: "XGBoost Classifier",
      evaluation: "Accuracy, Confusion Matrix",
      featureEngineering: "Category encoding, balancing, normalization",
      optimization: "Tuning learning rate, depth"
    },
    techStack: ["Python", "XGBoost", "FastAPI", "Pandas", "Scikit-Learn", "Replit"],
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
  }
];