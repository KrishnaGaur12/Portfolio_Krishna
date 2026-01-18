import React, { useState, useRef, useEffect } from 'react';
import { Star, Sparkles, Download, Music, Volume2, VolumeX } from 'lucide-react';
import FloatingCube from './FloatingCube';
import SvgCharacter from './SvgCharacter';
import { useLenis } from '../contexts/LenisContext';

const PortfolioHero: React.FC = () => {
  const lenis = useLenis();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleScrollTo = (targetId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(targetId, { duration: 1.5 });
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    if(audioRef.current) {
      if(isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio playback error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt auto-play on mount
    if(audioRef.current) {
      audioRef.current.volume = 0.4; // Set a default reasonable volume
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center p-2 md:p-4 overflow-hidden font-sans snap-start">
      {/* Main Card Container */}
      <div className="relative w-full h-full bg-glass-gradient rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col items-center justify-between border border-white/10 transition-all duration-300">
        
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        {/* Main Center Content */}
        <div className="relative flex-1 w-full flex flex-col items-center justify-center z-10 -mt-10">
          
          {/* Tagline */}
          <div className="mb-4 z-20 animate-fade-in-up">
             <span className="font-sans font-medium text-tan uppercase tracking-[0.2em] text-sm md:text-base border border-tan/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Aspiring Software Engineer | AI/ML Enthusiast
             </span>
          </div>

          {/* Massive Title */}
          <div className="relative z-20 text-center px-4 mb-4 overflow-hidden">
            <h1 className="font-serif font-light text-[12vw] md:text-[8rem] lg:text-[10rem] leading-[0.9] text-white tracking-tighter mix-blend-overlay opacity-90 select-none transition-all duration-300 animate-reveal">
              KRISHNA<br/>GAUR
            </h1>
            {/* Decorative Sparkle Icon */}
            <div className="absolute top-0 right-[10%] text-caput-mortuum animate-sparkle hidden md:block" style={{ animationDelay: '1.2s' }}>
                <Star size={64} className="fill-current" stroke="none" />
            </div>
          </div>

          {/* Description */}
          <div className="z-20 max-w-2xl text-center px-6 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="font-sans text-white/80 text-lg md:text-xl font-light leading-relaxed">
              Building scalable backend systems and AI-assisted products. 
              Focused on <span className="text-tan font-medium">performance</span>, <span className="text-tan font-medium">distributed architectures</span>, and real-world engineering impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="z-40 flex gap-4 mt-2 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
             <a href="#projects" onClick={handleScrollTo('#projects')} className="px-8 py-3 bg-black text-white font-pixel text-[10px] md:text-xs rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all border border-black">
               View My Work
             </a>
             <a href="#contact" onClick={handleScrollTo('#contact')} className="px-8 py-3 bg-transparent border-2 border-black text-black font-pixel text-[10px] md:text-xs rounded-full hover:bg-black/5 transition-all backdrop-blur-sm">
               Contact Me
             </a>
          </div>

          {/* Illustration Container */}
          {/* Positioned absolutely at bottom to peek up */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[350px] md:max-w-none md:w-[600px] h-[350px] md:h-[500px] z-30 pointer-events-none transition-all duration-300">
            <SvgCharacter />
          </div>

          {/* Floating Cubes - Updated Labels */}
          <FloatingCube label="Java" size={70} className="bottom-[15%] left-[5%] md:left-[10%] animate-float-slow scale-75 md:scale-100" animationDelay="0s" />
          <FloatingCube label="C++" size={60} className="bottom-[30%] right-[5%] md:right-[10%] animate-float-medium scale-75 md:scale-100" animationDelay="1s" />
          <FloatingCube label="AWS" size={50} className="top-[25%] left-[5%] md:left-[15%] animate-float-fast opacity-90 scale-75 md:scale-100" animationDelay="2s" />
          <FloatingCube label="Node" size={55} className="top-[30%] right-[5%] md:right-[15%] animate-float-slow opacity-90 scale-75 md:scale-100" animationDelay="1.5s" />

        </div>

        {/* Ambient Music Player */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-40 flex items-center gap-3">
            <audio ref={audioRef} loop>
                <source src="/music/ambient.mp3" type="audio/mp3" />
            </audio>
            <button 
                onClick={toggleAudio}
                className={`
                  p-3 rounded-full backdrop-blur-md border transition-all duration-500 flex items-center justify-center
                  ${isPlaying 
                    ? 'bg-space-cadet text-cream-50 border-space-cadet shadow-[0_0_20px_rgba(35,41,70,0.4)]' 
                    : 'bg-white/20 text-space-cadet border-white/30 hover:bg-white/40'}
                `}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
            </button>
            <div className={`
              hidden md:flex flex-col
              transition-all duration-500 
              ${isPlaying ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
            `}>
              <span className="text-[10px] font-bold tracking-widest text-space-cadet/60">SOUND</span>
              <span className="text-xs font-pixel text-space-cadet">ON</span>
            </div>
        </div>

        {/* Resume Button - Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-40">
             <a 
               href="/resume.pdf" 
               download="Krishna_Gaur_Resume.pdf"
               className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-pixel text-[10px] md:text-xs shadow-lg hover:bg-space-cadet hover:scale-105 transition-all duration-300"
             >
                Resume <Download size={14} />
             </a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioHero;