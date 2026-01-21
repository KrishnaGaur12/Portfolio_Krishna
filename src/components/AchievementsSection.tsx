import React, { useState, useEffect } from 'react';
import { Trophy, Award, Code, Cloud, Medal, Target, Star, Globe, Cpu, Zap, ChevronRight } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "Tata Imagination",
    subtitle: "National Semi-Finalist",
    description: "Top 2.27% among 3.12 Lakh+ participants.",
    icon: <Trophy size={48} />,
    color: "from-indigo-500 to-purple-600",
    accent: "text-yellow-300",
    stat: "Top 2%"
  },
  {
    id: 2,
    title: "Paranox 2.0",
    subtitle: "Top 40 Finalist",
    description: "Selected from 20,000+ national participants.",
    icon: <Target size={48} />,
    color: "from-rose-500 to-red-600",
    accent: "text-white",
    stat: "#40"
  },
  {
    id: 3,
    title: "Ardethon '24",
    subtitle: "3rd Place Winner",
    description: "Built an AI-based solution beating 100+ teams.",
    icon: <Medal size={48} />,
    color: "from-emerald-500 to-teal-600",
    accent: "text-amber-300",
    stat: "3rd"
  },
  {
    id: 4,
    title: "Google Cloud",
    subtitle: "Arcade Legend",
    description: "Mastered GCP, BigQuery, Kubernetes, & AI/ML labs.",
    icon: <Cloud size={48} />,
    color: "from-blue-500 to-cyan-500",
    accent: "text-white",
    stat: "Elite"
  },
  {
    id: 5,
    title: "CodeChef / LeetCode",
    subtitle: "Problem Solving",
    description: "Global Rank 74 (Starters 211). Solved 450+ DSA problems.",
    icon: <Code size={48} />,
    color: "from-orange-500 to-amber-600",
    accent: "text-white",
    stat: "1600+"
  },
  {
    id: 6,
    title: "Naukri Young Turks",
    subtitle: "AIR 1391 (AI Track)",
    description: "Distinction among 500,000+ national participants.",
    icon: <Award size={48} />,
    color: "from-pink-500 to-rose-500",
    accent: "text-white",
    stat: "AIR 1391"
  },
  {
    id: 7,
    title: "Oracle GenAI",
    subtitle: "Professional",
    description: "Certified in Generative AI & Data Analytics (2025).",
    icon: <Cpu size={48} />,
    color: "from-slate-700 to-slate-900",
    accent: "text-cyan-400",
    stat: "Certs"
  }
];

const AchievementsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      id="achievements" 
      className="w-full py-24 bg-[#0a0f18] text-white overflow-hidden relative font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-4 tracking-tight">
                Achievements
             </h2>
             <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Milestones in my coding journey, from hackathons to global rankings.
             </p>
        </div>
        
        {/* 3D Carousel Container */}
        <div className="relative w-full h-[500px] flex justify-center items-center perspective-1000">
             {achievements.map((item, index) => {
                 // Calculate circular distance
                 let offset = index - activeIndex;
                 const len = achievements.length;
                 // Adjust offset to find shortest path in circular array
                 if (offset > len / 2) offset -= len;
                 if (offset < -len / 2) offset += len;

                 const isActive = offset === 0;
                 const absOffset = Math.abs(offset);
                 
                 // Visibility range - show more cards for the "fan" loop effect
                 if (absOffset > 3) return null; 

                 // Styles calculation
                 let transform = '';
                 let zIndex = 20 - absOffset;
                 let opacity = isActive ? 1 : Math.max(0.6, 1 - absOffset * 0.2); // More visible side cards
                 
                 // Custom 3D positioning matching reference (Tighter overlap)
                 if (isActive) {
                     transform = 'translateX(0) translateZ(200px) rotateY(0deg) scale(1.1)';
                 } else {
                     // Tighter spacing (140px) to create overlap like the reference image
                     const translateX = offset * 180; 
                     // Move back in Z
                     const translateZ = -absOffset * 100; 
                     // Rotate inwards
                     const rotateY = offset * -15; // Negative rotation for right, positive for left
                     transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(0.9)`;
                 }

                 return (
                     <div 
                        key={item.id}
                        className={`
                            absolute w-[280px] md:w-[320px] h-[420px] rounded-[3rem] p-6 
                            transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                            cursor-pointer shadow-2xl overflow-hidden border-[3px] border-white/10
                            ${'bg-gradient-to-b ' + item.color}
                        `}
                        style={{
                            transform,
                            zIndex,
                            opacity,
                        }}
                        onClick={() => handleCardClick(index)}
                     >
                         {/* Card Content - Clean & Minimal like Game Cards */}
                         <div className="relative z-10 flex flex-col h-full items-center text-center">
                             
                             {/* Top Badge */}
                             <div className="w-full flex justify-between items-center mb-6">
                                 <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{item.stat}</span>
                                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                     <Star size={14} className="fill-white text-white" />
                                 </div>
                             </div>

                             {/* Icon/Character Area */}
                             <div className="flex-1 flex items-center justify-center mb-4 scale-110">
                                 <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                                    {React.cloneElement(item.icon as React.ReactElement, { 
                                         size: 64,
                                         className: "text-white drop-shadow-md" 
                                     })}
                                 </div>
                             </div>

                             {/* Text Content */}
                             <div className="w-full bg-black/20 backdrop-blur-md rounded-3xl p-4 border border-white/5">
                                 <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                                     {item.title}
                                 </h3>
                                 <p className="text-xs text-white/70 font-medium">
                                     {item.subtitle}
                                 </p>
                             </div>
                         </div>
                         
                         {/* Glossy Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none rounded-[3rem]" />
                     </div>
                 );
             })}
        </div>
        
        {/* Navigation Indicators */}
        <div className="flex gap-2 mt-8">
             {achievements.map((_, i) => (
                 <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`
                        h-1.5 rounded-full transition-all duration-500
                        ${i === activeIndex ? 'w-12 bg-white' : 'w-2 bg-white/20'}
                    `}
                 />
             ))}
        </div>

      </div>
      
      {/* Global CSS for Perspective */}
      <style>{`
        .perspective-1000 {
            perspective: 1200px;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
