import { Project, SkillCategory, Achievement, Certification, NavItem } from './types';
import {
  Code, Layout, Smartphone, Database, Cloud, Cpu,
  Trophy, Star, Award, Terminal
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' }
    ]
  },
  {
    title: 'Web Dev',
    icon: Layout,
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' }
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' }
    ]
  },
  {
    title: 'Emerging Tech',
    icon: Cpu,
    skills: [
      { name: 'Voice AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg' }
    ]
  }
];

export const PROJECTS: Project[] = [
  // Web Applications
  /* 
  {
    id: 'erp',
    title: 'ERP Software',
    category: 'Web',
    description: 'Enterprise resource planning solution with comprehensive business management features.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    features: ['Business management', 'Resource planning', 'Integrated modules'],
    image: 'https://picsum.photos/600/400?random=1'
  },
  */
  {
    id: 'landing',
    title: 'Landing Websites',
    category: 'Web',
    description: 'Professional portfolio and business websites with modern UI/UX.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    features: ['Modern design', 'Mobile-first', 'SEO optimized'],
    image: '/Projects/landingwebsites.png'
  },
  /* 
  {
    id: 'builder',
    title: 'Create Your Own Website',
    category: 'Web',
    description: 'Website builder platform enabling users to design custom sites.',
    techStack: ['React', 'Redux', 'Drag-and-Drop API'],
    features: ['Drag-and-drop builder', 'Template system', 'Custom domains'],
    image: 'https://picsum.photos/600/400?random=3'
  },
  */
  {
    id: 'lms',
    title: 'Library Management System',
    category: 'Web',
    description: 'A digital system for managing books, Students, and Borrowings efficiently with a simple interface.',
    techStack: ['PHP', 'MySQL', 'Bootstrap'],
    features: ['Book cataloging', 'Student management', 'Borrowing system'],
    image: '/Projects/LibraryManagement.png'
  },
  // Mobile & Hybrid  
  {
    id: 'pfs',
    title: 'Personal File System',
    category: 'Mobile/Hybrid',
    description: 'Android Personal File System application with secure decentralized storage.',
    techStack: ['Android', 'dart', 'Sqlite'],
    features: ['File organization', 'Cloud sync', 'Secure encryption'],
    image: '/Projects/personalFile.png'
  },
  /*
  {
    id: 'voice',
    title: 'Kirana Voice Agent',
    category: 'Mobile/Hybrid',
    description: 'AI-powered voice-enabled retail assistant for local stores.',
    techStack: ['Android', 'Python', 'Voice AI'],
    features: ['Voice commands', 'Inventory management', 'Billing'],
    image: 'https://picsum.photos/600/400?random=6'
  },
  */
  {
    id: 'recheck',
    title: 'RecheckOnce',
    category: 'Mobile/Hybrid',
    description: 'A simple travel checklist app designed to ensure essential items are verified and never forgotten.',
    techStack: ['Flutter', 'Dart', 'Isar'],
    features: ['Item verification', 'Checklist management', 'Real-time updates'],
    image: '/Projects/recheckOnce.png'
  },
  /* 
  {
    id: 'arvr',
    title: 'Jewellery AR/VR',
    category: 'Mobile/Hybrid',
    description: 'Augmented and virtual reality shopping experience for jewelry retail.',
    techStack: ['Unity', 'C#', 'ARCore'],
    features: ['Virtual try-on', '360° view', 'Realistic rendering'],
    image: 'https://picsum.photos/600/400?random=8'
  },
  */
  // Desktop
  {
    id: 'fileshare',
    title: 'File Sharing App',
    category: 'Desktop',
    description: 'A peer-to-peer file sharing application enabling fast and secure transfers between Windows and macOS on a local network.',
    techStack: ['Python', 'PyQt', 'Socket'],
    features: ['Fast transfers', 'Local network sharing', 'Progress Bar'],
    image: '/Projects/FileSharingApp.png'
  },
  {
    id: 'tracker',
    title: 'Task & Learnings Tracker',
    category: 'Desktop',
    description: 'Progress monitoring and productivity tool.',
    techStack: ['HTML, CSS, JS', 'Superbase'],
    features: ['Task management', 'Progress tracking', 'Analytics'],
    image: '/Projects/TaskTodo.png'
  },
  // Interactive
  /* 
  {
    id: 'treasure',
    title: 'Treasure Hunt',
    category: 'Interactive',
    description: 'Interactive game application with engaging challenges.',
    techStack: ['Unity', 'C#'],
    features: ['Puzzles', 'Location-based tasks', 'Scoring system'],
    image: 'https://picsum.photos/600/400?random=11'
  },
  */
  /* 
  {
    id: 'todo',
    title: 'Task/Todo Management',
    category: 'Interactive',
    description: 'Productivity application for task organization.',
    techStack: ['React Native', 'Redux'],
    features: ['Task lists', 'Priorities', 'Deadlines', 'Reminders'],
    image: 'https://picsum.photos/600/400?random=12'
  }
  */
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'leetcode',
    title: 'LeetCode',
    count: '50+',
    description: 'Problems Solved - Strong DSA foundation',
    icon: Code
  },
  {
    id: 'projects',
    title: 'Projects',
    count: '15+',
    description: 'Completed across Web, Mobile & Desktop',
    icon: Terminal
  },
  {
    id: 'contribution',
    title: 'Open Source',
    description: 'Active contributor to technical communities',
    icon: Star
  },
  {
    id: 'contests',
    title: 'Competitive',
    description: 'Consistent performance in coding contests',
    icon: Trophy
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'java',
    title: 'Oracle Java Certification',
    issuer: 'Oracle Corporation',
    description: 'Validated Java programming expertise and enterprise development skills.',
    image: '/certifications/placeholder-cert.png'
  },
  {
    id: 'cisco',
    title: 'Cisco Networking Certificate',
    issuer: 'Cisco Systems',
    description: 'Certified in network fundamentals, routing, and switching technologies.',
    image: '/certifications/placeholder1-cert.png'
  }
];
