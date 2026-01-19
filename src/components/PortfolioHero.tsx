import React, { useState, useRef, useEffect } from 'react';
import { Star, Sparkles, Download, Music, Volume2, VolumeX, ListMusic, Check } from 'lucide-react';
import FloatingCube from './FloatingCube';
import { useLenis } from '../contexts/LenisContext';

const tracks = [
  { id: 'english', label: 'English', src: '/music/english.mp3' },
  { id: 'punjabi', label: 'Punjabi', src: '/music/punjabi.mp3' },
  { id: 'japanese', label: 'Japanese', src: '/music/japanese.mp3' },
];

const PortfolioHero: React.FC = () => {
  const lenis = useLenis();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.src = currentTrack.src;
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Playback error:", e));
        }
    }
  }, [currentTrack]);

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
    <section id="home" className="relative w-full h-[100svh] md:h-screen md:min-h-[650px] flex items-center justify-center p-2 md:p-4 overflow-hidden font-sans snap-start">
      {/* Main Card Container */}
      <div className="relative w-full h-full md:min-h-0 bg-glass-gradient rounded-[1.5rem] md:rounded-[2.25rem] shadow-2xl overflow-hidden flex flex-col items-center justify-between border border-white/10 transition-all duration-300 py-10 md:py-0">
        
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        {/* Main Center Content */}
        <div className="relative flex-1 w-full flex flex-col items-center justify-center z-10 -mt-10">
          
          {/* Tagline */}
          <div className="mb-4 z-20 animate-fade-in-up">
             <span className="font-sans font-medium text-tan uppercase tracking-[0.2em] text-sm md:text-base border border-tan/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Aspiring SDE | AI/ML Enthusiast
             </span>
          </div>

          {/* Massive Title */}
          <div className="relative z-20 text-center px-4 mb-4 overflow-hidden">
            <h1 className="font-serif font-light text-[13vw] md:text-[6rem] lg:text-[7rem] leading-none text-white tracking-tighter mix-blend-overlay opacity-90 select-none transition-all duration-300 animate-reveal whitespace-nowrap">
              KRISHNA GAUR
            </h1>
            {/* Decorative Sparkle Icon */}
            <div className="absolute top-0 right-[12%] text-caput-mortuum animate-sparkle hidden md:block" style={{ animationDelay: '1.2s' }}>
                <Star size={56} className="fill-current" stroke="none" />
            </div>
          </div>

          {/* Description */}
          <div className="z-20 max-w-3xl text-center px-6 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="font-sans text-white/80 text-sm md:text-lg font-light leading-relaxed">
              I like building full-stack systems and scalable backends.<br className="hidden md:block"/>
              Currently exploring how <span className="text-tan font-medium">AI/ML </span>fits into real, <span className="text-tan font-medium">performance</span> driven engineering.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="z-40 flex gap-4 mt-2 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
             <a href="#projects" onClick={handleScrollTo('#projects')} className="px-6 py-3 md:px-8 md:py-3 bg-black text-white font-pixel text-xs rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all border border-black">
               View My Work
             </a>
             <a href="#contact" onClick={handleScrollTo('#contact')} className="px-6 py-3 md:px-8 md:py-3 bg-transparent border-2 border-black text-black font-pixel text-xs rounded-full hover:bg-black/5 transition-all backdrop-blur-sm">
               Contact Me
             </a>
          </div>

          {/* Illustration Container - Updated to Portfolio Typography */}
          <div className="absolute bottom-0 md:bottom-[2%] left-1/2 transform -translate-x-1/2 w-[85%] max-w-[500px] md:w-full md:max-w-[700px] z-30 pointer-events-none select-none">
            <svg viewBox="0 -60 820 380" className="w-full mx-auto h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`
                    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Mr+Dafoe&display=swap');
                    .font-block { font-family: 'Archivo Black', sans-serif; letter-spacing: -2px; }
                    .font-script { font-family: 'Mr Dafoe', cursive; }
                  `}
                </style>
                <filter id="glow-orange">
                   <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FF5500" floodOpacity="0.5" />
                </filter>
              </defs>

              {/* --- Orange Curve (Behind Text) --- */}
              <g transform="translate(180, 60)">
                 <path d="M0 20 Q 50 -45, 100 20 T 200 -30" stroke="#FF5500" strokeWidth="2" fill="none" />
              </g>

              {/* --- Main Text Group --- */}
              <g transform="translate(20, 160)">
                 
                 {/* 'p' with selection box */}
                 <g>
                    {/* Bounding Box */}
                    <rect x="-5" y="-95" width="85" height="120" fill="none" stroke="#FF5500" strokeWidth="1" opacity="0.6" />
                    <rect x="-8" y="-98" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="75" y="-98" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="-8" y="20" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="75" y="20" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />

                    {/* Cursor */}
                    <g transform="translate(50, 25) rotate(-10)">
                       <path d="M0 0 L12 36 L18 28 L28 38 L34 32 L24 22 L32 20 Z" fill="#FF5500" stroke="white" strokeWidth="2" />
                    </g>
                    
                    <text x="0" y="0" className="font-block" fontSize="140" fill="#FFFFFF">p</text>
                 </g>

                 {/* Smiley 'o' Graphic */}
                 <g transform="translate(100, -50)">
                     {/* Left Eye (Square-ish) */}
                     <rect x="10" y="-15" width="25" height="25" rx="8" fill="#FF5500" />
                     {/* Right Eye (Dash) */}
                     <rect x="50" y="-8" width="30" height="12" rx="4" fill="#FF5500" />
                     {/* Smile */}
                     <path d="M10 25 Q 45 65 80 25" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" fill="none" />
                 </g>

                 {/* 'rt' */}
                 <text x="210" y="0" className="font-block" fontSize="140" fill="#FFFFFF">rt</text>

                 {/* Big Script 'f' */}
                 {/* Positioned to overlap significantly */}
                 <text x="380" y="20" className="font-script" fontSize="280" fill="#FF5500" style={{ transform: 'rotate(-5deg)' }}>f</text>

                 {/* 'olio' with Bounding Box */}
                 <g transform="translate(480, 0)">
                    <text x="0" y="0" className="font-block" fontSize="140" fill="#FFFFFF">olio</text>
                    
                    {/* Bounding Box */}
                    <rect x="5" y="-90" width="280" height="110" fill="none" stroke="#FF5500" strokeWidth="1" opacity="0.6" />
                    <rect x="1" y="-93" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="281" y="-93" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="1" y="17" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="281" y="17" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    
                    {/* Mid points */}
                    <rect x="141" y="-93" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                    <rect x="141" y="17" width="8" height="8" fill="white" stroke="#FF5500" strokeWidth="1.5" />
                 </g>
              </g>

              {/* --- Orange Curve (Restored) --- */}
              {/* Moved to top for z-index */}

              {/* --- Decorative Tags (Removed) --- */}
              {/* Software Engineer Tag & #01 Tag Removed as per user request */}

            </svg>
          </div>

          {/* Floating Cubes - Updated Labels */}
          
          {/* Floating Lightning Bolt (Left - High) */}
          <div className="absolute top-[8%] left-[5%] md:top-[15%] md:left-[20%] animate-float-slow opacity-90 z-0 scale-75 md:scale-100" style={{ animationDelay: '0.5s', transform: 'rotate(-15deg)' }}>
             <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
               <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
                 <feDropShadow dx="0" dy="4" stdDeviation="15" floodColor="rgba(255, 215, 0, 0.6)" />
               </filter>
               <g transform="translate(20, 20)">
                 <path 
                   d="M35 0L5 40H25L15 80L55 35H35L60 10L35 0Z" 
                   fill="#FFD700" 
                   stroke="#D5B893" 
                   strokeWidth="2"
                   style={{ filter: "url(#glow-gold)" }}
                 />
               </g>
             </svg>
          </div>

          {/* Floating Lightning Bolt (Right - Low) */}
          <div className="absolute bottom-[18%] right-[5%] md:bottom-[45%] md:right-[20%] animate-float-delayed opacity-80 z-0 scale-75 md:scale-100" style={{ animationDelay: '1.5s', transform: 'rotate(10deg)' }}>
             <svg width="80" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
               <g transform="translate(20, 20)">
                  <path 
                    d="M35 0L5 40H25L15 80L55 35H35L60 10L35 0Z" 
                    fill="#FFD700" 
                    stroke="#D5B893" 
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(0px 4px 10px rgba(255, 215, 0, 0.5))" }}
                  />
               </g>
             </svg>
          </div>

          <FloatingCube label="Java" size={60} className="bottom-[5%] left-[5%] md:bottom-[15%] md:left-[10%] animate-float-slow scale-75 md:scale-100" animationDelay="0s" />
          <FloatingCube label="C++" size={50} className="bottom-[5%] right-[5%] md:bottom-[30%] md:right-[10%] animate-float-medium scale-75 md:scale-100" animationDelay="1s" />
          <FloatingCube label="AWS" size={40} className="top-[5%] left-[5%] md:top-[25%] md:left-[15%] animate-float-fast opacity-90 scale-75 md:scale-100" animationDelay="2s" />
          <FloatingCube label="Node" size={45} className="top-[5%] right-[5%] md:top-[30%] md:right-[15%] animate-float-slow opacity-90 scale-75 md:scale-100" animationDelay="1.5s" />
          <FloatingCube label="Python" size={55} className="top-[12%] left-[2%] md:top-[35%] md:left-[8%] animate-float-medium opacity-80 scale-75 md:scale-100" animationDelay="0.5s" />
          <FloatingCube label="AI/ML" size={48} className="bottom-[12%] right-[2%] md:bottom-[25%] md:right-[20%] animate-float-fast opacity-85 scale-75 md:scale-100" animationDelay="2.5s" />
          <FloatingCube label="Spring" size={42} className="top-[12%] right-[10%] md:top-[15%] md:right-[5%] animate-float-slow opacity-75 scale-75 md:scale-100" animationDelay="3s" />

        </div>

        {/* Audio Player with Playlist options */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-40 flex items-center gap-3">
            <audio ref={audioRef} loop />
            
            <div className="relative group flex items-center gap-2">
               {/* Playlist Toggle */}
               <div className={`
                 absolute bottom-full left-0 mb-4 w-32 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-bottom-left
                 ${showPlaylist ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
               `}>
                  <div className="p-2 space-y-1">
                    {tracks.map(track => (
                        <button
                        key={track.id}
                        onClick={() => {
                            setCurrentTrack(track);
                            setIsPlaying(true);
                            setShowPlaylist(false);
                            // Explicitly play when changing track via click
                            if(audioRef.current) {
                                audioRef.current.src = track.src;
                                audioRef.current.play();
                            }
                        }}
                        className={`
                            w-full flex items-center justify-between px-3 py-2 text-[10px] md:text-xs font-pixel rounded-lg text-left transition-colors
                            ${currentTrack.id === track.id ? 'bg-space-cadet text-white' : 'text-space-cadet hover:bg-space-cadet/10'}
                        `}
                        >
                        {track.label}
                        {currentTrack.id === track.id && <div className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" />}
                        </button>
                    ))}
                  </div>
               </div>

               <button 
                   onClick={() => setShowPlaylist(!showPlaylist)}
                   className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-space-cadet hover:bg-white/30 transition-all active:scale-95"
                   title="Select Music"
               >
                  <ListMusic size={18} />
               </button>

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
            </div>

            {/* Status Text with Smooth Transition */}
            <div className="hidden md:block relative h-10 w-64 overflow-hidden pointer-events-none">
                {/* OFF State Message */}
                <div className={`
                    absolute inset-0 flex items-center transition-all duration-700 ease-spring
                    ${!isPlaying ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-8 blur-sm'}
                `}>
                    <div className="flex items-center gap-2 text-space-cadet animate-pulse-slow">
                        <span className="text-xs md:text-sm font-bold tracking-wide drop-shadow-sm">
                           ← Turn on music for better experience
                        </span>
                    </div>
                </div>

                {/* ON State Message */}
                <div className={`
                    absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-spring
                    ${isPlaying ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}
                `}>
                    <span className="text-[10px] font-bold tracking-widest text-space-cadet/60 uppercase">Now Playing</span>
                    <span className="text-xs font-pixel text-space-cadet">{currentTrack.label}</span>
                </div>
            </div>
        </div>

        {/* Resume Button - Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-40">
             <a 
               href="https://drive.google.com/file/d/15VdKOyEtDIIa3I5VzvnpGYcSN7yROE_H/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
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