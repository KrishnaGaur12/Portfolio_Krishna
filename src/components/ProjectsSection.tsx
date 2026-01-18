import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: "ChargeShare",
    subtitle: "P2P EV Charging",
    description: "Monetized idle home chargers; targeted neighborhood use-cases. Implemented spatial indexing for real-time geolocation search.",
    stack: ["React", "Node.js", "MongoDB", "Maps API"],
    link: "#",
    github: "#"
  },
  {
    id: '02',
    title: "ByteCrush",
    subtitle: "Compression Engine",
    description: "Built a multi-threaded compression engine (Huffman/LZW). Achieved 50–60% compression on multi-GB files.",
    stack: ["C++", "STL", "Multithreading"],
    link: "#",
    github: "#"
  },
  {
    id: '03',
    title: "AlgoVerse",
    subtitle: "EdTech Platform",
    description: "Interactive educational platform for mastering complex algorithms. Features 50+ deep-dive problem solutions with visualizations.",
    stack: ["React.js", "Node.js", "C++"],
    link: "#",
    github: "#"
  },
   {
    id: '04',
    title: "Smart Safety",
    subtitle: "AI & Blockchain",
    description: "Comprehensive tourist safety ecosystem with AI-based route risk prediction models and blockchain-backed immutable SOS alert logs.",
    stack: ["Flutter", "Blockchain"],
    link: "#",
    github: "#"
  }
];

const ProjectsSection: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (marqueeRef.current) {
        // Calculate shift based on scroll position
        // The factor 0.2 determines the speed relative to scroll
        const scrollPosition = window.scrollY;
        const shift = scrollPosition * -0.3; // Moves left on scroll down
        marqueeRef.current.style.transform = `translateX(${shift}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="w-full py-32 bg-[#0a0f18] text-cream-50 px-6 relative overflow-hidden">
      
      {/* Scroll-driven Marquee */}
      <div className="absolute top-20 left-[-20%] w-[150%] pointer-events-none opacity-[0.04]">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform transition-transform duration-100 ease-out">
             {/* Repeated content to ensure coverage during scroll */}
             {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[12vw] font-pixel font-bold mr-12 block">
                  "BUILD" "SHIP" "REPEAT" "PROJECTS"
                </span>
             ))}
          </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
           <div>
             <h2 className="font-pixel text-4xl md:text-6xl leading-tight mb-4 text-cream-50">
               Selected<br/>Works
             </h2>
             <p className="font-mono text-cream-100/60 text-sm md:text-base max-w-md">
               A collection of projects showcasing my journey and technical capabilities.
             </p>
           </div>
           <div className="font-mono text-xs text-tan animate-pulse pb-2 hidden md:block">
             Scroll to explore →
           </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-tan/30 transition-all duration-300 group relative flex flex-col h-full min-h-[350px] hover:bg-white/10"
            >
               {/* Top Row: Number & Icons */}
               <div className="flex justify-between items-center mb-8">
                  <span className="font-pixel text-4xl text-white/5 group-hover:text-tan/20 transition-colors">
                    {project.id}
                  </span>
                  <div className="flex gap-3">
                     <a href={project.github} className="p-2 rounded-full bg-white/5 border border-white/10 text-cream-50/70 hover:text-tan hover:border-tan/40 transition-all">
                       <Github size={18} />
                     </a>
                     <a href={project.link} className="p-2 rounded-full bg-white/5 border border-white/10 text-cream-50/70 hover:text-tan hover:border-tan transition-all">
                       <ArrowUpRight size={18} />
                     </a>
                  </div>
               </div>

               {/* Tech Stack Pills */}
               <div className="flex flex-wrap gap-2 mb-6">
                 {project.stack.map(tech => (
                   <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-tan border border-white/5 text-[10px] font-pixel uppercase tracking-widest hover:bg-tan hover:text-space-cadet transition-colors">
                     {tech}
                   </span>
                 ))}
               </div>

               {/* Content */}
               <div className="mt-auto">
                  <h3 className="font-pixel text-2xl md:text-3xl mb-4 text-cream-50 group-hover:text-tan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-mono text-cream-100/60 text-sm md:text-base leading-relaxed group-hover:text-cream-50/90 transition-colors">
                    {project.description}
                  </p>
               </div>

               {/* Hover Gradient Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-tan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
