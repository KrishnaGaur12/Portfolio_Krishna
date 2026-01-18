import React from 'react';
import { Trophy, Award, TrendingUp, Code, Cloud, Medal, Target, ScrollText } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy size={32} />,
    title: "National Semi-Finalist",
    subtitle: "Tata Imagination Challenge '24",
    description: "Top 2.27% among 312,000+ participants."
  },
  {
    icon: <Target size={32} />,
    title: "Top 40 Finalist",
    subtitle: "Paranox 2.0 (2025)",
    description: "Chosen from 20,000+ participants & 1,500+ teams."
  },
  {
    icon: <Medal size={32} />,
    title: "3rd Place Winner",
    subtitle: "Ardethon Hackathon '24",
    description: "AI-based solution beating 100+ competing teams."
  },
  {
    icon: <Cloud size={32} />,
    title: "Legend Status",
    subtitle: "Google Cloud Arcade",
    description: "Mastered GCP, BigQuery, Kubernetes, & AI/ML labs."
  },
  {
    icon: <Code size={32} />,
    title: "1616 | 1519",
    subtitle: "CodeChef & LeetCode",
    description: "Global Rank 74 (Starters 211). Solved 450+ DSA problems."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "AIR 1391 (AI Track)",
    subtitle: "Naukri Young Turks '25",
    description: "Distinction among 500,000+ national participants."
  },
  {
    icon: <ScrollText size={32} />,
    title: "GenAI Professional",
    subtitle: "Oracle Cloud & Tata",
    description: "Certified in Generative AI & Data Analytics (2025)."
  },
  {
    icon: <Award size={32} />,
    title: "Linux Unhatched",
    subtitle: "Cisco Networking Academy",
    description: "Certified proficiency in Linux fundamentals."
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="w-full py-24 bg-space-cadet bg-glass-gradient relative overflow-hidden px-6">
       <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-pixel text-4xl md:text-5xl text-white text-center mb-16 uppercase">
             Achievements<br/>& <span className="text-tan text-3xl md:text-4xl">Recognition</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:scale-105 hover:bg-white/10 hover:border-tan/30 transition-all duration-300 group"
                  >
                     <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-5 text-tan group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(213,184,147,0.1)]">
                        {React.cloneElement(item.icon, { className: "animate-pulse-glow" })}
                     </div>
                     <h3 className="font-pixel text-lg md:text-xl text-white mb-2 group-hover:text-tan transition-colors min-h-[56px] flex items-center justify-center">
                        {item.title}
                     </h3>
                     <p className="font-mono text-tan/70 text-xs uppercase tracking-widest mb-3 border-b border-white/5 pb-3">
                        {item.subtitle}
                     </p>
                     <p className="text-cream-100/60 text-sm font-sans leading-relaxed group-hover:text-white/90 transition-colors">
                        {item.description}
                     </p>
                  </div>
              ))}
          </div>
       </div>
    </section>
  );
};

export default AchievementsSection;
