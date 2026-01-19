import React from 'react';
import { Code, Terminal, Database, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    icon: <Code size={28} strokeWidth={2.5} />,
    title: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    id: 'backend',
    icon: <Terminal size={28} strokeWidth={2.5}  />,
    title: "Backend & Sys",
    skills: ["Spring Boot", "Node.js", "Express", "Docker", "Linux"]
  },
  {
    id: 'database',
    icon: <Database size={28} strokeWidth={2.5}  />,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    id: 'ai',
    icon: <Cpu size={28} strokeWidth={2.5}  />,
    title: "AI / ML (Applied)",
    skills: ["OpenCV", "BERT", "Transformers", "NumPy", "Pandas"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-24 bg-gray-200 dark:bg-[#18202f] text-space-cadet dark:text-cream-50 px-6 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
            <div>
                <h2 className="font-pixel text-4xl md:text-6xl uppercase leading-tight mb-2">
            Technical<br/>Arsenal
                </h2>
            </div>
            <div className="hidden md:block text-right font-mono text-xs opacity-60 mb-2">
                STACK & TOOLS<br/>UPDATED 2026
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white border-2 border-black p-5 h-full flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {/* Card Header */}
              <div className="mb-5">
                <div className="mb-3 text-black">
                    {cat.icon}
                </div>
                <h3 className="font-pixel text-lg font-bold">{cat.title}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto content-start">
                {cat.skills.map(skill => (
                    <span 
                        key={skill}
                        className="px-3 py-2 bg-gray-100 border border-gray-200 text-sm font-mono text-gray-700 rounded-sm hover:bg-gray-200 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
