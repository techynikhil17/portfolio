export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  
  // Detailed Content
  overview: string;
  problemStatement: string;
  datasetDetails: {
    source: string;
    fields: string[];
    description?: string;
  };
  features: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    ai_model?: string;
    data?: string;
    hosting?: string;
    description: string; // Textual description of the diagram
  };
  techStack: string[];
  pipeline: string; // Step by step flow
  uniqueSellingPoints: string[];
  mlModel?: {
    algorithm: string;
    evaluation: string;
    featureEngineering: string;
    optimization?: string;
  };
  githubUrl?: string;
  npmUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}