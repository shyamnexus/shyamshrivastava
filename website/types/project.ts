export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  description: string;
  components: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  emoji: string;
  title: string;
  company: string;
  summary: string;
  seoDescription: string;
  overview: string[];
  facts: ProjectFact[];
  problemStatement: string[];
  role: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  engineeringChallenges: ProjectDetail[];
  keyDecisions: ProjectDetail[];
  results: string[];
  lessonsLearned: string[];
  relatedProjects: string[];
}
