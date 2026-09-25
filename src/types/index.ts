// ─── Projects ────────────────────────────────────────────

export type ProjectCategory = "web" | "mobile" | "ai";

export interface CaseStudy {
  problem: string;
  solution: string;
  decisions: string[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
}

// ─── Experience ──────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string; // leave out if this is your current job
  companyUrl?: string;
  highlights: string[];
  stack: string[];
}

// ─── Testimonials ────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  isPlaceholder: boolean;
}

// ─── Profile ─────────────────────────────────────────────

export interface Profile {
  name: string;
  headline: string;
  positioning: string;
  location: string;
  email: string;
  status: {
    building: string;
    learning: string;
  };
  links: {
    github: string;
    linkedin: string;
    cv: string;
  };
}
