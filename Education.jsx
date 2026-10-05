import React from 'react';
import { education, personalInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-900/30 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Building strong foundations in computer science, software design, and artificial intelligence.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-1">
                  {/* Graduation Cap SVG */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 mb-1">
                    {education.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {personalInfo.college}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <span>{personalInfo.branch}</span>
                    <span>•</span>
                    <span>{personalInfo.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex md:flex-col items-start md:items-end justify-between md:justify-center shrink-0">
                <span className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {education.duration}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Expected: {personalInfo.graduationYear}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {education.description}
            </p>

            {/* Relevant Learning Areas */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Relevant Learning Areas & Core Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {education.relevantAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></span>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-indigo-500 transition-colors">
                        {area.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal pl-3.5">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
