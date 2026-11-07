'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Metrics from '@/components/Metrics';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Metrics />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
