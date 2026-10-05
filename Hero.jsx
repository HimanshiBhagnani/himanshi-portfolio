import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative gradient glow orbs in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 dark:bg-indigo-600/25 rounded-full blur-3xl pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-blob [animation-delay:2s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-blob [animation-delay:4s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Intro & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
                Open to Internships & Projects
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">
                Hello, World! I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="text-gradient hover:opacity-95 transition-opacity">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 tracking-tight pt-1">
                {personalInfo.tagline}
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group cursor-pointer"
              >
                <span>View Projects</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Links / Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500 font-mono">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Modern Developer Card / Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-panel rounded-2xl p-6 shadow-2xl relative border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-500 group">
              {/* Window dots */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">developer.config.json</span>
              </div>

              {/* Code Snippet / Profile Data */}
              <div className="pt-4 font-mono text-xs sm:text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <p className="text-slate-400 dark:text-slate-500 italic">// Developer Identity</p>
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">name</span>: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">role</span>: <span className="text-emerald-600 dark:text-emerald-400">"B.Tech Student"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">college</span>: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.college}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">interests</span>: [
                  <div className="pl-4 text-cyan-600 dark:text-cyan-400">
                    "Artificial Intelligence",<br/>
                    "Modern Web Development",<br/>
                    "Digital Productivity"
                  </div>
                  <span className="pl-0">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">currentlyBuilding</span>: <span className="text-amber-600 dark:text-amber-400">"Practical AI & Web Apps"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">readyForWork</span>: <span className="text-indigo-500 font-bold">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Ready to deploy on Vercel
                </span>
                <span className="font-mono text-[11px] text-slate-400">React + Vite</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center border border-slate-200/60 dark:border-slate-800/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
