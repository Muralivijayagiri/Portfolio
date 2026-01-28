import React from 'react';
import { Section, SectionHeading, Card } from './UI';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-primary-50 dark:bg-slate-950/50">
      <SectionHeading subtitle="My Arsenal" center>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="p-2 bg-primary-50 dark:bg-slate-800 rounded-lg text-primary-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                  >
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 pointer-events-none select-none" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;