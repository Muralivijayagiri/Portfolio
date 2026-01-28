import React, { useRef } from 'react';
import { Section, SectionHeading, Card } from './UI';
import { CERTIFICATIONS } from '../constants';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Education: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // useScroll logic is global and independent of theme state
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Maps the scroll progress to a percentage of the timeline height
  const dotY = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="education" className="bg-indigo-50 dark:bg-slate-950/50">
      <SectionHeading subtitle="Academic Journey">Education & Certifications</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <h3 className="flex items-center text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            <GraduationCap className="mr-3 text-primary-600" /> Education
          </h3>

          <div ref={timelineRef} className="relative pl-8 space-y-10">
            {/* The Vertical Line Container */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800">
              {/* The Traveling Blue Dot - Fixed for Light Mode Visibility */}
              <motion.div
                style={{ top: dotY }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg shadow-primary-500/50 z-50"
              />
            </div>

            {/* B.Tech Entry */}
            <div className="relative">
              {/* Static Dot */}
              <div className="absolute -left-[41px] bg-primary-600/30 dark:bg-primary-900/30 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech in Computer Science</h4>
                  <span className="text-sm font-mono text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">Present</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">Mahatma Gandhi Institute of Technology (MGIT)</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Gandipet, Hyderabad, Telangana</p>

                <h5 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <BookOpen size={16} className="mr-2" /> Key Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['DSA', 'OOP', 'OS', 'DBMS', 'Cloud Computing', 'Cyber Security'].map(course => (
                    <span key={course} className="text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                      {course}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Diploma Entry */}
            <div className="relative">
              {/* Static Dot */}
              <div className="absolute -left-[41px] bg-primary-600/30 dark:bg-primary-900/30 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Diploma in Computer Science</h4>
                  <span className="text-sm font-mono text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Completed</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">Mother Theresa Engineering College</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Pedapalli, Karimnagar, Telangana</p>

                <h5 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <BookOpen size={16} className="mr-2" /> Key Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Fundamentals of Programming'].map(course => (
                    <span key={course} className="text-xs px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                      {course}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="flex items-center text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            <Award className="mr-3 text-primary-600" /> Certifications
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map(cert => (
              <Card key={cert.id} className="hover:border-primary-500/50 transition-colors p-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">{cert.title}</h4>
                      <p className="text-primary-600 text-sm font-medium">{cert.issuer}</p>
                    </div>
                    <Award className="text-slate-400 flex-shrink-0 ml-2" size={20} />
                  </div>

                  {cert.image && (
                    <div className="w-full rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto object-contain max-h-48 sm:max-h-60"
                      />
                    </div>
                  )}

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;