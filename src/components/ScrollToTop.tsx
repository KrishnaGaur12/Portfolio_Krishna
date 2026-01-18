import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../contexts/LenisContext';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px (past most of hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 
        p-4 bg-black text-white border border-white/10 rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]
        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
