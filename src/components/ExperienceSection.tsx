import React, { useState } from 'react';

const experiences = [
  {
    id: 'enigma',
    company: 'Enigma Programming Club',
    role: 'Lead',
    period: 'Aug 2024 – Aug 2025',
    description: [
      'Led a programming community of 100+ members, increasing active participation by ~60% through coding contests, hackathons, and technical workshops',
      'Conducted and mentored sessions on Data Structures & Algorithms, Java, and System Design',
      'Guided juniors through 200+ algorithmic problems on platforms like LeetCode and Codeforces',
      'Introduced standardized Git/GitHub workflows, improving collaboration and code quality across team projects'
    ],
    stack: ['Leadership', 'DSA', 'System Design', 'Git/GitHub'],
    verticalLabel: 'ENIGMA'
  },
  {
    id: 'future',
    company: 'More to Come',
    role: '',
    period: 'Future',
    description: [],
    stack: [],
    verticalLabel: 'FUTURE'
  }
];

const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section id="experience" className="w-full py-24 bg-[#F3F5F8] dark:bg-[#151c28] px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 relative">
          <h2 className="font-pixel text-4xl md:text-6xl text-space-cadet dark:text-cream-50 mb-4 transition-colors duration-500">
            CAREER<br/>HISTORY
          </h2>
          <div className="w-24 h-2 bg-space-cadet/20 dark:bg-white/20 mt-4 rounded-full transition-colors duration-500"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Experience Cards - Accordion Layout */}
          <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-[500px]">
            {experiences.map((exp) => {
              const isActive = activeId === exp.id;
              
              return (
                <div 
                  key={exp.id}
                  className={`
                    relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${isActive 
                      ? 'flex-[5] bg-space-cadet shadow-2xl skew-x-0 min-h-[450px] md:min-h-0' 
                      : 'flex-[1] md:flex-[0.5] bg-white dark:bg-[#1e293b] border border-black/5 dark:border-white/5 opacity-100 md:opacity-70 hover:opacity-100 hover:flex-[1.2] md:hover:flex-[0.8] cursor-pointer min-h-[80px] md:min-h-0'}
                  `}
                  onClick={() => setActiveId(exp.id)}
                  onMouseEnter={() => setActiveId(exp.id)}
                >
                    {/* Active Content */}
                    <div className={`
                      absolute inset-0 p-6 md:p-10 flex flex-col justify-between
                      transition-opacity duration-300 delay-200
                      ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}>
                        <div>
                             {/* Top Row */}
                             <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-xs px-4 py-1.5 rounded-full border border-tan/20 bg-white/5 text-tan">
                                  {exp.period}
                                </span>
                                <div className="text-tan opacity-50 animate-pulse-glow hidden md:block">
                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                             </div>

                             <h3 className="font-pixel text-2xl md:text-5xl mb-2 text-white leading-tight">
                               {exp.company}
                             </h3>
                             <p className="font-pixel text-tan text-sm md:text-base mb-8 uppercase tracking-wider">
                               {exp.role}
                             </p>

                             <ul className="space-y-4 mb-4">
                                {exp.description.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 font-jetbrains text-white/70 text-sm md:text-[15px] leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tan/60 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                             </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {exp.stack.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 border border-white/10 rounded-lg text-xs font-mono text-white/60 bg-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                    </div>

                    {/* Squeezed (Inactive) View */}
                    <div className={`
                      absolute inset-0 flex flex-col items-center justify-between py-8 transition-opacity duration-300
                      ${isActive ? 'opacity-0 invisible' : 'opacity-100 visible'}
                    `}>
                        {/* Desktop: Vertical Text */}
                        <div className="hidden md:flex flex-1 items-center justify-center writing-vertical-lr rotate-180">
                          <span className="font-pixel text-2xl md:text-4xl tracking-[0.15em] text-black dark:text-gray-400 whitespace-nowrap uppercase select-none">
                            {exp.verticalLabel}
                          </span>
                        </div>
                        
                        {/* Mobile: Horizontal Center Text */}
                        <div className="md:hidden flex flex-1 items-center justify-center w-full px-6">
                           <div className="flex justify-between items-center w-full">
                              <span className="font-pixel text-lg text-black dark:text-gray-200 uppercase tracking-widest">
                                {exp.verticalLabel}
                              </span>
                              <span className="text-black/50 dark:text-gray-500">
                                +
                              </span>
                           </div>
                        </div>
                        
                        <div className="hidden md:block writing-vertical-lr rotate-180">
                           <span className="font-mono text-xs text-black dark:text-gray-400 tracking-wider font-bold">
                              {exp.period.split('–')[0].trim()}
                           </span>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
