export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Mobile/Hybrid' | 'Desktop' | 'Interactive';
  techStack: string[];
  features: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string; // Lucide icon name or image path
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: any; // React Component
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  count?: string;
  icon: any;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}