import React from 'react';
import { Section, SectionHeading, Card } from './UI';
import { ACHIEVEMENTS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading subtitle="Who Am I?">About Me</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300"
          >
            <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed">
              I’m an <span className="text-primary-600 dark:text-primary-400 font-bold">AI‑focused full‑stack engineer</span> who builds end‑to‑end web and mobile experiences, from clean UIs to scalable backends.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              I love turning ideas into <span className="text-primary-600 dark:text-primary-400 font-bold">production‑ready products</span> using modern frameworks, cloud services, and <span className="text-primary-600 dark:text-primary-400 font-bold">practical AI integrations</span>.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.id} className="h-full border-l-4 border-l-primary-500 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                      <Icon size={24} />
                    </div>
                    {achievement.count && (
                      <span className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                        {achievement.count}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;