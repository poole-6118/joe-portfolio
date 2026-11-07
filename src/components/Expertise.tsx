'use client';

import { useEffect, useRef, useState } from 'react';

const expertiseCategories = [
  {
    id: 1,
    title: 'Domain Expertise',
    items: [
      'Cloud Security (AWS, Azure, GCP)',
      'Governance, Risk & Compliance',
      'Security Operations (SIEM/SOAR)',
      'Identity & Access Management',
      'Vulnerability Management',
    ],
  },
  {
    id: 2,
    title: 'Industry Experience',
    tags: ['Federal Government', 'Defense / DoD', 'State & Local', 'Healthcare', 'Financial Services', 'SaaS / Technology'],
  },
  {
    id: 3,
    title: 'Cross-Functional Partnership',
    tags: ['Engineering', 'Product', 'Legal', 'HR', 'Operations', 'C-Suite', 'Auditors', 'Customers'],
  },
  {
    id: 4,
    title: 'Emerging Focus',
    items: [
      'AI Governance & Risk',
      'Agentic Systems Security',
      'LLM Security & Prompt Injection',
      'GCC High / IL4-IL5',
      'Zero Trust Architecture',
    ],
  },
  {
    id: 5,
    title: 'Core Skills',
    items: [
      'Security Program Development',
      'Compliance Gap Assessment',
      'Risk Assessment & Treatment',
      'Security Policy Development',
      'Vendor Risk Management',
      'Incident Response Planning',
      'Security Awareness Training',
      'Audit Preparation & Support',
    ],
  },
  {
    id: 6,
    title: 'Frameworks',
    tags: ['CMMC 2.0', 'NIST 800-171', 'SOC 2', 'ISO 27001', 'FedRAMP', 'HIPAA', 'CJIS', 'NIST CSF', 'PCI DSS', 'NIST 800-53'],
  },
  {
    id: 7,
    title: 'Tools & Platforms',
    tags: ['Wazuh SIEM', 'Drata', 'AWS Security Hub', 'JumpCloud', 'Okta', 'Azure Sentinel', 'SentinelOne', 'Lumos', 'Wiz'],
  },
  {
    id: 8,
    title: 'Cloud & Infrastructure',
    tags: ['AWS', 'Azure', 'GCC High', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Docker'],
  },
];

export default function Expertise() {
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
    <section id="expertise" ref={ref} className="section">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">02 — Experience Scope</span>
          <h2 className="section-title">Areas of Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCategories.map((category, index) => (
            <div
              key={category.id}
              className={`card transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary-500">
                  Category {String(category.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>

              {category.items ? (
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-primary-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {category.tags?.map((tag, i) => (
                    <span key={i} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
