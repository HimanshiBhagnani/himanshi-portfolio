import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Technology & AI",
      desc: "Deeply fascinated by artificial intelligence, machine learning models, and automation tools that solve real-world problems.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bg: "from-indigo-500/10 to-indigo-500/5",
      border: "border-indigo-500/20"
    },
    {
      title: "Web Engineering",
      desc: "Crafting performant, accessible, and responsive user interfaces with modern React, Vite, and Tailwind CSS ecosystems.",
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bg: "from-cyan-500/10 to-cyan-500/5",
      border: "border-cyan-500/20"
    },
    {
      title: "Digital Productivity",
      desc: "Architecting streamlined workflows, Git routines, and knowledge management systems to turn ideas into fast prototypes.",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bg: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/20"
    },
    {
      title: "Practical Projects",
      desc: "Bridging classroom theoretical knowledge with tangible code, building projects that add real value to users and peers.",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      bg: "from-purple-500/10 to-purple-500/5",
      border: "border-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curious Learner, Problem Solver & Builder
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A student driven by curiosity and purposeful engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Passionate B.Tech Student</span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                  {personalInfo.academicYears}
                </span>
              </h3>

              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium">
                    Current College
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                    {personalInfo.college}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-medium">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`glass-panel p-5 rounded-xl border ${pillar.border} bg-gradient-to-br ${pillar.bg} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
