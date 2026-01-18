import React from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  description: string;
  bgColor: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, title, description, bgColor }) => {
  return (
    <section 
      id={id} 
      className={`w-full min-h-screen flex flex-col items-center justify-center p-8 md:p-16 ${bgColor} scroll-mt-0`}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-pastel-dark opacity-80 animate-float-slow" style={{ animationDuration: '8s' }}>
          {title}
        </h2>
        <div className="h-1 w-24 bg-pastel-pink mx-auto rounded-full opacity-60"></div>
        <p className="font-sans text-pastel-dark/70 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        
        {/* Placeholder Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
           {[1, 2, 3].map((i) => (
             <div key={i} className="aspect-square rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                <span className="font-serif italic text-pastel-dark/30 text-xl">Project 0{i}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;