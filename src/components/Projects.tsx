'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Enterprise SIEM Automation',
    description: 'Deployed Wazuh SIEM with custom integrations for JumpCloud, SentinelOne, and cloud platforms. Built automated threat detection, compliance monitoring, and SOC alerting workflows.',
    tags: ['Wazuh', 'Python', 'AWS', 'Automation'],
    type: 'Security Operations',
    highlight: true,
  },
  {
    title: 'AI-Powered Compliance Assistant',
    description: 'Built autonomous AI agents for compliance monitoring, evidence collection, and audit preparation. Reduced manual compliance work by 80% while improving accuracy.',
    tags: ['Claude AI', 'Python', 'Automation', 'GRC'],
    type: 'AI / Automation',
    highlight: true,
  },
  {
    title: 'GCC High Cloud Migration',
    description: 'Led migration to Azure Government GCC High for defense contractor, implementing IL4/IL5 compliant architecture with proper boundary controls and monitoring.',
    tags: ['Azure', 'GCC High', 'CMMC', 'FedRAMP'],
    type: 'Cloud Security',
  },
  {
    title: 'Multi-Framework Compliance Platform',
    description: 'Architected continuous compliance framework tracking 300+ controls across CMMC, SOC 2, ISO 27001, and HIPAA with automated evidence collection.',
    tags: ['Drata', 'Compliance', 'Automation'],
    type: 'GRC',
  },
  {
    title: 'Identity Governance Program',
    description: 'Implemented enterprise identity governance with JumpCloud and Lumos, including automated access reviews, joiner/mover/leaver workflows, and SaaS discovery.',
    tags: ['JumpCloud', 'Lumos', 'IAM', 'Zero Trust'],
    type: 'Identity & Access',
  },
  {
    title: 'Security Awareness Platform',
    description: 'Developed and delivered security awareness training program with phishing simulations, reducing click rates by 60% and building security-first culture.',
    tags: ['Training', 'Phishing', 'Culture'],
    type: 'Security Culture',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">04 — Selected Work</span>
          <h2 className="section-title">Projects & Initiatives</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                project.highlight
                  ? 'gradient-border'
                  : 'bg-card border border-card-border hover:border-primary-500/30'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + index * 75}ms` }}
            >
              <div className={`p-6 ${project.highlight ? 'bg-card rounded-2xl m-[1px]' : ''}`}>
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-primary-400 uppercase tracking-wider">
                    {project.type}
                  </span>
                  {project.highlight && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-300">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
