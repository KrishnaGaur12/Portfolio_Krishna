import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 bg-[#f6f8fd] relative overflow-hidden flex justify-center px-6 border-b border-black/20">
      {/* Background "ABOUT" Text - Parallax Float */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.07] animate-float-slow">
         <span className="font-pixel text-[8rem] md:text-[12rem] lg:text-[15rem] leading-none text-space-cadet">ABOUT</span>
      </div>

      <div className="max-w-4xl w-full relative z-10 pt-20">
        
        {/* Pixel Heading */}
        <div className="mb-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
           <h2 className="font-pixel text-2xl md:text-4xl text-black tracking-tighter">
             — About Me
           </h2>
        </div>

        {/* Content */}
        <div className="space-y-8 font-jetbrains text-space-cadet/80 text-lg md:text-xl leading-relaxed max-w-3xl">
           <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             I am a <strong className="text-space-cadet">B.Tech CSE student</strong> at <strong className="text-space-cadet">ABES Engineering College</strong> (CGPA 7.7, graduating 2027), driven by a deep understanding of computer science fundamentals.
           </p>
           
           <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             My expertise lies in <span className="bg-[#FFEBA4] px-1 text-space-cadet font-bold inline-block">Data Structures & Algorithms</span>, <span className="bg-[#A4D4FF] px-1 text-space-cadet font-bold inline-block">Operating Systems</span>, and <span className="bg-[#FFC4C4] px-1 text-space-cadet font-bold inline-block">System Design</span>. I don't just write code; I design architectures that handle scale and performance.
           </p>

           <p className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
             Outside academics <strong className="text-space-cadet">I enjoy mentoring and building technical communities</strong>, which has played a big role in shaping my approach to learning and problem-solving.
           </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
