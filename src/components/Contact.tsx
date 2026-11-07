'use client';

import { useEffect, useRef, useState } from 'react';

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: 'Email',
    value: 'joe.poole@securityblox.co',
    href: 'mailto:joe.poole@securityblox.co',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/jpoole6118',
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="section bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">05 — Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
            Whether you need help with compliance, security architecture, or AI governance — 
            I&apos;m here to help your organization build resilient security programs.
          </p>
        </div>

        {/* Contact methods */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-card border border-card-border hover:border-primary-500/50 transition-all w-full sm:w-auto"
            >
              <span className="text-primary-400 group-hover:text-primary-300 transition-colors">
                {method.icon}
              </span>
              <div className="text-left">
                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                  {method.label}
                </div>
                <div className="text-white font-medium">{method.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="mailto:joe.poole@securityblox.co?subject=Let's Connect"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-blue hover:from-primary-500 hover:to-blue-500 transition-all font-semibold text-lg glow-hover"
          >
            Start a Conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
