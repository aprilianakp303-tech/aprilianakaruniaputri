export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100 for progress bar
  levelLabel: string; // e.g. "Pemula" or "Menengah"
  category: 'technical' | 'tools' | 'soft';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}
