import React, { useState } from 'react';
import { Section, SectionHeading, Card, Button } from './UI';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web', 'Mobile/Hybrid', 'Desktop', 'Interactive'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <Section id="projects" className="bg-blue-50 dark:bg-slate-950">
      <SectionHeading subtitle="Recent Works" center>Featured Projects</SectionHeading>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${filter === cat
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group flex flex-col h-full overflow-hidden p-0">
            {/* Image container */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:opacity-0 transition-opacity z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button size="sm" className="w-full flex items-center justify-center gap-2">
                  View Details <ExternalLink size={16} />
                </Button>
                {/* Placeholder for source code link if available */}
                <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors" aria-label="View Source">
                  <Github size={20} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;