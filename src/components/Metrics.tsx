'use client';

import { useEffect, useRef, useState } from 'react';

const metrics = [
  {
    icon: '🛡️',
    stat: 'FedRAMP',
    description: 'Led organization through FedRAMP authorization process with GCC High deployment',
  },
  {
    icon: '🔒',
    stat: '100+',
    description: 'Security controls implemented and maintained across SOC 2, ISO 27001, and CMMC frameworks',
  },
  {
    icon: '⚡',
    stat: '80%',
    description: 'Reduction in manual compliance tasks through automation and AI-powered tooling',
  },
  {
    icon: '🤖',
    stat: 'AI-First',
    description: 'Built autonomous security operations including SIEM automation, threat detection, and compliance monitoring',
  },
  {
    icon: '📊',
    stat: 'Multi-Framework',
    description: 'Developed continuous compliance frameworks tracking controls across CMMC, SOC 2, ISO 27001, and HIPAA',
  },
  {
    icon: '🎯',
    stat: 'Zero',
    description: 'Critical findings in external audits through proactive security program management',
  },
];

export default function Metrics() {
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
    <section id="metrics" ref={ref} className="section bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">03 — Impact by the Numbers</span>
          <h2 className="section-title">Key Performance Metrics</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-card-border p-6 transition-all duration-500 hover:border-primary-500/30 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 75}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <span className="text-3xl mb-4 block">{metric.icon}</span>
                <div className="text-2xl font-bold gradient-text mb-2">{metric.stat}</div>
                <p className="text-sm text-zinc-400 leading-relaxed">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
