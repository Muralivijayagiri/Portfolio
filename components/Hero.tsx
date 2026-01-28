import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Briefcase, Twitter, Code2 } from 'lucide-react';
import { Button } from './UI';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Building innovative solutions across web, mobile, and emerging technologies";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      e.preventDefault();
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=muralivijayagiri1@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-mono text-sm font-medium">
              Available for Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Vijayagiri Muralidhar</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
              CSE Student & Full-Stack AI Developer
            </h2>

            <div className="h-16 sm:h-12 mb-8">
              <p className="text-lg text-slate-500 dark:text-slate-400 font-mono typing-cursor inline">
                {text}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="https://github.com/Muralivijayagiri" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muralidhar-vijayagiri-376bab370" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:muralivijayagiri1@gmail.com"
                onClick={handleMailClick}
                className="text-slate-500 hover:text-red-500 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Mail size={24} />
              </a>
              <a href="https://x.com/037Cs" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <Twitter size={24} />
              </a>
              <a href="https://leetcode.com/u/muralivijayagiri/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <Code2 size={24} />
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/Profilepic/Profile.jpg"
                alt="Vijayagiri Muralidhar"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 animate-breathing-shadow z-10"
              />

              {/* Floating Card 1: LeetCode (Bottom Left) */}
              <div className="hidden md:block absolute -bottom-4 -left-4 sm:bottom-0 sm:left-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <span className="font-bold text-lg">50+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">LeetCode</p>
                    <p className="font-bold text-slate-900 dark:text-white">Solved</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Projects (Top Right) */}
              <div className="hidden md:block absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <span className="font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Projects</p>
                    <p className="font-bold text-slate-900 dark:text-white">Completed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;