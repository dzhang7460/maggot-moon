import { useState, useEffect, useCallback } from 'react';
import { ResistanceProvider, useResistance } from './context/ResistanceContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LeaderSection } from './components/LeaderSection';
import { MoonSection } from './components/MoonSection';
import { PuritySection } from './components/PuritySection';
import { ResistanceGallery } from './components/ResistanceGallery';
import { Footer } from './components/Footer';
import { Fly } from './components/Fly';

function AppContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const { isGlitched } = useResistance();

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sections = ['hero', 'leader', 'moon', 'purity', 'gallery'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        isGlitched
          ? 'resistance-mode resistance-static resistance-bg glitched'
          : 'scanline-overlay bg-regime-black'
      }`}
    >
      <Fly />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection />
      <LeaderSection />
      <MoonSection />
      <PuritySection />
      <ResistanceGallery />
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ResistanceProvider>
      <AppContent />
    </ResistanceProvider>
  );
}
