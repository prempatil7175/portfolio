import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryTicker from './components/TelemetryTicker';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
import SkillsEducation from './components/SkillsEducation';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.scroll-reveal');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-[#E50914] selection:text-white relative">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* Live Industrial Telemetry Ticker */}
        <TelemetryTicker />

        {/* 2. Major Projects Section */}
        <Projects />

        {/* 3. Recognition & Awards Section */}
        <Recognition />

        {/* 4. Skills & Education Section */}
        <SkillsEducation />

        {/* 5. Experience Timeline Section */}
        <Experience />
      </main>

      {/* 6. Footer & Contact Section */}
      <Footer />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;

