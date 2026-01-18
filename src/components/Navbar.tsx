import React, { useState, useEffect } from 'react';
import { useLenis } from '../contexts/LenisContext';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const lenis = useLenis();

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveTab(name);
    
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
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="bg-space-cadet/90 backdrop-blur-md rounded-full p-2 flex items-center gap-1 shadow-2xl border border-white/5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.name, item.href)}
            className={`
              px-6 py-3 rounded-full font-pixel text-[10px] md:text-xs transition-all duration-300
              ${activeTab === item.name 
                ? 'bg-tan/20 text-tan shadow-lg transform scale-105 border border-tan/10' 
                : 'text-white/50 hover:text-white hover:bg-white/5'}
            `}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
