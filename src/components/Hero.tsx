'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: '26', label: 'Years', sublabel: 'Industry Experience' },
  { value: 'Executive', label: 'Leadership', sublabel: 'Security Programs' },
  { value: 'AI', label: 'Transformation', sublabel: 'Pioneer' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Certifications badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-sm text-primary-300 font-mono">CISSP • CCSP • CRISC • CGE-P • AWS Security Specialty • ISO 27001 LA</span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="gradient-text">AI Security</span>
          <br />
          <span className="text-zinc-400">&</span>{' '}
          <span className="gradient-text">GRC Engineering</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Executive leader building enterprise security programs from the ground up — 
          and transforming organizations through AI-powered automation.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-background font-semibold hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 font-semibold transition-colors flex items-center gap-2"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
              <div className="text-xs text-zinc-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
