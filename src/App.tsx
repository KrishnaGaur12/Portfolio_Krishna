import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from './contexts/LenisContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import PortfolioHero from './components/PortfolioHero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(newLenis);

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <LenisContext.Provider value={lenis}>
        <div className="antialiased bg-space-cadet">
          <Navbar />
          <main className="w-full">
            <PortfolioHero />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <AchievementsSection />
            <ContactSection />
          </main>
          <ScrollToTop />
        </div>
      </LenisContext.Provider>
    </ThemeProvider>
  );
};

export default App;