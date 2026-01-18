import React, { useState } from 'react';

const experiences = [
  {
    id: 'Lead',
    company: 'Enigma Club',
    role: 'Lead',
    period: 'Aug 2024 - Aug 2025',
    description: 'Managed a programming community of 100+ members, boosting participation by 60%. Organized coding contests, hackathons, and workshops on DSA and System Design. Mentored juniors in competitive programming and problem-solving fundamentals.',
    stack: ['Leadership', 'Event Management', 'Git/GitHub', 'Mentorship'],
    verticalLabel: 'ENIGMA'
  },
  {
    id: 'abes',
    company: 'ABES EC',
    role: 'B.Tech Student',
    period: 'July 2023 - 2027',
    description: 'Pursuing Bachelor of Technology in Computer Science. Specialized in Data Structures, Operating Systems, and Distributed Systems. Maintained a CGPA of 7.7 while leading technical initiatives.',
    stack: ['Java', 'C++', 'System Design', 'DBMS'],
    verticalLabel: 'COLLEGE'
  }
];

const ExperienceSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeExp = experiences.find(e => e.id === (hoveredId || selectedId)) || experiences[0];

  return (
    <section id="experience" className="w-full py-24 bg-cream-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 relative">
          <h2 className="font-pixel text-4xl md:text-6xl text-space-cadet mb-4">
            CAREER<br/>HISTORY
          </h2>
          <div className="w-24 h-2 bg-space-cadet/20 mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Vertical Tabs (Selectors) */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 min-w-[150px]">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative h-[200px] w-[80px] lg:w-[100px] rounded-2xl flex items-center justify-center transition-all duration-300 border
                  ${(hoveredId || selectedId) === exp.id 
                    ? 'bg-white border-space-cadet/10 shadow-xl scale-105 z-10' 
                    : 'bg-white/40 border-transparent hover:bg-white/60 text-space-cadet/40'}
                `}
              >
                 <span className="font-pixel text-xs lg:text-sm tracking-widest text-space-cadet -rotate-90 whitespace-nowrap absolute">
                   {exp.verticalLabel}
                 </span>
                 <span className="absolute bottom-4 text-[10px] font-mono text-space-cadet/60 writing-vertical-lr mx-auto">
                   {exp.period.split(' - ')[0]}
                 </span>
              </button>
            ))}
          </div>

          {/* Active Content Card */}
          <div 
             key={activeExp.id}
             className="flex-1 bg-space-cadet rounded-[2rem] p-8 md:p-12 relative text-cream-50 shadow-2xl min-h-[400px] flex flex-col justify-between group overflow-hidden animate-slide-in-right"
          >
             
             {/* Top Row */}
             <div className="flex justify-between items-start mb-8 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                <span className="font-mono text-xs md:text-sm px-4 py-2 rounded-full border border-tan/20 bg-white/5 text-tan hover:bg-tan/10 transition-colors cursor-default">
                  {activeExp.period}
                </span>
                <div className="text-tan opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
             </div>

             {/* Main Info */}
             <div className="relative z-10">
               <h3 className="font-pixel text-3xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}>
                 {activeExp.company}
               </h3>
               <p className="font-pixel text-tan text-sm md:text-base mb-8 uppercase tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                 {activeExp.role}
               </p>
               <p className="font-mono text-white/70 text-lg leading-relaxed max-w-2xl mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                 {activeExp.description}
               </p>
             </div>

             {/* Tech Stack */}
             <div className="flex flex-wrap gap-3 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
               {activeExp.stack.map((tech, i) => (
                 <span key={i} className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono text-white/60 bg-white/5 hover:border-tan/50 hover:text-tan hover:bg-white/10 transition-all hover:-translate-y-1">
                   {tech}
                 </span>
               ))}
             </div>

             {/* Background Decoration */}
             <div className="absolute right-0 bottom-0 opacity-[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <span className="font-pixel text-[10rem] leading-none text-white">XP</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
