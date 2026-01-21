import React, { useState } from 'react';

const experiences = [
  {
    id: 'enigma',
    number: '01',
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
    number: '02',
    company: 'Future Endeavors',
    role: 'Developer',
    period: 'Future',
    description: ['Open to new opportunities and challenges in software engineering.'],
    stack: ['Full Stack', 'Cloud', 'AI'],
    verticalLabel: 'FUTURE'
  },
  {
    id: 'more',
    number: '03',
    company: 'More To Come',
    role: 'Innovator',
    period: 'Beyond',
    description: ['Continuing the journey of learning and building impactful solutions.'],
    stack: ['Innovation', 'Growth'],
    verticalLabel: 'COMING SOON'
  }
];

const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section id="experience" className="w-full py-24 bg-[#F3F5F8] px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 relative">
          <h2 className="font-pixel text-4xl md:text-6xl text-space-cadet mb-4 transition-colors duration-500">
            CAREER<br/>HISTORY
          </h2>
          <div className="w-24 h-2 bg-space-cadet/20 mt-4 rounded-full transition-colors duration-500"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {/* Experience Cards - Accordion Layout */}
            {experiences.map((exp) => {
              const isActive = activeId === exp.id;
              
              return (
                <div 
                  key={exp.id}
                  className={`
                    relative rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${isActive 
                      ? 'flex-[4] bg-space-cadet shadow-2xl skew-x-0' 
                      : 'flex-[0.5] bg-white border border-black/5 opacity-100 hover:flex-[0.8] cursor-pointer'}
                  `}
                  onClick={() => setActiveId(exp.id)}
                  onMouseEnter={() => setActiveId(exp.id)}
                >
                    {/* Active Content */}
                    <div className={`
                      w-full h-full p-8 md:p-12 flex flex-col relative
                      transition-all duration-500 delay-100
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute pointer-events-none'}
                    `}>
                         {/* Large Number Top Left */}
                         <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <span className="font-pixel text-white text-xl">{exp.number}</span>
                         </div>

                        <div className="mt-16 ml-2">
                             {/* Top Row */}
                             <div className="flex justify-between items-start mb-4">
                                <span className="font-jetbrains text-tan font-bold tracking-widest text-sm uppercase">
                                  {exp.period}
                                </span>
                             </div>

                             <h3 className="font-pixel text-3xl md:text-5xl mb-3 text-white leading-tight">
                               {exp.company}
                             </h3>
                             <p className="font-mono text-white/50 text-lg mb-8">
                               {exp.role}
                             </p>

                             <ul className="space-y-3 mb-8 max-w-2xl">
                                {exp.description.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 font-jetbrains text-white/70 text-sm md:text-base leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tan shrink-0" />
                                    {item}
                                  </li>
                                ))}
                             </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {exp.stack.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80 hover:bg-white/10 transition-colors cursor-default">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="absolute bottom-8 right-8">
                            <button className="flex items-center gap-2 text-tan hover:text-white transition-colors font-pixel text-sm group">
                                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Squeezed (Inactive) View */}
                    <div className={`
                      absolute inset-0 flex flex-col items-center py-10 transition-all duration-500
                      ${isActive ? 'opacity-0 invisible' : 'opacity-100 visible'}
                    `}>
                        {/* Number Circle at Bottom */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-space-cadet/5 flex items-center justify-center font-bold text-space-cadet font-pixel shadow-sm group-hover:bg-space-cadet group-hover:text-white transition-colors">
                            {exp.number}
                        </div>

                        {/* Vertical Text */}
                        <div className="flex-1 flex max-h-[80%] items-center justify-center writing-vertical-lr">
                          <span className="font-pixel text-3xl tracking-[0.2em] text-space-cadet/30 whitespace-nowrap uppercase select-none group-hover:text-space-cadet transition-colors">
                            {exp.verticalLabel}
                          </span>
                        </div>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
