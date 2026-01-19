import React, { useState, useEffect } from 'react';
import { useLenis } from '../contexts/LenisContext';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'achievements', 'contact'];
    
    const handleScroll = () => {
      // Trigger when 1/3 of viewport is into the section
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // If the top of the section has been passed by our threshold line
          if (element.offsetTop <= scrollPosition) {
            currentSection = section;
          }
        }
      }
      
      setActiveTab(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveTab(name);
    setIsMobileMenuOpen(false);
    
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Top Bar Container */}
      {/* Container is separate to allow logo to be far left and nav connected */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none md:pointer-events-auto">
        
        {/* LOGO - Absolutely positioned to far left */}
        <div 
             className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 font-pixel text-xl text-tan font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer select-none pointer-events-auto z-50 mix-blend-difference"
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
             KG.
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex bg-space-cadet/90 backdrop-blur-md rounded-full px-6 py-2 items-center gap-2 shadow-2xl border border-white/5 pointer-events-auto transition-colors duration-300">
          
          {/* Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name, item.href)}
                className={`
                  px-5 py-2 rounded-full font-pixel text-[10px] transition-all duration-300
                  ${activeTab === item.name 
                    ? 'bg-tan/20 text-tan shadow-lg transform scale-105 border border-tan/10' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger Button - Far Right */}
        <div className="md:hidden absolute right-6 top-0 pointer-events-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 bg-space-cadet/90 backdrop-blur-md rounded-full text-white shadow-xl border border-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-space-cadet/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.name, item.href)}
            className={`
              font-pixel text-2xl transition-all duration-300
              ${activeTab === item.name ? 'text-tan scale-110' : 'text-white/50'}
            `}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
